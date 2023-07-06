/*
 * Licensed Materials - Property of IBM
 *
 * 5725-M39
 *
 * (C) Copyright IBM Corp. 2020 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp.
 */

define("application/handlers/WOExtDownloadHandler", 
       [ "dojo/_base/declare",
		"platform/handlers/WorkOfflineHandler",
		"platform/model/WorklistDataManager",
		"platform/model/WorklistDataUIManager",
		"dojo/_base/array",
		"dojo/_base/lang",
		"platform/model/ModelService",
		"platform/translation/MessageService",
		"platform/store/PersistenceManager",
		"platform/model/PushingCoordinatorService",
        "platform/util/PlatformConstants",
        "platform/ui/util/WorkOfflineMapManager",
        "platform/comm/CommunicationManager",
        "platform/logging/Logger",
        "platform/store/_ResourceMetadataContext",
        "dojo/Deferred",
        "dojo/promise/all",
        "platform/store/SystemProperties",
        "application/handlers/DataSheetDownloadManager",
		"dojo/topic",
		"application/handlers/MeterDownloadManager"], 
function(declare, WorkOfflineHandler, WorklistDataManager, WorklistDataUIManager, arrayUtil, lang, ModelService, MessageService, PersistenceManager, PushingCoordinatorService, PlatformConstants, WorkOfflineMapManager, CommunicationManager, Logger, ResourceMetaData, Deferred, all, SystemProperties, DataSheetDownloadManager, topic, MeterDownloadManager) {

	var afterWorkofflineCancel = topic.subscribe('afterWorkofflineCancel', function(cancel){				    	
		DataSheetDownloadManager.cancelLastResourceDataDownloadRequest();
		DataSheetDownloadManager._overallProcessing.promise.
		always(function(e){
			if(e == "canceled"){
				DataSheetDownloadManager.cleanUp();	
			}				
		});
		
	});

	var subscribeHandle = null;
	
	var loadDataSheets = function(options) {
		DataSheetDownloadManager.cleanUp();
		var resourceName = options.resourceName;
		var queryBase = options.querybase;
		var self = options.self;
		var progressResource = self.progressResource;
		var wonumList = [];
		var deferred = new Deferred();
		var cleanWonumList = [];
		
		var progressMsg = MessageService.createResolvedMessage('downloadingAdditionalResourceProgress', [MessageService.createStaticMessage('datasheets').getMessage(), 0]);
		progressResource.set('progressMsg', progressMsg);
		
		ModelService.allCached(resourceName, queryBase, 2000)
		.then(function(woSet) {
			if (woSet && woSet.count() > 0 ) {
				arrayUtil.forEach(woSet.data, function(wo){
					wonumList.push(wo.get("wonum"));
					if (!wo[PlatformConstants.ORIGINAL_STATE_ATTRIBUTE] || wo[PlatformConstants.ORIGINAL_STATE_ATTRIBUTE] == 'null'){
						cleanWonumList.push(wo.get("wonum"));
					}
				});
				var dataSheetMeta = ResourceMetaData.getResourceMetadata("dataSheetResourceMax");
				var wonumInClause = "";
				var firstTime = true;
				var siteid = woSet.data[0] ? '%22' + woSet.data[0].siteid + '%22' : null;
				wonumList.forEach(function(wonum){
					if (firstTime){
						wonumInClause = '%22'+wonum+'%22';
						firstTime = false;
					} else {
						wonumInClause += ',%22'+wonum+'%22';		
					}
				});
				var whereClause = "spi_wm:wonum in [" + wonumInClause + "]";
				whereClause = siteid ? whereClause + " and spi_wm:siteid="+siteid : whereClause;
				dataSheetMeta.setWhereClause(whereClause);
				var progressInfo = DataSheetDownloadManager.downloadDataSheet();
				progressInfo.watch("recordsDownloaded", function(fieldName, oldValue, newValue){
					var downloaded = newValue['downloaded'];
					var total = newValue['total'];
					var percent = null;
					if (total == 0 || total < downloaded){
						self.application.log("Count was not returned from the server", 0);
						percent = '[' + MessageService.createStaticMessage('percentNotAvailable').getMessage() + ']';
					} else {
						percent = Math.round((downloaded/total) * 100);
					}
									
					var progressMsg = MessageService.createResolvedMessage('downloadingAdditionalResourceProgress', [MessageService.createStaticMessage('datasheets').getMessage(), percent]);				
					if (syncDownload==='true') {
						if (self.worklistProgressResource) {				
							self.worklistProgressResource.set('progressMsg', progressMsg);
						}
					} else {
						self.progressResource.set('progressMsg', progressMsg );
					}
				});
				DataSheetDownloadManager._overallProcessing.promise
				.then(function() {
					var savedSheet = [{isSaved:true}];
					ModelService.filtered('dataSheetResource', null, savedSheet, 500, false, true, null, true).always(function(workingSet){
						if (cleanWonumList.length > 0 &&  workingSet && workingSet.data && workingSet.data.length > 0){
							var deleteList = [];
							arrayUtil.forEach(workingSet.data, function(workingDs){
								var wonum = workingDs.wonum;
								if (wonum && arrayUtil.indexOf(cleanWonumList, wonum) != -1){
									deleteList.push({_id: workingDs._id});
								}
							});
							if (deleteList.length > 0){
								PersistenceManager.remove(workingSet.getMetadata(),deleteList, true);
							}
						}
						ModelService.allLocalOnly('dataSheetResourceMax', null, 2000)
						.always(function(dataSheetSet) {
							var dsConfigMeta = ResourceMetaData.getResourceMetadata("transactiondatasheetconfig");
							var dsplanInClause = "";
							var firstTime = true;
							if (dataSheetSet && dataSheetSet.data && dataSheetSet.data.length > 0){
								var dsplannumList = [];
								arrayUtil.forEach(dataSheetSet.data, function(ds){
									if(dsplannumList.indexOf(ds.dsplannum) == -1) {
										dsplannumList.push(ds.dsplannum);
									}
								});
								dsplannumList.forEach(function(dsplannum){
									if (firstTime){
										dsplanInClause = '%22'+dsplannum+'%22';	
										firstTime = false;
									} else {
										dsplanInClause += ',%22'+dsplannum+'%22';		
									}
								});
								dsConfigMeta.setWhereClause("spi:dsplannum in [" + dsplanInClause + "]");
								DataSheetDownloadManager.downloadDataSheetConfig();
								DataSheetDownloadManager._overallProcessing.promise
								.then(function() {
									Logger.trace('[WOExtDownloadHandler.loadDataSheets] Transaction Data Sheet Configuration records downloaded successfully.');
									deferred.resolve();
								})
								.otherwise(function(error) {
									Logger.traceJSON('[WOExtDownloadHandler.loadDataSheets] Transaction Data Sheet Configuration records downloaded failed!', error);
									deferred.reject(error);
								});
							}
							else{
								Logger.trace('[WOExtDownloadHandler.loadDataSheets] No data sheet work orders!');
								deferred.resolve();
							}
						});
						
					});
				})
				.otherwise(function(error) {
					Logger.trace('[WOExtDownloadHandler.loadDataSheets] Download Data Sheets failed! ', error);
					deferred.reject(error);
				});
			} else {
				Logger.trace('[WOExtDownloadHandler.loadDataSheets] No data sheet work orders!');
				deferred.resolve();
			}
		});
		return deferred.promise;
	};
	
	var loadDataSheetAssetLink = function(options) {
		var deferred = new Deferred();
		getInnerAssetsAndLocations(options.resourceName, options.querybase)
		.then(function(response) {
			_loadDataSheetByLocationList(response) // load data sheets by work locations
			.then(function() {
				_loadDataSheetByAssetList(response) // load data sheets by work assets
				.then(function() {
					_loadDataSheetConfig() // load data sheet configuration
					.then(function() {
						deferred.resolve();
					})
					.otherwise(function(error) {
						deferred.reject(error);
					});
				})
				.otherwise(function(error) {
					deferred.reject(error);
				});
			})
			.otherwise(function(error) {
				deferred.reject(error);
			});
		})
		.otherwise(function(error) {
			deferred.reject(error);
		});
		
	};
	
	var _loadDataSheetByLocationList = function(response) {
		return _loadDataSheetsByList('spi:location', response['locationDownloadlist'], response['siteid']);
	};
	
	var _loadDataSheetByAssetList = function(response) {
		return _loadDataSheetsByList('spi:assetnum', response['assetlist'], response['siteid']);
	};
	
	var _loadDataSheetsByList = function(attr, list, siteid) {
		//var attr = prop == 'assetlist' ? 'spi:asset' : 'spi:location';
		var deferred = new Deferred();
		var dsAssetLinkMeta = ResourceMetaData.getResourceMetadata("additionaldatasheetassetlink");
		var encodedURI = buildInWhereClause(attr, list) + '%20and%20spi:siteid=%22' + siteid + '%22';
		dsAssetLinkMeta.setWhereClause(encodedURI);
		var progressInfo = DataSheetDownloadManager.downloadDataSheetAssetLink();
		progressInfo.watch("recordsDownloaded", function(fieldName, oldValue, newValue) {
			var downloaded = newValue['downloaded'];
			var total = newValue['total'];
			var percent = null;
			if (total == 0 || total < downloaded) {
				self.application.log("Count was not returned from the server", 0);
				percent = '[' + MessageService.createStaticMessage('percentNotAvailable').getMessage() + ']';
			} else {
				percent = Math.round((downloaded/total) * 100);
			}
			var progressMsg = MessageService.createResolvedMessage('downloadProgress', [self.workOrdersLabel, percent]);
			if (syncDownload==='true') {
				if (self.worklistProgressResource) {				
					self.worklistProgressResource.set('progressMsg', progressMsg);
				}
			} else {
				//self.progressResource.set('progressMsg', progressMsg );
			}
		});
		//ModelService.filtered('additionaldatasheetassetlink', 'additionaldatasheetassetlink', , pageSize, forceServerPreferred, isExactMatch, oslcQueryParameters, forceLocalPreferred)
		DataSheetDownloadManager._overallProcessing.promise
		.then(function() {
			ModelService.allLocalOnly('additionaldatasheetassetlink', null, 1000)
			.then(function(dsAssetLinkSet) {
				if(dsAssetLinkSet && dsAssetLinkSet.data && dsAssetLinkSet.data.length > 0) {
					var dsplannumList = [];
					arrayUtil.forEach(dsAssetLinkSet.data, function(dsAssetLink) {
						if(dsplannumList.indexOf(dsAssetLink.dsplannum) == -1) {
							dsplannumList.push(dsAssetLink.dsplannum);
						}
					});
					dsplanInClause = '';
					dsplannumList.forEach(function(dsplannum) {
						if(dsplanInClause != '')
							dsplanInClause += ',%22'+dsplannum+'%22';
						else
							dsplanInClause = '%22'+dsplannum+'%22';
					});
					
					var dataSheetTemplateMeta = ResourceMetaData.getResourceMetadata("dataSheetTemplateResource");
					dataSheetTemplateMeta.setWhereClause("spi:dsplannum in ["+dsplanInClause+"]");					
					DataSheetDownloadManager.downloadDataSheetTemplate();

					
					DataSheetDownloadManager._overallProcessing.promise
					.then(function() {
						
						var dataSheetMeta = ResourceMetaData.getResourceMetadata("dataSheetResourceMax");
						dataSheetMeta.setWhereClause("spi_wm:dsplannum in ["+dsplanInClause+"]");
						DataSheetDownloadManager.downloadDataSheet();
						
						deferred.resolve();
					})
					.otherwise(function(error) {
						deferred.reject(error);
					});
				}
			})
			.otherwise(function(error) {
				deferred.reject(error);
			});
		})
		.otherwise(function(error) {
			deferred.reject(error);
		});
		return deferred.promise;
	};
	
	var _loadDataSheetConfig = function() {
		var deferred = new Deferred();
		var dsConfigMeta = ResourceMetaData.getResourceMetadata("additionaldatasheetconfig");
		var dsplanInClause = "";
		var firstTime = true;
		ModelService.allLocalOnly('dataSheetResourceMax', null, 200)
		.then(function(dataSheetSet) {
			if (dataSheetSet && dataSheetSet.data && dataSheetSet.data.length > 0){
				var dsplannumList = [];
				arrayUtil.forEach(dataSheetSet.data, function(ds){
					if(dsplannumList.indexOf(ds.dsplannum) == -1) {
						dsplannumList.push(ds.dsplannum);
					}
				});
				dsplannumList.forEach(function(dsplannum){
					if (firstTime){
						dsplanInClause = '%22'+dsplannum+'%22';	
						firstTime = false;
					} else {
						dsplanInClause += ',%22'+dsplannum+'%22';		
					}
				});
				dsConfigMeta.setWhereClause(encodeURI("spi:dsplannum%20in%20[" + dsplanInClause + "]"));
				DataSheetDownloadManager.downloadDataSheetConfig();
				DataSheetDownloadManager._overallProcessing.promise
				.then(function() {
					deferred.resolve();
				})
				.otherwise(function(error) {
					deferred.reject(error);
				});
			}
			else{
				deferred.resolve();
			}
		});
		return deferred.promise;
	};
	
	var getInnerAssetsAndLocations = function(resource, querybase) {
		var assetlist = [];
		var locationlist = [];
		var siteid = null;
		var deferred = new Deferred();
		ModelService.allCached(resource, querybase, null).then(function(woSet) {
			arrayUtil.forEach(woSet.data, function(wo){
				siteid = wo.get("siteid");
				//check if asset exists on workorder header and push to asset list
				var assetnum = wo.getPendingOrOriginalValue('asset');
				if (assetnum){
					if (assetlist.indexOf(assetnum)<0){
						assetlist.push(assetnum);
					}
				}
				//check if location exists on workorder header and push to location list
				var location = wo.getPendingOrOriginalValue('location');
				if (location){
					if (locationlist.indexOf(location)<0){
						locationlist.push(location);
					}
				}
				//check workorder tasksset and fetch all asset/locations on each task.
				var taskSet = wo.tasklist;
				if (taskSet){
					arrayUtil.forEach(taskSet, function(task){
						var taskLoc =  task['location'];
						if (taskLoc){
							if (locationlist.indexOf(taskLoc)<0){
								locationlist.push(taskLoc);
							}
						}
						var taskAsset = task['assetnum'];
						if (taskAsset){
							if (assetlist.indexOf(taskAsset)<0){
								assetlist.push(taskAsset);
							}
						}
					});
					taskSet = null;
				}
				//check workorder multiassetloc and fetch all asset/locations on each asset.
				var multiAssetLocciSet =  wo.multiassetloclist;
				if (multiAssetLocciSet){
					arrayUtil.forEach(multiAssetLocciSet, function(multiAssetLocci){
						var multiLoc = multiAssetLocci['location'];
						if (multiLoc){
							if (locationlist.indexOf(multiLoc)<0){
								locationlist.push(multiLoc);
							}
						}
						var multiAsset = multiAssetLocci['assetnum'];
						if (multiAsset){
							if (assetlist.indexOf(multiAsset)<0){
								assetlist.push(multiAsset);
							}
						}
					});
					multiAssetLocciSet = null;
				}		
				wo = null;
			});
			woSet = null;
			deferred.resolve(
					{'assetlist': assetlist, 'locationlist': locationlist, 'siteid': siteid}
			);
		});
		return deferred.promise;
	};

	var loadMeters = function(options) {
		if (subscribeHandle){
			subscribeHandle.remove();
			subscribeHandle = null;
		}
		MeterDownloadManager.cleanUp();
		var resourceName = options.resourceName;
		var queryBase = options.querybase;
		var self = options.self;
		var progressResource = self.progressResource;
		var deferred = new Deferred();
		
		var syncDownload = SystemProperties.getProperty('si.worklistSyncDownload');

		var metersString = MessageService.createStaticMessage('assetMetersMsg').getMessage();
		var msg = MessageService.createResolvedMessage('downloadingAdditionalResourceProgress', [metersString, 0]);
		
		if (syncDownload==='true'){
			var worklistProgressRecord = self.ui.application.getResource('PlatformProgressResource').getRecordAt(0);
			if (worklistProgressRecord) {				
				progressResource = worklistProgressRecord;
			}			
		}
		progressResource.set('progressMsg', msg);	
		
		var assetMeterMeta = ResourceMetaData.getResourceMetadata("assetMeters");
		var originalAssetWhereClause = assetMeterMeta.whereClause;
		var locationMeterMeta = ResourceMetaData.getResourceMetadata("locationMeters");
		var originalLocWhereClause = locationMeterMeta.whereClause;

		var siteQry = "";
		if (siteDownloadList.length > 0){
			var firstTime = true;
			siteDownloadList.forEach(function(site){
				if (firstTime){
					siteQry='%22'+site+'%22';	
					firstTime = false;
				} else {
					siteQry+=',%22'+site+'%22';		
				}
			});
			siteDownloadList = [];
		}

		var assetMetersPromise;
		if (assetDownloadList.length > 0){
			var asslist = "";
			var assetFirstTime = true;
			assetDownloadList.forEach(function(asset){
				if (assetFirstTime){
					asslist='%22'+asset+'%22';	
					assetFirstTime = false;
				} else {
					asslist+=',%22'+asset+'%22';		
				}
			});
			
			assetDownloadList = [];
			assetMeterMeta.setWhereClause("spi:asset{oslc:shortTitle in ["+asslist+"]} and spi:siteid in ["+siteQry+"]");
			var progressInfo = MeterDownloadManager.downloadAssetMeters(resourceName, queryBase);
			progressInfo.watch("recordsDownloaded", function(fieldName, oldValue, newValue){
				var downloaded = newValue['downloaded'];
				var total = newValue['total'];
				var percent = null;
				if (total == 0 || total < downloaded){
					self.application.log("Count was not returned from the server", 0);
					percent = '[' + MessageService.createStaticMessage('percentNotAvailable').getMessage() + ']';
				} else {
					percent = Math.round((downloaded/total) * 100);
				}
								
				var progressMsg = MessageService.createResolvedMessage('downloadingAdditionalResourceProgress', [metersString, percent]);
				if (syncDownload==='true') {
					if (self.worklistProgressResource) {				
						self.worklistProgressResource.set('progressMsg', progressMsg);
					}
				} else {
					self.progressResource.set('progressMsg', progressMsg );
				}
			});
			assetMetersPromise = MeterDownloadManager._overallProcessing.promise;
			
		}
		else{
			Logger.trace('[WOExtDownloadHandler.loadMeters] no assets on work orders.');
			assetMetersPromise = new Deferred().resolve();
		}
		
		assetMetersPromise.then(function() {
			Logger.trace('[WOExtDownloadHandler.loadMeters] asset meters downloaded successfully.');
			MeterDownloadManager.cleanUp();
			metersString = MessageService.createStaticMessage('locationMetersMsg').getMessage();
			var locMsg = MessageService.createResolvedMessage('downloadingAdditionalResourceProgress', [metersString, 0]);
			progressResource.set('progressMsg', locMsg);	
			if (locationDownloadList.length > 0){
				var loclist = "";
				var locFirstTime = true;
				locationDownloadList.forEach(function(location){
					if (locFirstTime){
						loclist='%22'+location+'%22';	
						locFirstTime = false;
					} else {
						loclist+=',%22'+location+'%22';		
					}
				});
				locationDownloadList = [];
				locationMeterMeta.setWhereClause("spi:location{oslc:shortTitle in ["+loclist+"]} and spi:siteid in ["+siteQry+"]");
				MeterDownloadManager.downloadLocationMeters(resourceName, queryBase);
				MeterDownloadManager._overallProcessing.promise
				.then(function() {
					Logger.trace('[WOExtDownloadHandler.loadMeters] location meters downloaded successfully.');
					deferred.resolve();
				})
				.otherwise(function(error) {
					Logger.traceJSON('[WOExtDownloadHandler.loadMeters] Download of location meters failed!', error);
					deferred.reject(error);
				}).always(function(){
					assetMeterMeta.setWhereClause(originalAssetWhereClause);
					locationMeterMeta.setWhereClause(originalLocWhereClause);
				});
			}
			else{
				Logger.trace('[WOExtDownloadHandler.loadMeters] no locations on work orders.');
				deferred.resolve();
			}
		})
		.otherwise(function(error) {
			Logger.trace('[WOExtDownloadHandler.loadMeters] Download of asset meters failed! ', error);
			deferred.reject(error);
		}).always(function(){
			assetMeterMeta.setWhereClause(originalAssetWhereClause);
			locationMeterMeta.setWhereClause(originalLocWhereClause);
		});
		return deferred.promise;
	};
	
	var buildInWhereClause = function(attr, array) {
		var inClause = attr + '{oslc:shortTitle%20in%20[$]}';
		var list = "";
		var firstTime = true;
		array.forEach(function(key){
			if (firstTime){
				list='%22'+key+'%22';	
				firstTime = false;
			} else {
				list+=',%22'+key+'%22';		
			}
		});
		if (array.length==0){
			list = "\"\"";
		}	
		array = null;
		return inClause.replace('$', list);
	};
	
	var assetDownloadList = [];
	var locationDownloadList = [];
	var siteDownloadList = [];
	var subscribeHandle = null;	
	
	return declare(WorkOfflineHandler, {
			/**@memberOf application.handlers.WOExtDownloadHandler */
		workoffline : function(eventContext) {
			Logger.trace("WOExtDownloadHandler called!");
			var workofflinehandler = eventContext.application['platform.handlers.WorkOfflineHandler'];
			//var handlers = [loadMeters, loadDataSheetAssetLink];
			var handlers = [loadMeters];
	
			var dataSheetMeta = ResourceMetaData.getResourceMetadata("dataSheetResourceMax");
			if (dataSheetMeta)
				handlers.push(loadDataSheets);
			
			arrayUtil.forEach(handlers, function(handler) {
				if(workofflinehandler.callBackStack.indexOf(handler) == -1) {
					workofflinehandler.addOffLineCallBackHandler(handler);
				}
			});
			workofflinehandler.inherited(arguments);
			if (workofflinehandler.worklistResource){
			    subscribeHandle = topic.subscribe(PlatformConstants.WORKLIST_DATA_RECEIVED + '/' + workofflinehandler.worklistResource.getResourceName(), 
			    		this.bulidMeterFetchLists);
			}
			Logger.trace("WOExtDownloadHandler after calling super!");
		},
		
		confirmClearChanges: function(eventContext) {
			this.savedEventContext = eventContext;
			this.application.ui.show('WorkExecution.ConfirmClearChanges');
		},
		
		cancelClearChanges: function(eventContext) {
			this.savedEventContext = null;
			this.application.ui.hideCurrentDialog();
		},
		
		
		discardMyChanges: function(eventContext){
			// overrides platform.handlers.WorkOfflineHandler.discardMyChanges()
			this.application.showBusy();
			var deferred = new Deferred();
			var self = this;
			var promise = this.inherited(arguments);
			promise.then(function(arg){
				if(arg){
					var dataSheetHandler = eventContext.application['application.handlers.DataSheetHandler'];
					dataSheetHandler.undoDataSheetChanges(eventContext).then(function(){
						deferred.resolve();
					});
				}else{
					deferred.resolve();
				}
			}).otherwise(function(){
					self.application.showBusy();
					deferred.rejected();
			});
			return deferred.promise;
		},
		
		bulidMeterFetchLists : function(resourceName, data){
			if (resourceName == 'workOrder'){
				arrayUtil.forEach(data, function(record){
					var wo = record.json || record;
					var siteid = wo['siteid'];
					if (siteid && siteDownloadList.indexOf(siteid)<0){
						siteDownloadList.push(siteid);
					}

					//check if asset exists on workorder header and push to asset list
					var assetnum = wo['asset'];
					if (assetnum && assetDownloadList.indexOf(assetnum)<0){
						assetDownloadList.push(assetnum);
					}

					//check if location exists on workorder header and push to location list
					var location = wo['location'];
					if (location && locationDownloadList.indexOf(location)<0){
						locationDownloadList.push(location);
					}

					var addToLists = function(childRecord){
						var loc =  childRecord['location'];
						if (loc && locationDownloadList.indexOf(loc)<0){
							locationDownloadList.push(loc);
						}

						var asset = childRecord['assetnum'];
						if (asset && assetDownloadList.indexOf(asset)<0){
							assetDownloadList.push(asset);
						}
					};
					//check workorder tasksset and fetch all asset/locations on each task.
					var taskSet = wo.tasklist;
					if (taskSet){
						arrayUtil.forEach(taskSet, addToLists);
						taskSet = null;
					}


					//check workorder tasksset and fetch all asset/locations on each task.
					var multiAssetLocciSet =  wo.multiassetloclist;
					if (multiAssetLocciSet){
						arrayUtil.forEach(multiAssetLocciSet, addToLists);
						multiAssetLocciSet=null;
					}		
				});
			} 
			data = null;
		}
	});	
});
