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

define("application/handlers/AssetDetailHandler", 
	   [ "dojo/_base/declare",
	     "dojo/_base/array",
		 "dojo/_base/lang",
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
	     "dojo/Deferred"],
function(declare, arrayUtil, lang, ApplicationHandlerBase, CommunicationManager, Asset, SynonymDomain, ModelService, MessageService, CommonHandler, FieldUtil, AssetSpecificationObject, PlatformRuntimeException, PlatformRuntimeWarning, UserManager, PlatformConstants, AsyncAwareMixin, Logger, MapProperties, GeoLocationServiceHelper, GeoLocationTrackingService, Deferred) {
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
									eventContext.ui.show('SGZArbo.AssetDetailView');	
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
		
		filterFailureClass: function(eventContext){
			
		},
		
		popularnameDomain: function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
		
			var specsList = CommonHandler._getAdditionalResource(eventContext,"msarbospec");
			Logger.error("Ativo: " + asset.get("ms_assetnum"));
			Logger.error("Familia: " + asset.get("ms_family"));
			specsList.filter("ms_family = $1", asset.get("ms_family"));

		},
		
		scientificnameDomain: function(eventContext){
			
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
		
			var specsList = CommonHandler._getAdditionalResource(eventContext,"msarbospec");
			Logger.error("Ativo: " + asset.get("ms_assetnum"));
			Logger.error("Familia: " + asset.get("ms_popularname"));
			CommonHandler._clearFilterForResource(eventContext,specsList)
			specsList.filter("ms_popularname = $1", asset.get("ms_popularname"));
			

		},
		
		setScientificName: function(eventContext){
			
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset.MSArbo').getCurrentRecord();
		
			var specsList = CommonHandler._getAdditionalResource(eventContext,"msarbospec");
			Logger.error("Ativo: " + asset.get("ms_assetnum"));
			Logger.error("Familia: " + asset.get("ms_popularname"));
			if (asset.get("ms_popularname") != null){
				asset.set("ms_scientific", asset.get("ms_popularname"));
			}
			

		},
		
		
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
			
			if(deadtree == true || validate == false){
				eventContext.setDisplay(false);
				eventContext.setVisibility(false);
			}	
		},
		
		hideTechReportObsContainer : function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			var self = this;
			var deadtree = currAsset.get("ms_deadtree");
			var validate = currAsset.get("ms_validate");
			
			if(validate == false){
				eventContext.setDisplay(false);
				eventContext.setVisibility(false);
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
			
			if(attachments == 0){
				eventContext.ui.showMessage("Adicione uma foto para definir árvore morta.");
			}
			else{
				eventContext.ui.show('SGZArbo.defineDeadTreeView');	
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
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			
				ModelService.save(assetSet).then(function() {					
					eventContext.ui.hideCurrentView();
				}).
				otherwise(function(err){
					eventContext.ui.showMessage(err);						
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
	});
});
