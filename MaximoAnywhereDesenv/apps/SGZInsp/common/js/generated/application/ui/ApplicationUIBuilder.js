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
// Build: 2023-07-05 23:53:17
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
         "application/handlers/WOListHandler", 
         "platform/ui/control/Actions", 
         "platform/ui/control/Action", 
         "application/handlers/WOExtDownloadHandler", 
         "platform/handlers/WorkOfflineHandler", 
         "platform/ui/control/ProgressIndicator", 
         "platform/ui/control/List", 
         "platform/ui/control/FindByScan", 
         "application/handlers/DataSheetHandler", 
         "platform/ui/control/ListItemTemplate", 
         "platform/ui/control/ListText", 
         "custom/handlers/MSStatusChangeHandler", 
         "application/handlers/WODetailHandler", 
         "application/handlers/WOGeolocationHandler", 
         "platform/handlers/AttachmentHandler", 
         "application/handlers/WOAttachmentHandler", 
         "application/handlers/ClassificationFormHandler", 
         "platform/ui/control/ErrorIndicator", 
         "platform/ui/control/Group", 
         "platform/ui/control/GroupItem", 
         "platform/ui/control/LastUpdateText", 
         "platform/ui/control/SortOptions", 
         "platform/ui/control/SortOption", 
         "platform/ui/control/SortAttribute", 
         "custom/handlers/MSClassifyWorkOrderHandler", 
         "application/handlers/StatusChangeHandler", 
         "application/handlers/MetersListHandler", 
         "application/handlers/LaborAssignmentHandler", 
         "platform/ui/control/CheckBox", 
         "application/handlers/PlannedMaterialHandler", 
         "platform/ui/control/TextArea", 
         "platform/ui/control/Footer", 
         "custom/handlers/WODetailExtensionHandler", 
         "platform/handlers/DialogHandler", 
         "application/handlers/spatial/SketchToolHandler", 
         "application/handlers/WOCreateQueryBaseHandler", 
         "application/handlers/ActualLaborHandler", 
         "application/handlers/ClassifyWorkOrderHandler", 
         "platform/handlers/spatial/IdentifyToolHandler", 
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
         "platform/ui/control/DurationPicker", 
         "platform/handlers/EsigHandler", 
         "platform/signature/handler/SignatureHandler"
      ],

function(declare, all, BuilderBase, window, array, ioQuery, AdditionalDataManager, AdditionalDataUIManager, MessageService, Application, UserInterface, Dialog, Container, Text, Button, SSOHandler, LoginHandler, View, Image, MSLoginHandler, _ApplicationHandlerBase, Queries, Query, WOListHandler, Actions, Action, WOExtDownloadHandler, WorkOfflineHandler, ProgressIndicator, List, FindByScan, DataSheetHandler, ListItemTemplate, ListText, MSStatusChangeHandler, WODetailHandler, WOGeolocationHandler, AttachmentHandler, WOAttachmentHandler, ClassificationFormHandler, ErrorIndicator, Group, GroupItem, LastUpdateText, SortOptions, SortOption, SortAttribute, MSClassifyWorkOrderHandler, StatusChangeHandler, MetersListHandler, LaborAssignmentHandler, CheckBox, PlannedMaterialHandler, TextArea, Footer, WODetailExtensionHandler, DialogHandler, SketchToolHandler, WOCreateQueryBaseHandler, ActualLaborHandler, ClassifyWorkOrderHandler, IdentifyToolHandler, Lookup, ReturnAttributes, ReturnAttribute, SearchAttributes, SearchAttribute, PseudoOfflineModeHandler, CreateQueryBaseHandler, ErrorActions, LookupHandler, PushNotificationDialogHandler, DateTimePicker, SettingsHandler, ChangePasswordHandler, AdditionalDataDialogHandler, RadioButton, LoggerReportHandler, TimeTrackHandler, DurationPicker, EsigHandler, SignatureHandler) {
      return declare("generated.application.ui.ApplicationUIBuilder", BuilderBase, {

         build : function() {
            console.log('Creating App');

            MessageService.init('artifact');


            var app001 = new Application({
               'combinedViews' : 'true',
               'debug' : 'false',
               'logLevel' : 0,
               'xsi:noNamespaceSchemaLocation' : '..\/..\/..\/build\/app.xsd',
               'xmlns:xsi' : 'http:\/\/www.w3.org\/2001\/XMLSchema-instance',
               'id' : 'SGZInsp',
               'blindQuerySupport' : 'false',
               'version' : '20191125',
               'requiredRole' : 'ANYWHERE_INSPECTOR',
            });
            app001.setFeatures({
            'update.artifact.timestamps' : false,
            'esig.enabled' : true,
            'splitpane.enabled' : false,
            'gps.tracking.enable' : true,
            'gps.enabled' : true,
            'enableDataEncryption' : true,
            'attachments.enabled' : true,
            'barcode.enabled' : true,
            'calibration.enabled' : true,
            'globalization.use.mock' : false,
            'run.bvt.scripts' : false,
            'build.update.check.enabled' : false,
            'pushnotification.enabled' : false,
            'custom.undo.process.enabled' : true,
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
               'image' : '..\/..\/..\/..\/..\/..\/images\/mdpi\/Logo_SGZInsp_H.svg',
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
               'label' : MessageService.createStaticMessage('v7.6.4:2706231700H'),
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
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.WorkItemsView', false);
               trackTimer.startTracking();
            }

            var view002 = new View({
               'saveonshow' : true,
               'showBackButton' : 'false',
               'id' : 'WorkExecution.WorkItemsView',
               'label' : MessageService.createStaticMessage('My Assigned Work'),
            });
            ui001.addChild( view002 );


            var queries001 = new Queries({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_queries',
               'id' : 'awc4d1eb40',
            });
            view002.addChild( queries001 );


            var query001 = new Query({
               'artifactId' : 'WorkExecution.WorkItemsView_ms_insplist01',
               'id' : 'awc236811f',
               'label' : MessageService.createStaticMessage('Inspe\u00E7\u00F5es Pendentes'),
               'queryBase' : 'ms_insplist01',
            });
            queries001.addChild( query001 );


            var query002 = new Query({
               'system' : 'true',
               'artifactId' : 'WorkExecution.WorkItemsView___errored__',
               'id' : 'awe49da8ab',
               'label' : MessageService.createStaticMessage('Records with Errors'),
               'queryBase' : '__errored__',
            });
            queries001.addChild( query002 );

            var eventHandlers009 = [
               {
                     'method' : 'hideShowErrorMenu',
                     'artifactId' : 'WorkExecution.WorkItemsView___errored___eventHandlers_render_hideShowErrorMenu',
                     'id' : 'aw4ac1c280',
                     'event' : 'render',
                     'class' : 'application.handlers.WOListHandler',
               }
            ];
            query002.eventHandlers = eventHandlers009;
            var requiredResources002 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.WorkItemsView_workOrder',
                  'id' : 'aw2645378e',
                  'related' : {
                     'tasklist' : {
                        'artifactId' : 'WorkExecution.WorkItemsView_attribute1',
                        'id' : 'awf821f5bc',
                     },
                  },
               },
               'oslcmaxvars' : {
                  'artifactId' : 'WorkExecution.WorkItemsView_oslcmaxvars',
                  'id' : 'aw329d1e67',
               },
               'domainwostatus' : {
                  'artifactId' : 'WorkExecution.WorkItemsView_domainwostatus',
                  'id' : 'aw44ac0546',
               },
               'PlatformProgressResource' : {
                  'artifactId' : 'WorkExecution.WorkItemsView_PlatformProgressResource',
                  'id' : 'aw49ca158e',
               },
               'mylabor' : {
                  'artifactId' : 'WorkExecution.WorkItemsView_mylabor',
                  'id' : 'awf6a66eb1',
               },
               'mylaborcraftrate' : {
                  'artifactId' : 'WorkExecution.WorkItemsView_mylaborcraftrate',
                  'id' : 'aw11ca4819',
               },
               'materialSummary' : {
                  'artifactId' : 'WorkExecution.WorkItemsView_materialSummary',
                  'id' : 'aw3937fa39',
               },
               'toolSummary' : {
                  'artifactId' : 'WorkExecution.WorkItemsView_toolSummary',
                  'id' : 'awcda3ad17',
               },
               'additionalasset' : {
                  'artifactId' : 'WorkExecution.WorkItemsView_additionalasset',
                  'id' : 'aw21bd65f7',
               },
               'site' : {
                  'artifactId' : 'WorkExecution.WorkItemsView_site',
                  'id' : 'awce00214c',
               },
               'lbslocation' : {
                  'artifactId' : 'WorkExecution.WorkItemsView_lbslocation',
                  'id' : 'aw469dd19b',
               },
               'laborcrew' : {
                  'artifactId' : 'WorkExecution.WorkItemsView_laborcrew',
                  'id' : 'aw38c04048',
               },
               'PlatformGeolocationLocalStore' : {
                  'artifactId' : 'WorkExecution.WorkItemsView_gpslocalstore',
                  'id' : 'aw468c12ee',
               },
            };
            view002.addRequiredResources( requiredResources002 );

            var actions001 = new Actions({
               'artifactId' : 'WorkExecution.WorkItemsView_actions',
               'id' : 'aw60ab4310',
            });
            view002.addChild( actions001 );


            var action001 = new Action({
               'overflow' : true,
               'artifactId' : 'WorkExecution.WorkItemsView_DownloadWorkList_action',
               'id' : 'aw25139da2',
               'label' : MessageService.createStaticMessage('Download Work List'),
            });
            actions001.addChild( action001 );

            var eventHandlers010 = [
               {
                     'method' : 'workoffline',
                     'artifactId' : 'WorkExecution.WorkItemsView_DownloadWorkList_action_eventHandlers_click_workoffline',
                     'id' : 'aw36aebb93',
                     'event' : 'click',
                     'class' : 'application.handlers.WOExtDownloadHandler',
               },
               {
                     'method' : 'enableDisableMenu',
                     'artifactId' : 'WorkExecution.WorkItemsView_DownloadWorkList_action_eventHandlers_render_enableDisableMenu',
                     'id' : 'awc7d508d8',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action001.eventHandlers = eventHandlers010;

            var action002 = new Action({
               'overflow' : true,
               'artifactId' : 'WorkExecution.WorkItemsView_SynchronizeData_action',
               'id' : 'aw681d51aa',
               'label' : MessageService.createStaticMessage('Synchronize Data'),
            });
            actions001.addChild( action002 );

            var eventHandlers011 = [
               {
                     'method' : 'sync',
                     'artifactId' : 'WorkExecution.WorkItemsView_SynchronizeData_action_eventHandlers_click_sync',
                     'id' : 'awcd609031',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               },
               {
                     'method' : 'enableDisableSyncMenu',
                     'artifactId' : 'WorkExecution.WorkItemsView_SynchronizeData_action_eventHandlers_render_enableDisableMenu',
                     'id' : 'awa2447c36',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action002.eventHandlers = eventHandlers011;

            var progressIndicator001 = new ProgressIndicator({
               'artifactId' : 'WorkExecution.WorkItemsView_0',
               'id' : 'aw4eaf29d5',
            });
            view002.addChild( progressIndicator001 );



            var findByScan001 = new FindByScan({
               'resourceAttribute' : 'asset',
               'enableFeatureByProperty' : 'barcode.enabled',
               'headerLabel' : 'Work Orders for asset {0}',
               'artifactId' : 'WorkExecution.WorkItemsView_asset',
               'id' : 'awda0532ae',
            });

            var eventHandlers012 = [
               {
                     'method' : 'refreshWorkList',
                     'artifactId' : 'testoneWorkExecution.WorkItemsView_SynchronizeData_action_eventHandlers_click_sync',
                     'id' : 'aw38cfdbdf',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               },
               {
                     'method' : 'keepWorkListResource',
                     'artifactId' : 'WorkExecution.WorkItemsView_workOrder_list_eventHandlers_render_keepWorkListResource',
                     'id' : 'aw7b4a146d',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               },
               {
                     'method' : 'checkDataSheetPushErrors',
                     'artifactId' : 'WorkExecution.WorkItemsView_workOrder_list_eventHandlers_render_checkDataSheetPushErrors',
                     'id' : 'awc049c16d',
                     'event' : 'render',
                     'class' : 'application.handlers.DataSheetHandler',
               }
            ];

            var listItemTemplate001 = new ListItemTemplate({
               'layout' : 'WorkListItem',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_listItemTemplate_WorkListItem',
               'id' : 'aw74bf23f2',
            });

            var listtext001 = new ListText({
               'resourceAttribute' : 'wonum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_wonum',
               'id' : 'aw6b5eaca',
            });
            listItemTemplate001.addChild( listtext001 );


            var listtext002 = new ListText({
               'resourceAttribute' : 'ms_aging',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_ms_aging',
               'id' : 'aw6bb30aed',
            });
            listItemTemplate001.addChild( listtext002 );


            var image003 = new Image({
               'resourceAttribute' : 'status',
               'image' : 'statusicons\/{:ms_insptype}.png',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_starttime',
               'id' : 'aw5840f54a',
               'cssAttributes' : 'status',
               'platform' : 'false',
            });
            listItemTemplate001.addChild( image003 );


            var image004 = new Image({
               'resourceAttribute' : 'ms_insppriority',
               'image' : 'statusicons\/teste\/{:ms_insppriority}.png',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_ms_insppriority',
               'id' : 'aw11a5535c',
               'cssAttributes' : 'status',
               'platform' : 'false',
            });
            listItemTemplate001.addChild( image004 );


            var listtext003 = new ListText({
               'resourceAttribute' : 'classificationdesc',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_longdescription',
               'hideEmpty' : 'true',
               'id' : 'aw395f70b5',
            });
            listItemTemplate001.addChild( listtext003 );


            var listtext004 = new ListText({
               'resourceAttribute' : 'woserviceaddressline2',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_woserviceaddressaddressline2',
               'hideEmpty' : 'true',
               'id' : 'awfca7f848',
            });
            listItemTemplate001.addChild( listtext004 );


            var listtext005 = new ListText({
               'resourceAttribute' : 'woservicetaddrnumber',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_woserviceaddressstaddrnumber',
               'hideEmpty' : 'true',
               'id' : 'awc3407f60',
            });
            listItemTemplate001.addChild( listtext005 );


            var button005 = new Button({
               'border' : 'false',
               'resourceAttribute' : 'wonum',
               'cssClass' : 'accButton',
               'layoutInsertAt' : 'item8',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_wonum_bt_acc',
               'id' : 'aw63713882',
               'label' : MessageService.createStaticMessage('Aceitar'),
            });
            var eventHandlers013 = [
               {
                     'method' : 'control_acc_bt',
                     'artifactId' : 'WorkExecution.WorkItemsView_workOrder_started_button_eventHandlers_render_acc',
                     'id' : 'awf1ca8147',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'call_acc_view',
                     'artifactId' : 'WorkExecution.WorkItemsView_click_acc01',
                     'id' : 'awaa3bcb66',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            button005.eventHandlers = eventHandlers013;
            listItemTemplate001.addChild( button005 );


            var button006 = new Button({
               'border' : 'false',
               'resourceAttribute' : 'wonum',
               'layoutInsertAt' : 'item9',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_wonum_teste1',
               'id' : 'awc8488175',
               'label' : MessageService.createStaticMessage('Recusar'),
            });
            var eventHandlers014 = [
               {
                     'method' : 'control_acc_bt',
                     'artifactId' : 'WorkExecution.WorkItemsView_workOrder_started_button_eventHandlers_render_del',
                     'id' : 'aw31e4f9bb',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'call_dec_view',
                     'artifactId' : 'WorkExecution.WorkItemsView_workOrder_started_button_eventHandlers_click_del',
                     'id' : 'aw5cda2ddd',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            button006.eventHandlers = eventHandlers014;
            listItemTemplate001.addChild( button006 );


            var actions002 = new Actions({
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_listItemTemplate_WorkListItem_workOrder_actions',
               'id' : 'aw64019524',
            });
            listItemTemplate001.addChild( actions002 );



            var list001 = new List({
               'recordLabel' : MessageService.createDynamicMessage('Work Order {0}', 'application.handlers.WOListHandler', 'resolveWonumLabel'),
               'resource' : 'workOrder',
               'transitionTo' : 'WorkExecution.WorkDetailView',
               'findByScan' : findByScan001,
               'listItemTemplate' : listItemTemplate001,
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_list',
               'eventHandlers' : eventHandlers012,
               'id' : 'awcf488ae7',
               'queryBase' : 'ms_insplist01',
               'resolverFunction' : 'resolveWonumLabel',
               'displayPageSize' : '10',
               'resolverClass' : 'application.handlers.WOListHandler',
            });
            view002.addChild( list001 );

            var eventHandlers015 = [
               {
                     'method' : 'showBusyList',
                     'artifactId' : 'WorkExecution.WorkItemsView_eventHandlers_render_showBusyList',
                     'id' : 'aw6a12cb52',
                     'event' : 'render',
                     'class' : 'application.handlers.WODetailHandler',
               },
               {
                     'method' : 'initialize',
                     'artifactId' : 'WorkExecution.WorkItemsView_eventHandlers_initialize_geolocation',
                     'id' : 'aw2a943376',
                     'event' : 'initialize',
                     'class' : 'application.handlers.WOGeolocationHandler',
               },
               {
                     'method' : 'render',
                     'artifactId' : 'WorkExecution.WorkItemsView_eventHandlers_initialize_wolist',
                     'id' : 'aw327ee0fd',
                     'event' : 'render',
                     'class' : 'application.handlers.WOListHandler',
               },
               {
                     'method' : 'sync',
                     'artifactId' : 'WorkExecution.WorkItemsView_SynchronizeData_action_eventHandlers_click_sync_render_sync',
                     'id' : 'aw820605c7',
                     'event' : 'show',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               },
               {
                     'method' : 'backSpec',
                     'artifactId' : 'WorkExecution.WorkDetailView_workOrder_measureunitid_0_eventHandlers_back',
                     'id' : 'awc251b758',
                     'event' : 'back',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            view002.eventHandlers = eventHandlers015;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.WorkDetailView', false);
               trackTimer.startTracking();
            }

            var view003 = new View({
               'resource' : 'workOrder',
               'id' : 'WorkExecution.WorkDetailView',
               'label' : MessageService.createStaticMessage('Service Order Details'),
            });
            ui001.addChild( view003 );

            var requiredResources003 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_workOrder',
                  'id' : 'awa85aa4b8',
                  'related' : {
                     'attachments' : {
                        'artifactId' : 'WorkExecution.WorkDetailView_workOrder_attachments',
                        'id' : 'awdb75988d',
                     },
                     'workOrderSpec' : {
                        'artifactId' : 'WorkExecution.WorkDetailView_workOrder_workOrderSpec',
                        'id' : 'awed7bbb5f',
                     },
                  },
               },
               'oslcmaxvars' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_oslcmaxvars',
                  'id' : 'awd287c3f3',
               },
               'mylabor' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_mylabor',
                  'id' : 'aw5bfa8d10',
               },
               'mylaborcraftrate' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_mylaborcraftrate',
                  'id' : 'awaebd7dc7',
               },
               'additionalworktype' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_additionalworktype',
                  'id' : 'aw8c99635c',
               },
               'domainwoclass' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_domainwoclass',
                  'id' : 'aw19629f54',
               },
               'domainAssetstatus' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_domainAssetstatus',
                  'id' : 'aw22e63204',
               },
               'additionalasset' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_additionalasset',
                  'id' : 'aw86e9adc4',
               },
               'domainwostatus' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_domainwostatus',
                  'id' : 'aw774257a2',
               },
               'laborcrew' : {
                  'reload' : true,
                  'artifactId' : 'WorkExecution.WorkDetailView_laborcrew',
                  'id' : 'awb6dfd37e',
               },
               'site' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_site',
                  'id' : 'aw9f5128b',
               },
               'classstructure' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_classstructure',
                  'id' : 'aw6059a94e',
               },
               'maxdomain' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_maxdomain',
                  'id' : 'awa6dc2a9b',
               },
               'assetattrtypes' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_assetattrtypes',
                  'id' : 'aw7d297788',
               },
               'domainitemtype' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_domainitemtype',
                  'id' : 'aw2569dd10',
               },
               'woFollowUpInfo' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_woFollowUpInfo',
                  'id' : 'aw4058fd51',
               },
               'domainworktype' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_domainworktype',
                  'id' : 'awb812f1be',
               },
               'userInfo' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_userInfo',
                  'id' : 'aw41dd25ba',
               },
            };
            view003.addRequiredResources( requiredResources003 );

            var actions003 = new Actions({
               'artifactId' : 'WorkExecution.WorkDetailView_actions',
               'id' : 'awcdf7a0b1',
            });
            view003.addChild( actions003 );


            var action003 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'enableFeatureByProperty' : 'attachments.enabled',
               'artifactId' : 'WorkExecution.WorkDetailView_TakePhoto_action',
               'id' : 'awa222a035',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions003.addChild( action003 );

            var eventHandlers016 = [
               {
                     'method' : 'control_insp',
                     'artifactId' : 'block_WorkExecution.WorkDetailView_TakePhoto_action_eventHandlers_click_launchCameraForPhoto',
                     'id' : 'aw49e43601',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'launchCameraForPhoto',
                     'artifactId' : 'WorkExecution.WorkDetailView_TakePhoto_action_eventHandlers_click_launchCameraForPhoto',
                     'id' : 'aw520cf319',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               },
               {
                     'method' : 'initCategory',
                     'artifactId' : 'WorkExecution.WorkDetailView_TakePhoto_action_eventHandlers_render_initCategory002',
                     'id' : 'aw58697adb',
                     'event' : 'render',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            action003.eventHandlers = eventHandlers016;
            var eventHandlers017 = [
               {
                     'method' : 'fetchDataSheetList',
                     'enableFeatureByProperty' : 'calibration.enabled',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_initialize_fetchDataSheetList',
                     'id' : 'awc4523e1e',
                     'event' : 'initialize',
                     'class' : 'application.handlers.DataSheetHandler',
               },
               {
                     'method' : 'fetchAllListSizes',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_initialize_fetchAllListSizes',
                     'id' : 'aw91f10aa1',
                     'event' : 'initialize',
                     'class' : 'application.handlers.WODetailHandler',
               },
               {
                     'method' : 'refreshAllListSizes',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_render_refreshAllListSizes',
                     'id' : 'awc1c7a583',
                     'event' : 'render',
                     'class' : 'application.handlers.WODetailHandler',
               },
               {
                     'method' : 'showWOSpecSorted',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_show_showWOSpecSorted',
                     'id' : 'aw9eba0a38',
                     'event' : 'show',
                     'class' : 'application.handlers.ClassificationFormHandler',
               }
            ];
            view003.eventHandlers = eventHandlers017;

            var container008 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_container_0',
               'id' : 'awc618a3f8',
            });
            view003.addChild( container008 );


            var errorIndicator001 = new ErrorIndicator({
               'clearMethod' : 'confirmClearChanges',
               'artifactId' : 'WorkExecution.WorkDetailView_errorIndicator',
               'id' : 'awda166256',
               'class' : 'application.handlers.WOExtDownloadHandler',
            });
            container008.addChild( errorIndicator001 );


            var group001 = new Group({
               'artifactId' : 'WorkExecution.WorkDetailView_group_0',
               'id' : 'aw55a0f9d4',
            });
            container008.addChild( group001 );


            var groupitem001 = new GroupItem({
               'layout' : 'Item1Button1',
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.EditStatusView_0',
               'id' : 'aw70834373',
            });
            group001.addChild( groupitem001 );


            var text013 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.EditStatusView_0_statusdesc_Status',
               'id' : 'awc31bcd13',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem001.addChild( text013 );


            var groupitem002 = new GroupItem({
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_0',
               'id' : 'aw83c332eb',
            });
            group001.addChild( groupitem002 );


            var text014 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_0_wonum_WorkOrder',
               'id' : 'aw7a04e8bf',
               'label' : MessageService.createStaticMessage('Work Order'),
            });
            groupitem002.addChild( text014 );


            var groupitem003 = new GroupItem({
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_ms_aging',
               'id' : 'aw7564552',
            });
            group001.addChild( groupitem003 );


            var text015 = new Text({
               'resourceAttribute' : 'ms_aging',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_0_ms_aging_WorkOrder',
               'id' : 'awd1c82e6a',
               'label' : MessageService.createStaticMessage('Dias'),
            });
            groupitem003.addChild( text015 );


            var groupitem004 = new GroupItem({
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_ms_inspremarks',
               'id' : 'awa20982a',
            });
            group001.addChild( groupitem004 );


            var text016 = new Text({
               'resourceAttribute' : 'ms_inspremarks',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_0_ms_inspremarks_WorkOrder',
               'id' : 'awd548097c',
               'label' : MessageService.createStaticMessage('Observa\u00E7\u00E3o Reinspe\u00E7\u00E3o'),
            });
            groupitem004.addChild( text016 );


            var groupitem005 = new GroupItem({
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.EditSiteidView_0',
               'id' : 'aw22ecc777',
            });
            group001.addChild( groupitem005 );


            var text017 = new Text({
               'resourceAttribute' : 'siteid',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_0_siteid_WorkOrder',
               'id' : 'aw682fa8d8',
               'label' : MessageService.createStaticMessage('Regional Government'),
            });
            groupitem005.addChild( text017 );


            var groupitem006 = new GroupItem({
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.LongDescriptionView_0123',
               'id' : 'aw662b20d2',
            });
            group001.addChild( groupitem006 );


            var text018 = new Text({
               'resourceAttribute' : 'classificationdesc',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.ClassifyWorkOrderView_0_classificationdesc',
               'id' : 'awa01b851c',
               'label' : MessageService.createStaticMessage('Classification'),
            });
            groupitem006.addChild( text018 );


            var groupitem007 = new GroupItem({
               'transitionTo' : 'WorkExecution.DescriptionView',
               'artifactId' : 'WorkExecution.NewWorkOrderView_groupitem_WorkExecution.DescriptionView_0details',
               'id' : 'awd23e09d8',
            });
            group001.addChild( groupitem007 );


            var text019 = new Text({
               'resourceAttribute' : 'longdescription',
               'editable' : false,
               'artifactId' : 'WorkExecution.DescriptionView_groupitem_100_description',
               'id' : 'aw22000acc',
               'label' : MessageService.createStaticMessage('Descri\u00E7\u00E3o'),
            });
            groupitem007.addChild( text019 );

            var eventHandlers018 = [
               {
                     'method' : 'limitCharacters',
                     'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_1_statusdesc_NewStatus_eventHandlers_validate0',
                     'id' : 'awcc319f5f',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            text019.eventHandlers = eventHandlers018;

            var groupitem008 = new GroupItem({
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_1',
               'id' : 'awf4c4027d',
            });
            group001.addChild( groupitem008 );


            var text020 = new Text({
               'resourceAttribute' : 'woserviceaddressline2',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_1_woserviceaddress_woserviceaddressaddressline2',
               'id' : 'aw49aeab2e',
               'label' : MessageService.createStaticMessage('Address'),
            });
            groupitem008.addChild( text020 );


            var text021 = new Text({
               'resourceAttribute' : 'woservicetaddrnumber',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_1_woserviceaddress_woserviceaddressstaddrnumber',
               'id' : 'aw76492c06',
               'label' : MessageService.createStaticMessage('Number'),
            });
            groupitem008.addChild( text021 );


            var text022 = new Text({
               'resourceAttribute' : 'woserviceaddressline3',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_1_woserviceaddress_woserviceaddressaddressline3',
               'id' : 'aw3ea99bb8',
               'label' : MessageService.createStaticMessage('District'),
            });
            groupitem008.addChild( text022 );


            var text023 = new Text({
               'resourceAttribute' : 'woservicepostalcode',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_1_woserviceaddress_woserviceaddresspostalcode',
               'id' : 'aw8bd7734',
               'label' : MessageService.createStaticMessage('Postal Code'),
            });
            groupitem008.addChild( text023 );


            var groupitem009 = new GroupItem({
               'artifactId' : 'WorkExecution.NewWorkOrderView_groupitem_WorkExecution.pdwhy_descriptionView_0details',
               'id' : 'awa6cbdf3b',
            });
            group001.addChild( groupitem009 );


            var text024 = new Text({
               'resourceAttribute' : 'pdwhy_description',
               'editable' : false,
               'artifactId' : 'WorkExecution.pdwhy_descriptionView_groupitem_100_description',
               'id' : 'awa5488db',
               'label' : MessageService.createStaticMessage('Motivo'),
            });
            groupitem009.addChild( text024 );


            var groupitem010 = new GroupItem({
               'artifactId' : '_WorkExecution',
               'id' : 'aw670a917e',
            });
            group001.addChild( groupitem010 );


            var text025 = new Text({
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_1_gmaps_maps',
               'id' : 'aw1029e60b',
               'label' : MessageService.createStaticMessage('Maps'),
            });
            groupitem010.addChild( text025 );


            var button007 = new Button({
               'image' : '\/images\/gmaps_icon.png',
               'cssClass' : 'mapIcon',
               'artifactId' : 'WorkExecution.WorkDetailView_asset_imagesaction_wohistory_button',
               'id' : 'awe1f999ea',
               'label' : MessageService.createStaticMessage('Abrir o Google Maps'),
            });
            var eventHandlers019 = [
               {
                     'method' : 'callGMaps',
                     'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.EditAssetView_0_asset_Asset_eventHandlers_validate_asyncvalidateAsset',
                     'id' : 'aw54d48465',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button007.eventHandlers = eventHandlers019;
            groupitem010.addChild( button007 );


            var button008 = new Button({
               'image' : '\/images\/waze_icon.png',
               'cssClass' : 'WazeIcon',
               'artifactId' : 'WorkExecution.WorkDetailView_asset_imagesaction_waze_button',
               'id' : 'aw899781fa',
               'label' : MessageService.createStaticMessage('Abrir o Waze'),
            });
            var eventHandlers020 = [
               {
                     'method' : 'callWaze',
                     'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.EditAssetView_0_asset_Asset_eventHandlers_waze',
                     'id' : 'aw2ff040c6',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button008.eventHandlers = eventHandlers020;
            groupitem010.addChild( button008 );


            var container009 = new Container({
               'artifactId' : 'WorkExecution.WorkDetailView_container_0',
               'id' : 'aweae70540',
            });
            view003.addChild( container009 );


            var group002 = new Group({
               'artifactId' : 'WorkExecution.WorkDetailView_group_1',
               'id' : 'aw22a7c942',
            });
            container009.addChild( group002 );


            var groupitem011 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'enableFeatureByProperty' : 'attachments.enabled',
               'transitionTo' : 'WorkExecution.AttachmentsView',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.AttachmentsView_0',
               'id' : 'aw2705c7e0',
            });
            group002.addChild( groupitem011 );


            var text026 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.AttachmentsView_0_Attachments',
               'id' : 'aw5f5bd9ca',
               'value' : MessageService.createStaticMessage('Fotos'),
            });
            groupitem011.addChild( text026 );


            var text027 = new Text({
               'resourceAttribute' : 'attachmentssize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.AttachmentsView_0_attachmentssize',
               'id' : 'aw4636d2d3',
            });
            groupitem011.addChild( text027 );

            var eventHandlers021 = [
               {
                     'method' : 'control_insp',
                     'artifactId' : 'blasblock_WorkExecution',
                     'id' : 'awc82d60d9',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            groupitem011.eventHandlers = eventHandlers021;

            var groupitem012 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'artifactId' : 'WorkExecution.Reinspecview.showReinspecView_0',
               'id' : 'aw70b35a1a',
            });
            group002.addChild( groupitem012 );


            var text028 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'xWorkExecution.Reinspecview_workOrder_groupitem_WorkExecution.EditStatusView_0_statusdesc_Status',
               'id' : 'aw3c20d048',
               'value' : MessageService.createStaticMessage('Responder Question\u00E1rio'),
            });
            groupitem012.addChild( text028 );

            var eventHandlers022 = [
               {
                     'method' : 'control_insp',
                     'artifactId' : 'aushhusablock_WorkExecution.WorkDetailView_TakePhoto_action_eventHandlers_click_launchCameraForPhoto',
                     'id' : 'awb879518c',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'hideQuestAfterResponse',
                     'artifactId' : 'Reinspecview.escond_quest_functionHide',
                     'id' : 'aw6289a765',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'showHideQuestionsView',
                     'artifactId' : 'Reinspecview.escond_quest_showHide',
                     'id' : 'awa4ecc9f9',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'redirectView',
                     'artifactId' : 'Reinspecview.escond_quest_function',
                     'id' : 'aw659ae05',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            text028.eventHandlers = eventHandlers022;

            var group003 = new Group({
               'artifactId' : 'WorkExecution.WorkDetailView_group_5',
               'id' : 'aw25ca0d5b',
            });
            container009.addChild( group003 );


            var groupitem013 = new GroupItem({
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_0',
               'id' : 'awaf3c9453',
            });
            group003.addChild( groupitem013 );


            var lastupdatetext001 = new LastUpdateText({
               'artifactId' : 'WorkExecution.WorkDetailView_lastupdatetext',
               'id' : 'aw6e82add1',
            });
            groupitem013.addChild( lastupdatetext001 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.PDOBSView', false);
               trackTimer.startTracking();
            }

            var view004 = new View({
               'resource' : 'workOrder',
               'id' : 'WorkExecution.PDOBSView',
               'label' : MessageService.createStaticMessage('Comments'),
            });
            ui001.addChild( view004 );

            var requiredResources004 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.PDOBSView_workOrder',
                  'id' : 'awe9cf1b',
               },
            };
            view004.addRequiredResources( requiredResources004 );

            var container010 = new Container({
               'artifactId' : 'WorkExecution.PDOBSView_container_0',
               'id' : 'awb5adfa09',
            });
            view004.addChild( container010 );


            var group004 = new Group({
               'artifactId' : 'WorkExecution.PDOBSView_group_0',
               'id' : 'aw5a66b6b7',
            });
            container010.addChild( group004 );


            var groupitem014 = new GroupItem({
               'artifactId' : 'WorkExecution.PDOBSView_groupitem_0',
               'id' : 'awf0766b1a',
            });
            group004.addChild( groupitem014 );


            var text029 = new Text({
               'resourceAttribute' : 'pd_obs',
               'cssClass' : 'ms_wordwrap',
               'editable' : false,
               'artifactId' : 'WorkExecution.PDOBSView_groupitem_0_pdobs',
               'id' : 'aw6bffd595',
            });
            groupitem014.addChild( text029 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.AttachmentsView', false);
               trackTimer.startTracking();
            }

            var view005 = new View({
               'showOverflow' : true,
               'id' : 'WorkExecution.AttachmentsView',
               'label' : MessageService.createStaticMessage('Fotos'),
            });
            ui001.addChild( view005 );

            var requiredResources005 = {
               'workOrder' : {
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
            view005.addRequiredResources( requiredResources005 );

            var actions004 = new Actions({
               'artifactId' : 'WorkExecution.AttachmentsView_actions',
               'id' : 'awb2eebf16',
            });
            view005.addChild( actions004 );


            var action004 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'artifactId' : 'WorkExecution.AttachmentsView_TakePhoto_action',
               'id' : 'aw8f4e0a9e',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions004.addChild( action004 );

            var eventHandlers023 = [
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
            action004.eventHandlers = eventHandlers023;

            var action005 = new Action({
               'image' : 'header_add_OFF.svg',
               'artifactId' : 'WorkExecution.AttachmentsView_PickfromGallery_action',
               'id' : 'awfd7f8e21',
               'label' : MessageService.createStaticMessage('Pick from Gallery'),
            });
            actions004.addChild( action005 );

            var eventHandlers024 = [
               {
                     'method' : 'launchGallery',
                     'artifactId' : 'WorkExecution.AttachmentsView_PickfromGallery_action_eventHandlers_click_launchGallery',
                     'id' : 'awe839699',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            action005.eventHandlers = eventHandlers024;


            var sortOptions001 = new SortOptions({
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_list_sortOptions',
               'id' : 'awf87e80b',
            });

            var sortOption001 = new SortOption({
               'artifactId' : 'WorkExecution.AttachmentsView_sortOption_CreatedDate',
               'id' : 'aw1e4327b',
               'label' : MessageService.createStaticMessage('Created Date'),
            });
            sortOptions001.addChild( sortOption001 );


            var sortAttribute001 = new SortAttribute({
               'name' : 'displayCreationDateISO',
               'artifactId' : 'WorkExecution.AttachmentsView_CreatedDate_sortAttribute_displayCreationDate',
               'id' : 'aw486876e7',
               'direction' : 'asc',
            });
            sortOption001.addChild( sortAttribute001 );


            var sortOption002 = new SortOption({
               'artifactId' : 'WorkExecution.AttachmentsView_sortOption_FileName',
               'id' : 'aw648c7a9c',
               'label' : MessageService.createStaticMessage('File Name'),
            });
            sortOptions001.addChild( sortOption002 );


            var sortAttribute002 = new SortAttribute({
               'name' : 'displayFileName',
               'artifactId' : 'WorkExecution.AttachmentsView_FileName_sortAttribute_displayFileName',
               'id' : 'aw891963a5',
               'direction' : 'asc',
            });
            sortOption002.addChild( sortAttribute002 );


            var sortOption003 = new SortOption({
               'artifactId' : 'WorkExecution.AttachmentsView_sortOption_Description',
               'id' : 'aw31fcfee7',
               'label' : MessageService.createStaticMessage('Description'),
            });
            sortOptions001.addChild( sortOption003 );


            var sortAttribute003 = new SortAttribute({
               'name' : 'displayDescription',
               'artifactId' : 'WorkExecution.AttachmentsView_Description_sortAttribute_displayDescription',
               'id' : 'aw5a6042db',
               'direction' : 'asc',
            });
            sortOption003.addChild( sortAttribute003 );



            var listItemTemplate002 = new ListItemTemplate({
               'layout' : 'AttachmentsListItem',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem',
               'id' : 'aw5f9af042',
            });

            var listtext006 = new ListText({
               'resourceAttribute' : 'displayFileName',
               'cssClass' : 'attachmentLabel',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayFileName',
               'id' : 'aw2a7f24e9',
            });
            listItemTemplate002.addChild( listtext006 );


            var listtext007 = new ListText({
               'resourceAttribute' : 'displayDescription',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayDescription',
               'id' : 'aw634a876e',
            });
            listItemTemplate002.addChild( listtext007 );


            var listtext008 = new ListText({
               'resourceAttribute' : 'displayFileType',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayFileType',
               'id' : 'awf8820dc6',
            });
            listItemTemplate002.addChild( listtext008 );


            var button009 = new Button({
               'border' : 'false',
               'resourceAttribute' : 'anywhereAttachDownloaded',
               'image' : '\/images\/msg_downloadComplete_small.svg',
               'cssClass' : 'attachmentIcon',
               'layoutInsertAt' : 'icon',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button',
               'id' : 'aw58f719',
            });
            var eventHandlers025 = [
               {
                     'method' : 'displayLocal',
                     'artifactId' : 'WorkExecution.AttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button_eventHandlers_datachange_displayLocal',
                     'id' : 'awd09dbc7c',
                     'event' : 'datachange',
                     'class' : 'application.handlers.WOAttachmentHandler',
               },
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'WorkExecution.AttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button_eventHandlers_click_handleThumbnailClick',
                     'id' : 'aw6277e726',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            button009.eventHandlers = eventHandlers025;
            listItemTemplate002.addChild( button009 );


            var listtext009 = new ListText({
               'resourceAttribute' : 'displaySize',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displaySize',
               'id' : 'aw4edf9732',
            });
            listItemTemplate002.addChild( listtext009 );


            var listtext010 = new ListText({
               'resourceAttribute' : 'createby',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_createby',
               'id' : 'awfea18ec7',
            });
            listItemTemplate002.addChild( listtext010 );


            var listtext011 = new ListText({
               'resourceAttribute' : 'displayCreationDate',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayCreationDate',
               'id' : 'aw44f40bb4',
            });
            listItemTemplate002.addChild( listtext011 );

            var eventHandlers026 = [
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem_eventHandlers_click_handleThumbnailClick',
                     'id' : 'aw6e007bd',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            listItemTemplate002.eventHandlers = eventHandlers026;


            var list002 = new List({
               'resource' : 'workOrder',
               'sortOptions' : sortOptions001,
               'listItemTemplate' : listItemTemplate002,
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_list',
               'attribute' : 'attachments',
               'id' : 'aw118597f8',
            });
            view005.addChild( list002 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.DescriptionView', false);
               trackTimer.startTracking();
            }

            var view006 = new View({
               'resource' : 'workOrder',
               'id' : 'WorkExecution.DescriptionView',
               'label' : MessageService.createStaticMessage('Description'),
            });
            ui001.addChild( view006 );

            var requiredResources006 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.DescriptionView_workOrder',
                  'id' : 'aw4c460268',
               },
            };
            view006.addRequiredResources( requiredResources006 );

            var container011 = new Container({
               'artifactId' : 'WorkExecution.DescriptionView_container_0',
               'id' : 'aw546a229e',
            });
            view006.addChild( container011 );


            var group005 = new Group({
               'artifactId' : 'WorkExecution.DescriptionView_group_0',
               'id' : 'aw8b92258d',
            });
            container011.addChild( group005 );


            var groupitem015 = new GroupItem({
               'artifactId' : 'WorkExecution.DescriptionView_groupitem_0',
               'id' : 'aw11b1b38d',
            });
            group005.addChild( groupitem015 );


            var text030 = new Text({
               'resourceAttribute' : 'description',
               'editable' : false,
               'artifactId' : 'WorkExecution.DescriptionView_groupitem_0_description',
               'id' : 'awd1d73261',
            });
            groupitem015.addChild( text030 );


            var groupitem016 = new GroupItem({
               'artifactId' : 'WorkExecution.DescriptionView_groupitem_1',
               'id' : 'aw66b6831b',
            });
            group005.addChild( groupitem016 );


            var text031 = new Text({
               'resourceAttribute' : 'longdescription',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'WorkExecution.DescriptionView_groupitem_1_longdescription',
               'id' : 'aw4441fbf2',
            });
            groupitem016.addChild( text031 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.PD_WhyView', false);
               trackTimer.startTracking();
            }

            var view007 = new View({
               'resource' : 'workOrder',
               'showOverflow' : false,
               'id' : 'WorkExecution.PD_WhyView',
               'label' : MessageService.createStaticMessage('Motivos'),
            });
            ui001.addChild( view007 );

            var requiredResources007 = {
               'pdwhy' : {
                  'artifactId' : 'WorkExecution.PD_WhyView_ms_pdwhy',
                  'id' : 'awa5f9c16b',
               },
            };
            view007.addRequiredResources( requiredResources007 );


            var listItemTemplate003 = new ListItemTemplate({
               'layout' : 'FailureReportList',
               'artifactId' : 'WorkExecution.PD_WhyViewlistItemTemplate_FailureReportList',
               'id' : 'awbba62925',
            });

            var listtext012 = new ListText({
               'resourceAttribute' : 'pd_description',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.PD_WhyView_desc',
               'id' : 'aw194b5564',
            });
            listItemTemplate003.addChild( listtext012 );

            var eventHandlers027 = [
               {
                     'method' : 'openPDWhy',
                     'artifactId' : 'WorkExecution.PD_WhyView_listItemTemplate_FailureReportList_eventHandlers_click_openPDWhy',
                     'id' : 'awdc5f140d',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSClassifyWorkOrderHandler',
               }
            ];
            listItemTemplate003.eventHandlers = eventHandlers027;


            var list003 = new List({
               'resource' : 'pdwhy',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate003,
               'artifactId' : 'WorkExecution.PD_WhyView_list',
               'id' : 'aw56360128',
               'label' : MessageService.createStaticMessage('Motivo'),
               'displayPageSize' : '20',
            });
            view007.addChild( list003 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.PD_WhyViewReinsp', false);
               trackTimer.startTracking();
            }

            var view008 = new View({
               'resource' : 'workOrder',
               'id' : 'WorkExecution.PD_WhyViewReinsp',
               'label' : MessageService.createStaticMessage('Motivos'),
            });
            ui001.addChild( view008 );

            var requiredResources008 = {
               'pdwhy' : {
                  'artifactId' : 'WorkExecution.PD_WhyView_Reinspms_pdwhy',
                  'id' : 'awe5e366b2',
               },
            };
            view008.addRequiredResources( requiredResources008 );


            var listItemTemplate004 = new ListItemTemplate({
               'layout' : 'FailureReportList',
               'artifactId' : 'WorkExecution.PD_WhyViewlistItemTemplate_FailureReportList_PD_WhyView',
               'id' : 'awe7909423',
            });

            var listtext013 = new ListText({
               'resourceAttribute' : 'pd_description',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.PD_WhyView_Reinspdesc',
               'id' : 'aw3a62b923',
            });
            listItemTemplate004.addChild( listtext013 );

            var eventHandlers028 = [
               {
                     'method' : 'openPDWhyReinsp',
                     'artifactId' : 'WorkExecution.PD_WhyView_ReinsplistItemTemplate_FailureReportList_eventHandlers_click_openPDWhy',
                     'id' : 'aw3bd8d61d',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSClassifyWorkOrderHandler',
               }
            ];
            listItemTemplate004.eventHandlers = eventHandlers028;


            var list004 = new List({
               'resource' : 'pdwhy',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate004,
               'artifactId' : 'WorkExecution.PD_WhyView_Reinsplist',
               'id' : 'aw751fed6f',
               'label' : MessageService.createStaticMessage('Motivo'),
               'displayPageSize' : '20',
            });
            view008.addChild( list004 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.TasksView', false);
               trackTimer.startTracking();
            }

            var view009 = new View({
               'id' : 'WorkExecution.TasksView',
               'label' : MessageService.createStaticMessage('Tasks'),
            });
            ui001.addChild( view009 );

            var requiredResources009 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.TasksView_workOrder',
                  'id' : 'awbe5693c5',
                  'related' : {
                     'tasklist' : {
                        'artifactId' : 'WorkExecution.TasksView_workOrder_tasklist',
                        'id' : 'aw7b7b0798',
                     },
                  },
               },
            };
            view009.addRequiredResources( requiredResources009 );


            var sortOptions002 = new SortOptions({
               'artifactId' : 'WorkExecution.TasksView_workOrder_tasklist_list_sortOptions',
               'id' : 'awb5b56504',
            });

            var sortOption004 = new SortOption({
               'artifactId' : 'WorkExecution.TasksView_sortOption_Task',
               'id' : 'aw113100d4',
               'label' : MessageService.createStaticMessage('Task'),
            });
            sortOptions002.addChild( sortOption004 );


            var sortAttribute004 = new SortAttribute({
               'name' : 'taskid',
               'artifactId' : 'WorkExecution.TasksView_Task_sortAttribute_taskid',
               'id' : 'aw722613c3',
               'direction' : 'asc',
            });
            sortOption004.addChild( sortAttribute004 );



            var listItemTemplate005 = new ListItemTemplate({
               'artifactId' : 'WorkExecution.TasksView_workOrder_tasklist_listItemTemplate',
               'id' : 'awba3a0441',
            });

            var listtext014 = new ListText({
               'resourceAttribute' : 'taskid',
               'artifactId' : 'WorkExecution.TasksView_workOrder_taskid',
               'id' : 'awf0d1de15',
            });
            listItemTemplate005.addChild( listtext014 );


            var listtext015 = new ListText({
               'resourceAttribute' : 'taskdescription',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'WorkExecution.TasksView_workOrder_taskdescription',
               'id' : 'awfe199b2b',
            });
            listItemTemplate005.addChild( listtext015 );


            var listtext016 = new ListText({
               'resourceAttribute' : 'statusdesc',
               'artifactId' : 'WorkExecution.TasksView_workOrder_statusdesc',
               'id' : 'awc3ac5ac5',
            });
            listItemTemplate005.addChild( listtext016 );


            var button010 = new Button({
               'resourceAttribute' : 'status',
               'artifactId' : 'WorkExecution.TasksView_workOrder_status_CompleteWork_button',
               'id' : 'awafddedad',
               'label' : MessageService.createStaticMessage('Complete Work'),
            });
            var eventHandlers029 = [
               {
                     'method' : 'enableCompleteTaskButton',
                     'artifactId' : 'WorkExecution.TasksView_workOrder_status_CompleteWork_button_eventHandlers_datachange_enableCompleteTaskButton',
                     'id' : 'awde7c71ba',
                     'event' : 'datachange',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'handleCompleteWorkClick',
                     'artifactId' : 'WorkExecution.TasksView_workOrder_status_CompleteWork_button_eventHandlers_click_handleCompleteWorkClick',
                     'id' : 'awaef261af',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button010.eventHandlers = eventHandlers029;
            listItemTemplate005.addChild( button010 );



            var list005 = new List({
               'resource' : 'workOrder',
               'transitionTo' : 'WorkExecution.TaskDetailView',
               'sortOptions' : sortOptions002,
               'listItemTemplate' : listItemTemplate005,
               'artifactId' : 'WorkExecution.TasksView_workOrder_tasklist_list',
               'attribute' : 'tasklist',
               'id' : 'awf123fbe7',
            });
            view009.addChild( list005 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.TaskDetailView', false);
               trackTimer.startTracking();
            }

            var view010 = new View({
               'id' : 'WorkExecution.TaskDetailView',
               'label' : MessageService.createStaticMessage('Task Details'),
            });
            ui001.addChild( view010 );

            var requiredResources010 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.TaskDetailView_workOrder',
                  'id' : 'awa1f580c',
                  'related' : {
                     'tasklist' : {
                        'artifactId' : 'WorkExecution.TaskDetailView_workOrder_tasklist',
                        'id' : 'aw181b8823',
                     },
                  },
               },
            };
            view010.addRequiredResources( requiredResources010 );

            var container012 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.TaskDetailView_workOrder_container_0',
               'attribute' : 'tasklist',
               'id' : 'aw80e85246',
            });
            view010.addChild( container012 );


            var group006 = new Group({
               'artifactId' : 'WorkExecution.TaskDetailView_group_0',
               'id' : 'awda706362',
            });
            container012.addChild( group006 );


            var groupitem017 = new GroupItem({
               'transitionTo' : 'WorkExecution.EditTaskStatusView',
               'artifactId' : 'WorkExecution.TaskDetailView_workOrder_groupitem_WorkExecution.EditTaskStatusView_0',
               'id' : 'aw1210403b',
            });
            group006.addChild( groupitem017 );


            var text032 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'artifactId' : 'WorkExecution.TaskDetailView_workOrder_groupitem_WorkExecution.EditTaskStatusView_0_statusdesc_Status',
               'id' : 'aw44f7db11',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem017.addChild( text032 );


            var groupitem018 = new GroupItem({
               'artifactId' : 'WorkExecution.TaskDetailView_workOrder_groupitem_0',
               'id' : 'awc533c355',
            });
            group006.addChild( groupitem018 );


            var text033 = new Text({
               'resourceAttribute' : 'taskid',
               'editable' : false,
               'artifactId' : 'WorkExecution.TaskDetailView_workOrder_groupitem_0_taskid_Task',
               'id' : 'aw84ca1e6',
               'label' : MessageService.createStaticMessage('Task'),
            });
            groupitem018.addChild( text033 );


            var groupitem019 = new GroupItem({
               'transitionTo' : 'WorkExecution.TaskView',
               'artifactId' : 'WorkExecution.TaskDetailView_workOrder_groupitem_WorkExecution.TaskView_0',
               'id' : 'awc0de811a',
            });
            group006.addChild( groupitem019 );


            var text034 = new Text({
               'resourceAttribute' : 'taskdescription',
               'editable' : false,
               'artifactId' : 'WorkExecution.TaskDetailView_workOrder_groupitem_WorkExecution.TaskView_0_taskdescription_Description',
               'id' : 'aw96e3b05e',
               'label' : MessageService.createStaticMessage('Description'),
            });
            groupitem019.addChild( text034 );


            var groupitem020 = new GroupItem({
               'transitionTo' : 'WorkExecution.AssetView',
               'artifactId' : 'WorkExecution.TaskDetailView_workOrder_groupitem_WorkExecution.AssetView_0',
               'id' : 'awa6dc5c5c',
            });
            group006.addChild( groupitem020 );


            var text035 = new Text({
               'resourceAttribute' : 'assetnumanddescription',
               'editable' : false,
               'artifactId' : 'WorkExecution.TaskDetailView_workOrder_groupitem_WorkExecution.AssetView_0_assetnumanddescription_Asset',
               'id' : 'aw19384bb5',
               'label' : MessageService.createStaticMessage('Asset'),
            });
            groupitem020.addChild( text035 );


            var button011 = new Button({
               'image' : '\/images\/action_meterReading_off.svg',
               'cssClass' : 'meterIcon',
               'artifactId' : 'WorkExecution.TaskDetailView_assetnumanddescription_imagesaction_meterReading_off.png_button',
               'id' : 'awa62b1a80',
            });
            var eventHandlers030 = [
               {
                     'method' : 'showTaskAssetMeterViewList',
                     'artifactId' : 'WorkExecution.TaskDetailView_assetnumanddescription_imagesaction_meterReading_off.png_button_eventHandlers_click_showTaskAssetMeterViewList',
                     'id' : 'aw1d736eb7',
                     'event' : 'click',
                     'class' : 'application.handlers.MetersListHandler',
               },
               {
                     'method' : 'hideTaskAssetMeterButton',
                     'artifactId' : 'WorkExecution.TaskDetailView_assetnumanddescription_imagesaction_meterReading_off.png_button_eventHandlers_render_hideTaskAssetMeterButton',
                     'id' : 'aw708d79e4',
                     'event' : 'render',
                     'class' : 'application.handlers.MetersListHandler',
               }
            ];
            button011.eventHandlers = eventHandlers030;
            text035.addChild( button011 );


            var groupitem021 = new GroupItem({
               'transitionTo' : 'WorkExecution.LocationView',
               'artifactId' : 'WorkExecution.TaskDetailView_workOrder_groupitem_WorkExecution.LocationView_0',
               'id' : 'aw47ec4a7a',
            });
            group006.addChild( groupitem021 );


            var text036 = new Text({
               'resourceAttribute' : 'locationanddescription',
               'editable' : false,
               'artifactId' : 'WorkExecution.TaskDetailView_workOrder_groupitem_WorkExecution.LocationView_0_locationanddescription_Location',
               'id' : 'awde2a2ac6',
               'label' : MessageService.createStaticMessage('Location'),
            });
            groupitem021.addChild( text036 );


            var button012 = new Button({
               'image' : '\/images\/action_meterReading_off.svg',
               'cssClass' : 'meterIcon',
               'artifactId' : 'WorkExecution.TaskDetailView_locationanddescription_imagesaction_meterReading_off.png_button',
               'id' : 'awb8c1cba7',
            });
            var eventHandlers031 = [
               {
                     'method' : 'showTaskLocationMeterViewList',
                     'artifactId' : 'WorkExecution.TaskDetailView_locationanddescription_imagesaction_meterReading_off.png_button_eventHandlers_click_showTaskLocationMeterViewList',
                     'id' : 'aw2bf061f3',
                     'event' : 'click',
                     'class' : 'application.handlers.MetersListHandler',
               },
               {
                     'method' : 'hideTaskLocationMeterButton',
                     'artifactId' : 'WorkExecution.TaskDetailView_locationanddescription_imagesaction_meterReading_off.png_button_eventHandlers_render_hideTaskLocationMeterButton',
                     'id' : 'awb91b87fd',
                     'event' : 'render',
                     'class' : 'application.handlers.MetersListHandler',
               }
            ];
            button012.eventHandlers = eventHandlers031;
            text036.addChild( button012 );


            var group007 = new Group({
               'artifactId' : 'WorkExecution.TaskDetailView_group_1',
               'id' : 'awad7753f4',
            });
            container012.addChild( group007 );


            var groupitem022 = new GroupItem({
               'artifactId' : 'WorkExecution.TaskDetailView_workOrder_groupitem_2',
               'id' : 'aw2b3da279',
            });
            group007.addChild( groupitem022 );


            var lastupdatetext002 = new LastUpdateText({
               'artifactId' : 'WorkExecution.TaskDetailView_lastupdatetext',
               'id' : 'awad153b5a',
            });
            groupitem022.addChild( lastupdatetext002 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.TaskView', false);
               trackTimer.startTracking();
            }

            var view011 = new View({
               'id' : 'WorkExecution.TaskView',
               'label' : MessageService.createStaticMessage('Task'),
            });
            ui001.addChild( view011 );

            var requiredResources011 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.TaskView_workOrder',
                  'id' : 'aw94f99ea2',
                  'related' : {
                     'tasklist' : {
                        'artifactId' : 'WorkExecution.TaskView_workOrder_tasklist',
                        'id' : 'awcfa87bf3',
                     },
                  },
               },
            };
            view011.addRequiredResources( requiredResources011 );

            var container013 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.TaskView_workOrder_container_0',
               'attribute' : 'tasklist',
               'id' : 'aw609837e9',
            });
            view011.addChild( container013 );


            var group008 = new Group({
               'artifactId' : 'WorkExecution.TaskView_group_0',
               'id' : 'aw8189a534',
            });
            container013.addChild( group008 );


            var groupitem023 = new GroupItem({
               'artifactId' : 'WorkExecution.TaskView_workOrder_groupitem_0',
               'id' : 'aw2543a6fa',
            });
            group008.addChild( groupitem023 );


            var text037 = new Text({
               'resourceAttribute' : 'taskdescription',
               'editable' : false,
               'artifactId' : 'WorkExecution.TaskView_workOrder_groupitem_0_taskdescription',
               'id' : 'aw6f7ec8c7',
            });
            groupitem023.addChild( text037 );


            var groupitem024 = new GroupItem({
               'artifactId' : 'WorkExecution.TaskView_workOrder_groupitem_1',
               'id' : 'aw5244966c',
            });
            group008.addChild( groupitem024 );


            var text038 = new Text({
               'resourceAttribute' : 'tasklongdesc',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'WorkExecution.TaskView_workOrder_groupitem_1_tasklongdesc',
               'id' : 'aw51ac31d1',
            });
            groupitem024.addChild( text038 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.LaborAssignmentsView', false);
               trackTimer.startTracking();
            }

            var view012 = new View({
               'id' : 'WorkExecution.LaborAssignmentsView',
               'label' : MessageService.createStaticMessage('Labor Assignments'),
            });
            ui001.addChild( view012 );

            var requiredResources012 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder',
                  'id' : 'aw169214ed',
                  'related' : {
                     'assignmentlist' : {
                        'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_assignmentlist',
                        'id' : 'aw1504376b',
                     },
                  },
               },
            };
            view012.addRequiredResources( requiredResources012 );


            var sortOptions003 = new SortOptions({
               'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_assignmentlist_list_sortOptions',
               'id' : 'awdc9dbd60',
            });

            var sortOption005 = new SortOption({
               'artifactId' : 'WorkExecution.LaborAssignmentsView_sortOption_TaskIDLabor',
               'id' : 'awac27770c',
               'label' : MessageService.createStaticMessage('Task ID, Labor'),
            });
            sortOptions003.addChild( sortOption005 );


            var sortAttribute005 = new SortAttribute({
               'name' : 'taskid',
               'artifactId' : 'WorkExecution.LaborAssignmentsView_TaskIDLabor_sortAttribute_taskid',
               'id' : 'aw39c2be9e',
               'direction' : 'asc',
            });
            sortOption005.addChild( sortAttribute005 );


            var sortAttribute006 = new SortAttribute({
               'name' : 'laborcodeandname',
               'artifactId' : 'WorkExecution.LaborAssignmentsView_TaskIDLabor_sortAttribute_laborcodeandname',
               'id' : 'awf63559a2',
               'direction' : 'asc',
            });
            sortOption005.addChild( sortAttribute006 );



            var listItemTemplate006 = new ListItemTemplate({
               'layout' : 'LaborAssignmentListItem',
               'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_assignmentlist_listItemTemplate_LaborAssignmentListItem',
               'id' : 'awce161be0',
            });

            var listtext017 = new ListText({
               'resourceAttribute' : 'taskid',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_LaborAssignmentListItem_taskid',
               'id' : 'aw86d9105d',
            });
            listItemTemplate006.addChild( listtext017 );


            var listtext018 = new ListText({
               'resourceAttribute' : 'laborcodeandname',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_LaborAssignmentListItem_laborcodeandname',
               'id' : 'awbe37a74a',
            });
            listItemTemplate006.addChild( listtext018 );


            var listtext019 = new ListText({
               'resourceAttribute' : 'craft',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_LaborAssignmentListItem_craft',
               'id' : 'aw5cce2ffb',
            });
            listItemTemplate006.addChild( listtext019 );


            var listtext020 = new ListText({
               'resourceAttribute' : 'skilllevel',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_LaborAssignmentListItem_skilllevel',
               'id' : 'aw6fbd0aea',
            });
            listItemTemplate006.addChild( listtext020 );


            var listtext021 = new ListText({
               'resourceAttribute' : 'crew',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_LaborAssignmentListItem_crew',
               'id' : 'aw7cf36a1f',
            });
            listItemTemplate006.addChild( listtext021 );



            var list006 = new List({
               'resource' : 'workOrder',
               'transitionTo' : 'WorkExecution.LaborAssignmentDetailView',
               'sortOptions' : sortOptions003,
               'listItemTemplate' : listItemTemplate006,
               'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_assignmentlist_list',
               'attribute' : 'assignmentlist',
               'id' : 'awaa4f408f',
            });
            view012.addChild( list006 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.LaborAssignmentDetailView', false);
               trackTimer.startTracking();
            }

            var view013 = new View({
               'id' : 'WorkExecution.LaborAssignmentDetailView',
               'label' : MessageService.createStaticMessage('Labor Assignment Details'),
            });
            ui001.addChild( view013 );

            var requiredResources013 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder',
                  'id' : 'aw7b58ba36',
                  'related' : {
                     'assignmentlist' : {
                        'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_assignmentlist',
                        'id' : 'aw1f27f8da',
                     },
                  },
               },
            };
            view013.addRequiredResources( requiredResources013 );

            var container014 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_container_0',
               'attribute' : 'assignmentlist',
               'id' : 'aw9a115d0a',
            });
            view013.addChild( container014 );


            var group009 = new Group({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_group_0',
               'id' : 'aw4e57cb7',
            });
            container014.addChild( group009 );


            var groupitem025 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_0',
               'id' : 'awdfcacc19',
            });
            group009.addChild( groupitem025 );


            var text039 = new Text({
               'resourceAttribute' : 'taskid',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_0_taskid_Task',
               'id' : 'aw7b6ac0ed',
               'label' : MessageService.createStaticMessage('Task'),
            });
            groupitem025.addChild( text039 );


            var groupitem026 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_1',
               'id' : 'awa8cdfc8f',
            });
            group009.addChild( groupitem026 );


            var text040 = new Text({
               'resourceAttribute' : 'laborcode',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_1_laborcode_Labor',
               'id' : 'awd7116c8',
               'label' : MessageService.createStaticMessage('Labor'),
            });
            groupitem026.addChild( text040 );


            var text041 = new Text({
               'resourceAttribute' : 'laborname',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_1_laborname',
               'id' : 'awe656383d',
            });
            groupitem026.addChild( text041 );


            var groupitem027 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_2',
               'id' : 'aw31c4ad35',
            });
            group009.addChild( groupitem027 );


            var text042 = new Text({
               'resourceAttribute' : 'craft',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_2_craft_Craft',
               'id' : 'awbb118ac3',
               'label' : MessageService.createStaticMessage('Craft'),
            });
            groupitem027.addChild( text042 );


            var groupitem028 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_3',
               'id' : 'aw46c39da3',
            });
            group009.addChild( groupitem028 );


            var text043 = new Text({
               'resourceAttribute' : 'skilllevel',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_3_skilllevel_SkillLevel',
               'id' : 'aw3a7ab7f0',
               'label' : MessageService.createStaticMessage('Skill Level'),
            });
            groupitem028.addChild( text043 );


            var groupitem029 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_4',
               'id' : 'awd8a70800',
            });
            group009.addChild( groupitem029 );


            var text044 = new Text({
               'resourceAttribute' : 'crew',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_4_crew_Crew',
               'id' : 'awdea7a921',
               'label' : MessageService.createStaticMessage('Crew'),
            });
            groupitem029.addChild( text044 );


            var text045 = new Text({
               'resourceAttribute' : 'crewdesc',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_4_crewdesc',
               'id' : 'awf8cf453a',
            });
            groupitem029.addChild( text045 );


            var groupitem030 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_5',
               'id' : 'awafa03896',
            });
            group009.addChild( groupitem030 );


            var text046 = new Text({
               'resourceAttribute' : 'status',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_5_status_Status',
               'id' : 'aw34bcd4a5',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem030.addChild( text046 );


            var groupitem031 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_6',
               'id' : 'aw36a9692c',
            });
            group009.addChild( groupitem031 );


            var text047 = new Text({
               'resourceAttribute' : 'scheduledate',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_6_scheduledate_ScheduledDate',
               'id' : 'aw8fe87ff5',
               'label' : MessageService.createStaticMessage('Scheduled Date'),
            });
            groupitem031.addChild( text047 );


            var groupitem032 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_7',
               'id' : 'aw41ae59ba',
            });
            group009.addChild( groupitem032 );


            var text048 = new Text({
               'resourceAttribute' : 'laborhours',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_7_laborhours_Hours',
               'id' : 'awcc71318d',
               'label' : MessageService.createStaticMessage('Hours'),
            });
            groupitem032.addChild( text048 );


            var groupitem033 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_8',
               'id' : 'awd111442b',
            });
            group009.addChild( groupitem033 );


            var text049 = new Text({
               'resourceAttribute' : 'vendor',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_8_vendor_Vendor',
               'id' : 'aw8d105f9c',
               'label' : MessageService.createStaticMessage('Vendor'),
            });
            groupitem033.addChild( text049 );


            var groupitem034 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_9',
               'id' : 'awa61674bd',
            });
            group009.addChild( groupitem034 );


            var text050 = new Text({
               'resourceAttribute' : 'contractnum',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_9_contractnum_Contract',
               'id' : 'awdc93b047',
               'label' : MessageService.createStaticMessage('Contract'),
            });
            groupitem034.addChild( text050 );


            var group010 = new Group({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_group_1',
               'id' : 'aw73e24c21',
            });
            container014.addChild( group010 );


            var groupitem035 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_10',
               'id' : 'aw89748c6c',
            });
            group010.addChild( groupitem035 );


            var lastupdatetext003 = new LastUpdateText({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_lastupdatetext',
               'id' : 'aw7903c13c',
            });
            groupitem035.addChild( lastupdatetext003 );

            var eventHandlers032 = [
               {
                     'method' : 'asyncLaborAssignmentDetailView',
                     'artifactId' : 'WorkExecution.LaborAssignmentDetailView_eventHandlers_show_asyncLaborAssignmentDetailView',
                     'id' : 'aw81954f9f',
                     'event' : 'show',
                     'class' : 'application.handlers.LaborAssignmentHandler',
               },
               {
                     'method' : 'cleanupAssignmentDetailView',
                     'artifactId' : 'WorkExecution.LaborAssignmentDetailView_eventHandlers_cleanup_cleanupAssignmentDetailView',
                     'id' : 'aw5acf629d',
                     'event' : 'cleanup',
                     'class' : 'application.handlers.LaborAssignmentHandler',
               }
            ];
            view013.eventHandlers = eventHandlers032;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.PlannedMaterialView', false);
               trackTimer.startTracking();
            }

            var view014 = new View({
               'id' : 'WorkExecution.PlannedMaterialView',
               'label' : MessageService.createStaticMessage('Planned Materials'),
            });
            ui001.addChild( view014 );

            var requiredResources014 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.PlannedMaterialView_workOrder',
                  'id' : 'aw1b50572d',
                  'related' : {
                     'materiallist' : {
                        'artifactId' : 'WorkExecution.PlannedMaterialView_workOrder_materiallist',
                        'id' : 'awfe83a08e',
                     },
                  },
               },
            };
            view014.addRequiredResources( requiredResources014 );


            var sortOptions004 = new SortOptions({
               'artifactId' : 'WorkExecution.PlannedMaterialView_workOrder_materiallist_list_sortOptions',
               'id' : 'aw33694292',
            });

            var sortOption006 = new SortOption({
               'artifactId' : 'WorkExecution.PlannedMaterialView_sortOption_TaskIDItem',
               'id' : 'aw8a93c408',
               'label' : MessageService.createStaticMessage('Task ID, Item'),
            });
            sortOptions004.addChild( sortOption006 );


            var sortAttribute007 = new SortAttribute({
               'name' : 'taskid',
               'artifactId' : 'WorkExecution.PlannedMaterialView_TaskIDItem_sortAttribute_taskid',
               'id' : 'awcc90c0a',
               'direction' : 'asc',
            });
            sortOption006.addChild( sortAttribute007 );


            var sortAttribute008 = new SortAttribute({
               'name' : 'itemanddescription',
               'artifactId' : 'WorkExecution.PlannedMaterialView_TaskIDItem_sortAttribute_itemanddescription',
               'id' : 'aw74ecd191',
               'direction' : 'asc',
            });
            sortOption006.addChild( sortAttribute008 );



            var listItemTemplate007 = new ListItemTemplate({
               'layout' : 'PlannedMaterialListItem',
               'artifactId' : 'WorkExecution.PlannedMaterialView_workOrder_materiallist_listItemTemplate_PlannedMaterialListItem',
               'id' : 'aw6dd75fd1',
            });

            var listtext022 = new ListText({
               'resourceAttribute' : 'taskid',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.PlannedMaterialView_workOrder_PlannedMaterialListItem_taskid',
               'id' : 'aw49cc2aaa',
            });
            listItemTemplate007.addChild( listtext022 );


            var listtext023 = new ListText({
               'resourceAttribute' : 'itemanddescription',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.PlannedMaterialView_workOrder_PlannedMaterialListItem_itemanddescription',
               'id' : 'aw101fad11',
            });
            listItemTemplate007.addChild( listtext023 );


            var listtext024 = new ListText({
               'resourceAttribute' : 'quantity',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'WorkExecution.PlannedMaterialView_workOrder_PlannedMaterialListItem_quantity',
               'id' : 'aw5b2435a4',
            });
            listItemTemplate007.addChild( listtext024 );



            var list007 = new List({
               'resource' : 'workOrder',
               'transitionTo' : 'WorkExecution.PlannedMaterialDetailView',
               'sortOptions' : sortOptions004,
               'listItemTemplate' : listItemTemplate007,
               'artifactId' : 'WorkExecution.PlannedMaterialView_workOrder_materiallist_list',
               'attribute' : 'materiallist',
               'id' : 'aw331cf61f',
            });
            view014.addChild( list007 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.PlannedMaterialDetailView', false);
               trackTimer.startTracking();
            }

            var view015 = new View({
               'id' : 'WorkExecution.PlannedMaterialDetailView',
               'label' : MessageService.createStaticMessage('Material Details'),
            });
            ui001.addChild( view015 );

            var requiredResources015 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.PlannedMaterialDetailView_workOrder',
                  'id' : 'awdbf67e99',
                  'related' : {
                     'materiallist' : {
                        'artifactId' : 'WorkExecution.PlannedMaterialDetailView_workOrder_materiallist',
                        'id' : 'aw7dc69de3',
                     },
                  },
               },
            };
            view015.addRequiredResources( requiredResources015 );

            var container015 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_workOrder_container_0',
               'attribute' : 'materiallist',
               'id' : 'awd236911f',
            });
            view015.addChild( container015 );


            var group011 = new Group({
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_group_0',
               'id' : 'awf3f6f1d1',
            });
            container015.addChild( group011 );


            var groupitem036 = new GroupItem({
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_workOrder_groupitem_0',
               'id' : 'aw97ed000c',
            });
            group011.addChild( groupitem036 );


            var text051 = new Text({
               'resourceAttribute' : 'taskid',
               'editable' : false,
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_workOrder_groupitem_0_taskid_Task',
               'id' : 'aw8ca95d00',
               'label' : MessageService.createStaticMessage('Task'),
            });
            groupitem036.addChild( text051 );


            var groupitem037 = new GroupItem({
               'transitionTo' : 'WorkExecution.MaterialView',
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_workOrder_groupitem_WorkExecution.MaterialView_0',
               'id' : 'awda8a17f4',
            });
            group011.addChild( groupitem037 );


            var text052 = new Text({
               'resourceAttribute' : 'itemanddescription',
               'editable' : false,
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_workOrder_groupitem_WorkExecution.MaterialView_0_itemanddescription_Item',
               'id' : 'awc2ca0d00',
               'label' : MessageService.createStaticMessage('Item'),
            });
            groupitem037.addChild( text052 );


            var groupitem038 = new GroupItem({
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_workOrder_groupitem_1',
               'id' : 'awe0ea309a',
            });
            group011.addChild( groupitem038 );


            var text053 = new Text({
               'resourceAttribute' : 'quantity',
               'editable' : false,
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_workOrder_groupitem_1_quantity_Quantity',
               'id' : 'awecb03950',
               'label' : MessageService.createStaticMessage('Quantity'),
            });
            groupitem038.addChild( text053 );


            var groupitem039 = new GroupItem({
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_workOrder_groupitem_2',
               'id' : 'aw79e36120',
            });
            group011.addChild( groupitem039 );


            var text054 = new Text({
               'resourceAttribute' : 'linetype',
               'editable' : false,
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_workOrder_groupitem_2_linetype_LineType',
               'id' : 'aw9cd0ab29',
               'label' : MessageService.createStaticMessage('Line Type'),
            });
            groupitem039.addChild( text054 );


            var groupitem040 = new GroupItem({
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_workOrder_groupitem_3',
               'id' : 'awee451b6',
            });
            group011.addChild( groupitem040 );


            var text055 = new Text({
               'resourceAttribute' : 'storeroom',
               'editable' : false,
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_workOrder_groupitem_3_storeroom_Storeroom',
               'id' : 'aw4d9b74ce',
               'label' : MessageService.createStaticMessage('Storeroom'),
            });
            groupitem040.addChild( text055 );


            var text056 = new Text({
               'resourceAttribute' : 'storeroomdesc',
               'editable' : false,
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_workOrder_groupitem_3_storeroomdesc',
               'id' : 'aw9bd69582',
            });
            groupitem040.addChild( text056 );


            var groupitem041 = new GroupItem({
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_workOrder_groupitem_4',
               'id' : 'aw9080c415',
            });
            group011.addChild( groupitem041 );


            var checkbox001 = new CheckBox({
               'resourceAttribute' : 'directrequest',
               'editable' : false,
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_directrequest_checkbox',
               'id' : 'aw131928a2',
               'label' : MessageService.createStaticMessage('Direct Request'),
            });
            groupitem041.addChild( checkbox001 );


            var group012 = new Group({
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_group_1',
               'id' : 'aw84f1c147',
            });
            container015.addChild( group012 );


            var groupitem042 = new GroupItem({
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_workOrder_groupitem_5',
               'id' : 'awe787f483',
            });
            group012.addChild( groupitem042 );


            var lastupdatetext004 = new LastUpdateText({
               'artifactId' : 'WorkExecution.PlannedMaterialDetailView_lastupdatetext',
               'id' : 'awfba7ca9',
            });
            groupitem042.addChild( lastupdatetext004 );

            var eventHandlers033 = [
               {
                     'method' : 'initPlannedMaterialDetailView',
                     'artifactId' : 'WorkExecution.PlannedMaterialDetailView_eventHandlers_show_initPlannedMaterialDetailView',
                     'id' : 'awd77073ec',
                     'event' : 'show',
                     'class' : 'application.handlers.PlannedMaterialHandler',
               }
            ];
            view015.eventHandlers = eventHandlers033;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.PlannedToolsView', false);
               trackTimer.startTracking();
            }

            var view016 = new View({
               'id' : 'WorkExecution.PlannedToolsView',
               'label' : MessageService.createStaticMessage('Planned Tools'),
            });
            ui001.addChild( view016 );

            var requiredResources016 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.PlannedToolsView_workOrder',
                  'id' : 'aw8bd22fb9',
                  'related' : {
                     'toollist' : {
                        'artifactId' : 'WorkExecution.PlannedToolsView_workOrder_toollist',
                        'id' : 'aw5250c9e3',
                     },
                  },
               },
            };
            view016.addRequiredResources( requiredResources016 );


            var sortOptions005 = new SortOptions({
               'artifactId' : 'WorkExecution.PlannedToolsView_workOrder_toollist_list_sortOptions',
               'id' : 'aw3894d30',
            });

            var sortOption007 = new SortOption({
               'artifactId' : 'WorkExecution.PlannedToolsView_sortOption_TaskIDTool',
               'id' : 'awb6264e10',
               'label' : MessageService.createStaticMessage('Task ID, Tool'),
            });
            sortOptions005.addChild( sortOption007 );


            var sortAttribute009 = new SortAttribute({
               'name' : 'taskid',
               'artifactId' : 'WorkExecution.PlannedToolsView_TaskIDTool_sortAttribute_taskid',
               'id' : 'awb6744245',
               'direction' : 'asc',
            });
            sortOption007.addChild( sortAttribute009 );


            var sortAttribute010 = new SortAttribute({
               'name' : 'toolanddescription',
               'artifactId' : 'WorkExecution.PlannedToolsView_TaskIDTool_sortAttribute_toolanddescription',
               'id' : 'aw26fcfe23',
               'direction' : 'asc',
            });
            sortOption007.addChild( sortAttribute010 );



            var listItemTemplate008 = new ListItemTemplate({
               'layout' : 'PlannedToolListItem',
               'artifactId' : 'WorkExecution.PlannedToolsView_workOrder_toollist_listItemTemplate_PlannedToolListItem',
               'id' : 'aw27ebc814',
            });

            var listtext025 = new ListText({
               'resourceAttribute' : 'taskid',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.PlannedToolsView_workOrder_PlannedToolListItem_taskid',
               'id' : 'aw173ee2d0',
            });
            listItemTemplate008.addChild( listtext025 );


            var listtext026 = new ListText({
               'resourceAttribute' : 'toolanddescription',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.PlannedToolsView_workOrder_PlannedToolListItem_toolanddescription',
               'id' : 'aw59bab0a1',
            });
            listItemTemplate008.addChild( listtext026 );


            var listtext027 = new ListText({
               'resourceAttribute' : 'quantity',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'WorkExecution.PlannedToolsView_workOrder_PlannedToolListItem_quantity',
               'id' : 'aw1b4bb0a8',
            });
            listItemTemplate008.addChild( listtext027 );



            var list008 = new List({
               'resource' : 'workOrder',
               'transitionTo' : 'WorkExecution.PlannedToolsDetailView',
               'sortOptions' : sortOptions005,
               'listItemTemplate' : listItemTemplate008,
               'artifactId' : 'WorkExecution.PlannedToolsView_workOrder_toollist_list',
               'attribute' : 'toollist',
               'id' : 'aw99ed85e6',
            });
            view016.addChild( list008 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.FollowUpWorkOrderView', false);
               trackTimer.startTracking();
            }

            var view017 = new View({
               'resource' : 'workOrder',
               'id' : 'WorkExecution.FollowUpWorkOrderView',
               'label' : MessageService.createStaticMessage('Service Item Details'),
            });
            ui001.addChild( view017 );

            var requiredResources017 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.FollowUpWorkOrderView_workOrder',
                  'id' : 'aw69258759',
                  'related' : {
                     'workOrderSpec' : {
                        'artifactId' : 'WorkExecution.FollowUpWorkOrderView_workOrder_workOrderSpec',
                        'id' : 'aw4797f0ec',
                     },
                  },
               },
               'additionalworktype' : {
                  'artifactId' : 'WorkExecution.FollowUpWorkOrderView_additionalworktype',
                  'id' : 'aw16b9fe92',
               },
               'domainAssetstatus' : {
                  'artifactId' : 'WorkExecution.FollowUpWorkOrderView_domainAssetstatus',
                  'id' : 'awbdc84a85',
               },
               'domainwoclass' : {
                  'artifactId' : 'WorkExecution.FollowUpWorkOrderView_domainwoclass',
                  'id' : 'aw96ed6af',
               },
               'mylabor' : {
                  'artifactId' : 'WorkExecution.FollowUpWorkOrderView_mylabor',
                  'id' : 'aw6442db82',
               },
               'laborcrew' : {
                  'reload' : true,
                  'artifactId' : 'WorkExecution.FollowUpWorkOrderView_laborcrew',
                  'id' : 'aw77a0f09f',
               },
               'additionalasset' : {
                  'artifactId' : 'WorkExecution.FollowUpWorkOrderView_additionalasset',
                  'id' : 'aw7ea17c8a',
               },
               'woFollowUpInfo' : {
                  'artifactId' : 'WorkExecution.FollowUpWorkOrderView_woFollowUpInfo',
                  'id' : 'aw6a27da8c',
               },
               'assetattrtypes' : {
                  'artifactId' : 'WorkExecution.FollowUpWorkOrderView_assetattrtypes',
                  'id' : 'aw57565055',
               },
               'classstructure' : {
                  'artifactId' : 'WorkExecution.FollowUpWorkOrderView_classstructure',
                  'id' : 'aw4a268e93',
               },
               'domainworktype' : {
                  'artifactId' : 'WorkExecution.FollowUpWorkOrderView_domainworktype',
                  'id' : 'aw926dd663',
               },
            };
            view017.addRequiredResources( requiredResources017 );

            var actions005 = new Actions({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_actions',
               'id' : 'awf24ff623',
            });
            view017.addChild( actions005 );


            var action006 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'enableFeatureByProperty' : 'attachments.enabled',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_TakePhoto_action',
               'id' : 'aw33be8473',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions005.addChild( action006 );

            var eventHandlers034 = [
               {
                     'method' : 'launchCameraForPhoto',
                     'artifactId' : 'WorkExecution.FollowUpWorkOrderView_TakePhoto_action_eventHandlers_click_launchCameraForPhoto',
                     'id' : 'aw56316f6',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               },
               {
                     'method' : 'initCategory',
                     'artifactId' : 'WorkExecution.FollowUpWorkOrderView_TakePhoto_action_eventHandlers_render_initCategory',
                     'id' : 'aw3a066985',
                     'event' : 'render',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            action006.eventHandlers = eventHandlers034;

            var container016 = new Container({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_container_0',
               'id' : 'awfe577e0',
            });
            view017.addChild( container016 );


            var group013 = new Group({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_0',
               'id' : 'aw6a18af46',
            });
            container016.addChild( group013 );


            var groupitem043 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_0',
               'id' : 'aw4a3ee6f3',
            });
            group013.addChild( groupitem043 );


            var text057 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : false,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_0_wonum_WorkOrder',
               'id' : 'awe1c6aa2c',
               'label' : MessageService.createStaticMessage('Service Order'),
            });
            groupitem043.addChild( text057 );


            var groupitem044 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.EditStatusView_0',
               'id' : 'awc5f263b0',
            });
            group013.addChild( groupitem044 );


            var text058 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.EditStatusView_0_statusdesc_Status',
               'id' : 'awd3717903',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem044.addChild( text058 );


            var groupitem045 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.EditSiteidView_0',
               'id' : 'aw53c170c6',
            });
            group013.addChild( groupitem045 );


            var text059 = new Text({
               'resourceAttribute' : 'siteid',
               'editable' : false,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution_groupitem_0_siteid_WorkOrder',
               'id' : 'aw8ddaf56a',
               'label' : MessageService.createStaticMessage('Regional Government'),
            });
            groupitem045.addChild( text059 );


            var groupitem046 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.Pd_Obs_0',
               'id' : 'awdf472c98',
            });
            group013.addChild( groupitem046 );


            var textarea001 = new TextArea({
               'resourceAttribute' : 'pd_obs',
               'editable' : true,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.Pd_Obs_0_obs_pd_obs',
               'id' : 'aw5f33fecb',
               'label' : MessageService.createStaticMessage('Comments'),
            });
            groupitem046.addChild( textarea001 );


            var groupitem047 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_workOrder_groupitem_1',
               'id' : 'aw90746d32',
            });
            group013.addChild( groupitem047 );


            var text060 = new Text({
               'resourceAttribute' : 'woserviceaddressline2',
               'editable' : true,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_1_woserviceaddress_woserviceaddressaddressline2',
               'id' : 'awf960e1b4',
               'label' : MessageService.createStaticMessage('Address'),
               'required' : true,
            });
            groupitem047.addChild( text060 );


            var text061 = new Text({
               'resourceAttribute' : 'woservicetaddrnumber',
               'editable' : true,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_1_woserviceaddress_woserviceaddressstaddrnumber',
               'id' : 'awc687669c',
               'label' : MessageService.createStaticMessage('Number'),
               'required' : true,
            });
            groupitem047.addChild( text061 );


            var text062 = new Text({
               'resourceAttribute' : 'woserviceaddressline3',
               'editable' : true,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_1_woserviceaddress_woserviceaddressaddressline3',
               'id' : 'aw8e67d122',
               'label' : MessageService.createStaticMessage('District'),
               'required' : true,
            });
            groupitem047.addChild( text062 );


            var text063 = new Text({
               'resourceAttribute' : 'woservicepostalcode',
               'editable' : true,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_1_woserviceaddress_woserviceaddresspostalcode',
               'id' : 'awdbf765a6',
               'label' : MessageService.createStaticMessage('Postal Code'),
            });
            groupitem047.addChild( text063 );


            var groupitem048 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_5',
               'id' : 'aw3a54127c',
            });
            group013.addChild( groupitem048 );


            var text064 = new Text({
               'resourceAttribute' : 'starttime',
               'editable' : true,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_2_starttime_ScheduledStart',
               'id' : 'awe71e7aa4',
               'label' : MessageService.createStaticMessage('Scheduled Start'),
               'placeHolder' : MessageService.createStaticMessage('Select'),
            });
            groupitem048.addChild( text064 );


            var groupitem049 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_6',
               'id' : 'awa35d43c6',
            });
            group013.addChild( groupitem049 );


            var text065 = new Text({
               'resourceAttribute' : 'finishtime',
               'editable' : true,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_3_finishtime_ScheduledFinish',
               'id' : 'aw28e94f80',
               'label' : MessageService.createStaticMessage('Scheduled Finish'),
               'placeHolder' : MessageService.createStaticMessage('Select'),
            });
            groupitem049.addChild( text065 );


            var container017 = new Container({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_container_1',
               'id' : 'aw78e24776',
            });
            view017.addChild( container017 );


            var group014 = new Group({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_2',
               'id' : 'aw8416ce6a',
            });
            container017.addChild( group014 );


            var groupitem050 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'enableFeatureByProperty' : 'attachments.enabled',
               'transitionTo' : 'WorkExecution.AttachmentsView',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.AttachmentsView_0',
               'id' : 'aw9b12694d',
            });
            group014.addChild( groupitem050 );


            var text066 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.AttachmentsView_0_Attachments',
               'id' : 'aw712b546a',
               'value' : MessageService.createStaticMessage('Attachments'),
            });
            groupitem050.addChild( text066 );


            var text067 = new Text({
               'resourceAttribute' : 'attachmentssize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.AttachmentsView_0_attachmentssize',
               'id' : 'aw1159373c',
            });
            groupitem050.addChild( text067 );


            var group015 = new Group({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_5',
               'id' : 'aw1a725bc9',
            });
            container017.addChild( group015 );


            var groupitem051 = new GroupItem({
               'layout' : 'Item1Count1Button1',
               'transitionTo' : 'WorkExecution.LaborAssignmentsView',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_5_groupitem',
               'id' : 'awc508da2d',
            });
            group015.addChild( groupitem051 );


            var text068 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_5_groupitem_WorkExecution.LaborAssignmentsView_0_LaborAssignments',
               'id' : 'aw7c9b7f1a',
               'value' : MessageService.createStaticMessage('Labor Assignments'),
            });
            groupitem051.addChild( text068 );


            var text069 = new Text({
               'resourceAttribute' : 'assignmentlistsize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_5_groupitem_WorkExecution.LaborAssignmentsView_0_assignmentlistsize',
               'id' : 'awb9443397',
            });
            groupitem051.addChild( text069 );


            var group016 = new Group({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_4',
               'id' : 'aw6d756b5f',
            });
            container017.addChild( group016 );


            var groupitem052 = new GroupItem({
               'layout' : 'Item1Count1Button1',
               'transitionTo' : 'WorkExecution.PlannedToolsView',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group.PlannedToolsView_0',
               'id' : 'awf3d89193',
            });
            group016.addChild( groupitem052 );


            var text070 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_groupitem_WorkExecution.PlannedToolsView_0_PlannedTools',
               'id' : 'aw6f4461a',
               'value' : MessageService.createStaticMessage('Planned Tools'),
            });
            groupitem052.addChild( text070 );


            var text071 = new Text({
               'resourceAttribute' : 'toollistsize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_groupitem_WorkExecution.PlannedToolsView_0_toollistsize',
               'id' : 'aw18873c94',
            });
            groupitem052.addChild( text071 );


            var footer001 = new Footer({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_footer',
               'id' : 'aw876194c7',
            });
            view017.addChild( footer001 );


            var button013 = new Button({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_Cancel_button',
               'id' : 'awb2092321',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers035 = [
               {
                     'method' : 'discardNewWorkOrderView',
                     'artifactId' : 'WorkExecution.FollowUpWorkOrderView_Cancel_button_eventHandlers_click_discardNewWorkOrderView',
                     'id' : 'aw40a1b099',
                     'event' : 'click',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            button013.eventHandlers = eventHandlers035;
            footer001.addChild( button013 );


            var button014 = new Button({
               'resourceAttribute' : 'wonum',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_wonum_Create_button',
               'id' : 'aw714e2cfd',
               'label' : MessageService.createStaticMessage('Create'),
               'primary' : 'true',
            });
            var eventHandlers036 = [
               {
                     'method' : 'commitNewWorkOrderView',
                     'artifactId' : 'WorkExecution.FollowUpWorkOrderView_wonum_Create_button_eventHandlers_click_commitNewWorkOrderView',
                     'id' : 'aw2436e46c',
                     'event' : 'click',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            button014.eventHandlers = eventHandlers036;
            footer001.addChild( button014 );

            var eventHandlers037 = [
               {
                     'method' : 'discardNewWorkOrderView',
                     'artifactId' : 'WorkExecution.FollowUpWorkOrderView_eventHandlers_cleanup_discardNewWorkOrderView',
                     'id' : 'aw65bf5473',
                     'event' : 'cleanup',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               },
               {
                     'method' : 'initializeWOSpec',
                     'artifactId' : 'WorkExecution.FollowUpWorkOrderView_eventHandlers_initialize_initializeWOSpec2',
                     'id' : 'awfcf04ca',
                     'event' : 'initialize',
                     'class' : 'application.handlers.ClassificationFormHandler',
               },
               {
                     'method' : 'showWOSpecSorted',
                     'artifactId' : 'WorkExecution.FollowUpWorkOrderView_eventHandlers_show_showWOSpecSorted',
                     'id' : 'aw34f7fa0a',
                     'event' : 'show',
                     'class' : 'application.handlers.ClassificationFormHandler',
               }
            ];
            view017.eventHandlers = eventHandlers037;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog004 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'MapView.ProgressDownloadOfflineMap',
            });
            ui001.addChild( dialog004 );


            var container018 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'MapView.DownloadOfflineMap_container_0',
               'id' : 'aw8a150ec4',
            });
            dialog004.addChild( container018 );


            var text072 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'WorkExecution.MapView.DownloadOfflineMap_container_0_progressMsg',
               'id' : 'awb8f06c7d',
            });
            container018.addChild( text072 );


            var dialog005 = new Dialog({
               'id' : 'WorkExecution.OverwriteSketch',
            });
            ui001.addChild( dialog005 );


            var container019 = new Container({
               'artifactId' : 'Platform.OverwriteSketch_container',
               'id' : 'aw163b5e6f',
            });
            dialog005.addChild( container019 );


            var text073 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.OverwriteSketch_textField',
               'id' : 'aw11f6d606',
               'value' : MessageService.createStaticMessage('This sketch already exists, would you like to overwrite it?'),
            });
            container019.addChild( text073 );


            var button015 = new Button({
               'artifactId' : 'Platform.OverwriteSketch_doNotAllow_button',
               'id' : 'awa9ecac27',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers038 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.OverwriteSketch_closeDialog',
                     'id' : 'aw8cd2dd53',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button015.eventHandlers = eventHandlers038;
            container019.addChild( button015 );


            var button016 = new Button({
               'artifactId' : 'Platform.OverwriteSketch_overwrite_button',
               'id' : 'aw10c85ed3',
               'label' : MessageService.createStaticMessage('Overwrite'),
            });
            var eventHandlers039 = [
               {
                     'method' : 'overwriteSketch',
                     'artifactId' : 'Platform.OverwriteSketch_overwrite_click',
                     'id' : 'aw1b2fb8db',
                     'event' : 'click',
                     'class' : 'application.handlers.spatial.SketchToolHandler',
               }
            ];
            button016.eventHandlers = eventHandlers039;
            container019.addChild( button016 );


            var dialog006 = new Dialog({
               'id' : 'WorkExecution.UnsavedSketch',
            });
            ui001.addChild( dialog006 );


            var container020 = new Container({
               'artifactId' : 'Platform.UnsavedSketch_container',
               'id' : 'awfaaf7050',
            });
            dialog006.addChild( container020 );


            var text074 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.UnsavedSketch_textField',
               'id' : 'awfd62f839',
               'value' : MessageService.createStaticMessage('The current sketch is not saved, would you like to save it?'),
            });
            container020.addChild( text074 );


            var button017 = new Button({
               'artifactId' : 'Platform.UnsavedSketch_no_button',
               'id' : 'aw1837f404',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers040 = [
               {
                     'method' : 'noSave',
                     'artifactId' : 'Platform.UnsavedSketch_noSave_click',
                     'id' : 'aw8d961cd6',
                     'event' : 'click',
                     'class' : 'application.handlers.spatial.SketchToolHandler',
               }
            ];
            button017.eventHandlers = eventHandlers040;
            container020.addChild( button017 );


            var button018 = new Button({
               'artifactId' : 'Platform.UnsavedSketch_yes_button',
               'id' : 'aw629795f8',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers041 = [
               {
                     'method' : 'showSaveView',
                     'artifactId' : 'Platform.UnsavedSketch_showSave_click',
                     'id' : 'awf99622c',
                     'event' : 'click',
                     'class' : 'application.handlers.spatial.SketchToolHandler',
               }
            ];
            button018.eventHandlers = eventHandlers041;
            container020.addChild( button018 );


            var button019 = new Button({
               'artifactId' : 'Platform.UnsavedSketch_doNotAllow_button',
               'id' : 'aw150d1bc',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers042 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.UnsavedSketch_closeDialog',
                     'id' : 'aw8da1634',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button019.eventHandlers = eventHandlers042;
            container020.addChild( button019 );


            var dialog007 = new Dialog({
               'id' : 'WorkExecution.ConfirmDeleteSketch',
            });
            ui001.addChild( dialog007 );


            var container021 = new Container({
               'artifactId' : 'Platform.ConfirmDeleteSketch_container',
               'id' : 'aw210812fd',
            });
            dialog007.addChild( container021 );


            var text075 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmDeleteSketch_textField',
               'id' : 'aw26c59a94',
               'value' : MessageService.createStaticMessage('Do you want to delete the sketch selected?'),
            });
            container021.addChild( text075 );


            var button020 = new Button({
               'artifactId' : 'Platform.ConfirmDeleteSketch_no_button',
               'id' : 'awc39096a9',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers043 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'WorkExecution.ConfirmSketch_closeDialog',
                     'id' : 'aw68870282',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button020.eventHandlers = eventHandlers043;
            container021.addChild( button020 );


            var button021 = new Button({
               'artifactId' : 'Platform.ConfirmDeleteSketch_yes_button',
               'id' : 'awca2bedcf',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers044 = [
               {
                     'method' : 'deleteSketch',
                     'artifactId' : 'WorkExecution.ConfirmDeleteSketch_yes_click',
                     'id' : 'awcba453ae',
                     'event' : 'click',
                     'class' : 'application.handlers.spatial.SketchToolHandler',
               }
            ];
            button021.eventHandlers = eventHandlers044;
            container021.addChild( button021 );


            var dialog008 = new Dialog({
               'id' : 'WorkExecution.ConfirmLoadSketch',
            });
            ui001.addChild( dialog008 );


            var container022 = new Container({
               'artifactId' : 'Platform.ConfirmLoadSketch_container',
               'id' : 'aw13b693ca',
            });
            dialog008.addChild( container022 );


            var text076 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmLoadSketch_textField',
               'id' : 'aw147b1ba3',
               'value' : MessageService.createStaticMessage('The current sketch is not saved, would you like to save it before load?'),
            });
            container022.addChild( text076 );


            var button022 = new Button({
               'artifactId' : 'Platform.ConfirmLoadSketch_no_button',
               'id' : 'awf12e179e',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers045 = [
               {
                     'method' : 'ignoreSaveAndLoadSketch',
                     'artifactId' : 'WorkExecution.ConfirmLoadSketch_closeDialog',
                     'id' : 'awe9f70961',
                     'event' : 'click',
                     'class' : 'application.handlers.spatial.SketchToolHandler',
               }
            ];
            button022.eventHandlers = eventHandlers045;
            container022.addChild( button022 );


            var button023 = new Button({
               'artifactId' : 'Platform.ConfirmLoadSketch_yes_button',
               'id' : 'aw72a4f641',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers046 = [
               {
                     'method' : 'saveAndLoadSketch',
                     'artifactId' : 'WorkExecution.ConfirmLoadSketch_yes_click',
                     'id' : 'aw1da9e2ea',
                     'event' : 'click',
                     'class' : 'application.handlers.spatial.SketchToolHandler',
               }
            ];
            button023.eventHandlers = eventHandlers046;
            container022.addChild( button023 );


            var button024 = new Button({
               'artifactId' : 'Platform.ConfirmLoadSketch_cancel_button',
               'id' : 'aw967407ee',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers047 = [
               {
                     'method' : 'cancelLoadSketch',
                     'artifactId' : 'WorkExecution.ConfirmLoadSketch_cancel_click',
                     'id' : 'aw8ef8ec4f',
                     'event' : 'click',
                     'class' : 'application.handlers.spatial.SketchToolHandler',
               }
            ];
            button024.eventHandlers = eventHandlers047;
            container022.addChild( button024 );


            var dialog009 = new Dialog({
               'id' : 'WorkExecution.Standby.loading.dialog',
            });
            ui001.addChild( dialog009 );


            var container023 = new Container({
               'artifactId' : 'WorkExecution.Standby.loading.container_0',
               'id' : 'awf93b2487',
            });
            dialog009.addChild( container023 );


            var text077 = new Text({
               'editable' : false,
               'artifactId' : 'WorkExecution.Standby.loading.container_0_.text',
               'id' : 'aw82ef6864',
               'value' : MessageService.createStaticMessage('The data is still loding. Please wait.'),
            });
            container023.addChild( text077 );


            var button025 = new Button({
               'artifactId' : 'WorkExecution.Standby.loading.Ok_button',
               'id' : 'aw65a71328',
               'label' : MessageService.createStaticMessage('Ok'),
            });
            var eventHandlers048 = [
               {
                     'method' : 'hideDialog',
                     'artifactId' : 'WorkExecution.Standby.loading.Ok_button.eventHandlers_click_hideDialog',
                     'id' : 'aw2b846656',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button025.eventHandlers = eventHandlers048;
            container023.addChild( button025 );


            var dialog010 = new Dialog({
               'id' : 'WorkExecution.RequiredSearchFieldMissing',
            });
            ui001.addChild( dialog010 );


            var container024 = new Container({
               'artifactId' : 'WorkExecution.RequiredSearchFieldMissing_container_0',
               'id' : 'aw2376fdfc',
            });
            dialog010.addChild( container024 );


            var text078 = new Text({
               'editable' : false,
               'artifactId' : 'WorkExecution.RequiredSearchFieldMissing_container_0_Somerequiredfields',
               'id' : 'awd55c2647',
               'value' : MessageService.createStaticMessage('Some required fields are empty. Specify the missing information.'),
            });
            container024.addChild( text078 );


            var button026 = new Button({
               'artifactId' : 'WorkExecution.RequiredSearchFieldMissing_Ok_button',
               'id' : 'aw6e3f5d7',
               'label' : MessageService.createStaticMessage('Ok'),
               'primary' : 'true',
            });
            var eventHandlers049 = [
               {
                     'method' : 'hideDialog',
                     'artifactId' : 'WorkExecution.RequiredSearchFieldMissing_Ok_button_eventHandlers_click_hideDialog',
                     'id' : 'aw5dc2b492',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button026.eventHandlers = eventHandlers049;
            container024.addChild( button026 );


            var dialog011 = new Dialog({
               'id' : 'WorkExecution.RemoveRecordFromListDialog',
            });
            ui001.addChild( dialog011 );


            var container025 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.RemoveRecordFromListDialog_container_0',
               'id' : 'awaa60db6b',
            });
            dialog011.addChild( container025 );


            var text079 = new Text({
               'artifactId' : 'WorkExecution.RemoveRecordFromListDialog_container_0_Theworkorderwill',
               'id' : 'awed02f633',
               'value' : MessageService.createStaticMessage('The Work Order will be removed from this list.'),
            });
            container025.addChild( text079 );


            var container026 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.RemoveRecordFromListDialog_container_1',
               'id' : 'awdd67ebfd',
            });
            dialog011.addChild( container026 );


            var button027 = new Button({
               'artifactId' : 'WorkExecution.RemoveRecordFromListDialog_Cancel_button',
               'id' : 'awb51e28e7',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers050 = [
               {
                     'method' : 'noRemoveRecordFromList',
                     'artifactId' : 'WorkExecution.RemoveRecordFromListDialog_Cancel_button_eventHandlers_click_noRemoveRecordFromList',
                     'id' : 'aw16823033',
                     'event' : 'click',
                     'class' : 'application.handlers.WOCreateQueryBaseHandler',
               }
            ];
            button027.eventHandlers = eventHandlers050;
            container026.addChild( button027 );


            var button028 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.RemoveRecordFromListDialog_OK_button',
               'id' : 'aw48d9b039',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers051 = [
               {
                     'method' : 'yesRemoveRecordFromList',
                     'artifactId' : 'WorkExecution.RemoveRecordFromListDialog_OK_button_eventHandlers_click_yesRemoveRecordFromList',
                     'id' : 'awbc9a7ab5',
                     'event' : 'click',
                     'class' : 'application.handlers.WOCreateQueryBaseHandler',
               }
            ];
            button028.eventHandlers = eventHandlers051;
            container026.addChild( button028 );


            var dialog012 = new Dialog({
               'id' : 'WorkExecution.DeleteRecordFromListDialog',
            });
            ui001.addChild( dialog012 );


            var container027 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.DeleteRecordFromListDialog_container_0',
               'id' : 'awd67ed6e5',
            });
            dialog012.addChild( container027 );


            var text080 = new Text({
               'artifactId' : 'WorkExecution.DeleteRecordFromListDialog_container_0_Thisworkorderhas',
               'id' : 'aw8190cc99',
               'value' : MessageService.createStaticMessage('This work order has not been sent to the server. Do you want to delete it?'),
            });
            container027.addChild( text080 );


            var container028 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.DeleteRecordFromListDialog_container_1',
               'id' : 'awa179e673',
            });
            dialog012.addChild( container028 );


            var button029 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.DeleteRecordFromListDialog_Yes_button',
               'id' : 'awc892b6f2',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers052 = [
               {
                     'method' : 'yesDeleteRecordFromList',
                     'artifactId' : 'WorkExecution.DeleteRecordFromListDialog_Yes_button_eventHandlers_click_yesDeleteRecordFromList',
                     'id' : 'awbc022a1e',
                     'event' : 'click',
                     'class' : 'application.handlers.WOCreateQueryBaseHandler',
               }
            ];
            button029.eventHandlers = eventHandlers052;
            container028.addChild( button029 );


            var button030 = new Button({
               'artifactId' : 'WorkExecution.DeleteRecordFromListDialog_No_button',
               'id' : 'aw1758a16a',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers053 = [
               {
                     'method' : 'noDeleteRecordFromList',
                     'artifactId' : 'WorkExecution.DeleteRecordFromListDialog_No_button_eventHandlers_click_noDeleteRecordFromList',
                     'id' : 'aw4cf94fa9',
                     'event' : 'click',
                     'class' : 'application.handlers.WOCreateQueryBaseHandler',
               }
            ];
            button030.eventHandlers = eventHandlers053;
            container028.addChild( button030 );


            var dialog013 = new Dialog({
               'id' : 'WorkExecution.WOStartedDialog',
            });
            ui001.addChild( dialog013 );


            var container029 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.WOStartedDialog_container_0',
               'id' : 'awaf1cc622',
            });
            dialog013.addChild( container029 );


            var text081 = new Text({
               'artifactId' : 'WorkExecution.WOStartedDialog_container_0_Stopthetimeronwo',
               'id' : 'awbfa4c63c',
               'value' : MessageService.createDynamicMessage('Stop the timer on work order {0} before you start the timer on this work order.', 'application.handlers.WOListHandler', 'resolveTimerWonum'),
               'resolverFunction' : 'resolveTimerWonum',
               'resolverClass' : 'application.handlers.WOListHandler',
            });
            container029.addChild( text081 );


            var container030 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.WOStartedDialog_container_1',
               'id' : 'awd81bf6b4',
            });
            dialog013.addChild( container030 );


            var button031 = new Button({
               'artifactId' : 'WorkExecution.WOStartedDialog_Cancel_button',
               'id' : 'awf7a3b50e',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers054 = [
               {
                     'method' : 'WOStartedDialogNoClickHandler',
                     'artifactId' : 'WorkExecution.WOStartedDialog_Cancel_button_eventHandlers_click_WOStartedDialogNoClickHandler',
                     'id' : 'aw770525e8',
                     'event' : 'click',
                     'class' : 'application.handlers.WOListHandler',
               }
            ];
            button031.eventHandlers = eventHandlers054;
            container030.addChild( button031 );


            var button032 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.WOStartedDialog_OK_button',
               'id' : 'awde6cc0f7',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers055 = [
               {
                     'method' : 'WOStartedDialogYesClickHandler',
                     'artifactId' : 'WorkExecution.WOStartedDialog_OK_button_eventHandlers_click_WOStartedDialogYesClickHandler',
                     'id' : 'aw8468f726',
                     'event' : 'click',
                     'class' : 'application.handlers.WOListHandler',
               }
            ];
            button032.eventHandlers = eventHandlers055;
            container030.addChild( button032 );


            var dialog014 = new Dialog({
               'id' : 'WorkExecution.CompWithTimerStartedDialog',
            });
            ui001.addChild( dialog014 );


            var container031 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.CompWithTimerStartedDialog_container_0',
               'id' : 'awa381cd94',
            });
            dialog014.addChild( container031 );


            var text082 = new Text({
               'artifactId' : 'WorkExecution.CompWithTimerStartedDialog_container_0_Thelabortimerfor',
               'id' : 'aw6ffc7510',
               'value' : MessageService.createStaticMessage('The labor timer for this work order is running. Do you want to complete the work order?'),
            });
            container031.addChild( text082 );


            var container032 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.CompWithTimerStartedDialog_container_1',
               'id' : 'awd486fd02',
            });
            dialog014.addChild( container032 );


            var button033 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.CompWithTimerStartedDialog_Yes_button',
               'id' : 'aw5d2a5b30',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers056 = [
               {
                     'method' : 'compTimerStartedYesClickHandler',
                     'artifactId' : 'WorkExecution.CompWithTimerStartedDialog_Yes_button_eventHandlers_click_compTimerStartedYesClickHandler',
                     'id' : 'awed5d0615',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            button033.eventHandlers = eventHandlers056;
            container032.addChild( button033 );


            var button034 = new Button({
               'artifactId' : 'WorkExecution.CompWithTimerStartedDialog_No_button',
               'id' : 'aw10ffe1a2',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers057 = [
               {
                     'method' : 'noActionDialogHandler',
                     'artifactId' : 'WorkExecution.CompWithTimerStartedDialog_No_button_eventHandlers_click_noActionDialogHandler',
                     'id' : 'aw77a38dcc',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button034.eventHandlers = eventHandlers057;
            container032.addChild( button034 );


            var dialog015 = new Dialog({
               'id' : 'WorkExecution.CanWithTimerStartedDialog',
            });
            ui001.addChild( dialog015 );


            var container033 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.CanWithTimerStartedDialog_container_0',
               'id' : 'aw131a38ac',
            });
            dialog015.addChild( container033 );


            var text083 = new Text({
               'artifactId' : 'WorkExecution.CanWithTimerStartedDialog_container_0_Thelabortimerfor',
               'id' : 'awb56870ae',
               'value' : MessageService.createDynamicMessage('The labor timer for work order {0} is running. Do you want to cancel the work order?', 'application.handlers.StatusChangeHandler', 'resolveWonum'),
               'resolverFunction' : 'resolveWonum',
               'resolverClass' : 'application.handlers.StatusChangeHandler',
            });
            container033.addChild( text083 );


            var container034 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.CanWithTimerStartedDialog_container_1',
               'id' : 'aw641d083a',
            });
            dialog015.addChild( container034 );


            var button035 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.CanWithTimerStartedDialog_Yes_button',
               'id' : 'aw1647414a',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers058 = [
               {
                     'method' : 'canTimerStartedYesClickHandler',
                     'artifactId' : 'WorkExecution.CanWithTimerStartedDialog_Yes_button_eventHandlers_click_canTimerStartedYesClickHandler',
                     'id' : 'awe91642e0',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button035.eventHandlers = eventHandlers058;
            container034.addChild( button035 );


            var button036 = new Button({
               'artifactId' : 'WorkExecution.CanWithTimerStartedDialog_No_button',
               'id' : 'aw7931dc87',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers059 = [
               {
                     'method' : 'noActionDialogHandler',
                     'artifactId' : 'WorkExecution.CanWithTimerStartedDialog_No_button_eventHandlers_click_noActionDialogHandler',
                     'id' : 'aw5b2e9331',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button036.eventHandlers = eventHandlers059;
            container034.addChild( button036 );


            var dialog016 = new Dialog({
               'id' : 'WorkExecution.CompTaskWithTimerStartedDialog',
            });
            ui001.addChild( dialog016 );


            var container035 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.CompTaskWithTimerStartedDialog_container_0',
               'id' : 'aw67048164',
            });
            dialog016.addChild( container035 );


            var text084 = new Text({
               'artifactId' : 'WorkExecution.CompTaskWithTimerStartedDialog_container_0_Thelabortimerfor',
               'id' : 'aw9efe8c81',
               'value' : MessageService.createDynamicMessage('The labor timer for task {0} of work order {1} is running. Do you want to complete the work order?', 'application.handlers.StatusChangeHandler', 'resolveTaskAndWonum'),
               'resolverFunction' : 'resolveTaskAndWonum',
               'resolverClass' : 'application.handlers.StatusChangeHandler',
            });
            container035.addChild( text084 );


            var container036 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.CompTaskWithTimerStartedDialog_container_1',
               'id' : 'aw1003b1f2',
            });
            dialog016.addChild( container036 );


            var button037 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.CompTaskWithTimerStartedDialog_Yes_button',
               'id' : 'awb92c13c9',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers060 = [
               {
                     'method' : 'compTaskTimerStartedYesClickHandler',
                     'artifactId' : 'WorkExecution.CompTaskWithTimerStartedDialog_Yes_button_eventHandlers_click_compTaskTimerStartedYesClickHandler',
                     'id' : 'aw657e9933',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            button037.eventHandlers = eventHandlers060;
            container036.addChild( button037 );


            var button038 = new Button({
               'artifactId' : 'WorkExecution.CompTaskWithTimerStartedDialog_No_button',
               'id' : 'aw1878132e',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers061 = [
               {
                     'method' : 'noActionDialogHandler',
                     'artifactId' : 'WorkExecution.CompTaskWithTimerStartedDialog_No_button_eventHandlers_click_noActionDialogHandler',
                     'id' : 'awc9060a51',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button038.eventHandlers = eventHandlers061;
            container036.addChild( button038 );


            var dialog017 = new Dialog({
               'id' : 'WorkExecution.CanTaskWithTimerStartedDialog',
            });
            ui001.addChild( dialog017 );


            var container037 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.CanTaskWithTimerStartedDialog_container_0',
               'id' : 'awb840004c',
            });
            dialog017.addChild( container037 );


            var text085 = new Text({
               'artifactId' : 'WorkExecution.CanTaskWithTimerStartedDialog_container_0_Thelabortimerfor',
               'id' : 'aw16b30317',
               'value' : MessageService.createDynamicMessage('The labor timer for task {0} of work order {1} is running. Do you want to cancel the work order?', 'application.handlers.StatusChangeHandler', 'resolveTaskAndWonum'),
               'resolverFunction' : 'resolveTaskAndWonum',
               'resolverClass' : 'application.handlers.StatusChangeHandler',
            });
            container037.addChild( text085 );


            var container038 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.CanTaskWithTimerStartedDialog_container_1',
               'id' : 'awcf4730da',
            });
            dialog017.addChild( container038 );


            var button039 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.CanTaskWithTimerStartedDialog_Yes_button',
               'id' : 'aw9d42f865',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers062 = [
               {
                     'method' : 'canTaskTimerStartedYesClickHandler',
                     'artifactId' : 'WorkExecution.CanTaskWithTimerStartedDialog_Yes_button_eventHandlers_click_canTaskTimerStartedYesClickHandler',
                     'id' : 'awee3d003d',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button039.eventHandlers = eventHandlers062;
            container038.addChild( button039 );


            var button040 = new Button({
               'artifactId' : 'WorkExecution.CanTaskWithTimerStartedDialog_No_button',
               'id' : 'awc23019dd',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers063 = [
               {
                     'method' : 'noActionDialogHandler',
                     'artifactId' : 'WorkExecution.CanTaskWithTimerStartedDialog_No_button_eventHandlers_click_noActionDialogHandler',
                     'id' : 'aw1747c0b4',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button040.eventHandlers = eventHandlers063;
            container038.addChild( button040 );


            var dialog018 = new Dialog({
               'id' : 'WorkExecution.CompWOWithTaskTimerStartedDialog',
            });
            ui001.addChild( dialog018 );


            var container039 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.CompWOWithTaskTimerStartedDialog_container_0',
               'id' : 'aw4eb0f67c',
            });
            dialog018.addChild( container039 );


            var text086 = new Text({
               'artifactId' : 'WorkExecution.CompWOWithTaskTimerStartedDialog_container_0_Thelabortimerfor',
               'id' : 'aw264ea29f',
               'value' : MessageService.createDynamicMessage('The labor timer for activity {0}, a task of work order {1} is running. Do you want to complete the work order?', 'application.handlers.StatusChangeHandler', 'resolveActivityAndWonum'),
               'resolverFunction' : 'resolveActivityAndWonum',
               'resolverClass' : 'application.handlers.StatusChangeHandler',
            });
            container039.addChild( text086 );


            var container040 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.CompWOWithTaskTimerStartedDialog_container_1',
               'id' : 'aw39b7c6ea',
            });
            dialog018.addChild( container040 );


            var button041 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.CompWOWithTaskTimerStartedDialog_Yes_button',
               'id' : 'awd49293b0',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers064 = [
               {
                     'method' : 'compTimerStartedYesClickHandler',
                     'artifactId' : 'WorkExecution.CompWOWithTaskTimerStartedDialog_Yes_button_eventHandlers_click_compTimerStartedYesClickHandler',
                     'id' : 'aw68605b36',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            button041.eventHandlers = eventHandlers064;
            container040.addChild( button041 );


            var button042 = new Button({
               'artifactId' : 'WorkExecution.CompWOWithTaskTimerStartedDialog_No_button',
               'id' : 'aw7b1c813b',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers065 = [
               {
                     'method' : 'noActionDialogHandler',
                     'artifactId' : 'WorkExecution.CompWOWithTaskTimerStartedDialog_No_button_eventHandlers_click_noActionDialogHandler',
                     'id' : 'aw84a59425',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button042.eventHandlers = eventHandlers065;
            container040.addChild( button042 );


            var dialog019 = new Dialog({
               'id' : 'WorkExecution.CanWOWithTaskTimerStartedDialog',
            });
            ui001.addChild( dialog019 );


            var container041 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.CanWOWithTaskTimerStartedDialog_container_0',
               'id' : 'aw89523424',
            });
            dialog019.addChild( container041 );


            var text087 = new Text({
               'artifactId' : 'WorkExecution.CanWOWithTaskTimerStartedDialog_container_0_Thelabortimerfor',
               'id' : 'aw7c5299ff',
               'value' : MessageService.createDynamicMessage('The labor timer for activity {0}, a task of work order {1}, is running. The labor transaction will be deleted if you cancel the work order. Do you want to cancel the work order?', 'application.handlers.StatusChangeHandler', 'resolveActivityAndWonum'),
               'resolverFunction' : 'resolveActivityAndWonum',
               'resolverClass' : 'application.handlers.StatusChangeHandler',
            });
            container041.addChild( text087 );


            var container042 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.CanWOWithTaskTimerStartedDialog_container_1',
               'id' : 'awfe5504b2',
            });
            dialog019.addChild( container042 );


            var button043 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.CanWOWithTaskTimerStartedDialog_Yes_button',
               'id' : 'awe1f87fcb',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers066 = [
               {
                     'method' : 'canTimerStartedYesClickHandler',
                     'artifactId' : 'WorkExecution.CanWOWithTaskTimerStartedDialog_Yes_button_eventHandlers_click_canTimerStartedYesClickHandler',
                     'id' : 'awce6512a2',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button043.eventHandlers = eventHandlers066;
            container042.addChild( button043 );


            var button044 = new Button({
               'artifactId' : 'WorkExecution.CanWOWithTaskTimerStartedDialog_No_button',
               'id' : 'awa4580013',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers067 = [
               {
                     'method' : 'noActionDialogHandler',
                     'artifactId' : 'WorkExecution.CanWOWithTaskTimerStartedDialog_No_button_eventHandlers_click_noActionDialogHandler',
                     'id' : 'awdc1d6663',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button044.eventHandlers = eventHandlers067;
            container042.addChild( button044 );


            var dialog020 = new Dialog({
               'id' : 'WorkExecution.LaborMismatch',
            });
            ui001.addChild( dialog020 );


            var container043 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.LaborMismatch_container_0',
               'id' : 'awaaa35c16',
            });
            dialog020.addChild( container043 );


            var text088 = new Text({
               'artifactId' : 'WorkExecution.LaborMismatch_container_0_TheLaborCraftSk',
               'id' : 'aweac4c11a',
               'value' : MessageService.createStaticMessage('The Labor, Craft, Skill Level, Vendor and Contract combination selected does not match data currently on the device. Do you want to continue?'),
            });
            container043.addChild( text088 );


            var container044 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.LaborMismatch_container_1',
               'id' : 'awdda46c80',
            });
            dialog020.addChild( container044 );


            var button045 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.LaborMismatch_Yes_button',
               'id' : 'awc9f7f23c',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers068 = [
               {
                     'method' : 'continueLaborCraftMismatch',
                     'artifactId' : 'WorkExecution.LaborMismatch_Yes_button_eventHandlers_click_continueLaborCraftMismatch',
                     'id' : 'awb8856a23',
                     'event' : 'click',
                     'class' : 'application.handlers.ActualLaborHandler',
               }
            ];
            button045.eventHandlers = eventHandlers068;
            container044.addChild( button045 );


            var button046 = new Button({
               'artifactId' : 'WorkExecution.LaborMismatch_No_button',
               'id' : 'awa96d692b',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers069 = [
               {
                     'method' : 'stopOnLaborCraftMismatch',
                     'artifactId' : 'WorkExecution.LaborMismatch_No_button_eventHandlers_click_stopOnLaborCraftMismatch',
                     'id' : 'aw6779ad8c',
                     'event' : 'click',
                     'class' : 'application.handlers.ActualLaborHandler',
               }
            ];
            button046.eventHandlers = eventHandlers069;
            container044.addChild( button046 );


            var dialog021 = new Dialog({
               'id' : 'WorkExecution.WOAssetToLocationDialog',
            });
            ui001.addChild( dialog021 );


            var container045 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.WOAssetToLocationDialog_container_0',
               'id' : 'aw4b614b2d',
            });
            dialog021.addChild( container045 );


            var text089 = new Text({
               'artifactId' : 'WorkExecution.WOAssetToLocationDialog_container_0_Theassetisinloca',
               'id' : 'aw4114bece',
               'value' : MessageService.createDynamicMessage('The asset is in location {0}. Replace the current location with location {1}? If you do not want to update the current asset, click Close.', 'application.handlers.WODetailHandler', 'resolveAssetLocation'),
               'resolverFunction' : 'resolveAssetLocation',
               'resolverClass' : 'application.handlers.WODetailHandler',
            });
            container045.addChild( text089 );


            var container046 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.WOAssetToLocationDialog_container_1',
               'id' : 'aw3c667bbb',
            });
            dialog021.addChild( container046 );


            var button047 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.WOAssetToLocationDialog_Yes_button',
               'id' : 'aw578d177',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers070 = [
               {
                     'method' : 'asyncyesOnWOAssetToLocation',
                     'artifactId' : 'WorkExecution.WOAssetToLocationDialog_Yes_button_eventHandlers_click_asyncyesOnWOAssetToLocation',
                     'id' : 'aw3015285d',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button047.eventHandlers = eventHandlers070;
            container046.addChild( button047 );


            var button048 = new Button({
               'artifactId' : 'WorkExecution.WOAssetToLocationDialog_Close_button',
               'id' : 'aw43675bcf',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers071 = [
               {
                     'method' : 'closeOnWOAssetToLocation',
                     'artifactId' : 'WorkExecution.WOAssetToLocationDialog_Close_button_eventHandlers_click_closeOnWOAssetToLocation',
                     'id' : 'aw4778c224',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button048.eventHandlers = eventHandlers071;
            container046.addChild( button048 );


            var button049 = new Button({
               'artifactId' : 'WorkExecution.WOAssetToLocationDialog_No_button',
               'id' : 'aw2a39b79f',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers072 = [
               {
                     'method' : 'noOnWOAssetToLocation',
                     'artifactId' : 'WorkExecution.WOAssetToLocationDialog_No_button_eventHandlers_click_noOnWOAssetToLocation',
                     'id' : 'aw36f95791',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button049.eventHandlers = eventHandlers072;
            container046.addChild( button049 );


            var dialog022 = new Dialog({
               'id' : 'WorkExecution.WOAssetToNoLocationDialog',
            });
            ui001.addChild( dialog022 );


            var container047 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_container_0',
               'id' : 'aw993f2f32',
            });
            dialog022.addChild( container047 );


            var text090 = new Text({
               'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_container_0_Thespecifiedasset',
               'id' : 'aw8cbf4f0d',
               'value' : MessageService.createStaticMessage('The specified asset does not have a location. Clear the current location? If you do not want to update the current asset, click Close.'),
               'resolverFunction' : 'resolveAssetLocation',
               'resolverClass' : 'application.handlers.WODetailHandler',
            });
            container047.addChild( text090 );


            var container048 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_container_1',
               'id' : 'awee381fa4',
            });
            dialog022.addChild( container048 );


            var button050 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_Yes_button',
               'id' : 'aw56993351',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers073 = [
               {
                     'method' : 'asyncyesOnWOAssetToLocation',
                     'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_Yes_button_eventHandlers_click_asyncyesOnWOAssetToLocation',
                     'id' : 'awbe237d20',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button050.eventHandlers = eventHandlers073;
            container048.addChild( button050 );


            var button051 = new Button({
               'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_Close_button',
               'id' : 'awcebd085e',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers074 = [
               {
                     'method' : 'closeOnWOAssetToLocation',
                     'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_Close_button_eventHandlers_click_closeOnWOAssetToLocation',
                     'id' : 'awcfc246b9',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button051.eventHandlers = eventHandlers074;
            container048.addChild( button051 );


            var button052 = new Button({
               'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_No_button',
               'id' : 'aw7848a16d',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers075 = [
               {
                     'method' : 'noOnWOAssetToLocation',
                     'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_No_button_eventHandlers_click_noOnWOAssetToLocation',
                     'id' : 'aw64c4cb09',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button052.eventHandlers = eventHandlers075;
            container048.addChild( button052 );


            var dialog023 = new Dialog({
               'id' : 'WorkExecution.WOLocationToAssetDialog',
            });
            ui001.addChild( dialog023 );


            var container049 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.WOLocationToAssetDialog_container_0',
               'id' : 'aw794c768b',
            });
            dialog023.addChild( container049 );


            var text091 = new Text({
               'artifactId' : 'WorkExecution.WOLocationToAssetDialog_container_0_Thespecifiedlocati',
               'id' : 'aw99e4aa1f',
               'value' : MessageService.createDynamicMessage('The specified location does not match the location of asset {0}. Clear the current asset? If you do not want to update the current location, click Close.', 'application.handlers.WODetailHandler', 'resolveExistingAsset'),
               'resolverFunction' : 'resolveExistingAsset',
               'resolverClass' : 'application.handlers.WODetailHandler',
            });
            container049.addChild( text091 );


            var container050 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.WOLocationToAssetDialog_container_1',
               'id' : 'awe4b461d',
            });
            dialog023.addChild( container050 );


            var button053 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.WOLocationToAssetDialog_Yes_button',
               'id' : 'awf029945b',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers076 = [
               {
                     'method' : 'asyncYesOnWOLocationToAsset',
                     'artifactId' : 'WorkExecution.WOLocationToAssetDialog_Yes_button_eventHandlers_click_asyncYesOnWOLocationToAsset',
                     'id' : 'awb8f5168c',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button053.eventHandlers = eventHandlers076;
            container050.addChild( button053 );


            var button054 = new Button({
               'artifactId' : 'WorkExecution.WOLocationToAssetDialog_Close_button',
               'id' : 'aw7ce0702f',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers077 = [
               {
                     'method' : 'closeOnWOLocationToAsset',
                     'artifactId' : 'WorkExecution.WOLocationToAssetDialog_Close_button_eventHandlers_click_closeOnWOLocationToAsset',
                     'id' : 'aw725ca168',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button054.eventHandlers = eventHandlers077;
            container050.addChild( button054 );


            var button055 = new Button({
               'artifactId' : 'WorkExecution.WOLocationToAssetDialog_No_button',
               'id' : 'aw74b8ccc8',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers078 = [
               {
                     'method' : 'noOnWOLocationToAsset',
                     'artifactId' : 'WorkExecution.WOLocationToAssetDialog_No_button_eventHandlers_click_noOnWOLocationToAsset',
                     'id' : 'aw621d5c5a',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button055.eventHandlers = eventHandlers078;
            container050.addChild( button055 );


            var dialog024 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'WorkExecution.DownloadAttachmentLocal',
            });
            ui001.addChild( dialog024 );


            var container051 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.DownloadAttachmentLocal_container_0',
               'id' : 'awecb352f6',
            });
            dialog024.addChild( container051 );


            var text092 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'WorkExecution.DownloadAttachmentLocal_container_0_progressMsg',
               'id' : 'aw1941849c',
            });
            container051.addChild( text092 );


            var container052 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.DownloadAttachmentLocal_container_1',
               'id' : 'aw9bb46260',
            });
            dialog024.addChild( container052 );


            var button056 = new Button({
               'artifactId' : 'WorkExecution.DownloadAttachmentLocal_Cancel_button',
               'id' : 'awe595a1e7',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers079 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'WorkExecution.DownloadAttachmentLocal_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'awc8f3fc0c',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            button056.eventHandlers = eventHandlers079;
            container052.addChild( button056 );


            var dialog025 = new Dialog({
               'id' : 'WorkExecution.ConfirmClearChanges',
            });
            ui001.addChild( dialog025 );


            var container053 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.ConfirmClearChanges_container_0',
               'id' : 'aw482e893b',
            });
            dialog025.addChild( container053 );


            var text093 = new Text({
               'editable' : false,
               'artifactId' : 'WorkExecution.ConfirmClearChanges_container_0_Changesthathaveno',
               'id' : 'aw44807316',
               'value' : MessageService.createStaticMessage('Changes that have not been sent to the server will be discarded.'),
            });
            container053.addChild( text093 );


            var container054 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.ConfirmClearChanges_container_1',
               'id' : 'aw3f29b9ad',
            });
            dialog025.addChild( container054 );


            var button057 = new Button({
               'artifactId' : 'WorkExecution.ConfirmClearChanges_Cancel_button',
               'id' : 'aw8ac0a725',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers080 = [
               {
                     'method' : 'cancelClearChanges',
                     'artifactId' : 'WorkExecution.ConfirmClearChanges_Cancel_button_eventHandlers_click_cancelClearChanges',
                     'id' : 'awf219260f',
                     'event' : 'click',
                     'class' : 'application.handlers.WOExtDownloadHandler',
               }
            ];
            button057.eventHandlers = eventHandlers080;
            container054.addChild( button057 );


            var button058 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.ConfirmClearChanges_OK_button',
               'id' : 'awd9bb22ec',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers081 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'WorkExecution.ConfirmClearChanges_OK_button_eventHandlers_click_doClearChanges',
                     'id' : 'aw16b2bc0a',
                     'event' : 'click',
                     'class' : 'application.handlers.WOExtDownloadHandler',
               }
            ];
            button058.eventHandlers = eventHandlers081;
            container054.addChild( button058 );


            var dialog026 = new Dialog({
               'id' : 'WorkExecution.DynamicCheckStatusChangeConfirm',
            });
            ui001.addChild( dialog026 );


            var container055 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.DynamicCheckStatusChangeConfirm_container_0',
               'id' : 'awf0d47a7a',
            });
            dialog026.addChild( container055 );


            var text094 = new Text({
               'editable' : false,
               'artifactId' : 'WorkExecution.DynamicCheckStatusChangeConfirm_Changes_text',
               'id' : 'awad8463ef',
               'value' : MessageService.createStaticMessage('All the dynamic check points have not been entered. You can either click Cancel and enter all the dynamic check points before setting the status of the work order to closed or complete, or you can select OK to continue with the status change without entering all the dynamic check points.'),
            });
            container055.addChild( text094 );


            var container056 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.DynamicCheckStatusChangeConfirm_container_1',
               'id' : 'aw87d34aec',
            });
            dialog026.addChild( container056 );


            var button059 = new Button({
               'artifactId' : 'WorkExecution.DynamicCheckStatusChangeConfirm_Cancel_button',
               'id' : 'aw4716c23d',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers082 = [
               {
                     'method' : 'cancelClearChanges',
                     'artifactId' : 'WorkExecution.DynamicCheckStatusChangeConfirm_Cancel_button_eventHandlers_click_cancelClearChanges',
                     'id' : 'awaed6f54f',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button059.eventHandlers = eventHandlers082;
            container056.addChild( button059 );


            var button060 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.DynamicCheckStatusChangeConfirm_OK_button',
               'id' : 'aw3d3a6a02',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers083 = [
               {
                     'method' : 'changeStatusSkipDyanmicCheck',
                     'artifactId' : 'WorkExecution.DynamicCheckStatusChangeConfirm_OK_button_eventHandlers_click_doClearChanges',
                     'id' : 'aw8a3fa053',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button060.eventHandlers = eventHandlers083;
            container056.addChild( button060 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.EditStatusView', false);
               trackTimer.startTracking();
            }

            var view018 = new View({
               'resource' : 'workOrder',
               'showOverflow' : false,
               'id' : 'WorkExecution.EditStatusView',
               'label' : MessageService.createStaticMessage('Change Status'),
            });
            ui001.addChild( view018 );

            var requiredResources018 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.EditStatusView_workOrder',
                  'id' : 'aweb007e3c',
                  'related' : {
                     'tasklist' : {
                        'artifactId' : 'WorkExecution.EditStatusView_workOrder_tasklist',
                        'id' : 'aw45bd0720',
                     },
                  },
               },
               'statusChangeResource' : {
                  'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource',
                  'id' : 'awb298023e',
               },
               'domainworktype' : {
                  'artifactId' : 'WorkExecution.EditStatusView_domainworktype',
                  'id' : 'awfe209b1',
               },
            };
            view018.addRequiredResources( requiredResources018 );

            var container057 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.EditStatusView_workOrder_container_0',
               'id' : 'aw1006e1b',
            });
            view018.addChild( container057 );


            var group017 = new Group({
               'artifactId' : 'WorkExecution.EditStatusView_group_0',
               'id' : 'aw655374b9',
            });
            container057.addChild( group017 );


            var groupitem053 = new GroupItem({
               'layout' : 'Item1Desc1',
               'artifactId' : 'WorkExecution.EditStatusView_workOrder_groupitem_0',
               'id' : 'aw44dbff08',
            });
            group017.addChild( groupitem053 );


            var text095 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.EditStatusView_workOrder_groupitem_0_wonum_WorkOrder',
               'id' : 'aw7b7d554a',
               'label' : MessageService.createStaticMessage('Work Order'),
            });
            groupitem053.addChild( text095 );


            var text096 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'WorkExecution.EditStatusView_workOrder_groupitem_0_statusdesc_Status',
               'id' : 'aw1c53b192',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem053.addChild( text096 );


            var container058 = new Container({
               'resource' : 'statusChangeResource',
               'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_container_0',
               'id' : 'aw158e0f80',
            });
            view018.addChild( container058 );


            var group018 = new Group({
               'artifactId' : 'WorkExecution.EditStatusView_group_1',
               'id' : 'aw1254442f',
            });
            container058.addChild( group018 );


            var groupitem054 = new GroupItem({
               'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_0',
               'id' : 'aw50559e93',
            });
            group018.addChild( groupitem054 );


            var text097 = new Text({
               'resourceAttribute' : 'changedate',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_0_changedate_StatusDate.readonly',
               'id' : 'aw231af88b',
               'label' : MessageService.createStaticMessage('Status Date'),
               'placeHolder' : MessageService.createStaticMessage('Select'),
               'required' : true,
            });
            groupitem054.addChild( text097 );

            var eventHandlers084 = [
               {
                     'method' : 'setChangeStatusDate',
                     'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_0_changedate_StatusDate_eventHandlers_render_setChangeStatusDate',
                     'id' : 'aw3f3b85cd',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            text097.eventHandlers = eventHandlers084;

            var groupitem055 = new GroupItem({
               'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_1',
               'id' : 'aw2752ae05',
            });
            group018.addChild( groupitem055 );


            var text098 = new Text({
               'resourceAttribute' : 'statusdesc',
               'lookup' : 'WorkExecution.statusLookup',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_1_statusdesc_NewStatus',
               'id' : 'awa308174a',
               'label' : MessageService.createStaticMessage('New Status'),
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
               'required' : true,
            });
            groupitem055.addChild( text098 );

            var eventHandlers085 = [
               {
                     'method' : 'makeMemoMandatory',
                     'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_1_statusdesc_NewStatus_eventHandlers_validate',
                     'id' : 'aw3282baa2',
                     'event' : 'validate',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            groupitem055.eventHandlers = eventHandlers085;

            var groupitem056 = new GroupItem({
               'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_2',
               'id' : 'awbe5bffbf',
            });
            group018.addChild( groupitem056 );


            var text099 = new Text({
               'resourceAttribute' : 'memo',
               'editable' : true,
               'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_2_memo_Memo',
               'id' : 'aw53ba52b5',
               'label' : MessageService.createStaticMessage('Reason'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem056.addChild( text099 );


            var footer002 = new Footer({
               'artifactId' : 'WorkExecution.EditStatusView_footer',
               'id' : 'awcc435f8e',
            });
            view018.addChild( footer002 );


            var button061 = new Button({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.EditStatusView_Cancel_button',
               'id' : 'awefa15ea4',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers086 = [
               {
                     'method' : 'discardStatusChange',
                     'artifactId' : 'WorkExecution.EditStatusView_Cancel_button_eventHandlers_click_discardStatusChange',
                     'id' : 'aw41efe24b',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button061.eventHandlers = eventHandlers086;
            footer002.addChild( button061 );


            var button062 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.EditStatusView_Save_button',
               'id' : 'aw78b204fb',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers087 = [
               {
                     'method' : 'makeMemoMandatory',
                     'artifactId' : 'WorkExecution.EditStatusView_Save_button_eventHandlers_click_makeMemoMandatory',
                     'id' : 'aw90a60e12',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'enableCommitButton',
                     'artifactId' : 'WorkExecution.EditStatusView_Save_button_eventHandlers_datachange_enableCommitButton',
                     'id' : 'aw439343a3',
                     'event' : 'datachange',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button062.eventHandlers = eventHandlers087;
            footer002.addChild( button062 );

            var eventHandlers088 = [
               {
                     'method' : 'cleanupEditStatusView',
                     'artifactId' : 'WorkExecution.EditStatusView_eventHandlers_cleanup_cleanupEditStatusView',
                     'id' : 'aw25138fc7',
                     'event' : 'cleanup',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            view018.eventHandlers = eventHandlers088;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.Reinspecview', false);
               trackTimer.startTracking();
            }

            var view019 = new View({
               'resource' : 'workOrder',
               'showOverflow' : false,
               'id' : 'WorkExecution.Reinspecview',
               'label' : MessageService.createStaticMessage('1. Servi\u00E7o foi executado?'),
            });
            ui001.addChild( view019 );

            var requiredResources019 = {
               'workOrder' : {
                  'artifactId' : 'xWorkExecution.Reinspecview_workOrder',
                  'id' : 'aw6686bcb4',
                  'related' : {
                     'tasklist' : {
                        'artifactId' : 'WorkExecution.Reinspecview_workOrder_tasklist',
                        'id' : 'aw24781ea8',
                     },
                  },
               },
               'statusChangeResource' : {
                  'artifactId' : 'WorkExecution.Reinspecview_statusChangeResource',
                  'id' : 'aw25a9d978',
               },
               'workOrder' : {
                  'artifactId' : 'WorkExecution.Reinspecview_workOrder',
                  'id' : 'aw1834d09',
               },
               'domainworktype' : {
                  'artifactId' : 'WorkExecution.Reinspecview_domainworktype',
                  'id' : 'awc35fd7b7',
               },
            };
            view019.addRequiredResources( requiredResources019 );

            var container059 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.Reinspecview_container_0',
               'id' : 'awceef69bc',
            });
            view019.addChild( container059 );


            var group019 = new Group({
               'artifactId' : 'WorkExecution.Reinspecview_group_0',
               'id' : 'awa29bd38c',
            });
            container059.addChild( group019 );


            var groupitem057 = new GroupItem({
               'layout' : 'Item1Desc1',
               'artifactId' : 'WorkExecution.Reinspecview_groupitem_0',
               'id' : 'aw8b34f8af',
            });
            group019.addChild( groupitem057 );


            var text100 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.Reinspecview_wonum_WorkOrder',
               'id' : 'aw71c2d403',
               'label' : MessageService.createStaticMessage('Work Order'),
            });
            groupitem057.addChild( text100 );


            var text101 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'WorkExecution.Reinspecview_statusdesc_Status',
               'id' : 'awa757fcd7',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem057.addChild( text101 );


            var container060 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.Reinspecview_container_1',
               'id' : 'awb9e8592a',
            });
            view019.addChild( container060 );


            var group020 = new Group({
               'artifactId' : 'WorkExecution.Reinspecview_group_1',
               'id' : 'awd59ce31a',
            });
            container060.addChild( group020 );


            var groupitem058 = new GroupItem({
               'artifactId' : 'WorkExecution.Reinspecview_groupitem_1',
               'id' : 'awfc33c839',
            });
            group020.addChild( groupitem058 );


            var text102 = new Text({
               'resourceAttribute' : 'ms_inspquestion04',
               'editable' : false,
               'artifactId' : 'WorkExecution.Reinspecview_1_statusdesc_NewStatus',
               'id' : 'aw8ee6da2f',
               'label' : MessageService.createStaticMessage('1. Servi\u00E7o foi executado?'),
            });
            groupitem058.addChild( text102 );


            var container061 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'xWorkExecution.EditStatusView_statusChangeResource_container_000',
               'id' : 'aw413f84d9',
            });
            view019.addChild( container061 );


            var group021 = new Group({
               'artifactId' : 'xWorkExecution.EditStatusView_group__111',
               'id' : 'aweddb8679',
            });
            container061.addChild( group021 );


            var groupitem059 = new GroupItem({
               'artifactId' : 'xWorkExecution.EditStatusView_statusChangeResource_groupitem_box',
               'id' : 'aw8dc451a5',
            });
            group021.addChild( groupitem059 );


            var button063 = new Button({
               'resource' : 'workOrder',
               'artifactId' : 'xWorkExecution.EditStatusView_Save_button_backToLists',
               'id' : 'aw2c27df35',
               'label' : MessageService.createStaticMessage('Voltar para a Lista'),
            });
            var eventHandlers089 = [
               {
                     'method' : 'backToList',
                     'artifactId' : 'xWorkExecution.EditStatusView_Yes01_button_eventHandler_backToLists33',
                     'id' : 'aw131e7096',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'cleanButtonBackToList',
                     'artifactId' : 'xWorkExecution.EditStatusView_cleanButtonYes_eventHandlers_backToLists33',
                     'id' : 'aw27073460',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            button063.eventHandlers = eventHandlers089;
            groupitem059.addChild( button063 );


            var footer003 = new Footer({
               'artifactId' : 'WorkExecution.Reinspecview_footer',
               'id' : 'awd34cdef5',
            });
            view019.addChild( footer003 );


            var button064 = new Button({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.Reinspecview_No_button',
               'id' : 'aw3646da5a',
               'label' : MessageService.createStaticMessage('N\u00E3o'),
            });
            var eventHandlers090 = [
               {
                     'method' : 'no_questions04',
                     'artifactId' : 'no_04',
                     'id' : 'aw1a7772af',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'planejadoReinsp',
                     'artifactId' : 'classificationok_xrWorkExecution.EditStatusView_Save_button_eventHandlers_click_commitWOStatusChange2_Reinsp',
                     'id' : 'aw8a014fbe',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'enableCommitButton',
                     'artifactId' : 'classificationok_xrWorkExecution.EditStatusView_Save_button_eventHandlers_datachange_enableCommitButton_Reinsp',
                     'id' : 'awecfbe0f4',
                     'event' : 'datachange',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'cleanButton',
                     'artifactId' : 'xWorkExecution.EditStatusView_NO_eventHandlers_000',
                     'id' : 'awc8f6a3dc',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            button064.eventHandlers = eventHandlers090;
            footer003.addChild( button064 );


            var button065 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.Reinspecview_Yes_button',
               'id' : 'awee6a9825',
               'label' : MessageService.createStaticMessage('Sim'),
               'primary' : 'true',
            });
            var eventHandlers091 = [
               {
                     'method' : 'yes_questions04',
                     'artifactId' : 'yes_04',
                     'id' : 'aw2ca5a12e',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'openPDWhyReinsp',
                     'artifactId' : 'WorkExecution.PD_WhyView_listItemTemplate_FailureReportList_eventHandlers_click_openPDWhy_Reinspec_type_2',
                     'id' : 'awf1df6c6d',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSClassifyWorkOrderHandler',
               },
               {
                     'method' : 'enableCommitButton',
                     'artifactId' : 'classificationok_xrWorkExecution.EditStatusView_Save_button_eventHandlers_datachange_enableCommitButton_Reinsp02',
                     'id' : 'aw86925fb6',
                     'event' : 'datachange',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'cleanButton',
                     'artifactId' : 'xWorkExecution.EditStatusView_NO_eventHandlers_001',
                     'id' : 'awbff1934a',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            button065.eventHandlers = eventHandlers091;
            footer003.addChild( button065 );

            var eventHandlers092 = [
               {
                     'method' : 'initEditStatusView',
                     'artifactId' : 'WorkExecution.Reinspecview_initialize_initEditStatusView',
                     'id' : 'awf369383',
                     'event' : 'initialize',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'cleanupEditStatusView',
                     'artifactId' : 'WorkExecution.Reinspecview_cleanup_cleanupEditStatusView',
                     'id' : 'awb72e363f',
                     'event' : 'cleanup',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'redirectList',
                     'artifactId' : 'WorkExecution.Reinspecview_cleanup_cleanupEditStatusView003',
                     'id' : 'awc14155c7',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            view019.eventHandlers = eventHandlers092;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Decline_insp_01', false);
               trackTimer.startTracking();
            }

            var view020 = new View({
               'resource' : 'workOrder',
               'id' : 'Decline_insp_01',
               'label' : MessageService.createStaticMessage('Confirmacao da recusa de inspe\u00E7\u00E3o'),
            });
            ui001.addChild( view020 );

            var requiredResources020 = {
               'workOrder' : {
                  'artifactId' : 'Decline_insp_xWorkExecution.EditStatusView_workOrder',
                  'id' : 'awef8ddfc9',
                  'related' : {
                     'tasklist' : {
                        'artifactId' : 'Decline_insp_xWorkExecution.EditStatusView_workOrder_tasklist',
                        'id' : 'aw8d6bafc3',
                     },
                  },
               },
               'statusChangeResource' : {
                  'artifactId' : 'Decline_insp_xWorkExecution.EditStatusView_statusChangeResource',
                  'id' : 'aw1fc6411d',
               },
               'workOrder' : {
                  'artifactId' : 'Decline_insp_WorkExecution.questionsview_workOrder',
                  'id' : 'awf2d40ca7',
               },
               'domainworktype' : {
                  'artifactId' : 'Decline_insp_xWorkExecution.EditStatusView_domainworktype',
                  'id' : 'awf760e52b',
               },
            };
            view020.addRequiredResources( requiredResources020 );

            var container062 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'Decline_insp_xWorkExecution.EditStatusView_workOrder_container_0',
               'id' : 'awa3ca412a',
            });
            view020.addChild( container062 );


            var group022 = new Group({
               'artifactId' : 'Decline_insp_xWorkExecution.EditStatusView_group_0',
               'id' : 'aw5177d18c',
            });
            container062.addChild( group022 );


            var groupitem060 = new GroupItem({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Decline_insp_xWorkExecution.EditStatusView_workOrder_groupitem_0',
               'id' : 'awe611d039',
            });
            group022.addChild( groupitem060 );


            var text103 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Decline_insp_xWorkExecution.EditStatusView_workOrder_groupitem_0_wonum_WorkOrder',
               'id' : 'aw9bf5651a',
               'label' : MessageService.createStaticMessage('Work Order'),
            });
            groupitem060.addChild( text103 );


            var container063 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'Decline_insp_xWorkExecution.EditStatusView_statusChangeResource_container_0',
               'id' : 'aw87bdaa26',
            });
            view020.addChild( container063 );


            var group023 = new Group({
               'artifactId' : 'Decline_insp_xWorkExecution.EditStatusView_group_1',
               'id' : 'aw2670e11a',
            });
            container063.addChild( group023 );


            var groupitem061 = new GroupItem({
               'artifactId' : 'Decline_insp_xWorkExecution.EditStatusView_statusChangeResource_groupitem_1',
               'id' : 'awb5610ba3',
            });
            group023.addChild( groupitem061 );


            var text104 = new Text({
               'resourceAttribute' : 'ms_inspection_acc',
               'editable' : false,
               'artifactId' : 'Decline_insp_xWorkExecution.EditStatusView_statusChangeResource_groupitem_1_statusdesc_NewStatus',
               'id' : 'awb9457062',
               'label' : MessageService.createStaticMessage('Recusar inspecao?'),
            });
            groupitem061.addChild( text104 );


            var footer004 = new Footer({
               'artifactId' : 'Decline_insp_xWorkExecution.EditStatusView_footer',
               'id' : 'aw863f96e7',
            });
            view020.addChild( footer004 );


            var button066 = new Button({
               'resource' : 'workOrder',
               'transitionTo' : 'WorkExecution.WorkItemsView',
               'artifactId' : 'Decline_insp_xWorkExecution.EditStatusView_Cancel_button',
               'id' : 'awfe3ad79',
               'label' : MessageService.createStaticMessage('Voltar'),
            });
            footer004.addChild( button066 );


            var button067 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'resource' : 'workOrder',
               'artifactId' : 'Decline_insp_xWorkExecution.EditStatusView_Save_button',
               'id' : 'awb0a886f0',
               'label' : MessageService.createStaticMessage('Recusar'),
               'primary' : 'true',
            });
            var eventHandlers093 = [
               {
                     'method' : 'dev_bt',
                     'artifactId' : 'Decline_insp_yes_01',
                     'id' : 'aw54256860',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            button067.eventHandlers = eventHandlers093;
            footer004.addChild( button067 );

            var eventHandlers094 = [
               {
                     'method' : 'initEditStatusView',
                     'artifactId' : 'dec_xWorkExecution.EditStatusView_eventHandlers_initialize_initEditStatusView',
                     'id' : 'awc78b8782',
                     'event' : 'initialize',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'cleanupEditStatusView',
                     'artifactId' : 'dec_xWorkExecution.EditStatusView_eventHandlers_cleanup_cleanupEditStatusView',
                     'id' : 'aw7f93223e',
                     'event' : 'cleanup',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            view020.eventHandlers = eventHandlers094;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Accept_insp_01', false);
               trackTimer.startTracking();
            }

            var view021 = new View({
               'resource' : 'workOrder',
               'id' : 'Accept_insp_01',
               'label' : MessageService.createStaticMessage('Confirmacao de aceite da inspecao'),
            });
            ui001.addChild( view021 );

            var requiredResources021 = {
               'workOrder' : {
                  'artifactId' : 'Accept_insp_xWorkExecution.EditStatusView_workOrder',
                  'id' : 'aw8ea44bc1',
                  'related' : {
                     'tasklist' : {
                        'artifactId' : 'Accept_insp_xWorkExecution.EditStatusView_workOrder_tasklist',
                        'id' : 'aw4f41760',
                     },
                  },
               },
               'statusChangeResource' : {
                  'artifactId' : 'Accept_insp_xWorkExecution.EditStatusView_statusChangeResource',
                  'id' : 'aw5f561c16',
               },
               'workOrder' : {
                  'artifactId' : 'Accept_insp_WorkExecution.questionsview_workOrder',
                  'id' : 'aw2b97be8e',
               },
               'domainworktype' : {
                  'artifactId' : 'Accept_insp_xWorkExecution.EditStatusView_domainworktype',
                  'id' : 'awbe48ff90',
               },
            };
            view021.addRequiredResources( requiredResources021 );

            var container064 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'Accept_insp_xWorkExecution.EditStatusView_workOrder_container_0',
               'id' : 'aw345808ff',
            });
            view021.addChild( container064 );


            var group024 = new Group({
               'artifactId' : 'Accept_insp_xWorkExecution.EditStatusView_group_0',
               'id' : 'aw883463a5',
            });
            container064.addChild( group024 );


            var groupitem062 = new GroupItem({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Accept_insp_xWorkExecution.EditStatusView_workOrder_groupitem_0',
               'id' : 'aw718399ec',
            });
            group024.addChild( groupitem062 );


            var text105 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Accept_insp_xWorkExecution.EditStatusView_workOrder_groupitem_0_wonum_WorkOrder',
               'id' : 'awa4306338',
               'label' : MessageService.createStaticMessage('Work Order'),
            });
            groupitem062.addChild( text105 );


            var container065 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'Accept_insp_xWorkExecution.EditStatusView_statusChangeResource_container_0',
               'id' : 'aw5a3c15e5',
            });
            view021.addChild( container065 );


            var group025 = new Group({
               'artifactId' : 'Accept_insp_xWorkExecution.EditStatusView_group_1',
               'id' : 'awff335333',
            });
            container065.addChild( group025 );


            var groupitem063 = new GroupItem({
               'artifactId' : 'Accept_insp_xWorkExecution.EditStatusView_statusChangeResource_groupitem_1',
               'id' : 'aw68e0b460',
            });
            group025.addChild( groupitem063 );


            var text106 = new Text({
               'resourceAttribute' : 'ms_inspection_acc',
               'editable' : false,
               'artifactId' : 'Accept_insp_xWorkExecution.EditStatusView_statusChangeResource_groupitem_1_statusdesc_NewStatus',
               'id' : 'aw6d40b4ea',
               'label' : MessageService.createStaticMessage('Confirma aceite da inspecao?'),
            });
            groupitem063.addChild( text106 );


            var footer005 = new Footer({
               'artifactId' : 'Accept_insp_xWorkExecution.EditStatusView_footer',
               'id' : 'aw13d7630e',
            });
            view021.addChild( footer005 );


            var button068 = new Button({
               'resource' : 'workOrder',
               'transitionTo' : 'WorkExecution.WorkItemsView',
               'artifactId' : 'Accept_insp_xWorkExecution.EditStatusView_Cancel_button',
               'id' : 'aw4ebe5b9f',
               'label' : MessageService.createStaticMessage('Voltar'),
            });
            footer005.addChild( button068 );


            var button069 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'resource' : 'workOrder',
               'artifactId' : 'Accept_insp_xWorkExecution.EditStatusView_Save_button',
               'id' : 'aw8f133a8c',
               'label' : MessageService.createStaticMessage('Aceitar'),
               'primary' : 'true',
            });
            var eventHandlers095 = [
               {
                     'method' : 'accept_bt',
                     'artifactId' : 'Accept_insp_yes_01',
                     'id' : 'aw141f38d3',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            button069.eventHandlers = eventHandlers095;
            footer005.addChild( button069 );

            var eventHandlers096 = [
               {
                     'method' : 'initEditStatusView',
                     'artifactId' : 'acc_xWorkExecution.EditStatusView_eventHandlers_initialize_initEditStatusView',
                     'id' : 'aw24560274',
                     'event' : 'initialize',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'cleanupEditStatusView',
                     'artifactId' : 'acc_xWorkExecution.EditStatusView_eventHandlers_cleanup_cleanupEditStatusView',
                     'id' : 'aw9c4ea7c8',
                     'event' : 'cleanup',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            view021.eventHandlers = eventHandlers096;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.QuestionsView', false);
               trackTimer.startTracking();
            }

            var view022 = new View({
               'resource' : 'workOrder',
               'showOverflow' : false,
               'id' : 'WorkExecution.QuestionsView',
               'label' : MessageService.createStaticMessage('1. Servi\u00E7o existe?'),
            });
            ui001.addChild( view022 );

            var requiredResources022 = {
               'workOrder' : {
                  'artifactId' : 'xWorkExecution.EditStatusView_workOrder',
                  'id' : 'aw70d10b46',
                  'related' : {
                     'tasklist' : {
                        'artifactId' : 'xWorkExecution.EditStatusView_workOrder_tasklist',
                        'id' : 'awbe953fee',
                     },
                  },
               },
               'pdwhy' : {
                  'artifactId' : 'WorkExecution.PD_WhyView_ms_pdwhy_0',
                  'id' : 'aw3049867b',
               },
               'statusChangeResource' : {
                  'artifactId' : 'xWorkExecution.EditStatusView_statusChangeResource',
                  'id' : 'awcfe3bb48',
               },
               'workOrder' : {
                  'artifactId' : 'WorkExecution.questionsview_workOrder',
                  'id' : 'awa1f5582f',
               },
               'domainworktype' : {
                  'artifactId' : 'xWorkExecution.EditStatusView_domainworktype',
                  'id' : 'awfe9fada7',
               },
            };
            view022.addRequiredResources( requiredResources022 );

            var container066 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'xWorkExecution.EditStatusView_workOrder_container_0',
               'id' : 'awb81bc1ab',
            });
            view022.addChild( container066 );


            var group026 = new Group({
               'artifactId' : 'xWorkExecution.EditStatusView_group_0',
               'id' : 'aw2568504',
            });
            container066.addChild( group026 );


            var groupitem064 = new GroupItem({
               'layout' : 'Item1Desc1',
               'artifactId' : 'xWorkExecution.EditStatusView_workOrder_groupitem_0',
               'id' : 'awfdc050b8',
            });
            group026.addChild( groupitem064 );


            var text107 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'xWorkExecution.EditStatusView_workOrder_groupitem_0_wonum_WorkOrder',
               'id' : 'aw4d5e35b4',
               'label' : MessageService.createStaticMessage('Work Order'),
            });
            groupitem064.addChild( text107 );


            var text108 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'xWorkExecution.EditStatusView_workOrder_groupitem_0_statusdesc_Status',
               'id' : 'awdbde2ada',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem064.addChild( text108 );


            var container067 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'xWorkExecution.EditStatusView_statusChangeResource_container_0',
               'id' : 'awf57a317f',
            });
            view022.addChild( container067 );


            var group027 = new Group({
               'artifactId' : 'xWorkExecution.EditStatusView_group_1',
               'id' : 'aw7551b592',
            });
            container067.addChild( group027 );


            var groupitem065 = new GroupItem({
               'artifactId' : 'xWorkExecution.EditStatusView_statusChangeResource_groupitem_1',
               'id' : 'awc7a690fa',
            });
            group027.addChild( groupitem065 );


            var text109 = new Text({
               'resourceAttribute' : 'pd_inspquestion01',
               'editable' : false,
               'artifactId' : 'xWorkExecution.EditStatusView_statusChangeResource_groupitem_1_statusdesc_NewStatus',
               'id' : 'aw54b6951e',
               'label' : MessageService.createStaticMessage('1. Servi\u00E7o existe?'),
            });
            groupitem065.addChild( text109 );


            var container068 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'xWorkExecution.EditStatusView_statusChangeResource_container_0_ms_inspwhy',
               'id' : 'awf5c31e9f',
            });
            view022.addChild( container068 );


            var group028 = new Group({
               'artifactId' : 'xWorkExecution.EditStatusView_group_1_ms_inspwhy',
               'id' : 'awa513c0e0',
            });
            container068.addChild( group028 );


            var groupitem066 = new GroupItem({
               'artifactId' : 'xWorkExecution.EditStatusView_statusChangeResource_groupitem_1_ms_inspwhy',
               'id' : 'aw80340080',
            });
            group028.addChild( groupitem066 );


            var text110 = new Text({
               'resourceAttribute' : 'pdwhy_description',
               'editable' : false,
               'artifactId' : 'xWorkExecution.EditStatusView_statusChangeResource_groupitem_1_statusdesc_NewStatus_pdwhy_description',
               'id' : 'aw4fd6fe76',
               'label' : MessageService.createStaticMessage('Selecione um Motivo'),
            });
            groupitem066.addChild( text110 );

            var eventHandlers097 = [
               {
                     'method' : 'escondeMotivo',
                     'artifactId' : 'xWorkExecution.EditStatusView_escondeMotivo_eventHandlers1',
                     'id' : 'aw70416bb3',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            groupitem066.eventHandlers = eventHandlers097;

            var container069 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'xWorkExecution.EditStatusView_statusChangeResource_container_00',
               'id' : 'aw3494c9bd',
            });
            view022.addChild( container069 );


            var group029 = new Group({
               'artifactId' : 'xWorkExecution.EditStatusView_group_11',
               'id' : 'aw9da84c6a',
            });
            container069.addChild( group029 );


            var groupitem067 = new GroupItem({
               'artifactId' : 'xWorkExecution.EditStatusView_statusChangeResource_groupitem_11',
               'id' : 'awde735225',
            });
            group029.addChild( groupitem067 );


            var button070 = new Button({
               'resource' : 'workOrder',
               'artifactId' : 'xWorkExecution.EditStatusView_Save_button_backToLists00',
               'id' : 'awc1b3574',
               'label' : MessageService.createStaticMessage('Voltar para a Lista'),
            });
            var eventHandlers098 = [
               {
                     'method' : 'backToList',
                     'artifactId' : 'xWorkExecution.EditStatusView_Yes01_button_eventHandler_backToLists',
                     'id' : 'aw8a44cc9a',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'cleanButtonBackToList',
                     'artifactId' : 'xWorkExecution.EditStatusView_cleanButtonYes_eventHandlers_backToLists',
                     'id' : 'aw107e339b',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            button070.eventHandlers = eventHandlers098;
            groupitem067.addChild( button070 );


            var footer006 = new Footer({
               'artifactId' : 'xWorkExecution.EditStatusView_footer',
               'id' : 'aw14f82e15',
            });
            view022.addChild( footer006 );


            var button071 = new Button({
               'resource' : 'workOrder',
               'transitionTo' : 'WorkExecution.PD_WhyView',
               'artifactId' : 'xWorkExecution.EditStatusView_Cancel_button',
               'id' : 'aw46e70a75',
               'label' : MessageService.createStaticMessage('N\u00E3o'),
            });
            var eventHandlers099 = [
               {
                     'method' : 'cleanButton',
                     'artifactId' : 'xWorkExecution.EditStatusView_cleanButtonNO_eventHandlers',
                     'id' : 'aw456ec523',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            button071.eventHandlers = eventHandlers099;
            footer006.addChild( button071 );


            var button072 = new Button({
               'resource' : 'workOrder',
               'artifactId' : 'xWorkExecution.EditStatusView_Save_button',
               'id' : 'aw8d0d8be5',
               'label' : MessageService.createStaticMessage('Sim'),
            });
            var eventHandlers100 = [
               {
                     'method' : 'yes_questions01',
                     'artifactId' : 'xWorkExecution.EditStatusView_Yes01_button_eventHandlers',
                     'id' : 'aw51429c33',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'cleanButton',
                     'artifactId' : 'xWorkExecution.EditStatusView_cleanButtonYes_eventHandlers',
                     'id' : 'aw8cb10738',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            button072.eventHandlers = eventHandlers100;
            footer006.addChild( button072 );

            var eventHandlers101 = [
               {
                     'method' : 'initEditStatusView',
                     'artifactId' : 'xWorkExecution.EditStatusView_eventHandlers_initialize_initEditStatusView',
                     'id' : 'awb9c0bcad',
                     'event' : 'initialize',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'cleanupEditStatusView',
                     'artifactId' : 'xWorkExecution.EditStatusView_eventHandlers_cleanup_cleanupEditStatusView',
                     'id' : 'aw1d81911',
                     'event' : 'cleanup',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'redirectList',
                     'artifactId' : 'xWorkExecution.EditStatusView_eventHandlers_cleanup_render',
                     'id' : 'aw757ba544',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            view022.eventHandlers = eventHandlers101;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.QuestionsViewClass', false);
               trackTimer.startTracking();
            }

            var view023 = new View({
               'resource' : 'workOrder',
               'showOverflow' : false,
               'id' : 'WorkExecution.QuestionsViewClass',
               'label' : MessageService.createStaticMessage('2. Servi\u00E7o est\u00E1 correto?'),
            });
            ui001.addChild( view023 );

            var requiredResources023 = {
               'workOrder' : {
                  'artifactId' : 'classificationok_xWorkExecution.EditStatusView_workOrder',
                  'id' : 'awd5f66914',
                  'related' : {
                     'tasklist' : {
                        'artifactId' : 'classificationok_xWorkExecution.EditStatusView_workOrder_tasklist',
                        'id' : 'aw33347697',
                     },
                  },
               },
               'statusChangeResource' : {
                  'artifactId' : 'classificationok_xWorkExecution.EditStatusView_statusChangeResource',
                  'id' : 'aw3e1e0d62',
               },
               'workOrder' : {
                  'artifactId' : 'classificationok_WorkExecution.questionsview_workOrder',
                  'id' : 'aw7423f2d0',
               },
               'domainworktype' : {
                  'artifactId' : 'classificationok_xWorkExecution.EditStatusView_domainworktype',
                  'id' : 'awc311164d',
               },
            };
            view023.addRequiredResources( requiredResources023 );

            var container070 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'classificationok_xWorkExecution.EditStatusView_workOrder_container_0',
               'id' : 'aw6351f5cb',
            });
            view023.addChild( container070 );


            var group030 = new Group({
               'artifactId' : 'classificationok_xWorkExecution.EditStatusView_group_0',
               'id' : 'awd7802ffb',
            });
            container070.addChild( group030 );


            var groupitem068 = new GroupItem({
               'layout' : 'Item1Desc1',
               'artifactId' : 'classificationok_xWorkExecution.EditStatusView_workOrder_groupitem_0',
               'id' : 'aw268a64d8',
            });
            group030.addChild( groupitem068 );


            var text111 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'classificationok_xWorkExecution.EditStatusView_workOrder_groupitem_0_wonum_WorkOrder',
               'id' : 'awef63fc2e',
               'label' : MessageService.createStaticMessage('Work Order'),
            });
            groupitem068.addChild( text111 );


            var text112 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'classificationok_xWorkExecution.EditStatusView_workOrder_groupitem_0_statusdesc_Status',
               'id' : 'awb2c89063',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem068.addChild( text112 );


            var groupitem069 = new GroupItem({
               'artifactId' : 'classificationokk_xWorkExecution.EditStatusView_workOrder_groupitem_0',
               'id' : 'aw92207887',
            });
            group030.addChild( groupitem069 );


            var text113 = new Text({
               'resourceAttribute' : 'classificationdesc',
               'editable' : false,
               'artifactId' : 'xclassificationok_xWorkExecution.EditStatusView_workOrder_groupitem_0_wonum_WorkOrder',
               'id' : 'aw320271cc',
               'label' : MessageService.createStaticMessage('Classification'),
            });
            groupitem069.addChild( text113 );


            var container071 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'classificationok_xWorkExecution.EditStatusView_statusChangeResource_container_0',
               'id' : 'awd47d66d6',
            });
            view023.addChild( container071 );


            var group031 = new Group({
               'artifactId' : 'classificationok_xWorkExecution.EditStatusView_group_1',
               'id' : 'awa0871f6d',
            });
            container071.addChild( group031 );


            var groupitem070 = new GroupItem({
               'artifactId' : 'classificationok_xWorkExecution.EditStatusView_statusChangeResource_groupitem_1',
               'id' : 'awe6a1c753',
            });
            group031.addChild( groupitem070 );


            var text114 = new Text({
               'resourceAttribute' : 'pd_inspquestion01',
               'editable' : false,
               'artifactId' : 'xWorkExecution.EditStatusView_statusChangeResource_groupitem_1_statusdesc_NewStatus2',
               'id' : 'awe08e35fb',
               'label' : MessageService.createStaticMessage('1. Servi\u00E7o existe?'),
            });
            groupitem070.addChild( text114 );


            var text115 = new Text({
               'resourceAttribute' : 'pd_inspquestion02',
               'editable' : false,
               'artifactId' : 'classificationok_xWorkExecution.EditStatusView_statusChangeResource_groupitem_1_statusdesc_NewStatus',
               'id' : 'aw87b58fb7',
               'label' : MessageService.createStaticMessage('2. Servi\u00E7o est\u00E1 correto?'),
            });
            groupitem070.addChild( text115 );


            var container072 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'xWorkExecution.EditStatusView_statusChangeResource_container__000',
               'id' : 'aw68d06d80',
            });
            view023.addChild( container072 );


            var group032 = new Group({
               'artifactId' : 'xWorkExecution.EditStatusView_group_111',
               'id' : 'aw2e26cfbd',
            });
            container072.addChild( group032 );


            var groupitem071 = new GroupItem({
               'artifactId' : 'xWorkExecution.EditStatusView_statusChangeResource_groupitem_111',
               'id' : 'awc80648a2',
            });
            group032.addChild( groupitem071 );


            var button073 = new Button({
               'resource' : 'workOrder',
               'artifactId' : 'xWorkExecution.EditStatusView_Save_button_backToLists_11',
               'id' : 'aw8e28fcfb',
               'label' : MessageService.createStaticMessage('Voltar para a Lista'),
            });
            var eventHandlers102 = [
               {
                     'method' : 'backToList',
                     'artifactId' : 'xWorkExecution.EditStatusView_Yes01_button_eventHandler_backToLists11',
                     'id' : 'awcf267338',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'cleanButtonBackToList',
                     'artifactId' : 'xWorkExecution.EditStatusView_cleanButtonYes_eventHandlers_backToLists11',
                     'id' : 'awfb3f37ce',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            button073.eventHandlers = eventHandlers102;
            groupitem071.addChild( button073 );


            var footer007 = new Footer({
               'artifactId' : 'classificationok_xWorkExecution.EditStatusView_footer',
               'id' : 'awa2133537',
            });
            view023.addChild( footer007 );


            var button074 = new Button({
               'resource' : 'workOrder',
               'transitionTo' : 'WorkExecution.ClassifyWorkOrderView',
               'artifactId' : 'classificationok_xWorkExecution.EditStatusView_Cancel_button',
               'id' : 'aw10c93710',
               'label' : MessageService.createStaticMessage('N\u00E3o'),
            });
            var eventHandlers103 = [
               {
                     'method' : 'no_questions02',
                     'artifactId' : 'no_02',
                     'id' : 'awf314d79a',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'cleanButton',
                     'artifactId' : 'xWorkExecution.EditStatusView_cleanButtonYes_eventHandlers_servico_esta_correto0',
                     'id' : 'aw71914a8b',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            button074.eventHandlers = eventHandlers103;
            footer007.addChild( button074 );


            var button075 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'resource' : 'workOrder',
               'artifactId' : 'classificationok_xWorkExecution.EditStatusView_Save_button',
               'id' : 'awa63c1160',
               'label' : MessageService.createStaticMessage('Sim'),
               'primary' : 'true',
            });
            var eventHandlers104 = [
               {
                     'method' : 'planejado',
                     'artifactId' : 'classificationok_xrWorkExecution.EditStatusView_Save_button_eventHandlers_click_02',
                     'id' : 'aw77f39dc',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'enableCommitButton',
                     'artifactId' : 'classificationok_xrWorkExecution.EditStatusView_Save_button_eventHandlers_datachange_enableCommitButton',
                     'id' : 'aw64abbccf',
                     'event' : 'datachange',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'yes_questions02',
                     'artifactId' : 'yes_02',
                     'id' : 'awc5c6041b',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'cleanButton',
                     'artifactId' : 'xWorkExecution.EditStatusView_cleanButtonYes_eventHandlers_servico_esta_correto01',
                     'id' : 'awf9c72455',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            button075.eventHandlers = eventHandlers104;
            footer007.addChild( button075 );

            var eventHandlers105 = [
               {
                     'method' : 'initEditStatusView',
                     'artifactId' : 'classificationok_xWorkExecution.EditStatusView_eventHandlers_initialize_initEditStatusView',
                     'id' : 'aw3985aa50',
                     'event' : 'initialize',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'cleanupEditStatusView',
                     'artifactId' : 'classificationok_xWorkExecution.EditStatusView_eventHandlers_cleanup_cleanupEditStatusView',
                     'id' : 'aw819d0fec',
                     'event' : 'cleanup',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'redirectList',
                     'artifactId' : 'classificationok_xWorkExecution.EditStatusView_eventHandlers_001_cleanupEditStatusView',
                     'id' : 'aw82261bec',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            view023.eventHandlers = eventHandlers105;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.ClassifyWorkOrderView', false);
               trackTimer.startTracking();
            }

            var view024 = new View({
               'resource' : 'workOrder',
               'showOverflow' : false,
               'allowDrillDown' : 'true',
               'id' : 'WorkExecution.ClassifyWorkOrderView',
               'label' : MessageService.createStaticMessage('Classify'),
            });
            ui001.addChild( view024 );

            var requiredResources024 = {
               'classstructure' : {
                  'artifactId' : 'WorkExecution.ClassifyWorkOrderView_classstructure',
                  'id' : 'aw38565254',
               },
            };
            view024.addRequiredResources( requiredResources024 );

            var container073 = new Container({
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_container_0',
               'id' : 'aw1b366c51',
            });
            view024.addChild( container073 );


            var group033 = new Group({
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_group_0',
               'id' : 'awffbba620',
            });
            container073.addChild( group033 );


            var groupitem072 = new GroupItem({
               'cssClass' : 'pathContainer',
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_groupitem_0',
               'id' : 'aw5eedfd42',
            });
            group033.addChild( groupitem072 );


            var text116 = new Text({
               'resourceAttribute' : 'classificationpath',
               'editable' : false,
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_groupitem_0_classificationpath',
               'id' : 'aw73afe3e8',
            });
            groupitem072.addChild( text116 );


            var text117 = new Text({
               'resourceAttribute' : 'classificationdesc',
               'editable' : false,
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_groupitem_0_classificationdesc',
               'id' : 'aw734ec4b3',
            });
            groupitem072.addChild( text117 );

            var eventHandlers106 = [
               {
                     'method' : 'hideIfNull',
                     'artifactId' : 'WorkExecution.ClassifyWorkOrderView_container_0_eventHandlers_render_hideIfNull',
                     'id' : 'aw120ef419',
                     'event' : 'render',
                     'class' : 'application.handlers.ClassifyWorkOrderHandler',
               }
            ];
            container073.eventHandlers = eventHandlers106;


            var listItemTemplate009 = new ListItemTemplate({
               'layout' : 'FailureReportList',
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_classstructure_listItemTemplate_FailureReportList',
               'id' : 'aw631107f1',
            });

            var listtext028 = new ListText({
               'resourceAttribute' : 'fulldesc',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_classstructure_FailureReportList_fulldesc',
               'id' : 'awdbee2be9',
            });
            listItemTemplate009.addChild( listtext028 );

            var eventHandlers107 = [
               {
                     'method' : 'openChildren',
                     'artifactId' : 'WorkExecution.ClassifyWorkOrderView_classstructure_listItemTemplate_FailureReportList_eventHandlers_click_openChildren',
                     'id' : 'awb23c7ac8',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSClassifyWorkOrderHandler',
               }
            ];
            listItemTemplate009.eventHandlers = eventHandlers107;


            var list009 = new List({
               'resource' : 'classstructure',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate009,
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_classstructure_list',
               'id' : 'awcad4c8d8',
               'label' : MessageService.createStaticMessage('Classify'),
               'displayPageSize' : '20',
            });
            view024.addChild( list009 );


            var footer008 = new Footer({
               'visibleButtonCount' : '2',
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_footer',
               'id' : 'aw9b22700f',
            });
            view024.addChild( footer008 );


            var button076 = new Button({
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_Cancel_button',
               'id' : 'awc5b261e7',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers108 = [
               {
                     'method' : 'cancelClassify',
                     'artifactId' : 'WorkExecution.ClassifyWorkOrderView_Cancel_button_eventHandlers_click_cancelClassify',
                     'id' : 'aw2c001fa3',
                     'event' : 'click',
                     'class' : 'application.handlers.ClassifyWorkOrderHandler',
               }
            ];
            button076.eventHandlers = eventHandlers108;
            footer008.addChild( button076 );


            var button077 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_Classify_button',
               'id' : 'awa80c56e9',
               'label' : MessageService.createStaticMessage('Classify'),
               'primary' : 'true',
            });
            var eventHandlers109 = [
               {
                     'method' : 'hideClassify',
                     'artifactId' : 'WorkExecution.ClassifyWorkOrderView_Classify_button_eventHandlers_render_hideClassify',
                     'id' : 'awf74881ab',
                     'event' : 'render',
                     'class' : 'application.handlers.ClassifyWorkOrderHandler',
               },
               {
                     'method' : 'saveClassify',
                     'artifactId' : 'WorkExecution.ClassifyWorkOrderView_Classify_button_eventHandlers_click_saveClassify',
                     'id' : 'awc011c555',
                     'event' : 'click',
                     'class' : 'application.handlers.ClassifyWorkOrderHandler',
               }
            ];
            button077.eventHandlers = eventHandlers109;
            footer008.addChild( button077 );

            var eventHandlers110 = [
               {
                     'method' : 'handleClassifyBack',
                     'artifactId' : 'WorkExecution.ClassifyWorkOrderView_eventHandlers_back_handleClassifyBack',
                     'id' : 'aw3615dbe8',
                     'event' : 'back',
                     'class' : 'application.handlers.ClassifyWorkOrderHandler',
               },
               {
                     'method' : 'openTop',
                     'artifactId' : 'WorkExecution.ClassifyWorkOrderView_eventHandlers_initialize_openTop',
                     'id' : 'aw3fd2c250',
                     'event' : 'initialize',
                     'class' : 'application.handlers.ClassifyWorkOrderHandler',
               },
               {
                     'method' : 'renderTop',
                     'artifactId' : 'WorkExecution.ClassifyWorkOrderView_eventHandlers_initialize_renderTop',
                     'id' : 'awf756c80c',
                     'event' : 'render',
                     'class' : 'application.handlers.ClassifyWorkOrderHandler',
               }
            ];
            view024.eventHandlers = eventHandlers110;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.EditTaskStatusView', false);
               trackTimer.startTracking();
            }

            var view025 = new View({
               'resource' : 'workOrder',
               'showOverflow' : false,
               'id' : 'WorkExecution.EditTaskStatusView',
               'label' : MessageService.createStaticMessage('Change Status'),
            });
            ui001.addChild( view025 );

            var requiredResources025 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.EditTaskStatusView_workOrder',
                  'id' : 'awd1c78e4a',
                  'related' : {
                     'tasklist' : {
                        'artifactId' : 'WorkExecution.EditTaskStatusView_workOrder_tasklist',
                        'id' : 'aw95342cfb',
                     },
                  },
               },
               'statusChangeResource' : {
                  'artifactId' : 'WorkExecution.EditTaskStatusView_statusChangeResource',
                  'id' : 'aw7ce83723',
               },
            };
            view025.addRequiredResources( requiredResources025 );

            var container074 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.EditTaskStatusView_workOrder_container_0',
               'attribute' : 'tasklist',
               'id' : 'aw62c872f7',
            });
            view025.addChild( container074 );


            var group034 = new Group({
               'artifactId' : 'WorkExecution.EditTaskStatusView_group_0',
               'id' : 'awc38c907f',
            });
            container074.addChild( group034 );


            var groupitem073 = new GroupItem({
               'artifactId' : 'WorkExecution.EditTaskStatusView_workOrder_groupitem_0',
               'id' : 'aw2713e3e4',
            });
            group034.addChild( groupitem073 );


            var text118 = new Text({
               'resourceAttribute' : 'parent',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditTaskStatusView_workOrder_groupitem_0_parent_WorkOrder',
               'id' : 'aw41d6edc0',
               'label' : MessageService.createStaticMessage('Work Order'),
            });
            groupitem073.addChild( text118 );


            var text119 = new Text({
               'resourceAttribute' : 'taskid',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditTaskStatusView_workOrder_groupitem_0_taskid_Task',
               'id' : 'aw3a069107',
               'label' : MessageService.createStaticMessage('Task'),
            });
            groupitem073.addChild( text119 );


            var text120 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditTaskStatusView_workOrder_groupitem_0_statusdesc_Status',
               'id' : 'aw9990bcbe',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem073.addChild( text120 );


            var container075 = new Container({
               'resource' : 'statusChangeResource',
               'artifactId' : 'WorkExecution.EditTaskStatusView_statusChangeResource_container_0',
               'id' : 'aw5848598e',
            });
            view025.addChild( container075 );


            var group035 = new Group({
               'artifactId' : 'WorkExecution.EditTaskStatusView_group_1',
               'id' : 'awb48ba0e9',
            });
            container075.addChild( group035 );


            var groupitem074 = new GroupItem({
               'artifactId' : 'WorkExecution.EditTaskStatusView_statusChangeResource_groupitem_0',
               'id' : 'aw1d93c89d',
            });
            group035.addChild( groupitem074 );


            var text121 = new Text({
               'resourceAttribute' : 'changedate',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditTaskStatusView_statusChangeResource_groupitem_0_changedate_StatusDate.readonly',
               'id' : 'awfe1a79bf',
               'label' : MessageService.createStaticMessage('Status Date'),
               'placeHolder' : MessageService.createStaticMessage('Select'),
               'required' : true,
            });
            groupitem074.addChild( text121 );


            var groupitem075 = new GroupItem({
               'artifactId' : 'WorkExecution.EditTaskStatusView_statusChangeResource_groupitem_1',
               'id' : 'aw6a94f80b',
            });
            group035.addChild( groupitem075 );


            var text122 = new Text({
               'resourceAttribute' : 'statusdesc',
               'lookup' : 'WorkExecution.taskStatusLookup',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditTaskStatusView_statusChangeResource_groupitem_1_statusdesc_NewStatus',
               'id' : 'aw22390dfc',
               'label' : MessageService.createStaticMessage('New Status'),
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
               'required' : true,
            });
            groupitem075.addChild( text122 );


            var groupitem076 = new GroupItem({
               'artifactId' : 'WorkExecution.EditTaskStatusView_statusChangeResource_groupitem_2',
               'id' : 'awf39da9b1',
            });
            group035.addChild( groupitem076 );


            var text123 = new Text({
               'resourceAttribute' : 'memo',
               'editable' : true,
               'artifactId' : 'WorkExecution.EditTaskStatusView_statusChangeResource_groupitem_2_memo_Memo',
               'id' : 'awd52e00f3',
               'label' : MessageService.createStaticMessage('Reason'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem076.addChild( text123 );


            var footer009 = new Footer({
               'artifactId' : 'WorkExecution.EditTaskStatusView_footer',
               'id' : 'awaff0fe2b',
            });
            view025.addChild( footer009 );


            var button078 = new Button({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.EditTaskStatusView_Cancel_button',
               'id' : 'aw56864a0f',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers111 = [
               {
                     'method' : 'discardStatusChange',
                     'artifactId' : 'WorkExecution.EditTaskStatusView_Cancel_button_eventHandlers_click_discardStatusChange',
                     'id' : 'awc0def8fd',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button078.eventHandlers = eventHandlers111;
            footer009.addChild( button078 );


            var button079 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.EditTaskStatusView_Save_button',
               'id' : 'awbc6a1250',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers112 = [
               {
                     'method' : 'commitTaskStatusChange',
                     'artifactId' : 'WorkExecution.EditTaskStatusView_Save_button_eventHandlers_click_commitTaskStatusChange',
                     'id' : 'awcf66f25f',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'enableCommitButton',
                     'artifactId' : 'WorkExecution.EditTaskStatusView_Save_button_eventHandlers_datachange_enableCommitButton',
                     'id' : 'awc6e32d6',
                     'event' : 'datachange',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button079.eventHandlers = eventHandlers112;
            footer009.addChild( button079 );

            var eventHandlers113 = [
               {
                     'method' : 'initEditStatusView',
                     'artifactId' : 'WorkExecution.EditTaskStatusView_eventHandlers_initialize_initEditStatusView',
                     'id' : 'aw2325a8c',
                     'event' : 'initialize',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'cleanupEditStatusView',
                     'artifactId' : 'WorkExecution.EditTaskStatusView_eventHandlers_cleanup_cleanupEditStatusView',
                     'id' : 'awba2aff30',
                     'event' : 'cleanup',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            view025.eventHandlers = eventHandlers113;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.SearchWorkOrderView', false);
               trackTimer.startTracking();
            }

            var view026 = new View({
               'id' : 'WorkExecution.SearchWorkOrderView',
               'label' : MessageService.createStaticMessage('Search Work Orders'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view026 );

            var requiredResources026 = {
               'searchWorkOrder' : {
                  'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder',
                  'id' : 'awd1976e',
               },
               'workOrder' : {
                  'artifactId' : 'WorkExecution.SearchWorkOrderView_workOrder',
                  'id' : 'aw64afe144',
               },
               'domainAssetstatus' : {
                  'artifactId' : 'WorkExecution.SearchWorkOrderView_domainAssetstatus',
                  'id' : 'awf5abe4af',
               },
               'statusChangeResource' : {
                  'artifactId' : 'WorkExecution.SearchWorkOrderView_statusChangeResource',
                  'id' : 'aw77dfb8a7',
               },
               'domainwoclass' : {
                  'artifactId' : 'WorkExecution.SearchWorkOrderView_domainwoclass',
                  'id' : 'aw589ae203',
               },
            };
            view026.addRequiredResources( requiredResources026 );

            var container076 = new Container({
               'resource' : 'searchWorkOrder',
               'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder_container_0',
               'id' : 'aw8588cceb',
            });
            view026.addChild( container076 );


            var group036 = new Group({
               'artifactId' : 'WorkExecution.SearchWorkOrderView_group_0',
               'id' : 'awde162248',
            });
            container076.addChild( group036 );


            var groupitem077 = new GroupItem({
               'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder_groupitem_0',
               'id' : 'awc0535df8',
            });
            group036.addChild( groupitem077 );


            var text124 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : true,
               'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder_groupitem_0_wonum_WorkOrder',
               'id' : 'aw46dbca46',
               'label' : MessageService.createStaticMessage('Work Order'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem077.addChild( text124 );


            var groupitem078 = new GroupItem({
               'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder_groupitem_1',
               'id' : 'awb7546d6e',
            });
            group036.addChild( groupitem078 );


            var text125 = new Text({
               'resourceAttribute' : 'description',
               'editable' : true,
               'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder_groupitem_1_description_Description',
               'id' : 'awf2841084',
               'label' : MessageService.createStaticMessage('Description'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem078.addChild( text125 );


            var groupitem079 = new GroupItem({
               'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder_groupitem_2',
               'id' : 'aw2e5d3cd4',
            });
            group036.addChild( groupitem079 );


            var text126 = new Text({
               'resourceAttribute' : 'statusdesc',
               'lookup' : 'WorkExecution.statusLookup',
               'editable' : false,
               'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder_groupitem_2_statusdesc_Status',
               'id' : 'awa4e24b1c',
               'label' : MessageService.createStaticMessage('Status'),
               'placeHolder' : MessageService.createStaticMessage('Tap to select from list'),
            });
            groupitem079.addChild( text126 );


            var groupitem080 = new GroupItem({
               'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder_groupitem_3',
               'id' : 'aw595a0c42',
            });
            group036.addChild( groupitem080 );


            var text127 = new Text({
               'resourceAttribute' : 'asset',
               'lookup' : 'WorkExecution.AssetLookup',
               'editable' : true,
               'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder_groupitem_3_asset_Asset',
               'id' : 'awae0db3e5',
               'label' : MessageService.createStaticMessage('Asset'),
               'codeScannable' : true,
               'lookupAttribute' : 'assetnum',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem080.addChild( text127 );


            var groupitem081 = new GroupItem({
               'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder_groupitem_4',
               'id' : 'awc73e99e1',
            });
            group036.addChild( groupitem081 );


            var text128 = new Text({
               'resourceAttribute' : 'location',
               'lookup' : 'WorkExecution.LocationLookup',
               'editable' : true,
               'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder_groupitem_4_location_Location',
               'id' : 'aw1e660673',
               'label' : MessageService.createStaticMessage('Location'),
               'codeScannable' : true,
               'lookupAttribute' : 'location',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem081.addChild( text128 );


            var groupitem082 = new GroupItem({
               'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder_groupitem_5',
               'id' : 'awb039a977',
            });
            group036.addChild( groupitem082 );


            var text129 = new Text({
               'resourceAttribute' : 'priority',
               'editable' : true,
               'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder_groupitem_5_priority_Priority',
               'id' : 'awdc4c7079',
               'label' : MessageService.createStaticMessage('Priority'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem082.addChild( text129 );


            var groupitem083 = new GroupItem({
               'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder_groupitem_6',
               'id' : 'aw2930f8cd',
            });
            group036.addChild( groupitem083 );


            var text130 = new Text({
               'resourceAttribute' : 'startdate',
               'editable' : true,
               'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder_groupitem_6_startdate_ScheduledStartDateRange',
               'id' : 'aw6890ff92',
               'label' : MessageService.createStaticMessage('Scheduled Start Date Range'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter start date range'),
            });
            groupitem083.addChild( text130 );


            var text131 = new Text({
               'resourceAttribute' : 'enddate',
               'editable' : true,
               'artifactId' : 'WorkExecution.SearchWorkOrderView_searchWorkOrder_groupitem_6_enddate',
               'id' : 'aw9ba56600',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter end date range'),
            });
            groupitem083.addChild( text131 );


            var footer010 = new Footer({
               'artifactId' : 'WorkExecution.SearchWorkOrderView_footer',
               'id' : 'aw8252ad3b',
            });
            view026.addChild( footer010 );


            var button080 = new Button({
               'artifactId' : 'WorkExecution.SearchWorkOrderView_Clear_button',
               'id' : 'aw6fa835c3',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers114 = [
               {
                     'method' : 'clearSearchFields',
                     'artifactId' : 'WorkExecution.SearchWorkOrderView_Clear_button_eventHandlers_click_clearSearchFields',
                     'id' : 'aw57761738',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button080.eventHandlers = eventHandlers114;
            footer010.addChild( button080 );


            var button081 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.SearchWorkOrderView_Search_button',
               'id' : 'awf838e348',
               'label' : MessageService.createStaticMessage('Search'),
               'primary' : 'true',
            });
            var eventHandlers115 = [
               {
                     'method' : 'setSearchQuery',
                     'artifactId' : 'WorkExecution.SearchWorkOrderView_Search_button_eventHandlers_click_setSearchQuery',
                     'id' : 'aw52c1a047',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button081.eventHandlers = eventHandlers115;
            footer010.addChild( button081 );

            var eventHandlers116 = [
               {
                     'method' : 'initSearchData',
                     'artifactId' : 'WorkExecution.SearchWorkOrderView_eventHandlers_initialize_initSearchData',
                     'id' : 'awe8627ef1',
                     'event' : 'initialize',
                     'class' : 'application.handlers.WODetailHandler',
               },
               {
                     'method' : 'showSearch',
                     'artifactId' : 'WorkExecution.SearchWorkOrderView_eventHandlers_show_showSearch',
                     'id' : 'aw6acb1a1c',
                     'event' : 'show',
                     'class' : 'application.handlers.WODetailHandler',
               },
               {
                     'method' : 'hideSearch',
                     'artifactId' : 'WorkExecution.SearchWorkOrderView_eventHandlers_hide_hideSearch',
                     'id' : 'awfa6f1f6',
                     'event' : 'hide',
                     'class' : 'application.handlers.WODetailHandler',
               },
               {
                     'method' : 'discardSummaryView',
                     'artifactId' : 'WorkExecution.SearchWorkOrderView_eventHandlers_cleanup_discardSummaryView',
                     'id' : 'awe986e7e1',
                     'event' : 'cleanup',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            view026.eventHandlers = eventHandlers116;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.CreateActualLaborDetailView', false);
               trackTimer.startTracking();
            }

            var view027 = new View({
               'id' : 'WorkExecution.CreateActualLaborDetailView',
               'label' : MessageService.createStaticMessage('Labor Details'),
            });
            ui001.addChild( view027 );


            var container077 = new Container({
               'resource' : 'plannedLabor',
               'artifactId' : 'WorkExecution.CreateActualLaborDetailView_workOrder_container_0',
               'id' : 'awea7d95f6',
            });
            view027.addChild( container077 );


            var group037 = new Group({
               'artifactId' : 'WorkExecution.CreateActualLaborDetailView_group_0',
               'id' : 'awd0e73937',
            });
            container077.addChild( group037 );


            var groupitem084 = new GroupItem({
               'artifactId' : 'WorkExecution.CreateActualLaborDetailView_workOrder_groupitem_0',
               'id' : 'awafa604e5',
            });
            group037.addChild( groupitem084 );


            var text132 = new Text({
               'resourceAttribute' : 'taskid',
               'editable' : false,
               'artifactId' : 'WorkExecution.CreateActualLaborDetailView_workOrder_groupitem_0_taskid_Task',
               'id' : 'aw1aff8966',
               'label' : MessageService.createStaticMessage('Task'),
            });
            groupitem084.addChild( text132 );


            var groupitem085 = new GroupItem({
               'artifactId' : 'WorkExecution.CreateActualLaborDetailView_workOrder_groupitem_1',
               'id' : 'awd8a13473',
            });
            group037.addChild( groupitem085 );


            var text133 = new Text({
               'resourceAttribute' : 'laborcode',
               'editable' : false,
               'artifactId' : 'WorkExecution.CreateActualLaborDetailView_workOrder_groupitem_1_laborcode_Labor',
               'id' : 'aw7ee1be2c',
               'label' : MessageService.createStaticMessage('Labor'),
            });
            groupitem085.addChild( text133 );


            var text134 = new Text({
               'resourceAttribute' : 'laborname',
               'editable' : false,
               'artifactId' : 'WorkExecution.CreateActualLaborDetailView_workOrder_groupitem_1_laborname',
               'id' : 'aw841590a5',
            });
            groupitem085.addChild( text134 );


            var groupitem086 = new GroupItem({
               'artifactId' : 'WorkExecution.CreateActualLaborDetailView_workOrder_groupitem_2',
               'id' : 'aw41a865c9',
            });
            group037.addChild( groupitem086 );


            var text135 = new Text({
               'resourceAttribute' : 'craft',
               'editable' : false,
               'artifactId' : 'WorkExecution.CreateActualLaborDetailView_workOrder_groupitem_2_craft_Craft',
               'id' : 'awda84c348',
               'label' : MessageService.createStaticMessage('Craft'),
            });
            groupitem086.addChild( text135 );


            var groupitem087 = new GroupItem({
               'artifactId' : 'WorkExecution.CreateActualLaborDetailView_workOrder_groupitem_3',
               'id' : 'aw36af555f',
            });
            group037.addChild( groupitem087 );


            var text136 = new Text({
               'resourceAttribute' : 'skilllevel',
               'editable' : false,
               'artifactId' : 'WorkExecution.CreateActualLaborDetailView_workOrder_groupitem_3_skilllevel_SkillLevel',
               'id' : 'aw1c0f0d9e',
               'label' : MessageService.createStaticMessage('Skill Level'),
            });
            groupitem087.addChild( text136 );


            var groupitem088 = new GroupItem({
               'artifactId' : 'WorkExecution.CreateActualLaborDetailView_workOrder_groupitem_4',
               'id' : 'awa8cbc0fc',
            });
            group037.addChild( groupitem088 );


            var text137 = new Text({
               'resourceAttribute' : 'hours',
               'editable' : true,
               'artifactId' : 'WorkExecution.CreateActualLaborDetailView_workOrder_groupitem_3_hours',
               'id' : 'aw38e73bf9',
               'label' : MessageService.createStaticMessage('Hours'),
            });
            groupitem088.addChild( text137 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'MapView.featureAttributes', false);
               trackTimer.startTracking();
            }

            var view028 = new View({
               'id' : 'MapView.featureAttributes',
               'label' : MessageService.createStaticMessage('Feature Attributes'),
            });
            ui001.addChild( view028 );

            var requiredResources027 = {
               'featureAttributes' : {
                  'artifactId' : 'MapView.featureAttributes_attributes',
                  'id' : 'aw811e442b',
               },
            };
            view028.addRequiredResources( requiredResources027 );

            var actions006 = new Actions({
               'artifactId' : 'MapView.featureAttributes_actions',
               'id' : 'awe8d23901',
            });
            view028.addChild( actions006 );


            var action007 = new Action({
               'overflow' : true,
               'artifactId' : 'MapView.featureAttributes_TakePhoto_action',
               'id' : 'aw106d4dcc',
               'label' : MessageService.createStaticMessage('Update Work Order Asset'),
            });
            actions006.addChild( action007 );

            var eventHandlers117 = [
               {
                     'method' : 'updateWOAsset',
                     'artifactId' : 'MapView.featureAttributes_update_asset_click',
                     'id' : 'aw8b17589b',
                     'event' : 'click',
                     'class' : 'platform.handlers.spatial.IdentifyToolHandler',
               },
               {
                     'method' : 'showUpdateWOAssetOption',
                     'artifactId' : 'MapView.featureAttributes_update_asset_render',
                     'id' : 'awc8de12f4',
                     'event' : 'render',
                     'class' : 'platform.handlers.spatial.IdentifyToolHandler',
               }
            ];
            action007.eventHandlers = eventHandlers117;


            var listItemTemplate010 = new ListItemTemplate({
               'layout' : 'FeatureAttributesList',
               'cssClass' : 'featureAttributesListTemplate',
               'artifactId' : 'MapView.featureAttributes_listItemTemplate',
               'id' : 'aw62e547a4',
            });

            var listtext029 = new ListText({
               'resourceAttribute' : 'featureAttributeTitle',
               'cssClass' : 'featureAttributeLabel bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'MapView.featureAttributes_objectID',
               'id' : 'awe54358a0',
            });
            listItemTemplate010.addChild( listtext029 );


            var listtext030 = new ListText({
               'resourceAttribute' : 'featureAttributeValue',
               'cssClass' : 'featureAttributeValue textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'MapView.featureAttributes_title',
               'id' : 'aw62ee41dd',
            });
            listItemTemplate010.addChild( listtext030 );



            var list010 = new List({
               'resource' : 'featureAttributes',
               'listItemTemplate' : listItemTemplate010,
               'artifactId' : 'MapView.featureAttributes_list',
               'id' : 'awf5b603fe',
               'label' : MessageService.createStaticMessage('Attributes'),
               'displayPageSize' : '100',
            });
            view028.addChild( list010 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var lookup001 = new Lookup({
               'filterMethod' : 'filterWOStatus',
               'resource' : 'domainwostatus',
               'filterClass' : 'custom.handlers.MSStatusChangeHandler',
               'id' : 'WorkExecution.statusLookup',
               'label' : MessageService.createStaticMessage('Work Order Status'),
            });
            ui001.addChild( lookup001 );

            var requiredResources028 = {
               'domainwostatus' : {
                  'artifactId' : 'WorkExecution.statusLookup_domainwostatus',
                  'id' : 'awc36a3c29',
               },
               'workOrder' : {
                  'artifactId' : 'WorkExecution.statusLookup_workOrder',
                  'id' : 'awe64a69ea',
                  'related' : {
                     'actuallaborlist' : {
                        'artifactId' : 'WorkExecution.statusLookup_workOrder_actuallaborlist',
                        'id' : 'awa0e6be52',
                     },
                  },
               },
            };
            lookup001.addRequiredResources( requiredResources028 );


            var listItemTemplate011 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'WorkExecution.statusLookup_domainwostatus_listItemTemplate_Item1Desc1',
               'id' : 'awb92cb1d4',
            });

            var listtext031 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'WorkExecution.statusLookup_domainwostatus_Item1Desc1_description',
               'id' : 'aw8c250aab',
            });
            listItemTemplate011.addChild( listtext031 );



            var list011 = new List({
               'resource' : 'domainwostatus',
               'listItemTemplate' : listItemTemplate011,
               'artifactId' : 'WorkExecution.statusLookup_domainwostatus_list',
               'id' : 'awca564814',
            });
            lookup001.addChild( list011 );


            var returnAttributes001 = new ReturnAttributes({
               'artifactId' : 'WorkExecution.statusLookup_returnAttributes',
               'id' : 'awccce0559',
            });
            lookup001.addChild( returnAttributes001 );


            var returnAttribute001 = new ReturnAttribute({
               'targetAttribute' : 'status',
               'artifactId' : 'WorkExecution.statusLookup_value_status',
               'id' : 'awe22b8428',
               'sourceAttribute' : 'value',
            });
            returnAttributes001.addChild( returnAttribute001 );


            var returnAttribute002 = new ReturnAttribute({
               'targetAttribute' : 'statusdesc',
               'artifactId' : 'WorkExecution.statusLookup_description_statusdesc',
               'id' : 'awa120ff9e',
               'sourceAttribute' : 'description',
            });
            returnAttributes001.addChild( returnAttribute002 );


            var lookup002 = new Lookup({
               'filterMethod' : 'filterTaskStatus',
               'resource' : 'domainwostatus',
               'filterClass' : 'custom.handlers.MSStatusChangeHandler',
               'id' : 'WorkExecution.taskStatusLookup',
               'label' : MessageService.createStaticMessage('Task Status'),
            });
            ui001.addChild( lookup002 );

            var requiredResources029 = {
               'domainwostatus' : {
                  'artifactId' : 'WorkExecution.taskStatusLookup_domainwostatus',
                  'id' : 'aw6d2288d4',
               },
               'workOrder' : {
                  'artifactId' : 'WorkExecution.taskStatusLookup_workOrder',
                  'id' : 'aw837b5577',
                  'related' : {
                     'actuallaborlist' : {
                        'artifactId' : 'WorkExecution.taskStatusLookup_workOrder_actuallaborlist',
                        'id' : 'awbf21ebdb',
                     },
                     'tasklist' : {
                        'artifactId' : 'WorkExecution.taskStatusLookup_workOrder_tasklist',
                        'id' : 'awb7aeed1c',
                     },
                  },
               },
            };
            lookup002.addRequiredResources( requiredResources029 );


            var listItemTemplate012 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'WorkExecution.taskStatusLookup_domainwostatus_listItemTemplate_Item1Desc1',
               'id' : 'awff4de7d5',
            });

            var listtext032 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'WorkExecution.taskStatusLookup_domainwostatus_Item1Desc1_description',
               'id' : 'aw91b8b6c4',
            });
            listItemTemplate012.addChild( listtext032 );



            var list012 = new List({
               'resource' : 'domainwostatus',
               'listItemTemplate' : listItemTemplate012,
               'artifactId' : 'WorkExecution.taskStatusLookup_domainwostatus_list',
               'id' : 'awa6ef482a',
            });
            lookup002.addChild( list012 );


            var returnAttributes002 = new ReturnAttributes({
               'artifactId' : 'WorkExecution.taskStatusLookup_returnAttributes',
               'id' : 'awa1d04374',
            });
            lookup002.addChild( returnAttributes002 );


            var returnAttribute003 = new ReturnAttribute({
               'targetAttribute' : 'status',
               'artifactId' : 'WorkExecution.taskStatusLookup_value_status',
               'id' : 'aw35cdd62b',
               'sourceAttribute' : 'value',
            });
            returnAttributes002.addChild( returnAttribute003 );


            var returnAttribute004 = new ReturnAttribute({
               'targetAttribute' : 'statusdesc',
               'artifactId' : 'WorkExecution.taskStatusLookup_description_statusdesc',
               'id' : 'aw3d683c40',
               'sourceAttribute' : 'description',
            });
            returnAttributes002.addChild( returnAttribute004 );


            var lookup003 = new Lookup({
               'filterMethod' : 'filterAssetForLookup',
               'resource' : 'additionalasset',
               'filterClass' : 'application.handlers.WODetailHandler',
               'id' : 'WorkExecution.AssetLookup',
               'label' : MessageService.createStaticMessage('Select Asset'),
            });
            ui001.addChild( lookup003 );

            var requiredResources030 = {
               'additionalasset' : {
                  'artifactId' : 'WorkExecution.AssetLookup_additionalasset',
                  'id' : 'aw64aa1ffe',
               },
               'workOrder' : {
                  'artifactId' : 'WorkExecution.AssetLookup_workOrder',
                  'id' : 'awd24da751',
               },
            };
            lookup003.addRequiredResources( requiredResources030 );


            var searchAttributes001 = new SearchAttributes({
               'artifactId' : 'WorkExecution.AssetLookup_additionalasset_searchAttributes',
               'id' : 'awe26d4e09',
            });

            var searchAttribute001 = new SearchAttribute({
               'name' : 'assetnum',
               'artifactId' : 'WorkExecution.AssetLookup_additionalasset_searchAttribute_assetnum',
               'id' : 'aw36189f9c',
            });
            searchAttributes001.addChild( searchAttribute001 );


            var searchAttribute002 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'WorkExecution.AssetLookup_additionalasset_searchAttribute_description',
               'id' : 'awe7389b26',
            });
            searchAttributes001.addChild( searchAttribute002 );


            var searchAttribute003 = new SearchAttribute({
               'name' : 'location',
               'artifactId' : 'WorkExecution.AssetLookup_additionalasset_searchAttribute_location',
               'id' : 'awd75e6548',
            });
            searchAttributes001.addChild( searchAttribute003 );


            var searchAttribute004 = new SearchAttribute({
               'name' : 'locationdesc',
               'artifactId' : 'WorkExecution.AssetLookup_additionalasset_searchAttribute_locationdesc',
               'id' : 'aw2786e2e0',
            });
            searchAttributes001.addChild( searchAttribute004 );



            var listItemTemplate013 = new ListItemTemplate({
               'layout' : 'Item2Desc2',
               'artifactId' : 'WorkExecution.AssetLookup_additionalasset_listItemTemplate_Item2Desc2',
               'id' : 'aw44502e09',
            });

            var listtext033 = new ListText({
               'resourceAttribute' : 'assetnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.AssetLookup_additionalasset_Item2Desc2_assetnum',
               'id' : 'awe2f1623e',
            });
            listItemTemplate013.addChild( listtext033 );


            var listtext034 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'WorkExecution.AssetLookup_additionalasset_Item2Desc2_description',
               'id' : 'aw4500d7d0',
            });
            listItemTemplate013.addChild( listtext034 );


            var listtext035 = new ListText({
               'resourceAttribute' : 'location',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.AssetLookup_additionalasset_Item2Desc2_location',
               'id' : 'aw3b798ea',
            });
            listItemTemplate013.addChild( listtext035 );


            var listtext036 = new ListText({
               'resourceAttribute' : 'locationdesc',
               'layoutInsertAt' : 'desc2',
               'artifactId' : 'WorkExecution.AssetLookup_additionalasset_Item2Desc2_locationdesc',
               'id' : 'aw73fa8d85',
            });
            listItemTemplate013.addChild( listtext036 );



            var list013 = new List({
               'resource' : 'additionalasset',
               'listItemTemplate' : listItemTemplate013,
               'artifactId' : 'WorkExecution.AssetLookup_additionalasset_list',
               'id' : 'aw33ed57e3',
               'searchAttributes' : searchAttributes001,
            });
            lookup003.addChild( list013 );


            var returnAttributes003 = new ReturnAttributes({
               'artifactId' : 'WorkExecution.AssetLookup_returnAttributes',
               'id' : 'aw837d221',
            });
            lookup003.addChild( returnAttributes003 );


            var returnAttribute005 = new ReturnAttribute({
               'targetAttribute' : 'asset',
               'artifactId' : 'WorkExecution.AssetLookup_assetnum_asset',
               'id' : 'aw87198a97',
               'sourceAttribute' : 'assetnum',
            });
            returnAttributes003.addChild( returnAttribute005 );


            var returnAttribute006 = new ReturnAttribute({
               'targetAttribute' : 'asset_number',
               'artifactId' : 'WorkExecution.AssetLookup_assetnum_asset_number',
               'id' : 'awe799fcaa',
               'sourceAttribute' : 'assetnum',
            });
            returnAttributes003.addChild( returnAttribute006 );


            var returnAttribute007 = new ReturnAttribute({
               'targetAttribute' : 'assetdesc',
               'artifactId' : 'WorkExecution.AssetLookup_description_assetdesc',
               'id' : 'awd9df56fa',
               'sourceAttribute' : 'description',
            });
            returnAttributes003.addChild( returnAttribute007 );


            var lookup004 = new Lookup({
               'filterMethod' : 'filterWorktypeForLookup',
               'resource' : 'additionalworktype',
               'filterClass' : 'application.handlers.WODetailHandler',
               'id' : 'WorkExecution.WorkTypeLookup',
               'label' : MessageService.createStaticMessage('Select Work Type'),
            });
            ui001.addChild( lookup004 );

            var requiredResources031 = {
               'additionalworktype' : {
                  'artifactId' : 'WorkExecution.WorkTypeLookup_additionalworktype',
                  'id' : 'awfb08bd56',
               },
               'domainwoclass' : {
                  'artifactId' : 'WorkExecution.WorkTypeLookup_domainwoclass',
                  'id' : 'aw991a4810',
               },
            };
            lookup004.addRequiredResources( requiredResources031 );


            var searchAttributes002 = new SearchAttributes({
               'artifactId' : 'WorkExecution.WorkTypeLookup_additionalworktype_searchAttributes',
               'id' : 'aw81a153a3',
            });

            var searchAttribute005 = new SearchAttribute({
               'name' : 'worktype',
               'artifactId' : 'WorkExecution.WorkTypeLookup_additionalworktype_searchAttribute_worktype',
               'id' : 'awb72720d4',
            });
            searchAttributes002.addChild( searchAttribute005 );


            var searchAttribute006 = new SearchAttribute({
               'name' : 'wtypedesc',
               'artifactId' : 'WorkExecution.WorkTypeLookup_additionalworktype_searchAttribute_wtypedesc',
               'id' : 'aw34f18061',
            });
            searchAttributes002.addChild( searchAttribute006 );



            var listItemTemplate014 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'WorkExecution.WorkTypeLookup_additionalworktype_listItemTemplate_Item1Desc1',
               'id' : 'aw9ad8b28d',
            });

            var listtext037 = new ListText({
               'resourceAttribute' : 'worktype',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.WorkTypeLookup_additionalworktype_Item1Desc1_worktype',
               'id' : 'awa5e9e346',
            });
            listItemTemplate014.addChild( listtext037 );


            var listtext038 = new ListText({
               'resourceAttribute' : 'wtypedesc',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'WorkExecution.WorkTypeLookup_additionalworktype_Item1Desc1_wtypedesc',
               'id' : 'aw2ae2bcca',
            });
            listItemTemplate014.addChild( listtext038 );



            var list014 = new List({
               'resource' : 'additionalworktype',
               'listItemTemplate' : listItemTemplate014,
               'artifactId' : 'WorkExecution.WorkTypeLookup_additionalworktype_list',
               'id' : 'awb8fd4de1',
               'searchAttributes' : searchAttributes002,
            });
            lookup004.addChild( list014 );


            var lookup005 = new Lookup({
               'resource' : 'appDocType',
               'id' : 'WorkExecution.appDocTypeLookup',
               'label' : MessageService.createStaticMessage('Select Value'),
            });
            ui001.addChild( lookup005 );

            var requiredResources032 = {
               'appDocType' : {
                  'artifactId' : 'WorkExecution.appDocTypeLookup_appDocType',
                  'id' : 'aw8ca30e01',
               },
            };
            lookup005.addRequiredResources( requiredResources032 );


            var listItemTemplate015 = new ListItemTemplate({
               'artifactId' : 'WorkExecution.appDocTypeLookup_appDocType_listItemTemplate',
               'id' : 'awa86cf2be',
            });

            var listtext039 = new ListText({
               'resourceAttribute' : 'doctype',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'WorkExecution.appDocTypeLookup_appDocType_doctype',
               'id' : 'aw6b7c2bc2',
            });
            listItemTemplate015.addChild( listtext039 );



            var list015 = new List({
               'resource' : 'appDocType',
               'listItemTemplate' : listItemTemplate015,
               'artifactId' : 'WorkExecution.appDocTypeLookup_appDocType_list',
               'id' : 'aw885ae2fe',
            });
            lookup005.addChild( list015 );


            var returnAttributes004 = new ReturnAttributes({
               'artifactId' : 'WorkExecution.appDocTypeLookup_returnAttributes',
               'id' : 'aw54587ddc',
            });
            lookup005.addChild( returnAttributes004 );


            var returnAttribute008 = new ReturnAttribute({
               'targetAttribute' : 'category',
               'artifactId' : 'WorkExecution.appDocTypeLookup_doctype_category',
               'id' : 'awb11d21b7',
               'sourceAttribute' : 'doctype',
            });
            returnAttributes004.addChild( returnAttribute008 );


            var lookup006 = new Lookup({
               'filterMethod' : 'filterMaxDomain',
               'resource' : 'maxdomain',
               'filterClass' : 'application.handlers.ClassificationFormHandler',
               'id' : 'Inspection.alnDomainLookup',
               'label' : MessageService.createStaticMessage('Select Value'),
            });
            ui001.addChild( lookup006 );



            var searchAttributes003 = new SearchAttributes({
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_searchAttributes',
               'id' : 'aw3516f4ad',
            });

            var searchAttribute007 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_searchAttribute_description',
               'id' : 'aw41666b11',
            });
            searchAttributes003.addChild( searchAttribute007 );



            var listItemTemplate016 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_alndomain_listItemTemplate_Item1Desc1',
               'id' : 'awc665d9a2',
            });

            var listtext040 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_Item1Desc1_value',
               'id' : 'awe68b3f5',
            });
            listItemTemplate016.addChild( listtext040 );


            var listtext041 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_Item1Desc1_description',
               'id' : 'awfe4e2119',
            });
            listItemTemplate016.addChild( listtext041 );



            var list016 = new List({
               'resource' : 'maxdomain',
               'listItemTemplate' : listItemTemplate016,
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_alndomain_list',
               'attribute' : 'alndomain',
               'id' : 'awe833663c',
               'searchAttributes' : searchAttributes003,
            });
            lookup006.addChild( list016 );


            var returnAttributes005 = new ReturnAttributes({
               'artifactId' : 'Inspection.alnDomainLookup_returnAttributes',
               'id' : 'awc897ecc7',
            });
            lookup006.addChild( returnAttributes005 );


            var returnAttribute009 = new ReturnAttribute({
               'targetAttribute' : 'alnvalue',
               'artifactId' : 'Inspection.alnDomainLookup_value_alnvalue',
               'id' : 'aw778667ba',
               'sourceAttribute' : 'value',
            });
            returnAttributes005.addChild( returnAttribute009 );


            var lookup007 = new Lookup({
               'filterMethod' : 'filterMaxDomain',
               'resource' : 'maxdomain',
               'filterClass' : 'application.handlers.ClassificationFormHandler',
               'id' : 'Inspection.NumericLookup',
               'label' : MessageService.createStaticMessage('Select Value'),
            });
            ui001.addChild( lookup007 );



            var searchAttributes004 = new SearchAttributes({
               'artifactId' : 'Inspection.NumericLookup_maxdomain_searchAttributes',
               'id' : 'aw1c6d186a',
            });

            var searchAttribute008 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'Inspection.NumericLookup_maxdomain_searchAttribute_description',
               'id' : 'aw70e59b68',
            });
            searchAttributes004.addChild( searchAttribute008 );



            var listItemTemplate017 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Inspection.NumericLookup_maxdomain_numericdomain_listItemTemplate_Item1Desc1',
               'id' : 'aw8c88751b',
            });

            var listtext042 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Inspection.NumericLookup_maxdomain_Item1Desc1_value',
               'id' : 'aw27135f32',
            });
            listItemTemplate017.addChild( listtext042 );


            var listtext043 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Inspection.NumericLookup_maxdomain_Item1Desc1_description',
               'id' : 'aw94257f39',
            });
            listItemTemplate017.addChild( listtext043 );



            var list017 = new List({
               'resource' : 'maxdomain',
               'listItemTemplate' : listItemTemplate017,
               'artifactId' : 'Inspection.NumericLookup_maxdomain_numericdomain_list',
               'attribute' : 'numericdomain',
               'id' : 'aw9e7e7b48',
               'searchAttributes' : searchAttributes004,
            });
            lookup007.addChild( list017 );


            var returnAttributes006 = new ReturnAttributes({
               'artifactId' : 'Inspection.NumericLookup_returnAttributes',
               'id' : 'aw721041bd',
            });
            lookup007.addChild( returnAttributes006 );


            var returnAttribute010 = new ReturnAttribute({
               'targetAttribute' : 'numvalue',
               'artifactId' : 'Inspection.NumericLookup_value_numvalue',
               'id' : 'aw29be0fd1',
               'sourceAttribute' : 'value',
            });
            returnAttributes006.addChild( returnAttribute010 );


            var lookup008 = new Lookup({
               'enableFeatureByProperty' : 'calibration.enabled',
               'resource' : 'plusccdssetaction',
               'id' : 'WorkExecution.SetPointActionLookup',
               'label' : MessageService.createStaticMessage('Select Value'),
            });
            ui001.addChild( lookup008 );



            var listItemTemplate018 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'WorkExecution.SetPointActionLookup_listItemTemplate_Item1Desc1',
               'id' : 'awc3de90bb',
            });

            var listtext044 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.SetPointActionLookup_Item1Desc1_value',
               'id' : 'aw8b631a0c',
            });
            listItemTemplate018.addChild( listtext044 );


            var listtext045 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'WorkExecution.SetPointActionLookup_Item1Desc1_description',
               'id' : 'aw811bca45',
            });
            listItemTemplate018.addChild( listtext045 );



            var list018 = new List({
               'resource' : 'plusccdssetaction',
               'listItemTemplate' : listItemTemplate018,
               'artifactId' : 'WorkExecution.SetPointActionLookup_list',
               'id' : 'awc1321a3f',
            });
            lookup008.addChild( list018 );


            var returnAttributes007 = new ReturnAttributes({
               'artifactId' : 'WorkExecution.SetPointActionLookup_returnAttributes',
               'id' : 'awfe1ff34c',
            });
            lookup008.addChild( returnAttributes007 );


            var returnAttribute011 = new ReturnAttribute({
               'targetAttribute' : 'setpointaction',
               'artifactId' : 'WorkExecution.SetPointActionLookup_value_alnvalue',
               'id' : 'aw9c4327e0',
               'sourceAttribute' : 'value',
            });
            returnAttributes007.addChild( returnAttribute011 );


            var lookup009 = new Lookup({
               'resource' : 'sketchSettingsLengthUnitResource',
               'id' : 'SketchTool.lengthUnitLookup',
               'label' : MessageService.createStaticMessage('Length Unit'),
            });
            ui001.addChild( lookup009 );

            var requiredResources033 = {
               'sketchSettingsLengthUnitResource' : {
                  'artifactId' : 'SketchTool.lengthUnitLookup_sketchSettingsResource',
                  'id' : 'aw6269884a',
               },
            };
            lookup009.addRequiredResources( requiredResources033 );


            var listItemTemplate019 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'ketchSettingsResource_lengthunit_listItemTemplate_Item1Desc1',
               'id' : 'aw186e5b09',
            });

            var listtext046 = new ListText({
               'resourceAttribute' : 'lengthUnit',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'ketchSettingsResource_lengthunit_listItemTemplate_Item1Desc1_value',
               'id' : 'aw364f6942',
            });
            listItemTemplate019.addChild( listtext046 );


            var listtext047 = new ListText({
               'resourceAttribute' : 'lengthUnitDescription',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'ketchSettingsResource_lengthunit_listItemTemplate_Item1Desc1_description',
               'id' : 'aw2d594683',
            });
            listItemTemplate019.addChild( listtext047 );



            var list019 = new List({
               'resource' : 'sketchSettingsLengthUnitResource',
               'listItemTemplate' : listItemTemplate019,
               'artifactId' : 'sketchSettingsResource_lengthunit_list',
               'id' : 'awb3e9e446',
            });
            lookup009.addChild( list019 );


            var returnAttributes008 = new ReturnAttributes({
               'artifactId' : 'SketchTool.lengthUnitLookup_returnAttributes',
               'id' : 'aw5fa04ee8',
            });
            lookup009.addChild( returnAttributes008 );


            var returnAttribute012 = new ReturnAttribute({
               'targetAttribute' : 'measureLengthUnit',
               'artifactId' : 'SketchTool.lengthUnitLookup_value_lenghtUnit',
               'id' : 'awbb497791',
               'sourceAttribute' : 'lengthUnit',
            });
            returnAttributes008.addChild( returnAttribute012 );


            var lookup010 = new Lookup({
               'resource' : 'sketchSettingsAreaUnitResource',
               'id' : 'SketchTool.areaUnitLookup',
               'label' : MessageService.createStaticMessage('Length Unit'),
            });
            ui001.addChild( lookup010 );

            var requiredResources034 = {
               'sketchSettingsAreaUnitResource' : {
                  'artifactId' : 'SketchTool.areaUnitLookup_sketchSettingsResource',
                  'id' : 'awbee96c98',
               },
            };
            lookup010.addRequiredResources( requiredResources034 );


            var listItemTemplate020 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'sketchSettingsResource_areahunit_listItemTemplate_Item1Desc1',
               'id' : 'aw4a3b1925',
            });

            var listtext048 = new ListText({
               'resourceAttribute' : 'areaUnit',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'sketchSettingsResource_areahunit_listItemTemplate_Item1Desc1_value',
               'id' : 'awf7f9a268',
            });
            listItemTemplate020.addChild( listtext048 );


            var listtext049 = new ListText({
               'resourceAttribute' : 'areaUnitDescription',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'sketchSettingsResource_areahunit_listItemTemplate_Item1Desc1_description',
               'id' : 'awbddf5428',
            });
            listItemTemplate020.addChild( listtext049 );



            var list020 = new List({
               'resource' : 'sketchSettingsAreaUnitResource',
               'listItemTemplate' : listItemTemplate020,
               'artifactId' : 'sketchSettingsResource_areaunit_list',
               'id' : 'aw69d7817e',
            });
            lookup010.addChild( list020 );


            var returnAttributes009 = new ReturnAttributes({
               'artifactId' : 'SketchTool.areaUnitLookup_returnAttributes',
               'id' : 'aw2a35a135',
            });
            lookup010.addChild( returnAttributes009 );


            var returnAttribute013 = new ReturnAttribute({
               'targetAttribute' : 'measureAreaUnit',
               'artifactId' : 'SketchTool.areaUnitLookup_value_lenghtUnit',
               'id' : 'awcedc984c',
               'sourceAttribute' : 'areaUnit',
            });
            returnAttributes009.addChild( returnAttribute013 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AttachmentInfoView', false);
               trackTimer.startTracking();
            }

            var view029 = new View({
               'resource' : 'PlatformAttachmentInfoResource',
               'id' : 'Platform.AttachmentInfoView',
               'label' : MessageService.createStaticMessage('Attachment Details'),
            });
            ui001.addChild( view029 );

            var requiredResources035 = {
               'PlatformAttachmentInfoResource' : {
                  'reload' : true,
                  'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource',
                  'id' : 'awedbd920b',
               },
            };
            view029.addRequiredResources( requiredResources035 );

            var container078 = new Container({
               'resource' : 'PlatformAttachmentInfoResource',
               'artifactId' : 'Platform.AttachmentInfoView_container_0',
               'id' : 'aw22b80d5f',
            });
            view029.addChild( container078 );


            var group038 = new Group({
               'artifactId' : 'Platform.AttachmentInfoView_group_0',
               'id' : 'aw80e7b381',
            });
            container078.addChild( group038 );


            var groupitem089 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_0',
               'id' : 'aw15768e0',
            });
            group038.addChild( groupitem089 );


            var text138 = new Text({
               'resourceAttribute' : 'name',
               'editable' : true,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_0_name_Name',
               'id' : 'awddf675f4',
               'label' : MessageService.createStaticMessage('Name'),
               'required' : true,
            });
            groupitem089.addChild( text138 );


            var groupitem090 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_1',
               'id' : 'aw76505876',
            });
            group038.addChild( groupitem090 );


            var text139 = new Text({
               'resourceAttribute' : 'description',
               'editable' : true,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_1_description_Description',
               'id' : 'awc2735258',
               'label' : MessageService.createStaticMessage('Description'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem090.addChild( text139 );


            var groupitem091 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2',
               'id' : 'awef5909cc',
            });
            group038.addChild( groupitem091 );


            var text140 = new Text({
               'resourceAttribute' : 'category',
               'lookup' : 'PlatformAttachmentIn.CategoryLookup',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2_category_Folder',
               'id' : 'aw3a5ae064',
               'label' : MessageService.createStaticMessage('Folder'),
               'lookupAttribute' : 'folderName',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem091.addChild( text140 );

            var eventHandlers118 = [
               {
                     'method' : 'renderCategory',
                     'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2_category_Folder_eventHandlers_render_renderCategory',
                     'id' : 'awa205ff23',
                     'event' : 'render',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            text140.eventHandlers = eventHandlers118;

            var groupitem092 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_3',
               'id' : 'aw985e395a',
            });
            group038.addChild( groupitem092 );


            var text141 = new Text({
               'resourceAttribute' : 'fileType',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_3_fileType_FileType',
               'id' : 'awf0b55f9',
               'label' : MessageService.createStaticMessage('File Type'),
            });
            groupitem092.addChild( text141 );


            var groupitem093 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_4',
               'id' : 'aw63aacf9',
            });
            group038.addChild( groupitem093 );


            var text142 = new Text({
               'resourceAttribute' : 'fileSize',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_4_fileSize_FileSizeKB',
               'id' : 'awa8aac05f',
               'label' : MessageService.createStaticMessage('File Size (KB)'),
            });
            groupitem093.addChild( text142 );


            var footer011 = new Footer({
               'artifactId' : 'Platform.AttachmentInfoView_footer',
               'id' : 'awad3a6a43',
            });
            view029.addChild( footer011 );


            var button082 = new Button({
               'artifactId' : 'Platform.AttachmentInfoView_Cancel_button',
               'id' : 'aw61842429',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers119 = [
               {
                     'method' : 'handleBackButtonAttachmentDetailsView',
                     'artifactId' : 'Platform.AttachmentInfoView_Cancel_button_eventHandlers_click_handleBackButtonAttachmentDetailsView',
                     'id' : 'aw2e660b65',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button082.eventHandlers = eventHandlers119;
            footer011.addChild( button082 );


            var button083 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.AttachmentInfoView_Save_button',
               'id' : 'aw8904293b',
               'label' : MessageService.createStaticMessage('Save'),
            });
            var eventHandlers120 = [
               {
                     'method' : 'commitAttachmentEntry',
                     'artifactId' : 'Platform.AttachmentInfoView_Save_button_eventHandlers_click_commitAttachmentEntry',
                     'id' : 'awbff90b7f',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button083.eventHandlers = eventHandlers120;
            footer011.addChild( button083 );

            var eventHandlers121 = [
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
            view029.eventHandlers = eventHandlers121;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AttachmentFileDialog', false);
               trackTimer.startTracking();
            }

            var view030 = new View({
               'id' : 'Platform.AttachmentFileDialog',
            });
            ui001.addChild( view030 );


            var footer012 = new Footer({
               'artifactId' : 'Platform.AttachmentFileDialog_footer',
               'id' : 'awb513dc05',
            });
            view030.addChild( footer012 );


            var button084 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.UnsavedSketch_doNotAllow_button',
               'id' : 'aw150d1bc',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers122 = [
               {
                     'method' : 'closeFileDialog',
                     'artifactId' : 'Platform.AttachmentFileDialog_closeDialog',
                     'id' : 'awc0d2f7fd',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button084.eventHandlers = eventHandlers122;
            footer012.addChild( button084 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var lookup011 = new Lookup({
               'resource' : 'PlatformAttachmentCategoryResource',
               'id' : 'PlatformAttachmentIn.CategoryLookup',
               'label' : MessageService.createStaticMessage('Select Folder'),
            });
            ui001.addChild( lookup011 );

            var requiredResources036 = {
               'PlatformAttachmentCategoryResource' : {
                  'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource',
                  'id' : 'aw18cc3542',
               },
            };
            lookup011.addRequiredResources( requiredResources036 );


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



            var listItemTemplate021 = new ListItemTemplate({
               'layout' : 'Item2Desc2',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_listItemTemplate_Item2Desc2',
               'id' : 'aweb3659e3',
            });

            var listtext050 = new ListText({
               'resourceAttribute' : 'folderName',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_Item2Desc2_folderName',
               'id' : 'aw48fc196b',
            });
            listItemTemplate021.addChild( listtext050 );



            var list021 = new List({
               'resource' : 'PlatformAttachmentCategoryResource',
               'listItemTemplate' : listItemTemplate021,
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_list',
               'id' : 'awe6857cc4',
               'searchAttributes' : searchAttributes005,
            });
            lookup011.addChild( list021 );


            var returnAttributes010 = new ReturnAttributes({
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_returnAttributes',
               'id' : 'aw4860e6b5',
            });
            lookup011.addChild( returnAttributes010 );


            var returnAttribute014 = new ReturnAttribute({
               'targetAttribute' : 'category',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_folderName_category',
               'id' : 'awb2f5d728',
               'sourceAttribute' : 'folderName',
            });
            returnAttributes010.addChild( returnAttribute014 );


            var actions007 = new Actions({
               'artifactId' : 'actions',
               'id' : 'aw548f1ef',
            });
            ui001.addChild( actions007 );


            var action008 = new Action({
               'overflow' : true,
               'artifactId' : 'ResetWorkList_action',
               'id' : 'aw956f5d3b',
               'label' : MessageService.createStaticMessage('Reset Work List'),
            });
            actions007.addChild( action008 );

            var eventHandlers123 = [
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
            action008.eventHandlers = eventHandlers123;

            var action009 = new Action({
               'overflow' : true,
               'artifactId' : 'PseudoOffline_goOffline',
               'id' : 'aw90309912',
               'label' : MessageService.createStaticMessage('Enable Offline Mode'),
            });
            actions007.addChild( action009 );

            var eventHandlers124 = [
               {
                     'method' : 'toggleOfflineMode',
                     'artifactId' : 'PseudoOffline_enableoffline_action_eventHandlers_click',
                     'id' : 'aw33d3b70c',
                     'event' : 'click',
                     'class' : 'platform.handlers.PseudoOfflineModeHandler',
               }
            ];
            action009.eventHandlers = eventHandlers124;

            var action010 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.Settings',
               'artifactId' : 'Settings_action',
               'id' : 'awc0b1927e',
               'label' : MessageService.createStaticMessage('Settings'),
            });
            actions007.addChild( action010 );


            var action011 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.HelpAbout',
               'artifactId' : 'About_action',
               'id' : 'aw49fae06b',
               'label' : MessageService.createStaticMessage('About'),
            });
            actions007.addChild( action011 );


            var action012 = new Action({
               'overflow' : true,
               'artifactId' : 'acesso_manuais',
               'id' : 'awd1cf2641',
               'label' : MessageService.createStaticMessage('Manuais'),
            });
            actions007.addChild( action012 );

            var eventHandlers125 = [
               {
                     'method' : 'acesso_manuaisClicked',
                     'artifactId' : 'acesso_manuais_eventHandlers_click',
                     'id' : 'awb790cba8',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSLoginHandler',
               }
            ];
            action012.eventHandlers = eventHandlers125;

            var action013 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.LogOutPrompt',
               'artifactId' : 'LogOut_action',
               'id' : 'awd566efa2',
               'label' : MessageService.createStaticMessage('Log Out'),
            });
            actions007.addChild( action013 );


            var action014 = new Action({
               'artifactId' : 'action',
               'id' : 'aw47cc8c92',
            });
            actions007.addChild( action014 );

            var eventHandlers126 = [
               {
                     'artifactId' : 'action_eventHandlers_click',
                     'id' : 'aw871940b2',
                     'event' : 'click',
                     'class' : 'platform.handlers.CreateQueryBaseHandler',
               }
            ];
            action014.eventHandlers = eventHandlers126;

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

            var eventHandlers127 = [
               {
                     'method' : 'confirmClearChanges',
                     'artifactId' : 'UndoChanges_action_eventHandlers_click_confirmClearChanges',
                     'id' : 'awcf857f5c',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action015.eventHandlers = eventHandlers127;

            var action016 = new Action({
               'artifactId' : 'ResendChanges_action',
               'id' : 'awccf9e70e',
               'label' : MessageService.createStaticMessage('Resend Changes'),
            });
            erroractions001.addChild( action016 );

            var eventHandlers128 = [
               {
                     'method' : 'retryRecordChanges',
                     'artifactId' : 'ResendChanges_action_eventHandlers_click_retryRecordChanges',
                     'id' : 'aw543ac47e',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action016.eventHandlers = eventHandlers128;
            var eventHandlers129 = [
               {
                     'method' : 'none',
                     'artifactId' : 'eventHandlers_none_none',
                     'id' : 'aw1e2e7ded',
                     'event' : 'none',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            ui001.eventHandlers = eventHandlers129;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.emptyview', false);
               trackTimer.startTracking();
            }

            var view031 = new View({
               'showHeader' : false,
               'id' : 'Platform.emptyview',
               'showFooter' : false,
            });
            ui001.addChild( view031 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Notifications', false);
               trackTimer.startTracking();
            }

            var view032 = new View({
               'id' : 'Platform.Notifications',
               'label' : MessageService.createStaticMessage('My Notifications'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view032 );

            var requiredResources037 = {
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
            view032.addRequiredResources( requiredResources037 );


            var listItemTemplate022 = new ListItemTemplate({
               'layout' : 'NotificationList',
               'artifactId' : 'Platform.Notifications_listItemTemplate',
               'id' : 'aw718eb447',
            });

            var listtext051 = new ListText({
               'resourceAttribute' : 'uiDate',
               'layoutInsertAt' : 'date1',
               'artifactId' : 'Platform.Notifications_uiDate',
               'id' : 'aw56b07378',
            });
            listItemTemplate022.addChild( listtext051 );


            var listtext052 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Platform.Notifications_itemnum',
               'id' : 'aw4dbbd111',
            });
            listItemTemplate022.addChild( listtext052 );


            var listtext053 = new ListText({
               'resourceAttribute' : 'itemDesc',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Platform.Notifications_itemDesc',
               'id' : 'aw6bac97b9',
            });
            listItemTemplate022.addChild( listtext053 );

            var eventHandlers130 = [
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
            listItemTemplate022.eventHandlers = eventHandlers130;


            var list022 = new List({
               'resource' : 'osusernotification',
               'listItemTemplate' : listItemTemplate022,
               'artifactId' : 'Platform.Notifications_list',
               'id' : 'awb4916253',
               'label' : MessageService.createStaticMessage('List of notifications'),
            });
            view032.addChild( list022 );

            var eventHandlers131 = [
               {
                     'method' : 'renderMsgHistory',
                     'artifactId' : 'Platform.Notifications_eventHandlers_render_FromList',
                     'id' : 'awa8aedc90',
                     'event' : 'render',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            view032.eventHandlers = eventHandlers131;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog027 = new Dialog({
               'cssClass' : 'dialogDateTimeLookup',
               'resource' : 'PlatformDateLookupResource',
               'id' : 'Platform.DateTimeLookup',
               'label' : MessageService.createStaticMessage('Change Time or Date'),
            });
            ui001.addChild( dialog027 );

            var eventHandlers132 = [
               {
                     'method' : 'initLookup',
                     'artifactId' : 'Platform.DateTimeLookup_eventHandlers_show_initLookup',
                     'id' : 'aw576c44ec',
                     'event' : 'show',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            dialog027.eventHandlers = eventHandlers132;

            var container079 = new Container({
               'artifactId' : 'Platform.DateTimeLookup_container_0',
               'id' : 'aw3cdb37d7',
            });
            dialog027.addChild( container079 );


            var datetimepicker001 = new DateTimePicker({
               'artifactId' : 'Platform.DateTimeLookup_datetimepicker_0',
               'id' : 'aw7d2f0e0d',
            });
            container079.addChild( datetimepicker001 );


            var container080 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DateTimeLookup_container_1',
               'id' : 'aw4bdc0741',
            });
            dialog027.addChild( container080 );


            var button085 = new Button({
               'artifactId' : 'Platform.DateTimeLookup_Cancel_button',
               'id' : 'aw54d2f1bb',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers133 = [
               {
                     'method' : 'Cancel',
                     'artifactId' : 'Platform.DateTimeLookup_Cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw5ced0c47',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button085.eventHandlers = eventHandlers133;
            container080.addChild( button085 );


            var button086 = new Button({
               'artifactId' : 'Platform.DateTimeLookup_Clear_button',
               'id' : 'awfd1238bd',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers134 = [
               {
                     'method' : 'Clear',
                     'artifactId' : 'Platform.DateTimeLookup_Clear_button_eventHandlers_click_Clear',
                     'id' : 'aw47510f1f',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button086.eventHandlers = eventHandlers134;
            container080.addChild( button086 );


            var button087 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DateTimeLookup_OK_button',
               'id' : 'awb1e0d280',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers135 = [
               {
                     'method' : 'SetSelection',
                     'artifactId' : 'Platform.DateTimeLookup_OK_button_eventHandlers_click_SetSelection',
                     'id' : 'aw6c08b2ff',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button087.eventHandlers = eventHandlers135;
            container080.addChild( button087 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.HelpAbout', false);
               trackTimer.startTracking();
            }

            var view033 = new View({
               'resource' : 'PlatformLoginResource',
               'id' : 'Platform.HelpAbout',
               'label' : MessageService.createStaticMessage('About'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view033 );


            var container081 = new Container({
               'cssClass' : 'platformHelpAboutContainer',
               'artifactId' : 'Platform.HelpAbout_container_0',
               'id' : 'awf8c0259e',
            });
            view033.addChild( container081 );


            var image005 = new Image({
               'image' : 'ibmLogoDark.svg',
               'artifactId' : 'Platform.HelpAbout_image_0',
               'id' : 'awfebf608a',
            });
            container081.addChild( image005 );


            var text143 = new Text({
               'resourceAttribute' : 'appName',
               'cssClass' : 'productName bold textappearance-large',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_appName',
               'id' : 'aw27632fa8',
            });
            container081.addChild( text143 );


            var text144 = new Text({
               'cssClass' : 'version',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_Version7.5.2.1',
               'id' : 'awf060501a',
               'value' : MessageService.createStaticMessage('Version 7.6.4.0'),
            });
            container081.addChild( text144 );


            var text145 = new Text({
               'cssClass' : 'build',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_Buildnumberbuild',
               'id' : 'awd289f042',
               'value' : MessageService.createStaticMessage('Build number @build@'),
            });
            container081.addChild( text145 );


            var text146 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_LicensedMaterials-',
               'id' : 'aw31046f88',
               'value' : MessageService.createStaticMessage('Licensed Materials - Property of IBM. \u00A9IBM Corp. 2020. IBM, the IBM logo, and ibm.com are trademarks of IBM Corp., registered in many jurisdictions worldwide. Other product and service names might be trademarks of IBM or other companies. A current list of IBM trademarks is available on the Web at www.ibm.com\/legal\/copytrade.shtml. This Program is licensed under the terms of the license agreement for the Program. Please read this agreement carefully before using the Program. By using the Program, you agree to these terms.'),
            });
            container081.addChild( text146 );


            var group039 = new Group({
               'debugOnly' : 'true',
               'artifactId' : 'Platform.Settings_group_2',
               'id' : 'awc5ac5572',
            });
            container081.addChild( group039 );


            var groupitem094 = new GroupItem({
               'layout' : 'ScreenInfo',
               'cssClass' : 'screenInfo',
               'artifactId' : 'Platform.Settings_screenInfo_item',
               'id' : 'aw5de3d82',
            });
            group039.addChild( groupitem094 );


            var text147 = new Text({
               'cssClass' : 'textappearance-large',
               'layoutInsertAt' : 'title',
               'artifactId' : 'Platform.Settings_screenInfo_title',
               'id' : 'awd295621c',
               'value' : MessageService.createStaticMessage('Screen Information'),
            });
            groupitem094.addChild( text147 );


            var text148 = new Text({
               'resourceAttribute' : 'ppi',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pixels',
               'artifactId' : 'Platform.Settings_screenInfo_ppi_text',
               'id' : 'aw4219624',
               'label' : MessageService.createStaticMessage('PPI'),
            });
            groupitem094.addChild( text148 );


            var text149 = new Text({
               'resourceAttribute' : 'width',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'width',
               'artifactId' : 'Platform.Settings_screenInfo_width_text',
               'id' : 'aw6564040e',
               'label' : MessageService.createStaticMessage('Width'),
            });
            groupitem094.addChild( text149 );


            var text150 = new Text({
               'resourceAttribute' : 'height',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'height',
               'artifactId' : 'Platform.Settings_screenInfo_height_text',
               'id' : 'awcd6ab682',
               'label' : MessageService.createStaticMessage('Height'),
            });
            groupitem094.addChild( text150 );


            var text151 = new Text({
               'resourceAttribute' : 'layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'size',
               'artifactId' : 'Platform.Settings_screenInfo_layout_text',
               'id' : 'awd74c1b0',
               'label' : MessageService.createStaticMessage('Layout Size'),
            });
            groupitem094.addChild( text151 );


            var text152 = new Text({
               'resourceAttribute' : 'orientation',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'orientation',
               'artifactId' : 'Platform.Settings_screenInfo_orientation_text',
               'id' : 'aw22df9e6f',
               'label' : MessageService.createStaticMessage('Orientation'),
            });
            groupitem094.addChild( text152 );


            var text153 = new Text({
               'resourceAttribute' : 'density',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'density',
               'artifactId' : 'Platform.Settings_screenInfo_density_text',
               'id' : 'aw6b4b20e2',
               'label' : MessageService.createStaticMessage('Density'),
            });
            groupitem094.addChild( text153 );


            var text154 = new Text({
               'resourceAttribute' : 'pane0_layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pane0',
               'artifactId' : 'Platform.Settings_screenInfo_pane0',
               'id' : 'aw39d3d4a7',
               'label' : MessageService.createStaticMessage('Pane 1 Size'),
            });
            groupitem094.addChild( text154 );


            var text155 = new Text({
               'resourceAttribute' : 'pane1_layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pane1',
               'artifactId' : 'Platform.Settings_screenInfo_pane1',
               'id' : 'aw4ed4e431',
               'label' : MessageService.createStaticMessage('Pane 2 Size'),
            });
            groupitem094.addChild( text155 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Settings', false);
               trackTimer.startTracking();
            }

            var view034 = new View({
               'id' : 'Platform.Settings',
               'label' : MessageService.createStaticMessage('Settings'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view034 );

            var requiredResources038 = {
               'LastADDownload' : {
                  'artifactId' : 'Platform.Settings_LastADDownload',
                  'id' : 'aw879343e2',
               },
            };
            view034.addRequiredResources( requiredResources038 );

            var actions008 = new Actions({
               'artifactId' : 'Platform.Settings_actions',
               'id' : 'awb3f56d3b',
            });
            view034.addChild( actions008 );


            var action017 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.Settings_RefreshSystemData_action',
               'id' : 'awccb0ee65',
               'label' : MessageService.createStaticMessage('Refresh System Data'),
            });
            actions008.addChild( action017 );

            var eventHandlers136 = [
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
            action017.eventHandlers = eventHandlers136;

            var container082 = new Container({
               'resource' : 'LastADDownload',
               'artifactId' : 'Platform.Settings_container_0',
               'id' : 'aw74ff68b5',
            });
            view034.addChild( container082 );


            var group040 = new Group({
               'artifactId' : 'Platform.Settings_group_0',
               'id' : 'aw2ba2345e',
            });
            container082.addChild( group040 );


            var groupitem095 = new GroupItem({
               'transitionTo' : 'Platform.ChangePassword',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0',
               'id' : 'awd48342a3',
            });
            group040.addChild( groupitem095 );


            var text156 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0_ChangePassword',
               'id' : 'aw6c14924a',
               'value' : MessageService.createStaticMessage('Change Password'),
            });
            groupitem095.addChild( text156 );

            var eventHandlers137 = [
               {
                     'method' : 'enableChangePasswordFunction',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0_eventHandlers_render_enableChangePasswordFunction',
                     'id' : 'awa81f4a5',
                     'event' : 'render',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            groupitem095.eventHandlers = eventHandlers137;

            var groupitem096 = new GroupItem({
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0',
               'id' : 'aw82635ebb',
            });
            group040.addChild( groupitem096 );


            var text157 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_RefreshLookupData',
               'id' : 'awcddf2167',
               'value' : MessageService.createStaticMessage('Refresh Lookup Data'),
            });
            groupitem096.addChild( text157 );


            var text158 = new Text({
               'resourceAttribute' : 'downloadStatus',
               'editable' : false,
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_downloadStatus',
               'id' : 'aw8a1673e3',
            });
            groupitem096.addChild( text158 );

            var eventHandlers138 = [
               {
                     'method' : 'renderLastDownload',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_downloadStatus_eventHandlers_render_renderLastDownload',
                     'id' : 'aw72547fb7',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text158.eventHandlers = eventHandlers138;

            var text159 = new Text({
               'cssClass' : 'textappearance-small',
               'editable' : false,
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_Updatesthelookupd',
               'id' : 'aw38a24bec',
               'value' : MessageService.createStaticMessage('Updates the lookup data on your device. Lookup data includes objects, such as assets and locations, that can be added to records.'),
            });
            groupitem096.addChild( text159 );

            var eventHandlers139 = [
               {
                     'method' : 'refreshAdditionalData',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_eventHandlers_click_refreshAdditionalData',
                     'id' : 'aw93ad06fe',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            groupitem096.eventHandlers = eventHandlers139;

            var groupitem097 = new GroupItem({
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_3_Number_of_day_to_sync',
               'id' : 'aw97e66cd6',
            });
            group040.addChild( groupitem097 );


            var text160 = new Text({
               'resourceAttribute' : 'numberOfDaysToSync',
               'editable' : true,
               'artifactId' : 'Platform.Settings_LastADDownload_text_Number_of_day_to_sync',
               'id' : 'aw69a517e3',
               'label' : MessageService.createStaticMessage('How often changes need to be refresh in days:'),
            });
            groupitem097.addChild( text160 );

            var eventHandlers140 = [
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
            text160.eventHandlers = eventHandlers140;

            var groupitem098 = new GroupItem({
               'transitionTo' : 'Platform.AdvancedSettings',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.AdvancedSettings_0',
               'id' : 'aw741c4d60',
            });
            group040.addChild( groupitem098 );


            var text161 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.AdvancedSettings_0_AdvancedSettings',
               'id' : 'aw2d662633',
               'value' : MessageService.createStaticMessage('Advanced Settings'),
            });
            groupitem098.addChild( text161 );


            var group041 = new Group({
               'enableFeatureByProperty' : 'attachments.enabled',
               'artifactId' : 'Platform.Settings_group_1',
               'id' : 'aw5ca504c8',
            });
            container082.addChild( group041 );


            var groupitem099 = new GroupItem({
               'layout' : 'Item1Button1',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_1',
               'id' : 'awf5646e2d',
            });
            group041.addChild( groupitem099 );


            var text162 = new Text({
               'cssClass' : 'wrap-content',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_1_Downloadattachments',
               'id' : 'awd21c407a',
               'value' : MessageService.createStaticMessage('Download attachments with work list.'),
            });
            groupitem099.addChild( text162 );


            var checkbox002 = new CheckBox({
               'resourceAttribute' : 'downloadAttachments',
               'cssClass' : 'rightCheckBox',
               'editable' : true,
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Platform.Settings_downloadAttachments_checkbox',
               'id' : 'aw1a5b9aa2',
            });
            groupitem099.addChild( checkbox002 );

            var eventHandlers141 = [
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
            checkbox002.eventHandlers = eventHandlers141;

            var container083 = new Container({
               'artifactId' : 'ConnectionContainer',
               'id' : 'awef0b2658',
            });
            view034.addChild( container083 );


            var group042 = new Group({
               'artifactId' : 'Platform.Settings.ConnectionManagement.group',
               'id' : 'aw9ad5002d',
            });
            container083.addChild( group042 );


            var groupitem100 = new GroupItem({
               'layout' : 'ConnectionManagementLayout',
               'artifactId' : 'Platform.Settings.ConnectionManagement.groupItem1',
               'id' : 'aw81b0980b',
            });
            group042.addChild( groupitem100 );


            var text163 = new Text({
               'cssClass' : 'relatedRecords',
               'layoutInsertAt' : 'Title',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Title',
               'id' : 'aw1de21387',
               'value' : MessageService.createStaticMessage('Connection Behavior'),
            });
            groupitem100.addChild( text163 );


            var text164 = new Text({
               'cssClass' : 'wrap-content',
               'layoutInsertAt' : 'description',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Description',
               'id' : 'aw6b506a6f',
               'value' : MessageService.createStaticMessage('Specifies which network connections should enable the application to work online'),
            });
            groupitem100.addChild( text164 );


            var radiobutton001 = new RadioButton({
               'cssClass' : 'firstradiobutton',
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.AllConnections',
               'id' : 'awcb83aecb',
               'label' : MessageService.createStaticMessage('All Types'),
            });
            groupitem100.addChild( radiobutton001 );

            var eventHandlers142 = [
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
            radiobutton001.eventHandlers = eventHandlers142;

            var radiobutton002 = new RadioButton({
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button2',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.WiFi',
               'id' : 'aw42dec2bb',
               'label' : MessageService.createStaticMessage('Only WiFi'),
            });
            groupitem100.addChild( radiobutton002 );

            var eventHandlers143 = [
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
            radiobutton002.eventHandlers = eventHandlers143;

            var radiobutton003 = new RadioButton({
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button3',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.Cellular',
               'id' : 'aw7032481d',
               'label' : MessageService.createStaticMessage('Only Cellular'),
            });
            groupitem100.addChild( radiobutton003 );

            var eventHandlers144 = [
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
            radiobutton003.eventHandlers = eventHandlers144;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AdvancedSettings', false);
               trackTimer.startTracking();
            }

            var view035 = new View({
               'id' : 'Platform.AdvancedSettings',
               'label' : MessageService.createStaticMessage('Settings'),
            });
            ui001.addChild( view035 );


            var container084 = new Container({
               'artifactId' : 'Platform.AdvancedSettings_container_0',
               'id' : 'aw5c13274d',
            });
            view035.addChild( container084 );


            var group043 = new Group({
               'artifactId' : 'Platform.AdvancedSettings_group_0',
               'id' : 'awebdfb82c',
            });
            container084.addChild( group043 );


            var groupitem101 = new GroupItem({
               'transitionTo' : 'Platform.TimeTrackReport',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0',
               'id' : 'awba4384a8',
            });
            group043.addChild( groupitem101 );


            var text165 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0_TrackPerformanceDa',
               'id' : 'awc0a6dde7',
               'value' : MessageService.createStaticMessage('Track Performance Data'),
            });
            groupitem101.addChild( text165 );


            var text166 = new Text({
               'cssClass' : 'red-text',
               'editable' : false,
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0_Thisoptionusesmem',
               'id' : 'aw4367e95f',
               'value' : MessageService.createStaticMessage('This option uses memory and might slow the performance of your device. Disable performance tracking when you are done.'),
            });
            groupitem101.addChild( text166 );


            var groupitem102 = new GroupItem({
               'transitionTo' : 'Platform.LoggerReport',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0',
               'id' : 'aw10ca73e0',
            });
            group043.addChild( groupitem102 );


            var text167 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0_Logging',
               'id' : 'awffa3ff9c',
               'value' : MessageService.createStaticMessage('Logging'),
            });
            groupitem102.addChild( text167 );


            var text168 = new Text({
               'cssClass' : 'red-text',
               'editable' : false,
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0_Thisoptionusesmem',
               'id' : 'aw30da1efa',
               'value' : MessageService.createStaticMessage('This option uses memory and might slow the performance of your device. Disable logging when you are done.'),
            });
            groupitem102.addChild( text168 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.LoggerReport', false);
               trackTimer.startTracking();
            }

            var view036 = new View({
               'cssClass' : 'loggerReport',
               'scrollDir' : 'vh',
               'id' : 'Platform.LoggerReport',
               'label' : MessageService.createStaticMessage('Logging Data'),
            });
            ui001.addChild( view036 );


            var actions009 = new Actions({
               'artifactId' : 'Platform.LoggerReport_actions',
               'id' : 'aw5b090344',
            });
            view036.addChild( actions009 );


            var action018 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableErrorLogging_action',
               'id' : 'awc05e82b4',
               'label' : MessageService.createStaticMessage('Enable Error Logging'),
            });
            actions009.addChild( action018 );

            var eventHandlers145 = [
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
            action018.eventHandlers = eventHandlers145;

            var action019 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableInfoLogging_action',
               'id' : 'aw6d618335',
               'label' : MessageService.createStaticMessage('Enable Info Logging'),
            });
            actions009.addChild( action019 );

            var eventHandlers146 = [
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
            action019.eventHandlers = eventHandlers146;

            var action020 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableDebugLogging_action',
               'id' : 'awaa11689b',
               'label' : MessageService.createStaticMessage('Enable Debug Logging'),
            });
            actions009.addChild( action020 );

            var eventHandlers147 = [
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
            action020.eventHandlers = eventHandlers147;

            var action021 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.TransLoggerReport',
               'artifactId' : 'Platform.LoggerReport_ViewTransactionLog_action',
               'id' : 'awdaed3d40',
               'label' : MessageService.createStaticMessage('View Transaction Log'),
            });
            actions009.addChild( action021 );


            var action022 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_ClearLogData_action',
               'id' : 'awb6d3895c',
               'label' : MessageService.createStaticMessage('Clear Log Data'),
            });
            actions009.addChild( action022 );

            var eventHandlers148 = [
               {
                     'method' : 'clear',
                     'artifactId' : 'Platform.LoggerReport_ClearLogData_action_eventHandlers_click_clear',
                     'id' : 'aw10958c5',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action022.eventHandlers = eventHandlers148;

            var action023 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_UploadLog_action',
               'id' : 'aw7510fce3',
               'label' : MessageService.createStaticMessage('Save Log'),
            });
            actions009.addChild( action023 );

            var eventHandlers149 = [
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
            action023.eventHandlers = eventHandlers149;

            var action024 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EmailLog_action',
               'id' : 'aw90d8a401',
               'label' : MessageService.createStaticMessage('Email Log'),
            });
            actions009.addChild( action024 );

            var eventHandlers150 = [
               {
                     'method' : 'emailCurrent',
                     'artifactId' : 'Platform.LoggerReport_EmailLog_action_eventHandlers_click_emailCurrent',
                     'id' : 'awf10881b9',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action024.eventHandlers = eventHandlers150;
            var eventHandlers151 = [
               {
                     'method' : 'renderLoggerReport',
                     'artifactId' : 'Platform.LoggerReport_eventHandlers_show_renderLoggerReport',
                     'id' : 'aw9b7c5c73',
                     'event' : 'show',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            view036.eventHandlers = eventHandlers151;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.TransLoggerReport', false);
               trackTimer.startTracking();
            }

            var view037 = new View({
               'scrollDir' : 'vh',
               'id' : 'Platform.TransLoggerReport',
               'label' : MessageService.createStaticMessage('Logging Data'),
            });
            ui001.addChild( view037 );


            var actions010 = new Actions({
               'artifactId' : 'Platform.TransLoggerReport_actions',
               'id' : 'aw49b00040',
            });
            view037.addChild( actions010 );


            var action025 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TransLoggerReport_ClearLogData_action',
               'id' : 'awdce21e26',
               'label' : MessageService.createStaticMessage('Clear Log Data'),
            });
            actions010.addChild( action025 );

            var eventHandlers152 = [
               {
                     'method' : 'clearTransLog',
                     'artifactId' : 'Platform.TransLoggerReport_ClearLogData_action_eventHandlers_click_clear',
                     'id' : 'aw71c2398e',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action025.eventHandlers = eventHandlers152;

            var action026 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TransLoggerReport_EmailLog_action',
               'id' : 'aw29f3639',
               'label' : MessageService.createStaticMessage('Email Log'),
            });
            actions010.addChild( action026 );

            var eventHandlers153 = [
               {
                     'method' : 'emailCurrentTranslog',
                     'artifactId' : 'Platform.TransLoggerReport_EmailLog_action_eventHandlers_click_emailCurrent',
                     'id' : 'awfd97a236',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action026.eventHandlers = eventHandlers153;
            var eventHandlers154 = [
               {
                     'method' : 'renderTransLoggerReport',
                     'artifactId' : 'Platform.TransLoggerReport_eventHandlers_show_renderTransLoggerReport',
                     'id' : 'aw4261a98a',
                     'event' : 'show',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            view037.eventHandlers = eventHandlers154;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.ChangePassword', false);
               trackTimer.startTracking();
            }

            var view038 = new View({
               'resource' : 'PlatformChangePasswordForm',
               'id' : 'Platform.ChangePassword',
               'label' : MessageService.createStaticMessage('Change Password'),
            });
            ui001.addChild( view038 );


            var container085 = new Container({
               'cssClass' : 'changePasswordForm',
               'artifactId' : 'Platform.ChangePassword_container_0',
               'id' : 'awf7c2a2a',
            });
            view038.addChild( container085 );


            var text169 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.ChangePassword_container_0_errorMsg',
               'id' : 'aw3ed16fe1',
            });
            container085.addChild( text169 );


            var text170 = new Text({
               'resourceAttribute' : 'infoMsg',
               'cssClass' : 'infoMsg',
               'editable' : false,
               'artifactId' : 'Platform.ChangePassword_container_0_infoMsg',
               'id' : 'awe28ebedd',
            });
            container085.addChild( text170 );


            var text171 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'currentpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_currentpassword',
               'id' : 'aw7df0b045',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Current password'),
            });
            container085.addChild( text171 );

            var eventHandlers155 = [
               {
                     'method' : 'hidePasswordField',
                     'artifactId' : 'Platform.ChangePassword_container_0_currentpassword_eventHandlers_render_hidePasswordField',
                     'id' : 'aw27f3eacb',
                     'event' : 'render',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            text171.eventHandlers = eventHandlers155;

            var text172 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'newpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_newpassword',
               'id' : 'aw618d08b5',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('New password'),
            });
            container085.addChild( text172 );


            var text173 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'confirmnewpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_confirmnewpassword',
               'id' : 'awd274537a',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Confirm password'),
            });
            container085.addChild( text173 );


            var button088 = new Button({
               'artifactId' : 'Platform.ChangePassword_Cancel_button',
               'id' : 'aw96c63135',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers156 = [
               {
                     'method' : 'cancelPasswordClickHandler',
                     'artifactId' : 'Platform.ChangePassword_Cancel_button_eventHandlers_click_cancelPasswordClickHandler',
                     'id' : 'aw7492b621',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button088.eventHandlers = eventHandlers156;
            container085.addChild( button088 );


            var button089 = new Button({
               'artifactId' : 'Platform.ChangePassword_Change_button',
               'id' : 'aw5cd0477f',
               'label' : MessageService.createStaticMessage('Change'),
               'primary' : 'true',
            });
            var eventHandlers157 = [
               {
                     'method' : 'changePasswordClickHandler',
                     'artifactId' : 'Platform.ChangePassword_Change_button_eventHandlers_click_changePasswordClickHandler',
                     'id' : 'awfdba8feb',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button089.eventHandlers = eventHandlers157;
            container085.addChild( button089 );

            var eventHandlers158 = [
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
            view038.eventHandlers = eventHandlers158;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.RetrieveOldPassword', false);
               trackTimer.startTracking();
            }

            var view039 = new View({
               'resource' : 'PlatformChangePasswordForm',
               'showHeader' : false,
               'showOverflow' : false,
               'id' : 'Platform.RetrieveOldPassword',
               'label' : MessageService.createStaticMessage('Recover App Data'),
            });
            ui001.addChild( view039 );


            var container086 = new Container({
               'cssClass' : 'changePasswordForm',
               'artifactId' : 'Platform.RetrieveOldPassword_container_0',
               'id' : 'awecdef66d',
            });
            view039.addChild( container086 );


            var text174 = new Text({
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_Enterthepasswordt',
               'id' : 'aw14ebf03b',
               'value' : MessageService.createStaticMessage('Enter the password that you last used to log in to the app. If you do not have this password, you must reset the app before you can log in.'),
            });
            container086.addChild( text174 );


            var text175 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_errorMsg',
               'id' : 'aw9574c917',
            });
            container086.addChild( text175 );


            var text176 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'currentpassword',
               'editable' : true,
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_currentpassword',
               'id' : 'aw97b6c3b7',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Previous password'),
            });
            container086.addChild( text176 );


            var button090 = new Button({
               'artifactId' : 'Platform.RetrieveOldPassword_Recover_button',
               'id' : 'aw3a0ff2',
               'label' : MessageService.createStaticMessage('Recover'),
               'primary' : 'true',
            });
            var eventHandlers159 = [
               {
                     'method' : 'recoverOldPasswordClickHandler',
                     'artifactId' : 'Platform.RetrieveOldPassword_Recover_button_eventHandlers_click_recoverOldPasswordClickHandler',
                     'id' : 'awecb18d1c',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button090.eventHandlers = eventHandlers159;
            container086.addChild( button090 );


            var button091 = new Button({
               'artifactId' : 'Platform.RetrieveOldPassword_Reset_button',
               'id' : 'aw8bb551dc',
               'label' : MessageService.createStaticMessage('Reset'),
            });
            var eventHandlers160 = [
               {
                     'method' : 'resetStorageClickHandler',
                     'artifactId' : 'Platform.RetrieveOldPassword_Reset_button_eventHandlers_click_resetStorageClickHandler',
                     'id' : 'awfe7a73d2',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button091.eventHandlers = eventHandlers160;
            container086.addChild( button091 );

            var eventHandlers161 = [
               {
                     'method' : 'initializeRetrieveOldPasswordView',
                     'artifactId' : 'Platform.RetrieveOldPassword_eventHandlers_show_initializeRetrieveOldPasswordView',
                     'id' : 'aw26f17c5a',
                     'event' : 'show',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            view039.eventHandlers = eventHandlers161;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog028 = new Dialog({
               'closeOnBackgroundClick' : 'true',
               'id' : 'Platform.ConfirmResetDataStore',
            });
            ui001.addChild( dialog028 );


            var container087 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmResetDataStore_container_0',
               'id' : 'awacb7e535',
            });
            dialog028.addChild( container087 );


            var text177 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmResetDataStore_container_0_WarningAllappdat',
               'id' : 'aw68bdf3e8',
               'value' : MessageService.createStaticMessage('Warning! All app data on the device will be cleared. Any data that has not been sent to the server will be lost.'),
            });
            container087.addChild( text177 );


            var container088 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmResetDataStore_container_1',
               'id' : 'awdbb0d5a3',
            });
            dialog028.addChild( container088 );


            var button092 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmResetDataStore_Continue_button',
               'id' : 'awba645d10',
               'label' : MessageService.createStaticMessage('Continue'),
            });
            var eventHandlers162 = [
               {
                     'method' : 'resetDataStoreClickHandler',
                     'artifactId' : 'Platform.ConfirmResetDataStore_Continue_button_eventHandlers_click_resetDataStoreClickHandler',
                     'id' : 'aw5074e6c8',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button092.eventHandlers = eventHandlers162;
            container088.addChild( button092 );


            var button093 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmResetDataStore_Cancel_button',
               'id' : 'aw50474341',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers163 = [
               {
                     'method' : 'cancelResetDataStoreClickHandler',
                     'artifactId' : 'Platform.ConfirmResetDataStore_Cancel_button_eventHandlers_click_cancelResetDataStoreClickHandler',
                     'id' : 'awda7121b8',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button093.eventHandlers = eventHandlers163;
            container088.addChild( button093 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.TimeTrackReport', false);
               trackTimer.startTracking();
            }

            var view040 = new View({
               'cssClass' : 'loggerReport',
               'scrollDir' : 'vh',
               'id' : 'Platform.TimeTrackReport',
               'label' : MessageService.createStaticMessage('Performance Data'),
            });
            ui001.addChild( view040 );

            var requiredResources039 = {
               'timeTrack' : {
                  'artifactId' : 'Platform.TimeTrackReport_timeTrack',
                  'id' : 'aw8d707cee',
               },
            };
            view040.addRequiredResources( requiredResources039 );

            var actions011 = new Actions({
               'artifactId' : 'Platform.TimeTrackReport_actions',
               'id' : 'aw9d9a4864',
            });
            view040.addChild( actions011 );


            var action027 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_EnablePerformanceTracking_action',
               'id' : 'aw34736a63',
               'label' : MessageService.createStaticMessage('Enable Performance Tracking'),
            });
            actions011.addChild( action027 );

            var eventHandlers164 = [
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
            action027.eventHandlers = eventHandlers164;

            var action028 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_ClearPerformanceData_action',
               'id' : 'aw1edf54cf',
               'label' : MessageService.createStaticMessage('Clear Performance Data'),
            });
            actions011.addChild( action028 );

            var eventHandlers165 = [
               {
                     'method' : 'clear',
                     'artifactId' : 'Platform.TimeTrackReport_ClearPerformanceData_action_eventHandlers_click_clear',
                     'id' : 'aw85273d1b',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action028.eventHandlers = eventHandlers165;

            var action029 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_EmailReport_action',
               'id' : 'aw6ff8fae1',
               'label' : MessageService.createStaticMessage('Email Report'),
            });
            actions011.addChild( action029 );

            var eventHandlers166 = [
               {
                     'method' : 'emailCurrent',
                     'artifactId' : 'Platform.TimeTrackReport_EmailReport_action_eventHandlers_click_emailCurrent',
                     'id' : 'awc00583a0',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action029.eventHandlers = eventHandlers166;
            var eventHandlers167 = [
               {
                     'method' : 'renderTT',
                     'artifactId' : 'Platform.TimeTrackReport_eventHandlers_show_renderTT',
                     'id' : 'awca05a315',
                     'event' : 'show',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            view040.eventHandlers = eventHandlers167;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog029 = new Dialog({
               'closeOnBackgroundClick' : 'true',
               'id' : 'Platform.ListLongPressDialog',
            });
            ui001.addChild( dialog029 );



            var listItemTemplate023 = new ListItemTemplate({
               'cssClass' : 'dialogListItem textappearance-medium',
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_listItemTemplate',
               'id' : 'awefd72fd8',
            });

            var listtext054 = new ListText({
               'resourceAttribute' : 'label',
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_label',
               'id' : 'awe2e495b2',
            });
            listItemTemplate023.addChild( listtext054 );



            var list023 = new List({
               'resource' : 'PlatformLongPressResource',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate023,
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_list',
               'id' : 'aw64ff84d9',
               'queryBase' : '',
            });
            dialog029.addChild( list023 );


            var dialog030 = new Dialog({
               'id' : 'Platform.LoadingAdditionalData',
            });
            ui001.addChild( dialog030 );


            var container089 = new Container({
               'artifactId' : 'Platform.LoadingAdditionalData_container_0',
               'id' : 'aw48b509d9',
            });
            dialog030.addChild( container089 );


            var text178 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadingAdditionalData_container_0_Downloadinglookupd',
               'id' : 'aw4cec47c0',
               'value' : MessageService.createStaticMessage('Downloading lookup data.'),
            });
            container089.addChild( text178 );


            var button094 = new Button({
               'artifactId' : 'Platform.LoadingAdditionalData_Cancel_button',
               'id' : 'awb30b5f0',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers168 = [
               {
                     'method' : 'cancelADDownload',
                     'artifactId' : 'Platform.LoadingAdditionalData_Cancel_button_eventHandlers_click_cancelADDownload',
                     'id' : 'awc41dac4c',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button094.eventHandlers = eventHandlers168;
            container089.addChild( button094 );


            var dialog031 = new Dialog({
               'id' : 'Platform.AdditionalDataNoConn',
            });
            ui001.addChild( dialog031 );


            var container090 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.AdditionalDataNoConn_container_0',
               'id' : 'aw666da461',
            });
            dialog031.addChild( container090 );


            var text179 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.AdditionalDataNoConn_container_0_Lookupdatacouldno',
               'id' : 'aw96b90fd8',
               'value' : MessageService.createStaticMessage('Lookup data could not be downloaded. Go to Settings > Refresh Lookup Data when you are online.'),
            });
            container090.addChild( text179 );


            var container091 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.AdditionalDataNoConn_container_1',
               'id' : 'aw116a94f7',
            });
            dialog031.addChild( container091 );


            var button095 = new Button({
               'artifactId' : 'Platform.AdditionalDataNoConn_OK_button',
               'id' : 'aw9b370278',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers169 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.AdditionalDataNoConn_OK_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw108159b3',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button095.eventHandlers = eventHandlers169;
            container091.addChild( button095 );


            var dialog032 = new Dialog({
               'id' : 'Platform.ConfirmReloadWorkList',
            });
            ui001.addChild( dialog032 );


            var container092 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_0',
               'id' : 'aw2054aa9e',
            });
            dialog032.addChild( container092 );


            var text180 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_0_Doyouwanttoclose',
               'id' : 'aw83f81a4b',
               'value' : MessageService.createStaticMessage('Reloading the work list takes time if you are downloading large amounts of data.  Are you sure that you want to continue?'),
            });
            container092.addChild( text180 );


            var container093 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_1',
               'id' : 'aw57539a08',
            });
            dialog032.addChild( container093 );


            var button096 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmReloadWorkList_Yes_button',
               'id' : 'aw5bc89627',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers170 = [
               {
                     'method' : 'reloadConfirmed',
                     'artifactId' : 'Platform.ConfirmReloadWorkList_Yes_button_eventHandlers_click_processDialog',
                     'id' : 'awafdb701f',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button096.eventHandlers = eventHandlers170;
            container093.addChild( button096 );


            var button097 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.ConfirmReloadWorkList_No_button',
               'id' : 'aw4487e9e7',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers171 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.ConfirmReloadWorkList_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw56d1743',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button097.eventHandlers = eventHandlers171;
            container093.addChild( button097 );


            var dialog033 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.ReloadingCurrentWorklist',
            });
            ui001.addChild( dialog033 );


            var container094 = new Container({
               'cssClass' : 'mblSimpleMessageText',
               'artifactId' : 'Platform.ReloadCurrentWorklist_container_0',
               'id' : 'awce0c0b72',
            });
            dialog033.addChild( container094 );


            var text181 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.ReloadCurrentWorklist_container_0_progressMsg',
               'id' : 'awaa894933',
            });
            container094.addChild( text181 );


            var dialog034 = new Dialog({
               'id' : 'Platform.AdditionalDataFailed',
            });
            ui001.addChild( dialog034 );


            var container095 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.AdditionalDataFailed.container',
               'id' : 'aw275627fb',
            });
            dialog034.addChild( container095 );


            var text182 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.AdditionalDataFailed.text',
               'id' : 'awb25e5b66',
               'value' : MessageService.createStaticMessage('Lookup data could not be downloaded. If you are connected, go to Settings > Refresh Lookup Data.'),
            });
            container095.addChild( text182 );


            var container096 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.AdditionalDataFailed.container2',
               'id' : 'aw309dc3be',
            });
            dialog034.addChild( container096 );


            var button098 = new Button({
               'artifactId' : 'Platform.AdditionalDataFailed.button',
               'id' : 'aw39111677',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers172 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.AdditionalDataFailed.eventHandler',
                     'id' : 'awacbc5440',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button098.eventHandlers = eventHandlers172;
            container096.addChild( button098 );


            var dialog035 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.LoadingSystemData',
            });
            ui001.addChild( dialog035 );


            var container097 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadingSystemData_container_0',
               'id' : 'aw13d3cc6a',
            });
            dialog035.addChild( container097 );


            var text183 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadingSystemData_container_0_Downloadingsystemd',
               'id' : 'awfc1b5f79',
               'value' : MessageService.createStaticMessage('Downloading system data.'),
            });
            container097.addChild( text183 );


            var text184 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.LoadingSystemData_container_0_progressMsg',
               'id' : 'aw635d9968',
            });
            container097.addChild( text184 );


            var dialog036 = new Dialog({
               'id' : 'Platform.LoadAdditionalDataYesNo',
            });
            ui001.addChild( dialog036 );


            var container098 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0',
               'id' : 'aw22834650',
            });
            dialog036.addChild( container098 );


            var text185 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Thelookupdatafor',
               'id' : 'aw89be3f27',
               'value' : MessageService.createStaticMessage('The lookup data for this app must be downloaded. Download it now or later?'),
            });
            container098.addChild( text185 );

            var eventHandlers173 = [
               {
                     'method' : 'theLookupdataText',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Thelookupdatafor_eventHandlers_render_setAdditionalDownloadText',
                     'id' : 'aw9051ca24',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text185.eventHandlers = eventHandlers173;

            var text186 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Retrylookupdatafor',
               'id' : 'awb287d1cc',
               'value' : MessageService.createStaticMessage('Lookup data was partially downloaded. Click Retry to download the remaining lookup data. Click Reset to refresh all of the lookup data. Click Close if you are through downloading lookup data.'),
            });
            container098.addChild( text186 );

            var eventHandlers174 = [
               {
                     'method' : 'retrylookupdataText',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Retrylookupdatafor_eventHandlers_render_setAdditionalDownloadText',
                     'id' : 'aw5ad2ed31',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text186.eventHandlers = eventHandlers174;

            var text187 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Whenrunninginabr',
               'id' : 'awb757e4d5',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per lookup.'),
            });
            container098.addChild( text187 );

            var eventHandlers175 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'awb7d271e9',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text187.eventHandlers = eventHandlers175;

            var container099 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_1',
               'id' : 'aw558476c6',
            });
            dialog036.addChild( container099 );


            var button099 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Later_button',
               'id' : 'awa2501fe3',
               'label' : MessageService.createStaticMessage('Later'),
            });
            var eventHandlers176 = [
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
            button099.eventHandlers = eventHandlers176;
            container099.addChild( button099 );


            var button100 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Now_button',
               'id' : 'aw35a14c11',
               'label' : MessageService.createStaticMessage('Now'),
            });
            var eventHandlers177 = [
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
            button100.eventHandlers = eventHandlers177;
            container099.addChild( button100 );


            var button101 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Retry_button',
               'id' : 'aw626b616d',
               'label' : MessageService.createStaticMessage('Retry'),
            });
            var eventHandlers178 = [
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
            button101.eventHandlers = eventHandlers178;
            container099.addChild( button101 );


            var dialog037 = new Dialog({
               'id' : 'Platform.LoadAdditionalDataDeltaDownload',
            });
            ui001.addChild( dialog037 );


            var container100 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0',
               'id' : 'aw79883531',
            });
            dialog037.addChild( container100 );


            var text188 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Thelookupdatafor',
               'id' : 'aw3d94f20f',
               'value' : MessageService.createStaticMessage('Click Changes to download only lookup data changes.'),
            });
            container100.addChild( text188 );


            var text189 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Retrylookupdatafor',
               'id' : 'awa0f7541',
               'value' : MessageService.createStaticMessage('Click All to download all the lookup data.'),
            });
            container100.addChild( text189 );


            var text190 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_cancel',
               'id' : 'aw62270e4c',
               'value' : MessageService.createStaticMessage('Click Cancel to cancel the lookup download.'),
            });
            container100.addChild( text190 );


            var text191 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_action',
               'id' : 'aw73fd47ac',
               'value' : MessageService.createStaticMessage('Which refresh do you want to perform?'),
            });
            container100.addChild( text191 );


            var text192 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Whenrunninginabr',
               'id' : 'aw37d29fd',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per lookup.'),
            });
            container100.addChild( text192 );

            var eventHandlers179 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'aw1edf10f3',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text192.eventHandlers = eventHandlers179;

            var container101 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_1',
               'id' : 'awe8f05a7',
            });
            dialog037.addChild( container101 );


            var button102 = new Button({
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Cancel_button',
               'id' : 'awb2f881ae',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers180 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'awcaa29f5a',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button102.eventHandlers = eventHandlers180;
            container101.addChild( button102 );


            var button103 = new Button({
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_RefreshAll_button',
               'id' : 'aw8ab2882',
               'label' : MessageService.createStaticMessage('All'),
            });
            var eventHandlers181 = [
               {
                     'method' : 'confirmADDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Now_button_eventHandlers_click_confirmADDownload',
                     'id' : 'awa5526bd4',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button103.eventHandlers = eventHandlers181;
            container101.addChild( button103 );


            var button104 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_RefreshChanges_button',
               'id' : 'aw9c0cf49a',
               'label' : MessageService.createStaticMessage('Changes'),
            });
            var eventHandlers182 = [
               {
                     'method' : 'confirmADDeltaDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Later_button_eventHandlers_click_confirmADDeltaDownload',
                     'id' : 'aw46619626',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button104.eventHandlers = eventHandlers182;
            container101.addChild( button104 );


            var dialog038 = new Dialog({
               'id' : 'Platform.LoadSystemDataDeltaDownload',
            });
            ui001.addChild( dialog038 );


            var container102 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0',
               'id' : 'aw47beed1c',
            });
            dialog038.addChild( container102 );


            var text193 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Thelookupdatafor',
               'id' : 'aw682ebd2f',
               'value' : MessageService.createStaticMessage('Click Changes to download only the system data changes.'),
            });
            container102.addChild( text193 );


            var text194 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Retrylookupdatafor',
               'id' : 'aw79e85858',
               'value' : MessageService.createStaticMessage('Click All to download all the system data.'),
            });
            container102.addChild( text194 );


            var text195 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_cancel',
               'id' : 'awcb50ae6',
               'value' : MessageService.createStaticMessage('Click Cancel to cancel the system download.'),
            });
            container102.addChild( text195 );


            var text196 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_action',
               'id' : 'aw1d6f4306',
               'value' : MessageService.createStaticMessage('Which refresh do you want to perform?'),
            });
            container102.addChild( text196 );


            var text197 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Whenrunninginabr',
               'id' : 'aw56c766dd',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per System.'),
            });
            container102.addChild( text197 );

            var eventHandlers183 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'aw37b2ac2a',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text197.eventHandlers = eventHandlers183;

            var container103 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_1',
               'id' : 'aw30b9dd8a',
            });
            dialog038.addChild( container103 );


            var button105 = new Button({
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Cancel_button',
               'id' : 'aw1adabf91',
               'label' : MessageService.createStaticMessage('cancel'),
            });
            var eventHandlers184 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw2569598a',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button105.eventHandlers = eventHandlers184;
            container103.addChild( button105 );


            var button106 = new Button({
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_RefreshAll_button',
               'id' : 'awf1a96515',
               'label' : MessageService.createStaticMessage('All'),
            });
            var eventHandlers185 = [
               {
                     'method' : 'downloadSystemData',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Now_button_eventHandlers_click_confirmdownloadSystemData',
                     'id' : 'aw8d600b10',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button106.eventHandlers = eventHandlers185;
            container103.addChild( button106 );


            var button107 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_RefreshChanges_button',
               'id' : 'aw328e1b2e',
               'label' : MessageService.createStaticMessage('Changes'),
            });
            var eventHandlers186 = [
               {
                     'method' : 'confirmSystemDataDeltaDownload',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Later_button_eventHandlers_click_confirmSystemDataDeltaDownload',
                     'id' : 'awbd23e928',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button107.eventHandlers = eventHandlers186;
            container103.addChild( button107 );


            var dialog039 = new Dialog({
               'id' : 'Platform.LogOutPrompt',
            });
            ui001.addChild( dialog039 );


            var container104 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LogOutPrompt_container_0',
               'id' : 'awcf20d41b',
            });
            dialog039.addChild( container104 );


            var text198 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LogOutPrompt_container_0_Doyouwanttologo',
               'id' : 'aw15a96005',
               'value' : MessageService.createStaticMessage('Do you want to log out of the app?'),
            });
            container104.addChild( text198 );


            var container105 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LogOutPrompt_container_1',
               'id' : 'awb827e48d',
            });
            dialog039.addChild( container105 );


            var button108 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.LogOutPrompt_No_button',
               'id' : 'awfbbbd446',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers187 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.LogOutPrompt_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw364ad2c7',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button108.eventHandlers = eventHandlers187;
            container105.addChild( button108 );


            var button109 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LogOutPrompt_Yes_button',
               'id' : 'awfaa63964',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers188 = [
               {
                     'method' : 'logoutDialog',
                     'artifactId' : 'Platform.LogOutPrompt_Yes_button_eventHandlers_click_logoutDialog',
                     'id' : 'aw82db52a6',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button109.eventHandlers = eventHandlers188;
            container105.addChild( button109 );


            var dialog040 = new Dialog({
               'cssClass' : 'dialogDurationLookup',
               'resource' : 'PlatformDateLookupResource',
               'id' : 'Platform.DurationLookup',
               'label' : MessageService.createStaticMessage('Change Duration'),
            });
            ui001.addChild( dialog040 );

            var eventHandlers189 = [
               {
                     'method' : 'initLookup',
                     'artifactId' : 'Platform.DurationLookup_eventHandlers_show_initLookup',
                     'id' : 'aw2898d5b1',
                     'event' : 'show',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            dialog040.eventHandlers = eventHandlers189;

            var container106 = new Container({
               'artifactId' : 'Platform.DurationLookup_container_0',
               'id' : 'awc7b6d6e2',
            });
            dialog040.addChild( container106 );


            var durationpicker001 = new DurationPicker({
               'artifactId' : 'Platform.DurationLookup_durationpicker_0',
               'id' : 'awbdafea4f',
            });
            container106.addChild( durationpicker001 );


            var container107 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DurationLookup_container_1',
               'id' : 'awb0b1e674',
            });
            dialog040.addChild( container107 );


            var button110 = new Button({
               'artifactId' : 'Platform.DurationLookup_Cancel_button',
               'id' : 'aw21ee1a8e',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers190 = [
               {
                     'method' : 'Cancel',
                     'artifactId' : 'Platform.DurationLookup_Cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw7fc46e19',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button110.eventHandlers = eventHandlers190;
            container107.addChild( button110 );


            var button111 = new Button({
               'artifactId' : 'Platform.DurationLookup_Clear_button',
               'id' : 'awab5a917f',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers191 = [
               {
                     'method' : 'Clear',
                     'artifactId' : 'Platform.DurationLookup_Clear_button_eventHandlers_click_Clear',
                     'id' : 'aw4d23bc8f',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button111.eventHandlers = eventHandlers191;
            container107.addChild( button111 );


            var button112 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DurationLookup_OK_button',
               'id' : 'aw7a6484f6',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers192 = [
               {
                     'method' : 'SetSelection',
                     'artifactId' : 'Platform.DurationLookup_OK_button_eventHandlers_click_SetSelection',
                     'id' : 'aweb8ce178',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button112.eventHandlers = eventHandlers192;
            container107.addChild( button112 );


            var dialog041 = new Dialog({
               'id' : 'Platform.CancelDownload',
            });
            ui001.addChild( dialog041 );


            var container108 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.CancelDownload_container_0',
               'id' : 'awf839de44',
            });
            dialog041.addChild( container108 );


            var text199 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.CancelDownload_container_0_Doyouwanttostop',
               'id' : 'awdb2316b3',
               'value' : MessageService.createStaticMessage('Do you want to stop downloading work list records?'),
            });
            container108.addChild( text199 );


            var container109 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.CancelDownload_container_1',
               'id' : 'aw8f3eeed2',
            });
            dialog041.addChild( container109 );


            var button113 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.CancelDownload_Yes_button',
               'id' : 'aw3b97968f',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers193 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.CancelDownload_Yes_button_eventHandlers_click_cancelDownload',
                     'id' : 'awadc6ff1d',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button113.eventHandlers = eventHandlers193;
            container109.addChild( button113 );


            var button114 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.CancelDownload_No_button',
               'id' : 'awab099478',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers194 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.CancelDownload_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw9ceda703',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button114.eventHandlers = eventHandlers194;
            container109.addChild( button114 );


            var dialog042 = new Dialog({
               'id' : 'Platform.ConfirmClearChanges',
            });
            ui001.addChild( dialog042 );


            var container110 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmClearChanges_container_0',
               'id' : 'aw3965500f',
            });
            dialog042.addChild( container110 );


            var text200 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmClearChanges_container_0_Changesthathaveno',
               'id' : 'aw66e22f87',
               'value' : MessageService.createStaticMessage('Changes that have not been sent to the server will be discarded.'),
            });
            container110.addChild( text200 );


            var container111 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmClearChanges_container_1',
               'id' : 'aw4e626099',
            });
            dialog042.addChild( container111 );


            var button115 = new Button({
               'artifactId' : 'Platform.ConfirmClearChanges_Cancel_button',
               'id' : 'awcee54fe9',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers195 = [
               {
                     'method' : 'cancelClearChanges',
                     'artifactId' : 'Platform.ConfirmClearChanges_Cancel_button_eventHandlers_click_cancelClearChanges',
                     'id' : 'awb208eba2',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button115.eventHandlers = eventHandlers195;
            container111.addChild( button115 );


            var button116 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.ConfirmClearChanges_OK_button',
               'id' : 'aw8a3b05f2',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers196 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'Platform.ConfirmClearChanges_OK_button_eventHandlers_click_doClearChanges',
                     'id' : 'aw32f778d4',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button116.eventHandlers = eventHandlers196;
            container111.addChild( button116 );


            var dialog043 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.DownloadCurrentWorklist',
            });
            ui001.addChild( dialog043 );


            var container112 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_0',
               'id' : 'awfd35c5df',
            });
            dialog043.addChild( container112 );


            var text201 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_0_progressMsg',
               'id' : 'aw3c55ae56',
            });
            container112.addChild( text201 );


            var container113 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_1',
               'id' : 'aw8a32f549',
            });
            dialog043.addChild( container113 );


            var button117 = new Button({
               'artifactId' : 'Platform.DownloadCurrentWorklist_Cancel_button',
               'id' : 'awcfb8296d',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers197 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.DownloadCurrentWorklist_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'aw5541afbb',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button117.eventHandlers = eventHandlers197;
            container113.addChild( button117 );


            var dialog044 = new Dialog({
               'id' : 'Platform.NoRecordFoundDialog',
            });
            ui001.addChild( dialog044 );


            var container114 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.NoRecordFoundDialog_container_0',
               'id' : 'awa73a1c57',
            });
            dialog044.addChild( container114 );


            var text202 = new Text({
               'artifactId' : 'Platform.NoRecordFoundDialog_container_0_Stopthetimeronwo',
               'id' : 'awd6cf8f25',
               'value' : MessageService.createStaticMessage('No record was found. If you are working offline, try downloading worklist when online to access your workorder'),
            });
            container114.addChild( text202 );


            var container115 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.NoRecordFoundDialog_container_1',
               'id' : 'awd03d2cc1',
            });
            dialog044.addChild( container115 );


            var button118 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.NoRecordFoundDialog_OK_button',
               'id' : 'aw3de0cad2',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers198 = [
               {
                     'method' : 'closeNoRecord',
                     'artifactId' : 'Platform.NoRecordFoundDialog_OK_button_multiple',
                     'id' : 'aw41a4b840',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button118.eventHandlers = eventHandlers198;
            container115.addChild( button118 );


            var dialog045 = new Dialog({
               'id' : 'Platform.MultiplePushNotificationDialog',
            });
            ui001.addChild( dialog045 );


            var container116 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_0',
               'id' : 'aw7b338e5e',
            });
            dialog045.addChild( container116 );


            var text203 = new Text({
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_0_Stopthetimeronwo',
               'id' : 'aw72fc5fcc',
               'value' : MessageService.createStaticMessage('Multiple notification were recieved. Go to notification view to access them.'),
            });
            container116.addChild( text203 );


            var container117 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_1',
               'id' : 'awc34bec8',
            });
            dialog045.addChild( container117 );


            var button119 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_OK_button',
               'id' : 'awc2c9277e',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers199 = [
               {
                     'method' : 'close',
                     'artifactId' : 'Platform.MultiplePushNotificationDialog_OK_button_multiple',
                     'id' : 'awe5002e8b',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button119.eventHandlers = eventHandlers199;
            container117.addChild( button119 );


            var dialog046 = new Dialog({
               'resource' : 'PlatformTempPushNotification',
               'id' : 'Platform.PushNotificationDialog',
            });
            ui001.addChild( dialog046 );


            var container118 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.PushNotificationDialog_container_0',
               'id' : 'awb0eedc9',
            });
            dialog046.addChild( container118 );


            var text204 = new Text({
               'artifactId' : 'Platform.PushNotificationDialog_container_0_Stopthetimeronwo',
               'id' : 'aw35fc28ff',
               'value' : MessageService.createDynamicMessage('{0} {1} {2}', 'platform.handlers.PushNotificationDialogHandler', 'resolveMessageProps'),
               'resolverFunction' : 'resolveMessageProps',
               'resolverClass' : 'platform.handlers.PushNotificationDialogHandler',
            });
            container118.addChild( text204 );


            var container119 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.PushNotificationDialog_container_1',
               'id' : 'aw7c09dd5f',
            });
            dialog046.addChild( container119 );


            var button120 = new Button({
               'artifactId' : 'Platform.PushNotificationDialog_Open_button',
               'id' : 'aw4151795',
               'label' : MessageService.createStaticMessage('Open'),
            });
            var eventHandlers200 = [
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
            button120.eventHandlers = eventHandlers200;
            container119.addChild( button120 );


            var button121 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.PushNotificationDialog_OK_button',
               'id' : 'aw3d64070a',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers201 = [
               {
                     'method' : 'close',
                     'artifactId' : 'Platform.PushNotificationDialog_OK_button_eventHandlers_click_WOStartedDialogYesClickHandler',
                     'id' : 'aw40f88c32',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button121.eventHandlers = eventHandlers201;
            container119.addChild( button121 );


            var dialog047 = new Dialog({
               'resource' : 'PlatformDemoModeResource',
               'id' : 'Platform.DemoDownloadWarning',
            });
            ui001.addChild( dialog047 );


            var container120 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DemoDownloadWarning_container_0',
               'id' : 'awf840ab79',
            });
            dialog047.addChild( container120 );


            var text205 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.DemoDownloadWarning_container_0_progressMsg',
               'id' : 'awf3cb0903',
               'value' : MessageService.createStaticMessage('MessageText'),
            });
            container120.addChild( text205 );


            var container121 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DemoDownloadWarning_container_1',
               'id' : 'aw8f479bef',
            });
            dialog047.addChild( container121 );


            var button122 = new Button({
               'artifactId' : 'Platform.DemoDownloadWarning_Continue_button',
               'id' : 'aw2659f8c8',
               'label' : MessageService.createStaticMessage('Continue'),
            });
            var eventHandlers202 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'Platform.DemoDownloadWarning_Continue_button_eventHandlers_click_doClearChanges',
                     'id' : 'awbdf1879f',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button122.eventHandlers = eventHandlers202;
            container121.addChild( button122 );


            var button123 = new Button({
               'artifactId' : 'Platform.DemoDownloadWarning_Cancel_button',
               'id' : 'aw9def7b28',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers203 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.DemoDownloadWarning_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'awd4960a86',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button123.eventHandlers = eventHandlers203;
            container121.addChild( button123 );


            var dialog048 = new Dialog({
               'resource' : 'PlatformEsigResource',
               'id' : 'Platform.EsigLoginView',
               'label' : MessageService.createStaticMessage('Electronic Signature Authentication'),
            });
            ui001.addChild( dialog048 );

            var requiredResources040 = {
               'attemptResultDomain' : {
                  'enableFeatureByProperty' : 'esig.enabled',
                  'artifactId' : 'Platform.EsigLoginView_attemptResultDomain',
                  'id' : 'aw3c53638b',
               },
            };
            dialog048.addRequiredResources( requiredResources040 );

            var container122 = new Container({
               'artifactId' : 'Platform.EsigLoginView_container_0',
               'id' : 'aw44fd9611',
            });
            dialog048.addChild( container122 );


            var group044 = new Group({
               'artifactId' : 'Platform.EsigLoginView_group_0',
               'id' : 'aw7bf6135f',
            });
            container122.addChild( group044 );


            var groupitem103 = new GroupItem({
               'artifactId' : 'Platform.EsigLoginView_group_0_groupitem_1',
               'id' : 'aw209714b9',
            });
            group044.addChild( groupitem103 );


            var text206 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'userName',
               'cssClass' : 'loginUsername',
               'editable' : false,
               'artifactId' : 'Platform.EsigLoginView_container_0_username',
               'id' : 'aw15aabb30',
               'label' : MessageService.createStaticMessage('User Name'),
               'placeHolder' : MessageService.createStaticMessage('User name'),
            });
            groupitem103.addChild( text206 );


            var text207 = new Text({
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
            groupitem103.addChild( text207 );


            var text208 = new Text({
               'resourceAttribute' : 'reason',
               'cssClass' : 'loginUsername',
               'editable' : true,
               'artifactId' : 'Platform.EsigLoginView_container_0_reason',
               'id' : 'aw6ccf562d',
               'label' : MessageService.createStaticMessage('Reason for Change'),
               'placeHolder' : MessageService.createStaticMessage('Reason for Change'),
               'required' : true,
            });
            groupitem103.addChild( text208 );


            var container123 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.EsigLoginView_footer',
               'id' : 'aw68d6d11c',
            });
            dialog048.addChild( container123 );


            var button124 = new Button({
               'artifactId' : 'Platform.EsigLoginView_Cancel_button',
               'id' : 'aw68a36a2b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers204 = [
               {
                     'method' : 'cancelEsig',
                     'artifactId' : 'Platform.EsigLoginView_Cancel_button_eventHandlers_click_cancelEsig',
                     'id' : 'awdba9800d',
                     'event' : 'click',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            button124.eventHandlers = eventHandlers204;
            container123.addChild( button124 );


            var button125 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.EsigLoginView_Save_button',
               'id' : 'awef41b275',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers205 = [
               {
                     'method' : 'submitEsig',
                     'artifactId' : 'Platform.EsigLoginView_Save_button_eventHandlers_click_submitEsig',
                     'id' : 'awa9f3497f',
                     'event' : 'click',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            button125.eventHandlers = eventHandlers205;
            container123.addChild( button125 );

            var eventHandlers206 = [
               {
                     'method' : 'initializeEsig',
                     'artifactId' : 'Platform.EsigLoginView_eventHandlers_show_initializeEsig',
                     'id' : 'aw681e6384',
                     'event' : 'show',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            dialog048.eventHandlers = eventHandlers206;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Signature', false);
               trackTimer.startTracking();
            }

            var view041 = new View({
               'id' : 'Platform.Signature',
               'label' : MessageService.createStaticMessage('Capture Real Signature'),
            });
            ui001.addChild( view041 );

            var requiredResources041 = {
               'PlatformAttachmentInfoResource' : {
                  'artifactId' : 'Platform.Signature_PlatformAttachmentInfoResource',
                  'id' : 'aw8cc44736',
               },
            };
            view041.addRequiredResources( requiredResources041 );

            var footer013 = new Footer({
               'artifactId' : 'Platform.Signature_footer',
               'id' : 'aw16b9ee39',
            });
            view041.addChild( footer013 );


            var button126 = new Button({
               'artifactId' : 'Platform.Signature_Cancel_button',
               'id' : 'aw9088fe5b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers207 = [
               {
                     'method' : 'cancelSignature',
                     'artifactId' : 'Platform.Signature_Cancel_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'awc27cd6a4',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button126.eventHandlers = eventHandlers207;
            footer013.addChild( button126 );


            var button127 = new Button({
               'artifactId' : 'Platform.Signature_Clear_button',
               'id' : 'awc6576044',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers208 = [
               {
                     'method' : 'clearSignature',
                     'artifactId' : 'Platform.Signature_Clear_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw90653ab1',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button127.eventHandlers = eventHandlers208;
            footer013.addChild( button127 );


            var button128 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.Signature_Save_button',
               'id' : 'awbc1f2293',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers209 = [
               {
                     'method' : 'saveSignature',
                     'artifactId' : 'Platform.Signature_Save_button_eventHandlers_click_saveSignature',
                     'id' : 'aw7d8e432b',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button128.eventHandlers = eventHandlers209;
            footer013.addChild( button128 );

            var eventHandlers210 = [
               {
                     'method' : 'initSignature',
                     'artifactId' : 'Platform.Signature_eventHandlers_show_initStopWorkView',
                     'id' : 'awb8cf4cb7',
                     'event' : 'initialize',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            view041.eventHandlers = eventHandlers210;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog049 = new Dialog({
               'id' : 'Platform.SignatureDialog',
            });
            ui001.addChild( dialog049 );


            var container124 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.SignatureDialog_container_buttons',
               'id' : 'aw91450791',
            });
            dialog049.addChild( container124 );


            var button129 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_Cancel_button',
               'id' : 'aw51ebe6e8',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers211 = [
               {
                     'method' : 'cancelSignatureDialog',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_Cancel_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw198ca753',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button129.eventHandlers = eventHandlers211;
            container124.addChild( button129 );


            var button130 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_clear_button',
               'id' : 'awdc63a382',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers212 = [
               {
                     'method' : 'clearSignature',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_clear_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw72eacc40',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button130.eventHandlers = eventHandlers212;
            container124.addChild( button130 );


            var button131 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_Save_button',
               'id' : 'awd4941650',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers213 = [
               {
                     'method' : 'saveSignature',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_Save_button_eventHandlers_click_saveSignature',
                     'id' : 'awa59c7577',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button131.eventHandlers = eventHandlers213;
            container124.addChild( button131 );

            var eventHandlers214 = [
               {
                     'method' : 'initSignature',
                     'artifactId' : 'Platform.SignatureDialog_eventHandlers_show_initStopWorkView',
                     'id' : 'aw71e7bce4',
                     'event' : 'show',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            dialog049.eventHandlers = eventHandlers214;
            app001.addHandler( {name : 'application.handlers.ActualLaborHandler', 'class': new ActualLaborHandler()} );
            app001.addHandler( {name : 'application.handlers.ClassificationFormHandler', 'class': new ClassificationFormHandler()} );
            app001.addHandler( {name : 'application.handlers.ClassifyWorkOrderHandler', 'class': new ClassifyWorkOrderHandler()} );
            app001.addHandler( {name : 'application.handlers.DataSheetHandler', 'class': new DataSheetHandler()} );
            app001.addHandler( {name : 'application.handlers.LaborAssignmentHandler', 'class': new LaborAssignmentHandler()} );
            app001.addHandler( {name : 'application.handlers.MetersListHandler', 'class': new MetersListHandler()} );
            app001.addHandler( {name : 'application.handlers.PlannedMaterialHandler', 'class': new PlannedMaterialHandler()} );
            app001.addHandler( {name : 'application.handlers.StatusChangeHandler', 'class': new StatusChangeHandler()} );
            app001.addHandler( {name : 'application.handlers.WOAttachmentHandler', 'class': new WOAttachmentHandler()} );
            app001.addHandler( {name : 'application.handlers.WOCreateQueryBaseHandler', 'class': new WOCreateQueryBaseHandler()} );
            app001.addHandler( {name : 'application.handlers.WODetailHandler', 'class': new WODetailHandler()} );
            app001.addHandler( {name : 'application.handlers.WOExtDownloadHandler', 'class': new WOExtDownloadHandler()} );
            app001.addHandler( {name : 'application.handlers.WOGeolocationHandler', 'class': new WOGeolocationHandler()} );
            app001.addHandler( {name : 'application.handlers.WOListHandler', 'class': new WOListHandler()} );
            app001.addHandler( {name : 'application.handlers.spatial.SketchToolHandler', 'class': new SketchToolHandler()} );
            app001.addHandler( {name : 'custom.handlers.MSClassifyWorkOrderHandler', 'class': new MSClassifyWorkOrderHandler()} );
            app001.addHandler( {name : 'custom.handlers.MSLoginHandler', 'class': new MSLoginHandler()} );
            app001.addHandler( {name : 'custom.handlers.MSStatusChangeHandler', 'class': new MSStatusChangeHandler()} );
            app001.addHandler( {name : 'custom.handlers.WODetailExtensionHandler', 'class': new WODetailExtensionHandler()} );
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
            app001.addHandler( {name : 'platform.handlers.spatial.IdentifyToolHandler', 'class': new IdentifyToolHandler()} );
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
