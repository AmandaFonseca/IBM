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
			     "platform/exception/PlatformRuntimeException"],
		function(declare, arrayUtil, lang, ApplicationHandlerBase, CommonHandler,
				WorkOrderObject, ModelService, AsyncAwareMixin, Logger,PlatformConstants,UserManager,GeoLocationTrackingService,MapProperties,MessageService,PlatformRuntimeException) {

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
								eventContext.ui.showMessage(MessageService.createStaticMessage("To create a service item, change the OS status to In Progress.").getMessage());
							}
						},

						initServiceItemWorkOrderView : function(eventContext) {
							Logger.trace("[WODetailHandler] Initializing FollowUpWorkOrderView");
							this.originalWorkOrder = eventContext.application.getResource('workOrder').getCurrentRecord();

							//var woFollowUpInfo = this.application.getResource('woFollowUpInfo').getCurrentRecord();
							//woFollowUpInfo.set('isFollowUpSetLoc', true);

							//var domainwostatus = CommonHandler._getAdditionalResource(eventContext,"domainwostatus");
							//CommonHandler._clearFilterForResource(eventContext,domainwostatus);

							var newWorkOrder = eventContext.application.getResource('workOrder').createNewRecord();

							newWorkOrder.set('parentwonum', this.originalWorkOrder.get('parentwonum'));
							newWorkOrder.set('woclass', this.originalWorkOrder.get('woclass'));
							//newWorkOrder.set('origrecordid', this.originalWorkOrder.get('wonum'));
							//newWorkOrder.set('origrecordclass', this.originalWorkOrder.get('woclass'));
							newWorkOrder.set('description', this.originalWorkOrder.get('description'));
							newWorkOrder.set('longdescription', this.originalWorkOrder.get('longdescription'));
							newWorkOrder.set('asset', this.originalWorkOrder.get('asset'));
							newWorkOrder.set('assetdesc', this.originalWorkOrder.get('maxassetdesc'));
							newWorkOrder.set('location', this.originalWorkOrder.get('location'));
							newWorkOrder.set('locationdesc', this.originalWorkOrder.get('maxlocationdesc'));
							newWorkOrder.set('pluscloop', this.originalWorkOrder.get('pluscloop'));
							newWorkOrder.set('pluscphyloc', this.originalWorkOrder.get('pluscphyloc'));
							newWorkOrder.set('worktype', this.originalWorkOrder.get('worktype'));
							newWorkOrder.set('newchildclass', this.originalWorkOrder.get('newchildclass'));
							newWorkOrder.set('istask', this.originalWorkOrder.get('istask'));
							newWorkOrder.set('jobtaskid', this.originalWorkOrder.get('jobtaskid'));
							newWorkOrder.set('parentchgsstatus', this.originalWorkOrder.get('parentchgsstatus'));
							//newWorkOrder.set('priority', this.originalWorkOrder.get('priority'));
							newWorkOrder.set('status', 'EMAND');
							//newWorkOrder.set('pd_wkf', true);
							newWorkOrder.set('sourcesysid', 'ANYWHERE');
							newWorkOrder.setDateValue('changestatusdate', this.application.getCurrentDateTime());
							newWorkOrder.set('failurecode', this.originalWorkOrder.get('failurecode'));
							newWorkOrder.set('failureCodeDesc', this.originalWorkOrder.get('failureCodeDesc'));
							//this.updateFollwupGPSPosition(newWorkOrder);

							newWorkOrder.set('woserviceaddressline2', this.originalWorkOrder.get('woserviceaddressline2'));
							//newWorkOrder.set('woservicetaddrnumber', this.originalWorkOrder.get('woservicetaddrnumber'));
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


							if (WL.StaticAppProps.APP_ID!="Inspection"){
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
							} else {
								eventContext.ui.show("WorkExecution.FollowUpWorkOrderView");
								eventContext.application.hideBusy();
							}
						},

						commitNewWorkOrderView : function(eventContext) {
							if (eventContext.ui.getCurrentViewControl().validate()) {
								eventContext.application.showBusy();
								var workOrderSet = eventContext.application.getResource('workOrder');
								var newWorkOrder = workOrderSet.getCurrentRecord();
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

						/*setLinkWaze : function(eventContext){
                        					try
                                            {
                                              // Launch Waze to look for Hawaii:
                                              String url = "https://waze.com/ul?q=Magna%20Sistemas";
                                              Intent intent = new Intent( Intent.ACTION_VIEW, Uri.parse( url ) );
                                              startActivity( intent );
                                            }
                                            catch ( ActivityNotFoundException ex  )
                                            {
                                              // If Waze is not installed, open it in Google Play:
                                              Intent intent = new Intent( Intent.ACTION_VIEW, Uri.parse( "market://details?id=com.waze" ) );
                                              startActivity(intent);
                                            }

                        },*/

						handleConditionalReadOnlyMeasureunitid : function(eventContext) {
							var currentWorkOrder = eventContext.application.getResource("workOrder").getCurrentRecord();
							var wostatus = currentWorkOrder.get("status");

							if (currentWorkOrder != null && currentWorkOrder.workOrderSpec != null){
								for (var i = 0; i < currentWorkOrder.workOrderSpec.count(); i++) {
									var currWorkOrderSpec = currentWorkOrder.workOrderSpec.getRecordAt(i);
									currWorkOrderSpec.getRuntimeFieldMetadata("numvalue").set("readonly", wostatus != "EMAND");
									currWorkOrderSpec.getRuntimeFieldMetadata("alnvalue").set("readonly", wostatus != "EMAND");
									
								}
							}
							
							eventContext.refresh();
							
						},

						
					});
			
			

		});
