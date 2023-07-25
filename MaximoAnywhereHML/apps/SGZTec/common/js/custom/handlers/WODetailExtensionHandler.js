define(
	"custom/handlers/WODetailExtensionHandler",
	[ "dojo/_base/declare",
		 "dojo/_base/array",
		 "dojo/_base/lang",
	"platform/handlers/_ApplicationHandlerBase",
	"application/handlers/CommonHandler",
	"application/business/WorkOrderObject",
	"platform/model/ModelService", "platform/util/AsyncAwareMixin",
	"platform/logging/Logger",
	"platform/util/PlatformConstants",
	"platform/auth/UserManager",
	"platform/geolocation/GeoLocationTrackingService",
	 "platform/map/MapProperties",
	 "platform/translation/MessageService",
	 "platform/store/_ResourceMetadataContext",
	 "platform/util/DataValidator",
	 "platform/exception/PlatformRuntimeException"],
	function(declare, arrayUtil, lang, ApplicationHandlerBase, CommonHandler,
			WorkOrderObject, ModelService, AsyncAwareMixin, Logger,PlatformConstants,UserManager,GeoLocationTrackingService,MapProperties,MessageService,ResourceMetaData,DataValidator,PlatformRuntimeException) {

		return declare(
				[ ApplicationHandlerBase, AsyncAwareMixin ],
				{
						
					createServiceItemAction : function(eventContext) {
						eventContext.application.showBusy();
						var self = this;
						var woSet = eventContext.application.getResource('workOrder');
						var actualWorkOrder = woSet.getCurrentRecord();
						if(actualWorkOrder.get('status') == 'EMAND'){
							ModelService.save(woSet).then(function(woSetSaved) {
								//eventContext.createMyResource('woFollowUpInfo');
								self.initServiceItemWorkOrderView(eventContext);
							});
						}
						else{
							eventContext.ui.showMessage(MessageService.createStaticMessage("Para criar um item de serviço, altere o status da OS para em andamento.").getMessage());
						}
					},
												
					initServiceItemWorkOrderView : function(eventContext) {
						Logger.trace("[WODetailHandler] Initializing FollowUpWorkOrderView");
						this.originalWorkOrder = eventContext.application.getResource('workOrder').getCurrentRecord();
						currWO = eventContext.application.getResource('workOrder').getCurrentRecord();
									
						//var woFollowUpInfo = this.application.getResource('woFollowUpInfo').getCurrentRecord();			
						//woFollowUpInfo.set('isFollowUpSetLoc', true);

						//var domainwostatus = CommonHandler._getAdditionalResource(eventContext,"domainwostatus");
						//CommonHandler._clearFilterForResource(eventContext,domainwostatus);

						var newWorkOrder = eventContext.application.getResource('workOrder').createNewRecord();
						
						newWorkOrder.set('parentwonum', this.originalWorkOrder.get('parentwonum')); 
						newWorkOrder.set('woclass', 'ATIVIDADE');
						newWorkOrder.set('origrecordid', this.originalWorkOrder.get('wonum')); 
						newWorkOrder.set('origrecordclass', this.originalWorkOrder.get('woclass'));
						newWorkOrder.set('ms_parentorigreasph', this.originalWorkOrder.get('ms_parentorigreasph'));
						
						newWorkOrder.set('description', this.originalWorkOrder.get('description'));
						newWorkOrder.set('longdescription', this.originalWorkOrder.get('longdescription'));
						newWorkOrder.set('asset', this.originalWorkOrder.get('asset'));
						newWorkOrder.set('assetdesc', this.originalWorkOrder.get('maxassetdesc'));
						newWorkOrder.set('location', this.originalWorkOrder.get('location'));
						newWorkOrder.set('locationdesc', this.originalWorkOrder.get('maxlocationdesc'));
						newWorkOrder.set('pluscloop', this.originalWorkOrder.get('pluscloop'));
						newWorkOrder.set('pluscphyloc', this.originalWorkOrder.get('pluscphyloc'));
						newWorkOrder.set('worktype', this.originalWorkOrder.get('worktype'));
						newWorkOrder.set('newchildclass', 'ATIVIDADE');
						newWorkOrder.set('istask', true);
						newWorkOrder.set('jobtaskid', this.originalWorkOrder.get('jobtaskid'));
						newWorkOrder.set('parentchgsstatus', 0);
						//newWorkOrder.set('priority', this.originalWorkOrder.get('priority'));
						newWorkOrder.set('status', 'EMAND');
						//newWorkOrder.set('pd_wkf', true);
						newWorkOrder.set('sourcesysid', 'ANYWHERE');
						newWorkOrder.setDateValue('changestatusdate', this.application.getCurrentDateTime());
						newWorkOrder.set('failurecode', this.originalWorkOrder.get('failurecode'));
						newWorkOrder.set('failureCodeDesc', this.originalWorkOrder.get('failureCodeDesc'));
						newWorkOrder.set('pd_contractnum', this.originalWorkOrder.get('pd_contractnum'));
						this.updateFollwupGPSPosition(newWorkOrder);
						
						newWorkOrder.set('woserviceaddressline2', this.originalWorkOrder.get('woserviceaddressline2'));
						newWorkOrder.set('woservicetaddrnumber', this.originalWorkOrder.get('woservicetaddrnumber'));
						newWorkOrder.set('woserviceaddressline3', this.originalWorkOrder.get('woserviceaddressline3'));
						newWorkOrder.set('woservicepostalcode', this.originalWorkOrder.get('woservicepostalcode'));
						newWorkOrder.set('woservicecity', this.originalWorkOrder.get('woservicecity'));
						newWorkOrder.set('woservicestateprovince', this.originalWorkOrder.get('woservicestateprovince'));
					
						this.originalWorkOrder.getModelDataSet('toollist', true).then(function(toollistSet){
							newWorkOrder.getModelDataSet('toollist', true).then(function(newWorkOrderToollistSet) {
								  for(var i=0; i<toollistSet.count();i++){
									var newRec = newWorkOrderToollistSet.createNewRecord();
									var currRec = toollistSet.getRecordAt(i);										
									newRec.set('tool', currRec.get('tool'));
									newRec.set('taskid', currRec.get('taskid'));
									newRec.set('tooldesc', currRec.get('tooldesc'));
									newRec.set('toolanddescription', currRec.get('toolanddescription'));
									newRec.set('quantity', currRec.get('quantity'));
									newRec.set('hours', currRec.get('hours'));
									newRec.set('linetype', currRec.get('linetype'));
									newRec.set('itemsetid', currRec.get('itemsetid'));
								}
							});
						});
						
						this.originalWorkOrder.getModelDataSet('assignmentlist', true).then(function(assignmentlistSet){
							newWorkOrder.getModelDataSet('assignmentlist', true).then(function(newWorkOrderAssignmentListSet) {
								  for(var i=0; i<assignmentlistSet.count();i++){
									var newRec = newWorkOrderAssignmentListSet.createNewRecord();
									var currRec = assignmentlistSet.getRecordAt(i);
									newRec.set('taskid', currRec.get('taskid'));
									newRec.set('laborcode', currRec.get('laborcode'));
									newRec.set('laborname', currRec.get('laborname'));
									newRec.set('craft', currRec.get('craft'));
									newRec.set('skilllevel', currRec.get('skilllevel'));
									newRec.set('crew', currRec.get('crew'));
									newRec.set('amcrewtype', currRec.get('amcrewtype'));
									newRec.set('status', currRec.get('status'));
									newRec.set('scheduledate', currRec.get('scheduledate'));
									newRec.set('laborhours', currRec.get('laborhours'));
									//newRec.set('vendor', currRec.get('vendor'));
									newRec.set('contractnum', currRec.get('contractnum'));
								}
							});
						});
						
									
						newWorkOrder.set('siteid', this.originalWorkOrder.get("siteid"));
						newWorkOrder.set('orgid', this.originalWorkOrder.get('orgid'));						
						
						//if (WL.StaticAppProps.APP_ID!="Inspection"){
							if (this.originalWorkOrder.get('classstructureid') != null) {
								Logger.trace("[WODetailHandler] Found a classification need to copy it to follow on workorder");
								var classstructureid = this.originalWorkOrder.get('classstructureid');
								if(classstructureid==null){
									classstructureid = 'null';
								}			
								var filter = {'classstructureid':classstructureid};
								var class_desc = "";
								var classpath = "";
								
								newWorkOrder.set('classstructureid', this.originalWorkOrder.get('classstructureid'));
								//newWorkOrder.set('classstructureid', currWO.get('classstructureid'));
								
								ModelService.filtered("classstructure", null, filter, null, false, true).then(function(classStructure){
									if (classStructure.count()>0){
										classpath = classStructure.getCurrentRecord().get('hierarchypath');
										class_desc = classStructure.getCurrentRecord().get('description');
										newWorkOrder.set('classificationpath', classpath);
										newWorkOrder.set('classificationdesc', class_desc);
									} else {
										newWorkOrder.set('classificationpath', '');
										newWorkOrder.set('classificationdesc', '');
									}
								});	
								
								this.originalWorkOrder.getModelDataSet("workOrderSpec", true).then(function(workOrderSpecs){
									Logger.trace("[WODetailHandler] Found existing specification attributes copying them to follow up");
									WorkOrderObject.updateSpecifications(newWorkOrder).then(function() {
										eventContext.ui.show("WorkExecution.FollowUpWorkOrderView");
										eventContext.application.hideBusy();
									}); 
								});
							} else {
								Logger.trace("[WODetailHandler] No classification on the original workorder");
								eventContext.ui.show("WorkExecution.FollowUpWorkOrderView");
								eventContext.application.hideBusy();
							}				
					/*}else {
							eventContext.ui.show("WorkExecution.FollowUpWorkOrderView");
							eventContext.application.hideBusy();
						}*/
					},

					clearSearchFields: function(eventContext){
						eventContext.application.getResource("searchAsset").createNewRecord();
					},
					
					commitNewWorkOrderView : function(eventContext) {
						if (eventContext.ui.getCurrentViewControl().validate()) {
							eventContext.application.showBusy();
							var workOrderSet = eventContext.application.getResource('workOrder');
							var newWorkOrder = workOrderSet.getCurrentRecord();
							/* newWorkOrder.set('classstructureid', newWorkOrder.get('classificationdesc')); */
							newWorkOrder.set('classstructureid', newWorkOrder.get('classstructureid'));
							if(!newWorkOrder.get("woservicepostalcode")){
								newWorkOrder.set("woservicepostalcode", "-");
							}
							var self = this;
							/*
							if(this.originalWorkOrder) {
								workOrderSet.setCurrentIndexByRecord(this.originalWorkOrder);
								this.handleWOSpecResourceWhenGoingBack(eventContext,this.originalWorkOrder);
							}
							*/
							
								ModelService.saveAll([workOrderSet]).then(function() {
									var statuses = CommonHandler._getAdditionalResource(eventContext,'domainwostatus');
									CommonHandler._clearFilterForResource(eventContext,statuses);
									eventContext.ui.hideCurrentView();
									self.originalWorkOrder = null;
									
								}).
								otherwise(function(err){
									eventContext.application.hideBusy();
									eventContext.ui.showMessage(err);						
								});
						}
					},

					ValidateDateSpec : function(eventContext) {
						Logger.error("###### inicio ValidateDateSpec");
						var currentWorkOrder = eventContext.application.getResource("workOrder").getCurrentRecord();
						var Spec = eventContext.application.getResource("workOrder.workOrderSpec");							
						let currentWorkOrderCount;
						var concordanciaAsfaltica = 0;
						var validacao = 0;
						
						try {
							currentWorkOrderCount = Spec.count();
							if (Spec.count()){
								if (currentWorkOrder != null && currentWorkOrder.workOrderSpec != null){
									for (var i = 0; i < currentWorkOrderCount; i++) {
											var currWorkOrderSpec = Spec.getRecordAt(i);
											var specID = currWorkOrderSpec.get('assetattrid');
											var alnValue = currWorkOrderSpec.get('alnvalue');
											
											if (specID == 'CURA_CONC'){
												var cura_conc = alnValue;
											}
											if (specID == 'NEC_CONC'){
											//Verifica se é concordancia asfáltica
											var nec_conc = alnValue;
										}
									}
									if (nec_conc == 'Sim' && (cura_conc == null || cura_conc == undefined || cura_conc == "")){
										 eventContext.ui.showMessage(MessageService.createStaticMessage("O campo 'Cura de concreto' precisa ser preenchido!").getMessage());
									}
									for (var i = 0; i < currentWorkOrderCount; i++) {
										//var currWorkOrderSpec = Spec.getRecordAt(i);
										var currWorkOrderSpec = Spec.getRecordAt(i);
										var measureunitid = currWorkOrderSpec.get('measureunitid');
										var strData = currWorkOrderSpec.get('alnvalue');
										var alnValue = currWorkOrderSpec.get('alnvalue');
										var specID = currWorkOrderSpec.get('assetattrid');
																					
										var nowDate = new Date();
										
										if (measureunitid == "DATA"){
											//var newDate = new Date(strData);
											if(strData != null && strData != undefined && strData != ""){
												var dateParts = strData.split("/");

												// month is 0-based, that's why we need dataParts[1] - 1
												var newDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
												var newDateFomatada = new Date(strData);
												let day = newDate.getMonth()+1;
												let month = newDate.getDate();
												let year = newDate.getFullYear();
												
												var isBoolean = (newDateFomatada instanceof Date) && !isNaN(newDateFomatada);
												newDateFomatada = new Date('""'+day+"/"+month+"/"+year);
												
												//newDateFomatada = newDate.toLocaleDateString();
												
												//nowDate = nowDate.toLocaleDateString();

													if (isBoolean) {
														if(newDateFomatada < nowDate){
															eventContext.ui.showMessage(MessageService.createStaticMessage("O campo 'Cura de concreto' precisa ser maior que a data atual!").getMessage());
														}
													}
													else{
														eventContext.ui.showMessage(MessageService.createStaticMessage("Por favor, insira uma data valida!").getMessage());
													}	
												
											}
										}
										
									}
								}
								eventContext.ui.show("WorkExecution.EditStatusView");
								Logger.error("###### fim ValidateDateSpec");								}
						} catch (error) {
							console.log(error);
						}
					},
					
					readOnlySpec : function(eventContext) {
						var currentWorkOrder = eventContext.application.getResource("workOrder").getCurrentRecord();
						var Spec = CommonHandler._getAdditionalResource(eventContext,"workOrder.workOrderSpec");
						
						if (currentWorkOrder != null && currentWorkOrder.workOrderSpec != null && Spec !== undefined){
							for (var i = 0; i < Spec.count(); i++) {
								var currWorkOrderSpec = Spec.getRecordAt(i);
								var currSpec = currWorkOrderSpec.get('assetattrid');
								if (currSpec == 'C_AREA' || currSpec == 'CC_AREA' || currSpec == 'AREA' 
									|| currSpec == 'CALCULO_ESPESSU' || currSpec == 'VOLUME' || currSpec == 'GRAU_COMPACT3' 
									|| currSpec == 'GRAU_COMPACT3'  || currSpec == 'PERC_VAZIOS2' || currSpec == 'ESPESSURA' ){
									if (currWorkOrderSpec.get('numvalue') == null || currWorkOrderSpec.get('numvalue') == ""){
										//currWorkOrderSpec.set("numvalue",parseFloat("0,0"));
									}
									currWorkOrderSpec.getRuntimeFieldMetadata("numvalue").set("readonly", true);
									currWorkOrderSpec.getRuntimeFieldMetadata("alnvalue").set("readonly", true);
									currWorkOrderSpec._isReadOnly = true;
								}
							
							}
						}
						eventContext.refresh();
					},
					
					readOnlyOrigSpec : function(eventContext) {
						var currentWorkOrder = eventContext.application.getResource("workOrder").getCurrentRecord();
						var Spec = CommonHandler._getAdditionalResource(eventContext,"workOrder.workOrderSpec");
						
						if (currentWorkOrder != null && currentWorkOrder.workOrderSpec != null && Spec !== undefined){
							for (var i = 0; i < Spec.count(); i++) {
								var currWorkOrderSpec = Spec.getRecordAt(i);
								var currSpec = currWorkOrderSpec.get('assetattrid');
								
									currWorkOrderSpec.getRuntimeFieldMetadata("numvalue").set("readonly", true);
									currWorkOrderSpec.getRuntimeFieldMetadata("alnvalue").set("readonly", true);
									currWorkOrderSpec._isReadOnly = true;
							}
							
							}
						
						eventContext.refresh();
					},
					readOnlyOrigSpecDefault : function(eventContext) {
						var currentWorkOrder = eventContext.application.getResource("workOrder").getCurrentRecord();
						var Spec = CommonHandler._getAdditionalResource(eventContext,"workOrder.workOrderSpec");
						var medicoes = ['E_PATOLOGIA','F_AFUND','G_TRINCA','H_REQ','I_OND','J_EXSUDACAO','K_ESC','L_DESAGRE','M_DEF_PLA','N_BUR_PAN'];
						if (currentWorkOrder != null && currentWorkOrder.workOrderSpec != null && Spec !== undefined){
							for (var i = 0; i < Spec.count(); i++) {
								var currWorkOrderSpec = Spec.getRecordAt(i);
								var currSpec = currWorkOrderSpec.get('assetattrid');
								let alnvalue_value;
								if (currWorkOrderSpec.get('alnvalue')) {
									alnvalue_value = currWorkOrderSpec.get('alnvalue');
								}
								for (let index = 0; index < medicoes.length; index++) {
									const medicao_index = medicoes[index];
									if (currSpec == medicao_index) {
										if (alnvalue_value == ""||alnvalue_value == null) {
											console.log('alnvalue_value' + alnvalue_value);
											console.log('assetattrid' + currSpec);
											currWorkOrderSpec.set('alnvalue','Não') 										
										}
									}
								}
							}
						}
						eventContext.refresh();
					},

					ValidateDateSpecBack : function(eventContext) {
						Logger.error("###### inicio ValidateDateSpec");
						var currentWorkOrder = eventContext.application.getResource("workOrder").getCurrentRecord();
						var Spec = eventContext.application.getResource("workOrder.workOrderSpec");
						var currentWorkOrderCount;
						var concordanciaAsfaltica = 0;
						var validate = 1;
						
						try {
							currentWorkOrderCount = Spec.count();
							if (Spec.count()){
								if (currentWorkOrder != null && currentWorkOrder.workOrderSpec != null){
									for (var i = 0; i < currentWorkOrderCount; i++) {
											var currWorkOrderSpec = Spec.getRecordAt(i);
											var specID = currWorkOrderSpec.get('assetattrid');
											var alnValue = currWorkOrderSpec.get('alnvalue');
											
											if (specID == 'CURA_CONC'){
												var cura_conc = alnValue;
											}
											if (specID == 'NEC_CONC'){
											//Verifica se é concordancia asfáltica
											var nec_conc = alnValue;
										}
									}
									if (nec_conc == 'Sim' && (cura_conc == null || cura_conc == undefined  || cura_conc == "")){
										 eventContext.ui.showMessage(MessageService.createStaticMessage("O campo 'Cura de concreto' precisa ser preenchido!").getMessage());
										 validate = 0;
									}
									for (var i = 0; i < currentWorkOrderCount; i++) {
										//var currWorkOrderSpec = Spec.getRecordAt(i);
										var currWorkOrderSpec = Spec.getRecordAt(i);
										var measureunitid = currWorkOrderSpec.get('measureunitid');
										var strData = currWorkOrderSpec.get('alnvalue');
										var alnValue = currWorkOrderSpec.get('alnvalue');
										var specID = currWorkOrderSpec.get('assetattrid');
																					
										var nowDate = new Date();
										
										if (measureunitid == "DATA"){
											//var newDate = new Date(strData);
											if(strData != null && strData != undefined && strData != ""){
												var dateParts = strData.split("/");
												// month is 0-based, that's why we need dataParts[1] - 1
												var newDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
												var newDateFomatada = new Date(strData);
												let day = newDate.getMonth()+1;
												let month = newDate.getDate();
												let year = newDate.getFullYear();
												var isBoolean = (newDateFomatada instanceof Date) && !isNaN(newDateFomatada);
												newDateFomatada = new Date('""'+day+"/"+month+"/"+year);
												//newDateFomatada = newDate.toLocaleDateString();
												
												//nowDate = nowDate.toLocaleDateString();
											   
												
													if (isBoolean) {
														if(newDateFomatada < nowDate){
															eventContext.ui.showMessage(MessageService.createStaticMessage("O campo 'Cura de concreto' precisa ser maior que a data atual!").getMessage());
															validate = 0;
														   
														}
													}
													else{
														eventContext.ui.showMessage(MessageService.createStaticMessage("Por favor, insira uma data valida!").getMessage());
														validate = 0;
													}	
												
											}
										}
										
									}
								}
								if (validate == 1){
									eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);	
									self.getMyViewControl(eventContext).refreshLists();
									self.getMyViewControl(eventContext).refresh();
								}                                        
								Logger.error("###### fim ValidateDateSpec");								}
						} catch (error) {
							console.log(error);
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
					
					/* setaVoltar: function(eventContext){
						
						var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
						var curWo = workOrderSet.getCurrentRecord();
						var dataInic = curWo.get('ms_startdate');
						var dataFim = curWo.get('ms_finishdate');
						var ticket = curWo.get('ms_amticketid');
						var changeBy = curWo.get('ms_changeby');
						var changeDate = curWo.get('ms_changedate');
						var wonum = curWo.get('wonum');
						var siteid = curWo.get('ms_wositeid');
						var ticket = curWo.get('ms_amticketid');
						var woamtkdischid = curWo.get('ms_woamtkdischid');	
						
													
						if(dataInic == null || typeof dataInic === undefined){
							ticket = curWo.set('ms_amticketid', null);
															
						}
						curWo.set('ms_wonum', wonum);
						curWo.set('ms_wositeid', siteid);
						this.inherited(arguments);
						ModelService.save(workOrderSet);
						this.ui.hideCurrentView();
					}, */
					
					/* setaLookup: function(eventContext){
						var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
						var curWo = workOrderSet.getCurrentRecord();
						curWo.set('ms_changeby', UserManager.getCurrentUser());
						curWo.set('ms_changedate', this.application.getCurrentDateTime());
					
					},
					 */
					
					updateFollwupGPSPosition : function (workOrder) {

						var onSuccessCallback = function (position) {

							Logger.trace("Create newWorkOrder WO GPS Position :: " + position.coords.longitude + " , " + position.coords.latitude );

							if (workOrder) {
								workOrder.set('longitudex',position.coords.longitude);
								workOrder.set('latitudey',position.coords.latitude);
								workOrder.set('WOSAlongitudex',position.coords.longitude);
								workOrder.set('WOSAlatitudey',position.coords.latitude);
							}

						};
						
						var onErrorCallback = function (error) { 
							Logger.trace("Create newWorkOrder WO GPS Position Error :: " + error.code + " :: " + error.message);			
						} ;
						
						var gpsWatchObject = new GeoLocationTrackingService();
						
						var gpsTimeout = MapProperties.getGPSTimeout();
						Logger.trace("gpsTimeout: " + gpsTimeout);				
						var gpsHighAccuracy = MapProperties.getGPSHighAccuracy();
						Logger.trace("gpsHighAccuracy: " + gpsHighAccuracy);				
						var gpsMaximumAge = MapProperties.getGPSMaximumAge();
						Logger.trace("gpsMaximumAge: " + gpsMaximumAge);

						gpsWatchObject.getCurrentGPSPosition(
							onSuccessCallback.bind(this),
							onErrorCallback,
							{
								maximumAge: gpsMaximumAge ,
								timeout: gpsTimeout ,
								enableHighAccuracy: gpsHighAccuracy
							}
						);
						
					},
					
					renderCreateServiceItemAction : function(eventContext) {
						var workOrder = eventContext.application.getResource('workOrder').getCurrentRecord();
						if(workOrder.isErrored() || !workOrder.wasCommittedToServer()) {
							eventContext.setDisplay(false);
							return;
						}
						eventContext.setDisplay(true);
					},
					
					handleWOSpecResourceWhenGoingBack : function(eventContext, originalWorkOrder){
						if (originalWorkOrder){
							if (originalWorkOrder.workOrderSpec && originalWorkOrder.workOrderSpec.data){
								eventContext.application.resources['workOrder.workOrderSpec'] = originalWorkOrder.workOrderSpec;
							}
							else{				
								delete eventContext.application.resourceMap['workOrderSpecResource'];				
								delete eventContext.application.resourceMap['workOrder.workOrderSpec'];
								delete eventContext.application.resources['workOrder.workOrderSpec'];
							}
						}
					},
					
					_resetMeters: function(eventContext, workOrderSet, originalWorkOrder) {
						
						workOrderSet.setCurrentIndexByRecord(originalWorkOrder);
						this.originalWorkOrder = null;
						
						if (WL.StaticAppProps.APP_ID == "Inspection") {
							var inspectionhandler = eventContext.application['application.com.Inspection.handlers.InspectionMetersListHandler'];
							promise = inspectionhandler.initializeMeters(eventContext);
						} else {
							var handler = eventContext.application['application.handlers.MetersListHandler'];
							handler.initializeMeters(eventContext);
						}
					},
					
					discardNewWorkOrderView : function(eventContext) {
						if(eventContext.setFooterDisplay)
							eventContext.setFooterDisplay(true);
						
						var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
						//First cleanup workorder
						var currWO = workOrderSet.getCurrentRecord();
						if(currWO && currWO.isNew() && currWO.get('wonum') == null) {
							currWO.deleteLocal();
						}
						//Remove status filters
						var statuses = CommonHandler._getAdditionalResource(eventContext,'domainwostatus');
						CommonHandler._clearFilterForResource(eventContext,statuses);
						var isFollowUp = currWO.get('origrecordid'); 
						if(isFollowUp) {
							this.handleWOSpecResourceWhenGoingBack(eventContext,this.originalWorkOrder);
						} 
						
						
						if(this.originalWorkOrder && isFollowUp){
							//just reset the meters
							this._resetMeters(eventContext, workOrderSet, this.originalWorkOrder);
							eventContext.ui.hideCurrentView();
						} else {
							var self = this;
							
							//This means that we created the workorder
							if (currWO.get("wonum")) {
								//Need to refresh the querybase from the resource
								eventContext.ui.getViewFromId('WorkExecution.WorkItemsView').setQueryBaseIndexByQuery(PlatformConstants.CREATED_QUERYBASE).then(function() {
									eventContext.ui.hideCurrentView();
								});
								this.originalWorkOrder = null;
							} else {
								//When canceling the workorder go back to My AssignedWork
								eventContext.ui.getCurrentViewControl().changeQueryBase.call(eventContext.ui.getViewFromId("WorkExecution.WorkItemsView"),this.originalQueryBaseIndex).then(function() {
									if (self.originalWorkOrder) {
										self._resetMeters(eventContext, workOrderSet, self.originalWorkOrder);
									}
									eventContext.ui.hideCurrentView();
								});
							}
						}
						
					},
					
					handleConditionalReadOnlyMeasureunitid : function(eventContext) {
						var currentWorkOrder = eventContext.application.getResource("workOrder").getCurrentRecord();
						var wostatus = currentWorkOrder.get("status");
						var Spec = CommonHandler._getAdditionalResource(eventContext,"workOrder.workOrderSpec");
						if (currentWorkOrder != null && currentWorkOrder.workOrderSpec != null){
							for (var i = 0; i < Spec.count(); i++) {
								var currWorkOrderSpec = Spec.getRecordAt(i);
								currWorkOrderSpec.getRuntimeFieldMetadata("numvalue").set("readonly", wostatus != "EMAND");
								currWorkOrderSpec.getRuntimeFieldMetadata("alnvalue").set("readonly", wostatus != "EMAND");									
							}
						}
						
						eventContext.refresh();
						
					},
					
					
					handleConditionalReadOnlyMeasureunitSpecid : function(eventContext) {
						var currentWorkOrder = eventContext.application.getResource("workOrder").getCurrentRecord();
						//Logger.error("lista espec asset " + wostatus);
						if (currentWorkOrder != null && currentWorkOrder.assetSpec != null){
							//Logger.error("lista espec asset count " + currentWorkOrder.assetSpec.count());
							for (var i = 0; i < currentWorkOrder.assetSpec.count(); i++) {
								var currAssetspec = currentWorkOrder.assetSpec.getRecordAt(i);
								//Logger.error("lista espec asset metdadata readonly ");
								currAssetspec.getRuntimeFieldMetadata("numvalue").set("readonly", true);
								currAssetspec.getRuntimeFieldMetadata("alnvalue").set("readonly", true);
								eventContext.ui.getViewFromId("WorkExecution.EditAssetView").blockUser = true;
		
								
							}
						}
						
						eventContext.refresh();
						
					},
					
					
					
					
					
					renderNoAssetToWO : function(eventContext) {
						var currentWorkOrder = eventContext.application.getResource('workOrder').getCurrentRecord();
						var assetWO = currentWorkOrder.get("asset");
						
						Logger.error("lista asset asset " + assetWO);
						
						if(assetWO == null || assetWO == "" ) {
							eventContext.setDisplay(false);
							return;
						}
						eventContext.setDisplay(true);
					},
				
					renderAsphalt : function(eventContext) {
						var currentWorkOrder = eventContext.application.getResource('workOrder').getCurrentRecord();
						var status = currentWorkOrder.get("status");
						var foundLowerCase = currentWorkOrder.get("longdescription").toLowerCase();
						var found = foundLowerCase.includes('massa');
						if (found != true ){
							eventContext.setDisplay(false);
							return;
						}else if (status != "EMAND"){
							eventContext.setDisplay(false);
							return;
						}else{
							eventContext.setDisplay(true);
							return;
						}
					},		
					
					classifyLookup02: function(eventContext){
						
						var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
						var currWO = workOrderSet.getCurrentRecord();
						var classsify = currWO.get('classstructureid');
						
								
						var classstructure = CommonHandler._getAdditionalResource(eventContext,'ancestorLoc');
						CommonHandler._clearFilterForResource(eventContext,classstructure);
							
						var iscClasssify = classstructure.find('classstructureid == $1', classsify);
						var parentClass = iscClasssify[0].ancestor;
						
						
						var ancestorLoc = CommonHandler._getAdditionalResource(eventContext,'ancestorLoc');
						CommonHandler._clearFilterForResource(eventContext,ancestorLoc);
						ancestorLoc.filter('ancestor == $1', parentClass);
						ancestorLoc.filter('classstructureid != $1', parentClass);
						
					},
					
					
					classifyLookup: function(eventContext){
										
						var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
						var currWO = workOrderSet.getCurrentRecord();
						var classsify = currWO.get('classstructureid');
						//var levels = "0"
						
								
						var classstructure = CommonHandler._getAdditionalResource(eventContext,'classstructure');
						CommonHandler._clearFilterForResource(eventContext,classstructure);
							
						
						var iscClasssify = classstructure.find('classstructureid == $1', classsify);
						var parentClass = iscClasssify[0].parent;
						
						
						
						var classsParent = CommonHandler._getAdditionalResource(eventContext,'classstructure');
						CommonHandler._clearFilterForResource(eventContext,classstructure);
						
						var isParent = classsParent.find('parent == $1', parentClass)
						

							var filter = [];			
							for(var i = 0 ; i < isParent.length ; i++){					
								var classstructureid = isParent[i].classstructureid;
									
								filter.push({'classstructureid': classstructureid});
							}
							classstructure.lookupFilter = filter;
					},



					//Adicionado por adramos em 01-06-2022 1112 Filtro para categorias de anexos
					AttRedirect: function(eventContext){
						var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
						var currWO = workOrderSet.getCurrentRecord();
						
						var psconfigid = currWO.get("ms_psconfigid");
						
						if (psconfigid == null || psconfigid == "" || typeof psconfigid === undefined){
							eventContext.ui.show("WorkExecution.AttachmentsView");
						}
						else{
							eventContext.ui.show("WorkExecution.AttachmentsCategory");
						}
					},
					SetCategory: function(eventContext){
					   var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
					   var currWO = workOrderSet.getCurrentRecord();
					   var ActCategory = CommonHandler._getAdditionalResource(eventContext,"photosessionlineResource").getCurrentRecord();
					   var category = ActCategory.get("ms_photosessionid");
					   var curCatWO = currWO.get("ms_photosessionid");
					   currWO.set("ms_photosessionid", category);
					   ModelService.save(workOrderSet);
					   //eventContext.ui.show("WorkExecution.AttachmentsView");
					   //var viewId = eventContext.ui.getCurrentViewControl().id.toLowerCase();
					   //eventContext.ui.getCurrentViewControl(viewId).refreshLists();
					   //eventContext.ui.getCurrentViewControl(viewId).refresh();
					},
					
					filterAttachments: function(eventContext){
						var msDoclinksSet = CommonHandler._getAdditionalResource(eventContext,"msDoclinksResource");
						CommonHandler._clearFilterForResource(eventContext,msDoclinksSet);
						var AttachmentSet = CommonHandler._getAdditionalResource(eventContext,"workOrder.attachments");
						CommonHandler._clearFilterForResource(eventContext,AttachmentSet);
						var woCategory = CommonHandler._getAdditionalResource(eventContext,"photosessionlineResource");
						var curCatSet = woCategory.getCurrentRecord();
						var curCat = curCatSet.get("ms_photosessionid");
						var attCatSet = msDoclinksSet.find('ms_photosessionid == $1', curCat);
						if (attCatSet.length != 0){
										for(var j = 0 ; j < attCatSet.length; j++){ //Para cada registro da MS_DOCLINKS
										   var anywhererefid = attCatSet[j].anywhererefid; //Recupera o anywhereRefId da tabela MS_DOCLINKS
										   //if (AttachmentSet.count() > 0){
											   var curAttachment = AttachmentSet.find('anywhereRefId == $1', anywhererefid); //Busca o registro atual na DOCLINKS
											   if (curAttachment.length == 1){
												  curAttachment[0].set("category", attCatSet[j].get("ms_photosessionid")); //Define sua categoria
												  curAttachment[0].get("category");
											   }
										   //}
										}
									}
						
					   /*  if (woCategory.count() != 0) { //Recupera as categorias referentes a OS
							for(var i = 0 ; i < woCategory.count(); i++){ //Para cada Categoria
								category = woCategory.data[i].ms_photosessionid; //Identifica a categoria atual
								var attCatSet = msDoclinksSet.find('ms_photosessionid == $1', category); //Busca os registros na MS_DOCLINKS dessa categoria
									if (attCatSet.length != 0){
										for(var j = 0 ; j < attCatSet.length; j++){ //Para cada registro da MS_DOCLINKS
										   var anywhererefid = attCatSet[j].anywhererefid; //Recupera o anywhereRefId da tabela MS_DOCLINKS
										   //if (AttachmentSet.count() > 0){
											   var curAttachment = AttachmentSet.find('anywhereRefId == $1', anywhererefid); //Busca o registro atual na DOCLINKS
											   if (curAttachment.length == 1){
												  curAttachment[0].set("category", attCatSet[j].get("ms_photosessionid")); //Define sua categoria
												  curAttachment[0].get("category");
											   }
										   //}
										}
									}
							}
						} */
						
/*                          var appAttachmentSet = eventContext.application.getResource('attachments');
						CommonHandler._clearFilterForResource(eventContext,appAttachmentSet);
						var ActCategory = CommonHandler._getAdditionalResource(eventContext,"photosessionlineResource").getCurrentRecord();
						var section = ActCategory.get("ms_photosessionid");
						
						var findNoCat = appAttachmentSet.find('category == null');
						if (findNoCat.length > 0){
							for(var j = 0 ; j < findNoCat.length; j++){
							   findNoCat[j].set("category", section); //Define sua categoria
							}
						}*/
						var appAttachmentSet = eventContext.application.getResource('attachments');
						CommonHandler._clearFilterForResource(eventContext,appAttachmentSet);
						var ActCategory = CommonHandler._getAdditionalResource(eventContext,"photosessionlineResource").getCurrentRecord();
						var section = ActCategory.get("ms_photosessionid");
						appAttachmentSet.filter('category == $1', section);
						//var viewId = eventContext.ui.getCurrentViewControl().id.toLowerCase();
						//eventContext.ui.getCurrentViewControl().refresh();
						//eventContext.ui.getCurrentViewControl().refreshLists();
						
					},
					
					validateAttachments: function(eventContext){
						var AttachmentSet = CommonHandler._getAdditionalResource(eventContext,"workOrder.attachments");
						CommonHandler._clearFilterForResource(eventContext,AttachmentSet);
						var sections = CommonHandler._getAdditionalResource(eventContext,"photosessionlineResource");
						CommonHandler._clearFilterForResource(eventContext,sections);
						var msDoclinksSet = CommonHandler._getAdditionalResource(eventContext,"msDoclinksResource");
						CommonHandler._clearFilterForResource(eventContext,msDoclinksSet);
						
						var reqSections = sections.find('ms_required == 1');
						for(var i = 0 ; i < reqSections.count(); i++){
							var photosessionid = curReqSections[i].ms_photosessionid;
							var ms_minqty = curReqSections[i].ms_minqty;
							var SectionDoclinks = msDoclinksSet.find('ms_photosessionid == $1', photosessionid);
							var SectionDoclinksCount = SectionDoclinks.count();
							
							if (SectionDoclinksCount < ms_minqty){
								var sectionDesc = curReqSections[i].ms_description;
								var strMsg = "A seção de fotos "+ sectionDesc + "precisa de ao menos " + ms_minqty + "fotos para continuar";
								var msg = MessageService.createStaticMessage(strMsg).getMessage()
							   eventContext.ui.showMessage(msg); 
							}
						}
					},
					
					checkAttachmentsOK: function(eventContext){
						var msDoclinksSet = CommonHandler._getAdditionalResource(eventContext,"msDoclinksResource");
						CommonHandler._clearFilterForResource(eventContext,msDoclinksSet);
						var AttachmentSet = CommonHandler._getAdditionalResource(eventContext,"workOrder.attachments");
						CommonHandler._clearFilterForResource(eventContext,AttachmentSet);
						var woCategory = CommonHandler._getAdditionalResource(eventContext,"photosessionlineResource");
						CommonHandler._clearFilterForResource(eventContext,woCategory);
						var show = 1;
						var curCat = woCategory.getCurrentRecord();
						var photosessionid = curCat.get('ms_photosessionid');
						var minqty = curCat.get('ms_minqty');
						var ms_parent = curCat.get("ms_parent");
						var ms_required = curCat.get("ms_required");
						if (ms_parent == null || typeof ms_parent === undefined){
							var childCat = woCategory.find('ms_parent == $1', photosessionid);
							if (childCat.length > 0) {
								for(var i = 0 ; i < childCat.length; i++){ 
									childMinqty = childCat[i].get("ms_minqty");
									childPhotoSessionId = childCat[i].get("ms_photosessionid");
									var childActAtt = msDoclinksSet.find('ms_photosessionid == $1', childPhotoSessionId);
									var childActAttCount = childActAtt.length;
									if (childActAttCount < childMinqty ){
										show = 0;
									}
									else{
										var ActAtt = msDoclinksSet.find('ms_photosessionid == $1', childPhotoSessionId);
										var ActAttCount = ActAtt.length;
										if (childActAttCount < childMinqty){
											show = 0;
										}
									}
								}
							}
							else if (childCat.length == 0 && (ms_parent == null || typeof ms_parent === undefined)){
								var ActAtt = msDoclinksSet.find('ms_photosessionid == $1', photosessionid);
								var ActAttCount = ActAtt.length;
								if (ActAttCount < minqty){
									show = 0;
								}
							}
						}
						else if (ms_parent != null || typeof ms_parent !== undefined){
								var ActAtt = msDoclinksSet.find('ms_photosessionid == $1', photosessionid);
								var ActAttCount = ActAtt.length;
								if (ActAttCount < minqty){
									show = 0;
								}
						}
						var hasChildren = woCategory.find('ms_parent == $1', photosessionid);
						var hasChildrencount = hasChildren.length;
						if (minqty == 0 && hasChildrencount == 0){
							show = 0;
						}
						if (show == 0){
							eventContext.setDisplay(false);
							eventContext.setVisibility(false);
						}
					}, 
					
					checkAttachmentsNOK: function(eventContext){
						var msDoclinksSet = CommonHandler._getAdditionalResource(eventContext,"msDoclinksResource");
						CommonHandler._clearFilterForResource(eventContext,msDoclinksSet);
						var AttachmentSet = CommonHandler._getAdditionalResource(eventContext,"workOrder.attachments");
						CommonHandler._clearFilterForResource(eventContext,AttachmentSet);
						var woCategory = CommonHandler._getAdditionalResource(eventContext,"photosessionlineResource");
						CommonHandler._clearFilterForResource(eventContext,woCategory);
						var show = 0;
						var curCat = woCategory.getCurrentRecord();
						var photosessionid = curCat.get('ms_photosessionid');
						var minqty = curCat.get('ms_minqty');
						var ms_parent = curCat.get("ms_parent");
						var ms_required = curCat.get("ms_required");
						if (ms_parent == null || typeof ms_parent === undefined){
							var childCat = woCategory.find('ms_parent == $1', photosessionid);
							if (childCat.length > 0) {
								for(var i = 0 ; i < childCat.length; i++){ 
									childMinqty = childCat[i].get("ms_minqty");
									childPhotoSessionId = childCat[i].get("ms_photosessionid");
									var childActAtt = msDoclinksSet.find('ms_photosessionid == $1', childPhotoSessionId);
									var childActAttCount = childActAtt.length;
									if (childActAttCount < childMinqty ){
										show = 1;
									}
									else{
										var ActAtt = msDoclinksSet.find('ms_photosessionid == $1', childPhotoSessionId);
										var ActAttCount = ActAtt.length;
										if (childActAttCount < childMinqty){
											show = 1;
										}
									}
								}
							}
							else if (childCat.length == 0 && (ms_parent == null || typeof ms_parent === undefined)){
								var ActAtt = msDoclinksSet.find('ms_photosessionid == $1', photosessionid);
								var ActAttCount = ActAtt.length;
								if (ActAttCount < minqty){
									show = 1;
								}
							}
						}
						else if (ms_parent != null || typeof ms_parent !== undefined){
								var ActAtt = msDoclinksSet.find('ms_photosessionid == $1', photosessionid);
								var ActAttCount = ActAtt.length;
								if (ActAttCount < minqty){
									show = 1;
								}
						}
						var hasChildren = woCategory.find('ms_parent == $1', photosessionid);
						var hasChildrencount = hasChildren.length;
						if (minqty == 0 && hasChildrencount == 0){
							show = 0;
						}
						if (show == 0){
							eventContext.setDisplay(false);
							eventContext.setVisibility(false);
						}
					}, 
					
					
					countAttachmentsSection: function(eventContext){
						var msDoclinksSet = CommonHandler._getAdditionalResource(eventContext,"msDoclinksResource");
						CommonHandler._clearFilterForResource(eventContext,msDoclinksSet);
						var AttachmentSet = CommonHandler._getAdditionalResource(eventContext,"workOrder.attachments");
						CommonHandler._clearFilterForResource(eventContext,AttachmentSet);
						var woCategory = CommonHandler._getAdditionalResource(eventContext,"photosessionlineResource");
						//var viewId = eventContext.ui.getCurrentViewControl().id.toLowerCase();
						//eventContext.ui.getCurrentViewControl(viewId).refresh();
						//eventContext.ui.getCurrentViewControl().refreshLists();
						if (woCategory.count() != 0) { //Recupera as categorias referentes a OS
							for(var i = 0 ; i < woCategory.count(); i++){ //Para cada Categoria
								category = woCategory.data[i].ms_photosessionid; //Identifica a categoria atual
								var attCatSet = msDoclinksSet.find('ms_photosessionid == $1', category); //Busca os registros na MS_DOCLINKS dessa categoria
								var curCat = woCategory.find('ms_photosessionid == $1', category);
								var secAttCount = attCatSet.length;
								var minqty = curCat[0].get("ms_minqty");
								var ms_parent = curCat[0].get("ms_parent");
								var conc = '';
								if (ms_parent != null || typeof ms_parent === undefined || minqty !=0){
									conc = secAttCount + ' / ' + minqty;
									curCat[0].set("secCount", conc);
								}
								else if (ms_parent == null || typeof ms_parent === undefined){
									var countChild = woCategory.find('ms_parent == $1', category);
									if (countChild.length == 0){
										conc = secAttCount + ' / ' + minqty;
										curCat[0].set("secCount", conc);
									}
								}
								else{
									curCat[0].set("secCount", "");
								}
							}
						}
						
					},
					
					hasChildSection: function(eventContext){//evento click na categoria selecionada da lista
						var curSectionSet = CommonHandler._getAdditionalResource(eventContext,"photosessionlineResource").getCurrentRecord();
						var woCategory = eventContext.application.getResource('photosessionlineResource');
						CommonHandler._clearFilterForResource(eventContext,woCategory);
						var curSection = curSectionSet.get("ms_photosessionid");
						var woChildCategory = woCategory.find('ms_parent == $1', curSection);
						if (woChildCategory.length > 0){
							woCategory.filter('ms_parent == $1', curSection);
							//eventContext.ui.getCurrentViewControl().refresh();
							eventContext.ui.getCurrentViewControl().refreshLists();
						}
						else{
							eventContext.ui.show("WorkExecution.FilteredAttachmentsView");
						}
					},
					
					filterChildSection: function(eventContext){//evento click na categoria selecionada da lista
						var curSectionSet = CommonHandler._getAdditionalResource(eventContext,"photosessionlineResource").getCurrentRecord();
						var woCategory = eventContext.application.getResource('photosessionlineResource');
						CommonHandler._clearFilterForResource(eventContext,woCategory);
						var curSection = curSectionSet.get("ms_photosessionid");
						var woChildCategory = woCategory.find('ms_parent == $1', curSection);
						if (woChildCategory.length > 0){
							woCategory.filter('ms_parent == $1', curSection);
						}
					},
					
					filterParentSection: function(eventContext){//evento show na lista de categorias
						var woCategory = CommonHandler._getAdditionalResource(eventContext,"photosessionlineResource");
						var ms_parent = woCategory.get('ms_parent');
						CommonHandler._clearFilterForResource(eventContext,woCategory);
						woCategory.filter("ms_parent == null");
					},
					
					filterOrigRec: function(eventContext){//filtra o registro especifico que originou o subitem de controle tecnologico (click)
						var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
						var curWo = workOrderSet.getCurrentRecord();
						var parentWO = curWo.get("parentwonum");
						var wotcorigrec = CommonHandler._getAdditionalResource(this,"wotcorigirec");
						var subItem = curWo.get('wonum');
						CommonHandler._clearFilterForResource(eventContext,wotcorigrec);
						wotcorigrec.filter("subitemtc == $1", subItem);
						eventContext.ui.show("WorkExecution.OSOriginal");
					},
					
					filterOrigWoAtt: function(eventContext){//filtra o registro especifico que originou o subitem de controle tecnologico (click)
						var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
						var curWo = workOrderSet.getCurrentRecord();
						var parentWO = curWo.get("parentwonum");
						var wotcorigrec = CommonHandler._getAdditionalResource(this,"wotcorigirec");
						var origattachment = CommonHandler._getAdditionalResource(this,"origattachment");
						var subItem = curWo.get('wonum');
						CommonHandler._clearFilterForResource(eventContext,wotcorigrec);
						CommonHandler._clearFilterForResource(eventContext,origattachment);
						wotcorigrec.filter("subitemtc == $1", subItem);
						origattachment.filter("identifier == $1", wotcorigrec.data[0].get("ctwo"));
						eventContext.ui.show("OrigItem.AttachmentsView");  
					},
					
					filterAttributesItem: function(eventContext){//filtra o registro especifico que originou o subitem de controle tecnologico (render)
						var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
						var curWo = workOrderSet.getCurrentRecord();
						var subItem = curWo.get('identifier');
						var Spec = eventContext.application.getResource("workOrder.workOrderSpec");	
						CommonHandler._clearFilterForResource(eventContext,Spec);
						Spec.filter("refobjectid == $1", subItem);
						 var viewId = eventContext.ui.getCurrentViewControl().id.toLowerCase();
						eventContext.ui.getCurrentViewControl(viewId).refreshLists();
						eventContext.ui.getCurrentViewControl(viewId).refresh(); 
					},
					filterAttributesOrigItem: function(eventContext){//filtra o registro especifico que originou o subitem de controle tecnologico (render)
						var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
						var wotcorigirecSet = CommonHandler._getAdditionalResource(this,"wotcorigirec");
						var curWo = workOrderSet.getCurrentRecord();
						var curWoOrig = wotcorigirecSet.getCurrentRecord();
						var ItemOrig = curWoOrig.get("ctwo");
						var Spec = eventContext.application.getResource("workOrder.workOrderSpec");	
						CommonHandler._clearFilterForResource(eventContext,Spec);
						var subItemSpec = Spec.filter("refobjectid == $1", ItemOrig);
						var viewId = eventContext.ui.getCurrentViewControl().id.toLowerCase();
						eventContext.ui.getCurrentViewControl(viewId).refreshLists();
						eventContext.ui.getCurrentViewControl(viewId).refresh(); 
					},
					backSpec: function(eventContext){//filtra o registro especifico que originou o subitem de controle tecnologico (click)
						var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
						var curWo = workOrderSet.getCurrentRecord();
						ModelService.save(workOrderSet);
						var viewHistory = eventContext.ui.viewHistory;
						var previousView = viewHistory[viewHistory.length-2];
						eventContext.ui.returnToView(previousView.id);
					},
					
					defCatAttachments: function(eventContext){
						//Funcao tem como objetivo filtrar os anexos pertencentes a categoria selecionada.
						/* var viewId = eventContext.ui.getCurrentViewControl().id.toLowerCase();
						eventContext.ui.getCurrentViewControl(viewId).refreshLists();
						eventContext.ui.getCurrentViewControl(viewId).refresh(); */
												   
						var msDoclinksSet = CommonHandler._getAdditionalResource(eventContext,"msDoclinksResource");
						CommonHandler._clearFilterForResource(eventContext,msDoclinksSet);
						var AttachmentSet = CommonHandler._getAdditionalResource(eventContext,"workOrder.attachments");
						CommonHandler._clearFilterForResource(eventContext,AttachmentSet);
						var woCategory = CommonHandler._getAdditionalResource(eventContext,"photosessionlineResource");
						
						if (woCategory.count() != 0) { //Recupera as categorias referentes a OS
							for(var i = 0 ; i < woCategory.count(); i++){ //Para cada Categoria
								category = woCategory.data[i].ms_photosessionid; //Identifica a categoria atual
								var attCatSet = msDoclinksSet.find('ms_photosessionid == $1', category); //Busca os registros na MS_DOCLINKS dessa categoria
									if (attCatSet.length != 0){
										for(var i = 0 ; i < attCatSet.length; i++){ //Para cada registro da MS_DOCLINKS
										   var anywhererefid = attCatSet[i].anywhererefid; //Recupera o anywhereRefId da tabela MS_DOCLINKS
										   if (AttachmentSet.count() > 0){
											   for(var i = 0 ; i < AttachmentSet.count() ; i++){ //Para cada registro da DOCLINKS
												   var curAttachment = AttachmentSet.find('anywhereRefId == $1', anywhererefid); //Busca o registro atual na DOCLINKS
												   if (curAttachment.length == 1){
													   curAttachment[i].set("category", attCatSet[i].get("ms_photosessionid")); //Define sua categoria
													   curAttachment[i].get("category");
												   }
											   }
										   }
										}
									}
							}
						}
								
						
						/* var category = ActCategory.get("ms_photosessionid");
						var CatAttSet = msDoclinksSet.find('ms_photosessionid == $1', category);
						
						if (msDoclinksSet.count() != 0){
							var anywhererefid = "";
							if (CatAttSet.length > 0){			
								for(var i = 0 ; i < CatAttSet.length ; i++){					
									
									var curAttachment = AttachmentSet.find('anywhereRefId == $1', anywhererefid);
									curCat = curAttachment[0].category;
									curAttachment[0].set("category", CatAttSet[i].get("ms_photosessionid"));
								}
								AttachmentSet.filter('category == $1', category);
							}
/*                                  else{
								AttachmentSet.filter('anywhereRefId == 0');
								
							}  */
						 
						
					},

					selectTeamLookup : function (eventContext) {
						var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
						var msamcrew = CommonHandler._getAdditionalResource(eventContext,"msamcrew");
						CommonHandler._clearFilterForResource(eventContext,msamcrew);

						let wo = workOrderSet.getCurrentRecord();
						let pd_contractnum = wo.get("pd_contractnum");
						let siteid = wo.get("siteid");
						var filter = [];		

						msamcrew.filter('ms_contractnum == $1 && ms_active == $2', pd_contractnum, 1);
					},

					/*isOrigRec: function(eventContext){//filtra o registro especifico que originou o subitem de controle tecnologico (click)
						var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
						var curWo = workOrderSet.getCurrentRecord();
						let classifications = ['1569','1570','1571','1572', '1573'];
						let classification;
						if (curWo.get('classstructureid')) {
							classification = curWo.get('classstructureid');
							classifications.forEach(element => {
								if (classification == element) {
									eventContext.setDisplay(false);
									eventContext.setVisibility(false);	
								}
							});
								
						}
					},
					*/
					isOrigRec: function(eventContext){//filtra o registro especifico que originou o subitem de controle tecnologico (click)
						var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
						var curWo = workOrderSet.getCurrentRecord();
						var parentWO = curWo.get("parentwonum");
						var wotcorigrec = CommonHandler._getAdditionalResource(this,"wotcorigirec");
						var subItem = curWo.get('wonum');
						CommonHandler._clearFilterForResource(eventContext,wotcorigrec);
						let isOrigRec = wotcorigrec.filter("subitemtc == $1", subItem);
						if(!isOrigRec.data.length > 0){
							eventContext.setDisplay(false);
							eventContext.setVisibility(false);							
						}
					},


				});
		
		
				
		

	});