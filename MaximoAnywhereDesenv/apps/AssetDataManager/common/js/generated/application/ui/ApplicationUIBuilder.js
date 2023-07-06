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
// Build: 2023-03-21 03:32:29
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
         "platform/handlers/_ApplicationHandlerBase", 
         "platform/ui/control/Queries", 
         "platform/ui/control/Query", 
         "application/handlers/AssetListHandler", 
         "platform/ui/control/Actions", 
         "platform/ui/control/Action", 
         "platform/handlers/WorkOfflineHandler", 
         "application/handlers/AssetListScanHandler", 
         "platform/ui/control/ProgressIndicator", 
         "platform/ui/control/List", 
         "platform/ui/control/FindByScan", 
         "platform/ui/control/SortOptions", 
         "platform/ui/control/SortOption", 
         "platform/ui/control/SortAttribute", 
         "platform/ui/control/ListItemTemplate", 
         "platform/ui/control/ListText", 
         "application/handlers/MeterReadingsHandler", 
         "application/handlers/AssetMoveHandler", 
         "application/handlers/AssetDetailHandler", 
         "platform/handlers/AttachmentHandler", 
         "application/handlers/WOAttachmentHandler", 
         "platform/ui/control/Group", 
         "platform/ui/control/GroupItem", 
         "platform/ui/control/ErrorIndicator", 
         "application/handlers/MetersListHandler", 
         "platform/ui/control/CheckBox", 
         "platform/ui/control/LastUpdateText", 
         "platform/ui/control/Footer", 
         "application/handlers/ReportDowntimeHandler", 
         "application/handlers/StatusChangeHandler", 
         "application/handlers/ClassifyAssetHandler", 
         "application/handlers/ClassificationFormHandler", 
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
         "platform/signature/handler/SignatureHandler"
      ],

function(declare, all, BuilderBase, window, array, ioQuery, AdditionalDataManager, AdditionalDataUIManager, MessageService, Application, UserInterface, Dialog, Container, Text, Button, SSOHandler, LoginHandler, View, Image, _ApplicationHandlerBase, Queries, Query, AssetListHandler, Actions, Action, WorkOfflineHandler, AssetListScanHandler, ProgressIndicator, List, FindByScan, SortOptions, SortOption, SortAttribute, ListItemTemplate, ListText, MeterReadingsHandler, AssetMoveHandler, AssetDetailHandler, AttachmentHandler, WOAttachmentHandler, Group, GroupItem, ErrorIndicator, MetersListHandler, CheckBox, LastUpdateText, Footer, ReportDowntimeHandler, StatusChangeHandler, ClassifyAssetHandler, ClassificationFormHandler, Lookup, ReturnAttributes, ReturnAttribute, SearchAttributes, SearchAttribute, PseudoOfflineModeHandler, CreateQueryBaseHandler, ErrorActions, LookupHandler, PushNotificationDialogHandler, DateTimePicker, SettingsHandler, ChangePasswordHandler, AdditionalDataDialogHandler, RadioButton, LoggerReportHandler, TimeTrackHandler, DialogHandler, DurationPicker, EsigHandler, SignatureHandler) {
      return declare("generated.application.ui.ApplicationUIBuilder", BuilderBase, {

         build : function() {
            console.log('Creating App');

            MessageService.init('artifact');


            var app001 = new Application({
               'logLevel' : 0,
               'xsi:noNamespaceSchemaLocation' : '..\/..\/..\/build\/app.xsd',
               'xmlns:xsi' : 'http:\/\/www.w3.org\/2001\/XMLSchema-instance',
               'id' : 'AssetDataManager',
               'blindQuerySupport' : 'false',
               'version' : '201507140725',
               'requiredRole' : 'ANYWHERE_ASSET_MANAGER',
            });
            app001.setFeatures({
            'update.artifact.timestamps' : false,
            'esig.enabled' : true,
            'gps.enabled' : false,
            'enableDataEncryption' : true,
            'barcode.enabled' : true,
            'attachments.enabled' : true,
            'globalization.use.mock' : false,
            'run.bvt.scripts' : false,
            'build.update.check.enabled' : false,
            'pushnotification.enabled' : false,
            'map.enabled' : false,

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
               'image' : '..\/..\/..\/..\/..\/..\/images\/mdpi\/app_icon_main.svg',
               'cssClass' : 'productLogo',
               'artifactId' : 'platform.LoginView_image_0',
               'id' : 'aw9576ccdf',
            });
            container007.addChild( image001 );


            var text006 = new Text({
               'resourceAttribute' : 'appName',
               'cssClass' : 'productName',
               'editable' : false,
               'artifactId' : 'platform.LoginView_container_0_appName',
               'id' : 'aw22401029',
            });
            container007.addChild( text006 );


            var text007 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'platform.LoginView_container_0_errorMsg',
               'id' : 'aw87817020',
            });
            container007.addChild( text007 );


            var text008 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'username',
               'cssClass' : 'loginUsername',
               'editable' : true,
               'artifactId' : 'platform.LoginView_container_0_username',
               'id' : 'awca3922ff',
               'placeHolder' : MessageService.createStaticMessage('Username'),
            });
            container007.addChild( text008 );


            var text009 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'password',
               'cssClass' : 'loginPassword',
               'editable' : true,
               'artifactId' : 'platform.LoginView_container_0_password',
               'id' : 'aw7a5625d',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Password'),
            });
            container007.addChild( text009 );


            var button004 = new Button({
               'cssClass' : 'loginBtn',
               'artifactId' : 'platform.LoginView_LogIn_button',
               'id' : 'awe0510eac',
               'label' : MessageService.createStaticMessage('Sign In'),
               'primary' : 'true',
            });
            var eventHandlers004 = [
               {
                     'method' : 'loginClickHandler',
                     'artifactId' : 'platform.LoginView_LogIn_button_eventHandlers_click_loginClickHandler',
                     'id' : 'awa8e7b081',
                     'event' : 'click',
                     'class' : 'platform.handlers.LoginHandler',
               }
            ];
            button004.eventHandlers = eventHandlers004;
            container007.addChild( button004 );


            var text010 = new Text({
               'labelCss' : 'loginLink',
               'artifactId' : 'PrivacyPolicy_link',
               'id' : 'aw8e500c53',
               'label' : MessageService.createStaticMessage('Privacy Policy'),
            });
            container007.addChild( text010 );

            var eventHandlers005 = [
               {
                     'method' : 'privacyPolicyLinkClicked',
                     'artifactId' : 'PrivacyPolicy_link_eventHandlers_click',
                     'id' : 'aw3c2baacc',
                     'event' : 'click',
                     'class' : 'platform.handlers.LoginHandler',
               }
            ];
            text010.eventHandlers = eventHandlers005;

            var image002 = new Image({
               'image' : 'IBMLogo.svg',
               'cssClass' : 'IBMLogo',
               'artifactId' : 'platform.LoginView_image_1',
               'id' : 'awe271fc49',
            });
            container007.addChild( image002 );

            var eventHandlers006 = [
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
            view001.eventHandlers = eventHandlers006;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.AssetListView', false);
               trackTimer.startTracking();
            }

            var view002 = new View({
               'saveonshow' : true,
               'showBackButton' : 'false',
               'id' : 'AssetDataManager.AssetListView',
               'label' : MessageService.createStaticMessage('Assets'),
            });
            ui001.addChild( view002 );


            var queries001 = new Queries({
               'resource' : 'asset',
               'artifactId' : 'AssetDataManager.AssetListView_Asset_queries',
               'id' : 'aw33dec3a3',
            });
            view002.addChild( queries001 );


            var query001 = new Query({
               'artifactId' : 'AssetDataManager.AssetListView_getMyAssets',
               'id' : 'aw102a451f',
               'label' : MessageService.createStaticMessage('My Assets'),
               'queryBase' : 'getMyAssets',
            });
            queries001.addChild( query001 );


            var query002 = new Query({
               'system' : 'true',
               'artifactId' : 'AssetDataManager.AssetListView___errored__',
               'id' : 'aw28dd00a6',
               'label' : MessageService.createStaticMessage('Records with Errors'),
               'queryBase' : '__errored__',
            });
            queries001.addChild( query002 );

            var eventHandlers007 = [
               {
                     'method' : 'hideShowErrorMenu',
                     'artifactId' : 'AssetDataManager.AssetListView___errored___eventHandlers_render_hideShowErrorMenu',
                     'id' : 'aw192b37ff',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetListHandler',
               }
            ];
            query002.eventHandlers = eventHandlers007;

            var query003 = new Query({
               'system' : 'true',
               'artifactId' : 'AssetDataManager.AssetListView___created__',
               'id' : 'aw4cf44fbc',
               'label' : MessageService.createStaticMessage('Assets Created Locally'),
               'queryBase' : '__created__',
            });
            queries001.addChild( query003 );


            var query004 = new Query({
               'system' : 'true',
               'artifactId' : 'AssetDataManager.AssetListView___search_result__',
               'id' : 'aw6283086d',
               'label' : MessageService.createStaticMessage('Search Results'),
               'queryBase' : '__search_result__',
            });
            queries001.addChild( query004 );

            var eventHandlers008 = [
               {
                     'method' : 'hideShowSearchedMenu',
                     'artifactId' : 'Asset.AssetListView___search_result___eventHandlers_render_hideShowSearchedMenu',
                     'id' : 'aw6eab3b57',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetListHandler',
               }
            ];
            query004.eventHandlers = eventHandlers008;
            var requiredResources002 = {
               'asset' : {
                  'reload' : false,
                  'artifactId' : 'Asset.AssetItemsView_Asset',
                  'id' : 'awdee99e87',
               },
            };
            view002.addRequiredResources( requiredResources002 );

            var actions001 = new Actions({
               'artifactId' : 'AssetDataManager.AssetListView_actions',
               'id' : 'awa9d65012',
            });
            view002.addChild( actions001 );


            var action001 = new Action({
               'overflow' : true,
               'artifactId' : 'AssetDataManager.AssetListView_DownloadWorkList_action',
               'id' : 'aw304b30bd',
               'label' : MessageService.createStaticMessage('Download Asset List'),
            });
            actions001.addChild( action001 );

            var eventHandlers009 = [
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
            action001.eventHandlers = eventHandlers009;

            var action002 = new Action({
               'overflow' : true,
               'artifactId' : 'AssetDataManager.AssetListView_SynchronizeData_action',
               'id' : 'awea9d07f7',
               'label' : MessageService.createStaticMessage('Synchronize Data'),
            });
            actions001.addChild( action002 );

            var eventHandlers010 = [
               {
                     'method' : 'sync',
                     'artifactId' : 'AssetDataManager.AssetListView_SynchronizeData_action_eventHandlers_click_sync',
                     'id' : 'awdfc40813',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               },
               {
                     'method' : 'enableDisableSyncMenu',
                     'artifactId' : 'AssetDataManager.AssetListView_SynchronizeData_action_eventHandlers_render_enableDisableMenu',
                     'id' : 'aw4d4a628e',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action002.eventHandlers = eventHandlers010;

            var action003 = new Action({
               'image' : 'header_barcode_OFF.svg',
               'enableFeatureByProperty' : 'barcode.enabled',
               'artifactId' : 'AssetDataManager.AssetListView_ScanBarCode_action',
               'id' : 'aw94429651',
               'label' : MessageService.createStaticMessage('Scan Bar Code'),
            });
            actions001.addChild( action003 );

            var eventHandlers011 = [
               {
                     'method' : 'findByScan',
                     'artifactId' : 'AssetDataManager.AssetListView_ScanBarCode_action_eventHandlers_click_findByScan',
                     'id' : 'aw6bb3b063',
                     'event' : 'click',
                     'class' : 'application.handlers.AssetListScanHandler',
               }
            ];
            action003.eventHandlers = eventHandlers011;

            var action004 = new Action({
               'image' : '\/images\/header_add.png',
               'transitionTo' : 'AssetDataManager.NewAssetView',
               'artifactId' : 'AssetDataManager.AssetListView_CreateAsset_action',
               'id' : 'awe8279981',
               'label' : MessageService.createStaticMessage('Create Asset'),
            });
            actions001.addChild( action004 );


            var action005 = new Action({
               'overflow' : true,
               'transitionTo' : 'AssetDataManager.SearchAssetView',
               'artifactId' : 'AssetDataManager.AssetListView_Search_action',
               'id' : 'aw44e6260a',
               'label' : MessageService.createStaticMessage('Search'),
            });
            actions001.addChild( action005 );


            var progressIndicator001 = new ProgressIndicator({
               'artifactId' : 'Asset.AssetListView_0',
               'id' : 'awe831afe3',
            });
            view002.addChild( progressIndicator001 );



            var findByScan001 = new FindByScan({
               'resourceAttribute' : 'assetnum',
               'enableFeatureByProperty' : 'barcode.enabled',
               'headerLabel' : 'Assets searched based on asset\/location {0}',
               'artifactId' : 'AssetDataManager.AssetView_asset.barcodesearch',
               'id' : 'aw73207a96',
            });

            var eventHandlers012 = [
               {
                     'method' : 'keepWorkListResource',
                     'artifactId' : 'AssetDataManager.AssetListView_asset_list_eventHandlers_render_keepWorkListResource',
                     'id' : 'awc9cf84f',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];

            var sortOptions001 = new SortOptions({
               'artifactId' : 'AssetDataManager.AssetListView_asset_list_sortOptions',
               'id' : 'aw1a8503b6',
            });

            var sortOption001 = new SortOption({
               'artifactId' : 'AssetDataManager.AssetListView_sortOption_ScheduledStart',
               'id' : 'aw29c531da',
               'label' : MessageService.createStaticMessage('Asset'),
            });
            sortOptions001.addChild( sortOption001 );


            var sortAttribute001 = new SortAttribute({
               'name' : 'assetnum',
               'artifactId' : 'AssetDataManager.AssetListView_ScheduledStart_sortAttribute_starttime',
               'id' : 'awf661763e',
               'direction' : 'asc',
            });
            sortOption001.addChild( sortAttribute001 );


            var sortOption002 = new SortOption({
               'artifactId' : 'AssetDataManager.WorkItemsView_sortOption_Status',
               'id' : 'awc2e29b23',
               'label' : MessageService.createStaticMessage('Location'),
            });
            sortOptions001.addChild( sortOption002 );


            var sortAttribute002 = new SortAttribute({
               'name' : 'location',
               'artifactId' : 'AssetDataManager.AssetListView_Status_sortAttribute_statusdesc',
               'id' : 'aw3e779692',
               'direction' : 'asc',
            });
            sortOption002.addChild( sortAttribute002 );


            var sortOption003 = new SortOption({
               'artifactId' : 'AssetDataManager.WorkItemsView_sortOption_asset',
               'id' : 'aw4744432e',
               'label' : MessageService.createStaticMessage('Status'),
            });
            sortOptions001.addChild( sortOption003 );


            var sortAttribute003 = new SortAttribute({
               'name' : 'status',
               'artifactId' : 'AssetDataManager.AssetListView_asset_sortAttribute_wonum',
               'id' : 'awccc9d3d5',
               'direction' : 'asc',
            });
            sortOption003.addChild( sortAttribute003 );



            var listItemTemplate001 = new ListItemTemplate({
               'layout' : 'WorkListItem',
               'artifactId' : 'AssetDataManager.AssetListView_asset_listItemTemplate_WorkListItem',
               'id' : 'awb94b584d',
            });

            var listtext001 = new ListText({
               'resourceAttribute' : 'assetnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.AssetListView_asset_WorkListItem_assetnum',
               'id' : 'aw43c5d6e3',
            });
            listItemTemplate001.addChild( listtext001 );


            var listtext002 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'AssetDataManager.AssetListView_asset_WorkListItem_description',
               'id' : 'aw614cee1b',
            });
            listItemTemplate001.addChild( listtext002 );


            var listtext003 = new ListText({
               'resourceAttribute' : 'statusdesc',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'AssetDataManager.AssetListView_asset_WorkListItem_statusdesc',
               'id' : 'aw8604e0c7',
            });
            listItemTemplate001.addChild( listtext003 );


            var actions002 = new Actions({
               'artifactId' : 'AssetDataManager.AssetListView_asset_listItemTemplate_WorkListItem_actions',
               'id' : 'awabeaf0b4',
            });
            listItemTemplate001.addChild( actions002 );


            var action006 = new Action({
               'transitionTo' : 'AssetDataManager.EditStatusView',
               'artifactId' : 'AssetDataManager.AssetListView_ChangeStatus_list_action',
               'id' : 'awee0fa351',
               'label' : MessageService.createStaticMessage('Change Status'),
            });
            actions002.addChild( action006 );


            var action007 = new Action({
               'transitionTo' : 'AssetDataManager.AssetMeterViewList',
               'artifactId' : 'AssetDataManager.AssetListView_AssetMeter_action',
               'id' : 'aw8720ded2',
               'label' : MessageService.createStaticMessage('Asset Meters'),
            });
            actions002.addChild( action007 );

            var eventHandlers013 = [
               {
                     'method' : 'hideAssetMeterMenu',
                     'artifactId' : 'AssetDataManager.AssetListView_hideAssetMeterMenuOption',
                     'id' : 'awf3e44d2b',
                     'event' : 'render',
                     'class' : 'application.handlers.MeterReadingsHandler',
               }
            ];
            action007.eventHandlers = eventHandlers013;

            var action008 = new Action({
               'transitionTo' : 'AssetDataManager.ReportDowntimeView',
               'artifactId' : 'AssetDataManager.AssetListView_ReportDowntime_list_action',
               'id' : 'awc490a6fd',
               'label' : MessageService.createStaticMessage('Report Downtime'),
            });
            actions002.addChild( action008 );


            var action009 = new Action({
               'image' : '\/images\/action_move_asset.svg',
               'transitionTo' : 'AssetDataManager.AssetMoveView',
               'artifactId' : 'AssetDataManager.AssetListView_action',
               'id' : 'aw659431b9',
               'label' : MessageService.createStaticMessage('Move'),
            });
            actions002.addChild( action009 );

            var eventHandlers014 = [
               {
                     'method' : 'hasMove',
                     'artifactId' : 'AssetDataManager.AssetListView2_asset_move_action_eventHandlers_render',
                     'id' : 'awcedb4186',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetMoveHandler',
               }
            ];
            action009.eventHandlers = eventHandlers014;


            var list001 = new List({
               'resource' : 'asset',
               'transitionTo' : 'AssetDataManager.AssetDetailView',
               'listItemTemplate' : listItemTemplate001,
               'resolverFunction' : 'resolveAssetIdLabel',
               'displayPageSize' : '20',
               'recordLabel' : MessageService.createDynamicMessage('Asset {0}', 'application.handlers.AssetListHandler', 'resolveAssetIdLabel'),
               'sortOptions' : sortOptions001,
               'findByScan' : findByScan001,
               'artifactId' : 'AssetDataManager.AssetListView_Asset_list',
               'eventHandlers' : eventHandlers012,
               'id' : 'awf246edc4',
               'queryBase' : 'getMyAssets',
               'resolverClass' : 'application.handlers.AssetListHandler',
            });
            view002.addChild( list001 );

            var eventHandlers015 = [
               {
                     'method' : 'registerAsScanListener',
                     'artifactId' : 'AssetDataManager.AssetListView_eventHandlers_render_registerAsScanListener',
                     'id' : 'awd29aeb50',
                     'event' : 'show',
                     'class' : 'application.handlers.AssetListScanHandler',
               },
               {
                     'method' : 'showBusyList',
                     'artifactId' : 'AssetDataManager.AssetListView_eventHandlers_render_showBusyList',
                     'id' : 'aw1a792f96',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            view002.eventHandlers = eventHandlers015;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.AssetDetailView', false);
               trackTimer.startTracking();
            }

            var view003 = new View({
               'resource' : 'asset',
               'allowDrillDown' : 'true',
               'id' : 'AssetDataManager.AssetDetailView',
               'label' : MessageService.createStaticMessage('Asset Details'),
            });
            ui001.addChild( view003 );

            var requiredResources003 = {
               'asset' : {
                  'artifactId' : 'AssetDataManager.AssetDetailView_asset',
                  'id' : 'aw3f4ae4bd',
                  'related' : {
                     'assetmeterlist' : {
                        'reload' : true,
                        'artifactId' : 'AssetDataManager.AssetDetailView_asset_assetmeterlist',
                        'id' : 'aw8c3fb2d9',
                     },
                     'attachments' : {
                        'reload' : true,
                        'artifactId' : 'AssetDataManager.AssetDetailView_asset_attachments',
                        'id' : 'aw1cc4586d',
                     },
                     'assetSpec' : {
                        'reload' : true,
                        'artifactId' : 'AssetDataManager.AssetDetailView_asset_assetSpecs',
                        'id' : 'aw7c23e0df',
                     },
                  },
               },
               'assetattrtypes' : {
                  'artifactId' : 'AssetDataManager.AssetDetailView_assetattrtypes',
                  'id' : 'awef32abe2',
               },
               'failureListResource' : {
                  'artifactId' : 'AssetDataManager.AssetDetailView_domainfailurecode',
                  'id' : 'aw47cf53a2',
               },
               'classstructure' : {
                  'artifactId' : 'AssetDataManager.AssetDetailView_classstructure',
                  'id' : 'awf2427524',
               },
            };
            view003.addRequiredResources( requiredResources003 );

            var actions003 = new Actions({
               'artifactId' : 'AssetDataManager.AssetDetailView_actions',
               'id' : 'aw6ef4902c',
            });
            view003.addChild( actions003 );


            var action010 = new Action({
               'image' : '\/images\/action_menu_downtime.png',
               'transitionTo' : 'AssetDataManager.ReportDowntimeView',
               'artifactId' : 'AssetDataManager.AssetDetailView_ReportDowntime_action',
               'id' : 'aw4aa67e44',
               'label' : MessageService.createStaticMessage('Report Downtime'),
            });
            actions003.addChild( action010 );


            var action011 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'enableFeatureByProperty' : 'attachments.enabled',
               'artifactId' : 'WorkExecution.WorkDetailView_TakePhoto_action',
               'id' : 'awa222a035',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions003.addChild( action011 );

            var eventHandlers016 = [
               {
                     'method' : 'launchCameraForPhoto',
                     'artifactId' : 'WorkExecution.WorkDetailView_TakePhoto_action_eventHandlers_click_launchCameraForPhoto',
                     'id' : 'aw520cf319',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               },
               {
                     'method' : 'initCategory',
                     'artifactId' : 'WorkExecution.WorkDetailView_TakePhoto_action_eventHandlers_render_initCategory',
                     'id' : 'aw5f5b88ce',
                     'event' : 'render',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            action011.eventHandlers = eventHandlers016;

            var action012 = new Action({
               'image' : '\/images\/action_move_asset.svg',
               'transitionTo' : 'AssetDataManager.AssetMoveView',
               'artifactId' : 'AssetDataManager.AssetDetailsView_action',
               'id' : 'aw5cdaea7a',
               'label' : MessageService.createStaticMessage('Move'),
            });
            actions003.addChild( action012 );

            var eventHandlers017 = [
               {
                     'method' : 'hasMove',
                     'artifactId' : 'AssetDataManager.AssetListView_asset_move_action_eventHandlers_render',
                     'id' : 'aw4967e9f6',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetMoveHandler',
               }
            ];
            action012.eventHandlers = eventHandlers017;

            var container008 = new Container({
               'resource' : 'asset',
               'artifactId' : 'AssetDataManager.AssetDetailView_AssetDataManager_container_0',
               'id' : 'awb6272425',
            });
            view003.addChild( container008 );


            var group001 = new Group({
               'artifactId' : 'AssetDataManager.AssetDetailView_group_0',
               'id' : 'awf6a3c949',
            });
            container008.addChild( group001 );


            var groupitem001 = new GroupItem({
               'layout' : 'Item1Button1',
               'transitionTo' : 'AssetDataManager.EditStatusView',
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager.EditStatusView_0',
               'id' : 'awab736465',
            });
            group001.addChild( groupitem001 );


            var text011 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager.EditStatusView_0_statusdesc_Status',
               'id' : 'aw70848fa5',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem001.addChild( text011 );


            var groupitem002 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_0',
               'id' : 'aw4472f20b',
            });
            group001.addChild( groupitem002 );


            var text012 = new Text({
               'resourceAttribute' : 'assetnum',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_0_wonum_asset',
               'id' : 'awb0159916',
               'label' : MessageService.createStaticMessage('Asset'),
            });
            groupitem002.addChild( text012 );


            var groupitem003 = new GroupItem({
               'transitionTo' : 'AssetDataManager.DescriptionView',
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager.DescriptionView_0',
               'id' : 'awb7c8abb5',
            });
            group001.addChild( groupitem003 );


            var text013 = new Text({
               'resourceAttribute' : 'description',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager.DescriptionView_0_description_Description',
               'id' : 'aw8cf51254',
               'label' : MessageService.createStaticMessage('Description'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem003.addChild( text013 );


            var groupitem004 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager.Parentgroupitem_0',
               'id' : 'awa52de8f5',
            });
            group001.addChild( groupitem004 );


            var text014 = new Text({
               'resourceAttribute' : 'parent',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager.Parentgroupitem_0_Parent',
               'id' : 'aw4ca40ce9',
               'label' : MessageService.createStaticMessage('Parent'),
            });
            groupitem004.addChild( text014 );


            var text015 = new Text({
               'resourceAttribute' : 'parentdesc',
               'editable' : false,
               'artifactId' : 'AssetDataManager.WorkDetailView_asset_groupitem_AssetDataManager.Parentgroupitem_0_parentdesc',
               'id' : 'aw9d8bd19e',
            });
            groupitem004.addChild( text015 );


            var groupitem005 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager.Locationgroupitem_0',
               'id' : 'aw8790a431',
            });
            group001.addChild( groupitem005 );


            var text016 = new Text({
               'resourceAttribute' : 'location',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager.Locationgroupitem_0_Location',
               'id' : 'aw7218c146',
               'label' : MessageService.createStaticMessage('Location'),
            });
            groupitem005.addChild( text016 );


            var text017 = new Text({
               'resourceAttribute' : 'locationdesc',
               'editable' : false,
               'artifactId' : 'AssetDataManager.WorkDetailView_asset_groupitem_AssetDataManager.Locationgroupitem_0_locationdesc',
               'id' : 'aw95231648',
            });
            groupitem005.addChild( text017 );


            var groupitem006 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager.Bingroupitem_0',
               'id' : 'aw56c5ca41',
            });
            group001.addChild( groupitem006 );


            var text018 = new Text({
               'resourceAttribute' : 'binnum',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager.Bingroupitem_0_binnum',
               'id' : 'awfc887fcb',
               'label' : MessageService.createStaticMessage('Bin'),
            });
            groupitem006.addChild( text018 );


            var groupitem007 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager.Itemgroupitem_0',
               'id' : 'aw9b5b6aaf',
            });
            group001.addChild( groupitem007 );


            var text019 = new Text({
               'resourceAttribute' : 'itemnum',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager.Itemgroupitem_0_itemnum',
               'id' : 'aw4011d1c3',
               'label' : MessageService.createStaticMessage('Rotating Item'),
            });
            groupitem007.addChild( text019 );


            var groupitem008 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_failurecode',
               'id' : 'awc75b154b',
            });
            group001.addChild( groupitem008 );


            var text020 = new Text({
               'resourceAttribute' : 'failurecode',
               'lookup' : 'AssetDataManager.failureClassLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_attribute_failurecode',
               'id' : 'aw80d0388a',
               'label' : MessageService.createStaticMessage('Failure Class'),
               'lookupAttribute' : 'failurecode',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem008.addChild( text020 );

            var eventHandlers018 = [
               {
                     'method' : 'validateFailureCode',
                     'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_attribute_failurecode_validate',
                     'id' : 'aw7cf2a2b0',
                     'event' : 'validate',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            text020.eventHandlers = eventHandlers018;

            var groupitem009 = new GroupItem({
               'transitionTo' : 'AssetDataManager.ClassifyAssetView',
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_Classifications',
               'id' : 'aw61486406',
            });
            group001.addChild( groupitem009 );


            var text021 = new Text({
               'resourceAttribute' : 'classificationpath',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager.ClassifyAssetView_0_classificationpath_Classification',
               'id' : 'aw1f930b5f',
               'label' : MessageService.createStaticMessage('Classification'),
               'placeHolder' : MessageService.createStaticMessage('Classify Asset'),
            });
            groupitem009.addChild( text021 );

            var eventHandlers019 = [
               {
                     'method' : 'initClassificationField',
                     'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager.ClassifyAssetView_0_classificationpath_Classification_eventHandlers_render_initClassificationField',
                     'id' : 'awc82f063d',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            text021.eventHandlers = eventHandlers019;

            var text022 = new Text({
               'resourceAttribute' : 'classificationdesc',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager.ClassifyAssetView_0_classificationdesc',
               'id' : 'awcf40faa6',
            });
            groupitem009.addChild( text022 );


            var groupitem010 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'AssetDataManager.SpecificationsView',
               'artifactId' : 'AssetDataManager.AssetDetailView_groupitem_WorkExecution.SpecificationsView_0',
               'id' : 'aw1a621b7a',
            });
            group001.addChild( groupitem010 );


            var text023 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.AssetDetailView_groupitem_WorkExecution.SpecificationsView_0_Specifications',
               'id' : 'awda9e65af',
               'value' : MessageService.createStaticMessage('Specifications'),
            });
            groupitem010.addChild( text023 );


            var text024 = new Text({
               'resourceAttribute' : 'assetspecsize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'AssetDataManager.AssetDetailView_groupitem_WorkExecution.SpecificationsView_0_specificationsSize',
               'id' : 'awd864afa2',
            });
            groupitem010.addChild( text024 );

            var eventHandlers020 = [
               {
                     'method' : 'hideShowSpecifications',
                     'artifactId' : 'AssetDataManager.AssetDetailView_SpecificationsView_0_eventHandlers_render_hideShowSpecifications',
                     'id' : 'aw95607442',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            groupitem010.eventHandlers = eventHandlers020;
            var eventHandlers021 = [
               {
                     'method' : 'hideShowContainer',
                     'artifactId' : 'AssetDataManager.AssetDetailView_container_0_eventHandlers_render_hideShowContainer',
                     'id' : 'aw56ba6f22',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetDetailHandler',
               },
               {
                     'method' : 'refreshAllListSizes',
                     'artifactId' : 'AssetDataManager.WorkDetailView_eventHandlers_render_refreshAllListSizes',
                     'id' : 'awded58d7',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            container008.eventHandlers = eventHandlers021;

            var container009 = new Container({
               'resource' : 'asset',
               'artifactId' : 'AssetDataManager.AssetDetailView_AssetDataManager_container_0b',
               'id' : 'aw3a0c1c9a',
            });
            view003.addChild( container009 );


            var errorIndicator001 = new ErrorIndicator({
               'artifactId' : 'AssetDataManager.AssetDetailView_errorIndicator',
               'id' : 'aw480dbe3c',
            });
            container009.addChild( errorIndicator001 );


            var group002 = new Group({
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__group_0',
               'id' : 'aweeafe0ac',
            });
            container009.addChild( group002 );


            var groupitem011 = new GroupItem({
               'layout' : 'Item1Button1',
               'transitionTo' : 'AssetDataManager.EditStatusView',
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager.EditStatusView_0',
               'id' : 'awe02b83c4',
            });
            group002.addChild( groupitem011 );


            var text025 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager.EditStatusView_0_statusdesc_Status',
               'id' : 'aw2a450df0',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem011.addChild( text025 );


            var groupitem012 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_0',
               'id' : 'awb875c720',
            });
            group002.addChild( groupitem012 );


            var text026 = new Text({
               'resourceAttribute' : 'assetnum',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_0_wonum_asset',
               'id' : 'aw12952a49',
               'label' : MessageService.createStaticMessage('Asset'),
               'required' : true,
            });
            groupitem012.addChild( text026 );


            var groupitem013 = new GroupItem({
               'transitionTo' : 'AssetDataManager.DescriptionView',
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager.DescriptionView_0',
               'id' : 'aw1652602c',
            });
            group002.addChild( groupitem013 );


            var text027 = new Text({
               'resourceAttribute' : 'description',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager.DescriptionView_0_description_Description',
               'id' : 'awdea54f3a',
               'label' : MessageService.createStaticMessage('Description'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem013.addChild( text027 );


            var groupitem014 = new GroupItem({
               'transitionTo' : 'AssetDataManager.EditParentView',
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager.EditParentView_0',
               'id' : 'awdb404697',
            });
            group002.addChild( groupitem014 );


            var text028 = new Text({
               'resourceAttribute' : 'parent',
               'lookup' : 'AssetDataManager.ParentLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__parent_groupitem_AssetDataManager.EditParentView_0_asset_Asset',
               'id' : 'awddc902e',
               'label' : MessageService.createStaticMessage('Parent'),
               'codeScannable' : true,
               'lookupAttribute' : 'parent',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem014.addChild( text028 );

            var eventHandlers022 = [
               {
                     'method' : 'asyncvalidateParent',
                     'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager.EditParentView_0_asset_Asset_eventHandlers_validate_asyncvalidateAsset',
                     'id' : 'aw1d4ab48e',
                     'event' : 'validate',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            text028.eventHandlers = eventHandlers022;

            var text029 = new Text({
               'resourceAttribute' : 'parentdesc',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager.EditParentView_0_parentdesc',
               'id' : 'awf85bdcce',
            });
            groupitem014.addChild( text029 );


            var groupitem015 = new GroupItem({
               'transitionTo' : 'AssetDataManager.EditLocationView',
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager.EditLocationView_0',
               'id' : 'awef022eaf',
            });
            group002.addChild( groupitem015 );


            var text030 = new Text({
               'resourceAttribute' : 'location',
               'lookup' : 'AssetDataManager.LocationLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager.EditLocationView_0_location_Location',
               'id' : 'awf5c1c8c',
               'label' : MessageService.createStaticMessage('Location'),
               'codeScannable' : true,
               'lookupAttribute' : 'location',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem015.addChild( text030 );

            var eventHandlers023 = [
               {
                     'method' : 'asyncvalidateLocation',
                     'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager.EditLocationView_0_location_Location_eventHandlers_validate_asyncvalidateLocation',
                     'id' : 'aw92b64386',
                     'event' : 'validate',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            text030.eventHandlers = eventHandlers023;

            var text031 = new Text({
               'resourceAttribute' : 'locationdesc',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager.EditLocationView_0_locationdesc',
               'id' : 'aw26b6009e',
            });
            groupitem015.addChild( text031 );


            var groupitem016 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager_failurecode',
               'id' : 'aw7d29b3f9',
            });
            group002.addChild( groupitem016 );


            var text032 = new Text({
               'resourceAttribute' : 'failurecode',
               'lookup' : 'AssetDataManager.failureClassLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager_attribute_failurecode',
               'id' : 'awf71d1eeb',
               'label' : MessageService.createStaticMessage('Failure Class'),
               'lookupAttribute' : 'failurecode',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem016.addChild( text032 );

            var eventHandlers024 = [
               {
                     'method' : 'validateFailureCode',
                     'artifactId' : 'AssetDataManager.AssetDetailView_editError_asset_groupitem_AssetDataManager_attribute_failurecode_validate',
                     'id' : 'aw1b5941bc',
                     'event' : 'validate',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            text032.eventHandlers = eventHandlers024;

            var groupitem017 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager.Bingroupitem_0',
               'id' : 'awd649ebfa',
            });
            group002.addChild( groupitem017 );


            var text033 = new Text({
               'resourceAttribute' : 'binnum',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager.Bingroupitem_0_binnum',
               'id' : 'aw8b4559aa',
               'label' : MessageService.createStaticMessage('Bin'),
            });
            groupitem017.addChild( text033 );


            var groupitem018 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager.Itemgroupitem_0',
               'id' : 'awc7688c8a',
            });
            group002.addChild( groupitem018 );


            var text034 = new Text({
               'resourceAttribute' : 'itemnum',
               'lookup' : 'AssetDataManager.RotatingItemLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager.Itemgroupitem_0_itemnum',
               'id' : 'aweefa7915',
               'label' : MessageService.createStaticMessage('Rotating Item'),
               'lookupAttribute' : 'itemnum',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem018.addChild( text034 );

            var eventHandlers025 = [
               {
                     'method' : 'asyncValidateItem',
                     'artifactId' : 'AssetDataManager.AssetDetailView_editError__asset_groupitem_AssetDataManager.Itemgroupitem_0_itemnum_0_validate_asyncValidateItem',
                     'id' : 'aw28bffb3c',
                     'event' : 'validate',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            text034.eventHandlers = eventHandlers025;
            var eventHandlers026 = [
               {
                     'method' : 'hideShowErrorContainer',
                     'artifactId' : 'AssetDataManager.AssetDetailView_container_0b_eventHandlers_render_hideShowErrorContainer',
                     'id' : 'awb0620a67',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            container009.eventHandlers = eventHandlers026;


            var listItemTemplate002 = new ListItemTemplate({
               'layout' : 'MeterList',
               'cssClass' : '.mblListItem .mblDomButtonArrow',
               'artifactId' : 'AssetDataManager.AssetMeterList_AssetMeters_listItemTemplate_MeterList',
               'id' : 'aweba4b9cd',
            });

            var listtext004 = new ListText({
               'resourceAttribute' : 'localLastReadingDate',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'AssetDataManager.AssetMeterList_AssetMeters_MeterList_lastreadingdate',
               'id' : 'aw26c411ae',
            });
            listItemTemplate002.addChild( listtext004 );


            var listtext005 = new ListText({
               'resourceAttribute' : 'metername',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'AssetDataManager.AssetMeterList_AssetMeters_MeterList_metername',
               'id' : 'aw63206d68',
            });
            listItemTemplate002.addChild( listtext005 );


            var listtext006 = new ListText({
               'resourceAttribute' : 'meterdesc',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'AssetDataManager.AssetMeterList_AssetMeters_MeterList_meterdesc',
               'id' : 'aw36b6bf3a',
            });
            listItemTemplate002.addChild( listtext006 );


            var listtext007 = new ListText({
               'resourceAttribute' : 'localLastReading',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'AssetDataManager.AssetMeterList_AssetMeters_MeterList_lastreading',
               'id' : 'awf5965aac',
            });
            listItemTemplate002.addChild( listtext007 );


            var eventHandlers027 = [
               {
                     'method' : 'showHeader',
                     'artifactId' : 'AssetDataManager.AssetMeterList_AssetMeters_list_eventHandlers_click_showHeader',
                     'id' : 'aw56d699d9',
                     'event' : 'click',
                     'class' : 'application.handlers.MetersListHandler',
               }
            ];

            var list002 = new List({
               'resource' : 'asset',
               'transitionTo' : 'AssetDataManager.AssetMeterDetailView',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate002,
               'artifactId' : 'AssetDataManager.AssetMeterList_list',
               'eventHandlers' : eventHandlers027,
               'attribute' : 'assetmeterlist',
               'id' : 'aw1f481053',
               'label' : MessageService.createStaticMessage('Meters'),
               'collapsible' : 'true',
            });
            view003.addChild( list002 );


            var container010 = new Container({
               'artifactId' : 'AssetDataManager.AssetDetailView_container_0',
               'id' : 'awe5547838',
            });
            view003.addChild( container010 );


            var group003 = new Group({
               'artifactId' : 'AssetDataManager.AssetDetailView_group_2',
               'id' : 'aw18ada865',
            });
            container010.addChild( group003 );


            var groupitem019 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'enableFeatureByProperty' : 'attachments.enabled',
               'transitionTo' : 'WorkExecution.AttachmentsView',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.AttachmentsView_0',
               'id' : 'aw2705c7e0',
            });
            group003.addChild( groupitem019 );


            var text035 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.AttachmentsView_0_Attachments',
               'id' : 'aw5f5bd9ca',
               'value' : MessageService.createStaticMessage('Attachments'),
            });
            groupitem019.addChild( text035 );


            var text036 = new Text({
               'resourceAttribute' : 'attachmentssize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.AttachmentsView_0_attachmentssize',
               'id' : 'aw4636d2d3',
            });
            groupitem019.addChild( text036 );


            var groupitem020 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_priority',
               'id' : 'aw3c676eeb',
            });
            group003.addChild( groupitem020 );


            var text037 = new Text({
               'resourceAttribute' : 'priority',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_attribute_priority',
               'id' : 'aw3fd395a0',
               'label' : MessageService.createStaticMessage('Priority'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem020.addChild( text037 );


            var groupitem021 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_type',
               'id' : 'aw9948b99b',
            });
            group003.addChild( groupitem021 );


            var text038 = new Text({
               'resourceAttribute' : 'assettype',
               'lookup' : 'AssetDataManager.AssetTypeLookup',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_attribute_assettype',
               'id' : 'awd83eee95',
               'label' : MessageService.createStaticMessage('Type'),
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
            });
            groupitem021.addChild( text038 );


            var groupitem022 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_serialnum',
               'id' : 'aw870cf5e2',
            });
            group003.addChild( groupitem022 );


            var text039 = new Text({
               'resourceAttribute' : 'serialnum',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_attribute_serialnum',
               'id' : 'aw6601d901',
               'label' : MessageService.createStaticMessage('Serial #'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem022.addChild( text039 );


            var groupitem023 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_calendar',
               'id' : 'aw3068138a',
            });
            group003.addChild( groupitem023 );


            var text040 = new Text({
               'resourceAttribute' : 'calnum',
               'lookup' : 'AssetDataManager.calendarLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_attribute_calendar',
               'id' : 'aw33dce8c1',
               'label' : MessageService.createStaticMessage('Calendar'),
               'lookupAttribute' : 'calnum',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem023.addChild( text040 );


            var groupitem024 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_shift',
               'id' : 'aw80717f0b',
            });
            group003.addChild( groupitem024 );


            var text041 = new Text({
               'resourceAttribute' : 'shiftnum',
               'lookup' : 'AssetDataManager.shiftLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_attribute_shift',
               'id' : 'awe52b2688',
               'label' : MessageService.createStaticMessage('Shift'),
               'lookupAttribute' : 'shiftnum',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem024.addChild( text041 );


            var groupitem025 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_isrunning',
               'id' : 'aw14d7ac1a',
            });
            group003.addChild( groupitem025 );


            var checkbox001 = new CheckBox({
               'resourceAttribute' : 'displayisrunning',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_attribute_assetup',
               'id' : 'awc376c397',
               'label' : MessageService.createStaticMessage('Asset Up'),
            });
            groupitem025.addChild( checkbox001 );


            var groupitem026 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_updownstatusdate',
               'id' : 'awbc3e83f4',
            });
            group003.addChild( groupitem026 );


            var text042 = new Text({
               'resourceAttribute' : 'displayupdownstatusdate',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_attribute_updownstatusdate',
               'id' : 'aw684b18df',
               'label' : MessageService.createStaticMessage('Status Date'),
            });
            groupitem026.addChild( text042 );


            var groupitem027 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_totdowntime',
               'id' : 'aw5d502d9e',
            });
            group003.addChild( groupitem027 );


            var text043 = new Text({
               'resourceAttribute' : 'displaytotaldowntime',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetDetailView_asset_groupitem_AssetDataManager_attribute_totaldowntime',
               'id' : 'awa294cb0',
               'label' : MessageService.createStaticMessage('Total Downtime'),
            });
            groupitem027.addChild( text043 );


            var group004 = new Group({
               'artifactId' : 'AssetDataManager.WorkDetailView_group_5',
               'id' : 'awa9ac02bc',
            });
            container010.addChild( group004 );


            var groupitem028 = new GroupItem({
               'artifactId' : 'AssetDataManager.WorkDetailView_groupitem_0',
               'id' : 'aw3861a9c5',
            });
            group004.addChild( groupitem028 );


            var lastupdatetext001 = new LastUpdateText({
               'artifactId' : 'AssetDataManager.WorkDetailView_lastupdatetext',
               'id' : 'awe82e0cf3',
            });
            groupitem028.addChild( lastupdatetext001 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.NewAssetView', false);
               trackTimer.startTracking();
            }

            var view004 = new View({
               'resource' : 'asset',
               'allowDrillDown' : 'true',
               'id' : 'AssetDataManager.NewAssetView',
               'label' : MessageService.createStaticMessage('Asset Details'),
            });
            ui001.addChild( view004 );

            var requiredResources004 = {
               'asset' : {
                  'artifactId' : 'AssetDataManager.NewAssetView_asset',
                  'id' : 'awfe91131b',
                  'related' : {
                     'assetmeterlist' : {
                        'artifactId' : 'AssetDataManager.NewAssetView_asset_assetmeterlist',
                        'id' : 'awe17e67d3',
                     },
                     'assetSpec' : {
                        'reload' : true,
                        'artifactId' : 'AssetDataManager.NewAssetView_asset_assetSpecs',
                        'id' : 'awb7259f79',
                     },
                  },
               },
               'domainAssetStatus' : {
                  'artifactId' : 'AssetDataManager.NewAssetView_domainAssetstatus',
                  'id' : 'awff303f3d',
               },
               'failureListResource' : {
                  'artifactId' : 'AssetDataManager.NewAssetView_domainfailurecode',
                  'id' : 'aw78b15300',
               },
               'assetattrtypes' : {
                  'artifactId' : 'AssetDataManager.NewAssetView_assetattrtypes',
                  'id' : 'awfe52d779',
               },
               'classstructure' : {
                  'artifactId' : 'AssetDataManager.NewAssetView_classstructure',
                  'id' : 'awe32209bf',
               },
            };
            view004.addRequiredResources( requiredResources004 );

            var actions004 = new Actions({
               'artifactId' : 'AssetDataManager.NewAssetView_actions',
               'id' : 'awb5702d27',
            });
            view004.addChild( actions004 );


            var action013 = new Action({
               'image' : '\/images\/action_menu_downtime.png',
               'transitionTo' : 'AssetDataManager.ReportDowntimeView',
               'artifactId' : 'AssetDataManager.NewAssetView_ReportDowntime_action',
               'id' : 'awaa1ed68f',
               'label' : MessageService.createStaticMessage('Report Downtime'),
            });
            actions004.addChild( action013 );


            var action014 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'enableFeatureByProperty' : 'attachments.enabled',
               'artifactId' : 'AssetDataManager.NewAssetView_TakePhoto_action',
               'id' : 'aw7953505a',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions004.addChild( action014 );

            var eventHandlers028 = [
               {
                     'method' : 'launchCameraForPhoto',
                     'artifactId' : 'AssetDataManager.NewAssetView_TakePhoto_action_eventHandlers_click_launchCameraForPhoto',
                     'id' : 'aw6b2707e2',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               },
               {
                     'method' : 'initCategory',
                     'artifactId' : 'AssetDataManager.NewAssetView_TakePhoto_action_eventHandlers_render_initCategory',
                     'id' : 'awa21951e7',
                     'event' : 'render',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            action014.eventHandlers = eventHandlers028;

            var container011 = new Container({
               'resource' : 'asset',
               'artifactId' : 'AssetDataManager.NewAssetView_AssetDataManager_container_0',
               'id' : 'aw7bba7e3a',
            });
            view004.addChild( container011 );


            var errorIndicator002 = new ErrorIndicator({
               'artifactId' : 'AssetDataManager.NewAssetView_errorIndicator',
               'id' : 'aw596dc2a7',
            });
            container011.addChild( errorIndicator002 );


            var group005 = new Group({
               'artifactId' : 'AssetDataManager.NewAssetView_group_0',
               'id' : 'aw2d277442',
            });
            container011.addChild( group005 );


            var groupitem029 = new GroupItem({
               'layout' : 'Item1Button1',
               'transitionTo' : 'AssetDataManager.EditStatusView',
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.EditStatusView_0',
               'id' : 'aw779c78c5',
            });
            group005.addChild( groupitem029 );


            var text044 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.EditStatusView_0_statusdesc_Status',
               'id' : 'aw6f5d9a1c',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem029.addChild( text044 );


            var groupitem030 = new GroupItem({
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_0',
               'id' : 'aw7b0cf2a9',
            });
            group005.addChild( groupitem030 );


            var text045 = new Text({
               'resourceAttribute' : 'assetnum',
               'editable' : true,
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_0_wonum_asset',
               'id' : 'aw3dd009b9',
               'label' : MessageService.createStaticMessage('Asset'),
               'codeScannable' : true,
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
               'required' : true,
            });
            groupitem030.addChild( text045 );


            var groupitem031 = new GroupItem({
               'transitionTo' : 'AssetDataManager.DescriptionView',
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.DescriptionView_0',
               'id' : 'aw61c2e741',
            });
            group005.addChild( groupitem031 );


            var text046 = new Text({
               'resourceAttribute' : 'description',
               'editable' : true,
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.DescriptionView_0_description_Description',
               'id' : 'awe69cd1ee',
               'label' : MessageService.createStaticMessage('Description'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem031.addChild( text046 );


            var groupitem032 = new GroupItem({
               'transitionTo' : 'AssetDataManager.EditParentView',
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.EditParentView_0',
               'id' : 'aw4cf7bd96',
            });
            group005.addChild( groupitem032 );


            var text047 = new Text({
               'resourceAttribute' : 'parent',
               'lookup' : 'AssetDataManager.ParentLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.NewAssetView_parent_groupitem_AssetDataManager.EditParentView_0_asset_Asset',
               'id' : 'awb092fb21',
               'label' : MessageService.createStaticMessage('Parent'),
               'codeScannable' : true,
               'lookupAttribute' : 'parent',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem032.addChild( text047 );

            var eventHandlers029 = [
               {
                     'method' : 'asyncvalidateParent',
                     'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.EditParentView_0_asset_Asset_eventHandlers_validate_asyncvalidateAsset',
                     'id' : 'awa0b05794',
                     'event' : 'validate',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            text047.eventHandlers = eventHandlers029;

            var text048 = new Text({
               'resourceAttribute' : 'parentdesc',
               'editable' : false,
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.EditParentView_0_parentdesc',
               'id' : 'awd83964dc',
            });
            groupitem032.addChild( text048 );


            var groupitem033 = new GroupItem({
               'transitionTo' : 'AssetDataManager.EditLocationView',
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.EditLocationView_0',
               'id' : 'awdc76a3cd',
            });
            group005.addChild( groupitem033 );


            var text049 = new Text({
               'resourceAttribute' : 'location',
               'lookup' : 'AssetDataManager.LocationLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.EditLocationView_0_location_Location',
               'id' : 'aw93fce393',
               'label' : MessageService.createStaticMessage('Location'),
               'codeScannable' : true,
               'lookupAttribute' : 'location',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem033.addChild( text049 );

            var eventHandlers030 = [
               {
                     'method' : 'asyncvalidateLocation',
                     'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.EditLocationView_0_location_Location_eventHandlers_validate_asyncvalidateLocation',
                     'id' : 'aw4c11e3c9',
                     'event' : 'validate',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            text049.eventHandlers = eventHandlers030;

            var text050 = new Text({
               'resourceAttribute' : 'locationdesc',
               'editable' : false,
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.EditLocationView_0_locationdesc',
               'id' : 'aw7b4e19cf',
            });
            groupitem033.addChild( text050 );


            var groupitem034 = new GroupItem({
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_failurecode',
               'id' : 'aw4ef0a2dc',
            });
            group005.addChild( groupitem034 );


            var text051 = new Text({
               'resourceAttribute' : 'failurecode',
               'lookup' : 'AssetDataManager.failureClassLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_attribute_failurecode',
               'id' : 'aw650b52b5',
               'label' : MessageService.createStaticMessage('Failure Class'),
               'lookupAttribute' : 'failurecode',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem034.addChild( text051 );

            var eventHandlers031 = [
               {
                     'method' : 'validateFailureCode',
                     'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_attribute_failurecode_validate',
                     'id' : 'aw231ccc4e',
                     'event' : 'validate',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            text051.eventHandlers = eventHandlers031;

            var groupitem035 = new GroupItem({
               'transitionTo' : 'AssetDataManager.ClassifyAssetView',
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_Classifications',
               'id' : 'aw58590b28',
            });
            group005.addChild( groupitem035 );


            var text052 = new Text({
               'resourceAttribute' : 'classificationpath',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.ClassifyAssetView_0_classificationpath_Classification',
               'id' : 'aw5dbed42b',
               'label' : MessageService.createStaticMessage('Classification'),
               'placeHolder' : MessageService.createStaticMessage('Classify Asset'),
            });
            groupitem035.addChild( text052 );

            var eventHandlers032 = [
               {
                     'method' : 'initClassificationField',
                     'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.ClassifyAssetView_0_classificationpath_Classification_eventHandlers_render_initClassificationField',
                     'id' : 'awde53acae',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            text052.eventHandlers = eventHandlers032;

            var text053 = new Text({
               'resourceAttribute' : 'classificationdesc',
               'editable' : false,
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.ClassifyAssetView_0_classificationdesc',
               'id' : 'aw6825e98e',
            });
            groupitem035.addChild( text053 );


            var groupitem036 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'AssetDataManager.SpecificationsView',
               'artifactId' : 'AssetDataManager.NewAssetView_groupitem_AssetDataManager.SpecificationsView_0',
               'id' : 'awe8d71dca',
            });
            group005.addChild( groupitem036 );


            var text054 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.NewAssetView_groupitem_AssetDataManager.SpecificationsView_0_Specifications',
               'id' : 'awb2f674d3',
               'value' : MessageService.createStaticMessage('Specifications'),
            });
            groupitem036.addChild( text054 );


            var text055 = new Text({
               'resourceAttribute' : 'assetspecsize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'AssetDataManager.NewAssetView_groupitem_AssetDataManager.SpecificationsView_0_specificationsSize',
               'id' : 'awa247104',
            });
            groupitem036.addChild( text055 );

            var eventHandlers033 = [
               {
                     'method' : 'hideShowSpecifications',
                     'artifactId' : 'AssetDataManager.NewAssetView_SpecificationsView_0_eventHandlers_render_hideShowSpecifications',
                     'id' : 'awcf3a4537',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            groupitem036.eventHandlers = eventHandlers033;

            var groupitem037 = new GroupItem({
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.Itemgroupitem_0',
               'id' : 'awa24a0581',
            });
            group005.addChild( groupitem037 );


            var text056 = new Text({
               'resourceAttribute' : 'itemnum',
               'lookup' : 'AssetDataManager.RotatingItemLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.Itemgroupitem_0_itemnum',
               'id' : 'awb5a89662',
               'label' : MessageService.createStaticMessage('Rotating Item'),
               'lookupAttribute' : 'itemnum',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem037.addChild( text056 );

            var eventHandlers034 = [
               {
                     'method' : 'asyncValidateItem',
                     'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager.Itemgroupitem_0_validate_asyncValidateItem',
                     'id' : 'awa41eec5f',
                     'event' : 'validate',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            text056.eventHandlers = eventHandlers034;

            var groupitem038 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'enableFeatureByProperty' : 'attachments.enabled',
               'transitionTo' : 'WorkExecution.AttachmentsView',
               'artifactId' : 'AssetDataManager.NewAssetView__groupitem_WorkExecution.AttachmentsView_0',
               'id' : 'aw772cc954',
            });
            group005.addChild( groupitem038 );


            var text057 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.NewAssetView__groupitem_WorkExecution.AttachmentsView_0_Attachments',
               'id' : 'awbbdff93b',
               'value' : MessageService.createStaticMessage('Attachments'),
            });
            groupitem038.addChild( text057 );


            var text058 = new Text({
               'resourceAttribute' : 'attachmentssize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'AssetDataManager.NewAssetView__groupitem_WorkExecution.AttachmentsView_0_attachmentssize',
               'id' : 'awb8299edf',
            });
            groupitem038.addChild( text058 );

            var eventHandlers035 = [
               {
                     'method' : 'hideShowContainer',
                     'artifactId' : 'AssetDataManager.NewAssetView_container_0_eventHandlers_render_hideShowContainer',
                     'id' : 'aw80b023d6',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetDetailHandler',
               },
               {
                     'method' : 'refreshAllListSizes',
                     'artifactId' : 'AssetDataManager.NewAssetView_eventHandlers_render_refreshAllListSizes',
                     'id' : 'awd845ddaf',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            container011.eventHandlers = eventHandlers035;

            var group006 = new Group({
               'artifactId' : 'AssetDataManager.NewAssetView_group_2',
               'id' : 'awc329156e',
            });
            container011.addChild( group006 );


            var groupitem039 = new GroupItem({
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_priority',
               'id' : 'awe69e962b',
            });
            group006.addChild( groupitem039 );


            var text059 = new Text({
               'resourceAttribute' : 'priority',
               'editable' : true,
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_attribute_priority',
               'id' : 'aw85d5a9e9',
               'label' : MessageService.createStaticMessage('Priority'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem039.addChild( text059 );


            var groupitem040 = new GroupItem({
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_type',
               'id' : 'awdbec1a3',
            });
            group006.addChild( groupitem040 );


            var text060 = new Text({
               'resourceAttribute' : 'assettype',
               'lookup' : 'AssetDataManager.AssetTypeLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_attribute_assettype',
               'id' : 'awd784119d',
               'label' : MessageService.createStaticMessage('Type'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem040.addChild( text060 );


            var groupitem041 = new GroupItem({
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_calendar',
               'id' : 'awea91eb4a',
            });
            group006.addChild( groupitem041 );


            var text061 = new Text({
               'resourceAttribute' : 'calnum',
               'lookup' : 'AssetDataManager.calendarLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_attribute_calendar',
               'id' : 'aw89dad488',
               'label' : MessageService.createStaticMessage('Calendar'),
               'lookupAttribute' : 'calnum',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem041.addChild( text061 );


            var groupitem042 = new GroupItem({
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_shift',
               'id' : 'awa8e731ed',
            });
            group006.addChild( groupitem042 );


            var text062 = new Text({
               'resourceAttribute' : 'shiftnum',
               'lookup' : 'AssetDataManager.shiftLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_attribute_shift',
               'id' : 'awdc3a49a6',
               'label' : MessageService.createStaticMessage('Shift'),
               'lookupAttribute' : 'shiftnum',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem042.addChild( text062 );


            var groupitem043 = new GroupItem({
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_isrunning',
               'id' : 'aw8f699752',
            });
            group006.addChild( groupitem043 );


            var checkbox002 = new CheckBox({
               'resourceAttribute' : 'isrunning',
               'editable' : false,
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_attribute_assetup',
               'id' : 'aw157c8f63',
               'label' : MessageService.createStaticMessage('Asset Up'),
            });
            groupitem043.addChild( checkbox002 );


            var groupitem044 = new GroupItem({
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_updownstatusdate',
               'id' : 'aw60d19f54',
            });
            group006.addChild( groupitem044 );


            var text063 = new Text({
               'resourceAttribute' : 'updownstatusdate',
               'editable' : false,
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_attribute_updownstatusdate',
               'id' : 'awbd74fd97',
               'label' : MessageService.createStaticMessage('Status Date'),
            });
            groupitem044.addChild( text063 );


            var groupitem045 = new GroupItem({
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_totdowntime',
               'id' : 'awd4fb9a09',
            });
            group006.addChild( groupitem045 );


            var text064 = new Text({
               'resourceAttribute' : 'totdowntime',
               'editable' : false,
               'artifactId' : 'AssetDataManager.NewAssetView_asset_groupitem_AssetDataManager_attribute_totaldowntime',
               'id' : 'awff900b11',
               'label' : MessageService.createStaticMessage('Total Downtime'),
            });
            groupitem045.addChild( text064 );


            var group007 = new Group({
               'artifactId' : 'AssetDataManager.NewAssetView_group_5',
               'id' : 'aw5d4d80cd',
            });
            container011.addChild( group007 );


            var groupitem046 = new GroupItem({
               'artifactId' : 'AssetDataManager.NewAssetView_groupitem_0',
               'id' : 'awf4e6557a',
            });
            group007.addChild( groupitem046 );


            var lastupdatetext002 = new LastUpdateText({
               'artifactId' : 'AssetDataManager.NewAssetView_lastupdatetext',
               'id' : 'awedf90d20',
            });
            groupitem046.addChild( lastupdatetext002 );


            var footer001 = new Footer({
               'artifactId' : 'AssetDataManager.NewAssetView_footer',
               'id' : 'awa75ef29',
            });
            view004.addChild( footer001 );


            var button005 = new Button({
               'artifactId' : 'AssetDataManager.NewAssetView_Cancel_button',
               'id' : 'awa205ccd',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers036 = [
               {
                     'method' : 'discardNewAssetView',
                     'artifactId' : 'AssetDataManager.NewAssetView_Cancel_button_eventHandlers_click_discardNewAssetView',
                     'id' : 'aw877277d',
                     'event' : 'click',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            button005.eventHandlers = eventHandlers036;
            footer001.addChild( button005 );


            var button006 = new Button({
               'resourceAttribute' : 'wonum',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'AssetDataManager.NewAssetView_wonum_Create_button',
               'id' : 'aw7d3dcf06',
               'label' : MessageService.createStaticMessage('Create'),
               'primary' : 'true',
            });
            var eventHandlers037 = [
               {
                     'method' : 'commitNewAssetView',
                     'artifactId' : 'AssetDataManager.NewAssetView_wonum_Create_button_eventHandlers_click_commitNewAssetView',
                     'id' : 'aw2734eb95',
                     'event' : 'click',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            button006.eventHandlers = eventHandlers037;
            footer001.addChild( button006 );

            var eventHandlers038 = [
               {
                     'method' : 'initNewAssetView',
                     'artifactId' : 'AssetDataManager.NewAssetView_eventHandlers_initialize_initNewAssetView',
                     'id' : 'awcea7f464',
                     'event' : 'initialize',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            view004.eventHandlers = eventHandlers038;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.DescriptionView', false);
               trackTimer.startTracking();
            }

            var view005 = new View({
               'resource' : 'asset',
               'id' : 'AssetDataManager.DescriptionView',
               'label' : MessageService.createStaticMessage('Description'),
            });
            ui001.addChild( view005 );

            var requiredResources005 = {
               'asset' : {
                  'artifactId' : 'AssetDataManager.DescriptionView_asset',
                  'id' : 'awfb068949',
               },
            };
            view005.addRequiredResources( requiredResources005 );

            var container012 = new Container({
               'artifactId' : 'AssetDataManager.DescriptionView_container_0',
               'id' : 'aw4d9149d2',
            });
            view005.addChild( container012 );


            var group008 = new Group({
               'artifactId' : 'AssetDataManager.DescriptionView_group_0',
               'id' : 'awb5703459',
            });
            container012.addChild( group008 );


            var groupitem047 = new GroupItem({
               'artifactId' : 'AssetDataManager.DescriptionView_groupitem_0',
               'id' : 'aw84ad8c1',
            });
            group008.addChild( groupitem047 );


            var text065 = new Text({
               'resourceAttribute' : 'description',
               'editable' : false,
               'artifactId' : 'AssetDataManager.DescriptionView_groupitem_0_description',
               'id' : 'aw7f845a28',
            });
            groupitem047.addChild( text065 );


            var groupitem048 = new GroupItem({
               'artifactId' : 'AssetDataManager.DescriptionView_groupitem_1',
               'id' : 'aw7f4de857',
            });
            group008.addChild( groupitem048 );


            var text066 = new Text({
               'resourceAttribute' : 'assetlongdesc',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'AssetDataManager.DescriptionView_groupitem_1_longdescription',
               'id' : 'aw4461f6a5',
            });
            groupitem048.addChild( text066 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.EditParentView', false);
               trackTimer.startTracking();
            }

            var view006 = new View({
               'id' : 'AssetDataManager.EditParentView',
               'label' : MessageService.createStaticMessage('Parent Asset'),
            });
            ui001.addChild( view006 );


            var container013 = new Container({
               'resource' : 'asset',
               'artifactId' : 'AssetDataManager.EditParentView_asset_container_0',
               'id' : 'awaf0fef50',
            });
            view006.addChild( container013 );


            var group009 = new Group({
               'artifactId' : 'AssetDataManager.EditParentView_group_0',
               'id' : 'aw86c31cdf',
            });
            container013.addChild( group009 );


            var groupitem049 = new GroupItem({
               'artifactId' : 'AssetDataManager.EditParentView_asset_groupitem_0',
               'id' : 'awead47e43',
            });
            group009.addChild( groupitem049 );


            var text067 = new Text({
               'resourceAttribute' : 'parent',
               'lookup' : 'AssetDataManager.ParentLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.EditParentView_asset_groupitem_0_asset',
               'id' : 'aw4afaeb14',
               'codeScannable' : true,
               'lookupAttribute' : 'assetnum',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem049.addChild( text067 );


            var text068 = new Text({
               'resourceAttribute' : 'parentdesc',
               'editable' : false,
               'artifactId' : 'AssetDataManager.EditParentView_asset_groupitem_0_assetdesc',
               'id' : 'aw923f264',
            });
            groupitem049.addChild( text068 );


            var groupitem050 = new GroupItem({
               'artifactId' : 'AssetDataManager.EditParentView_asset_groupitem_1',
               'id' : 'aw9dd34ed5',
            });
            group009.addChild( groupitem050 );


            var text069 = new Text({
               'resourceAttribute' : 'parentld',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'AssetDataManager.EditParentView_asset_groupitem_1_assetld',
               'id' : 'awcc432109',
            });
            groupitem050.addChild( text069 );


            var footer002 = new Footer({
               'artifactId' : 'AssetDataManager.EditParentView_footer',
               'id' : 'aw3f202b06',
            });
            view006.addChild( footer002 );


            var button007 = new Button({
               'artifactId' : 'AssetDataManager.EditParentView_Cancel_button',
               'id' : 'aw8eaa0132',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers039 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'AssetDataManager.EditParentView_Cancel_button_eventHandlers_click_handleBackButtonEditViews',
                     'id' : 'aw3ce1b00c',
                     'event' : 'click',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            button007.eventHandlers = eventHandlers039;
            footer002.addChild( button007 );


            var button008 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'AssetDataManager.EditParentView_Save_button',
               'id' : 'aw68790f64',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers040 = [
               {
                     'method' : 'commitEditParentView',
                     'artifactId' : 'AssetDataManager.EditParentView_Save_button_eventHandlers_click_commitParentEntryView',
                     'id' : 'awbfb603f',
                     'event' : 'click',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            button008.eventHandlers = eventHandlers040;
            footer002.addChild( button008 );

            var eventHandlers041 = [
               {
                     'method' : 'cleanupEditParentView',
                     'artifactId' : 'AssetDataManager.EditParentView_eventHandlers_cleanup_cleanupEditParentView',
                     'id' : 'awdb86505c',
                     'event' : 'cleanup',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            view006.eventHandlers = eventHandlers041;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.EditLocationView', false);
               trackTimer.startTracking();
            }

            var view007 = new View({
               'id' : 'AssetDataManager.EditLocationView',
               'label' : MessageService.createStaticMessage('Location'),
            });
            ui001.addChild( view007 );


            var container014 = new Container({
               'resource' : 'asset',
               'artifactId' : 'AssetDataManager.EditLocationView_asset_container_0',
               'id' : 'aw6894e8a',
            });
            view007.addChild( container014 );


            var group010 = new Group({
               'artifactId' : 'AssetDataManager.EditLocationView_group_0',
               'id' : 'awd2e7698f',
            });
            container014.addChild( group010 );


            var groupitem051 = new GroupItem({
               'artifactId' : 'AssetDataManager.EditLocationView_asset_groupitem_0',
               'id' : 'aw4352df99',
            });
            group010.addChild( groupitem051 );


            var text070 = new Text({
               'resourceAttribute' : 'location',
               'lookup' : 'AssetDataManager.LocationLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.EditLocationView_asset_groupitem_0_location_Location',
               'id' : 'aw60b5255c',
               'label' : MessageService.createStaticMessage('Location'),
               'codeScannable' : true,
               'lookupAttribute' : 'location',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem051.addChild( text070 );


            var text071 = new Text({
               'resourceAttribute' : 'locationdesc',
               'editable' : false,
               'artifactId' : 'AssetDataManager.EditLocationView_asset_groupitem_0_locationdesc',
               'id' : 'aw95d8a76c',
            });
            groupitem051.addChild( text071 );


            var groupitem052 = new GroupItem({
               'artifactId' : 'AssetDataManager.EditLocationView_asset_groupitem_1',
               'id' : 'aw3455ef0f',
            });
            group010.addChild( groupitem052 );


            var text072 = new Text({
               'resourceAttribute' : 'locationld',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'AssetDataManager.EditLocationView_asset_groupitem_1_locationld',
               'id' : 'aw713cf376',
            });
            groupitem052.addChild( text072 );


            var footer003 = new Footer({
               'artifactId' : 'AssetDataManager.EditLocationView_footer',
               'id' : 'awc50252f0',
            });
            view007.addChild( footer003 );


            var button009 = new Button({
               'layoutInsertAt' : 'button1',
               'artifactId' : 'AssetDataManager.EditLocationView_Cancel_button',
               'id' : 'awf7f3d87f',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers042 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'AssetDataManager.EditLocationView_Cancel_button_eventHandlers_click_discardView',
                     'id' : 'aw3d045a73',
                     'event' : 'click',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            button009.eventHandlers = eventHandlers042;
            footer003.addChild( button009 );


            var button010 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'layoutInsertAt' : 'button2',
               'artifactId' : 'AssetDataManager.EditLocationView_Save_button',
               'id' : 'aw6ca0de36',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers043 = [
               {
                     'method' : 'commitEditLocationView',
                     'artifactId' : 'AssetDataManager.EditLocationView_Save_button_eventHandlers_click_commitActualLocationEntryView',
                     'id' : 'awa7cd0917',
                     'event' : 'click',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            button010.eventHandlers = eventHandlers043;
            footer003.addChild( button010 );

            var eventHandlers044 = [
               {
                     'method' : 'cleanupEditLocationView',
                     'artifactId' : 'AssetDataManager.EditLocationView_eventHandlers_cleanup_cleanupEditLocationView',
                     'id' : 'awbd643c86',
                     'event' : 'cleanup',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            view007.eventHandlers = eventHandlers044;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.LocationView', false);
               trackTimer.startTracking();
            }

            var view008 = new View({
               'id' : 'AssetDataManager.LocationView',
               'label' : MessageService.createStaticMessage('Location'),
            });
            ui001.addChild( view008 );


            var container015 = new Container({
               'resource' : 'asset',
               'artifactId' : 'AssetDataManager.LocationView_asset_container_0',
               'id' : 'aw5476aede',
            });
            view008.addChild( container015 );


            var group011 = new Group({
               'artifactId' : 'AssetDataManager.LocationView_group_0',
               'id' : 'aw13afa015',
            });
            container015.addChild( group011 );


            var groupitem053 = new GroupItem({
               'artifactId' : 'AssetDataManager.LocationView_asset_groupitem_0',
               'id' : 'aw11ad3fcd',
            });
            group011.addChild( groupitem053 );


            var text073 = new Text({
               'resourceAttribute' : 'location',
               'editable' : false,
               'artifactId' : 'AssetDataManager.LocationView_asset_groupitem_0_location',
               'id' : 'aw8bcd0af5',
            });
            groupitem053.addChild( text073 );


            var text074 = new Text({
               'resourceAttribute' : 'locationdesc',
               'editable' : false,
               'artifactId' : 'AssetDataManager.LocationView_asset_groupitem_0_locationdesc',
               'id' : 'awb3a43cbc',
            });
            groupitem053.addChild( text074 );


            var groupitem054 = new GroupItem({
               'artifactId' : 'AssetDataManager.LocationView_asset_groupitem_1',
               'id' : 'aw66aa0f5b',
            });
            group011.addChild( groupitem054 );


            var text075 = new Text({
               'resourceAttribute' : 'locationld',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'AssetDataManager.LocationView_asset_groupitem_1_locationld',
               'id' : 'awd0f5a851',
            });
            groupitem054.addChild( text075 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.ParentView', false);
               trackTimer.startTracking();
            }

            var view009 = new View({
               'id' : 'AssetDataManager.ParentView',
               'label' : MessageService.createStaticMessage('Asset'),
            });
            ui001.addChild( view009 );


            var container016 = new Container({
               'resource' : 'asset',
               'artifactId' : 'AssetDataManager.ParentView_asset_container_0',
               'attribute' : 'tasklist',
               'id' : 'aw7fb4d45b',
            });
            view009.addChild( container016 );


            var group012 = new Group({
               'artifactId' : 'AssetDataManager.ParentView_group_0',
               'id' : 'aw8b3bbaa6',
            });
            container016.addChild( group012 );


            var groupitem055 = new GroupItem({
               'artifactId' : 'AssetDataManager.ParentView_asset_groupitem_0',
               'id' : 'aw3a6f4548',
            });
            group012.addChild( groupitem055 );


            var text076 = new Text({
               'resourceAttribute' : 'parent',
               'editable' : false,
               'artifactId' : 'AssetDataManager.ParentView_asset_groupitem_0_asset',
               'id' : 'awb1366eeb',
            });
            groupitem055.addChild( text076 );


            var text077 = new Text({
               'resourceAttribute' : 'parentdesc',
               'editable' : false,
               'artifactId' : 'AssetDataManager.ParentView_asset_groupitem_0_assetdesc',
               'id' : 'aw7df89e28',
            });
            groupitem055.addChild( text077 );


            var groupitem056 = new GroupItem({
               'artifactId' : 'AssetDataManager.ParentView_asset_groupitem_1',
               'id' : 'aw4d6875de',
            });
            group012.addChild( groupitem056 );


            var text078 = new Text({
               'resourceAttribute' : 'parentld',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'AssetDataManager.ParentView_asset_groupitem_1_assetld',
               'id' : 'awc2b55018',
            });
            groupitem056.addChild( text078 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.AssetMeterViewList', false);
               trackTimer.startTracking();
            }

            var view010 = new View({
               'id' : 'AssetDataManager.AssetMeterViewList',
               'label' : MessageService.createStaticMessage('Meters for Asset'),
            });
            ui001.addChild( view010 );

            var requiredResources006 = {
               'asset' : {
                  'artifactId' : 'AssetDataManager.AssetMeterViewList_asset',
                  'id' : 'aw932d3be8',
                  'related' : {
                     'assetmeterlist' : {
                        'artifactId' : 'AssetDataManager.AssetMeterViewList_asset_assetmeterlist',
                        'id' : 'awcdb15d76',
                     },
                  },
               },
            };
            view010.addRequiredResources( requiredResources006 );


            var listItemTemplate003 = new ListItemTemplate({
               'layout' : 'MeterList',
               'cssClass' : '.mblListItem .mblDomButtonArrow',
               'artifactId' : 'AssetDataManager.AssetMeterList_AssetMeters_listItemTemplate',
               'id' : 'awa7b5a004',
            });

            var listtext008 = new ListText({
               'resourceAttribute' : 'lastreadingdate',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'AssetDataManager.AssetMeterList_AssetMeters_lastreadingdate',
               'id' : 'awc54deb5',
            });
            listItemTemplate003.addChild( listtext008 );


            var listtext009 = new ListText({
               'resourceAttribute' : 'metername',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'AssetDataManager.AssetMeterList_AssetMeters_metername',
               'id' : 'aw85e6a857',
            });
            listItemTemplate003.addChild( listtext009 );


            var listtext010 = new ListText({
               'resourceAttribute' : 'meterdesc',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'AssetDataManager.AssetMeterList_AssetMeters_meterdesc',
               'id' : 'awd0707a05',
            });
            listItemTemplate003.addChild( listtext010 );


            var listtext011 = new ListText({
               'resourceAttribute' : 'lastreading',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'AssetDataManager.AssetMeterList_AssetMeters_lastreading',
               'id' : 'aw4646a069',
            });
            listItemTemplate003.addChild( listtext011 );



            var list003 = new List({
               'resource' : 'asset',
               'transitionTo' : 'AssetDataManager.AssetMeterDetailView',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate003,
               'artifactId' : 'AssetDataManager.AssetMeterList',
               'attribute' : 'assetmeterlist',
               'id' : 'aw5c317133',
               'label' : MessageService.createStaticMessage('Meters'),
               'collapsible' : 'true',
            });
            view010.addChild( list003 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.AssetMeterDetailView', false);
               trackTimer.startTracking();
            }

            var view011 = new View({
               'id' : 'AssetDataManager.AssetMeterDetailView',
               'label' : MessageService.createStaticMessage('Meter Details'),
            });
            ui001.addChild( view011 );

            var requiredResources007 = {
               'asset' : {
                  'artifactId' : 'AssetDataManager.AssetMeterDetailView_asset',
                  'id' : 'awedf4b9e1',
                  'related' : {
                     'assetmeterlist' : {
                        'artifactId' : 'AssetDataManager.AssetMeterDetailView_asset_assetmeterlist',
                        'id' : 'aw3ad02b32',
                     },
                  },
               },
               'tempAssetMeter' : {
                  'reload' : true,
                  'artifactId' : 'AssetDataManager.AssetMeterDetailView_tempAssetMeter',
                  'id' : 'aw8199ff4c',
               },
               'meterCharacteristics' : {
                  'reload' : true,
                  'artifactId' : 'AssetDataManager.AssetMeterDetailView_meterCharacteristics',
                  'id' : 'aw2849ea1f',
               },
               'metertypes' : {
                  'artifactId' : 'AssetDataManager.AssetMeterDetailView_metertypes',
                  'id' : 'aw6c990193',
               },
               'readingtypes' : {
                  'artifactId' : 'AssetDataManager.AssetMeterDetailView_readingtypes',
                  'id' : 'aw23ee7987',
               },
            };
            view011.addRequiredResources( requiredResources007 );

            var container017 = new Container({
               'resource' : 'tempAssetMeter',
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_container_0',
               'id' : 'aw2d3b6339',
            });
            view011.addChild( container017 );


            var group013 = new Group({
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_group_0',
               'id' : 'awf57724e6',
            });
            container017.addChild( group013 );


            var groupitem057 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_0',
               'id' : 'aw68e0f22a',
            });
            group013.addChild( groupitem057 );


            var groupitem058 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_1',
               'id' : 'aw1fe7c2bc',
            });
            group013.addChild( groupitem058 );


            var text079 = new Text({
               'resourceAttribute' : 'metername',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_1_metername_Meter',
               'id' : 'aw1df1356d',
               'label' : MessageService.createStaticMessage('Meter'),
            });
            groupitem058.addChild( text079 );


            var text080 = new Text({
               'resourceAttribute' : 'meterdesc',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_1_meterdesc',
               'id' : 'aw6d37578f',
            });
            groupitem058.addChild( text080 );


            var groupitem059 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_2',
               'id' : 'aw86ee9306',
            });
            group013.addChild( groupitem059 );


            var text081 = new Text({
               'resourceAttribute' : 'metertype',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_2_metertype_MeterType',
               'id' : 'aw1a89b126',
               'label' : MessageService.createStaticMessage('Meter Type'),
            });
            groupitem059.addChild( text081 );


            var groupitem060 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_3',
               'id' : 'awf1e9a390',
            });
            group013.addChild( groupitem060 );


            var text082 = new Text({
               'resourceAttribute' : 'newreading',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_3_newreading_NewReading',
               'id' : 'awf6ce38c2',
               'label' : MessageService.createStaticMessage('New Reading'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem060.addChild( text082 );

            var eventHandlers045 = [
               {
                     'method' : 'validateNewReading',
                     'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_3_newreading_NewReading_eventHandlers_validate_validateNewReading',
                     'id' : 'awf789a8f5',
                     'event' : 'validate',
                     'class' : 'application.handlers.MeterReadingsHandler',
               },
               {
                     'method' : 'showNewReading',
                     'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_3_newreading_NewReading_eventHandlers_render_showNewReading',
                     'id' : 'aw9f25d134',
                     'event' : 'render',
                     'class' : 'application.handlers.MeterReadingsHandler',
               }
            ];
            text082.eventHandlers = eventHandlers045;

            var text083 = new Text({
               'resourceAttribute' : 'newreadinglookup',
               'lookup' : 'AssetDataManager.characteristicsDomainLookup',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_3_newreadinglookup_NewReading',
               'id' : 'aw83d0242a',
               'label' : MessageService.createStaticMessage('New Reading'),
               'lookupAttribute' : 'value',
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
            });
            groupitem060.addChild( text083 );

            var eventHandlers046 = [
               {
                     'method' : 'validateNewReadingFromLookup',
                     'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_3_newreadinglookup_NewReading_eventHandlers_validate_validateNewReadingFromLookup',
                     'id' : 'aw7634a4e0',
                     'event' : 'validate',
                     'class' : 'application.handlers.MeterReadingsHandler',
               },
               {
                     'method' : 'showNewReadingWithLookup',
                     'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_3_newreadinglookup_NewReading_eventHandlers_render_showNewReadingWithLookup',
                     'id' : 'aw833b9fab',
                     'event' : 'render',
                     'class' : 'application.handlers.MeterReadingsHandler',
               }
            ];
            text083.eventHandlers = eventHandlers046;

            var groupitem061 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_4',
               'id' : 'aw6f8d3633',
            });
            group013.addChild( groupitem061 );


            var text084 = new Text({
               'resourceAttribute' : 'newreadingdate',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_4_newreadingdate_NewReadingDate',
               'id' : 'awfa23b86f',
               'label' : MessageService.createStaticMessage('New Reading Date'),
               'placeHolder' : MessageService.createStaticMessage('Select'),
            });
            groupitem061.addChild( text084 );


            var groupitem062 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_5',
               'id' : 'aw188a06a5',
            });
            group013.addChild( groupitem062 );


            var checkbox003 = new CheckBox({
               'resourceAttribute' : 'dorollover',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_dorollover_checkbox',
               'id' : 'aw7dc988e9',
               'label' : MessageService.createStaticMessage('Rollover'),
            });
            groupitem062.addChild( checkbox003 );

            var eventHandlers047 = [
               {
                     'method' : 'showDoRollover',
                     'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_5_eventHandlers_render_showDoRollover',
                     'id' : 'aw4b211b02',
                     'event' : 'render',
                     'class' : 'application.handlers.MeterReadingsHandler',
               }
            ];
            groupitem062.eventHandlers = eventHandlers047;

            var groupitem063 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_6',
               'id' : 'aw8183571f',
            });
            group013.addChild( groupitem063 );


            var checkbox004 = new CheckBox({
               'resourceAttribute' : 'isdelta',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_isdelta_checkbox',
               'id' : 'awf0044aa3',
               'label' : MessageService.createStaticMessage('Delta'),
            });
            groupitem063.addChild( checkbox004 );

            var eventHandlers048 = [
               {
                     'method' : 'showIsDelta',
                     'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_6_eventHandlers_render_showIsDelta',
                     'id' : 'aw5c3f118a',
                     'event' : 'render',
                     'class' : 'application.handlers.MeterReadingsHandler',
               }
            ];
            groupitem063.eventHandlers = eventHandlers048;

            var groupitem064 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_7',
               'id' : 'awf6846789',
            });
            group013.addChild( groupitem064 );


            var text085 = new Text({
               'resourceAttribute' : 'remarks',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_7_remarks_Notes',
               'id' : 'aw467e0ca1',
               'label' : MessageService.createStaticMessage('Notes'),
            });
            groupitem064.addChild( text085 );


            var groupitem065 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_8',
               'id' : 'aw663b7a18',
            });
            group013.addChild( groupitem065 );


            var text086 = new Text({
               'resourceAttribute' : 'lastreading',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_8_lastreading_LastReading',
               'id' : 'aw236a0ca6',
               'label' : MessageService.createStaticMessage('Last Reading'),
            });
            groupitem065.addChild( text086 );


            var text087 = new Text({
               'resourceAttribute' : 'lastreadingdate',
               'editable' : false,
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_8_lastreadingdate_LastReadingDate',
               'id' : 'aw9f557af8',
               'label' : MessageService.createStaticMessage('Last Reading Date'),
            });
            groupitem065.addChild( text087 );


            var groupitem066 = new GroupItem({
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_9',
               'id' : 'aw113c4a8e',
            });
            group013.addChild( groupitem066 );


            var text088 = new Text({
               'resourceAttribute' : 'inspector',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_groupitem_9_inspector_RecordedBy',
               'id' : 'awa923abf1',
               'label' : MessageService.createStaticMessage('Recorded By'),
            });
            groupitem066.addChild( text088 );

            var eventHandlers049 = [
               {
                     'method' : 'setTempAssetMeter',
                     'artifactId' : 'AssetDataManager.AssetMeterDetailView_eventHandlers_initialize_setTempAssetMeter',
                     'id' : 'awb0672997',
                     'event' : 'render',
                     'class' : 'application.handlers.MeterReadingsHandler',
               }
            ];
            container017.eventHandlers = eventHandlers049;

            var footer004 = new Footer({
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_footer',
               'id' : 'aw570e9181',
            });
            view011.addChild( footer004 );


            var button011 = new Button({
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_Cancel_button',
               'id' : 'awf829abd4',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers050 = [
               {
                     'method' : 'cancelEntry',
                     'artifactId' : 'AssetDataManager.AssetMeterDetailView_Cancel_button_eventHandlers_click_cancelEntry',
                     'id' : 'awe21c96f4',
                     'event' : 'click',
                     'class' : 'application.handlers.MeterReadingsHandler',
               }
            ];
            button011.eventHandlers = eventHandlers050;
            footer004.addChild( button011 );


            var button012 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'AssetDataManager.AssetMeterDetailView_Save_button',
               'id' : 'aw8687475d',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers051 = [
               {
                     'method' : 'commitEntry',
                     'artifactId' : 'AssetDataManager.AssetMeterDetailView_Save_button_eventHandlers_click_commitEntry',
                     'id' : 'aw22bdee6a',
                     'event' : 'click',
                     'class' : 'application.handlers.MeterReadingsHandler',
               }
            ];
            button012.eventHandlers = eventHandlers051;
            footer004.addChild( button012 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.ReportDowntimeView', false);
               trackTimer.startTracking();
            }

            var view012 = new View({
               'resource' : 'asset',
               'id' : 'AssetDataManager.ReportDowntimeView',
               'label' : MessageService.createStaticMessage('Report Asset Downtime'),
            });
            ui001.addChild( view012 );

            var requiredResources008 = {
               'asset' : {
                  'artifactId' : 'AssetDataManager.ReportDowntimeView_asset',
                  'id' : 'awd8fbdbe7',
                  'related' : {
                     'downtimereport' : {
                        'artifactId' : 'AssetDataManager.ReportDowntimeView_asset_downtimereport',
                        'id' : 'awd0b0ecb4',
                     },
                  },
               },
               'tempReportDowntimeResource' : {
                  'artifactId' : 'AssetDataManager.DowntimeStatusView_tempReportDowntimeResource',
                  'id' : 'aw31a9e4cc',
               },
            };
            view012.addRequiredResources( requiredResources008 );

            var container018 = new Container({
               'resource' : 'asset',
               'artifactId' : 'AssetDataManager.ReportDowntimeView_assetdowntime_container_0',
               'id' : 'aw73cbc834',
            });
            view012.addChild( container018 );


            var group014 = new Group({
               'artifactId' : 'AssetDataManager.ReportDowntimeView_group_0',
               'id' : 'aw91b61b',
            });
            container018.addChild( group014 );


            var groupitem067 = new GroupItem({
               'artifactId' : 'AssetDataManager.ReportDowntimeView_asset_groupitem_1',
               'id' : 'aw61c8c30f',
            });
            group014.addChild( groupitem067 );


            var text089 = new Text({
               'resourceAttribute' : 'assetnum',
               'editable' : false,
               'artifactId' : 'AssetDataManager.ReportDowntimeView_asset_groupitem_1_Asset',
               'id' : 'awec59dee4',
               'label' : MessageService.createStaticMessage('Asset'),
            });
            groupitem067.addChild( text089 );


            var text090 = new Text({
               'resourceAttribute' : 'description',
               'editable' : false,
               'artifactId' : 'AssetDataManager.ReportDowntimeView_asset_groupitem_1_description',
               'id' : 'aw59f6fc6a',
            });
            groupitem067.addChild( text090 );


            var container019 = new Container({
               'resource' : 'tempReportDowntimeResource',
               'artifactId' : 'AssetDataManager.ReportDowntimeView_assetdowntime_container_1',
               'id' : 'aw4ccf8a2',
            });
            view012.addChild( container019 );


            var group015 = new Group({
               'artifactId' : 'AssetDataManager.ReportDowntimeView_group_1',
               'id' : 'aw7796868d',
            });
            container019.addChild( group015 );


            var groupitem068 = new GroupItem({
               'artifactId' : 'AssetDataManager.ReportDowntimeView_asset_groupitem_2',
               'id' : 'awf8c192b5',
            });
            group015.addChild( groupitem068 );


            var checkbox005 = new CheckBox({
               'resourceAttribute' : 'ischangestatus',
               'cssClass' : 'rightCheckBox',
               'editable' : true,
               'artifactId' : 'AssetDataManager.ReportDowntimeView_asset_groupitem_2_ischangestatus_checkbox',
               'id' : 'aw95f575a8',
               'label' : MessageService.createStaticMessage('Change Downtime Status'),
            });
            groupitem068.addChild( checkbox005 );

            var eventHandlers052 = [
               {
                     'method' : 'updateDefaults',
                     'artifactId' : 'AssetDataManager.ReportDowntimeView_ischangestatus_checkbox_eventHandlers_validate_updateDefaults',
                     'id' : 'awabed829a',
                     'event' : 'validate',
                     'class' : 'application.handlers.ReportDowntimeHandler',
               }
            ];
            checkbox005.eventHandlers = eventHandlers052;

            var groupitem069 = new GroupItem({
               'artifactId' : 'AssetDataManager.ReportDowntimeView_asset_groupitem_3',
               'id' : 'aw8fc6a223',
            });
            group015.addChild( groupitem069 );


            var text091 = new Text({
               'resourceAttribute' : 'startdate',
               'editable' : true,
               'artifactId' : 'AssetDataManager..ReportDowntimeView_asset_groupitem_3_starttime_StartTime',
               'id' : 'awff544716',
               'label' : MessageService.createStaticMessage('Start Date'),
               'placeHolder' : MessageService.createStaticMessage('Select'),
            });
            groupitem069.addChild( text091 );


            var groupitem070 = new GroupItem({
               'artifactId' : 'AssetDataManager.ReportDowntimeView_asset_groupitem_5',
               'id' : 'aw66a50716',
            });
            group015.addChild( groupitem070 );


            var text092 = new Text({
               'resourceAttribute' : 'enddate',
               'editable' : true,
               'artifactId' : 'AssetDataManager.ReportDowntimeView_asset_groupitem_5_EndTime',
               'id' : 'aw6f69378f',
               'label' : MessageService.createStaticMessage('End Date'),
               'placeHolder' : MessageService.createStaticMessage('Select'),
            });
            groupitem070.addChild( text092 );


            var groupitem071 = new GroupItem({
               'artifactId' : 'AssetDataManager.ReportDowntimeView_asset_groupitem_6',
               'id' : 'awffac56ac',
            });
            group015.addChild( groupitem071 );


            var text093 = new Text({
               'resourceAttribute' : 'downtimecode',
               'lookup' : 'AssetDataManager.DowntimeCodeLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.ReportDowntimeView_asset_groupitem_6_Code',
               'id' : 'aw92f59422',
               'label' : MessageService.createStaticMessage('Downtime Code'),
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
            });
            groupitem071.addChild( text093 );


            var footer005 = new Footer({
               'artifactId' : 'AssetDataManager.ReportDowntimeView_footer',
               'id' : 'awbe583bd6',
            });
            view012.addChild( footer005 );


            var button013 = new Button({
               'artifactId' : 'AssetDataManager.ReportDowntimeView_Cancel_button',
               'id' : 'awbaf87abc',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers053 = [
               {
                     'method' : 'cancelDowntime',
                     'artifactId' : 'AssetDataManager.ReportDowntimeView_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'aw87ef23c9',
                     'event' : 'click',
                     'class' : 'application.handlers.ReportDowntimeHandler',
               }
            ];
            button013.eventHandlers = eventHandlers053;
            footer005.addChild( button013 );


            var button014 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'AssetDataManager.ReportDowntimeView_Save_button',
               'id' : 'awc9efb740',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers054 = [
               {
                     'method' : 'saveDowntime',
                     'artifactId' : 'AssetDataManager.ReportDowntimeView_Save_button_eventHandlers_click_save',
                     'id' : 'awbbe268bd',
                     'event' : 'click',
                     'class' : 'application.handlers.ReportDowntimeHandler',
               }
            ];
            button014.eventHandlers = eventHandlers054;
            footer005.addChild( button014 );

            var eventHandlers055 = [
               {
                     'method' : 'initReportDowntimeView',
                     'artifactId' : 'AssetDataManager.ReportDowntimeView_eventHandlers_initialize_initReportDowntimeView',
                     'id' : 'awdde0acde',
                     'event' : 'initialize',
                     'class' : 'application.handlers.ReportDowntimeHandler',
               },
               {
                     'method' : 'handleBackButtonClick',
                     'artifactId' : 'AssetDataManager.ReportDowntimeView_eventHandlers_cleanup_handleBackButtonClick',
                     'id' : 'aw16ce2af0',
                     'event' : 'cleanup',
                     'class' : 'application.handlers.ReportDowntimeHandler',
               }
            ];
            view012.eventHandlers = eventHandlers055;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.EditStatusView', false);
               trackTimer.startTracking();
            }

            var view013 = new View({
               'resource' : 'asset',
               'showOverflow' : false,
               'id' : 'AssetDataManager.EditStatusView',
               'label' : MessageService.createStaticMessage('Change Status'),
            });
            ui001.addChild( view013 );

            var requiredResources009 = {
               'statusChangeResource' : {
                  'artifactId' : 'AssetDataManager.EditStatusView_statusChangeResource',
                  'id' : 'aw57bed1aa',
               },
               'domainAssetStatus' : {
                  'artifactId' : 'AssetDataManager.EditStatusView_domainAssetstatus',
                  'id' : 'aw1bd71c44',
               },
            };
            view013.addRequiredResources( requiredResources009 );

            var container020 = new Container({
               'resource' : 'asset',
               'artifactId' : 'AssetDataManager.EditStatusView_asset_container_0',
               'id' : 'awda3040c3',
            });
            view013.addChild( container020 );


            var group016 = new Group({
               'artifactId' : 'AssetDataManager.EditStatusView_group_0',
               'id' : 'awe9357b5e',
            });
            container020.addChild( group016 );


            var groupitem072 = new GroupItem({
               'artifactId' : 'AssetDataManager.EditStatusView_asset_groupitem_0',
               'id' : 'aw9febd1d0',
            });
            group016.addChild( groupitem072 );


            var text094 = new Text({
               'resourceAttribute' : 'assetnum',
               'editable' : false,
               'artifactId' : 'AssetDataManager.EditStatusView_asset_groupitem_0_wonum_asset',
               'id' : 'aw29a99de5',
               'label' : MessageService.createStaticMessage('Asset'),
            });
            groupitem072.addChild( text094 );


            var text095 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'artifactId' : 'AssetDataManager.EditStatusView_asset_groupitem_0_statusdesc_Status',
               'id' : 'awb132e89f',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem072.addChild( text095 );


            var container021 = new Container({
               'resource' : 'statusChangeResource',
               'artifactId' : 'AssetDataManager.EditStatusView_statusChangeResource_container_0',
               'id' : 'awde088f6a',
            });
            view013.addChild( container021 );


            var group017 = new Group({
               'artifactId' : 'AssetDataManager.EditStatusView_group_1',
               'id' : 'aw9e324bc8',
            });
            container021.addChild( group017 );


            var groupitem073 = new GroupItem({
               'artifactId' : 'AssetDataManager.EditStatusView_statusChangeResource_groupitem_1',
               'id' : 'awecd42eef',
            });
            group017.addChild( groupitem073 );


            var text096 = new Text({
               'resourceAttribute' : 'statusdesc',
               'lookup' : 'AssetDataManager.statusLookup',
               'editable' : false,
               'artifactId' : 'AssetDataManager.EditStatusView_statusChangeResource_groupitem_1_statusdesc_NewStatus',
               'id' : 'awb6a99c2b',
               'label' : MessageService.createStaticMessage('New Status'),
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
               'required' : true,
            });
            groupitem073.addChild( text096 );


            var groupitem074 = new GroupItem({
               'artifactId' : 'AssetDataManager.EditStatusView_statusChangeResource_groupitem_2',
               'id' : 'aw75dd7f55',
            });
            group017.addChild( groupitem074 );


            var checkbox006 = new CheckBox({
               'resourceAttribute' : 'rolltoallchildren',
               'artifactId' : 'AssetDataManager.EditStatusView_rolltoallchildren',
               'id' : 'aw60263bd0',
               'label' : MessageService.createStaticMessage('Roll New Status to All Child Assets?'),
            });
            groupitem074.addChild( checkbox006 );


            var groupitem075 = new GroupItem({
               'artifactId' : 'AssetDataManager.EditStatusView_statusChangeResource_groupitem_3',
               'id' : 'aw2da4fc3',
            });
            group017.addChild( groupitem075 );


            var checkbox007 = new CheckBox({
               'resourceAttribute' : 'removefromactiveroutes',
               'artifactId' : 'AssetDataManager.EditStatusView_removefromactiveroutes',
               'id' : 'aw5cc3b695',
               'label' : MessageService.createStaticMessage('Remove Asset Reference from Active Routes?'),
            });
            groupitem075.addChild( checkbox007 );


            var groupitem076 = new GroupItem({
               'artifactId' : 'AssetDataManager.EditStatusView_statusChangeResource_groupitem_4',
               'id' : 'aw9cbeda60',
            });
            group017.addChild( groupitem076 );


            var checkbox008 = new CheckBox({
               'resourceAttribute' : 'removefromactivesp',
               'artifactId' : 'AssetDataManager.EditStatusView_removefromactivesp',
               'id' : 'aw257571de',
               'label' : MessageService.createStaticMessage('Remove Asset Reference from Active Safety Plans?'),
            });
            groupitem076.addChild( checkbox008 );


            var groupitem077 = new GroupItem({
               'artifactId' : 'AssetDataManager.EditStatusView_statusChangeResource_groupitem_5',
               'id' : 'awebb9eaf6',
            });
            group017.addChild( groupitem077 );


            var checkbox009 = new CheckBox({
               'resourceAttribute' : 'changepmstatus',
               'artifactId' : 'AssetDataManager.EditStatusView_changepmstatus',
               'id' : 'awc994ad0e',
               'label' : MessageService.createStaticMessage('Change the Status of All Associated PMs to Inactive?'),
            });
            groupitem077.addChild( checkbox009 );


            var footer006 = new Footer({
               'artifactId' : 'AssetDataManager.EditStatusView_footer',
               'id' : 'aw79304bd0',
            });
            view013.addChild( footer006 );


            var button015 = new Button({
               'resource' : 'asset',
               'artifactId' : 'AssetDataManager.EditStatusView_Cancel_button',
               'id' : 'aw90d2a874',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers056 = [
               {
                     'method' : 'discardStatusChange',
                     'artifactId' : 'AssetDataManager.EditStatusView_Cancel_button_eventHandlers_click_discardStatusChange',
                     'id' : 'aw544e692a',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button015.eventHandlers = eventHandlers056;
            footer006.addChild( button015 );


            var button016 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'resource' : 'asset',
               'artifactId' : 'AssetDataManager.EditStatusView_Save_button',
               'id' : 'awefef396d',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers057 = [
               {
                     'method' : 'commitAssetStatusChange',
                     'artifactId' : 'AssetDataManager.EditStatusView_Save_button_eventHandlers_click_commitAssetStatusChange',
                     'id' : 'awd459346d',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button016.eventHandlers = eventHandlers057;
            footer006.addChild( button016 );

            var eventHandlers058 = [
               {
                     'method' : 'initEditStatusView',
                     'artifactId' : 'AssetDataManager.EditStatusView_eventHandlers_initialize_initEditStatusView',
                     'id' : 'aw8c17fafd',
                     'event' : 'initialize',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'cleanupEditStatusView',
                     'artifactId' : 'AssetDataManager.EditStatusView_eventHandlers_cleanup_cleanupEditStatusView',
                     'id' : 'aw340f5f41',
                     'event' : 'cleanup',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            view013.eventHandlers = eventHandlers058;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.SearchAssetView', false);
               trackTimer.startTracking();
            }

            var view014 = new View({
               'id' : 'AssetDataManager.SearchAssetView',
               'label' : MessageService.createStaticMessage('Search Assets'),
            });
            ui001.addChild( view014 );

            var requiredResources010 = {
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
            view014.addRequiredResources( requiredResources010 );

            var container022 = new Container({
               'resource' : 'searchAsset',
               'artifactId' : 'AssetDataManager.SearchAssetView_searchAsset_container_0',
               'id' : 'aw414138c8',
            });
            view014.addChild( container022 );


            var group018 = new Group({
               'artifactId' : 'AssetDataManager.SearchAssetView_group_0',
               'id' : 'awff67c475',
            });
            container022.addChild( group018 );


            var groupitem078 = new GroupItem({
               'artifactId' : 'AssetDataManager.SearchAssetView_searchAsset_groupitem_0',
               'id' : 'aw49aa9db',
            });
            group018.addChild( groupitem078 );


            var text097 = new Text({
               'resourceAttribute' : 'assetnum',
               'editable' : true,
               'artifactId' : 'AssetDataManager.SearchAssetView_searchAsset_groupitem_0_assetnum_asset',
               'id' : 'awe661eddc',
               'label' : MessageService.createStaticMessage('Asset'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem078.addChild( text097 );


            var groupitem079 = new GroupItem({
               'artifactId' : 'AssetDataManager.SearchAssetView_searchAsset_groupitem_1',
               'id' : 'aw739d994d',
            });
            group018.addChild( groupitem079 );


            var text098 = new Text({
               'resourceAttribute' : 'description',
               'editable' : true,
               'artifactId' : 'AssetDataManager.SearchAssetView_searchAsset_groupitem_1_description_Description',
               'id' : 'awa6bab3e0',
               'label' : MessageService.createStaticMessage('Description'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem079.addChild( text098 );


            var groupitem080 = new GroupItem({
               'artifactId' : 'AssetDataManager.SearchAssetView_searchAsset_groupitem_2',
               'id' : 'awea94c8f7',
            });
            group018.addChild( groupitem080 );


            var text099 = new Text({
               'resourceAttribute' : 'status',
               'lookup' : 'AssetDataManager.statusLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.SearchAssetView_searchAsset_groupitem_2_statusdesc_Status',
               'id' : 'aw1feaf76f',
               'label' : MessageService.createStaticMessage('Status'),
               'placeHolder' : MessageService.createStaticMessage('Tap to select from list'),
            });
            groupitem080.addChild( text099 );


            var groupitem081 = new GroupItem({
               'artifactId' : 'AssetDataManager.SearchAssetView_searchAsset_groupitem_3',
               'id' : 'aw9d93f861',
            });
            group018.addChild( groupitem081 );


            var text100 = new Text({
               'resourceAttribute' : 'parent',
               'lookup' : 'AssetDataManager.ParentLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.SearchAssetView_searchAsset_groupitem_3_asset_Asset',
               'id' : 'aw9939d92c',
               'label' : MessageService.createStaticMessage('Parent'),
               'codeScannable' : true,
               'lookupAttribute' : 'parent',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem081.addChild( text100 );


            var groupitem082 = new GroupItem({
               'artifactId' : 'AssetDataManager.SearchAssetView_searchAsset_groupitem_4',
               'id' : 'aw3f76dc2',
            });
            group018.addChild( groupitem082 );


            var text101 = new Text({
               'resourceAttribute' : 'location',
               'lookup' : 'AssetDataManager.LocationLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.SearchAssetView_searchAsset_groupitem_4_location_Location',
               'id' : 'awa56eba00',
               'label' : MessageService.createStaticMessage('Location'),
               'codeScannable' : true,
               'lookupAttribute' : 'location',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem082.addChild( text101 );


            var groupitem083 = new GroupItem({
               'artifactId' : 'AssetDataManager.SearchAssetView_searchAsset_groupitem_5',
               'id' : 'aw74f05d54',
            });
            group018.addChild( groupitem083 );


            var text102 = new Text({
               'resourceAttribute' : 'priority',
               'editable' : true,
               'artifactId' : 'AssetDataManager.SearchAssetView_searchAsset_groupitem_5_priority_Priority',
               'id' : 'aw6744cc0a',
               'label' : MessageService.createStaticMessage('Priority'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem083.addChild( text102 );


            var footer007 = new Footer({
               'artifactId' : 'AssetDataManager.SearchAssetView_footer',
               'id' : 'aw4740250f',
            });
            view014.addChild( footer007 );


            var button017 = new Button({
               'artifactId' : 'AssetDataManager.SearchAssetView_Clear_button',
               'id' : 'aw1ca14094',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers059 = [
               {
                     'method' : 'clearSearchFields',
                     'artifactId' : 'AssetDataManager.SearchAssetView_Clear_button_eventHandlers_click_clearSearchFields',
                     'id' : 'awe368ece',
                     'event' : 'click',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            button017.eventHandlers = eventHandlers059;
            footer007.addChild( button017 );


            var button018 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'AssetDataManager.SearchAssetView_Search_button',
               'id' : 'awd442e6a',
               'label' : MessageService.createStaticMessage('Search'),
               'primary' : 'true',
            });
            var eventHandlers060 = [
               {
                     'method' : 'setSearchQuery',
                     'artifactId' : 'AssetDataManager.SearchAssetView_Search_button_eventHandlers_click_setSearchQuery',
                     'id' : 'aw4f519455',
                     'event' : 'click',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            button018.eventHandlers = eventHandlers060;
            footer007.addChild( button018 );

            var eventHandlers061 = [
               {
                     'method' : 'initSearchData',
                     'artifactId' : 'AssetDataManager.SearchAssetView_eventHandlers_initialize_initSearchData',
                     'id' : 'aw9c4b55f7',
                     'event' : 'initialize',
                     'class' : 'application.handlers.AssetDetailHandler',
               },
               {
                     'method' : 'showSearch',
                     'artifactId' : 'AssetDataManager.SearchAssetView_eventHandlers_show_showSearch',
                     'id' : 'aw450d7520',
                     'event' : 'show',
                     'class' : 'application.handlers.AssetDetailHandler',
               },
               {
                     'method' : 'hideSearch',
                     'artifactId' : 'AssetDataManager.SearchAssetView_eventHandlers_hide_hideSearch',
                     'id' : 'aw20609eca',
                     'event' : 'hide',
                     'class' : 'application.handlers.AssetDetailHandler',
               },
               {
                     'method' : 'discardSummaryView',
                     'artifactId' : 'AssetDataManager.SearchAssetView_eventHandlers_cleanup_discardSummaryView',
                     'id' : 'aw916bff',
                     'event' : 'cleanup',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            view014.eventHandlers = eventHandlers061;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.AssetMoveView', false);
               trackTimer.startTracking();
            }

            var view015 = new View({
               'resource' : 'assetmoveresource',
               'id' : 'AssetDataManager.AssetMoveView',
               'label' : MessageService.createStaticMessage('Move'),
            });
            ui001.addChild( view015 );

            var requiredResources011 = {
               'asset' : {
                  'artifactId' : 'AssetDataManager.AssetMoveView_asset',
                  'id' : 'aw92359a5a',
                  'related' : {
                     'assetmovedflt' : {
                        'reload' : true,
                        'artifactId' : 'AssetDataManager.AssetMoveView_assetmovedflt',
                        'id' : 'awc98a22b4',
                     },
                  },
               },
               'assetmoveresource' : {
                  'artifactId' : 'AssetDataManager.AssetMoveView_localAssetMove',
                  'id' : 'aw8aaaee7',
               },
               'domainLocationType' : {
                  'artifactId' : 'AssetDataManager.AssetMoveView_locationType',
                  'id' : 'aw549b9fe3',
               },
            };
            view015.addRequiredResources( requiredResources011 );

            var container023 = new Container({
               'resource' : 'assetmoveresource',
               'artifactId' : 'AssetDataManager.AssetMoveView_AssetDataManager_container_1',
               'id' : 'aw3832cf71',
            });
            view015.addChild( container023 );


            var group019 = new Group({
               'artifactId' : 'AssetDataManager.AssetMoveView_group_1',
               'id' : 'aw27266db0',
            });
            container023.addChild( group019 );


            var groupitem084 = new GroupItem({
               'layout' : 'AssetMove',
               'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_4',
               'id' : 'awc1ef1e2e',
            });
            group019.addChild( groupitem084 );


            var text103 = new Text({
               'resourceAttribute' : 'site',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_4__Site',
               'id' : 'awe26bdae1',
               'label' : MessageService.createStaticMessage('Site'),
            });
            groupitem084.addChild( text103 );


            var text104 = new Text({
               'resourceAttribute' : 'toSite',
               'lookup' : 'AssetDataManager.AssetMove.SiteLookup',
               'editable' : true,
               'layoutInsertAt' : 'item2',
               'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_4__SiteTo',
               'id' : 'aw6360ed6a',
               'label' : MessageService.createStaticMessage('To Site'),
            });
            groupitem084.addChild( text104 );

            var eventHandlers062 = [
               {
                     'method' : 'setSite',
                     'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_1__SiteTo_eventHandlers_validate_toSite',
                     'id' : 'aw56a2b8c2',
                     'event' : 'validate',
                     'class' : 'application.handlers.AssetMoveHandler',
               }
            ];
            text104.eventHandlers = eventHandlers062;

            var groupitem085 = new GroupItem({
               'layout' : 'AssetMove',
               'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_2',
               'id' : 'aw288cbb1b',
            });
            group019.addChild( groupitem085 );


            var text105 = new Text({
               'resourceAttribute' : 'location',
               'editable' : false,
               'layoutInsertAt' : 'item3',
               'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_2__Location',
               'id' : 'aw290dccd1',
               'label' : MessageService.createStaticMessage('Location'),
            });
            groupitem085.addChild( text105 );


            var text106 = new Text({
               'resourceAttribute' : 'toLocation',
               'lookup' : 'AssetDataManager.AssetMove.LocationLookup',
               'editable' : true,
               'layoutInsertAt' : 'item4',
               'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_2__LocationTo',
               'id' : 'aw48f2a5ae',
               'label' : MessageService.createStaticMessage('To Location'),
               'codeScannable' : true,
            });
            groupitem085.addChild( text106 );

            var eventHandlers063 = [
               {
                     'method' : 'setLocation',
                     'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_1__LoationTo_eventHandlers_validate_toLocation',
                     'id' : 'awde678e4e',
                     'event' : 'validate',
                     'class' : 'application.handlers.AssetMoveHandler',
               }
            ];
            text106.eventHandlers = eventHandlers063;

            var groupitem086 = new GroupItem({
               'layout' : 'AssetMove',
               'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_1',
               'id' : 'awb185eaa1',
            });
            group019.addChild( groupitem086 );


            var text107 = new Text({
               'resourceAttribute' : 'parent',
               'editable' : false,
               'layoutInsertAt' : 'item5',
               'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_1__Parent',
               'id' : 'aw15b4d903',
               'label' : MessageService.createStaticMessage('Parent'),
            });
            groupitem086.addChild( text107 );


            var text108 = new Text({
               'resourceAttribute' : 'toParent',
               'lookup' : 'AssetDataManager.AssetMove.ParentLookup',
               'editable' : true,
               'layoutInsertAt' : 'item6',
               'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_1__ParentTo',
               'id' : 'aw9621da61',
               'label' : MessageService.createStaticMessage('To Parent'),
               'codeScannable' : true,
            });
            groupitem086.addChild( text108 );

            var eventHandlers064 = [
               {
                     'method' : 'setParent',
                     'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_1__ParentTo_eventHandlers_validate_toParent',
                     'id' : 'aw8ce0ca19',
                     'event' : 'validate',
                     'class' : 'application.handlers.AssetMoveHandler',
               }
            ];
            text108.eventHandlers = eventHandlers064;

            var groupitem087 = new GroupItem({
               'layout' : 'AssetMove',
               'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_5',
               'id' : 'awb6e82eb8',
            });
            group019.addChild( groupitem087 );


            var text109 = new Text({
               'resourceAttribute' : 'newAsset',
               'editable' : true,
               'layoutInsertAt' : 'item7',
               'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_5__NewNumber',
               'id' : 'aw6a1f3693',
               'label' : MessageService.createStaticMessage('New Asset #'),
            });
            groupitem087.addChild( text109 );

            var eventHandlers065 = [
               {
                     'method' : 'showNewAsset',
                     'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_5__eventHandlers_redner',
                     'id' : 'aw8f87278a',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetMoveHandler',
               }
            ];
            groupitem087.eventHandlers = eventHandlers065;

            var groupitem088 = new GroupItem({
               'layout' : 'AssetMove',
               'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_3',
               'id' : 'aw5f8b8b8d',
            });
            group019.addChild( groupitem088 );


            var text110 = new Text({
               'resourceAttribute' : 'toBin',
               'editable' : true,
               'layoutInsertAt' : 'item8',
               'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_3__BinTo',
               'id' : 'aw5849bc4f',
               'label' : MessageService.createStaticMessage('To Bin'),
            });
            groupitem088.addChild( text110 );

            var eventHandlers066 = [
               {
                     'method' : 'setBin',
                     'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_1__binTo_eventHandlers_validate_tobin',
                     'id' : 'aw861a80e4',
                     'event' : 'validate',
                     'class' : 'application.handlers.AssetMoveHandler',
               }
            ];
            text110.eventHandlers = eventHandlers066;
            var eventHandlers067 = [
               {
                     'method' : 'hasBin',
                     'artifactId' : 'AssetDataManager.AssetMoveView_asset_groupitem_3__eventHandlers_redner2',
                     'id' : 'awa70a0144',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetMoveHandler',
               }
            ];
            groupitem088.eventHandlers = eventHandlers067;

            var footer008 = new Footer({
               'artifactId' : 'AssetDataManager.AssetMove_completeMove_footer',
               'id' : 'aw7de3e5f3',
            });
            view015.addChild( footer008 );


            var button019 = new Button({
               'artifactId' : 'AssetDataManager.AssetMove_cancelMove_button',
               'id' : 'aw838fd7a0',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers068 = [
               {
                     'method' : 'cancel',
                     'artifactId' : 'AssetDataManager.AssetMove_cancel_button_eventHandlers_click_cancel',
                     'id' : 'aw10cf3c97',
                     'event' : 'click',
                     'class' : 'application.handlers.AssetMoveHandler',
               }
            ];
            button019.eventHandlers = eventHandlers068;
            footer008.addChild( button019 );


            var button020 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'AssetDataManager.AssetMove_saveMove_button',
               'id' : 'awc7ccec33',
               'label' : MessageService.createStaticMessage('Save'),
            });
            var eventHandlers069 = [
               {
                     'method' : 'save',
                     'artifactId' : 'AssetDataManager.AssetMove_save_button_eventHandlers_click_save',
                     'id' : 'aw571817b9',
                     'event' : 'click',
                     'class' : 'application.handlers.AssetMoveHandler',
               },
               {
                     'method' : 'disableSave',
                     'artifactId' : 'AssetDataManager.AssetMove_save_button_eventHandlers_render_save',
                     'id' : 'awcd53f9b7',
                     'event' : 'render',
                     'class' : 'application.handlers.AssetMoveHandler',
               }
            ];
            button020.eventHandlers = eventHandlers069;
            footer008.addChild( button020 );

            var eventHandlers070 = [
               {
                     'method' : 'setMoveResource',
                     'artifactId' : 'AssetDataManager.AssetMoveView_move_eventHandlers_render',
                     'id' : 'awa7c8527f',
                     'event' : 'initialize',
                     'class' : 'application.handlers.AssetMoveHandler',
               }
            ];
            view015.eventHandlers = eventHandlers070;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog004 = new Dialog({
               'id' : 'AssetDataManager.RequiredSearchFieldMissing',
            });
            ui001.addChild( dialog004 );


            var container024 = new Container({
               'artifactId' : 'AssetDataManager.RequiredSearchFieldMissing_container_0',
               'id' : 'awa174fe14',
            });
            dialog004.addChild( container024 );


            var text111 = new Text({
               'editable' : false,
               'artifactId' : 'AssetDataManager.RequiredSearchFieldMissing_container_0_Somerequiredfields',
               'id' : 'awc887fc9c',
               'value' : MessageService.createStaticMessage('Some required fields are empty. Specify the missing information.'),
            });
            container024.addChild( text111 );


            var button021 = new Button({
               'artifactId' : 'AssetDataManager.RequiredSearchFieldMissing_Ok_button',
               'id' : 'awf1648459',
               'label' : MessageService.createStaticMessage('Ok'),
               'primary' : 'true',
            });
            var eventHandlers071 = [
               {
                     'method' : 'hideDialog',
                     'artifactId' : 'AssetDataManager.RequiredSearchFieldMissing_Ok_button_eventHandlers_click_hideDialog',
                     'id' : 'aw26649ccf',
                     'event' : 'click',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            button021.eventHandlers = eventHandlers071;
            container024.addChild( button021 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.ClassifyAssetView', false);
               trackTimer.startTracking();
            }

            var view016 = new View({
               'resource' : 'asset',
               'id' : 'AssetDataManager.ClassifyAssetView',
               'label' : MessageService.createStaticMessage('Classify'),
            });
            ui001.addChild( view016 );

            var requiredResources012 = {
               'classstructure' : {
                  'artifactId' : 'AssetDataManager.ClassifyAssetView_classstructure',
                  'id' : 'aw779dadc8',
               },
            };
            view016.addRequiredResources( requiredResources012 );

            var container025 = new Container({
               'artifactId' : 'AssetDataManager.ClassifyAssetView_container_0',
               'id' : 'aw3fc1489a',
            });
            view016.addChild( container025 );


            var group020 = new Group({
               'artifactId' : 'AssetDataManager.ClassifyAssetView_group_0',
               'id' : 'aw6236483b',
            });
            container025.addChild( group020 );


            var groupitem089 = new GroupItem({
               'cssClass' : 'pathContainer',
               'artifactId' : 'AssetDataManager.ClassifyAssetView_groupitem_0',
               'id' : 'aw7a1ad989',
            });
            group020.addChild( groupitem089 );


            var text112 = new Text({
               'resourceAttribute' : 'classificationpath',
               'editable' : false,
               'artifactId' : 'AssetDataManager.ClassifyAssetView_groupitem_0_classificationpath',
               'id' : 'aw650b6da0',
            });
            groupitem089.addChild( text112 );


            var text113 = new Text({
               'resourceAttribute' : 'classificationdesc',
               'editable' : false,
               'artifactId' : 'AssetDataManager.ClassifyAssetView_groupitem_0_classificationdesc',
               'id' : 'aw65ea4afb',
            });
            groupitem089.addChild( text113 );

            var eventHandlers072 = [
               {
                     'method' : 'hideIfNull',
                     'artifactId' : 'AssetDataManager.ClassifyAssetView_container_0_eventHandlers_render_hideIfNull',
                     'id' : 'aw17623244',
                     'event' : 'render',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               }
            ];
            container025.eventHandlers = eventHandlers072;


            var listItemTemplate004 = new ListItemTemplate({
               'layout' : 'FailureReportList',
               'artifactId' : 'AssetDataManager.ClassifyAssetView_classstructure_listItemTemplate_FailureReportList',
               'id' : 'awc26f8bf3',
            });

            var listtext012 = new ListText({
               'resourceAttribute' : 'fulldesc',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.ClassifyAssetView_classstructure_FailureReportList_fulldesc',
               'id' : 'aw4c3501bd',
            });
            listItemTemplate004.addChild( listtext012 );

            var eventHandlers073 = [
               {
                     'method' : 'openChildren',
                     'artifactId' : 'AssetDataManager.ClassifyAssetView_classstructure_listItemTemplate_FailureReportList_eventHandlers_click_openChildren',
                     'id' : 'awfc32e85b',
                     'event' : 'click',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               }
            ];
            listItemTemplate004.eventHandlers = eventHandlers073;


            var list004 = new List({
               'resource' : 'classstructure',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate004,
               'artifactId' : 'AssetDataManager.ClassifyAssetView_classstructure_list',
               'id' : 'awea3c2e53',
               'label' : MessageService.createStaticMessage('Classify'),
            });
            view016.addChild( list004 );


            var footer009 = new Footer({
               'visibleButtonCount' : '2',
               'artifactId' : 'AssetDataManager.ClassifyAssetView_footer',
               'id' : 'awc4bbc48a',
            });
            view016.addChild( footer009 );


            var button022 = new Button({
               'artifactId' : 'AssetDataManager.ClassifyAssetView_Cancel_button',
               'id' : 'awd1bfaf44',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers074 = [
               {
                     'method' : 'cancelClassify',
                     'artifactId' : 'AssetDataManager.ClassifyAssetView_Cancel_button_eventHandlers_click_cancelClassify',
                     'id' : 'aw831f6302',
                     'event' : 'click',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               }
            ];
            button022.eventHandlers = eventHandlers074;
            footer009.addChild( button022 );


            var button023 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'AssetDataManager.ClassifyAssetView_Clear_button',
               'id' : 'awf57c1fef',
               'label' : MessageService.createStaticMessage('Clear'),
               'primary' : 'true',
            });
            var eventHandlers075 = [
               {
                     'method' : 'hideClear',
                     'artifactId' : 'AssetDataManager.ClassifyAssetView_Clear_button_eventHandlers_render_hideClear',
                     'id' : 'aw8f7504d6',
                     'event' : 'render',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               },
               {
                     'method' : 'clearClassify',
                     'artifactId' : 'AssetDataManager.ClassifyAssetView_Clear_button_eventHandlers_click_clearClassify',
                     'id' : 'aw9a41eac8',
                     'event' : 'click',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               }
            ];
            button023.eventHandlers = eventHandlers075;
            footer009.addChild( button023 );


            var button024 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'AssetDataManager.ClassifyAssetView_Classify_button',
               'id' : 'aw51fa4279',
               'label' : MessageService.createStaticMessage('Classify'),
               'primary' : 'true',
            });
            var eventHandlers076 = [
               {
                     'method' : 'hideClassify',
                     'artifactId' : 'AssetDataManager.ClassifyAssetView_Classify_button_eventHandlers_render_hideClassify',
                     'id' : 'aw56360da9',
                     'event' : 'render',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               },
               {
                     'method' : 'saveClassify',
                     'artifactId' : 'AssetDataManager.ClassifyAssetView_Classify_button_eventHandlers_click_saveClassify',
                     'id' : 'aw6f0eb9f4',
                     'event' : 'click',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               }
            ];
            button024.eventHandlers = eventHandlers076;
            footer009.addChild( button024 );

            var eventHandlers077 = [
               {
                     'method' : 'handleClassifyBack',
                     'artifactId' : 'AssetDataManager.ClassifyAssetView_eventHandlers_back_handleClassifyBack',
                     'id' : 'aw959ea44b',
                     'event' : 'back',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               },
               {
                     'method' : 'openTop',
                     'artifactId' : 'AssetDataManager.ClassifyAssetView_eventHandlers_initialize_openTop',
                     'id' : 'awd72bfde',
                     'event' : 'initialize',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               },
               {
                     'method' : 'renderTop',
                     'artifactId' : 'AssetDataManager.ClassifyAssetView_eventHandlers_initialize_renderTop',
                     'id' : 'aw7ce242e8',
                     'event' : 'render',
                     'class' : 'application.handlers.ClassifyAssetHandler',
               }
            ];
            view016.eventHandlers = eventHandlers077;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.SpecificationsView', false);
               trackTimer.startTracking();
            }

            var view017 = new View({
               'resource' : 'asset',
               'id' : 'AssetDataManager.SpecificationsView',
               'label' : MessageService.createStaticMessage('View Specifications'),
            });
            ui001.addChild( view017 );

            var requiredResources013 = {
               'asset' : {
                  'reload' : false,
                  'artifactId' : 'AssetDataManager.SpecificationsView_asset',
                  'id' : 'aw4eea2b1a',
                  'related' : {
                     'assetSpec' : {
                        'reload' : true,
                        'artifactId' : 'AssetDataManager.SpecificationsView_asset_assetSpec',
                        'id' : 'aw3ccdf9b9',
                     },
                  },
               },
               'assetattrtypes' : {
                  'artifactId' : 'AssetDataManager.SpecificationsView_assetattrtypes',
                  'id' : 'aw4ba41c56',
               },
               'measureUnit' : {
                  'artifactId' : 'AssetDataManager.SpecificationsView_measureUnit',
                  'id' : 'aw92928ddc',
               },
               'assetSpecResource' : {
                  'artifactId' : 'AssetDataManager.SpecificationsView_assetspecresource',
                  'id' : 'aw28b2d691',
               },
               'domaintypes' : {
                  'artifactId' : 'AssetDataManager.SpecificationsView_domaintypes',
                  'id' : 'aw613028e9',
               },
            };
            view017.addRequiredResources( requiredResources013 );

            var actions005 = new Actions({
               'artifactId' : 'AssetDataManager.SpecificationsView_actions',
               'id' : 'aw84691483',
            });
            view017.addChild( actions005 );


            var action015 = new Action({
               'image' : '\/images\/header_add.png',
               'transitionTo' : 'AssetDataManager.AddSpecifications',
               'artifactId' : 'AssetDataManager.SpecificationsView_CreateSpecifications_action',
               'id' : 'awc55278b7',
               'label' : MessageService.createStaticMessage('Add Specification'),
            });
            actions005.addChild( action015 );



            var listItemTemplate005 = new ListItemTemplate({
               'artifactId' : 'AssetDataManager.SpecificationsView_listItemTemplate',
               'id' : 'aw1571cc91',
            });

            var listtext013 = new ListText({
               'resourceAttribute' : 'assetattrid',
               'cssClass' : 'specLayoutLeft editableLabel',
               'artifactId' : 'AssetDataManager.SpecificationsView_listItemTemplate_groupitem_assetattrid',
               'id' : 'awdebb4463',
               'showreqattribute' : 'mandatory',
            });
            listItemTemplate005.addChild( listtext013 );


            var listtext014 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'specLayoutRight editableLabel',
               'artifactId' : 'AssetDataManager.SpecificationsView_listItemTemplate_groupitem_description',
               'id' : 'aw9fcc0397',
            });
            listItemTemplate005.addChild( listtext014 );


            var listtext015 = new ListText({
               'resourceAttribute' : 'measureunitid',
               'cssClass' : 'specLayoutLeftReset editableLabel',
               'artifactId' : 'AssetDataManager.SpecificationsView_listItemTemplate_groupitem_measureunitid',
               'hideEmpty' : 'true',
               'id' : 'aw7361c6e3',
            });
            listItemTemplate005.addChild( listtext015 );



            var list005 = new List({
               'resource' : 'asset',
               'listItemTemplate' : listItemTemplate005,
               'artifactId' : 'AssetDataManager.SpecificationsView_asset_groupitem_assetSpec_list',
               'attribute' : 'assetSpec',
               'id' : 'aw802e1858',
               'label' : MessageService.createStaticMessage('Specifications'),
               'mixinclass' : 'SpecificationStoreList',
               'displayPageSize' : '25',
            });
            view017.addChild( list005 );


            var footer010 = new Footer({
               'artifactId' : 'AssetDataManager.SpecificationsView_footer',
               'id' : 'aw7dc2a487',
            });
            view017.addChild( footer010 );


            var button025 = new Button({
               'artifactId' : 'AssetDataManager.SpecificationsView_Cancel_button',
               'id' : 'aw2c244270',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers078 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'AssetDataManager.SpecificationsView_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'aw735e2f62',
                     'event' : 'click',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            button025.eventHandlers = eventHandlers078;
            footer010.addChild( button025 );


            var button026 = new Button({
               'resourceAttribute' : 'assetspecid',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'AssetDataManager.SpecificationsView_Create_button',
               'id' : 'awd482671c',
               'label' : MessageService.createStaticMessage('Done'),
               'primary' : 'true',
            });
            var eventHandlers079 = [
               {
                     'method' : 'commitSpecificationView',
                     'artifactId' : 'AssetDataManager.SpecificationsView_Commit_button_eventHandlers_click_commit',
                     'id' : 'awe6c373af',
                     'event' : 'click',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            button026.eventHandlers = eventHandlers079;
            footer010.addChild( button026 );

            var eventHandlers080 = [
               {
                     'method' : 'initViewSpecsView',
                     'artifactId' : 'AssetDataManager.SpecificationsView_eventHandlers_show_initSpecificationsView',
                     'id' : 'awcdcf77d5',
                     'event' : 'show',
                     'class' : 'application.handlers.AssetDetailHandler',
               },
               {
                     'method' : 'showUp',
                     'artifactId' : 'AssetDataManager.SpecificationsView_eventHandlers_show_showAssetSpecSorted',
                     'id' : 'aw9c3f3067',
                     'event' : 'show',
                     'class' : 'application.handlers.ClassificationFormHandler',
               }
            ];
            view017.eventHandlers = eventHandlers080;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'AssetDataManager.AddSpecifications', false);
               trackTimer.startTracking();
            }

            var view018 = new View({
               'resource' : 'assetSpecResource',
               'id' : 'AssetDataManager.AddSpecifications',
               'label' : MessageService.createStaticMessage('Add Specifications'),
            });
            ui001.addChild( view018 );

            var requiredResources014 = {
               'asset' : {
                  'artifactId' : 'AssetDataManager.AddSpecifications_asset',
                  'id' : 'aw6cf5f2b6',
                  'related' : {
                     'assetSpec' : {
                        'reload' : true,
                        'artifactId' : 'AssetDataManager.AddSpecifications_specificationslist',
                        'id' : 'awb779a785',
                     },
                  },
               },
               'measureUnit' : {
                  'artifactId' : 'AssetDataManager.AddSpecifications_measureUnit',
                  'id' : 'aw4b1a9426',
               },
               'assetattrtypes' : {
                  'artifactId' : 'AssetDataManager.AddSpecifications_assetattrtypes',
                  'id' : 'aw8b944883',
               },
               'assetSpecResource' : {
                  'artifactId' : 'AssetDataManager.AddSpecifications_assetspecresource',
                  'id' : 'aw5bfe8976',
               },
            };
            view018.addRequiredResources( requiredResources014 );

            var container026 = new Container({
               'resource' : 'asset',
               'artifactId' : 'AssetDataManager.AddSpecificationsView_container_0',
               'attribute' : 'assetSpec',
               'id' : 'awee0f14e5',
            });
            view018.addChild( container026 );


            var group021 = new Group({
               'artifactId' : 'AssetDataManager.AddSpecificationsView_group_0',
               'id' : 'awe3bf3129',
            });
            container026.addChild( group021 );


            var groupitem090 = new GroupItem({
               'artifactId' : 'AssetDataManager.AddSpecificationsView_groupitem_1',
               'id' : 'awdcd3b560',
            });
            group021.addChild( groupitem090 );


            var text114 = new Text({
               'resourceAttribute' : 'assetattrid',
               'lookup' : 'AssetDataManager.assetAttributeLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AddSpecificationsView_groupitem_1_metername_Meter',
               'id' : 'awa17d055e',
               'label' : MessageService.createStaticMessage('Attribute'),
               'lookupAttribute' : 'assetattrid',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem090.addChild( text114 );


            var groupitem091 = new GroupItem({
               'artifactId' : 'AssetDataManager.AddSpecificationsView_groupitem_2',
               'id' : 'aw45dae4da',
            });
            group021.addChild( groupitem091 );


            var text115 = new Text({
               'resourceAttribute' : 'uivalue',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AddSpecificationsView_groupitem_2_metername_Meter',
               'id' : 'awf2e75eda',
               'label' : MessageService.createStaticMessage('Value'),
            });
            groupitem091.addChild( text115 );


            var groupitem092 = new GroupItem({
               'artifactId' : 'AssetDataManager.AddSpecificationsView_groupitem_3',
               'id' : 'aw32ddd44c',
            });
            group021.addChild( groupitem092 );


            var text116 = new Text({
               'resourceAttribute' : 'measureunitid',
               'lookup' : 'AssetDataManager.MeasureUnitAttributeLookup',
               'editable' : true,
               'artifactId' : 'AssetDataManager.AddSpecificationsView_groupitem_3_metername_Meter',
               'id' : 'aw75419599',
               'label' : MessageService.createStaticMessage('Unit of Measure'),
               'lookupAttribute' : 'measureunitid',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem092.addChild( text116 );


            var footer011 = new Footer({
               'artifactId' : 'AssetDataManager.AddSpecifications_footer',
               'id' : 'awa280549d',
            });
            view018.addChild( footer011 );


            var button027 = new Button({
               'artifactId' : 'AssetDataManager.AddSpecifications_Cancel_button',
               'id' : 'awa61c3a0f',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers081 = [
               {
                     'method' : 'discardAddSpecView',
                     'artifactId' : 'AssetDataManager.AddSpecifications_Cancel_button_eventHandlers_click_cancel',
                     'id' : 'aw15feb70c',
                     'event' : 'click',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            button027.eventHandlers = eventHandlers081;
            footer011.addChild( button027 );


            var button028 = new Button({
               'resourceAttribute' : 'assetspecid',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'AssetDataManager.AddSpecifications_Create_button',
               'id' : 'aw5eba1f63',
               'label' : MessageService.createStaticMessage('Add'),
               'primary' : 'true',
            });
            var eventHandlers082 = [
               {
                     'method' : 'commitNewSpecificationView',
                     'artifactId' : 'AssetDataManager.AddSpecifications_Create_button_eventHandlers_click_create',
                     'id' : 'aw7de1f3e2',
                     'event' : 'click',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            button028.eventHandlers = eventHandlers082;
            footer011.addChild( button028 );

            var eventHandlers083 = [
               {
                     'method' : 'initAddSpecsView',
                     'artifactId' : 'AssetDataManager.AddSpecifications_eventHandlers_initialize_initAddSpecificationsView',
                     'id' : 'aw347b02fd',
                     'event' : 'initialize',
                     'class' : 'application.handlers.AssetDetailHandler',
               }
            ];
            view018.eventHandlers = eventHandlers083;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var lookup001 = new Lookup({
               'filterMethod' : 'filterAssetStatus',
               'resource' : 'domainAssetStatus',
               'filterClass' : 'application.handlers.StatusChangeHandler',
               'id' : 'AssetDataManager.statusLookup',
               'label' : MessageService.createStaticMessage('Asset Status'),
            });
            ui001.addChild( lookup001 );

            var requiredResources015 = {
               'domainAssetStatus' : {
                  'artifactId' : 'AssetDataManager.statusLookup_domainassetstatus',
                  'id' : 'aw2f40bed5',
               },
            };
            lookup001.addRequiredResources( requiredResources015 );


            var listItemTemplate006 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'AssetDataManager.statusLookup_domainassetstatus_listItemTemplate_Item1Desc1',
               'id' : 'awd5329ba9',
            });

            var listtext016 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.statusLookup_domainassetstatus_Item1Desc1_value',
               'id' : 'awc2a72cfb',
            });
            listItemTemplate006.addChild( listtext016 );


            var listtext017 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'AssetDataManager.statusLookup_domainassetstatus_Item1Desc1_description',
               'id' : 'aw218961dc',
            });
            listItemTemplate006.addChild( listtext017 );



            var list006 = new List({
               'resource' : 'domainAssetStatus',
               'listItemTemplate' : listItemTemplate006,
               'artifactId' : 'AssetDataManager.statusLookup_domainassetstatus_list',
               'id' : 'awc7d3f42e',
            });
            lookup001.addChild( list006 );


            var returnAttributes001 = new ReturnAttributes({
               'artifactId' : 'AssetDataManager.statusLookup_returnAttributes',
               'id' : 'aw4a62a47b',
            });
            lookup001.addChild( returnAttributes001 );


            var returnAttribute001 = new ReturnAttribute({
               'targetAttribute' : 'status',
               'artifactId' : 'AssetDataManager.statusLookup_value_status',
               'id' : 'aw6dcf9a23',
               'sourceAttribute' : 'value',
            });
            returnAttributes001.addChild( returnAttribute001 );


            var returnAttribute002 = new ReturnAttribute({
               'targetAttribute' : 'statusdesc',
               'artifactId' : 'AssetDataManager.statusLookup_description_statusdesc',
               'id' : 'aw44062c0a',
               'sourceAttribute' : 'description',
            });
            returnAttributes001.addChild( returnAttribute002 );


            var returnAttribute003 = new ReturnAttribute({
               'targetAttribute' : 'maxvalue',
               'artifactId' : 'AssetDataManager.statusLookup_maxvalue_maxvalue',
               'id' : 'awec694d8e',
               'sourceAttribute' : 'maxvalue',
            });
            returnAttributes001.addChild( returnAttribute003 );


            var lookup002 = new Lookup({
               'resource' : 'domainAssetType',
               'id' : 'AssetDataManager.AssetTypeLookup',
               'label' : MessageService.createStaticMessage('Asset Type'),
            });
            ui001.addChild( lookup002 );

            var requiredResources016 = {
               'domainAssetType' : {
                  'artifactId' : 'AssetDataManager.AssetTypeLookup_domainassettype',
                  'id' : 'aw405158a9',
               },
            };
            lookup002.addRequiredResources( requiredResources016 );


            var listItemTemplate007 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'AssetDataManager.AssetTypeLookup_domainassettype_listItemTemplate_Item1Desc1',
               'id' : 'aw6e705c3',
            });

            var listtext018 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.AssetTypeLookup_domainassettype_Item1Desc1_value',
               'id' : 'aw22f6fc36',
            });
            listItemTemplate007.addChild( listtext018 );


            var listtext019 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'AssetDataManager.AssetTypeLookup_domainassettype_Item1Desc1_description',
               'id' : 'awdf59ab88',
            });
            listItemTemplate007.addChild( listtext019 );



            var list007 = new List({
               'resource' : 'domainAssetType',
               'listItemTemplate' : listItemTemplate007,
               'artifactId' : 'AssetDataManager.AssetTypeLookup_domainassettype_list',
               'id' : 'awf764592b',
            });
            lookup002.addChild( list007 );


            var returnAttributes002 = new ReturnAttributes({
               'artifactId' : 'AssetDataManager.AssetTypeLookup_returnAttributes',
               'id' : 'aw399a48a2',
            });
            lookup002.addChild( returnAttributes002 );


            var returnAttribute004 = new ReturnAttribute({
               'targetAttribute' : 'assettype',
               'artifactId' : 'AssetDataManager.AssetTypeLookup_value_status',
               'id' : 'awad910239',
               'sourceAttribute' : 'value',
            });
            returnAttributes002.addChild( returnAttribute004 );


            var lookup003 = new Lookup({
               'filterMethod' : 'filterLocationForLookup',
               'resource' : 'additionallocations',
               'filterClass' : 'application.handlers.AssetDetailHandler',
               'id' : 'AssetDataManager.LocationLookup',
               'label' : MessageService.createStaticMessage('Select Location'),
            });
            ui001.addChild( lookup003 );

            var requiredResources017 = {
               'additionallocations' : {
                  'artifactId' : 'AssetDataManager.LocationLookup_additionallocations',
                  'id' : 'awb57ff551',
               },
            };
            lookup003.addRequiredResources( requiredResources017 );


            var searchAttributes001 = new SearchAttributes({
               'artifactId' : 'AssetDataManager.LocationLookup_additionallocations_searchAttributes',
               'id' : 'aweb21319a',
            });

            var searchAttribute001 = new SearchAttribute({
               'name' : 'location',
               'artifactId' : 'AssetDataManager.LocationLookup_additionallocations_searchAttribute_location',
               'id' : 'aw19fbdefe',
            });
            searchAttributes001.addChild( searchAttribute001 );


            var searchAttribute002 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'AssetDataManager.LocationLookup_additionallocations_searchAttribute_description',
               'id' : 'aw8766395e',
            });
            searchAttributes001.addChild( searchAttribute002 );



            var listItemTemplate008 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'AssetDataManager.LocationLookup_additionallocations_listItemTemplate_Item1Desc1',
               'id' : 'aw3b93af65',
            });

            var listtext020 = new ListText({
               'resourceAttribute' : 'location',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.LocationLookup_additionallocations_Item1Desc1_location',
               'id' : 'awd16527b2',
            });
            listItemTemplate008.addChild( listtext020 );


            var listtext021 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'AssetDataManager.LocationLookup_additionallocations_Item1Desc1_description',
               'id' : 'aw2c2fa985',
            });
            listItemTemplate008.addChild( listtext021 );



            var list008 = new List({
               'resource' : 'additionallocations',
               'listItemTemplate' : listItemTemplate008,
               'artifactId' : 'AssetDataManager.LocationLookup_additionallocations_list',
               'id' : 'aw6b39fd7d',
               'searchAttributes' : searchAttributes001,
            });
            lookup003.addChild( list008 );


            var returnAttributes003 = new ReturnAttributes({
               'artifactId' : 'AssetDataManager.LocationLookup_returnAttributes',
               'id' : 'aw6808f0b4',
            });
            lookup003.addChild( returnAttributes003 );


            var returnAttribute005 = new ReturnAttribute({
               'targetAttribute' : 'location',
               'artifactId' : 'AssetDataManager.LocationLookup_location_location',
               'id' : 'aw3dd8eb73',
               'sourceAttribute' : 'location',
            });
            returnAttributes003.addChild( returnAttribute005 );


            var returnAttribute006 = new ReturnAttribute({
               'targetAttribute' : 'locationdesc',
               'artifactId' : 'AssetDataManager.LocationLookup_description_locationdesc',
               'id' : 'awf59cf779',
               'sourceAttribute' : 'description',
            });
            returnAttributes003.addChild( returnAttribute006 );


            var lookup004 = new Lookup({
               'resource' : 'additionalshift',
               'id' : 'AssetDataManager.shiftLookup',
               'label' : MessageService.createStaticMessage('Shifts'),
            });
            ui001.addChild( lookup004 );

            var requiredResources018 = {
               'additionalshift' : {
                  'artifactId' : 'AssetDataManager.shiftLookup_calendar',
                  'id' : 'awdacda345',
               },
            };
            lookup004.addRequiredResources( requiredResources018 );


            var listItemTemplate009 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'AssetDataManager.shiftLookup_listItemTemplate_Item1Desc1',
               'id' : 'awd0663be3',
            });

            var listtext022 = new ListText({
               'resourceAttribute' : 'shiftnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.shiftLookup_Item1Desc1_shiftnum',
               'id' : 'aw181a977a',
            });
            listItemTemplate009.addChild( listtext022 );


            var listtext023 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'AssetDataManager.shiftLookup_Item1Desc1_description',
               'id' : 'awf2351427',
            });
            listItemTemplate009.addChild( listtext023 );



            var list009 = new List({
               'resource' : 'additionalshift',
               'listItemTemplate' : listItemTemplate009,
               'artifactId' : 'AssetDataManager.filterShift_list',
               'id' : 'aw4c122c1d',
            });
            lookup004.addChild( list009 );


            var returnAttributes004 = new ReturnAttributes({
               'artifactId' : 'AssetDataManager.shiftLookup_returnAttributes',
               'id' : 'awa971775f',
            });
            lookup004.addChild( returnAttributes004 );


            var returnAttribute007 = new ReturnAttribute({
               'targetAttribute' : 'shiftnum',
               'artifactId' : 'AssetDataManager.shiftLookup_value_status',
               'id' : 'awbef986f',
               'sourceAttribute' : 'shiftnum',
            });
            returnAttributes004.addChild( returnAttribute007 );


            var returnAttribute008 = new ReturnAttribute({
               'targetAttribute' : 'description',
               'artifactId' : 'AssetDataManager.shiftLookup_description_statusdesc',
               'id' : 'awff66f82b',
               'sourceAttribute' : 'description',
            });
            returnAttributes004.addChild( returnAttribute008 );


            var lookup005 = new Lookup({
               'resource' : 'domainDownCode',
               'id' : 'AssetDataManager.DowntimeCodeLookup',
               'label' : MessageService.createStaticMessage('Downtime Code'),
            });
            ui001.addChild( lookup005 );

            var requiredResources019 = {
               'domainDownCode' : {
                  'artifactId' : 'AssetDataManager.DowntimeCodeLookup_domainLocAssetStatus',
                  'id' : 'awbe347400',
               },
            };
            lookup005.addRequiredResources( requiredResources019 );


            var listItemTemplate010 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'AssetDataManager.DowntimeCodeLookup_domainLocAssetStatus_listItemTemplate_Item1Desc1',
               'id' : 'awc6fe0d41',
            });

            var listtext024 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.DowntimeCodeLookup_domainLocAssetStatus_Item1Desc1_value',
               'id' : 'awb44cdb03',
            });
            listItemTemplate010.addChild( listtext024 );


            var listtext025 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'AssetDataManager.DowntimeCodeLookup_domainLocAssetStatus_Item1Desc1_description',
               'id' : 'aw735ea43e',
            });
            listItemTemplate010.addChild( listtext025 );



            var list010 = new List({
               'resource' : 'domainDownCode',
               'listItemTemplate' : listItemTemplate010,
               'artifactId' : 'AssetDataManager.DowntimeCodeLookup_domainLocAssetStatus_list',
               'id' : 'awa49471b2',
            });
            lookup005.addChild( list010 );


            var returnAttributes005 = new ReturnAttributes({
               'artifactId' : 'AssetDataManager.DowntimeCodeLookup_returnAttributes',
               'id' : 'aw2e28ec0f',
            });
            lookup005.addChild( returnAttributes005 );


            var returnAttribute009 = new ReturnAttribute({
               'targetAttribute' : 'downtimecode',
               'artifactId' : 'AssetDataManager.DowntimeCodeLookup_value_status',
               'id' : 'awf247cf24',
               'sourceAttribute' : 'value',
            });
            returnAttributes005.addChild( returnAttribute009 );


            var lookup006 = new Lookup({
               'resource' : 'additionalcalendar',
               'id' : 'AssetDataManager.calendarLookup',
               'label' : MessageService.createStaticMessage('Calendar'),
            });
            ui001.addChild( lookup006 );

            var requiredResources020 = {
               'additionalcalendar' : {
                  'artifactId' : 'AssetDataManager.calendarLookup_calendar',
                  'id' : 'aweaf756f4',
               },
            };
            lookup006.addRequiredResources( requiredResources020 );


            var listItemTemplate011 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'AssetDataManager.calendarLookup_listItemTemplate_Item1Desc1',
               'id' : 'awd16c0ce6',
            });

            var listtext026 = new ListText({
               'resourceAttribute' : 'calnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.calendarLookup_Item1Desc1_calnum',
               'id' : 'aw85820caa',
            });
            listItemTemplate011.addChild( listtext026 );


            var listtext027 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'AssetDataManager.calendarLookup_Item1Desc1_description',
               'id' : 'aw965a21fe',
            });
            listItemTemplate011.addChild( listtext027 );



            var list011 = new List({
               'resource' : 'additionalcalendar',
               'listItemTemplate' : listItemTemplate011,
               'artifactId' : 'AssetDataManager.filterCalendar_list',
               'id' : 'awfe96be07',
            });
            lookup006.addChild( list011 );


            var returnAttributes006 = new ReturnAttributes({
               'artifactId' : 'AssetDataManager.calendarLookup_returnAttributes',
               'id' : 'aw81ab2855',
            });
            lookup006.addChild( returnAttributes006 );


            var returnAttribute010 = new ReturnAttribute({
               'targetAttribute' : 'calnum',
               'artifactId' : 'AssetDataManager.calendarLookup_value_status',
               'id' : 'aw1e5eee7e',
               'sourceAttribute' : 'calnum',
            });
            returnAttributes006.addChild( returnAttribute010 );


            var returnAttribute011 = new ReturnAttribute({
               'targetAttribute' : 'description',
               'artifactId' : 'AssetDataManager.calendarLookup_description_statusdesc',
               'id' : 'aw9b09cdf2',
               'sourceAttribute' : 'description',
            });
            returnAttributes006.addChild( returnAttribute011 );


            var lookup007 = new Lookup({
               'filterMethod' : 'filterFailureClass',
               'resource' : 'failureListResource',
               'filterClass' : 'application.handlers.AssetDetailHandler',
               'id' : 'AssetDataManager.failureClassLookup',
               'label' : MessageService.createStaticMessage('Failure Class'),
            });
            ui001.addChild( lookup007 );

            var requiredResources021 = {
               'failureListResource' : {
                  'artifactId' : 'AssetDataManager.failureClassLookup_domainwostatus',
                  'id' : 'aw7f709a28',
               },
            };
            lookup007.addRequiredResources( requiredResources021 );


            var listItemTemplate012 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'AssetDataManager.failureClassLookup_domainwostatus_listItemTemplate_Item1Desc1',
               'id' : 'aw5e8bab29',
            });

            var listtext028 = new ListText({
               'resourceAttribute' : 'failurecode',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.failureClassLookup_Item1Desc1_failurecode',
               'id' : 'aw3b4235bb',
            });
            listItemTemplate012.addChild( listtext028 );


            var listtext029 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'AssetDataManager.failureClassLookup_Item1Desc1_description',
               'id' : 'aw33d831b0',
            });
            listItemTemplate012.addChild( listtext029 );



            var list012 = new List({
               'resource' : 'failureListResource',
               'listItemTemplate' : listItemTemplate012,
               'artifactId' : 'AssetDataManager.filterFailureClass_list',
               'id' : 'aw7cbbb3c9',
            });
            lookup007.addChild( list012 );


            var returnAttributes007 = new ReturnAttributes({
               'artifactId' : 'AssetDataManager.failureClassLookup_returnAttributes',
               'id' : 'awea608edf',
            });
            lookup007.addChild( returnAttributes007 );


            var returnAttribute012 = new ReturnAttribute({
               'targetAttribute' : 'failurecode',
               'artifactId' : 'AssetDataManager.failureClassLookup_value_status',
               'id' : 'aw1bdf82e6',
               'sourceAttribute' : 'failurecode',
            });
            returnAttributes007.addChild( returnAttribute012 );


            var returnAttribute013 = new ReturnAttribute({
               'targetAttribute' : 'failurecodedesc',
               'artifactId' : 'AssetDataManager.failureClassLookup_description_statusdesc',
               'id' : 'aw3e8bddbc',
               'sourceAttribute' : 'description',
            });
            returnAttributes007.addChild( returnAttribute013 );


            var lookup008 = new Lookup({
               'filterMethod' : 'filterAssetForLookup',
               'resource' : 'additionalasset',
               'filterClass' : 'application.handlers.AssetDetailHandler',
               'id' : 'AssetDataManager.ParentLookup',
               'label' : MessageService.createStaticMessage('Select Parent'),
            });
            ui001.addChild( lookup008 );

            var requiredResources022 = {
               'additionalasset' : {
                  'artifactId' : 'AssetDataManager.ParentLookup_additionalasset',
                  'id' : 'awc0c425e4',
               },
            };
            lookup008.addRequiredResources( requiredResources022 );


            var searchAttributes002 = new SearchAttributes({
               'artifactId' : 'AssetDataManager.ParentLookup_additionalasset_searchAttributes',
               'id' : 'aw3a4db255',
            });

            var searchAttribute003 = new SearchAttribute({
               'name' : 'assetnum',
               'artifactId' : 'AssetDataManager.ParentLookup_additionalasset_searchAttribute_assetnum',
               'id' : 'aw29661816',
            });
            searchAttributes002.addChild( searchAttribute003 );


            var searchAttribute004 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'AssetDataManager.ParentLookup_additionalasset_searchAttribute_description',
               'id' : 'awc8e557d8',
            });
            searchAttributes002.addChild( searchAttribute004 );


            var searchAttribute005 = new SearchAttribute({
               'name' : 'location',
               'artifactId' : 'AssetDataManager.ParentLookup_additionalasset_searchAttribute_location',
               'id' : 'awc820e2c2',
            });
            searchAttributes002.addChild( searchAttribute005 );


            var searchAttribute006 = new SearchAttribute({
               'name' : 'locationdesc',
               'artifactId' : 'AssetDataManager.ParentLookup_additionalasset_searchAttribute_locationdesc',
               'id' : 'aw7dace037',
            });
            searchAttributes002.addChild( searchAttribute006 );



            var listItemTemplate013 = new ListItemTemplate({
               'layout' : 'Item2Desc2',
               'artifactId' : 'AssetDataManager.ParentLookup_additionalasset_listItemTemplate_Item2Desc2',
               'id' : 'aw6b8de2f7',
            });

            var listtext030 = new ListText({
               'resourceAttribute' : 'assetnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.ParentLookup_additionalasset_Item2Desc2_assetnum',
               'id' : 'aw4303b4b',
            });
            listItemTemplate013.addChild( listtext030 );


            var listtext031 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'AssetDataManager.ParentLookup_additionalasset_Item2Desc2_description',
               'id' : 'aw902069b6',
            });
            listItemTemplate013.addChild( listtext031 );


            var listtext032 = new ListText({
               'resourceAttribute' : 'location',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'AssetDataManager.ParentLookup_additionalasset_Item2Desc2_location',
               'id' : 'awe576c19f',
            });
            listItemTemplate013.addChild( listtext032 );


            var listtext033 = new ListText({
               'resourceAttribute' : 'locationdesc',
               'layoutInsertAt' : 'desc2',
               'artifactId' : 'AssetDataManager.ParentLookup_additionalasset_Item2Desc2_locationdesc',
               'id' : 'awd7fe6956',
            });
            listItemTemplate013.addChild( listtext033 );



            var list013 = new List({
               'resource' : 'additionalasset',
               'listItemTemplate' : listItemTemplate013,
               'artifactId' : 'AssetDataManager.ParentLookup_additionalasset_list',
               'id' : 'awe095fc2',
               'searchAttributes' : searchAttributes002,
            });
            lookup008.addChild( list013 );


            var returnAttributes008 = new ReturnAttributes({
               'artifactId' : 'AssetDataManager.ParentLookup_returnAttributes',
               'id' : 'awf5f14561',
            });
            lookup008.addChild( returnAttributes008 );


            var returnAttribute014 = new ReturnAttribute({
               'targetAttribute' : 'parent',
               'artifactId' : 'AssetDataManager.ParentLookup_assetnum_asset',
               'id' : 'aw38e7fdf1',
               'sourceAttribute' : 'assetnum',
            });
            returnAttributes008.addChild( returnAttribute014 );


            var returnAttribute015 = new ReturnAttribute({
               'targetAttribute' : 'parentdesc',
               'artifactId' : 'AssetDataManager.ParentLookup_description_assetdesc',
               'id' : 'aw958ba2ac',
               'sourceAttribute' : 'description',
            });
            returnAttributes008.addChild( returnAttribute015 );


            var lookup009 = new Lookup({
               'filterMethod' : 'filterDomainIdForLookup',
               'resource' : 'meterCharacteristics',
               'filterClass' : 'application.handlers.MeterReadingsHandler',
               'id' : 'AssetDataManager.characteristicsDomainLookup',
               'label' : MessageService.createStaticMessage('Select Value'),
            });
            ui001.addChild( lookup009 );

            var requiredResources023 = {
               'meterCharacteristics' : {
                  'reload' : true,
                  'artifactId' : 'AssetDataManager.characteristicsDomainLookup_meterCharacteristics',
                  'id' : 'awef239a18',
               },
            };
            lookup009.addRequiredResources( requiredResources023 );


            var listItemTemplate014 = new ListItemTemplate({
               'artifactId' : 'AssetDataManager.characteristicsDomainLookup_meterCharacteristics_listItemTemplate',
               'id' : 'awe5b2aba',
            });

            var listtext034 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'AssetDataManager.characteristicsDomainLookup_meterCharacteristics_value',
               'id' : 'awf3459ca2',
            });
            listItemTemplate014.addChild( listtext034 );



            var list014 = new List({
               'resource' : 'meterCharacteristics',
               'listItemTemplate' : listItemTemplate014,
               'artifactId' : 'AssetDataManager.characteristicsDomainLookup_meterCharacteristics_list',
               'id' : 'aw786d421a',
            });
            lookup009.addChild( list014 );


            var returnAttributes009 = new ReturnAttributes({
               'artifactId' : 'AssetDataManager.characteristicsDomainLookup_returnAttributes',
               'id' : 'aw4eaaf54c',
            });
            lookup009.addChild( returnAttributes009 );


            var returnAttribute016 = new ReturnAttribute({
               'targetAttribute' : 'newreadinglookup',
               'artifactId' : 'AssetDataManager.characteristicsDomainLookup_value_newreadinglookup',
               'id' : 'awcdc19cc0',
               'sourceAttribute' : 'value',
            });
            returnAttributes009.addChild( returnAttribute016 );


            var lookup010 = new Lookup({
               'resource' : 'additionalitem',
               'id' : 'AssetDataManager.RotatingItemLookup',
               'label' : MessageService.createStaticMessage('Select Rotating Item'),
            });
            ui001.addChild( lookup010 );

            var requiredResources024 = {
               'additionalitem' : {
                  'artifactId' : 'AssetDataManager.RotatingItemLookup_additionalitem',
                  'id' : 'aw225dd515',
               },
            };
            lookup010.addRequiredResources( requiredResources024 );


            var searchAttributes003 = new SearchAttributes({
               'artifactId' : 'AssetDataManager.RotatingItemLookup_additionalitem_searchAttributes',
               'id' : 'aw721ffe9d',
            });

            var searchAttribute007 = new SearchAttribute({
               'name' : 'itemnum',
               'artifactId' : 'AssetDataManager.RotatingItemLookup_additionalitem_searchAttribute_itemnum',
               'id' : 'aw84b548c8',
            });
            searchAttributes003.addChild( searchAttribute007 );


            var searchAttribute008 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'AssetDataManager.RotatingItemLookup_additionalitem_searchAttribute_description',
               'id' : 'awf1d5cd6b',
            });
            searchAttributes003.addChild( searchAttribute008 );



            var listItemTemplate015 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'AssetDataManager.RotatingItemLookup_additionalitem_listItemTemplate_Item1Desc1',
               'id' : 'aw4d205b50',
            });

            var listtext035 = new ListText({
               'resourceAttribute' : 'itemnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.RotatingItemLookup_additionalitem_Item1Desc1_itemnum',
               'id' : 'aw72c76e04',
            });
            listItemTemplate015.addChild( listtext035 );


            var listtext036 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'AssetDataManager.RotatingItemLookup_additionalitem_Item1Desc1_description',
               'id' : 'awb859eada',
            });
            listItemTemplate015.addChild( listtext036 );



            var list015 = new List({
               'resource' : 'additionalitem',
               'listItemTemplate' : listItemTemplate015,
               'artifactId' : 'AssetDataManager.RotatingItemLookup_additionalitem_list',
               'id' : 'aw63b12299',
               'searchAttributes' : searchAttributes003,
            });
            lookup010.addChild( list015 );


            var returnAttributes010 = new ReturnAttributes({
               'artifactId' : 'AssetDataManager.RotatingItemLookup_returnAttributes',
               'id' : 'aw6ec00331',
            });
            lookup010.addChild( returnAttributes010 );


            var returnAttribute017 = new ReturnAttribute({
               'targetAttribute' : 'itemnum',
               'artifactId' : 'AssetDataManager.RotatingItemLookup_itemnum_itemid',
               'id' : 'aw88bdd50a',
               'sourceAttribute' : 'itemnum',
            });
            returnAttributes010.addChild( returnAttribute017 );


            var lookup011 = new Lookup({
               'resource' : 'measureUnit',
               'id' : 'AssetDataManager.MeasureUnitAttributeLookup',
               'label' : MessageService.createStaticMessage('Unit of Measure'),
            });
            ui001.addChild( lookup011 );

            var requiredResources025 = {
               'measureUnit' : {
                  'artifactId' : 'AssetDataManager.MeasureUnitAttributeLookup_measureUnitAttribute',
                  'id' : 'aw32ebb236',
               },
            };
            lookup011.addRequiredResources( requiredResources025 );


            var searchAttributes004 = new SearchAttributes({
               'artifactId' : 'AssetDataManager.MeasureUnitAttributeLookup_measureUnitAttribute_searchAttributes',
               'id' : 'awdf65be5',
            });

            var searchAttribute009 = new SearchAttribute({
               'name' : 'measureunitid',
               'artifactId' : 'AssetDataManager.MeasureUnitAttributeLookup_measureUnitAttribute_searchAttribute_measureunitid',
               'id' : 'awec2cc62a',
            });
            searchAttributes004.addChild( searchAttribute009 );



            var listItemTemplate016 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'AssetDataManager.MeasureUnitAttributeLookup_measureUnitAttribute_listItemTemplate_Item1Desc1',
               'id' : 'awa5559dff',
            });

            var listtext037 = new ListText({
               'resourceAttribute' : 'measureunitid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.MeasureUnitAttributeLookup_measureUnitAttribute_Item1Item1_measureunitid',
               'id' : 'awa9b26342',
            });
            listItemTemplate016.addChild( listtext037 );


            var listtext038 = new ListText({
               'resourceAttribute' : 'abbreviation',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'AssetDataManager.MeasureUnitAttributeLookup_measureUnitAttribute_Item1Desc1_abbreviation',
               'id' : 'aw88e349f5',
            });
            listItemTemplate016.addChild( listtext038 );



            var list016 = new List({
               'resource' : 'measureUnit',
               'listItemTemplate' : listItemTemplate016,
               'artifactId' : 'AssetDataManager.MeasureUnitAttributeLookup_measureUnitAttribute_list',
               'id' : 'awc8302804',
               'searchAttributes' : searchAttributes004,
            });
            lookup011.addChild( list016 );


            var returnAttributes011 = new ReturnAttributes({
               'artifactId' : 'AssetDataManager.MeasureUnitAttributeLookup_returnAttributes',
               'id' : 'awdf954b39',
            });
            lookup011.addChild( returnAttributes011 );


            var returnAttribute018 = new ReturnAttribute({
               'targetAttribute' : 'measureunitid',
               'artifactId' : 'AssetDataManager.MeasureUnitLookup_itemnum_itemid',
               'id' : 'aw59f156c9',
               'sourceAttribute' : 'measureunitid',
            });
            returnAttributes011.addChild( returnAttribute018 );


            var lookup012 = new Lookup({
               'resource' : 'assetAttribute',
               'id' : 'AssetDataManager.assetAttributeLookup',
               'label' : MessageService.createStaticMessage('Attribute'),
            });
            ui001.addChild( lookup012 );

            var requiredResources026 = {
               'assetAttribute' : {
                  'artifactId' : 'AssetDataManager.assetAttributeLookup_assetAttribute',
                  'id' : 'awdd53e0ab',
               },
            };
            lookup012.addRequiredResources( requiredResources026 );


            var searchAttributes005 = new SearchAttributes({
               'artifactId' : 'AssetDataManager.assetAttributeLookup_assetAttribute_searchAttributes',
               'id' : 'awe9ff0eb5',
            });

            var searchAttribute010 = new SearchAttribute({
               'name' : 'assetattrid',
               'artifactId' : 'AssetDataManager.assetAttributeLookup_assetAttribute_searchAttribute_assetattrid',
               'id' : 'awd46d41d8',
            });
            searchAttributes005.addChild( searchAttribute010 );


            var searchAttribute011 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'AssetDataManager.assetAttributeLookup_assetAttribute_searchAttribute_description',
               'id' : 'aw951a062c',
            });
            searchAttributes005.addChild( searchAttribute011 );



            var listItemTemplate017 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'AssetDataManager.assetAttrLookup_additionalitem_listItemTemplate_Item1Desc1',
               'id' : 'aw82c98d09',
            });

            var listtext039 = new ListText({
               'resourceAttribute' : 'assetattrid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.assetAttrLookup_assetAttribute_Item1Desc1_assetattr',
               'id' : 'aw9fecf317',
            });
            listItemTemplate017.addChild( listtext039 );


            var listtext040 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'AssetDataManager.assetAttrLookup_assetAttribute_Item1Desc1_description',
               'id' : 'awdf799878',
            });
            listItemTemplate017.addChild( listtext040 );



            var list017 = new List({
               'resource' : 'assetAttribute',
               'listItemTemplate' : listItemTemplate017,
               'artifactId' : 'AssetDataManager.assetAttributeLookup_assetAttribute_list',
               'id' : 'aw92094c07',
               'searchAttributes' : searchAttributes005,
            });
            lookup012.addChild( list017 );


            var returnAttributes012 = new ReturnAttributes({
               'artifactId' : 'AssetDataManager.assetAttrLookup_returnAttributes',
               'id' : 'aw7fff5165',
            });
            lookup012.addChild( returnAttributes012 );


            var returnAttribute019 = new ReturnAttribute({
               'targetAttribute' : 'assetattrid',
               'artifactId' : 'AssetDataManager.assetAttrLookup_itemnum_itemid',
               'id' : 'awbfc2d5ed',
               'sourceAttribute' : 'assetattrid',
            });
            returnAttributes012.addChild( returnAttribute019 );


            var returnAttribute020 = new ReturnAttribute({
               'targetAttribute' : 'datatype',
               'artifactId' : 'AssetDataManager.assetAttrLookup_itemnum_datatype',
               'id' : 'aw5b43cf00',
               'sourceAttribute' : 'datatype',
            });
            returnAttributes012.addChild( returnAttribute020 );


            var lookup013 = new Lookup({
               'filterMethod' : 'filterParentForLookup',
               'resource' : 'moveParent',
               'filterClass' : 'application.handlers.AssetMoveHandler',
               'id' : 'AssetDataManager.AssetMove.ParentLookup',
               'label' : MessageService.createStaticMessage('Select Parent'),
            });
            ui001.addChild( lookup013 );

            var requiredResources027 = {
               'moveParent' : {
                  'artifactId' : 'AssetDataManager.AssetMove.ParentLookup_additionalasset',
                  'id' : 'awd9e010c8',
               },
            };
            lookup013.addRequiredResources( requiredResources027 );


            var searchAttributes006 = new SearchAttributes({
               'artifactId' : 'AssetDataManager.AssetMove.ParentLookup_additionalasset_searchAttributes',
               'id' : 'awc0eae8da',
            });

            var searchAttribute012 = new SearchAttribute({
               'name' : 'assetnum',
               'artifactId' : 'AssetDataManager.AssetMove.ParentLookup_additionalasset_searchAttribute_assetnum',
               'id' : 'aw22455033',
            });
            searchAttributes006.addChild( searchAttribute012 );


            var searchAttribute013 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'AssetDataManagerAssetMove..ParentLookup_additionalasset_searchAttribute_description',
               'id' : 'awfe4f7511',
            });
            searchAttributes006.addChild( searchAttribute013 );



            var listItemTemplate018 = new ListItemTemplate({
               'layout' : 'Item2Desc2',
               'artifactId' : 'AssetDataManager.AssetMove.ParentLookup_additionalasset_listItemTemplate_Item2Desc2',
               'id' : 'awcfccd288',
            });

            var listtext041 = new ListText({
               'resourceAttribute' : 'assetnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManagerAssetMove..ParentLookup_additionalasset_Item2Desc2_assetnum',
               'id' : 'aw4e55e0f',
            });
            listItemTemplate018.addChild( listtext041 );


            var listtext042 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'AssetDataManager.AssetMove.ParentLookup_additionalasset_Item2Desc2_description',
               'id' : 'aw658acf6b',
            });
            listItemTemplate018.addChild( listtext042 );



            var list018 = new List({
               'resource' : 'moveParent',
               'listItemTemplate' : listItemTemplate018,
               'artifactId' : 'AssetDataManager.AssetMove.ParentLookup_additionalasset_list',
               'id' : 'aw6989d270',
               'searchAttributes' : searchAttributes006,
               'displayPageSize' : '20',
            });
            lookup013.addChild( list018 );


            var returnAttributes013 = new ReturnAttributes({
               'artifactId' : 'AssetDataManager.AssetMove.ParentLookup_returnAttributes',
               'id' : 'awc7300db7',
            });
            lookup013.addChild( returnAttributes013 );


            var returnAttribute021 = new ReturnAttribute({
               'targetAttribute' : 'toParent',
               'artifactId' : 'AssetDataManager.AssetMove.ParentLookup_assetnum_asset',
               'id' : 'aw70e4a067',
               'sourceAttribute' : 'assetnum',
            });
            returnAttributes013.addChild( returnAttribute021 );


            var lookup014 = new Lookup({
               'filterMethod' : 'filterLocationForLookup',
               'resource' : 'moveLocations',
               'filterClass' : 'application.handlers.AssetMoveHandler',
               'id' : 'AssetDataManager.AssetMove.LocationLookup',
               'label' : MessageService.createStaticMessage('Select Location'),
            });
            ui001.addChild( lookup014 );

            var requiredResources028 = {
               'moveLocations' : {
                  'artifactId' : 'AssetDataManager.AssetMove.LocationLookup_additionallocations',
                  'id' : 'aw9077a77c',
               },
            };
            lookup014.addRequiredResources( requiredResources028 );


            var searchAttributes007 = new SearchAttributes({
               'artifactId' : 'AssetDataManager.AssetMove.LocationLookup_additionallocations_searchAttributes',
               'id' : 'aw1e8b9747',
            });

            var searchAttribute014 = new SearchAttribute({
               'name' : 'location',
               'artifactId' : 'AssetDataManager.AssetMove.LocationLookup_additionallocations_searchAttribute_location',
               'id' : 'aw98cbb6c2',
            });
            searchAttributes007.addChild( searchAttribute014 );


            var searchAttribute015 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'AssetDataManager.AssetMove.LocationLookup_additionallocations_searchAttribute_description',
               'id' : 'aw21eaf428',
            });
            searchAttributes007.addChild( searchAttribute015 );



            var listItemTemplate019 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'AssetDataManager.AssetMove.LocationLookup_additionallocations_listItemTemplate_Item1Desc1',
               'id' : 'aw9d1f6213',
            });

            var listtext043 = new ListText({
               'resourceAttribute' : 'location',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.AssetMove.LocationLookup_additionallocations_Item1Desc1_location',
               'id' : 'aw9a6ad0bd',
            });
            listItemTemplate019.addChild( listtext043 );


            var listtext044 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'AssetDataManager.AssetMove.LocationLookup_additionallocations_Item1Desc1_description',
               'id' : 'awec318418',
            });
            listItemTemplate019.addChild( listtext044 );



            var list019 = new List({
               'resource' : 'moveLocations',
               'listItemTemplate' : listItemTemplate019,
               'artifactId' : 'AssetDataManager.AssetMove.LocationLookup_additionallocations_list',
               'id' : 'awd58c50be',
               'searchAttributes' : searchAttributes007,
               'displayPageSize' : '20',
            });
            lookup014.addChild( list019 );


            var returnAttributes014 = new ReturnAttributes({
               'artifactId' : 'AssetDataManager.AssetMove.LocationLookup_returnAttributes',
               'id' : 'awc76d694e',
            });
            lookup014.addChild( returnAttributes014 );


            var returnAttribute022 = new ReturnAttribute({
               'targetAttribute' : 'locationtype',
               'artifactId' : 'AssetDataManager.AssetMove.LocationLookup_locationtype_locationtype',
               'id' : 'aw929f5862',
               'sourceAttribute' : 'locationtype',
            });
            returnAttributes014.addChild( returnAttribute022 );


            var returnAttribute023 = new ReturnAttribute({
               'targetAttribute' : 'toLocation',
               'artifactId' : 'AssetDataManager.AssetMove.LocationLookup_location_location',
               'id' : 'aw601f95e8',
               'sourceAttribute' : 'location',
            });
            returnAttributes014.addChild( returnAttribute023 );


            var lookup015 = new Lookup({
               'resource' : 'site',
               'id' : 'AssetDataManager.AssetMove.SiteLookup',
               'label' : MessageService.createStaticMessage('Select Site'),
            });
            ui001.addChild( lookup015 );

            var requiredResources029 = {
               'site' : {
                  'artifactId' : 'AssetDataManager.AssetMove.SiteLookup_additionalSites',
                  'id' : 'aw37bbafb4',
               },
            };
            lookup015.addRequiredResources( requiredResources029 );


            var searchAttributes008 = new SearchAttributes({
               'artifactId' : 'AssetDataManager.AssetMove.SiteLookup_additionalSites_searchAttributes',
               'id' : 'aw8611f652',
            });

            var searchAttribute016 = new SearchAttribute({
               'name' : 'siteid',
               'artifactId' : 'AssetDataManager.AssetMove.SiteLookup_additionalSites_searchAttribute_Site',
               'id' : 'aw4a0fa991',
            });
            searchAttributes008.addChild( searchAttribute016 );


            var searchAttribute017 = new SearchAttribute({
               'name' : 'orgid',
               'artifactId' : 'AssetDataManager.AssetMove.SiteLookup_additionalSites_searchAttribute_description',
               'id' : 'aw63b0940b',
            });
            searchAttributes008.addChild( searchAttribute017 );



            var listItemTemplate020 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'AssetDataManager.AssetMove.SiteLookup_additionalSites_listItemTemplate_Item1Desc1',
               'id' : 'awdf450230',
            });

            var listtext045 = new ListText({
               'resourceAttribute' : 'siteid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'AssetDataManager.AssetMove.SiteLookup_additionalSites_Item1Desc1_Site',
               'id' : 'awdb7ae03a',
            });
            listItemTemplate020.addChild( listtext045 );


            var listtext046 = new ListText({
               'resourceAttribute' : 'orgid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'AssetDataManager.AssetMove.SiteLookup_additionalSites_Item1Desc1_description',
               'id' : 'aw3a85a145',
            });
            listItemTemplate020.addChild( listtext046 );



            var list020 = new List({
               'resource' : 'site',
               'listItemTemplate' : listItemTemplate020,
               'artifactId' : 'AssetDataManager.AssetMove.SiteLookup_additionalSites_list',
               'id' : 'awb0ae9e41',
               'searchAttributes' : searchAttributes008,
            });
            lookup015.addChild( list020 );


            var returnAttributes015 = new ReturnAttributes({
               'artifactId' : 'AssetDataManager.AssetMove.SiteLookup_returnAttributes',
               'id' : 'aw2f19ece4',
            });
            lookup015.addChild( returnAttributes015 );


            var returnAttribute024 = new ReturnAttribute({
               'targetAttribute' : 'toSite',
               'artifactId' : 'AssetDataManager.AssetMove.SiteLookup_Site_Site',
               'id' : 'aw9d556b0c',
               'sourceAttribute' : 'siteid',
            });
            returnAttributes015.addChild( returnAttribute024 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.AttachmentsView', false);
               trackTimer.startTracking();
            }

            var view019 = new View({
               'showOverflow' : true,
               'id' : 'WorkExecution.AttachmentsView',
               'label' : MessageService.createStaticMessage('Attachments'),
            });
            ui001.addChild( view019 );

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
            view019.addRequiredResources( requiredResources030 );

            var actions006 = new Actions({
               'artifactId' : 'WorkExecution.AttachmentsView_actions',
               'id' : 'awb2eebf16',
            });
            view019.addChild( actions006 );


            var action016 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'artifactId' : 'WorkExecution.AttachmentsView_TakePhoto_action',
               'id' : 'aw8f4e0a9e',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions006.addChild( action016 );

            var eventHandlers084 = [
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
            action016.eventHandlers = eventHandlers084;

            var action017 = new Action({
               'image' : 'header_add_OFF.svg',
               'artifactId' : 'WorkExecution.AttachmentsView_PickfromGallery_action',
               'id' : 'awfd7f8e21',
               'label' : MessageService.createStaticMessage('Pick from Gallery'),
            });
            actions006.addChild( action017 );

            var eventHandlers085 = [
               {
                     'method' : 'launchGallery',
                     'artifactId' : 'WorkExecution.AttachmentsView_PickfromGallery_action_eventHandlers_click_launchGallery',
                     'id' : 'awe839699',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            action017.eventHandlers = eventHandlers085;


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



            var listItemTemplate021 = new ListItemTemplate({
               'layout' : 'AttachmentsListItem',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem',
               'id' : 'aw5f9af042',
            });

            var listtext047 = new ListText({
               'resourceAttribute' : 'displayFileName',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayFileName',
               'id' : 'aw2a7f24e9',
            });
            listItemTemplate021.addChild( listtext047 );


            var listtext048 = new ListText({
               'resourceAttribute' : 'displayDescription',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayDescription',
               'id' : 'aw634a876e',
            });
            listItemTemplate021.addChild( listtext048 );


            var listtext049 = new ListText({
               'resourceAttribute' : 'displayFileType',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayFileType',
               'id' : 'awf8820dc6',
            });
            listItemTemplate021.addChild( listtext049 );


            var button029 = new Button({
               'border' : 'false',
               'resourceAttribute' : 'anywhereAttachDownloaded',
               'image' : '\/images\/msg_downloadComplete_small.svg',
               'cssClass' : 'attachmentIcon',
               'layoutInsertAt' : 'icon',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.svg_button',
               'id' : 'awfc77ac73',
            });
            var eventHandlers086 = [
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
            button029.eventHandlers = eventHandlers086;
            listItemTemplate021.addChild( button029 );


            var listtext050 = new ListText({
               'resourceAttribute' : 'displaySize',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displaySize',
               'id' : 'aw4edf9732',
            });
            listItemTemplate021.addChild( listtext050 );


            var listtext051 = new ListText({
               'resourceAttribute' : 'createby',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_createby',
               'id' : 'awfea18ec7',
            });
            listItemTemplate021.addChild( listtext051 );


            var listtext052 = new ListText({
               'resourceAttribute' : 'displayCreationDate',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayCreationDate',
               'id' : 'aw44f40bb4',
            });
            listItemTemplate021.addChild( listtext052 );

            var eventHandlers087 = [
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem_eventHandlers_click_handleThumbnailClick',
                     'id' : 'aw6e007bd',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            listItemTemplate021.eventHandlers = eventHandlers087;


            var list021 = new List({
               'resource' : 'asset',
               'sortOptions' : sortOptions002,
               'listItemTemplate' : listItemTemplate021,
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_list',
               'attribute' : 'attachments',
               'id' : 'aw118597f8',
            });
            view019.addChild( list021 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog005 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'WorkExecution.DownloadAttachmentLocal',
            });
            ui001.addChild( dialog005 );


            var container027 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.DownloadAttachmentLocal_container_0',
               'id' : 'awecb352f6',
            });
            dialog005.addChild( container027 );


            var text117 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'WorkExecution.DownloadAttachmentLocal_container_0_progressMsg',
               'id' : 'aw1941849c',
            });
            container027.addChild( text117 );


            var container028 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.DownloadAttachmentLocal_container_1',
               'id' : 'aw9bb46260',
            });
            dialog005.addChild( container028 );


            var button030 = new Button({
               'artifactId' : 'WorkExecution.DownloadAttachmentLocal_Cancel_button',
               'id' : 'awe595a1e7',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers088 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'WorkExecution.DownloadAttachmentLocal_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'awc8f3fc0c',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            button030.eventHandlers = eventHandlers088;
            container028.addChild( button030 );


            var lookup016 = new Lookup({
               'resource' : 'appDocType',
               'id' : 'WorkExecution.appDocTypeLookup',
               'label' : MessageService.createStaticMessage('Select Value'),
            });
            ui001.addChild( lookup016 );

            var requiredResources031 = {
               'appDocType' : {
                  'artifactId' : 'WorkExecution.appDocTypeLookup_appDocType',
                  'id' : 'aw8ca30e01',
               },
            };
            lookup016.addRequiredResources( requiredResources031 );


            var listItemTemplate022 = new ListItemTemplate({
               'artifactId' : 'WorkExecution.appDocTypeLookup_appDocType_listItemTemplate',
               'id' : 'awa86cf2be',
            });

            var listtext053 = new ListText({
               'resourceAttribute' : 'doctype',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'WorkExecution.appDocTypeLookup_appDocType_doctype',
               'id' : 'aw6b7c2bc2',
            });
            listItemTemplate022.addChild( listtext053 );



            var list022 = new List({
               'resource' : 'appDocType',
               'listItemTemplate' : listItemTemplate022,
               'artifactId' : 'WorkExecution.appDocTypeLookup_appDocType_list',
               'id' : 'aw885ae2fe',
            });
            lookup016.addChild( list022 );


            var returnAttributes016 = new ReturnAttributes({
               'artifactId' : 'WorkExecution.appDocTypeLookup_returnAttributes',
               'id' : 'aw54587ddc',
            });
            lookup016.addChild( returnAttributes016 );


            var returnAttribute025 = new ReturnAttribute({
               'targetAttribute' : 'category',
               'artifactId' : 'WorkExecution.appDocTypeLookup_doctype_category',
               'id' : 'awb11d21b7',
               'sourceAttribute' : 'doctype',
            });
            returnAttributes016.addChild( returnAttribute025 );


            var lookup017 = new Lookup({
               'filterMethod' : 'filterMaxDomain',
               'resource' : 'maxdomain',
               'filterClass' : 'application.handlers.ClassificationFormHandler',
               'id' : 'Inspection.alnDomainLookup',
               'label' : MessageService.createStaticMessage('Select Value'),
            });
            ui001.addChild( lookup017 );

            var requiredResources032 = {
               'maxdomain' : {
                  'reload' : true,
                  'artifactId' : 'Inspection.alnDomainLookup_requiredResources_maxdomain',
                  'id' : 'aw7d38b844',
                  'related' : {
                     'alndomain' : {
                        'artifactId' : 'Inspection.alnDomainLookup_requiredResources_maxdomain_alndomain',
                        'id' : 'aw155121cc',
                     },
                  },
               },
            };
            lookup017.addRequiredResources( requiredResources032 );


            var searchAttributes009 = new SearchAttributes({
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_searchAttributes',
               'id' : 'aw3516f4ad',
            });

            var searchAttribute018 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_searchAttribute_description',
               'id' : 'aw41666b11',
            });
            searchAttributes009.addChild( searchAttribute018 );



            var listItemTemplate023 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_alndomain_listItemTemplate_Item1Desc1',
               'id' : 'awc665d9a2',
            });

            var listtext054 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_Item1Desc1_value',
               'id' : 'awe68b3f5',
            });
            listItemTemplate023.addChild( listtext054 );


            var listtext055 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_Item1Desc1_description',
               'id' : 'awfe4e2119',
            });
            listItemTemplate023.addChild( listtext055 );



            var list023 = new List({
               'resource' : 'maxdomain',
               'listItemTemplate' : listItemTemplate023,
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_alndomain_list',
               'attribute' : 'alndomain',
               'id' : 'awe833663c',
               'searchAttributes' : searchAttributes009,
            });
            lookup017.addChild( list023 );


            var returnAttributes017 = new ReturnAttributes({
               'artifactId' : 'Inspection.alnDomainLookup_returnAttributes',
               'id' : 'awc897ecc7',
            });
            lookup017.addChild( returnAttributes017 );


            var returnAttribute026 = new ReturnAttribute({
               'targetAttribute' : 'alnvalue',
               'artifactId' : 'Inspection.alnDomainLookup_value_alnvalue',
               'id' : 'aw778667ba',
               'sourceAttribute' : 'value',
            });
            returnAttributes017.addChild( returnAttribute026 );


            var lookup018 = new Lookup({
               'filterMethod' : 'filterMaxDomain',
               'resource' : 'maxdomain',
               'filterClass' : 'application.handlers.ClassificationFormHandler',
               'id' : 'Inspection.NumericLookup',
               'label' : MessageService.createStaticMessage('Select Value'),
            });
            ui001.addChild( lookup018 );

            var requiredResources033 = {
               'maxdomain' : {
                  'reload' : true,
                  'artifactId' : 'Inspection.NumericLookup_requiredResources_maxdomain',
                  'id' : 'aw781194bb',
                  'related' : {
                     'numericdomain' : {
                        'artifactId' : 'Inspection.NumericLookup_requiredResources_maxdomain_numericdomain',
                        'id' : 'aw9987e07b',
                     },
                  },
               },
            };
            lookup018.addRequiredResources( requiredResources033 );


            var searchAttributes010 = new SearchAttributes({
               'artifactId' : 'Inspection.NumericLookup_maxdomain_searchAttributes',
               'id' : 'aw1c6d186a',
            });

            var searchAttribute019 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'Inspection.NumericLookup_maxdomain_searchAttribute_description',
               'id' : 'aw70e59b68',
            });
            searchAttributes010.addChild( searchAttribute019 );



            var listItemTemplate024 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Inspection.NumericLookup_maxdomain_numericdomain_listItemTemplate_Item1Desc1',
               'id' : 'aw8c88751b',
            });

            var listtext056 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Inspection.NumericLookup_maxdomain_Item1Desc1_value',
               'id' : 'aw27135f32',
            });
            listItemTemplate024.addChild( listtext056 );


            var listtext057 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Inspection.NumericLookup_maxdomain_Item1Desc1_description',
               'id' : 'aw94257f39',
            });
            listItemTemplate024.addChild( listtext057 );



            var list024 = new List({
               'resource' : 'maxdomain',
               'listItemTemplate' : listItemTemplate024,
               'artifactId' : 'Inspection.NumericLookup_maxdomain_numericdomain_list',
               'attribute' : 'numericdomain',
               'id' : 'aw9e7e7b48',
               'searchAttributes' : searchAttributes010,
            });
            lookup018.addChild( list024 );


            var returnAttributes018 = new ReturnAttributes({
               'artifactId' : 'Inspection.NumericLookup_returnAttributes',
               'id' : 'aw721041bd',
            });
            lookup018.addChild( returnAttributes018 );


            var returnAttribute027 = new ReturnAttribute({
               'targetAttribute' : 'numvalue',
               'artifactId' : 'Inspection.NumericLookup_value_numvalue',
               'id' : 'aw29be0fd1',
               'sourceAttribute' : 'value',
            });
            returnAttributes018.addChild( returnAttribute027 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AttachmentInfoView', false);
               trackTimer.startTracking();
            }

            var view020 = new View({
               'resource' : 'PlatformAttachmentInfoResource',
               'id' : 'Platform.AttachmentInfoView',
               'label' : MessageService.createStaticMessage('Attachment Details'),
            });
            ui001.addChild( view020 );

            var requiredResources034 = {
               'PlatformAttachmentInfoResource' : {
                  'reload' : true,
                  'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource',
                  'id' : 'awedbd920b',
               },
            };
            view020.addRequiredResources( requiredResources034 );

            var container029 = new Container({
               'resource' : 'PlatformAttachmentInfoResource',
               'artifactId' : 'Platform.AttachmentInfoView_container_0',
               'id' : 'aw22b80d5f',
            });
            view020.addChild( container029 );


            var group022 = new Group({
               'artifactId' : 'Platform.AttachmentInfoView_group_0',
               'id' : 'aw80e7b381',
            });
            container029.addChild( group022 );


            var groupitem093 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_0',
               'id' : 'aw15768e0',
            });
            group022.addChild( groupitem093 );


            var text118 = new Text({
               'resourceAttribute' : 'name',
               'editable' : true,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_0_name_Name',
               'id' : 'awddf675f4',
               'label' : MessageService.createStaticMessage('Name'),
               'required' : true,
            });
            groupitem093.addChild( text118 );


            var groupitem094 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_1',
               'id' : 'aw76505876',
            });
            group022.addChild( groupitem094 );


            var text119 = new Text({
               'resourceAttribute' : 'description',
               'editable' : true,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_1_description_Description',
               'id' : 'awc2735258',
               'label' : MessageService.createStaticMessage('Description'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem094.addChild( text119 );


            var groupitem095 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2',
               'id' : 'awef5909cc',
            });
            group022.addChild( groupitem095 );


            var text120 = new Text({
               'resourceAttribute' : 'category',
               'lookup' : 'PlatformAttachmentIn.CategoryLookup',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2_category_Folder',
               'id' : 'aw3a5ae064',
               'label' : MessageService.createStaticMessage('Folder'),
               'lookupAttribute' : 'folderName',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem095.addChild( text120 );

            var eventHandlers089 = [
               {
                     'method' : 'renderCategory',
                     'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2_category_Folder_eventHandlers_render_renderCategory',
                     'id' : 'awa205ff23',
                     'event' : 'render',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            text120.eventHandlers = eventHandlers089;

            var groupitem096 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_3',
               'id' : 'aw985e395a',
            });
            group022.addChild( groupitem096 );


            var text121 = new Text({
               'resourceAttribute' : 'fileType',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_3_fileType_FileType',
               'id' : 'awf0b55f9',
               'label' : MessageService.createStaticMessage('File Type'),
            });
            groupitem096.addChild( text121 );


            var groupitem097 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_4',
               'id' : 'aw63aacf9',
            });
            group022.addChild( groupitem097 );


            var text122 = new Text({
               'resourceAttribute' : 'fileSize',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_4_fileSize_FileSizeKB',
               'id' : 'awa8aac05f',
               'label' : MessageService.createStaticMessage('File Size (KB)'),
            });
            groupitem097.addChild( text122 );


            var footer012 = new Footer({
               'artifactId' : 'Platform.AttachmentInfoView_footer',
               'id' : 'awad3a6a43',
            });
            view020.addChild( footer012 );


            var button031 = new Button({
               'artifactId' : 'Platform.AttachmentInfoView_Cancel_button',
               'id' : 'aw61842429',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers090 = [
               {
                     'method' : 'handleBackButtonAttachmentDetailsView',
                     'artifactId' : 'Platform.AttachmentInfoView_Cancel_button_eventHandlers_click_handleBackButtonAttachmentDetailsView',
                     'id' : 'aw2e660b65',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button031.eventHandlers = eventHandlers090;
            footer012.addChild( button031 );


            var button032 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.AttachmentInfoView_Save_button',
               'id' : 'aw8904293b',
               'label' : MessageService.createStaticMessage('Save'),
            });
            var eventHandlers091 = [
               {
                     'method' : 'commitAttachmentEntry',
                     'artifactId' : 'Platform.AttachmentInfoView_Save_button_eventHandlers_click_commitAttachmentEntry',
                     'id' : 'awbff90b7f',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button032.eventHandlers = eventHandlers091;
            footer012.addChild( button032 );

            var eventHandlers092 = [
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
            view020.eventHandlers = eventHandlers092;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AttachmentFileDialog', false);
               trackTimer.startTracking();
            }

            var view021 = new View({
               'id' : 'Platform.AttachmentFileDialog',
            });
            ui001.addChild( view021 );


            var footer013 = new Footer({
               'artifactId' : 'Platform.AttachmentFileDialog_footer',
               'id' : 'awb513dc05',
            });
            view021.addChild( footer013 );


            var button033 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.UnsavedSketch_doNotAllow_button',
               'id' : 'aw150d1bc',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers093 = [
               {
                     'method' : 'closeFileDialog',
                     'artifactId' : 'Platform.AttachmentFileDialog_closeDialog',
                     'id' : 'awc0d2f7fd',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button033.eventHandlers = eventHandlers093;
            footer013.addChild( button033 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var lookup019 = new Lookup({
               'resource' : 'PlatformAttachmentCategoryResource',
               'id' : 'PlatformAttachmentIn.CategoryLookup',
               'label' : MessageService.createStaticMessage('Select Folder'),
            });
            ui001.addChild( lookup019 );

            var requiredResources035 = {
               'PlatformAttachmentCategoryResource' : {
                  'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource',
                  'id' : 'aw18cc3542',
               },
            };
            lookup019.addRequiredResources( requiredResources035 );


            var searchAttributes011 = new SearchAttributes({
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_searchAttributes',
               'id' : 'awb7d9341f',
            });

            var searchAttribute020 = new SearchAttribute({
               'name' : 'folderName',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_searchAttribute_folderName',
               'id' : 'aw9514e6e6',
            });
            searchAttributes011.addChild( searchAttribute020 );



            var listItemTemplate025 = new ListItemTemplate({
               'layout' : 'Item2Desc2',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_listItemTemplate_Item2Desc2',
               'id' : 'aweb3659e3',
            });

            var listtext058 = new ListText({
               'resourceAttribute' : 'folderName',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_Item2Desc2_folderName',
               'id' : 'aw48fc196b',
            });
            listItemTemplate025.addChild( listtext058 );



            var list025 = new List({
               'resource' : 'PlatformAttachmentCategoryResource',
               'listItemTemplate' : listItemTemplate025,
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_list',
               'id' : 'awe6857cc4',
               'searchAttributes' : searchAttributes011,
            });
            lookup019.addChild( list025 );


            var returnAttributes019 = new ReturnAttributes({
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_returnAttributes',
               'id' : 'aw4860e6b5',
            });
            lookup019.addChild( returnAttributes019 );


            var returnAttribute028 = new ReturnAttribute({
               'targetAttribute' : 'category',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_folderName_category',
               'id' : 'awb2f5d728',
               'sourceAttribute' : 'folderName',
            });
            returnAttributes019.addChild( returnAttribute028 );


            var actions007 = new Actions({
               'artifactId' : 'actions',
               'id' : 'aw548f1ef',
            });
            ui001.addChild( actions007 );


            var action018 = new Action({
               'overflow' : true,
               'artifactId' : 'ResetWorkList_action',
               'id' : 'aw956f5d3b',
               'label' : MessageService.createStaticMessage('Reset Work List'),
            });
            actions007.addChild( action018 );

            var eventHandlers094 = [
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
            action018.eventHandlers = eventHandlers094;

            var action019 = new Action({
               'overflow' : true,
               'artifactId' : 'PseudoOffline_goOffline',
               'id' : 'aw90309912',
               'label' : MessageService.createStaticMessage('Enable Offline Mode'),
            });
            actions007.addChild( action019 );

            var eventHandlers095 = [
               {
                     'method' : 'toggleOfflineMode',
                     'artifactId' : 'PseudoOffline_enableoffline_action_eventHandlers_click',
                     'id' : 'aw33d3b70c',
                     'event' : 'click',
                     'class' : 'platform.handlers.PseudoOfflineModeHandler',
               }
            ];
            action019.eventHandlers = eventHandlers095;

            var action020 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.Settings',
               'artifactId' : 'Settings_action',
               'id' : 'awc0b1927e',
               'label' : MessageService.createStaticMessage('Settings'),
            });
            actions007.addChild( action020 );


            var action021 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.HelpAbout',
               'artifactId' : 'About_action',
               'id' : 'aw49fae06b',
               'label' : MessageService.createStaticMessage('About'),
            });
            actions007.addChild( action021 );


            var action022 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.LogOutPrompt',
               'artifactId' : 'LogOut_action',
               'id' : 'awd566efa2',
               'label' : MessageService.createStaticMessage('Log Out'),
            });
            actions007.addChild( action022 );


            var action023 = new Action({
               'artifactId' : 'action',
               'id' : 'aw47cc8c92',
            });
            actions007.addChild( action023 );

            var eventHandlers096 = [
               {
                     'artifactId' : 'action_eventHandlers_click',
                     'id' : 'aw871940b2',
                     'event' : 'click',
                     'class' : 'platform.handlers.CreateQueryBaseHandler',
               }
            ];
            action023.eventHandlers = eventHandlers096;

            var erroractions001 = new ErrorActions({
               'artifactId' : 'erroractions',
               'id' : 'aw6a5d95e9',
            });
            ui001.addChild( erroractions001 );


            var action024 = new Action({
               'artifactId' : 'UndoChanges_action',
               'id' : 'aw2236d58a',
               'label' : MessageService.createStaticMessage('Undo Changes'),
            });
            erroractions001.addChild( action024 );

            var eventHandlers097 = [
               {
                     'method' : 'confirmClearChanges',
                     'artifactId' : 'UndoChanges_action_eventHandlers_click_confirmClearChanges',
                     'id' : 'awcf857f5c',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action024.eventHandlers = eventHandlers097;

            var action025 = new Action({
               'artifactId' : 'ResendChanges_action',
               'id' : 'awccf9e70e',
               'label' : MessageService.createStaticMessage('Resend Changes'),
            });
            erroractions001.addChild( action025 );

            var eventHandlers098 = [
               {
                     'method' : 'retryRecordChanges',
                     'artifactId' : 'ResendChanges_action_eventHandlers_click_retryRecordChanges',
                     'id' : 'aw543ac47e',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action025.eventHandlers = eventHandlers098;
            var eventHandlers099 = [
               {
                     'method' : 'none',
                     'artifactId' : 'eventHandlers_none_none',
                     'id' : 'aw1e2e7ded',
                     'event' : 'none',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            ui001.eventHandlers = eventHandlers099;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.emptyview', false);
               trackTimer.startTracking();
            }

            var view022 = new View({
               'showHeader' : false,
               'id' : 'Platform.emptyview',
               'showFooter' : false,
            });
            ui001.addChild( view022 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Notifications', false);
               trackTimer.startTracking();
            }

            var view023 = new View({
               'id' : 'Platform.Notifications',
               'label' : MessageService.createStaticMessage('My Notifications'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view023 );

            var requiredResources036 = {
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
            view023.addRequiredResources( requiredResources036 );


            var listItemTemplate026 = new ListItemTemplate({
               'layout' : 'NotificationList',
               'artifactId' : 'Platform.Notifications_listItemTemplate',
               'id' : 'aw718eb447',
            });

            var listtext059 = new ListText({
               'resourceAttribute' : 'uiDate',
               'layoutInsertAt' : 'date1',
               'artifactId' : 'Platform.Notifications_uiDate',
               'id' : 'aw56b07378',
            });
            listItemTemplate026.addChild( listtext059 );


            var listtext060 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Platform.Notifications_itemnum',
               'id' : 'aw4dbbd111',
            });
            listItemTemplate026.addChild( listtext060 );


            var listtext061 = new ListText({
               'resourceAttribute' : 'itemDesc',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Platform.Notifications_itemDesc',
               'id' : 'aw6bac97b9',
            });
            listItemTemplate026.addChild( listtext061 );

            var eventHandlers100 = [
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
            listItemTemplate026.eventHandlers = eventHandlers100;


            var list026 = new List({
               'resource' : 'osusernotification',
               'listItemTemplate' : listItemTemplate026,
               'artifactId' : 'Platform.Notifications_list',
               'id' : 'awb4916253',
               'label' : MessageService.createStaticMessage('List of notifications'),
            });
            view023.addChild( list026 );

            var eventHandlers101 = [
               {
                     'method' : 'renderMsgHistory',
                     'artifactId' : 'Platform.Notifications_eventHandlers_render_FromList',
                     'id' : 'awa8aedc90',
                     'event' : 'render',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            view023.eventHandlers = eventHandlers101;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog006 = new Dialog({
               'cssClass' : 'dialogDateTimeLookup',
               'resource' : 'PlatformDateLookupResource',
               'id' : 'Platform.DateTimeLookup',
               'label' : MessageService.createStaticMessage('Change Time or Date'),
            });
            ui001.addChild( dialog006 );

            var eventHandlers102 = [
               {
                     'method' : 'initLookup',
                     'artifactId' : 'Platform.DateTimeLookup_eventHandlers_show_initLookup',
                     'id' : 'aw576c44ec',
                     'event' : 'show',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            dialog006.eventHandlers = eventHandlers102;

            var container030 = new Container({
               'artifactId' : 'Platform.DateTimeLookup_container_0',
               'id' : 'aw3cdb37d7',
            });
            dialog006.addChild( container030 );


            var datetimepicker001 = new DateTimePicker({
               'artifactId' : 'Platform.DateTimeLookup_datetimepicker_0',
               'id' : 'aw7d2f0e0d',
            });
            container030.addChild( datetimepicker001 );


            var container031 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DateTimeLookup_container_1',
               'id' : 'aw4bdc0741',
            });
            dialog006.addChild( container031 );


            var button034 = new Button({
               'artifactId' : 'Platform.DateTimeLookup_Cancel_button',
               'id' : 'aw54d2f1bb',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers103 = [
               {
                     'method' : 'Cancel',
                     'artifactId' : 'Platform.DateTimeLookup_Cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw5ced0c47',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button034.eventHandlers = eventHandlers103;
            container031.addChild( button034 );


            var button035 = new Button({
               'artifactId' : 'Platform.DateTimeLookup_Clear_button',
               'id' : 'awfd1238bd',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers104 = [
               {
                     'method' : 'Clear',
                     'artifactId' : 'Platform.DateTimeLookup_Clear_button_eventHandlers_click_Clear',
                     'id' : 'aw47510f1f',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button035.eventHandlers = eventHandlers104;
            container031.addChild( button035 );


            var button036 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DateTimeLookup_OK_button',
               'id' : 'awb1e0d280',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers105 = [
               {
                     'method' : 'SetSelection',
                     'artifactId' : 'Platform.DateTimeLookup_OK_button_eventHandlers_click_SetSelection',
                     'id' : 'aw6c08b2ff',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button036.eventHandlers = eventHandlers105;
            container031.addChild( button036 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.HelpAbout', false);
               trackTimer.startTracking();
            }

            var view024 = new View({
               'resource' : 'PlatformLoginResource',
               'id' : 'Platform.HelpAbout',
               'label' : MessageService.createStaticMessage('About'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view024 );


            var container032 = new Container({
               'cssClass' : 'platformHelpAboutContainer',
               'artifactId' : 'Platform.HelpAbout_container_0',
               'id' : 'awf8c0259e',
            });
            view024.addChild( container032 );


            var image003 = new Image({
               'image' : 'ibmLogoDark.svg',
               'artifactId' : 'Platform.HelpAbout_image_0',
               'id' : 'awfebf608a',
            });
            container032.addChild( image003 );


            var text123 = new Text({
               'resourceAttribute' : 'appName',
               'cssClass' : 'productName bold textappearance-large',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_appName',
               'id' : 'aw27632fa8',
            });
            container032.addChild( text123 );


            var text124 = new Text({
               'cssClass' : 'version',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_Version7.5.2.1',
               'id' : 'awf060501a',
               'value' : MessageService.createStaticMessage('Version 7.6.4.0'),
            });
            container032.addChild( text124 );


            var text125 = new Text({
               'cssClass' : 'build',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_Buildnumberbuild',
               'id' : 'awd289f042',
               'value' : MessageService.createStaticMessage('Build number @build@'),
            });
            container032.addChild( text125 );


            var text126 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_LicensedMaterials-',
               'id' : 'aw31046f88',
               'value' : MessageService.createStaticMessage('Licensed Materials - Property of IBM. \u00A9IBM Corp. 2020. IBM, the IBM logo, and ibm.com are trademarks of IBM Corp., registered in many jurisdictions worldwide. Other product and service names might be trademarks of IBM or other companies. A current list of IBM trademarks is available on the Web at www.ibm.com\/legal\/copytrade.shtml. This Program is licensed under the terms of the license agreement for the Program. Please read this agreement carefully before using the Program. By using the Program, you agree to these terms.'),
            });
            container032.addChild( text126 );


            var group023 = new Group({
               'debugOnly' : 'true',
               'artifactId' : 'Platform.Settings_group_2',
               'id' : 'awc5ac5572',
            });
            container032.addChild( group023 );


            var groupitem098 = new GroupItem({
               'layout' : 'ScreenInfo',
               'cssClass' : 'screenInfo',
               'artifactId' : 'Platform.Settings_screenInfo_item',
               'id' : 'aw5de3d82',
            });
            group023.addChild( groupitem098 );


            var text127 = new Text({
               'cssClass' : 'textappearance-large',
               'layoutInsertAt' : 'title',
               'artifactId' : 'Platform.Settings_screenInfo_title',
               'id' : 'awd295621c',
               'value' : MessageService.createStaticMessage('Screen Information'),
            });
            groupitem098.addChild( text127 );


            var text128 = new Text({
               'resourceAttribute' : 'ppi',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pixels',
               'artifactId' : 'Platform.Settings_screenInfo_ppi_text',
               'id' : 'aw4219624',
               'label' : MessageService.createStaticMessage('PPI'),
            });
            groupitem098.addChild( text128 );


            var text129 = new Text({
               'resourceAttribute' : 'width',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'width',
               'artifactId' : 'Platform.Settings_screenInfo_width_text',
               'id' : 'aw6564040e',
               'label' : MessageService.createStaticMessage('Width'),
            });
            groupitem098.addChild( text129 );


            var text130 = new Text({
               'resourceAttribute' : 'height',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'height',
               'artifactId' : 'Platform.Settings_screenInfo_height_text',
               'id' : 'awcd6ab682',
               'label' : MessageService.createStaticMessage('Height'),
            });
            groupitem098.addChild( text130 );


            var text131 = new Text({
               'resourceAttribute' : 'layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'size',
               'artifactId' : 'Platform.Settings_screenInfo_layout_text',
               'id' : 'awd74c1b0',
               'label' : MessageService.createStaticMessage('Layout Size'),
            });
            groupitem098.addChild( text131 );


            var text132 = new Text({
               'resourceAttribute' : 'orientation',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'orientation',
               'artifactId' : 'Platform.Settings_screenInfo_orientation_text',
               'id' : 'aw22df9e6f',
               'label' : MessageService.createStaticMessage('Orientation'),
            });
            groupitem098.addChild( text132 );


            var text133 = new Text({
               'resourceAttribute' : 'density',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'density',
               'artifactId' : 'Platform.Settings_screenInfo_density_text',
               'id' : 'aw6b4b20e2',
               'label' : MessageService.createStaticMessage('Density'),
            });
            groupitem098.addChild( text133 );


            var text134 = new Text({
               'resourceAttribute' : 'pane0_layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pane0',
               'artifactId' : 'Platform.Settings_screenInfo_pane0',
               'id' : 'aw39d3d4a7',
               'label' : MessageService.createStaticMessage('Pane 1 Size'),
            });
            groupitem098.addChild( text134 );


            var text135 = new Text({
               'resourceAttribute' : 'pane1_layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pane1',
               'artifactId' : 'Platform.Settings_screenInfo_pane1',
               'id' : 'aw4ed4e431',
               'label' : MessageService.createStaticMessage('Pane 2 Size'),
            });
            groupitem098.addChild( text135 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Settings', false);
               trackTimer.startTracking();
            }

            var view025 = new View({
               'id' : 'Platform.Settings',
               'label' : MessageService.createStaticMessage('Settings'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view025 );

            var requiredResources037 = {
               'LastADDownload' : {
                  'artifactId' : 'Platform.Settings_LastADDownload',
                  'id' : 'aw879343e2',
               },
            };
            view025.addRequiredResources( requiredResources037 );

            var actions008 = new Actions({
               'artifactId' : 'Platform.Settings_actions',
               'id' : 'awb3f56d3b',
            });
            view025.addChild( actions008 );


            var action026 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.Settings_RefreshSystemData_action',
               'id' : 'awccb0ee65',
               'label' : MessageService.createStaticMessage('Refresh System Data'),
            });
            actions008.addChild( action026 );

            var eventHandlers106 = [
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
            action026.eventHandlers = eventHandlers106;

            var container033 = new Container({
               'resource' : 'LastADDownload',
               'artifactId' : 'Platform.Settings_container_0',
               'id' : 'aw74ff68b5',
            });
            view025.addChild( container033 );


            var group024 = new Group({
               'artifactId' : 'Platform.Settings_group_0',
               'id' : 'aw2ba2345e',
            });
            container033.addChild( group024 );


            var groupitem099 = new GroupItem({
               'transitionTo' : 'Platform.ChangePassword',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0',
               'id' : 'awd48342a3',
            });
            group024.addChild( groupitem099 );


            var text136 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0_ChangePassword',
               'id' : 'aw6c14924a',
               'value' : MessageService.createStaticMessage('Change Password'),
            });
            groupitem099.addChild( text136 );

            var eventHandlers107 = [
               {
                     'method' : 'enableChangePasswordFunction',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0_eventHandlers_render_enableChangePasswordFunction',
                     'id' : 'awa81f4a5',
                     'event' : 'render',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            groupitem099.eventHandlers = eventHandlers107;

            var groupitem100 = new GroupItem({
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0',
               'id' : 'aw82635ebb',
            });
            group024.addChild( groupitem100 );


            var text137 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_RefreshLookupData',
               'id' : 'awcddf2167',
               'value' : MessageService.createStaticMessage('Refresh Lookup Data'),
            });
            groupitem100.addChild( text137 );


            var text138 = new Text({
               'resourceAttribute' : 'downloadStatus',
               'editable' : false,
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_downloadStatus',
               'id' : 'aw8a1673e3',
            });
            groupitem100.addChild( text138 );

            var eventHandlers108 = [
               {
                     'method' : 'renderLastDownload',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_downloadStatus_eventHandlers_render_renderLastDownload',
                     'id' : 'aw72547fb7',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text138.eventHandlers = eventHandlers108;

            var text139 = new Text({
               'cssClass' : 'textappearance-small',
               'editable' : false,
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_Updatesthelookupd',
               'id' : 'aw38a24bec',
               'value' : MessageService.createStaticMessage('Updates the lookup data on your device. Lookup data includes objects, such as assets and locations, that can be added to records.'),
            });
            groupitem100.addChild( text139 );

            var eventHandlers109 = [
               {
                     'method' : 'refreshAdditionalData',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_eventHandlers_click_refreshAdditionalData',
                     'id' : 'aw93ad06fe',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            groupitem100.eventHandlers = eventHandlers109;

            var groupitem101 = new GroupItem({
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_3_Number_of_day_to_sync',
               'id' : 'aw97e66cd6',
            });
            group024.addChild( groupitem101 );


            var text140 = new Text({
               'resourceAttribute' : 'numberOfDaysToSync',
               'editable' : true,
               'artifactId' : 'Platform.Settings_LastADDownload_text_Number_of_day_to_sync',
               'id' : 'aw69a517e3',
               'label' : MessageService.createStaticMessage('How often changes need to be refresh in days:'),
            });
            groupitem101.addChild( text140 );

            var eventHandlers110 = [
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
            text140.eventHandlers = eventHandlers110;

            var groupitem102 = new GroupItem({
               'transitionTo' : 'Platform.AdvancedSettings',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.AdvancedSettings_0',
               'id' : 'aw741c4d60',
            });
            group024.addChild( groupitem102 );


            var text141 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.AdvancedSettings_0_AdvancedSettings',
               'id' : 'aw2d662633',
               'value' : MessageService.createStaticMessage('Advanced Settings'),
            });
            groupitem102.addChild( text141 );


            var group025 = new Group({
               'enableFeatureByProperty' : 'attachments.enabled',
               'artifactId' : 'Platform.Settings_group_1',
               'id' : 'aw5ca504c8',
            });
            container033.addChild( group025 );


            var groupitem103 = new GroupItem({
               'layout' : 'Item1Button1',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_1',
               'id' : 'awf5646e2d',
            });
            group025.addChild( groupitem103 );


            var text142 = new Text({
               'cssClass' : 'wrap-content',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_1_Downloadattachments',
               'id' : 'awd21c407a',
               'value' : MessageService.createStaticMessage('Download attachments with work list.'),
            });
            groupitem103.addChild( text142 );


            var checkbox010 = new CheckBox({
               'resourceAttribute' : 'downloadAttachments',
               'cssClass' : 'rightCheckBox',
               'editable' : true,
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Platform.Settings_downloadAttachments_checkbox',
               'id' : 'aw1a5b9aa2',
            });
            groupitem103.addChild( checkbox010 );

            var eventHandlers111 = [
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
            checkbox010.eventHandlers = eventHandlers111;

            var container034 = new Container({
               'artifactId' : 'ConnectionContainer',
               'id' : 'awef0b2658',
            });
            view025.addChild( container034 );


            var group026 = new Group({
               'artifactId' : 'Platform.Settings.ConnectionManagement.group',
               'id' : 'aw9ad5002d',
            });
            container034.addChild( group026 );


            var groupitem104 = new GroupItem({
               'layout' : 'ConnectionManagementLayout',
               'artifactId' : 'Platform.Settings.ConnectionManagement.groupItem1',
               'id' : 'aw81b0980b',
            });
            group026.addChild( groupitem104 );


            var text143 = new Text({
               'cssClass' : 'relatedRecords',
               'layoutInsertAt' : 'Title',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Title',
               'id' : 'aw1de21387',
               'value' : MessageService.createStaticMessage('Connection Behavior'),
            });
            groupitem104.addChild( text143 );


            var text144 = new Text({
               'cssClass' : 'wrap-content',
               'layoutInsertAt' : 'description',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Description',
               'id' : 'aw6b506a6f',
               'value' : MessageService.createStaticMessage('Specifies which network connections should enable the application to work online'),
            });
            groupitem104.addChild( text144 );


            var radiobutton001 = new RadioButton({
               'cssClass' : 'firstradiobutton',
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.AllConnections',
               'id' : 'awcb83aecb',
               'label' : MessageService.createStaticMessage('All Types'),
            });
            groupitem104.addChild( radiobutton001 );

            var eventHandlers112 = [
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
            radiobutton001.eventHandlers = eventHandlers112;

            var radiobutton002 = new RadioButton({
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button2',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.WiFi',
               'id' : 'aw42dec2bb',
               'label' : MessageService.createStaticMessage('Only WiFi'),
            });
            groupitem104.addChild( radiobutton002 );

            var eventHandlers113 = [
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
            radiobutton002.eventHandlers = eventHandlers113;

            var radiobutton003 = new RadioButton({
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button3',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.Cellular',
               'id' : 'aw7032481d',
               'label' : MessageService.createStaticMessage('Only Cellular'),
            });
            groupitem104.addChild( radiobutton003 );

            var eventHandlers114 = [
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
            radiobutton003.eventHandlers = eventHandlers114;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AdvancedSettings', false);
               trackTimer.startTracking();
            }

            var view026 = new View({
               'id' : 'Platform.AdvancedSettings',
               'label' : MessageService.createStaticMessage('Settings'),
            });
            ui001.addChild( view026 );


            var container035 = new Container({
               'artifactId' : 'Platform.AdvancedSettings_container_0',
               'id' : 'aw5c13274d',
            });
            view026.addChild( container035 );


            var group027 = new Group({
               'artifactId' : 'Platform.AdvancedSettings_group_0',
               'id' : 'awebdfb82c',
            });
            container035.addChild( group027 );


            var groupitem105 = new GroupItem({
               'transitionTo' : 'Platform.TimeTrackReport',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0',
               'id' : 'awba4384a8',
            });
            group027.addChild( groupitem105 );


            var text145 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0_TrackPerformanceDa',
               'id' : 'awc0a6dde7',
               'value' : MessageService.createStaticMessage('Track Performance Data'),
            });
            groupitem105.addChild( text145 );


            var text146 = new Text({
               'cssClass' : 'red-text',
               'editable' : false,
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0_Thisoptionusesmem',
               'id' : 'aw4367e95f',
               'value' : MessageService.createStaticMessage('This option uses memory and might slow the performance of your device. Disable performance tracking when you are done.'),
            });
            groupitem105.addChild( text146 );


            var groupitem106 = new GroupItem({
               'transitionTo' : 'Platform.LoggerReport',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0',
               'id' : 'aw10ca73e0',
            });
            group027.addChild( groupitem106 );


            var text147 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0_Logging',
               'id' : 'awffa3ff9c',
               'value' : MessageService.createStaticMessage('Logging'),
            });
            groupitem106.addChild( text147 );


            var text148 = new Text({
               'cssClass' : 'red-text',
               'editable' : false,
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0_Thisoptionusesmem',
               'id' : 'aw30da1efa',
               'value' : MessageService.createStaticMessage('This option uses memory and might slow the performance of your device. Disable logging when you are done.'),
            });
            groupitem106.addChild( text148 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.LoggerReport', false);
               trackTimer.startTracking();
            }

            var view027 = new View({
               'cssClass' : 'loggerReport',
               'scrollDir' : 'vh',
               'id' : 'Platform.LoggerReport',
               'label' : MessageService.createStaticMessage('Logging Data'),
            });
            ui001.addChild( view027 );


            var actions009 = new Actions({
               'artifactId' : 'Platform.LoggerReport_actions',
               'id' : 'aw5b090344',
            });
            view027.addChild( actions009 );


            var action027 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableErrorLogging_action',
               'id' : 'awc05e82b4',
               'label' : MessageService.createStaticMessage('Enable Error Logging'),
            });
            actions009.addChild( action027 );

            var eventHandlers115 = [
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
            action027.eventHandlers = eventHandlers115;

            var action028 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableInfoLogging_action',
               'id' : 'aw6d618335',
               'label' : MessageService.createStaticMessage('Enable Info Logging'),
            });
            actions009.addChild( action028 );

            var eventHandlers116 = [
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
            action028.eventHandlers = eventHandlers116;

            var action029 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableDebugLogging_action',
               'id' : 'awaa11689b',
               'label' : MessageService.createStaticMessage('Enable Debug Logging'),
            });
            actions009.addChild( action029 );

            var eventHandlers117 = [
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
            action029.eventHandlers = eventHandlers117;

            var action030 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.TransLoggerReport',
               'artifactId' : 'Platform.LoggerReport_ViewTransactionLog_action',
               'id' : 'awdaed3d40',
               'label' : MessageService.createStaticMessage('View Transaction Log'),
            });
            actions009.addChild( action030 );


            var action031 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_ClearLogData_action',
               'id' : 'awb6d3895c',
               'label' : MessageService.createStaticMessage('Clear Log Data'),
            });
            actions009.addChild( action031 );

            var eventHandlers118 = [
               {
                     'method' : 'clear',
                     'artifactId' : 'Platform.LoggerReport_ClearLogData_action_eventHandlers_click_clear',
                     'id' : 'aw10958c5',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action031.eventHandlers = eventHandlers118;

            var action032 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_UploadLog_action',
               'id' : 'aw7510fce3',
               'label' : MessageService.createStaticMessage('Save Log'),
            });
            actions009.addChild( action032 );

            var eventHandlers119 = [
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
            action032.eventHandlers = eventHandlers119;

            var action033 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EmailLog_action',
               'id' : 'aw90d8a401',
               'label' : MessageService.createStaticMessage('Email Log'),
            });
            actions009.addChild( action033 );

            var eventHandlers120 = [
               {
                     'method' : 'emailCurrent',
                     'artifactId' : 'Platform.LoggerReport_EmailLog_action_eventHandlers_click_emailCurrent',
                     'id' : 'awf10881b9',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action033.eventHandlers = eventHandlers120;
            var eventHandlers121 = [
               {
                     'method' : 'renderLoggerReport',
                     'artifactId' : 'Platform.LoggerReport_eventHandlers_show_renderLoggerReport',
                     'id' : 'aw9b7c5c73',
                     'event' : 'show',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            view027.eventHandlers = eventHandlers121;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.TransLoggerReport', false);
               trackTimer.startTracking();
            }

            var view028 = new View({
               'scrollDir' : 'vh',
               'id' : 'Platform.TransLoggerReport',
               'label' : MessageService.createStaticMessage('Logging Data'),
            });
            ui001.addChild( view028 );


            var actions010 = new Actions({
               'artifactId' : 'Platform.TransLoggerReport_actions',
               'id' : 'aw49b00040',
            });
            view028.addChild( actions010 );


            var action034 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TransLoggerReport_ClearLogData_action',
               'id' : 'awdce21e26',
               'label' : MessageService.createStaticMessage('Clear Log Data'),
            });
            actions010.addChild( action034 );

            var eventHandlers122 = [
               {
                     'method' : 'clearTransLog',
                     'artifactId' : 'Platform.TransLoggerReport_ClearLogData_action_eventHandlers_click_clear',
                     'id' : 'aw71c2398e',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action034.eventHandlers = eventHandlers122;

            var action035 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TransLoggerReport_EmailLog_action',
               'id' : 'aw29f3639',
               'label' : MessageService.createStaticMessage('Email Log'),
            });
            actions010.addChild( action035 );

            var eventHandlers123 = [
               {
                     'method' : 'emailCurrentTranslog',
                     'artifactId' : 'Platform.TransLoggerReport_EmailLog_action_eventHandlers_click_emailCurrent',
                     'id' : 'awfd97a236',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action035.eventHandlers = eventHandlers123;
            var eventHandlers124 = [
               {
                     'method' : 'renderTransLoggerReport',
                     'artifactId' : 'Platform.TransLoggerReport_eventHandlers_show_renderTransLoggerReport',
                     'id' : 'aw4261a98a',
                     'event' : 'show',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            view028.eventHandlers = eventHandlers124;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.ChangePassword', false);
               trackTimer.startTracking();
            }

            var view029 = new View({
               'resource' : 'PlatformChangePasswordForm',
               'id' : 'Platform.ChangePassword',
               'label' : MessageService.createStaticMessage('Change Password'),
            });
            ui001.addChild( view029 );


            var container036 = new Container({
               'cssClass' : 'changePasswordForm',
               'artifactId' : 'Platform.ChangePassword_container_0',
               'id' : 'awf7c2a2a',
            });
            view029.addChild( container036 );


            var text149 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.ChangePassword_container_0_errorMsg',
               'id' : 'aw3ed16fe1',
            });
            container036.addChild( text149 );


            var text150 = new Text({
               'resourceAttribute' : 'infoMsg',
               'cssClass' : 'infoMsg',
               'editable' : false,
               'artifactId' : 'Platform.ChangePassword_container_0_infoMsg',
               'id' : 'awe28ebedd',
            });
            container036.addChild( text150 );


            var text151 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'currentpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_currentpassword',
               'id' : 'aw7df0b045',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Current password'),
            });
            container036.addChild( text151 );

            var eventHandlers125 = [
               {
                     'method' : 'hidePasswordField',
                     'artifactId' : 'Platform.ChangePassword_container_0_currentpassword_eventHandlers_render_hidePasswordField',
                     'id' : 'aw27f3eacb',
                     'event' : 'render',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            text151.eventHandlers = eventHandlers125;

            var text152 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'newpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_newpassword',
               'id' : 'aw618d08b5',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('New password'),
            });
            container036.addChild( text152 );


            var text153 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'confirmnewpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_confirmnewpassword',
               'id' : 'awd274537a',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Confirm password'),
            });
            container036.addChild( text153 );


            var button037 = new Button({
               'artifactId' : 'Platform.ChangePassword_Cancel_button',
               'id' : 'aw96c63135',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers126 = [
               {
                     'method' : 'cancelPasswordClickHandler',
                     'artifactId' : 'Platform.ChangePassword_Cancel_button_eventHandlers_click_cancelPasswordClickHandler',
                     'id' : 'aw7492b621',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button037.eventHandlers = eventHandlers126;
            container036.addChild( button037 );


            var button038 = new Button({
               'artifactId' : 'Platform.ChangePassword_Change_button',
               'id' : 'aw5cd0477f',
               'label' : MessageService.createStaticMessage('Change'),
               'primary' : 'true',
            });
            var eventHandlers127 = [
               {
                     'method' : 'changePasswordClickHandler',
                     'artifactId' : 'Platform.ChangePassword_Change_button_eventHandlers_click_changePasswordClickHandler',
                     'id' : 'awfdba8feb',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button038.eventHandlers = eventHandlers127;
            container036.addChild( button038 );

            var eventHandlers128 = [
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
            view029.eventHandlers = eventHandlers128;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.RetrieveOldPassword', false);
               trackTimer.startTracking();
            }

            var view030 = new View({
               'resource' : 'PlatformChangePasswordForm',
               'showHeader' : false,
               'showOverflow' : false,
               'id' : 'Platform.RetrieveOldPassword',
               'label' : MessageService.createStaticMessage('Recover App Data'),
            });
            ui001.addChild( view030 );


            var container037 = new Container({
               'cssClass' : 'changePasswordForm',
               'artifactId' : 'Platform.RetrieveOldPassword_container_0',
               'id' : 'awecdef66d',
            });
            view030.addChild( container037 );


            var text154 = new Text({
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_Enterthepasswordt',
               'id' : 'aw14ebf03b',
               'value' : MessageService.createStaticMessage('Enter the password that you last used to log in to the app. If you do not have this password, you must reset the app before you can log in.'),
            });
            container037.addChild( text154 );


            var text155 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_errorMsg',
               'id' : 'aw9574c917',
            });
            container037.addChild( text155 );


            var text156 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'currentpassword',
               'editable' : true,
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_currentpassword',
               'id' : 'aw97b6c3b7',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Previous password'),
            });
            container037.addChild( text156 );


            var button039 = new Button({
               'artifactId' : 'Platform.RetrieveOldPassword_Recover_button',
               'id' : 'aw3a0ff2',
               'label' : MessageService.createStaticMessage('Recover'),
               'primary' : 'true',
            });
            var eventHandlers129 = [
               {
                     'method' : 'recoverOldPasswordClickHandler',
                     'artifactId' : 'Platform.RetrieveOldPassword_Recover_button_eventHandlers_click_recoverOldPasswordClickHandler',
                     'id' : 'awecb18d1c',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button039.eventHandlers = eventHandlers129;
            container037.addChild( button039 );


            var button040 = new Button({
               'artifactId' : 'Platform.RetrieveOldPassword_Reset_button',
               'id' : 'aw8bb551dc',
               'label' : MessageService.createStaticMessage('Reset'),
            });
            var eventHandlers130 = [
               {
                     'method' : 'resetStorageClickHandler',
                     'artifactId' : 'Platform.RetrieveOldPassword_Reset_button_eventHandlers_click_resetStorageClickHandler',
                     'id' : 'awfe7a73d2',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button040.eventHandlers = eventHandlers130;
            container037.addChild( button040 );

            var eventHandlers131 = [
               {
                     'method' : 'initializeRetrieveOldPasswordView',
                     'artifactId' : 'Platform.RetrieveOldPassword_eventHandlers_show_initializeRetrieveOldPasswordView',
                     'id' : 'aw26f17c5a',
                     'event' : 'show',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            view030.eventHandlers = eventHandlers131;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog007 = new Dialog({
               'closeOnBackgroundClick' : 'true',
               'id' : 'Platform.ConfirmResetDataStore',
            });
            ui001.addChild( dialog007 );


            var container038 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmResetDataStore_container_0',
               'id' : 'awacb7e535',
            });
            dialog007.addChild( container038 );


            var text157 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmResetDataStore_container_0_WarningAllappdat',
               'id' : 'aw68bdf3e8',
               'value' : MessageService.createStaticMessage('Warning! All app data on the device will be cleared. Any data that has not been sent to the server will be lost.'),
            });
            container038.addChild( text157 );


            var container039 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmResetDataStore_container_1',
               'id' : 'awdbb0d5a3',
            });
            dialog007.addChild( container039 );


            var button041 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmResetDataStore_Continue_button',
               'id' : 'awba645d10',
               'label' : MessageService.createStaticMessage('Continue'),
            });
            var eventHandlers132 = [
               {
                     'method' : 'resetDataStoreClickHandler',
                     'artifactId' : 'Platform.ConfirmResetDataStore_Continue_button_eventHandlers_click_resetDataStoreClickHandler',
                     'id' : 'aw5074e6c8',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button041.eventHandlers = eventHandlers132;
            container039.addChild( button041 );


            var button042 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmResetDataStore_Cancel_button',
               'id' : 'aw50474341',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers133 = [
               {
                     'method' : 'cancelResetDataStoreClickHandler',
                     'artifactId' : 'Platform.ConfirmResetDataStore_Cancel_button_eventHandlers_click_cancelResetDataStoreClickHandler',
                     'id' : 'awda7121b8',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button042.eventHandlers = eventHandlers133;
            container039.addChild( button042 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.TimeTrackReport', false);
               trackTimer.startTracking();
            }

            var view031 = new View({
               'cssClass' : 'loggerReport',
               'scrollDir' : 'vh',
               'id' : 'Platform.TimeTrackReport',
               'label' : MessageService.createStaticMessage('Performance Data'),
            });
            ui001.addChild( view031 );

            var requiredResources038 = {
               'timeTrack' : {
                  'artifactId' : 'Platform.TimeTrackReport_timeTrack',
                  'id' : 'aw8d707cee',
               },
            };
            view031.addRequiredResources( requiredResources038 );

            var actions011 = new Actions({
               'artifactId' : 'Platform.TimeTrackReport_actions',
               'id' : 'aw9d9a4864',
            });
            view031.addChild( actions011 );


            var action036 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_EnablePerformanceTracking_action',
               'id' : 'aw34736a63',
               'label' : MessageService.createStaticMessage('Enable Performance Tracking'),
            });
            actions011.addChild( action036 );

            var eventHandlers134 = [
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
            action036.eventHandlers = eventHandlers134;

            var action037 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_ClearPerformanceData_action',
               'id' : 'aw1edf54cf',
               'label' : MessageService.createStaticMessage('Clear Performance Data'),
            });
            actions011.addChild( action037 );

            var eventHandlers135 = [
               {
                     'method' : 'clear',
                     'artifactId' : 'Platform.TimeTrackReport_ClearPerformanceData_action_eventHandlers_click_clear',
                     'id' : 'aw85273d1b',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action037.eventHandlers = eventHandlers135;

            var action038 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_EmailReport_action',
               'id' : 'aw6ff8fae1',
               'label' : MessageService.createStaticMessage('Email Report'),
            });
            actions011.addChild( action038 );

            var eventHandlers136 = [
               {
                     'method' : 'emailCurrent',
                     'artifactId' : 'Platform.TimeTrackReport_EmailReport_action_eventHandlers_click_emailCurrent',
                     'id' : 'awc00583a0',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action038.eventHandlers = eventHandlers136;
            var eventHandlers137 = [
               {
                     'method' : 'renderTT',
                     'artifactId' : 'Platform.TimeTrackReport_eventHandlers_show_renderTT',
                     'id' : 'awca05a315',
                     'event' : 'show',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            view031.eventHandlers = eventHandlers137;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog008 = new Dialog({
               'closeOnBackgroundClick' : 'true',
               'id' : 'Platform.ListLongPressDialog',
            });
            ui001.addChild( dialog008 );



            var listItemTemplate027 = new ListItemTemplate({
               'cssClass' : 'dialogListItem textappearance-medium',
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_listItemTemplate',
               'id' : 'awefd72fd8',
            });

            var listtext062 = new ListText({
               'resourceAttribute' : 'label',
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_label',
               'id' : 'awe2e495b2',
            });
            listItemTemplate027.addChild( listtext062 );



            var list027 = new List({
               'resource' : 'PlatformLongPressResource',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate027,
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_list',
               'id' : 'aw64ff84d9',
               'queryBase' : '',
            });
            dialog008.addChild( list027 );


            var dialog009 = new Dialog({
               'id' : 'Platform.LoadingAdditionalData',
            });
            ui001.addChild( dialog009 );


            var container040 = new Container({
               'artifactId' : 'Platform.LoadingAdditionalData_container_0',
               'id' : 'aw48b509d9',
            });
            dialog009.addChild( container040 );


            var text158 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadingAdditionalData_container_0_Downloadinglookupd',
               'id' : 'aw4cec47c0',
               'value' : MessageService.createStaticMessage('Downloading lookup data.'),
            });
            container040.addChild( text158 );


            var button043 = new Button({
               'artifactId' : 'Platform.LoadingAdditionalData_Cancel_button',
               'id' : 'awb30b5f0',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers138 = [
               {
                     'method' : 'cancelADDownload',
                     'artifactId' : 'Platform.LoadingAdditionalData_Cancel_button_eventHandlers_click_cancelADDownload',
                     'id' : 'awc41dac4c',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button043.eventHandlers = eventHandlers138;
            container040.addChild( button043 );


            var dialog010 = new Dialog({
               'id' : 'Platform.AdditionalDataNoConn',
            });
            ui001.addChild( dialog010 );


            var container041 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.AdditionalDataNoConn_container_0',
               'id' : 'aw666da461',
            });
            dialog010.addChild( container041 );


            var text159 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.AdditionalDataNoConn_container_0_Lookupdatacouldno',
               'id' : 'aw96b90fd8',
               'value' : MessageService.createStaticMessage('Lookup data could not be downloaded. Go to Settings > Refresh Lookup Data when you are online.'),
            });
            container041.addChild( text159 );


            var container042 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.AdditionalDataNoConn_container_1',
               'id' : 'aw116a94f7',
            });
            dialog010.addChild( container042 );


            var button044 = new Button({
               'artifactId' : 'Platform.AdditionalDataNoConn_OK_button',
               'id' : 'aw9b370278',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers139 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.AdditionalDataNoConn_OK_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw108159b3',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button044.eventHandlers = eventHandlers139;
            container042.addChild( button044 );


            var dialog011 = new Dialog({
               'id' : 'Platform.ConfirmReloadWorkList',
            });
            ui001.addChild( dialog011 );


            var container043 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_0',
               'id' : 'aw2054aa9e',
            });
            dialog011.addChild( container043 );


            var text160 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_0_Doyouwanttoclose',
               'id' : 'aw83f81a4b',
               'value' : MessageService.createStaticMessage('Reloading the work list takes time if you are downloading large amounts of data.  Are you sure that you want to continue?'),
            });
            container043.addChild( text160 );


            var container044 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_1',
               'id' : 'aw57539a08',
            });
            dialog011.addChild( container044 );


            var button045 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmReloadWorkList_Yes_button',
               'id' : 'aw5bc89627',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers140 = [
               {
                     'method' : 'reloadConfirmed',
                     'artifactId' : 'Platform.ConfirmReloadWorkList_Yes_button_eventHandlers_click_processDialog',
                     'id' : 'awafdb701f',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button045.eventHandlers = eventHandlers140;
            container044.addChild( button045 );


            var button046 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.ConfirmReloadWorkList_No_button',
               'id' : 'aw4487e9e7',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers141 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.ConfirmReloadWorkList_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw56d1743',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button046.eventHandlers = eventHandlers141;
            container044.addChild( button046 );


            var dialog012 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.ReloadingCurrentWorklist',
            });
            ui001.addChild( dialog012 );


            var container045 = new Container({
               'cssClass' : 'mblSimpleMessageText',
               'artifactId' : 'Platform.ReloadCurrentWorklist_container_0',
               'id' : 'awce0c0b72',
            });
            dialog012.addChild( container045 );


            var text161 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.ReloadCurrentWorklist_container_0_progressMsg',
               'id' : 'awaa894933',
            });
            container045.addChild( text161 );


            var dialog013 = new Dialog({
               'id' : 'Platform.AdditionalDataFailed',
            });
            ui001.addChild( dialog013 );


            var container046 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.AdditionalDataFailed.container',
               'id' : 'aw275627fb',
            });
            dialog013.addChild( container046 );


            var text162 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.AdditionalDataFailed.text',
               'id' : 'awb25e5b66',
               'value' : MessageService.createStaticMessage('Lookup data could not be downloaded. If you are connected, go to Settings > Refresh Lookup Data.'),
            });
            container046.addChild( text162 );


            var container047 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.AdditionalDataFailed.container2',
               'id' : 'aw309dc3be',
            });
            dialog013.addChild( container047 );


            var button047 = new Button({
               'artifactId' : 'Platform.AdditionalDataFailed.button',
               'id' : 'aw39111677',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers142 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.AdditionalDataFailed.eventHandler',
                     'id' : 'awacbc5440',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button047.eventHandlers = eventHandlers142;
            container047.addChild( button047 );


            var dialog014 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.LoadingSystemData',
            });
            ui001.addChild( dialog014 );


            var container048 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadingSystemData_container_0',
               'id' : 'aw13d3cc6a',
            });
            dialog014.addChild( container048 );


            var text163 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadingSystemData_container_0_Downloadingsystemd',
               'id' : 'awfc1b5f79',
               'value' : MessageService.createStaticMessage('Downloading system data.'),
            });
            container048.addChild( text163 );


            var text164 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.LoadingSystemData_container_0_progressMsg',
               'id' : 'aw635d9968',
            });
            container048.addChild( text164 );


            var dialog015 = new Dialog({
               'id' : 'Platform.LoadAdditionalDataYesNo',
            });
            ui001.addChild( dialog015 );


            var container049 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0',
               'id' : 'aw22834650',
            });
            dialog015.addChild( container049 );


            var text165 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Thelookupdatafor',
               'id' : 'aw89be3f27',
               'value' : MessageService.createStaticMessage('The lookup data for this app must be downloaded. Download it now or later?'),
            });
            container049.addChild( text165 );

            var eventHandlers143 = [
               {
                     'method' : 'theLookupdataText',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Thelookupdatafor_eventHandlers_render_setAdditionalDownloadText',
                     'id' : 'aw9051ca24',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text165.eventHandlers = eventHandlers143;

            var text166 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Retrylookupdatafor',
               'id' : 'awb287d1cc',
               'value' : MessageService.createStaticMessage('Lookup data was partially downloaded. Click Retry to download the remaining lookup data. Click Reset to refresh all of the lookup data. Click Close if you are through downloading lookup data.'),
            });
            container049.addChild( text166 );

            var eventHandlers144 = [
               {
                     'method' : 'retrylookupdataText',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Retrylookupdatafor_eventHandlers_render_setAdditionalDownloadText',
                     'id' : 'aw5ad2ed31',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text166.eventHandlers = eventHandlers144;

            var text167 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Whenrunninginabr',
               'id' : 'awb757e4d5',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per lookup.'),
            });
            container049.addChild( text167 );

            var eventHandlers145 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'awb7d271e9',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text167.eventHandlers = eventHandlers145;

            var container050 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_1',
               'id' : 'aw558476c6',
            });
            dialog015.addChild( container050 );


            var button048 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Later_button',
               'id' : 'awa2501fe3',
               'label' : MessageService.createStaticMessage('Later'),
            });
            var eventHandlers146 = [
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
            button048.eventHandlers = eventHandlers146;
            container050.addChild( button048 );


            var button049 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Now_button',
               'id' : 'aw35a14c11',
               'label' : MessageService.createStaticMessage('Now'),
            });
            var eventHandlers147 = [
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
            button049.eventHandlers = eventHandlers147;
            container050.addChild( button049 );


            var button050 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Retry_button',
               'id' : 'aw626b616d',
               'label' : MessageService.createStaticMessage('Retry'),
            });
            var eventHandlers148 = [
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
            button050.eventHandlers = eventHandlers148;
            container050.addChild( button050 );


            var dialog016 = new Dialog({
               'id' : 'Platform.LoadAdditionalDataDeltaDownload',
            });
            ui001.addChild( dialog016 );


            var container051 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0',
               'id' : 'aw79883531',
            });
            dialog016.addChild( container051 );


            var text168 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Thelookupdatafor',
               'id' : 'aw3d94f20f',
               'value' : MessageService.createStaticMessage('Click Changes to download only lookup data changes.'),
            });
            container051.addChild( text168 );


            var text169 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Retrylookupdatafor',
               'id' : 'awa0f7541',
               'value' : MessageService.createStaticMessage('Click All to download all the lookup data.'),
            });
            container051.addChild( text169 );


            var text170 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_cancel',
               'id' : 'aw62270e4c',
               'value' : MessageService.createStaticMessage('Click Cancel to cancel the lookup download.'),
            });
            container051.addChild( text170 );


            var text171 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_action',
               'id' : 'aw73fd47ac',
               'value' : MessageService.createStaticMessage('Which refresh do you want to perform?'),
            });
            container051.addChild( text171 );


            var text172 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Whenrunninginabr',
               'id' : 'aw37d29fd',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per lookup.'),
            });
            container051.addChild( text172 );

            var eventHandlers149 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'aw1edf10f3',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text172.eventHandlers = eventHandlers149;

            var container052 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_1',
               'id' : 'awe8f05a7',
            });
            dialog016.addChild( container052 );


            var button051 = new Button({
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Cancel_button',
               'id' : 'awb2f881ae',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers150 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'awcaa29f5a',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button051.eventHandlers = eventHandlers150;
            container052.addChild( button051 );


            var button052 = new Button({
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_RefreshAll_button',
               'id' : 'aw8ab2882',
               'label' : MessageService.createStaticMessage('All'),
            });
            var eventHandlers151 = [
               {
                     'method' : 'confirmADDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Now_button_eventHandlers_click_confirmADDownload',
                     'id' : 'awa5526bd4',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button052.eventHandlers = eventHandlers151;
            container052.addChild( button052 );


            var button053 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_RefreshChanges_button',
               'id' : 'aw9c0cf49a',
               'label' : MessageService.createStaticMessage('Changes'),
            });
            var eventHandlers152 = [
               {
                     'method' : 'confirmADDeltaDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Later_button_eventHandlers_click_confirmADDeltaDownload',
                     'id' : 'aw46619626',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button053.eventHandlers = eventHandlers152;
            container052.addChild( button053 );


            var dialog017 = new Dialog({
               'id' : 'Platform.LoadSystemDataDeltaDownload',
            });
            ui001.addChild( dialog017 );


            var container053 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0',
               'id' : 'aw47beed1c',
            });
            dialog017.addChild( container053 );


            var text173 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Thelookupdatafor',
               'id' : 'aw682ebd2f',
               'value' : MessageService.createStaticMessage('Click Changes to download only the system data changes.'),
            });
            container053.addChild( text173 );


            var text174 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Retrylookupdatafor',
               'id' : 'aw79e85858',
               'value' : MessageService.createStaticMessage('Click All to download all the system data.'),
            });
            container053.addChild( text174 );


            var text175 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_cancel',
               'id' : 'awcb50ae6',
               'value' : MessageService.createStaticMessage('Click Cancel to cancel the system download.'),
            });
            container053.addChild( text175 );


            var text176 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_action',
               'id' : 'aw1d6f4306',
               'value' : MessageService.createStaticMessage('Which refresh do you want to perform?'),
            });
            container053.addChild( text176 );


            var text177 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Whenrunninginabr',
               'id' : 'aw56c766dd',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per System.'),
            });
            container053.addChild( text177 );

            var eventHandlers153 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'aw37b2ac2a',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text177.eventHandlers = eventHandlers153;

            var container054 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_1',
               'id' : 'aw30b9dd8a',
            });
            dialog017.addChild( container054 );


            var button054 = new Button({
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Cancel_button',
               'id' : 'aw1adabf91',
               'label' : MessageService.createStaticMessage('cancel'),
            });
            var eventHandlers154 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw2569598a',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button054.eventHandlers = eventHandlers154;
            container054.addChild( button054 );


            var button055 = new Button({
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_RefreshAll_button',
               'id' : 'awf1a96515',
               'label' : MessageService.createStaticMessage('All'),
            });
            var eventHandlers155 = [
               {
                     'method' : 'downloadSystemData',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Now_button_eventHandlers_click_confirmdownloadSystemData',
                     'id' : 'aw8d600b10',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button055.eventHandlers = eventHandlers155;
            container054.addChild( button055 );


            var button056 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_RefreshChanges_button',
               'id' : 'aw328e1b2e',
               'label' : MessageService.createStaticMessage('Changes'),
            });
            var eventHandlers156 = [
               {
                     'method' : 'confirmSystemDataDeltaDownload',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Later_button_eventHandlers_click_confirmSystemDataDeltaDownload',
                     'id' : 'awbd23e928',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button056.eventHandlers = eventHandlers156;
            container054.addChild( button056 );


            var dialog018 = new Dialog({
               'id' : 'Platform.ExitApplicationPrompt',
            });
            ui001.addChild( dialog018 );


            var container055 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ExitApplicationPrompt_container_0',
               'id' : 'aw71d2ddca',
            });
            dialog018.addChild( container055 );


            var text178 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ExitApplicationPrompt_container_0_Doyouwanttoclose',
               'id' : 'aw4e0184c3',
               'value' : MessageService.createStaticMessage('Do you want to close the app?'),
            });
            container055.addChild( text178 );


            var container056 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ExitApplicationPrompt_container_1',
               'id' : 'aw6d5ed5c',
            });
            dialog018.addChild( container056 );


            var button057 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ExitApplicationPrompt_Yes_button',
               'id' : 'aw3bff816',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers157 = [
               {
                     'method' : 'processDialog',
                     'artifactId' : 'Platform.ExitApplicationPrompt_Yes_button_eventHandlers_click_processDialog',
                     'id' : 'awfa220200',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button057.eventHandlers = eventHandlers157;
            container056.addChild( button057 );


            var button058 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.ExitApplicationPrompt_No_button',
               'id' : 'aw5ba5c9da',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers158 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.ExitApplicationPrompt_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw5256cc3',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button058.eventHandlers = eventHandlers158;
            container056.addChild( button058 );


            var dialog019 = new Dialog({
               'id' : 'Platform.LogOutPrompt',
            });
            ui001.addChild( dialog019 );


            var container057 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LogOutPrompt_container_0',
               'id' : 'awcf20d41b',
            });
            dialog019.addChild( container057 );


            var text179 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LogOutPrompt_container_0_Doyouwanttologo',
               'id' : 'aw15a96005',
               'value' : MessageService.createStaticMessage('Do you want to log out of the app?'),
            });
            container057.addChild( text179 );


            var container058 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LogOutPrompt_container_1',
               'id' : 'awb827e48d',
            });
            dialog019.addChild( container058 );


            var button059 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.LogOutPrompt_No_button',
               'id' : 'awfbbbd446',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers159 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.LogOutPrompt_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw364ad2c7',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button059.eventHandlers = eventHandlers159;
            container058.addChild( button059 );


            var button060 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LogOutPrompt_Yes_button',
               'id' : 'awfaa63964',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers160 = [
               {
                     'method' : 'logoutDialog',
                     'artifactId' : 'Platform.LogOutPrompt_Yes_button_eventHandlers_click_logoutDialog',
                     'id' : 'aw82db52a6',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button060.eventHandlers = eventHandlers160;
            container058.addChild( button060 );


            var dialog020 = new Dialog({
               'cssClass' : 'dialogDurationLookup',
               'resource' : 'PlatformDateLookupResource',
               'id' : 'Platform.DurationLookup',
               'label' : MessageService.createStaticMessage('Change Duration'),
            });
            ui001.addChild( dialog020 );

            var eventHandlers161 = [
               {
                     'method' : 'initLookup',
                     'artifactId' : 'Platform.DurationLookup_eventHandlers_show_initLookup',
                     'id' : 'aw2898d5b1',
                     'event' : 'show',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            dialog020.eventHandlers = eventHandlers161;

            var container059 = new Container({
               'artifactId' : 'Platform.DurationLookup_container_0',
               'id' : 'awc7b6d6e2',
            });
            dialog020.addChild( container059 );


            var durationpicker001 = new DurationPicker({
               'artifactId' : 'Platform.DurationLookup_durationpicker_0',
               'id' : 'awbdafea4f',
            });
            container059.addChild( durationpicker001 );


            var container060 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DurationLookup_container_1',
               'id' : 'awb0b1e674',
            });
            dialog020.addChild( container060 );


            var button061 = new Button({
               'artifactId' : 'Platform.DurationLookup_Cancel_button',
               'id' : 'aw21ee1a8e',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers162 = [
               {
                     'method' : 'Cancel',
                     'artifactId' : 'Platform.DurationLookup_Cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw7fc46e19',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button061.eventHandlers = eventHandlers162;
            container060.addChild( button061 );


            var button062 = new Button({
               'artifactId' : 'Platform.DurationLookup_Clear_button',
               'id' : 'awab5a917f',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers163 = [
               {
                     'method' : 'Clear',
                     'artifactId' : 'Platform.DurationLookup_Clear_button_eventHandlers_click_Clear',
                     'id' : 'aw4d23bc8f',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button062.eventHandlers = eventHandlers163;
            container060.addChild( button062 );


            var button063 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DurationLookup_OK_button',
               'id' : 'aw7a6484f6',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers164 = [
               {
                     'method' : 'SetSelection',
                     'artifactId' : 'Platform.DurationLookup_OK_button_eventHandlers_click_SetSelection',
                     'id' : 'aweb8ce178',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button063.eventHandlers = eventHandlers164;
            container060.addChild( button063 );


            var dialog021 = new Dialog({
               'id' : 'Platform.CancelDownload',
            });
            ui001.addChild( dialog021 );


            var container061 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.CancelDownload_container_0',
               'id' : 'awf839de44',
            });
            dialog021.addChild( container061 );


            var text180 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.CancelDownload_container_0_Doyouwanttostop',
               'id' : 'awdb2316b3',
               'value' : MessageService.createStaticMessage('Do you want to stop downloading work list records?'),
            });
            container061.addChild( text180 );


            var container062 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.CancelDownload_container_1',
               'id' : 'aw8f3eeed2',
            });
            dialog021.addChild( container062 );


            var button064 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.CancelDownload_Yes_button',
               'id' : 'aw3b97968f',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers165 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.CancelDownload_Yes_button_eventHandlers_click_cancelDownload',
                     'id' : 'awadc6ff1d',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button064.eventHandlers = eventHandlers165;
            container062.addChild( button064 );


            var button065 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.CancelDownload_No_button',
               'id' : 'awab099478',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers166 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.CancelDownload_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw9ceda703',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button065.eventHandlers = eventHandlers166;
            container062.addChild( button065 );


            var dialog022 = new Dialog({
               'id' : 'Platform.ConfirmClearChanges',
            });
            ui001.addChild( dialog022 );


            var container063 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmClearChanges_container_0',
               'id' : 'aw3965500f',
            });
            dialog022.addChild( container063 );


            var text181 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmClearChanges_container_0_Changesthathaveno',
               'id' : 'aw66e22f87',
               'value' : MessageService.createStaticMessage('Changes that have not been sent to the server will be discarded.'),
            });
            container063.addChild( text181 );


            var container064 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmClearChanges_container_1',
               'id' : 'aw4e626099',
            });
            dialog022.addChild( container064 );


            var button066 = new Button({
               'artifactId' : 'Platform.ConfirmClearChanges_Cancel_button',
               'id' : 'awcee54fe9',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers167 = [
               {
                     'method' : 'cancelClearChanges',
                     'artifactId' : 'Platform.ConfirmClearChanges_Cancel_button_eventHandlers_click_cancelClearChanges',
                     'id' : 'awb208eba2',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button066.eventHandlers = eventHandlers167;
            container064.addChild( button066 );


            var button067 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.ConfirmClearChanges_OK_button',
               'id' : 'aw8a3b05f2',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers168 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'Platform.ConfirmClearChanges_OK_button_eventHandlers_click_doClearChanges',
                     'id' : 'aw32f778d4',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button067.eventHandlers = eventHandlers168;
            container064.addChild( button067 );


            var dialog023 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.DownloadCurrentWorklist',
            });
            ui001.addChild( dialog023 );


            var container065 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_0',
               'id' : 'awfd35c5df',
            });
            dialog023.addChild( container065 );


            var text182 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_0_progressMsg',
               'id' : 'aw3c55ae56',
            });
            container065.addChild( text182 );


            var container066 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_1',
               'id' : 'aw8a32f549',
            });
            dialog023.addChild( container066 );


            var button068 = new Button({
               'artifactId' : 'Platform.DownloadCurrentWorklist_Cancel_button',
               'id' : 'awcfb8296d',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers169 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.DownloadCurrentWorklist_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'aw5541afbb',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button068.eventHandlers = eventHandlers169;
            container066.addChild( button068 );


            var dialog024 = new Dialog({
               'id' : 'Platform.NoRecordFoundDialog',
            });
            ui001.addChild( dialog024 );


            var container067 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.NoRecordFoundDialog_container_0',
               'id' : 'awa73a1c57',
            });
            dialog024.addChild( container067 );


            var text183 = new Text({
               'artifactId' : 'Platform.NoRecordFoundDialog_container_0_Stopthetimeronwo',
               'id' : 'awd6cf8f25',
               'value' : MessageService.createStaticMessage('No record was found. If you are working offline, try downloading worklist when online to access your workorder'),
            });
            container067.addChild( text183 );


            var container068 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.NoRecordFoundDialog_container_1',
               'id' : 'awd03d2cc1',
            });
            dialog024.addChild( container068 );


            var button069 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.NoRecordFoundDialog_OK_button',
               'id' : 'aw3de0cad2',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers170 = [
               {
                     'method' : 'closeNoRecord',
                     'artifactId' : 'Platform.NoRecordFoundDialog_OK_button_multiple',
                     'id' : 'aw41a4b840',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button069.eventHandlers = eventHandlers170;
            container068.addChild( button069 );


            var dialog025 = new Dialog({
               'id' : 'Platform.MultiplePushNotificationDialog',
            });
            ui001.addChild( dialog025 );


            var container069 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_0',
               'id' : 'aw7b338e5e',
            });
            dialog025.addChild( container069 );


            var text184 = new Text({
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_0_Stopthetimeronwo',
               'id' : 'aw72fc5fcc',
               'value' : MessageService.createStaticMessage('Multiple notification were recieved. Go to notification view to access them.'),
            });
            container069.addChild( text184 );


            var container070 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_1',
               'id' : 'awc34bec8',
            });
            dialog025.addChild( container070 );


            var button070 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_OK_button',
               'id' : 'awc2c9277e',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers171 = [
               {
                     'method' : 'close',
                     'artifactId' : 'Platform.MultiplePushNotificationDialog_OK_button_multiple',
                     'id' : 'awe5002e8b',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button070.eventHandlers = eventHandlers171;
            container070.addChild( button070 );


            var dialog026 = new Dialog({
               'resource' : 'PlatformTempPushNotification',
               'id' : 'Platform.PushNotificationDialog',
            });
            ui001.addChild( dialog026 );


            var container071 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.PushNotificationDialog_container_0',
               'id' : 'awb0eedc9',
            });
            dialog026.addChild( container071 );


            var text185 = new Text({
               'artifactId' : 'Platform.PushNotificationDialog_container_0_Stopthetimeronwo',
               'id' : 'aw35fc28ff',
               'value' : MessageService.createDynamicMessage('{0} {1} {2}', 'platform.handlers.PushNotificationDialogHandler', 'resolveMessageProps'),
               'resolverFunction' : 'resolveMessageProps',
               'resolverClass' : 'platform.handlers.PushNotificationDialogHandler',
            });
            container071.addChild( text185 );


            var container072 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.PushNotificationDialog_container_1',
               'id' : 'aw7c09dd5f',
            });
            dialog026.addChild( container072 );


            var button071 = new Button({
               'artifactId' : 'Platform.PushNotificationDialog_Open_button',
               'id' : 'aw4151795',
               'label' : MessageService.createStaticMessage('Open'),
            });
            var eventHandlers172 = [
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
            button071.eventHandlers = eventHandlers172;
            container072.addChild( button071 );


            var button072 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.PushNotificationDialog_OK_button',
               'id' : 'aw3d64070a',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers173 = [
               {
                     'method' : 'close',
                     'artifactId' : 'Platform.PushNotificationDialog_OK_button_eventHandlers_click_WOStartedDialogYesClickHandler',
                     'id' : 'aw40f88c32',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button072.eventHandlers = eventHandlers173;
            container072.addChild( button072 );


            var dialog027 = new Dialog({
               'resource' : 'PlatformDemoModeResource',
               'id' : 'Platform.DemoDownloadWarning',
            });
            ui001.addChild( dialog027 );


            var container073 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DemoDownloadWarning_container_0',
               'id' : 'awf840ab79',
            });
            dialog027.addChild( container073 );


            var text186 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.DemoDownloadWarning_container_0_progressMsg',
               'id' : 'awf3cb0903',
               'value' : MessageService.createStaticMessage('MessageText'),
            });
            container073.addChild( text186 );


            var container074 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DemoDownloadWarning_container_1',
               'id' : 'aw8f479bef',
            });
            dialog027.addChild( container074 );


            var button073 = new Button({
               'artifactId' : 'Platform.DemoDownloadWarning_Continue_button',
               'id' : 'aw2659f8c8',
               'label' : MessageService.createStaticMessage('Continue'),
            });
            var eventHandlers174 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'Platform.DemoDownloadWarning_Continue_button_eventHandlers_click_doClearChanges',
                     'id' : 'awbdf1879f',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button073.eventHandlers = eventHandlers174;
            container074.addChild( button073 );


            var button074 = new Button({
               'artifactId' : 'Platform.DemoDownloadWarning_Cancel_button',
               'id' : 'aw9def7b28',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers175 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.DemoDownloadWarning_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'awd4960a86',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button074.eventHandlers = eventHandlers175;
            container074.addChild( button074 );


            var dialog028 = new Dialog({
               'resource' : 'PlatformEsigResource',
               'id' : 'Platform.EsigLoginView',
               'label' : MessageService.createStaticMessage('Electronic Signature Authentication'),
            });
            ui001.addChild( dialog028 );

            var requiredResources039 = {
               'attemptResultDomain' : {
                  'enableFeatureByProperty' : 'esig.enabled',
                  'artifactId' : 'Platform.EsigLoginView_attemptResultDomain',
                  'id' : 'aw3c53638b',
               },
            };
            dialog028.addRequiredResources( requiredResources039 );

            var container075 = new Container({
               'artifactId' : 'Platform.EsigLoginView_container_0',
               'id' : 'aw44fd9611',
            });
            dialog028.addChild( container075 );


            var group028 = new Group({
               'artifactId' : 'Platform.EsigLoginView_group_0',
               'id' : 'aw7bf6135f',
            });
            container075.addChild( group028 );


            var groupitem107 = new GroupItem({
               'artifactId' : 'Platform.EsigLoginView_group_0_groupitem_1',
               'id' : 'aw209714b9',
            });
            group028.addChild( groupitem107 );


            var text187 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'userName',
               'cssClass' : 'loginUsername',
               'editable' : false,
               'artifactId' : 'Platform.EsigLoginView_container_0_username',
               'id' : 'aw15aabb30',
               'label' : MessageService.createStaticMessage('User Name'),
               'placeHolder' : MessageService.createStaticMessage('User name'),
            });
            groupitem107.addChild( text187 );


            var text188 = new Text({
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
            groupitem107.addChild( text188 );


            var text189 = new Text({
               'resourceAttribute' : 'reason',
               'cssClass' : 'loginUsername',
               'editable' : true,
               'artifactId' : 'Platform.EsigLoginView_container_0_reason',
               'id' : 'aw6ccf562d',
               'label' : MessageService.createStaticMessage('Reason for Change'),
               'placeHolder' : MessageService.createStaticMessage('Reason for Change'),
               'required' : true,
            });
            groupitem107.addChild( text189 );


            var container076 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.EsigLoginView_footer',
               'id' : 'aw68d6d11c',
            });
            dialog028.addChild( container076 );


            var button075 = new Button({
               'artifactId' : 'Platform.EsigLoginView_Cancel_button',
               'id' : 'aw68a36a2b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers176 = [
               {
                     'method' : 'cancelEsig',
                     'artifactId' : 'Platform.EsigLoginView_Cancel_button_eventHandlers_click_cancelEsig',
                     'id' : 'awdba9800d',
                     'event' : 'click',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            button075.eventHandlers = eventHandlers176;
            container076.addChild( button075 );


            var button076 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.EsigLoginView_Save_button',
               'id' : 'awef41b275',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers177 = [
               {
                     'method' : 'submitEsig',
                     'artifactId' : 'Platform.EsigLoginView_Save_button_eventHandlers_click_submitEsig',
                     'id' : 'awa9f3497f',
                     'event' : 'click',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            button076.eventHandlers = eventHandlers177;
            container076.addChild( button076 );

            var eventHandlers178 = [
               {
                     'method' : 'initializeEsig',
                     'artifactId' : 'Platform.EsigLoginView_eventHandlers_show_initializeEsig',
                     'id' : 'aw681e6384',
                     'event' : 'show',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            dialog028.eventHandlers = eventHandlers178;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Signature', false);
               trackTimer.startTracking();
            }

            var view032 = new View({
               'id' : 'Platform.Signature',
               'label' : MessageService.createStaticMessage('Capture Real Signature'),
            });
            ui001.addChild( view032 );

            var requiredResources040 = {
               'PlatformAttachmentInfoResource' : {
                  'artifactId' : 'Platform.Signature_PlatformAttachmentInfoResource',
                  'id' : 'aw8cc44736',
               },
            };
            view032.addRequiredResources( requiredResources040 );

            var footer014 = new Footer({
               'artifactId' : 'Platform.Signature_footer',
               'id' : 'aw16b9ee39',
            });
            view032.addChild( footer014 );


            var button077 = new Button({
               'artifactId' : 'Platform.Signature_Cancel_button',
               'id' : 'aw9088fe5b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers179 = [
               {
                     'method' : 'cancelSignature',
                     'artifactId' : 'Platform.Signature_Cancel_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'awc27cd6a4',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button077.eventHandlers = eventHandlers179;
            footer014.addChild( button077 );


            var button078 = new Button({
               'artifactId' : 'Platform.Signature_Clear_button',
               'id' : 'awc6576044',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers180 = [
               {
                     'method' : 'clearSignature',
                     'artifactId' : 'Platform.Signature_Clear_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw90653ab1',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button078.eventHandlers = eventHandlers180;
            footer014.addChild( button078 );


            var button079 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.Signature_Save_button',
               'id' : 'awbc1f2293',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers181 = [
               {
                     'method' : 'saveSignature',
                     'artifactId' : 'Platform.Signature_Save_button_eventHandlers_click_saveSignature',
                     'id' : 'aw7d8e432b',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button079.eventHandlers = eventHandlers181;
            footer014.addChild( button079 );

            var eventHandlers182 = [
               {
                     'method' : 'initSignature',
                     'artifactId' : 'Platform.Signature_eventHandlers_show_initStopWorkView',
                     'id' : 'awb8cf4cb7',
                     'event' : 'initialize',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            view032.eventHandlers = eventHandlers182;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog029 = new Dialog({
               'id' : 'Platform.SignatureDialog',
            });
            ui001.addChild( dialog029 );


            var container077 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.SignatureDialog_container_buttons',
               'id' : 'aw91450791',
            });
            dialog029.addChild( container077 );


            var button080 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_Cancel_button',
               'id' : 'aw51ebe6e8',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers183 = [
               {
                     'method' : 'cancelSignatureDialog',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_Cancel_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw198ca753',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button080.eventHandlers = eventHandlers183;
            container077.addChild( button080 );


            var button081 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_clear_button',
               'id' : 'awdc63a382',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers184 = [
               {
                     'method' : 'clearSignature',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_clear_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw72eacc40',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button081.eventHandlers = eventHandlers184;
            container077.addChild( button081 );


            var button082 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_Save_button',
               'id' : 'awd4941650',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers185 = [
               {
                     'method' : 'saveSignature',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_Save_button_eventHandlers_click_saveSignature',
                     'id' : 'awa59c7577',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button082.eventHandlers = eventHandlers185;
            container077.addChild( button082 );

            var eventHandlers186 = [
               {
                     'method' : 'initSignature',
                     'artifactId' : 'Platform.SignatureDialog_eventHandlers_show_initStopWorkView',
                     'id' : 'aw71e7bce4',
                     'event' : 'show',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            dialog029.eventHandlers = eventHandlers186;
            app001.addHandler( {name : 'application.handlers.AssetDetailHandler', 'class': new AssetDetailHandler()} );
            app001.addHandler( {name : 'application.handlers.AssetListHandler', 'class': new AssetListHandler()} );
            app001.addHandler( {name : 'application.handlers.AssetListScanHandler', 'class': new AssetListScanHandler()} );
            app001.addHandler( {name : 'application.handlers.AssetMoveHandler', 'class': new AssetMoveHandler()} );
            app001.addHandler( {name : 'application.handlers.ClassificationFormHandler', 'class': new ClassificationFormHandler()} );
            app001.addHandler( {name : 'application.handlers.ClassifyAssetHandler', 'class': new ClassifyAssetHandler()} );
            app001.addHandler( {name : 'application.handlers.MeterReadingsHandler', 'class': new MeterReadingsHandler()} );
            app001.addHandler( {name : 'application.handlers.MetersListHandler', 'class': new MetersListHandler()} );
            app001.addHandler( {name : 'application.handlers.ReportDowntimeHandler', 'class': new ReportDowntimeHandler()} );
            app001.addHandler( {name : 'application.handlers.StatusChangeHandler', 'class': new StatusChangeHandler()} );
            app001.addHandler( {name : 'application.handlers.WOAttachmentHandler', 'class': new WOAttachmentHandler()} );
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
