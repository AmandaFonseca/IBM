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
define("custom/handlers/MSClassifyWorkOrderHandler", [
  "dojo/_base/array",
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
  "platform/comm/_ConnectivityChecker",
  "dojo/dom",
  "dojo/dom-style",
  "platform/translation/MessageService",
  //"platform/auth/UserAuthenticationManager",
  "platform/model/PushingCoordinatorService",
  "platform/auth/UserManager"
], function (
  arrayUtil,
  declare,
  Deferred,
  all,
  Logger,
  ModelService,
  CommonHandler,
  ResourceMetadata,
  PlatformConstants,
  PlatformRuntimeException,
  PlatformRuntimeWarning,
  WorkOrderObject,
  ApplicationHandlerBase,
  ConnectivityChecker, dom, domStyle, MessageService, PushingCoordinatorService, UserManager
) {
  return declare([ApplicationHandlerBase], {
    pageStack: [],
    currentClass: null,
    topPage: false,
    pageStack : [],
		currentClassDesc : null,
		hasConnectivity: null,

    /**@memberOf application.handlers.ClassifyWorkOrderHandler */
    
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
			Logger.trace("Saving off the current reason");
			var woSet = eventContext.application.getResource('workOrder');
      let statusChangeResource = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
      statusChangeResource.set("status","PRECANC");
			var wo = woSet.getCurrentRecord();
		 	wo.set('pd_inspquestion01', "Não");
			wo.set('ms_inspwhy', this.currentClass);
			wo.set('pdwhy_description', this.currentClassDesc);
			wo.setDateValue("pd_inspdate", this.application.getCurrentDateTime());
      let self = this;
      self.precanc(eventContext, skipDynamicCheck);
			WorkOrderObject.updateSpecifications(wo).then(function(){
				eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
			}).otherwise(function(e){
				eventContext.application.hideBusy();
			});
		  this.inherited(arguments);	 			
		},   

		precanc: function (eventContext, skipDynamicCheck) {
      let statusChangeResource = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
			var statusChange = eventContext.getResource().getCurrentRecord();
			var attachments = eventContext.application.getResource("attachments");
      var attachments_crecord = CommonHandler._getAdditionalResource(eventContext,"attachments");
      var statusdate = statusChangeResource.get("changestatusdate");
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

			if (attachments_crecord.count() < 2 &&  attachmentssize < 2 ) {
			  throw new PlatformRuntimeException("ms_invalidstatusattachmenterror");
			} else {
			  statusChangeResource.set("status", "PRECANC");
        statusChange.set("pd_inspquestion01", "Não");
			  statusChange.set("pd_inspquestion02", null);
			  statusChange.set("pd_inspquestion03", null);
			  statusChange.setDateValue("pd_inspdate",this.application.getCurrentDateTime());
        this.saveWOShowView(eventContext);
			}
	  
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
      if (wo.get("ms_insptype") == null || wo.get("ms_insptype") == ""|| wo.get("ms_insptype") == undefined) {
        typeInsp = wo.get("ms_insptype");
      }else{
        typeInsp = wo.get("ms_insptype");
      }
      if (typeInsp == "1") {
        wo.set('ms_inspwhy', this.currentClass);
        wo.set('pdwhy_description', this.currentClassDesc);
      }
      wo.set("ms_inspquestion04","Sim");
			wo.set('statusdesc', "Pré-Cancelado")
			wo.setDateValue("pd_inspdate04", this.application.getCurrentDateTime());
      var myUser = UserManager.getCurrentUser();
			wo.set("ms_inspector04", myUser);
      let self = this;
			self.precancReinsp(eventContext, skipDynamicCheck);
			WorkOrderObject.updateSpecifications(wo).then(function(){
				eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
			}).otherwise(function(e){
				eventContext.application.hideBusy();
			});
		  this.inherited(arguments);	 			
		},       
    precancReinsp: function (eventContext, skipDynamicCheck) {
      let statusChangeResource = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
			var statusChange = eventContext.getResource().getCurrentRecord();
			var attachments = eventContext.application.getResource("attachments");
      var attachments_crecord = CommonHandler._getAdditionalResource(eventContext,"attachments");
      var statusdate = statusChangeResource.get("changestatusdate");
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

			if (attachments_crecord.count() < 2 &&  attachmentssize < 2 ) {
			  throw new PlatformRuntimeException("ms_invalidstatusattachmenterror");
			} else {
        statusChangeResource.set("status","PRECANC");
        statusChange.set("status", "PRECANC");
        statusChange.set("pd_inspquestion03", null);
        this.saveWOShowViewReinsp(eventContext);

			}
	  
			this.inherited(arguments);
		},

    saveWOShowView: function (eventContext) {
      var workOrder = eventContext.application.getResource("workOrder");
      var deferred = new Deferred();
      ModelService.save(workOrder)
        .then(function (result) {
          eventContext.ui.showMessage("Inspeção salva!");
          deferred.resolve();
        })
        .otherwise(function (error) {
          deferred.reject(error);
        });
    
      },

    saveWOShowViewReinsp: function (eventContext) {
      var workOrder = eventContext.application.getResource("workOrder");
      var deferred = new Deferred();
      ModelService.save(workOrder)
        .then(function (result) {
          deferred.resolve();
          //eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
          eventContext.ui.returnToView("WorkExecution.WorkItemsView");     
        })
        .otherwise(function (error) {
          deferred.reject(error);
        });
    },  

    redirect(eventContext){
      //eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
      var statusChangeWO = eventContext.getResource().getCurrentRecord();
      let wo = eventContext.application.getResource('workOrder').getCurrentRecord();
      var statusdate = statusChangeWO.get("changestatusdate");
      var status = statusChangeWO.get("status");
       let question04= wo.get('ms_inspquestion04');

      var typeInsp;
      if (statusChangeWO.get("ms_insptype") == null || statusChangeWO.get("ms_insptype") == ""|| statusChangeWO.get("ms_insptype") == undefined) {
        typeInsp = workorder.get("ms_insptype");
      }else{
        typeInsp = statusChangeWO.get("ms_insptype");
      }
      if (typeInsp == "1") {
        Logger.error("Eh uma confirmação de existencia");
        if (status != "AGINSP") {
          eventContext.ui.returnToView("WorkExecution.WorkItemsView");
        }
      } else {
        Logger.error("Eh uma confirmação de execucao");
      }
    }
    
  });
});
