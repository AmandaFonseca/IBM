/* 
 * Licensed Materials - Property of IBM
 * "Restricted Materials of IBM"
 *
 * 5725-M39
 *
 * (C) COPYRIGHT IBM CORP. 2023 All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp. 
 *
 */
 
//----------------------------------------------------------------//
// This is auto generated code. Do not modify it manually.
// Product and Version: IBM Maximo Anywhere Version 7.5
// Build: 2023-01-12 11:59:17
//----------------------------------------------------------------//
define(   "generated/application/ui/ApplicationUIBuilder", 
      [
         "dojo/_base/declare", 
         "dojo/promise/all", 
         "platform/ui/builder/_UIBuilderBase", 
         "dojo/_base/window", 
         "dojo/_base/array", 
         "dojo/io-query", 
         "platform/model/AdditionalDataManager", 
         "platform/model/AdditionalDataUIManager", 
         "platform/translation/MessageService", 
         "platform/ui/control/Application", 
         "platform/ui/control/UserInterface", 
         "platform/ui/control/Dialog", 
         "platform/ui/control/Container", 
         "platform/ui/control/Text", 
         "platform/ui/control/Button", 
         "platform/handlers/SSOHandler", 
         "platform/handlers/LoginHandler", 
         "platform/ui/control/View", 
         "platform/ui/control/Image", 
         "custom/handlers/MSLoginHandler", 
         "platform/handlers/_ApplicationHandlerBase", 
         "platform/ui/control/Queries", 
         "platform/ui/control/Query", 
         "application/handlers/AssetListHandler", 
         "platform/ui/control/Actions", 
         "platform/ui/control/Action", 
         "platform/handlers/WorkOfflineHandler", 
         "platform/ui/control/ProgressIndicator", 
         "platform/ui/control/List", 
         "platform/ui/control/SortOptions", 
         "platform/ui/control/SortOption", 
         "platform/ui/control/SortAttribute", 
         "platform/ui/control/ListItemTemplate", 
         "platform/ui/control/ListText", 
         "application/handlers/AssetListScanHandler", 
         "custom/handlers/MSAssetDetailHandler", 
         "platform/ui/control/Group", 
         "platform/ui/control/GroupItem", 
         "platform/ui/control/Footer", 
         "platform/ui/control/TextArea", 
         "platform/ui/control/ErrorIndicator", 
         "platform/ui/control/LastUpdateText", 
         "platform/handlers/AttachmentHandler", 
         "application/handlers/WOAttachmentHandler", 
         "platform/ui/control/CheckBox", 
         "application/handlers/StatusChangeHandler", 
         "application/handlers/ClassifyAssetHandler", 
         "platform/ui/control/Lookup", 
         "platform/ui/control/ReturnAttributes", 
         "platform/ui/control/ReturnAttribute", 
         "platform/ui/control/SearchAttributes", 
         "platform/ui/control/SearchAttribute", 
         "platform/handlers/PseudoOfflineModeHandler", 
         "platform/handlers/CreateQueryBaseHandler", 
         "platform/ui/control/ErrorActions", 
         "platform/handlers/LookupHandler", 
         "platform/handlers/PushNotificationDialogHandler", 
         "platform/ui/control/DateTimePicker", 
         "platform/handlers/SettingsHandler", 
         "platform/handlers/ChangePasswordHandler", 
         "platform/handlers/AdditionalDataDialogHandler", 
         "platform/ui/control/RadioButton", 
         "platform/logging/handler/LoggerReportHandler", 
         "platform/performance/handler/TimeTrackHandler", 
         "platform/handlers/DialogHandler", 
         "platform/ui/control/DurationPicker", 
         "platform/handlers/EsigHandler", 
         "platform/signature/handler/SignatureHandler", 
         "platform/geolocation/GeoLocationServiceHelper", 
         "platform/handlers/spatial/MapSitesOfflineAreas"
      ],

function(declare, all, BuilderBase, window, array, ioQuery, AdditionalDataManager, AdditionalDataUIManager, MessageService, Application, UserInterface, Dialog, Container, Text, Button, SSOHandler, LoginHandler, View, Image, MSLoginHandler, _ApplicationHandlerBase, Queries, Query, AssetListHandler, Actions, Action, WorkOfflineHandler, ProgressIndicator, List, SortOptions, SortOption, SortAttribute, ListItemTemplate, ListText, AssetListScanHandler, MSAssetDetailHandler, Group, GroupItem, Footer, TextArea, ErrorIndicator, LastUpdateText, AttachmentHandler, WOAttachmentHandler, CheckBox, StatusChangeHandler, ClassifyAssetHandler, Lookup, ReturnAttributes, ReturnAttribute, SearchAttributes, SearchAttribute, PseudoOfflineModeHandler, CreateQueryBaseHandler, ErrorActions, LookupHandler, PushNotificationDialogHandler, DateTimePicker, SettingsHandler, ChangePasswordHandler, AdditionalDataDialogHandler, RadioButton, LoggerReportHandler, TimeTrackHandler, DialogHandler, DurationPicker, EsigHandler, SignatureHandler, GeoLocationServiceHelper, MapSitesOfflineAreas) {
      return declare("generated.application.ui.ApplicationUIBuilder", BuilderBase, {

         build : function() {
            console.log('Creating App');

            MessageService.init('artifact');


            var app001 = new Application({
               'logLevel' : 0,
               'xsi:noNamespaceSchemaLocation' : '..\/..\/..\/build\/app.xsd',
               'xmlns:xsi' : 'http:\/\/www.w3.org\/2001\/XMLSchema-instance',
               'id' : 'SGZArbo',
               'blindQuerySupport' : 'false',
               'version' : '20190120_031802-0500',
               'requiredRole' : 'ANYWHERE_ASSET_MANAGER',
            });
            app001.setFeatures({
            'update.artifact.timestamps' : false,
            'esig.enabled' : true,
            'gps.tracking.enable' : true,
            'gps.enabled' : true,
            'enableDataEncryption' : true,
            'barcode.enabled' : true,
            'attachments.enabled' : true,
            'globalization.use.mock' : false,
            'run.bvt.scripts' : false,
            'build.update.check.enabled' : false,
            'pushnotification.enabled' : false,
            'map.enabled' : true,

            });

            var ui001 = new UserInterface({
               'artifactId' : 'ui',
               'id' : 'aw27ff46b0',
            });
            app001.addChild( ui001 );
            AdditionalDataManager._setAdditionalDataUIManager(new AdditionalDataUIManager(ui001));

            var dialog001 = new Dialog({
               'id' : 'Platform.SSOError',
               'label' : MessageService.createStaticMessage('SSO Login Error'),
            });
            ui001.addChild( dialog001 );


            var container001 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'resource' : 'SSODialogResource',
               'artifactId' : 'Platform.SSOError_SSODialogResource_container_0',
               'id' : 'aw8b213d94',
            });
            dialog001.addChild( container001 );


            var text001 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.SSOError_SSODialogResource_container_0_ErrorusingSSOLogi',
               'id' : 'awa51c0f06',
               'value' : MessageService.createStaticMessage('Error using SSO Login'),
            });
            container001.addChild( text001 );


            var text002 = new Text({
               'resourceAttribute' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.SSOError_SSODialogResource_container_0_errorMsg',
               'id' : 'awf2a9265',
            });
            container001.addChild( text002 );


            var container002 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.SSOError_container_0',
               'id' : 'awbf273d01',
            });
            dialog001.addChild( container002 );


            var button001 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.SSOError_Retry_button',
               'id' : 'aw7e9aa474',
               'label' : MessageService.createStaticMessage('Retry'),
            });
            var eventHandlers001 = [
               {
                     'method' : 'performSSOLogin',
                     'artifactId' : 'Platform.SSOError_Retry_button_eventHandlers_click_performSSOLogin',
                     'id' : 'aw18912c1f',
                     'event' : 'click',
                     'class' : 'platform.handlers.SSOHandler',
               }
            ];
            button001.eventHandlers = eventHandlers001;
            container002.addChild( button001 );


            var dialog002 = new Dialog({
               'id' : 'Platform.SSOUserNameError',
               'label' : MessageService.createStaticMessage('SSO User Name Error'),
            });
            ui001.addChild( dialog002 );


            var container003 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'resource' : 'SSODialogResource',
               'artifactId' : 'Platform.SSOUserNameError_SSODialogResource_container_0',
               'id' : 'awe49a2936',
            });
            dialog002.addChild( container003 );


            var text003 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.SSOUserNameError_SSODialogResource_container_0_Errorretrievingthe',
               'id' : 'aw1211d176',
               'value' : MessageService.createStaticMessage('Error retrieving the user name from the device'),
            });
            container003.addChild( text003 );


            var text004 = new Text({
               'resourceAttribute' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.SSOUserNameError_SSODialogResource_container_0_errorMsg',
               'id' : 'awe659a10b',
            });
            container003.addChild( text004 );


            var container004 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.SSOUserNameError_container_0',
               'id' : 'awd7539907',
            });
            dialog002.addChild( container004 );


            var button002 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.SSOUserNameError_Retry_button',
               'id' : 'aw979175e5',
               'label' : MessageService.createStaticMessage('Retry'),
            });
            var eventHandlers002 = [
               {
                     'method' : 'performSSOLogin',
                     'artifactId' : 'Platform.SSOUserNameError_Retry_button_eventHandlers_click_performSSOLogin',
                     'id' : 'aw74e4917c',
                     'event' : 'click',
                     'class' : 'platform.handlers.SSOHandler',
               }
            ];
            button002.eventHandlers = eventHandlers002;
            container004.addChild( button002 );


            var dialog003 = new Dialog({
               'id' : 'Platform.DownloadError',
               'label' : MessageService.createStaticMessage('System Data Download Error'),
            });
            ui001.addChild( dialog003 );


            var container005 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DownloadError.container',
               'id' : 'awb89e88b',
            });
            dialog003.addChild( container005 );


            var text005 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.DownloadError.text',
               'id' : 'aw63a3744e',
               'value' : MessageService.createStaticMessage('Error downloading System Data'),
            });
            container005.addChild( text005 );


            var container006 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DownloadError.container2',
               'id' : 'aw60b46d4d',
            });
            dialog003.addChild( container006 );


            var button003 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DownloadError.button',
               'id' : 'awcf9d5479',
               'label' : MessageService.createStaticMessage('Retry'),
            });
            var eventHandlers003 = [
               {
                     'method' : 'retrySystemDownload',
                     'artifactId' : 'Platform.DownloadError.eventHandler',
                     'id' : 'awa24338f8',
                     'event' : 'click',
                     'class' : 'platform.handlers.LoginHandler',
               }
            ];
            button003.eventHandlers = eventHandlers003;
            container006.addChild( button003 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'platform.LoginView', false);
               trackTimer.startTracking();
            }

            var view001 = new View({
               'cssClass' : 'mainLogin',
               'resource' : 'PlatformLoginResource',
               'showHeader' : false,
               'id' : 'platform.LoginView',
            });
            ui001.addChild( view001 );

            var requiredResources001 = {
               'PlatformLongPressResource' : {
                  'artifactId' : 'platform.LoginView_PlatformLongPressResource',
                  'id' : 'aw9dc81534',
               },
               'PlatformMapMarkerInfo' : {
                  'enableFeatureByProperty' : 'map.enabled',
                  'artifactId' : 'platform.LoginView_PlatformMapMarkerInfo',
                  'id' : 'aw9a9bc965',
               },
               'PlatformDirectionSteps' : {
                  'enableFeatureByProperty' : 'map.enabled',
                  'artifactId' : 'platform.LoginView_PlatformDirectionSteps',
                  'id' : 'aw3d3ba64e',
               },
               'PlatformProgressResource' : {
                  'artifactId' : 'platform.LoginView_PlatformProgressResource',
                  'id' : 'aw80cf2a6f',
               },
               'PlatformChangePasswordForm' : {
                  'artifactId' : 'platform.LoginView_PlatformChangePasswordForm',
                  'id' : 'aw950ff29',
               },
            };
            view001.addRequiredResources( requiredResources001 );

            var container007 = new Container({
               'cssClass' : 'loginForm',
               'artifactId' : 'platform.LoginView_container_0',
               'id' : 'aw1429aadd',
            });
            view001.addChild( container007 );


            var image001 = new Image({
               'image' : '..\/..\/..\/..\/..\/..\/images\/mdpi\/Logo_SGZArbo_H.svg',
               'artifactId' : 'platform.LoginView_image_0',
               'id' : 'aw9576ccdf',
            });
            container007.addChild( image001 );


            var text006 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'platform.LoginView_container_0_errorMsg',
               'id' : 'aw87817020',
            });
            container007.addChild( text006 );


            var text007 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'username',
               'cssClass' : 'loginUsername',
               'editable' : true,
               'artifactId' : 'platform.LoginView_container_0_username',
               'id' : 'awca3922ff',
               'placeHolder' : MessageService.createStaticMessage('Username'),
            });
            container007.addChild( text007 );


            var text008 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'password',
               'cssClass' : 'loginPassword',
               'editable' : true,
               'artifactId' : 'platform.LoginView_container_0_password',
               'id' : 'aw7a5625d',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Password'),
            });
            container007.addChild( text008 );


            var text009 = new Text({
               'labelCss' : 'loginLink',
               'artifactId' : 'esqueci_senha_link',
               'id' : 'awea9a157e',
               'label' : MessageService.createStaticMessage('Esqueceu a Senha?'),
            });
            container007.addChild( text009 );

            var eventHandlers004 = [
               {
                     'method' : 'resetLinkClicked',
                     'artifactId' : 'esqueci_senha_link_eventHandlers_click',
                     'id' : 'aw5b097912',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSLoginHandler',
               }
            ];
            text009.eventHandlers = eventHandlers004;

            var button004 = new Button({
               'cssClass' : 'loginBtn',
               'artifactId' : 'platform.LoginView_LogIn_button',
               'id' : 'awe0510eac',
               'label' : MessageService.createStaticMessage('Sign In'),
               'primary' : 'true',
            });
            var eventHandlers005 = [
               {
                     'method' : 'loginClickHandler',
                     'artifactId' : 'platform.LoginView_LogIn_button_eventHandlers_click_loginClickHandler',
                     'id' : 'awa8e7b081',
                     'event' : 'click',
                     'class' : 'platform.handlers.LoginHandler',
               }
            ];
            button004.eventHandlers = eventHandlers005;
            container007.addChild( button004 );


            var text010 = new Text({
               'labelCss' : 'loginLink',
               'artifactId' : 'manuais_link',
               'id' : 'awb1a98a3',
               'label' : MessageService.createStaticMessage('Manual do Aplicativo'),
            });
            container007.addChild( text010 );

            var eventHandlers006 = [
               {
                     'method' : 'acesso_manuaisClicked',
                     'artifactId' : 'manuais_link_eventHandlers_click',
                     'id' : 'aw1e09cdeb',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSLoginHandler',
               }
            ];
            text010.eventHandlers = eventHandlers006;

            var image002 = new Image({
               'image' : 'IBMLogo.svg',
               'cssClass' : 'IBMLogo',
               'artifactId' : 'platform.LoginView_image_1',
               'id' : 'awe271fc49',
            });
            container007.addChild( image002 );


            var text011 = new Text({
               'labelCss' : 'loginLink',
               'artifactId' : 'PrivacyPolicy_link',
               'id' : 'aw8e500c53',
               'label' : MessageService.createStaticMessage('Privacy Policy'),
            });
            container007.addChild( text011 );

            var eventHandlers007 = [
               {
                     'method' : 'privacyPolicyLinkClicked',
                     'artifactId' : 'PrivacyPolicy_link_eventHandlers_click',
                     'id' : 'aw3c2baacc',
                     'event' : 'click',
                     'class' : 'platform.handlers.LoginHandler',
               }
            ];
            text011.eventHandlers = eventHandlers007;

            var text012 = new Text({
               'labelCss' : 'loginLink',
               'artifactId' : 'PrivacyPolicy_versao',
               'id' : 'aw17552e2f',
               'label' : MessageService.createStaticMessage('v7.6.4:1001232000D'),
            });
            container007.addChild( text012 );

            var eventHandlers008 = [
               {
                     'method' : 'initializeLogin',
                     'artifactId' : 'platform.LoginView_eventHandlers_show_initializeLogin',
                     'id' : 'aw9137190b',
                     'event' : 'show',
                     'class' : 'platform.handlers.LoginHandler',
               },
               {
                     'method' : 'changeQueryBase',
                     'artifactId' : 'platform.LoginView_eventHandlers_initialize_changeQueryBase',
                     'id' : 'aw5f76d673',
                     'event' : 'initialize',
                     'class' : 'platform.handlers._ApplicationHandlerBase',
               }
            ];
            view001.eventHandlers = eventHandlers008;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.AssetListView', false);
               trackTimer.startTracking();
            }

            var view002 = new View({
               'saveonshow' : true,
               'showBackButton' : 'false',
               'id' : 'SGZArbo.AssetListView',
               'label' : MessageService.createStaticMessage('Assets'),
            });
            ui001.addChild( view002 );


            var queries001 = new Queries({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.AssetListView_Asset_queries',
               'id' : 'aw8f4d4b89',
            });
            view002.addChild( queries001 );


            var query001 = new Query({
               'artifactId' : 'SGZArbo.AssetListView_getMyAssets',
               'id' : 'aw14dea348',
               'label' : MessageService.createStaticMessage('Gerir \u00C1rvores'),
               'queryBase' : 'Ativos_arboreos',
            });
            queries001.addChild( query001 );


            var query002 = new Query({
               'system' : 'true',
               'artifactId' : 'SGZArbo.AssetListView___errored__',
               'id' : 'aw2c29e6f1',
               'label' : MessageService.createStaticMessage('Records with Errors'),
               'queryBase' : '__errored__',
            });
            queries001.addChild( query002 );

            var eventHandlers009 = [
               {
                     'method' : 'hideShowErrorMenu',
                     'artifactId' : 'SGZArbo.AssetListView___errored___eventHandlers_render_hideShowErrorMenu',
                     'id' : 'awef12c912',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetListHandler',
               }
            ];
            query002.eventHandlers = eventHandlers009;

            var query003 = new Query({
               'system' : 'true',
               'artifactId' : 'SGZArbo.AssetListView___created__',
               'id' : 'aw4800a9eb',
               'label' : MessageService.createStaticMessage('\u00C1rvores Criadas Localmente'),
               'queryBase' : '__created__',
            });
            queries001.addChild( query003 );


            var query004 = new Query({
               'system' : 'true',
               'artifactId' : 'SGZArbo.AssetListView___search_result__',
               'id' : 'awda912b71',
               'label' : MessageService.createStaticMessage('Search Results'),
               'queryBase' : '__search_result__',
            });
            queries001.addChild( query004 );

            var eventHandlers010 = [
               {
                     'method' : 'hideShowSearchedMenu',
                     'artifactId' : 'Asset.AssetListView___search_result___eventHandlers_render_hideShowSearchedMenu',
                     'id' : 'aw6eab3b57',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetListHandler',
               }
            ];
            query004.eventHandlers = eventHandlers010;
            var requiredResources002 = {
               'asset' : {
                  'reload' : false,
                  'artifactId' : 'Asset.AssetItemsView_Asset',
                  'id' : 'awdee99e87',
               },
               'PlatformGeolocationLocalStore' : {
                  'artifactId' : 'WorkExecution.WorkItemsView_gpslocalstore_x',
                  'id' : 'aw116043cc',
               },
            };
            view002.addRequiredResources( requiredResources002 );

            var actions001 = new Actions({
               'artifactId' : 'SGZArbo.AssetListView_actions',
               'id' : 'awdd7f057b',
            });
            view002.addChild( actions001 );


            var action001 = new Action({
               'overflow' : true,
               'artifactId' : 'SGZArbo.AssetListView_DownloadWorkList_action',
               'id' : 'awf3639735',
               'label' : MessageService.createStaticMessage('Download Asset List'),
            });
            actions001.addChild( action001 );

            var eventHandlers011 = [
               {
                     'method' : 'workoffline',
                     'artifactId' : 'Asset.AssetListView_DownloadWorkList_action_eventHandlers_click_workoffline',
                     'id' : 'awb9be5118',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               },
               {
                     'method' : 'enableDisableMenu',
                     'artifactId' : 'Asset.AssetListView_DownloadWorkList_action_eventHandlers_render_enableDisableMenu',
                     'id' : 'aw2fc1bfdb',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action001.eventHandlers = eventHandlers011;

            var action002 = new Action({
               'overflow' : true,
               'artifactId' : 'SGZArbo.AssetListView_SynchronizeData_action',
               'id' : 'awceb42e0a',
               'label' : MessageService.createStaticMessage('Synchronize Data'),
            });
            actions001.addChild( action002 );

            var eventHandlers012 = [
               {
                     'method' : 'sync',
                     'artifactId' : 'SGZArbo.AssetListView_SynchronizeData_action_eventHandlers_click_sync',
                     'id' : 'awb32881e3',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               },
               {
                     'method' : 'enableDisableSyncMenu',
                     'artifactId' : 'SGZArbo.AssetListView_SynchronizeData_action_eventHandlers_render_enableDisableMenu',
                     'id' : 'aw14f85b40',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action002.eventHandlers = eventHandlers012;

            var action003 = new Action({
               'image' : '\/images\/header_add.png',
               'transitionTo' : 'SGZArbo.NewAssetView',
               'artifactId' : 'SGZArbo.AssetListView_CreateAsset_action',
               'id' : 'awfc9ed7ed',
               'label' : MessageService.createStaticMessage('Create Asset'),
            });
            actions001.addChild( action003 );


            var action004 = new Action({
               'overflow' : true,
               'transitionTo' : 'AssetDataManager.SearchAssetView',
               'artifactId' : 'AssetDataManager.AssetListView_Search_action',
               'id' : 'aw44e6260a',
               'label' : MessageService.createStaticMessage('Search Tree'),
            });
            actions001.addChild( action004 );


            var progressIndicator001 = new ProgressIndicator({
               'artifactId' : 'Asset.AssetListView_0',
               'id' : 'awe831afe3',
            });
            view002.addChild( progressIndicator001 );


            var eventHandlers013 = [
               {
                     'method' : 'keepWorkListResource',
                     'artifactId' : 'SGZArbo.AssetListView_asset_list_eventHandlers_render_keepWorkListResource',
                     'id' : 'awbd495ccc',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];

            var sortOptions001 = new SortOptions({
               'artifactId' : 'SGZArbo.AssetListView_asset_list_sortOptions',
               'id' : 'aw3eac2a4b',
            });

            var sortOption001 = new SortOption({
               'artifactId' : 'SGZArbo.AssetListView_sortOption_ScheduledStart',
               'id' : 'aw922dd6fa',
               'label' : MessageService.createStaticMessage('Asset'),
            });
            sortOptions001.addChild( sortOption001 );


            var sortAttribute001 = new SortAttribute({
               'name' : 'assetnum',
               'artifactId' : 'SGZArbo.AssetListView_ScheduledStart_sortAttribute_starttime',
               'id' : 'aw92f2e580',
               'direction' : 'asc',
            });
            sortOption001.addChild( sortAttribute001 );


            var sortOption002 = new SortOption({
               'artifactId' : 'SGZArbo.WorkItemsView_sortOption_Status',
               'id' : 'aw7af0b83f',
               'label' : MessageService.createStaticMessage('Location'),
            });
            sortOptions001.addChild( sortOption002 );


            var sortAttribute002 = new SortAttribute({
               'name' : 'location',
               'artifactId' : 'SGZArbo.AssetListView_Status_sortAttribute_statusdesc',
               'id' : 'aw79eff04d',
               'direction' : 'asc',
            });
            sortOption002.addChild( sortAttribute002 );


            var sortOption003 = new SortOption({
               'artifactId' : 'SGZArbo.WorkItemsView_sortOption_asset',
               'id' : 'awe8c25019',
               'label' : MessageService.createStaticMessage('Status'),
            });
            sortOptions001.addChild( sortOption003 );


            var sortAttribute003 = new SortAttribute({
               'name' : 'status',
               'artifactId' : 'SGZArbo.AssetListView_asset_sortAttribute_wonum',
               'id' : 'aw772134f5',
               'direction' : 'asc',
            });
            sortOption003.addChild( sortAttribute003 );



            var listItemTemplate001 = new ListItemTemplate({
               'layout' : 'WorkListItem',
               'artifactId' : 'SGZArbo.AssetListView_asset_listItemTemplate_WorkListItem',
               'id' : 'awda069231',
            });

            var listtext001 = new ListText({
               'resourceAttribute' : 'assetnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'SGZArbo.AssetListView_asset_WorkListItem_assetnum',
               'id' : 'awe82f3e72',
            });
            listItemTemplate001.addChild( listtext001 );


            var listtext002 = new ListText({
               'resourceAttribute' : 'ms_staddrnumber',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetListView_asset_WorkListItem_ms_staddrnumber',
               'id' : 'aweffd334',
            });
            listItemTemplate001.addChild( listtext002 );


            var listtext003 = new ListText({
               'resourceAttribute' : 'ms_addressline',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'SGZArbo.AssetListView_asset_WorkListItem_description',
               'id' : 'aw4be54ef5',
            });
            listItemTemplate001.addChild( listtext003 );


            var listtext004 = new ListText({
               'resourceAttribute' : 'statusdesc',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'SGZArbo.AssetListView_asset_WorkListItem_statusdesc',
               'id' : 'aw408f9a3c',
            });
            listItemTemplate001.addChild( listtext004 );



            var list001 = new List({
               'recordLabel' : MessageService.createDynamicMessage('Asset {0}', 'application.handlers.AssetListHandler', 'resolveAssetIdLabel'),
               'resource' : 'asset',
               'transitionTo' : 'SGZArbo.AssetDetailView',
               'sortOptions' : sortOptions001,
               'listItemTemplate' : listItemTemplate001,
               'artifactId' : 'SGZArbo.AssetListView_Asset_list',
               'eventHandlers' : eventHandlers013,
               'id' : 'awdd86af42',
               'queryBase' : 'getMyAssets',
               'resolverFunction' : 'resolveAssetIdLabel',
               'displayPageSize' : '20',
               'resolverClass' : 'application.handlers.AssetListHandler',
            });
            view002.addChild( list001 );

            var eventHandlers014 = [
               {
                     'method' : 'registerAsScanListener',
                     'artifactId' : 'SGZArbo.AssetListView_eventHandlers_render_registerAsScanListener',
                     'id' : 'aw2c5cbb65',
                     'event' : 'show',
                     'class' : 'application.handlers.AssetListScanHandler',
               },
               {
                     'method' : 'showBusyList',
                     'artifactId' : 'SGZArbo.AssetListView_eventHandlers_render_showBusyList',
                     'id' : 'awb80875b3',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'setCheckqueryBaseViewContext',
                     'artifactId' : 'WorkExecution.WorkDetailView_CaptureGPS_action_eventHandlers_setCheckqueryBaseViewContext',
                     'id' : 'awafbcce07',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'updatePersonGPSPosition',
                     'artifactId' : 'SGZArbo.AssetDetailView_container_0b_eventHandlers_render_updatePersonGPSPosition',
                     'id' : 'aw2b61b0e1',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            view002.eventHandlers = eventHandlers014;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.SearchAssetView', false);
               trackTimer.startTracking();
            }

            var view003 = new View({
               'id' : 'AssetDataManager.SearchAssetView',
               'label' : MessageService.createStaticMessage('Search Tree'),
            });
            ui001.addChild( view003 );

            var requiredResources003 = {
               'searchAsset' : {
                  'artifactId' : 'AssetDataManager.SearchAssetView_searchasset',
                  'id' : 'awdf02f811',
               },
               'asset' : {
                  'artifactId' : 'AssetDataManager.SearchAssetView_asset',
                  'id' : 'aw793a6d7b',
               },
               'domainAssetStatus' : {
                  'artifactId' : 'AssetDataManager.SearchAssetView_domainAssetstatus',
                  'id' : 'aw28bab660',
               },
               'statusChangeResource' : {
                  'artifactId' : 'AssetDataManager.SearchAssetView_statusChangeResource',
                  'id' : 'awf117623',
               },
            };
            view003.addRequiredResources( requiredResources003 );

            var container008 = new Container({
               'resource' : 'searchAsset',
               'artifactId' : 'AssetDataManager.SearchAssetView_searchAsset_container_0',
               'id' : 'aw414138c8',
            });
            view003.addChild( container008 );


            var group001 = new Group({
               'artifactId' : 'AssetDataManager.SearchAssetView_group_0',
               'id' : 'awff67c475',
            });
            container008.addChild( group001 );


            var groupitem001 = new GroupItem({
               'artifactId' : 'AssetDataManager.SearchAssetView_searchAsset_groupitem_0',
               'id' : 'aw49aa9db',
            });
            group001.addChild( groupitem001 );


            var text013 = new Text({
               'resourceAttribute' : 'assetnum',
               'editable' : true,
               'artifactId' : 'AssetDataManager.SearchAssetView_searchAsset_groupitem_0_assetnum_asset',
               'id' : 'awe661eddc',
               'label' : MessageService.createStaticMessage('Asset'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem001.addChild( text013 );


            var footer001 = new Footer({
               'artifactId' : 'AssetDataManager.SearchAssetView_footer',
               'id' : 'aw4740250f',
            });
            view003.addChild( footer001 );


            var button005 = new Button({
               'artifactId' : 'AssetDataManager.SearchAssetView_Clear_button',
               'id' : 'aw1ca14094',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers015 = [
               {
                     'method' : 'clearSearchFields',
                     'artifactId' : 'AssetDataManager.SearchAssetView_Clear_button_eventHandlers_click_clearSearchFields',
                     'id' : 'awe368ece',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button005.eventHandlers = eventHandlers015;
            footer001.addChild( button005 );


            var button006 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'AssetDataManager.SearchAssetView_Search_button',
               'id' : 'awd442e6a',
               'label' : MessageService.createStaticMessage('Search'),
               'primary' : 'true',
            });
            var eventHandlers016 = [
               {
                     'method' : 'setSearchQuery',
                     'artifactId' : 'AssetDataManager.SearchAssetView_Search_button_eventHandlers_click_setSearchQuery',
                     'id' : 'aw4f519455',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button006.eventHandlers = eventHandlers016;
            footer001.addChild( button006 );

            var eventHandlers017 = [
               {
                     'method' : 'initSearchData',
                     'artifactId' : 'AssetDataManager.SearchAssetView_eventHandlers_initialize_initSearchData',
                     'id' : 'aw9c4b55f7',
                     'event' : 'initialize',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'showSearch',
                     'artifactId' : 'AssetDataManager.SearchAssetView_eventHandlers_show_showSearch',
                     'id' : 'aw450d7520',
                     'event' : 'show',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'hideSearch',
                     'artifactId' : 'AssetDataManager.SearchAssetView_eventHandlers_hide_hideSearch',
                     'id' : 'aw20609eca',
                     'event' : 'hide',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'discardSummaryView',
                     'artifactId' : 'AssetDataManager.SearchAssetView_eventHandlers_cleanup_discardSummaryView',
                     'id' : 'aw916bff',
                     'event' : 'cleanup',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            view003.eventHandlers = eventHandlers017;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.Section.four.SpecificationsView.laudo', false);
               trackTimer.startTracking();
            }

            var view004 = new View({
               'id' : 'SGZArbo.Section.four.SpecificationsView.laudo',
               'label' : MessageService.createStaticMessage('Caracter\u00EDsticas Dendom\u00E9tricas'),
            });
            ui001.addChild( view004 );

            var requiredResources004 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.Section.four.SpecificationsView.laudo_asset',
                  'id' : 'awfc9f6e02',
                  'related' : {
                     'MSArbo' : {
                        'artifactId' : 'SGZArbo.Section.four.SpecificationsView.laudo_msarbo',
                        'id' : 'aw69de324b',
                     },
                  },
               },
            };
            view004.addRequiredResources( requiredResources004 );

            var container009 = new Container({
               'artifactId' : 'TechReportContainer2',
               'id' : 'aw1e3e4b33',
            });
            view004.addChild( container009 );


            var group002 = new Group({
               'artifactId' : 'TechReportContainer2.group_0',
               'id' : 'aw2543e2da',
            });
            container009.addChild( group002 );


            var groupitem002 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'SGZArbo.Section.One.TechReportView',
               'artifactId' : 'SGZArbo.AssetTechReportView.TechReportContainer2_groupitem_WorkExecution.SpecificationsView_1',
               'id' : 'aw7ab2cd5e',
            });
            group002.addChild( groupitem002 );


            var text014 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetTechReportView.TechReportContainer2_groupitem_WorkExecution.SpecificationsView_1_Specifications',
               'id' : 'aw52f2ff5',
               'value' : MessageService.createStaticMessage('Raiz'),
            });
            groupitem002.addChild( text014 );


            var groupitem003 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'SGZArbo.Section.Three.TechReportView',
               'artifactId' : 'SGZArbo.AssetTechReportView.TechReportContainer2_groupitem_WorkExecution.SpecificationsView_3',
               'id' : 'aw94bcac72',
            });
            group002.addChild( groupitem003 );


            var text015 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetTechReportView.TechReportContainer2_groupitem_WorkExecution.SpecificationsView_3_Specifications',
               'id' : 'aw828f0a96',
               'value' : MessageService.createStaticMessage('Colo'),
            });
            groupitem003.addChild( text015 );


            var groupitem004 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'SGZArbo.Section.Four.TechReportView',
               'artifactId' : 'SGZArbo.AssetTechReportView.TechReportContainer2_groupitem_WorkExecution.SpecificationsView_4',
               'id' : 'awad839d1',
            });
            group002.addChild( groupitem004 );


            var text016 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetTechReportView.TechReportContainer2_groupitem_WorkExecution.SpecificationsView_4_Specifications',
               'id' : 'aw7f76f2e3',
               'value' : MessageService.createStaticMessage('Tronco'),
            });
            groupitem004.addChild( text016 );


            var groupitem005 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE',
               'artifactId' : 'SGZArbo.AssetTechReportView.TechReportContainer2_groupitem_WorkExecution.SpecificationsView_5',
               'id' : 'aw7ddf0947',
            });
            group002.addChild( groupitem005 );


            var text017 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetTechReportView.TechReportContainer2_groupitem_WorkExecution.SpecificationsView_5_Specifications',
               'id' : 'awd11e6372',
               'value' : MessageService.createStaticMessage('Copa'),
            });
            groupitem005.addChild( text017 );

            var eventHandlers018 = [
               {
                     'method' : 'hideTechReportContainer',
                     'artifactId' : 'SGZArbo.AssetTechReportView.TechReportContainer2_container_2_eventHandlers_render_hideShowContainer',
                     'id' : 'aw813ef939',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            container009.eventHandlers = eventHandlers018;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.AssetDetailView', false);
               trackTimer.startTracking();
            }

            var view005 = new View({
               'resource' : 'asset',
               'allowDrillDown' : 'true',
               'id' : 'SGZArbo.AssetDetailView',
               'label' : MessageService.createStaticMessage('Asset Details'),
            });
            ui001.addChild( view005 );

            var requiredResources005 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.AssetDetailView_asset',
                  'id' : 'aw4be3b1d4',
                  'related' : {
                     'attachments' : {
                        'reload' : true,
                        'artifactId' : 'SGZArbo.AssetDetailView_asset_attachments',
                        'id' : 'aw58d4cc50',
                     },
                     'assetSpec' : {
                        'reload' : true,
                        'artifactId' : 'SGZArbo.AssetDetailView_asset_assetSpecs',
                        'id' : 'aw689aaeb3',
                     },
                  },
               },
               'assetattrtypes' : {
                  'artifactId' : 'SGZArbo.AssetDetailView_assetattrtypes',
                  'id' : 'aw40b4b8d5',
               },
               'classstructure' : {
                  'artifactId' : 'SGZArbo.AssetDetailView_classstructure',
                  'id' : 'aw5dc46613',
               },
               'PlatformGeolocationLocalStore' : {
                  'artifactId' : 'SGZArbo.AssetDetailView_gpslocalstore',
                  'id' : 'awee9999e6',
               },
               'asset' : {
                  'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_asset_two',
                  'id' : 'awffe2dca6',
                  'related' : {
                     'MSArbo' : {
                        'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_msarbo_two',
                        'id' : 'aw355e54e2',
                     },
                  },
               },
            };
            view005.addRequiredResources( requiredResources005 );

            var actions002 = new Actions({
               'artifactId' : 'SGZArbo.AssetDetailView_actions',
               'id' : 'awc1ca9110',
            });
            view005.addChild( actions002 );


            var container010 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.AssetDetailView_SGZArbo_container_0',
               'id' : 'aw70a7509e',
            });
            view005.addChild( container010 );


            var group003 = new Group({
               'artifactId' : 'SGZArbo.AssetDetailView_group_0',
               'id' : 'aw599dc875',
            });
            container010.addChild( group003 );


            var groupitem006 = new GroupItem({
               'layout' : 'SGZArboDetailsLayout',
               'artifactId' : 'SGZArbo.AssetDetailView_asset_groupitem_SGZArbo.endereco',
               'id' : 'awc0bef64d',
            });
            group003.addChild( groupitem006 );


            var text018 = new Text({
               'resourceAttribute' : 'ms_addressline',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'logradouro',
               'artifactId' : 'SGZArbo.AssetDetailView_asset_groupitem_SGZArbo.logradouro',
               'id' : 'awb409892c',
               'label' : MessageService.createStaticMessage('Logradouro'),
               'required' : true,
            });
            groupitem006.addChild( text018 );


            var groupitem007 = new GroupItem({
               'layout' : 'SGZArboDetailsLayout',
               'artifactId' : 'SGZArbo.AssetDetailView_asset_groupitem_SGZArbo.enderecodetails',
               'id' : 'aw4d8bbd44',
            });
            group003.addChild( groupitem007 );


            var text019 = new Text({
               'resourceAttribute' : 'ms_staddrnumber',
               'editable' : true,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'numero',
               'artifactId' : 'SGZArbo.AssetDetailView_asset_groupitem_SGZArbo.numero',
               'id' : 'awc40f974e',
               'label' : MessageService.createStaticMessage('N\u00FAmero'),
               'required' : true,
            });
            groupitem007.addChild( text019 );


            var text020 = new Text({
               'resourceAttribute' : 'ms_loctype',
               'lookup' : 'SGZArbo.classArboLookupTABLE',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'numero',
               'artifactId' : 'SGZArbo.AssetDetailView_asset_groupitem_SGZArbo.ms_loctype',
               'id' : 'awa43de32a',
               'label' : MessageService.createStaticMessage('Tipo de Local'),
               'required' : false,
            });
            groupitem007.addChild( text020 );

            var eventHandlers019 = [
               {
                     'method' : 'locationType',
                     'artifactId' : 'SGZArbo.AssetDetailView_container_2_eventHandlers_render_hideDeadButton_location_type',
                     'id' : 'awd20a02ed',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            text020.eventHandlers = eventHandlers019;

            var text021 = new Text({
               'resourceAttribute' : 'siteid',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'sub',
               'artifactId' : 'SGZArbo.AssetDetailView_asset_groupitem_SGZArbo.subprefeitura',
               'id' : 'aw777658e7',
               'label' : MessageService.createStaticMessage('Subprefeitura'),
            });
            groupitem007.addChild( text021 );


            var groupitem008 = new GroupItem({
               'artifactId' : 'SGZArbo.AssetTechReportView_referencia',
               'id' : 'awf6bd282d',
            });
            group003.addChild( groupitem008 );


            var textarea001 = new TextArea({
               'resourceAttribute' : 'ms_addressline2',
               'editable' : true,
               'artifactId' : 'SGZArbo.AssetTechReportView_asset_groupitem_SGZArbo.referencia',
               'id' : 'awdc9eac68',
               'label' : MessageService.createStaticMessage('Refer\u00EAncia'),
            });
            groupitem008.addChild( textarea001 );


            var groupitem009 = new GroupItem({
               'layout' : 'SGZArboDetailsLayout',
               'artifactId' : 'SGZArbo.AssetDetailView_asset_groupitem_SGZArbo.deadtree',
               'id' : 'awe933be9b',
            });
            group003.addChild( groupitem009 );


            var button007 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'layoutInsertAt' : 'logradouro',
               'artifactId' : 'SGZArbo.AssetDetailView_asset_groupitem_SGZArbo.deadtree_button',
               'id' : 'aw43ccd799',
               'label' : MessageService.createStaticMessage('\u00C1rvore Morta?'),
            });
            var eventHandlers020 = [
               {
                     'method' : 'hideDeadButton',
                     'artifactId' : 'SGZArbo.AssetDetailView_container_2_eventHandlers_render_hideDeadButton',
                     'id' : 'aw552af05d',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'setDeadTree',
                     'artifactId' : 'SGZArbo.AssetDetailView_asset_button_eventHandlers_click_setDeadTree',
                     'id' : 'aw17901494',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button007.eventHandlers = eventHandlers020;
            groupitem009.addChild( button007 );


            var groupitem010 = new GroupItem({
               'artifactId' : 'SGZArbo.AssetDetailView_asset_groupitem_SGZArbo.deadtreeindicator',
               'id' : 'awf2487040',
            });
            group003.addChild( groupitem010 );


            var text022 = new Text({
               'editable' : false,
               'labelCss' : 'indicateLabel',
               'layoutInsertAt' : 'logradouro',
               'artifactId' : 'SGZArbo.AssetDetailView_asset_groupitem_SGZArbo.deadtreeindicator_text',
               'id' : 'awd61704e',
               'label' : MessageService.createStaticMessage('\u00C1rvore Morta Selecionada.'),
            });
            groupitem010.addChild( text022 );

            var eventHandlers021 = [
               {
                     'method' : 'hideDeadIndicator',
                     'artifactId' : 'SGZArbo.AssetDetailView_asset_groupitem_SGZArbo.deadtreeindicator_render_hideDeadButton',
                     'id' : 'aw4708dde8',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            groupitem010.eventHandlers = eventHandlers021;

            var container011 = new Container({
               'artifactId' : 'SGZArbo.AssetDetailView_container_2',
               'id' : 'awb7c9913e',
            });
            view005.addChild( container011 );


            var group004 = new Group({
               'artifactId' : 'SGZArbo.AssetDetailView_container_2_group_1',
               'id' : 'awd3a8dede',
            });
            container011.addChild( group004 );


            var groupitem011 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'SGZArbo.Section.One.SpecificationsView',
               'artifactId' : 'SGZArbo.AssetDetailView_groupitem_WorkExecution.SpecificationsView_1',
               'id' : 'aw877936b8',
            });
            group004.addChild( groupitem011 );


            var text023 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetDetailView_groupitem_WorkExecution.SpecificationsView_1_Specifications',
               'id' : 'aw2d44cdf0',
               'value' : MessageService.createStaticMessage('Condi\u00E7\u00F5es do Entorno'),
            });
            groupitem011.addChild( text023 );


            var groupitem012 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'SGZArbo.Section.Two.SpecificationsView',
               'artifactId' : 'SGZArbo.AssetDetailView_groupitem_WorkExecution.SpecificationsView_2',
               'id' : 'aw1e706702',
            });
            group004.addChild( groupitem012 );


            var text024 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetDetailView_groupitem_WorkExecution.SpecificationsView_2_Specifications',
               'id' : 'aw48c7902',
               'value' : MessageService.createStaticMessage('Especifica\u00E7\u00F5es da \u00C1rvore'),
            });
            groupitem012.addChild( text024 );


            var groupitem013 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'SGZArbo.Section.Three.SpecificationsView',
               'artifactId' : 'SGZArbo.AssetDetailView_groupitem_WorkExecution.SpecificationsView_3',
               'id' : 'aw69775794',
            });
            group004.addChild( groupitem013 );


            var text025 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetDetailView_groupitem_WorkExecution.SpecificationsView_3_Specifications',
               'id' : 'awaae4e893',
               'value' : MessageService.createStaticMessage('Canteiro e Permeabilidade'),
            });
            groupitem013.addChild( text025 );


            var groupitem014 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'SGZArbo.Section.four.SpecificationsView',
               'artifactId' : 'SGZArbo.AssetDetailView_groupitem_WorkExecution.SpecificationsView_4',
               'id' : 'awf713c237',
            });
            group004.addChild( groupitem014 );


            var text026 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetDetailView_groupitem_WorkExecution.SpecificationsView_4_Specifications',
               'id' : 'aw571d10e6',
               'value' : MessageService.createStaticMessage('Caracter\u00EDsticas Dendom\u00E9tricas'),
            });
            groupitem014.addChild( text026 );


            var groupitem015 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'SGZArbo.Section.Seven.TechReportView',
               'artifactId' : 'SGZArbo.AssetTechReportView_groupitem_WorkExecution.SpecificationsView_7',
               'id' : 'aw208e4f31',
            });
            group004.addChild( groupitem015 );


            var text027 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetTechReportView_groupitem_WorkExecution.SpecificationsView_7_Specifications',
               'id' : 'aw3a0b647d',
               'value' : MessageService.createStaticMessage('Recomenda\u00E7\u00F5es'),
            });
            groupitem015.addChild( text027 );

            var eventHandlers022 = [
               {
                     'method' : 'showReasonButton',
                     'artifactId' : 'SGZArbo.AssetDetailView_container_2_eventHandlers_render_hideDeadButton_SpecificationsView_7',
                     'id' : 'awc305121e',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            text027.eventHandlers = eventHandlers022;

            var groupitem016 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'SGZArbo.Section.Obs.TechReportView',
               'artifactId' : 'SGZArbo.AssetTechReportView_groupitem_WorkExecution.SpecificationsView_8',
               'id' : 'awb03152a0',
            });
            group004.addChild( groupitem016 );


            var text028 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetTechReportView_groupitem_WorkExecution.SpecificationsView_8_Specifications',
               'id' : 'awb4e10347',
               'value' : MessageService.createStaticMessage('Observa\u00E7\u00F5es'),
            });
            groupitem016.addChild( text028 );

            var eventHandlers023 = [
               {
                     'method' : 'showReasonButton',
                     'artifactId' : 'SGZArbo.AssetDetailView_container_2_eventHandlers_render_hideDeadButton_SpecificationsView_7_2',
                     'id' : 'aw93d58f76',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            text028.eventHandlers = eventHandlers023;

            var container012 = new Container({
               'artifactId' : 'TechReportContainer',
               'id' : 'aw30d32b86',
            });
            view005.addChild( container012 );


            var group005 = new Group({
               'artifactId' : 'TechReportContainer.group_0',
               'id' : 'awe4c8efc5',
            });
            container012.addChild( group005 );


            var groupitem017 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'SGZArbo.Section.One.TechReportView',
               'artifactId' : 'SGZArbo.AssetTechReportView_groupitem_WorkExecution.SpecificationsView_1',
               'id' : 'awc9edea04',
            });
            group005.addChild( groupitem017 );


            var text029 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetTechReportView_groupitem_WorkExecution.SpecificationsView_1_Specifications',
               'id' : 'aw699a0d99',
               'value' : MessageService.createStaticMessage('Raiz'),
            });
            groupitem017.addChild( text029 );


            var groupitem018 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'SGZArbo.Section.Three.TechReportView',
               'artifactId' : 'SGZArbo.AssetTechReportView_groupitem_WorkExecution.SpecificationsView_3',
               'id' : 'aw27e38b28',
            });
            group005.addChild( groupitem018 );


            var text030 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetTechReportView_groupitem_WorkExecution.SpecificationsView_3_Specifications',
               'id' : 'awee3a28fa',
               'value' : MessageService.createStaticMessage('Colo'),
            });
            groupitem018.addChild( text030 );


            var groupitem019 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'SGZArbo.Section.Four.TechReportView',
               'artifactId' : 'SGZArbo.AssetTechReportView_groupitem_WorkExecution.SpecificationsView_4',
               'id' : 'awb9871e8b',
            });
            group005.addChild( groupitem019 );


            var text031 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetTechReportView_groupitem_WorkExecution.SpecificationsView_4_Specifications',
               'id' : 'aw13c3d08f',
               'value' : MessageService.createStaticMessage('Tronco'),
            });
            groupitem019.addChild( text031 );


            var groupitem020 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE',
               'artifactId' : 'SGZArbo.AssetTechReportView_groupitem_WorkExecution.SpecificationsView_5',
               'id' : 'awce802e1d',
            });
            group005.addChild( groupitem020 );


            var text032 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetTechReportView_groupitem_WorkExecution.SpecificationsView_5_Specifications',
               'id' : 'awbdab411e',
               'value' : MessageService.createStaticMessage('Copa'),
            });
            groupitem020.addChild( text032 );

            var eventHandlers024 = [
               {
                     'method' : 'hideTechReportContainer',
                     'artifactId' : 'SGZArbo.AssetTechReportView_container_2_eventHandlers_render_hideShowContainer',
                     'id' : 'awbbc7e01',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            container012.eventHandlers = eventHandlers024;

            var container013 = new Container({
               'artifactId' : 'container_fotos',
               'id' : 'awb60b6096',
            });
            view005.addChild( container013 );


            var group006 = new Group({
               'artifactId' : 'fotos',
               'id' : 'awcb8405c7',
            });
            container013.addChild( group006 );


            var groupitem021 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'enableFeatureByProperty' : 'attachments.enabled',
               'transitionTo' : 'WorkExecution.AttachmentsView',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.AttachmentsView_0',
               'id' : 'aw2705c7e0',
            });
            group006.addChild( groupitem021 );


            var text033 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.AttachmentsView_0_Attachments',
               'id' : 'aw5f5bd9ca',
               'value' : MessageService.createStaticMessage('Attachments'),
            });
            groupitem021.addChild( text033 );


            var text034 = new Text({
               'resourceAttribute' : 'attachmentssize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.AttachmentsView_0_attachmentssize',
               'id' : 'aw4636d2d3',
            });
            groupitem021.addChild( text034 );

            var eventHandlers025 = [
               {
                     'method' : 'refreshAllListSizes',
                     'artifactId' : 'SGZArbo.WorkDetailView_eventHandlers_render_refreshAllListSizes',
                     'id' : 'awf147908e',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            container013.eventHandlers = eventHandlers025;

            var container014 = new Container({
               'artifactId' : 'container_Referencia',
               'id' : 'awf63caa44',
            });
            view005.addChild( container014 );


            var group007 = new Group({
               'artifactId' : 'Referencia',
               'id' : 'aw8f4f1008',
            });
            container014.addChild( group007 );


            var groupitem022 = new GroupItem({
               'artifactId' : 'SGZArbo.AssetTechReportView_ms_arboreason',
               'id' : 'awb2d75070',
            });
            group007.addChild( groupitem022 );


            var text035 = new Text({
               'resourceAttribute' : 'ms_arboreason',
               'lookup' : 'SGZArbo.motivosbaixaLookup',
               'editable' : true,
               'artifactId' : 'SGZArbo.AssetTechReportView_asset_groupitem_SGZArbo.ms_arboreason',
               'id' : 'aw390e334c',
               'label' : MessageService.createStaticMessage('Motivo da Baixa'),
               'lookupAttribute' : 'ms_arboreason',
            });
            groupitem022.addChild( text035 );

            var eventHandlers026 = [
               {
                     'method' : 'showReasonButton',
                     'artifactId' : 'SGZArbo.AssetDetailView_container_2_eventHandlers_render_hideDeadButton_motivo',
                     'id' : 'awc0f886be',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'setReasonLow',
                     'artifactId' : 'SGZArbo.AssetDetailView_container_2_eventHandlers_render_hideDeadButton_reason',
                     'id' : 'awe2b936d4',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            text035.eventHandlers = eventHandlers026;

            var text036 = new Text({
               'labelCss' : 'loginLink',
               'artifactId' : 'warning_reason',
               'id' : 'aw7b35ad13',
               'label' : MessageService.createStaticMessage('Informar um Motivo de Baixa resultar\u00E1 na Inativa\u00E7\u00E3o deste Ativo Arb\u00F3reo. Deseja manter esta altera\u00E7\u00E3o?'),
            });
            groupitem022.addChild( text036 );

            var eventHandlers027 = [
               {
                     'method' : 'showReasonButton',
                     'artifactId' : 'SGZArbo.AssetDetailView_container_2_eventHandlers_render_hideDeadButton_reason_three',
                     'id' : 'awa12f22a8',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            text036.eventHandlers = eventHandlers027;

            var container015 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.AssetDetailView_SGZArbo_container_0b',
               'id' : 'aw6679f6ea',
            });
            view005.addChild( container015 );


            var errorIndicator001 = new ErrorIndicator({
               'artifactId' : 'SGZArbo.AssetDetailView_errorIndicator',
               'id' : 'awe78bad0b',
            });
            container015.addChild( errorIndicator001 );

            var eventHandlers028 = [
               {
                     'method' : 'hideShowErrorContainer',
                     'artifactId' : 'SGZArbo.AssetDetailView_container_0b_eventHandlers_render_hideShowErrorContainer',
                     'id' : 'aw78f788cb',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            container015.eventHandlers = eventHandlers028;

            var container016 = new Container({
               'artifactId' : 'SGZArbo.AssetDetailView_container_0',
               'id' : 'aw59c7f012',
            });
            view005.addChild( container016 );


            var group008 = new Group({
               'artifactId' : 'SGZArbo.WorkDetailView_group_5',
               'id' : 'aw9db67215',
            });
            container016.addChild( group008 );


            var groupitem023 = new GroupItem({
               'artifactId' : 'SGZArbo.WorkDetailView_groupitem_0',
               'id' : 'awcd6a9974',
            });
            group008.addChild( groupitem023 );


            var lastupdatetext001 = new LastUpdateText({
               'artifactId' : 'SGZArbo.WorkDetailView_lastupdatetext',
               'id' : 'aw6426775a',
            });
            groupitem023.addChild( lastupdatetext001 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.AssetTechReportView', false);
               trackTimer.startTracking();
            }

            var view006 = new View({
               'resource' : 'asset',
               'allowDrillDown' : 'true',
               'id' : 'SGZArbo.AssetTechReportView',
               'label' : MessageService.createStaticMessage('Laudo T\u00E9cnico'),
            });
            ui001.addChild( view006 );

            var requiredResources006 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.AssetTechReportView_asset',
                  'id' : 'aw5bb6895e',
                  'related' : {
                     'attachments' : {
                        'reload' : true,
                        'artifactId' : 'SGZArbo.AssetTechReportView_asset_attachments',
                        'id' : 'awb370eef5',
                     },
                     'MSArboRpt' : {
                        'artifactId' : 'SGZArbo.AssetTechReportView_asset_msarborpt',
                        'id' : 'awbcb87fbf',
                     },
                  },
               },
               'classstructure' : {
                  'artifactId' : 'SGZArbo.AssetTechReportView_classstructure',
                  'id' : 'aw8aac6081',
               },
               'PlatformGeolocationLocalStore' : {
                  'artifactId' : 'WorkExecution.WorkItemsView_gpslocalstore',
                  'id' : 'aw468c12ee',
               },
            };
            view006.addRequiredResources( requiredResources006 );

            var actions003 = new Actions({
               'artifactId' : 'SGZArbo.AssetTechReportView_actions',
               'id' : 'aw28a4491a',
            });
            view006.addChild( actions003 );


            var action005 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'enableFeatureByProperty' : 'attachments.enabled',
               'artifactId' : 'WorkExecution.WorkDetailView_TakePhoto_action',
               'id' : 'awa222a035',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions003.addChild( action005 );

            var eventHandlers029 = [
               {
                     'method' : 'launchCameraForPhoto',
                     'artifactId' : 'SGZArbo.AssetTechReportView_TakePhoto_action_eventHandlers_click_launchCameraForPhoto',
                     'id' : 'aw9809ebf1',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               },
               {
                     'method' : 'initCategory',
                     'artifactId' : 'SGZArbo.AssetTechReportView_TakePhoto_action_eventHandlers_render_initCategory',
                     'id' : 'awaced2eff',
                     'event' : 'render',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            action005.eventHandlers = eventHandlers029;

            var container017 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.AssetTechReportView_SGZArbo_container_0',
               'id' : 'aw76b7b272',
            });
            view006.addChild( container017 );


            var group009 = new Group({
               'artifactId' : 'SGZArbo.AssetTechReportView_group_0',
               'id' : 'awb0f3107f',
            });
            container017.addChild( group009 );


            var groupitem024 = new GroupItem({
               'layout' : 'SGZArboDetailsLayout',
               'artifactId' : 'SGZArbo.AssetTechReportView_asset_groupitem_SGZArbo.endereco',
               'id' : 'awf3db9904',
            });
            group009.addChild( groupitem024 );


            var text037 = new Text({
               'resourceAttribute' : 'ms_addressline',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'logradouro',
               'artifactId' : 'SGZArbo.AssetTechReportView_asset_groupitem_SGZArbo.logradouro',
               'id' : 'aw48bf32cc',
               'label' : MessageService.createStaticMessage('Logradouro'),
               'required' : true,
            });
            groupitem024.addChild( text037 );


            var groupitem025 = new GroupItem({
               'layout' : 'SGZArboDetailsLayout',
               'artifactId' : 'SGZArbo.AssetTechReportView_asset_groupitem_SGZArbo.enderecodetails',
               'id' : 'awd6f69f13',
            });
            group009.addChild( groupitem025 );


            var text038 = new Text({
               'resourceAttribute' : 'ms_staddrnumber',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'numero',
               'artifactId' : 'SGZArbo.AssetTechReportView_asset_groupitem_SGZArbo.numero',
               'id' : 'awb0983094',
               'label' : MessageService.createStaticMessage('N\u00FAmero'),
               'required' : true,
            });
            groupitem025.addChild( text038 );


            var text039 = new Text({
               'resourceAttribute' : 'siteid',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'sub',
               'artifactId' : 'SGZArbo.AssetTechReportView_asset_SGZArbo.subprefeitura',
               'id' : 'aw181608eb',
               'label' : MessageService.createStaticMessage('Subprefeitura'),
               'required' : true,
            });
            groupitem025.addChild( text039 );


            var groupitem026 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'enableFeatureByProperty' : 'attachments.enabled',
               'transitionTo' : 'WorkExecution.AttachmentsView',
               'artifactId' : 'SGZArbo.AssetTechReportView_groupitem_WorkExecution.AttachmentsView_0',
               'id' : 'aw11619084',
            });
            group009.addChild( groupitem026 );


            var text040 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetTechReportView_groupitem_WorkExecution.AttachmentsView_0_Attachments',
               'id' : 'awa0ad5b48',
               'value' : MessageService.createStaticMessage('Attachments'),
            });
            groupitem026.addChild( text040 );


            var text041 = new Text({
               'resourceAttribute' : 'attachmentssize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'SGZArbo.AssetTechReportView_groupitem_WorkExecution.AttachmentsView_0_attachmentssize',
               'id' : 'aw8c33ca3b',
            });
            groupitem026.addChild( text041 );


            var groupitem027 = new GroupItem({
               'artifactId' : 'SGZArbo.AssetTechReportView_referenciax',
               'id' : 'awc9f5f7de',
            });
            group009.addChild( groupitem027 );


            var textarea002 = new TextArea({
               'resourceAttribute' : 'ms_addressline2',
               'editable' : true,
               'artifactId' : 'SGZArbo.AssetTechReportView_asset_groupitem_SGZArbo.referenciax',
               'id' : 'awcf696145',
               'label' : MessageService.createStaticMessage('Refer\u00EAncia'),
            });
            groupitem027.addChild( textarea002 );

            var eventHandlers030 = [
               {
                     'method' : 'hideShowContainer',
                     'artifactId' : 'SGZArbo.AssetTechReportView_container_0_eventHandlers_render_hideShowContainer',
                     'id' : 'aw8e445cce',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'refreshAllListSizes',
                     'artifactId' : 'SGZArbo.AssetTechReportView_eventHandlers_render_refreshAllListSizes',
                     'id' : 'awa6da3729',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            container017.eventHandlers = eventHandlers030;

            var container018 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.AssetTechReportView_SGZArbo_container_0b',
               'id' : 'awcfc3485b',
            });
            view006.addChild( container018 );


            var errorIndicator002 = new ErrorIndicator({
               'artifactId' : 'SGZArbo.AssetTechReportView_errorIndicator',
               'id' : 'aw30e3ab99',
            });
            container018.addChild( errorIndicator002 );

            var eventHandlers031 = [
               {
                     'method' : 'hideShowErrorContainer',
                     'artifactId' : 'SGZArbo.AssetTechReportView_container_0b_eventHandlers_render_hideShowErrorContainer',
                     'id' : 'awd24616d4',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            container018.eventHandlers = eventHandlers031;

            var container019 = new Container({
               'artifactId' : 'SGZArbo.AssetTechReportView_container_1',
               'id' : 'awe04f589d',
            });
            view006.addChild( container019 );


            var group010 = new Group({
               'artifactId' : 'SGZArbo.AssetTechReportView_group_5',
               'id' : 'awc099e4f0',
            });
            container019.addChild( group010 );


            var groupitem028 = new GroupItem({
               'artifactId' : 'SGZArbo.AssetTechReportView_groupitem_0',
               'id' : 'awd293f918',
            });
            group010.addChild( groupitem028 );


            var lastupdatetext002 = new LastUpdateText({
               'artifactId' : 'SGZArbo.AssetTechReportView_lastupdatetext',
               'id' : 'aw8477641e',
            });
            groupitem028.addChild( lastupdatetext002 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.NewAssetView', false);
               trackTimer.startTracking();
            }

            var view007 = new View({
               'resource' : 'asset',
               'allowDrillDown' : 'true',
               'id' : 'SGZArbo.NewAssetView',
               'label' : MessageService.createStaticMessage('Asset Details'),
            });
            ui001.addChild( view007 );

            var requiredResources007 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.NewAssetView_asset',
                  'id' : 'awff9a2df4',
                  'related' : {
                     'assetSpec' : {
                        'reload' : true,
                        'artifactId' : 'SGZArbo.NewAssetView_asset_assetSpecs',
                        'id' : 'aw3b2de4d0',
                     },
                  },
               },
               'domainAssetStatus' : {
                  'artifactId' : 'SGZArbo.NewAssetView_domainAssetstatus',
                  'id' : 'aw50b62c0a',
               },
               'assetattrtypes' : {
                  'artifactId' : 'SGZArbo.NewAssetView_assetattrtypes',
                  'id' : 'aw42c15f53',
               },
               'classstructure' : {
                  'artifactId' : 'SGZArbo.NewAssetView_classstructure',
                  'id' : 'aw5fb18195',
               },
            };
            view007.addRequiredResources( requiredResources007 );

            var actions004 = new Actions({
               'artifactId' : 'SGZArbo.NewAssetView_actions',
               'id' : 'awadf7dea4',
            });
            view007.addChild( actions004 );


            var action006 = new Action({
               'image' : '\/images\/Use-Current-Location.svg',
               'artifactId' : 'WorkExecution.WorkDetailView_CaptureGPS_action',
               'id' : 'aw2f723463',
               'label' : MessageService.createStaticMessage('Capture GPS'),
            });
            actions004.addChild( action006 );

            var eventHandlers032 = [
               {
                     'method' : 'updateCurrentGPSPosition',
                     'artifactId' : 'WorkExecution.WorkDetailView_CaptureGPS_action_eventHandlers_click',
                     'id' : 'awb16de09b',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            action006.eventHandlers = eventHandlers032;

            var container020 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.NewAssetView_SGZArbo_container_0',
               'id' : 'aw65a5a414',
            });
            view007.addChild( container020 );


            var errorIndicator003 = new ErrorIndicator({
               'artifactId' : 'SGZArbo.NewAssetView_errorIndicator',
               'id' : 'awe5fe4a8d',
            });
            container020.addChild( errorIndicator003 );


            var group011 = new Group({
               'artifactId' : 'SGZArbo.NewAssetView_group_0',
               'id' : 'aw35a087c1',
            });
            container020.addChild( group011 );


            var groupitem029 = new GroupItem({
               'layout' : 'SGZArboDetailsLayout',
               'artifactId' : 'SGZArbo.CreateAssetView_asset_groupitem_SGZArbo.endereco',
               'id' : 'aw208110d',
            });
            group011.addChild( groupitem029 );


            var text042 = new Text({
               'resourceAttribute' : 'ms_addressline',
               'editable' : true,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'logradouro',
               'artifactId' : 'SGZArbo.CreateAssetView_asset_groupitem_SGZArbo.logradouro',
               'id' : 'aw7a1e7344',
               'label' : MessageService.createStaticMessage('Logradouro'),
               'required' : true,
            });
            groupitem029.addChild( text042 );


            var groupitem030 = new GroupItem({
               'layout' : 'SGZArboDetailsLayout',
               'artifactId' : 'SGZArbo.CreateAssetView_asset_groupitem_SGZArbo.enderecodetalhado',
               'id' : 'awaca24d4d',
            });
            group011.addChild( groupitem030 );


            var text043 = new Text({
               'resourceAttribute' : 'ms_staddrnumber',
               'editable' : true,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'numero',
               'artifactId' : 'SGZArbo.CreateAssetView_asset_groupitem_SGZArbo.numero',
               'id' : 'awb717f890',
               'label' : MessageService.createStaticMessage('N\u00FAmero'),
               'required' : true,
            });
            groupitem030.addChild( text043 );


            var text044 = new Text({
               'resourceAttribute' : 'ms_loctype',
               'lookup' : 'SGZArbo.classArboLookupTABLE',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'artifactId' : 'SGZArbo.AssetDetailView_asset_groupitem_SGZArbo.ms_loctype01',
               'id' : 'aw9929ffe1',
               'label' : MessageService.createStaticMessage('Tipo de Local'),
               'lookupAttribute' : 'description',
               'required' : false,
            });
            groupitem030.addChild( text044 );


            var text045 = new Text({
               'resourceAttribute' : 'siteid',
               'lookup' : 'SGZArbo.AssetMove.SiteLookup',
               'editable' : true,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'sub',
               'artifactId' : 'SGZArbo.CreateAssetView_asset_groupitem_SGZArbo.subprefeitura',
               'id' : 'aw5c324e41',
               'label' : MessageService.createStaticMessage('Subprefeitura'),
            });
            groupitem030.addChild( text045 );


            var groupitem031 = new GroupItem({
               'layout' : 'SGZArboDetailsLayout',
               'artifactId' : 'SGZArbo.AssetDetailView_asset_groupitem_SGZArbo.latlong',
               'id' : 'aw82b192c9',
            });
            group011.addChild( groupitem031 );


            var text046 = new Text({
               'resourceAttribute' : 'latitudey',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'logradouro',
               'artifactId' : 'SGZArbo.AssetDetailView_asset_groupitem_SGZArbo.lat',
               'id' : 'aw83ccaadf',
               'label' : MessageService.createStaticMessage('Latitude'),
            });
            groupitem031.addChild( text046 );


            var text047 = new Text({
               'resourceAttribute' : 'longitudex',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'logradouro',
               'artifactId' : 'SGZArbo.AssetDetailView_asset_groupitem_SGZArbo.long',
               'id' : 'awad88cf48',
               'label' : MessageService.createStaticMessage('Longitude'),
            });
            groupitem031.addChild( text047 );


            var groupitem032 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'enableFeatureByProperty' : 'attachments.enabled',
               'transitionTo' : 'WorkExecution.AttachmentsView',
               'artifactId' : 'SGZArbo.NewAssetVieww_groupitem_WorkExecution.AttachmentsView_0',
               'id' : 'aw51c94e3b',
            });
            group011.addChild( groupitem032 );


            var text048 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.NewAssetVieww_groupitem_WorkExecution.AttachmentsView_0_Attachments',
               'id' : 'aw9fe31742',
               'value' : MessageService.createStaticMessage('Attachments'),
            });
            groupitem032.addChild( text048 );


            var text049 = new Text({
               'resourceAttribute' : 'attachmentssize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'SGZArbo.NewAssetVieww_groupitem_WorkExecution.AttachmentsView_0_attachmentssize',
               'id' : 'aw4292114d',
            });
            groupitem032.addChild( text049 );

            var eventHandlers033 = [
               {
                     'method' : 'hideShowContainer',
                     'artifactId' : 'SGZArbo.NewAssetView_container_0_eventHandlers_render_hideShowContainer',
                     'id' : 'aw689503',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'refreshAllListSizes',
                     'artifactId' : 'SGZArbo.NewAssetView_eventHandlers_render_refreshAllListSizes',
                     'id' : 'awf4f8d0b7',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            container020.eventHandlers = eventHandlers033;

            var group012 = new Group({
               'artifactId' : 'SGZArbo.NewAssetView_group_5',
               'id' : 'aw45ca734e',
            });
            container020.addChild( group012 );


            var groupitem033 = new GroupItem({
               'artifactId' : 'SGZArbo.NewAssetView_groupitem_0',
               'id' : 'awdb2617fc',
            });
            group012.addChild( groupitem033 );


            var textarea003 = new TextArea({
               'resourceAttribute' : 'ms_addressline2',
               'editable' : true,
               'artifactId' : 'SGZArbo.NewAssetView_groupitem_0_referencia',
               'id' : 'aw4f6e1df9',
               'label' : MessageService.createStaticMessage('Refer\u00EAncia'),
            });
            groupitem033.addChild( textarea003 );


            var lastupdatetext003 = new LastUpdateText({
               'artifactId' : 'SGZArbo.NewAssetView_lastupdatetext',
               'id' : 'aw516a850a',
            });
            groupitem033.addChild( lastupdatetext003 );


            var footer002 = new Footer({
               'artifactId' : 'SGZArbo.NewAssetView_footer',
               'id' : 'aw3ac11bfe',
            });
            view007.addChild( footer002 );


            var button008 = new Button({
               'artifactId' : 'SGZArbo.NewAssetView_Cancel_button',
               'id' : 'awff2b6c7c',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers034 = [
               {
                     'method' : 'discardNewAssetView',
                     'artifactId' : 'SGZArbo.NewAssetView_Cancel_button_eventHandlers_click_discardNewAssetView',
                     'id' : 'awb9a283fe',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button008.eventHandlers = eventHandlers034;
            footer002.addChild( button008 );


            var button009 = new Button({
               'resourceAttribute' : 'wonum',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZArbo.NewAssetView_wonum_Create_button',
               'id' : 'aw6984816a',
               'label' : MessageService.createStaticMessage('Create'),
               'primary' : 'true',
            });
            var eventHandlers035 = [
               {
                     'method' : 'commitNewAssetView',
                     'artifactId' : 'SGZArbo.NewAssetView_wonum_Create_button_eventHandlers_click_commitNewAssetView',
                     'id' : 'aw65e7c7a7',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button009.eventHandlers = eventHandlers035;
            footer002.addChild( button009 );

            var eventHandlers036 = [
               {
                     'method' : 'initNewAssetView',
                     'artifactId' : 'SGZArbo.NewAssetView_eventHandlers_initialize_initNewAssetView',
                     'id' : 'awdde7d13f',
                     'event' : 'initialize',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'discardNewAssetView',
                     'artifactId' : 'SGZArbo.NewAssetView_eventHandlers_initialize_cleanup_handleBackButtonClick',
                     'id' : 'awa17dc602',
                     'event' : 'cleanup',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            view007.eventHandlers = eventHandlers036;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.DescriptionView', false);
               trackTimer.startTracking();
            }

            var view008 = new View({
               'resource' : 'asset',
               'id' : 'SGZArbo.DescriptionView',
               'label' : MessageService.createStaticMessage('Description'),
            });
            ui001.addChild( view008 );

            var requiredResources008 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.DescriptionView_asset',
                  'id' : 'aw8fafdc20',
               },
            };
            view008.addRequiredResources( requiredResources008 );

            var container021 = new Container({
               'artifactId' : 'SGZArbo.DescriptionView_container_0',
               'id' : 'awf102c1f8',
            });
            view008.addChild( container021 );


            var group013 = new Group({
               'artifactId' : 'SGZArbo.DescriptionView_group_0',
               'id' : 'aw1a4e3565',
            });
            container021.addChild( group013 );


            var groupitem034 = new GroupItem({
               'artifactId' : 'SGZArbo.DescriptionView_groupitem_0',
               'id' : 'awb4d950eb',
            });
            group013.addChild( groupitem034 );


            var text050 = new Text({
               'resourceAttribute' : 'description',
               'editable' : false,
               'artifactId' : 'SGZArbo.DescriptionView_groupitem_0_description',
               'id' : 'awc46cbd08',
            });
            groupitem034.addChild( text050 );


            var groupitem035 = new GroupItem({
               'artifactId' : 'SGZArbo.DescriptionView_groupitem_1',
               'id' : 'awc3de607d',
            });
            group013.addChild( groupitem035 );


            var text051 = new Text({
               'resourceAttribute' : 'assetlongdesc',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'SGZArbo.DescriptionView_groupitem_1_longdescription',
               'id' : 'aw82ea8c5e',
            });
            groupitem035.addChild( text051 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.EditStatusView', false);
               trackTimer.startTracking();
            }

            var view009 = new View({
               'resource' : 'asset',
               'showOverflow' : false,
               'id' : 'SGZArbo.EditStatusView',
               'label' : MessageService.createStaticMessage('Change Status'),
            });
            ui001.addChild( view009 );

            var requiredResources009 = {
               'statusChangeResource' : {
                  'artifactId' : 'SGZArbo.EditStatusView_statusChangeResource',
                  'id' : 'awca348a59',
               },
               'domainAssetStatus' : {
                  'artifactId' : 'SGZArbo.EditStatusView_domainAssetstatus',
                  'id' : 'awf6e5228',
               },
            };
            view009.addRequiredResources( requiredResources009 );

            var container022 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.EditStatusView_asset_container_0',
               'id' : 'awce890eaf',
            });
            view009.addChild( container022 );


            var group014 = new Group({
               'artifactId' : 'SGZArbo.EditStatusView_group_0',
               'id' : 'awdd2f0bf7',
            });
            container022.addChild( group014 );


            var groupitem036 = new GroupItem({
               'artifactId' : 'SGZArbo.EditStatusView_asset_groupitem_0',
               'id' : 'aw8b529fbc',
            });
            group014.addChild( groupitem036 );


            var text052 = new Text({
               'resourceAttribute' : 'assetnum',
               'editable' : false,
               'artifactId' : 'SGZArbo.EditStatusView_asset_groupitem_0_wonum_asset',
               'id' : 'aw3003d0b',
               'label' : MessageService.createStaticMessage('Asset'),
            });
            groupitem036.addChild( text052 );


            var text053 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'artifactId' : 'SGZArbo.EditStatusView_asset_groupitem_0_statusdesc_Status',
               'id' : 'awe8e29842',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem036.addChild( text053 );


            var container023 = new Container({
               'resource' : 'statusChangeResource',
               'artifactId' : 'SGZArbo.EditStatusView_statusChangeResource_container_0',
               'id' : 'aw7c79d54f',
            });
            view009.addChild( container023 );


            var group015 = new Group({
               'artifactId' : 'SGZArbo.EditStatusView_group_1',
               'id' : 'awaa283b61',
            });
            container023.addChild( group015 );


            var groupitem037 = new GroupItem({
               'artifactId' : 'SGZArbo.EditStatusView_statusChangeResource_groupitem_1',
               'id' : 'aw4ea574ca',
            });
            group015.addChild( groupitem037 );


            var text054 = new Text({
               'resourceAttribute' : 'statusdesc',
               'lookup' : 'SGZArbo.statusLookup',
               'editable' : false,
               'artifactId' : 'SGZArbo.EditStatusView_statusChangeResource_groupitem_1_statusdesc_NewStatus',
               'id' : 'aw77bc8187',
               'label' : MessageService.createStaticMessage('New Status'),
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
               'required' : true,
            });
            groupitem037.addChild( text054 );


            var groupitem038 = new GroupItem({
               'artifactId' : 'SGZArbo.EditStatusView_statusChangeResource_groupitem_2',
               'id' : 'awd7ac2570',
            });
            group015.addChild( groupitem038 );


            var checkbox001 = new CheckBox({
               'resourceAttribute' : 'rolltoallchildren',
               'artifactId' : 'SGZArbo.EditStatusView_rolltoallchildren',
               'id' : 'aw749f75bc',
               'label' : MessageService.createStaticMessage('Roll New Status to All Child Assets?'),
            });
            groupitem038.addChild( checkbox001 );


            var groupitem039 = new GroupItem({
               'artifactId' : 'SGZArbo.EditStatusView_statusChangeResource_groupitem_3',
               'id' : 'awa0ab15e6',
            });
            group015.addChild( groupitem039 );


            var checkbox002 = new CheckBox({
               'resourceAttribute' : 'removefromactiveroutes',
               'artifactId' : 'SGZArbo.EditStatusView_removefromactiveroutes',
               'id' : 'aw9feb111d',
               'label' : MessageService.createStaticMessage('Remove Asset Reference from Active Routes?'),
            });
            groupitem039.addChild( checkbox002 );


            var groupitem040 = new GroupItem({
               'artifactId' : 'SGZArbo.EditStatusView_statusChangeResource_groupitem_4',
               'id' : 'aw3ecf8045',
            });
            group015.addChild( groupitem040 );


            var checkbox003 = new CheckBox({
               'resourceAttribute' : 'removefromactivesp',
               'artifactId' : 'SGZArbo.EditStatusView_removefromactivesp',
               'id' : 'aw6165e5e3',
               'label' : MessageService.createStaticMessage('Remove Asset Reference from Active Safety Plans?'),
            });
            groupitem040.addChild( checkbox003 );


            var groupitem041 = new GroupItem({
               'artifactId' : 'SGZArbo.EditStatusView_statusChangeResource_groupitem_5',
               'id' : 'aw49c8b0d3',
            });
            group015.addChild( groupitem041 );


            var checkbox004 = new CheckBox({
               'resourceAttribute' : 'changepmstatus',
               'artifactId' : 'SGZArbo.EditStatusView_changepmstatus',
               'id' : 'aw459cd6a7',
               'label' : MessageService.createStaticMessage('Change the Status of All Associated PMs to Inactive?'),
            });
            groupitem041.addChild( checkbox004 );


            var footer003 = new Footer({
               'artifactId' : 'SGZArbo.EditStatusView_footer',
               'id' : 'awd991eb9',
            });
            view009.addChild( footer003 );


            var button010 = new Button({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.EditStatusView_Cancel_button',
               'id' : 'aw4bd5f22a',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers037 = [
               {
                     'method' : 'discardStatusChange',
                     'artifactId' : 'SGZArbo.EditStatusView_Cancel_button_eventHandlers_click_discardStatusChange',
                     'id' : 'aw955b7486',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button010.eventHandlers = eventHandlers037;
            footer003.addChild( button010 );


            var button011 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.EditStatusView_Save_button',
               'id' : 'aw1ae409dc',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers038 = [
               {
                     'method' : 'commitAssetStatusChange',
                     'artifactId' : 'SGZArbo.EditStatusView_Save_button_eventHandlers_click_commitAssetStatusChange',
                     'id' : 'awb5ed6a44',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button011.eventHandlers = eventHandlers038;
            footer003.addChild( button011 );

            var eventHandlers039 = [
               {
                     'method' : 'initEditStatusView',
                     'artifactId' : 'SGZArbo.EditStatusView_eventHandlers_initialize_initEditStatusView',
                     'id' : 'awda5af88e',
                     'event' : 'initialize',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'cleanupEditStatusView',
                     'artifactId' : 'SGZArbo.EditStatusView_eventHandlers_cleanup_cleanupEditStatusView',
                     'id' : 'aw62425d32',
                     'event' : 'cleanup',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            view009.eventHandlers = eventHandlers039;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.ClassifyAssetView', false);
               trackTimer.startTracking();
            }

            var view010 = new View({
               'resource' : 'asset',
               'id' : 'SGZArbo.ClassifyAssetView',
               'label' : MessageService.createStaticMessage('Classify'),
            });
            ui001.addChild( view010 );

            var requiredResources010 = {
               'classstructure' : {
                  'artifactId' : 'SGZArbo.ClassifyAssetView_classstructure',
                  'id' : 'aw6324e3a4',
               },
            };
            view010.addRequiredResources( requiredResources010 );

            var container024 = new Container({
               'artifactId' : 'SGZArbo.ClassifyAssetView_container_0',
               'id' : 'awb3c93333',
            });
            view010.addChild( container024 );


            var group016 = new Group({
               'artifactId' : 'SGZArbo.ClassifyAssetView_group_0',
               'id' : 'aw66c2ae6c',
            });
            container024.addChild( group016 );


            var groupitem042 = new GroupItem({
               'cssClass' : 'pathContainer',
               'artifactId' : 'SGZArbo.ClassifyAssetView_groupitem_0',
               'id' : 'awf612a220',
            });
            group016.addChild( groupitem042 );


            var text055 = new Text({
               'resourceAttribute' : 'classificationpath',
               'editable' : false,
               'artifactId' : 'SGZArbo.ClassifyAssetView_groupitem_0_classificationpath',
               'id' : 'aw2eadc8bd',
            });
            groupitem042.addChild( text055 );


            var text056 = new Text({
               'resourceAttribute' : 'classificationdesc',
               'editable' : false,
               'artifactId' : 'SGZArbo.ClassifyAssetView_groupitem_0_classificationdesc',
               'id' : 'aw2e4cefe6',
            });
            groupitem042.addChild( text056 );

            var eventHandlers040 = [
               {
                     'method' : 'hideIfNull',
                     'artifactId' : 'SGZArbo.ClassifyAssetView_container_0_eventHandlers_render_hideIfNull',
                     'id' : 'aw7b8ebbb4',
                     'event' : 'render',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               }
            ];
            container024.eventHandlers = eventHandlers040;


            var listItemTemplate002 = new ListItemTemplate({
               'layout' : 'FailureReportList',
               'artifactId' : 'SGZArbo.ClassifyAssetView_classstructure_listItemTemplate_FailureReportList',
               'id' : 'awb66f8ccd',
            });

            var listtext005 = new ListText({
               'resourceAttribute' : 'fulldesc',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.ClassifyAssetView_classstructure_FailureReportList_fulldesc',
               'id' : 'aw856f6c39',
            });
            listItemTemplate002.addChild( listtext005 );

            var eventHandlers041 = [
               {
                     'method' : 'openChildren',
                     'artifactId' : 'SGZArbo.ClassifyAssetView_classstructure_listItemTemplate_FailureReportList_eventHandlers_click_openChildren',
                     'id' : 'aw573725c5',
                     'event' : 'click',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               }
            ];
            listItemTemplate002.eventHandlers = eventHandlers041;


            var list002 = new List({
               'resource' : 'classstructure',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate002,
               'artifactId' : 'SGZArbo.ClassifyAssetView_classstructure_list',
               'id' : 'aw291489db',
               'label' : MessageService.createStaticMessage('Classify'),
            });
            view010.addChild( list002 );


            var footer004 = new Footer({
               'visibleButtonCount' : '2',
               'artifactId' : 'SGZArbo.ClassifyAssetView_footer',
               'id' : 'aweb7b860c',
            });
            view010.addChild( footer004 );


            var button012 = new Button({
               'artifactId' : 'SGZArbo.ClassifyAssetView_Cancel_button',
               'id' : 'aw69ad8c58',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers042 = [
               {
                     'method' : 'cancelClassify',
                     'artifactId' : 'SGZArbo.ClassifyAssetView_Cancel_button_eventHandlers_click_cancelClassify',
                     'id' : 'aw32cac781',
                     'event' : 'click',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               }
            ];
            button012.eventHandlers = eventHandlers042;
            footer004.addChild( button012 );


            var button013 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZArbo.ClassifyAssetView_Clear_button',
               'id' : 'aw5afa0cd8',
               'label' : MessageService.createStaticMessage('Clear'),
               'primary' : 'true',
            });
            var eventHandlers043 = [
               {
                     'method' : 'hideClear',
                     'artifactId' : 'SGZArbo.ClassifyAssetView_Clear_button_eventHandlers_render_hideClear',
                     'id' : 'awe3998d26',
                     'event' : 'render',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               },
               {
                     'method' : 'clearClassify',
                     'artifactId' : 'SGZArbo.ClassifyAssetView_Clear_button_eventHandlers_click_clearClassify',
                     'id' : 'aw6c781425',
                     'event' : 'click',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               }
            ];
            button013.eventHandlers = eventHandlers043;
            footer004.addChild( button013 );


            var button014 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZArbo.ClassifyAssetView_Classify_button',
               'id' : 'aw15ead644',
               'label' : MessageService.createStaticMessage('Classify'),
               'primary' : 'true',
            });
            var eventHandlers044 = [
               {
                     'method' : 'hideClassify',
                     'artifactId' : 'SGZArbo.ClassifyAssetView_Classify_button_eventHandlers_render_hideClassify',
                     'id' : 'aw22360a97',
                     'event' : 'render',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               },
               {
                     'method' : 'saveClassify',
                     'artifactId' : 'SGZArbo.ClassifyAssetView_Classify_button_eventHandlers_click_saveClassify',
                     'id' : 'awdedb1d77',
                     'event' : 'click',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               }
            ];
            button014.eventHandlers = eventHandlers044;
            footer004.addChild( button014 );

            var eventHandlers045 = [
               {
                     'method' : 'handleClassifyBack',
                     'artifactId' : 'SGZArbo.ClassifyAssetView_eventHandlers_back_handleClassifyBack',
                     'id' : 'aw69346c12',
                     'event' : 'back',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               },
               {
                     'method' : 'openTop',
                     'artifactId' : 'SGZArbo.ClassifyAssetView_eventHandlers_initialize_openTop',
                     'id' : 'aw54a2cf03',
                     'event' : 'initialize',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               },
               {
                     'method' : 'renderTop',
                     'artifactId' : 'SGZArbo.ClassifyAssetView_eventHandlers_initialize_renderTop',
                     'id' : 'aw1871d156',
                     'event' : 'render',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               }
            ];
            view010.eventHandlers = eventHandlers045;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.Section.One.SpecificationsView', false);
               trackTimer.startTracking();
            }

            var view011 = new View({
               'id' : 'SGZArbo.Section.One.SpecificationsView',
               'label' : MessageService.createStaticMessage('Condi\u00E7\u00F5es do Entorno'),
            });
            ui001.addChild( view011 );

            var requiredResources011 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.Section.One.SpecificationsView_asset',
                  'id' : 'awdd9a8478',
                  'related' : {
                     'MSArbo' : {
                        'artifactId' : 'SGZArbo.Section.One.SpecificationsView_msarbo',
                        'id' : 'awd92faf83',
                     },
                  },
               },
            };
            view011.addRequiredResources( requiredResources011 );

            var container025 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.Section.One.SpecificationsView_container_0',
               'attribute' : 'MSArbo',
               'id' : 'awb1713d25',
            });
            view011.addChild( container025 );


            var group017 = new Group({
               'artifactId' : 'SGZArbo.Section.One.SpecificationsView_group_0',
               'id' : 'awd9c69ca',
            });
            container025.addChild( group017 );


            var groupitem043 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.One.SpecificationsView_0',
               'id' : 'awa48bfa88',
            });
            group017.addChild( groupitem043 );


            var text057 = new Text({
               'resourceAttribute' : 'ms_typebuild',
               'lookup' : 'SGZArbo.TypebuildLookup',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.One.SpecificationsView_groupitem_0_ms_typebuild',
               'id' : 'awb93a7635',
               'label' : MessageService.createStaticMessage('Tipo de Edifica\u00E7\u00E3o'),
               'lookupAttribute' : 'ms_typebuild',
            });
            groupitem043.addChild( text057 );


            var text058 = new Text({
               'resourceAttribute' : 'ms_loctree',
               'lookup' : 'SGZArbo.MSloctreeLookup',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.One.SpecificationsView_groupitem_1_ms_loctree',
               'id' : 'awfe192b5a',
               'label' : MessageService.createStaticMessage('Localiza\u00E7\u00E3o da \u00C1rvore'),
               'lookupAttribute' : 'ms_loctree',
            });
            groupitem043.addChild( text058 );


            var text059 = new Text({
               'resourceAttribute' : 'ms_locpublic',
               'lookup' : 'SGZArbo.MSlocpublicLookup',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.One.SpecificationsView_groupitem_2_ms_locpublic',
               'id' : 'awa63f89f',
               'label' : MessageService.createStaticMessage('Localiza\u00E7\u00E3o na Via P\u00FAblica'),
               'lookupAttribute' : 'ms_locpublic',
            });
            groupitem043.addChild( text059 );


            var text060 = new Text({
               'resourceAttribute' : 'ms_ridewidth',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'SGZArbo.Section.One.SpecificationsView_groupitem_3_ms_ridewidth',
               'id' : 'aw68d11466',
               'label' : MessageService.createStaticMessage('Largura do Passeio (m)'),
            });
            groupitem043.addChild( text060 );


            var checkbox005 = new CheckBox({
               'resourceAttribute' : 'ms_retreat',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.One.SpecificationsView_groupitem_4_ms_retreat',
               'id' : 'aw10dedcf2',
               'label' : MessageService.createStaticMessage('Recuo'),
            });
            groupitem043.addChild( checkbox005 );


            var checkbox006 = new CheckBox({
               'resourceAttribute' : 'ms_liftingfloor',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.One.SpecificationsView_groupitem_5_ms_liftingfloor',
               'id' : 'aw319783f3',
               'label' : MessageService.createStaticMessage('Levantamento do Pavimento'),
            });
            groupitem043.addChild( checkbox006 );


            var footer005 = new Footer({
               'artifactId' : 'SGZArbo.Section.One.SpecificationsView_footer',
               'id' : 'awdeedd45c',
            });
            view011.addChild( footer005 );


            var button015 = new Button({
               'artifactId' : 'SGZArbo.Section.One.SpecificationsView_Cancel_button',
               'id' : 'aw928d1630',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers046 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'SGZArbo.Section.One.SpecificationsView_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'awaf5148e7',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button015.eventHandlers = eventHandlers046;
            footer005.addChild( button015 );


            var button016 = new Button({
               'resourceAttribute' : 'ms_arboid',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZArbo.Section.One.SpecificationsView_Create_button',
               'id' : 'aw6a2b335c',
               'label' : MessageService.createStaticMessage('Done'),
               'primary' : 'true',
            });
            var eventHandlers047 = [
               {
                     'method' : 'hidesaveSpecbt',
                     'artifactId' : 'SGZArbo.Section.One.SpecificationsView_Commit_button_eventHandlers_render_hidesaveSpecbt_um',
                     'id' : 'awb60d02df',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'commitSpecificationView',
                     'artifactId' : 'SGZArbo.Section.One.SpecificationsView_Commit_button_eventHandlers_click_commit',
                     'id' : 'aw3acc142a',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button016.eventHandlers = eventHandlers047;
            footer005.addChild( button016 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.Section.Two.SpecificationsView', false);
               trackTimer.startTracking();
            }

            var view012 = new View({
               'id' : 'SGZArbo.Section.Two.SpecificationsView',
               'label' : MessageService.createStaticMessage('Especifica\u00E7\u00F5es da \u00C1rvore'),
            });
            ui001.addChild( view012 );

            var requiredResources012 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_asset',
                  'id' : 'aw7badba2a',
                  'related' : {
                     'MSArbo' : {
                        'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_msarbo',
                        'id' : 'aw5ceca865',
                     },
                  },
               },
               'msscientific' : {
                  'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_msscientific',
                  'id' : 'aw65054184',
               },
               'msarbospeccient' : {
                  'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_msarbospeccient',
                  'id' : 'aw7e3f1776',
               },
            };
            view012.addRequiredResources( requiredResources012 );

            var container026 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_container_0',
               'attribute' : 'MSArbo',
               'id' : 'aw5e2f73f4',
            });
            view012.addChild( container026 );


            var group018 = new Group({
               'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_group_0',
               'id' : 'aw4470ed80',
            });
            container026.addChild( group018 );


            var groupitem044 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_0',
               'id' : 'aw5c58d01d',
            });
            group018.addChild( groupitem044 );


            var checkbox007 = new CheckBox({
               'resourceAttribute' : 'ms_speciesunident',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_groupitem_0_ms_speciesunident',
               'id' : 'aw326ff25a',
               'label' : MessageService.createStaticMessage('Esp\u00E9cie N\u00E3o Identificada'),
            });
            groupitem044.addChild( checkbox007 );

            var eventHandlers048 = [
               {
                     'method' : 'setCheckButton',
                     'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_groupitem_0_ms_speciesunident_eventHandlers_click_requiredField_check_set',
                     'id' : 'aweae015c5',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'control_final',
                     'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_groupitem_0_ms_speciesunident_eventHandlers_click_requiredField_check_espec',
                     'id' : 'awcb635242',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            checkbox007.eventHandlers = eventHandlers048;

            var text061 = new Text({
               'resourceAttribute' : 'ms_popularname',
               'lookup' : 'SGZArbo.mspopularnameLookup',
               'editable' : false,
               'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_groupitem_1_ms_popularname',
               'id' : 'awb69f42bb',
               'label' : MessageService.createStaticMessage('Nome Popular (prov\u00E1vel)'),
               'lookupAttribute' : 'ms_popular',
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
               'required' : true,
            });
            groupitem044.addChild( text061 );

            var eventHandlers049 = [
               {
                     'method' : 'scientificPut',
                     'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_groupitem_0_ms_speciesunident_eventHandlers_click_scientificPut_',
                     'id' : 'aw14162903',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            text061.eventHandlers = eventHandlers049;

            var text062 = new Text({
               'resourceAttribute' : 'ms_scientific',
               'lookup' : 'SGZArbo.msscientificLookup',
               'editable' : false,
               'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_groupitem_2_ms_scientific',
               'id' : 'awadf3fd0c',
               'label' : MessageService.createStaticMessage('Nome Cient\u00EDfico'),
               'lookupAttribute' : 'ms_scientific',
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
            });
            groupitem044.addChild( text062 );

            var eventHandlers050 = [
               {
                     'method' : 'scientificPut',
                     'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_groupitem_0_ms_speciesunident_eventHandlers_click_scientificPut02',
                     'id' : 'aw61ad8ef6',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            text062.eventHandlers = eventHandlers050;

            var text063 = new Text({
               'resourceAttribute' : 'ms_family',
               'lookup' : 'SGZArbo.msfamilyLookup',
               'editable' : false,
               'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_groupitem_3_ms_family',
               'id' : 'awa33b5775',
               'label' : MessageService.createStaticMessage('Fam\u00EDlia'),
               'lookupAttribute' : 'ms_family',
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
            });
            groupitem044.addChild( text063 );

            var eventHandlers051 = [
               {
                     'method' : 'familyPut',
                     'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_groupitem_0_ms_speciesunident_eventHandlers_click_scientificPutmsscientific',
                     'id' : 'awc332fbae',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            text063.eventHandlers = eventHandlers051;

            var text064 = new Text({
               'resourceAttribute' : 'ms_genre',
               'editable' : false,
               'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_groupitem_4_ms_genre',
               'id' : 'awa4f19c4',
               'label' : MessageService.createStaticMessage('G\u00EAnero'),
            });
            groupitem044.addChild( text064 );


            var text065 = new Text({
               'resourceAttribute' : 'ms_species',
               'editable' : false,
               'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_groupitem_5_ms_species',
               'id' : 'aw96e2824b',
               'label' : MessageService.createStaticMessage('Esp\u00E9cie'),
            });
            groupitem044.addChild( text065 );


            var footer006 = new Footer({
               'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_footer',
               'id' : 'aw5b2ed3ba',
            });
            view012.addChild( footer006 );


            var button017 = new Button({
               'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_Cancel_button',
               'id' : 'aw9bca61a7',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers052 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'awa20d3c5b',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button017.eventHandlers = eventHandlers052;
            footer006.addChild( button017 );


            var button018 = new Button({
               'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_Cancel_button0',
               'id' : 'awbcf2230b',
               'label' : MessageService.createStaticMessage('Limpar'),
            });
            var eventHandlers053 = [
               {
                     'method' : 'limpa',
                     'artifactId' : 'SGZArbo.Section.Two.SpecificationsView_Cancel_button_eventHandlers_click_cancel0',
                     'id' : 'aw8c05a61',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button018.eventHandlers = eventHandlers053;
            footer006.addChild( button018 );


            var button019 = new Button({
               'resourceAttribute' : 'ms_arboid',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : '_SGZArbo.Section.Two.SpecificationsView_Create_button',
               'id' : 'awb955c6fe',
               'label' : MessageService.createStaticMessage('Done'),
               'primary' : 'true',
            });
            var eventHandlers054 = [
               {
                     'method' : 'requiredField',
                     'artifactId' : '_SGZArbo.Section.Two.SpecificationsView_groupitem_0_ms_speciesunident_eventHandlers_click_requiredField',
                     'id' : 'awc054c8a',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'commitSpecificationView',
                     'artifactId' : '_SGZArbo.Section.Two.SpecificationsView_Commit_button_eventHandlers_click_commit',
                     'id' : 'awe3ce845d',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button019.eventHandlers = eventHandlers054;
            footer006.addChild( button019 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.Section.Three.SpecificationsView', false);
               trackTimer.startTracking();
            }

            var view013 = new View({
               'id' : 'SGZArbo.Section.Three.SpecificationsView',
               'label' : MessageService.createStaticMessage('Canteiro e Permeabilidade'),
            });
            ui001.addChild( view013 );

            var requiredResources013 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_asset',
                  'id' : 'awcdf38f5f',
                  'related' : {
                     'MSArbo' : {
                        'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_msarbo',
                        'id' : 'aw7c3573e3',
                     },
                  },
               },
            };
            view013.addRequiredResources( requiredResources013 );

            var container027 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_container_0',
               'attribute' : 'MSArbo',
               'id' : 'aw86002243',
            });
            view013.addChild( container027 );


            var group019 = new Group({
               'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_group_0',
               'id' : 'aw408b124e',
            });
            container027.addChild( group019 );


            var groupitem045 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_0',
               'id' : 'aw7ea846f2',
            });
            group019.addChild( groupitem045 );


            var checkbox008 = new CheckBox({
               'resourceAttribute' : 'ms_permeablearea',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_groupitem_0_ms_permeablearea',
               'id' : 'aw3b4ebe56',
               'label' : MessageService.createStaticMessage('\u00C1rea Perme\u00E1vel'),
            });
            groupitem045.addChild( checkbox008 );


            var checkbox009 = new CheckBox({
               'resourceAttribute' : 'ms_inadequatesite',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_groupitem_1_ms_inadequatesite',
               'id' : 'aw959d2913',
               'label' : MessageService.createStaticMessage('Canteiro Inadequado'),
            });
            groupitem045.addChild( checkbox009 );


            var checkbox010 = new CheckBox({
               'resourceAttribute' : 'ms_jammvegetation',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_groupitem_2_ms_jammvegetation',
               'id' : 'awb24a9be8',
               'label' : MessageService.createStaticMessage('Vegeta\u00E7\u00E3o Interferente'),
            });
            groupitem045.addChild( checkbox010 );


            var text066 = new Text({
               'resourceAttribute' : 'ms_diameter',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_groupitem_3_ms_diameter',
               'id' : 'aw6e888d59',
               'label' : MessageService.createStaticMessage('Di\u00E2metro (m)'),
            });
            groupitem045.addChild( text066 );


            var text067 = new Text({
               'resourceAttribute' : 'ms_length',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_groupitem_4_ms_length',
               'id' : 'aw9fe205b2',
               'label' : MessageService.createStaticMessage('Comprimento (m)'),
            });
            groupitem045.addChild( text067 );


            var text068 = new Text({
               'resourceAttribute' : 'ms_width',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_groupitem_5_ms_width',
               'id' : 'aw98d68d16',
               'label' : MessageService.createStaticMessage('Largura (m)'),
            });
            groupitem045.addChild( text068 );


            var footer007 = new Footer({
               'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_footer',
               'id' : 'aw7bf7083c',
            });
            view013.addChild( footer007 );


            var button020 = new Button({
               'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_Cancel_button',
               'id' : 'aw2c22e095',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers055 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'aw5f6eadcd',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button020.eventHandlers = eventHandlers055;
            footer007.addChild( button020 );


            var button021 = new Button({
               'resourceAttribute' : 'ms_arboid',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_Create_button',
               'id' : 'awd484c5f9',
               'label' : MessageService.createStaticMessage('Done'),
               'primary' : 'true',
            });
            var eventHandlers056 = [
               {
                     'method' : 'hidesaveSpecbt',
                     'artifactId' : 'SGZArbo.Section.One.SpecificationsView_Commit_button_eventHandlers_render_hidesaveSpecbt_tres',
                     'id' : 'awd7372042',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'commitSpecificationView',
                     'artifactId' : 'SGZArbo.Section.Three.SpecificationsView_Commit_button_eventHandlers_click_commit',
                     'id' : 'awcaf3f100',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button021.eventHandlers = eventHandlers056;
            footer007.addChild( button021 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.Section.four.SpecificationsView', false);
               trackTimer.startTracking();
            }

            var view014 = new View({
               'id' : 'SGZArbo.Section.four.SpecificationsView',
               'label' : MessageService.createStaticMessage('Caracter\u00EDsticas Dendom\u00E9tricas'),
            });
            ui001.addChild( view014 );

            var requiredResources014 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.Section.four.SpecificationsView_asset',
                  'id' : 'aw6f7c4e7c',
                  'related' : {
                     'MSArbo' : {
                        'artifactId' : 'SGZArbo.Section.four.SpecificationsView_msarbo',
                        'id' : 'awdef08d50',
                     },
                  },
               },
            };
            view014.addRequiredResources( requiredResources014 );

            var container028 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.Section.four.SpecificationsView_container_0',
               'attribute' : 'MSArbo',
               'id' : 'awbc8bbbd3',
            });
            view014.addChild( container028 );


            var group020 = new Group({
               'artifactId' : 'SGZArbo.Section.four.SpecificationsView_group_0',
               'id' : 'aw12413586',
            });
            container028.addChild( group020 );


            var groupitem046 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.four.SpecificationsView_0',
               'id' : 'aweb1638b5',
            });
            group020.addChild( groupitem046 );


            var text069 = new Text({
               'resourceAttribute' : 'ms_diameterbreast',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'SGZArbo.Section.four.SpecificationsView_DAP',
               'id' : 'aw2198f4b6',
               'label' : MessageService.createStaticMessage('Di\u00E2metro \u00E0 Altura do Peito (DAP) (m)'),
               'required' : true,
            });
            groupitem046.addChild( text069 );

            var eventHandlers057 = [
               {
                     'method' : 'keydownFunctionCalculatorDAP',
                     'artifactId' : 'SGZArbo.Section.four.SpecificationsView_Commit_button_eventHandlers_click_keydownFunctionCalculator0',
                     'id' : 'awbe37ab45',
                     'event' : 'changestate',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'keydownFunctionCalculatorDAP',
                     'artifactId' : 'SGZArbo.Section.four.SpecificationsView_Commit_button_eventHandlers_click_keydownFunctionCalculator01',
                     'id' : 'aw85d46d03',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'keydownFunctionCalculatorDAP',
                     'artifactId' : 'SGZArbo.Section.four.SpecificationsView_Commit_button_eventHandlers_click_keydownFunctionCalculator01.click',
                     'id' : 'aw594ec62f',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            text069.eventHandlers = eventHandlers057;

            var text070 = new Text({
               'resourceAttribute' : 'ms_perimeterbreast',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'SGZArbo.Section.four.SpecificationsView_PAP',
               'id' : 'aw3ab7ff1a',
               'label' : MessageService.createStaticMessage('Per\u00EDmetro a Altura do Peito (PAP) (m)'),
               'required' : true,
            });
            groupitem046.addChild( text070 );

            var eventHandlers058 = [
               {
                     'method' : 'keydownFunctionCalculatorPAP',
                     'artifactId' : 'SGZArbo.Section.four.SpecificationsView_Commit_button_eventHandlers_click_keydownFunctionCalculator1',
                     'id' : 'awc9309bd3',
                     'event' : 'changestate',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'keydownFunctionCalculatorPAP',
                     'artifactId' : 'SGZArbo.Section.four.SpecificationsView_Commit_button_eventHandlers_click_keydownFunctionCalculator012',
                     'id' : 'aw83593bda',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'keydownFunctionCalculatorPAP',
                     'artifactId' : 'SGZArbo.Section.four.SpecificationsView_Commit_button_eventHandlers_click_keydownFunctionCalculator012.click',
                     'id' : 'awc092a3f7',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            text070.eventHandlers = eventHandlers058;

            var text071 = new Text({
               'resourceAttribute' : 'ms_firstbranch',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'SGZArbo.Section.four.SpecificationsView_groupitem_0_ms_firstbranch',
               'id' : 'aw4fcf8419',
               'label' : MessageService.createStaticMessage('Altura da primeira ramifica\u00E7\u00E3o (m)'),
            });
            groupitem046.addChild( text071 );


            var checkbox011 = new CheckBox({
               'resourceAttribute' : 'ms_slope',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.four.SpecificationsView_groupitem_2_ms_inadequatesite',
               'id' : 'awd7e6d9e5',
               'label' : MessageService.createStaticMessage('Inclina\u00E7\u00E3o'),
            });
            groupitem046.addChild( checkbox011 );


            var text072 = new Text({
               'resourceAttribute' : 'ms_direction',
               'lookup' : 'SGZArbo.msdirectionLookup',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.four.SpecificationsView_groupitem_5_ms_width',
               'id' : 'aw4d7cfa31',
               'label' : MessageService.createStaticMessage('Dire\u00E7\u00E3o'),
               'lookupAttribute' : 'ms_direction',
            });
            groupitem046.addChild( text072 );


            var text073 = new Text({
               'resourceAttribute' : 'ms_angle',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'SGZArbo.Section.four.SpecificationsView_groupitem_8_ms_width',
               'id' : 'awb8827181',
               'label' : MessageService.createStaticMessage('\u00C2ngulo (graus)'),
            });
            groupitem046.addChild( text073 );


            var text074 = new Text({
               'resourceAttribute' : 'ms_diametercolon',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'SGZArbo.Section.four.SpecificationsView_groupitem_4_ms_width',
               'id' : 'awa2be910f',
               'label' : MessageService.createStaticMessage('Di\u00E2metro do colo (m)'),
            });
            groupitem046.addChild( text074 );


            var text075 = new Text({
               'resourceAttribute' : 'ms_perimetercolon',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'SGZArbo.Section.four.SpecificationsView_groupitem_7_ms_width',
               'id' : 'aw49892a0c',
               'label' : MessageService.createStaticMessage('Per\u00EDmetro do Colo (PC) (m)'),
            });
            groupitem046.addChild( text075 );


            var text076 = new Text({
               'resourceAttribute' : 'ms_treeheight',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'SGZArbo.Section.four.SpecificationsView_groupitem_1_ms_treeheight',
               'id' : 'aw49716c27',
               'label' : MessageService.createStaticMessage('Altura da \u00E1rvore (m))'),
            });
            groupitem046.addChild( text076 );


            var footer008 = new Footer({
               'artifactId' : 'SGZArbo.Section.four.SpecificationsView_footer',
               'id' : 'awd932f68f',
            });
            view014.addChild( footer008 );


            var button022 = new Button({
               'artifactId' : 'SGZArbo.Section.four.SpecificationsView_Cancel_button',
               'id' : 'awd4b07be4',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers059 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'SGZArbo.Section.four.SpecificationsView_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'aw73bb31fb',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button022.eventHandlers = eventHandlers059;
            footer008.addChild( button022 );


            var button023 = new Button({
               'resourceAttribute' : 'ms_arboid',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZArbo.Section.four.SpecificationsView_Create_button',
               'id' : 'aw2c165e88',
               'label' : MessageService.createStaticMessage('Done'),
               'primary' : 'true',
            });
            var eventHandlers060 = [
               {
                     'method' : 'requiredFieldDap',
                     'artifactId' : 'SGZArbo.Section.four.SpecificationsView_Commit_button_eventHandlers_click_commit.requiredFieldTreeSpecification',
                     'id' : 'awf13c9e12',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               },
               {
                     'method' : 'saveWOShowView',
                     'artifactId' : 'SGZArbo.Section.four.SpecificationsView_Commit_button_eventHandlers_click_commit.requiredFieldTreeSpecification_save',
                     'id' : 'aw6f2ad4b8',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button023.eventHandlers = eventHandlers060;
            footer008.addChild( button023 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.Section.One.TechReportView', false);
               trackTimer.startTracking();
            }

            var view015 = new View({
               'id' : 'SGZArbo.Section.One.TechReportView',
               'label' : MessageService.createStaticMessage('Raiz'),
            });
            ui001.addChild( view015 );

            var requiredResources015 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.Section.One.TechReportView_asset',
                  'id' : 'aw324c7ad4',
                  'related' : {
                     'MSArboRpt' : {
                        'artifactId' : 'SGZArbo.Section.One.TechReportView_msarbo',
                        'id' : 'aw6a096be',
                     },
                  },
               },
            };
            view015.addRequiredResources( requiredResources015 );

            var container029 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.Section.One.TechReportView_container_0',
               'attribute' : 'MSArboRpt',
               'id' : 'aw892a7354',
            });
            view015.addChild( container029 );


            var group021 = new Group({
               'artifactId' : 'SGZArbo.Section.One.TechReportView_group_0',
               'id' : 'aw552baae2',
            });
            container029.addChild( group021 );


            var groupitem047 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.One.TechReportView_0',
               'id' : 'aw1103ff43',
            });
            group021.addChild( groupitem047 );


            var text077 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'artifactId' : 'SGZArbo.Section.One.TechReportView_groupitem_2_ms_interference01',
               'id' : 'awefd2da85',
               'label' : MessageService.createStaticMessage('Existe interfer\u00EAncia na raiz?'),
            });
            groupitem047.addChild( text077 );


            var footer009 = new Footer({
               'artifactId' : 'SGZArbo.Section.One.TechReportView_footer',
               'id' : 'aw162ed61',
            });
            view015.addChild( footer009 );


            var button024 = new Button({
               'artifactId' : 'SGZArbo.Section.One.TechReportView_Cancel_button',
               'id' : 'aw35cd0a4b',
               'label' : MessageService.createStaticMessage('N\u00E3o'),
            });
            var eventHandlers061 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'SGZArbo.Section.One.TechReportView_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'aw72cca2c0',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button024.eventHandlers = eventHandlers061;
            footer009.addChild( button024 );


            var button025 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'transitionTo' : 'SGZArbo.Section.One.TechReportView_DETAILS',
               'artifactId' : 'SGZArbo.Section.One.TechReportView_Sim_button',
               'id' : 'aw1984f0f',
               'label' : MessageService.createStaticMessage('Sim'),
            });
            footer009.addChild( button025 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.Section.One.TechReportView_DETAILS', false);
               trackTimer.startTracking();
            }

            var view016 = new View({
               'id' : 'SGZArbo.Section.One.TechReportView_DETAILS',
               'label' : MessageService.createStaticMessage('Selecione o Tipo Interfer\u00EAncia'),
            });
            ui001.addChild( view016 );

            var requiredResources016 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_asset',
                  'id' : 'aw3a664f89',
                  'related' : {
                     'MSArboRpt' : {
                        'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_msarbo',
                        'id' : 'aw137291c2',
                     },
                  },
               },
            };
            view016.addRequiredResources( requiredResources016 );

            var container030 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_container_0',
               'attribute' : 'MSArboRpt',
               'id' : 'aw91674169',
            });
            view016.addChild( container030 );


            var group022 = new Group({
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_group_0',
               'id' : 'awc8d45f2',
            });
            container030.addChild( group022 );


            var groupitem048 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_0',
               'id' : 'awa59fea95',
            });
            group022.addChild( groupitem048 );


            var text078 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS__groupitem_2_ms_interference00',
               'id' : 'aw89146cb5',
               'label' : MessageService.createStaticMessage('Selecione o tipo de interfer\u00EAncia na raiz:'),
            });
            groupitem048.addChild( text078 );


            var groupitem049 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_1',
               'id' : 'awd298da03',
            });
            group022.addChild( groupitem049 );


            var checkbox012 = new CheckBox({
               'resourceAttribute' : 'rptms_physicalbarrier',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_groupitem_2_ms_interference01',
               'id' : 'aw2e8d2d6d',
               'label' : MessageService.createStaticMessage('Barreira Fisica?'),
            });
            groupitem049.addChild( checkbox012 );


            var groupitem050 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_2',
               'id' : 'aw4b918bb9',
            });
            group022.addChild( groupitem050 );


            var checkbox013 = new CheckBox({
               'resourceAttribute' : 'rptms_gasnetwork',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_groupitem_2_ms_interference02',
               'id' : 'awb7847cd7',
               'label' : MessageService.createStaticMessage('Rede de G\u00E1s?'),
            });
            groupitem050.addChild( checkbox013 );


            var groupitem051 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_3',
               'id' : 'aw3c96bb2f',
            });
            group022.addChild( groupitem051 );


            var checkbox014 = new CheckBox({
               'resourceAttribute' : 'rptms_inspectionbox',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_groupitem_2_ms_interference03',
               'id' : 'awc0834c41',
               'label' : MessageService.createStaticMessage('Caixa de Inspe\u00E7\u00E3o?'),
            });
            groupitem051.addChild( checkbox014 );


            var groupitem052 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_4',
               'id' : 'awa2f22e8c',
            });
            group022.addChild( groupitem052 );


            var checkbox015 = new CheckBox({
               'resourceAttribute' : 'rptms_postwallbuilding',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_groupitem_2_ms_interference04',
               'id' : 'aw5ee7d9e2',
               'label' : MessageService.createStaticMessage('Edifica\u00E7\u00F5es\/Muro\/Poste?'),
            });
            groupitem052.addChild( checkbox015 );


            var groupitem053 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_5',
               'id' : 'awd5f51e1a',
            });
            group022.addChild( groupitem053 );


            var checkbox016 = new CheckBox({
               'resourceAttribute' : 'rptms_waternetwork',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_groupitem_2_ms_interference05',
               'id' : 'aw29e0e974',
               'label' : MessageService.createStaticMessage('Rede de \u00C1gua?'),
            });
            groupitem053.addChild( checkbox016 );


            var groupitem054 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_6',
               'id' : 'aw4cfc4fa0',
            });
            group022.addChild( groupitem054 );


            var checkbox017 = new CheckBox({
               'resourceAttribute' : 'rptms_seweragesystem',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_groupitem_2_ms_interference06',
               'id' : 'awb0e9b8ce',
               'label' : MessageService.createStaticMessage('Rede de Esgoto?'),
            });
            groupitem054.addChild( checkbox017 );


            var groupitem055 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_7',
               'id' : 'aw3bfb7f36',
            });
            group022.addChild( groupitem055 );


            var checkbox018 = new CheckBox({
               'resourceAttribute' : 'rptms_telecommunic',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_groupitem_2_ms_interference07',
               'id' : 'awc7ee8858',
               'label' : MessageService.createStaticMessage('Telecomunica\u00E7\u00F5es??'),
            });
            groupitem055.addChild( checkbox018 );


            var groupitem056 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_DETAILS_0',
               'id' : 'aw3a8d4c7',
            });
            group022.addChild( groupitem056 );


            var text079 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_DETAILS__groupitem_2_ms_interference00',
               'id' : 'aw4817e787',
               'label' : MessageService.createStaticMessage('DIAGN\u00D3STICO:'),
            });
            groupitem056.addChild( text079 );


            var groupitem057 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_DETAILS_2',
               'id' : 'aweda6b5eb',
            });
            group022.addChild( groupitem057 );


            var text080 = new Text({
               'resourceAttribute' : 'rptms_fungi01',
               'lookup' : 'SGZArbo.MS_FUNGILookup',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_groupitem_5_ms_fungi01',
               'id' : 'awd28e4c51',
               'label' : MessageService.createStaticMessage('Fungos'),
               'lookupAttribute' : 'rptms_fungi01',
            });
            groupitem057.addChild( text080 );


            var groupitem058 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_DETAILS_3',
               'id' : 'aw9aa1857d',
            });
            group022.addChild( groupitem058 );


            var text081 = new Text({
               'resourceAttribute' : 'rptms_termite01',
               'lookup' : 'SGZArbo.MS_TERMITELookup01',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_groupitem_6_ms_termite01',
               'id' : 'awef4175cb',
               'label' : MessageService.createStaticMessage('Cupim da Raiz'),
               'lookupAttribute' : 'rptms_termite01',
            });
            groupitem058.addChild( text081 );


            var groupitem059 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_DETAILS_4',
               'id' : 'aw4c510de',
            });
            group022.addChild( groupitem059 );


            var checkbox019 = new CheckBox({
               'resourceAttribute' : 'rptms_mechinjury01',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_groupitem_2_ms_mechinjury01',
               'id' : 'awaf98377b',
               'label' : MessageService.createStaticMessage('Inj\u00FAria Mec\u00E2nica?'),
            });
            groupitem059.addChild( checkbox019 );


            var groupitem060 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_DETAILS_5',
               'id' : 'aw73c22048',
            });
            group022.addChild( groupitem060 );


            var checkbox020 = new CheckBox({
               'resourceAttribute' : 'rptms_coilfolded',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_groupitem_2_ms_coilfolded',
               'id' : 'awe70e06d4',
               'label' : MessageService.createStaticMessage('Dobrada\/Enovelada?'),
            });
            groupitem060.addChild( checkbox020 );


            var groupitem061 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_DETAILS_6',
               'id' : 'aweacb71f2',
            });
            group022.addChild( groupitem061 );


            var checkbox021 = new CheckBox({
               'resourceAttribute' : 'rptms_exposed',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_groupitem_2_rptms_exposed',
               'id' : 'awf4ed4804',
               'label' : MessageService.createStaticMessage('Exposto?'),
            });
            groupitem061.addChild( checkbox021 );


            var groupitem062 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_DETAILS_7',
               'id' : 'aw9dcc4164',
            });
            group022.addChild( groupitem062 );


            var checkbox022 = new CheckBox({
               'resourceAttribute' : 'rptms_drills01',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_groupitem_2_ms_drills01',
               'id' : 'aw535fcc71',
               'label' : MessageService.createStaticMessage('Brocas?'),
            });
            groupitem062.addChild( checkbox022 );


            var groupitem063 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_DETAILS_8',
               'id' : 'awd735cf5',
            });
            group022.addChild( groupitem063 );


            var checkbox023 = new CheckBox({
               'resourceAttribute' : 'rptms_cropped',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_groupitem_2_ms_cropped',
               'id' : 'awd6bf68c2',
               'label' : MessageService.createStaticMessage('Cortada?'),
            });
            groupitem063.addChild( checkbox023 );


            var groupitem064 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_DETAILS_9',
               'id' : 'aw7a746c63',
            });
            group022.addChild( groupitem064 );


            var checkbox024 = new CheckBox({
               'resourceAttribute' : 'rptms_ant01',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Two.TechReportView_groupitem_2_ms_ant01',
               'id' : 'aw29d5914c',
               'label' : MessageService.createStaticMessage('Formiga Carpinteira?'),
            });
            groupitem064.addChild( checkbox024 );


            var footer010 = new Footer({
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_footer',
               'id' : 'aw14b0ea1d',
            });
            view016.addChild( footer010 );


            var button026 = new Button({
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_Cancel_button',
               'id' : 'aw97f20b38',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers062 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'aw64dbecc',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button026.eventHandlers = eventHandlers062;
            footer010.addChild( button026 );


            var button027 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_Create_button',
               'id' : 'aw6f542e54',
               'label' : MessageService.createStaticMessage('Done'),
            });
            var eventHandlers063 = [
               {
                     'method' : 'commitTechReportViewSec01',
                     'artifactId' : 'SGZArbo.Section.One.TechReportView_DETAILS_Commit_button_eventHandlers_click_commit',
                     'id' : 'aw93d0e201',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button027.eventHandlers = eventHandlers063;
            footer010.addChild( button027 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.Section.Three.TechReportView', false);
               trackTimer.startTracking();
            }

            var view017 = new View({
               'id' : 'SGZArbo.Section.Three.TechReportView',
               'label' : MessageService.createStaticMessage('Colo'),
            });
            ui001.addChild( view017 );

            var requiredResources017 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.Section.Three.TechReportView_asset',
                  'id' : 'awe86fc6ae',
                  'related' : {
                     'MSArboRpt' : {
                        'artifactId' : 'SGZArbo.Section.Three.TechReportView_msarbo',
                        'id' : 'awb6aa2d20',
                     },
                  },
               },
            };
            view017.addRequiredResources( requiredResources017 );

            var container031 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_container_0',
               'attribute' : 'MSArboRpt',
               'id' : 'awc43d08d0',
            });
            view017.addChild( container031 );


            var group023 = new Group({
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_group_0',
               'id' : 'aw422c1e1a',
            });
            container031.addChild( group023 );


            var groupitem065 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_0',
               'id' : 'aw90154944',
            });
            group023.addChild( groupitem065 );


            var text082 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_groupitem_2_ms_apparentdamage04',
               'id' : 'aw3181766e',
               'label' : MessageService.createStaticMessage('Existe Dano Aparente no Colo da \u00C0rvore?'),
            });
            groupitem065.addChild( text082 );


            var footer011 = new Footer({
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_footer',
               'id' : 'awb16856ff',
            });
            view017.addChild( footer011 );


            var button028 = new Button({
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_Cancel_button',
               'id' : 'awadf5b2a7',
               'label' : MessageService.createStaticMessage('N\u00E3o'),
            });
            var eventHandlers064 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'SGZArbo.Section.Three.TechReportView_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'aw57f5f045',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button028.eventHandlers = eventHandlers064;
            footer011.addChild( button028 );


            var button029 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'transitionTo' : 'SGZArbo.Section.Three.TechReportView_DETAILS',
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_Create_button',
               'id' : 'aw555397cb',
               'label' : MessageService.createStaticMessage('Sim'),
            });
            footer011.addChild( button029 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.Section.Three.TechReportView_DETAILS', false);
               trackTimer.startTracking();
            }

            var view018 = new View({
               'id' : 'SGZArbo.Section.Three.TechReportView_DETAILS',
               'label' : MessageService.createStaticMessage('Selecione o Tipo de Dano'),
            });
            ui001.addChild( view018 );

            var requiredResources018 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_asset',
                  'id' : 'awa25ef765',
                  'related' : {
                     'MSArboRpt' : {
                        'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_msarbo',
                        'id' : 'awba560729',
                     },
                  },
               },
            };
            view018.addRequiredResources( requiredResources018 );

            var container032 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_container_0',
               'attribute' : 'MSArboRpt',
               'id' : 'aw16c9e043',
            });
            view018.addChild( container032 );


            var group024 = new Group({
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_group_0',
               'id' : 'aw3bfc5a94',
            });
            container032.addChild( group024 );


            var groupitem066 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_00',
               'id' : 'awd101fb60',
            });
            group024.addChild( groupitem066 );


            var text083 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_groupitem_00_ms_fungi02',
               'id' : 'awed35c78d',
               'label' : MessageService.createStaticMessage('Selecione o Tipo de Dano:'),
            });
            groupitem066.addChild( text083 );


            var groupitem067 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_200',
               'id' : 'awba3c6bec',
            });
            group024.addChild( groupitem067 );


            var text084 = new Text({
               'resourceAttribute' : 'rptms_fungi02',
               'lookup' : 'SGZArbo.MS_FUNGILookup02',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_groupitem_5_ms_fungi02',
               'id' : 'aw2214a713',
               'label' : MessageService.createStaticMessage('Fungos'),
               'lookupAttribute' : 'rptms_fungi02',
            });
            groupitem067.addChild( text084 );


            var groupitem068 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_0',
               'id' : 'awb5f6e1b2',
            });
            group024.addChild( groupitem068 );


            var text085 = new Text({
               'resourceAttribute' : 'rptms_termite02',
               'lookup' : 'SGZArbo.MS_TERMITELookup02',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_groupitem_6_ms_termite02',
               'id' : 'aw81997cc5',
               'label' : MessageService.createStaticMessage('Cupim'),
               'lookupAttribute' : 'rptms_termite02',
            });
            groupitem068.addChild( text085 );


            var groupitem069 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_1',
               'id' : 'awc2f1d124',
            });
            group024.addChild( groupitem069 );


            var text086 = new Text({
               'resourceAttribute' : 'rptms_hollow01',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_groupitem_6_ms_hollow01',
               'id' : 'aw343e31b3',
               'label' : MessageService.createStaticMessage('Oco (%)'),
            });
            groupitem069.addChild( text086 );


            var groupitem070 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_2',
               'id' : 'aw5bf8809e',
            });
            group024.addChild( groupitem070 );


            var text087 = new Text({
               'resourceAttribute' : 'rptms_hollow02',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_groupitem_6_ms_hollow02',
               'id' : 'awad376009',
               'label' : MessageService.createStaticMessage('Oco (%)'),
            });
            groupitem070.addChild( text087 );


            var groupitem071 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_3',
               'id' : 'aw2cffb008',
            });
            group024.addChild( groupitem071 );


            var checkbox025 = new CheckBox({
               'resourceAttribute' : 'rptms_mechinjury02',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_groupitem_2_ms_mechinjury02',
               'id' : 'aw777005e4',
               'label' : MessageService.createStaticMessage('Inj\u00FAria Mec\u00E2nica?'),
            });
            groupitem071.addChild( checkbox025 );


            var groupitem072 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_4',
               'id' : 'awb29b25ab',
            });
            group024.addChild( groupitem072 );


            var checkbox026 = new CheckBox({
               'resourceAttribute' : 'rptms_annealing01',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_groupitem_2_ms_annealing01',
               'id' : 'aw122179c0',
               'label' : MessageService.createStaticMessage('Anelamento?'),
            });
            groupitem072.addChild( checkbox026 );


            var groupitem073 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_5',
               'id' : 'awc59c153d',
            });
            group024.addChild( groupitem073 );


            var checkbox027 = new CheckBox({
               'resourceAttribute' : 'rptms_drills02',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_groupitem_2_ms_drills02',
               'id' : 'aw7959745f',
               'label' : MessageService.createStaticMessage('Brocas?'),
            });
            groupitem073.addChild( checkbox027 );


            var groupitem074 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_6',
               'id' : 'aw5c954487',
            });
            group024.addChild( groupitem074 );


            var checkbox028 = new CheckBox({
               'resourceAttribute' : 'rptms_ant02',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_groupitem_2_ms_ant02',
               'id' : 'aw7790d13e',
               'label' : MessageService.createStaticMessage('Formiga Carpinteira?'),
            });
            groupitem074.addChild( checkbox028 );


            var footer012 = new Footer({
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_footer',
               'id' : 'awbd947cf6',
            });
            view018.addChild( footer012 );


            var button030 = new Button({
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_Cancel_button',
               'id' : 'aw5948d3c0',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers065 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'aw83883bfd',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button030.eventHandlers = eventHandlers065;
            footer012.addChild( button030 );


            var button031 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'transitionTo' : 'SGZArbo.Section.Three.TechReportView_DETAILS',
               'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_Create_button',
               'id' : 'awa1eef6ac',
               'label' : MessageService.createStaticMessage('Done'),
            });
            var eventHandlers066 = [
               {
                     'method' : 'commitTechReportViewSec03',
                     'artifactId' : 'SGZArbo.Section.Three.TechReportView_DETAILS_Done_button_eventHandlers_click_done',
                     'id' : 'awf57d0928',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button031.eventHandlers = eventHandlers066;
            footer012.addChild( button031 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.Section.Four.TechReportView', false);
               trackTimer.startTracking();
            }

            var view019 = new View({
               'id' : 'SGZArbo.Section.Four.TechReportView',
               'label' : MessageService.createStaticMessage('Tronco'),
            });
            ui001.addChild( view019 );

            var requiredResources019 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.Section.Four.TechReportView_asset',
                  'id' : 'awcdfff635',
                  'related' : {
                     'MSArboRpt' : {
                        'artifactId' : 'SGZArbo.Section.Four.TechReportView_msarbo',
                        'id' : 'awd152f7dc',
                     },
                  },
               },
            };
            view019.addRequiredResources( requiredResources019 );

            var container033 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_container_0',
               'attribute' : 'MSArboRpt',
               'id' : 'aw917b3379',
            });
            view019.addChild( container033 );


            var group025 = new Group({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_group_0',
               'id' : 'awf64058f7',
            });
            container033.addChild( group025 );


            var groupitem075 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_0',
               'id' : 'awb249fc42',
            });
            group025.addChild( groupitem075 );


            var text088 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_groupitem_2_ms_apparentdamage03',
               'id' : 'awb32d14cc',
               'label' : MessageService.createStaticMessage('Possui Dano Aparente no Tronco?'),
            });
            groupitem075.addChild( text088 );


            var footer013 = new Footer({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_footer',
               'id' : 'awd6908c03',
            });
            view019.addChild( footer013 );


            var button032 = new Button({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_Cancel_button',
               'id' : 'aw633b0965',
               'label' : MessageService.createStaticMessage('N\u00E3o'),
            });
            var eventHandlers067 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'SGZArbo.Section.Four.TechReportView_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'aw3ec6ea59',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button032.eventHandlers = eventHandlers067;
            footer013.addChild( button032 );


            var button033 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'transitionTo' : 'SGZArbo.Section.Four.TechReportView_DETAILS',
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_Create_button',
               'id' : 'aw9b9d2c09',
               'label' : MessageService.createStaticMessage('Sim'),
            });
            footer013.addChild( button033 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.Section.Four.TechReportView_DETAILS', false);
               trackTimer.startTracking();
            }

            var view020 = new View({
               'id' : 'SGZArbo.Section.Four.TechReportView_DETAILS',
               'label' : MessageService.createStaticMessage('Selecione o Tipo de Dano Aparente no Tronco'),
            });
            ui001.addChild( view020 );

            var requiredResources020 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_asset',
                  'id' : 'aw6c904ca7',
                  'related' : {
                     'MSArboRpt' : {
                        'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_msarbo',
                        'id' : 'awcff26a0e',
                     },
                  },
               },
            };
            view020.addRequiredResources( requiredResources020 );

            var container034 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_container_0',
               'attribute' : 'MSArboRpt',
               'id' : 'aw205d4486',
            });
            view020.addChild( container034 );


            var group026 = new Group({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_group_0',
               'id' : 'aw9e834b92',
            });
            container034.addChild( group026 );


            var groupitem076 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_00',
               'id' : 'aw921c7dd7',
            });
            group026.addChild( groupitem076 );


            var text089 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_groupitem_00_ms_fungi03',
               'id' : 'aw86fa001a',
               'label' : MessageService.createStaticMessage('Selecione o Tipo de Dano Aparente no Tronco:'),
            });
            groupitem076.addChild( text089 );


            var groupitem077 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_0',
               'id' : 'awc1993cda',
            });
            group026.addChild( groupitem077 );


            var text090 = new Text({
               'resourceAttribute' : 'rptms_fungi03',
               'lookup' : 'SGZArbo.MS_FUNGILookup03',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_groupitem_5_ms_fungi03',
               'id' : 'awf185f4d4',
               'label' : MessageService.createStaticMessage('Fungos'),
               'lookupAttribute' : 'rptms_fungi03',
            });
            groupitem077.addChild( text090 );


            var groupitem078 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_1',
               'id' : 'awb69e0c4c',
            });
            group026.addChild( groupitem078 );


            var text091 = new Text({
               'resourceAttribute' : 'rptms_termite03',
               'lookup' : 'SGZArbo.MS_TERMITELookup03',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_groupitem_6_ms_termite03',
               'id' : 'aw8185b432',
               'label' : MessageService.createStaticMessage('Cupim'),
               'lookupAttribute' : 'rptms_termite03',
            });
            groupitem078.addChild( text091 );


            var groupitem079 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_2',
               'id' : 'aw2f975df6',
            });
            group026.addChild( groupitem079 );


            var text092 = new Text({
               'resourceAttribute' : 'rptms_crack',
               'lookup' : 'SGZArbo.MS_CRACKLookup',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_groupitem_6_ms_crack',
               'id' : 'aw924b55b1',
               'label' : MessageService.createStaticMessage('Rachadura'),
               'lookupAttribute' : 'rptms_crack',
            });
            groupitem079.addChild( text092 );


            var groupitem080 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_3',
               'id' : 'aw58906d60',
            });
            group026.addChild( groupitem080 );


            var text093 = new Text({
               'resourceAttribute' : 'rptms_hollow03',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_groupitem_6_ms_hollow03',
               'id' : 'awc6f8a79e',
               'label' : MessageService.createStaticMessage('Oco (%)'),
            });
            groupitem080.addChild( text093 );


            var groupitem081 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_4',
               'id' : 'awc6f4f8c3',
            });
            group026.addChild( groupitem081 );


            var text094 = new Text({
               'resourceAttribute' : 'rptms_hollow04',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_groupitem_6_ms_hollow04',
               'id' : 'aw589c323d',
               'label' : MessageService.createStaticMessage('Oco (%)'),
            });
            groupitem081.addChild( text094 );


            var groupitem082 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_5',
               'id' : 'awb1f3c855',
            });
            group026.addChild( groupitem082 );


            var text095 = new Text({
               'resourceAttribute' : 'rptms_dry',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_groupitem_6_ms_dry',
               'id' : 'awa1bbf1dc',
               'label' : MessageService.createStaticMessage('Seco (%)'),
            });
            groupitem082.addChild( text095 );


            var groupitem083 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_6',
               'id' : 'aw28fa99ef',
            });
            group026.addChild( groupitem083 );


            var checkbox029 = new CheckBox({
               'resourceAttribute' : 'rptms_mechinjury03',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_groupitem_2_ms_mechinjury03',
               'id' : 'aw1f62364b',
               'label' : MessageService.createStaticMessage('Inj\u00FAria Mec\u00E2nica?'),
            });
            groupitem083.addChild( checkbox029 );


            var groupitem084 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_7',
               'id' : 'aw5ffda979',
            });
            group026.addChild( groupitem084 );


            var checkbox030 = new CheckBox({
               'resourceAttribute' : 'rptms_ant03',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_groupitem_2_ms_ant03',
               'id' : 'aw1564f846',
               'label' : MessageService.createStaticMessage('Formiga Carpinteira?'),
            });
            groupitem084.addChild( checkbox030 );


            var groupitem085 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_8',
               'id' : 'awcf42b4e8',
            });
            group026.addChild( groupitem085 );


            var checkbox031 = new CheckBox({
               'resourceAttribute' : 'rptms_annealing02',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_groupitem_2_ms_annealing02',
               'id' : 'aw44a87fa9',
               'label' : MessageService.createStaticMessage('Anelamento?'),
            });
            groupitem085.addChild( checkbox031 );


            var groupitem086 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_9',
               'id' : 'awb845847e',
            });
            group026.addChild( groupitem086 );


            var checkbox032 = new CheckBox({
               'resourceAttribute' : 'rptms_sapoozing',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_groupitem_2_ms_sapoozing',
               'id' : 'aw8cee76f8',
               'label' : MessageService.createStaticMessage('Exsuda\u00E7\u00E3o de Seiva?'),
            });
            groupitem086.addChild( checkbox032 );


            var groupitem087 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_10',
               'id' : 'aw8b074c96',
            });
            group026.addChild( groupitem087 );


            var checkbox033 = new CheckBox({
               'resourceAttribute' : 'rptms_drills03',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_groupitem_2_ms_drills03',
               'id' : 'aw1296b3c8',
               'label' : MessageService.createStaticMessage('Brocas?'),
            });
            groupitem087.addChild( checkbox033 );


            var groupitem088 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_11',
               'id' : 'awfc007c00',
            });
            group026.addChild( groupitem088 );


            var checkbox034 = new CheckBox({
               'resourceAttribute' : 'rptms_accbark',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_groupitem_2_ms_accbark',
               'id' : 'awf3975329',
               'label' : MessageService.createStaticMessage('Casca Inclusa?'),
            });
            groupitem088.addChild( checkbox034 );


            var footer014 = new Footer({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_footer',
               'id' : 'awc83011d1',
            });
            view020.addChild( footer014 );


            var button034 = new Button({
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_Cancel_button',
               'id' : 'aw3e7ea1ae',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers068 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'aw7dfebc26',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button034.eventHandlers = eventHandlers068;
            footer014.addChild( button034 );


            var button035 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_Create_button',
               'id' : 'awc6d884c2',
               'label' : MessageService.createStaticMessage('Done'),
            });
            var eventHandlers069 = [
               {
                     'method' : 'commitTechReportViewSec04',
                     'artifactId' : 'SGZArbo.Section.Four.TechReportView_DETAILS_Commit_button_eventHandlers_click_cancel',
                     'id' : 'awf0a10b34',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button035.eventHandlers = eventHandlers069;
            footer014.addChild( button035 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.Section.Five.TechReportView_INTERFERENCE', false);
               trackTimer.startTracking();
            }

            var view021 = new View({
               'id' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE',
               'label' : MessageService.createStaticMessage('Copa'),
            });
            ui001.addChild( view021 );

            var requiredResources021 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_asset',
                  'id' : 'awf04a8fdf',
                  'related' : {
                     'MSArboRpt' : {
                        'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_msarbo',
                        'id' : 'aw91b049c3',
                     },
                  },
               },
            };
            view021.addRequiredResources( requiredResources021 );

            var container035 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_container_1',
               'attribute' : 'MSArboRpt',
               'id' : 'awa37e71de',
            });
            view021.addChild( container035 );


            var group027 = new Group({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_group_1',
               'id' : 'awc0f872a',
            });
            container035.addChild( group027 );


            var groupitem089 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_1',
               'id' : 'aw78e859aa',
            });
            group027.addChild( groupitem089 );


            var checkbox035 = new CheckBox({
               'resourceAttribute' : 'rptms_sheets',
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_groupitem_10_rptms_sheets',
               'id' : 'aw87d2040b',
               'label' : MessageService.createStaticMessage('Folhas?'),
            });
            groupitem089.addChild( checkbox035 );


            var checkbox036 = new CheckBox({
               'resourceAttribute' : 'rptms_flower',
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_groupitem_20_rptms_flower',
               'id' : 'aw64f5df66',
               'label' : MessageService.createStaticMessage('Flor?'),
            });
            groupitem089.addChild( checkbox036 );


            var checkbox037 = new CheckBox({
               'resourceAttribute' : 'rptms_fruits',
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_groupitem_30_rptms_fruits',
               'id' : 'awf1c076a',
               'label' : MessageService.createStaticMessage('Frutos?'),
            });
            groupitem089.addChild( checkbox037 );


            var text096 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_groupitem_10_ms_fruits',
               'id' : 'aw23c8aa35',
               'label' : MessageService.createStaticMessage('Possui Interfer\u00EAncia na Copa?'),
            });
            groupitem089.addChild( text096 );


            var footer015 = new Footer({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_footer',
               'id' : 'aw9672321c',
            });
            view021.addChild( footer015 );


            var button036 = new Button({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_Cancel_button',
               'id' : 'aw1b6d5bc5',
               'label' : MessageService.createStaticMessage('N\u00E3o'),
            });
            var eventHandlers070 = [
               {
                     'method' : 'commitTechReportViewSec',
                     'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'aw9a560cd1',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button036.eventHandlers = eventHandlers070;
            footer015.addChild( button036 );


            var button037 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'transitionTo' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS',
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_yES_button',
               'id' : 'aw964cf214',
               'label' : MessageService.createStaticMessage('Sim'),
            });
            var eventHandlers071 = [
               {
                     'method' : 'commitTechReportViewNext',
                     'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_yES_button_eventHandlers_click_yES',
                     'id' : 'awf270991e',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button037.eventHandlers = eventHandlers071;
            footer015.addChild( button037 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS', false);
               trackTimer.startTracking();
            }

            var view022 = new View({
               'id' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS',
               'label' : MessageService.createStaticMessage('Copa'),
            });
            ui001.addChild( view022 );

            var requiredResources022 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_asset',
                  'id' : 'aw14c61e07',
                  'related' : {
                     'MSArboRpt' : {
                        'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_msarbo',
                        'id' : 'aw195c9fb4',
                     },
                  },
               },
            };
            view022.addRequiredResources( requiredResources022 );

            var container036 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_container_1',
               'attribute' : 'MSArboRpt',
               'id' : 'awb81190c3',
            });
            view022.addChild( container036 );


            var group028 = new Group({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_group_1',
               'id' : 'awc2e68f63',
            });
            container036.addChild( group028 );


            var groupitem090 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_0',
               'id' : 'awe2a1d8b5',
            });
            group028.addChild( groupitem090 );


            var text097 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_groupitem_00_ms_busstop',
               'id' : 'aw920e16d1',
               'label' : MessageService.createStaticMessage('Selecione o tipo de interfer\u00EAncia na copa:'),
            });
            groupitem090.addChild( text097 );


            var groupitem091 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_1',
               'id' : 'aw95a6e823',
            });
            group028.addChild( groupitem091 );


            var checkbox038 = new CheckBox({
               'resourceAttribute' : 'rptms_busstop',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_groupitem_2_ms_busstop',
               'id' : 'aw236ea9ff',
               'label' : MessageService.createStaticMessage('Ponto de \u00D4nibus?'),
            });
            groupitem091.addChild( checkbox038 );


            var groupitem092 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_2',
               'id' : 'awcafb999',
            });
            group028.addChild( groupitem092 );


            var checkbox039 = new CheckBox({
               'resourceAttribute' : 'rptms_tnetwork',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_groupitem_2_ms_tnetwork',
               'id' : 'awbd62d61b',
               'label' : MessageService.createStaticMessage('Rede Domiciliar\/Telecomunica\u00E7\u00F5es?'),
            });
            groupitem092.addChild( checkbox039 );


            var groupitem093 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_3',
               'id' : 'aw7ba8890f',
            });
            group028.addChild( groupitem093 );


            var checkbox040 = new CheckBox({
               'resourceAttribute' : 'rptms_buildings',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_groupitem_2_ms_buildings',
               'id' : 'awfc5a3fa3',
               'label' : MessageService.createStaticMessage('Edifica\u00E7\u00F5es?'),
            });
            groupitem093.addChild( checkbox040 );


            var groupitem094 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_4',
               'id' : 'awe5cc1cac',
            });
            group028.addChild( groupitem094 );


            var checkbox041 = new CheckBox({
               'resourceAttribute' : 'rptms_tvoltage',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_groupitem_2_ms_tvoltage',
               'id' : 'awd07eb260',
               'label' : MessageService.createStaticMessage('Rede de alta tens\u00E3o\/Transformador?'),
            });
            groupitem094.addChild( checkbox041 );


            var groupitem095 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_5',
               'id' : 'aw92cb2c3a',
            });
            group028.addChild( groupitem095 );


            var checkbox042 = new CheckBox({
               'resourceAttribute' : 'rptms_lighting',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_groupitem_2_ms_lighting',
               'id' : 'awc6badba9',
               'label' : MessageService.createStaticMessage('Ilumina\u00E7\u00E3o?'),
            });
            groupitem095.addChild( checkbox042 );


            var groupitem096 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_6',
               'id' : 'awbc27d80',
            });
            group028.addChild( groupitem096 );


            var checkbox043 = new CheckBox({
               'resourceAttribute' : 'rptms_transitplates',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_groupitem_2_ms_transitplates',
               'id' : 'aw8d365085',
               'label' : MessageService.createStaticMessage('Placas de Tr\u00E2nsito?'),
            });
            groupitem096.addChild( checkbox043 );


            var groupitem097 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_7',
               'id' : 'aw7cc54d16',
            });
            group028.addChild( groupitem097 );


            var checkbox044 = new CheckBox({
               'resourceAttribute' : 'rptms_wall',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_groupitem_2_ms_wall',
               'id' : 'awa0c1e4e7',
               'label' : MessageService.createStaticMessage('Muro?'),
            });
            groupitem097.addChild( checkbox044 );


            var groupitem098 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_8',
               'id' : 'awec7a5087',
            });
            group028.addChild( groupitem098 );


            var checkbox045 = new CheckBox({
               'resourceAttribute' : 'rptms_lightstraffic',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_groupitem_2_ms_lightstraffic',
               'id' : 'awf426e39b',
               'label' : MessageService.createStaticMessage('Sem\u00E1foros?'),
            });
            groupitem098.addChild( checkbox045 );


            var groupitem099 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_9',
               'id' : 'aw9b7d6011',
            });
            group028.addChild( groupitem099 );


            var checkbox046 = new CheckBox({
               'resourceAttribute' : 'rptms_lamppost',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_groupitem_2_ms_lamppost',
               'id' : 'awf463accc',
               'label' : MessageService.createStaticMessage('Poste?'),
            });
            groupitem099.addChild( checkbox046 );


            var groupitem100 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_10',
               'id' : 'aw562908bb',
            });
            group028.addChild( groupitem100 );


            var checkbox047 = new CheckBox({
               'resourceAttribute' : 'rptms_tvehicle',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_groupitem_2_ms_tvehicle',
               'id' : 'awc666b521',
               'label' : MessageService.createStaticMessage('Tr\u00E2nsito de ve\u00EDculos\/Pedestres?'),
            });
            groupitem100.addChild( checkbox047 );


            var groupitem101 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_0',
               'id' : 'aw559f27d2',
            });
            group028.addChild( groupitem101 );


            var text098 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_groupitem_2_ms_apparentdamage02',
               'id' : 'aw68416974',
               'label' : MessageService.createStaticMessage('Selecione o tipo de dano aparente:'),
            });
            groupitem101.addChild( text098 );


            var groupitem102 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_1',
               'id' : 'aw22981744',
            });
            group028.addChild( groupitem102 );


            var text099 = new Text({
               'resourceAttribute' : 'rptms_fungi04',
               'lookup' : 'SGZArbo.MS_FUNGILookup04',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_groupitem_5_ms_fungi04',
               'id' : 'aw8e1b3ed0',
               'label' : MessageService.createStaticMessage('Fungos'),
               'lookupAttribute' : 'rptms_fungi04',
            });
            groupitem102.addChild( text099 );


            var groupitem103 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_2',
               'id' : 'awbb9146fe',
            });
            group028.addChild( groupitem103 );


            var text100 = new Text({
               'resourceAttribute' : 'rptms_termite04',
               'lookup' : 'SGZArbo.MS_TERMITELookup04',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_groupitem_6_ms_termite04',
               'id' : 'aw573a620',
               'label' : MessageService.createStaticMessage('Cupim'),
               'lookupAttribute' : 'rptms_termite04',
            });
            groupitem103.addChild( text100 );


            var groupitem104 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_3',
               'id' : 'awcc967668',
            });
            group028.addChild( groupitem104 );


            var text101 = new Text({
               'resourceAttribute' : 'rptms_uncup',
               'lookup' : 'SGZArbo.msuncupLookup',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_groupitem_6_ms_uncup',
               'id' : 'awe1576df7',
               'label' : MessageService.createStaticMessage('Copa Desequilibrada'),
               'lookupAttribute' : 'rptms_uncup',
            });
            groupitem104.addChild( text101 );


            var groupitem105 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_4',
               'id' : 'aw52f2e3cb',
            });
            group028.addChild( groupitem105 );


            var checkbox048 = new CheckBox({
               'resourceAttribute' : 'rptms_mechinjury04',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_groupitem_2_ms_mechinjury04',
               'id' : 'aw2f59cb31',
               'label' : MessageService.createStaticMessage('Inj\u00FAria Mec\u00E2nica?'),
            });
            groupitem105.addChild( checkbox048 );


            var groupitem106 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_5',
               'id' : 'aw25f5d35d',
            });
            group028.addChild( groupitem106 );


            var checkbox049 = new CheckBox({
               'resourceAttribute' : 'rptms_virus',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_groupitem_2_ms_virus',
               'id' : 'awb6261719',
               'label' : MessageService.createStaticMessage('Bacterioses\/Viroses?'),
            });
            groupitem106.addChild( checkbox049 );


            var groupitem107 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_6',
               'id' : 'awbcfc82e7',
            });
            group028.addChild( groupitem107 );


            var checkbox050 = new CheckBox({
               'resourceAttribute' : 'rptms_inadequatepruning',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_groupitem_2_ms_inadequatepruning',
               'id' : 'aw96e2b84d',
               'label' : MessageService.createStaticMessage('Poda Inadequada?'),
            });
            groupitem107.addChild( checkbox050 );


            var groupitem108 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_7',
               'id' : 'awcbfbb271',
            });
            group028.addChild( groupitem108 );


            var checkbox051 = new CheckBox({
               'resourceAttribute' : 'rptms_senescence',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_groupitem_2_ms_senescence',
               'id' : 'aw47bf9f6b',
               'label' : MessageService.createStaticMessage('Senesc\u00EAncia?'),
            });
            groupitem108.addChild( checkbox051 );


            var groupitem109 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_8',
               'id' : 'aw5b44afe0',
            });
            group028.addChild( groupitem109 );


            var checkbox052 = new CheckBox({
               'resourceAttribute' : 'rptms_parasitesplants',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_groupitem_2_ms_parasitesplants',
               'id' : 'aw43cb445f',
               'label' : MessageService.createStaticMessage('Plantas Parasitas?'),
            });
            groupitem109.addChild( checkbox052 );


            var groupitem110 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_9',
               'id' : 'aw2c439f76',
            });
            group028.addChild( groupitem110 );


            var checkbox053 = new CheckBox({
               'resourceAttribute' : 'rptms_drills04',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_groupitem_2_ms_drills03',
               'id' : 'aw5ac57fdc',
               'label' : MessageService.createStaticMessage('Brocas?'),
            });
            groupitem110.addChild( checkbox053 );


            var groupitem111 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_10',
               'id' : 'aw8548c2bf',
            });
            group028.addChild( groupitem111 );


            var checkbox054 = new CheckBox({
               'resourceAttribute' : 'rptms_badformation',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_groupitem_2_ms_badformation',
               'id' : 'awa6ae1c33',
               'label' : MessageService.createStaticMessage('M\u00E1-forma\u00E7\u00E3o?'),
            });
            groupitem111.addChild( checkbox054 );


            var groupitem112 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_11',
               'id' : 'awf24ff229',
            });
            group028.addChild( groupitem112 );


            var checkbox055 = new CheckBox({
               'resourceAttribute' : 'rptms_ant04',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Six.TechReportView_DETAILS_groupitem_2_ms_ant04',
               'id' : 'aw980a77f3',
               'label' : MessageService.createStaticMessage('Formiga Carpinteira?'),
            });
            groupitem112.addChild( checkbox055 );


            var footer016 = new Footer({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_footer',
               'id' : 'aw1e9ee46b',
            });
            view022.addChild( footer016 );


            var button038 = new Button({
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_Cancel_button',
               'id' : 'aw330cfe58',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers072 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'aw5919e71',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button038.eventHandlers = eventHandlers072;
            footer016.addChild( button038 );


            var button039 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'transitionTo' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS',
               'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_Create_button',
               'id' : 'awcbaadb34',
               'label' : MessageService.createStaticMessage('Done'),
            });
            var eventHandlers073 = [
               {
                     'method' : 'commitTechReportViewSec05',
                     'artifactId' : 'SGZArbo.Section.Five.TechReportView_INTERFERENCE_DETAILS_Done_button_eventHandlers_click_cancel',
                     'id' : 'aw52f4eb87',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button039.eventHandlers = eventHandlers073;
            footer016.addChild( button039 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.Section.Seven.TechReportView', false);
               trackTimer.startTracking();
            }

            var view023 = new View({
               'id' : 'SGZArbo.Section.Seven.TechReportView',
               'label' : MessageService.createStaticMessage('Recomenda\u00E7\u00F5es'),
            });
            ui001.addChild( view023 );

            var requiredResources023 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.Section.Seven.TechReportView_asset',
                  'id' : 'awabace1d5',
                  'related' : {
                     'MSArboRpt' : {
                        'artifactId' : 'SGZArbo.Section.Seven.TechReportView_msarbo',
                        'id' : 'aw713e46b3',
                     },
                  },
               },
            };
            view023.addRequiredResources( requiredResources023 );

            var container037 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_container_0',
               'attribute' : 'MSArboRpt',
               'id' : 'awc01d74b7',
            });
            view023.addChild( container037 );


            var group029 = new Group({
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_group_0',
               'id' : 'aw2bed488f',
            });
            container037.addChild( group029 );


            var groupitem113 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_0',
               'id' : 'awee276160',
            });
            group029.addChild( groupitem113 );


            var checkbox056 = new CheckBox({
               'resourceAttribute' : 'rptms_todonothing',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_groupitem_2_rptms_todonothing',
               'id' : 'awa080b116',
               'label' : MessageService.createStaticMessage('Nada a fazer?'),
            });
            groupitem113.addChild( checkbox056 );


            var text102 = new Text({
               'resourceAttribute' : 'rptms_prioritylevel',
               'lookup' : 'SGZArbo.msprioritylevelLookup',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_groupitem_5_rptms_prioritylevel',
               'id' : 'awbc0d312',
               'label' : MessageService.createStaticMessage('N\u00EDvel de Prioridade'),
               'lookupAttribute' : 'rptms_prioritylevel',
            });
            groupitem113.addChild( text102 );


            var text103 = new Text({
               'editable' : false,
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_groupitem_5_1_rptms_postage',
               'id' : 'awbd59e889',
               'label' : MessageService.createStaticMessage('PODA'),
            });
            groupitem113.addChild( text103 );


            var checkbox057 = new CheckBox({
               'resourceAttribute' : 'rptms_cleaning',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_groupitem_2_rptms_cleaning',
               'id' : 'awef158e2e',
               'label' : MessageService.createStaticMessage('Limpeza?'),
            });
            groupitem113.addChild( checkbox057 );


            var checkbox058 = new CheckBox({
               'resourceAttribute' : 'rptms_corrective',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_groupitem_2_rptms_corrective',
               'id' : 'aw8ebe171',
               'label' : MessageService.createStaticMessage('Corretiva?'),
            });
            groupitem113.addChild( checkbox058 );


            var checkbox059 = new CheckBox({
               'resourceAttribute' : 'rptms_lifting',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_groupitem_2_rptms_lifting',
               'id' : 'aw7ac470c3',
               'label' : MessageService.createStaticMessage('Levantamento?'),
            });
            groupitem113.addChild( checkbox059 );


            var checkbox060 = new CheckBox({
               'resourceAttribute' : 'rptms_driving',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_groupitem_2_rptms_driving',
               'id' : 'aw86393a6',
               'label' : MessageService.createStaticMessage('Condu\u00E7\u00E3o?'),
            });
            groupitem113.addChild( checkbox060 );


            var checkbox061 = new CheckBox({
               'resourceAttribute' : 'rptms_adequacy',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_groupitem_2_rptms_adequacy',
               'id' : 'aw389592be',
               'label' : MessageService.createStaticMessage('Adequa\u00E7\u00E3o?'),
            });
            groupitem113.addChild( checkbox061 );


            var checkbox062 = new CheckBox({
               'resourceAttribute' : 'rptms_sitesuitability',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_groupitem_2_rptms_sitesuitability',
               'id' : 'awcc189660',
               'label' : MessageService.createStaticMessage('Adequa\u00E7\u00E3o do Canteiro?'),
            });
            groupitem113.addChild( checkbox062 );


            var text104 = new Text({
               'editable' : false,
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_groupitem_5_1_2_rptms_REMOCAO',
               'id' : 'aw6bf7f1af',
               'label' : MessageService.createStaticMessage('REMO\u00C7\u00C3O'),
            });
            groupitem113.addChild( text104 );


            var checkbox063 = new CheckBox({
               'resourceAttribute' : 'rptms_suppression',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_groupitem_2_rptms_suppression',
               'id' : 'awb99ad5f9',
               'label' : MessageService.createStaticMessage('Supress\u00E3o?'),
            });
            groupitem113.addChild( checkbox063 );


            var checkbox064 = new CheckBox({
               'resourceAttribute' : 'rptms_tranplante',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_groupitem_2_rptms_tranplante',
               'id' : 'aw43a9c9e7',
               'label' : MessageService.createStaticMessage('Transplante?'),
            });
            groupitem113.addChild( checkbox064 );


            var text105 = new Text({
               'editable' : false,
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_groupitem_5_1_3_rptms_PLANTIO',
               'id' : 'awce60df3f',
               'label' : MessageService.createStaticMessage('PLANTIO'),
            });
            groupitem113.addChild( text105 );


            var checkbox065 = new CheckBox({
               'resourceAttribute' : 'rptms_planting01',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_groupitem_2_rptms_planting01',
               'id' : 'awd290092d',
               'label' : MessageService.createStaticMessage('Plantio?'),
            });
            groupitem113.addChild( checkbox065 );


            var text106 = new Text({
               'resourceAttribute' : 'rptms_postage',
               'lookup' : 'SGZArbo.mspostageLookup',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_groupitem_5_rptms_postage',
               'id' : 'awe3df951',
               'label' : MessageService.createStaticMessage('Porte'),
               'lookupAttribute' : 'rptms_postage',
            });
            groupitem113.addChild( text106 );


            var checkbox066 = new CheckBox({
               'resourceAttribute' : 'rptms_monitoring',
               'editable' : true,
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_groupitem_2_ms_monitoring',
               'id' : 'awfd083886',
               'label' : MessageService.createStaticMessage('Monitoramento?'),
            });
            groupitem113.addChild( checkbox066 );


            var footer017 = new Footer({
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_footer',
               'id' : 'aw76fc3d6c',
            });
            view023.addChild( footer017 );


            var button040 = new Button({
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_Cancel_button',
               'id' : 'awdefa76f0',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers074 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'SGZArbo.Section.Seven.TechReportView_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'awd85832bc',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button040.eventHandlers = eventHandlers074;
            footer017.addChild( button040 );


            var button041 = new Button({
               'resourceAttribute' : 'rptms_arboid',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZArbo.Section.Seven.TechReportView_Create_button',
               'id' : 'aw265c539c',
               'label' : MessageService.createStaticMessage('Done'),
               'primary' : 'true',
            });
            var eventHandlers075 = [
               {
                     'method' : 'commitTechReportViewSec',
                     'artifactId' : 'SGZArbo.Section.Seven.TechReportView_Commit_button_eventHandlers_click_commit',
                     'id' : 'aw4dc56e71',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button041.eventHandlers = eventHandlers075;
            footer017.addChild( button041 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.Section.Obs.TechReportView', false);
               trackTimer.startTracking();
            }

            var view024 = new View({
               'id' : 'SGZArbo.Section.Obs.TechReportView',
               'label' : MessageService.createStaticMessage('Observa\u00E7\u00F5es'),
            });
            ui001.addChild( view024 );

            var requiredResources024 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.Section.Obs.TechReportView_asset',
                  'id' : 'awe9af88a0',
                  'related' : {
                     'MSArboRpt' : {
                        'artifactId' : 'SGZArbo.Section.Obs.TechReportView_msarbo',
                        'id' : 'aw5113c069',
                     },
                  },
               },
            };
            view024.addRequiredResources( requiredResources024 );

            var container038 = new Container({
               'resource' : 'asset',
               'artifactId' : 'SGZArbo.Section.Obs.TechReportView_container_0',
               'attribute' : 'MSArboRpt',
               'id' : 'aw6e7b0bb9',
            });
            view024.addChild( container038 );


            var group030 = new Group({
               'artifactId' : 'SGZArbo.Section.Obs.TechReportView_group_0',
               'id' : 'aw4dcb5ec3',
            });
            container038.addChild( group030 );


            var groupitem114 = new GroupItem({
               'artifactId' : 'SGZArbo.Section.Obs.TechReportView_0',
               'id' : 'awd1150fb9',
            });
            group030.addChild( groupitem114 );


            var textarea004 = new TextArea({
               'resourceAttribute' : 'rptms_comments',
               'editable' : true,
               'artifactId' : 'SGZArbo.AssetTechReportView_asset_groupitem_SGZArbo.comments',
               'id' : 'aw54a5d920',
               'label' : MessageService.createStaticMessage('Observa\u00E7\u00F5es'),
            });
            groupitem114.addChild( textarea004 );


            var footer018 = new Footer({
               'artifactId' : 'SGZArbo.Section.OBS.TechReportView_footer',
               'id' : 'awaae24954',
            });
            view024.addChild( footer018 );


            var button042 = new Button({
               'artifactId' : 'SGZArbo.Section.OBS.TechReportView_Cancel_button',
               'id' : 'aw6697fdd0',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers076 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'SGZArbo.Section.OBS.TechReportView_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'awf63db8a1',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button042.eventHandlers = eventHandlers076;
            footer018.addChild( button042 );


            var button043 = new Button({
               'resourceAttribute' : 'rptms_arboid',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZArbo.Section.OBS.TechReportView_Create_button',
               'id' : 'aw9e31d8bc',
               'label' : MessageService.createStaticMessage('Done'),
               'primary' : 'true',
            });
            var eventHandlers077 = [
               {
                     'method' : 'commitTechReportViewSec',
                     'artifactId' : 'SGZArbo.Section.OBS.TechReportView_Commit_button_eventHandlers_click_commit',
                     'id' : 'aw63a0e46c',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button043.eventHandlers = eventHandlers077;
            footer018.addChild( button043 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var lookup001 = new Lookup({
               'filterMethod' : 'filterAssetStatus',
               'resource' : 'domainAssetStatus',
               'filterClass' : 'application.handlers.StatusChangeHandler',
               'id' : 'SGZArbo.statusLookup',
               'label' : MessageService.createStaticMessage('Asset Status'),
            });
            ui001.addChild( lookup001 );

            var requiredResources025 = {
               'domainAssetStatus' : {
                  'artifactId' : 'SGZArbo.statusLookup_domainassetstatus',
                  'id' : 'aw80c6ade2',
               },
            };
            lookup001.addRequiredResources( requiredResources025 );


            var listItemTemplate003 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.statusLookup_domainassetstatus_listItemTemplate_Item1Desc1',
               'id' : 'aw837f99da',
            });

            var listtext006 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.statusLookup_domainassetstatus_Item1Desc1_value',
               'id' : 'aw60d676de',
            });
            listItemTemplate003.addChild( listtext006 );


            var listtext007 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.statusLookup_domainassetstatus_Item1Desc1_description',
               'id' : 'awd346cc4',
            });
            listItemTemplate003.addChild( listtext007 );



            var list003 = new List({
               'resource' : 'domainAssetStatus',
               'listItemTemplate' : listItemTemplate003,
               'artifactId' : 'SGZArbo.statusLookup_domainassetstatus_list',
               'id' : 'aw5a59afdd',
            });
            lookup001.addChild( list003 );


            var returnAttributes001 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.statusLookup_returnAttributes',
               'id' : 'awc66adfd2',
            });
            lookup001.addChild( returnAttributes001 );


            var returnAttribute001 = new ReturnAttribute({
               'targetAttribute' : 'status',
               'artifactId' : 'SGZArbo.statusLookup_value_status',
               'id' : 'aw693b7c74',
               'sourceAttribute' : 'value',
            });
            returnAttributes001.addChild( returnAttribute001 );


            var returnAttribute002 = new ReturnAttribute({
               'targetAttribute' : 'statusdesc',
               'artifactId' : 'SGZArbo.statusLookup_description_statusdesc',
               'id' : 'awd98c77f9',
               'sourceAttribute' : 'description',
            });
            returnAttributes001.addChild( returnAttribute002 );


            var returnAttribute003 = new ReturnAttribute({
               'targetAttribute' : 'maxvalue',
               'artifactId' : 'SGZArbo.statusLookup_maxvalue_maxvalue',
               'id' : 'aw43ef5eb9',
               'sourceAttribute' : 'maxvalue',
            });
            returnAttributes001.addChild( returnAttribute003 );


            var lookup002 = new Lookup({
               'resource' : 'domainAssetType',
               'id' : 'SGZArbo.AssetTypeLookup',
               'label' : MessageService.createStaticMessage('Asset Type'),
            });
            ui001.addChild( lookup002 );

            var requiredResources026 = {
               'domainAssetType' : {
                  'artifactId' : 'SGZArbo.AssetTypeLookup_domainassettype',
                  'id' : 'awf8437bb5',
               },
            };
            lookup002.addRequiredResources( requiredResources026 );


            var listItemTemplate004 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.AssetTypeLookup_domainassettype_listItemTemplate_Item1Desc1',
               'id' : 'awcfbd6847',
            });

            var listtext008 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetTypeLookup_domainassettype_Item1Desc1_value',
               'id' : 'aw6950592b',
            });
            listItemTemplate004.addChild( listtext008 );


            var listtext009 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.AssetTypeLookup_domainassettype_Item1Desc1_description',
               'id' : 'awcc198ed3',
            });
            listItemTemplate004.addChild( listtext009 );



            var list004 = new List({
               'resource' : 'domainAssetType',
               'listItemTemplate' : listItemTemplate004,
               'artifactId' : 'SGZArbo.AssetTypeLookup_domainassettype_list',
               'id' : 'awd34d70d6',
            });
            lookup002.addChild( list004 );


            var returnAttributes002 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.AssetTypeLookup_returnAttributes',
               'id' : 'aw2d2306ce',
            });
            lookup002.addChild( returnAttributes002 );


            var returnAttribute004 = new ReturnAttribute({
               'targetAttribute' : 'assettype',
               'artifactId' : 'SGZArbo.AssetTypeLookup_value_status',
               'id' : 'aw76965867',
               'sourceAttribute' : 'value',
            });
            returnAttributes002.addChild( returnAttribute004 );


            var lookup003 = new Lookup({
               'resource' : 'additionalshift',
               'id' : 'SGZArbo.shiftLookup',
               'label' : MessageService.createStaticMessage('Shifts'),
            });
            ui001.addChild( lookup003 );

            var requiredResources027 = {
               'additionalshift' : {
                  'artifactId' : 'SGZArbo.shiftLookup_calendar',
                  'id' : 'awc24a50c6',
               },
            };
            lookup003.addRequiredResources( requiredResources027 );


            var listItemTemplate005 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.shiftLookup_listItemTemplate_Item1Desc1',
               'id' : 'aw6b8edcc3',
            });

            var listtext010 = new ListText({
               'resourceAttribute' : 'shiftnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.shiftLookup_Item1Desc1_shiftnum',
               'id' : 'awa008b466',
            });
            listItemTemplate005.addChild( listtext010 );


            var listtext011 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.shiftLookup_Item1Desc1_description',
               'id' : 'awaa1948a2',
            });
            listItemTemplate005.addChild( listtext011 );



            var list005 = new List({
               'resource' : 'additionalshift',
               'listItemTemplate' : listItemTemplate005,
               'artifactId' : 'SGZArbo.filterShift_list',
               'id' : 'aw63ed9af8',
            });
            lookup003.addChild( list005 );


            var returnAttributes003 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.shiftLookup_returnAttributes',
               'id' : 'aw72762d01',
            });
            lookup003.addChild( returnAttributes003 );


            var returnAttribute005 = new ReturnAttribute({
               'targetAttribute' : 'shiftnum',
               'artifactId' : 'SGZArbo.shiftLookup_value_status',
               'id' : 'aw242fdae9',
               'sourceAttribute' : 'shiftnum',
            });
            returnAttributes003.addChild( returnAttribute005 );


            var returnAttribute006 = new ReturnAttribute({
               'targetAttribute' : 'description',
               'artifactId' : 'SGZArbo.shiftLookup_description_statusdesc',
               'id' : 'awa74aa4ae',
               'sourceAttribute' : 'description',
            });
            returnAttributes003.addChild( returnAttribute006 );


            var lookup004 = new Lookup({
               'resource' : 'assetAttribute',
               'id' : 'SGZArbo.assetAttributeLookup',
               'label' : MessageService.createStaticMessage('Attribute'),
            });
            ui001.addChild( lookup004 );

            var requiredResources028 = {
               'assetAttribute' : {
                  'artifactId' : 'SGZArbo.assetAttributeLookup_assetAttribute',
                  'id' : 'aw40d9bb58',
               },
            };
            lookup004.addRequiredResources( requiredResources028 );


            var searchAttributes001 = new SearchAttributes({
               'artifactId' : 'SGZArbo.assetAttributeLookup_assetAttribute_searchAttributes',
               'id' : 'aw8d6c9d0b',
            });

            var searchAttribute001 = new SearchAttribute({
               'name' : 'assetattrid',
               'artifactId' : 'SGZArbo.assetAttributeLookup_assetAttribute_searchAttribute_assetattrid',
               'id' : 'aw54b5f70d',
            });
            searchAttributes001.addChild( searchAttribute001 );


            var searchAttribute002 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'SGZArbo.assetAttributeLookup_assetAttribute_searchAttribute_description',
               'id' : 'aw15c2b0f9',
            });
            searchAttributes001.addChild( searchAttribute002 );



            var listItemTemplate006 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.assetAttrLookup_additionalitem_listItemTemplate_Item1Desc1',
               'id' : 'awd4848f7a',
            });

            var listtext012 = new ListText({
               'resourceAttribute' : 'assetattrid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.assetAttrLookup_assetAttribute_Item1Desc1_assetattr',
               'id' : 'aw67d78d0e',
            });
            listItemTemplate006.addChild( listtext012 );


            var listtext013 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.assetAttrLookup_assetAttribute_Item1Desc1_description',
               'id' : 'awf3c49560',
            });
            listItemTemplate006.addChild( listtext013 );



            var list006 = new List({
               'resource' : 'assetAttribute',
               'listItemTemplate' : listItemTemplate006,
               'artifactId' : 'SGZArbo.assetAttributeLookup_assetAttribute_list',
               'id' : 'awa9dc8428',
               'searchAttributes' : searchAttributes001,
            });
            lookup004.addChild( list006 );


            var returnAttributes004 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.assetAttrLookup_returnAttributes',
               'id' : 'aw6b461f09',
            });
            lookup004.addChild( returnAttributes004 );


            var returnAttribute007 = new ReturnAttribute({
               'targetAttribute' : 'assetattrid',
               'artifactId' : 'SGZArbo.assetAttrLookup_itemnum_itemid',
               'id' : 'aw1044c6da',
               'sourceAttribute' : 'assetattrid',
            });
            returnAttributes004.addChild( returnAttribute007 );


            var returnAttribute008 = new ReturnAttribute({
               'targetAttribute' : 'datatype',
               'artifactId' : 'SGZArbo.assetAttrLookup_itemnum_datatype',
               'id' : 'aw4ffa816c',
               'sourceAttribute' : 'datatype',
            });
            returnAttributes004.addChild( returnAttribute008 );


            var lookup005 = new Lookup({
               'resource' : 'site',
               'id' : 'SGZArbo.AssetMove.SiteLookup',
               'label' : MessageService.createStaticMessage('Select Site'),
            });
            ui001.addChild( lookup005 );

            var requiredResources029 = {
               'site' : {
                  'artifactId' : 'SGZArbo.AssetMove.SiteLookup_additionalSites',
                  'id' : 'aw13928649',
               },
            };
            lookup005.addRequiredResources( requiredResources029 );


            var searchAttributes002 = new SearchAttributes({
               'artifactId' : 'SGZArbo.AssetMove.SiteLookup_additionalSites_searchAttributes',
               'id' : 'awaaacfb4a',
            });

            var searchAttribute003 = new SearchAttribute({
               'name' : 'siteid',
               'artifactId' : 'SGZArbo.AssetMove.SiteLookup_additionalSites_searchAttribute_Site',
               'id' : 'awb4c9f9a4',
            });
            searchAttributes002.addChild( searchAttribute003 );


            var searchAttribute004 = new SearchAttribute({
               'name' : 'orgid',
               'artifactId' : 'SGZArbo.AssetMove.SiteLookup_additionalSites_searchAttribute_description',
               'id' : 'aw95896ae6',
            });
            searchAttributes002.addChild( searchAttribute004 );



            var listItemTemplate007 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.AssetMove.SiteLookup_additionalSites_listItemTemplate_Item1Desc1',
               'id' : 'aw297cfcdd',
            });

            var listtext014 = new ListText({
               'resourceAttribute' : 'siteid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.AssetMove.SiteLookup_additionalSites_Item1Desc1_Site',
               'id' : 'awbfe97384',
            });
            listItemTemplate007.addChild( listtext014 );


            var listtext015 = new ListText({
               'resourceAttribute' : 'orgid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.AssetMove.SiteLookup_additionalSites_Item1Desc1_description',
               'id' : 'awf3dfccc1',
            });
            listItemTemplate007.addChild( listtext015 );



            var list007 = new List({
               'resource' : 'site',
               'listItemTemplate' : listItemTemplate007,
               'artifactId' : 'SGZArbo.AssetMove.SiteLookup_additionalSites_list',
               'id' : 'aw1b4476d0',
               'searchAttributes' : searchAttributes002,
            });
            lookup005.addChild( list007 );


            var returnAttributes005 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.AssetMove.SiteLookup_returnAttributes',
               'id' : 'awec314b6c',
            });
            lookup005.addChild( returnAttributes005 );


            var returnAttribute009 = new ReturnAttribute({
               'targetAttribute' : 'siteid',
               'artifactId' : 'SGZArbo.AssetMove.SiteLookup_Site_Site',
               'id' : 'aw32d3783b',
               'sourceAttribute' : 'siteid',
            });
            returnAttributes005.addChild( returnAttribute009 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.AttachmentsView', false);
               trackTimer.startTracking();
            }

            var view025 = new View({
               'showOverflow' : true,
               'id' : 'WorkExecution.AttachmentsView',
               'label' : MessageService.createStaticMessage('Attachments'),
            });
            ui001.addChild( view025 );

            var requiredResources030 = {
               'asset' : {
                  'artifactId' : 'WorkExecution.AttachmentsView_workOrder',
                  'id' : 'awc414fc7a',
                  'related' : {
                     'attachments' : {
                        'reload' : true,
                        'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments',
                        'id' : 'aw9fb3a7c0',
                     },
                  },
               },
            };
            view025.addRequiredResources( requiredResources030 );

            var actions005 = new Actions({
               'artifactId' : 'WorkExecution.AttachmentsView_actions',
               'id' : 'awb2eebf16',
            });
            view025.addChild( actions005 );


            var action007 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'artifactId' : 'WorkExecution.AttachmentsView_TakePhoto_action',
               'id' : 'aw8f4e0a9e',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions005.addChild( action007 );

            var eventHandlers078 = [
               {
                     'method' : 'launchCameraForPhoto',
                     'artifactId' : 'WorkExecution.AttachmentsView_TakePhoto_action_eventHandlers_click_launchCameraForPhoto',
                     'id' : 'aw14794143',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               },
               {
                     'method' : 'initCategory',
                     'artifactId' : 'WorkExecution.AttachmentsView_TakePhoto_action_eventHandlers_render_initCategory',
                     'id' : 'awf99bf6c1',
                     'event' : 'render',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            action007.eventHandlers = eventHandlers078;

            var action008 = new Action({
               'image' : 'header_add_OFF.svg',
               'artifactId' : 'WorkExecution.AttachmentsView_PickfromGallery_action',
               'id' : 'awfd7f8e21',
               'label' : MessageService.createStaticMessage('Pick from Gallery'),
            });
            actions005.addChild( action008 );

            var eventHandlers079 = [
               {
                     'method' : 'launchGallery',
                     'artifactId' : 'WorkExecution.AttachmentsView_PickfromGallery_action_eventHandlers_click_launchGallery',
                     'id' : 'awe839699',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            action008.eventHandlers = eventHandlers079;


            var sortOptions002 = new SortOptions({
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_list_sortOptions',
               'id' : 'awf87e80b',
            });

            var sortOption004 = new SortOption({
               'artifactId' : 'WorkExecution.AttachmentsView_sortOption_CreatedDate',
               'id' : 'aw1e4327b',
               'label' : MessageService.createStaticMessage('Created Date'),
            });
            sortOptions002.addChild( sortOption004 );


            var sortAttribute004 = new SortAttribute({
               'name' : 'displayCreationDate',
               'artifactId' : 'WorkExecution.AttachmentsView_CreatedDate_sortAttribute_displayCreationDate',
               'id' : 'aw486876e7',
               'direction' : 'asc',
            });
            sortOption004.addChild( sortAttribute004 );


            var sortOption005 = new SortOption({
               'artifactId' : 'WorkExecution.AttachmentsView_sortOption_FileName',
               'id' : 'aw648c7a9c',
               'label' : MessageService.createStaticMessage('File Name'),
            });
            sortOptions002.addChild( sortOption005 );


            var sortAttribute005 = new SortAttribute({
               'name' : 'displayFileName',
               'artifactId' : 'WorkExecution.AttachmentsView_FileName_sortAttribute_displayFileName',
               'id' : 'aw891963a5',
               'direction' : 'asc',
            });
            sortOption005.addChild( sortAttribute005 );


            var sortOption006 = new SortOption({
               'artifactId' : 'WorkExecution.AttachmentsView_sortOption_Description',
               'id' : 'aw31fcfee7',
               'label' : MessageService.createStaticMessage('Description'),
            });
            sortOptions002.addChild( sortOption006 );


            var sortAttribute006 = new SortAttribute({
               'name' : 'displayDescription',
               'artifactId' : 'WorkExecution.AttachmentsView_Description_sortAttribute_displayDescription',
               'id' : 'aw5a6042db',
               'direction' : 'asc',
            });
            sortOption006.addChild( sortAttribute006 );



            var listItemTemplate008 = new ListItemTemplate({
               'layout' : 'AttachmentsListItem',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem',
               'id' : 'aw5f9af042',
            });

            var listtext016 = new ListText({
               'resourceAttribute' : 'displayFileName',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayFileName',
               'id' : 'aw2a7f24e9',
            });
            listItemTemplate008.addChild( listtext016 );


            var listtext017 = new ListText({
               'resourceAttribute' : 'displayDescription',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayDescription',
               'id' : 'aw634a876e',
            });
            listItemTemplate008.addChild( listtext017 );


            var listtext018 = new ListText({
               'resourceAttribute' : 'displayFileType',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayFileType',
               'id' : 'awf8820dc6',
            });
            listItemTemplate008.addChild( listtext018 );


            var button044 = new Button({
               'border' : 'false',
               'resourceAttribute' : 'anywhereAttachDownloaded',
               'image' : '\/images\/msg_downloadComplete_small.svg',
               'cssClass' : 'attachmentIcon',
               'layoutInsertAt' : 'icon',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.svg_button',
               'id' : 'awfc77ac73',
            });
            var eventHandlers080 = [
               {
                     'method' : 'displayLocal',
                     'artifactId' : 'WorkExecution.AttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.svg_button_eventHandlers_datachange_displayLocal',
                     'id' : 'aw4a4077a7',
                     'event' : 'datachange',
                     'class' : 'application.handlers.WOAttachmentHandler',
               },
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'WorkExecution.AttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.svg_button_eventHandlers_click_handleThumbnailClick',
                     'id' : 'aw33c79d81',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            button044.eventHandlers = eventHandlers080;
            listItemTemplate008.addChild( button044 );


            var listtext019 = new ListText({
               'resourceAttribute' : 'displaySize',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displaySize',
               'id' : 'aw4edf9732',
            });
            listItemTemplate008.addChild( listtext019 );


            var listtext020 = new ListText({
               'resourceAttribute' : 'createby',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_createby',
               'id' : 'awfea18ec7',
            });
            listItemTemplate008.addChild( listtext020 );


            var listtext021 = new ListText({
               'resourceAttribute' : 'displayCreationDate',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayCreationDate',
               'id' : 'aw44f40bb4',
            });
            listItemTemplate008.addChild( listtext021 );

            var eventHandlers081 = [
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem_eventHandlers_click_handleThumbnailClick',
                     'id' : 'aw6e007bd',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            listItemTemplate008.eventHandlers = eventHandlers081;


            var list008 = new List({
               'resource' : 'asset',
               'sortOptions' : sortOptions002,
               'listItemTemplate' : listItemTemplate008,
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_list',
               'attribute' : 'attachments',
               'id' : 'aw118597f8',
            });
            view025.addChild( list008 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZArbo.defineDeadTreeView', false);
               trackTimer.startTracking();
            }

            var view026 = new View({
               'resource' : 'asset',
               'id' : 'SGZArbo.defineDeadTreeView',
               'label' : MessageService.createStaticMessage('\u00C1rvore Morta?'),
            });
            ui001.addChild( view026 );

            var requiredResources031 = {
               'asset' : {
                  'artifactId' : 'SGZArbo.defineDeadTreeView_workOrder',
                  'id' : 'aw57e94d5',
               },
            };
            view026.addRequiredResources( requiredResources031 );

            var container039 = new Container({
               'artifactId' : 'SGZArbo.defineDeadTreeDialog_container_0',
               'id' : 'aw90c1cbda',
            });
            view026.addChild( container039 );


            var group031 = new Group({
               'artifactId' : 'SGZArbo.defineDeadTreeDialog_group_0',
               'id' : 'awa6f0853e',
            });
            container039.addChild( group031 );


            var groupitem115 = new GroupItem({
               'artifactId' : 'SGZArbo.defineDeadTreeDialog.SpecificationsView_groupitem_0',
               'id' : 'awd46f6ffd',
            });
            group031.addChild( groupitem115 );


            var text107 = new Text({
               'editable' : false,
               'artifactId' : 'SGZArbo.defineDeadTreeDialog_groupitem_0_ms_deadtree',
               'id' : 'aw93a05bd6',
               'label' : MessageService.createStaticMessage('Confirma que \u00E1rvore est\u00E1 morta?'),
            });
            groupitem115.addChild( text107 );


            var footer019 = new Footer({
               'artifactId' : 'SGZArbo.defineDeadTreeView_footer',
               'id' : 'awf35642c5',
            });
            view026.addChild( footer019 );


            var button045 = new Button({
               'artifactId' : 'SGZArbo.defineDeadTreeView_Yes_button',
               'id' : 'aw610bfb03',
               'label' : MessageService.createStaticMessage('Sim'),
            });
            var eventHandlers082 = [
               {
                     'method' : 'setDeadTreeY',
                     'artifactId' : 'SGZArbo.defineDeadTreeDialog_Yes_button_eventHandlers',
                     'id' : 'awa012fb4a',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button045.eventHandlers = eventHandlers082;
            footer019.addChild( button045 );


            var button046 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZArbo.defineDeadTreeDialog_No.SpecificationsView_Create_button',
               'id' : 'awcffb26eb',
               'label' : MessageService.createStaticMessage('N\u00E3o'),
            });
            var eventHandlers083 = [
               {
                     'method' : 'setDeadTreeN',
                     'artifactId' : 'SGZArbo.defineDeadTreeDialog_No_button_eventHandlers',
                     'id' : 'awa5091956',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSAssetDetailHandler',
               }
            ];
            button046.eventHandlers = eventHandlers083;
            footer019.addChild( button046 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog004 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'WorkExecution.DownloadAttachmentLocal',
            });
            ui001.addChild( dialog004 );


            var container040 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.DownloadAttachmentLocal_container_0',
               'id' : 'awecb352f6',
            });
            dialog004.addChild( container040 );


            var text108 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'WorkExecution.DownloadAttachmentLocal_container_0_progressMsg',
               'id' : 'aw1941849c',
            });
            container040.addChild( text108 );


            var container041 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.DownloadAttachmentLocal_container_1',
               'id' : 'aw9bb46260',
            });
            dialog004.addChild( container041 );


            var button047 = new Button({
               'artifactId' : 'WorkExecution.DownloadAttachmentLocal_Cancel_button',
               'id' : 'awe595a1e7',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers084 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'WorkExecution.DownloadAttachmentLocal_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'awc8f3fc0c',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            button047.eventHandlers = eventHandlers084;
            container041.addChild( button047 );


            var lookup006 = new Lookup({
               'resource' : 'appDocType',
               'id' : 'WorkExecution.appDocTypeLookup',
               'label' : MessageService.createStaticMessage('Select Value'),
            });
            ui001.addChild( lookup006 );

            var requiredResources032 = {
               'appDocType' : {
                  'artifactId' : 'WorkExecution.appDocTypeLookup_appDocType',
                  'id' : 'aw8ca30e01',
               },
            };
            lookup006.addRequiredResources( requiredResources032 );


            var listItemTemplate009 = new ListItemTemplate({
               'artifactId' : 'WorkExecution.appDocTypeLookup_appDocType_listItemTemplate',
               'id' : 'awa86cf2be',
            });

            var listtext022 = new ListText({
               'resourceAttribute' : 'doctype',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'WorkExecution.appDocTypeLookup_appDocType_doctype',
               'id' : 'aw6b7c2bc2',
            });
            listItemTemplate009.addChild( listtext022 );



            var list009 = new List({
               'resource' : 'appDocType',
               'listItemTemplate' : listItemTemplate009,
               'artifactId' : 'WorkExecution.appDocTypeLookup_appDocType_list',
               'id' : 'aw885ae2fe',
            });
            lookup006.addChild( list009 );


            var returnAttributes006 = new ReturnAttributes({
               'artifactId' : 'WorkExecution.appDocTypeLookup_returnAttributes',
               'id' : 'aw54587ddc',
            });
            lookup006.addChild( returnAttributes006 );


            var returnAttribute010 = new ReturnAttribute({
               'targetAttribute' : 'category',
               'artifactId' : 'WorkExecution.appDocTypeLookup_doctype_category',
               'id' : 'awb11d21b7',
               'sourceAttribute' : 'doctype',
            });
            returnAttributes006.addChild( returnAttribute010 );


            var lookup007 = new Lookup({
               'resource' : 'motivosbaixa',
               'id' : 'SGZArbo.motivosbaixaLookup',
               'label' : MessageService.createStaticMessage('Motivo da Baixa'),
            });
            ui001.addChild( lookup007 );

            var requiredResources033 = {
               'motivosbaixa' : {
                  'artifactId' : 'SGZArbo.motivosbaixaLookup_MSloctreeDomain',
                  'id' : 'aw2bb2a302',
               },
            };
            lookup007.addRequiredResources( requiredResources033 );


            var listItemTemplate010 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.motivosbaixaLookup_typebuildDomain_listItemTemplate_Item1Desc1',
               'id' : 'awa10b11fc',
            });

            var listtext023 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.motivosbaixaLookup_MSloctreeDomain_Item1Desc1_value',
               'id' : 'aw4320f8b',
            });
            listItemTemplate010.addChild( listtext023 );


            var listtext024 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.motivosbaixaLookup_MSloctreeDomain_Item1Desc1_description',
               'id' : 'awb376c2ad',
            });
            listItemTemplate010.addChild( listtext024 );



            var list010 = new List({
               'resource' : 'motivosbaixa',
               'listItemTemplate' : listItemTemplate010,
               'artifactId' : 'SGZArbo.motivosbaixaLookup_typebuildDomain_list',
               'id' : 'awf7113011',
            });
            lookup007.addChild( list010 );


            var returnAttributes007 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.motivosbaixaLookup_returnAttributes',
               'id' : 'aw5b76073c',
            });
            lookup007.addChild( returnAttributes007 );


            var returnAttribute011 = new ReturnAttribute({
               'targetAttribute' : 'ms_arboreason',
               'artifactId' : 'SGZArbo.motivosbaixaLookup_value_MSloctree',
               'id' : 'aw4d4188ab',
               'sourceAttribute' : 'value',
            });
            returnAttributes007.addChild( returnAttribute011 );


            var lookup008 = new Lookup({
               'resource' : 'mstypebuild',
               'id' : 'SGZArbo.TypebuildLookup',
               'label' : MessageService.createStaticMessage('Tipo de Edifica\u00E7\u00E3o'),
            });
            ui001.addChild( lookup008 );

            var requiredResources034 = {
               'mstypebuild' : {
                  'artifactId' : 'SGZArbo.TypebuildLookup_Typebuild',
                  'id' : 'aw23ea4abb',
               },
            };
            lookup008.addRequiredResources( requiredResources034 );


            var listItemTemplate011 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.TypebuildLookup_typebuildDomain_listItemTemplate_Item1Desc1',
               'id' : 'awd89a600',
            });

            var listtext025 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.TypebuildLookup_typebuildDomain_Item1Desc1_value',
               'id' : 'awcc971984',
            });
            listItemTemplate011.addChild( listtext025 );


            var listtext026 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.TypebuildLookup_typebuildDomain_Item1Desc1_description',
               'id' : 'aw48893c95',
            });
            listItemTemplate011.addChild( listtext026 );



            var list011 = new List({
               'resource' : 'mstypebuild',
               'listItemTemplate' : listItemTemplate011,
               'artifactId' : 'SGZArbo.TypebuildLookup_typebuildDomain_list',
               'id' : 'aw58a70acd',
            });
            lookup008.addChild( list011 );


            var returnAttributes008 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.TypebuildLookup_returnAttributes',
               'id' : 'awf62b979d',
            });
            lookup008.addChild( returnAttributes008 );


            var returnAttribute012 = new ReturnAttribute({
               'targetAttribute' : 'ms_typebuild',
               'artifactId' : 'SGZArbo.TypebuildLookup_value_Typebuild',
               'id' : 'aw2d03b932',
               'sourceAttribute' : 'value',
            });
            returnAttributes008.addChild( returnAttribute012 );


            var lookup009 = new Lookup({
               'resource' : 'msfamily',
               'id' : '_SGZArbo.msfamilyLookup',
               'label' : MessageService.createStaticMessage('Fam\u00EDlia'),
            });
            ui001.addChild( lookup009 );

            var requiredResources035 = {
               'msfamily' : {
                  'artifactId' : '_SGZArbo.msfamilyLookup_msfamily',
                  'id' : 'aw72214c70',
               },
            };
            lookup009.addRequiredResources( requiredResources035 );


            var listItemTemplate012 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : '_SGZArbo.msfamilyLookup_msfamilyDomain_listItemTemplate_Item1Desc1',
               'id' : 'aw9c3d4a7d',
            });

            var listtext027 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : '_SGZArbo.msfamilyLookup_msfamilyDomain_Item1Desc1_value',
               'id' : 'awd431a42f',
            });
            listItemTemplate012.addChild( listtext027 );


            var listtext028 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : '_SGZArbo.msfamilyLookup_msfamilyDomain_Item1Desc1_description',
               'id' : 'awa930a50c',
            });
            listItemTemplate012.addChild( listtext028 );



            var list012 = new List({
               'resource' : 'msfamily',
               'listItemTemplate' : listItemTemplate012,
               'artifactId' : '_SGZArbo.msfamilyLookup_msfamilyDomain_list',
               'id' : 'aw6ed3ef78',
            });
            lookup009.addChild( list012 );


            var returnAttributes009 = new ReturnAttributes({
               'artifactId' : '_SGZArbo.msfamilyLookup_returnAttributes',
               'id' : 'awa52c11f4',
            });
            lookup009.addChild( returnAttributes009 );


            var returnAttribute013 = new ReturnAttribute({
               'targetAttribute' : 'ms_family',
               'artifactId' : '_SGZArbo.msfamilyLookup_value_Typebuild',
               'id' : 'aw9916e0c0',
               'sourceAttribute' : 'value',
            });
            returnAttributes009.addChild( returnAttribute013 );


            var lookup010 = new Lookup({
               'resource' : 'msloctree',
               'id' : 'SGZArbo.MSloctreeLookup',
               'label' : MessageService.createStaticMessage('Localiza\u00E7\u00E3o da \u00C1rvore'),
            });
            ui001.addChild( lookup010 );

            var requiredResources036 = {
               'msloctree' : {
                  'artifactId' : 'SGZArbo.MSloctreeLookup_MSloctreeDomain',
                  'id' : 'aw56e6f381',
               },
            };
            lookup010.addRequiredResources( requiredResources036 );


            var listItemTemplate013 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.MSloctreeLookup_typebuildDomain_listItemTemplate_Item1Desc1',
               'id' : 'awe0c98997',
            });

            var listtext029 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.MSloctreeLookup_MSloctreeDomain_Item1Desc1_value',
               'id' : 'aw7c0d15cc',
            });
            listItemTemplate013.addChild( listtext029 );


            var listtext030 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.MSloctreeLookup_MSloctreeDomain_Item1Desc1_description',
               'id' : 'aw79d1a645',
            });
            listItemTemplate013.addChild( listtext030 );



            var list013 = new List({
               'resource' : 'msloctree',
               'listItemTemplate' : listItemTemplate013,
               'artifactId' : 'SGZArbo.MSloctreeLookup_typebuildDomain_list',
               'id' : 'aw3b7e7426',
            });
            lookup010.addChild( list013 );


            var returnAttributes010 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.MSloctreeLookup_returnAttributes',
               'id' : 'aw2fba81f6',
            });
            lookup010.addChild( returnAttributes010 );


            var returnAttribute014 = new ReturnAttribute({
               'targetAttribute' : 'ms_loctree',
               'artifactId' : 'SGZArbo.MSloctreeLookup_value_MSloctree',
               'id' : 'aw3015d828',
               'sourceAttribute' : 'value',
            });
            returnAttributes010.addChild( returnAttribute014 );


            var lookup011 = new Lookup({
               'resource' : 'mslocpublic',
               'id' : 'SGZArbo.MSlocpublicLookup',
               'label' : MessageService.createStaticMessage('Localiza\u00E7\u00E3o da \u00C1rvore'),
            });
            ui001.addChild( lookup011 );

            var requiredResources037 = {
               'mslocpublic' : {
                  'artifactId' : 'SGZArbo.MSlocpublicLookup_MSlocpublic',
                  'id' : 'aw64ca00d8',
               },
            };
            lookup011.addRequiredResources( requiredResources037 );


            var listItemTemplate014 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.MSlocpublicLookup_MSlocpublicDomain_listItemTemplate_Item1Desc1',
               'id' : 'awff2b2fef',
            });

            var listtext031 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.MSlocpublicLookup_MSlocpublicDomain_Item1Desc1_value',
               'id' : 'aw99c607d9',
            });
            listItemTemplate014.addChild( listtext031 );


            var listtext032 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.MSlocpublicLookup_MSlocpublicDomain_Item1Desc1_description',
               'id' : 'aw3e8f8ac3',
            });
            listItemTemplate014.addChild( listtext032 );



            var list014 = new List({
               'resource' : 'mslocpublic',
               'listItemTemplate' : listItemTemplate014,
               'artifactId' : 'SGZArbo.MSlocpublicLookup_typebuildDomain_list',
               'id' : 'awd3bbff68',
            });
            lookup011.addChild( list014 );


            var returnAttributes011 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.MSlocpublicLookup_returnAttributes',
               'id' : 'aw2b9c56ac',
            });
            lookup011.addChild( returnAttributes011 );


            var returnAttribute015 = new ReturnAttribute({
               'targetAttribute' : 'ms_locpublic',
               'artifactId' : 'SGZArbo.MSlocpublicLookup_value_MSlocpublic',
               'id' : 'awc40535a7',
               'sourceAttribute' : 'value',
            });
            returnAttributes011.addChild( returnAttribute015 );


            var lookup012 = new Lookup({
               'resource' : 'fungiTerm',
               'id' : 'SGZArbo.MS_FUNGILookup',
               'label' : MessageService.createStaticMessage('Fungos'),
            });
            ui001.addChild( lookup012 );

            var requiredResources038 = {
               'fungiTerm' : {
                  'artifactId' : 'SGZArbo.MS_FUNGILookup_MSlocpublic',
                  'id' : 'aw85aea788',
               },
            };
            lookup012.addRequiredResources( requiredResources038 );


            var listItemTemplate015 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.MS_FUNGILookup_MS_FUNGIDomain_listItemTemplate_Item1Desc1',
               'id' : 'aw41db3082',
            });

            var listtext033 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.MS_FUNGILookup_MS_FUNGILookupDomain_Item1Desc1_value',
               'id' : 'awa6b2cd1b',
            });
            listItemTemplate015.addChild( listtext033 );


            var listtext034 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.MS_FUNGILookup_MS_FUNGILookupDomain_Item1Desc1_description',
               'id' : 'awa605060',
            });
            listItemTemplate015.addChild( listtext034 );



            var list015 = new List({
               'resource' : 'fungiTerm',
               'listItemTemplate' : listItemTemplate015,
               'artifactId' : 'SGZArbo.MS_FUNGILookup_typebuildDomain_list',
               'id' : 'awa380f05a',
            });
            lookup012.addChild( list015 );


            var returnAttributes012 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.MS_FUNGILookup_returnAttributes',
               'id' : 'awcb88198a',
            });
            lookup012.addChild( returnAttributes012 );


            var returnAttribute016 = new ReturnAttribute({
               'targetAttribute' : 'rptms_fungi01',
               'artifactId' : 'SGZArbo.MS_FUNGILookup_value_MS_FUNGI',
               'id' : 'awd9b4bd90',
               'sourceAttribute' : 'value',
            });
            returnAttributes012.addChild( returnAttribute016 );


            var lookup013 = new Lookup({
               'resource' : 'fungiTerm',
               'id' : 'SGZArbo.MS_FUNGILookup02',
               'label' : MessageService.createStaticMessage('Fungos'),
            });
            ui001.addChild( lookup013 );

            var requiredResources039 = {
               'fungiTerm' : {
                  'artifactId' : 'SGZArbo.MS_FUNGILookup02_MSlocpublic',
                  'id' : 'aw6c306de6',
               },
            };
            lookup013.addRequiredResources( requiredResources039 );


            var listItemTemplate016 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.MS_FUNGILookup02_MS_FUNGIDomain_listItemTemplate_Item1Desc1',
               'id' : 'awa8e67880',
            });

            var listtext035 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.MS_FUNGILookup02_MS_FUNGILookupDomain_Item1Desc1_value',
               'id' : 'aweab39fa7',
            });
            listItemTemplate016.addChild( listtext035 );


            var listtext036 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.MS_FUNGILookup02_MS_FUNGILookupDomain_Item1Desc1_description',
               'id' : 'awe4870c04',
            });
            listItemTemplate016.addChild( listtext036 );



            var list016 = new List({
               'resource' : 'fungiTerm',
               'listItemTemplate' : listItemTemplate016,
               'artifactId' : 'SGZArbo.MS_FUNGILookup02_typebuildDomain_list',
               'id' : 'aw52fbb6b8',
            });
            lookup013.addChild( list016 );


            var returnAttributes013 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.MS_FUNGILookup02_returnAttributes',
               'id' : 'aw8c4b039b',
            });
            lookup013.addChild( returnAttributes013 );


            var returnAttribute017 = new ReturnAttribute({
               'targetAttribute' : 'rptms_fungi02',
               'artifactId' : 'SGZArbo.MS_FUNGILookup02_value_MS_FUNGI',
               'id' : 'awbd5fdad4',
               'sourceAttribute' : 'value',
            });
            returnAttributes013.addChild( returnAttribute017 );


            var lookup014 = new Lookup({
               'resource' : 'fungiTerm',
               'id' : 'SGZArbo.MS_FUNGILookup03',
               'label' : MessageService.createStaticMessage('Fungos'),
            });
            ui001.addChild( lookup014 );

            var requiredResources040 = {
               'fungiTerm' : {
                  'artifactId' : 'SGZArbo.MS_FUNGILookup03_MSlocpublic',
                  'id' : 'awb1a6b463',
               },
            };
            lookup014.addRequiredResources( requiredResources040 );


            var listItemTemplate017 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.MS_FUNGILookup03_MS_FUNGIDomain_listItemTemplate_Item1Desc1',
               'id' : 'aw82ce40e2',
            });

            var listtext037 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.MS_FUNGILookup03_MS_FUNGILookupDomain_Item1Desc1_value',
               'id' : 'awa43a940e',
            });
            listItemTemplate017.addChild( listtext037 );


            var listtext038 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.MS_FUNGILookup03_MS_FUNGILookupDomain_Item1Desc1_description',
               'id' : 'aw47112448',
            });
            listItemTemplate017.addChild( listtext038 );



            var list017 = new List({
               'resource' : 'fungiTerm',
               'listItemTemplate' : listItemTemplate017,
               'artifactId' : 'SGZArbo.MS_FUNGILookup03_typebuildDomain_list',
               'id' : 'aw45d3d278',
            });
            lookup014.addChild( list017 );


            var returnAttributes014 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.MS_FUNGILookup03_returnAttributes',
               'id' : 'aw6319b57a',
            });
            lookup014.addChild( returnAttributes014 );


            var returnAttribute018 = new ReturnAttribute({
               'targetAttribute' : 'rptms_fungi03',
               'artifactId' : 'SGZArbo.MS_FUNGILookup03_value_MS_FUNGI',
               'id' : 'aw13374b45',
               'sourceAttribute' : 'value',
            });
            returnAttributes014.addChild( returnAttribute018 );


            var lookup015 = new Lookup({
               'resource' : 'fungiTerm',
               'id' : 'SGZArbo.MS_FUNGILookup04',
               'label' : MessageService.createStaticMessage('Fungos'),
            });
            ui001.addChild( lookup015 );

            var requiredResources041 = {
               'fungiTerm' : {
                  'artifactId' : 'SGZArbo.MS_FUNGILookup04_MSlocpublic',
                  'id' : 'awccd5b23b',
               },
            };
            lookup015.addRequiredResources( requiredResources041 );


            var listItemTemplate018 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.MS_FUNGILookup04_MS_FUNGIDomain_listItemTemplate_Item1Desc1',
               'id' : 'aw5416e9cc',
            });

            var listtext039 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.MS_FUNGILookup04_MS_FUNGILookupDomain_Item1Desc1_value',
               'id' : 'aw96f4a010',
            });
            listItemTemplate018.addChild( listtext039 );


            var listtext040 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.MS_FUNGILookup04_MS_FUNGILookupDomain_Item1Desc1_description',
               'id' : 'aw9b11f12e',
            });
            listItemTemplate018.addChild( listtext040 );



            var list018 = new List({
               'resource' : 'fungiTerm',
               'listItemTemplate' : listItemTemplate018,
               'artifactId' : 'SGZArbo.MS_FUNGILookup04_typebuildDomain_list',
               'id' : 'aw200aec38',
            });
            lookup015.addChild( list018 );


            var returnAttributes015 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.MS_FUNGILookup04_returnAttributes',
               'id' : 'aw8237bf1e',
            });
            lookup015.addChild( returnAttributes015 );


            var returnAttribute019 = new ReturnAttribute({
               'targetAttribute' : 'rptms_fungi04',
               'artifactId' : 'SGZArbo.MS_FUNGILookup04_value_MS_FUNGI',
               'id' : 'aweeceb330',
               'sourceAttribute' : 'value',
            });
            returnAttributes015.addChild( returnAttribute019 );


            var lookup016 = new Lookup({
               'resource' : 'fungiTerm',
               'id' : 'SGZArbo.MS_TERMITELookup01',
               'label' : MessageService.createStaticMessage('Cupim'),
            });
            ui001.addChild( lookup016 );

            var requiredResources042 = {
               'fungiTerm' : {
                  'artifactId' : 'SGZArbo.MS_TERMITELookup01_MSlocpublic',
                  'id' : 'aw4e4ce94c',
               },
            };
            lookup016.addRequiredResources( requiredResources042 );


            var listItemTemplate019 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.MS_TERMITELookup01_MS_FUNGIDomain_listItemTemplate_Item1Desc1',
               'id' : 'awf155b38d',
            });

            var listtext041 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.MS_TERMITELookup01_MS_TERMITELookupDomain_Item1Desc1_value',
               'id' : 'awa5fe70a9',
            });
            listItemTemplate019.addChild( listtext041 );


            var listtext042 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.MS_TERMITELookup01_MS_TERMITELookupDomain_Item1Desc1_description',
               'id' : 'aw66b17767',
            });
            listItemTemplate019.addChild( listtext042 );



            var list019 = new List({
               'resource' : 'fungiTerm',
               'listItemTemplate' : listItemTemplate019,
               'artifactId' : 'SGZArbo.MS_TERMITELookup01_typebuildDomain_list',
               'id' : 'aw95ac2b88',
            });
            lookup016.addChild( list019 );


            var returnAttributes016 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.MS_TERMITELookup01_returnAttributes',
               'id' : 'aw2ebe72d4',
            });
            lookup016.addChild( returnAttributes016 );


            var returnAttribute020 = new ReturnAttribute({
               'targetAttribute' : 'rptms_termite01',
               'artifactId' : 'SGZArbo.MS_TERMITELookup01_value_MS_FUNGI',
               'id' : 'aw6fec6218',
               'sourceAttribute' : 'value',
            });
            returnAttributes016.addChild( returnAttribute020 );


            var lookup017 = new Lookup({
               'resource' : 'fungiTerm',
               'id' : 'SGZArbo.MS_TERMITELookup02',
               'label' : MessageService.createStaticMessage('Cupim'),
            });
            ui001.addChild( lookup017 );

            var requiredResources043 = {
               'fungiTerm' : {
                  'artifactId' : 'SGZArbo.MS_TERMITELookup02_MSlocpublic',
                  'id' : 'awf3868582',
               },
            };
            lookup017.addRequiredResources( requiredResources043 );


            var listItemTemplate020 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.MS_TERMITELookup02_MS_FUNGIDomain_listItemTemplate_Item1Desc1',
               'id' : 'aw8f2dfb2b',
            });

            var listtext043 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.MS_TERMITELookup02_MS_TERMITELookupDomain_Item1Desc1_value',
               'id' : 'aw46b7c70b',
            });
            listItemTemplate020.addChild( listtext043 );


            var listtext044 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.MS_TERMITELookup02_MS_TERMITELookupDomain_Item1Desc1_description',
               'id' : 'awdd3a6ac8',
            });
            listItemTemplate020.addChild( listtext044 );



            var list020 = new List({
               'resource' : 'fungiTerm',
               'listItemTemplate' : listItemTemplate020,
               'artifactId' : 'SGZArbo.MS_TERMITELookup02_typebuildDomain_list',
               'id' : 'awacd486c8',
            });
            lookup017.addChild( list020 );


            var returnAttributes017 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.MS_TERMITELookup02_returnAttributes',
               'id' : 'awc438afb6',
            });
            lookup017.addChild( returnAttributes017 );


            var returnAttribute021 = new ReturnAttribute({
               'targetAttribute' : 'rptms_termite02',
               'artifactId' : 'SGZArbo.MS_TERMITELookup02_value_MS_FUNGI',
               'id' : 'aw4624d6ea',
               'sourceAttribute' : 'value',
            });
            returnAttributes017.addChild( returnAttribute021 );


            var lookup018 = new Lookup({
               'resource' : 'fungiTerm',
               'id' : 'SGZArbo.MS_TERMITELookup03',
               'label' : MessageService.createStaticMessage('Cupim'),
            });
            ui001.addChild( lookup018 );

            var requiredResources044 = {
               'fungiTerm' : {
                  'artifactId' : 'SGZArbo.MS_TERMITELookup03_MSlocpublic',
                  'id' : 'aw2e105c07',
               },
            };
            lookup018.addRequiredResources( requiredResources044 );


            var listItemTemplate021 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.MS_TERMITELookup03_MS_FUNGIDomain_listItemTemplate_Item1Desc1',
               'id' : 'awa505c349',
            });

            var listtext045 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.MS_TERMITELookup03_MS_TERMITELookupDomain_Item1Desc1_value',
               'id' : 'awaea057aa',
            });
            listItemTemplate021.addChild( listtext045 );


            var listtext046 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.MS_TERMITELookup03_MS_TERMITELookupDomain_Item1Desc1_description',
               'id' : 'awb44361ad',
            });
            listItemTemplate021.addChild( listtext046 );



            var list021 = new List({
               'resource' : 'fungiTerm',
               'listItemTemplate' : listItemTemplate021,
               'artifactId' : 'SGZArbo.MS_TERMITELookup03_typebuildDomain_list',
               'id' : 'awbbfce208',
            });
            lookup018.addChild( list021 );


            var returnAttributes018 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.MS_TERMITELookup03_returnAttributes',
               'id' : 'aw2b6a1957',
            });
            lookup018.addChild( returnAttributes018 );


            var returnAttribute022 = new ReturnAttribute({
               'targetAttribute' : 'rptms_termite03',
               'artifactId' : 'SGZArbo.MS_TERMITELookup03_value_MS_FUNGI',
               'id' : 'awe84c477b',
               'sourceAttribute' : 'value',
            });
            returnAttributes018.addChild( returnAttribute022 );


            var lookup019 = new Lookup({
               'resource' : 'fungiTerm',
               'id' : 'SGZArbo.MS_TERMITELookup04',
               'label' : MessageService.createStaticMessage('Cupim'),
            });
            ui001.addChild( lookup019 );

            var requiredResources045 = {
               'fungiTerm' : {
                  'artifactId' : 'SGZArbo.MS_TERMITELookup04_MSlocpublic',
                  'id' : 'aw53635a5f',
               },
            };
            lookup019.addRequiredResources( requiredResources045 );


            var listItemTemplate022 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.MS_TERMITELookup04_MS_FUNGIDomain_listItemTemplate_Item1Desc1',
               'id' : 'aw73dd6a67',
            });

            var listtext047 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.MS_TERMITELookup04_MS_TERMITELookupDomain_Item1Desc1_value',
               'id' : 'aw5b55ae0e',
            });
            listItemTemplate022.addChild( listtext047 );


            var listtext048 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.MS_TERMITELookup04_MS_TERMITELookupDomain_Item1Desc1_description',
               'id' : 'aw715d57d7',
            });
            listItemTemplate022.addChild( listtext048 );



            var list022 = new List({
               'resource' : 'fungiTerm',
               'listItemTemplate' : listItemTemplate022,
               'artifactId' : 'SGZArbo.MS_TERMITELookup04_typebuildDomain_list',
               'id' : 'awde25dc48',
            });
            lookup019.addChild( list022 );


            var returnAttributes019 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.MS_TERMITELookup04_returnAttributes',
               'id' : 'awca441333',
            });
            lookup019.addChild( returnAttributes019 );


            var returnAttribute023 = new ReturnAttribute({
               'targetAttribute' : 'rptms_termite04',
               'artifactId' : 'SGZArbo.MS_TERMITELookup04_value_MS_FUNGI',
               'id' : 'aw15b5bf0e',
               'sourceAttribute' : 'value',
            });
            returnAttributes019.addChild( returnAttribute023 );


            var lookup020 = new Lookup({
               'resource' : 'mscrack',
               'id' : 'SGZArbo.MS_CRACKLookup',
               'label' : MessageService.createStaticMessage('Pragas'),
            });
            ui001.addChild( lookup020 );

            var requiredResources046 = {
               'mscrack' : {
                  'artifactId' : 'SGZArbo.MS_CRACKLookup_MSlocpublic',
                  'id' : 'awd14b009',
               },
            };
            lookup020.addRequiredResources( requiredResources046 );


            var listItemTemplate023 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.MS_CRACKLookup_MS_FUNGIDomain_listItemTemplate_Item1Desc1',
               'id' : 'aw960ac18f',
            });

            var listtext049 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.MS_CRACKLookup_MS_CRACKDomain_Item1Desc1_value',
               'id' : 'awb642679b',
            });
            listItemTemplate023.addChild( listtext049 );


            var listtext050 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.MS_CRACKLookup_MS_CRACKDomain_Item1Desc1_description',
               'id' : 'awb4077658',
            });
            listItemTemplate023.addChild( listtext050 );



            var list023 = new List({
               'resource' : 'mscrack',
               'listItemTemplate' : listItemTemplate023,
               'artifactId' : 'SGZArbo.MS_CRACKLookup_typebuildDomain_list',
               'id' : 'awd2365a3f',
            });
            lookup020.addChild( list023 );


            var returnAttributes020 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.MS_CRACKLookup_returnAttributes',
               'id' : 'awb153860b',
            });
            lookup020.addChild( returnAttributes020 );


            var returnAttribute024 = new ReturnAttribute({
               'targetAttribute' : 'rptms_crack',
               'artifactId' : 'SGZArbo.MS_CRACKLookup_value_MS_CRACK',
               'id' : 'awc37d4677',
               'sourceAttribute' : 'value',
            });
            returnAttributes020.addChild( returnAttribute024 );


            var lookup021 = new Lookup({
               'resource' : 'msdirection',
               'id' : 'SGZArbo.msdirectionLookup',
               'label' : MessageService.createStaticMessage('Dire\u00E7\u00E3o'),
            });
            ui001.addChild( lookup021 );

            var requiredResources047 = {
               'msdirection' : {
                  'artifactId' : 'SGZArbo.msdirectionLookup_msdirection',
                  'id' : 'aw88beb96e',
               },
            };
            lookup021.addRequiredResources( requiredResources047 );


            var listItemTemplate024 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.msdirectionLookup_msdirectionDomain_listItemTemplate_Item1Desc1',
               'id' : 'aw56eb9bd1',
            });

            var listtext051 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.msdirectionLookup_msdirectionDomain_Item1Desc1_value',
               'id' : 'aw1116e53e',
            });
            listItemTemplate024.addChild( listtext051 );


            var listtext052 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.msdirectionLookup_msdirectionDomain_Item1Desc1_description',
               'id' : 'awaea8c6e7',
            });
            listItemTemplate024.addChild( listtext052 );



            var list024 = new List({
               'resource' : 'msdirection',
               'listItemTemplate' : listItemTemplate024,
               'artifactId' : 'SGZArbo.msdirectionLookup_msdirectionDomain_list',
               'id' : 'aw1fb1c205',
            });
            lookup021.addChild( list024 );


            var returnAttributes021 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.msdirectionLookup_returnAttributes',
               'id' : 'aw53cc79a2',
            });
            lookup021.addChild( returnAttributes021 );


            var returnAttribute025 = new ReturnAttribute({
               'targetAttribute' : 'ms_direction',
               'artifactId' : 'SGZArbo.msdirectionLookup_value_Typebuild',
               'id' : 'awc058ed15',
               'sourceAttribute' : 'value',
            });
            returnAttributes021.addChild( returnAttribute025 );


            var lookup022 = new Lookup({
               'filterMethod' : 'popularnameDomainFamily',
               'resource' : 'msfamily',
               'filterClass' : 'custom.handlers.MSAssetDetailHandler',
               'id' : 'SGZArbo.msfamilyLookup_lookup',
               'label' : MessageService.createStaticMessage('Fam\u00EDlia'),
            });
            ui001.addChild( lookup022 );

            var requiredResources048 = {
               'msfamily' : {
                  'artifactId' : 'SGZArbo.msnameLookup_msfamily',
                  'id' : 'awab9365d',
               },
            };
            lookup022.addRequiredResources( requiredResources048 );


            var listItemTemplate025 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.msnameLookup_msfamilyDomain_listItemTemplate_Item1Desc1',
               'id' : 'aw7a088108',
            });

            var listtext053 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.msnameLookup_msfamilyDomain_Item1Desc1_value',
               'id' : 'aw3fcbbfa0',
            });
            listItemTemplate025.addChild( listtext053 );


            var listtext054 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.msnameLookup_msfamilyDomain_Item1Desc1_description',
               'id' : 'aw1d8a6c10',
            });
            listItemTemplate025.addChild( listtext054 );



            var list025 = new List({
               'resource' : 'msfamily',
               'listItemTemplate' : listItemTemplate025,
               'artifactId' : 'SGZArbo.msnameLookup_msfamilyDomain_list',
               'id' : 'awcc4852fa',
            });
            lookup022.addChild( list025 );


            var returnAttributes022 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.msnameLookup_returnAttributes',
               'id' : 'awb7d0d636',
            });
            lookup022.addChild( returnAttributes022 );


            var returnAttribute026 = new ReturnAttribute({
               'targetAttribute' : 'ms_family',
               'artifactId' : 'SGZArbo.msnameLookup_value_Typebuild',
               'id' : 'awd2387299',
               'sourceAttribute' : 'value',
            });
            returnAttributes022.addChild( returnAttribute026 );


            var lookup023 = new Lookup({
               'resource' : 'mspostage',
               'id' : 'SGZArbo.mspostageLookup',
               'label' : MessageService.createStaticMessage('Porte'),
            });
            ui001.addChild( lookup023 );

            var requiredResources049 = {
               'mspostage' : {
                  'artifactId' : 'SGZArbo.mspostageyLookup_mspostage',
                  'id' : 'awa51cbdeb',
               },
            };
            lookup023.addRequiredResources( requiredResources049 );


            var listItemTemplate026 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.mspostageLookup_mspostageDomain_listItemTemplate_Item1Desc1',
               'id' : 'aw163a419',
            });

            var listtext055 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.mspostageLookup_mspostageDomain_Item1Desc1_value',
               'id' : 'awa043ba21',
            });
            listItemTemplate026.addChild( listtext055 );


            var listtext056 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.mspostageLookup_mspostageDomain_Item1Desc1_description',
               'id' : 'awde244504',
            });
            listItemTemplate026.addChild( listtext056 );



            var list026 = new List({
               'resource' : 'mspostage',
               'listItemTemplate' : listItemTemplate026,
               'artifactId' : 'SGZArbo.mspostageLookup_mspostageDomain_list',
               'id' : 'awf37c3299',
            });
            lookup023.addChild( list026 );


            var returnAttributes023 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.mspostageLookup_returnAttributes',
               'id' : 'aw78a1af6b',
            });
            lookup023.addChild( returnAttributes023 );


            var returnAttribute027 = new ReturnAttribute({
               'targetAttribute' : 'rptms_postage',
               'artifactId' : 'SGZArbo.mspostageLookup_value_Typebuild',
               'id' : 'aw19d4b6af',
               'sourceAttribute' : 'value',
            });
            returnAttributes023.addChild( returnAttribute027 );


            var lookup024 = new Lookup({
               'resource' : 'msprioritylevel',
               'id' : 'SGZArbo.msprioritylevelLookup',
               'label' : MessageService.createStaticMessage('N\u00EDvel de Prioridade'),
            });
            ui001.addChild( lookup024 );

            var requiredResources050 = {
               'msprioritylevel' : {
                  'artifactId' : 'SGZArbo.msprioritylevelyLookup_msprioritylevel',
                  'id' : 'aw7225ae8',
               },
            };
            lookup024.addRequiredResources( requiredResources050 );


            var listItemTemplate027 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.msprioritylevelLookup_msprioritylevelDomain_listItemTemplate_Item1Desc1',
               'id' : 'aw11cbb0df',
            });

            var listtext057 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.msprioritylevelLookup_msprioritylevelDomain_Item1Desc1_value',
               'id' : 'aw2f4db6d0',
            });
            listItemTemplate027.addChild( listtext057 );


            var listtext058 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.msprioritylevelLookup_msprioritylevelDomain_Item1Desc1_description',
               'id' : 'awcfac4937',
            });
            listItemTemplate027.addChild( listtext058 );



            var list027 = new List({
               'resource' : 'msprioritylevel',
               'listItemTemplate' : listItemTemplate027,
               'artifactId' : 'SGZArbo.msprioritylevelLookup_msprioritylevelDomain_list',
               'id' : 'aw4d396354',
            });
            lookup024.addChild( list027 );


            var returnAttributes024 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.msprioritylevelLookup_returnAttributes',
               'id' : 'awafc292d1',
            });
            lookup024.addChild( returnAttributes024 );


            var returnAttribute028 = new ReturnAttribute({
               'targetAttribute' : 'rptms_prioritylevel',
               'artifactId' : 'SGZArbo.msprioritylevelLookup_value_Typebuild',
               'id' : 'aw773be24e',
               'sourceAttribute' : 'value',
            });
            returnAttributes024.addChild( returnAttribute028 );


            var lookup025 = new Lookup({
               'resource' : 'msuncup',
               'id' : 'SGZArbo.msuncupLookup',
               'label' : MessageService.createStaticMessage('Copa Desequilibrada'),
            });
            ui001.addChild( lookup025 );

            var requiredResources051 = {
               'msuncup' : {
                  'artifactId' : 'SGZArbo.msuncupyLookup_msuncup',
                  'id' : 'awaff8d13f',
               },
            };
            lookup025.addRequiredResources( requiredResources051 );


            var listItemTemplate028 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.msuncupLookup_msuncupDomain_listItemTemplate_Item1Desc1',
               'id' : 'awfc2fef16',
            });

            var listtext059 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.msuncupLookup_msuncupDomain_Item1Desc1_value',
               'id' : 'aw40cfd7e8',
            });
            listItemTemplate028.addChild( listtext059 );


            var listtext060 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.msuncupLookup_msuncupDomain_Item1Desc1_description',
               'id' : 'aw870c60a7',
            });
            listItemTemplate028.addChild( listtext060 );



            var list028 = new List({
               'resource' : 'msuncup',
               'listItemTemplate' : listItemTemplate028,
               'artifactId' : 'SGZArbo.msuncupLookup_msuncupDomain_list',
               'id' : 'aw566a68a3',
            });
            lookup025.addChild( list028 );


            var returnAttributes025 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.msuncupLookup_returnAttributes',
               'id' : 'awd8a397a1',
            });
            lookup025.addChild( returnAttributes025 );


            var returnAttribute029 = new ReturnAttribute({
               'targetAttribute' : 'rptms_uncup',
               'artifactId' : 'SGZArbo.msuncupLookup_value_Typebuild',
               'id' : 'aw110e044f',
               'sourceAttribute' : 'value',
            });
            returnAttributes025.addChild( returnAttribute029 );


            var lookup026 = new Lookup({
               'resource' : 'msarbospec',
               'filterClass' : 'custom.handlers.MSAssetDetailHandler',
               'id' : 'SGZArbo.mspopularnameLookup',
               'label' : MessageService.createStaticMessage('Selecione o Nome Popular'),
            });
            ui001.addChild( lookup026 );

            var requiredResources052 = {
               'msarbospec' : {
                  'artifactId' : 'SGZArbo.MSFamilyLookupTABLE_msarbospec',
                  'id' : 'awa9f11563',
               },
            };
            lookup026.addRequiredResources( requiredResources052 );


            var searchAttributes003 = new SearchAttributes({
               'artifactId' : 'SGZArbo.MSFamilyLookupTABLE_msarbospec_searchAttributes',
               'id' : 'aw8ce02f26',
            });

            var searchAttribute005 = new SearchAttribute({
               'name' : 'ms_popular',
               'artifactId' : 'SGZArbo.MSFamilyLookupTABLE_msarbospec_searchAttribute_ms_family',
               'id' : 'aw464de7b1',
            });
            searchAttributes003.addChild( searchAttribute005 );


            var searchAttribute006 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'SGZArbo.MSFamilyLookupTABLE_msarbospec_searchAttribute_description',
               'id' : 'aw9e02dae8',
            });
            searchAttributes003.addChild( searchAttribute006 );



            var listItemTemplate029 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.msscientificLookup_msscientificDomain_listItemTemplate_Item1Desc1_',
               'id' : 'aweeb9b2c9',
            });

            var listtext061 = new ListText({
               'resourceAttribute' : 'ms_popular',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.msscientificLookup_msscientificDomain_Item1Desc1_value_',
               'id' : 'aw7d391d7d',
            });
            listItemTemplate029.addChild( listtext061 );


            var listtext062 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.msscientificLookup_msscientificDomain_Item1Desc1_description_',
               'id' : 'awa9339c94',
            });
            listItemTemplate029.addChild( listtext062 );



            var list029 = new List({
               'resource' : 'msarbospec',
               'listItemTemplate' : listItemTemplate029,
               'artifactId' : 'SGZArbo.MSFamilyLookupTABLE_msarbospec_list',
               'id' : 'aw6b7b3c74',
               'searchAttributes' : searchAttributes003,
            });
            lookup026.addChild( list029 );


            var returnAttributes026 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.msscientificLookup_returnAttributes_',
               'id' : 'aw8b6164da',
            });
            lookup026.addChild( returnAttributes026 );


            var returnAttribute030 = new ReturnAttribute({
               'targetAttribute' : 'ms_popularname',
               'artifactId' : 'SGZArbo.msscientificLookup_value_Typebuild_',
               'id' : 'awc7b1266f',
               'sourceAttribute' : 'value',
            });
            returnAttributes026.addChild( returnAttribute030 );


            var lookup027 = new Lookup({
               'filterMethod' : 'scientificnameDomain',
               'resource' : 'msarbospeccient',
               'filterClass' : 'custom.handlers.MSAssetDetailHandler',
               'id' : 'SGZArbo.msscientificLookup',
               'label' : MessageService.createStaticMessage('Nome Cient\u00EDfico'),
            });
            ui001.addChild( lookup027 );

            var requiredResources053 = {
               'msarbospeccient' : {
                  'artifactId' : 'SGZArbo.MSCientLookupTABLE_msarbospeccient',
                  'id' : 'awfc5d248b',
               },
            };
            lookup027.addRequiredResources( requiredResources053 );


            var searchAttributes004 = new SearchAttributes({
               'artifactId' : 'SGZArbo.MSCientLookupTABLE_msarbospeccient_searchAttributes',
               'id' : 'awdcf6ea1d',
            });

            var searchAttribute007 = new SearchAttribute({
               'name' : 'ms_scientific',
               'artifactId' : 'SGZArbo.MSCientLookupTABLE_msarbospeccient_searchAttribute_ms_family',
               'id' : 'awd0ef51ee',
            });
            searchAttributes004.addChild( searchAttribute007 );


            var searchAttribute008 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'SGZArbo.MSCientLookupTABLE_msarbospeccient_searchAttribute_description',
               'id' : 'aw81231b68',
            });
            searchAttributes004.addChild( searchAttribute008 );



            var listItemTemplate030 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.MSCientLookupTABLE_msarbospeccient_listItemTemplate_Item1Desc1',
               'id' : 'aw3dd68d53',
            });

            var listtext063 = new ListText({
               'resourceAttribute' : 'ms_scientific',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.MSCientLookupTABLE_msarbospeccient_Item1Desc1_location',
               'id' : 'aw4f647123',
            });
            listItemTemplate030.addChild( listtext063 );


            var listtext064 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.MSCientLookupTABLE_msarbospeccient_Item1Desc1_description',
               'id' : 'aw4b18b198',
            });
            listItemTemplate030.addChild( listtext064 );



            var list030 = new List({
               'resource' : 'msarbospeccient',
               'listItemTemplate' : listItemTemplate030,
               'artifactId' : 'SGZArbo.MSCientLookupTABLE_msarbospeccient_list',
               'id' : 'aw2ce622bb',
               'searchAttributes' : searchAttributes004,
            });
            lookup027.addChild( list030 );


            var returnAttributes027 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.SGZArbo.MSFamilyLookupTABLE_returnAttributes',
               'id' : 'awec3dc7cd',
            });
            lookup027.addChild( returnAttributes027 );


            var returnAttribute031 = new ReturnAttribute({
               'targetAttribute' : 'ms_scientific',
               'artifactId' : 'SGZArbo.SGZArbo.MSFamilyLookupTABLE_location_location',
               'id' : 'aw148517dc',
               'sourceAttribute' : 'value',
            });
            returnAttributes027.addChild( returnAttribute031 );


            var lookup028 = new Lookup({
               'filterMethod' : 'popularnameDomainFamily',
               'resource' : 'msfamily',
               'filterClass' : 'custom.handlers.MSAssetDetailHandler',
               'id' : 'SGZArbo.msfamilyLookup',
               'label' : MessageService.createStaticMessage('Fam\u00EDlia'),
            });
            ui001.addChild( lookup028 );

            var requiredResources054 = {
               'msfamily' : {
                  'artifactId' : 'SGZArbo.msfamilyLookup_msfamily',
                  'id' : 'aw319f46e1',
               },
            };
            lookup028.addRequiredResources( requiredResources054 );


            var listItemTemplate031 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.msfamilyLookup_msfamilyDomain_listItemTemplate_Item1Desc1',
               'id' : 'aw11838f27',
            });

            var listtext065 = new ListText({
               'resourceAttribute' : 'ms_family',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.msfamilyLookup_msfamilyDomain_Item1Desc1_value',
               'id' : 'aw75b65eac',
            });
            listItemTemplate031.addChild( listtext065 );


            var listtext066 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.msfamilyLookup_msfamilyDomain_Item1Desc1_description',
               'id' : 'aw9ba43253',
            });
            listItemTemplate031.addChild( listtext066 );



            var list031 = new List({
               'resource' : 'msfamily',
               'listItemTemplate' : listItemTemplate031,
               'artifactId' : 'SGZArbo.msfamilyLookup_msfamilyDomain_list',
               'id' : 'aw46dc8f24',
            });
            lookup028.addChild( list031 );


            var returnAttributes028 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.msfamilyLookup_returnAttributes',
               'id' : 'awdde5aa49',
            });
            lookup028.addChild( returnAttributes028 );


            var returnAttribute032 = new ReturnAttribute({
               'targetAttribute' : 'ms_family',
               'artifactId' : 'SGZArbo.msfamilyLookup_value_Typebuild',
               'id' : 'aw5764ff88',
               'sourceAttribute' : 'value',
            });
            returnAttributes028.addChild( returnAttribute032 );


            var lookup029 = new Lookup({
               'resource' : 'classArbo',
               'id' : 'SGZArbo.classArboLookupTABLE',
               'label' : MessageService.createStaticMessage('Selecione o Tipo de Local'),
            });
            ui001.addChild( lookup029 );

            var requiredResources055 = {
               'classArbo' : {
                  'artifactId' : 'SGZArbo.classArboLookupTABLE_classArbo',
                  'id' : 'aw997b8a96',
               },
            };
            lookup029.addRequiredResources( requiredResources055 );


            var listItemTemplate032 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'SGZArbo.classArboLookupTABLE_classArbo_listItemTemplate_Item1Desc1',
               'id' : 'aw957e525e',
            });

            var listtext067 = new ListText({
               'resourceAttribute' : 'classficationid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZArbo.classArboLookupTABLE_classArbo_Item1Desc1_classificationid',
               'id' : 'aw573c875b',
            });
            listItemTemplate032.addChild( listtext067 );


            var listtext068 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'SGZArbo.classArboLookupTABLE_classArbo_Item1Desc1_description',
               'id' : 'awb8479025',
            });
            listItemTemplate032.addChild( listtext068 );



            var list032 = new List({
               'resource' : 'classArbo',
               'listItemTemplate' : listItemTemplate032,
               'artifactId' : 'SGZArbo.classArboLookupTABLE_classArbo_list',
               'id' : 'aw3d68ba0e',
            });
            lookup029.addChild( list032 );


            var returnAttributes029 = new ReturnAttributes({
               'artifactId' : 'SGZArbo.classArbo.MSFamilyLookupTABLE_returnAttributes',
               'id' : 'awdff3159b',
            });
            lookup029.addChild( returnAttributes029 );


            var returnAttribute033 = new ReturnAttribute({
               'targetAttribute' : 'ms_loctype',
               'artifactId' : 'SGZArbo.classArbo.MSFamilyLookupTABLE_description',
               'id' : 'aweda23182',
               'sourceAttribute' : 'description',
            });
            returnAttributes029.addChild( returnAttribute033 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AttachmentInfoView', false);
               trackTimer.startTracking();
            }

            var view027 = new View({
               'resource' : 'PlatformAttachmentInfoResource',
               'id' : 'Platform.AttachmentInfoView',
               'label' : MessageService.createStaticMessage('Attachment Details'),
            });
            ui001.addChild( view027 );

            var requiredResources056 = {
               'PlatformAttachmentInfoResource' : {
                  'reload' : true,
                  'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource',
                  'id' : 'awedbd920b',
               },
            };
            view027.addRequiredResources( requiredResources056 );

            var container042 = new Container({
               'resource' : 'PlatformAttachmentInfoResource',
               'artifactId' : 'Platform.AttachmentInfoView_container_0',
               'id' : 'aw22b80d5f',
            });
            view027.addChild( container042 );


            var group032 = new Group({
               'artifactId' : 'Platform.AttachmentInfoView_group_0',
               'id' : 'aw80e7b381',
            });
            container042.addChild( group032 );


            var groupitem116 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_0',
               'id' : 'aw15768e0',
            });
            group032.addChild( groupitem116 );


            var text109 = new Text({
               'resourceAttribute' : 'name',
               'editable' : true,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_0_name_Name',
               'id' : 'awddf675f4',
               'label' : MessageService.createStaticMessage('Name'),
               'required' : true,
            });
            groupitem116.addChild( text109 );


            var groupitem117 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_1',
               'id' : 'aw76505876',
            });
            group032.addChild( groupitem117 );


            var text110 = new Text({
               'resourceAttribute' : 'description',
               'editable' : true,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_1_description_Description',
               'id' : 'awc2735258',
               'label' : MessageService.createStaticMessage('Description'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem117.addChild( text110 );


            var groupitem118 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2',
               'id' : 'awef5909cc',
            });
            group032.addChild( groupitem118 );


            var text111 = new Text({
               'resourceAttribute' : 'category',
               'lookup' : 'PlatformAttachmentIn.CategoryLookup',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2_category_Folder',
               'id' : 'aw3a5ae064',
               'label' : MessageService.createStaticMessage('Folder'),
               'lookupAttribute' : 'folderName',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem118.addChild( text111 );

            var eventHandlers085 = [
               {
                     'method' : 'renderCategory',
                     'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2_category_Folder_eventHandlers_render_renderCategory',
                     'id' : 'awa205ff23',
                     'event' : 'render',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            text111.eventHandlers = eventHandlers085;

            var groupitem119 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_3',
               'id' : 'aw985e395a',
            });
            group032.addChild( groupitem119 );


            var text112 = new Text({
               'resourceAttribute' : 'fileType',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_3_fileType_FileType',
               'id' : 'awf0b55f9',
               'label' : MessageService.createStaticMessage('File Type'),
            });
            groupitem119.addChild( text112 );


            var groupitem120 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_4',
               'id' : 'aw63aacf9',
            });
            group032.addChild( groupitem120 );


            var text113 = new Text({
               'resourceAttribute' : 'fileSize',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_4_fileSize_FileSizeKB',
               'id' : 'awa8aac05f',
               'label' : MessageService.createStaticMessage('File Size (KB)'),
            });
            groupitem120.addChild( text113 );


            var footer020 = new Footer({
               'artifactId' : 'Platform.AttachmentInfoView_footer',
               'id' : 'awad3a6a43',
            });
            view027.addChild( footer020 );


            var button048 = new Button({
               'artifactId' : 'Platform.AttachmentInfoView_Cancel_button',
               'id' : 'aw61842429',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers086 = [
               {
                     'method' : 'handleBackButtonAttachmentDetailsView',
                     'artifactId' : 'Platform.AttachmentInfoView_Cancel_button_eventHandlers_click_handleBackButtonAttachmentDetailsView',
                     'id' : 'aw2e660b65',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button048.eventHandlers = eventHandlers086;
            footer020.addChild( button048 );


            var button049 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.AttachmentInfoView_Save_button',
               'id' : 'aw8904293b',
               'label' : MessageService.createStaticMessage('Save'),
            });
            var eventHandlers087 = [
               {
                     'method' : 'commitAttachmentEntry',
                     'artifactId' : 'Platform.AttachmentInfoView_Save_button_eventHandlers_click_commitAttachmentEntry',
                     'id' : 'awbff90b7f',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button049.eventHandlers = eventHandlers087;
            footer020.addChild( button049 );

            var eventHandlers088 = [
               {
                     'method' : 'init',
                     'artifactId' : 'Platform.AttachmentInfoView_eventHandlers_initialize_init',
                     'id' : 'awbe3d1849',
                     'event' : 'initialize',
                     'class' : 'platform.handlers.AttachmentHandler',
               },
               {
                     'method' : 'cancelAttachmentDetailsView',
                     'artifactId' : 'Platform.AttachmentInfoView_eventHandlers_cleanup_handleBackButtonAttachmentDetailsView',
                     'id' : 'awb6598e9',
                     'event' : 'cleanup',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            view027.eventHandlers = eventHandlers088;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AttachmentFileDialog', false);
               trackTimer.startTracking();
            }

            var view028 = new View({
               'id' : 'Platform.AttachmentFileDialog',
            });
            ui001.addChild( view028 );


            var footer021 = new Footer({
               'artifactId' : 'Platform.AttachmentFileDialog_footer',
               'id' : 'awb513dc05',
            });
            view028.addChild( footer021 );


            var button050 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.UnsavedSketch_doNotAllow_button',
               'id' : 'aw150d1bc',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers089 = [
               {
                     'method' : 'closeFileDialog',
                     'artifactId' : 'Platform.AttachmentFileDialog_closeDialog',
                     'id' : 'awc0d2f7fd',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button050.eventHandlers = eventHandlers089;
            footer021.addChild( button050 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var lookup030 = new Lookup({
               'resource' : 'PlatformAttachmentCategoryResource',
               'id' : 'PlatformAttachmentIn.CategoryLookup',
               'label' : MessageService.createStaticMessage('Select Folder'),
            });
            ui001.addChild( lookup030 );

            var requiredResources057 = {
               'PlatformAttachmentCategoryResource' : {
                  'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource',
                  'id' : 'aw18cc3542',
               },
            };
            lookup030.addRequiredResources( requiredResources057 );


            var searchAttributes005 = new SearchAttributes({
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_searchAttributes',
               'id' : 'awb7d9341f',
            });

            var searchAttribute009 = new SearchAttribute({
               'name' : 'folderName',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_searchAttribute_folderName',
               'id' : 'aw9514e6e6',
            });
            searchAttributes005.addChild( searchAttribute009 );



            var listItemTemplate033 = new ListItemTemplate({
               'layout' : 'Item2Desc2',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_listItemTemplate_Item2Desc2',
               'id' : 'aweb3659e3',
            });

            var listtext069 = new ListText({
               'resourceAttribute' : 'folderName',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_Item2Desc2_folderName',
               'id' : 'aw48fc196b',
            });
            listItemTemplate033.addChild( listtext069 );



            var list033 = new List({
               'resource' : 'PlatformAttachmentCategoryResource',
               'listItemTemplate' : listItemTemplate033,
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_list',
               'id' : 'awe6857cc4',
               'searchAttributes' : searchAttributes005,
            });
            lookup030.addChild( list033 );


            var returnAttributes030 = new ReturnAttributes({
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_returnAttributes',
               'id' : 'aw4860e6b5',
            });
            lookup030.addChild( returnAttributes030 );


            var returnAttribute034 = new ReturnAttribute({
               'targetAttribute' : 'category',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_folderName_category',
               'id' : 'awb2f5d728',
               'sourceAttribute' : 'folderName',
            });
            returnAttributes030.addChild( returnAttribute034 );


            var actions006 = new Actions({
               'artifactId' : 'actions',
               'id' : 'aw548f1ef',
            });
            ui001.addChild( actions006 );


            var action009 = new Action({
               'overflow' : true,
               'artifactId' : 'ResetWorkList_action',
               'id' : 'aw956f5d3b',
               'label' : MessageService.createStaticMessage('Reset Work List'),
            });
            actions006.addChild( action009 );

            var eventHandlers090 = [
               {
                     'method' : 'resetWorkList',
                     'artifactId' : 'ResetWorkList_action_eventHandlers_click_findByScan',
                     'id' : 'aw11a2bd29',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               },
               {
                     'method' : 'enableResetWorkList',
                     'artifactId' : 'ResetWorkList_action_eventHandlers_render_enableResetWorkList',
                     'id' : 'awfb6356a8',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action009.eventHandlers = eventHandlers090;

            var action010 = new Action({
               'overflow' : true,
               'artifactId' : 'PseudoOffline_goOffline',
               'id' : 'aw90309912',
               'label' : MessageService.createStaticMessage('Enable Offline Mode'),
            });
            actions006.addChild( action010 );

            var eventHandlers091 = [
               {
                     'method' : 'toggleOfflineMode',
                     'artifactId' : 'PseudoOffline_enableoffline_action_eventHandlers_click',
                     'id' : 'aw33d3b70c',
                     'event' : 'click',
                     'class' : 'platform.handlers.PseudoOfflineModeHandler',
               }
            ];
            action010.eventHandlers = eventHandlers091;

            var action011 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.Settings',
               'artifactId' : 'Settings_action',
               'id' : 'awc0b1927e',
               'label' : MessageService.createStaticMessage('Settings'),
            });
            actions006.addChild( action011 );


            var action012 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.HelpAbout',
               'artifactId' : 'About_action',
               'id' : 'aw49fae06b',
               'label' : MessageService.createStaticMessage('About'),
            });
            actions006.addChild( action012 );


            var action013 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.LogOutPrompt',
               'artifactId' : 'LogOut_action',
               'id' : 'awd566efa2',
               'label' : MessageService.createStaticMessage('Log Out'),
            });
            actions006.addChild( action013 );


            var action014 = new Action({
               'artifactId' : 'action',
               'id' : 'aw47cc8c92',
            });
            actions006.addChild( action014 );

            var eventHandlers092 = [
               {
                     'artifactId' : 'action_eventHandlers_click',
                     'id' : 'aw871940b2',
                     'event' : 'click',
                     'class' : 'platform.handlers.CreateQueryBaseHandler',
               }
            ];
            action014.eventHandlers = eventHandlers092;

            var erroractions001 = new ErrorActions({
               'artifactId' : 'erroractions',
               'id' : 'aw6a5d95e9',
            });
            ui001.addChild( erroractions001 );


            var action015 = new Action({
               'artifactId' : 'UndoChanges_action',
               'id' : 'aw2236d58a',
               'label' : MessageService.createStaticMessage('Undo Changes'),
            });
            erroractions001.addChild( action015 );

            var eventHandlers093 = [
               {
                     'method' : 'confirmClearChanges',
                     'artifactId' : 'UndoChanges_action_eventHandlers_click_confirmClearChanges',
                     'id' : 'awcf857f5c',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action015.eventHandlers = eventHandlers093;

            var action016 = new Action({
               'artifactId' : 'ResendChanges_action',
               'id' : 'awccf9e70e',
               'label' : MessageService.createStaticMessage('Resend Changes'),
            });
            erroractions001.addChild( action016 );

            var eventHandlers094 = [
               {
                     'method' : 'retryRecordChanges',
                     'artifactId' : 'ResendChanges_action_eventHandlers_click_retryRecordChanges',
                     'id' : 'aw543ac47e',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action016.eventHandlers = eventHandlers094;
            var eventHandlers095 = [
               {
                     'method' : 'none',
                     'artifactId' : 'eventHandlers_none_none',
                     'id' : 'aw1e2e7ded',
                     'event' : 'none',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            ui001.eventHandlers = eventHandlers095;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.emptyview', false);
               trackTimer.startTracking();
            }

            var view029 = new View({
               'showHeader' : false,
               'id' : 'Platform.emptyview',
               'showFooter' : false,
            });
            ui001.addChild( view029 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Notifications', false);
               trackTimer.startTracking();
            }

            var view030 = new View({
               'id' : 'Platform.Notifications',
               'label' : MessageService.createStaticMessage('My Notifications'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view030 );

            var requiredResources058 = {
               'osusernotification' : {
                  'reload' : true,
                  'artifactId' : 'Platform.Notifications_osusernotification',
                  'id' : 'awed6a5e70',
               },
               'PlatformTempPushNotification' : {
                  'reload' : true,
                  'artifactId' : 'Platform.Notifications_PlatformTempPushNotification',
                  'id' : 'aw9993c5cb',
               },
            };
            view030.addRequiredResources( requiredResources058 );


            var listItemTemplate034 = new ListItemTemplate({
               'layout' : 'NotificationList',
               'artifactId' : 'Platform.Notifications_listItemTemplate',
               'id' : 'aw718eb447',
            });

            var listtext070 = new ListText({
               'resourceAttribute' : 'uiDate',
               'layoutInsertAt' : 'date1',
               'artifactId' : 'Platform.Notifications_uiDate',
               'id' : 'aw56b07378',
            });
            listItemTemplate034.addChild( listtext070 );


            var listtext071 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Platform.Notifications_itemnum',
               'id' : 'aw4dbbd111',
            });
            listItemTemplate034.addChild( listtext071 );


            var listtext072 = new ListText({
               'resourceAttribute' : 'itemDesc',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Platform.Notifications_itemDesc',
               'id' : 'aw6bac97b9',
            });
            listItemTemplate034.addChild( listtext072 );

            var eventHandlers096 = [
               {
                     'method' : 'openFromMsgHistory',
                     'artifactId' : 'Platform.Notifications_Open_button_eventHandlers_click_FromList',
                     'id' : 'awf03f57bd',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               },
               {
                     'method' : 'renderMsgHistoryItem',
                     'artifactId' : 'Platform.Notifications_Open_button_eventHandlers_render_FromList',
                     'id' : 'awfd2341e9',
                     'event' : 'render',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            listItemTemplate034.eventHandlers = eventHandlers096;


            var list034 = new List({
               'resource' : 'osusernotification',
               'listItemTemplate' : listItemTemplate034,
               'artifactId' : 'Platform.Notifications_list',
               'id' : 'awb4916253',
               'label' : MessageService.createStaticMessage('List of notifications'),
            });
            view030.addChild( list034 );

            var eventHandlers097 = [
               {
                     'method' : 'renderMsgHistory',
                     'artifactId' : 'Platform.Notifications_eventHandlers_render_FromList',
                     'id' : 'awa8aedc90',
                     'event' : 'render',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            view030.eventHandlers = eventHandlers097;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog005 = new Dialog({
               'cssClass' : 'dialogDateTimeLookup',
               'resource' : 'PlatformDateLookupResource',
               'id' : 'Platform.DateTimeLookup',
               'label' : MessageService.createStaticMessage('Change Time or Date'),
            });
            ui001.addChild( dialog005 );

            var eventHandlers098 = [
               {
                     'method' : 'initLookup',
                     'artifactId' : 'Platform.DateTimeLookup_eventHandlers_show_initLookup',
                     'id' : 'aw576c44ec',
                     'event' : 'show',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            dialog005.eventHandlers = eventHandlers098;

            var container043 = new Container({
               'artifactId' : 'Platform.DateTimeLookup_container_0',
               'id' : 'aw3cdb37d7',
            });
            dialog005.addChild( container043 );


            var datetimepicker001 = new DateTimePicker({
               'artifactId' : 'Platform.DateTimeLookup_datetimepicker_0',
               'id' : 'aw7d2f0e0d',
            });
            container043.addChild( datetimepicker001 );


            var container044 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DateTimeLookup_container_1',
               'id' : 'aw4bdc0741',
            });
            dialog005.addChild( container044 );


            var button051 = new Button({
               'artifactId' : 'Platform.DateTimeLookup_Cancel_button',
               'id' : 'aw54d2f1bb',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers099 = [
               {
                     'method' : 'Cancel',
                     'artifactId' : 'Platform.DateTimeLookup_Cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw5ced0c47',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button051.eventHandlers = eventHandlers099;
            container044.addChild( button051 );


            var button052 = new Button({
               'artifactId' : 'Platform.DateTimeLookup_Clear_button',
               'id' : 'awfd1238bd',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers100 = [
               {
                     'method' : 'Clear',
                     'artifactId' : 'Platform.DateTimeLookup_Clear_button_eventHandlers_click_Clear',
                     'id' : 'aw47510f1f',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button052.eventHandlers = eventHandlers100;
            container044.addChild( button052 );


            var button053 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DateTimeLookup_OK_button',
               'id' : 'awb1e0d280',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers101 = [
               {
                     'method' : 'SetSelection',
                     'artifactId' : 'Platform.DateTimeLookup_OK_button_eventHandlers_click_SetSelection',
                     'id' : 'aw6c08b2ff',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button053.eventHandlers = eventHandlers101;
            container044.addChild( button053 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.HelpAbout', false);
               trackTimer.startTracking();
            }

            var view031 = new View({
               'resource' : 'PlatformLoginResource',
               'id' : 'Platform.HelpAbout',
               'label' : MessageService.createStaticMessage('About'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view031 );


            var container045 = new Container({
               'cssClass' : 'platformHelpAboutContainer',
               'artifactId' : 'Platform.HelpAbout_container_0',
               'id' : 'awf8c0259e',
            });
            view031.addChild( container045 );


            var image003 = new Image({
               'image' : 'ibmLogoDark.svg',
               'artifactId' : 'Platform.HelpAbout_image_0',
               'id' : 'awfebf608a',
            });
            container045.addChild( image003 );


            var text114 = new Text({
               'resourceAttribute' : 'appName',
               'cssClass' : 'productName bold textappearance-large',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_appName',
               'id' : 'aw27632fa8',
            });
            container045.addChild( text114 );


            var text115 = new Text({
               'cssClass' : 'version',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_Version7.5.2.1',
               'id' : 'awf060501a',
               'value' : MessageService.createStaticMessage('Version 7.6.4.0'),
            });
            container045.addChild( text115 );


            var text116 = new Text({
               'cssClass' : 'build',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_Buildnumberbuild',
               'id' : 'awd289f042',
               'value' : MessageService.createStaticMessage('Build number @build@'),
            });
            container045.addChild( text116 );


            var text117 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_LicensedMaterials-',
               'id' : 'aw31046f88',
               'value' : MessageService.createStaticMessage('Licensed Materials - Property of IBM. \u00A9IBM Corp. 2020. IBM, the IBM logo, and ibm.com are trademarks of IBM Corp., registered in many jurisdictions worldwide. Other product and service names might be trademarks of IBM or other companies. A current list of IBM trademarks is available on the Web at www.ibm.com\/legal\/copytrade.shtml. This Program is licensed under the terms of the license agreement for the Program. Please read this agreement carefully before using the Program. By using the Program, you agree to these terms.'),
            });
            container045.addChild( text117 );


            var text118 = new Text({
               'enableFeatureByProperty' : 'map.enabled',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_MappingAPIprovided',
               'id' : 'aw45d74eca',
               'value' : MessageService.createStaticMessage('Mapping API provided by Esri ArcGIS Runtime SDK for Android and iOS.'),
            });
            container045.addChild( text118 );


            var group033 = new Group({
               'debugOnly' : 'true',
               'artifactId' : 'Platform.Settings_group_2',
               'id' : 'awc5ac5572',
            });
            container045.addChild( group033 );


            var groupitem121 = new GroupItem({
               'layout' : 'ScreenInfo',
               'cssClass' : 'screenInfo',
               'artifactId' : 'Platform.Settings_screenInfo_item',
               'id' : 'aw5de3d82',
            });
            group033.addChild( groupitem121 );


            var text119 = new Text({
               'cssClass' : 'textappearance-large',
               'layoutInsertAt' : 'title',
               'artifactId' : 'Platform.Settings_screenInfo_title',
               'id' : 'awd295621c',
               'value' : MessageService.createStaticMessage('Screen Information'),
            });
            groupitem121.addChild( text119 );


            var text120 = new Text({
               'resourceAttribute' : 'ppi',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pixels',
               'artifactId' : 'Platform.Settings_screenInfo_ppi_text',
               'id' : 'aw4219624',
               'label' : MessageService.createStaticMessage('PPI'),
            });
            groupitem121.addChild( text120 );


            var text121 = new Text({
               'resourceAttribute' : 'width',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'width',
               'artifactId' : 'Platform.Settings_screenInfo_width_text',
               'id' : 'aw6564040e',
               'label' : MessageService.createStaticMessage('Width'),
            });
            groupitem121.addChild( text121 );


            var text122 = new Text({
               'resourceAttribute' : 'height',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'height',
               'artifactId' : 'Platform.Settings_screenInfo_height_text',
               'id' : 'awcd6ab682',
               'label' : MessageService.createStaticMessage('Height'),
            });
            groupitem121.addChild( text122 );


            var text123 = new Text({
               'resourceAttribute' : 'layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'size',
               'artifactId' : 'Platform.Settings_screenInfo_layout_text',
               'id' : 'awd74c1b0',
               'label' : MessageService.createStaticMessage('Layout Size'),
            });
            groupitem121.addChild( text123 );


            var text124 = new Text({
               'resourceAttribute' : 'orientation',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'orientation',
               'artifactId' : 'Platform.Settings_screenInfo_orientation_text',
               'id' : 'aw22df9e6f',
               'label' : MessageService.createStaticMessage('Orientation'),
            });
            groupitem121.addChild( text124 );


            var text125 = new Text({
               'resourceAttribute' : 'density',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'density',
               'artifactId' : 'Platform.Settings_screenInfo_density_text',
               'id' : 'aw6b4b20e2',
               'label' : MessageService.createStaticMessage('Density'),
            });
            groupitem121.addChild( text125 );


            var text126 = new Text({
               'resourceAttribute' : 'pane0_layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pane0',
               'artifactId' : 'Platform.Settings_screenInfo_pane0',
               'id' : 'aw39d3d4a7',
               'label' : MessageService.createStaticMessage('Pane 1 Size'),
            });
            groupitem121.addChild( text126 );


            var text127 = new Text({
               'resourceAttribute' : 'pane1_layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pane1',
               'artifactId' : 'Platform.Settings_screenInfo_pane1',
               'id' : 'aw4ed4e431',
               'label' : MessageService.createStaticMessage('Pane 2 Size'),
            });
            groupitem121.addChild( text127 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Settings', false);
               trackTimer.startTracking();
            }

            var view032 = new View({
               'id' : 'Platform.Settings',
               'label' : MessageService.createStaticMessage('Settings'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view032 );

            var requiredResources059 = {
               'LastADDownload' : {
                  'artifactId' : 'Platform.Settings_LastADDownload',
                  'id' : 'aw879343e2',
               },
            };
            view032.addRequiredResources( requiredResources059 );

            var actions007 = new Actions({
               'artifactId' : 'Platform.Settings_actions',
               'id' : 'awb3f56d3b',
            });
            view032.addChild( actions007 );


            var action017 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.Settings_RefreshSystemData_action',
               'id' : 'awccb0ee65',
               'label' : MessageService.createStaticMessage('Refresh System Data'),
            });
            actions007.addChild( action017 );

            var eventHandlers102 = [
               {
                     'method' : 'openDownloadSystemDataDialog',
                     'artifactId' : 'Platform.Settings_RefreshSystemData_action_eventHandlers_click_downloadSystemData',
                     'id' : 'aw490b2801',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               },
               {
                     'method' : 'renderDownloadSytemDataActionButton',
                     'artifactId' : 'Platform.Settings_RefreshSystemData_action_eventHandlers_render_renderDownloadSytemDataActionButton',
                     'id' : 'awa42bdfcc',
                     'event' : 'render',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            action017.eventHandlers = eventHandlers102;

            var container046 = new Container({
               'resource' : 'LastADDownload',
               'artifactId' : 'Platform.Settings_container_0',
               'id' : 'aw74ff68b5',
            });
            view032.addChild( container046 );


            var group034 = new Group({
               'artifactId' : 'Platform.Settings_group_0',
               'id' : 'aw2ba2345e',
            });
            container046.addChild( group034 );


            var groupitem122 = new GroupItem({
               'transitionTo' : 'Platform.ChangePassword',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0',
               'id' : 'awd48342a3',
            });
            group034.addChild( groupitem122 );


            var text128 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0_ChangePassword',
               'id' : 'aw6c14924a',
               'value' : MessageService.createStaticMessage('Change Password'),
            });
            groupitem122.addChild( text128 );

            var eventHandlers103 = [
               {
                     'method' : 'enableChangePasswordFunction',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0_eventHandlers_render_enableChangePasswordFunction',
                     'id' : 'awa81f4a5',
                     'event' : 'render',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            groupitem122.eventHandlers = eventHandlers103;

            var groupitem123 = new GroupItem({
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0',
               'id' : 'aw82635ebb',
            });
            group034.addChild( groupitem123 );


            var text129 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_RefreshLookupData',
               'id' : 'awcddf2167',
               'value' : MessageService.createStaticMessage('Refresh Lookup Data'),
            });
            groupitem123.addChild( text129 );


            var text130 = new Text({
               'resourceAttribute' : 'downloadStatus',
               'editable' : false,
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_downloadStatus',
               'id' : 'aw8a1673e3',
            });
            groupitem123.addChild( text130 );

            var eventHandlers104 = [
               {
                     'method' : 'renderLastDownload',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_downloadStatus_eventHandlers_render_renderLastDownload',
                     'id' : 'aw72547fb7',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text130.eventHandlers = eventHandlers104;

            var text131 = new Text({
               'cssClass' : 'textappearance-small',
               'editable' : false,
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_Updatesthelookupd',
               'id' : 'aw38a24bec',
               'value' : MessageService.createStaticMessage('Updates the lookup data on your device. Lookup data includes objects, such as assets and locations, that can be added to records.'),
            });
            groupitem123.addChild( text131 );

            var eventHandlers105 = [
               {
                     'method' : 'refreshAdditionalData',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_eventHandlers_click_refreshAdditionalData',
                     'id' : 'aw93ad06fe',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            groupitem123.eventHandlers = eventHandlers105;

            var groupitem124 = new GroupItem({
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_3_Number_of_day_to_sync',
               'id' : 'aw97e66cd6',
            });
            group034.addChild( groupitem124 );


            var text132 = new Text({
               'resourceAttribute' : 'numberOfDaysToSync',
               'editable' : true,
               'artifactId' : 'Platform.Settings_LastADDownload_text_Number_of_day_to_sync',
               'id' : 'aw69a517e3',
               'label' : MessageService.createStaticMessage('How often changes need to be refresh in days:'),
            });
            groupitem124.addChild( text132 );

            var eventHandlers106 = [
               {
                     'method' : 'renderDayToSYnc',
                     'artifactId' : 'Platform.Settings_LastADDownload_text_Number_of_day_to_sync_eventHandlers_renderDayToSYnc',
                     'id' : 'awdc11c959',
                     'event' : 'render',
                     'class' : 'platform.handlers.SettingsHandler',
               },
               {
                     'method' : 'saveDayToSync',
                     'artifactId' : 'Platform.Settings_LastADDownload_text_Number_of_day_to_sync_eventHandlers_saveDayToSYnc',
                     'id' : 'aw57729721',
                     'event' : 'validate',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            text132.eventHandlers = eventHandlers106;

            var groupitem125 = new GroupItem({
               'transitionTo' : 'Platform.AdvancedSettings',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.AdvancedSettings_0',
               'id' : 'aw741c4d60',
            });
            group034.addChild( groupitem125 );


            var text133 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.AdvancedSettings_0_AdvancedSettings',
               'id' : 'aw2d662633',
               'value' : MessageService.createStaticMessage('Advanced Settings'),
            });
            groupitem125.addChild( text133 );


            var group035 = new Group({
               'enableFeatureByProperty' : 'attachments.enabled',
               'artifactId' : 'Platform.Settings_group_1',
               'id' : 'aw5ca504c8',
            });
            container046.addChild( group035 );


            var groupitem126 = new GroupItem({
               'layout' : 'Item1Button1',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_1',
               'id' : 'awf5646e2d',
            });
            group035.addChild( groupitem126 );


            var text134 = new Text({
               'cssClass' : 'wrap-content',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_1_Downloadattachments',
               'id' : 'awd21c407a',
               'value' : MessageService.createStaticMessage('Download attachments with work list.'),
            });
            groupitem126.addChild( text134 );


            var checkbox067 = new CheckBox({
               'resourceAttribute' : 'downloadAttachments',
               'cssClass' : 'rightCheckBox',
               'editable' : true,
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Platform.Settings_downloadAttachments_checkbox',
               'id' : 'aw1a5b9aa2',
            });
            groupitem126.addChild( checkbox067 );

            var eventHandlers107 = [
               {
                     'method' : 'updateFieldValue',
                     'artifactId' : 'Platform.Settings_downloadAttachments_checkbox_eventHandlers_render_updateFieldValue',
                     'id' : 'aw9635db7f',
                     'event' : 'render',
                     'class' : 'platform.handlers.SettingsHandler',
               },
               {
                     'method' : 'updateSettingsValue',
                     'artifactId' : 'Platform.Settings_downloadAttachments_checkbox_eventHandlers_validate_updateSettingsValue',
                     'id' : 'awb178b23',
                     'event' : 'validate',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            checkbox067.eventHandlers = eventHandlers107;

            var container047 = new Container({
               'artifactId' : 'ConnectionContainer',
               'id' : 'awef0b2658',
            });
            view032.addChild( container047 );


            var group036 = new Group({
               'artifactId' : 'Platform.Settings.ConnectionManagement.group',
               'id' : 'aw9ad5002d',
            });
            container047.addChild( group036 );


            var groupitem127 = new GroupItem({
               'layout' : 'ConnectionManagementLayout',
               'artifactId' : 'Platform.Settings.ConnectionManagement.groupItem1',
               'id' : 'aw81b0980b',
            });
            group036.addChild( groupitem127 );


            var text135 = new Text({
               'cssClass' : 'relatedRecords',
               'layoutInsertAt' : 'Title',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Title',
               'id' : 'aw1de21387',
               'value' : MessageService.createStaticMessage('Connection Behavior'),
            });
            groupitem127.addChild( text135 );


            var text136 = new Text({
               'cssClass' : 'wrap-content',
               'layoutInsertAt' : 'description',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Description',
               'id' : 'aw6b506a6f',
               'value' : MessageService.createStaticMessage('Specifies which network connections should enable the application to work online'),
            });
            groupitem127.addChild( text136 );


            var radiobutton001 = new RadioButton({
               'cssClass' : 'firstradiobutton',
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.AllConnections',
               'id' : 'awcb83aecb',
               'label' : MessageService.createStaticMessage('All Types'),
            });
            groupitem127.addChild( radiobutton001 );

            var eventHandlers108 = [
               {
                     'method' : 'renderConnetionManagementSetting',
                     'artifactId' : 'Platform.Settings.ConnectionManagement.AllConnection.EventHandler1',
                     'id' : 'awe9d7776d',
                     'event' : 'render',
                     'class' : 'platform.handlers.SettingsHandler',
               },
               {
                     'method' : 'connetionManagementSetting',
                     'artifactId' : 'Platform.Settings.allCOnnection.click.EventHandler',
                     'id' : 'aw76203443',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            radiobutton001.eventHandlers = eventHandlers108;

            var radiobutton002 = new RadioButton({
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button2',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.WiFi',
               'id' : 'aw42dec2bb',
               'label' : MessageService.createStaticMessage('Only WiFi'),
            });
            groupitem127.addChild( radiobutton002 );

            var eventHandlers109 = [
               {
                     'method' : 'renderConnetionManagementSetting',
                     'artifactId' : 'Platform.Settings.ConnectionManagement.AllConnection.EventHandler2',
                     'id' : 'aw70de26d7',
                     'event' : 'render',
                     'class' : 'platform.handlers.SettingsHandler',
               },
               {
                     'method' : 'connetionManagementSetting',
                     'artifactId' : 'Platform.Settings.WiFi.click.EventHandler',
                     'id' : 'aw183e4c0c',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            radiobutton002.eventHandlers = eventHandlers109;

            var radiobutton003 = new RadioButton({
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button3',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.Cellular',
               'id' : 'aw7032481d',
               'label' : MessageService.createStaticMessage('Only Cellular'),
            });
            groupitem127.addChild( radiobutton003 );

            var eventHandlers110 = [
               {
                     'method' : 'renderConnetionManagementSetting',
                     'artifactId' : 'Platform.Settings.ConnectionManagement.AllConnection.EventHandler3',
                     'id' : 'aw7d91641',
                     'event' : 'render',
                     'class' : 'platform.handlers.SettingsHandler',
               },
               {
                     'method' : 'connetionManagementSetting',
                     'artifactId' : 'Platform.Settings.ConnectionManagement.Cellular.EventHandler',
                     'id' : 'aw2a978e73',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            radiobutton003.eventHandlers = eventHandlers110;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AdvancedSettings', false);
               trackTimer.startTracking();
            }

            var view033 = new View({
               'id' : 'Platform.AdvancedSettings',
               'label' : MessageService.createStaticMessage('Settings'),
            });
            ui001.addChild( view033 );


            var container048 = new Container({
               'artifactId' : 'Platform.AdvancedSettings_container_0',
               'id' : 'aw5c13274d',
            });
            view033.addChild( container048 );


            var group037 = new Group({
               'artifactId' : 'Platform.AdvancedSettings_group_0',
               'id' : 'awebdfb82c',
            });
            container048.addChild( group037 );


            var groupitem128 = new GroupItem({
               'transitionTo' : 'Platform.TimeTrackReport',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0',
               'id' : 'awba4384a8',
            });
            group037.addChild( groupitem128 );


            var text137 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0_TrackPerformanceDa',
               'id' : 'awc0a6dde7',
               'value' : MessageService.createStaticMessage('Track Performance Data'),
            });
            groupitem128.addChild( text137 );


            var text138 = new Text({
               'cssClass' : 'red-text',
               'editable' : false,
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0_Thisoptionusesmem',
               'id' : 'aw4367e95f',
               'value' : MessageService.createStaticMessage('This option uses memory and might slow the performance of your device. Disable performance tracking when you are done.'),
            });
            groupitem128.addChild( text138 );


            var groupitem129 = new GroupItem({
               'transitionTo' : 'Platform.LoggerReport',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0',
               'id' : 'aw10ca73e0',
            });
            group037.addChild( groupitem129 );


            var text139 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0_Logging',
               'id' : 'awffa3ff9c',
               'value' : MessageService.createStaticMessage('Logging'),
            });
            groupitem129.addChild( text139 );


            var text140 = new Text({
               'cssClass' : 'red-text',
               'editable' : false,
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0_Thisoptionusesmem',
               'id' : 'aw30da1efa',
               'value' : MessageService.createStaticMessage('This option uses memory and might slow the performance of your device. Disable logging when you are done.'),
            });
            groupitem129.addChild( text140 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.LoggerReport', false);
               trackTimer.startTracking();
            }

            var view034 = new View({
               'cssClass' : 'loggerReport',
               'scrollDir' : 'vh',
               'id' : 'Platform.LoggerReport',
               'label' : MessageService.createStaticMessage('Logging Data'),
            });
            ui001.addChild( view034 );


            var actions008 = new Actions({
               'artifactId' : 'Platform.LoggerReport_actions',
               'id' : 'aw5b090344',
            });
            view034.addChild( actions008 );


            var action018 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableErrorLogging_action',
               'id' : 'awc05e82b4',
               'label' : MessageService.createStaticMessage('Enable Error Logging'),
            });
            actions008.addChild( action018 );

            var eventHandlers111 = [
               {
                     'method' : 'enableDisableLoggerErro',
                     'artifactId' : 'Platform.LoggerReport_EnableErrorLogging_action_eventHandlers_click_enableDisableLoggerErro',
                     'id' : 'awf5ad7151',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               },
               {
                     'method' : 'setLabelError',
                     'artifactId' : 'Platform.LoggerReport_EnableErrorLogging_action_eventHandlers_render_setLabelError',
                     'id' : 'aw4faa4e07',
                     'event' : 'render',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action018.eventHandlers = eventHandlers111;

            var action019 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableInfoLogging_action',
               'id' : 'aw6d618335',
               'label' : MessageService.createStaticMessage('Enable Info Logging'),
            });
            actions008.addChild( action019 );

            var eventHandlers112 = [
               {
                     'method' : 'enableDisableLoggerInfo',
                     'artifactId' : 'Platform.LoggerReport_EnableInfoLogging_action_eventHandlers_click_enableDisableLoggerInfo',
                     'id' : 'aw164710f9',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               },
               {
                     'method' : 'setLabelInfo',
                     'artifactId' : 'Platform.LoggerReport_EnableInfoLogging_action_eventHandlers_render_setLabelInfo',
                     'id' : 'awc8b2e890',
                     'event' : 'render',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action019.eventHandlers = eventHandlers112;

            var action020 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableDebugLogging_action',
               'id' : 'awaa11689b',
               'label' : MessageService.createStaticMessage('Enable Debug Logging'),
            });
            actions008.addChild( action020 );

            var eventHandlers113 = [
               {
                     'method' : 'enableDisableLoggerDebug',
                     'artifactId' : 'Platform.LoggerReport_EnableDebugLogging_action_eventHandlers_click_enableDisableLoggerDebug',
                     'id' : 'aw49ea32aa',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               },
               {
                     'method' : 'setLabelDebug',
                     'artifactId' : 'Platform.LoggerReport_EnableDebugLogging_action_eventHandlers_render_setLabelDebug',
                     'id' : 'aw1cc86c8a',
                     'event' : 'render',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action020.eventHandlers = eventHandlers113;

            var action021 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.TransLoggerReport',
               'artifactId' : 'Platform.LoggerReport_ViewTransactionLog_action',
               'id' : 'awdaed3d40',
               'label' : MessageService.createStaticMessage('View Transaction Log'),
            });
            actions008.addChild( action021 );


            var action022 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_ClearLogData_action',
               'id' : 'awb6d3895c',
               'label' : MessageService.createStaticMessage('Clear Log Data'),
            });
            actions008.addChild( action022 );

            var eventHandlers114 = [
               {
                     'method' : 'clear',
                     'artifactId' : 'Platform.LoggerReport_ClearLogData_action_eventHandlers_click_clear',
                     'id' : 'aw10958c5',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action022.eventHandlers = eventHandlers114;

            var action023 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_UploadLog_action',
               'id' : 'aw7510fce3',
               'label' : MessageService.createStaticMessage('Save Log'),
            });
            actions008.addChild( action023 );

            var eventHandlers115 = [
               {
                     'method' : 'showIfConnected',
                     'artifactId' : 'Platform.LoggerReport_UploadLog_action_eventHandlers_render_uploadCurrent',
                     'id' : 'aw4d53a4f5',
                     'event' : 'render',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               },
               {
                     'method' : 'uploadCurrent',
                     'artifactId' : 'Platform.LoggerReport_UploadLog_action_eventHandlers_click_uploadCurrent',
                     'id' : 'aw2b172289',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action023.eventHandlers = eventHandlers115;

            var action024 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EmailLog_action',
               'id' : 'aw90d8a401',
               'label' : MessageService.createStaticMessage('Email Log'),
            });
            actions008.addChild( action024 );

            var eventHandlers116 = [
               {
                     'method' : 'emailCurrent',
                     'artifactId' : 'Platform.LoggerReport_EmailLog_action_eventHandlers_click_emailCurrent',
                     'id' : 'awf10881b9',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action024.eventHandlers = eventHandlers116;
            var eventHandlers117 = [
               {
                     'method' : 'renderLoggerReport',
                     'artifactId' : 'Platform.LoggerReport_eventHandlers_show_renderLoggerReport',
                     'id' : 'aw9b7c5c73',
                     'event' : 'show',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            view034.eventHandlers = eventHandlers117;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.TransLoggerReport', false);
               trackTimer.startTracking();
            }

            var view035 = new View({
               'scrollDir' : 'vh',
               'id' : 'Platform.TransLoggerReport',
               'label' : MessageService.createStaticMessage('Logging Data'),
            });
            ui001.addChild( view035 );


            var actions009 = new Actions({
               'artifactId' : 'Platform.TransLoggerReport_actions',
               'id' : 'aw49b00040',
            });
            view035.addChild( actions009 );


            var action025 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TransLoggerReport_ClearLogData_action',
               'id' : 'awdce21e26',
               'label' : MessageService.createStaticMessage('Clear Log Data'),
            });
            actions009.addChild( action025 );

            var eventHandlers118 = [
               {
                     'method' : 'clearTransLog',
                     'artifactId' : 'Platform.TransLoggerReport_ClearLogData_action_eventHandlers_click_clear',
                     'id' : 'aw71c2398e',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action025.eventHandlers = eventHandlers118;

            var action026 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TransLoggerReport_EmailLog_action',
               'id' : 'aw29f3639',
               'label' : MessageService.createStaticMessage('Email Log'),
            });
            actions009.addChild( action026 );

            var eventHandlers119 = [
               {
                     'method' : 'emailCurrentTranslog',
                     'artifactId' : 'Platform.TransLoggerReport_EmailLog_action_eventHandlers_click_emailCurrent',
                     'id' : 'awfd97a236',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action026.eventHandlers = eventHandlers119;
            var eventHandlers120 = [
               {
                     'method' : 'renderTransLoggerReport',
                     'artifactId' : 'Platform.TransLoggerReport_eventHandlers_show_renderTransLoggerReport',
                     'id' : 'aw4261a98a',
                     'event' : 'show',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            view035.eventHandlers = eventHandlers120;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.ChangePassword', false);
               trackTimer.startTracking();
            }

            var view036 = new View({
               'resource' : 'PlatformChangePasswordForm',
               'id' : 'Platform.ChangePassword',
               'label' : MessageService.createStaticMessage('Change Password'),
            });
            ui001.addChild( view036 );


            var container049 = new Container({
               'cssClass' : 'changePasswordForm',
               'artifactId' : 'Platform.ChangePassword_container_0',
               'id' : 'awf7c2a2a',
            });
            view036.addChild( container049 );


            var text141 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.ChangePassword_container_0_errorMsg',
               'id' : 'aw3ed16fe1',
            });
            container049.addChild( text141 );


            var text142 = new Text({
               'resourceAttribute' : 'infoMsg',
               'cssClass' : 'infoMsg',
               'editable' : false,
               'artifactId' : 'Platform.ChangePassword_container_0_infoMsg',
               'id' : 'awe28ebedd',
            });
            container049.addChild( text142 );


            var text143 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'currentpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_currentpassword',
               'id' : 'aw7df0b045',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Current password'),
            });
            container049.addChild( text143 );

            var eventHandlers121 = [
               {
                     'method' : 'hidePasswordField',
                     'artifactId' : 'Platform.ChangePassword_container_0_currentpassword_eventHandlers_render_hidePasswordField',
                     'id' : 'aw27f3eacb',
                     'event' : 'render',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            text143.eventHandlers = eventHandlers121;

            var text144 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'newpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_newpassword',
               'id' : 'aw618d08b5',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('New password'),
            });
            container049.addChild( text144 );


            var text145 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'confirmnewpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_confirmnewpassword',
               'id' : 'awd274537a',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Confirm password'),
            });
            container049.addChild( text145 );


            var button054 = new Button({
               'artifactId' : 'Platform.ChangePassword_Cancel_button',
               'id' : 'aw96c63135',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers122 = [
               {
                     'method' : 'cancelPasswordClickHandler',
                     'artifactId' : 'Platform.ChangePassword_Cancel_button_eventHandlers_click_cancelPasswordClickHandler',
                     'id' : 'aw7492b621',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button054.eventHandlers = eventHandlers122;
            container049.addChild( button054 );


            var button055 = new Button({
               'artifactId' : 'Platform.ChangePassword_Change_button',
               'id' : 'aw5cd0477f',
               'label' : MessageService.createStaticMessage('Change'),
               'primary' : 'true',
            });
            var eventHandlers123 = [
               {
                     'method' : 'changePasswordClickHandler',
                     'artifactId' : 'Platform.ChangePassword_Change_button_eventHandlers_click_changePasswordClickHandler',
                     'id' : 'awfdba8feb',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button055.eventHandlers = eventHandlers123;
            container049.addChild( button055 );

            var eventHandlers124 = [
               {
                     'method' : 'initializeChangePasswordView',
                     'artifactId' : 'Platform.ChangePassword_eventHandlers_show_initializeChangePasswordView',
                     'id' : 'awbbd173b',
                     'event' : 'show',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               },
               {
                     'method' : 'changePasswordBack',
                     'artifactId' : 'Platform.ChangePassword_eventHandlers_back_changePasswordBack',
                     'id' : 'awc25c9010',
                     'event' : 'back',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            view036.eventHandlers = eventHandlers124;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.RetrieveOldPassword', false);
               trackTimer.startTracking();
            }

            var view037 = new View({
               'resource' : 'PlatformChangePasswordForm',
               'showHeader' : false,
               'showOverflow' : false,
               'id' : 'Platform.RetrieveOldPassword',
               'label' : MessageService.createStaticMessage('Recover App Data'),
            });
            ui001.addChild( view037 );


            var container050 = new Container({
               'cssClass' : 'changePasswordForm',
               'artifactId' : 'Platform.RetrieveOldPassword_container_0',
               'id' : 'awecdef66d',
            });
            view037.addChild( container050 );


            var text146 = new Text({
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_Enterthepasswordt',
               'id' : 'aw14ebf03b',
               'value' : MessageService.createStaticMessage('Enter the password that you last used to log in to the app. If you do not have this password, you must reset the app before you can log in.'),
            });
            container050.addChild( text146 );


            var text147 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_errorMsg',
               'id' : 'aw9574c917',
            });
            container050.addChild( text147 );


            var text148 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'currentpassword',
               'editable' : true,
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_currentpassword',
               'id' : 'aw97b6c3b7',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Previous password'),
            });
            container050.addChild( text148 );


            var button056 = new Button({
               'artifactId' : 'Platform.RetrieveOldPassword_Recover_button',
               'id' : 'aw3a0ff2',
               'label' : MessageService.createStaticMessage('Recover'),
               'primary' : 'true',
            });
            var eventHandlers125 = [
               {
                     'method' : 'recoverOldPasswordClickHandler',
                     'artifactId' : 'Platform.RetrieveOldPassword_Recover_button_eventHandlers_click_recoverOldPasswordClickHandler',
                     'id' : 'awecb18d1c',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button056.eventHandlers = eventHandlers125;
            container050.addChild( button056 );


            var button057 = new Button({
               'artifactId' : 'Platform.RetrieveOldPassword_Reset_button',
               'id' : 'aw8bb551dc',
               'label' : MessageService.createStaticMessage('Reset'),
            });
            var eventHandlers126 = [
               {
                     'method' : 'resetStorageClickHandler',
                     'artifactId' : 'Platform.RetrieveOldPassword_Reset_button_eventHandlers_click_resetStorageClickHandler',
                     'id' : 'awfe7a73d2',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button057.eventHandlers = eventHandlers126;
            container050.addChild( button057 );

            var eventHandlers127 = [
               {
                     'method' : 'initializeRetrieveOldPasswordView',
                     'artifactId' : 'Platform.RetrieveOldPassword_eventHandlers_show_initializeRetrieveOldPasswordView',
                     'id' : 'aw26f17c5a',
                     'event' : 'show',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            view037.eventHandlers = eventHandlers127;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog006 = new Dialog({
               'closeOnBackgroundClick' : 'true',
               'id' : 'Platform.ConfirmResetDataStore',
            });
            ui001.addChild( dialog006 );


            var container051 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmResetDataStore_container_0',
               'id' : 'awacb7e535',
            });
            dialog006.addChild( container051 );


            var text149 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmResetDataStore_container_0_WarningAllappdat',
               'id' : 'aw68bdf3e8',
               'value' : MessageService.createStaticMessage('Warning! All app data on the device will be cleared. Any data that has not been sent to the server will be lost.'),
            });
            container051.addChild( text149 );


            var container052 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmResetDataStore_container_1',
               'id' : 'awdbb0d5a3',
            });
            dialog006.addChild( container052 );


            var button058 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmResetDataStore_Continue_button',
               'id' : 'awba645d10',
               'label' : MessageService.createStaticMessage('Continue'),
            });
            var eventHandlers128 = [
               {
                     'method' : 'resetDataStoreClickHandler',
                     'artifactId' : 'Platform.ConfirmResetDataStore_Continue_button_eventHandlers_click_resetDataStoreClickHandler',
                     'id' : 'aw5074e6c8',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button058.eventHandlers = eventHandlers128;
            container052.addChild( button058 );


            var button059 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmResetDataStore_Cancel_button',
               'id' : 'aw50474341',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers129 = [
               {
                     'method' : 'cancelResetDataStoreClickHandler',
                     'artifactId' : 'Platform.ConfirmResetDataStore_Cancel_button_eventHandlers_click_cancelResetDataStoreClickHandler',
                     'id' : 'awda7121b8',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button059.eventHandlers = eventHandlers129;
            container052.addChild( button059 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.TimeTrackReport', false);
               trackTimer.startTracking();
            }

            var view038 = new View({
               'cssClass' : 'loggerReport',
               'scrollDir' : 'vh',
               'id' : 'Platform.TimeTrackReport',
               'label' : MessageService.createStaticMessage('Performance Data'),
            });
            ui001.addChild( view038 );

            var requiredResources060 = {
               'timeTrack' : {
                  'artifactId' : 'Platform.TimeTrackReport_timeTrack',
                  'id' : 'aw8d707cee',
               },
            };
            view038.addRequiredResources( requiredResources060 );

            var actions010 = new Actions({
               'artifactId' : 'Platform.TimeTrackReport_actions',
               'id' : 'aw9d9a4864',
            });
            view038.addChild( actions010 );


            var action027 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_EnablePerformanceTracking_action',
               'id' : 'aw34736a63',
               'label' : MessageService.createStaticMessage('Enable Performance Tracking'),
            });
            actions010.addChild( action027 );

            var eventHandlers130 = [
               {
                     'method' : 'enableDisableTT',
                     'artifactId' : 'Platform.TimeTrackReport_EnablePerformanceTracking_action_eventHandlers_click_enableDisableTT',
                     'id' : 'aw10972127',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               },
               {
                     'method' : 'setLabel',
                     'artifactId' : 'Platform.TimeTrackReport_EnablePerformanceTracking_action_eventHandlers_render_setLabel',
                     'id' : 'awf9abf636',
                     'event' : 'render',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action027.eventHandlers = eventHandlers130;

            var action028 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_ClearPerformanceData_action',
               'id' : 'aw1edf54cf',
               'label' : MessageService.createStaticMessage('Clear Performance Data'),
            });
            actions010.addChild( action028 );

            var eventHandlers131 = [
               {
                     'method' : 'clear',
                     'artifactId' : 'Platform.TimeTrackReport_ClearPerformanceData_action_eventHandlers_click_clear',
                     'id' : 'aw85273d1b',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action028.eventHandlers = eventHandlers131;

            var action029 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_EmailReport_action',
               'id' : 'aw6ff8fae1',
               'label' : MessageService.createStaticMessage('Email Report'),
            });
            actions010.addChild( action029 );

            var eventHandlers132 = [
               {
                     'method' : 'emailCurrent',
                     'artifactId' : 'Platform.TimeTrackReport_EmailReport_action_eventHandlers_click_emailCurrent',
                     'id' : 'awc00583a0',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action029.eventHandlers = eventHandlers132;
            var eventHandlers133 = [
               {
                     'method' : 'renderTT',
                     'artifactId' : 'Platform.TimeTrackReport_eventHandlers_show_renderTT',
                     'id' : 'awca05a315',
                     'event' : 'show',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            view038.eventHandlers = eventHandlers133;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog007 = new Dialog({
               'closeOnBackgroundClick' : 'true',
               'id' : 'Platform.ListLongPressDialog',
            });
            ui001.addChild( dialog007 );



            var listItemTemplate035 = new ListItemTemplate({
               'cssClass' : 'dialogListItem textappearance-medium',
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_listItemTemplate',
               'id' : 'awefd72fd8',
            });

            var listtext073 = new ListText({
               'resourceAttribute' : 'label',
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_label',
               'id' : 'awe2e495b2',
            });
            listItemTemplate035.addChild( listtext073 );



            var list035 = new List({
               'resource' : 'PlatformLongPressResource',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate035,
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_list',
               'id' : 'aw64ff84d9',
               'queryBase' : '',
            });
            dialog007.addChild( list035 );


            var dialog008 = new Dialog({
               'id' : 'Platform.LoadingAdditionalData',
            });
            ui001.addChild( dialog008 );


            var container053 = new Container({
               'artifactId' : 'Platform.LoadingAdditionalData_container_0',
               'id' : 'aw48b509d9',
            });
            dialog008.addChild( container053 );


            var text150 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadingAdditionalData_container_0_Downloadinglookupd',
               'id' : 'aw4cec47c0',
               'value' : MessageService.createStaticMessage('Downloading lookup data.'),
            });
            container053.addChild( text150 );


            var button060 = new Button({
               'artifactId' : 'Platform.LoadingAdditionalData_Cancel_button',
               'id' : 'awb30b5f0',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers134 = [
               {
                     'method' : 'cancelADDownload',
                     'artifactId' : 'Platform.LoadingAdditionalData_Cancel_button_eventHandlers_click_cancelADDownload',
                     'id' : 'awc41dac4c',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button060.eventHandlers = eventHandlers134;
            container053.addChild( button060 );


            var dialog009 = new Dialog({
               'id' : 'Platform.AdditionalDataNoConn',
            });
            ui001.addChild( dialog009 );


            var container054 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.AdditionalDataNoConn_container_0',
               'id' : 'aw666da461',
            });
            dialog009.addChild( container054 );


            var text151 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.AdditionalDataNoConn_container_0_Lookupdatacouldno',
               'id' : 'aw96b90fd8',
               'value' : MessageService.createStaticMessage('Lookup data could not be downloaded. Go to Settings > Refresh Lookup Data when you are online.'),
            });
            container054.addChild( text151 );


            var container055 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.AdditionalDataNoConn_container_1',
               'id' : 'aw116a94f7',
            });
            dialog009.addChild( container055 );


            var button061 = new Button({
               'artifactId' : 'Platform.AdditionalDataNoConn_OK_button',
               'id' : 'aw9b370278',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers135 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.AdditionalDataNoConn_OK_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw108159b3',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button061.eventHandlers = eventHandlers135;
            container055.addChild( button061 );


            var dialog010 = new Dialog({
               'id' : 'Platform.ConfirmReloadWorkList',
            });
            ui001.addChild( dialog010 );


            var container056 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_0',
               'id' : 'aw2054aa9e',
            });
            dialog010.addChild( container056 );


            var text152 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_0_Doyouwanttoclose',
               'id' : 'aw83f81a4b',
               'value' : MessageService.createStaticMessage('Reloading the work list takes time if you are downloading large amounts of data.  Are you sure that you want to continue?'),
            });
            container056.addChild( text152 );


            var container057 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_1',
               'id' : 'aw57539a08',
            });
            dialog010.addChild( container057 );


            var button062 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmReloadWorkList_Yes_button',
               'id' : 'aw5bc89627',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers136 = [
               {
                     'method' : 'reloadConfirmed',
                     'artifactId' : 'Platform.ConfirmReloadWorkList_Yes_button_eventHandlers_click_processDialog',
                     'id' : 'awafdb701f',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button062.eventHandlers = eventHandlers136;
            container057.addChild( button062 );


            var button063 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.ConfirmReloadWorkList_No_button',
               'id' : 'aw4487e9e7',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers137 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.ConfirmReloadWorkList_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw56d1743',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button063.eventHandlers = eventHandlers137;
            container057.addChild( button063 );


            var dialog011 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.ReloadingCurrentWorklist',
            });
            ui001.addChild( dialog011 );


            var container058 = new Container({
               'cssClass' : 'mblSimpleMessageText',
               'artifactId' : 'Platform.ReloadCurrentWorklist_container_0',
               'id' : 'awce0c0b72',
            });
            dialog011.addChild( container058 );


            var text153 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.ReloadCurrentWorklist_container_0_progressMsg',
               'id' : 'awaa894933',
            });
            container058.addChild( text153 );


            var dialog012 = new Dialog({
               'id' : 'Platform.AdditionalDataFailed',
            });
            ui001.addChild( dialog012 );


            var container059 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.AdditionalDataFailed.container',
               'id' : 'aw275627fb',
            });
            dialog012.addChild( container059 );


            var text154 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.AdditionalDataFailed.text',
               'id' : 'awb25e5b66',
               'value' : MessageService.createStaticMessage('Lookup data could not be downloaded. If you are connected, go to Settings > Refresh Lookup Data.'),
            });
            container059.addChild( text154 );


            var container060 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.AdditionalDataFailed.container2',
               'id' : 'aw309dc3be',
            });
            dialog012.addChild( container060 );


            var button064 = new Button({
               'artifactId' : 'Platform.AdditionalDataFailed.button',
               'id' : 'aw39111677',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers138 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.AdditionalDataFailed.eventHandler',
                     'id' : 'awacbc5440',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button064.eventHandlers = eventHandlers138;
            container060.addChild( button064 );


            var dialog013 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.LoadingSystemData',
            });
            ui001.addChild( dialog013 );


            var container061 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadingSystemData_container_0',
               'id' : 'aw13d3cc6a',
            });
            dialog013.addChild( container061 );


            var text155 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadingSystemData_container_0_Downloadingsystemd',
               'id' : 'awfc1b5f79',
               'value' : MessageService.createStaticMessage('Downloading system data.'),
            });
            container061.addChild( text155 );


            var text156 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.LoadingSystemData_container_0_progressMsg',
               'id' : 'aw635d9968',
            });
            container061.addChild( text156 );


            var dialog014 = new Dialog({
               'id' : 'Platform.LoadAdditionalDataYesNo',
            });
            ui001.addChild( dialog014 );


            var container062 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0',
               'id' : 'aw22834650',
            });
            dialog014.addChild( container062 );


            var text157 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Thelookupdatafor',
               'id' : 'aw89be3f27',
               'value' : MessageService.createStaticMessage('The lookup data for this app must be downloaded. Download it now or later?'),
            });
            container062.addChild( text157 );

            var eventHandlers139 = [
               {
                     'method' : 'theLookupdataText',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Thelookupdatafor_eventHandlers_render_setAdditionalDownloadText',
                     'id' : 'aw9051ca24',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text157.eventHandlers = eventHandlers139;

            var text158 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Retrylookupdatafor',
               'id' : 'awb287d1cc',
               'value' : MessageService.createStaticMessage('Lookup data was partially downloaded. Click Retry to download the remaining lookup data. Click Reset to refresh all of the lookup data. Click Close if you are through downloading lookup data.'),
            });
            container062.addChild( text158 );

            var eventHandlers140 = [
               {
                     'method' : 'retrylookupdataText',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Retrylookupdatafor_eventHandlers_render_setAdditionalDownloadText',
                     'id' : 'aw5ad2ed31',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text158.eventHandlers = eventHandlers140;

            var text159 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Whenrunninginabr',
               'id' : 'awb757e4d5',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per lookup.'),
            });
            container062.addChild( text159 );

            var eventHandlers141 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'awb7d271e9',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text159.eventHandlers = eventHandlers141;

            var container063 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_1',
               'id' : 'aw558476c6',
            });
            dialog014.addChild( container063 );


            var button065 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Later_button',
               'id' : 'awa2501fe3',
               'label' : MessageService.createStaticMessage('Later'),
            });
            var eventHandlers142 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw257121b',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               },
               {
                     'method' : 'setBtLabelLaterOrCancel',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_Retry_button_eventHandlers_render_setBtLabelLaterOrCancel',
                     'id' : 'aw6ece4695',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button065.eventHandlers = eventHandlers142;
            container063.addChild( button065 );


            var button066 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Now_button',
               'id' : 'aw35a14c11',
               'label' : MessageService.createStaticMessage('Now'),
            });
            var eventHandlers143 = [
               {
                     'method' : 'confirmADDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_Now_button_eventHandlers_click_confirmADDownload',
                     'id' : 'aw7df27335',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               },
               {
                     'method' : 'setBtLabelNowOrRefresh',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_Retry_button_eventHandlers_render_setBtLabelNowOrRefresh',
                     'id' : 'aw83fe125f',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button066.eventHandlers = eventHandlers143;
            container063.addChild( button066 );


            var button067 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Retry_button',
               'id' : 'aw626b616d',
               'label' : MessageService.createStaticMessage('Retry'),
            });
            var eventHandlers144 = [
               {
                     'method' : 'retryADDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_Retry_button_eventHandlers_click_retryADDownload',
                     'id' : 'aw7bef6fb1',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               },
               {
                     'method' : 'renderRetryButton',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_Retry_button_eventHandlers_render_retryADDownload',
                     'id' : 'awfa4998f7',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button067.eventHandlers = eventHandlers144;
            container063.addChild( button067 );


            var dialog015 = new Dialog({
               'id' : 'Platform.LoadAdditionalDataDeltaDownload',
            });
            ui001.addChild( dialog015 );


            var container064 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0',
               'id' : 'aw79883531',
            });
            dialog015.addChild( container064 );


            var text160 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Thelookupdatafor',
               'id' : 'aw3d94f20f',
               'value' : MessageService.createStaticMessage('Click Changes to download only lookup data changes.'),
            });
            container064.addChild( text160 );


            var text161 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Retrylookupdatafor',
               'id' : 'awa0f7541',
               'value' : MessageService.createStaticMessage('Click All to download all the lookup data.'),
            });
            container064.addChild( text161 );


            var text162 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_cancel',
               'id' : 'aw62270e4c',
               'value' : MessageService.createStaticMessage('Click Cancel to cancel the lookup download.'),
            });
            container064.addChild( text162 );


            var text163 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_action',
               'id' : 'aw73fd47ac',
               'value' : MessageService.createStaticMessage('Which refresh do you want to perform?'),
            });
            container064.addChild( text163 );


            var text164 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Whenrunninginabr',
               'id' : 'aw37d29fd',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per lookup.'),
            });
            container064.addChild( text164 );

            var eventHandlers145 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'aw1edf10f3',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text164.eventHandlers = eventHandlers145;

            var container065 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_1',
               'id' : 'awe8f05a7',
            });
            dialog015.addChild( container065 );


            var button068 = new Button({
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Cancel_button',
               'id' : 'awb2f881ae',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers146 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'awcaa29f5a',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button068.eventHandlers = eventHandlers146;
            container065.addChild( button068 );


            var button069 = new Button({
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_RefreshAll_button',
               'id' : 'aw8ab2882',
               'label' : MessageService.createStaticMessage('All'),
            });
            var eventHandlers147 = [
               {
                     'method' : 'confirmADDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Now_button_eventHandlers_click_confirmADDownload',
                     'id' : 'awa5526bd4',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button069.eventHandlers = eventHandlers147;
            container065.addChild( button069 );


            var button070 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_RefreshChanges_button',
               'id' : 'aw9c0cf49a',
               'label' : MessageService.createStaticMessage('Changes'),
            });
            var eventHandlers148 = [
               {
                     'method' : 'confirmADDeltaDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Later_button_eventHandlers_click_confirmADDeltaDownload',
                     'id' : 'aw46619626',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button070.eventHandlers = eventHandlers148;
            container065.addChild( button070 );


            var dialog016 = new Dialog({
               'id' : 'Platform.LoadSystemDataDeltaDownload',
            });
            ui001.addChild( dialog016 );


            var container066 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0',
               'id' : 'aw47beed1c',
            });
            dialog016.addChild( container066 );


            var text165 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Thelookupdatafor',
               'id' : 'aw682ebd2f',
               'value' : MessageService.createStaticMessage('Click Changes to download only the system data changes.'),
            });
            container066.addChild( text165 );


            var text166 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Retrylookupdatafor',
               'id' : 'aw79e85858',
               'value' : MessageService.createStaticMessage('Click All to download all the system data.'),
            });
            container066.addChild( text166 );


            var text167 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_cancel',
               'id' : 'awcb50ae6',
               'value' : MessageService.createStaticMessage('Click Cancel to cancel the system download.'),
            });
            container066.addChild( text167 );


            var text168 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_action',
               'id' : 'aw1d6f4306',
               'value' : MessageService.createStaticMessage('Which refresh do you want to perform?'),
            });
            container066.addChild( text168 );


            var text169 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Whenrunninginabr',
               'id' : 'aw56c766dd',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per System.'),
            });
            container066.addChild( text169 );

            var eventHandlers149 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'aw37b2ac2a',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text169.eventHandlers = eventHandlers149;

            var container067 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_1',
               'id' : 'aw30b9dd8a',
            });
            dialog016.addChild( container067 );


            var button071 = new Button({
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Cancel_button',
               'id' : 'aw1adabf91',
               'label' : MessageService.createStaticMessage('cancel'),
            });
            var eventHandlers150 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw2569598a',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button071.eventHandlers = eventHandlers150;
            container067.addChild( button071 );


            var button072 = new Button({
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_RefreshAll_button',
               'id' : 'awf1a96515',
               'label' : MessageService.createStaticMessage('All'),
            });
            var eventHandlers151 = [
               {
                     'method' : 'downloadSystemData',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Now_button_eventHandlers_click_confirmdownloadSystemData',
                     'id' : 'aw8d600b10',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button072.eventHandlers = eventHandlers151;
            container067.addChild( button072 );


            var button073 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_RefreshChanges_button',
               'id' : 'aw328e1b2e',
               'label' : MessageService.createStaticMessage('Changes'),
            });
            var eventHandlers152 = [
               {
                     'method' : 'confirmSystemDataDeltaDownload',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Later_button_eventHandlers_click_confirmSystemDataDeltaDownload',
                     'id' : 'awbd23e928',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button073.eventHandlers = eventHandlers152;
            container067.addChild( button073 );


            var dialog017 = new Dialog({
               'id' : 'Platform.ExitApplicationPrompt',
            });
            ui001.addChild( dialog017 );


            var container068 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ExitApplicationPrompt_container_0',
               'id' : 'aw71d2ddca',
            });
            dialog017.addChild( container068 );


            var text170 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ExitApplicationPrompt_container_0_Doyouwanttoclose',
               'id' : 'aw4e0184c3',
               'value' : MessageService.createStaticMessage('Do you want to close the app?'),
            });
            container068.addChild( text170 );


            var container069 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ExitApplicationPrompt_container_1',
               'id' : 'aw6d5ed5c',
            });
            dialog017.addChild( container069 );


            var button074 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ExitApplicationPrompt_Yes_button',
               'id' : 'aw3bff816',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers153 = [
               {
                     'method' : 'processDialog',
                     'artifactId' : 'Platform.ExitApplicationPrompt_Yes_button_eventHandlers_click_processDialog',
                     'id' : 'awfa220200',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button074.eventHandlers = eventHandlers153;
            container069.addChild( button074 );


            var button075 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.ExitApplicationPrompt_No_button',
               'id' : 'aw5ba5c9da',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers154 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.ExitApplicationPrompt_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw5256cc3',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button075.eventHandlers = eventHandlers154;
            container069.addChild( button075 );


            var dialog018 = new Dialog({
               'id' : 'Platform.LogOutPrompt',
            });
            ui001.addChild( dialog018 );


            var container070 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LogOutPrompt_container_0',
               'id' : 'awcf20d41b',
            });
            dialog018.addChild( container070 );


            var text171 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LogOutPrompt_container_0_Doyouwanttologo',
               'id' : 'aw15a96005',
               'value' : MessageService.createStaticMessage('Do you want to log out of the app?'),
            });
            container070.addChild( text171 );


            var container071 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LogOutPrompt_container_1',
               'id' : 'awb827e48d',
            });
            dialog018.addChild( container071 );


            var button076 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.LogOutPrompt_No_button',
               'id' : 'awfbbbd446',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers155 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.LogOutPrompt_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw364ad2c7',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button076.eventHandlers = eventHandlers155;
            container071.addChild( button076 );


            var button077 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LogOutPrompt_Yes_button',
               'id' : 'awfaa63964',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers156 = [
               {
                     'method' : 'logoutDialog',
                     'artifactId' : 'Platform.LogOutPrompt_Yes_button_eventHandlers_click_logoutDialog',
                     'id' : 'aw82db52a6',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button077.eventHandlers = eventHandlers156;
            container071.addChild( button077 );


            var dialog019 = new Dialog({
               'cssClass' : 'dialogDurationLookup',
               'resource' : 'PlatformDateLookupResource',
               'id' : 'Platform.DurationLookup',
               'label' : MessageService.createStaticMessage('Change Duration'),
            });
            ui001.addChild( dialog019 );

            var eventHandlers157 = [
               {
                     'method' : 'initLookup',
                     'artifactId' : 'Platform.DurationLookup_eventHandlers_show_initLookup',
                     'id' : 'aw2898d5b1',
                     'event' : 'show',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            dialog019.eventHandlers = eventHandlers157;

            var container072 = new Container({
               'artifactId' : 'Platform.DurationLookup_container_0',
               'id' : 'awc7b6d6e2',
            });
            dialog019.addChild( container072 );


            var durationpicker001 = new DurationPicker({
               'artifactId' : 'Platform.DurationLookup_durationpicker_0',
               'id' : 'awbdafea4f',
            });
            container072.addChild( durationpicker001 );


            var container073 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DurationLookup_container_1',
               'id' : 'awb0b1e674',
            });
            dialog019.addChild( container073 );


            var button078 = new Button({
               'artifactId' : 'Platform.DurationLookup_Cancel_button',
               'id' : 'aw21ee1a8e',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers158 = [
               {
                     'method' : 'Cancel',
                     'artifactId' : 'Platform.DurationLookup_Cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw7fc46e19',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button078.eventHandlers = eventHandlers158;
            container073.addChild( button078 );


            var button079 = new Button({
               'artifactId' : 'Platform.DurationLookup_Clear_button',
               'id' : 'awab5a917f',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers159 = [
               {
                     'method' : 'Clear',
                     'artifactId' : 'Platform.DurationLookup_Clear_button_eventHandlers_click_Clear',
                     'id' : 'aw4d23bc8f',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button079.eventHandlers = eventHandlers159;
            container073.addChild( button079 );


            var button080 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DurationLookup_OK_button',
               'id' : 'aw7a6484f6',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers160 = [
               {
                     'method' : 'SetSelection',
                     'artifactId' : 'Platform.DurationLookup_OK_button_eventHandlers_click_SetSelection',
                     'id' : 'aweb8ce178',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button080.eventHandlers = eventHandlers160;
            container073.addChild( button080 );


            var dialog020 = new Dialog({
               'id' : 'Platform.CancelDownload',
            });
            ui001.addChild( dialog020 );


            var container074 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.CancelDownload_container_0',
               'id' : 'awf839de44',
            });
            dialog020.addChild( container074 );


            var text172 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.CancelDownload_container_0_Doyouwanttostop',
               'id' : 'awdb2316b3',
               'value' : MessageService.createStaticMessage('Do you want to stop downloading work list records?'),
            });
            container074.addChild( text172 );


            var container075 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.CancelDownload_container_1',
               'id' : 'aw8f3eeed2',
            });
            dialog020.addChild( container075 );


            var button081 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.CancelDownload_Yes_button',
               'id' : 'aw3b97968f',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers161 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.CancelDownload_Yes_button_eventHandlers_click_cancelDownload',
                     'id' : 'awadc6ff1d',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button081.eventHandlers = eventHandlers161;
            container075.addChild( button081 );


            var button082 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.CancelDownload_No_button',
               'id' : 'awab099478',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers162 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.CancelDownload_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw9ceda703',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button082.eventHandlers = eventHandlers162;
            container075.addChild( button082 );


            var dialog021 = new Dialog({
               'id' : 'Platform.ConfirmClearChanges',
            });
            ui001.addChild( dialog021 );


            var container076 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmClearChanges_container_0',
               'id' : 'aw3965500f',
            });
            dialog021.addChild( container076 );


            var text173 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmClearChanges_container_0_Changesthathaveno',
               'id' : 'aw66e22f87',
               'value' : MessageService.createStaticMessage('Changes that have not been sent to the server will be discarded.'),
            });
            container076.addChild( text173 );


            var container077 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmClearChanges_container_1',
               'id' : 'aw4e626099',
            });
            dialog021.addChild( container077 );


            var button083 = new Button({
               'artifactId' : 'Platform.ConfirmClearChanges_Cancel_button',
               'id' : 'awcee54fe9',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers163 = [
               {
                     'method' : 'cancelClearChanges',
                     'artifactId' : 'Platform.ConfirmClearChanges_Cancel_button_eventHandlers_click_cancelClearChanges',
                     'id' : 'awb208eba2',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button083.eventHandlers = eventHandlers163;
            container077.addChild( button083 );


            var button084 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.ConfirmClearChanges_OK_button',
               'id' : 'aw8a3b05f2',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers164 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'Platform.ConfirmClearChanges_OK_button_eventHandlers_click_doClearChanges',
                     'id' : 'aw32f778d4',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button084.eventHandlers = eventHandlers164;
            container077.addChild( button084 );


            var dialog022 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.DownloadCurrentWorklist',
            });
            ui001.addChild( dialog022 );


            var container078 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_0',
               'id' : 'awfd35c5df',
            });
            dialog022.addChild( container078 );


            var text174 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_0_progressMsg',
               'id' : 'aw3c55ae56',
            });
            container078.addChild( text174 );


            var container079 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_1',
               'id' : 'aw8a32f549',
            });
            dialog022.addChild( container079 );


            var button085 = new Button({
               'artifactId' : 'Platform.DownloadCurrentWorklist_Cancel_button',
               'id' : 'awcfb8296d',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers165 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.DownloadCurrentWorklist_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'aw5541afbb',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button085.eventHandlers = eventHandlers165;
            container079.addChild( button085 );


            var dialog023 = new Dialog({
               'id' : 'Platform.NoRecordFoundDialog',
            });
            ui001.addChild( dialog023 );


            var container080 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.NoRecordFoundDialog_container_0',
               'id' : 'awa73a1c57',
            });
            dialog023.addChild( container080 );


            var text175 = new Text({
               'artifactId' : 'Platform.NoRecordFoundDialog_container_0_Stopthetimeronwo',
               'id' : 'awd6cf8f25',
               'value' : MessageService.createStaticMessage('No record was found. If you are working offline, try downloading worklist when online to access your workorder'),
            });
            container080.addChild( text175 );


            var container081 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.NoRecordFoundDialog_container_1',
               'id' : 'awd03d2cc1',
            });
            dialog023.addChild( container081 );


            var button086 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.NoRecordFoundDialog_OK_button',
               'id' : 'aw3de0cad2',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers166 = [
               {
                     'method' : 'closeNoRecord',
                     'artifactId' : 'Platform.NoRecordFoundDialog_OK_button_multiple',
                     'id' : 'aw41a4b840',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button086.eventHandlers = eventHandlers166;
            container081.addChild( button086 );


            var dialog024 = new Dialog({
               'id' : 'Platform.MultiplePushNotificationDialog',
            });
            ui001.addChild( dialog024 );


            var container082 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_0',
               'id' : 'aw7b338e5e',
            });
            dialog024.addChild( container082 );


            var text176 = new Text({
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_0_Stopthetimeronwo',
               'id' : 'aw72fc5fcc',
               'value' : MessageService.createStaticMessage('Multiple notification were recieved. Go to notification view to access them.'),
            });
            container082.addChild( text176 );


            var container083 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_1',
               'id' : 'awc34bec8',
            });
            dialog024.addChild( container083 );


            var button087 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_OK_button',
               'id' : 'awc2c9277e',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers167 = [
               {
                     'method' : 'close',
                     'artifactId' : 'Platform.MultiplePushNotificationDialog_OK_button_multiple',
                     'id' : 'awe5002e8b',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button087.eventHandlers = eventHandlers167;
            container083.addChild( button087 );


            var dialog025 = new Dialog({
               'resource' : 'PlatformTempPushNotification',
               'id' : 'Platform.PushNotificationDialog',
            });
            ui001.addChild( dialog025 );


            var container084 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.PushNotificationDialog_container_0',
               'id' : 'awb0eedc9',
            });
            dialog025.addChild( container084 );


            var text177 = new Text({
               'artifactId' : 'Platform.PushNotificationDialog_container_0_Stopthetimeronwo',
               'id' : 'aw35fc28ff',
               'value' : MessageService.createDynamicMessage('{0} {1} {2}', 'platform.handlers.PushNotificationDialogHandler', 'resolveMessageProps'),
               'resolverFunction' : 'resolveMessageProps',
               'resolverClass' : 'platform.handlers.PushNotificationDialogHandler',
            });
            container084.addChild( text177 );


            var container085 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.PushNotificationDialog_container_1',
               'id' : 'aw7c09dd5f',
            });
            dialog025.addChild( container085 );


            var button088 = new Button({
               'artifactId' : 'Platform.PushNotificationDialog_Open_button',
               'id' : 'aw4151795',
               'label' : MessageService.createStaticMessage('Open'),
            });
            var eventHandlers168 = [
               {
                     'method' : 'openRecord',
                     'artifactId' : 'Platform.PushNotificationDialog_Open_button_eventHandlers_click_WOStartedDialogNoClickHandler',
                     'id' : 'aw32cc643',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               },
               {
                     'method' : 'renderOpen',
                     'artifactId' : 'Platform.PushNotificationDialog_Open_button_eventHandlers_render_RenderOpenButton',
                     'id' : 'awff1adc93',
                     'event' : 'render',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button088.eventHandlers = eventHandlers168;
            container085.addChild( button088 );


            var button089 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.PushNotificationDialog_OK_button',
               'id' : 'aw3d64070a',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers169 = [
               {
                     'method' : 'close',
                     'artifactId' : 'Platform.PushNotificationDialog_OK_button_eventHandlers_click_WOStartedDialogYesClickHandler',
                     'id' : 'aw40f88c32',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button089.eventHandlers = eventHandlers169;
            container085.addChild( button089 );


            var dialog026 = new Dialog({
               'resource' : 'PlatformDemoModeResource',
               'id' : 'Platform.DemoDownloadWarning',
            });
            ui001.addChild( dialog026 );


            var container086 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DemoDownloadWarning_container_0',
               'id' : 'awf840ab79',
            });
            dialog026.addChild( container086 );


            var text178 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.DemoDownloadWarning_container_0_progressMsg',
               'id' : 'awf3cb0903',
               'value' : MessageService.createStaticMessage('MessageText'),
            });
            container086.addChild( text178 );


            var container087 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DemoDownloadWarning_container_1',
               'id' : 'aw8f479bef',
            });
            dialog026.addChild( container087 );


            var button090 = new Button({
               'artifactId' : 'Platform.DemoDownloadWarning_Continue_button',
               'id' : 'aw2659f8c8',
               'label' : MessageService.createStaticMessage('Continue'),
            });
            var eventHandlers170 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'Platform.DemoDownloadWarning_Continue_button_eventHandlers_click_doClearChanges',
                     'id' : 'awbdf1879f',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button090.eventHandlers = eventHandlers170;
            container087.addChild( button090 );


            var button091 = new Button({
               'artifactId' : 'Platform.DemoDownloadWarning_Cancel_button',
               'id' : 'aw9def7b28',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers171 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.DemoDownloadWarning_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'awd4960a86',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button091.eventHandlers = eventHandlers171;
            container087.addChild( button091 );


            var dialog027 = new Dialog({
               'resource' : 'PlatformEsigResource',
               'id' : 'Platform.EsigLoginView',
               'label' : MessageService.createStaticMessage('Electronic Signature Authentication'),
            });
            ui001.addChild( dialog027 );

            var requiredResources061 = {
               'attemptResultDomain' : {
                  'enableFeatureByProperty' : 'esig.enabled',
                  'artifactId' : 'Platform.EsigLoginView_attemptResultDomain',
                  'id' : 'aw3c53638b',
               },
            };
            dialog027.addRequiredResources( requiredResources061 );

            var container088 = new Container({
               'artifactId' : 'Platform.EsigLoginView_container_0',
               'id' : 'aw44fd9611',
            });
            dialog027.addChild( container088 );


            var group038 = new Group({
               'artifactId' : 'Platform.EsigLoginView_group_0',
               'id' : 'aw7bf6135f',
            });
            container088.addChild( group038 );


            var groupitem130 = new GroupItem({
               'artifactId' : 'Platform.EsigLoginView_group_0_groupitem_1',
               'id' : 'aw209714b9',
            });
            group038.addChild( groupitem130 );


            var text179 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'userName',
               'cssClass' : 'loginUsername',
               'editable' : false,
               'artifactId' : 'Platform.EsigLoginView_container_0_username',
               'id' : 'aw15aabb30',
               'label' : MessageService.createStaticMessage('User Name'),
               'placeHolder' : MessageService.createStaticMessage('User name'),
            });
            groupitem130.addChild( text179 );


            var text180 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'password',
               'cssClass' : 'loginPassword',
               'editable' : true,
               'artifactId' : 'Platform.EsigLoginView_container_0_password',
               'id' : 'awd836fb92',
               'label' : MessageService.createStaticMessage('Password'),
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Password'),
               'required' : true,
            });
            groupitem130.addChild( text180 );


            var text181 = new Text({
               'resourceAttribute' : 'reason',
               'cssClass' : 'loginUsername',
               'editable' : true,
               'artifactId' : 'Platform.EsigLoginView_container_0_reason',
               'id' : 'aw6ccf562d',
               'label' : MessageService.createStaticMessage('Reason for Change'),
               'placeHolder' : MessageService.createStaticMessage('Reason for Change'),
               'required' : true,
            });
            groupitem130.addChild( text181 );


            var container089 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.EsigLoginView_footer',
               'id' : 'aw68d6d11c',
            });
            dialog027.addChild( container089 );


            var button092 = new Button({
               'artifactId' : 'Platform.EsigLoginView_Cancel_button',
               'id' : 'aw68a36a2b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers172 = [
               {
                     'method' : 'cancelEsig',
                     'artifactId' : 'Platform.EsigLoginView_Cancel_button_eventHandlers_click_cancelEsig',
                     'id' : 'awdba9800d',
                     'event' : 'click',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            button092.eventHandlers = eventHandlers172;
            container089.addChild( button092 );


            var button093 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.EsigLoginView_Save_button',
               'id' : 'awef41b275',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers173 = [
               {
                     'method' : 'submitEsig',
                     'artifactId' : 'Platform.EsigLoginView_Save_button_eventHandlers_click_submitEsig',
                     'id' : 'awa9f3497f',
                     'event' : 'click',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            button093.eventHandlers = eventHandlers173;
            container089.addChild( button093 );

            var eventHandlers174 = [
               {
                     'method' : 'initializeEsig',
                     'artifactId' : 'Platform.EsigLoginView_eventHandlers_show_initializeEsig',
                     'id' : 'aw681e6384',
                     'event' : 'show',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            dialog027.eventHandlers = eventHandlers174;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Signature', false);
               trackTimer.startTracking();
            }

            var view039 = new View({
               'id' : 'Platform.Signature',
               'label' : MessageService.createStaticMessage('Capture Real Signature'),
            });
            ui001.addChild( view039 );

            var requiredResources062 = {
               'PlatformAttachmentInfoResource' : {
                  'artifactId' : 'Platform.Signature_PlatformAttachmentInfoResource',
                  'id' : 'aw8cc44736',
               },
            };
            view039.addRequiredResources( requiredResources062 );

            var footer022 = new Footer({
               'artifactId' : 'Platform.Signature_footer',
               'id' : 'aw16b9ee39',
            });
            view039.addChild( footer022 );


            var button094 = new Button({
               'artifactId' : 'Platform.Signature_Cancel_button',
               'id' : 'aw9088fe5b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers175 = [
               {
                     'method' : 'cancelSignature',
                     'artifactId' : 'Platform.Signature_Cancel_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'awc27cd6a4',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button094.eventHandlers = eventHandlers175;
            footer022.addChild( button094 );


            var button095 = new Button({
               'artifactId' : 'Platform.Signature_Clear_button',
               'id' : 'awc6576044',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers176 = [
               {
                     'method' : 'clearSignature',
                     'artifactId' : 'Platform.Signature_Clear_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw90653ab1',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button095.eventHandlers = eventHandlers176;
            footer022.addChild( button095 );


            var button096 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.Signature_Save_button',
               'id' : 'awbc1f2293',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers177 = [
               {
                     'method' : 'saveSignature',
                     'artifactId' : 'Platform.Signature_Save_button_eventHandlers_click_saveSignature',
                     'id' : 'aw7d8e432b',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button096.eventHandlers = eventHandlers177;
            footer022.addChild( button096 );

            var eventHandlers178 = [
               {
                     'method' : 'initSignature',
                     'artifactId' : 'Platform.Signature_eventHandlers_show_initStopWorkView',
                     'id' : 'awb8cf4cb7',
                     'event' : 'initialize',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            view039.eventHandlers = eventHandlers178;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog028 = new Dialog({
               'id' : 'Platform.SignatureDialog',
            });
            ui001.addChild( dialog028 );


            var container090 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.SignatureDialog_container_buttons',
               'id' : 'aw91450791',
            });
            dialog028.addChild( container090 );


            var button097 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_Cancel_button',
               'id' : 'aw51ebe6e8',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers179 = [
               {
                     'method' : 'cancelSignatureDialog',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_Cancel_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw198ca753',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button097.eventHandlers = eventHandlers179;
            container090.addChild( button097 );


            var button098 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_clear_button',
               'id' : 'awdc63a382',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers180 = [
               {
                     'method' : 'clearSignature',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_clear_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw72eacc40',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button098.eventHandlers = eventHandlers180;
            container090.addChild( button098 );


            var button099 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_Save_button',
               'id' : 'awd4941650',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers181 = [
               {
                     'method' : 'saveSignature',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_Save_button_eventHandlers_click_saveSignature',
                     'id' : 'awa59c7577',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button099.eventHandlers = eventHandlers181;
            container090.addChild( button099 );

            var eventHandlers182 = [
               {
                     'method' : 'initSignature',
                     'artifactId' : 'Platform.SignatureDialog_eventHandlers_show_initStopWorkView',
                     'id' : 'aw71e7bce4',
                     'event' : 'show',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            dialog028.eventHandlers = eventHandlers182;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'platform.DirectionsView', false);
               trackTimer.startTracking();
            }

            var view040 = new View({
               'id' : 'platform.DirectionsView',
               'label' : MessageService.createStaticMessage('Directions'),
            });
            ui001.addChild( view040 );


            var container091 = new Container({
               'layout' : 'MapEndPoint',
               'resource' : 'PlatformMapMarkerInfo',
               'artifactId' : 'platform.DirectionsView_container_0',
               'id' : 'awee9a16f1',
            });
            view040.addChild( container091 );


            var image004 = new Image({
               'resourceAttribute' : 'startMarker',
               'layoutInsertAt' : 'marker',
               'artifactId' : 'platform.DirectionsView_image_0',
               'id' : 'awd12585c',
            });
            container091.addChild( image004 );


            var text182 = new Text({
               'resourceAttribute' : 'startAddress',
               'editable' : false,
               'layoutInsertAt' : 'address',
               'artifactId' : 'platform.DirectionsView_container_0_startAddress',
               'id' : 'aw9dea18bf',
            });
            container091.addChild( text182 );



            var listItemTemplate036 = new ListItemTemplate({
               'layout' : 'DirectionsListItem',
               'artifactId' : 'platform.DirectionsView_PlatformDirectionSteps_listItemTemplate_DirectionsListItem',
               'id' : 'aw207c9519',
            });

            var listtext074 = new ListText({
               'resourceAttribute' : 'step',
               'layoutInsertAt' : 'step',
               'artifactId' : 'platform.DirectionsView_PlatformDirectionSteps_DirectionsListItem_step',
               'id' : 'awe7572f0b',
            });
            listItemTemplate036.addChild( listtext074 );



            var list036 = new List({
               'resource' : 'PlatformDirectionSteps',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate036,
               'artifactId' : 'platform.DirectionsView_PlatformDirectionSteps_list',
               'id' : 'awd7358b3e',
               'displayPageSize' : '25',
            });
            view040.addChild( list036 );


            var container092 = new Container({
               'layout' : 'MapEndPoint',
               'resource' : 'PlatformMapMarkerInfo',
               'artifactId' : 'platform.DirectionsView_container_1',
               'id' : 'aw999d2667',
            });
            view040.addChild( container092 );


            var image005 = new Image({
               'resourceAttribute' : 'endMarker',
               'layoutInsertAt' : 'marker',
               'artifactId' : 'platform.DirectionsView_image_1',
               'id' : 'aw7a1568ca',
            });
            container092.addChild( image005 );


            var text183 = new Text({
               'resourceAttribute' : 'endAddress',
               'editable' : false,
               'layoutInsertAt' : 'address',
               'artifactId' : 'platform.DirectionsView_container_1_endAddress',
               'id' : 'aw1829d0b1',
            });
            container092.addChild( text183 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog029 = new Dialog({
               'id' : 'Platform.UseCurrentLocationDialog',
            });
            ui001.addChild( dialog029 );


            var container093 = new Container({
               'artifactId' : 'platform.UseCurrentLocation_container',
               'id' : 'aw79870680',
            });
            dialog029.addChild( container093 );


            var text184 = new Text({
               'editable' : false,
               'artifactId' : 'platform.UseCurrentLocation_textField',
               'id' : 'aw7e4a8ee9',
               'value' : MessageService.createStaticMessage('Application Would Like to Use Your Current Location'),
            });
            container093.addChild( text184 );


            var button100 = new Button({
               'artifactId' : 'platform.UseCurrentLocation_doNotAllow_button',
               'id' : 'aw954c0fa8',
               'label' : MessageService.createStaticMessage('Do Not Allow'),
            });
            var eventHandlers183 = [
               {
                     'method' : 'gpsDoNotAllowClick',
                     'artifactId' : 'platform.UseCurrentLocation_doNotAllow_handler_0',
                     'id' : 'awa15180a7',
                     'event' : 'click',
                     'class' : 'platform.geolocation.GeoLocationServiceHelper',
               }
            ];
            button100.eventHandlers = eventHandlers183;
            container093.addChild( button100 );


            var button101 = new Button({
               'artifactId' : 'platform.UseCurrentLocation_ok_button',
               'id' : 'aw82e986d',
               'label' : MessageService.createStaticMessage('Ok'),
            });
            var eventHandlers184 = [
               {
                     'method' : 'gpsAllowClick',
                     'artifactId' : 'platform.UseCurrentLocation_doNotAllow_handler_1',
                     'id' : 'awd656b031',
                     'event' : 'click',
                     'class' : 'platform.geolocation.GeoLocationServiceHelper',
               }
            ];
            button101.eventHandlers = eventHandlers184;
            container093.addChild( button101 );


            var dialog030 = new Dialog({
               'id' : 'Platform.DeleteOrSyncCurrentRecord',
            });
            ui001.addChild( dialog030 );


            var container094 = new Container({
               'artifactId' : 'platform.DeleteCurrentRecord_container',
               'id' : 'awfd22c2b3',
            });
            dialog030.addChild( container094 );


            var text185 = new Text({
               'editable' : false,
               'artifactId' : 'platform.DeleteCurrentRecord_textField',
               'id' : 'awfaef4ada',
               'value' : MessageService.createStaticMessage('This map is already downloaded, would you like to delete or sync it?'),
            });
            container094.addChild( text185 );


            var button102 = new Button({
               'artifactId' : 'platform.DeleteCurrentRecord_doNotAllow_button',
               'id' : 'awabeb76a1',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers185 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.DeleteCurrentRecord_closeDialog',
                     'id' : 'aw6a59628b',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button102.eventHandlers = eventHandlers185;
            container094.addChild( button102 );


            var button103 = new Button({
               'artifactId' : 'platform.DeleteCurrentRecord_delete_button',
               'id' : 'aw305195a6',
               'label' : MessageService.createStaticMessage('Delete'),
            });
            var eventHandlers186 = [
               {
                     'method' : 'deleteCurrentMap',
                     'artifactId' : 'DeleteOrSyncCurrentRecord_delete_handler',
                     'id' : 'aw795548e7',
                     'event' : 'click',
                     'class' : 'platform.handlers.spatial.MapSitesOfflineAreas',
               }
            ];
            button103.eventHandlers = eventHandlers186;
            container094.addChild( button103 );


            var button104 = new Button({
               'artifactId' : 'platform.DeleteCurrentRecord_sync_button',
               'id' : 'aw288f434c',
               'label' : MessageService.createStaticMessage('Sync'),
            });
            var eventHandlers187 = [
               {
                     'method' : 'syncCurrentMap',
                     'artifactId' : 'DeleteOrSyncCurrentRecord_sync_handler',
                     'id' : 'aw4ebda698',
                     'event' : 'click',
                     'class' : 'platform.handlers.spatial.MapSitesOfflineAreas',
               }
            ];
            button104.eventHandlers = eventHandlers187;
            container094.addChild( button104 );


            var dialog031 = new Dialog({
               'id' : 'Platform.DownloadCurrentRecord',
            });
            ui001.addChild( dialog031 );


            var container095 = new Container({
               'artifactId' : 'platform.DownloadCurrentRecord_container',
               'id' : 'awed6f34b5',
            });
            dialog031.addChild( container095 );


            var text186 = new Text({
               'editable' : false,
               'artifactId' : 'platform.DownloadCurrentRecord_textField',
               'id' : 'aweaa2bcdc',
               'value' : MessageService.createStaticMessage('Are you sure you want to download this record?'),
            });
            container095.addChild( text186 );


            var button105 = new Button({
               'artifactId' : 'platform.DownloadCurrentRecord_doNotAllow_button',
               'id' : 'awb90cfef5',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers188 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.DownloadCurrentRecord_closeDialog',
                     'id' : 'aw7c0e5108',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button105.eventHandlers = eventHandlers188;
            container095.addChild( button105 );


            var button106 = new Button({
               'artifactId' : 'platform.DownloadCurrentRecord_ok_button',
               'id' : 'aw9cc6aa58',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers189 = [
               {
                     'method' : 'downloadCurrentMap',
                     'artifactId' : 'DownloadCurrentRecord_doNotAllow_handler_1',
                     'id' : 'aw7b828928',
                     'event' : 'click',
                     'class' : 'platform.handlers.spatial.MapSitesOfflineAreas',
               }
            ];
            button106.eventHandlers = eventHandlers189;
            container095.addChild( button106 );


            var dialog032 = new Dialog({
               'id' : 'Platform.SyncRequired',
            });
            ui001.addChild( dialog032 );


            var container096 = new Container({
               'artifactId' : 'platform.SyncRequiredcontainer',
               'id' : 'aw3ed6228',
            });
            dialog032.addChild( container096 );


            var text187 = new Text({
               'editable' : false,
               'artifactId' : 'platform.SyncRequiredtextField',
               'id' : 'aw420ea41',
               'value' : MessageService.createStaticMessage('Your offline data expired, a sync is required.'),
            });
            container096.addChild( text187 );


            var button107 = new Button({
               'artifactId' : 'platform.SyncRequiredok_button',
               'id' : 'aw7244fcc5',
               'label' : MessageService.createStaticMessage('Go To Sync'),
            });
            var eventHandlers190 = [
               {
                     'method' : 'initDownLoadOfflineMap',
                     'artifactId' : 'SyncRequiredGoToSync_handler_1',
                     'id' : 'aw1020befc',
                     'event' : 'click',
                     'class' : 'platform.handlers.spatial.MapSitesOfflineAreas',
               }
            ];
            button107.eventHandlers = eventHandlers190;
            container096.addChild( button107 );


            var button108 = new Button({
               'artifactId' : 'platform.SyncRequireddoNotAllow_button',
               'id' : 'aw89104f35',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers191 = [
               {
                     'method' : 'ignoreExpiredDataAndKeepLoading',
                     'artifactId' : 'SyncRequiredGoToMap_handler_1',
                     'id' : 'awe3e9282f',
                     'event' : 'click',
                     'class' : 'platform.handlers.spatial.MapSitesOfflineAreas',
               }
            ];
            button108.eventHandlers = eventHandlers191;
            container096.addChild( button108 );


            var dialog033 = new Dialog({
               'id' : 'Platform.SyncRequiredLazyCheck',
            });
            ui001.addChild( dialog033 );


            var container097 = new Container({
               'artifactId' : 'platform.SyncRequiredcontainerLazyCheck',
               'id' : 'awd2b2d1fa',
            });
            dialog033.addChild( container097 );


            var text188 = new Text({
               'editable' : false,
               'artifactId' : 'platform.SyncRequiredtextFieldLazyCheck',
               'id' : 'aw1263b699',
               'value' : MessageService.createStaticMessage('Your offline data expired, a sync is required.'),
            });
            container097.addChild( text188 );


            var button109 = new Button({
               'artifactId' : 'platform.SyncRequiredok_buttonLazyCheck',
               'id' : 'aw318c595c',
               'label' : MessageService.createStaticMessage('Go To Sync'),
            });
            var eventHandlers192 = [
               {
                     'method' : 'initDownLoadOfflineMapLazyCheck',
                     'artifactId' : 'SyncRequiredGoToSync_handler_1LazyCheck',
                     'id' : 'awe2632ce2',
                     'event' : 'click',
                     'class' : 'platform.handlers.spatial.MapSitesOfflineAreas',
               }
            ];
            button109.eventHandlers = eventHandlers192;
            container097.addChild( button109 );


            var button110 = new Button({
               'artifactId' : 'platform.SyncRequireddoNotAllow_buttonLazyCheck',
               'id' : 'aw57cc6ffc',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers193 = [
               {
                     'method' : 'ignoreExpiredDataAndKeepLoadingLazyCheck',
                     'artifactId' : 'SyncRequiredGoToMap_handler_1LazyCheck',
                     'id' : 'awec855d87',
                     'event' : 'click',
                     'class' : 'platform.handlers.spatial.MapSitesOfflineAreas',
               }
            ];
            button110.eventHandlers = eventHandlers193;
            container097.addChild( button110 );

            app001.addHandler( {name : 'application.handlers.AssetListHandler', 'class': new AssetListHandler()} );
            app001.addHandler( {name : 'application.handlers.AssetListScanHandler', 'class': new AssetListScanHandler()} );
            app001.addHandler( {name : 'application.handlers.ClassifyAssetHandler', 'class': new ClassifyAssetHandler()} );
            app001.addHandler( {name : 'application.handlers.StatusChangeHandler', 'class': new StatusChangeHandler()} );
            app001.addHandler( {name : 'application.handlers.WOAttachmentHandler', 'class': new WOAttachmentHandler()} );
            app001.addHandler( {name : 'custom.handlers.MSAssetDetailHandler', 'class': new MSAssetDetailHandler()} );
            app001.addHandler( {name : 'custom.handlers.MSLoginHandler', 'class': new MSLoginHandler()} );
            app001.addHandler( {name : 'platform.geolocation.GeoLocationServiceHelper', 'class': new GeoLocationServiceHelper()} );
            app001.addHandler( {name : 'platform.handlers.AdditionalDataDialogHandler', 'class': new AdditionalDataDialogHandler()} );
            app001.addHandler( {name : 'platform.handlers.AttachmentHandler', 'class': new AttachmentHandler()} );
            app001.addHandler( {name : 'platform.handlers.ChangePasswordHandler', 'class': new ChangePasswordHandler()} );
            app001.addHandler( {name : 'platform.handlers.CreateQueryBaseHandler', 'class': new CreateQueryBaseHandler()} );
            app001.addHandler( {name : 'platform.handlers.DialogHandler', 'class': new DialogHandler()} );
            app001.addHandler( {name : 'platform.handlers.EsigHandler', 'class': new EsigHandler()} );
            app001.addHandler( {name : 'platform.handlers.LoginHandler', 'class': new LoginHandler()} );
            app001.addHandler( {name : 'platform.handlers.LookupHandler', 'class': new LookupHandler()} );
            app001.addHandler( {name : 'platform.handlers.PseudoOfflineModeHandler', 'class': new PseudoOfflineModeHandler()} );
            app001.addHandler( {name : 'platform.handlers.PushNotificationDialogHandler', 'class': new PushNotificationDialogHandler()} );
            app001.addHandler( {name : 'platform.handlers.SSOHandler', 'class': new SSOHandler()} );
            app001.addHandler( {name : 'platform.handlers.SettingsHandler', 'class': new SettingsHandler()} );
            app001.addHandler( {name : 'platform.handlers.WorkOfflineHandler', 'class': new WorkOfflineHandler()} );
            app001.addHandler( {name : 'platform.handlers._ApplicationHandlerBase', 'class': new _ApplicationHandlerBase()} );
            app001.addHandler( {name : 'platform.handlers.spatial.MapSitesOfflineAreas', 'class': new MapSitesOfflineAreas()} );
            app001.addHandler( {name : 'platform.logging.handler.LoggerReportHandler', 'class': new LoggerReportHandler()} );
            app001.addHandler( {name : 'platform.performance.handler.TimeTrackHandler', 'class': new TimeTrackHandler()} );
            app001.addHandler( {name : 'platform.signature.handler.SignatureHandler', 'class': new SignatureHandler()} );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating Resources in ApplicationUIBuilder', false);
               trackTimer.startTracking();
            }
            var that001 = this;
            all([
               app001.createResource(null, null, 'PlatformDemoModeResource'),
               app001.createResource(null, null, 'LastADDownload'),
               app001.createResource(null, null, 'DeviceSizeResource'),
               app001.createResource(null, null, 'SSODialogResource'),
               app001.createResource(null, null, 'PlatformLongPressResource'),
               app001.createResource(null, null, 'PlatformDateLookupResource')
            ]).then(
               function(){
                  that001.addApplication( app001 );
               }
            );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }
            console.log('Finished Creating App');
         }
      });
});
