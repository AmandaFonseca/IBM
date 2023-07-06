/*
 * Licensed Materials - Property of IBM
 * "Restricted Materials of IBM"
 *
 * 5725-M39
 *
 * (C) COPYRIGHT IBM CORP. 2013 All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp. 
 *
 */

/* Inicio alteração Amanda Chamado 80537 - ATIVOS ABOREOS - FAMILIA / NOME POPULAR  03/11/22 -->*/

define("custom/handlers/MSAssetDetailHandler", 
	   [ "dojo/_base/declare",
	     "dojo/_base/array",
		 "dojo/_base/lang",
		 "dojo/topic",
		 "dojo/date",
		 "dojo/number",
	     "platform/handlers/_ApplicationHandlerBase",
	     "platform/comm/CommunicationManager",
	     "application/business/AssetObject",
	     "platform/translation/SynonymDomain",
	     "platform/model/ModelService",
	     "platform/translation/MessageService",
	     "application/handlers/CommonHandler",
	     "application/business/FieldUtil",
	     "application/business/AssetSpecificationObject",
	     "platform/exception/PlatformRuntimeException",
	     "platform/warning/PlatformRuntimeWarning",
	     "platform/auth/UserManager",
	     "platform/util/PlatformConstants",
	     "platform/util/AsyncAwareMixin",
		 "platform/logging/Logger",
		 "platform/map/MapProperties",
		 "platform/geolocation/GeoLocationServiceHelper",
		 "platform/geolocation/GeoLocationTrackingService", 
		 "platform/store/_ResourceMetadataContext",
	     "dojo/Deferred"],
function(declare, arrayUtil, lang, topic, date, number, ApplicationHandlerBase, CommunicationManager, Asset, SynonymDomain, ModelService, MessageService, CommonHandler, FieldUtil, AssetSpecificationObject, PlatformRuntimeException, PlatformRuntimeWarning, UserManager, PlatformConstants, AsyncAwareMixin, Logger, MapProperties, GeoLocationServiceHelper, GeoLocationTrackingService, ResourceMetaData, Deferred) {
	var listSizeArray = ['attachmentssize','assetspecsize'];
	var attributes =    ["attachments","assetSpec"];
	var loadingLists = false;
	return declare( [ApplicationHandlerBase, AsyncAwareMixin],  {
		
		//this attribute was inserted to set the location back when canceling 
		curLocation:null,
		curLocationDesc:null,
		currLocationld:null,
		curParent:null,
		curParentDesc:null,
		curParentld:null,
		
/**@memberOf application.handlers.AssetDetailHandler */
		initNewAssetView : function(eventContext) {

			var domainAssetStatus = CommonHandler._getAdditionalResource(eventContext,"domainAssetStatus");
			CommonHandler._clearFilterForResource(eventContext,domainAssetStatus);
			var status = SynonymDomain.resolveToDefaultExternal(domainAssetStatus, 'NOT READY');

			// TODO: change to actual method once Data Access API is completed
			var newAsset = eventContext.application.getResource('asset').createNewRecord();

			newAsset.set('status', status);
			newAsset.set('siteid', UserManager.getInfo("defsite"));
			newAsset.set('orgid', UserManager.getInfo("deforg"));
			newAsset.set('isrunning', true);
			newAsset.set('classstructureid', '02.01');
			eventContext.getResource()._asyncUpdateModified();
			WL.application.resources['asset.assetSpec'].data = [];	
			//Logger.error("ASSETNUM: " + asset.get('assetnum');
			//Logger.error("CLASSSTRUCTUREID: " + asset.get('classstructureid');
						
		},
		setCheckButton: function (eventContext) {
			var campo = eventContext;
			var elementoId = campo.artifactId;
			if(elementoId == 'SGZArbo.Section.Two.SpecificationsView_groupitem_0_ms_speciesunident'){
				var classe = campo.labelFor;
				localStorage.setItem('check_especie_nao_identificada', classe);
			}	
		},
		
		control_final: function (eventContext) {
			let asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo');
			let assetSet = asset.getCurrentRecord();
			let aux = document.querySelector('#'+localStorage.getItem('check_especie_nao_identificada'));
			let checkboxstatus = aux.getAttribute('aria-checked');
			asset.getCurrentRecord().set("ms_speciesunident", checkboxstatus);			

			if (!asset.getCurrentRecord().get("ms_speciesunident")) {
				asset.getCurrentRecord().set("ms_popularname",null);
				asset.getCurrentRecord().set("ms_scientific",null);
				asset.getCurrentRecord().set("ms_family",null);
				asset.getCurrentRecord().set("ms_genre",null);
				asset.getCurrentRecord().set("ms_species",null);				
			}
		},	
/*
		control_final: function (eventContext) {
			try {

				var button;
				var elementoId = localStorage.getItem('check_especie_nao_identificada');
	
				if((elementoId != null)&&(elementoId != undefined)){
					var tipo = typeof elementoId;
					if(typeof tipo === 'string' || tipo instanceof String){   
					}else{
						elementoId = JSON.stringify(elementoId);
					}
				}
				var button = document.querySelector('#'+elementoId);
				var statusAtual = button.getAttribute('aria-checked');
				console.log(statusAtual);

				console.log(button);


				let elementos_filhos = eventContext.children[0].children[0].children[0].children;
				
				var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();

				for (let index = 0; index < elementos_filhos.length; index++) {
					const lookup_atual = elementos_filhos[index];
					var valor = lookup_atual.label.textMsg.toLocaleLowerCase();

					if (statusAtual == 'true'){
						if (!valor.includes('espécie não identificada')){
							asset.set("ms_popularname", null);
							asset.set("ms_family", null);
							asset.set("ms_scientific", null);
							asset.set("ms_genre", null);
							asset.set("ms_species", null);
							lookup_atual.focusNode.readOnly = true;
						}
					}else{
						if (!valor.includes('espécie não identificada')){
							lookup_atual.focusNode.readOnly = false;
						}
					}

				}

			} catch (error) {
				console.log(error);
			}

		},
		
*/

		discardNewAssetView : function(eventContext) {
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			
			if(currAsset) {
				currAsset.deleteLocal();
			}
			var statuses = CommonHandler._getAdditionalResource(eventContext,'domainAssetStatus');
			CommonHandler._clearFilterForResource(eventContext,statuses);
			
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
		},
		
		handleBackButton: function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = assetSet.getCurrentRecord();
			
			if(asset && asset.isNew()) {
				asset.deleteLocal();
			}
			else {
				eventContext.application.ui.getViewFromId(eventContext.application.ui.getCurrentView().movedFrom).setFooterDisplay(true);	
			}			
		},

		commitNewAssetView : function(eventContext) {
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			var self = this;
			//var attachments = listSizeArray[0];
			//Logger.error("Anexos array" + attachments);
			var attachments = currAsset.get("attachmentssize");
			var latitude = currAsset.get("latitudey");
			var longitude = currAsset.get("longitudex");
			Logger.error("Anexos variavel antes do if" + attachments);
			if (attachments == "--"){
				attachments = 0;	
				Logger.error("Anexos variavel no if" + attachments);
			}
			//Logger.error("Has att" + this._hasAttachments());
			if(attachments == 0){
				eventContext.ui.showMessage("Adicione uma foto para salvar o registro.");
			}
			else if(latitude == null || longitude == null){
				eventContext.ui.showMessage("Aproxime o celular da árvore e pressione 'Capturar GPS' para salvar.");
			}
			else{
				if (eventContext.viewControl.validate()) {
					ModelService.save(assetSet).then(function() {
						var statuses = CommonHandler._getAdditionalResource(eventContext,'domainAssetStatus');
						CommonHandler._clearFilterForResource(eventContext,statuses);
					
						var viewHistory = eventContext.ui.viewHistory;
						var previousView = viewHistory[viewHistory.length-2];
						eventContext.ui.getViewFromId(previousView.id).setQueryBaseIndexByQuery(PlatformConstants.CREATED_QUERYBASE).then(function(){
							eventContext.ui.hideCurrentView();
					});
				}).
				otherwise(function(err){
					//eventContext.ui.showMessage(err);						
				});
				}
			}	
		},
		
	
		// async validation of parent 
		asyncvalidateParent: function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset').getCurrentRecord();
			var parent = asset.getPendingOrOriginalValue('parent');
			var siteID = asset.getPendingOrOriginalValue('siteid');
						
			//If parent is blank, set description as blank, return
			if(!parent){
				asset.set('parentdesc','');
				asset.set('parentld', '');
				asset.set('parentanddescription', '');
				return;
			}

			ModelService.filtered('additionalasset', null, [{assetnum: parent, siteid: siteID}], null, false, true, null, true).then(function(parentSet){
				if (parentSet.count() > 0){
					var parentRec = parentSet.getRecordAt(0);
					asset.set('parentdesc',parentRec.get('description'));
					asset.set('parentld', parentRec.get('assetlongdesc'));
					FieldUtil.initCompositeField("assetnum", "assetdesc", "parentanddescription", asset);
					var location = parentRec.get('location');
					if (location){
						asset.set('location', location);
						asset.set('locationdesc',parentRec.get('locationdesc'));
						asset.set('locationld', parentRec.get('locationld'));
						FieldUtil.initCompositeField("location", "locationdesc", "locationanddescription", asset);
					}
				}
				else{
					asset.set('parentdesc','');
					asset.set('parentld', '');
					asset.set('parentanddescription', parent);
					eventContext.application.showMessage(MessageService.createStaticMessage('invalidAsset').getMessage());
				}
			});
		},
				
		asyncValidateItem : function(eventContext) {
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset').getCurrentRecord();
			var itemnum = asset.getPendingOrOriginalValue('itemnum');

			ModelService.filtered('additionalitem', null, [{itemnum: itemnum}], null, false, true, null, true).then(function(itemSet){
				if (itemSet.count() == 0){
					eventContext.application.showMessage(MessageService.createStaticMessage('invalidItem').getMessage());
				}
			});
		},

		// async validation of location 
		asyncvalidateLocation: function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset').getCurrentRecord();
			var location = asset.getPendingOrOriginalValue('location');
			var siteID = asset.getPendingOrOriginalValue('siteid');
						
			//If location is blank, set description as blank, return
			if(!location){
				asset.set('locationdesc','');
				asset.set('locationld', '');
				asset.set('locationanddescription', '');
				return;
			}

			ModelService.filtered('additionallocations', null, [{location: location, siteid: siteID}], null, false, true, null, true).then(function(locationSet){
				if (locationSet.count() > 0){
					var locationRec = locationSet.getRecordAt(0);
					asset.set('locationdesc',locationRec.get('assetdesc'));
					asset.set('locationld', locationRec.get('assetld'));
					FieldUtil.initCompositeField("location", "locationdesc", "locationanddescription", asset);
				}
				else{
					asset.set('locationdesc','');
					asset.set('locationld', '');
					asset.set('locationanddescription', parent);
					eventContext.application.showMessage(MessageService.createStaticMessage('invalidLocation').getMessage());
				}
			});
		},
		// FUNCOES GPS
		_createGPSLocalStore : function (eventContext) {
					var gpsLocalStoreSet = eventContext.ui.application.getResource('PlatformGeolocationLocalStore');
					
					if (gpsLocalStoreSet.count() < 1){
						gpsLocalStoreSet.createNewRecord();
					} else {
						var gpsLocalStore = gpsLocalStoreSet.getRecordAt(0);
						gpsLocalStore.set('longitudex', "");
						gpsLocalStore.set('latitudey', "");
					}
					
					ModelService.save(gpsLocalStoreSet);
				},

		_getLBSInterval : function(eventContext) {
					var laborLBSInterval = 1;
					var laborCrewLBSInterval = 1;
					
					if (laborCrewLBSInterval > 0 ) {
						return laborCrewLBSInterval;
					} else {
						return laborLBSInterval;
					}
				},

		initialize : function (eventContext) {
					
					this.lbsinterval = this._getLBSInterval(eventContext);
					Logger.log("LBS Interval Value :: " + this.lbsinterval);
					
					var gpsHighAccuracy = MapProperties.getGPSHighAccuracy();		
					var gpsTimeOut = MapProperties.getGPSTimeout();
					var gpsMaximumAge = MapProperties.getGPSMaximumAge();
					
					var that = this;
					
					this._createGPSLocalStore(eventContext);
					
					var isTrackingEnabled = eventContext.application.isFeatureEnabled("gps.tracking.enable");
					
					if (this.lbsinterval > 0 && !isTrackingEnabled) {
						var msg = MessageService.createStaticMessage('GPSAppFeatureNotEnabled').getMessage();
						Logger.error(msg);
						//eventContext.ui.showMessage(msg);
					}
					
					if (this.lbsinterval > 0 && isTrackingEnabled) {
						
						var gpsWatchObject = new GeoLocationTrackingService();

						gpsWatchObject.startGpsTracking(
							this._onSuccessWatchPosition,
							this._errorCallback.bind(eventContext),
							{
								maximumAge: gpsMaximumAge,
							    timeout: gpsTimeOut ,
							    enableHighAccuracy: gpsHighAccuracy
							}
		                );
						
						this._startTimer();
					}

				},
		setCheckqueryBaseViewContext : function (eventContext) {
			let queryBase = eventContext.queryBase;
			localStorage.setItem('filtro', eventContext.queryBase);
		},
		setCheckqueryBase : function (eventContext) {
			var assetSet = CommonHandler._getAdditionalResource(eventContext, 'asset');
			var asset = assetSet.data[0];

			let nome = asset.get('personid');
			let curlatitudey =localStorage.getItem("curlatitudey");
			let curlongitudex =localStorage.getItem("curlongitudex");
			
			nome = nome.toLowerCase();
			curlatitudey = parseFloat(curlatitudey);
			curlongitudex = parseFloat(curlongitudex);
			asset.set('personid',nome);
			asset.set('personid',nome);
			asset.set('ms_curlatitudey',curlatitudey);
			asset.set('ms_curlongitudex',curlongitudex);

			ModelService.save(assetSet);
		
		},
		
		 updatePersonGPSPosition : function (eventContext) {
			
			var personSet = CommonHandler._getAdditionalResource(eventContext, 'asset');
			var curPerson = personSet.data[0];
			eventContext.application.showBusy();
			
			var onSuccessCallback = function (position) {

				Logger.trace("Current GPS Position :: " + position.coords.longitude + " , " + position.coords.latitude );

				var person = personSet.data[0];
				Logger.error("position.coords.longitude " + position.coords.longitude);
				Logger.error("position.coords.latitude " + position.coords.latitude);
				localStorage.setItem("curlongitudex",position.coords.longitude);
				localStorage.setItem("curlatitudey",position.coords.latitude);
				
				let nome;
				try {
					if (person.get('personid') == undefined || person.get('personid') == null) {
						nome = UserManager.getCurrentUser();
						person.set('personid',nome);
						nome = person.get('personid');
					}else{
						nome = person.get('personid');
					}
				} catch (error) {
					console.log(error);
				}
				let curlatitudey =localStorage.getItem("curlatitudey");
				let curlongitudex =localStorage.getItem("curlongitudex");

				nome = nome.toLowerCase();
				curlatitudey = parseFloat(curlatitudey);
				curlongitudex = parseFloat(curlongitudex);
				person.set('personid',nome);
				person.set('personid',nome);
				person.set('curlatitudey',curlatitudey);
				person.set('curlongitudex',curlongitudex);
				ModelService.save(personSet);
				
				this.application.hideBusy();
			};
			
			var onErrorCallback = function (error) { 
				Logger.trace("Get Current GPS Position Error :: " + error.code + " :: " + error.message);
				var msg = ""; 
				
				switch(error.code){
					
					case error.PERMISSION_DENIED:
						msg = MessageService.createStaticMessage('gpsPermission').getMessage();
						break;
					case error.POSITION_UNAVAILABLE:
						msg = MessageService.createStaticMessage('unableAcquireGPS').getMessage();
						break;
					case error.TIMEOUT:
						msg = MessageService.createStaticMessage('gpsTimeout').getMessage();
						break;
					default:
						msg = MessageService.createStaticMessage('unableAcquireGPS').getMessage();
				}
				
				this.application.hideBusy();
				this.ui.showMessage(msg);
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
				onErrorCallback.bind(eventContext),
				{
				    maximumAge: gpsMaximumAge ,
				    timeout: gpsTimeout ,
				    enableHighAccuracy: gpsHighAccuracy
				}
            );
		},
		
		
		enableGPSPosition : function (eventContext) {
			
			var workOrderSet = eventContext.application.getResource('asset');
			var currAsset = workOrderSet.getCurrentRecord();
			eventContext.application.showBusy();
			
			var onSuccessCallback = function (position) {

				Logger.trace("Current GPS Position :: " + position.coords.longitude + " , " + position.coords.latitude );
				if (workOrderSet.count() > 0 ) {

					var workOrder = workOrderSet.getCurrentRecord();
					if (workOrder) {
						Logger.error("position.coords.longitude " + position.coords.longitude);
						Logger.error("position.coords.latitude " + position.coords.latitude);
						Logger.error("workOrder.get Long " + workOrder.get('longitudex'));
						Logger.error("workOrder.get Lati" + workOrder.get('latitudex'));
						// ModelService.save(workOrderSet);
					}
				}
				
				this.application.hideBusy();
			};
			
			var onErrorCallback = function (error) { 
				Logger.trace("Get Current GPS Position Error :: " + error.code + " :: " + error.message);
				var msg = ""; 
				
				switch(error.code){
					
					case error.PERMISSION_DENIED:
						msg = MessageService.createStaticMessage('gpsPermission').getMessage();
						break;
					case error.POSITION_UNAVAILABLE:
						msg = MessageService.createStaticMessage('unableAcquireGPS').getMessage();
						break;
					case error.TIMEOUT:
						msg = MessageService.createStaticMessage('gpsTimeout').getMessage();
						break;
					default:
						msg = MessageService.createStaticMessage('unableAcquireGPS').getMessage();
				}
				
				this.application.hideBusy();
				this.ui.showMessage(msg);
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
				onErrorCallback.bind(eventContext),
				{
				    maximumAge: gpsMaximumAge ,
				    timeout: gpsTimeout ,
				    enableHighAccuracy: gpsHighAccuracy
				}
            );
		},
		
		updateCurrentGPSPosition : function (eventContext) {
			
			var workOrderSet = eventContext.application.getResource('asset');
			var currAsset = workOrderSet.getCurrentRecord();
			eventContext.application.showBusy();
			
			var onSuccessCallback = function (position) {

				Logger.trace("Current GPS Position :: " + position.coords.longitude + " , " + position.coords.latitude );
				if (workOrderSet.count() > 0 ) {

					var workOrder = workOrderSet.getCurrentRecord();
					if (workOrder) {
						currAsset.set('longitudex',position.coords.longitude);
						currAsset.set('latitudey',position.coords.latitude);
						Logger.error("position.coords.longitude " + position.coords.longitude);
						Logger.error("position.coords.latitude " + position.coords.latitude);
						Logger.error("workOrder.get Long " + workOrder.get('longitudex'));
						Logger.error("workOrder.get Lati" + workOrder.get('latitudex'));
						// ModelService.save(workOrderSet);
					}
				}
				
				this.application.hideBusy();
			};
			
			var onErrorCallback = function (error) { 
				Logger.trace("Get Current GPS Position Error :: " + error.code + " :: " + error.message);
				var msg = ""; 
				
				switch(error.code){
					
					case error.PERMISSION_DENIED:
						msg = MessageService.createStaticMessage('gpsPermission').getMessage();
						break;
					case error.POSITION_UNAVAILABLE:
						msg = MessageService.createStaticMessage('unableAcquireGPS').getMessage();
						break;
					case error.TIMEOUT:
						msg = MessageService.createStaticMessage('gpsTimeout').getMessage();
						break;
					default:
						msg = MessageService.createStaticMessage('unableAcquireGPS').getMessage();
				}
				
				this.application.hideBusy();
				this.ui.showMessage(msg);
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
				onErrorCallback.bind(eventContext),
				{
				    maximumAge: gpsMaximumAge ,
				    timeout: gpsTimeout ,
				    enableHighAccuracy: gpsHighAccuracy
				}
            );
		},
		
		// FUNCOES GPS		
		_hasAttachments: function(asset){
			if (asset){
				var attachments = asset.get('attachments');
				return (attachments && attachments.data && attachments.data.length > 0);
			}
			return false;
		},
		
		hideShowContainer: function(eventContext){
			eventContext.setDisplay(!eventContext.getCurrentRecord().isErrored());
		},
		
		hideShowErrorContainer: function(eventContext){
			eventContext.setDisplay(eventContext.getCurrentRecord().isErrored());
		},

		hideShowSpecifications: function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,"asset").getCurrentRecord();
			eventContext.setDisplay(asset.get("classstructureid")!=null);
		},
		
		// Edit parent view  
		initEditParentView: function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,"asset").getCurrentRecord();
				
			this.curParent = asset.get('parent');
			this.curParentDesc = asset.get('parentdesc');
			this.currParentld = asset.get("parentld");
		},
		
		cleanupParentAssetView: function(eventContext){
			//Invoked by back button or Cancel Edit button
			var asset = CommonHandler._getAdditionalResource(eventContext,"asset").getCurrentRecord();
			
			var readOnlyAsset = asset.getRuntimeFieldMetadata('parent').get('readonly');
			if (!readOnlyAsset) {
				asset.set("parent",this.curParent);
				asset.set("parentdesc",this.curParentDesc);
				asset.set("parentld",this.currParentld);
			}
		},

		commitEditParentView: function(eventContext){
			eventContext.ui.hideCurrentView(false);
		},
		
		discardView: function(eventContext){
			//cleanupEditAssetView method is invoked as callback of hideCurrentView
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
		},

		// edit location view
		
		initEditLocationView: function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,"asset").getCurrentRecord();
			
			this.curLocation = asset.get("location");
			this.curLocationDesc = asset.get("locationdesc");
			this.currLocationld = asset.get("locationld");
		},

		cleanupEditLocationView: function(eventContext){
			
			var asset = CommonHandler._getAdditionalResource(eventContext,"asset").getCurrentRecord();
			//set back the location
			var readOnlyLoc = asset.getRuntimeFieldMetadata('location').get('readonly');
			if (!readOnlyLoc) {
				if(this.curLocation!=null){
					asset.set("location",this.curLocation);
					asset.set("locationdesc",this.curLocationDesc);
					asset.set("locationld",this.currLocationld);
				}
			}
		},

		commitEditLocationView: function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,"asset").getCurrentRecord();
				
			FieldUtil.initCompositeField("location", "locationdesc", "locationanddescription", asset);
			
			eventContext.ui.hideCurrentView(false);
		},
		//end edit Location view

		/**
		 * Location Lookup Data Filter
		 */
		filterLocationForLookup: function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,"asset").getCurrentRecord();
			
			var siteid = asset.get('siteid');
			if(siteid == null){
				siteid = UserManager.getInfo("defsite");
			}
			
			var filter = [];
			
			filter.push({siteid: siteid});
			
			var additionallocations = CommonHandler._getAdditionalResource(eventContext,'additionallocations');
			additionallocations.lookupFilter = filter;
		},
		
		// cleanup event handler
		handleBackButtonClick: function(eventContext){
			var actualAsset=eventContext.getCurrentRecord();
			
			//FIXME: this is a temporary workaround until ModelData._isNew is fixed to reflect if record has been saved or not
			if(!actualAsset.get("dontDiscard")){
				actualAsset.deleteLocal();
			}
		},
		
		clearSearchFields: function(eventContext){
			eventContext.application.getResource("searchAsset").createNewRecord();
		},
		
		initSearchData: function(eventContext){
			var searchData = eventContext.application.getResource("searchAsset");
			if(searchData == null || searchData.getCurrentRecord() == null){
				searchData.createNewRecord();
			}
			eventContext.application.ui.savedQueryIndex = eventContext.application.ui.getViewFromId('SGZArbo.AssetListView').queryBaseIndex;
		},
		
		showSearch: function(eventContext){
			eventContext.application.ui.showAllStatus = true;			
		},
		
		hideSearch: function(eventContext){
			if(eventContext.application.ui.transitionInfo.id != "SGZArbo.statusLookup"){
				eventContext.application.ui.showAllStatus = false;			
			}
		},
		
		setSearchQuery: function(eventContext){
			var search = eventContext.application.getResource("searchAsset").getCurrentRecord();
			var filteredItems = 0;			
			var filter = {};
			var self = this;
			
			if (search.assetnum){
			    filter.assetnum = search.assetnum;
			    filteredItems++;
			}
			if (search.location){
			    filter.location = search.location;
			    filteredItems++;
			}
			if (search.description){
			    filter.description = search.description;
			    filteredItems++;
			}
			if (search.parent){
			    filter.parent = search.parent;
			    filteredItems++;
			}
			if (search.status){
			    filter.status = search.status;
			    filteredItems++;
			}

			if (search.priority){
			    filter.priority = search.priority;
			    filteredItems++;
			}				

			if(filteredItems == 0){
				eventContext.ui.show('SGZArbo.RequiredSearchFieldMissing');
				return;
			}
			
			self.populateSearch(eventContext);
		},
		
		showBusyList: function(eventContext){
			if(eventContext.application.ui.performSearch){
				this.application.showBusy();
				eventContext.application.ui.performSearch = false;
			}
		},
		
		populateSearch: function(eventContext){
			var view = eventContext.application.ui.getViewFromId('SGZArbo.AssetListView');
			eventContext.application.ui.performSearch = true;
			if(eventContext.application.ui.performSearch){
				if(eventContext.application.getResource("searchAsset") == null){ //TODO:  might be nice to still open to last search
					//must be first login.  If search was last page view just default to 0 index because search resource has been discarded.
					view.changeQueryBase(0);
				    var queryBase = view.queries.children[0].queryBase;
					ModelService.all('asset', queryBase).then(function(modelDataSet){
						modelDataSet.resourceID = 'asset';
						eventContext.application.addResource(modelDataSet);
						eventContext.application.ui.getViewFromId('SGZArbo.AssetListView').lists[0].refresh();
					});
					return;
				}
				var indexOfSearch = 0;
				var i = 0;
				if(view.queries && view.queries != null){
					while(i < view.queries.children.length){
						if(view.queries.children[i].queryBase == PlatformConstants.SEARCH_RESULT_QUERYBASE){
							indexOfSearch = i;
							i = view.queries.children.length;
						}
						i++;
					}
					view.changeQueryBase(indexOfSearch);
				}
				var search = eventContext.application.getResource("searchAsset").getCurrentRecord();
				
				var filter = {};
								
				var filteredItems = 0;
				if (search.assetnum){
				    filter.assetnum = '%'+search.assetnum+'%';
				    filteredItems++;
				}
				if (search.description){
					filter.description = '%'+search.description+'%';
				    filteredItems++;
				}
				
				if (search.location){
				    filter.location = '%'+search.location+'%';
				    filteredItems++;
				}
				
				if (search.parent){
				    filter.parent = search.parent;
				    filteredItems++;
				}

				if (search.status){
				    filter.status = search.status;
				    filteredItems++;
				}
				if (search.priority){
				    filter.priority = search.priority;
				    filteredItems++;
				}							
				var oslcQueryParameters = {};

				if(filteredItems == 0){
					eventContext.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
					eventContext.application.ui.performSearch = false;
					eventContext.application.hideBusy();
					return;
				}
				
				ModelService.all('asset',PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(searchResultSet){
					ModelService.clearSearchResult(searchResultSet);			
				});
				
				var deferred = new Deferred();
				
				ModelService.fetchFromServer('asset',PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(hasConnectivity){
					eventContext.application.showBusy();
					if (hasConnectivity){
						//network fetch						
						ModelService.filtered('asset', PlatformConstants.SEARCH_RESULT_QUERYBASE, filter, null, true, false, oslcQueryParameters, true).then(function(resultSet){
							resultSet.resourceID = 'asset';
							eventContext.application.addResource(resultSet);
							
							if (resultSet.count()>0){
								if(resultSet.count()==1){
									resultSet.setCurrentIndex(0);
									//eventContext.application.ui.getViewFromId('Inventory.ItemDetailView');
									//eventContext.ui.show('SGZArbo.AssetDetailView');	
									eventContext.ui.show('SGZArbo.AssetListView');	
								} else {
									resultSet.setCurrentIndex(0);
									eventContext.ui.getViewFromId('SGZArbo.AssetListView').onlyChangeQueryBaseIndex(PlatformConstants.SEARCH_RESULT_QUERYBASE);
									eventContext.ui.show('SGZArbo.AssetListView');
								}
								
								eventContext.application.hideBusy();						
							} else {
								//offline fetch
								
								ModelService.filtered('asset', null, filter, null, false, false, oslcQueryParameters).then(function(assetSet){
									deferred.resolve(assetSet);
								});

								var promise = deferred.promise;
								
								promise.then(function(assetSet){
									ModelService.clearSearchResult(assetSet).then(function(){					
																		
										if (assetSet.count()>0){
											arrayUtil.forEach(assetSet.data, function(data){
												data.setQueryBase("__search_result__");									
											});	
						
											assetSet.resourceID = 'asset';
											eventContext.application.addResource(assetSet);
											
											if(assetSet.count()==1){
												assetSet.setCurrentIndex(0);
												//eventContext.application.ui.getViewFromId('Inventory.ItemDetailView');
												eventContext.ui.show('SGZArbo.AssetDetailView');	
											} else {
												ModelService.save(assetSet).then(function(){
													assetSet.setCurrentIndex(0);
													 eventContext.ui.getViewFromId('SGZArbo.AssetListView').setQueryBaseIndexByQuery(PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(){
														 eventContext.ui.show('SGZArbo.AssetListView');
													 });
												});
											}
											
											eventContext.application.hideBusy();	
										} else {
											
											ModelService.clearSearchResult(assetSet);
											eventContext.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
											eventContext.application.ui.performSearch = false;
											eventContext.application.hideBusy(); 
										}						
									});					
								});						
							}

						});	
							
					}
					else{
						//offline fetch
						if (search.assetnum){
						    filter.assetnum = search.assetnum;
						}
						if (search.description){
							filter.description = search.description;
						}
						if (search.location){
						    filter.location = search.location;
						}
						
						//removed attribute that was added by previous modelservice network call.
						delete filter._querybases;
						
						ModelService.filtered('asset', null, filter, null, false, false, oslcQueryParameters).then(function(assetSet){
							deferred.resolve(assetSet);
						});

						var promise = deferred.promise;
						
						promise.then(function(assetSet){
							ModelService.clearSearchResult(assetSet).then(function(){					
																
								if (assetSet.count()>0){
									arrayUtil.forEach(assetSet.data, function(data){
										data.setQueryBase("__search_result__");									
									});	
				
									assetSet.resourceID = 'asset';
									eventContext.application.addResource(assetSet);
									
									if(assetSet.count()==1){
										assetSet.setCurrentIndex(0);
										//eventContext.application.ui.getViewFromId('Inventory.ItemDetailView');
										eventContext.ui.show('SGZArbo.AssetDetailView');	
									} else {
										ModelService.save(assetSet).then(function(){
											assetSet.setCurrentIndex(0);
											 eventContext.ui.getViewFromId('SGZArbo.AssetListView').setQueryBaseIndexByQuery(PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(){
												 eventContext.ui.show('SGZArbo.AssetListView');
											 });
										});
									}
									
									eventContext.application.hideBusy();	
								} else {
									
									ModelService.clearSearchResult(assetSet);
									eventContext.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
									eventContext.application.ui.performSearch = false;
									eventContext.application.hideBusy(); 
								}						
							});					
						});						
					}						
				});											
			}
		},	
		
		_showSearchFailedMessageNoConnectivity: function(eventContext){
			eventContext.application.showMessage(MessageService.createStaticMessage('downloadFailedNoConnectivity').getMessage());
			if(eventContext.application.ui.getViewFromId('SGZArbo.AssetListView').lists[0].baseWidget){
				eventContext.application.ui.getViewFromId('SGZArbo.AssetListView').lists[0].refresh();
			}
			eventContext.application.hideBusy();
			eventContext.application.ui.performSearch = false;
		},

		discardSummaryView: function(eventContext){
			
			var view = eventContext.application.ui.getViewFromId('SGZArbo.AssetListView');
			view.changeQueryBase(eventContext.application.ui.savedQueryIndex);
		    var queryBase = view.queries.children[eventContext.application.ui.savedQueryIndex].queryBase;
			ModelService.all('asset', queryBase).then(function(modelDataSet){
				modelDataSet.resourceID = 'asset';
				eventContext.application.addResource(modelDataSet);
				eventContext.application.ui.getViewFromId('SGZArbo.AssetListView').lists[0].refresh();
			});
		},
		
		hideDialog : function(eventContext){
			eventContext.ui.hideCurrentDialog();
		},
		
		refreshAllListSizes: function(eventContext){	
			if(!loadingLists){
				var asset = eventContext.application.getResource('asset').getCurrentRecord();
				attributes.forEach(function(listAttribute, index){
					var list = asset.getLoadedModelDataSetOrNull(listAttribute);
					var cachedList = eventContext.application.getResource('asset.' + listAttribute);
					if (!asset.isNew() && cachedList && cachedList.isDirty()){
						//race condition:
						//related resource changes weren't updated to jsonstore
						//before we get here, so rely on what's in memory that's
						//most accurate state until data goes to server
						
						//Don't use server cache if its new, we may have just added asset specs
						
						list = cachedList;
					}

					if (list && listAttribute === 'attachments'){
						list.clearFilterAndSort();
						//list.filter("urlType == null || urlType == 'FILE'");
					}
					
					/* if we created some new record in the set, show it regardless if we downloaded data or not */
					if(list && (asset.isComplexAttributeLoaded(listAttribute) || list.count() > 0)){
						asset.set(listSizeArray[index], list.count() + "");
						
					}else{
						asset.set(listSizeArray[index], "--");
					}
				});

			}			
		},

		noOnCancel: function(eventContext){
			//dont do anything just hide dialog and Location UI	
			eventContext.ui.hideCurrentDialog();
			eventContext.ui.getCurrentViewControl().refresh();
		},
		
		popularnameDomain: function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
			var specsListNamePopular = CommonHandler._getAdditionalResource(eventContext,"msarbospec");
			CommonHandler._clearFilterForResource(eventContext,specsListNamePopular)
			//specsList.filter("ms_family = $1", asset.get("ms_family"));

			var popularname = asset.get("ms_popularname")
			//msScientificSet.filter("value = $1", popularname);
			var family = asset.get("ms_family");
			console.log(family);

			try {
				if((family != null)&&(family != undefined)){
					var aux = specsListNamePopular.filter("ms_family = $1", asset.get("ms_family"));
					if(aux){
						specsListNamePopular.filter("ms_family = $1", asset.get("ms_family"));
					}	
				}

			} catch (error) {
				
			}

		},


		
		
		scientificPut: function(eventContext){

			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();			
			var popularname = asset.get("ms_popularname")
			var scientific = asset.get("ms_scientific");
			
			Logger.error("Nome Popular " + popularname)
			
			var msNameSet = CommonHandler._getAdditionalResource(eventContext,"msarbospeccient");
			CommonHandler._clearFilterForResource(eventContext, msNameSet);

            if((popularname != null)&&(popularname != undefined)){
            	var isName = msNameSet.find("ms_popular == $1", popularname);
				
				if (isName.length == 1) {
				  Logger.error("Nome Popular IF")
				  asset.set("ms_scientific", isName[0].ms_scientific);
				  asset.set("ms_family", isName[0].ms_family);
				  asset.set("ms_genre", isName[0].ms_genre);
				  asset.set("ms_species", isName[0].ms_species);
				}
            }
             if((scientific != null)&&(scientific!= undefined)){
				var isNameScientific = msNameSet.find("ms_scientific == $1", scientific);
             	if (isNameScientific.length == 1) {
				  Logger.error("Nome Científico IF")
				  asset.set("ms_scientific", isNameScientific[0].ms_scientific);
				  asset.set("ms_family", isNameScientific[0].ms_family);
				  asset.set("ms_genre", isNameScientific[0].ms_genre);
				  asset.set("ms_species", isNameScientific[0].ms_species);
				  asset.set("ms_popular", isNameScientific[0].ms_popular);
				  asset.set("ms_popularname", isNameScientific[0].ms_popular);
				}
             }
			if(asset.get("ms_speciesunident")){ 
				asset.set("ms_popularname",null);
				asset.set("ms_scientific",null);
				asset.set("ms_family",null);
				asset.set("ms_genre",null);
				asset.set("ms_species",null);
				eventContext.ui.back();
			}

		},
		
		

		familyPut: function(eventContext){

			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
			var family = asset.get("ms_family");
			var popularname = asset.get("ms_popularname");
			var scientific = asset.get("ms_scientific");
			
			Logger.error("Nome Popular " + family)
			
			var msNameSet = CommonHandler._getAdditionalResource(eventContext,"msarbospeccient");
			CommonHandler._clearFilterForResource(eventContext, msNameSet);

			var isName = msNameSet.find("ms_popular == $1", family);
			
			var msNameSet = CommonHandler._getAdditionalResource(eventContext,"msarbospeccient");
			CommonHandler._clearFilterForResource(eventContext, msNameSet);

            if((popularname != null)&&(popularname != undefined)){
            	var isName = msNameSet.find("ms_popular == $1", popularname);
				if (isName.length == 1) {
				  Logger.error("Nome Popular IF")
				  asset.set("ms_scientific", isName[0].ms_scientific);
				  asset.set("ms_family", isName[0].ms_family);
				  asset.set("ms_genre", isName[0].ms_genre);
				  asset.set("ms_species", isName[0].ms_species);
				}
            }
            if((popularname != null)&&(popularname != undefined)){
            	var isName = msNameSet.find("ms_popular == $1", popularname);
				if (isName.length == 1) {
				  Logger.error("Nome Popular IF")
				  asset.set("ms_scientific", isName[0].ms_scientific);
				  asset.set("ms_family", isName[0].ms_family);
				  asset.set("ms_genre", isName[0].ms_genre);
				  asset.set("ms_species", isName[0].ms_species);
				}
            }


             if((scientific != null)&&(scientific!= undefined)){
				var isNameScientific = msNameSet.find("ms_scientific == $1", scientific);
             	if (isNameScientific.length == 1) {
				  Logger.error("Nome Científico IF")
				  asset.set("ms_scientific", isNameScientific[0].ms_scientific);
				  asset.set("ms_family", isNameScientific[0].ms_family);
				  asset.set("ms_genre", isNameScientific[0].ms_genre);
				  asset.set("ms_species", isNameScientific[0].ms_species);
				}
             }
	

		},
	
		scientificnameDomain: function(eventContext){	
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
			var popularname = asset.get("ms_popularname")
			
			var msScientificSet = CommonHandler._getAdditionalResource(eventContext,"msarbospeccient");
			CommonHandler._clearFilterForResource(eventContext, msScientificSet);
			
			Logger.error("Ativo: " + asset.get("ms_assetnum"));
			Logger.error("Nome Popular: " + asset.get("ms_popularname"));
			
			
			//msScientificSet.filter("value = $1", popularname);
			var family = asset.get("ms_family");
			console.log(family);


			try {
				if((family != null)&&(family != undefined)){
					var aux = msScientificSet.filter("ms_family = $1", asset.get("ms_family"));
					if(aux){
						msScientificSet.filter("ms_family = $1", asset.get("ms_family"));
					}	
				}
				if((popularname != null)&&(popularname != undefined)){
					var aux = msScientificSet.filter("ms_popular = $1", asset.get("ms_popularname"));
					if(aux){
						msScientificSet.filter("ms_popular  = $1", asset.get("ms_popularname"));
					}	
				}
			} catch (error) {
				console.log(error);	
			}

			
			/* if (isCientificName.length == 0) {
				msScientificSet.data = "";
				return false;
			} else {
				var filter = [];
				for (var i = 0; i < isCientificName.length; i++) {
				var value = isCientificName[i].value;

					filter.push({ value: valueNum });
				}
				msScientificSet.lookupFilter = filter;
			} */

		},
		
		
		//Rever
		/* familyName: function(eventContext){	
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
			var familyName = asset.get("ms_family")
			
			var msFamilySet = CommonHandler._getAdditionalResource(eventContext,"msarbospeccient");
			CommonHandler._clearFilterForResource(eventContext, msFamilySet);
			
			Logger.error("Ativo: " + asset.get("ms_assetnum"));
			Logger.error("Nome Popular: " + asset.get("ms_popularname"));
			
			
			msFamilySet.filter("ms_family = $1", familyName);

		}, */
		
		
		
		
		/*setScientificName: function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
		
			var lista;
			var familia = asset.get("ms_family");
			var popularname = asset.get("ms_popularname");
			var popular = asset.get("ms_popular");
		    var ms_scientific = asset.get("ms_scientific");
			
            try {
			    var specsList = CommonHandler._getAdditionalResource(eventContext,"msarbospeccient");
				if((specsList != null)&&(specsList != undefined)){
					if((popularname!= null)&&(popularname != undefined)){
                        lista =specsList.data.filter(p => p.ms_popular === popularname)
					    specsList.data = lista;
					}
				}
			} catch (error) {
			    console.log(error);	
			}

		},*/
		/* setScientificName: function(eventContext){
			
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
		
			var lista;
			var objScientific;
			var familia = asset.get("ms_family");
			var popularname = asset.get("ms_popularname");
			var popular = asset.get("ms_popular");
		    var ms_scientific = asset.get("ms_scientific");


			const specsList = CommonHandler._getAdditionalResource(eventContext,"msarbospeccient");
			console.log(specsList.data);
            objScientific = localStorage.getItem('arrayScientific');

			if((objScientific == null)&&(objScientific == undefined)){
                localStorage.setItem('arrayScientific', JSON.stringify(specsList.data));
				
			}


            try{
				if((specsList != null)&&(specsList != undefined)){
					if((popularname!= null)&&(popularname != undefined)){
                        lista =specsList.data.filter(p => p.ms_popular === popularname)
					    specsList.data = lista;;
					}else{
						lista = localStorage.getItem('arrayScientific');
						lista = JSON.parse(lista);
						specsList.data = lista;
					}
				}
			} catch (error) {
			    console.log(error);	
			}			
			
		}, */
		
		
		
		
		commitTechReportViewSec : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			//asset.set("rptms_interference01", true);
			
				var self = this;
			
				ModelService.save(assetSet).then(function() {
				
				var viewID = eventContext.application.ui.viewHistory[eventContext.application.ui.viewHistory.length-2].id;				
				self.ui.hideCurrentView();
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
		},
		
		commitTechReportViewNext : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			//asset.set("rptms_interference01", true);
			
				var self = this;
			
				ModelService.save(assetSet).then(function() {
				
				var viewID = eventContext.application.ui.viewHistory[eventContext.application.ui.viewHistory.length-2].id;
				
				//self.ui.show('');
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
				
				
				
		},
		
		commitTechReportViewSec01 : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_interference01", true);
			var self = this;
			
				ModelService.save(assetSet).then(function() {
					
				
				
				var viewID = eventContext.application.ui.viewHistory[eventContext.application.ui.viewHistory.length-2].id;				
				self.ui.hideCurrentView();
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
				
		},
		
		commitTechReportViewSec02 : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_apparentdamage04", true);
			var self = this;
			
				ModelService.save(assetSet).then(function() {
				
				var viewID = eventContext.application.ui.viewHistory[eventContext.application.ui.viewHistory.length-2].id;				
				self.ui.hideCurrentView();
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
		},
		
		commitTechReportViewSec03 : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_apparentdamage01", true);
			var self = this;
			
				ModelService.save(assetSet).then(function() {
				
				var viewID = eventContext.application.ui.viewHistory[eventContext.application.ui.viewHistory.length-2].id;				
				self.ui.hideCurrentView();
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
		},
		
		commitTechReportViewSec04 : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_apparentdamage03", true);
			var self = this;
			
				ModelService.save(assetSet).then(function() {
				
				var viewID = eventContext.application.ui.viewHistory[eventContext.application.ui.viewHistory.length-2].id;				
				self.ui.hideCurrentView();
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
		},
		
		commitTechReportViewSec05 : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_interference02", true);
			var self = this;
			
				ModelService.save(assetSet).then(function() {
				
				var viewID = eventContext.application.ui.viewHistory[eventContext.application.ui.viewHistory.length-2].id;				
				self.ui.hideCurrentView();
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
		},
		
		commitTechReportViewSec06 : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_apparentdamage02", true);
			var self = this;
			
				ModelService.save(assetSet).then(function() {
				
				var viewID = eventContext.application.ui.viewHistory[eventContext.application.ui.viewHistory.length-2].id;				
				self.ui.hideCurrentView();
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
		},
		
		
		
		requiredField : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo');
			var asset = assetSet.getCurrentRecord();
			var speciesunident = asset.get("ms_speciesunident");
			var popularname = asset.get("ms_popularname");
			
			Logger.error("Ativo Espécie: " + asset.get("ms_speciesunident"));
			Logger.error("Popular: " + asset.get("ms_popularname")); 
			Logger.error("Fanilia: " + asset.get("ms_family")); 
			 
			if (speciesunident == false || speciesunident == 0 || speciesunident == null) {
				if (typeof popularname  === undefined || popularname  == null || 
					popularname  == "" || popularname == false) {
	
					throw new PlatformRuntimeException("Favor Informar o Nome Popular");
					//return;
	
				}
			}
			

		},
		
		
		requiredFieldDap : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo');
			var asset = assetSet.getCurrentRecord();
			var diameterbreast = asset.get("ms_diameterbreast");
			
			Logger.error("DAP: " + asset.get("ms_diameterbreast"));
			
			if (typeof diameterbreast === undefined || diameterbreast == null || diameterbreast == "") {
					
				throw new PlatformRuntimeException("Favor Informar Valor DAP");
				//return;

			}
			

		},
		
		requiredFieldDapBoth : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo');
			var asset = assetSet.getCurrentRecord();
			var diameterbreast = asset.get("ms_diameterbreast");
			var perimeterbreast = asset.get("ms_perimeterbreast");

			
			Logger.error("DAP: " + asset.get("ms_diameterbreast"));
			
			if ((typeof diameterbreast === undefined || diameterbreast == null || diameterbreast == "")||
				(typeof perimeterbreast === undefined || perimeterbreast == null || perimeterbreast == "")) {
					
				throw new PlatformRuntimeException("Favor Informar Valor DAP ou PAP");
				//return;

			}else{
				var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
				var specsList = CommonHandler._getAdditionalResource(eventContext,"msarbospec");

				var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
				ModelService.save(assetSet).then(function() {				
					eventContext.ui.hideCurrentView();
				}).
				otherwise(function(err){
					//eventContext.ui.showMessage(err);						
				});
			}
			

		},		
		requiredFieldPap : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo');
			var asset = assetSet.getCurrentRecord();
			var perimeterbreast = asset.get("ms_perimeterbreast");
			
			Logger.error("PAP: " + asset.get("ms_perimeterbreast"));
			 
			if (typeof perimeterbreast === undefined || perimeterbreast == null || perimeterbreast == "") {
					
				throw new PlatformRuntimeException("Favor Informar Valor PAP");
				return;

			}
			

		},


		//---------- Funções de calculo automatico DAP e PAP -------------//
		keydownFunctionCalculatorDAP:function(eventContext){
			var campopap;
			var campodap = eventContext;
			let groupitem = campodap.getParent();
			
			let elementofilhos = groupitem.children;
			elementofilhos.forEach(element => {
				let elemento = element;
				var elementoId = elemento.artifactId;
				if(elementoId == 'SGZArbo.Section.four.SpecificationsView_DAP'){
				   campodap = document.querySelector('#'+elemento.labelFor);
				}
				if(elementoId == 'SGZArbo.Section.four.SpecificationsView_PAP'){
				   campopap = document.querySelector('#'+elemento.labelFor);
				}
			});
			campodap.addEventListener("blur", function() { 
				campopap.value = "";
				var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			
				ModelService.save(assetSet).then(function() {					
					//eventContext.ui.hideCurrentView();
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
			});
		},
		keydownFunctionCalculatorPAP:function(eventContext){
			console.log(eventContext);
			var campodap;
			var campopap = eventContext;
			let groupitem = campopap.getParent();

			let elementofilhos = groupitem.children;
			elementofilhos.forEach(element => {
				let elemento = element;
				var elementoId = elemento.artifactId;
				if(elementoId == 'SGZArbo.Section.four.SpecificationsView_DAP'){
				   campodap = document.querySelector('#'+elemento.labelFor);
				}
				if(elementoId == 'SGZArbo.Section.four.SpecificationsView_PAP'){
				   campopap = document.querySelector('#'+elemento.labelFor);
				}
			});
			campopap.addEventListener("blur", function() {
				campodap.value = "";
				var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			
				ModelService.save(assetSet).then(function() {					
					//eventContext.ui.hideCurrentView();
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
			});

		},

/*--- limpar campos de especificação da arvore ------------- */
		limpa:function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
			asset.set("ms_popularname", null);
			asset.set("ms_family", null);
			asset.set("ms_scientific", null);
			asset.set("ms_genre", null);
			asset.set("ms_species", null);	
			asset.get("ms_speciesunident", false);
			ModelService.saveAll(assetSet).then(function(){
				self.ui.hideCurrentView();
			 });	
		},
		//-----------------------//

		calcPap : function(eventContext){
			//var diameterbreast = 0
			var assetSet = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
			var diameterbreast = assetSet.getPendingOrOriginalValue('ms_diameterbreast');
			var diamteerbreastPars = parseFloat(String(diameterbreast).replace(",","."));
			var diameterbreastCalc = ((diamteerbreastPars) * 3.1415);
			//var diameterbreastCalcRep = String(diameterbreastCalc).replace(".",",");
			
			
			Logger.error("DAP: " + diameterbreast);
			 
			if (diameterbreast > 0) {
				Logger.error("PAP: " + diameterbreast);	
				assetSet.set("ms_perimeterbreast", diameterbreastCalc);
				
			}
	
		},		
		calcDap : function(eventContext){
			
			var assetSet = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
			var perimeterbreast = assetSet.getPendingOrOriginalValue('ms_perimeterbreast');
			var diamteerbreast = assetSet.getPendingOrOriginalValue('ms_diameterbreast');
			var diamteerbreastRep = parseFloat(String(diamteerbreast).replace(",","."));
			var perimeterbreastCalc = ((diamteerbreastRep)/3.1415);
			//var perimeterbreastCalcRep = perimeterbreastCalc.replace(".",",");
			
			Logger.error("DAP: " + diamteerbreast); 
			Logger.error("DAP2: " + diamteerbreastRep); 
			//Logger.error("Familia: " + asset.get("ms_family"));
			
			
			if (perimeterbreast > 0) {
				Logger.error("DAP: " + diameterbreast);	
				assetSet.set("ms_diameterbreast", perimeterbreastCalc);
				
			}
			

		},
		
		
		//var numero1 = parseFloat(string1.replace(',', '.'));
		//var numero2 = parseFloat(string2.replace(',', '.'));
		//not mbo.isNull("MS_PERIMETERBREAST"):
		//MS_DIAMETERBREAST = (MS_PERIMETERBREAST / 3.1415)
		
		//not mbo.isNull("MS_DIAMETERBREAST"):
		//MS_PERIMETERBREAST = (MS_DIAMETERBREAST * 3.1415)
		
		

		
		validateFailureCode: function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset').getCurrentRecord();
			var failureCode = asset.getPendingOrOriginalValue('failurecode');
			var failureCodes = CommonHandler._getAdditionalResource(eventContext,'failureListResource');
			CommonHandler._clearFilterForResource(eventContext,failureCodes);
			
			var isValidFailure = failureCodes.find('failurecode == $1', failureCode);
			
			if(isValidFailure.length == 0){
				throw new PlatformRuntimeException('failureClassData', [failureCode]);
				return;
			}
			return;
		},
		/**
		 * Initialize and set the Classification Path and Description on Detail page
		 * 
		 * @constructor
		 * @param eventContext
		 */
		initClassificationField : function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,"asset").getCurrentRecord();
			var classstructureid = asset.get('classstructureid');
			asset.set('classstructureid', '02.01');
			if(classstructureid==null){
				classstructureid = 'null';
			}			
			var filter = {'classstructureid':classstructureid};
			var class_desc = "";
			var classpath = "";
			ModelService.filtered("classstructure", null, filter, null, false, true).then(function(classStructure){
				if (classStructure.count()>0){
					classpath = classStructure.getCurrentRecord().get('hierarchypath');
					class_desc = classStructure.getCurrentRecord().get('description');
					asset.set('classificationpath', classpath);
					asset.set('classificationdesc', class_desc);
				} else {
					asset.set('classificationpath', '');
					asset.set('classificationdesc', '');
				}
			});	
			if(asset.get("itemnum") != null){ //Rotating asset so mark classification readonly
				eventContext._setReadOnly(true);
			}
		},
		
		filterAssetForLookup: function(eventContext){
			
		},
		discardAddSpecView: function(eventContext){
			var currRecord = CommonHandler._getAdditionalResource(eventContext,"asset.assetSpec").getCurrentRecord();
			if(currRecord){
				currRecord.deleteLocal();
			}
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
		},
		
		initViewSpecsView: function(eventContext){
			var view = eventContext.viewControl;
			var specsList = CommonHandler._getAdditionalResource(eventContext,"asset.assetSpec");
			Logger.error("Count antes da limpeza do filtro:" + specsList.count());
			CommonHandler._clearFilterForResource(eventContext,specsList);
			Logger.error("Count ós limpeza do filtro:" + specsList.count());
			specsList.filter("section = '02.01.01'");
			Logger.error("Count pós filtro:" + specsList.count());
			if(!view.isOverrideEditMode()){
				if (specsList.count()>0){
					arrayUtil.forEach(specsList.data, function(spec){
						AssetSpecificationObject.onInitialize(spec,
								eventContext.ui.application.getResource("assetattrtypes"));
					});
				}
			}
		},
		
		initSpecsCount: function(eventContext){
			Logger.error("INICIO MÉTODO INITCOUNT ");
			eventContext.setDisplay(false);
			eventContext.setVisibility(false);
			/*var asset = CommonHandler._getAdditionalResource(eventContext,'asset').getCurrentRecord();
			var specsList = CommonHandler._getAdditionalResource(eventContext,"asset.assetSpec");
			Logger.error(asset.get("assetnum"));
			//sessao 01
			CommonHandler._clearFilterForResource(eventContext,specsList);
			specsList.filter("section = '02.01.01'");
			specsList.filter("ms_mobile = 1");
			specsList.filter("mandatory = 1");
			var section01 = specsList.count();
			asset.set('sectiononecount', section01);
			Logger.error("Count sessão 1: " + asset.get('sectiononecount'));
			
			//sessao 02
			CommonHandler._clearFilterForResource(eventContext,specsList);
			specsList.filter("section = '02.01.02'");
			specsList.filter("mandatory = 1");
			specsList.filter("ms_mobile = 1");
			var section02 = specsList.count();
			asset.set('sectiontwocount', section02);
			Logger.error("Count sessão 2: " + asset.get('sectiontwocount'));
			
			//sessao 03
			CommonHandler._clearFilterForResource(eventContext,specsList);
			specsList.filter("section = '02.01.03'");
			specsList.filter("mandatory = 1");
			specsList.filter("ms_mobile = 1");
			var section03 = specsList.count();
			asset.set('sectionthreecount', section03);
			Logger.error("Count sessão 3: " + asset.get('sectionthreecount'));
			
			//sessao 04
			CommonHandler._clearFilterForResource(eventContext,specsList);
			specsList.filter("section = '02.01.04'");
			specsList.filter("mandatory = 1");
			specsList.filter("ms_mobile = 1");
			var section04 = specsList.count();
			asset.set('sectionfourcount', section04);
			Logger.error("Count sessão 4: " + asset.get('sectionfourcount'));
			Logger.error("FIM MÉTODO INITCOUNT ");
			//ModelService.save(asset);
			CommonHandler._clearFilterForResource(eventContext,specsList);*/
		},
		
		MSinitSpecsSectiononeView: function(eventContext){
			var view = eventContext.viewControl;
			var specsList = CommonHandler._getAdditionalResource(eventContext,"asset.assetSpec");
			Logger.error("Count antes da limpeza do filtro:" + specsList.count());
			CommonHandler._clearFilterForResource(eventContext,specsList);
			Logger.error("Count ós limpeza do filtro:" + specsList.count());
			specsList.filter("section = '02.01.01'");
			specsList.filter("ms_mobile = 1");
			Logger.error("Count pós filtro:" + specsList.count());
			if(!view.isOverrideEditMode()){
				if (specsList.count()>0){
					arrayUtil.forEach(specsList.data, function(spec){
						AssetSpecificationObject.onInitialize(spec,
								eventContext.ui.application.getResource("assetattrtypes"));
					});
				}
			}
		},		
		
		hidesaveSpecbt: function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			var validado = currAsset.get("ms_validate");
			if(validado == true){
				eventContext.setDisplay(false);
				eventContext.setVisibility(false);
			}
		},
		
		MSinitSpecsSectiontwoView: function(eventContext){
			var view = eventContext.viewControl;
			var specsListtwo = CommonHandler._getAdditionalResource(eventContext,"asset.assetSpec");
			Logger.error("Count antes da limpeza do filtro:" + specsListtwo.count());
			CommonHandler._clearFilterForResource(eventContext,specsListtwo);
			Logger.error("Count pós limpeza do filtro:" + specsListtwo.count());
			specsListtwo.filter("section = '02.01.02'");
			specsList.filter("ms_mobile = 1");
			Logger.error("Count pós filtro:" + specsListtwo.count());
			if(!view.isOverrideEditMode()){
				if (specsListtwo.count()>0){
					arrayUtil.forEach(specsList.data, function(spec){
						AssetSpecificationObject.onInitialize(spec,
								eventContext.ui.application.getResource("assetattrtypes"));
					});
				}
			}
		},
		
		MSinitSpecsSectionthreeView: function(eventContext){
			var view = eventContext.viewControl;
			var specsList = CommonHandler._getAdditionalResource(eventContext,"asset.assetSpec");
			Logger.error("Count antes da limpeza do filtro:" + specsList.count());
			CommonHandler._clearFilterForResource(eventContext,specsList);
			Logger.error("Count ós limpeza do filtro:" + specsList.count());
			specsList.filter("section = '02.01.03'");
			specsList.filter("ms_mobile = 1");
			Logger.error("Count pós filtro:" + specsList.count());
			if(!view.isOverrideEditMode()){
				if (specsList.count()>0){
					arrayUtil.forEach(specsList.data, function(spec){
						AssetSpecificationObject.onInitialize(spec,
								eventContext.ui.application.getResource("assetattrtypes"));
					});
				}
			}
		},
		
		hidesaveSpecbt: function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			var validado = currAsset.get("ms_validate");
			if(validado == true){
				eventContext.setDisplay(false);
				eventContext.setVisibility(false);
			}
		},
		
		MSinitSpecsSectionfourView: function(eventContext){
			var view = eventContext.viewControl;
			var specsList = CommonHandler._getAdditionalResource(eventContext,"asset.assetSpec");
			Logger.error("Count antes da limpeza do filtro:" + specsList.count());
			CommonHandler._clearFilterForResource(eventContext,specsList);
			Logger.error("Count ós limpeza do filtro:" + specsList.count());
			specsList.filter("section = '02.01.04'");
			specsList.filter("ms_mobile = 1");
			Logger.error("Count pós filtro:" + specsList.count());
			if(!view.isOverrideEditMode()){
				if (specsList.count()>0){
					arrayUtil.forEach(specsList.data, function(spec){
						AssetSpecificationObject.onInitialize(spec,
								eventContext.ui.application.getResource("assetattrtypes"));
					});
				}
			}
		},
		
		initAddSpecsView : function(eventContext){
			var view = eventContext.viewControl;
			var specsList = CommonHandler._getAdditionalResource(eventContext,"asset.assetSpec");
			if(!view.isOverrideEditMode()){
				var specRecord= specsList.createNewRecord();
				AssetSpecificationObject.setDefaultValues(specRecord);
			}
			eventContext.setMyResourceObject(specsList);			
		},
		
		
		
		hideSpecContainer : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			var self = this;
			var deadtree = currAsset.get("ms_deadtree");
			var validate = currAsset.get("ms_validate");
			
			if(deadtree == true || validate == true){
				eventContext.setDisplay(false);
				eventContext.setVisibility(false);
			}	
		},
		
		hideTechReportContainer : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			var self = this;
			var deadtree = currAsset.get("ms_deadtree");
			var validate = currAsset.get("ms_validate");

			try {

				let queryBase;
				if (localStorage.getItem('filtro')) {
					queryBase =localStorage.getItem('filtro');
					if (!queryBase.includes("ms_techreport")) {			
						eventContext.setDisplay(false);
						eventContext.setVisibility(false);	
					}
				}	
				/*
					if(deadtree == true || validate == false){
						eventContext.setDisplay(false);
						eventContext.setVisibility(false);
					}	
				*/
			} catch (error) {
				console.log(error);
			}
		
		},
		
		hideDeadIndicator : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			var self = this;
			var deadtree = currAsset.get("ms_deadtree");
			//var validate = currAsset.get("ms_validate");
			
			if(deadtree == false){
				eventContext.setDisplay(false);
				eventContext.setVisibility(false);
			}	
		},
		
		hideDeadButton : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			var self = this;
			var deadtree = currAsset.get("ms_deadtree");
			var validate = currAsset.get("ms_validate");
			
			if(deadtree == true){
				eventContext.setDisplay(false);
				eventContext.setVisibility(false);
			}	
		},
		
		setDeadTree : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			var self = this;
			var attachments = currAsset.get("attachmentssize");
			
			if (attachments == 0 || attachments.includes('--')) {
				eventContext.ui.showMessage("Adicione uma foto para definir árvore morta.");
			}
			else{
				eventContext.ui.show('SGZArbo.defineDeadTreeView');	
			}
			
		},
		showReasonButton : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			var self = this;
			var deadtree = currAsset.get("ms_deadtree");
			var validate = currAsset.get("ms_validate");
			
			if(deadtree == true){
				eventContext.setDisplay(true);
				eventContext.setVisibility(true);
			}else{
				eventContext.setDisplay(false);
				eventContext.setVisibility(false);				
			}	
		},		
		setDeadTreeY : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			var self = this;
			currAsset.set("ms_deadtree", true);
			ModelService.saveAll(assetSet).then(function(){
			       self.ui.hideCurrentView();
			});	
			
				
			
		},
		
		setDeadTreeN : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			var self = this;
			ModelService.saveAll(assetSet).then(function(){
			       self.ui.hideCurrentView();
			});			
		},
		
		commitSpecificationView : function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
			
			
			Logger.error("Ativo Espécie 1: " + asset.get("ms_speciesunident"));
			Logger.error("Popular 1: " + asset.get("ms_popularname")); 
			Logger.error("Fanilia 1: " + asset.get("ms_family")); 

			var familia = asset.get("ms_family");
			var popularname = asset.get("ms_popularname");
			var popular = asset.get("ms_popular");
		    var ms_scientific = asset.get("ms_scientific");



			var specsList = CommonHandler._getAdditionalResource(eventContext,"msarbospec");
			Logger.error("Ativo: " + asset.get("ms_assetnum"));
			Logger.error("Familia: " + asset.get("ms_popularname"));

			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
				asset.set("ms_popularname", asset.get("ms_popularname"));
				asset.set("ms_scientific", asset.get("ms_popularname"));
				asset.set("ms_family", asset.get("ms_family"));

			
				ModelService.save(assetSet).then(function() {				
					eventContext.ui.hideCurrentView();
				}).
				otherwise(function(err){
					//eventContext.ui.showMessage(err);						
				});
		},

		commitNewSpecificationView : function(eventContext){
			
			var asset=eventContext.getCurrentRecord();
			var recordSet = asset.getOwner();
			
			//
			Logger.error("ms_assetnum" + asset.get("ms_assetnum"));
			Logger.error("ms_assetnum" + asset.get("assetnum"));
			
			//
			asset.openPriorityChangeTransaction();
			asset.set('ms_assetnum', asset.get('assetnum'));
			asset.closePriorityChangeTransaction();
			
			Logger.error("assetnum" + recordSet.get("ms_assetnum"));
			Logger.error("assetnum" + recordSet.get("assetnum"));
			var self = this;
			ModelService.saveAll(asset).then(function(){
			       self.ui.hideCurrentView();
			});	
			
			
			
			/*var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = assetSet.getCurrentRecord();	
			
			asset.openPriorityChangeTransaction();
			asset.closePriorityChangeTransaction();
			if (asset.isNew()){
				eventContext.ui.hideCurrentView();
			}
			else{
				ModelService.save(assetSet).then(function(){
					eventContext.ui.hideCurrentView();
				});
				
			}
			
			var deferred = new Deferred();
					ModelService.save(asset).then(function(result){
					deferred.resolve();
					});
					asset.closePriorityChangeTransaction();
					eventContext.ui.hideCurrentView();
					return ;
					this.inherited(arguments);
			*/
			/*eventContext.application.showBusy();
			try{
				if(!eventContext.viewControl.validate()){
					return;
				}
				//eventContext.getCurrentRecord().set("dontDiscard", true);
				var currRec = CommonHandler._getAdditionalResource(eventContext,"asset").getCurrentRecord();
				//AssetSpecificationObject.beforeSave(currRec,
				//		eventContext.ui.application.getResource("assetattrtypes"));
				
				var assetSet =  CommonHandler._getAdditionalResource(eventContext,"asset");
				var self=eventContext;
				
				if(!assetSet.getCurrentRecord().isNew()){
					ModelService.save(assetSet).
					then(function(){
						Logger.error("ms_assetnum" + currRec.get("ms_assetnum"));
						Logger.error("assetnum" + currRec.get("assetnum"));
						ModelService.save(currRec);
						self.ui.hideCurrentView();}).
						otherwise(function(error){
							switch (true) {				
								case (error.error instanceof PlatformRuntimeException):						
									self.application.showMessage(error.error.getMessage());
								break;				
							}
						});
				}
				else{
					eventContext.ui.hideCurrentView();
				}
			}catch(e){
				throw e;
			}*/
		},

		saveWOShowView : function(eventContext) {
			var asset = CommonHandler._getAdditionalResource(eventContext, 'asset.MSArbo').getCurrentRecord();
			var assetSet = CommonHandler._getAdditionalResource(eventContext, "asset");
			var currAsset = assetSet.getCurrentRecord();
			let diameterbreast = asset.get("ms_diameterbreast");
			let perimeterbreast = asset.get("ms_perimeterbreast");
			let slope = asset.get("ms_slope");
			let direction =  asset.get("ms_direction"); 
			let angle = asset.get("ms_angle");

			var self = this;

			if(slope){
				if ((direction == null || direction <= 0 || direction == undefined) || 
				(angle == null || angle <= 0 || angle == undefined)){
					//eventContext.ui.showMessage("Quando o campo 'Inclinação?' está marcado é necessário informar Direção e Ângulo (graus)");
					throw new PlatformRuntimeException("Quando o campo 'Inclinação?' está marcado é necessário informar Direção e Ângulo (graus)");
				}
			}

			if ((diameterbreast != null || diameterbreast > 0 || diameterbreast != undefined)
				||(perimeterbreast!= null || perimeterbreast > 0 || perimeterbreast != undefined)) {
					ModelService.save(assetSet).then(function () {
						eventContext.ui.hideCurrentView();
						//eventContext.ui.showMessage("Caracteristicas Dendométricas Salvo.");
						//eventContext.ui.show("SGZArbo.AssetListView");
					}).otherwise(function (err) {
						//eventContext.ui.showMessage(err);						
					});
			}else{
				self.requiredMandatoryFields(eventContext);
			}

		},
		requiredMandatoryFields: function (eventContext) {
			var asset = CommonHandler._getAdditionalResource(eventContext, 'asset.MSArbo').getCurrentRecord();
			var assetSet = CommonHandler._getAdditionalResource(eventContext, "asset");
			var currAsset = assetSet.getCurrentRecord();
			let popularname = asset.get("ms_popularname");
			let scientific = asset.get("ms_scientific");
			let family = asset.get("ms_family");
			let diameterbreast = asset.get("ms_diameterbreast");
			let perimeterbreast = asset.get("ms_perimeterbreast");
			let speciesunident = asset.get("ms_speciesunident");
			var deadtree = currAsset.get("ms_deadtree");
			let mensagem;
			let caracteristicasDendometricas;
			let especificacaoArvore;


			if ((typeof diameterbreast === undefined || diameterbreast == null || diameterbreast == "") ||
				(typeof perimeterbreast === undefined || perimeterbreast == null || perimeterbreast == "") ||
				(typeof diameterbreast === undefined || diameterbreast == null || diameterbreast == "")){
					caracteristicasDendometricas = false;
			}else{
				caracteristicasDendometricas = true;
			}

			if ((typeof popularname === undefined || popularname == null || popularname == "") ||
			(typeof scientific === undefined || scientific == null || scientific == "") ||
			(typeof family === undefined || family == null || family == "")) {
				especificacaoArvore = false;
			}else{
				especificacaoArvore = true;
			}

			if (!caracteristicasDendometricas && !especificacaoArvore) {
				return true;
			}else{
				if (!caracteristicasDendometricas) {
					if (deadtree != true) {
						//if (speciesunident == true || popularname != undefined) {								
							mensagem = "Favor Informar Valor DAP ou PAP na aba de Características Dendométricas";
							eventContext.ui.showMessage(mensagem);
							throw new PlatformRuntimeException(mensagem);
						//}
						//return;									
					}
				}
				if (!especificacaoArvore) {
					if ((speciesunident != true)&& (deadtree != true) && (diameterbreast != undefined)) {
						mensagem = "Favor Informar o Nome Popular na aba de Especificações da Árvore";
						eventContext.ui.showMessage(mensagem);
						throw new PlatformRuntimeException(mensagem);
						//return;							
					}else{
						return true;
					}
				}else{
					return true;
				}
			}




		},			
		setReasonLow: function (eventContext) {
			var asset = CommonHandler._getAdditionalResource(eventContext, 'asset.MSArbo').getCurrentRecord();
			var assetSet = CommonHandler._getAdditionalResource(eventContext, "asset");
			var currAsset = assetSet.getCurrentRecord();
			asset.set("ms_arboreason", currAsset.get("ms_arboreason"));
			if (currAsset.get("ms_arboreason") != null && currAsset.get("ms_arboreason") > 0) {
				ModelService.save(assetSet).then(function () {
					//eventContext.ui.hideCurrentView();
					eventContext.ui.showMessage("Registro Salvo.");
				}).otherwise(function (err) {
					//eventContext.ui.showMessage(err);						
				});
			}
		},
		requiredFieldTreeSpecification: function (eventContext) {
			var assetSet = CommonHandler._getAdditionalResource(eventContext, 'asset.MSArbo');
			var asset = assetSet.getCurrentRecord();
			let speciesunident = asset.get("ms_speciesunident");
			Logger.error("DAP: " + asset.get("ms_diameterbreast"));

			if ((typeof speciesunident == true)) {
				var asset = CommonHandler._getAdditionalResource(eventContext, 'asset.MSArbo').getCurrentRecord();
				var specsList = CommonHandler._getAdditionalResource(eventContext, "msarbospec");
				var assetSet = CommonHandler._getAdditionalResource(eventContext, "asset");
				ModelService.save(assetSet).then(function () {
					eventContext.ui.hideCurrentView();
				}).
				otherwise(function (err) {
					//eventContext.ui.showMessage(err);						
				});
			}


		}
	});
});