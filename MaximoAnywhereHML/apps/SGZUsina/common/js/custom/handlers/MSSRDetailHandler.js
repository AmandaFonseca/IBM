/*
 * Licensed Materials - Property of IBM
 * "Restricted Materials of IBM"
 * CLAUDIO MAGNA
 * 5725-M39
 *
 * (C) COPYRIGHT IBM CORP. 2013 All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp.
 *
 */

define("custom/handlers/MSSRDetailHandler", [
  "dojo/_base/declare",
  "dojo/_base/array",
  "dojo/_base/lang",
  "dojo/topic",
  "dojo/date",
  "dojo/number",
  "platform/handlers/_ApplicationHandlerBase",
  "platform/comm/CommunicationManager",
  "application/business/ServiceRequestObject",
  "application/business/SynonymDomain",
  "platform/model/ModelService",
  "platform/translation/MessageService",
  "application/handlers/CommonHandler",
  "application/business/FieldUtil",
  "platform/exception/PlatformRuntimeException",
  "platform/warning/PlatformRuntimeWarning",
  "platform/auth/UserManager",
  "platform/util/PlatformConstants",
  "application/business/WpEditSettings",
  "platform/util/AsyncAwareMixin",
  "platform/store/_ResourceMetadataContext",
  "platform/logging/Logger",
  "platform/geolocation/GeoLocationServiceHelper",
  "platform/attachment/AttachmentService",
  "platform/util/DateTimeUtil",
], function (
  declare,
  arrayUtil,
  lang,
  topic,
  date,
  number,
  ApplicationHandlerBase,
  CommunicationManager,
  SGZUsina,
  SynonymDomain,
  ModelService,
  MessageService,
  CommonHandler,
  FieldUtil,
  PlatformRuntimeException,
  PlatformRuntimeWarning,
  UserManager,
  PlatformConstants,
  WpEditSettings,
  AsyncAwareMixin,
  ResourceMetaData,
  Logger,
  GeoLocationServiceHelper,
  AttachmentService,
  DateTimeUtil
) {
  var listSizeArray = [
    "tasklistsize",
    "assignmentlistsize",
    "materiallistsize",
    "toollistsize",
    "actuallaborlistsize",
    "actualmateriallistsize",
    "actualtoollistsize",
    "workloglistsize",
    "multiassetloclistsize",
    "attachmentssize",
  ];
  var attributes = [
    "tasklist",
    "assignmentlist",
    "materiallist",
    "toollist",
    "actuallaborlist",
    "actualmateriallist",
    "actualtoollist",
    "workloglist",
    "multiassetloclist",
    "attachments",
  ];
  
  var loadingLists = false;
  return declare([ApplicationHandlerBase, AsyncAwareMixin], {
    //this attribute was inserted to set the location back when canceling
    curLocation: null,
    curLocationDesc: null,
    currLocationld: null,
    curAsset: null,
    curAssetDesc: null,
    curAssetld: null,
    originalServiceRequest: null, //used to mark the orig service request as having followup when the followup is saved
    resolveLocation: null,
    fromErrorLink: null,

    /**@memberOf application.handlers.SRDetailHandler */
    initAssetField: function (eventContext) {
      var actualServiceRequest = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      ).getCurrentRecord();
      var oslcwpeditsetting = CommonHandler._getAdditionalResource(
        eventContext,
        "oslcwpeditsetting"
      );
      var domainAssetstatus = CommonHandler._getAdditionalResource(
        eventContext,
        "domainwostatus"
      );

      CommonHandler._clearFilterForResource(eventContext, oslcwpeditsetting);

      if (actualServiceRequest == null) {
        return;
      }

      actualServiceRequest
        .getRuntimeFieldMetadata("asset")
        .set(
          "readonly",
          !WpEditSettings.shouldEditAsset(
            oslcwpeditsetting,
            SynonymDomain.resolveToInternal(
              domainAssetstatus,
              actualServiceRequest.get("status")
            ),
            actualServiceRequest.get("orgid")
          )
        );

      //set asset description
      if (
        !actualServiceRequest.get("assetdesc") &&
        actualServiceRequest.get("asset") != null
      ) {
        actualServiceRequest.set(
          "assetdesc",
          actualServiceRequest.get("maxassetdesc")
        );
      }
    },

    initLocationField: function (eventContext) {
      var actualServiceRequest = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      ).getCurrentRecord();
      var oslcwpeditsetting = CommonHandler._getAdditionalResource(
        eventContext,
        "oslcwpeditsetting"
      );
      var domainAssetstatus = CommonHandler._getAdditionalResource(
        eventContext,
        "domainwostatus"
      );

      CommonHandler._clearFilterForResource(eventContext, oslcwpeditsetting);

      if (actualServiceRequest == null) {
        return;
      }
      actualServiceRequest
        .getRuntimeFieldMetadata("location")
        .set(
          "readonly",
          !WpEditSettings.shouldEditLocation(
            oslcwpeditsetting,
            SynonymDomain.resolveToInternal(
              domainAssetstatus,
              actualServiceRequest.get("status")
            ),
            actualServiceRequest.get("orgid")
          )
        );
    },

    //initGPSField: function(eventContext){
    //	var currSR = CommonHandler._getAdditionalResource(eventContext,"sgzUsina").getCurrentRecord();
    //	var gpsLocation = currSR.get('gpsLocation');
    // we only want to set the default on the first init.  If the user changes it and navigates to another screen, we don't want to re-init the value.
    //	if (gpsLocation == null) {
    //		currSR.set('gpsLocation', true);
    //	}
    //},

    initEditLocationView: function (eventContext) {
      var currSR = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      ).getCurrentRecord();

      this.curLocation = currSR.get("location");
      this.curLocationDesc = currSR.get("locationdesc");
      this.currLocationld = currSR.get("locationld");
      this.curAsset = currSR.get("asset");
      this.curAssetDesc = currSR.get("assetdesc");
      this.curAssetld = currSR.get("assetld");
    },


    initActionPanel: function (eventContext) {
      this.fromErrorLink = false;
    },

    initEditAssetView: function (eventContext) {
      var currSR = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      ).getCurrentRecord();

      this.curAsset = currSR.get("asset");
      this.curAssetDesc = currSR.get("assetdesc");
      this.curAssetld = currSR.get("assetld");

      this.curLocation = currSR.get("location");
      this.curLocationDesc = currSR.get("locationdesc");
      this.currLocationld = currSR.get("locationld");
    },

    errorCheck: function (eventContext) {
      var filter = { _errored: 1 };
      return ModelService.filtered(
        "sgzUsina",
        null,
        filter,
        1000,
        false,
        true,
        null,
        true
      );
    },

    hideShowErrorLink: function (eventContext) {
      var self = this;
      if (self.errorWatch) {
        self.errorWatch.remove();
      }

      self.errorWatch = topic.subscribe(
        PlatformConstants.DATA_REFRESH_TOPIC + "/sgzUsina",
        function (fireEvent) {
          self.errorCheck(eventContext).then(function (errorSet) {
            eventContext.setLabel(
              MessageService.createResolvedMessage("errorExists")
            );

            if (errorSet.count() > 0) {
              self.setError(eventContext, true);
              eventContext.setLabel(
                MessageService.createResolvedMessage("errorExists")
              );
              errorSet.resourceID = "sgzUsina";
              eventContext.application.addResource(errorSet);
              eventContext.setDisplay(true);
            } else {
              self.setError(eventContext, false);
              eventContext.setDisplay(false);
            }
            var errorRes =
              eventContext.application.getResource("errorResource");
            ModelService.save(errorRes).then(function () {
              return;
            });
          });
        }
      );

      //if topic already processed, check if error exists
      if (this.getError(eventContext)) {
        eventContext.setLabel(
          MessageService.createResolvedMessage("errorExists")
        );
        eventContext.setDisplay(true);
      } else {
        eventContext.setDisplay(false);
      }
    },

    showErrorPage: function (eventContext) {
      this.fromErrorLink = true;
      var view = eventContext.application.ui.getViewFromId(
        "SGZUsina.MyReportedSR"
      );
      if (!view.queryBaseIndexResource) {
        view.setupQueryBaseResource();
      }
      view.setQueryBaseIndexByQuery(PlatformConstants.ERRORED_QUERYBASE);
      eventContext.ui.show("SGZUsina.MyReportedSR");
    },

    setError: function (eventContext, haserror) {
      var errorRes = eventContext.application
        .getResource("errorResource")
        .getCurrentRecord();
      errorRes.set("hasError", haserror);
    },

    getError: function (eventContext) {
      var errorRes = eventContext.application
        .getResource("errorResource")
        .getCurrentRecord();
      return errorRes.get("hasError");
    },

    handleBackButtonClickEditAssetView: function (eventContext) {
      //cleanupEditAssetView method is invoked as callback of hideCurrentView
      eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
    },

    cleanupEditAssetView: function (eventContext) {
      //Invoked by back button or Cancel Edit button
      var serviceRequest = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      ).getCurrentRecord();

      var readOnlyAsset = serviceRequest
        .getRuntimeFieldMetadata("asset")
        .get("readonly");
      if (!readOnlyAsset) {
        serviceRequest.set("asset", this.curAsset);
        serviceRequest.set("assetdesc", this.curAssetDesc);
        serviceRequest.set("assetld", this.curAssetld);
      }

      var readOnlyLoc = serviceRequest
        .getRuntimeFieldMetadata("location")
        .get("readonly");
      if (!readOnlyLoc) {
        serviceRequest.set("location", this.curLocation);
        serviceRequest.set("locationdesc", this.curLocationDesc);
        serviceRequest.set("locationld", this.currLocationld);
      }
    },

    filterLocationForLookup: function (eventContext) {
      var serviceRequestSet = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      );

      //save the current location  to reset case user cancel
      //this was done to fix the issue when making a look up and cancel the value in SR detail location was different of showed in the look up
      if (serviceRequestSet.getCurrentRecord() != null) {
        this.curLocation = serviceRequestSet.getCurrentRecord().get("location");
        //	this.curLocationDesc = serviceRequestSet.getCurrentRecord().get("locationdesc");
        //	this.currLocationld = serviceRequestSet.getCurrentRecord().get("locationld");
      }

      // var domainAssetstatus = CommonHandler._getAdditionalResource(eventContext,'domainAssetstatus');
      var additionallocations = CommonHandler._getAdditionalResource(
        eventContext,
        "additionallocations"
      );
      CommonHandler._clearFilterForResource(eventContext, additionallocations);

      var siteid = CommonHandler._getServiceRequestSiteId(eventContext);
      if (siteid == null) {
        siteid = UserManager.getInfo("defsite");
      }

      var filter = [];

      filter.push({ siteid: siteid });

      additionallocations.lookupFilter = filter;
    },

    //Location edit view
    filterLocation: function (eventContext) {
      var serviceRequestSet = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      );

      //save the current location  to reset case user cancel
      //this was done to fix the issue when making a look up and cancel the value in SR detail location was different of showed in the look up
      this.curLocation = serviceRequestSet.getCurrentRecord().get("location");
      this.curLocationDesc = serviceRequestSet
        .getCurrentRecord()
        .get("locationdesc");
      this.currLocationld = serviceRequestSet
        .getCurrentRecord()
        .get("locationld");

      var domainAssetstatus = CommonHandler._getAdditionalResource(
        eventContext,
        "domainAssetstatus"
      );
      var additionallocations = CommonHandler._getAdditionalResource(
        eventContext,
        "additionallocations"
      );
      CommonHandler._clearFilterForResource(eventContext, additionallocations);

      var siteid = CommonHandler._getServiceRequestSiteId(eventContext);

      additionallocations.filter("siteid == $1", siteid);

      return additionallocations;
    },

    //sync validate priority
    validatePriority: function (eventContext) {
      var currSR = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      ).getCurrentRecord();
      var priority = currSR.getPendingOrOriginalValue("reportedpriority");

      if (!priority) {
        currSR.set("prioritydesc", "");
        return;
      }

      var priorityDomain = CommonHandler._getAdditionalResource(
        eventContext,
        "priorityDomain"
      );
      CommonHandler._clearFilterForResource(eventContext, priorityDomain);

      var isValidPriority = priorityDomain.find("value == $1", priority);

      if (isValidPriority.length == 0) {
        currSR.set("prioritydesc", "");
        throw new PlatformRuntimeWarning("invalidPriority");
        return;
      } else {
        currSR.set("prioritydesc", isValidPriority[0].description);
      }
      return;
    },

    //sync validate Siteid
    validateSiteid: function (eventContext) {
      var currSR = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      ).getCurrentRecord();
      var site = currSR.getPendingOrOriginalValue("ms_siteid");

      var subpref = CommonHandler._getAdditionalResource(
        eventContext,
        "subpref"
      );
      CommonHandler._clearFilterForResource(eventContext, subpref);

      let plate = currSR.getPendingOrOriginalValue('ms_plate');	

      var isValidSiteid = subpref.find("siteid == $1", site);

      if (isValidSiteid.length == 0) {
        eventContext.ui.showMessage("Subprefeitura Inválida");
        return;
      }
	  var site = currSR.getPendingOrOriginalValue("ms_siteid");
	
      var toolsiteauth = CommonHandler._getAdditionalResource(eventContext,"toolsiteauth");
      CommonHandler._clearFilterForResource(eventContext, toolsiteauth);
	   
      let idUsina = CommonHandler._getAdditionalResource(eventContext,"MSasphaltplant").getCurrentRecord().get('idusina');	
		
		
	    var isSiteAuth = toolsiteauth.find('ms_plate == $1 && ms_asphaltplantid == $2', plate, idUsina);
      if (isSiteAuth.length == 0) {
				throw new PlatformRuntimeException("Veículo não Autorizado! Veículo não tem contrato aprovado");
				return;
			}
      if(isSiteAuth.length == 1){
        currSR.set('ms_siteid', isSiteAuth[0].ms_siteid);
      }

      //Novo
      var MSaptoolauth = CommonHandler._getAdditionalResource(eventContext,'MSaptoolauth');
      CommonHandler._clearFilterForResource(eventContext, MSaptoolauth);

      var isSiteAuth = toolsiteauth.find('ms_plate == $1 && ms_asphaltplantid == $2', plate, idUsina);

      let isValidPlate = toolsiteauth.find('ms_plate == $1 && ms_asphaltplantid == $2 && ms_siteid  == $3 && ms_status ==$4', plate, idUsina, site, "APROVADO");


      let veiculos = [];
      if (isValidPlate.length > 0 && typeof isValidPlate == 'object') {
        for (let index = 0; index < [isValidPlate].length; index++) {
          const item = isValidPlate[index];
          veiculos.push(item);
        }
      }
      var isValidPlateItemContract = toolsiteauth.find('ms_plate == $1 && ms_asphaltplantid == $2 &&  ms_siteid == $3 && ms_status ==$4', plate,idUsina, site, "APROVADO");

      let veiculosConc = [];
      if (isValidPlateItemContract.length > 0 && typeof isValidPlateItemContract == 'object') {
        for (let index = 0; index < [isValidPlateItemContract].length; index++) {
          const item = isValidPlateItemContract[index];
          veiculosConc.push(item);
        }
      }

      let msg = "Veículo divergente com Itens de contrato! Favor entre em contato com o administrador";

    
      for (let index = 0; index < veiculos.length; index++) {
        const veiculo = veiculos[index].get('ms_itemnum');
        for (let index = 0; index < veiculosConc.length; index++) {
          const veiculoConcItem = veiculosConc[index].get('ms_itemnum');
          if (veiculo != veiculoConcItem) {
            eventContext.ui.showMessage(msg);
            Logger.error("Placa Valida" + veiculo);
            return;
          }else{
            currSR.set('ms_itemnum',veiculoConcItem);
          }
        }   
      
      }

      return;


    },

    //sync validate validateSiteUsina
    validateSiteUsina: function (eventContext) {
      var currSR = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      ).getCurrentRecord();
      var site = currentRecord.getPendingOrOriginalValue("ms_asphaltplantid");
      currentRecord.set('ms_asphaltplantid', site);
      ModelService.save(serviceRequestSet)
      .then(function () {
        /* eventContext.ui.hideCurrentView(); */
        eventContext.ui.show("SGZUsina.SRDetail");
      })
      .otherwise(function (err) {
        eventContext.ui.showMessage(err);
      });
    },

    calcNetweight: function (eventContext) {
      var currSR = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      ).getCurrentRecord();

      var pesoBruto = currSR.get("ms_grossweight");
      var pesoTara = currSR.get("ms_tareweight");
      var pesoLiquido = pesoBruto - pesoTara;

      if (pesoBruto != null && pesoTara != null) {
        currSR.set("ms_netweight", pesoLiquido);
      }

      /* if (attachments.data.length >= 2){
                attachments = 3;
                eventContext.ui.showMessage("Favor tirar Foto do Peso do Peso Bruto");
                return ;
            } */
    },

    verificaVeiculoLookup: function (eventContext) {
      var currSR = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      ).getCurrentRecord();
      var plate = currSR.getPendingOrOriginalValue("ms_plate");

      var currSiteSet = CommonHandler._getAdditionalResource(
        eventContext,
        "subpref"
      );
      CommonHandler._clearFilterForResource(eventContext, currSiteSet);

      var toolsiteauth = CommonHandler._getAdditionalResource(
        eventContext,
        "toolsiteauth"
      );
      CommonHandler._clearFilterForResource(eventContext, toolsiteauth);

      var isSiteAuth = toolsiteauth.find("ms_plate == $1", plate);

      if (isSiteAuth.length == 0) {
        currSiteSet.data = "";
        return false;
      } else {
        var filter = [];
        for (var i = 0; i < isSiteAuth.length; i++) {
          var siteid = isSiteAuth[i].ms_siteid;

          filter.push({ siteid: siteid });
        }
        currSiteSet.lookupFilter = filter;
      }
    },

    //Sync validate Plate - App: SGZUsina
    validatePlate: function (eventContext) {
      var serviceRequestSet = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      );
      var currUsinaSet = CommonHandler._getAdditionalResource(
        eventContext,
        "MSasphaltplant"
      );
      var currUsina = currUsinaSet.getCurrentRecord();
      var idUsina = currUsina.get("idusina");

      var currSR = serviceRequestSet.getCurrentRecord();
      var plate = currSR.getPendingOrOriginalValue("ms_plate").toUpperCase();
      var ms_apidauth = currSR.get("ms_apidauth");
      /* var site = currSR.get('ms_siteid'); */

      /* var currSiteSet = CommonHandler._getAdditionalResource(eventContext,'subpref');
            CommonHandler._clearFilterForResource(eventContext,currSiteSet);
            var currSite = currSiteSet.getCurrentRecord();
            var site = currSite.get('siteid'); */

      /* var toolsiteauth = CommonHandler._getAdditionalResource(eventContext,'toolsiteauth');
            CommonHandler._clearFilterForResource(eventContext,toolsiteauth);
                            
            var isValidContract = toolsiteauth.find('ms_siteid == $1 && ms_plate ==$2', site, plate); */

      var dataHoraAtual = new Date(Date.now());
      var dataTurno = new Date(Date.now());
      var dataHoraInicio = new Date(Date.now());
      var dataHoraFim = new Date(Date.now());

      var MSaptoolauth = CommonHandler._getAdditionalResource(
        eventContext,
        "MSaptoolauth"
      );
      CommonHandler._clearFilterForResource(eventContext, MSaptoolauth);

      var isValidPlate = MSaptoolauth.find(
        "ms_plate == $1 && ms_asphaltplantid == $2",
        plate,
        idUsina
      );

      var toolsiteauth = CommonHandler._getAdditionalResource(
        eventContext,
        "toolsiteauth"
      );
      CommonHandler._clearFilterForResource(eventContext, toolsiteauth);

      /* var isSiteAuth = toolsiteauth.find('ms_plate == $1', plate); */
      var isSiteAuth = toolsiteauth.find(
        "ms_plate == $1 && ms_asphaltplantid == $2",
        plate,
        idUsina
      );

      /* if(idUsina == 0 || idUsina == null || idUsina == "" || typeof idUsina === undefined){
                throw new PlatformRuntimeException("Favor selecionar uma usina!");
                return;
            } */

      var ms_active = isValidPlate[0].ms_active;
      var ms_startdate = isValidPlate[0].ms_startdate;
      var ms_enddate = isValidPlate[0].ms_enddate;
      var ms_shiftnum = isValidPlate[0].ms_shiftnum;

      var currentDate = dataHoraAtual.setHours(0, 0, 0, 0);

      if (ms_startdate != null) {
        var dataStart = new Date(ms_startdate);
      }

      if (ms_enddate != null) {
        var dataEnd = new Date(ms_enddate);
      }

      currentDate = new Date(currentDate);
      var count = 0;

      var toolsiteauth = CommonHandler._getAdditionalResource(
        eventContext,
        "toolsiteauth"
      );
      CommonHandler._clearFilterForResource(eventContext, toolsiteauth);

      /* var isSiteAuth = toolsiteauth.find('ms_plate == $1', plate); */

      if (isSiteAuth.length == 0) {
        throw new PlatformRuntimeException(
          "Veículo não Autorizado! Veículo não está ativo ou não tem contrato aprovado"
        );
        return;
      }

      /* if(ms_active == 0 || ms_active == null || typeof ms_active === undefined){
                throw new PlatformRuntimeException("Veículo não Autorizado! Veículo não está ativo");
                return ;
            }  */

      /* 			if(ms_status == 0 || ms_status == null || typeof ms_status === undefined){
            if(statusContract != "APROVADO"){
                throw new PlatformRuntimeException("Veículo não Autorizado! Veículo não está ativo");
                return ;
            }  */
      if (typeof dataStart === undefined || dataStart == null) {
      } else if (dataStart > currentDate) {
        throw new PlatformRuntimeException(
          "Veículo não Autorizado! Data de início da vigência incorreta"
        );
        currSR.set("ms_plate", null);
        return;
      }
      if (typeof dataEnd === undefined || dataEnd == null) {
      }
      if (dataEnd < currentDate) {
        throw new PlatformRuntimeException(
          "Veículo não Autorizado! Data de fim da vigência incorreta"
        );
        currSR.set("ms_plate", null);
        return;
      }

      if (ms_shiftnum != null) {
        var ms_shifnumTrim = ms_shiftnum.replace(" ", "");
        var ms_shifnumSplit = ms_shifnumTrim.split(",");

        for (var i = 0; i < ms_shifnumSplit.length; i++) {
          var horaInicio = ms_shifnumSplit[i].split("-")[0].split(":")[0];
          var minutoInicio = ms_shifnumSplit[i].split("-")[0].split(":")[1];

          var horaFim = ms_shifnumSplit[i].split("-")[1].split(":")[0];
          var minutoFim = ms_shifnumSplit[i].split("-")[1].split(":")[1];

          dataHoraInicio.setHours(horaInicio, minutoInicio);
          dataHoraFim.setHours(horaFim, minutoFim);

          if (dataTurno >= dataHoraInicio && dataTurno <= dataHoraFim) {
            count++;
          }
        }
        if (count == 0) {
          currSR.set("ms_plate", null);
          throw new PlatformRuntimeException(
            "Veículo não Autorizado! Turno incorreto"
          );

          return;
        }
      }

      if (currSR.get("ms_status") == null || currSR.get("ms_status") == "") {
        if (isSiteAuth.length == 1) {
          currSR.set("ms_siteid", isSiteAuth[0].ms_siteid);
        }

        /*
                Logger.error("Veículo ITEM: " + isValidPlate[0].ms_itemnum);
                Logger.error("Placa " + isValidPlate[0].ms_plate);
                Logger.error("Está Ativo " + isValidPlate[0].ms_active);
                Logger.error("Está ID Usina " + isValidPlate[0].ms_asphaltplantid);
                Logger.error("Está Company " + isValidPlate[0].ms_company);
                Logger.error("Está Capacidade " + isValidPlate[0].ms_loadcapacity);
                Logger.error("Data + 1 " + date.add(this.application.getCurrentDateTime(), "day", 1).toUTCString());
                */

        currSR.set("ms_itemnum", isValidPlate[0].ms_itemnum);
        currSR.set("ms_plate", isValidPlate[0].ms_plate);
        currSR.set("ms_isauth", true);
        currSR.set("ms_asphaltplantid", isValidPlate[0].ms_asphaltplantid);
        currSR.set("ms_company", isValidPlate[0].ms_company);
        currSR.set("ms_authqty", isValidPlate[0].ms_loadcapacity);
        currSR.setDateValue(
          "ms_expiredate",
          date.add(this.application.getCurrentDateTime(), "day", 1)
        );
        currSR.set("ms_status", "AG_CARREG");

        currSR.set("ms_isapauth", true);
        currSR.setDateValue(
          "ms_authdate",
          this.application.getCurrentDateTime()
        );
      }
      return;
    },

    //Sync validate Plate - App: SGZUsina
    validatePlate02: function(eventContext){
    
      var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
      var currUsinaSet = CommonHandler._getAdditionalResource(eventContext,"MSasphaltplant");
      var currUsina = currUsinaSet.getCurrentRecord();
	    var idUsina = currUsina.get('idusina');      

      var currSR = serviceRequestSet.getCurrentRecord();
      var plate = currSR.getPendingOrOriginalValue("ms_plate").toUpperCase();
      var ms_apidauth = currSR.get("ms_apidauth");

       var idUsinaAtualStorage;
       try {
         idUsinaAtualStorage = sessionStorage.getItem("idUsinaAtual");
         if(idUsinaAtualStorage){
           if((idUsinaAtualStorage > 0)||(idUsinaAtualStorage != null)||(idUsinaAtualStorage != undefined)){
             if(idUsina != idUsinaAtualStorage){
                 idUsina = idUsinaAtualStorage;
              }			 
           }
         }
       } catch (error) {
         console.log(error);
         console.log("linha 760 - validatePlate02");
       }
      //var currSR = serviceRequestSet.getCurrentRecord();
			var plate = currSR.getPendingOrOriginalValue('ms_plate').toUpperCase();
			var ms_apidauth = currSR.get('ms_apidauth');
      /* var site = currSR.get('ms_siteid'); */

      /* var currSiteSet = CommonHandler._getAdditionalResource(eventContext,'subpref');
      CommonHandler._clearFilterForResource(eventContext,currSiteSet);
      var currSite = currSiteSet.getCurrentRecord();
      var site = currSite.get('siteid'); */

      /* var toolsiteauth = CommonHandler._getAdditionalResource(eventContext,'toolsiteauth');
      CommonHandler._clearFilterForResource(eventContext,toolsiteauth);
                      
      var isValidContract = toolsiteauth.find('ms_siteid == $1 && ms_plate ==$2', site, plate); */



      var dataHoraAtual = new Date(Date.now());
      var dataTurno = new Date(Date.now());
      var dataHoraInicio = new Date(Date.now());
      var dataHoraFim = new Date(Date.now());

      var MSaptoolauth = CommonHandler._getAdditionalResource(eventContext,'MSaptoolauth');
      CommonHandler._clearFilterForResource(eventContext, MSaptoolauth);

			var isValidPlate = MSaptoolauth.find('ms_plate == $1 && ms_asphaltplantid == $2', plate, idUsina);
				
							

			if(isValidPlate.length == 0){
				throw new PlatformRuntimeException("Veículo não Autorizado! Placa não encontrada");
				return;
			}

      /* if(idUsina == 0 || idUsina == null || idUsina == "" || typeof idUsina === undefined){
                throw new PlatformRuntimeException("Favor selecionar uma usina!");
                return;
            } */

      var ms_active = isValidPlate[0].ms_active;
      var ms_startdate = isValidPlate[0].ms_startdate;
      var ms_enddate = isValidPlate[0].ms_enddate;
      var ms_shiftnum = isValidPlate[0].ms_shiftnum;

			var currentDate = dataHoraAtual.setHours(0,0,0,0);
			
			if(ms_startdate != null){
        var dataStart = new Date(ms_startdate);
      }

			if(ms_enddate != null){
        var dataEnd = new Date(ms_enddate);
      }

      currentDate = new Date(currentDate);
      var count = 0;

			var toolsiteauth = CommonHandler._getAdditionalResource(eventContext,'toolsiteauth');
			CommonHandler._clearFilterForResource(eventContext,toolsiteauth);

      /* var isSiteAuth = toolsiteauth.find('ms_plate == $1', plate); */
			var isSiteAuth = toolsiteauth.find('ms_plate == $1 && ms_asphaltplantid == $2', plate, idUsina);

			if (isSiteAuth.length == 0) {
				throw new PlatformRuntimeException("Veículo não Autorizado! Veículo não tem contrato aprovado");
				return;
			}

			//var statusContract = isSiteAuth[0].ms_status;
			
			if(ms_active == 0 || ms_active == null || typeof ms_active === undefined){
				throw new PlatformRuntimeException("Veículo não Autorizado! Veículo não está ativo");
				return ;
			}

/* 			if(ms_status == 0 || ms_status == null || typeof ms_status === undefined){

 */			
 
			/* if(statusContract != "APROVADO"){
				throw new PlatformRuntimeException("Veículo não Autorizado! Veículo não está ativo");
				return ;
			} */ 
			if(typeof dataStart === undefined || dataStart == null){
				
			}else if(dataStart > currentDate){
				throw new PlatformRuntimeException("Veículo não Autorizado! Data de início da vigência incorreta");
				currSR.set('ms_plate', null);
				return ;
			}if (typeof dataEnd === undefined || dataEnd == null){
			
		    }if (dataEnd < currentDate){
				throw new PlatformRuntimeException("Veículo não Autorizado! Data de fim da vigência incorreta");
				currSR.set('ms_plate', null);
				return ; 
			}

			if (ms_shiftnum != null){
				var ms_shifnumTrim = ms_shiftnum.replace(" ","");
				var ms_shifnumSplit = ms_shifnumTrim.split(',');
				
				for(var i = 0 ; i < ms_shifnumSplit.length ; i++){
					
					var horaInicio = ms_shifnumSplit[i].split('-')[0].split(':')[0];
					var minutoInicio = ms_shifnumSplit[i].split('-')[0].split(':')[1];
					
					var horaFim = ms_shifnumSplit[i].split('-')[1].split(':')[0];
					var minutoFim = ms_shifnumSplit[i].split('-')[1].split(':')[1];

					dataHoraInicio.setHours(horaInicio, minutoInicio);
					dataHoraFim.setHours(horaFim, minutoFim);
							
					if(dataTurno  >= dataHoraInicio && dataTurno <= dataHoraFim){
						count++;
	
					}
				}
				if(count == 0){
					currSR.set('ms_plate', null);
					throw new PlatformRuntimeException("Veículo não Autorizado! Turno incorreto");
						
					return ;
				}
			}


			if (currSR.get('ms_status') == null || currSR.get('ms_status') == ""){
			
				
				if(isSiteAuth.length == 1){
					currSR.set('ms_siteid', isSiteAuth[0].ms_siteid);
				
				}



        /*
                Logger.error("Veículo ITEM: " + isValidPlate[0].ms_itemnum);
                Logger.error("Placa " + isValidPlate[0].ms_plate);
                Logger.error("Está Ativo " + isValidPlate[0].ms_active);
                Logger.error("Está ID Usina " + isValidPlate[0].ms_asphaltplantid);
                Logger.error("Está Company " + isValidPlate[0].ms_company);
                Logger.error("Está Capacidade " + isValidPlate[0].ms_loadcapacity);
                Logger.error("Data + 1 " + date.add(this.application.getCurrentDateTime(), "day", 1).toUTCString());
                */

				currSR.set('ms_itemnum',isValidPlate[0].ms_itemnum);
				currSR.set('ms_plate',isValidPlate[0].ms_plate);
				currSR.set('ms_isauth',true);
				currSR.set('ms_asphaltplantid',isValidPlate[0].ms_asphaltplantid);
				currSR.set('ms_company',isValidPlate[0].ms_company);
				currSR.set('ms_authqty',isValidPlate[0].ms_loadcapacity);
				currSR.setDateValue('ms_expiredate',date.add(this.application.getCurrentDateTime(), "day", 1));
				currSR.set('ms_status', "AG_CARREG");

			
				currSR.set('ms_isapauth',true);
				currSR.setDateValue('ms_authdate', this.application.getCurrentDateTime());

				
			} 
      return;
    },


    //Sync validate Plate - App: SGZUsina
    validateMassa: function (eventContext) {
      var currSR = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      ).getCurrentRecord();
      var qtdMassaAut = currSR.get("ms_authqty");
      var qtdMassa = currSR.get("qtd_massa");

      if (qtdMassa > qtdMassaAut) {
        eventContext.ui.showMessage("Quantidade não Autorizada");
        currSR.set("qtd_massa", null);
        return;
      }
    },

    //Sync validate Plate - App: SGZUsina
    validateEmulsao: function (eventContext) {
      var currSR = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      ).getCurrentRecord();
      var qtdMassaAut = currSR.get("ms_authqty");
      var qtdEmulsao = currSR.get("qtd_emulsao");

      if (qtdEmulsao > qtdMassaAut) {
        eventContext.ui.showMessage("Quantidade não Autorizada");
        currSR.set("qtd_emulsao", null);
        return;
      }
    },

    // -----------------------------------------------------
    // sync version of validateLocation
    validateLocation: function (eventContext) {
      var serviceRequestSet = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      );
      var currSR = serviceRequestSet.getCurrentRecord();
      var location = currSR.getPendingOrOriginalValue("location").toUpperCase();

      if (!location) {
        currSR.set("locationdesc", "");
        //Set only for presentation
        currSR.set("locationld", "");
        return;
      }

      var additionallocations = CommonHandler._getAdditionalResource(
        eventContext,
        "additionallocations"
      );
      CommonHandler._clearFilterForResource(eventContext, additionallocations);

      var isValidLocation = additionallocations.find(
        "location == $1",
        location
      );

      if (isValidLocation.length == 0) {
        throw new PlatformRuntimeWarning("invalidLocation");
        return;
      } else {
        //If asset exists, set the description for it
        currSR.set("location", location);
        currSR.set("locationdesc", isValidLocation[0].get("description"));
        //Set only for presentation
        currSR.set("locationld", isValidLocation[0].get("locationld"));
      }

      var asset = currSR.getPendingOrOriginalValue("asset");
      if (asset) {
        var location = currSR.get("location");
        var siteid = currSR.get("siteid");

        var assetLoc = CommonHandler._getAdditionalResource(
          eventContext,
          "additionalasset"
        );

        //Retrieves asset using location and site.
        var assetSet = assetLoc.find(
          "assetnum == $1 && location == $2 && siteid == $3",
          asset,
          location,
          siteid
        );

        //if location of new asset is different from current location, shows dialog
        if (assetSet.length == 0) {
          eventContext.ui.show("SGZUsina.SRLocationToAssetDialog");
          return;
        }
      }
      return;
    },

    // async version of validateLocation
    asyncvalidateLocation: function (eventContext) {
      var serviceRequestSet = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      );
      var currSR = serviceRequestSet.getCurrentRecord();
      var location = currSR.getPendingOrOriginalValue("location").toUpperCase();
      var siteid = currSR.get("siteid");

      if (!location) {
        currSR.set("locationdesc", "");
        currSR.set("locationld", "");
        return;
      }

      //defect 113779 - avoid double validation calls
      currSR.set("location", location);
      // clear this in case promise throws an error
      currSR.set("locationdesc", "");

      var locationSetPromise = this.async_cmn_getLocationPromise(
        location,
        siteid
      );
      this.async_valLoccheckLocationFound(
        eventContext,
        currSR,
        location,
        locationSetPromise
      );
    },

    async_valLoccheckLocationFound: function (
      eventContext,
      currSR,
      location,
      locationSet
    ) {
      if (locationSet.count() == 0) {
        throw new PlatformRuntimeWarning("invalidLocation");
      }

      var validLocation = locationSet.getRecordAt(0);

      //If asset exists, set the description for it
      currSR.set("location", location);
      currSR.set("locationdesc", validLocation.get("description"));
      //Set only for presentation
      currSR.set("locationld", validLocation.get("locationld"));

      var asset = currSR.getPendingOrOriginalValue("asset");
      if (asset) {
        var location = currSR.get("location");
        var siteid = currSR.get("siteid");

        //				var assetLoc = CommonHandler._getAdditionalResource(eventContext,'additionalasset');

        //Retrieves asset using location and site.
        var assetPromise = this.async_cmn_getAssetLocationPromise(
          asset,
          location,
          siteid
        );
        this.async_valLoccheckAssetFound(eventContext, assetPromise);
      }
    },

    async_valLoccheckAssetFound: function (eventContext, assetSet) {
      //if location of new asset is different from current location, shows dialog
      if (assetSet.count() == 0) {
        this.application.hideBusy();
        eventContext.ui.show("SGZUsina.SRLocationToAssetDialog");
      }
    },
    //-------------------------------------------------------
    discardView: function (eventContext) {
      //cleanupEditAssetView method is invoked as callback of hideCurrentView
      eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
    },
    cleanupEditLocationView: function (eventContext) {
      var serviceRequest = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      ).getCurrentRecord();
      //set back the location
      var readOnlyLoc = serviceRequest
        .getRuntimeFieldMetadata("location")
        .get("readonly");
      if (!readOnlyLoc) {
        if (this.curLocation != null) {
          serviceRequest.set("location", this.curLocation);
          serviceRequest.set("locationdesc", this.curLocationDesc);
          serviceRequest.set("locationld", this.currLocationld);
        }
      }

      //Set asset info back
      var readOnlyAsset = serviceRequest
        .getRuntimeFieldMetadata("asset")
        .get("readonly");
      if (!readOnlyAsset) {
        serviceRequest.set("asset", this.curAsset);
        serviceRequest.set("assetdesc", this.curAssetDesc);
        sgzUsina.set("assetld", this.curAssetld);
      }
    },

    commitActualLocationEntryView: function (eventContext) {
      var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"serviceRequest");
      var currSR = serviceRequestSet.getCurrentRecord();

      this.curLocation = currSR.get("location");
      this.curLocationDesc = currSR.get("locationdesc");
      this.currLocationld = currSR.get("locationld");

      //WorkAround for the auto complete field
      //currSR.set('locationdesc', '');

      FieldUtil.initCompositeField("location","locationdesc","locationanddescription",currSR);
      eventContext.ui.hideCurrentView();
      //ModelService.save(serviceRequestSet);
    },
    //end edit Location view

    _hasAttachments: function (sgzUsina) {
      if (sgzUsina) {
        var attachments = sgzUsina.get("attachments");
        return attachments && attachments.data && attachments.data.length > 0;
      }
      return false;
    },

    initNewServiceRequestView: function (eventContext) {
      // TODO: change to actual method once Data Access API is completed
      var newSR = eventContext.application
        .getResource("sgzUsina")
        .createNewRecord();
      originalServiceRequest = null;
      //137933: Using Labor's orgid to create new service request instead of orgid associated with default insert site siteid.
      //newSR.set('siteid', UserManager.getInfo("defsite"));
      //newSR.set('orgid', UserManager.getInfo("deforg"));
      eventContext.getResource()._asyncUpdateModified();
    },

    discardNewServiceRequestView: function (eventContext) {
      eventContext.ui.show("SGZUsina.ConfirmCancel");
    },

    carregIncShowDialog: function (eventContext) {
      eventContext.ui.show("SGZUsina.CompleCarreg");
    },

    carregAfterIncShowDialog: function (eventContext) {
      eventContext.ui.hideCurrentDialog();
      eventContext.ui.show("SGZUsina.TransferCredEdit");
    },
    carregAfterIncShowView: function (eventContext) {
      eventContext.ui.hideCurrentDialog();
      eventContext.ui.show("SGZUsina.After.CompleCarreg");
    },
    carregAfterIncShowView02: function (eventContext) {
      eventContext.ui.hideCurrentDialog();
      eventContext.ui.show("SGZUsina.TransferCredEdit");
    },

    handleBackButton: function (eventContext) {
      var serviceRequestSet = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      );
      var currSR = serviceRequestSet.getCurrentRecord();

      if (currSR && currSR.isNew() && currSR.get("indentifier") == null) {
        currSR.deleteLocal();
        //				if(originalServiceRequest){
        //					serviceRequestSet.setCurrentIndexByRecord(originalServiceRequest);
        //					originalServiceRequest = null;
        //				}
        //				else {
        //					eventContext.application.ui.getViewFromId(eventContext.application.ui.getCurrentView().movedFrom).setFooterDisplay(true);
        //				}
      } else {
        eventContext.application.ui
          .getViewFromId(eventContext.application.ui.getCurrentView().movedFrom)
          .setFooterDisplay(true);
      }
    },

    control_final: function (eventContext) {
      var currSR = eventContext.getResource().getCurrentRecord();
      statusAtual = currSR.get("ms_status");

      //if (( statusAtuaal == "CARREGADO")||( statusAtual == "CARREG_INC")) {
        if ( statusAtual == "CARREGADO"){
          eventContext.setDisplay(false);
          eventContext.setVisibility(false);
        }
      },

    control_final_cancelado: function (eventContext) {
      var currSR = eventContext.getResource().getCurrentRecord();
      statusAtual = currSR.get("ms_status");

      if (statusAtual == "CARREGADO") {
        eventContext.setDisplay(true);
        eventContext.setVisibility(true);
      }
    },

    
    commitNewSgzUsinaView: function (eventContext) {
      var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
      var currSR = serviceRequestSet.getCurrentRecord();
      var attachments = currSR.get("attachments");
      var gpsLocation = true;
      var msPlate = currSR.getPendingOrOriginalValue("ms_plate").toUpperCase();

      var myUser = UserManager.getCurrentUser();
      var site = currSR.get("ms_siteid");
      var idUsinaAtual = currSR.get("currSR.ms_asphaltplantid");
      if((idUsinaAtual > 0)||(idUsinaAtual != null)||(idUsinaAtual != undefined)){
        sessionStorage.setItem('idUsinaAtual', JSON.stringify(idUsinaAtual));
      }
      var toolsiteauth = CommonHandler._getAdditionalResource(eventContext,"toolsiteauth");
      CommonHandler._clearFilterForResource(eventContext, toolsiteauth);

      var isValidContract = toolsiteauth.find("ms_siteid == $1 && ms_plate ==$2",site,msPlate);

      currSR.set("ms_contractnum", isValidContract[0].ms_contractnum);

      if (attachments == null ||attachments == "" ||attachments.data.length == 0) {
        attachments = 0;
        eventContext.ui.showMessage("Favor tirar Foto da Placa do Veículo");
        Logger.error("ANEXO 2 " + attachments);
        return;
      }

      var MSaptoolauth = CommonHandler._getAdditionalResource(eventContext,"MSaptoolauth");
      CommonHandler._clearFilterForResource(eventContext, MSaptoolauth);

      var isValidPlate = MSaptoolauth.find("ms_plate == $1", msPlate);

      if (isValidPlate.length == 0) {
        eventContext.ui.showMessage("Veículo não Autorizado");
        return;
      }

      if (myUser) {
        var MSPersonAut = CommonHandler._getAdditionalResource(eventContext,"MSPersonAut");
        CommonHandler._clearFilterForResource(eventContext, MSPersonAut);

        //Logger.error("USUÁRIO 2: " + myUser);
        //Logger.error("PERSON 2: " + MSPersonAut.length);
        //var assetLoc = CommonHandler._getAdditionalResource(eventContext,'additionalasset');

        var isValidUsina = MSPersonAut.find("personid == $1", myUser);
        if (isValidUsina.length == 0) {
          Logger.error("USUÁRIO 2 " + myUser);
          eventContext.ui.showMessage("O Usuário Não Está Autorizado a Criar Ticket!");
          return;
        }
				var usinaUser = isValidUsina[0].ms_asphaltplantid;
				currSR.set('ms_asphaltplantid', usinaUser);

      }

      if (msPlate == null) {
        //throw new PlatformRuntimeWarning('qtdAuthqty');
        eventContext.ui.showMessage("Favor Inserir a Placa do Veículo");
        return;
      }

      //if (currSR.gpsLocation) {
      if (gpsLocation) {
        //verify if we will use gps, but independently of it, save sr
        // init these fields with a value or they are not set by the gps helper
        //currSR.set('ms_latitudey', 0);
        //currSR.set('ms_longitudex', 0);
        var geoHelper = new GeoLocationServiceHelper();
        //geoHelper.sendGPSToResource(eventContext,currSR.gpsLocation).always(function(obj){
        geoHelper.sendGPSToResource(eventContext, gpsLocation).always(function (obj) {
            var latitude = serviceRequestSet.getCurrentRecord().get("latitudey");
            var latitude = latitude + "";

            var longitude = serviceRequestSet.getCurrentRecord().get("longitudex");
            var longitude = longitude + "";

            //Logger.error("LAT STRING " + serviceRequestSet.getCurrentRecord().get('latitudey'));
            //currSR.set('ms_remarks', serviceRequestSet.getCurrentRecord().get('latitudey'));

            //Logger.error("LATITUDE" + latitude);
            //Logger.error("LONGITUDE" + longitude);

            currSR.set("ms_latitudestr", latitude);
            currSR.set("ms_longitudestr", longitude);

            //currSR.set('ms_latitudestr', serviceRequestSet.getCurrentRecord().get('latitudey'));
            //currSR.set('ms_longitudestr', serviceRequestSet.getCurrentRecord().get('longitudex'));

            //currSR.set('CLASS',"MS_AMTICKET")
            //currSR.set('ms_latitudey', serviceRequestSet.getCurrentRecord().get('latitudey'));

            // got back from gps helper, now verify we got good coords
            //if (serviceRequestSet.getCurrentRecord().get('latitudey') == 0 || serviceRequestSet.getCurrentRecord().get('longitudey') == 0) {
            // if we got to this line, the gps helper did not return coords, so null out the init values before save
            //currSR.set('ms_latitudey', null);
            //currSR.set('ms_longitudex', null);
            //}
            ModelService.save(serviceRequestSet).then(function () {
              /* eventContext.ui.hideCurrentView(); */
              eventContext.ui.show("SGZUsina.SRDetail");
            }).otherwise(function (err) {
              eventContext.ui.showMessage(err);
            });
          });
      } else {
        ModelService.save(serviceRequestSet).then(function () {
          /* eventContext.ui.hideCurrentView(); */
          eventContext.ui.show("SGZUsina.SRDetail");
        }).otherwise(function (err) {
          eventContext.ui.showMessage(err);
        });
      }
    },


		finalizarSgzUsinaView : function(eventContext) {	
			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
			var currSR = serviceRequestSet.getCurrentRecord();
			
			var qtdMassaAut = null;
			var qtdEmulsao = null;
			var qtdMassa = null;
			var pesoBruto = null;
			
			
			var qtdTara = currSR.get("ms_tareweight");
			var qtdMassaAut = currSR.get('ms_authqty');
			var qtdEmulsao = currSR.get('qtd_emulsao');
			var qtdMassa = currSR.get('qtd_massa');
			var msPlate = currSR.get('ms_plate');
			var msAsphalt = currSR.get('ms_asphaltplantid');
			var sumCarreg = (qtdMassa + qtdEmulsao);
			var pesoBruto = currSR.get("ms_grossweight");
			//var attachments = currSR.get("attachments");
			var status = currSR.get("ms_status");
					
			if (sumCarreg > qtdMassaAut){
				eventContext.ui.hideCurrentDialog();
				eventContext.ui.showMessage("Quantidade não Autorizada!");
				return ;
			}
			
			if (qtdTara == null){
				eventContext.ui.hideCurrentDialog();
				eventContext.ui.showMessage("Favor informar a quantidade de Peso Tara!");
				return ;
			}
		
			if (qtdMassa == null && qtdEmulsao == null){
				eventContext.ui.hideCurrentDialog();
				eventContext.ui.showMessage("Favor informar a quantidade de Massa ou Emulsão!");
				return ;
			}
			if (qtdMassa > qtdMassaAut){
				eventContext.ui.hideCurrentDialog();
				currSR.set('qtd_emulsao', null);
				currSR.set('qtd_massa', null);
				eventContext.ui.showMessage("Quantidade não Autorizada!");
				return ;
			}
			
			if (qtdEmulsao > qtdMassaAut){
				eventContext.ui.hideCurrentDialog();
				currSR.set('qtd_emulsao', null);
				currSR.set('qtd_massa', null);
				eventContext.ui.hideCurrentDialog();
				eventContext.ui.showMessage("Quantidade não Autorizada!");
				return ;
			}
				
			if ((pesoBruto == null)||(pesoBruto == 0)){
				eventContext.ui.hideCurrentDialog();
				eventContext.ui.showMessage("Favor Informar o valor do Peso Bruto!");
				return ;
			}
			
			
		if (status == 'AG_CARREG' || status == 'CARREG_INC'){
			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
			var currSR = serviceRequestSet.getCurrentRecord();
			var anexos = currSR.get('attachments');
		
             if(Array.isArray(anexos)){
				if (anexos.length < 2 || anexos =="" || anexos == null){
				    eventContext.ui.hideCurrentDialog();
			       	eventContext.ui.showMessage("Favor informar a foto do ticket");
				      return ;
				}
			}else if(anexos instanceof Object){
				if (anexos.data.length < 2 || anexos =="" || anexos == null){
				    eventContext.ui.hideCurrentDialog();
			        eventContext.ui.showMessage("Favor informar a foto do ticket");
				      return ;
				}
			}
		}
			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
			var currSR = serviceRequestSet.getCurrentRecord();

			/*if (qtdMassa != null && qtdEmulsao != null && currSR.get('ms_status') == "AG_CARREG" || currSR.get('ms_status') == "CARREG_INC") {
				currSR.set('ms_status', "CARREGADO");
				currSR.setDateValue('ms_actualdate',this.application.getCurrentDateTime());
			}*/
	
			/*if ((qtdMassa == null || qtdEmulsao == null || qtdTara == null) && currSR.get('ms_status') == "AG_CARREG")  {
				currSR.set('ms_status', "CARREG_INC");
				//currSR.setDateValue('ms_actualdate',this.application.getCurrentDateTime());
			}*/
			
			/* var fotos = this.verifyattachments(fotos);
			if(fotos.lengh > 2){
				eventContext.ui.hideCurrentDialog();
				throw new PlatformRuntimeException("Favor informar a foto do ticket");	
				return ;
			}*/
						
      if ((currSR.get('ms_status') == "AG_CARREG")||currSR.get('ms_status') == "CARREG_INC") {
        if(qtdMassa != null && qtdEmulsao != null) {
            currSR.set('ms_status', "CARREGADO");
        }else{
            currSR.set('ms_status', "CARREG_INC");
        }
        currSR.setDateValue('ms_actualdate',this.application.getCurrentDateTime());
      }
			ModelService.save(serviceRequestSet).then(function() {
				eventContext.ui.hideCurrentDialog();
				//eventContext.ui.hideCurrentView();
				eventContext.ui.show("SGZUsina.MyReportedSR");;
				
			}).
			otherwise(function(err){
				eventContext.ui.showMessage(err);						
			});			
		},
 
    carregIncSgzUsinaViewShowView: function (eventContext) {
      var serviceRequestSet = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      );
      var currSR = serviceRequestSet.getCurrentRecord();

      var qtdMassaAut = null;
      var qtdEmulsao = null;
      var qtdMassa = null;
      var pesoBruto = null;

      var qtdTara = currSR.get("ms_tareweight");
      var qtdMassaAut = currSR.get("ms_authqty");
      var qtdEmulsao = currSR.get("qtd_emulsao");
      var qtdMassa = currSR.get("qtd_massa");
      var msPlate = currSR.get("ms_plate");
      var msAsphalt = currSR.get("ms_asphaltplantid");
      var sumCarreg = qtdMassa + qtdEmulsao;
      var pesoBruto = currSR.get("ms_grossweight");
      //var attachments = currSR.get("attachments");
      var status = currSR.get("ms_status");

      //Novas funcionalidades @autor:CLAUDIO ANDRADE -MAGNA SISTEMAS
      //var siteId = currSR.get('ms_siteid');
      //var ticketId = currSR.get('ms_amticketid');

      if (sumCarreg > qtdMassaAut) {
        eventContext.ui.hideCurrentDialog();
        eventContext.ui.showMessage("Quantidade não Autorizada!");
        return;
      }

      if (qtdTara == null) {
        eventContext.ui.hideCurrentDialog();
        eventContext.ui.showMessage(
          "Favor informar a quantidade de Peso Tara!"
        );
        return;
      }

      if (qtdMassa == null && qtdEmulsao == null) {
        eventContext.ui.hideCurrentDialog();
        eventContext.ui.showMessage(
          "Favor informar a quantidade de Massa ou Emulsão!"
        );
        return;
      }

      if (qtdMassa > qtdMassaAut) {
        eventContext.ui.hideCurrentDialog();
        currSR.set("qtd_emulsao", null);
        currSR.set("qtd_massa", null);
        eventContext.ui.showMessage("Quantidade não Autorizada!");
        return;
      }

      if (qtdEmulsao > qtdMassaAut) {
        eventContext.ui.hideCurrentDialog();
        currSR.set("qtd_emulsao", null);
        currSR.set("qtd_massa", null);
        eventContext.ui.hideCurrentDialog();
        eventContext.ui.showMessage("Quantidade não Autorizada!");

        return;
      }

      if (pesoBruto == null) {
        eventContext.ui.hideCurrentDialog();
        eventContext.ui.showMessage("Favor Informar o valor do Peso Bruto!");
        return;
      }
  
      if (status == "AG_CARREG" || status == "CARREG_INC") {
        var serviceRequestSet = CommonHandler._getAdditionalResource(
          eventContext,
          "sgzUsina"
        );
        var currSR = serviceRequestSet.getCurrentRecord();
        var anexos = currSR.get("attachments");

        /*let id;
        id = document.querySelector('#awbc2f048b_Text');
        if(id == null){
          id = document.querySelector('#aw56ca39c7_GroupItem');
        }
        if(id == null){
          id = document.querySelector('#aw5686df7d_GroupItem')
        }*/

        if (Array.isArray(anexos)) {
          if (anexos.length < 2 || anexos == "" || anexos == null) {
            eventContext.ui.hideCurrentDialog();
            if ((qtdMassa == null || qtdEmulsao == null || qtdTara == null || pesoBruto == null) && currSR.get("ms_status") == "AG_CARREG"){
              
              if(id == null || id != undefined){
                //id.setAttribute('style', "display:none");  
              }  
            }else{
              if(id == null || id != undefined){
                //id.setAttribute('style', "display:block");  
              }  
            }   
            eventContext.ui.showMessage("Favor informar a foto do ticket");
            return;
          }
        } else if (anexos instanceof Object) {
          if (anexos.data.length < 2 || anexos == "" || anexos == null) {
            eventContext.ui.hideCurrentDialog();
          if ((qtdMassa == null || qtdEmulsao == null || qtdTara == null || pesoBruto == null) && currSR.get("ms_status") == "AG_CARREG"){
            /*if(id == null || id != undefined){
              id.setAttribute('style', "display:none");  
            } */ 
          }else{
            /*if(id == null || id != undefined){
              id.setAttribute('style', "display:block");  
            }  */
          }   

            eventContext.ui.showMessage("Favor informar a foto do ticket");
            return;
          }
        }
      }
      var serviceRequestSet = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      );
      var currSR = serviceRequestSet.getCurrentRecord();

      if ((qtdMassa != null &&qtdEmulsao != null &&currSR.get("ms_status") == "AG_CARREG") ||
        currSR.get("ms_status") == "CARREG_INC"
      ) {
        currSR.set("ms_status", "CARREGADO");
        currSR.setDateValue(
          "ms_actualdate",
          this.application.getCurrentDateTime()
        );
		currSR.setDateValue('ms_secondaryapid',currSR.get('ms_apidauth'));
      }

      if (
        (qtdMassa == null || qtdEmulsao == null || qtdTara == null) &&
        currSR.get("ms_status") == "AG_CARREG"
      ) {
        currSR.set("ms_status", "CARREG_INC");
		currSR.setDateValue('ms_secondaryapid',currSR.get('ms_apidauth'));  
        //currSR.setDateValue('ms_actualdate',this.application.getCurrentDateTime());
      }

      /* var fotos = this.verifyattachments(fotos);
            if(fotos.lengh > 2){
                eventContext.ui.hideCurrentDialog();
                throw new PlatformRuntimeException("Favor informar a foto do ticket");	
                return ;
            }
                 */

      ModelService.save(serviceRequestSet)
        .then(function () {
          //eventContext.ui.hideCurrentDialog();
          //eventContext.ui.hideCurrentView();
          eventContext.ui.show("SGZUsina.MyReportedSR");
        })
        .otherwise(function (err) {
          eventContext.ui.showMessage(err);
        });
    },

		//Novas funcionalidades @autor:CLAUDIO ANDRADE -MAGNA SISTEMAS
		carregIncSgzUsinaView : function(eventContext) {
			eventContext.ui.hideCurrentDialog();
			var currServiceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
			var currSR = currServiceRequestSet.getCurrentRecord();
			
			var ticketId = currSR.get('identifier');  
			var ticketId = ticketId + "";
			//var usinaDesc = currSR.get('usina');
			var siteId = currSR.get('ms_siteid');
			var status = currSR.get('ms_status');
			var msAsphalt = currSR.get('ms_asphaltplantid');
			var dateExp = currSR.get('ms_expiredate');
			//var contratada = currSR.get('contratada');
			var obs = currSR.get('ms_remarks');
			var qtdMassaAut = currSR.get('ms_authqty');
			var qtdEmulsao = currSR.get('qtd_emulsao');
			var qtdMassa = currSR.get('qtd_massa');
			var msPlate = currSR.get('ms_plate');
			var qtdMassaAutPos = (qtdMassaAut - (qtdMassa + qtdEmulsao));
			
			var pesoBruto = currSR.get('ms_grossweight');
			var pesoTara = currSR.get('ms_tareweight');
			var pesoLiquido = (pesoBruto - pesoTara);
			
			var msItemNum = currSR.get('ms_itemnum');
			var usinaAut = currSR.get('ms_isauth');
			var company = currSR.get('ms_company');
			var isApauth = currSR.get('ms_isapauth');
			var rembal1 = currSR.get('ms_rembal1');
			var latitudey = currSR.get('ms_latitudestr');
			var latitudey = latitudey + "";
			var longitudex = currSR.get('ms_longitudestr');
			var longitudex = longitudex + "";
			var apidauth = currSR.get('ms_apidauth');	
			var sumCarreg = (qtdMassa + qtdEmulsao);
			var rembal1Qtd = (rembal1 - (qtdMassa + qtdEmulsao));

			//var dataAuth = this.application.getCurrentDateTime();
			//Logger.error("Ticket TST" + ticketIdTst);
			Logger.error("Ticket" + ticketId);
			//Logger.error("Usina" + usinaDesc);
			Logger.error("siteid" + siteId);
			Logger.error("status" + status);
			Logger.error("ms_asphaltplantid" + msAsphalt);
			Logger.error("dateExp" + dateExp);
			//Logger.error("contratada" + contratada);
			Logger.error("obs" + obs);
			Logger.error("qtdMassaAut" + qtdMassaAut);
			Logger.error("qtdEmulsao" + qtdEmulsao);
			Logger.error("qtdMassa" + qtdMassa);
			Logger.error("msPlate" + msPlate);
			Logger.error("qtdMassaAutPos" + qtdMassaAutPos);
			Logger.error("msItemNum" + msItemNum);
			Logger.error("usinaAut" + usinaAut);
			Logger.error("company" + company);
			Logger.error("isApauth" + isApauth);
			//Logger.error("dataAuth" + dataAuth);			
			
			if (apidauth != null && qtdMassa != null && qtdEmulsao != null && status == "AG_CARREG"){
				if (sumCarreg > qtdMassaAut){
					eventContext.ui.hideCurrentDialog();
					eventContext.ui.showMessage("Quantidade não Autorizada!");
					return ;
				}
				
				currSR.set('ms_status', "CARREGADO");
				currSR.setDateValue('ms_actualdate',this.application.getCurrentDateTime());
				
				ModelService.save(currServiceRequestSet).then(function() {
					eventContext.ui.show("SGZUsina.MyReportedSR");
					Logger.error("SAVE ");
					//eventContext.ui.hideCurrentView();
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});		
						
				var newSR = eventContext.application.getResource('sgzUsina').createNewRecord();
				originalServiceRequest = null;
				//eventContext.getResource()._asyncUpdateModified();

				Logger.error("NOVO REGISTRO" + newSR.get('identifier'));
				Logger.error("ANTIGO ID " + ticketId);
				
				//var serviceRequestSet = null;
				var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
				var newCurrSR = serviceRequestSet.getCurrentRecord();
						
				//FormatterService.toDisplayableValue(attachment.get('anywhereAttachSize'), "double"
				//newCurrSR.set('ms_amtkidauth', ticketIdTst, "integer");
				//newCurrSR.set('usina', usinaDesc);
				newCurrSR.set('ms_siteid', siteId);
				newCurrSR.set('ms_status', "AG_CARREG");
				newCurrSR.set('ms_asphaltplantid', msAsphalt);
				newCurrSR.setDateValue('ms_expiredate',date.add(this.application.getCurrentDateTime(), "day", 1));
				newCurrSR.set('ms_remarks', obs);
				newCurrSR.set('ms_authqty', qtdMassaAutPos);
				newCurrSR.set('qtd_emulsao', null);
				newCurrSR.set('qtd_massa', null);
				//newCurrSR.set('qtd_emulsao', qtdEmulsao);
				//newCurrSR.set('qtd_massa', qtdMassa);
				newCurrSR.set('ms_plate', msPlate);
				newCurrSR.set('ms_itemnum', msItemNum);
				newCurrSR.set('ms_isauth', usinaAut);
				newCurrSR.set('ms_company', company);
				newCurrSR.setDateValue('ms_authdate', this.application.getCurrentDateTime());
				//newCurrSR.set('ms_rembal1', rembal1);
				newCurrSR.set('ms_longitudestr', longitudex);
				newCurrSR.set('ms_latitudestr', latitudey);
				newCurrSR.set('ms_amtkidauthstr', ticketId);
				newCurrSR.set('ms_apidauth', apidauth);
				newCurrSR.set('ms_isapauth', true);
				newCurrSR.set('ms_rembal1', rembal1Qtd);
        newCurrSR.set('ms_secondaryapid', apidauth);	

				ModelService.save(serviceRequestSet).then(function() {
					Logger.error("SAVE ");
					//eventContext.ui.hideCurrentView();
					eventContext.ui.show("SGZUsina.MyReportedSR");;

				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});			

			}
			
			//if (qtdMassa == null || qtdEmulsao == null){
			//	eventContext.ui.showMessage("Favor informar a quantidade de Massa ou Emulsão");
			//	return ;
			//}
			
			if (apidauth == null && qtdMassa != null && qtdEmulsao != null && status == "AG_CARREG"){
			
				if (sumCarreg > qtdMassaAut){
					eventContext.ui.hideCurrentDialog();
					eventContext.ui.showMessage("Quantidade não Autorizada!");
					return ;
				}
				
				currSR.set('ms_status', "CARREG_INC");
				//currSR.set('ms_authqty', qtdMassaAutPos);
				ModelService.save(currServiceRequestSet).then(function() {
					Logger.error("SAVE ");
					//eventContext.ui.hideCurrentView();
					eventContext.ui.show("SGZUsina.MyReportedSR");
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});		
			}
			
			if (qtdMassa == null || qtdEmulsao == null && status == "AG_CARREG"){
				if (sumCarreg > qtdMassaAut){
					eventContext.ui.hideCurrentDialog();
					eventContext.ui.showMessage("Quantidade não Autorizada!");
					return ;
				}
				if (qtdMassa == null && qtdEmulsao == null){
					eventContext.ui.hideCurrentDialog();
					eventContext.ui.showMessage("Favor informar a quantidade de Massa ou Emulsão!");
					return ;
				}
				currSR.set('ms_status', "CARREG_INC");
				//currSR.set('ms_authqty', qtdMassaAutPos);
				ModelService.save(currServiceRequestSet).then(function() {
					Logger.error("SAVE ");
					eventContext.ui.show("SGZUsina.MyReportedSR");
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
			}
			
		},

    carregIncView: function (eventContext) {
      var serviceRequestSet = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      );
      var currSR = serviceRequestSet.getCurrentRecord();

      if (currSR.get("ms_status") == "CARREG_INC") {
        eventContext.ui.show("SGZUsina.CredDetail");
      } else if (
        currSR.get("ms_status") == "AG_CARREG" &&
        currSR.get("ms_amtkidauthstr") != null
      ) {
        eventContext.ui.show("SGZUsina.TKCompl");
      } else {
        eventContext.ui.show("SGZUsina.SRDetail");
      }
    },

    fotoNetweight: function (eventContext) {
      var serviceRequestSet = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      );
      var currSR = serviceRequestSet.getCurrentRecord();
      var attachments = currSR.get("attachments");
      var qtTara = currSR.get("ms_tareweight");
    },

    /* 	fotoGrossweight: function(eventContext){
            var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
            var currSR = serviceRequestSet.getCurrentRecord();
            var attachments = currSR.get("attachments");
            
            
            Logger.error("ANEXO BRUTO " + attachments.length);
            
            
            if (attachments.length >= 1 ){
                attachments = 2;
                eventContext.ui.showMessage("Favor tirar Foto do Peso do Peso Bruto");
                return ;
            }
            
        
        }, */

    fotoEmulsao: function (eventContext) {
      var serviceRequestSet = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      );
      var currSR = serviceRequestSet.getCurrentRecord();

      var qtdEmulsao = currSR.get("qtd_emulsao");
    },

    /* verificaSubPrefeitura: function(eventContext){
            var currSR = CommonHandler._getAdditionalResource(eventContext,"sgzUsina").getCurrentRecord();
            var siteId = currSR.get('ms_siteid');
            var currSpec;	
            
            var subpref = CommonHandler._getAdditionalResource(eventContext,'subpref');
            var contador = 0
            for(var i = 0 ; i < siteId.count() ; i++){
                currSRSpec = siteId.getRecordAt(i);
                var siteIdValue = currSRSpec.get('ms_siteid');
                contador++;
                console.log("contador " + contador);
                if(contador == 1){
                    console.log("contador " + contador);
                    siteId = siteIdValue;
                }
                console.log("contador " + contador);
            }
        } */

    initMyReportedSR: function(eventContext){
      var SRSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
      if (SRSet.count() > 0) {
        SRSet.setCurrentIndex(0);	
      }

      if (this.fromErrorLink)	{
        var view = eventContext.application.ui.getViewFromId('SGZUsina.MyReportedSR');
        view.setQueryBaseIndexByQuery(PlatformConstants.ERRORED_QUERYBASE).then(function(){
          eventContext.ui.show("SGZUsina.MyReportedSR");
          self.refreshList();
          return;
        }).otherwise(function(err){
          Logger.trace(err.toString() + " There is an error here");  
        });
        this.fromErrorLink = false;
      }
    },

    //Novas funcionalidades @autor:AMANDA FONSECA- v261221 -MAGNA SISTEMAS 
    salvarTicket: function (eventContext) {
        eventContext.ui.hideCurrentDialog();
        var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
        var currSR = serviceRequestSet.getCurrentRecord();
        var pesoTara = currSR.get("ms_tareweight");
        var apidauth = currSR.get("ms_apidauth");
        var obs = currSR.get("ms_remarks");
        var qtdMassaAut = currSR.get("ms_authqty");
        var qtdEmulsao = currSR.get("qtd_emulsao");
        var qtdMassa = currSR.get("qtd_massa");
        var sumCarreg = qtdMassa + qtdEmulsao;
        var pesoBruto = currSR.get("ms_grossweight");
        var pesoLiquido = pesoBruto - pesoTara;
        var attachments = currSR.get("attachments");
  
        ModelService.save(serviceRequestSet).then(function () {
            eventContext.ui.show("SGZUsina.MyReportedSR");
        }).otherwise(function (err) {
          eventContext.ui.showMessage(err);
        });
    },

    carregPreviewIncShowDialogAfter:function (eventContext) {
      eventContext.ui.hideCurrentDialog();
      eventContext.ui.show("SGZUsina.After.CompleCarreg");
    },

    finalizarSgzUsinaViewNovo : function(eventContext) {
			//eventContext.ui.hideCurrentDialog();
			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
			var currSR = serviceRequestSet.getCurrentRecord();
			
			var qtdMassaAut = null;
			var qtdEmulsao = null;
			var qtdMassa = null;
			var pesoBruto = null;
			
			
			var qtdTara = currSR.get("ms_tareweight");
			var qtdMassaAut = currSR.get('ms_authqty');
			var qtdEmulsao = currSR.get('qtd_emulsao');
			var qtdMassa = currSR.get('qtd_massa');
			var msPlate = currSR.get('ms_plate');
			var msAsphalt = currSR.get('ms_asphaltplantid');
			var sumCarreg = (qtdMassa + qtdEmulsao);
			var pesoBruto = currSR.get("ms_grossweight");
			//var attachments = currSR.get("attachments");
			var status = currSR.get("ms_status");
			
			if (sumCarreg > qtdMassaAut){
				eventContext.ui.hideCurrentDialog();
				eventContext.ui.showMessage("Quantidade não Autorizada!");
				return ;
			}
			
			if ((qtdTara == null)||(qtdTara == 0)){
				eventContext.ui.hideCurrentDialog();
				eventContext.ui.showMessage("Favor informar a quantidade de Peso Tara!");
				return ;
			}
		
			if ((qtdMassa == null && qtdEmulsao == null)||(qtdMassa == 0 && qtdEmulsao == 0)){
				eventContext.ui.hideCurrentDialog();
				eventContext.ui.showMessage("Favor informar a quantidade de Massa ou Emulsão!");
				return ;
			}	

			if (qtdMassa > qtdMassaAut){
				eventContext.ui.hideCurrentDialog();
				currSR.set('qtd_emulsao', null);
				currSR.set('qtd_massa', null);
				eventContext.ui.showMessage("Quantidade não Autorizada!");
				return ;
			}
			
			if (qtdEmulsao > qtdMassaAut){
				eventContext.ui.hideCurrentDialog();
				currSR.set('qtd_emulsao', null);
				currSR.set('qtd_massa', null);
				eventContext.ui.hideCurrentDialog();
				eventContext.ui.showMessage("Quantidade não Autorizada!");
				return ;
			}		
		
			if ((pesoBruto == null)||(pesoBruto == 0)){
				eventContext.ui.hideCurrentDialog();
				eventContext.ui.showMessage("Favor Informar o valor do Peso Bruto!");
				return ;
			}
	
		if (status == 'AG_CARREG' || status == 'CARREG_INC'){
			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
			var currSR = serviceRequestSet.getCurrentRecord();
			var anexos = currSR.get('attachments');
		
      if(Array.isArray(anexos)){
				if (anexos.length < 2 || anexos =="" || anexos == null){
				    eventContext.ui.hideCurrentDialog();
			      eventContext.ui.showMessage("Favor informar a foto do ticket");
				    return ;
				}
			}else if(anexos instanceof Object){
				if (anexos.data.length < 2 || anexos =="" || anexos == null){
				    eventContext.ui.hideCurrentDialog();
            //id.setAttribute('style', "display:block"); 
			      eventContext.ui.showMessage("Favor informar a foto do ticket");
				    return ;
				}
			}
		}
			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
			var currSR = serviceRequestSet.getCurrentRecord();


			//if ((qtdMassa != null || qtdEmulsao != null)||(qtdMassa != 0 || qtdEmulsao != 0)){
        if ((qtdMassa != null && qtdEmulsao != null)){
          if(currSR.get('ms_status') == "AG_CARREG" || currSR.get('ms_status') == "CARREG_INC"){
            currSR.set('ms_status', "CARREGADO");
              currSR.setDateValue('ms_actualdate',this.application.getCurrentDateTime());
          }
        }
			
				
			if (((qtdMassa == null || qtdEmulsao == null || qtdTara == null) && currSR.get('ms_status') == "AG_CARREG")||
      (qtdMassa == 0 || qtdEmulsao == 0 || qtdTara == 0) && currSR.get('ms_status'))  {
				currSR.set('ms_status', "CARREG_INC");
				//currSR.setDateValue('ms_actualdate',this.application.getCurrentDateTime());
			}
			
			/* var fotos = this.verifyattachments(fotos);
			if(fotos.lengh > 2){
				eventContext.ui.hideCurrentDialog();
				throw new PlatformRuntimeException("Favor informar a foto do ticket");	
				return ;
			}*/
														
			ModelService.save(serviceRequestSet).then(function() {
				eventContext.ui.hideCurrentDialog();
				//eventContext.ui.hideCurrentView();
				eventContext.ui.show("SGZUsina.MyReportedSR");;
				
			}).
			otherwise(function(err){
				eventContext.ui.showMessage(err);						
			});			
		},

    carregIncSgzUsinaViewNovo : function(eventContext) {
			
      eventContext.ui.hideCurrentDialog();
  
      var currServiceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
      var currSR = currServiceRequestSet.getCurrentRecord();
      
      var ticketId = currSR.get('identifier');  
      var ticketId = ticketId + "";
      //var usinaDesc = currSR.get('usina');
      var siteId = currSR.get('ms_siteid');
      var status = currSR.get('ms_status');
      //var msAsphalt = currSR.get('ms_asphaltplantid');
      var msApidauth = currSR.get('ms_apidauth');
      var dateExp = currSR.get('ms_expiredate');
      //var contratada = currSR.get('contratada');
      var obs = currSR.get('ms_remarks');
      var qtdMassaAut = currSR.get('ms_authqty');
      var qtdEmulsao = currSR.get('qtd_emulsao');
      var qtdMassa = currSR.get('qtd_massa');
      var msPlate = currSR.get('ms_plate');
      msPlate = msPlate.trim();
      var qtdMassaAutPos = (qtdMassaAut - (qtdMassa + qtdEmulsao));
      
      var pesoBruto = currSR.get('ms_grossweight');
      var pesoTara = currSR.get('ms_tareweight');
      
      
      var pesoLiquido = (pesoBruto - pesoTara);
      
      var msItemNum = currSR.get('ms_itemnum');
      var usinaAut = currSR.get('ms_isauth');
      var company = currSR.get('ms_company');
      var isApauth = currSR.get('ms_isapauth');
      var rembal1 = currSR.get('ms_rembal1');
      var latitudey = currSR.get('ms_latitudestr');
      var latitudey = latitudey + "";
      var longitudex = currSR.get('ms_longitudestr');
      var longitudex = longitudex + "";
      var apidauth = currSR.get('ms_apidauth');
      var contractnum =	currSR.get("ms_contractnum");
      var sumCarreg = (qtdMassa + qtdEmulsao);
      var rembal1Qtd = (rembal1 - (qtdMassa + qtdEmulsao));
  
      if (msApidauth == null){
        eventContext.ui.hideCurrentDialog();
        eventContext.ui.showMessage("Favor informar selecionar uma Usina!");
        return ;
      }   
  
      //var dataAuth = this.application.getCurrentDateTime();
      //Logger.error("Ticket TST" + ticketIdTst);
      //Logger.error("Ticket" + ticketId);
      //Logger.error("Usina" + usinaDesc);
      //Logger.error("siteid" + siteId);
      //Logger.error("status" + status);
      //Logger.error("ms_asphaltplantid" + msAsphalt);
      //Logger.error("dateExp" + dateExp);
      //Logger.error("contratada" + contratada);
      //Logger.error("obs" + obs);
      //Logger.error("qtdMassaAut" + qtdMassaAut);
      //Logger.error("qtdEmulsao" + qtdEmulsao);
      //Logger.error("qtdMassa" + qtdMassa);
      //Logger.error("msPlate" + msPlate);
      //Logger.error("qtdMassaAutPos" + qtdMassaAutPos);
      //Logger.error("msItemNum" + msItemNum);
      //Logger.error("usinaAut" + usinaAut);
      //Logger.error("company" + company);
      //Logger.error("isApauth" + isApauth);
      //Logger.error("dataAuth" + dataAuth);		
      
  if (sumCarreg > qtdMassaAut) {
    eventContext.ui.hideCurrentDialog();
    eventContext.ui.showMessage("Quantidade não Autorizada!");
    return;
  }
  
  var idUsinaAtual;

  try {
    idUsinaAtual = sessionStorage.getItem("idUsinaAtual");
    if(idUsinaAtual){
        idUsinaAtual = JSON.parse(idUsinaAtual);
    }
  } catch (error) {
    console.log(error);
  }
  currSR.set('ms_asphaltplantid', idUsinaAtual); 
  currSR.set('ms_status', "CARREG_INC");
  currSR.set('ms_authqty', qtdMassaAutPos);			
  currSR.set('ms_secondaryapid', apidauth);			
  currSR.setDateValue('ms_actualdate',this.application.getCurrentDateTime());			
  ModelService.save(currServiceRequestSet).then(function() {
      //eventContext.ui.show("SGZUsina.MyReportedSR");
      Logger.error("SAVE ");
      //eventContext.ui.hideCurrentView();
    }).otherwise(function(err){
      eventContext.ui.showMessage(err);						
  });		
  if ((msApidauth != null ||msApidauth != 0) && status == "AG_CARREG"){
          var newSR = eventContext.application.getResource('sgzUsina').createNewRecord();
          originalServiceRequest = null;
          //eventContext.getResource()._asyncUpdateModified();
  
          Logger.error("NOVO REGISTRO" + newSR.get('identifier'));
          Logger.error("ANTIGO ID " + ticketId);
          
          //var serviceRequestSet = null;
          var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
          var newCurrSR = serviceRequestSet.getCurrentRecord();
          
          //FormatterService.toDisplayableValue(attachment.get('anywhereAttachSize'), "double"
          //newCurrSR.set('ms_amtkidauth', ticketIdTst, "integer");
          //newCurrSR.set('usina', usinaDesc);
            newCurrSR.set('ms_siteid', siteId);
            newCurrSR.set('ms_status', "AG_CARREG");
            newCurrSR.set('ms_asphaltplantid', msApidauth);
    
  
          newCurrSR.setDateValue('ms_expiredate',date.add(this.application.getCurrentDateTime(), "day", 1));
          newCurrSR.set('ms_remarks', obs);
          newCurrSR.set('ms_authqty', qtdMassaAutPos);
          newCurrSR.set('qtd_emulsao', null);
          newCurrSR.set('qtd_massa', null);
          //newCurrSR.set('qtd_emulsao', qtdEmulsao);
          //newCurrSR.set('qtd_massa', qtdMassa);
          newCurrSR.set('ms_plate', msPlate);
          newCurrSR.set('ms_itemnum', msItemNum);
          newCurrSR.set('ms_isauth', usinaAut);
          newCurrSR.set('ms_company', company);
          newCurrSR.setDateValue('ms_authdate', this.application.getCurrentDateTime());
          //newCurrSR.set('ms_rembal1', rembal1);
          newCurrSR.set('ms_longitudestr', longitudex);
          newCurrSR.set('ms_latitudestr', latitudey);
          newCurrSR.set('ms_amtkidauthstr', ticketId);
          newCurrSR.set('ms_apidauth', msApidauth);
          newCurrSR.set('ms_isapauth', true);
          newCurrSR.set('ms_rembal1', rembal1Qtd);
		      newCurrSR.set('ms_contractnum', contractnum);
          newCurrSR.set('ms_secondaryapid', msApidauth);
          console.log(newCurrSR);
  
  
          
          ModelService.save(serviceRequestSet).then(function() {
              Logger.error("SAVE ");
              //eventContext.ui.hideCurrentView();
              //eventContext.ui.show("SGZUsina.TransferCredEdit");
              //eventContext.ui.show("SGZUsina.MyReportedSR");
             // eventContext.ui.returnToView("SGZUsina.ActionPanel");
            
          }).otherwise(function(err){
              eventContext.ui.showMessage(err);						
          });			
          setTimeout(() => {
          	eventContext.ui.returnToView("SGZUsina.ActionPanel");
          }, 5000);
      }else{
          if (status != "AG_CARREG"){
          eventContext.ui.showMessage("Só tickets com o status de 'Aguardando o carregamento' podem ser transferidos!");
          }   

      }

  },

    yesOnCancel: function (eventContext) {
      var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
      var currSR = serviceRequestSet.getCurrentRecord();
      if (currSR) {
        //currSR.deleteLocal();
      }
     eventContext.ui.hideCurrentDialog();
     if(eventContext.ui.hideCurrentView){
     	eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
     }
      //eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
     eventContext.ui.show("SGZUsina.ActionPanel");
    },
    initMyReportedSRNovoSessionStorage: function (eventContext) {
      var idUsinaAtual;
      var idUsinaAtualStorage;
      //idUsinaAtualStorage = sessionStorage.idUsinaAtual;
      idUsinaAtualStorage = sessionStorage.getItem("idUsinaAtual");
      if((idUsinaAtualStorage == undefined)||(idUsinaAtualStorage == null)||(idUsinaAtualStorage == 0)){
        var SRSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
        var currServiceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
        var currSR = currServiceRequestSet.getCurrentRecord();
        idUsinaAtual = currSR.ms_asphaltplantid;
        if((idUsinaAtual > 0)||(idUsinaAtual != null)||(idUsinaAtual != undefined)){
          idUsinaAtual = currSR.get("ms_asphaltplantid");
        }
        if((idUsinaAtual > 0)||(idUsinaAtual != null)||(idUsinaAtual != undefined)){
          sessionStorage.setItem('idUsinaAtual', JSON.stringify(idUsinaAtual));
        }
      }else{
        try {
          idUsinaAtualStorage = JSON.parse(sessionStorage.idUsinaAtual);
          idUsinaAtual = idUsinaAtualStorage;
        } catch (error) {
          console.log(error);
          console.log("linha 2256 -- initMyReportedSRNovoSessionStorage");          
        }

      }
    },
    initMyReportedSRNovo: function (eventContext) {
      var SRSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
  
      
      let idUsinaAtual;
      
      try {
        let idUsinaAntiga = sessionStorage.getItem("idUsinaAtual");
        if(idUsinaAtual){
          idUsinaAtual = JSON.parse(idUsinaAntiga);
        }
      } catch (error) {
        console.log(error);
        console.log("linha 2274 --- initMyReportedSRNovo");
      }
      var myUser = UserManager.getCurrentUser();
  
       const listUser = SRSet.data.filter(p => p.ms_asphaltplantid === idUsinaAtual).map(p => p);
       console.log(listUser);
  
       //SRSet.data = [];
       //SRSet.data.push(listUser);

       SRSet.data = listUser;
  
      if (SRSet.count() > 0) {
        SRSet.setCurrentIndex(0);
      }
  
      if (this.fromErrorLink) {
        var view = eventContext.application.ui.getViewFromId("SGZUsina.MyReportedSR");
  
        view.setQueryBaseIndexByQuery(PlatformConstants.ERRORED_QUERYBASE).then(function () {
            eventContext.ui.show("SGZUsina.MyReportedSR");
            self.refreshList();
            return;
          }).otherwise(function (err) {
            Logger.trace(err.toString() + " There is an error here");
          });
        this.fromErrorLink = false;
      }
    },
    
    //Fim novas funcionalidades @autor:AMANDA FONSECA -MAGNA SISTEMAS


    /* verifyattachments: function (eventContext){
        var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"sgzUsina");
        var currSR = serviceRequestSet.getCurrentRecord();
        var attachments = currSR.get("attachments");
        return attachments;					
      },*/

    okOnSRCommitConfirm: function (eventContext) {
      eventContext.ui.hideCurrentDialog();
      eventContext.ui.hideCurrentView();
      //originalServiceRequest=null;
    },

    /*commitAssetEntryView: function(eventContext){
      var currSR = CommonHandler._getAdditionalResource(eventContext,"sgzUsina").getCurrentRecord();     
      //Make sure temporary variables are set to the final values
      //This is necessary because hideCurrentView calls cleanup event
      this.curAsset = currSR.get('asset');
      this.curAssetDesc = currSR.get('assetdesc');
      this.curAssetld = currSR.get('assetld');
      this.curLocation = currSR.get('location');
      this.curLocationDesc = currSR.get('locationdesc');
      this.currLocationld = currSR.get('locationld');
      eventContext.ui.hideCurrentView();
    },*/

    noOnCancel: function (eventContext) {
      //dont do anything just hide dialog and Location UI
      eventContext.ui.hideCurrentDialog();
      eventContext.ui.getCurrentViewControl().refresh();
    },



    fetchAllListSizes: function (eventContext) {
      var serviceRequest = eventContext.application
        .getResource("sgzUsina")
        .getCurrentRecord();
      var self = this;
      listSizeArray.forEach(function (listSizeAttribute) {
        serviceRequest.set(listSizeAttribute, "--");
      });
      if (serviceRequest.wasCommittedToServer()) {
        loadingLists = true;
        ModelService.multipleChildrenOf(serviceRequest, attributes).always(
          function () {
            loadingLists = false;
            self.refreshAllListSizes(eventContext);
          }
        );
      } else {
        self.refreshAllListSizes(eventContext);
      }
    },

    hideDialog: function (eventContext) {
      eventContext.ui.hideCurrentDialog();
    },

    /**
     * Initialize and set the Classification Path and Description on Detail page
     *
     * @constructor
     * @param eventContext
     */

    initClassificationField: function (eventContext) {
      var serviceRequest = CommonHandler._getAdditionalResource(
        eventContext,
        "sgzUsina"
      ).getCurrentRecord();
      var classstructureid = serviceRequest.get("classstructureid");
      if (classstructureid == null) {
        classstructureid = "null";
      }
      var filter = { classstructureid: classstructureid };
      var class_desc = "";
      var classpath = "";
      ModelService.filtered(
        "classstructure",
        null,
        filter,
        null,
        false,
        true
      ).then(function (classStructure) {
        if (classStructure.count() > 0) {
          classpath = classStructure.getCurrentRecord().get("hierarchypath");
          class_desc = classStructure.getCurrentRecord().get("description");
          serviceRequest.set("classificationpath", classpath);
          serviceRequest.set("classificationdesc", class_desc);
        } else {
          serviceRequest.set("classificationpath", "");
          serviceRequest.set("classificationdesc", "");
        }
      });
    },

    handleSRSpecResourceWhenGoingBack: function (
      eventContext,
      originalServiceRequest
    ) {
      if (originalServiceRequest.ticketSpec == null) {
        WL.application.resources["serviceRequest.ticketSpec"].data = [];
      } else {
        if (originalServiceRequest.ticketSpec.data == undefined) {
          //originalServiceRequest.ticketSpec contains array instead of object
          WL.application.resources["serviceRequest.ticketSpec"].data =
            originalServiceRequest.ticketSpec;
        } else {
          WL.application.resources["serviceRequest.ticketSpec"].data =
            originalServiceRequest.ticketSpec.data;
        }
      }
    },

    validateFollowupWonum: function (eventContext) {
      var mywo = eventContext.getCurrentRecord().get("wonum");
      if (mywo == null || mywo == "") {
        eventContext.setDisplay(false);
      }
    },

    initMyReportedSRNovoSessionStorageInicial: function (eventContext) {
      var idUsinaAtual;
      var idUsinaAtualStorage;
      //idUsinaAtualStorage = sessionStorage.idUsinaAtual;
      idUsinaAtualStorage = sessionStorage.getItem("idUsinaAtual");
      if((idUsinaAtualStorage == undefined)||(idUsinaAtualStorage == null)||(idUsinaAtualStorage == 0)){
        var currServiceRequestSet = CommonHandler._getAdditionalResource(eventContext,"MSasphaltplant");
        var currSR = currServiceRequestSet.getCurrentRecord();
        idUsinaAtual = currSR.get('idusina');;
        if((idUsinaAtual > 0)||(idUsinaAtual != null)||(idUsinaAtual != undefined)){
          idUsinaAtual = currSR.get("idusina");
        }
        if((idUsinaAtual > 0)||(idUsinaAtual != null)||(idUsinaAtual != undefined)){
          sessionStorage.setItem('idUsinaAtual', JSON.stringify(idUsinaAtual));
        }
      }else{
        try {
          idUsinaAtualStorage = JSON.parse(sessionStorage.idUsinaAtual);
          idUsinaAtual = idUsinaAtualStorage;
        } catch (error) {
          console.log(error);
          console.log("linha 1948 -- initMyReportedSRNovoSessionStorageInicial");          
        }

      }
    },
    
  });
});
