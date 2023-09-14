/*
 * Licensed Materials - Property of IBM
 * "Restricted Materials of IBM"
 *
 * 5725-M39
 *
 * (C) COPYRIGHT IBM CORP. 2013,2020 All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp. 
 *
 */
define("custom/handlers/MSClassifyWorkOrderHandler", 
	   [ "dojo/_base/array",
	     "dojo/_base/declare",
	     "dojo/Deferred",
	     "dojo/promise/all",
	     "platform/logging/Logger",
	     "platform/model/ModelService",
	     "application/handlers/CommonHandler",
	     "platform/store/_ResourceMetadataContext",
	     "platform/util/PlatformConstants",
	     "platform/exception/PlatformRuntimeException",
	     "platform/warning/PlatformRuntimeWarning",
	     "application/business/WorkOrderObject",
	     "platform/handlers/_ApplicationHandlerBase",
	     "application/business/TaskObject",
	     "application/business/WorkOrderTimer",
	     "application/business/WorkOrderStatusHandler",
	     "platform/format/FormatterService",
	     "platform/translation/SynonymDomain",
	     "application/business/MaxVars",
	     "platform/translation/MessageService",
	     "application/business/DataSheetObject",
	     "dojo/_base/lang",
		 "platform/auth/UserManager",
	     ],
function(arrayUtil, declare, Deferred, all, Logger, ModelService, CommonHandler, ResourceMetadata, PlatformConstants, PlatformRuntimeException,
		PlatformRuntimeWarning, WorkOrderObject, ApplicationHandlerBase,TaskObject,WorkOrderTimer,WorkOrderStatusHandler,
		FormatterService,SynonymDomain,MaxVars,MessageService,DataSheetObject,lang,UserManager) {
	
	return declare( [ApplicationHandlerBase], {		

		pageStack : [],
		currentClass : null,
		topPage: false,

/**@memberOf custom.handlers.MSClassifyWorkOrderHandler */
		openTop : function (eventContext) {
			this.topPage = true;
			eventContext.application.showBusy();
			var woSet = eventContext.application.getResource('workOrder');
			var wo = woSet.getCurrentRecord();
			var classificationdesc = wo.get("classificationdesc");
			var classificationpath = wo.get("classificationpath");
		    wo.setPendingValue("classificationdesc", classificationdesc);		
		    wo.setPendingValue("classificationpath", classificationpath);		
			wo.set('classificationdesc', null);
			wo.set('classificationpath', null);
			//this.hideIfNull(eventContext);
			this.pageStack = [];
			this.currentClass = null;
			var csList = CommonHandler._getAdditionalResource(eventContext,"classstructure");
			//csList.filter("1==0");
		},		
		
		renderTop : function (eventContext) {
			if (this.topPage) {
				var filter = {'filterparent': 'nullvalue'};		
				this._refreshLevel(eventContext, filter);
			}
		},			
		
		getMyViewControl : function (eventContext) {
			
			if (eventContext._controlType=='View') {				
				return eventContext;
			}
			else {
				return eventContext.ui.getCurrentViewControl(); 
			}
		},
		
		openChildren : function(eventContext) {
			eventContext.application.showBusy();
			this.topPage = false;
			var filter="";
			var woSet = eventContext.application.getResource('workOrder');
			var wo = woSet.getCurrentRecord();
			var selectedRecord = CommonHandler._getAdditionalResource(eventContext,"classstructure").getCurrentRecord();
			if (selectedRecord) {
				this.currentClass = selectedRecord.get('classstructureid');
				wo.set('classificationdesc', selectedRecord.get('description'));
				wo.set('classificationpath', selectedRecord.get('hierarchypath'));				
				/*if (selectedRecord.haschildren) {
					filter = {'filterparent' : selectedRecord.classstructureid};
					this._refreshLevel(eventContext, filter);
				}*/
				//else {
					this.saveClassify(eventContext);
					return;					
				//}
			}
		},
		
		hideIfNull : function(eventContext){
			
			var workOrder = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
			if ((this.topPage) || (workOrder.get('classificationpath') == null || workOrder.get('classificationpath') == ""))
			{
				eventContext.setDisplay(false);
			}
			else {
				eventContext.setDisplay(true);
			}
			
		},
				
		_refreshLevel: function(eventContext, filter){
			var self = this;
			this._pushPage(eventContext, filter);
			var promise = this._fetchLevel(eventContext,filter);
			promise.then(function(newrecords){
				if (newrecords.count()>0){
					self.getMyViewControl(eventContext).refreshLists();
					/*if(!eventContext.ui.combinedViews)
						self.getMyViewControl(eventContext).refresh();*/
					self.getMyViewControl(eventContext).baseWidget.scrollTo(0,0);
				}else {
					// the haschildren flag was set but no recs, just stop here and save
					self.saveClassify(eventContext);	
				}
			}).otherwise(function(error){
					eventContext.application.hideBusy();
					Logger.trace("Error received finding next level: " + error);
			});				
										
		},
			
		_fetchLevel: function(eventContext, filter){

			Logger.trace("Fetching classstructure level using filter : " + filter);
			var deferred =  new Deferred();			
			
			ModelService.filtered('classstructure', null, filter, 1000, false, true).then(function (dataSet) {
				dataSet.resourceID = 'classstructure';
				dataSet.sort('classificationid');
				eventContext.application.addResource(dataSet);
				deferred.resolve(dataSet);
			}).otherwise(function(e){
				deferred.reject(new PlatformRuntimeWarning('error fetching classstructure info'));
			});
			
			return deferred.promise;
		}, 
		
		_pushPage : function (eventContext, filter) {
			var workOrder = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
			var page = { filter : filter,
						 classstructureid : this.currentClass, 
						 classificationdesc : workOrder.get('classificationdesc'),
						 classificationpath : workOrder.get('classificationpath')
						};
			this.pageStack.push(page);
		},		
		
		handleClassifyBack : function(eventContext) {
			//note, for this event 'this' is the view, not this handler
			var thisHandler = this.application['custom.handlers.MSClassifyWorkOrderHandler'];
			if (thisHandler.pageStack.length > 1) {
				// drop the current one, and grab the parent and refresh
				thisHandler.pageStack.pop();
				var curPage = thisHandler.pageStack.pop();
				var wo = eventContext.application.getResource('workOrder').getCurrentRecord();
				thisHandler.currentClass = curPage.classstructureid;
				wo.set('classificationdesc', curPage.classificationdesc);
				wo.set('classificationpath', curPage.classificationpath);
				eventContext.application.showBusy();
				thisHandler._refreshLevel(eventContext, curPage.filter);				
			}
			else {
				thisHandler.cancelClassify(eventContext);				
			}
		},
				
		cancelClassify: function(eventContext) {
			var woSet = eventContext.application.getResource('workOrder');
			var wo = woSet.getCurrentRecord();
			WorkOrderObject.refreshClassDescription(wo).then(function(){
				eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);	
			}); 			
		},
		
    
		saveClassify: function(eventContext) {
			eventContext.application.showBusy();
			Logger.trace("Saving off the current classification");
			let statusChangeResource = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
			statusChangeResource.set("status", "PREPLAN");
			var woSet = eventContext.application.getResource('workOrder');
			var wo = woSet.getCurrentRecord();
			let self = this;
			var myUser = UserManager.getCurrentUser();
			let msg = "É necessário adicionar ao menos 2 fotos para continuar.";
			
			if (statusChangeResource.get("attachmentssizetoday") < 2 ) {
				throw new PlatformRuntimeException(msg);
			}	
			//wo.set('classstructureid', this.currentClass);
			//add by RAJ 18/09 hope works!
			wo.set('pd_inspquestion02', "Não");
			wo.set('pd_inspquestion03', this.currentClass);
			wo.setDateValue("pd_inspdate", this.application.getCurrentDateTime());
			wo.set("pd_inspector", myUser);
			self.preplan(eventContext);
			WorkOrderObject.updateSpecifications(wo).then(function(){
				self.commitWOStatusChange(eventContext);
				//eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
			}).otherwise(function(e){
				eventContext.application.hideBusy();
			}); 			
		},
		
		clearClassify: function(eventContext) {
			var self = this;
			var workOrder = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
			workOrder.set('classstructureid',null);
			workOrder.set('classificationpath', null);
			workOrder.set('classificationdesc', null);			
			workOrder.getModelDataSet("workOrderSpec", true).
		    then(function(workOrderSpecs){
		    	workOrderSpecs.deleteLocalAll();
		    	self.handleClassifyBack(eventContext.parentControl);
		    });
		},
		
		hideClassify: function(eventContext){
			if (!(this.pageStack.length > 1)) 
			{
				eventContext.setDisplay(false);
				eventContext.setVisibility(false);
			}			
		},
		
		hideClear: function(eventContext){
			if (this.pageStack.length > 1) 
			{
				eventContext.setDisplay(false);
				eventContext.setVisibility(false);			
			}
		},
		
		clearClassification : function(eventContext){
			Logger.trace("Clear classification header");
			var workOrder = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
			workOrder.set('classificationpath', '');
			workOrder.set('classificationdesc', '');
		},

	/*--------------- INICIO Funções MSStatusChangeHandler -----------------------------------*/   
	initEditStatusView : function(eventContext) {
		var workOrder = eventContext.getCurrentRecord();
		var statusChange = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();
		statusChange.setDateValue("changedate", this.application.getCurrentDateTime());
		statusChange.setNullValue("status");
		statusChange.setNullValue("statusdesc")
		statusChange.setNullValue("memo");
		eventContext.ui.application.toolWarningShown = false;
        try {
          if (statusChange.get('pd_inspector')) {statusChange.setNullValue("pd_inspector");}
          if (statusChange.get('pd_inspdate')) {statusChange.setNullValue("pd_inspdate");}
          if (statusChange.get('pd_inspquestion02')) {statusChange.setNullValue("pd_inspquestion02");}
          if (statusChange.get('pd_inspquestion03')) {statusChange.setNullValue("pd_inspquestion03");}
          if (statusChange.get('pd_inspector04')) {statusChange.setNullValue("pd_inspector04");}
          if (statusChange.get('ms_inspdate04')) {statusChange.setNullValue("ms_inspdate04");}
        } catch (error) {console.log(error+' initEditStatusView')}        
	},

	initEditStatusView02 : function(eventContext) {
		var myUser = UserManager.getCurrentUser();
		//var workOrder = eventContext.getCurrentRecord();
		var workOrderSet = eventContext.application.getResource("workOrder");
        var statusChange = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();
		if (workOrderSet.data.length >= 0) {
			for (const element in workOrderSet.data) {
				let workOrder = workOrderSet.data[element];
				
				let wonum = workOrder.get('wonum');
				if (workOrder.get('status') != null && workOrder.get("ms_insptype") != '1' &&
		 		workOrder.get("pd_inspdate") != null && workOrder.get("pd_inspquestion01") != null) {
					workOrderSet.filter("wonum",wonum);
				}
				this.mobileMaximoSpatial = workOrderSet.mobileMaximoSpatial;
				if (this.mobileMaximoSpatial != null && this.mobileMaximoSpatial.sketchTool != null) {
					this.mobileMaximoSpatial.sketchTool.clearSketches();				
				}
				ModelService.save(workOrderSet);
			};
		}
 
      },
	  
	cleanupEditStatusView : function(eventContext) {
		this._clearWoStatusFilter();
	},
	
	enableCommitButton : function(eventContext) {
		var workOrder = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
		if(!workOrder || workOrder.isErrored()) {
			eventContext.setDisplay(false);
			return;
		}
		eventContext.setDisplay(true);
	},
	
	changeStatusSkipDyanmicCheck : function(eventContext) {
		eventContext.ui.hideCurrentDialog();
		var handler = eventContext.application['application.handlers.StopTimerHandler'];
		
		if(eventContext.ui.getCurrentViewControl().id.indexOf('.StopWorkView')>-1){
			//stop time complete process
			handler.completeWorkHandler(eventContext,true);
		} else {
			//change status dialog
			this.commitWOStatusChange(eventContext,true);	
		}
	},
	
	/**
	 * Commit changes to WO Status (handle OK button clicked)
	 * @function
	 * @param {string} eventContext - javascript variables context.
	 */
	commitWOStatusChange: function(eventContext,skipDynamicCheck){
		
		var workOrder=eventContext.application.getResource('workOrder').getCurrentRecord();
		
		if( WorkOrderObject.isCalibration(workOrder, eventContext) ) {
			var doNotChangeStatus = false;
			if(!skipDynamicCheck){
				doNotChangeStatus = this.calibrationDynamicCheckForStatusChange(eventContext);	
			}
			if(doNotChangeStatus == true){
				return;
			}
		}
		
		eventContext.application.showBusy();
		
		var statusChange = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();
		var newStatus=statusChange.get("status");
		
		//Validate if status date change is lesser than last WO status change date
		if(workOrder.getAsDateOrNull('changestatusdate') > statusChange.getAsDateOrNull('changedate')){
			throw new PlatformRuntimeException('statusDateinFuture',[this.resolveStatusDate(workOrder.getAsDateOrNull('changestatusdate'))]);								
		}			
		
		if(!eventContext.application.ui.getCurrentViewControl().validate()){return;}

		var newInternalStatus = WorkOrderStatusHandler.getInstance().toInternalState(newStatus);

		//calibration validate
		if( WorkOrderObject.isCalibration(workOrder, eventContext) ) {
			//if new status is closed or comp, check if it has at least one actual tool
			if(newInternalStatus == "COMP"){
				if(workOrder.get("started")){
					this.ui.show("WorkExecution.CompWithTimerStartedDialog");
					return;
				}
				else if(CommonHandler._getAdditionalResource(eventContext,"workOrder.tasklist").data.length>0 && this._getTaskWithRunningTimer()){
					this.ui.show("WorkExecution.CompWOWithTaskTimerStartedDialog");
					return;
				}
				else {
					var dsnum = this._getIncompleteRequiredDatasheet(eventContext);
					if (dsnum != null){
						throw new PlatformRuntimeException('IncompleteDatasheetStatusChange',[dsnum]);
					}
				}
			}
			else if(newInternalStatus == "CAN"){
				if(workOrder.get("started")){
					this.ui.show("WorkExecution.CanWithTimerStartedDialog");
					return;
				}
				else if(CommonHandler._getAdditionalResource(this,"workOrder.tasklist").data.length>0 && this._getTaskWithRunningTimer()){
					this.ui.show("WorkExecution.CanWOWithTaskTimerStartedDialog");
					return;
				}
			}
			else if(newInternalStatus == "CLOSE"){
				var dsnum = this._getIncompleteRequiredDatasheet(eventContext);
				if (dsnum != null){
					throw new PlatformRuntimeException('IncompleteDatasheetStatusChange',[dsnum]);
				}
			}
			if(newInternalStatus == "COMP" || newInternalStatus == "CLOSED"){
				if(workOrder.get('actualtoollistsize')==null || workOrder.get('actualtoollistsize')==0){
					var orgid = workOrder.get('orgid');			
					var oslcmaxvars = eventContext.application.getResource("oslcmaxvars");	
					if(MaxVars.isStatusValidForTool(oslcmaxvars, orgid)==1){
						if(!eventContext.ui.application.toolWarningShown){
							eventContext.ui.application.toolWarningShown = true;
							eventContext.application.showMessage(MessageService.createStaticMessage('invalidtoolstatuswarn').getMessage());
							return;
							//throw new PlatformRuntimeWarning("invalidtoolstatuswarn");
						}
					}else if(MaxVars.isStatusValidForTool(oslcmaxvars, orgid)==2){
						throw new PlatformRuntimeException("invalidtoolstatuserror");
					}
				}
			}
		}

		//When the status change causes a save for a new workorder (no wonum yet)
		//hide the create and cancel buttons on the new work order page because
		//the save is done here.
		if(workOrder.wonum == null){
			var viewID = eventContext.application.ui.viewHistory[eventContext.application.ui.viewHistory.length-2].id;
			var activeView = eventContext.application.ui.getViewFromId(viewID);
			activeView.setFooterDisplay(false);
		}
		this._saveStatusChange(workOrder);
		this._clearWoStatusFilter();
	},
	
	_getIncompleteRequiredDatasheet: function(eventContext){
		// return null if there is no datasheet (this isn't a calibration workorder)
		var dsnum = null;
		var dsSet = eventContext.application.getResource('dataSheetResource');
		if (dsSet){
			var domainCalStatus = eventContext.application.getResource('domaincalstatus');
			dsnum = DataSheetObject.getIncompleteRequiredDatasheet(dsSet, domainCalStatus);
		}
		return dsnum;
	},
	
	commitTaskStatusChange: function(eventContext){
		var self = this;
		var wo = self.application.getResource('workOrder').getCurrentRecord();
		var currentTask = wo.tasklist.getCurrentRecord();
		var statusChange = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();
		var newStatus=statusChange.get("status");
		var newInternalStatus = WorkOrderStatusHandler.getInstance().toInternalState(newStatus);
		// if this workorder is flow controlled
		if(wo.get("flowcontrolled") && newInternalStatus == 'COMP') {
			return this.completeTask(eventContext, false);
		}
		//Validate if status date change is lesser than last WO status change date
		if(currentTask.getAsDateOrNull('changestatusdate') > statusChange.getAsDateOrNull('changedate')){
			throw new PlatformRuntimeException('statusDateinFuture',[this.resolveStatusDate(currentTask.getAsDateOrNull('changestatusdate'))]);								
		}	
		
		if(!eventContext.viewControl.validate()){
			return;
		}
		if(this._hasRunningTimer(currentTask)){
			if(newInternalStatus == "COMP"){
				this.ui.show("WorkExecution.CompTaskWithTimerStartedDialog");
				return;
			}
			else if(newInternalStatus == "CAN"){
				this.ui.show("WorkExecution.CanTaskWithTimerStartedDialog");
				return;
			}
		}			
		this._saveStatusChange(currentTask);
		this._clearWoStatusFilter();
	},

	
	// Handle Cancel button click on Change Status view
	discardStatusChange: function(workOrderCurrent){	
		let statusChangeResource = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
		this._clearWoStatusFilter();
		let self= this;
		//this.ui.hideCurrentView(PlatformConstants.CLEANUP);
		if(self.ui.getCurrentViewControl("WorkExecution.clearChange")){
			self.ui.getCurrentViewControl("WorkExecution.clearChange").application.ui.hideCurrentDialog();
		}
		this.ui.hideCurrentView(PlatformConstants.CLEANUP);
	},
	
	resolveWonum : function(control) {
		return [ CommonHandler._getAdditionalResource(this,"workOrder").getCurrentRecord().get('wonum') ];
	},
	
	resolveTaskAndWonum : function(control) {
		return [CommonHandler._getAdditionalResource(this,"workOrder.tasklist").getCurrentRecord().get("taskid"), 
				CommonHandler._getAdditionalResource(this,"workOrder").getCurrentRecord().get('wonum') ];
	},
	
	resolveActivityAndWonum : function(control){
		var startedWO = this._getStartedWO();
		
		return [startedWO.get('wonum'), 
				CommonHandler._getAdditionalResource(this,"workOrder").getCurrentRecord().get('wonum')];
		
	},

	// Handle Yes click to DynamicCalChangeStatus dialog
	DynamicCalChangeStatusYesClickHandler: function(caller){
		this.ui.hideCurrentDialog();
		var workOrder = CommonHandler._getAdditionalResource(this,"workOrder").getCurrentRecord();
		this._saveStatusChangeEsig(workOrder);
	},

	// Handle Yes click to complete WO with a started timer
	compTimerStartedYesClickHandler: function(caller){
		this.ui.hideCurrentDialog();
		
		var workOrder = CommonHandler._getAdditionalResource(this,"workOrder").getCurrentRecord();
		this._saveStatusChangeEsig(workOrder);
	},

	// Handle Yes click to complete Task with a started timer
	compTaskTimerStartedYesClickHandler: function(caller){
		this.ui.hideCurrentDialog();
		
		var currentTask = CommonHandler._getAdditionalResource(this,"workOrder.tasklist").getCurrentRecord();
		this._saveStatusChangeEsig(currentTask);
	},
	
	// Handle a No action response from a Yes/No dialog
	noActionDialogHandler: function(caller){
		this.ui.hideCurrentDialog();
	},
	
	// Handle Yes click to cancel WO with a started timer
	canTimerStartedYesClickHandler: function(caller){
		var workOrder = CommonHandler._getAdditionalResource(this,"workOrder").getCurrentRecord();
		
		this._handleCancelWOWithTimer(workOrder);
	},
	
	// Handle Yes click to cancel Task with a started timer
	canTaskTimerStartedYesClickHandler: function(caller){	
		var currentTask = CommonHandler._getAdditionalResource(this,"workOrder.tasklist").getCurrentRecord();

		this._handleCancelWOWithTimer(currentTask);
	},		
	
	// cancel timer on a WO
	_handleCancelWOWithTimer: function(workOrder){
		this.ui.hideCurrentDialog();
		
		var startedWO = this._getStartedWO();
		WorkOrderObject.cancelWorkWithTimer(startedWO);
		
		var woTimer = CommonHandler._getAdditionalResource(this,"workOrderTimer").getCurrentRecord();
		WorkOrderTimer.resetTimer(woTimer);
		
		this._saveStatusChangeEsig(workOrder);
	},
	
			
	_saveStatusChangeEsig: function(woOrTask){
		// check for esig
		var EsigHandler = this.application["platform.handlers.EsigHandler"];
		if (EsigHandler.isEsigRequired(this, woOrTask, 'status')){
			// do the esig
			EsigHandler.showEsig(this, this._saveStatusChange, [woOrTask]);
		}
		else{
			// call _saveStatusChangeFinal
			this._saveStatusChange(woOrTask);
			
		}
	},

	initEditStatusViewCustom : function(recordSet,statusChange) {
		//var workOrder = eventContext.getCurrentRecord();
		//var statusChange = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();
		var workOrder = recordSet;
		statusChange.setDateValue("changedate", null);
		statusChange.setNullValue("status");
		statusChange.setNullValue("statusdesc")
		statusChange.setNullValue("memo");
		//eventContext.ui.application.toolWarningShown = false;
		try {
		  if (statusChange.get('pd_inspector')) {statusChange.setNullValue("pd_inspector");}
		  if (statusChange.get('pd_inspdate')) {statusChange.setNullValue("pd_inspdate");}
		  if (statusChange.get('pd_inspquestion01')) {statusChange.setNullValue("pd_inspquestion01");}
		  if (statusChange.get('pd_inspquestion02')) {statusChange.setNullValue("pd_inspquestion02");}
		  if (statusChange.get('pd_inspquestion03')) {statusChange.setNullValue("pd_inspquestion03");}
		  if (statusChange.get('ms_inspector04')) {statusChange.setNullValue("ms_inspector04");}
		  if (statusChange.get('ms_inspdate04')) {statusChange.setNullValue("ms_inspdate04");}
		  if (statusChange.get('ms_inspquestion04')) {statusChange.setNullValue("ms_inspquestion04");}
		} catch (error) {console.log(error+' initEditStatusView')}        
	},

	successCallback:function(recordSet,statusChange) {
		var self = this;
		self.application.showBusy();
		console.log("Registro foi salvo");
		if(self.ui.getCurrentViewControl("WorkExecution.clearChange")){
			self.ui.getCurrentViewControl("WorkExecution.clearChange").application.ui.hideCurrentDialog();
		}
		statusChange.setNullValue('status');
		statusChange.setNullValue('attachmentssizetoday');
		self.initEditStatusViewCustom(recordSet,statusChange);		
		self.ui.hideCurrentView(PlatformConstants.CLEANUP);
		setTimeout(() => {
		  this.ui.show("WorkExecution.WorkItemsView");
		}, "500");
		//resolve();
	},

	failueCallback:function(error) {
		console.log("Registro não foi salvo");
		//reject(error);
	},

	_saveStatusChange: function(workOrderOrTask){
		var statusChange = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
		var previousValueSet = {
				status: workOrderOrTask.get('status'),
				statusDate: workOrderOrTask.getAsDateOrNull('statusDate'),
				memo: workOrderOrTask.get('memo')
		};
		var newStatus=statusChange.get("status");
		var memo = statusChange.get("memo");
		var statusDate = statusChange.getAsDateOrNull("changedate");
		
		var taskId = workOrderOrTask.get("taskid");
		var taskSet = null;

		var recordSet = workOrderOrTask.getParent()? workOrderOrTask.getParent().getOwner() :  workOrderOrTask.getOwner();
		
		//var EsigHandler = this.application["platform.handlers.EsigHandler"];
		//var woORtask = workOrderOrTask.getOwner();
		var self = this;
		self.application.showBusy();
		let workOrderCurrent = recordSet.getCurrentRecord();
		var pd_inspquestion01 = workOrderCurrent.get('pd_inspquestion01');
		var pd_inspquestion02 = workOrderCurrent.get('pd_inspquestion02');
		var pd_inspquestion03 = workOrderCurrent.get('pd_inspquestion03');
		var ms_inspwhy = workOrderCurrent.get('ms_inspwhy');
		var pd_inspdate = workOrderCurrent.get("pd_inspdate");
		var pd_inspector = workOrderCurrent.get("pd_inspector");

		var ms_inspdate04 = workOrderCurrent.get("ms_inspdate04");
		var ms_inspquestion04 = workOrderCurrent.get("ms_inspquestion04");
		var ms_inspector04 = workOrderCurrent.get("ms_inspector04");
		var oldStatus = workOrderCurrent.get("status");

		var typeInsp;
		var deferred = new Deferred();
		if (workOrderCurrent.get("ms_insptype") == null || workOrderCurrent.get("ms_insptype") == ""|| workOrderCurrent.get("ms_insptype") == undefined) {
			typeInsp = workOrderCurrent.get("ms_insptype");
		}else{
			typeInsp = workOrderCurrent.get("ms_insptype");
		}
		if (typeInsp == "1") {
			Logger.error("Eh uma confirmação de existencia");
			if(newStatus == "PRECANC"){
				if (taskId){ //If the parameter is a Task
					WorkOrderObject.taskChangeStatus(workOrderOrTask, newStatus, statusDate, memo);
				} else {
					taskSet = CommonHandler._getAdditionalResource(this,"workOrder.tasklist");
					WorkOrderObject.changeStatus(workOrderOrTask, newStatus, statusDate, memo, taskSet);
				}			
				var EsigHandler = this.application["platform.handlers.EsigHandler"];
				var woORtask = workOrderOrTask.getOwner();
				if (EsigHandler.isEsigRequired(this, woORtask, 'status')){
					workOrderOrTask.markAsModified('status');
					EsigHandler.plugCancelCallback(this, this._statusChangeRollback, [workOrderOrTask, taskSet, previousValueSet]);
				}
				if ((pd_inspquestion01 == "Não") && (pd_inspquestion02 == null) && (pd_inspquestion03 == null) &&(ms_inspwhy !=null)
				&& (pd_inspdate != null) && (pd_inspector !=null)  && (pd_inspdate != "") && (workOrderCurrent.get('status') == newStatus )){
					self.application.showBusy();
					ModelService.save(recordSet).then(function(woSet){
						self.application.showBusy();
						var wo = woSet.getCurrentRecord();
						self.successCallback(recordSet,statusChange);
					}).otherwise(function (error) {
						console.log('Erro ao salvar'+ error)
						deferred.reject(error);
						statusChange.set('status', oldStatus);
						self.initEditStatusViewCustom(recordSet,statusChange);
						self.discardStatusChange(workOrderCurrent);	
					});
				}else{
					statusChange.set('status', oldStatus);
					self.initEditStatusViewCustom(recordSet,statusChange);
					self.discardStatusChange(workOrderCurrent);	
				}
			}
			if(newStatus == "PREPLAN"){
				if (taskId){ //If the parameter is a Task
					WorkOrderObject.taskChangeStatus(workOrderOrTask, newStatus, statusDate, memo);
				} else {
					taskSet = CommonHandler._getAdditionalResource(this,"workOrder.tasklist");
					WorkOrderObject.changeStatus(workOrderOrTask, newStatus, statusDate, memo, taskSet);
				}			
				var EsigHandler = this.application["platform.handlers.EsigHandler"];
				var woORtask = workOrderOrTask.getOwner();
				if (EsigHandler.isEsigRequired(this, woORtask, 'status')){
					workOrderOrTask.markAsModified('status');
					EsigHandler.plugCancelCallback(this, this._statusChangeRollback, [workOrderOrTask, taskSet, previousValueSet]);
				}
				if ((pd_inspquestion01 == "Sim") && (pd_inspquestion02 == "Não") && (pd_inspquestion03 != null) 
				&& (pd_inspdate != null) && (pd_inspector !=null)  && (pd_inspdate != "") && (workOrderCurrent.get('status') == newStatus )){
					self.application.showBusy();
					ModelService.save(recordSet).then(function(woSet){
						self.application.showBusy();
						var wo = woSet.getCurrentRecord();
						self.successCallback(recordSet,statusChange);
					}).otherwise(function (error) {
						console.log('Erro ao salvar'+ error)
						deferred.reject(error);
						statusChange.set('status', oldStatus);
						self.initEditStatusViewCustom(recordSet,statusChange);
						self.discardStatusChange(workOrderCurrent);					
					});					
				}else{
					statusChange.set('status', oldStatus);
					self.initEditStatusViewCustom(recordSet,statusChange);
					self.discardStatusChange(workOrderCurrent);					}
			}
			if(newStatus == "PLANEJAR"){
				if (taskId){ //If the parameter is a Task
					WorkOrderObject.taskChangeStatus(workOrderOrTask, newStatus, statusDate, memo);
				} else {
					taskSet = CommonHandler._getAdditionalResource(this,"workOrder.tasklist");
					WorkOrderObject.changeStatus(workOrderOrTask, newStatus, statusDate, memo, taskSet);
				}				
				var EsigHandler = this.application["platform.handlers.EsigHandler"];
				var woORtask = workOrderOrTask.getOwner();
				if (EsigHandler.isEsigRequired(this, woORtask, 'status')){
					workOrderOrTask.markAsModified('status');
					EsigHandler.plugCancelCallback(this, this._statusChangeRollback, [workOrderOrTask, taskSet, previousValueSet]);
				}
				if ((pd_inspquestion01 == "Sim") && (pd_inspquestion02 == "Sim") && (pd_inspquestion03 == null) 
				&& (pd_inspdate != null) && (pd_inspector !=null) && (pd_inspdate != "") && (workOrderCurrent.get('status') == newStatus )){
					self.application.showBusy();
					ModelService.save(recordSet).then(function(woSet){
						self.application.showBusy();
						var wo = woSet.getCurrentRecord();
						self.successCallback(recordSet,statusChange);
					}).otherwise(function (error) {
						console.log('Erro ao salvar'+ error)
						deferred.reject(error);
						statusChange.set('status', oldStatus);
						self.initEditStatusViewCustom(recordSet,statusChange);
						self.discardStatusChange(workOrderCurrent);	
					});					
				}else{
					statusChange.set('status', oldStatus);
					self.initEditStatusViewCustom(recordSet,statusChange);
					self.discardStatusChange(workOrderCurrent);	
				}
			}
			}
			if (typeInsp == "2") {
				if ((ms_inspdate04 != null ) && (ms_inspquestion04  != null ) && (ms_inspector04 != null)
				&& (ms_inspquestion04  != "" ) && (ms_inspector04 != "")){
					self.application.showBusy();
					if (taskId){ //If the parameter is a Task
						WorkOrderObject.taskChangeStatus(workOrderOrTask, newStatus, statusDate, memo);
					} else {
						taskSet = CommonHandler._getAdditionalResource(this,"workOrder.tasklist");
						WorkOrderObject.changeStatus(workOrderOrTask, newStatus, statusDate, memo, taskSet);
					}				
					var EsigHandler = this.application["platform.handlers.EsigHandler"];
					var woORtask = workOrderOrTask.getOwner();
					if (EsigHandler.isEsigRequired(this, woORtask, 'status')){
						workOrderOrTask.markAsModified('status');
						EsigHandler.plugCancelCallback(this, this._statusChangeRollback, [workOrderOrTask, taskSet, previousValueSet]);
					}
					ModelService.save(recordSet).then(function(woSet){
						var wo = woSet.getCurrentRecord();
						self.successCallback(recordSet,statusChange);
					}).otherwise(function (error) {
						console.log('Erro ao salvar'+ error)
						deferred.reject(error);
						statusChange.set('status', oldStatus);
						self.initEditStatusViewCustom(recordSet,statusChange);
						self.discardStatusChange(workOrderCurrent);					
					});				
				}
	
			}
		
	},
	
	_statusChangeRollback: function(workOrderOrTask, taskSet, previousValueSet) {
		Logger.trace("[StatusChangeHandler] _statusChangeRollback ");
		workOrderOrTask.set('status', previousValueSet.status);
		delete workOrderOrTask.__changedAttributes['status'];
		workOrderOrTask.setDateValue('statusDate', previousValueSet.statusDate);
		delete workOrderOrTask.__changedAttributes['statusDate'];
		workOrderOrTask.setDateValue('changestatusdate', previousValueSet.statusDate);
		delete workOrderOrTask.__changedAttributes['changestatusdate'];
		workOrderOrTask.set('memo', previousValueSet.memo);
		delete workOrderOrTask.__changedAttributes['memo'];
		if(taskSet && taskSet.data.length > 0) {
			if(taskSet && taskSet.isFiltered()) {
				taskSet.clearFilterAndSort();
			}
			var inheritingTasks = taskSet.find("inheritstatuschanges==$1", true);
			var self = this;
			array.forEach(inheritingTasks, function(task){
				self._statusChangeRollback(task, null);
			});
		}
		workOrderOrTask.cancelCurrentTransaction();
		Logger.trace("[StatusChangeHandler] _statusChangeRollback status changed");
	},

	// if the current WO has a task with timer running and inherit status checked, returns that task. Returns null if no such task exists
	_getTaskWithRunningTimer: function(){
		var startedWO = this._getStartedWO();
		
		if(!startedWO){
			return null;
		}
		
		var taskSet = CommonHandler._getAdditionalResource(this,"workOrder.tasklist");	
		CommonHandler._clearFilterForResource(this, taskSet);
		var inheritingTasks = taskSet.find("inheritstatuschanges==$1", true);
		
		var startedTask=null;	
		
		var self=this;
		array.forEach(inheritingTasks, function(record){
			if(self._hasRunningTimer(record)){
				startedTask = record;
				return;
			}
		});
		
		
		return startedTask;
	},
	
	
	// checks if a task record has a running timer on it
	_hasRunningTimer: function(task){
		var startedWO = this._getStartedWO();
		
		if(startedWO && startedWO.get("wonum")==task.get("wonum") && startedWO.get("siteid")==task.get("siteid")){
			return true;
		}
		else{
			return false;
		}
		
	},
	
	// returns the WO with running timer, or null if timer is not started
	_getStartedWO: function(){
		var woTimer = CommonHandler._getAdditionalResource(this,"workOrderTimer").getCurrentRecord();
		var startedWOID = woTimer.get("workOrderId");
		
		if(!startedWOID){
			return null;
		}
		
		var woSet = CommonHandler._getAdditionalResource(this,"workOrder");
		return woSet.find("remoteid==$1", startedWOID)[0];
	},
	
	// Filter WO statuses to those available for selection
	filterWOStatus: function(eventContext){
		if(eventContext.application.ui.showAllStatus != null && 
			eventContext.application.ui.showAllStatus == true){
			var domainwostatus = CommonHandler._getAdditionalResource(eventContext,"domainwostatus");
			CommonHandler._clearFilterForResource(eventContext,domainwostatus);
			// filter unique values
			var filter=[];
			var statusvalues = [];
			for (var i=0; i < domainwostatus.count() ; i++) {
				var wostatus = domainwostatus.data[i];
				var statusvalue = wostatus.value;
				if (statusvalues.indexOf(statusvalue) == -1) {
					statusvalues.push(statusvalue);
					filter.push({remoteid : wostatus.getRemoteId()});
				}
			}
			domainwostatus.lookupFilter=filter;
			return;
		}
		var currentWO = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
		var actualLaborSet = CommonHandler._getAdditionalResource(eventContext,"workOrder.actuallaborlist");
		
		
		var woStatusDomain = this._filterStatus(currentWO);
		
		if(actualLaborSet.data.length>0){
			woStatusDomain.filter("maxvalue!=$1", "CAN");
		}
	},
	
	filterTaskStatus: function(eventContext){
		var currentTask = CommonHandler._getAdditionalResource(eventContext,"workOrder.tasklist").getCurrentRecord();
		var actualLaborSet = CommonHandler._getAdditionalResource(eventContext,"workOrder.actuallaborlist");
		
		var woStatusDomain = this._filterStatus(currentTask);
		
		if(actualLaborSet.find("actualtaskid==$1", currentTask.get("taskid"))>0){
			woStatusDomain.filter("maxvalue!=$1", "CAN");
		}
	},
	
	_filterStatus: function(record){
		var woStatusHandler = WorkOrderStatusHandler.getInstance();
		var currentStatus = record.get("status");
		var workorderOrg = record.get("orgid");
		var workorderSite = record.get("siteid");
		
		var foundOrgStatuses=false;
		var foundSiteStatuses=false;
		
		//Get the org specific statuses
		var woStatusDomain = this._clearWoStatusFilter();	
		woStatusDomain.filter("orgid==$1", workorderOrg);
		if (woStatusDomain.count() > 0) {
			Logger.log("found org specific statuses");
			foundOrgStatuses=true;
		} 
		
		//Get the site specific statuses
		var woStatusDomain = this._clearWoStatusFilter();	
		woStatusDomain.filter("siteid==$1", workorderSite);
		if (woStatusDomain.count() > 0) {
			Logger.log("found site specific statuses");
			foundSiteStatuses=true;
		} 
		
		//Get the valid states
		var woStatusDomain = this._clearWoStatusFilter();	
		var filter = woStatusHandler.statesFromAsDataSetFilter(currentStatus, 'value');
		woStatusDomain.filter(filter.query, filter.params);
		
		if (WorkOrderObject.isStarted(record))
		{
			woStatusDomain.filter("maxvalue!=$1 && maxvalue!=$2 && maxvalue!=$3", "WAPPR", "CAN", "CLOSE");
		}
		
		if (foundOrgStatuses && !foundSiteStatuses) {
			woStatusDomain.filter("orgid==$1", workorderOrg);
		} 
		else if (foundOrgStatuses && foundSiteStatuses) {
			woStatusDomain.filter("orgid==$1 && siteid==$2", workorderOrg, workorderSite);
		}else {
			woStatusDomain.filter("orgid==null");
		}
		return woStatusDomain;
	},
	
	enableCompleteTaskButton : function(eventContext) {
		var currentTask = eventContext.getCurrentRecord();
		var domainwostatus = CommonHandler._getAdditionalResource(eventContext,"domainwostatus");
		var externalComplete = SynonymDomain.resolveToDefaultExternal(domainwostatus, 'COMP');
		if(!currentTask.get("offlinestatus")) {
			currentTask.set("offlinestatus", currentTask.get("status"));
		}
		currentTask.set("statusdesc", WorkOrderStatusHandler.getInstance().toDescription(currentTask.get("offlinestatus")));
		currentTask.watch("status", function() {
			currentTask.set("offlinestatus", currentTask.get("status"));
		});
		
		if(!WorkOrderStatusHandler.getInstance().canPerformTransition(currentTask.get("offlinestatus"), externalComplete)) {
			eventContext.setDisplay(false);
			return;
		} else {
			var externalStatuses = SynonymDomain.resolveToExternal(domainwostatus, 'COMP');				
			for (var status in externalStatuses) {
				if (status == currentTask.get("offlinestatus")) {
					eventContext.setDisplay(false);
					return;
				}
			}
		}
		eventContext.setDisplay(true);
	},
	
	handleCompleteWorkClick : function(eventContext){
		return this.completeTask(eventContext, true);
	},
	
	completeTask: function(eventContext, isCompleteButtonCall) {
		/* Common method to perform COMP change status on flow controlled tasks
		 * eventContext - the event context
		 * ModelData task - Task to change status
		 * boolean isCompleteButtonCall - flag to know if method call comes from "Complete" button view
		 */
		var domainwostatus = CommonHandler._getAdditionalResource(eventContext,"domainwostatus");
		var externalComplete = SynonymDomain.resolveToDefaultExternal(domainwostatus, 'COMP');
		var self = this;
		var woSet = self.application.getResource('workOrder');
		var currentTask = woSet.getCurrentRecord().tasklist.getCurrentRecord();
		self.application.showBusy();
		TaskObject.complete(currentTask, this.application.getCurrentDateTime(), null)
		.then(function(wo) {
			if(isCompleteButtonCall) {
				eventContext.setDisplay(false);
			}
			else {
				self.ui.hideCurrentView();
			}
			task = wo.tasklist.getCurrentRecord();
			task.set('offlinestatus', WorkOrderStatusHandler.getInstance().toDefaultExternalLabel("COMP"));
			task.set("statusdesc", WorkOrderStatusHandler.getInstance().toDescription(task.get("offlinestatus")));
			self.application.hideBusy();
		})
		.otherwise(function(exception) {
			throw exception;
		});
	},
	
	_clearWoStatusFilter : function() {
		var woStatusDomain = this.application.getResource('domainwostatus');
		if(woStatusDomain.isFiltered()){
			woStatusDomain.clearFilterAndSort();
		}
		return woStatusDomain;
	},
	
	resolveStatusDate : function(statusdate) {
		var userLocale = this.application.getUserLocale();
		return [ FormatterService.toDisplayableValue(statusdate, "datetime", userLocale) ];
	},
	
	calibrationDynamicCheckForStatusChange : function(eventContext,internalStatus){
		var statusChange = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();
		
		var newStatus=internalStatus?internalStatus:statusChange.get("status");
		var newInternalStatus = WorkOrderStatusHandler.getInstance().toInternalState(newStatus);
		
		if(newInternalStatus != 'COMP' && newInternalStatus != 'CLOSE'){
			return false;
		}

		var wods = eventContext.application.getResource('dataSheetResource');
		var allDynamicChecksEntered = true;
		
		if(!wods || wods==null){
			//if no datasheets exist on the workorder, let it continue and change status
			return false;
		}
		
		//filter datasheetresource to only fetch datasheets on workorder
		var workOrder=eventContext.application.getResource('workOrder').getCurrentRecord();
		wods.clearFilterAndSort();
		wods.filter('wonum == $1 && siteid== $2',workOrder.wonum,workOrder.siteid);
				
				
		wods.data.forEach(function(dataSheet){
			if(allDynamicChecksEntered && allDynamicChecksEntered == true){
				var af = dataSheet.assetfunctionlist;
				var cp = dataSheet.calibrationpointlist;
				
				var afData = lang.isArray(af)? af : af.data;
				
				afData.forEach(function(assetFunction){
					var caldynamic = assetFunction.caldynamic;
					if(caldynamic && caldynamic==true){
						var dsplannum = assetFunction.dsplannum;
						var revisionnum = assetFunction.revisionnum;
						var instrseq = assetFunction.instrseq;
						var wodsnum = assetFunction.wodsnum;
						var wonum = assetFunction.wonum;
						var siteid = assetFunction.siteid;
						
						//stop timer complete
						if(lang.isArray(cp)){
							cp.forEach(function(calibrationPoint){
								if(calibrationPoint.dsplannum==dsplannum && calibrationPoint.revisionnum==revisionnum && 
										calibrationPoint.instrseq==instrseq && calibrationPoint.wodsnum==wodsnum && calibrationPoint.wonum==wonum &&
										calibrationPoint.siteid==siteid && calibrationPoint.isaverage==false)
								if(calibrationPoint.asfoundinput==null || calibrationPoint.asleftinput==null) {
									allDynamicChecksEntered = false;
									return;
								}
							});
						} else {
							//change status dialog complete
							cp.clearFilterAndSort();
							cp.filter('dsplannum == $1 && revisionnum == $2 && instrseq == $3 && wodsnum == $4 && wonum== $5 && siteid== $6 && isaverage == false',dsplannum,revisionnum,instrseq,wodsnum,wonum,siteid);

							cp.data.forEach(function(calibrationPoint){
								if(calibrationPoint.isNull('asfoundinput') || calibrationPoint.isNull('asleftinput')) {
									allDynamicChecksEntered = false;
									return;
								}
							});
						}
					}
				});
			}
		});
		
		var internalCurrentStatus = newInternalStatus; // it is pass maxstatus
		var isBrkOrMiss = false;
		if (internalCurrentStatus!= null && (internalCurrentStatus == 'BROKEN' || internalCurrentStatus == 'MISSING')){
			isBrkOrMiss=true;
		}
		
		var dynamicCheckComp = false;
		if (!allDynamicChecksEntered && !isBrkOrMiss && !dynamicCheckComp){
			this.ui.show('WorkExecution.DynamicCheckStatusChangeConfirm');
			return true;
		} else {
			return false;
		}
		
	},
	
	cancelClearChanges: function(eventContext) {
		this.savedEventContext = null;
		this.application.ui.hideCurrentDialog();
	},

/*--------------- FIM Funções MSStatusChangeHandler -----------------------------------*/   





/*--------------- INICIO Funções Antigas -----------------------------------*/    

	openPDWhy : function(eventContext) {
		eventContext.application.showBusy();
		this.topPage = false;
		var filter="";
		var woSet = eventContext.application.getResource('workOrder');
		var wo = woSet.getCurrentRecord();
		var selectedRecord = CommonHandler._getAdditionalResource(eventContext,"pdwhy").getCurrentRecord();
		
		if (selectedRecord) {
			this.currentClass = selectedRecord.get('pd_whynum');
			this.currentClassDesc = selectedRecord.get('pd_description');

			this.savePDWhy(eventContext);				
			return;
		}
	},

	savePDWhy: function(eventContext, skipDynamicCheck) {
		eventContext.application.showBusy();
		Logger.trace("Saving off the current reason");
		var woSet = eventContext.application.getResource('workOrder');
		let statusChangeResource = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
		statusChangeResource.set("status","PRECANC");
		var wo = woSet.getCurrentRecord();
		let self = this;
		var myUser = UserManager.getCurrentUser();
		let msg = "É necessário adicionar ao menos 2 fotos para continuar.";
		if (statusChangeResource.get("attachmentssizetoday") < 2 ) {
			throw new PlatformRuntimeException(msg);
		}		

		wo.set('pd_inspquestion01', "Não");
		wo.set('ms_inspwhy', this.currentClass);
		wo.set('pdwhy_description', this.currentClassDesc);
		wo.setDateValue("pd_inspdate", this.application.getCurrentDateTime());
		wo.set("pd_inspector", myUser);
		WorkOrderObject.updateSpecifications(wo).then(function(){
			self.commitWOStatusChange(eventContext, skipDynamicCheck);
			//eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
		}).otherwise(function(e){
			eventContext.application.hideBusy();
		});
	this.inherited(arguments);	 			
	},   

	openPDWhyReinsp: function(eventContext) {
		eventContext.application.showBusy();
		this.topPage = false;
		var filter="";
		var woSet = eventContext.application.getResource('workOrder');
		var wo = woSet.getCurrentRecord();
		let statusChangeResource = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
		statusChangeResource.set("status","PRECANC");
		var typeInsp;
		if (wo.get("ms_insptype") == null || wo.get("ms_insptype") == ""|| wo.get("ms_insptype") == undefined) {
			typeInsp = wo.get("ms_insptype");
		}else{
			typeInsp = wo.get("ms_insptype");
		}

	if (typeInsp == "1") {
		Logger.error("Eh uma confirmação de existencia");
		var selectedRecord = CommonHandler._getAdditionalResource(eventContext,"pdwhy").getCurrentRecord();
		if (selectedRecord) {
		this.currentClass = selectedRecord.get('pd_whynum');
		this.currentClassDesc = selectedRecord.get('pd_description');
			this.savePDWhyReinsp(eventContext);				
			return;
		}
		}else{
			this.savePDWhyReinsp(eventContext);			
		}

	},

	savePDWhyReinsp: function(eventContext, skipDynamicCheck) {
		Logger.trace("Saving off the current reason");
		let statusChangeResource = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
		statusChangeResource.set("status","PRECANC");
		var woSet = eventContext.application.getResource('workOrder');
		var wo = woSet.getCurrentRecord();
		var typeInsp;
		let self = this;
		if (wo.get("ms_insptype") == null || wo.get("ms_insptype") == ""|| wo.get("ms_insptype") == undefined) {
			typeInsp = wo.get("ms_insptype");
		}
		if (typeInsp == "1") {
			wo.set('ms_inspwhy', this.currentClass);
			wo.set('pdwhy_description', this.currentClassDesc);
		}
		let msg = "É necessário adicionar ao menos 2 fotos para continuar.";
		
		if (statusChangeResource.get("attachmentssizetoday") < 2 ) {
			throw new PlatformRuntimeException(msg);
		}	
		wo.set("ms_inspquestion04","Sim");
		wo.set('statusdesc', "Pré-Cancelado")
		wo.setDateValue("ms_inspdate04", this.application.getCurrentDateTime());
		var myUser = UserManager.getCurrentUser();
		wo.set("ms_inspector04", myUser);
		WorkOrderObject.updateSpecifications(wo).then(function(){
			self.commitWOStatusChange(eventContext);				
			//eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
		}).otherwise(function(e){
			eventContext.application.hideBusy();
		});
		this.inherited(arguments);	 			
	},  

	saveWOShowView: function (eventContext) {
		var workOrder = eventContext.application.getResource("workOrder");
		var deferred = new Deferred();
		ModelService.save(workOrder)
		.then(function (result) {
		eventContext.ui.showMessage("Inspeção salva!");
			deferred.resolve();
		}).otherwise(function (error) {
		deferred.reject(error);
		});

	},

	preplan: function (eventContext) {
		let statusChangeResource = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
		var statusChange = eventContext.getResource().getCurrentRecord();
		var attachments = eventContext.application.getResource("attachments");
		var statusdate = statusChange.get("changestatusdate");
		var attachments_crecord = CommonHandler._getAdditionalResource(eventContext,"attachments");
		attachments_crecord.filter("creationDate > $1", statusdate);
		let self = this;	 
		let attachmentssize = statusChange.get("attachmentssize");
		var myUser = UserManager.getCurrentUser();
 
		if (attachmentssize == '--') {
			statusChange.set("attachmentssize", "0");
			attachmentssize = statusChange.get("attachmentssize");
		}  
			  
		if (typeof attachmentssize == 'string') {
		  attachmentssize = parseInt(attachmentssize);
		}      
		let msg = "É necessário adicionar ao menos 2 fotos para continuar.";
		
		if (statusChangeResource.get("attachmentssizetoday") < 2 ) {
		 // throw new PlatformRuntimeException("ms_invalidstatusattachmenterror");
		  throw new PlatformRuntimeException(msg);
		} else {
		  statusChangeResource.set("status", "PREPLAN");
		  statusChange.set("status", "PREPLAN");
		  statusChange.set("pd_inspquestion01", "Sim");
		  statusChange.set("pd_inspquestion02", "Não");
		  statusChange.setDateValue("pd_inspdate",this.application.getCurrentDateTime());
		  statusChange.set("pd_inspector", myUser);
		}
		eventContext.application.showBusy();
		this.inherited(arguments);
	  },
  
	/*--------------- FIM Funções Antigas -----------------------------------*/   




				
	});
});