define("custom/handlers/MSStatusChangeHandler", [
  "dojo/_base/declare",
  "platform/handlers/_ApplicationHandlerBase",
  "platform/auth/UserManager",
  "application/handlers/StatusChangeHandler",
  "custom/handlers/WorkOrderStatusHandler",
  "platform/exception/PlatformRuntimeException",
  "platform/warning/PlatformRuntimeWarning",
  "application/handlers/CommonHandler",
  "platform/model/ModelService",
  "platform/logging/Logger",
  "platform/handlers/WorkOfflineHandler",
  "dojo/Deferred",
  "dojo/dom",
  "dojo/dom-style",
  "platform/translation/MessageService",
  "platform/util/PlatformConstants"
], function (
  declare,
  ApplicationHandlerBase,
  UserManager,
  StatusChangeHandler,
  WorkOrderStatusHandler,
  PlatformRuntimeException,
  PlatformRuntimeWarning,
  CommonHandler,
  ModelService,
  Logger,
  WorkOfflineHandler,
  Deferred,
  dom, 
  domStyle, 
  MessageService,
  PlatformConstants
) {
  return declare([ApplicationHandlerBase, StatusChangeHandler], {
    dummyMethod: function (eventContext) {},

    filterWOStatus: function (eventContext) {
      this.inherited(arguments);

      var currWO = eventContext.application
        .getResource("workOrder")
        .getCurrentRecord();
      var currStatus = currWO.get("status");

      var woStatusDomain = this.application.getResource("domainwostatus");

      /* Remover rotina deixar somente para aprovado.
					if (woStatusDomain.isFiltered() && currStatus != "WAPPR") {
						woStatusDomain.filter("value!=$1", "CONC");
						
					} else if (woStatusDomain.isFiltered()
							&& currStatus != "APPR") {
						woStatusDomain.filter("value!=$1", "APROVADO");
					}
					
					if (woStatusDomain.isFiltered()
							&& currStatus == "APPR") {
						woStatusDomain.filter("value!=$1","APROVADO");
							
					}
					
					if (woStatusDomain.isFiltered()
								&& currStatus == "AGINSP") {
							woStatusDomain.filter("value!=$1", "CONC");
					
						}*/
    },

    setChangeStatusDate: function (eventContext) {
      var statusChange = eventContext.getResource().getCurrentRecord();
      statusChange.setDateValue(
        "changestatusdate",
        this.application.getCurrentDateTime()
      );
    },

    yes_questions01: function (eventContext) {
      var currWO = eventContext.getResource().getCurrentRecord();
      currWO.set("pd_inspquestion01", "Sim");
      //currWO.setPendingValue("pd_inspquestion01", "Sim");
      eventContext.ui.show("WorkExecution.QuestionsViewClass");
      this.inherited(arguments);
    },


    yes_questions02: function (eventContext) {
      var currWO = eventContext.getResource().getCurrentRecord();
      var questao3 = currWO.get("pd_inspquestion03");

      if (questao3 == null || questao3 == "") {
        currWO.set("pd_inspquestion02", "Sim");
        ///eventContext.ui.show('WorkExecution.WorkItemsView');
      } else {
        currWO.set("pd_inspquestion02", "Não");
      }

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
        statusChange.setDateValue(
          "pd_inspdate",
          this.application.getCurrentDateTime()
        );
      }
      this.inherited(arguments);
    },
    
    hideQuestAfterResponse: function (eventContext) {
      var statusChangeWO = eventContext.getResource().getCurrentRecord();
      var statusdate = statusChangeWO.get("changestatusdate");
      var status = statusChangeWO.get("status");
      var typeInsp;
      if (statusChangeWO.get("ms_insptype") == null || statusChangeWO.get("ms_insptype") == ""|| statusChangeWO.get("ms_insptype") == undefined) {
        typeInsp = workorder.get("ms_insptype");
      }else{
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
      var statusChangeWO = CommonHandler._getAdditionalResource(
        eventContext,
        "statusChangeResource"
      ).getCurrentRecord();

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

    no_questions02: function (eventContext) {
      var statusChange = eventContext.getResource().getCurrentRecord();
      statusChange.set("pd_inspquestion02", "Não");
      statusChange.setDateValue("pd_inspdate", currentData);
      this.inherited(arguments);
    },

    no_questions04: function (eventContext) {
      var statusChange = eventContext.getResource().getCurrentRecord();
      statusChange.set("ms_inspquestion04", "Não");
      statusChange.setDateValue(
        "ms_inspdate04",
        this.application.getCurrentDateTime()
      );
      var myUser = UserManager.getCurrentUser();
      statusChange.set("ms_inspector04", myUser);
      var workOrder = eventContext.application.getResource("workOrder");
      var deferred = new Deferred();
      ModelService.save(workOrder).then(function (result) {
        deferred.resolve();
      });
      //eventContext.ui.show('WorkExecution.WorkItemsView');
      //return ;
      this.inherited(arguments);
    },

    yes_questions04: function (eventContext) {
      var statusChange = eventContext.getResource().getCurrentRecord();
      statusChange.set("ms_inspquestion04", "Sim");
      statusChange.setDateValue(
        "ms_inspdate04",
        this.application.getCurrentDateTime()
      );
      var myUser = UserManager.getCurrentUser();
      statusChange.set("ms_inspector04", myUser);

      var workOrder = eventContext.application.getResource("workOrder");
      var deferred = new Deferred();
      ModelService.save(workOrder).then(function (result) {
        deferred.resolve();
      });
      //eventContext.ui.show('WorkExecution.WorkItemsView');
      //return ;
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
      var attachments_crecord = CommonHandler._getAdditionalResource(eventContext,"attachments");
      attachments_crecord.filter("creationDate > $1", statusdate);
      let attachmentssize = workorder.get("attachmentssize");
      var ms_insptype = workorder.get("ms_insptype");
      let status = workorder.get("status");


      if (attachmentssize == '--') {
        workorder.set("attachmentssize", "0");
        attachmentssize = workorder.get("attachmentssize");
      }

      if (typeof attachmentssize == 'string') {
        attachmentssize = parseInt(attachmentssize);
      }

      if ((attachments_crecord.count() < 2 &&  attachmentssize < 2 )){
        eventContext.setDisplay(false);
        eventContext.setVisibility(false);
      }

      if ((attachments_crecord.count() >= 2 &&  attachmentssize >= 2 && ms_insptype == "1" && status != "AGINSP" )){
        eventContext.setDisplay(false);
        eventContext.setVisibility(false);
      }

      if ((attachments_crecord.count() >= 2 &&  attachmentssize >= 2 && ms_insptype == "2")){
        if (status != "NOVO" && status != "PLANEJAR") {
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
        //eventContext.ui.show("WorkExecution.Reinspecview");
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
      var pd_inspdate04 = workorder.get("ms_inspdate04");
      var pd_inspdate = workorder.get("pd_inspdate");
      var AttCount = attachments_crecord.count();
      var ms_insptype = workorder.get("ms_insptype");

      if (
        attachments_crecord.count() < 2 ||
        pd_inspdate04 != null ||
        ms_insptype == "1"
      ) {
        eventContext.setDisplay(false);
        eventContext.setVisibility(false);
      }
    },

    planejado: function (eventContext, skipDynamicCheck) {
      let statusChangeResource = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
      var attachments = eventContext.application.getResource("attachments");
      var statusChange = eventContext.getResource().getCurrentRecord();
      var questao3 = statusChange.get("pd_inspquestion03");
      var statusdate = statusChange.get("changestatusdate");

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
      
      if (attachments_crecord.count() < 2 &&  attachmentssize < 2 ) {
        throw new PlatformRuntimeException("ms_invalidstatusattachmenterror");
      }
      if (questao3 == null || questao3 == "" || questao3 == "Sim") {
        statusChange.set("pd_inspquestion01", "Sim");
        statusChange.set("pd_inspquestion02", "Sim");
        statusChangeResource.set("status", "PLANEJAR");
        statusChange.setDateValue("pd_inspdate",this.application.getCurrentDateTime());
        this.saveWOShowViewPlanejado(eventContext);
      } else {
        statusChange.set("pd_inspquestion01", "Sim");
        statusChange.set("pd_inspquestion02", "Não");
        statusChangeResource.set("status", "PREPLAN");
        statusChange.setDateValue("pd_inspdate",this.application.getCurrentDateTime());
        this.saveWOShowViewPlanejado(eventContext);
      }

      this.inherited(arguments);
    },

    saveWOShowViewPlanejado: function (eventContext) {
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
      var attachments = eventContext.application.getResource("attachments");
      var statusChange = eventContext.getResource().getCurrentRecord();
      var questao3 = statusChange.get("pd_inspquestion03");
      var attachments_crecord = CommonHandler._getAdditionalResource(eventContext,"attachments");
      attachments_crecord.filter("creationDate > $1", statusdate);
      var statusdate = statusChange.get("changestatusdate");

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
      }

      //if (questao3 == null || questao3 == "" || questao3 == "Sim") {
        statusChangeWO.set("status", "PLANEJAR");
        statusChange.setDateValue("pd_inspdate04",this.application.getCurrentDateTime());
        this.saveWOShowViewReinsp(eventContext);
      //}

      this.inherited(arguments);
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

    preplan: function (eventContext) {
      let statusChangeResource = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
      var statusChange = eventContext.getResource().getCurrentRecord();
      var attachments = eventContext.application.getResource("attachments");
      var statusdate = statusChange.get("changestatusdate");


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
      
      if (attachments_crecord.count() < 2 &&  attachmentssize < 2 ) {
        throw new PlatformRuntimeException("ms_invalidstatusattachmenterror");
      } else {
        statusChangeResource.set("status", "PREPLAN");
        statusChange.set("status", "PREPLAN");
        statusChange.set("pd_inspquestion01", "Sim");
        statusChange.set("pd_inspquestion02", "Não");
			  statusChange.setDateValue("pd_inspdate",this.application.getCurrentDateTime());
      }

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

    handleBackCleanfunction(eventContext){
      //eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
      var statusChangeWO = eventContext.getResource().getCurrentRecord();
      let wo = eventContext.application.getResource('workOrder').getCurrentRecord();
      var statusdate = statusChangeWO.get("changestatusdate");
      var status = statusChangeWO.get("status");
      var typeInsp;
      if (statusChangeWO.get("ms_insptype") == null || statusChangeWO.get("ms_insptype") == ""|| statusChangeWO.get("ms_insptype") == undefined) {
        typeInsp = workorder.get("ms_insptype");
      }else{
        typeInsp = statusChangeWO.get("ms_insptype");
      }

      if (typeInsp == "1") {
        Logger.error("Eh uma confirmação de existencia");
        if (status == "AGINSP") {
          wo.set('pd_inspquestion01', null);
          wo.set('pd_inspquestion02', null);
          wo.set('pd_inspquestion03', null);
          wo.setDateValue("pd_inspdate", null);
          wo.setDateValue("pd_inspector", null);
        }
      } else {
        Logger.error("Eh uma confirmação de execucao");
      }
      eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
    }

  });
});
