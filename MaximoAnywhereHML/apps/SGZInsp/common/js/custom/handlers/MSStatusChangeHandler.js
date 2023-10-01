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

define("custom/handlers/MSStatusChangeHandler", 
	   [ "dojo/_base/declare",
	     "platform/model/ModelService",
	     "dojo/_base/array",
	     "platform/handlers/_ApplicationHandlerBase",
	     "application/business/WorkOrderObject",
	     "application/business/TaskObject",
	     "application/business/WorkOrderTimer",
	     "application/business/WorkOrderStatusHandler",
	     "platform/exception/PlatformRuntimeException",
	     "platform/warning/PlatformRuntimeWarning",
	     "application/handlers/CommonHandler",
	     "platform/util/PlatformConstants",
	     "platform/format/FormatterService",
	     "platform/translation/SynonymDomain",
	     "platform/logging/Logger",
	     "application/business/MaxVars",
	     "platform/translation/MessageService",
	     "application/business/DataSheetObject",
	     "dojo/_base/lang",
		 "platform/auth/UserManager",
	     ],
function(declare, ModelService, array, ApplicationHandlerBase, WorkOrderObject, TaskObject, WorkOrderTimer, WorkOrderStatusHandler, PlatformRuntimeException, PlatformRuntimeWarning, CommonHandler, PlatformConstants, FormatterService,SynonymDomain, Logger, MaxVars, MessageService, DataSheetObject,lang,UserManager) {
	return declare( ApplicationHandlerBase, {
		
/**@memberOf custom.handlers.MSStatusChangeHandler */

	/*--------------- INICIO Funções MSStatusChangeHandler -----------------------------------*/   

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
		discardStatusChange: function(eventContext){	
			let statusChangeResource = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
			this._clearWoStatusFilter();
			let self= this;
			var woSet = eventContext.application.getResource('workOrder');
			var wo = woSet.getCurrentRecord();
			//this.ui.hideCurrentView(PlatformConstants.CLEANUP);
			statusChangeResource.set('status',null);
			if(self.ui.getCurrentViewControl("WorkExecution.clearChange")){
				self.ui.getCurrentViewControl("WorkExecution.clearChange").application.ui.hideCurrentDialog();
			}
			if(statusChangeResource.get('status') == null){
				var statusChange = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();
				statusChange.setDateValue("changedate", this.application.getCurrentDateTime());
				statusChange.setNullValue("status");
				statusChange.setNullValue("statusdesc")
				statusChange.setNullValue("memo");
			
				try {
					if (wo.getPendingOrOriginalValue("pd_inspquestion01")) {
						wo.setDateValue("pd_inspdate",null);
						wo.setNullValue("pd_inspector");
						wo.setNullValue("pd_inspquestion01");
					}
					if (wo.getPendingOrOriginalValue("pd_inspquestion02")) {
						wo.setNullValue("pd_inspquestion02");
						wo.setNullValue("pd_inspquestion03");
						wo.setNullValue("ms_inspwhy");
					}
					if(wo.getPendingOrOriginalValue("ms_inspquestion04")){
						wo.setNullValue("ms_inspquestion04");
						wo.setNullValue("ms_inspdate04");
						wo.setNullValue("ms_inspector04");
					}
					this.ui.hideCurrentView(PlatformConstants.CLEANUP);
				  } catch (error) {console.log(error+' discardStatusChange')}        
			  	}else{
					this.ui.hideCurrentView();	
				}

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

		successCallback:function(recordSet,statusChange) {
			var self = this;
			self.application.showBusy();
			console.log("Registro foi salvo");
			if(self.ui.getCurrentViewControl("WorkExecution.clearChange")){
				self.ui.getCurrentViewControl("WorkExecution.clearChange").application.ui.hideCurrentDialog();
			}
			statusChange.setNullValue('status');
			statusChange.setNullValue('attachmentssizetoday');
			setTimeout(() => {
			  self.application.hideBusy();
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
            let msg = "É necessário adicionar ao menos 2 fotos para continuar.";

			try {
				if (statusChange.get('attachmentssizetoday') < 2 ) {
					self.application.showMessage(msg);	
					return false;
				}
				if (statusChange.get('attachments') < 2 ){
					self.application.showMessage(msg);
					return false;
				}	
			} catch (error) {
				console.log(error);
			}
				
			var typeInsp;
			if (workOrderCurrent.get("ms_insptype") == null || workOrderCurrent.get("ms_insptype") == ""|| workOrderCurrent.get("ms_insptype") == undefined) {
				typeInsp = workOrderCurrent.get("ms_insptype");
			}else{
				typeInsp = workOrderCurrent.get("ms_insptype");
			}
            let aux;
			if (typeInsp == "1") {
				Logger.error("Eh uma confirmação de existencia");
				if(newStatus == "PLANEJAR"){
					if ((pd_inspquestion01 == "Sim") && (pd_inspquestion02 == "Sim") && (pd_inspquestion03 == null) 
					&& (pd_inspdate != null) && (pd_inspector !=null) && (pd_inspdate != "")){
						self.application.showBusy();
						if (taskId){ //If the parameter is a Task
							aux = WorkOrderObject.taskChangeStatus(workOrderOrTask, newStatus, statusDate, memo);
						    if(!aux){
							 throw new PlatformRuntimeException(msg);  
						   }
						} else {
							taskSet = CommonHandler._getAdditionalResource(this,"workOrder.tasklist");
							aux = WorkOrderObject.changeStatus(workOrderOrTask, newStatus, statusDate, memo, taskSet);
						   if(!aux){
							 throw new PlatformRuntimeException(msg);  
						   }
						}				
						var EsigHandler = this.application["platform.handlers.EsigHandler"];
						var woORtask = workOrderOrTask.getOwner();
						if (EsigHandler.isEsigRequired(this, woORtask, 'status')){
							workOrderOrTask.markAsModified('status');
							EsigHandler.plugCancelCallback(this, this._statusChangeRollback, [workOrderOrTask, taskSet, previousValueSet]);
						}
						console.log(aux)
						ModelService.save(recordSet).then(function(woSet){
							self.application.showBusy();
							var wo = woSet.getCurrentRecord();
							self.successCallback(recordSet,statusChange);
						}).otherwise(function (error) {
							statusChange.setNullValue('status');
							this.ui.hideCurrentView(PlatformConstants.CLEANUP);
						});					
					}else{
						statusChange.setNullValue('status');
						this.ui.hideCurrentView(PlatformConstants.CLEANUP);
				}
			}
		}
				if (typeInsp == "2") {
					if ((ms_inspdate04 != null ) && (ms_inspquestion04  != null ) && (ms_inspector04 != null)
					&& (ms_inspquestion04  != "" ) && (ms_inspector04 != "")){
						self.application.showBusy();
						if (taskId){ //If the parameter is a Task
							aux = WorkOrderObject.taskChangeStatus(workOrderOrTask, newStatus, statusDate, memo);
							if(!aux){
								throw new PlatformRuntimeException(msg);  
							}
						} else {
							taskSet = CommonHandler._getAdditionalResource(this,"workOrder.tasklist");
							aux = WorkOrderObject.changeStatus(workOrderOrTask, newStatus, statusDate, memo, taskSet);
							if(!aux){
								throw new PlatformRuntimeException(msg);  
						    }
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
							statusChange.setNullValue('status');
							this.ui.hideCurrentView(PlatformConstants.CLEANUP);
						});					
					}
				}
				self.application.hideBusy();
			
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
	  yes_questions01: function (eventContext) {
		var currWO = eventContext.getResource().getCurrentRecord();
		var myUser = UserManager.getCurrentUser();  
		currWO.set("pd_inspquestion01", "Sim");
		//currWO.setPendingValue("pd_inspquestion01", "Sim");
		currWO.setDateValue("pd_inspdate",this.application.getCurrentDateTime());
		currWO.set("pd_inspector", myUser);
		currWO.setPendingValue("pd_inspquestion01", currWO.get("pd_inspquestion01"));
		eventContext.ui.show("WorkExecution.QuestionsViewClass");
		this.inherited(arguments);
	  },
  
  
	  yes_questions02: function (eventContext) {
		var currWO = eventContext.getResource().getCurrentRecord();
		var questao3 = currWO.get("pd_inspquestion03");
		var myUser = UserManager.getCurrentUser();  
		if (questao3 == null || questao3 == "") {
		  currWO.set("pd_inspquestion02", "Sim");
		} else {
		  currWO.set("pd_inspquestion02", "Não");
		}
        currWO.setDateValue("pd_inspdate",this.application.getCurrentDateTime());
		currWO.set("pd_inspector", myUser);
		currWO.setPendingValue("pd_inspquestion02", currWO.get("pd_inspquestion02"));
		this.setterPendingValue(currWO);
		this.inherited(arguments);
	  },

	  escondeMotivo: function (eventContext) {
		var statusChange = eventContext.getResource().getCurrentRecord();
		var questao = statusChange.get("pd_inspquestion01");
		eventContext.setVisibility(false);
		eventContext.setDisplay(false);
		if (questao == "Não") {
		  eventContext.setVisibility(true);
		  eventContext.setDisplay(true);
		}
		this.inherited(arguments);
	  },

	  hideQuestAfterResponse: function (eventContext) {
		var statusChangeWO = eventContext.getResource().getCurrentRecord();
		var statusdate = statusChangeWO.get("changestatusdate");
		var status = statusChangeWO.get("status");
		var ms_inspdate04 = statusChangeWO.get("ms_inspdate04");
		var typeInsp;
		if (statusChangeWO.get("ms_insptype") != null || 
			statusChangeWO.get("ms_insptype") != ""|| 
			statusChangeWO.get("ms_insptype") != undefined) {
		  typeInsp = statusChangeWO.get("ms_insptype");
		}
  
  
		if (typeInsp == "1") {
		  Logger.error("Eh uma confirmação de existencia");
		  if (
			status == "PLANEJAR" ||
			status == "PREPLAN" ||
			status == "PRECANC"
		  ) {
			eventContext.setDisplay(false);
			eventContext.setVisibility(false);
		  }
		} else {
		  Logger.error("Eh uma confirmação de execucao");
		  ///'NOVO', 'PLANEJAR'
		  if (status != "NOVO" && status != "PLANEJAR") {
			eventContext.setDisplay(false);
			eventContext.setVisibility(false);
		  }
		}
	  },
	  
	  cleanButton: function (eventContext) {
		var statusChangeWO = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();
		if (
		  statusChangeWO.get("status") == "PLANEJAR" ||
		  statusChangeWO.get("status") == "PREPLAN" ||
		  statusChangeWO.get("status") == "PRECANC"
		) {
		  eventContext.setDisplay(false);
		  eventContext.setVisibility(false);
		}
  
		this.inherited(arguments);
	  },

	redirectList: function (eventContext) {
		var self = this;
		let workOrderCurrent = eventContext.getResource().getCurrentRecord();
		var pd_inspquestion01 = workOrderCurrent.get('pd_inspquestion01');
		var pd_inspdate = workOrderCurrent.get("pd_inspdate");
		var pd_inspector = workOrderCurrent.get("pd_inspector");

		var ms_inspdate04 = workOrderCurrent.get("ms_inspdate04");
		var ms_inspquestion04 = workOrderCurrent.get("ms_inspquestion04");
		var ms_inspector04 = workOrderCurrent.get("ms_inspector04");
		var typeInsp;

		typeInsp = workOrderCurrent.get("ms_insptype");
		var statusChangeWO = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();

		try {
			if (statusChangeWO) {
				typeInsp = statusChangeWO.get("ms_insptype");
				if (typeInsp == "1") {
					if (
						statusChangeWO.get("status") == "PLANEJAR" ||
						statusChangeWO.get("status") == "PREPLAN" ||
						statusChangeWO.get("status") == "PRECANC"
					) {
						this.ui.show("WorkExecution.WorkItemsView");
					}			
				}else{
					if ((ms_inspdate04 == null ) && (ms_inspquestion04  == null ) && (ms_inspector04 == null)){
					  eventContext.setDisplay(false);
					  eventContext.setVisibility(false);			
					}
				}
				this.inherited(arguments);
			}
		} catch (error) {
			console.log(error);
		}

	},
  

	  no_questions02: function (eventContext) {
		var currWO = eventContext.getResource().getCurrentRecord();
		var myUser = UserManager.getCurrentUser();
		currWO.set("pd_inspquestion02", "Não");
		currWO.setDateValue("pd_inspdate",this.application.getCurrentDateTime());
		currWO.set("pd_inspector", myUser);
		currWO.setPendingValue("pd_inspquestion02", currWO.get("pd_inspquestion02"));
		this.inherited(arguments);
	  },
  
	  no_questions04: function (eventContext) {
		var currWO = eventContext.getResource().getCurrentRecord();
		var myUser = UserManager.getCurrentUser();
		currWO.set("ms_inspquestion04", "Não");
		currWO.setDateValue("ms_inspdate04",this.application.getCurrentDateTime());
		currWO.set("ms_inspector04", myUser);
		currWO.setPendingValue("ms_inspquestion04", currWO.get("ms_inspquestion04"));
		this.inherited(arguments);
	  },
  
	  yes_questions04: function (eventContext) {
		var currWO = eventContext.getResource().getCurrentRecord();
		var myUser = UserManager.getCurrentUser();
		currWO.set("ms_inspquestion04", "Sim");
		currWO.setDateValue("ms_inspdate04",this.application.getCurrentDateTime());
		currWO.set("ms_inspector04", myUser);
		currWO.setPendingValue("ms_inspquestion04", currWO.get("ms_inspquestion04"));
		this.inherited(arguments);
	  },
  
	  accept_bt: function (eventContext) {
		var statusChange = eventContext.getResource().getCurrentRecord();
		statusChange.set("ms_acceptinsp", "1");
		ms_acceptinsp = statusChange.get("ms_acceptinsp");
		var workOrder = eventContext.application.getResource("workOrder");
		var deferred = new Deferred();
		ModelService.save(workOrder).then(function (result) {
		  deferred.resolve();
		});
		this.inherited(arguments);
		eventContext.setDisplay(false);
		eventContext.setVisibility(false);
		eventContext.ui.show("WorkExecution.WorkItemsView");
	  },
  
	  call_acc_view: function (eventContext) {
		eventContext.ui.show("Accept_insp_01");
	  },
	  call_dec_view: function (eventContext) {
		eventContext.ui.show("Decline_insp_01");
	  },

	  control_acc_bt: function (eventContext) {
		var statusChange = eventContext.getResource().getCurrentRecord();
		ms_acceptinsp = statusChange.get("ms_inspection_acc");
		ms_acceptinsp2 = statusChange.get("ms_acceptinsp");
		ms_canceldate = statusChange.get("ms_canceldate");
		ms_insppriority = statusChange.get("ms_insppriority");
		ms_allowaccept = statusChange.get("ms_allowaccept");
		ms_assigntype = statusChange.get("ms_assigntype");
  
		if (
		  ms_assigntype == "Manual" ||
		  ms_allowaccept == false ||
		  ms_insppriority == "1" ||
		  ms_acceptinsp2 != 0 ||
		  ms_acceptinsp2 == null ||
		  ms_acceptinsp == true ||
		  ms_canceldate != null
		) {
		  eventContext.setDisplay(false);
		  eventContext.setVisibility(false);
		}
	  },
  
	  control_insp: function (eventContext) {
		var statusChange = eventContext.getResource().getCurrentRecord();
		ms_acceptinsp = statusChange.get("ms_inspection_acc");
		ms_acceptinsp2 = statusChange.get("ms_acceptinsp");
		ms_canceldate = statusChange.get("ms_canceldate");
  
		if (ms_canceldate != null) {
		  eventContext.setDisplay(false);
		  eventContext.setVisibility(false);
		}
	  },
  
	  dev_bt: function (eventContext) {
		var statusChange = eventContext.getResource().getCurrentRecord();
		statusChange.set("ms_acceptinsp", "2");
		ms_acceptinsp = statusChange.get("ms_acceptinsp");
		var workOrder = eventContext.application.getResource("workOrder");
		var deferred = new Deferred();
		ModelService.save(workOrder).then(function (result) {
		  deferred.resolve();
		});
		this.inherited(arguments);
		eventContext.setDisplay(false);
		eventContext.setVisibility(false);
		eventContext.ui.show("WorkExecution.WorkItemsView");
	  },
  
	  showHideQuestionsView: function (eventContext) {
		var workorder = eventContext.getResource().getCurrentRecord();
		var statusdate = workorder.get("changestatusdate");
	    var attachments_crecord01 = CommonHandler._getAdditionalResource(eventContext,"attachments");
		var attachments_crecord;
		let statusChangeResource = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
		statusChangeResource.set('attachmentssizetoday', null);
		try {
			if (workorder.get('attachments')) {
			   attachments_crecord = workorder.get('attachments');
			  
			}else{
				if (attachments_crecord01.data.length > 0) {
					attachments_crecord = attachments_crecord01;
				}else{
					attachments_crecord = null;
				}
				
			}
		} catch (error) {
			console.log(error);
		}
		//attachments_crecord.filter("creationDate > $1", statusdate);
		let attachmentssize = workorder.get("attachmentssize");
		var ms_insptype = workorder.get("ms_insptype");
		let status = workorder.get("status");
		let attachments_crecord_size = 0;
		let user = 0;
		let attachmentssizetoday = null;
		var myUser = UserManager.getCurrentUser();
		myUser = myUser.toLocaleLowerCase();
  
		if (attachments_crecord.data.length) {
		  attachments_crecord_size = attachments_crecord.data.length;
		} 
  
		if (attachmentssize == '--') {
		  workorder.set("attachmentssize", "0");
		  attachmentssize = workorder.get("attachmentssize");
		}
  
		if (typeof attachmentssize == 'string') {
		  attachmentssize = parseInt(attachmentssize);
		  statusChangeResource.set('attachmentssizetoday', attachmentssize);
		}
  
  
		let date =  new Date();
		var dia = String(date.getDate()).padStart(2, '0');
		var mes = String(date.getMonth() + 1).padStart(2, '0');
		var ano = date.getFullYear();
		var newdate  = dia + '/' + mes + '/' + ano;            
		var partesData = newdate.split("/");
		var data_newdate = new Date(partesData[2], partesData[1] - 1, partesData[0]);
		let aux = [];
  
		let type= typeof attachments_crecord;
		if (type == 'object') {
		  for (const key in attachments_crecord.data) {
			if (Object.hasOwnProperty.call(attachments_crecord.data, key)) {
			  const element = attachments_crecord.data[key];
			 // let creationDate = element.get('creationDate');
				let creationDate;
				let datePhoto; 
			  	user = element.get('createby');
				user = user.toLocaleLowerCase();  
				try {
					if (element.get('creationDate')) {
						creationDate = element.get('creationDate');
					  datePhoto = new Date(creationDate);
					}else{
						datePhoto = new Date();
					}
				} catch (error) {
					console.log('Erro função showHideQuestionsView()')
				}
  
			  var dia = String(datePhoto.getDate()).padStart(2, '0');
			  var mes = String(datePhoto.getMonth() + 1).padStart(2, '0');
			  var ano = datePhoto.getFullYear();
			  var newdatedatePhoto  = dia + '/' + mes + '/' + ano;      
			  var partesData2 = newdatedatePhoto.split("/");
			  var data_newdatedatePhoto = new Date(partesData2[2], partesData2[1] - 1, partesData2[0]);
			  let dateStatus = new Date(statusdate); 
			  var dia = String(dateStatus.getDate()).padStart(2, '0');
			  var mes = String(dateStatus.getMonth() + 1).padStart(2, '0');
			  var ano = dateStatus.getFullYear();
			  var newdateStatus  = dia + '/' + mes + '/' + ano;            
  
			  var partesData3 = newdatedatePhoto.split("/");
			  var data_newdateStatus = new Date(partesData3[2], partesData3[1] - 1, partesData3[0]);
			  if(data_newdatedatePhoto >= data_newdate && data_newdatedatePhoto >= data_newdateStatus && user == myUser){
				  attachmentssizetoday ++;
				  statusChangeResource.set('attachmentssizetoday',attachmentssizetoday);
				  aux.push(attachments_crecord.data[key]);
			
			}
  
				 
				
			}
		  }        
		}
  
        statusChangeResource.set('attachments',aux);
		 console.log(aux); 
		    
		if ((attachmentssizetoday < 2 && ms_insptype == "1" && status == "AGINSP" )){
		  eventContext.setDisplay(false);
		  eventContext.setVisibility(false);
		}
  
		if ((attachmentssizetoday < 2 && ms_insptype == "2")){
		  if (status == "NOVO" || status == "PLANEJAR") {
			eventContext.setDisplay(false);
			eventContext.setVisibility(false);
		  }
		}
	  },
  
	  redirectView: function (eventContext) {
		var workorder = eventContext.getResource().getCurrentRecord();
		var statusReinspec = workorder.get("ms_reinspec");
		var typeInsp = workorder.get("ms_insptype");
  
		if (typeInsp == "2") {
		  Logger.error("Eh uma confirmação de execucao");
		  eventContext.ui.hideCurrentDialog();
		  eventContext.ui.show("WorkExecution.Reinspecview");
		}
		if (statusReinspec) {
		  Logger.error("Eh uma confirmação de existencia");
		  eventContext.ui.hideCurrentDialog();
		  eventContext.ui.show("WorkExecution.QuestionsView");
		} else {
		  eventContext.ui.hideCurrentDialog();
		  eventContext.ui.show("WorkExecution.QuestionsView");
		}
	  },
  
	  verifyattachments: function (eventContext) {
		var attachments = eventContext.application.getResource("attachments");
		if (attachments.count() < 2) {
		  eventContext.ui.hideCurrentView();
		  throw new PlatformRuntimeException("ms_invalidstatusattachmenterror");
		}
	  },

	  verifyattachments2: function (eventContext) {
		var workorder = eventContext.getResource().getCurrentRecord();
		var statusdate = workorder.get("changestatusdate");
		var reinsp = workorder.get("ms_reinspec04");
		var attachments_crecord = CommonHandler._getAdditionalResource(
		  eventContext,
		  "attachments"
		);
		attachments_crecord.filter("creationDate > $1", statusdate);
		var status = workorder.getPendingOrOriginalValue("status");
		var pd_inspdate = workorder.get("pd_inspdate");
		var ms_inspdate04 = workorder.get("ms_inspdate04");
		var ms_insptype = workorder.get("ms_insptype");
		if (
		  attachments_crecord.count() < 2 ||
		  pd_inspdate != null ||
		  ms_insptype == "2"
		) {
		  eventContext.setDisplay(false);
		  eventContext.setVisibility(false);
		}
	  },
  
	  verifyattachments4: function (eventContext) {
		var workorder = eventContext.getResource().getCurrentRecord();
		var attachments_crecord = CommonHandler._getAdditionalResource(
		  eventContext,
		  "attachments"
		);
		var statusdate = workorder.get("changestatusdate");
		attachments_crecord.filter("creationDate > $1", statusdate);
		var ms_inspdate04 = workorder.get("ms_inspdate04");
		var pd_inspdate = workorder.get("pd_inspdate");
		var AttCount = attachments_crecord.count();
		var ms_insptype = workorder.get("ms_insptype");
  
		if (
		  attachments_crecord.count() < 2 ||
		  ms_inspdate04 != null ||
		  ms_insptype == "1"
		) {
		  eventContext.setDisplay(false);
		  eventContext.setVisibility(false);
		}
	  },

	  planejado: function (eventContext, skipDynamicCheck) {
		eventContext.application.showBusy();
		let statusChangeResource = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
		statusChangeResource.setDateValue("changedate", this.application.getCurrentDateTime());
		var attachments = eventContext.application.getResource("attachments");
		var statusChange = eventContext.getResource().getCurrentRecord();
		var questao3 = statusChange.get("pd_inspquestion03");
		var statusdate = statusChange.get("changestatusdate");
		var myUser = UserManager.getCurrentUser();
  		var attachments_crecord = CommonHandler._getAdditionalResource(eventContext,"attachments");
		attachments_crecord.filter("creationDate > $1", statusdate);
		let attachmentssize = statusChange.get("attachmentssize");
		let self = this;
			  
		if (attachmentssize == '--') {
			statusChange.set("attachmentssize", "0");
			attachmentssize = statusChange.get("attachmentssize");
		}  
		if (typeof attachmentssize == 'string') {
		  attachmentssize = parseInt(attachmentssize);
		}      

		if (attachments.data.length > 0) {
			statusChangeResource.set("attachmentssizetoday", attachments.data.length);
		}
		let msg = "É necessário adicionar ao menos 2 fotos para continuar.";


    
		var workorder = eventContext.getResource().getCurrentRecord();
		var attachments_crecord02;
		try {
			if (workorder.get('attachments')) {
				attachments_crecord02 = workorder.get('attachments');
			}else{
				attachments_crecord02 = 0;
			}
			if (attachments_crecord02.length < 2 && statusChangeResource.get("attachmentssizetoday") ) {
				throw new PlatformRuntimeException(msg);
			}
		} catch (error) {
			console.log(error);
		}

		if (questao3 == null || questao3 == "" || questao3 == "Sim") {
		  statusChange.set("pd_inspquestion01", "Sim");
		  statusChange.set("pd_inspquestion02", "Sim");
		  statusChangeResource.set("status", "PLANEJAR");
		  statusChange.setDateValue("pd_inspdate",this.application.getCurrentDateTime());
		  statusChange.set("pd_inspector", myUser); 
		  self.application.showBusy();
		  self.commitWOStatusChange(eventContext);
		} else {
		  statusChange.set("pd_inspquestion01", "Sim");
		  statusChange.set("pd_inspquestion02", "Não");
		  statusChangeResource.set("status", "PREPLAN");
		  statusChange.setDateValue("pd_inspdate",this.application.getCurrentDateTime());
		  statusChange.set("pd_inspector", myUser);
		  self.application.showBusy();
		  self.commitWOStatusChange(eventContext);
		}
  
		this.inherited(arguments);
	  },
  
	  saveWOShowView: function (eventContext) {
		var workOrder = eventContext.application.getResource("workOrder");
		var deferred = new Deferred();
		ModelService.save(workOrder)
		  .then(function (result) {
			deferred.resolve();
		  })
		  .otherwise(function (error) {
			deferred.reject(error);
		  });
	  },
  
	  planejadoReinsp: function (eventContext, skipDynamicCheck) {
		var statusChangeWO = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();
		statusChangeWO.setDateValue("changedate", this.application.getCurrentDateTime());
		var statusChange = eventContext.getResource().getCurrentRecord();
		var attachments_crecord = CommonHandler._getAdditionalResource(eventContext,"attachments");
		attachments_crecord.filter("creationDate > $1", statusdate);
		var statusdate = statusChange.get("changestatusdate");
		let attachmentssize = statusChange.get("attachmentssize");
		let self = this;
		var myUser = UserManager.getCurrentUser();
			  
		if (attachmentssize == '--') {
			statusChange.set("attachmentssize", "0");
			attachmentssize = statusChange.get("attachmentssize");
		}  
			  
		if (typeof attachmentssize == 'string') {
		  attachmentssize = parseInt(attachmentssize);
		} 
		let msg = "É necessário adicionar ao menos 2 fotos para continuar.";

		if (statusChangeWO.get("attachmentssizetoday") < 2 ) {
			throw new PlatformRuntimeException(msg);
		}	
  
		//if (questao3 == null || questao3 == "" || questao3 == "Sim") {
		  statusChangeWO.set("status", "PLANEJAR");
		  statusChange.setDateValue("ms_inspdate04",this.application.getCurrentDateTime());
		  statusChange.set("ms_inspector04", myUser);
		  self.commitWOStatusChange(eventContext);
		//}
  
		this.inherited(arguments);
	  },

	  limitCharacters:function(eventContext){
		let node01Selector = eventContext.labelElement;
		let  node01 = node01Selector.parentNode;
		let nodeChildTextElement = node01.childNodes[1];
		let nodeChildText= nodeChildTextElement.textContent;
		let lengthMax = 150;
  
		if (nodeChildText.length > lengthMax) {
		  let longdescriptionSimple = nodeChildText.substring(0, lengthMax);
		  nodeChildTextElement.textContent = `${longdescriptionSimple} ...`;
		}
	  },
  
	  backToList: function (eventContext) {
		eventContext.ui.show("WorkExecution.WorkItemsView");
	  },
  
	  cleanButtonBackToList: function (eventContext) {
		eventContext.setDisplay(false);
		eventContext.setVisibility(false);
		var statusChangeWO = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();
		if (
		  statusChangeWO.get("status") == "PLANEJAR" ||
		  statusChangeWO.get("status") == "PREPLAN" ||
		  statusChangeWO.get("status") == "PRECANC"
		) {
		  eventContext.setDisplay(true);
		  eventContext.setVisibility(true);
		}
  
		this.inherited(arguments);
	  },	  

		backSpec: function(eventContext){//filtra o registro especifico que originou o subitem de controle tecnologico (click)
			var previousView = eventContext.ui.getCurrentViewControl().id;
			let previousViewName= previousView.toLocaleLowerCase();
			if (previousViewName == 'workexecution.workitemsview') {
				//eventContext.ui.returnToView(previousView);
				return false;
			}
		},

		backShowDialog: function(eventContext){
			var previousView = eventContext.ui.getCurrentViewControl().id;
			let previousViewName= previousView.toLocaleLowerCase();	
			if ((previousViewName == 'workexecution.pd_whyview')||(previousViewName =="workexecution.reinspecview")
			||(previousViewName =="workexecution.questionsviewclass")||(previousViewName =='workexecution.classifyworkorderview')) {
				eventContext.ui.show("WorkExecution.clearChange");
				return false;
			}

		},


	});
});