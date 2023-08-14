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

		popularnameDomainFamily: function (eventContext) {
			console.log(eventContext);
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

				//var person = personSet.data[0];

				let person ;
				try {
					if (personSet.getCurrentRecord()) {
						person = personSet.getCurrentRecord();
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
					}
				} catch (error) {
					console.log(error + 'Na função updatePersonGPSPosition');
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
			//eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
			eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');

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
			if (search.ms_addressline != null || search.ms_addressline != undefined) {
				search.ms_addressline = search.ms_addressline.toLocaleUpperCase();
				filteredItems++;
			}
			if (search.ms_staddrnumber){
			    filter.ms_staddrnumber = search.ms_staddrnumber;
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
			
			self.populateSearch(eventContext, search);
		},

		setSearchQueryAdress: function(eventContext){
			var search = eventContext.application.getResource("searchAsset").getCurrentRecord();
			var filteredItems = 0;			
			var filter = {};
			var self = this;
			

			if (search.assetnum){
			    filter.assetnum = search.assetnum;
			    filteredItems++;
			}
			if (search.ms_addressline != null || search.ms_addressline != undefined) {
				search.ms_addressline = search.ms_addressline.toLocaleUpperCase();
				filteredItems++;
			}
			if (search.ms_staddrnumber){
			    filter.ms_staddrnumber = search.ms_staddrnumber;
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
			
			self.populateSearchAdress(eventContext, search);
		},
		
		showBusyList: function(eventContext){
			if(eventContext.application.ui.performSearch){
				this.application.showBusy();
				eventContext.application.ui.performSearch = false;
			}
		},
		
		populateSearch: function(eventContext, search){	
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
				if (search.ms_addressline){
				    filter.ms_addressline = '%'+search.ms_addressline+'%';
				    filteredItems++;
				}
				if (search.ms_staddrnumber){
				    filter.ms_staddrnumber = '%'+search.ms_staddrnumber+'%';
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
				eventContext.application.showBusy();	
				ModelService.all('asset',PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(searchResultSet){
					eventContext.application.showBusy();	
					ModelService.clearSearchResult(searchResultSet);			
				});
				
				var deferred = new Deferred();
				
				ModelService.fetchFromServer('asset',PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(hasConnectivity){
					eventContext.application.showBusy();
					if (hasConnectivity){
						//network fetch						
						ModelService.filtered('asset', PlatformConstants.SEARCH_RESULT_QUERYBASE, filter, null, true, false, oslcQueryParameters, true).then(function(resultSet){
							eventContext.application.showBusy();
							resultSet.resourceID = 'asset';
							eventContext.application.addResource(resultSet);
							
							if (resultSet.count()>0){
								if(resultSet.count()==1){
									resultSet.setCurrentIndex(0);
									//eventContext.application.ui.getViewFromId('Inventory.ItemDetailView');
									//eventContext.ui.show('SGZArbo.AssetDetailView');	
									search.set('assetnum', null)
									search.set('ms_addressline', null)
									search.set('ms_staddrnumber', null)
									eventContext.ui.show('SGZArbo.AssetListView');	
								} else {
									search.set('assetnum', null)
									search.set('ms_addressline', null)
									search.set('ms_staddrnumber', null)
									resultSet.setCurrentIndex(0);
									eventContext.ui.getViewFromId('SGZArbo.AssetListView').onlyChangeQueryBaseIndex(PlatformConstants.SEARCH_RESULT_QUERYBASE);
									eventContext.ui.show('SGZArbo.AssetListView');
								}
								
								eventContext.application.hideBusy();						
							} else {
								//offline fetch
								
								ModelService.filtered('asset', null, filter, null, false, false, oslcQueryParameters).then(function(assetSet){
									eventContext.application.showBusy();	
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
												search.set('assetnum', null)
												search.set('ms_addressline', null)
												search.set('ms_staddrnumber', null)
												eventContext.ui.show('SGZArbo.AssetDetailView');	
											} else {
												ModelService.save(assetSet).then(function(){
													assetSet.setCurrentIndex(0);
													 eventContext.ui.getViewFromId('SGZArbo.AssetListView').setQueryBaseIndexByQuery(PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(){
														search.set('assetnum', null)
														search.set('ms_addressline', null)
														search.set('ms_staddrnumber', null)
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

		populateSearchAdress: function(eventContext, search){
			let lista = CommonHandler._getAdditionalResource(eventContext, 'asset');
			search.ms_addressline = search.ms_addressline.toLocaleUpperCase();
			search.ms_addressline =search.ms_addressline.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            eventContext.application.showBusy();	
			var abr = ['RUA','R ', 'R.','AVENIDA','Av', 'AC.','AC. ', 'PS. ','PS.', 'R. ','R.','RUA', 'RP.', 
			'RP. ', 'RPJ.','RPJ. ', 'TV. ','TRAVESSA',  'VCP. ', 'VE. DEP ', 'VL.' , 'VIELA']

			abr.forEach(element => {
				if (search.ms_addressline.includes(element)){
					let split = search.ms_addressline.split(element)[1];
					split = split.trim();
					search.ms_addressline = `${split}`					
				}
			});


			if (search.ms_addressline && !search.ms_staddrnumber) {
				CommonHandler._clearFilterForResource(eventContext, lista);
				lista.filter('ms_addressline.includes($1)', search.ms_addressline);	
				search.set('assetnum', null)
				search.set('ms_addressline', null)
				search.set('ms_staddrnumber', null)
				eventContext.ui.show('SGZArbo.AssetListView');	
				eventContext.ui.getCurrentViewControl().refresh();			

			}

			if (search.ms_addressline && search.ms_staddrnumber) {
				CommonHandler._clearFilterForResource(eventContext, lista);
				lista.filter('ms_addressline.includes($1)  && ms_staddrnumber.includes($2)', search.ms_addressline , search.ms_staddrnumber);		
				search.set('assetnum', null)
				search.set('ms_addressline', null)
				search.set('ms_staddrnumber', null)
				eventContext.ui.show('SGZArbo.AssetListView');	
				eventContext.ui.getCurrentViewControl().refresh();
			}

			filter = {};
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
		
		
		commitTechReportViewSecCup : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_interference02", 'Não');
			
				var self = this;
			
				ModelService.save(assetSet).then(function() {
				
				 //eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
				 eventContext.ui.show("SGZArbo.Section.One.Cup");
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
		},
	
		
		
		commitTechReportViewSec : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_interference02", 'Não');
			
				var self = this;
			
				ModelService.save(assetSet).then(function() {
				
				 eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
		},

		commitTechReportViewSecRec : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_interference02", 'Não');
			
				var self = this;
			
				ModelService.save(assetSet).then(function() {
				
				 eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
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
			
				//var viewID = eventContext.application.ui.viewHistory[eventContext.application.ui.viewHistory.length-2].id;
			
				//self.ui.show('');
				//eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
				eventContext.ui.show("SGZArbo.Section.One.Cup");
			}).
			otherwise(function(err){
				eventContext.ui.showMessage(err);						
			});
				
				
				
		},
		commitTechReportViewSec01No : function (eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_interference01", 'Não');
			var self = this;
			ModelService.save(assetSet).then(function() {
			//eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
			eventContext.ui.show("SGZArbo.Section.One.Root");
			}).
			otherwise(function(err){
				eventContext.ui.showMessage(err);						
			});
			
		},	
		
		commitTechReportViewSec01DiagnosisNo : function (eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_apparentdamage04", 'Não');
			var self = this;
			ModelService.save(assetSet).then(function() {
			//eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
			eventContext.ui.show("SGZArbo.Section.One.Root");
			}).
			otherwise(function(err){
				eventContext.ui.showMessage(err);						
			});
			
		},		
		
		
		testeSave : function (eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var arbo = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo');
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
			
			var self = this;
			ModelService.save(assetSet).then(function() {
				eventContext.ui.hideCurrentView();
			}).
			otherwise(function(err){
				eventContext.ui.showMessage(err);						
			});
			
		},
		
		commitTechReportViewSec01 : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			
			//Campos YORN
			var rptms_physicalbarrier = asset.get('rptms_physicalbarrier');
			var rptms_gasnetwork = asset.get('rptms_gasnetwork');
			var rptms_inspectionbox = asset.get('rptms_inspectionbox');
			var rptms_postwallbuilding = asset.get('rptms_postwallbuilding');
			var rptms_waternetwork = asset.get('rptms_waternetwork');
			var rptms_seweragesystem = asset.get('rptms_seweragesystem');
			/*var rptms_telecommunic = asset.get('rptms_telecommunic');
			var rptms_mechinjury01 = asset.get('rptms_mechinjury01');
			var rptms_coilfolded = asset.get('rptms_coilfolded');
			var rptms_exposed = asset.get('rptms_exposed');
			var rptms_drills01 = asset.get('rptms_drills01');
			var rptms_cropped = asset.get('rptms_cropped');
			var rptms_ant01 = asset.get('rptms_ant01');*/
			
			/*var sumYORN = rptms_physicalbarrier + rptms_gasnetwork + rptms_inspectionbox + rptms_postwallbuilding +
				rptms_waternetwork + rptms_seweragesystem + rptms_telecommunic + rptms_mechinjury01 + rptms_coilfolded +
				rptms_exposed + rptms_drills01 + rptms_cropped + rptms_ant01;
			*/
			
			var sumYORN = rptms_physicalbarrier + rptms_gasnetwork + rptms_inspectionbox + rptms_postwallbuilding +
				rptms_waternetwork + rptms_seweragesystem;
				
			//CAMPOS ESCOLHA
			//var rptms_fungi01 = asset.get('rptms_fungi01');
			//var rptms_termite01 = asset.get('rptms_termite01');
			
			var sumChoice = 0;
			
			/*if (rptms_fungi01 != null || rptms_termite01 != null){
				sumChoice = 1;
			}*/
			var sumAll = sumChoice + sumYORN;
			if (sumAll == 0){
				eventContext.ui.showMessage('Selecione ao menos uma opção de interferencia para continuar.');	
			}
			else{
				asset.set("rptms_interference01", 'Sim');
				var self = this;
					ModelService.save(assetSet).then(function() {
						eventContext.ui.show("SGZArbo.Section.One.Root");
					//eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
					}).
					otherwise(function(err){
						eventContext.ui.showMessage(err);						
					});
			}	
		},

		commitTechReportViewSec02 : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			
			//Campos YORN
			/*var rptms_physicalbarrier = asset.get('rptms_physicalbarrier');
			var rptms_gasnetwork = asset.get('rptms_gasnetwork');
			var rptms_inspectionbox = asset.get('rptms_inspectionbox');
			var rptms_postwallbuilding = asset.get('rptms_postwallbuilding');
			var rptms_waternetwork = asset.get('rptms_waternetwork');
			var rptms_seweragesystem = asset.get('rptms_seweragesystem');
			var rptms_telecommunic = asset.get('rptms_telecommunic');*/
			var rptms_mechinjury01 = asset.get('rptms_mechinjury01');
			var rptms_coilfolded = asset.get('rptms_coilfolded');
			var rptms_exposed = asset.get('rptms_exposed');
			var rptms_drills01 = asset.get('rptms_drills01');
			var rptms_cropped = asset.get('rptms_cropped');
			var rptms_ant01 = asset.get('rptms_ant01');
			
			/*var sumYORN = rptms_physicalbarrier + rptms_gasnetwork + rptms_inspectionbox + rptms_postwallbuilding +
				rptms_waternetwork + rptms_seweragesystem + rptms_telecommunic + rptms_mechinjury01 + rptms_coilfolded +
				rptms_exposed + rptms_drills01 + rptms_cropped + rptms_ant01;
				*/
			
			var sumYORN = rptms_telecommunic + rptms_mechinjury01 + rptms_coilfolded +
				rptms_exposed + rptms_drills01 + rptms_cropped + rptms_ant01;	
				
			//CAMPOS ESCOLHA
			var rptms_fungi01 = asset.get('rptms_fungi01');
			var rptms_termite01 = asset.get('rptms_termite01');
			
			var sumChoice = 0;
			
			if (rptms_fungi01 != null || rptms_termite01 != null){
				sumChoice = 1;
			}
			var sumAll = sumChoice + sumYORN;
			if (sumAll == 0){
				eventContext.ui.showMessage('Selecione ao menos uma opção de dano para continuar.');	
			}
			else{
				asset.set("ptms_apparentdamage04", 'Sim');
				var self = this;
					ModelService.save(assetSet).then(function() {
					 //eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
					}).
					otherwise(function(err){
						eventContext.ui.showMessage(err);						
					});
			}	
		},
		
		commitTechReportViewSec02 : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_apparentdamage04", 'Sim');
			var self = this;
			
				ModelService.save(assetSet).then(function() {
				
				 //eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
                    var viewHistory = eventContext.ui.viewHistory;
                    var previousView = viewHistory[viewHistory.length-3];
                    eventContext.ui.returnToView(previousView.id);					
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
		},
		
		commitTechReportViewSec03No : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_apparentdamage01", 'Não');
			var self = this;
				ModelService.save(assetSet).then(function() {
				
				eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
		},
		
		commitTechReportViewSec03 : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			
			var self = this;
			//CAMPOS SELECAO
			var rptms_fungi02 = asset.get('rptms_fungi02');
			var rptms_termite02 = asset.get('rptms_termite02');
			
			var sumChoice = 0;
			
			if (rptms_fungi02 != null || rptms_termite02 != null){
				sumChoice = 1;
			}
			
			//CAMPOS input
			var rptms_hollow01 = asset.get('rptms_hollow01');
			var rptms_hollow02 = asset.get('rptms_hollow02');
			
			var sumInput = 0;
			
			if (rptms_hollow01 != null || rptms_hollow02 != null){
				sumInput = 1;
			}
			
			//CAMPOS YORN
			var rptms_mechinjury02 = asset.get('rptms_mechinjury02');
			var rptms_annealing01 = asset.get('rptms_annealing01');
			var rptms_drills02 = asset.get('rptms_drills02');
			var rptms_ant02 = asset.get('rptms_ant02');
			
			var sumYORN = rptms_mechinjury02 + rptms_annealing01 + rptms_drills02 + rptms_ant02;
			
			var sumAll = sumChoice + sumYORN + sumInput;
			if (sumAll == 0){
				eventContext.ui.showMessage('Selecione ao menos uma opção de interferencia para continuar.');	
			}
			else{
				asset.set("rptms_apparentdamage01", 'Sim');
				ModelService.save(assetSet).then(function() {
				
				eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
			}
		},
		
		commitTechReportViewSec04 : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			
			//CAMPOS SELEÇÃO
			var rptms_fungi03 = asset.get('rptms_fungi03');
			var rptms_termite03 = asset.get('rptms_termite03');
			var rptms_crack = asset.get('rptms_crack');
			
			var sumChoice = 0;
			if (rptms_fungi03 != null || rptms_termite03 != null || rptms_crack != null){
				sumChoice = 1;
			}
			
			//CAMPOS input
			var rptms_hollow03 = asset.get('rptms_hollow03');
			var rptms_hollow04 = asset.get('rptms_hollow04');
			var rptms_dry = asset.get('rptms_dry');
			
			var sumInput = 0
			
			if (rptms_hollow03 != null || rptms_hollow04 != null || rptms_dry != null){
				sumInput = 1;
			}
				
			//CAMPOS YORN
			var rptms_mechinjury03 = asset.get('rptms_mechinjury03');
			var rptms_ant03 = asset.get('rptms_ant03');
			var rptms_annealing02 = asset.get('rptms_annealing02');
			var rptms_sapoozing = asset.get('rptms_sapoozing');
			var rptms_drills03 = asset.get('rptms_drills03');
			var rptms_accbark = asset.get('rptms_accbark');
			
			var sumYORN = rptms_mechinjury03 + rptms_ant03 + rptms_annealing02 + rptms_sapoozing + rptms_drills03 + rptms_accbark;
			
			var sumAll = sumChoice + sumYORN + sumInput;
			if (sumAll == 0){
				eventContext.ui.showMessage('Selecione ao menos uma opção para continuar.');	
			}
				else{
				asset.set("rptms_apparentdamage03", 'Sim');
				var self = this;
				
					ModelService.save(assetSet).then(function() {
					
					eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
					}).
					otherwise(function(err){
						eventContext.ui.showMessage(err);						
					});
				}
		},
		commitTechReportViewSec04No : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_apparentdamage03", 'Não');
			var self = this;
			
				ModelService.save(assetSet).then(function() {
				
				eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
		},
		
		commitTechReportViewSec05No : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_interference02", 'Não');
			var self = this;
			
				ModelService.save(assetSet).then(function() {
				
					//eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
					eventContext.ui.show("SGZArbo.Section.One.Cup");
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
		},
		
		commitTechReportViewSec05 : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			
			//CAMPOS YORN:
			var rptms_busstop = asset.get("rptms_busstop");
			var rptms_tnetwork = asset.get("rptms_tnetwork");
			var rptms_buildings = asset.get("rptms_buildings");
			var rptms_tvoltage = asset.get("rptms_tvoltage");
			var rptms_lighting = asset.get("rptms_lighting");
			var rptms_transitplates = asset.get("rptms_transitplates");
			var rptms_wall = asset.get("rptms_wall");
			var rptms_lightstraffic = asset.get("rptms_lightstraffic");
			var rptms_lamppost = asset.get("rptms_lamppost");
			var rptms_tvehicle = asset.get("rptms_tvehicle");

			/*
				var rptms_mechinjury04 = asset.get("rptms_mechinjury04");
				var rptms_virus = asset.get("rptms_virus");
				var rptms_inadequatepruning = asset.get("rptms_inadequatepruning");
				var rptms_senescence = asset.get("rptms_senescence");
				var rptms_parasitesplants = asset.get("rptms_parasitesplants");
				var rptms_drills04 = asset.get("rptms_drills04");
				var rptms_badformation = asset.get("rptms_badformation");
				var rptms_ant04 = asset.get("rptms_ant04");
			*/

			/*var sumYORN = rptms_busstop + rptms_tnetwork + rptms_buildings + rptms_tvoltage +
				rptms_lighting + rptms_transitplates + rptms_wall + rptms_lightstraffic + rptms_lamppost + rptms_tvehicle
				+ rptms_mechinjury04 + rptms_virus + rptms_inadequatepruning + rptms_senescence + rptms_parasitesplants + rptms_drills04 + rptms_badformation + rptms_ant04	
			*/
			
			var sumYORN = rptms_busstop + rptms_tnetwork + rptms_buildings + rptms_tvoltage +
				rptms_lighting + rptms_transitplates + rptms_wall + rptms_lightstraffic + rptms_lamppost + rptms_tvehicle;
				
			//CAMPOS SELEÇÃO
			//var rptms_fungi04 = asset.get("rptms_fungi04");
			//var rptms_termite04 = asset.get("rptms_termite04");
			//var rptms_uncup = asset.get("rptms_uncup");
			
			var sumChoice = 0;
			/*if (rptms_fungi04 != null || rptms_termite04 != null || rptms_uncup != null){
				sumChoice = 1;
			}*/
			
			var sumAll = sumYORN + sumChoice;
			
			if (sumAll == 0){
				eventContext.ui.showMessage('Selecione ao menos uma opção de interferencia para continuar.');	
			}
			else{
				asset.set("rptms_interference02", 'Sim');
				var self = this;
				
					ModelService.save(assetSet).then(function() {
					
					//eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
					eventContext.ui.show("SGZArbo.Section.One.Cup");
					}).
					otherwise(function(err){
						eventContext.ui.showMessage(err);						
					});
			}
		},

		commitTechReportViewSec06 : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			
			//CAMPOS YORN:
			var rptms_mechinjury04 = asset.get("rptms_mechinjury04");
			var rptms_virus = asset.get("rptms_virus");
			var rptms_inadequatepruning = asset.get("rptms_inadequatepruning");
			var rptms_senescence = asset.get("rptms_senescence");
			var rptms_parasitesplants = asset.get("rptms_parasitesplants");
			var rptms_drills04 = asset.get("rptms_drills04");
			var rptms_badformation = asset.get("rptms_badformation");
			var rptms_ant04 = asset.get("rptms_ant04");
			
			var sumYORN = rptms_mechinjury04 + rptms_virus + rptms_inadequatepru+ rptms_senescence + rptms_parasitesplan + rptms_drills04 + rptms_badformation + rptms_ant04;

			//CAMPOS SELEÇÃO
			var rptms_fungi04 = asset.get("rptms_fungi04");
			var rptms_termite04 = asset.get("rptms_termite04");
			var rptms_uncup = asset.get("rptms_uncup");
			
			var sumChoice = 0;
			if (rptms_fungi04 != null || rptms_termite04 != null || rptms_uncup != null){
				sumChoice = 1;
			}
			
			var sumAll = sumYORN + sumChoice;
			
			if (sumAll == 0){
				eventContext.ui.showMessage('Selecione ao menos uma opção de dano para continuar.');	
			}
			else{
				asset.set("rptms_interference02", 'Sim');
				var self = this;
				
					ModelService.save(assetSet).then(function() {
					
					//eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
					eventContext.ui.show("SGZArbo.Section.One.Cup");
					}).
					otherwise(function(err){
						eventContext.ui.showMessage(err);						
					});
			}
		},
		
		commitTechReportViewSec06 : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_apparentdamage02", "Sim");
			var self = this;
			
				ModelService.save(assetSet).then(function() {
				
				 //eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
				
				eventContext.ui.show("SGZArbo.Section.One.Cup");
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});
		},

		commitTechReportViewSec06No : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArboRpt').getCurrentRecord();
			asset.set("rptms_apparentdamage02", "Não");
			var self = this;
			
				ModelService.save(assetSet).then(function() {
				
				//eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
				eventContext.ui.show("SGZArbo.Section.One.Cup");

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
	
					throw new PlatformRuntimeException("É necessário informar o Nome popular.");
					//return;
	
				}
			}
		},
		
		requiredFieldFull : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo');
			var asset = assetSet.getCurrentRecord();
			var speciesunident = asset.get("ms_speciesunident");
			var popularname = asset.get("ms_popularname");
			
			Logger.error("Ativo Espécie: " + asset.get("ms_speciesunident"));
			Logger.error("Popular: " + asset.get("ms_popularname")); 
			Logger.error("Fanilia: " + asset.get("ms_family")); 
			var diameterbreast = asset.get("ms_diameterbreast");
			var treeheight = asset.get("ms_treeheight");
			var ridewidth = asset.get("ms_ridewidth");

			let msg = "Favor verificar os campos de preenchimento obrigatório: Nome Popular ou Espécie não identificada, DAP, PAP, Largura do Passeio e Altura da Árvore."
			 
			if (speciesunident == false || speciesunident == 0 || speciesunident == null) {
				if (typeof popularname  === undefined || popularname  == null || 
					popularname  == "" || popularname == false) {
	
					throw new PlatformRuntimeException(msg);
					//return;
	
				}
			}
						
			if (typeof diameterbreast === undefined || diameterbreast == null || diameterbreast == "") {
					
				throw new PlatformRuntimeException(msg);
				//return;

			}

			if (typeof treeheight === undefined || treeheight == null || treeheight == ""){
				throw new PlatformRuntimeException(msg);
				//return;
			}

			if (typeof ridewidth === undefined || ridewidth == null || ridewidth == ""){
				throw new PlatformRuntimeException(msg);
				//return;
			}
			

		},
		
		
		requiredFieldDap : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo');
			var asset = assetSet.getCurrentRecord();
			var diameterbreast = asset.get("ms_diameterbreast");
			
			Logger.error("DAP: " + asset.get("ms_diameterbreast"));
			
			if (typeof diameterbreast === undefined || diameterbreast == null || diameterbreast == "") {
					
				throw new PlatformRuntimeException("Favor Informar Valor DAP ou PAP");
				//return;

			}
			
			

		},

		requiredFieldTreeHeight: function(eventContext){			
			var assetSet = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo');
			var asset = assetSet.getCurrentRecord();
			var treeheight = asset.get("ms_treeheight");
						
			if (typeof treeheight === undefined || treeheight == null || treeheight == ""){
				throw new PlatformRuntimeException("A Altura da árvore estimada deve ser maior que 0.");
				//return;
			}

		},


		requiredFieldRidewidth : function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
			var ridewidth = asset.get("ms_ridewidth");
			if (typeof ridewidth === undefined || ridewidth == null || ridewidth == ""){
				throw new PlatformRuntimeException("A Largura do passeio deve ser maior que 0");
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
		
		getTargetDesc : function(eventContext){
				var assetSet = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo');
				var targetSet = CommonHandler._getAdditionalResource(eventContext,'mstarget');
				var asset = assetSet.getCurrentRecord();	
				var arboTarget = asset.get("ms_target");
				if (arboTarget != null || arboTarget != undefined){
					var targetFind = targetSet.find("ms_target == $1", arboTarget);
					var targetDesc = targetFind[0].get("ms_description");
					asset.set("np_targetdesc", targetDesc);
				}
			
		},


		//---------- Funções de calculo automatico DAP e PAP -------------//
		keydownFunctionCalculatorDAP:function(eventContext){
			var campopap;
			var campodap = eventContext;
			let groupitem = campodap.getParent();
			
			let elementofilhos = groupitem.children;
			let self = this;
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

			    self.calcPap(eventContext);
			/* 	ModelService.save(assetSet).then(function() {					
					//eventContext.ui.hideCurrentView();
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				}); */
			});
		},
		keydownFunctionCalculatorPAP:function(eventContext){
			console.log(eventContext);
			var campodap;
			var campopap = eventContext;
			let groupitem = campopap.getParent();

			let elementofilhos = groupitem.children;
			let self = this;

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
				self.calcDap(eventContext);

/* 				ModelService.save(assetSet).then(function() {					
					//eventContext.ui.hideCurrentView();
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				}); */
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
			var perimeterbreastRep = parseFloat(String(perimeterbreast).replace(",","."));
			var perimeterbreastCalc = ((perimeterbreastRep)/3.1415);
			//var perimeterbreastCalcRep = perimeterbreastCalc.replace(".",",");
			

			//Logger.error("Familia: " + asset.get("ms_family"));
			
			
			if (perimeterbreast > 0) {
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
			let arboreason = currAsset.get("ms_arboreason");
			//var validate = currAsset.get("ms_validate");
			
			if(deadtree){
				eventContext.setDisplay(false);
				eventContext.setVisibility(false);
			}	
			if(arboreason == null){				
				eventContext.setDisplay(false);
				eventContext.setVisibility(false);
			}	
			if(deadtree != null  && arboreason !=null){				
				eventContext.setDisplay(true);
				eventContext.setVisibility(true);
			}	
		},
		
		hideTechReportContainer : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			var self = this;
			var deadtree = currAsset.get("ms_deadtree");
			var validate = currAsset.get("ms_validate");
			var crea = currAsset.get('crea');
			var crbio = currAsset.get('crbio');
			var arboSet = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
			var ms_ridewidth = arboSet.get("ms_ridewidth");
			var ms_popularname = arboSet.get("ms_popularname");
			var ms_speciesunident = arboSet.get("ms_speciesunident");
			var ms_diameterbreast = arboSet.get("ms_diameterbreast");
			var ms_perimeterbreast = arboSet.get("ms_perimeterbreast");
			var ms_treeheight = arboSet.get("ms_treeheight");
			

			try {
				
				let queryBase;
				/*if (localStorage.getItem('filtro')) {
					queryBase =localStorage.getItem('filtro');
					if (!queryBase.includes("ms_techreport")) {			
						eventContext.setDisplay(false);
						eventContext.setVisibility(false);	
					}
				}	*/
				
				if ((crea == null || crea == undefined) && (crbio == null || crbio == undefined)){ 			
					eventContext.setDisplay(false);
					eventContext.setVisibility(false);
				}

/* 				if (crbio == null || crbio == undefined){
					eventContext.setDisplay(false);
					eventContext.setVisibility(false);
				}
				 */
				if(validate == false){
					eventContext.setDisplay(false);
					eventContext.setVisibility(false);
				}
				
				if ((ms_treeheight == null || ms_treeheight == undefined) || 
					(ms_ridewidth == null || ms_ridewidth == undefined) || 
					((ms_popularname == null || ms_popularname == undefined) && ms_speciesunident ==  false) || 
					((ms_diameterbreast == null || ms_perimeterbreast ==  null) || (ms_diameterbreast == undefined || ms_perimeterbreast ==  undefined))){
					eventContext.setDisplay(false);
					eventContext.setVisibility(false);
				}
				

			} catch (error) {
				console.log(error);
			}
		
		},

		hideContainerReportContainer : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			var deadtree = currAsset.get("ms_deadtree");
			var isDeadTreeResponse = currAsset.getPendingOrOriginalValue("ms_deadtree_set");

			/*if (!isDeadTreeResponse) {
				eventContext.setDisplay(false);
				eventContext.setVisibility(false);
			}*/
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
			var attachments_size = currAsset.get("attachmentssize");
			let attachments;
			let attachmentsToday = 0;

			if (eventContext.getResource().getCurrentRecord().get('attachments')) {
				attachments = eventContext.getResource().getCurrentRecord().get('attachments');
				let date =  new Date();
				var day = date.getUTCDate();
				var month = date.getUTCMonth() + 1; //months from 1-12
				var year = date.getUTCFullYear();
				var newdate = day + "/" + month + "/" + year;

				attachments.data.forEach(element => {
					datePhoto = element.get('creationDate');
					datePhoto = new Date(datePhoto);
					var dayPhoto = datePhoto.getUTCDate();
					var monthPhoto = datePhoto.getUTCMonth() + 1; //months from 1-12
					var yearPhoto = datePhoto.getUTCFullYear();
					var newdatedatePhoto = dayPhoto + "/" + monthPhoto + "/" + yearPhoto;
					if (newdatedatePhoto >= newdate ) {
						attachmentsToday ++;
					}
				});
			}

			if (attachments_size == null || attachments_size < 0 || attachments_size.includes('--')) {
				eventContext.ui.showMessage("Adicione no mínimo duas fotos para definir árvore morta.");
			}
			if (attachments_size == 0 || attachments_size < 2) {
				eventContext.ui.showMessage("Adicione no mínimo duas fotos para definir árvore morta.");
			}
			/*else{
				eventContext.ui.show('SGZArbo.defineDeadTreeView');	
			}*/
			else{
				eventContext.ui.show('SGZArbo.select.motivo.defineDeadReason');	
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
			if(!eventContext.viewControl.validate()){return;}
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = CommonHandler._getAdditionalResource(eventContext, 'asset.MSArbo').getCurrentRecord();
			var currAsset = assetSet.getCurrentRecord();
			var ms_deadtree =currAsset.get('ms_deadtree');
			var self = this;
			currAsset.set("ms_arboreason", currAsset.get("ms_arboreason"));
			if (currAsset.get("ms_arboreason") != null && currAsset.get("ms_arboreason") > 0) {
				currAsset.set("ms_deadtree", true);
				currAsset.set("ms_deadtree_set", true);
				ModelService.save(assetSet).then(function () {
					//eventContext.ui.hideCurrentView();
					eventContext.ui.show('SGZArbo.AssetDetailView');
				}).otherwise(function (err) {
					eventContext.ui.showMessage(err);						
				});
			}
				

		},
		
		setDeadTreeN : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			var self = this;
			currAsset.set("ms_deadtree", false);
			currAsset.set("ms_deadtree_set", true);
			ModelService.saveAll(assetSet).then(function(){
			       self.ui.hideCurrentView();
			});			
		},
		
		commitSpecOne : function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
			var assetSet = eventContext.application.getResource('asset');
			let currAsset = assetSet.getCurrentRecord();
			var arbo = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo');
			var assetDeadtree = currAsset.get("ms_deadtree")
			var isDeadTreeResponse = false;
			try {
				if (currAsset.get("ms_deadtree_set") == true || assetDeadtree == true) {
					isDeadTreeResponse = true;
				}else{
					isDeadTreeResponse = false;
				}				
			} catch (error) {
				console.log(error);
			}
			if (isDeadTreeResponse) {
				ModelService.save(assetSet).then(function() {				
					eventContext.ui.hideCurrentView();
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
				});				
			}else{
				throw new PlatformRuntimeException("Favor responder se Árvore está morta");
			}
		},
		
		commitSpecificationView : function(eventContext){
			if(!eventContext.viewControl.validate()){return;}
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			let currAsset = assetSet.getCurrentRecord();

			Logger.error("Ativo Espécie 1: " + asset.get("ms_speciesunident"));
			Logger.error("Popular 1: " + asset.get("ms_popularname")); 
			Logger.error("Fanilia 1: " + asset.get("ms_family")); 

			var familia = asset.get("ms_family");
			var popularname = asset.get("ms_popularname");
			var popular = asset.get("ms_popular");
		    var ms_scientific = asset.get("ms_scientific");
			let deadtree = currAsset.get('ms_deadtree');
			let ms_permeablearea = false;
			let ms_inadequatesite = false;
			let ms_jammvegetation = false;
			let ms_diameter = 0;
			let ms_length = 0;
			let ms_width = 0;

			var specsList = CommonHandler._getAdditionalResource(eventContext,"msarbospec");
			Logger.error("Ativo: " + asset.get("ms_assetnum"));
			Logger.error("Familia: " + asset.get("ms_popularname"));

			var isDeadTreeResponse = false;
			try {
				if (currAsset.get("ms_deadtree_set") == true || deadtree) {
					isDeadTreeResponse = true;
				}else{
					isDeadTreeResponse = false;
				}				
			} catch (error) {
				console.log(error);
			}

			try {
				if (asset.get('ms_permeablearea')) {
					ms_permeablearea = asset.get('ms_permeablearea');
				}
				if (asset.get('ms_diameter')) {
					ms_diameter = asset.get('ms_diameter');
				}
				if (ms_permeablearea && ms_diameter != null || ms_permeablearea && ms_diameter == 0) {
					throw new PlatformRuntimeException("Favor informar um valor para o campo Diâmetro (m)");
				}


				if (asset.get('ms_inadequatesite')) {
					ms_inadequatesite = asset.get('ms_inadequatesite');
				}
				if (asset.get('ms_length')) {
					ms_length = asset.get('ms_length');
				}
				if (ms_inadequatesite && ms_inadequatesite != null || ms_inadequatesite && ms_length == 0) {
					throw new PlatformRuntimeException("Favor informar um valor para o campo Comprimento (m)");
				}


				if (asset.get('ms_jammvegetation')) {
					ms_jammvegetation = asset.get('ms_jammvegetation');
				}
				if (asset.get('ms_length')) {
					ms_width = asset.get('ms_width');
				}
				if (ms_jammvegetation && ms_jammvegetation != null || ms_jammvegetation && ms_width == 0) {
					throw new PlatformRuntimeException("Favor informar um valor para o campo Comprimento (m)");
				}

			} catch (error) {
				console.log(error);
			}


			if (isDeadTreeResponse) {
				asset.set("ms_popularname", asset.get("ms_popularname"));
				asset.set("ms_scientific", asset.get("ms_popularname"));
				asset.set("ms_family", asset.get("ms_family"));		
				

				ModelService.save(assetSet).then(function() {				
					eventContext.ui.hideCurrentView();
				}).
				otherwise(function(err){
					//eventContext.ui.showMessage(err);						
				});				
			}else{
				throw new PlatformRuntimeException("Favor responder se Árvore está morta");
			}
		},


		commitSpecificationViewFamily : function(eventContext){
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
			let currAsset = assetSet.getCurrentRecord();
			let deadtree = currAsset.get('ms_deadtree');
			var isDeadTreeResponse = asset.get("ms_deadtree_set");

			var isDeadTreeResponse = false;
			try {
				if (currAsset.get("ms_deadtree_set") == true || deadtree) {
					isDeadTreeResponse = true;
				}else{
					isDeadTreeResponse = false;
				}				
			} catch (error) {
				console.log(error);
			}
			if (isDeadTreeResponse) {
				asset.set("ms_popularname", asset.get("ms_popularname"));
				asset.set("ms_scientific", asset.get("ms_popularname"));
				asset.set("ms_family", asset.get("ms_family"));
				ModelService.save(assetSet).then(function() {				
					eventContext.ui.hideCurrentView();
				}).
				otherwise(function(err){
					//eventContext.ui.showMessage(err);						
				});
			}else{
				throw new PlatformRuntimeException("Favor responder se Árvore está morta");
			}


		},

		detailsHandleBackButton : function(eventContext){
			eventContext.ui.show("SGZArbo.AssetListView");
		},
		techReportHandleBackButton : function(eventContext){
			eventContext.ui.show("SGZArbo.AssetDetailView");
		},
		
		commitDendometricCharacteristics : function(eventContext) {
			if(!eventContext.viewControl.validate()){return;}
			var asset = CommonHandler._getAdditionalResource(eventContext, 'asset.MSArbo').getCurrentRecord();
			var assetSet = CommonHandler._getAdditionalResource(eventContext, "asset");
			var currAsset = assetSet.getCurrentRecord();
			let deadtree = currAsset.get('ms_deadtree');

			let diameterbreast = asset.get("ms_diameterbreast");
			let perimeterbreast = asset.get("ms_perimeterbreast");
			let slope = asset.get("ms_slope");
			let direction =  asset.get("ms_direction"); 
			let angle = asset.get("ms_angle");

			var self = this;

			var isDeadTreeResponse = false;
			try {
				if (currAsset.get("ms_deadtree_set") == true || deadtree) {
					isDeadTreeResponse = true;
				}else{
					isDeadTreeResponse = false;
				}				
			} catch (error) {
				console.log(error);
			}

			if (isDeadTreeResponse) {
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
							eventContext.ui.hideCurrentView();
						}).otherwise(function (err) {
							//eventContext.ui.showMessage(err);						
						});
				}else{
					self.requiredMandatoryFields(eventContext);
				}
			}else{
				throw new PlatformRuntimeException("Favor responder se Árvore está morta");
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
			try {
				if (asset) {					
					asset.set("ms_arboreason", currAsset.get("ms_arboreason"));
					if (currAsset.get("ms_arboreason") != null && currAsset.get("ms_arboreason") > 0) {
						ModelService.save(assetSet).then(function () {
							//eventContext.ui.hideCurrentView();
						}).otherwise(function (err) {
							//eventContext.ui.showMessage(err);						
						});
					}
				}
			} catch (error) {
				console.log(error);
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


		},

		filterStatus: function (eventContext) {
			let domainAssetStatus = CommonHandler._getAdditionalResource(eventContext, 'domainAssetStatus');
			CommonHandler._clearFilterForResource(eventContext, domainAssetStatus);
			domainAssetStatus.filter('description == $1 || description == $2', 'Ativo', 'Inativo');
		},

		showReasonButtonStatus: function (eventContext) {
			var statusChange = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
			var self = this;
			let newStatus = statusChange.get("status");
			
			try {

				if (newStatus != null) {
					newStatus = newStatus.toLocaleUpperCase();					
				}

				if (newStatus == "INATIVO"){
					eventContext.setDisplay(true);
					eventContext.setVisibility(true);
				}else{
					eventContext.setDisplay(false);
					eventContext.setVisibility(false);
				}
			} catch (error) {
				console.log(error);
			}
			
		},
		setTreeAdress: function(eventContext){
			var filteredItems = 0;			
			var filter = {};
			var self = this;
			let search = CommonHandler._getAdditionalResource(eventContext, 'asset');
			CommonHandler._clearFilterForResource(eventContext, search);
			search.filter('ms_addressline == $1', );
			if(filteredItems == 0){
				eventContext.ui.show('SGZArbo.RequiredSearchFieldMissing');
				return;
			}
			
			self.populateSearch(eventContext);

		},

		/*_saveStatusChangeDate: function(eventContext){
			let asset = CommonHandler._getAdditionalResource(eventContext, 'asset').getCurrentRecord();
			asset.setDateValue("statusdate", this.application.getCurrentDateTime());
			
			var self = this;
			ModelService.save(recordSet).then(function(){
			    //self.ui.hideCurrentView();
			});			
			
		},*/
		backSpec:function(eventContext){
			return false;
		},
		backSpecDetails:function(eventContext){
			eventContext.ui.show("SGZArbo.AssetDetailView");
		},
		backSpecLaudo:function(eventContext){
			eventContext.ui.show('SGZArbo.Section.four.SpecificationsView.laudo');
		},

		


	});
});