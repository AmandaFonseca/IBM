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
// Build: 2023-09-28 20:31:14
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
         "platform/ui/control/SortOptions", 
         "platform/ui/control/SortOption", 
         "platform/ui/control/SortAttribute", 
         "platform/ui/control/ListItemTemplate", 
         "platform/ui/control/ListText", 
         "application/handlers/WODetailHandler", 
         "application/handlers/WOGeolocationHandler", 
         "custom/handlers/WODetailExtensionHandler", 
         "application/handlers/MetersListHandler", 
         "application/handlers/ClassificationFormHandler", 
         "platform/ui/control/ErrorIndicator", 
         "platform/ui/control/Group", 
         "custom/handlers/MSStatusChangeHandler", 
         "platform/ui/control/GroupItem", 
         "platform/ui/control/TextArea", 
         "platform/ui/control/LastUpdateText", 
         "application/handlers/WOAttachmentHandler", 
         "platform/handlers/AttachmentHandler", 
         "application/handlers/LaborAssignmentHandler", 
         "application/handlers/PlannedToolHandler", 
         "platform/ui/control/Footer", 
         "application/handlers/ClassifyWorkOrderHandler", 
         "platform/handlers/DialogHandler", 
         "application/handlers/spatial/SketchToolHandler", 
         "application/handlers/WOCreateQueryBaseHandler", 
         "application/handlers/StatusChangeHandler", 
         "application/handlers/ActualLaborHandler", 
         "platform/ui/control/CheckBox", 
         "platform/ui/control/Lookup", 
         "platform/ui/control/SearchAttributes", 
         "platform/ui/control/SearchAttribute", 
         "platform/ui/control/ReturnAttributes", 
         "platform/ui/control/ReturnAttribute", 
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

function(declare, all, BuilderBase, window, array, ioQuery, AdditionalDataManager, AdditionalDataUIManager, MessageService, Application, UserInterface, Dialog, Container, Text, Button, SSOHandler, LoginHandler, View, Image, MSLoginHandler, _ApplicationHandlerBase, Queries, Query, WOListHandler, Actions, Action, WOExtDownloadHandler, WorkOfflineHandler, ProgressIndicator, List, FindByScan, DataSheetHandler, SortOptions, SortOption, SortAttribute, ListItemTemplate, ListText, WODetailHandler, WOGeolocationHandler, WODetailExtensionHandler, MetersListHandler, ClassificationFormHandler, ErrorIndicator, Group, MSStatusChangeHandler, GroupItem, TextArea, LastUpdateText, WOAttachmentHandler, AttachmentHandler, LaborAssignmentHandler, PlannedToolHandler, Footer, ClassifyWorkOrderHandler, DialogHandler, SketchToolHandler, WOCreateQueryBaseHandler, StatusChangeHandler, ActualLaborHandler, CheckBox, Lookup, SearchAttributes, SearchAttribute, ReturnAttributes, ReturnAttribute, PseudoOfflineModeHandler, CreateQueryBaseHandler, ErrorActions, LookupHandler, PushNotificationDialogHandler, DateTimePicker, SettingsHandler, ChangePasswordHandler, AdditionalDataDialogHandler, RadioButton, LoggerReportHandler, TimeTrackHandler, DurationPicker, EsigHandler, SignatureHandler) {
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
               'id' : 'SGZMobile',
               'blindQuerySupport' : 'false',
               'version' : '20191125',
               'requiredRole' : 'ANYWHERE_TECHNICIAN',
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
               'image' : '..\/..\/..\/..\/..\/..\/images\/mdpi\/Logo_SGZ_H_Mobile.svg',
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
               'label' : MessageService.createStaticMessage('v7.6.4:v7.6.4:2809232000H'),
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
               'artifactId' : 'WorkExecution.WorkItemsView_OSConsultaPadrao',
               'id' : 'aw9334b591',
               'label' : MessageService.createStaticMessage('Default List'),
               'queryBase' : 'OSConsultaPadrao',
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

            var query003 = new Query({
               'system' : 'true',
               'artifactId' : 'WorkExecution.WorkItemsView___created__',
               'id' : 'aw80b4e7b1',
               'label' : MessageService.createStaticMessage('Items Created In The Field'),
               'queryBase' : '__created__',
            });
            queries001.addChild( query003 );


            var query004 = new Query({
               'system' : 'true',
               'artifactId' : 'WorkExecution.WorkItemsView___search_result__',
               'id' : 'aw9debf8fd',
               'label' : MessageService.createStaticMessage('Search Results'),
               'queryBase' : '__search_result__',
            });
            queries001.addChild( query004 );

            var eventHandlers010 = [
               {
                     'method' : 'hideShowSearchedMenu',
                     'artifactId' : 'WorkExecution.WorkItemsView___search_result___eventHandlers_render_hideShowSearchedMenu',
                     'id' : 'awc743d3fb',
                     'event' : 'render',
                     'class' : 'application.handlers.WOListHandler',
               }
            ];
            query004.eventHandlers = eventHandlers010;
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

            var eventHandlers011 = [
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
            action001.eventHandlers = eventHandlers011;

            var action002 = new Action({
               'overflow' : true,
               'artifactId' : 'WorkExecution.WorkItemsView_SynchronizeData_action',
               'id' : 'aw681d51aa',
               'label' : MessageService.createStaticMessage('Synchronize Data'),
            });
            actions001.addChild( action002 );

            var eventHandlers012 = [
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
            action002.eventHandlers = eventHandlers012;

            var action003 = new Action({
               'image' : '\/images\/header_materialsAndTools_OFF.svg',
               'artifactId' : 'WorkExecution.WorkItemsView_MaterialsTools_action',
               'id' : 'aw4a48f725',
               'label' : MessageService.createStaticMessage('Materials & Tools'),
            });
            actions001.addChild( action003 );

            var eventHandlers013 = [
               {
                     'method' : 'initMaterialsToolsSummary',
                     'artifactId' : 'WorkExecution.WorkItemsView_MaterialsTools_action_eventHandlers_click_initMaterialsToolsSummary',
                     'id' : 'aw25dcc5a0',
                     'event' : 'click',
                     'class' : 'application.handlers.WOListHandler',
               },
               {
                     'method' : 'enableDisableMaterialToolsAction',
                     'artifactId' : 'WorkExecution.WorkItemsView_MaterialsTools_action_eventHandlers_render_enableDisableMaterialToolsAction',
                     'id' : 'aw9c2d1ed5',
                     'event' : 'render',
                     'class' : 'application.handlers.WOListHandler',
               }
            ];
            action003.eventHandlers = eventHandlers013;

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

            var eventHandlers014 = [
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

            var sortOptions001 = new SortOptions({
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_list_sortOptions',
               'id' : 'aw45ed0cf0',
            });

            var sortOption001 = new SortOption({
               'artifactId' : 'WorkExecution.WorkItemsView_sortOption_ScheduledStart',
               'id' : 'aw4cf8f549',
               'label' : MessageService.createStaticMessage('Scheduled Start'),
            });
            sortOptions001.addChild( sortOption001 );


            var sortAttribute001 = new SortAttribute({
               'name' : 'starttimeISO',
               'artifactId' : 'WorkExecution.WorkItemsView_ScheduledStart_sortAttribute_starttime',
               'id' : 'awd854b37d',
               'direction' : 'asc',
            });
            sortOption001.addChild( sortAttribute001 );


            var sortOption002 = new SortOption({
               'artifactId' : 'WorkExecution.WorkItemsView_sortOption_Status',
               'id' : 'awc481c8d1',
               'label' : MessageService.createStaticMessage('Status'),
            });
            sortOptions001.addChild( sortOption002 );


            var sortAttribute002 = new SortAttribute({
               'name' : 'status',
               'artifactId' : 'WorkExecution.WorkItemsView_Status_sortAttribute_statusdesc',
               'id' : 'awf54d95d3',
               'direction' : 'asc',
            });
            sortOption002.addChild( sortAttribute002 );


            var sortOption003 = new SortOption({
               'artifactId' : 'WorkExecution.WorkItemsView_sortOption_WorkOrder',
               'id' : 'aw886f0901',
               'label' : MessageService.createStaticMessage('Service Item'),
            });
            sortOptions001.addChild( sortOption003 );


            var sortAttribute003 = new SortAttribute({
               'name' : 'wonum',
               'artifactId' : 'WorkExecution.WorkItemsView_WorkOrder_sortAttribute_wonum',
               'id' : 'awaacfcb16',
               'direction' : 'asc',
            });
            sortOption003.addChild( sortAttribute003 );



            var listItemTemplate001 = new ListItemTemplate({
               'layout' : 'WorkListItem',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_listItemTemplate_WorkListItem',
               'id' : 'aw74bf23f2',
            });

            var listtext001 = new ListText({
               'resourceAttribute' : 'classificationdesc',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_classificationdesc',
               'id' : 'aw939dd69',
            });
            listItemTemplate001.addChild( listtext001 );


            var listtext002 = new ListText({
               'resourceAttribute' : 'wonum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_wonum',
               'id' : 'aw6b5eaca',
            });
            listItemTemplate001.addChild( listtext002 );


            var listtext003 = new ListText({
               'resourceAttribute' : 'ms_aging',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_ms_aging',
               'id' : 'aw6bb30aed',
            });
            listItemTemplate001.addChild( listtext003 );


            var listtext004 = new ListText({
               'resourceAttribute' : 'starttime',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_starttime',
               'id' : 'aw5840f54a',
            });
            listItemTemplate001.addChild( listtext004 );


            var image003 = new Image({
               'image' : 'statusicons\/{:internalStatus}.png',
               'cssClass' : 'statusDesc',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_statusimg',
               'id' : 'awc0a06672',
               'cssAttributes' : 'internalStatus',
               'platform' : 'false',
            });
            listItemTemplate001.addChild( image003 );


            var image004 = new Image({
               'image' : 'statusicons\/{:ms_emergency}.png',
               'cssClass' : 'statusDesc',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_emergencyimg',
               'id' : 'aw6dca41ee',
               'cssAttributes' : 'internalStatus',
               'platform' : 'false',
            });
            listItemTemplate001.addChild( image004 );


            var listtext005 = new ListText({
               'resourceAttribute' : 'statusdesc',
               'cssClass' : 'statusDesc',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_statusdesc',
               'id' : 'aw6aa53129',
               'cssAttributes' : 'status',
            });
            listItemTemplate001.addChild( listtext005 );


            var listtext006 = new ListText({
               'resourceAttribute' : 'woserviceaddressline2',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_woserviceaddressaddressline2',
               'hideEmpty' : 'true',
               'id' : 'awfca7f848',
            });
            listItemTemplate001.addChild( listtext006 );


            var listtext007 = new ListText({
               'resourceAttribute' : 'ms_tsstartdate',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_ms_tsstartdate',
               'hideEmpty' : 'true',
               'id' : 'aw9d2eef65',
            });
            listItemTemplate001.addChild( listtext007 );


            var listtext008 = new ListText({
               'resourceAttribute' : 'woservicetaddrnumber',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_woserviceaddressstaddrnumber',
               'hideEmpty' : 'true',
               'id' : 'awc3407f60',
            });
            listItemTemplate001.addChild( listtext008 );


            var listtext009 = new ListText({
               'resourceAttribute' : 'ms_tsstarttime',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_ms_tsstarttime',
               'hideEmpty' : 'true',
               'id' : 'aw5824405a',
            });
            listItemTemplate001.addChild( listtext009 );


            var actions002 = new Actions({
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_listItemTemplate_WorkListItem_workOrder_actions',
               'id' : 'aw64019524',
            });
            listItemTemplate001.addChild( actions002 );


            var action004 = new Action({
               'transitionTo' : 'WorkExecution.EditStatusView',
               'artifactId' : 'WorkExecution.WorkItemsView_ChangeStatus_action',
               'id' : 'aw455e6478',
               'label' : MessageService.createStaticMessage('Change Status'),
            });
            actions002.addChild( action004 );

            var eventHandlers015 = [
               {
                     'method' : 'renderWorkOrderActionIfNotLocked',
                     'artifactId' : 'WorkExecution.WorkItemsView_ChangeStatus_action_eventHandlers_render_renderWorkOrderActionIfNotLocked',
                     'id' : 'aw680a0680',
                     'event' : 'render',
                     'class' : 'application.handlers.WOListHandler',
               }
            ];
            action004.eventHandlers = eventHandlers015;


            var list001 = new List({
               'resource' : 'workOrder',
               'transitionTo' : 'WorkExecution.WorkDetailView',
               'listItemTemplate' : listItemTemplate001,
               'resolverFunction' : 'resolveWonumLabel',
               'displayPageSize' : '20',
               'recordLabel' : MessageService.createDynamicMessage('Work Order {0}', 'application.handlers.WOListHandler', 'resolveWonumLabel'),
               'sortOptions' : sortOptions001,
               'findByScan' : findByScan001,
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_list',
               'eventHandlers' : eventHandlers014,
               'id' : 'awcf488ae7',
               'queryBase' : 'OSConsultaPadrao',
               'resolverClass' : 'application.handlers.WOListHandler',
            });
            view002.addChild( list001 );

            var eventHandlers016 = [
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
                     'artifactId' : 'WorkExecution.WorkItemsView_SynchronizeData_action_eventHandlers_click_sync_render',
                     'id' : 'aw630887da',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            view002.eventHandlers = eventHandlers016;
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
               'label' : MessageService.createStaticMessage('Service Item Details'),
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
                     'assetSpec' : {
                        'reload' : true,
                        'artifactId' : 'WorkExecution.WorkDetailView_workOrder_assetSpec',
                        'id' : 'aw9e0aa941',
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
               'domaintypes' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_domaintypes',
                  'id' : 'aw198710af',
               },
               'ancestorLoc' : {
                  'artifactId' : 'WorkExecution.FollowUpWorkOrderView_ancestorLoc',
                  'id' : 'aw456357ee',
               },
            };
            view003.addRequiredResources( requiredResources003 );

            var actions003 = new Actions({
               'artifactId' : 'WorkExecution.WorkDetailView_actions',
               'id' : 'awcdf7a0b1',
            });
            view003.addChild( actions003 );


            var action005 = new Action({
               'overflow' : true,
               'artifactId' : 'WorkExecution.WorkDetailView_CreateFollow-UpWorkOrder_action',
               'id' : 'aw71a514d8',
               'label' : MessageService.createStaticMessage('Create Follow-Up Service Item'),
            });
            actions003.addChild( action005 );

            var eventHandlers017 = [
               {
                     'method' : 'createServiceItemAction',
                     'artifactId' : 'WorkExecution.WorkDetailView_CreateFollow-UpWorkOrder_action_eventHandlers_click_createFollowUpAction',
                     'id' : 'awef9c69ea',
                     'event' : 'click',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               },
               {
                     'method' : 'renderCreateServiceItemAction',
                     'artifactId' : 'WorkExecution.WorkDetailView_CreateFollow-UpWorkOrder_action_eventHandlers_render_renderCreateFollowUpAction',
                     'id' : 'aw3017bbef',
                     'event' : 'render',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            action005.eventHandlers = eventHandlers017;
            var eventHandlers018 = [
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
                     'method' : 'initializeMeters',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_initialize_initializeMeters',
                     'id' : 'aw6a805446',
                     'event' : 'initialize',
                     'class' : 'application.handlers.MetersListHandler',
               },
               {
                     'method' : 'showWOSpecSorted',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_show_showWOSpecSorted',
                     'id' : 'aw9eba0a38',
                     'event' : 'show',
                     'class' : 'application.handlers.ClassificationFormHandler',
               }
            ];
            view003.eventHandlers = eventHandlers018;

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
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_group_0',
               'id' : 'awd8390e71',
            });
            container008.addChild( group001 );

            var eventHandlers019 = [
               {
                     'method' : 'ReadOnlyWODetailsView',
                     'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_eventHandlers_initialize_open_WODetailsView',
                     'id' : 'aw6af98e1b',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            group001.eventHandlers = eventHandlers019;

            var groupitem001 = new GroupItem({
               'layout' : 'Item1Button1',
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.EditStatusView_0',
               'id' : 'awf4c13728',
            });
            group001.addChild( groupitem001 );


            var text013 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.EditStatusView_0_statusdesc_Status',
               'id' : 'awd07b3df8',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem001.addChild( text013 );


            var groupitem002 = new GroupItem({
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_0',
               'id' : 'aw63995462',
            });
            group001.addChild( groupitem002 );


            var text014 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : false,
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_0_wonum_WorkOrder',
               'id' : 'awc0e374cb',
               'label' : MessageService.createStaticMessage('Service Item'),
            });
            groupitem002.addChild( text014 );


            var groupitem003 = new GroupItem({
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_Parent_groupitem_0',
               'id' : 'awf0384360',
            });
            group001.addChild( groupitem003 );


            var text015 = new Text({
               'resourceAttribute' : 'parentwonum',
               'editable' : false,
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_0_Parent_WorkOrder',
               'id' : 'aw6ad04f78',
               'label' : MessageService.createStaticMessage('Work Order'),
            });
            groupitem003.addChild( text015 );


            var groupitem004 = new GroupItem({
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_ms_aging',
               'id' : 'aw60a99066',
            });
            group001.addChild( groupitem004 );


            var text016 = new Text({
               'resourceAttribute' : 'ms_aging',
               'editable' : false,
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_0_ms_aging_WorkOrder',
               'id' : 'aw61aa5c91',
               'label' : MessageService.createStaticMessage('Dias'),
            });
            groupitem004.addChild( text016 );


            var groupitem005 = new GroupItem({
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_groupitem_WorkExecution.EditSiteidView_0',
               'id' : 'aw928eb58c',
            });
            group001.addChild( groupitem005 );


            var text017 = new Text({
               'resourceAttribute' : 'siteid',
               'editable' : false,
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_groupitem_0_siteid_WorkOrder',
               'id' : 'awfd07dec',
               'label' : MessageService.createStaticMessage('Regional Government'),
            });
            groupitem005.addChild( text017 );


            var groupitem006 = new GroupItem({
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.LongDescriptionView_0',
               'id' : 'aw40eca829',
            });
            group001.addChild( groupitem006 );


            var text018 = new Text({
               'resourceAttribute' : 'longdescription',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.LongDescriptionView_0_longdescription',
               'id' : 'aw826f863c',
               'label' : MessageService.createStaticMessage('Description'),
            });
            groupitem006.addChild( text018 );


            var groupitem007 = new GroupItem({
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_groupitem_WorkExecution.Pd_Obs_0',
               'id' : 'aw12276134',
            });
            group001.addChild( groupitem007 );


            var textarea001 = new TextArea({
               'resourceAttribute' : 'pd_obs',
               'editable' : false,
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_groupitem_WorkExecution.Pd_Obs_0_obs_pd_obs',
               'id' : 'aw72d08916',
               'label' : MessageService.createStaticMessage('Comments'),
            });
            groupitem007.addChild( textarea001 );


            var groupitem008 = new GroupItem({
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_1',
               'id' : 'aw149e64f4',
            });
            group001.addChild( groupitem008 );


            var text019 = new Text({
               'resourceAttribute' : 'woserviceaddressline2',
               'editable' : false,
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_1_woserviceaddress_woserviceaddressaddressline2',
               'id' : 'aw45c61636',
               'label' : MessageService.createStaticMessage('Address'),
            });
            groupitem008.addChild( text019 );


            var text020 = new Text({
               'resourceAttribute' : 'woservicetaddrnumber',
               'editable' : false,
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_1_woserviceaddress_woserviceaddressstaddrnumber',
               'id' : 'aw7a21911e',
               'label' : MessageService.createStaticMessage('Number'),
            });
            groupitem008.addChild( text020 );


            var text021 = new Text({
               'resourceAttribute' : 'woserviceaddressline3',
               'editable' : false,
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_1_woserviceaddress_woserviceaddressaddressline3',
               'id' : 'aw32c126a0',
               'label' : MessageService.createStaticMessage('District'),
            });
            groupitem008.addChild( text021 );


            var text022 = new Text({
               'resourceAttribute' : 'woservicepostalcode',
               'editable' : false,
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_1_woserviceaddress_woserviceaddresspostalcode',
               'id' : 'aw150379d9',
               'label' : MessageService.createStaticMessage('Postal Code'),
            });
            groupitem008.addChild( text022 );


            var groupitem009 = new GroupItem({
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_2',
               'id' : 'aw8d97354e',
            });
            group001.addChild( groupitem009 );


            var text023 = new Text({
               'resourceAttribute' : 'starttime',
               'editable' : false,
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_2_starttime_ScheduledStart',
               'id' : 'awfbab3200',
               'label' : MessageService.createStaticMessage('Scheduled Start'),
               'placeHolder' : MessageService.createStaticMessage('Select'),
            });
            groupitem009.addChild( text023 );


            var groupitem010 = new GroupItem({
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_3',
               'id' : 'awfa9005d8',
            });
            group001.addChild( groupitem010 );


            var text024 = new Text({
               'resourceAttribute' : 'finishtime',
               'editable' : false,
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_3_finishtime_ScheduledFinish',
               'id' : 'aw9a85e37a',
               'label' : MessageService.createStaticMessage('Scheduled Finish'),
               'placeHolder' : MessageService.createStaticMessage('Select'),
            });
            groupitem010.addChild( text024 );


            var groupitem011 = new GroupItem({
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.ClassifyWorkOrderView_0',
               'id' : 'aw54a5ea6e',
            });
            group001.addChild( groupitem011 );


            var text025 = new Text({
               'resourceAttribute' : 'classificationdesc',
               'editable' : false,
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.ClassifyWorkOrderView_0_classificationdesc',
               'id' : 'aw356b64fa',
               'label' : MessageService.createStaticMessage('Classification'),
            });
            groupitem011.addChild( text025 );


            var groupitem012 = new GroupItem({
               'transitionTo' : 'WorkExecution.EditAssetView',
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.AssetWorkOrderView_0',
               'id' : 'awd8bfce13',
            });
            group001.addChild( groupitem012 );


            var text026 = new Text({
               'resourceAttribute' : 'asset',
               'editable' : false,
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.AssetWorkOrderView_0_Assetnum',
               'id' : 'awba5fde93',
               'label' : MessageService.createStaticMessage('Asset'),
            });
            groupitem012.addChild( text026 );


            var text027 = new Text({
               'resourceAttribute' : 'maxassetdesc',
               'editable' : false,
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.MaxassetdescWorkOrderView_0_Maxassetdesc',
               'id' : 'aw5b06e417',
               'label' : MessageService.createStaticMessage('Descri\u00E7\u00E3o'),
            });
            groupitem012.addChild( text027 );

            var eventHandlers020 = [
               {
                     'method' : 'renderNoAssetToWO',
                     'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_eventHandlers_initialize_open_renderNoAssetToWO',
                     'id' : 'aw190f892b',
                     'event' : 'render',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            groupitem012.eventHandlers = eventHandlers020;

            var group002 = new Group({
               'artifactId' : 'WorkExecution.WorkDetailView_group_0',
               'id' : 'aw55a0f9d4',
            });
            container008.addChild( group002 );

            var eventHandlers021 = [
               {
                     'method' : 'hide_WODetailsView',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_initialize_open_WODetailsView',
                     'id' : 'aw6ddd099a',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            group002.eventHandlers = eventHandlers021;

            var groupitem013 = new GroupItem({
               'layout' : 'Item1Button1',
               'transitionTo' : 'WorkExecution.EditStatusView',
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.EditStatusView_0',
               'id' : 'aw70834373',
            });
            group002.addChild( groupitem013 );


            var text028 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.EditStatusView_0_statusdesc_Status',
               'id' : 'awc31bcd13',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem013.addChild( text028 );


            var groupitem014 = new GroupItem({
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_0',
               'id' : 'aw83c332eb',
            });
            group002.addChild( groupitem014 );


            var text029 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_0_wonum_WorkOrder',
               'id' : 'aw7a04e8bf',
               'label' : MessageService.createStaticMessage('Service Item'),
            });
            groupitem014.addChild( text029 );


            var groupitem015 = new GroupItem({
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_Parent_groupitem_0',
               'id' : 'aw97c79654',
            });
            group002.addChild( groupitem015 );


            var text030 = new Text({
               'resourceAttribute' : 'parentwonum',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_0_Parent_WorkOrder',
               'id' : 'aw3d021dc1',
               'label' : MessageService.createStaticMessage('Work Order'),
            });
            groupitem015.addChild( text030 );


            var groupitem016 = new GroupItem({
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_ms_aging',
               'id' : 'aw7564552',
            });
            group002.addChild( groupitem016 );


            var text031 = new Text({
               'resourceAttribute' : 'ms_aging',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_0_ms_aging_WorkOrder',
               'id' : 'awd1c82e6a',
               'label' : MessageService.createStaticMessage('Dias'),
            });
            groupitem016.addChild( text031 );


            var groupitem017 = new GroupItem({
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.EditSiteidView_0',
               'id' : 'aw22ecc777',
            });
            group002.addChild( groupitem017 );


            var text032 = new Text({
               'resourceAttribute' : 'siteid',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_0_siteid_WorkOrder',
               'id' : 'aw682fa8d8',
               'label' : MessageService.createStaticMessage('Regional Government'),
            });
            groupitem017.addChild( text032 );


            var groupitem018 = new GroupItem({
               'transitionTo' : 'WorkExecution.DescriptionView',
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.LongDescriptionView_0',
               'id' : 'awc78365d9',
            });
            group002.addChild( groupitem018 );


            var text033 = new Text({
               'resourceAttribute' : 'longdescription',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.LongDescriptionView_0_longdescription',
               'id' : 'aw7ed6398b',
               'label' : MessageService.createStaticMessage('Description'),
            });
            groupitem018.addChild( text033 );


            var groupitem019 = new GroupItem({
               'transitionTo' : 'WorkExecution.PDOBSView',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.Pd_Obs_0',
               'id' : 'awa6def090',
            });
            group002.addChild( groupitem019 );


            var textarea002 = new TextArea({
               'resourceAttribute' : 'pd_obs',
               'editable' : true,
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.Pd_Obs_0_obs_pd_obs',
               'id' : 'aw75f40e97',
               'label' : MessageService.createStaticMessage('Comments'),
            });
            groupitem019.addChild( textarea002 );


            var groupitem020 = new GroupItem({
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_1',
               'id' : 'awf4c4027d',
            });
            group002.addChild( groupitem020 );


            var text034 = new Text({
               'resourceAttribute' : 'woserviceaddressline2',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_1_woserviceaddress_woserviceaddressaddressline2',
               'id' : 'aw49aeab2e',
               'label' : MessageService.createStaticMessage('Address'),
            });
            groupitem020.addChild( text034 );


            var text035 = new Text({
               'resourceAttribute' : 'woservicetaddrnumber',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_1_woserviceaddress_woserviceaddressstaddrnumber',
               'id' : 'aw76492c06',
               'label' : MessageService.createStaticMessage('Number'),
            });
            groupitem020.addChild( text035 );


            var text036 = new Text({
               'resourceAttribute' : 'woserviceaddressline3',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_1_woserviceaddress_woserviceaddressaddressline3',
               'id' : 'aw3ea99bb8',
               'label' : MessageService.createStaticMessage('District'),
            });
            groupitem020.addChild( text036 );


            var text037 = new Text({
               'resourceAttribute' : 'woservicepostalcode',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_1_woserviceaddress_woserviceaddresspostalcode',
               'id' : 'aw8bd7734',
               'label' : MessageService.createStaticMessage('Postal Code'),
            });
            groupitem020.addChild( text037 );


            var groupitem021 = new GroupItem({
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_2',
               'id' : 'aw6dcd53c7',
            });
            group002.addChild( groupitem021 );


            var text038 = new Text({
               'resourceAttribute' : 'starttime',
               'editable' : true,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_2_starttime_ScheduledStart',
               'id' : 'aw539da9ed',
               'label' : MessageService.createStaticMessage('Scheduled Start'),
               'placeHolder' : MessageService.createStaticMessage('Select'),
            });
            groupitem021.addChild( text038 );

            var eventHandlers022 = [
               {
                     'method' : 'isReadonly',
                     'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.EditAssetView_0_asset_Asset_eventHandlers_render_starttime.readonly',
                     'id' : 'aw5485a315',
                     'event' : 'render',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            text038.eventHandlers = eventHandlers022;

            var groupitem022 = new GroupItem({
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_3',
               'id' : 'aw1aca6351',
            });
            group002.addChild( groupitem022 );


            var text039 = new Text({
               'resourceAttribute' : 'finishtime',
               'editable' : true,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_3_finishtime_ScheduledFinish',
               'id' : 'aw16888c21',
               'label' : MessageService.createStaticMessage('Scheduled Finish'),
               'placeHolder' : MessageService.createStaticMessage('Select'),
            });
            groupitem022.addChild( text039 );

            var eventHandlers023 = [
               {
                     'method' : 'isReadonly',
                     'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.EditAssetView_0_asset_Asset_eventHandlers_render_finishtime.readonly',
                     'id' : 'aw5ad95d84',
                     'event' : 'render',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            text039.eventHandlers = eventHandlers023;

            var groupitem023 = new GroupItem({
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.ClassifyWorkOrderView_0',
               'id' : 'awa5cc32b1',
            });
            group002.addChild( groupitem023 );


            var text040 = new Text({
               'resourceAttribute' : 'classificationdesc',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.ClassifyWorkOrderView_0_classificationdesc',
               'id' : 'awa01b851c',
               'label' : MessageService.createStaticMessage('Classification'),
            });
            groupitem023.addChild( text040 );


            var groupitem024 = new GroupItem({
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_groupitem_WorkExecution.EditSiteidView_team',
               'id' : 'aw91534e1c',
            });
            group002.addChild( groupitem024 );


            var text041 = new Text({
               'resourceAttribute' : 'amcrew',
               'lookup' : 'sgzMobile.amcrewLookup',
               'editable' : false,
               'artifactId' : 'ReadOnlyWorkExecution.WorkDetailView_groupitem_0_siteid_WorkOrder_team',
               'id' : 'awe7a5ad64',
               'label' : MessageService.createStaticMessage('Crew'),
            });
            groupitem024.addChild( text041 );

            var eventHandlers024 = [
               {
                     'method' : 'verifyEmergency',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_initialize_open_renderNoAssetToWO_ms_emergencial',
                     'id' : 'aw8b43c0ff',
                     'event' : 'render',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            groupitem024.eventHandlers = eventHandlers024;

            var groupitem025 = new GroupItem({
               'transitionTo' : 'WorkExecution.EditAssetView',
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.AssetWorkOrderView_0',
               'id' : 'awbfd1ec82',
            });
            group002.addChild( groupitem025 );


            var text042 = new Text({
               'resourceAttribute' : 'asset',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.AssetWorkOrderView_0_Assetnum',
               'id' : 'aw129ae59f',
               'label' : MessageService.createStaticMessage('Asset'),
            });
            groupitem025.addChild( text042 );


            var text043 = new Text({
               'resourceAttribute' : 'maxassetdesc',
               'editable' : false,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_groupitem_WorkExecution.MaxassetdescWorkOrderView_0_Maxassetdesc',
               'id' : 'aw4af7b521',
               'label' : MessageService.createStaticMessage('Descri\u00E7\u00E3o'),
            });
            groupitem025.addChild( text043 );

            var eventHandlers025 = [
               {
                     'method' : 'renderNoAssetToWO',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_initialize_open_renderNoAssetToWO',
                     'id' : 'awc71c2175',
                     'event' : 'render',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            groupitem025.eventHandlers = eventHandlers025;


            var listItemTemplate002 = new ListItemTemplate({
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_workOrderSpec_listItemTemplate',
               'id' : 'aw6aa635f1',
            });

            var listtext010 = new ListText({
               'resourceAttribute' : 'localdescriptionunit',
               'cssClass' : 'specLayoutRight editableLabel',
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_description',
               'id' : 'awf155227d',
            });
            listItemTemplate002.addChild( listtext010 );


            var eventHandlers026 = [
               {
                     'method' : 'hide_WODetailsView',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_initialize_open_WODetailsView2',
                     'id' : 'awa62195e',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'handleConditionalReadOnlyMeasureunitid',
                     'artifactId' : 'WorkExecution.WorkDetailView_workOrder_measureunitid_0_eventHandlers_render',
                     'id' : 'awcf5f9594',
                     'event' : 'render',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               },
               {
                     'method' : 'readOnlySpec',
                     'artifactId' : 'WorkExecution.WorkDetailView_workOrder_measureunitid_0_eventHandlers_render_readOnlySpec',
                     'id' : 'aw543493d2',
                     'event' : 'render',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];

            var list002 = new List({
               'resource' : 'workOrder',
               'listItemTemplate' : listItemTemplate002,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_workOrderSpec_list',
               'eventHandlers' : eventHandlers026,
               'attribute' : 'workOrderSpec',
               'hideEmpty' : 'true',
               'id' : 'awdaa91392',
               'label' : MessageService.createStaticMessage('Specifications'),
               'mixinclass' : 'SpecificationStoreList',
               'collapsible' : 'true',
               'displayPageSize' : '25',
            });
            view003.addChild( list002 );


            var container009 = new Container({
               'artifactId' : 'WorkExecution.WorkDetailView_container_0',
               'id' : 'aweae70540',
            });
            view003.addChild( container009 );

            var eventHandlers027 = [
               {
                     'method' : 'hide_WODetailsView',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_initialize_open_WODetailsView5',
                     'id' : 'aw94068cfd',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            container009.eventHandlers = eventHandlers027;

            var group003 = new Group({
               'artifactId' : 'WorkExecution.WorkDetailView_group_10',
               'id' : 'aw6c2b5854',
            });
            container009.addChild( group003 );


            var groupitem026 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'transitionTo' : 'Wotickets.DescriptionView',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.Ms_Asfalto0',
               'id' : 'aw58234ba2',
            });
            group003.addChild( groupitem026 );


            var text044 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.MassaAsfalticaView',
               'id' : 'awe259f126',
               'value' : MessageService.createStaticMessage('Descarregar Massa Asf\u00E1ltica'),
            });
            groupitem026.addChild( text044 );

            var eventHandlers028 = [
               {
                     'method' : 'renderAsphalt',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_initialize_open_renderrenderAsphalt',
                     'id' : 'aw5747bb49',
                     'event' : 'render',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            groupitem026.eventHandlers = eventHandlers028;

            var group004 = new Group({
               'artifactId' : 'WorkExecution.WorkDetailView_group_1',
               'id' : 'aw22a7c942',
            });
            container009.addChild( group004 );


            var groupitem027 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'enableFeatureByProperty' : 'attachments.enabled',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.AttachmentsView_0',
               'id' : 'aw2705c7e0',
            });
            group004.addChild( groupitem027 );

            var eventHandlers029 = [
               {
                     'method' : 'AttRedirect',
                     'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_eventHandlers_click_AttRedirect',
                     'id' : 'awc30e1392',
                     'event' : 'click',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            groupitem027.eventHandlers = eventHandlers029;

            var text045 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.AttachmentsView_0_Attachments',
               'id' : 'aw5f5bd9ca',
               'value' : MessageService.createStaticMessage('Attachments'),
            });
            groupitem027.addChild( text045 );


            var text046 = new Text({
               'resourceAttribute' : 'attachmentssize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.AttachmentsView_0_attachmentssize',
               'id' : 'aw4636d2d3',
            });
            groupitem027.addChild( text046 );


            var group005 = new Group({
               'artifactId' : 'WorkExecution.WorkDetailView_group_2',
               'id' : 'awbbae98f8',
            });
            container009.addChild( group005 );

            var eventHandlers030 = [
               {
                     'method' : 'hide_WODetailsView',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_initialize_open_WODetailsView4',
                     'id' : 'awe301bc6b',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            group005.eventHandlers = eventHandlers030;

            var groupitem028 = new GroupItem({
               'layout' : 'Item1Count1Button1',
               'transitionTo' : 'WorkExecution.LaborAssignmentsView',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.LaborAssignmentsView_0',
               'id' : 'awd41ab6a4',
            });
            group005.addChild( groupitem028 );


            var text047 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.LaborAssignmentsView_0_LaborAssignments',
               'id' : 'awe1d9e6a9',
               'value' : MessageService.createStaticMessage('Labor Assignments'),
            });
            groupitem028.addChild( text047 );


            var text048 = new Text({
               'resourceAttribute' : 'assignmentlistsize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.LaborAssignmentsView_0_assignmentlistsize',
               'id' : 'awff7f784e',
            });
            groupitem028.addChild( text048 );


            var groupitem029 = new GroupItem({
               'layout' : 'Item1Count1Button1',
               'transitionTo' : 'WorkExecution.PlannedToolsView',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.PlannedToolsView_0',
               'id' : 'awcf95bf8a',
            });
            group005.addChild( groupitem029 );


            var text049 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.PlannedToolsView_0_PlannedTools',
               'id' : 'aw3297d83a',
               'value' : MessageService.createStaticMessage('Planned Tools'),
            });
            groupitem029.addChild( text049 );


            var text050 = new Text({
               'resourceAttribute' : 'toollistsize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_WorkExecution.PlannedToolsView_0_toollistsize',
               'id' : 'aw2ce4a2b4',
            });
            groupitem029.addChild( text050 );


            var group006 = new Group({
               'artifactId' : 'WorkExecution.WorkDetailView_group_3',
               'id' : 'awcca9a86e',
            });
            container009.addChild( group006 );


            var group007 = new Group({
               'artifactId' : 'WorkExecution.WorkDetailView_group_5',
               'id' : 'aw25ca0d5b',
            });
            container009.addChild( group007 );


            var groupitem030 = new GroupItem({
               'artifactId' : 'WorkExecution.WorkDetailView_groupitem_0',
               'id' : 'awaf3c9453',
            });
            group007.addChild( groupitem030 );


            var lastupdatetext001 = new LastUpdateText({
               'artifactId' : 'WorkExecution.WorkDetailView_lastupdatetext',
               'id' : 'aw6e82add1',
            });
            groupitem030.addChild( lastupdatetext001 );

            var eventHandlers031 = [
               {
                     'method' : 'hide_WODetailsView',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_initialize_open_WODetailsView3',
                     'id' : 'aw7d6529c8',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            groupitem030.eventHandlers = eventHandlers031;

            var container010 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'CAMPOS_TIMESHEET',
               'id' : 'aw591fb5e7',
            });
            view003.addChild( container010 );

            var eventHandlers032 = [
               {
                     'method' : 'hide_timesheetFields',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_initialize_open_hideTS',
                     'id' : 'aw88170bb4',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            container010.eventHandlers = eventHandlers032;

            var group008 = new Group({
               'artifactId' : 'WorkExecution.TimesheetView_group_0',
               'id' : 'aw4ac03be8',
            });
            container010.addChild( group008 );


            var groupitem031 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.EditSiteidView_011',
               'id' : 'aw1bff4742',
            });
            group008.addChild( groupitem031 );


            var text051 = new Text({
               'resourceAttribute' : 'siteid',
               'editable' : false,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution_groupitem_0_siteid_WorkOrder_11',
               'id' : 'aw45afd75e',
               'label' : MessageService.createStaticMessage('Regional Government'),
            });
            groupitem031.addChild( text051 );


            var groupitem032 = new GroupItem({
               'artifactId' : 'WorkExecution.TimesheetView_groupitem_02_0',
               'id' : 'aw35477a19',
            });
            group008.addChild( groupitem032 );


            var text052 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : false,
               'artifactId' : 'lbvendor_WorkExecution.TimesheetView_wonum',
               'id' : 'aw70e038a5',
               'label' : MessageService.createStaticMessage('Equipe'),
            });
            groupitem032.addChild( text052 );


            var groupitem033 = new GroupItem({
               'artifactId' : 'WorkExecution.TimesheetView_groupitem_021',
               'id' : 'aw57b2df61',
            });
            group008.addChild( groupitem033 );


            var text053 = new Text({
               'resourceAttribute' : 'ms_tsmembersqty',
               'editable' : true,
               'artifactId' : 'lbvendor_WorkExecution.TimesheetView_lbamcrew',
               'id' : 'aw17e68a31',
               'label' : MessageService.createStaticMessage('Membros da Equipe'),
            });
            groupitem033.addChild( text053 );


            var groupitem034 = new GroupItem({
               'artifactId' : 'WorkExecution.TimesheetView_groupitem_03',
               'id' : 'awa20704f5',
            });
            group008.addChild( groupitem034 );


            var text054 = new Text({
               'resourceAttribute' : 'ms_tsstartdate',
               'editable' : false,
               'artifactId' : 'lbvendor_WorkExecution.TimesheetView_lbstartdate',
               'id' : 'aw402fe81',
               'label' : MessageService.createStaticMessage('Data Inicial'),
            });
            groupitem034.addChild( text054 );


            var text055 = new Text({
               'resourceAttribute' : 'ms_tsstarttime',
               'editable' : false,
               'artifactId' : 'lbvendor_WorkExecution.TimesheetView_lbstarttime',
               'id' : 'awc10851be',
               'label' : MessageService.createStaticMessage('Hora Inicial'),
            });
            groupitem034.addChild( text055 );


            var groupitem035 = new GroupItem({
               'artifactId' : 'WorkExecution.TimesheetView_groupitem_04',
               'id' : 'aw3c639156',
            });
            group008.addChild( groupitem035 );


            var text056 = new Text({
               'resourceAttribute' : 'ms_tsfinishdate',
               'editable' : false,
               'artifactId' : 'lbvendor_WorkExecution.TimesheetView_lbfinishdate',
               'id' : 'awf38f9100',
               'label' : MessageService.createStaticMessage('Data Final'),
            });
            groupitem035.addChild( text056 );


            var text057 = new Text({
               'resourceAttribute' : 'ms_tsfinishtime',
               'editable' : false,
               'artifactId' : 'lbvendor_WorkExecution.TimesheetView_lbfinishtime',
               'id' : 'aw36853e3f',
               'label' : MessageService.createStaticMessage('Hora Final'),
            });
            groupitem035.addChild( text057 );


            var groupitem036 = new GroupItem({
               'artifactId' : 'WorkExecution.TimesheetView_groupitem_08',
               'id' : 'aw35d5dd7d',
            });
            group008.addChild( groupitem036 );


            var text058 = new Text({
               'resourceAttribute' : 'ms_tsremarks',
               'editable' : true,
               'artifactId' : 'lbvendor_WorkExecution.TimesheetView_tmremarks',
               'id' : 'aw3c1871f8',
               'label' : MessageService.createStaticMessage('OBS.:'),
            });
            groupitem036.addChild( text058 );


            var button005 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.TimesheetView_Initiate_button',
               'id' : 'aw68c47680',
               'label' : MessageService.createStaticMessage('In\u00EDciar Jornada'),
            });
            var eventHandlers033 = [
               {
                     'method' : 'hide_timesheetFields',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_initialize_open_hideTS_2',
                     'id' : 'awa35638c7',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'ctrl_inicial',
                     'artifactId' : 'fiimWorkExecution.WorkDetailView_eventHandlers_initialize_open_hideTS_122',
                     'id' : 'aw6f07df35',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'initCategory',
                     'artifactId' : 'WorkExecution.WorkDetailView_TakePhoto_action_1010eventHandlers_render_initCategory',
                     'id' : 'aw6aec5f5c',
                     'event' : 'render',
                     'class' : 'application.handlers.WOAttachmentHandler',
               },
               {
                     'method' : 'launchCameraForPhoto',
                     'artifactId' : 'finisave_01',
                     'id' : 'aw282b78d8',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button005.eventHandlers = eventHandlers033;
            view003.addChild( button005 );


            var button006 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.TimesheetView_Finish_button',
               'id' : 'aw39a565dc',
               'label' : MessageService.createStaticMessage('Finalizar Jornada'),
            });
            var eventHandlers034 = [
               {
                     'method' : 'hide_timesheetFields',
                     'artifactId' : 'Finish_WorkExecution.WorkDetailView_eventHandlers_initialize_open_hideTS_2',
                     'id' : 'awc2fceea6',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'ctrl_datafinal',
                     'artifactId' : 'Finish_WorkExecution.WorkDetailView_eventHandlers_initialize_open_hideTS_122',
                     'id' : 'awd9d7bfbb',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'initCategory',
                     'artifactId' : 'Finish_WorkExecution.WorkDetailView_TakePhoto_action_1010eventHandlers_render_initCategory',
                     'id' : 'aw5064cd4b',
                     'event' : 'render',
                     'class' : 'application.handlers.WOAttachmentHandler',
               },
               {
                     'method' : 'launchCameraForPhoto',
                     'artifactId' : 'Finish_journey',
                     'id' : 'aw28e5e70c',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button006.eventHandlers = eventHandlers034;
            view003.addChild( button006 );

            var eventHandlers035 = [
               {
                     'method' : 'ValidateDateSpec',
                     'artifactId' : 'WorkExecution.WODetailView.ValidateDateSpec_back',
                     'id' : 'aw932ebd6a',
                     'event' : 'back',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            view003.eventHandlers = eventHandlers035;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.AttachmentsCategory', false);
               trackTimer.startTracking();
            }

            var view004 = new View({
               'id' : 'WorkExecution.AttachmentsCategory',
               'label' : MessageService.createStaticMessage('Categorias de Anexos'),
            });
            ui001.addChild( view004 );

            var requiredResources004 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.AttachmentsCategory_workOrder',
                  'id' : 'aw38d327a7',
                  'related' : {
                     'atcsessionlist' : {
                        'artifactId' : 'WorkExecution.AttachmentsCategory_attribute1',
                        'id' : 'awba8dfbc0',
                     },
                     'attachments' : {
                        'artifactId' : 'WorkExecution.AttachmentsCategory_attribute2',
                        'id' : 'aw2384aa7a',
                     },
                     'msdoclinkslist' : {
                        'artifactId' : 'WorkExecution.AttachmentsCategory_attribute3',
                        'id' : 'aw54839aec',
                     },
                  },
               },
            };
            view004.addRequiredResources( requiredResources004 );
            var eventHandlers036 = [
               {
                     'method' : 'countAttachmentsSection',
                     'artifactId' : 'WorkExecution.AttachmentsCategory.countAttachmentsSectionc_show',
                     'id' : 'aw65cb67b6',
                     'event' : 'show',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               },
               {
                     'method' : 'filterParentSection',
                     'artifactId' : 'WorkExecution.AttachmentsCategory.filterParentSection_show',
                     'id' : 'aw7ad3742e',
                     'event' : 'show',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            view004.eventHandlers = eventHandlers036;


            var listItemTemplate003 = new ListItemTemplate({
               'artifactId' : 'WorkExecution.AttachmentsCategory_listCategories',
               'id' : 'aw62514bc9',
            });

            var listtext011 = new ListText({
               'resourceAttribute' : 'ms_description',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'WorkExecution.AttachmentsCategory_listCategories_description',
               'id' : 'aw2f7ecaa6',
            });
            listItemTemplate003.addChild( listtext011 );


            var listtext012 = new ListText({
               'resourceAttribute' : 'secCount',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'WorkExecution.AttachmentsCategory_listCategories_count',
               'id' : 'aw2ec7f953',
            });
            listItemTemplate003.addChild( listtext012 );


            var image005 = new Image({
               'image' : 'calibrationpoint_normal_status.png',
               'cssClass' : 'statusDesc',
               'artifactId' : 'WorkExecution.AttachmentsCategory_listCategories_count.icon.ok',
               'id' : 'aw8b8e2b77',
               'platform' : 'false',
            });
            listItemTemplate003.addChild( image005 );

            var eventHandlers037 = [
               {
                     'method' : 'checkAttachmentsOK',
                     'artifactId' : 'WorkExecution.AttachmentsCategory_listCategories_count.icon.ok.eventhandler',
                     'id' : 'awf052abf1',
                     'event' : 'render',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            image005.eventHandlers = eventHandlers037;

            var image006 = new Image({
               'image' : 'calibrationpoint_critical_status.png',
               'cssClass' : 'statusDesc',
               'artifactId' : 'WorkExecution.AttachmentsCategory_listCategories_count.icon.pending',
               'id' : 'aw9f4bf2a5',
               'platform' : 'false',
            });
            listItemTemplate003.addChild( image006 );

            var eventHandlers038 = [
               {
                     'method' : 'checkAttachmentsNOK',
                     'artifactId' : 'WorkExecution.AttachmentsCategory_listCategories_count.icon.Nok.eventhandler',
                     'id' : 'aw4d26a54c',
                     'event' : 'render',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            image006.eventHandlers = eventHandlers038;
            var eventHandlers039 = [
               {
                     'method' : 'hasChildSection',
                     'artifactId' : 'WorkExecution.AttachmentsCategory_workOrder_attachments_listItemTemplate_AttachmentsListItem_eventHandlers_render_FilterAttachments',
                     'id' : 'awcd8f9ffe',
                     'event' : 'click',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            listItemTemplate003.eventHandlers = eventHandlers039;


            var list003 = new List({
               'resource' : 'workOrder',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate003,
               'artifactId' : 'WorkExecution.AttachmentsCategory_list',
               'attribute' : 'atcsessionlist',
               'id' : 'aw56c428be',
               'label' : MessageService.createStaticMessage('Categorias'),
            });
            view004.addChild( list003 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.AttachmentsChildCategory', false);
               trackTimer.startTracking();
            }

            var view005 = new View({
               'id' : 'WorkExecution.AttachmentsChildCategory',
               'label' : MessageService.createStaticMessage('Categorias de Anexos (Filho)'),
            });
            ui001.addChild( view005 );

            var requiredResources005 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.AttachmentsChildCategory_workOrder',
                  'id' : 'awc4a31ff4',
                  'related' : {
                     'atcsessionlist' : {
                        'artifactId' : 'WorkExecution.AttachmentsChildCategory_attribute1',
                        'id' : 'aw48138bb6',
                     },
                     'attachments' : {
                        'artifactId' : 'WorkExecution.AttachmentsChildCategory_attribute2',
                        'id' : 'awd11ada0c',
                     },
                     'msdoclinkslist' : {
                        'artifactId' : 'WorkExecution.AttachmentsChildCategory_attribute3',
                        'id' : 'awa61dea9a',
                     },
                  },
               },
            };
            view005.addRequiredResources( requiredResources005 );
            var eventHandlers040 = [
               {
                     'method' : 'countAttachmentsSection',
                     'artifactId' : 'WorkExecution.WODetailView.countAttachmentsSectionc_show',
                     'id' : 'awcf085253',
                     'event' : 'show',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            view005.eventHandlers = eventHandlers040;


            var listItemTemplate004 = new ListItemTemplate({
               'artifactId' : 'WorkExecution.AttachmentsChildCategory_listCategories',
               'id' : 'awc485e87d',
            });

            var listtext013 = new ListText({
               'resourceAttribute' : 'ms_description',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'WorkExecution.AttachmentsChildCategory_listCategories_description',
               'id' : 'awf14da021',
            });
            listItemTemplate004.addChild( listtext013 );


            var listtext014 = new ListText({
               'resourceAttribute' : 'secCount',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'WorkExecution.AttachmentsChildCategory_listCategories_count',
               'id' : 'awecd8426a',
            });
            listItemTemplate004.addChild( listtext014 );

            var eventHandlers041 = [
               {
                     'method' : 'filterAttachments',
                     'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem_eventHandlers_render_FilterAttachments',
                     'id' : 'aw863d34bb',
                     'event' : 'click',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            listItemTemplate004.eventHandlers = eventHandlers041;


            var list004 = new List({
               'resource' : 'workOrder',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate004,
               'artifactId' : 'WorkExecution.AttachmentsChildCategory_list',
               'attribute' : 'atcsessionlist',
               'id' : 'aw95c7aa83',
               'label' : MessageService.createStaticMessage('Categorias'),
            });
            view005.addChild( list004 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.PDOBSView', false);
               trackTimer.startTracking();
            }

            var view006 = new View({
               'resource' : 'workOrder',
               'id' : 'WorkExecution.PDOBSView',
               'label' : MessageService.createStaticMessage('Comments'),
            });
            ui001.addChild( view006 );

            var requiredResources006 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.PDOBSView_workOrder',
                  'id' : 'awe9cf1b',
               },
            };
            view006.addRequiredResources( requiredResources006 );

            var container011 = new Container({
               'artifactId' : 'WorkExecution.PDOBSView_container_0',
               'id' : 'awb5adfa09',
            });
            view006.addChild( container011 );


            var group009 = new Group({
               'artifactId' : 'WorkExecution.PDOBSView_group_0',
               'id' : 'aw5a66b6b7',
            });
            container011.addChild( group009 );


            var groupitem037 = new GroupItem({
               'artifactId' : 'WorkExecution.PDOBSView_groupitem_0',
               'id' : 'awf0766b1a',
            });
            group009.addChild( groupitem037 );


            var text059 = new Text({
               'resourceAttribute' : 'pd_obs',
               'cssClass' : 'ms_wordwrap',
               'editable' : false,
               'artifactId' : 'WorkExecution.PDOBSView_groupitem_0_pdobs',
               'id' : 'aw6bffd595',
            });
            groupitem037.addChild( text059 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.AttachmentsView', false);
               trackTimer.startTracking();
            }

            var view007 = new View({
               'showOverflow' : true,
               'id' : 'WorkExecution.AttachmentsView',
               'label' : MessageService.createStaticMessage('Attachments'),
            });
            ui001.addChild( view007 );

            var requiredResources007 = {
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
            view007.addRequiredResources( requiredResources007 );

            var actions004 = new Actions({
               'artifactId' : 'WorkExecution.AttachmentsView_actions',
               'id' : 'awb2eebf16',
            });
            view007.addChild( actions004 );


            var action006 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'artifactId' : 'WorkExecution.AttachmentsView_TakePhoto_action',
               'id' : 'aw8f4e0a9e',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions004.addChild( action006 );

            var eventHandlers042 = [
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
            action006.eventHandlers = eventHandlers042;

            var action007 = new Action({
               'image' : 'header_add_OFF.svg',
               'artifactId' : 'WorkExecution.AttachmentsView_PickfromGallery_action',
               'id' : 'awfd7f8e21',
               'label' : MessageService.createStaticMessage('Pick from Gallery'),
            });
            actions004.addChild( action007 );

            var eventHandlers043 = [
               {
                     'method' : 'launchGallery',
                     'artifactId' : 'WorkExecution.AttachmentsView_PickfromGallery_action_eventHandlers_click_launchGallery',
                     'id' : 'awe839699',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            action007.eventHandlers = eventHandlers043;


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
               'name' : 'displayCreationDateISO',
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



            var listItemTemplate005 = new ListItemTemplate({
               'layout' : 'AttachmentsListItem',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem',
               'id' : 'aw5f9af042',
            });

            var listtext015 = new ListText({
               'resourceAttribute' : 'displayFileName',
               'cssClass' : 'attachmentLabel',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayFileName',
               'id' : 'aw2a7f24e9',
            });
            listItemTemplate005.addChild( listtext015 );


            var listtext016 = new ListText({
               'resourceAttribute' : 'displayDescription',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayDescription',
               'id' : 'aw634a876e',
            });
            listItemTemplate005.addChild( listtext016 );


            var listtext017 = new ListText({
               'resourceAttribute' : 'displayFileType',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayFileType',
               'id' : 'awf8820dc6',
            });
            listItemTemplate005.addChild( listtext017 );


            var button007 = new Button({
               'border' : 'false',
               'resourceAttribute' : 'anywhereAttachDownloaded',
               'image' : '\/images\/msg_downloadComplete_small.svg',
               'cssClass' : 'attachmentIcon',
               'layoutInsertAt' : 'icon',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button',
               'id' : 'aw58f719',
            });
            var eventHandlers044 = [
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
            button007.eventHandlers = eventHandlers044;
            listItemTemplate005.addChild( button007 );


            var listtext018 = new ListText({
               'resourceAttribute' : 'displaySize',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displaySize',
               'id' : 'aw4edf9732',
            });
            listItemTemplate005.addChild( listtext018 );


            var listtext019 = new ListText({
               'resourceAttribute' : 'createby',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_createby',
               'id' : 'awfea18ec7',
            });
            listItemTemplate005.addChild( listtext019 );


            var listtext020 = new ListText({
               'resourceAttribute' : 'displayCreationDate',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayCreationDate',
               'id' : 'aw44f40bb4',
            });
            listItemTemplate005.addChild( listtext020 );

            var eventHandlers045 = [
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem_eventHandlers_click_handleThumbnailClick',
                     'id' : 'aw6e007bd',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            listItemTemplate005.eventHandlers = eventHandlers045;


            var list005 = new List({
               'resource' : 'workOrder',
               'sortOptions' : sortOptions002,
               'listItemTemplate' : listItemTemplate005,
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_list',
               'attribute' : 'attachments',
               'id' : 'aw118597f8',
            });
            view007.addChild( list005 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.FilteredAttachmentsView', false);
               trackTimer.startTracking();
            }

            var view008 = new View({
               'showOverflow' : true,
               'id' : 'WorkExecution.FilteredAttachmentsView',
               'label' : MessageService.createStaticMessage('Attachments (Categorizado)'),
            });
            ui001.addChild( view008 );

            var requiredResources008 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder',
                  'id' : 'awf83855ac',
                  'related' : {
                     'attachments' : {
                        'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_attachments',
                        'id' : 'aw3b666399',
                     },
                     'atcsessionlist' : {
                        'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_atcsessionlist',
                        'id' : 'aw19884e50',
                     },
                     'msdoclinkslist' : {
                        'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_msdoclinkslist',
                        'id' : 'awcb209909',
                     },
                  },
               },
            };
            view008.addRequiredResources( requiredResources008 );

            var actions005 = new Actions({
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_actions',
               'id' : 'aw90951c2a',
            });
            view008.addChild( actions005 );


            var action008 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_TakePhoto_action',
               'id' : 'awc782f9db',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions005.addChild( action008 );

            var eventHandlers046 = [
               {
                     'method' : 'launchCameraForPhoto',
                     'artifactId' : 'WorkExecution.FilteredAttachmentsView_TakePhoto_action_eventHandlers_click_launchCameraForPhoto',
                     'id' : 'aw65a84ea6',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               },
               {
                     'method' : 'initCategory',
                     'artifactId' : 'WorkExecution.FilteredAttachmentsView_TakePhoto_action_eventHandlers_render_initCategory',
                     'id' : 'awefc7aa66',
                     'event' : 'render',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            action008.eventHandlers = eventHandlers046;

            var action009 = new Action({
               'image' : 'header_add_OFF.svg',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_PickfromGallery_action',
               'id' : 'awef6cb2b5',
               'label' : MessageService.createStaticMessage('Pick from Gallery'),
            });
            actions005.addChild( action009 );

            var eventHandlers047 = [
               {
                     'method' : 'launchGallery',
                     'artifactId' : 'WorkExecution.FilteredAttachmentsView_PickfromGallery_action_eventHandlers_click_launchGallery',
                     'id' : 'aw6e09fadd',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            action009.eventHandlers = eventHandlers047;
            var eventHandlers048 = [
               {
                     'method' : 'filterAttachments',
                     'artifactId' : 'WorkExecution.FilteredAttachmentsView_Filter_eventHandlers_render_filterAttachments',
                     'id' : 'awd3c86915',
                     'event' : 'show',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            view008.eventHandlers = eventHandlers048;


            var sortOptions003 = new SortOptions({
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_attachments_list_sortOptions',
               'id' : 'aw26b675f5',
            });

            var sortOption007 = new SortOption({
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_sortOption_CreatedDate',
               'id' : 'aw13f70eef',
               'label' : MessageService.createStaticMessage('Created Date'),
            });
            sortOptions003.addChild( sortOption007 );


            var sortAttribute007 = new SortAttribute({
               'name' : 'displayCreationDateISO',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_CreatedDate_sortAttribute_displayCreationDate',
               'id' : 'aw9caa437c',
               'direction' : 'asc',
            });
            sortOption007.addChild( sortAttribute007 );


            var sortOption008 = new SortOption({
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_sortOption_FileName',
               'id' : 'awbf9e091a',
               'label' : MessageService.createStaticMessage('File Name'),
            });
            sortOptions003.addChild( sortOption008 );


            var sortAttribute008 = new SortAttribute({
               'name' : 'displayFileName',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_FileName_sortAttribute_displayFileName',
               'id' : 'awa028fe5b',
               'direction' : 'asc',
            });
            sortOption008.addChild( sortAttribute008 );


            var sortOption009 = new SortOption({
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_sortOption_Description',
               'id' : 'aw23efc273',
               'label' : MessageService.createStaticMessage('Description'),
            });
            sortOptions003.addChild( sortOption009 );


            var sortAttribute009 = new SortAttribute({
               'name' : 'displayDescription',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_Description_sortAttribute_displayDescription',
               'id' : 'aw23653bb8',
               'direction' : 'asc',
            });
            sortOption009.addChild( sortAttribute009 );



            var listItemTemplate006 = new ListItemTemplate({
               'layout' : 'AttachmentsListItem',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem',
               'id' : 'aw8f8b37ba',
            });

            var listtext021 = new ListText({
               'resourceAttribute' : 'displayFileName',
               'cssClass' : 'attachmentLabel',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_AttachmentsListItem_displayFileName',
               'id' : 'awfebd1172',
            });
            listItemTemplate006.addChild( listtext021 );


            var listtext022 = new ListText({
               'resourceAttribute' : 'displayDescription',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_AttachmentsListItem_displayDescription',
               'id' : 'aw4557b181',
            });
            listItemTemplate006.addChild( listtext022 );


            var listtext023 = new ListText({
               'resourceAttribute' : 'displayFileType',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_AttachmentsListItem_displayFileType',
               'id' : 'aw2c40385d',
            });
            listItemTemplate006.addChild( listtext023 );


            var button008 = new Button({
               'border' : 'false',
               'resourceAttribute' : 'anywhereAttachDownloaded',
               'image' : '\/images\/msg_downloadComplete_small.svg',
               'cssClass' : 'attachmentIcon',
               'layoutInsertAt' : 'icon',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button',
               'id' : 'aw95fd5814',
            });
            var eventHandlers049 = [
               {
                     'method' : 'displayLocal',
                     'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button_eventHandlers_datachange_displayLocal',
                     'id' : 'awf38bbf57',
                     'event' : 'datachange',
                     'class' : 'application.handlers.WOAttachmentHandler',
               },
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button_eventHandlers_click_handleThumbnailClick',
                     'id' : 'aw8996a896',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            button008.eventHandlers = eventHandlers049;
            listItemTemplate006.addChild( button008 );


            var listtext024 = new ListText({
               'resourceAttribute' : 'displaySize',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_AttachmentsListItem_displaySize',
               'id' : 'aw64b43dac',
            });
            listItemTemplate006.addChild( listtext024 );


            var listtext025 = new ListText({
               'resourceAttribute' : 'createby',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_AttachmentsListItem_createby',
               'id' : 'awd7901339',
            });
            listItemTemplate006.addChild( listtext025 );


            var listtext026 = new ListText({
               'resourceAttribute' : 'displayCreationDate',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_AttachmentsListItem_displayCreationDate',
               'id' : 'aw7467e96b',
            });
            listItemTemplate006.addChild( listtext026 );

            var eventHandlers050 = [
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem_eventHandlers_click_handleThumbnailClick',
                     'id' : 'aw458e1168',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            listItemTemplate006.eventHandlers = eventHandlers050;


            var list006 = new List({
               'resource' : 'workOrder',
               'sortOptions' : sortOptions003,
               'listItemTemplate' : listItemTemplate006,
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_attachments_list',
               'attribute' : 'attachments',
               'id' : 'aw9c80cd25',
            });
            view008.addChild( list006 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.AttachmentsView_Recorte', false);
               trackTimer.startTracking();
            }

            var view009 = new View({
               'showOverflow' : true,
               'id' : 'WorkExecution.AttachmentsView_Recorte',
               'label' : MessageService.createStaticMessage('Attachments'),
            });
            ui001.addChild( view009 );

            var requiredResources009 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.AttachmentsView_workOrder_Recorte',
                  'id' : 'aw83e2f4c4',
                  'related' : {
                     'attachments' : {
                        'reload' : true,
                        'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_Recorte',
                        'id' : 'awaedc5c6a',
                     },
                  },
               },
            };
            view009.addRequiredResources( requiredResources009 );

            var actions006 = new Actions({
               'artifactId' : 'WorkExecution.AttachmentsView_actions_Recorte',
               'id' : 'awb3de01c4',
            });
            view009.addChild( actions006 );


            var action010 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'artifactId' : 'WorkExecution.AttachmentsView_TakePhoto_action_Recorte',
               'id' : 'aw1e09275',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions006.addChild( action010 );

            var eventHandlers051 = [
               {
                     'method' : 'launchCameraForPhoto',
                     'artifactId' : 'WorkExecution.AttachmentsView_TakePhoto_action_eventHandlers_click_launchCameraForPhoto_Recorte',
                     'id' : 'aw655df12f',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               },
               {
                     'method' : 'initCategory',
                     'artifactId' : 'WorkExecution.AttachmentsView_TakePhoto_action_eventHandlers_render_initCategory_Recorte',
                     'id' : 'aw1a59bb41',
                     'event' : 'render',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            action010.eventHandlers = eventHandlers051;

            var action011 = new Action({
               'image' : 'header_add_OFF.svg',
               'artifactId' : 'WorkExecution.AttachmentsView_PickfromGallery_action_Recorte',
               'id' : 'aw3e5bff38',
               'label' : MessageService.createStaticMessage('Pick from Gallery'),
            });
            actions006.addChild( action011 );

            var eventHandlers052 = [
               {
                     'method' : 'launchGallery',
                     'artifactId' : 'WorkExecution.AttachmentsView_PickfromGallery_action_eventHandlers_click_launchGallery_Recorte',
                     'id' : 'aw2bd136c',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            action011.eventHandlers = eventHandlers052;


            var sortOptions004 = new SortOptions({
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_list_sortOptions_Recorte',
               'id' : 'aw75be6030',
            });

            var sortOption010 = new SortOption({
               'artifactId' : 'WorkExecution.AttachmentsView_sortOption_CreatedDate_Recorte',
               'id' : 'awe70d6e3e',
               'label' : MessageService.createStaticMessage('Created Date'),
            });
            sortOptions004.addChild( sortOption010 );


            var sortAttribute010 = new SortAttribute({
               'name' : 'displayCreationDateISO',
               'artifactId' : 'WorkExecution.AttachmentsView_CreatedDate_sortAttribute_displayCreationDate_Recorte',
               'id' : 'aw13f77071',
               'direction' : 'asc',
            });
            sortOption010.addChild( sortAttribute010 );


            var sortOption011 = new SortOption({
               'artifactId' : 'WorkExecution.AttachmentsView_sortOption_FileName_Recorte',
               'id' : 'awac890c52',
               'label' : MessageService.createStaticMessage('File Name'),
            });
            sortOptions004.addChild( sortOption011 );


            var sortAttribute011 = new SortAttribute({
               'name' : 'displayFileName',
               'artifactId' : 'WorkExecution.AttachmentsView_FileName_sortAttribute_displayFileName_Recorte',
               'id' : 'aw59a21987',
               'direction' : 'asc',
            });
            sortOption011.addChild( sortAttribute011 );


            var sortOption012 = new SortOption({
               'artifactId' : 'WorkExecution.AttachmentsView_sortOption_Description_Recorte',
               'id' : 'awda3b020f',
               'label' : MessageService.createStaticMessage('Description'),
            });
            sortOptions004.addChild( sortOption012 );


            var sortAttribute012 = new SortAttribute({
               'name' : 'displayDescription',
               'artifactId' : 'WorkExecution.AttachmentsView_Description_sortAttribute_displayDescription_Recorte',
               'id' : 'aw6bcaf18d',
               'direction' : 'asc',
            });
            sortOption012.addChild( sortAttribute012 );



            var listItemTemplate007 = new ListItemTemplate({
               'layout' : 'AttachmentsListItem',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem_Recorte',
               'id' : 'aw9006b5d1',
            });

            var listtext027 = new ListText({
               'resourceAttribute' : 'displayFileName',
               'cssClass' : 'attachmentLabel',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayFileName_Recorte',
               'id' : 'aw4f168cd3',
            });
            listItemTemplate007.addChild( listtext027 );


            var listtext028 = new ListText({
               'resourceAttribute' : 'displayDescription',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayDescription_Recorte',
               'id' : 'aw61ff65c5',
            });
            listItemTemplate007.addChild( listtext028 );


            var listtext029 = new ListText({
               'resourceAttribute' : 'displayFileType',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayFileType_Recorte',
               'id' : 'aw6f5ca698',
            });
            listItemTemplate007.addChild( listtext029 );


            var button009 = new Button({
               'border' : 'false',
               'resourceAttribute' : 'anywhereAttachDownloaded',
               'image' : '\/images\/msg_downloadComplete_small.svg',
               'cssClass' : 'attachmentIcon',
               'layoutInsertAt' : 'icon',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button_Recorte',
               'id' : 'awbb8e836a',
            });
            var eventHandlers053 = [
               {
                     'method' : 'displayLocal',
                     'artifactId' : 'WorkExecution.AttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button_eventHandlers_datachange_displayLocal_Recorte',
                     'id' : 'awad59fc68',
                     'event' : 'datachange',
                     'class' : 'application.handlers.WOAttachmentHandler',
               },
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'WorkExecution.AttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button_eventHandlers_click_handleThumbnailClick_Recorte',
                     'id' : 'aw95b5cdbb',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            button009.eventHandlers = eventHandlers053;
            listItemTemplate007.addChild( button009 );


            var listtext030 = new ListText({
               'resourceAttribute' : 'displaySize',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displaySize_Recorte',
               'id' : 'aw705273c7',
            });
            listItemTemplate007.addChild( listtext030 );


            var listtext031 = new ListText({
               'resourceAttribute' : 'createby',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_createby_Recorte',
               'id' : 'aw1470d451',
            });
            listItemTemplate007.addChild( listtext031 );


            var listtext032 = new ListText({
               'resourceAttribute' : 'displayCreationDate',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayCreationDate_Recorte',
               'id' : 'aweab50e86',
            });
            listItemTemplate007.addChild( listtext032 );

            var eventHandlers054 = [
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem_eventHandlers_click_handleThumbnailClick_Recorte',
                     'id' : 'aw882e347d',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            listItemTemplate007.eventHandlers = eventHandlers054;


            var list007 = new List({
               'resource' : 'workOrder',
               'sortOptions' : sortOptions004,
               'listItemTemplate' : listItemTemplate007,
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_list_Recorte',
               'attribute' : 'attachments',
               'id' : 'aw8c625bb3',
            });
            view009.addChild( list007 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.AttachmentsView_Demarcacao', false);
               trackTimer.startTracking();
            }

            var view010 = new View({
               'showOverflow' : true,
               'id' : 'WorkExecution.AttachmentsView_Demarcacao',
               'label' : MessageService.createStaticMessage('Attachments'),
            });
            ui001.addChild( view010 );

            var requiredResources010 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.AttachmentsView_workOrder_Demarcacao',
                  'id' : 'aw8eee57b3',
                  'related' : {
                     'attachments' : {
                        'reload' : true,
                        'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_Demarcacao',
                        'id' : 'awfab70cbe',
                     },
                  },
               },
            };
            view010.addRequiredResources( requiredResources010 );

            var actions007 = new Actions({
               'artifactId' : 'WorkExecution.AttachmentsView_actions_Demarcacao',
               'id' : 'awc84a3efc',
            });
            view010.addChild( actions007 );


            var action012 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'artifactId' : 'WorkExecution.AttachmentsView_TakePhoto_action_Demarcacao',
               'id' : 'aw97db6e1b',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions007.addChild( action012 );

            var eventHandlers055 = [
               {
                     'method' : 'launchCameraForPhoto',
                     'artifactId' : 'WorkExecution.AttachmentsView_TakePhoto_action_eventHandlers_click_launchCameraForPhoto_Demarcacao',
                     'id' : 'awdf0324c',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               },
               {
                     'method' : 'initCategory',
                     'artifactId' : 'WorkExecution.AttachmentsView_TakePhoto_action_eventHandlers_render_initCategory_Demarcacao',
                     'id' : 'aw4242b78f',
                     'event' : 'render',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            action012.eventHandlers = eventHandlers055;

            var action013 = new Action({
               'image' : 'header_add_OFF.svg',
               'artifactId' : 'WorkExecution.AttachmentsView_PickfromGallery_action_Demarcacao',
               'id' : 'aw63790f59',
               'label' : MessageService.createStaticMessage('Pick from Gallery'),
            });
            actions007.addChild( action013 );

            var eventHandlers056 = [
               {
                     'method' : 'launchGallery',
                     'artifactId' : 'WorkExecution.AttachmentsView_PickfromGallery_action_eventHandlers_click_launchGallery_Demarcacao',
                     'id' : 'awb36e72a4',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            action013.eventHandlers = eventHandlers056;


            var sortOptions005 = new SortOptions({
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_list_sortOptions_Demarcacao',
               'id' : 'aw4bd3de88',
            });

            var sortOption013 = new SortOption({
               'artifactId' : 'WorkExecution.AttachmentsView_sortOption_CreatedDate_Demarcacao',
               'id' : 'aw8da63ca8',
               'label' : MessageService.createStaticMessage('Created Date'),
            });
            sortOptions005.addChild( sortOption013 );


            var sortAttribute013 = new SortAttribute({
               'name' : 'displayCreationDateISO',
               'artifactId' : 'WorkExecution.AttachmentsView_CreatedDate_sortAttribute_displayCreationDate_Demarcacao',
               'id' : 'aw7f49d27c',
               'direction' : 'asc',
            });
            sortOption013.addChild( sortAttribute013 );


            var sortOption014 = new SortOption({
               'artifactId' : 'WorkExecution.AttachmentsView_sortOption_FileName_Demarcacao',
               'id' : 'aw717540bb',
               'label' : MessageService.createStaticMessage('File Name'),
            });
            sortOptions005.addChild( sortOption014 );


            var sortAttribute014 = new SortAttribute({
               'name' : 'displayFileName',
               'artifactId' : 'WorkExecution.AttachmentsView_FileName_sortAttribute_displayFileName_Demarcacao',
               'id' : 'aw613ea8c1',
               'direction' : 'asc',
            });
            sortOption014.addChild( sortAttribute014 );


            var sortOption015 = new SortOption({
               'artifactId' : 'WorkExecution.AttachmentsView_sortOption_Description_Demarcacao',
               'id' : 'awaefd0200',
               'label' : MessageService.createStaticMessage('Description'),
            });
            sortOptions005.addChild( sortOption015 );


            var sortAttribute015 = new SortAttribute({
               'name' : 'displayDescription',
               'artifactId' : 'WorkExecution.AttachmentsView_Description_sortAttribute_displayDescription_Demarcacao',
               'id' : 'awb967bdab',
               'direction' : 'asc',
            });
            sortOption015.addChild( sortAttribute015 );



            var listItemTemplate008 = new ListItemTemplate({
               'layout' : 'AttachmentsListItem',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem_Demarcacao',
               'id' : 'awda066e1e',
            });

            var listtext033 = new ListText({
               'resourceAttribute' : 'displayFileName',
               'cssClass' : 'attachmentLabel',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayFileName_Demarcacao',
               'id' : 'awcab12771',
            });
            listItemTemplate008.addChild( listtext033 );


            var listtext034 = new ListText({
               'resourceAttribute' : 'displayDescription',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayDescription_Demarcacao',
               'id' : 'aw8470eae4',
            });
            listItemTemplate008.addChild( listtext034 );


            var listtext035 = new ListText({
               'resourceAttribute' : 'displayFileType',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayFileType_Demarcacao',
               'id' : 'aw4f1c21d6',
            });
            listItemTemplate008.addChild( listtext035 );


            var button010 = new Button({
               'border' : 'false',
               'resourceAttribute' : 'anywhereAttachDownloaded',
               'image' : '\/images\/msg_downloadComplete_small.svg',
               'cssClass' : 'attachmentIcon',
               'layoutInsertAt' : 'icon',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button_Demarcacao',
               'id' : 'aw7972e5a3',
            });
            var eventHandlers057 = [
               {
                     'method' : 'displayLocal',
                     'artifactId' : 'WorkExecution.AttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button_eventHandlers_datachange_displayLocal_Demarcacao',
                     'id' : 'awcae61395',
                     'event' : 'datachange',
                     'class' : 'application.handlers.WOAttachmentHandler',
               },
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'WorkExecution.AttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button_eventHandlers_click_handleThumbnailClick_Demarcacao',
                     'id' : 'aw2ac83125',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            button010.eventHandlers = eventHandlers057;
            listItemTemplate008.addChild( button010 );


            var listtext036 = new ListText({
               'resourceAttribute' : 'displaySize',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displaySize_Demarcacao',
               'id' : 'aw330b5419',
            });
            listItemTemplate008.addChild( listtext036 );


            var listtext037 = new ListText({
               'resourceAttribute' : 'createby',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_createby_Demarcacao',
               'id' : 'awfeb3fbf5',
            });
            listItemTemplate008.addChild( listtext037 );


            var listtext038 = new ListText({
               'resourceAttribute' : 'displayCreationDate',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_AttachmentsListItem_displayCreationDate_Demarcacao',
               'id' : 'awe6acc314',
            });
            listItemTemplate008.addChild( listtext038 );

            var eventHandlers058 = [
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem_eventHandlers_click_handleThumbnailClick_Demarcacao',
                     'id' : 'aw1d49cbf2',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            listItemTemplate008.eventHandlers = eventHandlers058;


            var list008 = new List({
               'resource' : 'workOrder',
               'sortOptions' : sortOptions005,
               'listItemTemplate' : listItemTemplate008,
               'artifactId' : 'WorkExecution.AttachmentsView_workOrder_attachments_list_Demarcacao',
               'attribute' : 'attachments',
               'id' : 'aw1b770a6f',
            });
            view010.addChild( list008 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.DescriptionView', false);
               trackTimer.startTracking();
            }

            var view011 = new View({
               'resource' : 'workOrder',
               'id' : 'WorkExecution.DescriptionView',
               'label' : MessageService.createStaticMessage('Description'),
            });
            ui001.addChild( view011 );

            var requiredResources011 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.DescriptionView_workOrder',
                  'id' : 'aw4c460268',
               },
            };
            view011.addRequiredResources( requiredResources011 );

            var container012 = new Container({
               'artifactId' : 'WorkExecution.DescriptionView_container_0',
               'id' : 'aw546a229e',
            });
            view011.addChild( container012 );


            var group010 = new Group({
               'artifactId' : 'WorkExecution.DescriptionView_group_0',
               'id' : 'aw8b92258d',
            });
            container012.addChild( group010 );


            var groupitem038 = new GroupItem({
               'artifactId' : 'WorkExecution.DescriptionView_groupitem_0',
               'id' : 'aw11b1b38d',
            });
            group010.addChild( groupitem038 );


            var text060 = new Text({
               'resourceAttribute' : 'description',
               'editable' : false,
               'artifactId' : 'WorkExecution.DescriptionView_groupitem_0_description',
               'id' : 'awd1d73261',
            });
            groupitem038.addChild( text060 );


            var groupitem039 = new GroupItem({
               'artifactId' : 'WorkExecution.DescriptionView_groupitem_1',
               'id' : 'aw66b6831b',
            });
            group010.addChild( groupitem039 );


            var text061 = new Text({
               'resourceAttribute' : 'longdescription',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'WorkExecution.DescriptionView_groupitem_1_longdescription',
               'id' : 'aw4441fbf2',
            });
            groupitem039.addChild( text061 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.EditAssetView', false);
               trackTimer.startTracking();
            }

            var view012 = new View({
               'id' : 'WorkExecution.EditAssetView',
               'label' : MessageService.createStaticMessage('Asset'),
            });
            ui001.addChild( view012 );

            var requiredResources012 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.EditAssetView_workOrder_2021',
                  'id' : 'awd6534c8',
                  'related' : {
                     'assetSpec' : {
                        'reload' : true,
                        'artifactId' : 'WorkExecution.WorkDetailView_workOrder_assetSpec_2021',
                        'id' : 'aw9232bc2',
                     },
                  },
               },
               'additionalasset' : {
                  'artifactId' : 'WorkExecution.EditAssetView_additionalasset',
                  'id' : 'aw47de1825',
               },
               'domainAssetstatus' : {
                  'artifactId' : 'WorkExecution.EditAssetView_domainAssetstatus',
                  'id' : 'awde88769d',
               },
               'maxdomainAsset' : {
                  'artifactId' : 'WorkExecution.WorkDetailView_maxdomain_asset',
                  'id' : 'awc5304016',
               },
            };
            view012.addRequiredResources( requiredResources012 );

            var container013 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.EditAssetView_workOrder_container_0',
               'id' : 'aw3eb6d0d4',
            });
            view012.addChild( container013 );


            var group011 = new Group({
               'artifactId' : 'WorkExecution.EditAssetView_group_0',
               'id' : 'aw379c2ef2',
            });
            container013.addChild( group011 );


            var groupitem040 = new GroupItem({
               'artifactId' : 'WorkExecution.EditAssetView_workOrder_groupitem_0',
               'id' : 'aw7b6d41c7',
            });
            group011.addChild( groupitem040 );


            var text062 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditAssetView_workOrder_groupitem_0111_wonum',
               'id' : 'awdc48563b',
               'label' : MessageService.createStaticMessage('Work Order'),
            });
            groupitem040.addChild( text062 );


            var text063 = new Text({
               'resourceAttribute' : 'asset',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditAssetView_workOrder_groupitem_0_asset',
               'id' : 'aw7001415a',
               'label' : MessageService.createStaticMessage('Ativo'),
            });
            groupitem040.addChild( text063 );


            var text064 = new Text({
               'resourceAttribute' : 'assetdesc',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditAssetView_workOrder_groupitem_0_assetdesc',
               'id' : 'aw9743e418',
               'label' : MessageService.createStaticMessage('Descri\u00E7\u00E3o do Ativo'),
            });
            groupitem040.addChild( text064 );



            var listItemTemplate009 = new ListItemTemplate({
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_assetSpec_listItemTemplate',
               'id' : 'aw74fdd83d',
            });

            var listtext039 = new ListText({
               'resourceAttribute' : 'localdescriptionunitspec',
               'cssClass' : 'specLayoutRight editableLabel',
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_assetSpec_description',
               'id' : 'aw7da84ef',
            });
            listItemTemplate009.addChild( listtext039 );


            var eventHandlers059 = [
               {
                     'method' : 'hide_WODetailsView',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_initialize_open_assetSpec_WODetailsView2',
                     'id' : 'aw14d05aea',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'handleConditionalReadOnlyMeasureunitSpecid',
                     'artifactId' : 'WorkExecution.WorkDetailView_workOrder_assetSpec_measureunitid_0_eventHandlers_render',
                     'id' : 'aw2f8f5b6',
                     'event' : 'render',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];

            var list009 = new List({
               'resource' : 'workOrder',
               'listItemTemplate' : listItemTemplate009,
               'artifactId' : 'WorkExecution.WorkDetailView_workOrder_assetSpec_list',
               'eventHandlers' : eventHandlers059,
               'attribute' : 'assetSpec',
               'hideEmpty' : 'true',
               'id' : 'awae488d37',
               'label' : MessageService.createStaticMessage('Specifications'),
               'mixinclass' : 'SpecificationStoreList',
               'collapsible' : 'true',
               'displayPageSize' : '25',
            });
            view012.addChild( list009 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.LaborAssignmentsView', false);
               trackTimer.startTracking();
            }

            var view013 = new View({
               'id' : 'WorkExecution.LaborAssignmentsView',
               'label' : MessageService.createStaticMessage('Labor Assignments'),
            });
            ui001.addChild( view013 );

            var requiredResources013 = {
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
            view013.addRequiredResources( requiredResources013 );


            var sortOptions006 = new SortOptions({
               'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_assignmentlist_list_sortOptions',
               'id' : 'awdc9dbd60',
            });

            var sortOption016 = new SortOption({
               'artifactId' : 'WorkExecution.LaborAssignmentsView_sortOption_TaskIDLabor',
               'id' : 'awac27770c',
               'label' : MessageService.createStaticMessage('Task ID, Labor'),
            });
            sortOptions006.addChild( sortOption016 );


            var sortAttribute016 = new SortAttribute({
               'name' : 'taskid',
               'artifactId' : 'WorkExecution.LaborAssignmentsView_TaskIDLabor_sortAttribute_taskid',
               'id' : 'aw39c2be9e',
               'direction' : 'asc',
            });
            sortOption016.addChild( sortAttribute016 );


            var sortAttribute017 = new SortAttribute({
               'name' : 'laborcodeandname',
               'artifactId' : 'WorkExecution.LaborAssignmentsView_TaskIDLabor_sortAttribute_laborcodeandname',
               'id' : 'awf63559a2',
               'direction' : 'asc',
            });
            sortOption016.addChild( sortAttribute017 );



            var listItemTemplate010 = new ListItemTemplate({
               'layout' : 'LaborAssignmentListItem',
               'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_assignmentlist_listItemTemplate_LaborAssignmentListItem',
               'id' : 'awce161be0',
            });

            var listtext040 = new ListText({
               'resourceAttribute' : 'taskid',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_LaborAssignmentListItem_taskid',
               'id' : 'aw86d9105d',
            });
            listItemTemplate010.addChild( listtext040 );


            var listtext041 = new ListText({
               'resourceAttribute' : 'laborcodeandname',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_LaborAssignmentListItem_laborcodeandname',
               'id' : 'awbe37a74a',
            });
            listItemTemplate010.addChild( listtext041 );


            var listtext042 = new ListText({
               'resourceAttribute' : 'craft',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_LaborAssignmentListItem_craft',
               'id' : 'aw5cce2ffb',
            });
            listItemTemplate010.addChild( listtext042 );


            var listtext043 = new ListText({
               'resourceAttribute' : 'skilllevel',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_LaborAssignmentListItem_skilllevel',
               'id' : 'aw6fbd0aea',
            });
            listItemTemplate010.addChild( listtext043 );


            var listtext044 = new ListText({
               'resourceAttribute' : 'crew',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_LaborAssignmentListItem_crew',
               'id' : 'aw7cf36a1f',
            });
            listItemTemplate010.addChild( listtext044 );



            var list010 = new List({
               'resource' : 'workOrder',
               'transitionTo' : 'WorkExecution.LaborAssignmentDetailView',
               'sortOptions' : sortOptions006,
               'listItemTemplate' : listItemTemplate010,
               'artifactId' : 'WorkExecution.LaborAssignmentsView_workOrder_assignmentlist_list',
               'attribute' : 'assignmentlist',
               'id' : 'awaa4f408f',
            });
            view013.addChild( list010 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.LaborAssignmentDetailView', false);
               trackTimer.startTracking();
            }

            var view014 = new View({
               'id' : 'WorkExecution.LaborAssignmentDetailView',
               'label' : MessageService.createStaticMessage('Labor Assignment Details'),
            });
            ui001.addChild( view014 );

            var requiredResources014 = {
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
            view014.addRequiredResources( requiredResources014 );

            var container014 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_container_0',
               'attribute' : 'assignmentlist',
               'id' : 'aw9a115d0a',
            });
            view014.addChild( container014 );


            var group012 = new Group({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_group_0',
               'id' : 'aw4e57cb7',
            });
            container014.addChild( group012 );


            var groupitem041 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_0',
               'id' : 'awdfcacc19',
            });
            group012.addChild( groupitem041 );


            var text065 = new Text({
               'resourceAttribute' : 'taskid',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_0_taskid_Task',
               'id' : 'aw7b6ac0ed',
               'label' : MessageService.createStaticMessage('Task'),
            });
            groupitem041.addChild( text065 );


            var groupitem042 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_4',
               'id' : 'awd8a70800',
            });
            group012.addChild( groupitem042 );


            var text066 = new Text({
               'resourceAttribute' : 'crew',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_4_crew_Crew',
               'id' : 'awdea7a921',
               'label' : MessageService.createStaticMessage('Crew'),
            });
            groupitem042.addChild( text066 );


            var text067 = new Text({
               'resourceAttribute' : 'crewdesc',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_4_crewdesc',
               'id' : 'awf8cf453a',
            });
            groupitem042.addChild( text067 );


            var groupitem043 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_5',
               'id' : 'awafa03896',
            });
            group012.addChild( groupitem043 );


            var text068 = new Text({
               'resourceAttribute' : 'status',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_5_status_Status',
               'id' : 'aw34bcd4a5',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem043.addChild( text068 );


            var groupitem044 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_6',
               'id' : 'aw36a9692c',
            });
            group012.addChild( groupitem044 );


            var text069 = new Text({
               'resourceAttribute' : 'scheduledate',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_6_scheduledate_ScheduledDate',
               'id' : 'aw8fe87ff5',
               'label' : MessageService.createStaticMessage('Scheduled Date'),
            });
            groupitem044.addChild( text069 );


            var groupitem045 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_7',
               'id' : 'aw41ae59ba',
            });
            group012.addChild( groupitem045 );


            var text070 = new Text({
               'resourceAttribute' : 'laborhours',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_7_laborhours_Hours',
               'id' : 'awcc71318d',
               'label' : MessageService.createStaticMessage('Hours'),
            });
            groupitem045.addChild( text070 );


            var groupitem046 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_8',
               'id' : 'awd111442b',
            });
            group012.addChild( groupitem046 );


            var text071 = new Text({
               'resourceAttribute' : 'vendor',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_8_vendor_Vendor',
               'id' : 'aw8d105f9c',
               'label' : MessageService.createStaticMessage('Vendor'),
            });
            groupitem046.addChild( text071 );


            var groupitem047 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_9',
               'id' : 'awa61674bd',
            });
            group012.addChild( groupitem047 );


            var text072 = new Text({
               'resourceAttribute' : 'contractnum',
               'editable' : false,
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_9_contractnum_Contract',
               'id' : 'awdc93b047',
               'label' : MessageService.createStaticMessage('Contract'),
            });
            groupitem047.addChild( text072 );


            var group013 = new Group({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_group_1',
               'id' : 'aw73e24c21',
            });
            container014.addChild( group013 );


            var groupitem048 = new GroupItem({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_workOrder_groupitem_10',
               'id' : 'aw89748c6c',
            });
            group013.addChild( groupitem048 );


            var lastupdatetext002 = new LastUpdateText({
               'artifactId' : 'WorkExecution.LaborAssignmentDetailView_lastupdatetext',
               'id' : 'aw7903c13c',
            });
            groupitem048.addChild( lastupdatetext002 );

            var eventHandlers060 = [
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
            view014.eventHandlers = eventHandlers060;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.PlannedToolsView', false);
               trackTimer.startTracking();
            }

            var view015 = new View({
               'id' : 'WorkExecution.PlannedToolsView',
               'label' : MessageService.createStaticMessage('Planned Tools'),
            });
            ui001.addChild( view015 );

            var requiredResources015 = {
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
            view015.addRequiredResources( requiredResources015 );


            var sortOptions007 = new SortOptions({
               'artifactId' : 'WorkExecution.PlannedToolsView_workOrder_toollist_list_sortOptions',
               'id' : 'aw3894d30',
            });

            var sortOption017 = new SortOption({
               'artifactId' : 'WorkExecution.PlannedToolsView_sortOption_TaskIDTool',
               'id' : 'awb6264e10',
               'label' : MessageService.createStaticMessage('Task ID, Tool'),
            });
            sortOptions007.addChild( sortOption017 );


            var sortAttribute018 = new SortAttribute({
               'name' : 'taskid',
               'artifactId' : 'WorkExecution.PlannedToolsView_TaskIDTool_sortAttribute_taskid',
               'id' : 'awb6744245',
               'direction' : 'asc',
            });
            sortOption017.addChild( sortAttribute018 );


            var sortAttribute019 = new SortAttribute({
               'name' : 'toolanddescription',
               'artifactId' : 'WorkExecution.PlannedToolsView_TaskIDTool_sortAttribute_toolanddescription',
               'id' : 'aw26fcfe23',
               'direction' : 'asc',
            });
            sortOption017.addChild( sortAttribute019 );



            var listItemTemplate011 = new ListItemTemplate({
               'layout' : 'PlannedToolListItem',
               'artifactId' : 'WorkExecution.PlannedToolsView_workOrder_toollist_listItemTemplate_PlannedToolListItem',
               'id' : 'aw27ebc814',
            });

            var listtext045 = new ListText({
               'resourceAttribute' : 'taskid',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.PlannedToolsView_workOrder_PlannedToolListItem_taskid',
               'id' : 'aw173ee2d0',
            });
            listItemTemplate011.addChild( listtext045 );


            var listtext046 = new ListText({
               'resourceAttribute' : 'toolanddescription',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.PlannedToolsView_workOrder_PlannedToolListItem_toolanddescription',
               'id' : 'aw59bab0a1',
            });
            listItemTemplate011.addChild( listtext046 );


            var listtext047 = new ListText({
               'resourceAttribute' : 'quantity',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'WorkExecution.PlannedToolsView_workOrder_PlannedToolListItem_quantity',
               'id' : 'aw1b4bb0a8',
            });
            listItemTemplate011.addChild( listtext047 );



            var list011 = new List({
               'resource' : 'workOrder',
               'transitionTo' : 'WorkExecution.PlannedToolsDetailView',
               'sortOptions' : sortOptions007,
               'listItemTemplate' : listItemTemplate011,
               'artifactId' : 'WorkExecution.PlannedToolsView_workOrder_toollist_list',
               'attribute' : 'toollist',
               'id' : 'aw99ed85e6',
            });
            view015.addChild( list011 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.PlannedToolsDetailView', false);
               trackTimer.startTracking();
            }

            var view016 = new View({
               'id' : 'WorkExecution.PlannedToolsDetailView',
               'label' : MessageService.createStaticMessage('Tool Details'),
            });
            ui001.addChild( view016 );

            var requiredResources016 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.PlannedToolsDetailView_workOrder',
                  'id' : 'aw2ee04782',
                  'related' : {
                     'toollist' : {
                        'artifactId' : 'WorkExecution.PlannedToolsDetailView_workOrder_toollist',
                        'id' : 'aw8b1718c4',
                     },
                  },
               },
               'domainitemtype' : {
                  'artifactId' : 'WorkExecution.PlannedToolsDetailView_domainitemtype',
                  'id' : 'awaf22d7ea',
               },
            };
            view016.addRequiredResources( requiredResources016 );

            var container015 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.PlannedToolsDetailView_workOrder_container_0',
               'attribute' : 'toollist',
               'id' : 'awa4ada0e',
            });
            view016.addChild( container015 );


            var group014 = new Group({
               'artifactId' : 'WorkExecution.PlannedToolsDetailView_group_0',
               'id' : 'aw628cd747',
            });
            container015.addChild( group014 );


            var groupitem049 = new GroupItem({
               'artifactId' : 'WorkExecution.PlannedToolsDetailView_workOrder_groupitem_0',
               'id' : 'aw4f914b1d',
            });
            group014.addChild( groupitem049 );


            var text073 = new Text({
               'resourceAttribute' : 'taskid',
               'editable' : false,
               'artifactId' : 'WorkExecution.PlannedToolsDetailView_workOrder_groupitem_0_taskid_Task',
               'id' : 'awadd7e40f',
               'label' : MessageService.createStaticMessage('Task'),
            });
            groupitem049.addChild( text073 );


            var groupitem050 = new GroupItem({
               'transitionTo' : 'WorkExecution.ToolView',
               'artifactId' : 'WorkExecution.PlannedToolsDetailView_workOrder_groupitem_WorkExecution.ToolView_0',
               'id' : 'aw682924af',
            });
            group014.addChild( groupitem050 );


            var text074 = new Text({
               'resourceAttribute' : 'toolanddescription',
               'editable' : false,
               'artifactId' : 'WorkExecution.PlannedToolsDetailView_workOrder_groupitem_WorkExecution.ToolView_0_toolanddescription_Tool',
               'id' : 'awb8dc1cff',
               'label' : MessageService.createStaticMessage('Tool'),
            });
            groupitem050.addChild( text074 );


            var groupitem051 = new GroupItem({
               'artifactId' : 'WorkExecution.PlannedToolsDetailView_workOrder_groupitem_1',
               'id' : 'aw38967b8b',
            });
            group014.addChild( groupitem051 );


            var text075 = new Text({
               'resourceAttribute' : 'quantity',
               'editable' : false,
               'artifactId' : 'WorkExecution.PlannedToolsDetailView_workOrder_groupitem_1_quantity_Quantity',
               'id' : 'awb25e1a98',
               'label' : MessageService.createStaticMessage('Quantity'),
            });
            groupitem051.addChild( text075 );


            var groupitem052 = new GroupItem({
               'artifactId' : 'WorkExecution.PlannedToolsDetailView_workOrder_groupitem_2',
               'id' : 'awa19f2a31',
            });
            group014.addChild( groupitem052 );


            var text076 = new Text({
               'resourceAttribute' : 'hours',
               'editable' : false,
               'artifactId' : 'WorkExecution.PlannedToolsDetailView_workOrder_groupitem_2_hours_Hours',
               'id' : 'aw2ee1c616',
               'label' : MessageService.createStaticMessage('Hours'),
            });
            groupitem052.addChild( text076 );


            var group015 = new Group({
               'artifactId' : 'WorkExecution.PlannedToolsDetailView_group_1',
               'id' : 'aw158be7d1',
            });
            container015.addChild( group015 );


            var groupitem053 = new GroupItem({
               'artifactId' : 'WorkExecution.PlannedToolsDetailView_workOrder_groupitem_4',
               'id' : 'aw48fc8f04',
            });
            group015.addChild( groupitem053 );


            var lastupdatetext003 = new LastUpdateText({
               'artifactId' : 'WorkExecution.PlannedToolsDetailView_lastupdatetext',
               'id' : 'awe4c9a72b',
            });
            groupitem053.addChild( lastupdatetext003 );

            var eventHandlers061 = [
               {
                     'method' : 'initPlannedToolDetailView',
                     'artifactId' : 'WorkExecution.PlannedToolsDetailView_eventHandlers_show_initPlannedToolDetailView',
                     'id' : 'awe83d787f',
                     'event' : 'show',
                     'class' : 'application.handlers.PlannedToolHandler',
               }
            ];
            view016.eventHandlers = eventHandlers061;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.ToolView', false);
               trackTimer.startTracking();
            }

            var view017 = new View({
               'id' : 'WorkExecution.ToolView',
               'label' : MessageService.createStaticMessage('Tool'),
            });
            ui001.addChild( view017 );

            var requiredResources017 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.ToolView_workOrder',
                  'id' : 'awfd98478',
                  'related' : {
                     'toollist' : {
                        'artifactId' : 'WorkExecution.ToolView_workOrder_toollist',
                        'id' : 'aw8ded2706',
                     },
                  },
               },
            };
            view017.addRequiredResources( requiredResources017 );

            var container016 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.ToolView_workOrder_container_0',
               'attribute' : 'toollist',
               'id' : 'aw9dd7a918',
            });
            view017.addChild( container016 );


            var group016 = new Group({
               'artifactId' : 'WorkExecution.ToolView_group_0',
               'id' : 'aw5dce1658',
            });
            container016.addChild( group016 );


            var groupitem054 = new GroupItem({
               'artifactId' : 'WorkExecution.ToolView_workOrder_groupitem_0',
               'id' : 'awd80c380b',
            });
            group016.addChild( groupitem054 );


            var text077 = new Text({
               'resourceAttribute' : 'tool',
               'editable' : false,
               'artifactId' : 'WorkExecution.ToolView_workOrder_groupitem_0_tool',
               'id' : 'aw7f6219e6',
            });
            groupitem054.addChild( text077 );


            var text078 = new Text({
               'resourceAttribute' : 'tooldesc',
               'editable' : false,
               'artifactId' : 'WorkExecution.ToolView_workOrder_groupitem_0_tooldesc',
               'id' : 'aw7c274fc7',
            });
            groupitem054.addChild( text078 );


            var groupitem055 = new GroupItem({
               'artifactId' : 'WorkExecution.ToolView_workOrder_groupitem_1',
               'id' : 'awaf0b089d',
            });
            group016.addChild( groupitem055 );


            var text079 = new Text({
               'resourceAttribute' : 'toollongdesc',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'WorkExecution.ToolView_workOrder_groupitem_1_toollongdesc',
               'id' : 'awb8cd2d6c',
            });
            groupitem055.addChild( text079 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.FollowUpWorkOrderView', false);
               trackTimer.startTracking();
            }

            var view018 = new View({
               'resource' : 'workOrder',
               'id' : 'WorkExecution.FollowUpWorkOrderView',
               'label' : MessageService.createStaticMessage('Service Item Details'),
            });
            ui001.addChild( view018 );

            var requiredResources018 = {
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
               'ancestorLoc' : {
                  'artifactId' : 'WorkExecution.FollowUpWorkOrderView_ancestor',
                  'id' : 'aw9961ec27',
               },
            };
            view018.addRequiredResources( requiredResources018 );

            var actions008 = new Actions({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_actions',
               'id' : 'awf24ff623',
            });
            view018.addChild( actions008 );


            var action014 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'enableFeatureByProperty' : 'attachments.enabled',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_TakePhoto_action',
               'id' : 'aw33be8473',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions008.addChild( action014 );

            var eventHandlers062 = [
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
            action014.eventHandlers = eventHandlers062;

            var container017 = new Container({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_container_0',
               'id' : 'awfe577e0',
            });
            view018.addChild( container017 );


            var group017 = new Group({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_0',
               'id' : 'aw6a18af46',
            });
            container017.addChild( group017 );


            var groupitem056 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_0',
               'id' : 'aw4a3ee6f3',
            });
            group017.addChild( groupitem056 );


            var text080 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : false,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_0_wonum_WorkOrder',
               'id' : 'awe1c6aa2c',
               'label' : MessageService.createStaticMessage('Service Item'),
            });
            groupitem056.addChild( text080 );


            var groupitem057 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.EditStatusView_0',
               'id' : 'awc5f263b0',
            });
            group017.addChild( groupitem057 );


            var text081 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.EditStatusView_0_statusdesc_Status',
               'id' : 'awd3717903',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem057.addChild( text081 );


            var groupitem058 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.EditSiteidView_0',
               'id' : 'aw53c170c6',
            });
            group017.addChild( groupitem058 );


            var text082 = new Text({
               'resourceAttribute' : 'siteid',
               'editable' : false,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution_groupitem_0_siteid_WorkOrder',
               'id' : 'aw8ddaf56a',
               'label' : MessageService.createStaticMessage('Regional Government'),
            });
            groupitem058.addChild( text082 );


            var groupitem059 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.LongDescriptionView_0',
               'id' : 'aw5850076',
            });
            group017.addChild( groupitem059 );


            var text083 = new Text({
               'resourceAttribute' : 'longdescription',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution_workOrder_groupitem_WorkExecution.LongDescriptionView_0_longdescription',
               'id' : 'aw62e094e3',
               'label' : MessageService.createStaticMessage('Description'),
            });
            groupitem059.addChild( text083 );


            var groupitem060 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.Pd_Obs_0',
               'id' : 'awdf472c98',
            });
            group017.addChild( groupitem060 );


            var textarea003 = new TextArea({
               'resourceAttribute' : 'pd_obs',
               'editable' : true,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.Pd_Obs_0_obs_pd_obs',
               'id' : 'aw5f33fecb',
               'label' : MessageService.createStaticMessage('Comments'),
            });
            groupitem060.addChild( textarea003 );


            var groupitem061 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_workOrder_groupitem_1',
               'id' : 'aw90746d32',
            });
            group017.addChild( groupitem061 );


            var text084 = new Text({
               'resourceAttribute' : 'woserviceaddressline2',
               'editable' : true,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_1_woserviceaddress_woserviceaddressaddressline2',
               'id' : 'awf960e1b4',
               'label' : MessageService.createStaticMessage('Address'),
               'required' : true,
            });
            groupitem061.addChild( text084 );


            var text085 = new Text({
               'resourceAttribute' : 'woservicetaddrnumber',
               'editable' : true,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_1_woserviceaddress_woserviceaddressstaddrnumber',
               'id' : 'awc687669c',
               'label' : MessageService.createStaticMessage('Number'),
               'required' : true,
            });
            groupitem061.addChild( text085 );


            var text086 = new Text({
               'resourceAttribute' : 'woserviceaddressline3',
               'editable' : true,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_1_woserviceaddress_woserviceaddressaddressline3',
               'id' : 'aw8e67d122',
               'label' : MessageService.createStaticMessage('District'),
               'required' : true,
            });
            groupitem061.addChild( text086 );


            var text087 = new Text({
               'resourceAttribute' : 'woservicepostalcode',
               'editable' : true,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_1_woserviceaddress_woserviceaddresspostalcode',
               'id' : 'awdbf765a6',
               'label' : MessageService.createStaticMessage('Postal Code'),
            });
            groupitem061.addChild( text087 );


            var groupitem062 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_5',
               'id' : 'aw3a54127c',
            });
            group017.addChild( groupitem062 );


            var text088 = new Text({
               'resourceAttribute' : 'starttime',
               'editable' : true,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_2_starttime_ScheduledStart',
               'id' : 'awe71e7aa4',
               'label' : MessageService.createStaticMessage('Scheduled Start'),
               'placeHolder' : MessageService.createStaticMessage('Select'),
            });
            groupitem062.addChild( text088 );


            var groupitem063 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_6',
               'id' : 'awa35d43c6',
            });
            group017.addChild( groupitem063 );


            var text089 = new Text({
               'resourceAttribute' : 'finishtime',
               'editable' : true,
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_3_finishtime_ScheduledFinish',
               'id' : 'aw28e94f80',
               'label' : MessageService.createStaticMessage('Scheduled Finish'),
               'placeHolder' : MessageService.createStaticMessage('Select'),
            });
            groupitem063.addChild( text089 );


            var groupitem064 = new GroupItem({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.ClassifyWorkOrderView_0',
               'id' : 'awb18bc546',
            });
            group017.addChild( groupitem064 );


            var text090 = new Text({
               'resourceAttribute' : 'classstructureid',
               'lookup' : 'WorkExecution.classifyLookup',
               'editable' : false,
               'labelCss' : 'editableLabel',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.ClassifyWorkOrderView_0_classificationdesc',
               'id' : 'awc115643a',
               'label' : MessageService.createStaticMessage('Classification'),
               'lookupAttribute' : 'classstructureid',
               'placeHolder' : MessageService.createStaticMessage('Classify Work Order'),
               'required' : true,
            });
            groupitem064.addChild( text090 );


            var container018 = new Container({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_container_1',
               'id' : 'aw78e24776',
            });
            view018.addChild( container018 );


            var group018 = new Group({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_2',
               'id' : 'aw8416ce6a',
            });
            container018.addChild( group018 );


            var groupitem065 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'enableFeatureByProperty' : 'attachments.enabled',
               'transitionTo' : 'WorkExecution.AttachmentsView',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.AttachmentsView_0',
               'id' : 'aw9b12694d',
            });
            group018.addChild( groupitem065 );


            var text091 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.AttachmentsView_0_Attachments',
               'id' : 'aw712b546a',
               'value' : MessageService.createStaticMessage('Attachments'),
            });
            groupitem065.addChild( text091 );


            var text092 = new Text({
               'resourceAttribute' : 'attachmentssize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_groupitem_WorkExecution.AttachmentsView_0_attachmentssize',
               'id' : 'aw1159373c',
            });
            groupitem065.addChild( text092 );


            var group019 = new Group({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_5',
               'id' : 'aw1a725bc9',
            });
            container018.addChild( group019 );


            var groupitem066 = new GroupItem({
               'layout' : 'Item1Count1Button1',
               'transitionTo' : 'WorkExecution.LaborAssignmentsView',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_5_groupitem',
               'id' : 'awc508da2d',
            });
            group019.addChild( groupitem066 );


            var text093 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_5_groupitem_WorkExecution.LaborAssignmentsView_0_LaborAssignments',
               'id' : 'aw7c9b7f1a',
               'value' : MessageService.createStaticMessage('Labor Assignments'),
            });
            groupitem066.addChild( text093 );


            var text094 = new Text({
               'resourceAttribute' : 'assignmentlistsize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_5_groupitem_WorkExecution.LaborAssignmentsView_0_assignmentlistsize',
               'id' : 'awb9443397',
            });
            groupitem066.addChild( text094 );


            var group020 = new Group({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_4',
               'id' : 'aw6d756b5f',
            });
            container018.addChild( group020 );


            var groupitem067 = new GroupItem({
               'layout' : 'Item1Count1Button1',
               'transitionTo' : 'WorkExecution.PlannedToolsView',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group.PlannedToolsView_0',
               'id' : 'awf3d89193',
            });
            group020.addChild( groupitem067 );


            var text095 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_groupitem_WorkExecution.PlannedToolsView_0_PlannedTools',
               'id' : 'aw6f4461a',
               'value' : MessageService.createStaticMessage('Planned Tools'),
            });
            groupitem067.addChild( text095 );


            var text096 = new Text({
               'resourceAttribute' : 'toollistsize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_groupitem_WorkExecution.PlannedToolsView_0_toollistsize',
               'id' : 'aw18873c94',
            });
            groupitem067.addChild( text096 );


            var group021 = new Group({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_group_3',
               'id' : 'awf311fefc',
            });
            container018.addChild( group021 );


            var footer001 = new Footer({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_footer',
               'id' : 'aw876194c7',
            });
            view018.addChild( footer001 );


            var button011 = new Button({
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_Cancel_button',
               'id' : 'awb2092321',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers063 = [
               {
                     'method' : 'discardNewWorkOrderView',
                     'artifactId' : 'WorkExecution.FollowUpWorkOrderView_Cancel_button_eventHandlers_click_discardNewWorkOrderView',
                     'id' : 'aw40a1b099',
                     'event' : 'click',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            button011.eventHandlers = eventHandlers063;
            footer001.addChild( button011 );


            var button012 = new Button({
               'resourceAttribute' : 'wonum',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.FollowUpWorkOrderView_wonum_Create_button',
               'id' : 'aw714e2cfd',
               'label' : MessageService.createStaticMessage('Create'),
               'primary' : 'true',
            });
            var eventHandlers064 = [
               {
                     'method' : 'commitNewWorkOrderView',
                     'artifactId' : 'WorkExecution.FollowUpWorkOrderView_wonum_Create_button_eventHandlers_click_commitNewWorkOrderView',
                     'id' : 'aw2436e46c',
                     'event' : 'click',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               }
            ];
            button012.eventHandlers = eventHandlers064;
            footer001.addChild( button012 );

            var eventHandlers065 = [
               {
                     'method' : 'discardNewWorkOrderView',
                     'artifactId' : 'WorkExecution.FollowUpWorkOrderView_eventHandlers_cleanup_discardNewWorkOrderView',
                     'id' : 'aw65bf5473',
                     'event' : 'cleanup',
                     'class' : 'custom.handlers.WODetailExtensionHandler',
               },
               {
                     'method' : 'initializeMeters',
                     'artifactId' : 'WorkExecution.FollowUpWorkOrderView_eventHandlers_initialize_initializeMeters',
                     'id' : 'awd697faeb',
                     'event' : 'initialize',
                     'class' : 'application.handlers.MetersListHandler',
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
            view018.eventHandlers = eventHandlers065;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.ClassifyWorkOrderView', false);
               trackTimer.startTracking();
            }

            var view019 = new View({
               'resource' : 'workOrder',
               'allowDrillDown' : 'true',
               'id' : 'WorkExecution.ClassifyWorkOrderView',
               'label' : MessageService.createStaticMessage('Classify'),
            });
            ui001.addChild( view019 );

            var requiredResources019 = {
               'classstructure' : {
                  'artifactId' : 'WorkExecution.ClassifyWorkOrderView_classstructure',
                  'id' : 'aw38565254',
               },
            };
            view019.addRequiredResources( requiredResources019 );

            var container019 = new Container({
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_container_0',
               'id' : 'aw1b366c51',
            });
            view019.addChild( container019 );


            var group022 = new Group({
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_group_0',
               'id' : 'awffbba620',
            });
            container019.addChild( group022 );


            var groupitem068 = new GroupItem({
               'cssClass' : 'pathContainer',
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_groupitem_0',
               'id' : 'aw5eedfd42',
            });
            group022.addChild( groupitem068 );


            var text097 = new Text({
               'resourceAttribute' : 'classificationpath',
               'editable' : false,
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_groupitem_0_classificationpath',
               'id' : 'aw73afe3e8',
            });
            groupitem068.addChild( text097 );


            var text098 = new Text({
               'resourceAttribute' : 'classificationdesc',
               'editable' : false,
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_groupitem_0_classificationdesc',
               'id' : 'aw734ec4b3',
            });
            groupitem068.addChild( text098 );

            var eventHandlers066 = [
               {
                     'method' : 'hideIfNull',
                     'artifactId' : 'WorkExecution.ClassifyWorkOrderView_container_0_eventHandlers_render_hideIfNull',
                     'id' : 'aw120ef419',
                     'event' : 'render',
                     'class' : 'application.handlers.ClassifyWorkOrderHandler',
               }
            ];
            container019.eventHandlers = eventHandlers066;


            var listItemTemplate012 = new ListItemTemplate({
               'layout' : 'FailureReportList',
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_classstructure_listItemTemplate_FailureReportList',
               'id' : 'aw631107f1',
            });

            var listtext048 = new ListText({
               'resourceAttribute' : 'fulldesc',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_classstructure_FailureReportList_fulldesc',
               'id' : 'awdbee2be9',
            });
            listItemTemplate012.addChild( listtext048 );

            var eventHandlers067 = [
               {
                     'method' : 'openChildren',
                     'artifactId' : 'WorkExecution.ClassifyWorkOrderView_classstructure_listItemTemplate_FailureReportList_eventHandlers_click_openChildren',
                     'id' : 'awb23c7ac8',
                     'event' : 'click',
                     'class' : 'application.handlers.ClassifyWorkOrderHandler',
               }
            ];
            listItemTemplate012.eventHandlers = eventHandlers067;


            var list012 = new List({
               'resource' : 'classstructure',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate012,
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_classstructure_list',
               'id' : 'awcad4c8d8',
               'label' : MessageService.createStaticMessage('Classify'),
               'displayPageSize' : '20',
            });
            view019.addChild( list012 );


            var footer002 = new Footer({
               'visibleButtonCount' : '2',
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_footer',
               'id' : 'aw9b22700f',
            });
            view019.addChild( footer002 );


            var button013 = new Button({
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_Cancel_button',
               'id' : 'awc5b261e7',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers068 = [
               {
                     'method' : 'cancelClassify',
                     'artifactId' : 'WorkExecution.ClassifyWorkOrderView_Cancel_button_eventHandlers_click_cancelClassify',
                     'id' : 'aw2c001fa3',
                     'event' : 'click',
                     'class' : 'application.handlers.ClassifyWorkOrderHandler',
               }
            ];
            button013.eventHandlers = eventHandlers068;
            footer002.addChild( button013 );


            var button014 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_Clear_button',
               'id' : 'awf9eef3f3',
               'label' : MessageService.createStaticMessage('Clear'),
               'primary' : 'true',
            });
            var eventHandlers069 = [
               {
                     'method' : 'hideClear',
                     'artifactId' : 'WorkExecution.ClassifyWorkOrderView_Clear_button_eventHandlers_render_hideClear',
                     'id' : 'aw8a19c28b',
                     'event' : 'render',
                     'class' : 'application.handlers.ClassifyWorkOrderHandler',
               },
               {
                     'method' : 'clearClassify',
                     'artifactId' : 'WorkExecution.ClassifyWorkOrderView_Clear_button_eventHandlers_click_clearClassify',
                     'id' : 'aw27810a95',
                     'event' : 'click',
                     'class' : 'application.handlers.ClassifyWorkOrderHandler',
               }
            ];
            button014.eventHandlers = eventHandlers069;
            footer002.addChild( button014 );


            var button015 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.ClassifyWorkOrderView_Classify_button',
               'id' : 'awa80c56e9',
               'label' : MessageService.createStaticMessage('Classify'),
               'primary' : 'true',
            });
            var eventHandlers070 = [
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
            button015.eventHandlers = eventHandlers070;
            footer002.addChild( button015 );

            var eventHandlers071 = [
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
            view019.eventHandlers = eventHandlers071;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Wotickets.DescriptionView', false);
               trackTimer.startTracking();
            }

            var view020 = new View({
               'resource' : 'workOrder',
               'id' : 'Wotickets.DescriptionView',
               'label' : MessageService.createStaticMessage('Descarga da Massa Asf\u00E1ltica'),
            });
            ui001.addChild( view020 );

            var requiredResources020 = {
               'amtickets' : {
                  'artifactId' : 'Wotickets.DescriptionView_wotickets',
                  'id' : 'aw3de92cfe',
               },
            };
            view020.addRequiredResources( requiredResources020 );

            var container020 = new Container({
               'artifactId' : 'Wotickets.DescriptionView_container_0',
               'id' : 'aw665b7e53',
            });
            view020.addChild( container020 );


            var group023 = new Group({
               'artifactId' : 'Wotickets.DescriptionView_group_0',
               'id' : 'awd966132f',
            });
            container020.addChild( group023 );


            var groupitem069 = new GroupItem({
               'layout' : 'Item1Button1',
               'artifactId' : 'Wotickets.DescriptionView.EditStatusView_0',
               'id' : 'awa49104ff',
            });
            group023.addChild( groupitem069 );


            var text099 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Wotickets.DescriptionView.EditStatusView_0_statusdesc_Status',
               'id' : 'aw27b82130',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem069.addChild( text099 );


            var groupitem070 = new GroupItem({
               'artifactId' : 'Wotickets.DescriptionView_groupitem_01',
               'id' : 'awf5232ec8',
            });
            group023.addChild( groupitem070 );


            var text100 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : false,
               'artifactId' : 'Wotickets.DescriptionView_WorkOrder',
               'id' : 'aw9d3c99cd',
               'label' : MessageService.createStaticMessage('Service Item'),
            });
            groupitem070.addChild( text100 );


            var groupitem071 = new GroupItem({
               'artifactId' : 'Wotickets.DescriptionView_groupitem_ms_aging',
               'id' : 'awbe62f6ab',
            });
            group023.addChild( groupitem071 );


            var text101 = new Text({
               'resourceAttribute' : 'ms_aging',
               'editable' : false,
               'artifactId' : 'Wotickets.DescriptionView_WorkOrder01',
               'id' : 'aw38c63be9',
               'label' : MessageService.createStaticMessage('Dias'),
            });
            groupitem071.addChild( text101 );


            var groupitem072 = new GroupItem({
               'artifactId' : 'Wotickets.DescriptionView_groupitem_0',
               'id' : 'aw2380ef40',
            });
            group023.addChild( groupitem072 );


            var text102 = new Text({
               'resourceAttribute' : 'ms_amticketid',
               'lookup' : 'Wotickets.Lookup',
               'editable' : false,
               'artifactId' : 'Wotickets.DescriptionView_groupitem_0_ms_woticketid',
               'id' : 'aw869952a3',
               'label' : MessageService.createStaticMessage('Tickets'),
               'lookupAttribute' : 'ms_woticketid',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem072.addChild( text102 );


            var container021 = new Container({
               'artifactId' : 'Data_Inicial',
               'id' : 'awc06ec61c',
            });
            view020.addChild( container021 );


            var group024 = new Group({
               'artifactId' : 'Wotickets.CampoMassaView_group_0',
               'id' : 'aw21103e51',
            });
            container021.addChild( group024 );


            var groupitem073 = new GroupItem({
               'artifactId' : 'Wotickets.DataInicial.EditSiteidView_011',
               'id' : 'awb5b81212',
            });
            group024.addChild( groupitem073 );


            var text103 = new Text({
               'resourceAttribute' : 'ms_startdate',
               'editable' : false,
               'artifactId' : 'Wotickets.DataInicial_groupitem_0_siteid_WorkOrder_11',
               'id' : 'awa01ffb3d',
               'label' : MessageService.createStaticMessage('Data Inicial'),
            });
            groupitem073.addChild( text103 );


            var container022 = new Container({
               'artifactId' : 'Data_Final',
               'id' : 'aw2cf6bc8d',
            });
            view020.addChild( container022 );


            var group025 = new Group({
               'artifactId' : 'Wotickets.DataFinalaView_group_0',
               'id' : 'aw32d58904',
            });
            container022.addChild( group025 );


            var groupitem074 = new GroupItem({
               'artifactId' : 'Wotickets.DataFinal.EditSiteidView_011',
               'id' : 'aw45e3524b',
            });
            group025.addChild( groupitem074 );


            var text104 = new Text({
               'resourceAttribute' : 'ms_finishdate',
               'editable' : false,
               'artifactId' : 'Wotickets.DataFinal_groupitem_0_siteid_WorkOrder_11',
               'id' : 'aw55b0a7ad',
               'label' : MessageService.createStaticMessage('Data Final'),
            });
            groupitem074.addChild( text104 );


            var button016 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Wotickets.DataInicial_Initiate_button',
               'id' : 'aw4a2c012',
               'label' : MessageService.createStaticMessage('Iniciar Descarga'),
            });
            var eventHandlers072 = [
               {
                     'method' : 'escondeCampoInic',
                     'artifactId' : 'Wotickets.DataInicialeventHandlers_initialize_open_hideTS_2',
                     'id' : 'awa58b0ac8',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'ticket_inicial',
                     'artifactId' : 'Wotickets.DataInicialeventHandlers_initialize_open_hideTS_122',
                     'id' : 'aw85ceb884',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'initCategory',
                     'artifactId' : 'Wotickets.DataInicial_TakePhoto_action_1010eventHandlers_render_initCategory',
                     'id' : 'aw91db1aa8',
                     'event' : 'render',
                     'class' : 'application.handlers.WOAttachmentHandler',
               },
               {
                     'method' : 'updateCurrentGPSPosition',
                     'artifactId' : 'WorkExecution.WorkDetailView_CaptureGPS_action_eventHandlers_click',
                     'id' : 'awb16de09b',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button016.eventHandlers = eventHandlers072;
            view020.addChild( button016 );


            var button017 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Wotickets.DataFinal_Finish_button',
               'id' : 'aw981364e7',
               'label' : MessageService.createStaticMessage('Finalizar Descarga'),
            });
            var eventHandlers073 = [
               {
                     'method' : 'escondeCampoFim',
                     'artifactId' : 'Wotickets.DataFinal_eventHandlers_initialize_open_hideTS_21',
                     'id' : 'awd5cf6db8',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'ticket_Final',
                     'artifactId' : 'FWotickets.DataFinal_eventHandlers_initialize_open_hideTS_122',
                     'id' : 'aw5010d2aa',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'initCategory',
                     'artifactId' : 'Wotickets.DataFinal_TakePhoto_action_1010eventHandlers_render_initCategory',
                     'id' : 'aw7bb18e5c',
                     'event' : 'render',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            button017.eventHandlers = eventHandlers073;
            view020.addChild( button017 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog004 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'MapView.ProgressDownloadOfflineMap',
            });
            ui001.addChild( dialog004 );


            var container023 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'MapView.DownloadOfflineMap_container_0',
               'id' : 'aw8a150ec4',
            });
            dialog004.addChild( container023 );


            var text105 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'WorkExecution.MapView.DownloadOfflineMap_container_0_progressMsg',
               'id' : 'awb8f06c7d',
            });
            container023.addChild( text105 );


            var dialog005 = new Dialog({
               'id' : 'WorkExecution.OverwriteSketch',
            });
            ui001.addChild( dialog005 );


            var container024 = new Container({
               'artifactId' : 'Platform.OverwriteSketch_container',
               'id' : 'aw163b5e6f',
            });
            dialog005.addChild( container024 );


            var text106 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.OverwriteSketch_textField',
               'id' : 'aw11f6d606',
               'value' : MessageService.createStaticMessage('This sketch already exists, would you like to overwrite it?'),
            });
            container024.addChild( text106 );


            var button018 = new Button({
               'artifactId' : 'Platform.OverwriteSketch_doNotAllow_button',
               'id' : 'awa9ecac27',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers074 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.OverwriteSketch_closeDialog',
                     'id' : 'aw8cd2dd53',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button018.eventHandlers = eventHandlers074;
            container024.addChild( button018 );


            var button019 = new Button({
               'artifactId' : 'Platform.OverwriteSketch_overwrite_button',
               'id' : 'aw10c85ed3',
               'label' : MessageService.createStaticMessage('Overwrite'),
            });
            var eventHandlers075 = [
               {
                     'method' : 'overwriteSketch',
                     'artifactId' : 'Platform.OverwriteSketch_overwrite_click',
                     'id' : 'aw1b2fb8db',
                     'event' : 'click',
                     'class' : 'application.handlers.spatial.SketchToolHandler',
               }
            ];
            button019.eventHandlers = eventHandlers075;
            container024.addChild( button019 );


            var dialog006 = new Dialog({
               'id' : 'WorkExecution.UnsavedSketch',
            });
            ui001.addChild( dialog006 );


            var container025 = new Container({
               'artifactId' : 'Platform.UnsavedSketch_container',
               'id' : 'awfaaf7050',
            });
            dialog006.addChild( container025 );


            var text107 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.UnsavedSketch_textField',
               'id' : 'awfd62f839',
               'value' : MessageService.createStaticMessage('The current sketch is not saved, would you like to save it?'),
            });
            container025.addChild( text107 );


            var button020 = new Button({
               'artifactId' : 'Platform.UnsavedSketch_no_button',
               'id' : 'aw1837f404',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers076 = [
               {
                     'method' : 'noSave',
                     'artifactId' : 'Platform.UnsavedSketch_noSave_click',
                     'id' : 'aw8d961cd6',
                     'event' : 'click',
                     'class' : 'application.handlers.spatial.SketchToolHandler',
               }
            ];
            button020.eventHandlers = eventHandlers076;
            container025.addChild( button020 );


            var button021 = new Button({
               'artifactId' : 'Platform.UnsavedSketch_yes_button',
               'id' : 'aw629795f8',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers077 = [
               {
                     'method' : 'showSaveView',
                     'artifactId' : 'Platform.UnsavedSketch_showSave_click',
                     'id' : 'awf99622c',
                     'event' : 'click',
                     'class' : 'application.handlers.spatial.SketchToolHandler',
               }
            ];
            button021.eventHandlers = eventHandlers077;
            container025.addChild( button021 );


            var button022 = new Button({
               'artifactId' : 'Platform.UnsavedSketch_doNotAllow_button',
               'id' : 'aw150d1bc',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers078 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.UnsavedSketch_closeDialog',
                     'id' : 'aw8da1634',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button022.eventHandlers = eventHandlers078;
            container025.addChild( button022 );


            var dialog007 = new Dialog({
               'id' : 'WorkExecution.ConfirmDeleteSketch',
            });
            ui001.addChild( dialog007 );


            var container026 = new Container({
               'artifactId' : 'Platform.ConfirmDeleteSketch_container',
               'id' : 'aw210812fd',
            });
            dialog007.addChild( container026 );


            var text108 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmDeleteSketch_textField',
               'id' : 'aw26c59a94',
               'value' : MessageService.createStaticMessage('Do you want to delete the sketch selected?'),
            });
            container026.addChild( text108 );


            var button023 = new Button({
               'artifactId' : 'Platform.ConfirmDeleteSketch_no_button',
               'id' : 'awc39096a9',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers079 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'WorkExecution.ConfirmSketch_closeDialog',
                     'id' : 'aw68870282',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button023.eventHandlers = eventHandlers079;
            container026.addChild( button023 );


            var button024 = new Button({
               'artifactId' : 'Platform.ConfirmDeleteSketch_yes_button',
               'id' : 'awca2bedcf',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers080 = [
               {
                     'method' : 'deleteSketch',
                     'artifactId' : 'WorkExecution.ConfirmDeleteSketch_yes_click',
                     'id' : 'awcba453ae',
                     'event' : 'click',
                     'class' : 'application.handlers.spatial.SketchToolHandler',
               }
            ];
            button024.eventHandlers = eventHandlers080;
            container026.addChild( button024 );


            var dialog008 = new Dialog({
               'id' : 'WorkExecution.ConfirmLoadSketch',
            });
            ui001.addChild( dialog008 );


            var container027 = new Container({
               'artifactId' : 'Platform.ConfirmLoadSketch_container',
               'id' : 'aw13b693ca',
            });
            dialog008.addChild( container027 );


            var text109 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmLoadSketch_textField',
               'id' : 'aw147b1ba3',
               'value' : MessageService.createStaticMessage('The current sketch is not saved, would you like to save it before load?'),
            });
            container027.addChild( text109 );


            var button025 = new Button({
               'artifactId' : 'Platform.ConfirmLoadSketch_no_button',
               'id' : 'awf12e179e',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers081 = [
               {
                     'method' : 'ignoreSaveAndLoadSketch',
                     'artifactId' : 'WorkExecution.ConfirmLoadSketch_closeDialog',
                     'id' : 'awe9f70961',
                     'event' : 'click',
                     'class' : 'application.handlers.spatial.SketchToolHandler',
               }
            ];
            button025.eventHandlers = eventHandlers081;
            container027.addChild( button025 );


            var button026 = new Button({
               'artifactId' : 'Platform.ConfirmLoadSketch_yes_button',
               'id' : 'aw72a4f641',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers082 = [
               {
                     'method' : 'saveAndLoadSketch',
                     'artifactId' : 'WorkExecution.ConfirmLoadSketch_yes_click',
                     'id' : 'aw1da9e2ea',
                     'event' : 'click',
                     'class' : 'application.handlers.spatial.SketchToolHandler',
               }
            ];
            button026.eventHandlers = eventHandlers082;
            container027.addChild( button026 );


            var button027 = new Button({
               'artifactId' : 'Platform.ConfirmLoadSketch_cancel_button',
               'id' : 'aw967407ee',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers083 = [
               {
                     'method' : 'cancelLoadSketch',
                     'artifactId' : 'WorkExecution.ConfirmLoadSketch_cancel_click',
                     'id' : 'aw8ef8ec4f',
                     'event' : 'click',
                     'class' : 'application.handlers.spatial.SketchToolHandler',
               }
            ];
            button027.eventHandlers = eventHandlers083;
            container027.addChild( button027 );


            var dialog009 = new Dialog({
               'id' : 'WorkExecution.Standby.loading.dialog',
            });
            ui001.addChild( dialog009 );


            var container028 = new Container({
               'artifactId' : 'WorkExecution.Standby.loading.container_0',
               'id' : 'awf93b2487',
            });
            dialog009.addChild( container028 );


            var text110 = new Text({
               'editable' : false,
               'artifactId' : 'WorkExecution.Standby.loading.container_0_.text',
               'id' : 'aw82ef6864',
               'value' : MessageService.createStaticMessage('The data is still loding. Please wait.'),
            });
            container028.addChild( text110 );


            var button028 = new Button({
               'artifactId' : 'WorkExecution.Standby.loading.Ok_button',
               'id' : 'aw65a71328',
               'label' : MessageService.createStaticMessage('Ok'),
            });
            var eventHandlers084 = [
               {
                     'method' : 'hideDialog',
                     'artifactId' : 'WorkExecution.Standby.loading.Ok_button.eventHandlers_click_hideDialog',
                     'id' : 'aw2b846656',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button028.eventHandlers = eventHandlers084;
            container028.addChild( button028 );


            var dialog010 = new Dialog({
               'id' : 'WorkExecution.RequiredSearchFieldMissing',
            });
            ui001.addChild( dialog010 );


            var container029 = new Container({
               'artifactId' : 'WorkExecution.RequiredSearchFieldMissing_container_0',
               'id' : 'aw2376fdfc',
            });
            dialog010.addChild( container029 );


            var text111 = new Text({
               'editable' : false,
               'artifactId' : 'WorkExecution.RequiredSearchFieldMissing_container_0_Somerequiredfields',
               'id' : 'awd55c2647',
               'value' : MessageService.createStaticMessage('Some required fields are empty. Specify the missing information.'),
            });
            container029.addChild( text111 );


            var button029 = new Button({
               'artifactId' : 'WorkExecution.RequiredSearchFieldMissing_Ok_button',
               'id' : 'aw6e3f5d7',
               'label' : MessageService.createStaticMessage('Ok'),
               'primary' : 'true',
            });
            var eventHandlers085 = [
               {
                     'method' : 'hideDialog',
                     'artifactId' : 'WorkExecution.RequiredSearchFieldMissing_Ok_button_eventHandlers_click_hideDialog',
                     'id' : 'aw5dc2b492',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button029.eventHandlers = eventHandlers085;
            container029.addChild( button029 );


            var dialog011 = new Dialog({
               'id' : 'WorkExecution.RemoveRecordFromListDialog',
            });
            ui001.addChild( dialog011 );


            var container030 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.RemoveRecordFromListDialog_container_0',
               'id' : 'awaa60db6b',
            });
            dialog011.addChild( container030 );


            var text112 = new Text({
               'artifactId' : 'WorkExecution.RemoveRecordFromListDialog_container_0_Theworkorderwill',
               'id' : 'awed02f633',
               'value' : MessageService.createStaticMessage('The Work Order will be removed from this list.'),
            });
            container030.addChild( text112 );


            var container031 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.RemoveRecordFromListDialog_container_1',
               'id' : 'awdd67ebfd',
            });
            dialog011.addChild( container031 );


            var button030 = new Button({
               'artifactId' : 'WorkExecution.RemoveRecordFromListDialog_Cancel_button',
               'id' : 'awb51e28e7',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers086 = [
               {
                     'method' : 'noRemoveRecordFromList',
                     'artifactId' : 'WorkExecution.RemoveRecordFromListDialog_Cancel_button_eventHandlers_click_noRemoveRecordFromList',
                     'id' : 'aw16823033',
                     'event' : 'click',
                     'class' : 'application.handlers.WOCreateQueryBaseHandler',
               }
            ];
            button030.eventHandlers = eventHandlers086;
            container031.addChild( button030 );


            var button031 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.RemoveRecordFromListDialog_OK_button',
               'id' : 'aw48d9b039',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers087 = [
               {
                     'method' : 'yesRemoveRecordFromList',
                     'artifactId' : 'WorkExecution.RemoveRecordFromListDialog_OK_button_eventHandlers_click_yesRemoveRecordFromList',
                     'id' : 'awbc9a7ab5',
                     'event' : 'click',
                     'class' : 'application.handlers.WOCreateQueryBaseHandler',
               }
            ];
            button031.eventHandlers = eventHandlers087;
            container031.addChild( button031 );


            var dialog012 = new Dialog({
               'id' : 'WorkExecution.DeleteRecordFromListDialog',
            });
            ui001.addChild( dialog012 );


            var container032 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.DeleteRecordFromListDialog_container_0',
               'id' : 'awd67ed6e5',
            });
            dialog012.addChild( container032 );


            var text113 = new Text({
               'artifactId' : 'WorkExecution.DeleteRecordFromListDialog_container_0_Thisworkorderhas',
               'id' : 'aw8190cc99',
               'value' : MessageService.createStaticMessage('This work order has not been sent to the server. Do you want to delete it?'),
            });
            container032.addChild( text113 );


            var container033 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.DeleteRecordFromListDialog_container_1',
               'id' : 'awa179e673',
            });
            dialog012.addChild( container033 );


            var button032 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.DeleteRecordFromListDialog_Yes_button',
               'id' : 'awc892b6f2',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers088 = [
               {
                     'method' : 'yesDeleteRecordFromList',
                     'artifactId' : 'WorkExecution.DeleteRecordFromListDialog_Yes_button_eventHandlers_click_yesDeleteRecordFromList',
                     'id' : 'awbc022a1e',
                     'event' : 'click',
                     'class' : 'application.handlers.WOCreateQueryBaseHandler',
               }
            ];
            button032.eventHandlers = eventHandlers088;
            container033.addChild( button032 );


            var button033 = new Button({
               'artifactId' : 'WorkExecution.DeleteRecordFromListDialog_No_button',
               'id' : 'aw1758a16a',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers089 = [
               {
                     'method' : 'noDeleteRecordFromList',
                     'artifactId' : 'WorkExecution.DeleteRecordFromListDialog_No_button_eventHandlers_click_noDeleteRecordFromList',
                     'id' : 'aw4cf94fa9',
                     'event' : 'click',
                     'class' : 'application.handlers.WOCreateQueryBaseHandler',
               }
            ];
            button033.eventHandlers = eventHandlers089;
            container033.addChild( button033 );


            var dialog013 = new Dialog({
               'id' : 'WorkExecution.WOStartedDialog',
            });
            ui001.addChild( dialog013 );


            var container034 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.WOStartedDialog_container_0',
               'id' : 'awaf1cc622',
            });
            dialog013.addChild( container034 );


            var text114 = new Text({
               'artifactId' : 'WorkExecution.WOStartedDialog_container_0_Stopthetimeronwo',
               'id' : 'awbfa4c63c',
               'value' : MessageService.createDynamicMessage('Stop the timer on work order {0} before you start the timer on this work order.', 'application.handlers.WOListHandler', 'resolveTimerWonum'),
               'resolverFunction' : 'resolveTimerWonum',
               'resolverClass' : 'application.handlers.WOListHandler',
            });
            container034.addChild( text114 );


            var container035 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.WOStartedDialog_container_1',
               'id' : 'awd81bf6b4',
            });
            dialog013.addChild( container035 );


            var button034 = new Button({
               'artifactId' : 'WorkExecution.WOStartedDialog_Cancel_button',
               'id' : 'awf7a3b50e',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers090 = [
               {
                     'method' : 'WOStartedDialogNoClickHandler',
                     'artifactId' : 'WorkExecution.WOStartedDialog_Cancel_button_eventHandlers_click_WOStartedDialogNoClickHandler',
                     'id' : 'aw770525e8',
                     'event' : 'click',
                     'class' : 'application.handlers.WOListHandler',
               }
            ];
            button034.eventHandlers = eventHandlers090;
            container035.addChild( button034 );


            var button035 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.WOStartedDialog_OK_button',
               'id' : 'awde6cc0f7',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers091 = [
               {
                     'method' : 'WOStartedDialogYesClickHandler',
                     'artifactId' : 'WorkExecution.WOStartedDialog_OK_button_eventHandlers_click_WOStartedDialogYesClickHandler',
                     'id' : 'aw8468f726',
                     'event' : 'click',
                     'class' : 'application.handlers.WOListHandler',
               }
            ];
            button035.eventHandlers = eventHandlers091;
            container035.addChild( button035 );


            var dialog014 = new Dialog({
               'id' : 'WorkExecution.CompWithTimerStartedDialog',
            });
            ui001.addChild( dialog014 );


            var container036 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.CompWithTimerStartedDialog_container_0',
               'id' : 'awa381cd94',
            });
            dialog014.addChild( container036 );


            var text115 = new Text({
               'artifactId' : 'WorkExecution.CompWithTimerStartedDialog_container_0_Thelabortimerfor',
               'id' : 'aw6ffc7510',
               'value' : MessageService.createStaticMessage('The labor timer for this work order is running. Do you want to complete the work order?'),
            });
            container036.addChild( text115 );


            var container037 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.CompWithTimerStartedDialog_container_1',
               'id' : 'awd486fd02',
            });
            dialog014.addChild( container037 );


            var button036 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.CompWithTimerStartedDialog_Yes_button',
               'id' : 'aw5d2a5b30',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers092 = [
               {
                     'method' : 'compTimerStartedYesClickHandler',
                     'artifactId' : 'WorkExecution.CompWithTimerStartedDialog_Yes_button_eventHandlers_click_compTimerStartedYesClickHandler',
                     'id' : 'awed5d0615',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button036.eventHandlers = eventHandlers092;
            container037.addChild( button036 );


            var button037 = new Button({
               'artifactId' : 'WorkExecution.CompWithTimerStartedDialog_No_button',
               'id' : 'aw10ffe1a2',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers093 = [
               {
                     'method' : 'noActionDialogHandler',
                     'artifactId' : 'WorkExecution.CompWithTimerStartedDialog_No_button_eventHandlers_click_noActionDialogHandler',
                     'id' : 'aw77a38dcc',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button037.eventHandlers = eventHandlers093;
            container037.addChild( button037 );


            var dialog015 = new Dialog({
               'id' : 'WorkExecution.CanWithTimerStartedDialog',
            });
            ui001.addChild( dialog015 );


            var container038 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.CanWithTimerStartedDialog_container_0',
               'id' : 'aw131a38ac',
            });
            dialog015.addChild( container038 );


            var text116 = new Text({
               'artifactId' : 'WorkExecution.CanWithTimerStartedDialog_container_0_Thelabortimerfor',
               'id' : 'awb56870ae',
               'value' : MessageService.createDynamicMessage('The labor timer for work order {0} is running. Do you want to cancel the work order?', 'application.handlers.StatusChangeHandler', 'resolveWonum'),
               'resolverFunction' : 'resolveWonum',
               'resolverClass' : 'application.handlers.StatusChangeHandler',
            });
            container038.addChild( text116 );


            var container039 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.CanWithTimerStartedDialog_container_1',
               'id' : 'aw641d083a',
            });
            dialog015.addChild( container039 );


            var button038 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.CanWithTimerStartedDialog_Yes_button',
               'id' : 'aw1647414a',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers094 = [
               {
                     'method' : 'canTimerStartedYesClickHandler',
                     'artifactId' : 'WorkExecution.CanWithTimerStartedDialog_Yes_button_eventHandlers_click_canTimerStartedYesClickHandler',
                     'id' : 'awe91642e0',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button038.eventHandlers = eventHandlers094;
            container039.addChild( button038 );


            var button039 = new Button({
               'artifactId' : 'WorkExecution.CanWithTimerStartedDialog_No_button',
               'id' : 'aw7931dc87',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers095 = [
               {
                     'method' : 'noActionDialogHandler',
                     'artifactId' : 'WorkExecution.CanWithTimerStartedDialog_No_button_eventHandlers_click_noActionDialogHandler',
                     'id' : 'aw5b2e9331',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button039.eventHandlers = eventHandlers095;
            container039.addChild( button039 );


            var dialog016 = new Dialog({
               'id' : 'WorkExecution.CompTaskWithTimerStartedDialog',
            });
            ui001.addChild( dialog016 );


            var container040 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.CompTaskWithTimerStartedDialog_container_0',
               'id' : 'aw67048164',
            });
            dialog016.addChild( container040 );


            var text117 = new Text({
               'artifactId' : 'WorkExecution.CompTaskWithTimerStartedDialog_container_0_Thelabortimerfor',
               'id' : 'aw9efe8c81',
               'value' : MessageService.createDynamicMessage('The labor timer for task {0} of work order {1} is running. Do you want to complete the work order?', 'application.handlers.StatusChangeHandler', 'resolveTaskAndWonum'),
               'resolverFunction' : 'resolveTaskAndWonum',
               'resolverClass' : 'application.handlers.StatusChangeHandler',
            });
            container040.addChild( text117 );


            var container041 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.CompTaskWithTimerStartedDialog_container_1',
               'id' : 'aw1003b1f2',
            });
            dialog016.addChild( container041 );


            var button040 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.CompTaskWithTimerStartedDialog_Yes_button',
               'id' : 'awb92c13c9',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers096 = [
               {
                     'method' : 'compTaskTimerStartedYesClickHandler',
                     'artifactId' : 'WorkExecution.CompTaskWithTimerStartedDialog_Yes_button_eventHandlers_click_compTaskTimerStartedYesClickHandler',
                     'id' : 'aw657e9933',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button040.eventHandlers = eventHandlers096;
            container041.addChild( button040 );


            var button041 = new Button({
               'artifactId' : 'WorkExecution.CompTaskWithTimerStartedDialog_No_button',
               'id' : 'aw1878132e',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers097 = [
               {
                     'method' : 'noActionDialogHandler',
                     'artifactId' : 'WorkExecution.CompTaskWithTimerStartedDialog_No_button_eventHandlers_click_noActionDialogHandler',
                     'id' : 'awc9060a51',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button041.eventHandlers = eventHandlers097;
            container041.addChild( button041 );


            var dialog017 = new Dialog({
               'id' : 'WorkExecution.CanTaskWithTimerStartedDialog',
            });
            ui001.addChild( dialog017 );


            var container042 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.CanTaskWithTimerStartedDialog_container_0',
               'id' : 'awb840004c',
            });
            dialog017.addChild( container042 );


            var text118 = new Text({
               'artifactId' : 'WorkExecution.CanTaskWithTimerStartedDialog_container_0_Thelabortimerfor',
               'id' : 'aw16b30317',
               'value' : MessageService.createDynamicMessage('The labor timer for task {0} of work order {1} is running. Do you want to cancel the work order?', 'application.handlers.StatusChangeHandler', 'resolveTaskAndWonum'),
               'resolverFunction' : 'resolveTaskAndWonum',
               'resolverClass' : 'application.handlers.StatusChangeHandler',
            });
            container042.addChild( text118 );


            var container043 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.CanTaskWithTimerStartedDialog_container_1',
               'id' : 'awcf4730da',
            });
            dialog017.addChild( container043 );


            var button042 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.CanTaskWithTimerStartedDialog_Yes_button',
               'id' : 'aw9d42f865',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers098 = [
               {
                     'method' : 'canTaskTimerStartedYesClickHandler',
                     'artifactId' : 'WorkExecution.CanTaskWithTimerStartedDialog_Yes_button_eventHandlers_click_canTaskTimerStartedYesClickHandler',
                     'id' : 'awee3d003d',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button042.eventHandlers = eventHandlers098;
            container043.addChild( button042 );


            var button043 = new Button({
               'artifactId' : 'WorkExecution.CanTaskWithTimerStartedDialog_No_button',
               'id' : 'awc23019dd',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers099 = [
               {
                     'method' : 'noActionDialogHandler',
                     'artifactId' : 'WorkExecution.CanTaskWithTimerStartedDialog_No_button_eventHandlers_click_noActionDialogHandler',
                     'id' : 'aw1747c0b4',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button043.eventHandlers = eventHandlers099;
            container043.addChild( button043 );


            var dialog018 = new Dialog({
               'id' : 'WorkExecution.CompWOWithTaskTimerStartedDialog',
            });
            ui001.addChild( dialog018 );


            var container044 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.CompWOWithTaskTimerStartedDialog_container_0',
               'id' : 'aw4eb0f67c',
            });
            dialog018.addChild( container044 );


            var text119 = new Text({
               'artifactId' : 'WorkExecution.CompWOWithTaskTimerStartedDialog_container_0_Thelabortimerfor',
               'id' : 'aw264ea29f',
               'value' : MessageService.createDynamicMessage('The labor timer for activity {0}, a task of work order {1} is running. Do you want to complete the work order?', 'application.handlers.StatusChangeHandler', 'resolveActivityAndWonum'),
               'resolverFunction' : 'resolveActivityAndWonum',
               'resolverClass' : 'application.handlers.StatusChangeHandler',
            });
            container044.addChild( text119 );


            var container045 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.CompWOWithTaskTimerStartedDialog_container_1',
               'id' : 'aw39b7c6ea',
            });
            dialog018.addChild( container045 );


            var button044 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.CompWOWithTaskTimerStartedDialog_Yes_button',
               'id' : 'awd49293b0',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers100 = [
               {
                     'method' : 'compTimerStartedYesClickHandler',
                     'artifactId' : 'WorkExecution.CompWOWithTaskTimerStartedDialog_Yes_button_eventHandlers_click_compTimerStartedYesClickHandler',
                     'id' : 'aw68605b36',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button044.eventHandlers = eventHandlers100;
            container045.addChild( button044 );


            var button045 = new Button({
               'artifactId' : 'WorkExecution.CompWOWithTaskTimerStartedDialog_No_button',
               'id' : 'aw7b1c813b',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers101 = [
               {
                     'method' : 'noActionDialogHandler',
                     'artifactId' : 'WorkExecution.CompWOWithTaskTimerStartedDialog_No_button_eventHandlers_click_noActionDialogHandler',
                     'id' : 'aw84a59425',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button045.eventHandlers = eventHandlers101;
            container045.addChild( button045 );


            var dialog019 = new Dialog({
               'id' : 'WorkExecution.CanWOWithTaskTimerStartedDialog',
            });
            ui001.addChild( dialog019 );


            var container046 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.CanWOWithTaskTimerStartedDialog_container_0',
               'id' : 'aw89523424',
            });
            dialog019.addChild( container046 );


            var text120 = new Text({
               'artifactId' : 'WorkExecution.CanWOWithTaskTimerStartedDialog_container_0_Thelabortimerfor',
               'id' : 'aw7c5299ff',
               'value' : MessageService.createDynamicMessage('The labor timer for activity {0}, a task of work order {1}, is running. The labor transaction will be deleted if you cancel the work order. Do you want to cancel the work order?', 'application.handlers.StatusChangeHandler', 'resolveActivityAndWonum'),
               'resolverFunction' : 'resolveActivityAndWonum',
               'resolverClass' : 'application.handlers.StatusChangeHandler',
            });
            container046.addChild( text120 );


            var container047 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.CanWOWithTaskTimerStartedDialog_container_1',
               'id' : 'awfe5504b2',
            });
            dialog019.addChild( container047 );


            var button046 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.CanWOWithTaskTimerStartedDialog_Yes_button',
               'id' : 'awe1f87fcb',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers102 = [
               {
                     'method' : 'canTimerStartedYesClickHandler',
                     'artifactId' : 'WorkExecution.CanWOWithTaskTimerStartedDialog_Yes_button_eventHandlers_click_canTimerStartedYesClickHandler',
                     'id' : 'awce6512a2',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button046.eventHandlers = eventHandlers102;
            container047.addChild( button046 );


            var button047 = new Button({
               'artifactId' : 'WorkExecution.CanWOWithTaskTimerStartedDialog_No_button',
               'id' : 'awa4580013',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers103 = [
               {
                     'method' : 'noActionDialogHandler',
                     'artifactId' : 'WorkExecution.CanWOWithTaskTimerStartedDialog_No_button_eventHandlers_click_noActionDialogHandler',
                     'id' : 'awdc1d6663',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button047.eventHandlers = eventHandlers103;
            container047.addChild( button047 );


            var dialog020 = new Dialog({
               'id' : 'WorkExecution.LaborMismatch',
            });
            ui001.addChild( dialog020 );


            var container048 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.LaborMismatch_container_0',
               'id' : 'awaaa35c16',
            });
            dialog020.addChild( container048 );


            var text121 = new Text({
               'artifactId' : 'WorkExecution.LaborMismatch_container_0_TheLaborCraftSk',
               'id' : 'aweac4c11a',
               'value' : MessageService.createStaticMessage('The Labor, Craft, Skill Level, Vendor and Contract combination selected does not match data currently on the device. Do you want to continue?'),
            });
            container048.addChild( text121 );


            var container049 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.LaborMismatch_container_1',
               'id' : 'awdda46c80',
            });
            dialog020.addChild( container049 );


            var button048 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.LaborMismatch_Yes_button',
               'id' : 'awc9f7f23c',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers104 = [
               {
                     'method' : 'continueLaborCraftMismatch',
                     'artifactId' : 'WorkExecution.LaborMismatch_Yes_button_eventHandlers_click_continueLaborCraftMismatch',
                     'id' : 'awb8856a23',
                     'event' : 'click',
                     'class' : 'application.handlers.ActualLaborHandler',
               }
            ];
            button048.eventHandlers = eventHandlers104;
            container049.addChild( button048 );


            var button049 = new Button({
               'artifactId' : 'WorkExecution.LaborMismatch_No_button',
               'id' : 'awa96d692b',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers105 = [
               {
                     'method' : 'stopOnLaborCraftMismatch',
                     'artifactId' : 'WorkExecution.LaborMismatch_No_button_eventHandlers_click_stopOnLaborCraftMismatch',
                     'id' : 'aw6779ad8c',
                     'event' : 'click',
                     'class' : 'application.handlers.ActualLaborHandler',
               }
            ];
            button049.eventHandlers = eventHandlers105;
            container049.addChild( button049 );


            var dialog021 = new Dialog({
               'id' : 'WorkExecution.WOAssetToLocationDialog',
            });
            ui001.addChild( dialog021 );


            var container050 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.WOAssetToLocationDialog_container_0',
               'id' : 'aw4b614b2d',
            });
            dialog021.addChild( container050 );


            var text122 = new Text({
               'artifactId' : 'WorkExecution.WOAssetToLocationDialog_container_0_Theassetisinloca',
               'id' : 'aw4114bece',
               'value' : MessageService.createDynamicMessage('The asset is in location {0}. Replace the current location with location {1}? If you do not want to update the current asset, click Close.', 'application.handlers.WODetailHandler', 'resolveAssetLocation'),
               'resolverFunction' : 'resolveAssetLocation',
               'resolverClass' : 'application.handlers.WODetailHandler',
            });
            container050.addChild( text122 );


            var container051 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.WOAssetToLocationDialog_container_1',
               'id' : 'aw3c667bbb',
            });
            dialog021.addChild( container051 );


            var button050 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.WOAssetToLocationDialog_Yes_button',
               'id' : 'aw578d177',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers106 = [
               {
                     'method' : 'asyncyesOnWOAssetToLocation',
                     'artifactId' : 'WorkExecution.WOAssetToLocationDialog_Yes_button_eventHandlers_click_asyncyesOnWOAssetToLocation',
                     'id' : 'aw3015285d',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button050.eventHandlers = eventHandlers106;
            container051.addChild( button050 );


            var button051 = new Button({
               'artifactId' : 'WorkExecution.WOAssetToLocationDialog_Close_button',
               'id' : 'aw43675bcf',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers107 = [
               {
                     'method' : 'closeOnWOAssetToLocation',
                     'artifactId' : 'WorkExecution.WOAssetToLocationDialog_Close_button_eventHandlers_click_closeOnWOAssetToLocation',
                     'id' : 'aw4778c224',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button051.eventHandlers = eventHandlers107;
            container051.addChild( button051 );


            var button052 = new Button({
               'artifactId' : 'WorkExecution.WOAssetToLocationDialog_No_button',
               'id' : 'aw2a39b79f',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers108 = [
               {
                     'method' : 'noOnWOAssetToLocation',
                     'artifactId' : 'WorkExecution.WOAssetToLocationDialog_No_button_eventHandlers_click_noOnWOAssetToLocation',
                     'id' : 'aw36f95791',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button052.eventHandlers = eventHandlers108;
            container051.addChild( button052 );


            var dialog022 = new Dialog({
               'id' : 'WorkExecution.WOAssetToNoLocationDialog',
            });
            ui001.addChild( dialog022 );


            var container052 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_container_0',
               'id' : 'aw993f2f32',
            });
            dialog022.addChild( container052 );


            var text123 = new Text({
               'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_container_0_Thespecifiedasset',
               'id' : 'aw8cbf4f0d',
               'value' : MessageService.createStaticMessage('The specified asset does not have a location. Clear the current location? If you do not want to update the current asset, click Close.'),
               'resolverFunction' : 'resolveAssetLocation',
               'resolverClass' : 'application.handlers.WODetailHandler',
            });
            container052.addChild( text123 );


            var container053 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_container_1',
               'id' : 'awee381fa4',
            });
            dialog022.addChild( container053 );


            var button053 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_Yes_button',
               'id' : 'aw56993351',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers109 = [
               {
                     'method' : 'asyncyesOnWOAssetToLocation',
                     'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_Yes_button_eventHandlers_click_asyncyesOnWOAssetToLocation',
                     'id' : 'awbe237d20',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button053.eventHandlers = eventHandlers109;
            container053.addChild( button053 );


            var button054 = new Button({
               'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_Close_button',
               'id' : 'awcebd085e',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers110 = [
               {
                     'method' : 'closeOnWOAssetToLocation',
                     'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_Close_button_eventHandlers_click_closeOnWOAssetToLocation',
                     'id' : 'awcfc246b9',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button054.eventHandlers = eventHandlers110;
            container053.addChild( button054 );


            var button055 = new Button({
               'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_No_button',
               'id' : 'aw7848a16d',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers111 = [
               {
                     'method' : 'noOnWOAssetToLocation',
                     'artifactId' : 'WorkExecution.WOAssetToNoLocationDialog_No_button_eventHandlers_click_noOnWOAssetToLocation',
                     'id' : 'aw64c4cb09',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button055.eventHandlers = eventHandlers111;
            container053.addChild( button055 );


            var dialog023 = new Dialog({
               'id' : 'WorkExecution.WOLocationToAssetDialog',
            });
            ui001.addChild( dialog023 );


            var container054 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.WOLocationToAssetDialog_container_0',
               'id' : 'aw794c768b',
            });
            dialog023.addChild( container054 );


            var text124 = new Text({
               'artifactId' : 'WorkExecution.WOLocationToAssetDialog_container_0_Thespecifiedlocati',
               'id' : 'aw99e4aa1f',
               'value' : MessageService.createDynamicMessage('The specified location does not match the location of asset {0}. Clear the current asset? If you do not want to update the current location, click Close.', 'application.handlers.WODetailHandler', 'resolveExistingAsset'),
               'resolverFunction' : 'resolveExistingAsset',
               'resolverClass' : 'application.handlers.WODetailHandler',
            });
            container054.addChild( text124 );


            var container055 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.WOLocationToAssetDialog_container_1',
               'id' : 'awe4b461d',
            });
            dialog023.addChild( container055 );


            var button056 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.WOLocationToAssetDialog_Yes_button',
               'id' : 'awf029945b',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers112 = [
               {
                     'method' : 'asyncYesOnWOLocationToAsset',
                     'artifactId' : 'WorkExecution.WOLocationToAssetDialog_Yes_button_eventHandlers_click_asyncYesOnWOLocationToAsset',
                     'id' : 'awb8f5168c',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button056.eventHandlers = eventHandlers112;
            container055.addChild( button056 );


            var button057 = new Button({
               'artifactId' : 'WorkExecution.WOLocationToAssetDialog_Close_button',
               'id' : 'aw7ce0702f',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers113 = [
               {
                     'method' : 'closeOnWOLocationToAsset',
                     'artifactId' : 'WorkExecution.WOLocationToAssetDialog_Close_button_eventHandlers_click_closeOnWOLocationToAsset',
                     'id' : 'aw725ca168',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button057.eventHandlers = eventHandlers113;
            container055.addChild( button057 );


            var button058 = new Button({
               'artifactId' : 'WorkExecution.WOLocationToAssetDialog_No_button',
               'id' : 'aw74b8ccc8',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers114 = [
               {
                     'method' : 'noOnWOLocationToAsset',
                     'artifactId' : 'WorkExecution.WOLocationToAssetDialog_No_button_eventHandlers_click_noOnWOLocationToAsset',
                     'id' : 'aw621d5c5a',
                     'event' : 'click',
                     'class' : 'application.handlers.WODetailHandler',
               }
            ];
            button058.eventHandlers = eventHandlers114;
            container055.addChild( button058 );


            var dialog024 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'WorkExecution.DownloadAttachmentLocal',
            });
            ui001.addChild( dialog024 );


            var container056 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.DownloadAttachmentLocal_container_0',
               'id' : 'awecb352f6',
            });
            dialog024.addChild( container056 );


            var text125 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'WorkExecution.DownloadAttachmentLocal_container_0_progressMsg',
               'id' : 'aw1941849c',
            });
            container056.addChild( text125 );


            var container057 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.DownloadAttachmentLocal_container_1',
               'id' : 'aw9bb46260',
            });
            dialog024.addChild( container057 );


            var button059 = new Button({
               'artifactId' : 'WorkExecution.DownloadAttachmentLocal_Cancel_button',
               'id' : 'awe595a1e7',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers115 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'WorkExecution.DownloadAttachmentLocal_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'awc8f3fc0c',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            button059.eventHandlers = eventHandlers115;
            container057.addChild( button059 );


            var dialog025 = new Dialog({
               'id' : 'WorkExecution.ConfirmClearChanges',
            });
            ui001.addChild( dialog025 );


            var container058 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.ConfirmClearChanges_container_0',
               'id' : 'aw482e893b',
            });
            dialog025.addChild( container058 );


            var text126 = new Text({
               'editable' : false,
               'artifactId' : 'WorkExecution.ConfirmClearChanges_container_0_Changesthathaveno',
               'id' : 'aw44807316',
               'value' : MessageService.createStaticMessage('Changes that have not been sent to the server will be discarded.'),
            });
            container058.addChild( text126 );


            var container059 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.ConfirmClearChanges_container_1',
               'id' : 'aw3f29b9ad',
            });
            dialog025.addChild( container059 );


            var button060 = new Button({
               'artifactId' : 'WorkExecution.ConfirmClearChanges_Cancel_button',
               'id' : 'aw8ac0a725',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers116 = [
               {
                     'method' : 'cancelClearChanges',
                     'artifactId' : 'WorkExecution.ConfirmClearChanges_Cancel_button_eventHandlers_click_cancelClearChanges',
                     'id' : 'awf219260f',
                     'event' : 'click',
                     'class' : 'application.handlers.WOExtDownloadHandler',
               }
            ];
            button060.eventHandlers = eventHandlers116;
            container059.addChild( button060 );


            var button061 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.ConfirmClearChanges_OK_button',
               'id' : 'awd9bb22ec',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers117 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'WorkExecution.ConfirmClearChanges_OK_button_eventHandlers_click_doClearChanges',
                     'id' : 'aw16b2bc0a',
                     'event' : 'click',
                     'class' : 'application.handlers.WOExtDownloadHandler',
               }
            ];
            button061.eventHandlers = eventHandlers117;
            container059.addChild( button061 );


            var dialog026 = new Dialog({
               'id' : 'WorkExecution.DynamicCheckStatusChangeConfirm',
            });
            ui001.addChild( dialog026 );


            var container060 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'WorkExecution.DynamicCheckStatusChangeConfirm_container_0',
               'id' : 'awf0d47a7a',
            });
            dialog026.addChild( container060 );


            var text127 = new Text({
               'editable' : false,
               'artifactId' : 'WorkExecution.DynamicCheckStatusChangeConfirm_Changes_text',
               'id' : 'awad8463ef',
               'value' : MessageService.createStaticMessage('All the dynamic check points have not been entered. You can either click Cancel and enter all the dynamic check points before setting the status of the work order to closed or complete, or you can select OK to continue with the status change without entering all the dynamic check points.'),
            });
            container060.addChild( text127 );


            var container061 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'WorkExecution.DynamicCheckStatusChangeConfirm_container_1',
               'id' : 'aw87d34aec',
            });
            dialog026.addChild( container061 );


            var button062 = new Button({
               'artifactId' : 'WorkExecution.DynamicCheckStatusChangeConfirm_Cancel_button',
               'id' : 'aw4716c23d',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers118 = [
               {
                     'method' : 'cancelClearChanges',
                     'artifactId' : 'WorkExecution.DynamicCheckStatusChangeConfirm_Cancel_button_eventHandlers_click_cancelClearChanges',
                     'id' : 'awaed6f54f',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button062.eventHandlers = eventHandlers118;
            container061.addChild( button062 );


            var button063 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'WorkExecution.DynamicCheckStatusChangeConfirm_OK_button',
               'id' : 'aw3d3a6a02',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers119 = [
               {
                     'method' : 'changeStatusSkipDyanmicCheck',
                     'artifactId' : 'WorkExecution.DynamicCheckStatusChangeConfirm_OK_button_eventHandlers_click_doClearChanges',
                     'id' : 'aw8a3fa053',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button063.eventHandlers = eventHandlers119;
            container061.addChild( button063 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.MaterialsTools', false);
               trackTimer.startTracking();
            }

            var view021 = new View({
               'id' : 'WorkExecution.MaterialsTools',
               'label' : MessageService.createStaticMessage('Materials & Tools'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view021 );

            var requiredResources021 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.MaterialsTools_workOrder',
                  'id' : 'aw4fd260f7',
                  'related' : {
                     'materiallist' : {
                        'artifactId' : 'WorkExecution.MaterialsTools_workOrder_materiallist',
                        'id' : 'aw92ffa129',
                     },
                     'toollist' : {
                        'artifactId' : 'WorkExecution.MaterialsTools_workOrder_toollist',
                        'id' : 'aw3ec49d95',
                     },
                  },
               },
            };
            view021.addRequiredResources( requiredResources021 );


            var listItemTemplate013 = new ListItemTemplate({
               'layout' : 'MaterialToolList',
               'artifactId' : 'WorkExecution.MaterialsTools_materialSummary_listItemTemplate_MaterialToolList',
               'id' : 'aw44f8b6d',
            });

            var listtext049 = new ListText({
               'resourceAttribute' : 'itemdisplay',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.MaterialsTools_materialSummary_MaterialToolList_itemdisplay',
               'id' : 'aw213176d3',
            });
            listItemTemplate013.addChild( listtext049 );


            var listtext050 = new ListText({
               'resourceAttribute' : 'descdisplay',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.MaterialsTools_materialSummary_MaterialToolList_descdisplay',
               'id' : 'awe899f8cb',
            });
            listItemTemplate013.addChild( listtext050 );


            var listtext051 = new ListText({
               'resourceAttribute' : 'storeroomdisplay',
               'cssClass' : 'bold textappearance-small',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'WorkExecution.MaterialsTools_materialSummary_MaterialToolList_storeroomdisplay',
               'id' : 'awb8a3ef6b',
            });
            listItemTemplate013.addChild( listtext051 );


            var listtext052 = new ListText({
               'resourceAttribute' : 'quantitydisplay',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.MaterialsTools_materialSummary_MaterialToolList_quantitydisplay',
               'id' : 'aw5137a799',
            });
            listItemTemplate013.addChild( listtext052 );


            var checkbox001 = new CheckBox({
               'resourceAttribute' : 'materialcheckbox',
               'cssClass' : 'rightCheckBox',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'WorkExecution.MaterialsTools_materialcheckbox_checkbox',
               'id' : 'aw490d9a28',
            });
            listItemTemplate013.addChild( checkbox001 );



            var list013 = new List({
               'resource' : 'materialSummary',
               'listItemTemplate' : listItemTemplate013,
               'artifactId' : 'WorkExecution.MaterialsTools_materialSummary_list',
               'id' : 'awcc50bfb8',
               'label' : MessageService.createStaticMessage('Materials'),
            });
            view021.addChild( list013 );



            var listItemTemplate014 = new ListItemTemplate({
               'layout' : 'MaterialToolList',
               'artifactId' : 'WorkExecution.MaterialsTools_toolSummary_listItemTemplate_MaterialToolList',
               'id' : 'aw9397976a',
            });

            var listtext053 = new ListText({
               'resourceAttribute' : 'tooldisplay',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.MaterialsTools_toolSummary_MaterialToolList_tooldisplay',
               'id' : 'awec874c87',
            });
            listItemTemplate014.addChild( listtext053 );


            var listtext054 = new ListText({
               'resourceAttribute' : 'descdisplay',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.MaterialsTools_toolSummary_MaterialToolList_descdisplay',
               'id' : 'awc687bb4c',
            });
            listItemTemplate014.addChild( listtext054 );


            var listtext055 = new ListText({
               'resourceAttribute' : 'storeroomdisplay',
               'cssClass' : 'bold textappearance-small',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'WorkExecution.MaterialsTools_toolSummary_MaterialToolList_storeroomdisplay',
               'id' : 'aw2f7bf36c',
            });
            listItemTemplate014.addChild( listtext055 );


            var listtext056 = new ListText({
               'resourceAttribute' : 'quantitydisplay',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.MaterialsTools_toolSummary_MaterialToolList_quantitydisplay',
               'id' : 'aw5bf22892',
            });
            listItemTemplate014.addChild( listtext056 );


            var checkbox002 = new CheckBox({
               'resourceAttribute' : 'toolcheckbox',
               'cssClass' : 'rightCheckBox',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'WorkExecution.MaterialsTools_toolcheckbox_checkbox',
               'id' : 'aw106f098f',
            });
            listItemTemplate014.addChild( checkbox002 );



            var list014 = new List({
               'resource' : 'toolSummary',
               'listItemTemplate' : listItemTemplate014,
               'artifactId' : 'WorkExecution.MaterialsTools_toolSummary_list',
               'id' : 'aw9c35a64d',
               'label' : MessageService.createStaticMessage('Tools'),
            });
            view021.addChild( list014 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.EditStatusView', false);
               trackTimer.startTracking();
            }

            var view022 = new View({
               'resource' : 'workOrder',
               'showOverflow' : false,
               'id' : 'WorkExecution.EditStatusView',
               'label' : MessageService.createStaticMessage('Change Status'),
            });
            ui001.addChild( view022 );

            var requiredResources022 = {
               'workOrder' : {
                  'artifactId' : 'WorkExecution.EditStatusView_workOrder',
                  'id' : 'aweb007e3c',
                  'related' : {
                     'tasklist' : {
                        'artifactId' : 'WorkExecution.EditStatusView_workOrder_tasklist',
                        'id' : 'aw45bd0720',
                     },
                     'atcsessionlist' : {
                        'artifactId' : 'WorkExecution.EditStatusView_attribute1',
                        'id' : 'awdd836255',
                     },
                     'attachments' : {
                        'artifactId' : 'WorkExecution.EditStatusView_attribute2',
                        'id' : 'aw448a33ef',
                     },
                     'msdoclinkslist' : {
                        'artifactId' : 'WorkExecution.EditStatusView_attribute3',
                        'id' : 'aw338d0379',
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
               'whylist' : {
                  'artifactId' : 'WorkExecution.PD_WhyView_ms_pdwhy',
                  'id' : 'awa5f9c16b',
               },
            };
            view022.addRequiredResources( requiredResources022 );

            var container062 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.EditStatusView_workOrder_container_0',
               'id' : 'aw1006e1b',
            });
            view022.addChild( container062 );


            var group026 = new Group({
               'artifactId' : 'WorkExecution.EditStatusView_group_0',
               'id' : 'aw655374b9',
            });
            container062.addChild( group026 );


            var groupitem075 = new GroupItem({
               'layout' : 'Item1Desc1',
               'artifactId' : 'WorkExecution.EditStatusView_workOrder_groupitem_0',
               'id' : 'aw44dbff08',
            });
            group026.addChild( groupitem075 );


            var text128 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.EditStatusView_workOrder_groupitem_0_wonum_WorkOrder',
               'id' : 'aw7b7d554a',
               'label' : MessageService.createStaticMessage('Service Item'),
            });
            groupitem075.addChild( text128 );


            var text129 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'WorkExecution.EditStatusView_workOrder_groupitem_0_statusdesc_Status',
               'id' : 'aw1c53b192',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem075.addChild( text129 );


            var groupitem076 = new GroupItem({
               'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_2',
               'id' : 'awbe5bffbf',
            });
            group026.addChild( groupitem076 );


            var text130 = new Text({
               'resourceAttribute' : 'ms_woplate',
               'editable' : true,
               'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_2_ms_woplate',
               'id' : 'aw986e3cb7',
               'label' : MessageService.createStaticMessage('Placa do Ve\u00EDculo'),
               'codeScannable' : true,
            });
            groupitem076.addChild( text130 );


            var container063 = new Container({
               'resource' : 'statusChangeResource',
               'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_container_0',
               'id' : 'aw158e0f80',
            });
            view022.addChild( container063 );


            var group027 = new Group({
               'artifactId' : 'WorkExecution.EditStatusView_group_1',
               'id' : 'aw1254442f',
            });
            container063.addChild( group027 );


            var groupitem077 = new GroupItem({
               'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_0',
               'id' : 'aw50559e93',
            });
            group027.addChild( groupitem077 );


            var text131 = new Text({
               'resourceAttribute' : 'changedate',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_0_changedate_StatusDate.readonly',
               'id' : 'aw231af88b',
               'label' : MessageService.createStaticMessage('Status Date'),
               'placeHolder' : MessageService.createStaticMessage('Select'),
               'required' : true,
            });
            groupitem077.addChild( text131 );

            var eventHandlers120 = [
               {
                     'method' : 'setChangeStatusDate',
                     'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_0_changedate_StatusDate_eventHandlers_render_setChangeStatusDate',
                     'id' : 'aw3f3b85cd',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            text131.eventHandlers = eventHandlers120;

            var groupitem078 = new GroupItem({
               'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_1',
               'id' : 'aw2752ae05',
            });
            group027.addChild( groupitem078 );


            var text132 = new Text({
               'resourceAttribute' : 'statusdesc',
               'lookup' : 'WorkExecution.statusLookup',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_1_statusdesc_NewStatus',
               'id' : 'awa308174a',
               'label' : MessageService.createStaticMessage('New Status'),
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
               'required' : true,
            });
            groupitem078.addChild( text132 );


            var groupitem079 = new GroupItem({
               'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_3',
               'id' : 'awc95ccf29',
            });
            group027.addChild( groupitem079 );


            var container064 = new Container({
               'artifactId' : 'WorkExecution.EditStatusView_workOrder_container_01',
               'id' : 'aw9b82635',
            });
            view022.addChild( container064 );


            var group028 = new Group({
               'artifactId' : 'WorkExecution.EditStatusView_group_011',
               'id' : 'awb435d0f0',
            });
            container064.addChild( group028 );


            var groupitem080 = new GroupItem({
               'artifactId' : 'WorkExecution.EditStatusView_workOrder_groupitem_011',
               'id' : 'aw33813429',
            });
            group028.addChild( groupitem080 );


            var textarea004 = new TextArea({
               'resourceAttribute' : 'motivo',
               'editable' : true,
               'artifactId' : 'WorkExecution.EditStatusView_statusChangeResource_groupitem_3_memo_motivo11',
               'id' : 'aw5da0e9c0',
               'label' : MessageService.createStaticMessage('Motivo'),
            });
            groupitem080.addChild( textarea004 );


            var groupitem081 = new GroupItem({
               'artifactId' : 'WorkExecution.reasonView.group.groupitem_1',
               'id' : 'aw572a96c7',
            });
            group028.addChild( groupitem081 );


            var text133 = new Text({
               'resourceAttribute' : 'pd_whynum',
               'lookup' : 'WorkExecution.whylookup',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.reasonView.group.groupitem.text_1',
               'id' : 'aw10cac428',
               'label' : MessageService.createStaticMessage('C\u00F3digo Motivo'),
            });
            groupitem081.addChild( text133 );


            var footer003 = new Footer({
               'artifactId' : 'WorkExecution.EditStatusView_footer',
               'id' : 'awcc435f8e',
            });
            view022.addChild( footer003 );


            var button064 = new Button({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.EditStatusView_Cancel_button',
               'id' : 'awefa15ea4',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers121 = [
               {
                     'method' : 'discardStatusChange',
                     'artifactId' : 'WorkExecution.EditStatusView_Cancel_button_eventHandlers_click_discardStatusChange',
                     'id' : 'aw41efe24b',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button064.eventHandlers = eventHandlers121;
            footer003.addChild( button064 );


            var button065 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.EditStatusView_Save_button',
               'id' : 'aw78b204fb',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers122 = [
               {
                     'method' : 'commitWOStatusChange',
                     'artifactId' : 'WorkExecution.EditStatusView_Save_button_eventHandlers_click_commitWOStatusChange',
                     'id' : 'aw109f78e9',
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
            button065.eventHandlers = eventHandlers122;
            footer003.addChild( button065 );

            var eventHandlers123 = [
               {
                     'method' : 'saveWOShowView',
                     'artifactId' : 'WorkExecution.EditStatusView_eventHandlers_initialize_saveWOShowView',
                     'id' : 'aw5b78e5b1',
                     'event' : 'show',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               },
               {
                     'method' : 'initEditStatusView',
                     'artifactId' : 'WorkExecution.EditStatusView_eventHandlers_initialize_initEditStatusView',
                     'id' : 'aw9d0b2a7b',
                     'event' : 'initialize',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'cleanupEditStatusView',
                     'artifactId' : 'WorkExecution.EditStatusView_eventHandlers_cleanup_cleanupEditStatusView',
                     'id' : 'aw25138fc7',
                     'event' : 'cleanup',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            view022.eventHandlers = eventHandlers123;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.EditTaskStatusView', false);
               trackTimer.startTracking();
            }

            var view023 = new View({
               'resource' : 'workOrder',
               'showOverflow' : false,
               'id' : 'WorkExecution.EditTaskStatusView',
               'label' : MessageService.createStaticMessage('Change Status'),
            });
            ui001.addChild( view023 );

            var requiredResources023 = {
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
            view023.addRequiredResources( requiredResources023 );

            var container065 = new Container({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.EditTaskStatusView_workOrder_container_0',
               'attribute' : 'tasklist',
               'id' : 'aw62c872f7',
            });
            view023.addChild( container065 );


            var group029 = new Group({
               'artifactId' : 'WorkExecution.EditTaskStatusView_group_0',
               'id' : 'awc38c907f',
            });
            container065.addChild( group029 );


            var groupitem082 = new GroupItem({
               'artifactId' : 'WorkExecution.EditTaskStatusView_workOrder_groupitem_0',
               'id' : 'aw2713e3e4',
            });
            group029.addChild( groupitem082 );


            var text134 = new Text({
               'resourceAttribute' : 'parent',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditTaskStatusView_workOrder_groupitem_0_parent_WorkOrder',
               'id' : 'aw41d6edc0',
               'label' : MessageService.createStaticMessage('Work Order'),
            });
            groupitem082.addChild( text134 );


            var text135 = new Text({
               'resourceAttribute' : 'taskid',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditTaskStatusView_workOrder_groupitem_0_taskid_Task',
               'id' : 'aw3a069107',
               'label' : MessageService.createStaticMessage('Task'),
            });
            groupitem082.addChild( text135 );


            var text136 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditTaskStatusView_workOrder_groupitem_0_statusdesc_Status',
               'id' : 'aw9990bcbe',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem082.addChild( text136 );


            var container066 = new Container({
               'resource' : 'statusChangeResource',
               'artifactId' : 'WorkExecution.EditTaskStatusView_statusChangeResource_container_0',
               'id' : 'aw5848598e',
            });
            view023.addChild( container066 );


            var group030 = new Group({
               'artifactId' : 'WorkExecution.EditTaskStatusView_group_1',
               'id' : 'awb48ba0e9',
            });
            container066.addChild( group030 );


            var groupitem083 = new GroupItem({
               'artifactId' : 'WorkExecution.EditTaskStatusView_statusChangeResource_groupitem_0',
               'id' : 'aw1d93c89d',
            });
            group030.addChild( groupitem083 );


            var text137 = new Text({
               'resourceAttribute' : 'changedate',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditTaskStatusView_statusChangeResource_groupitem_0_changedate_StatusDate.readonly',
               'id' : 'awfe1a79bf',
               'label' : MessageService.createStaticMessage('Status Date'),
               'placeHolder' : MessageService.createStaticMessage('Select'),
               'required' : true,
            });
            groupitem083.addChild( text137 );


            var groupitem084 = new GroupItem({
               'artifactId' : 'WorkExecution.EditTaskStatusView_statusChangeResource_groupitem_1',
               'id' : 'aw6a94f80b',
            });
            group030.addChild( groupitem084 );


            var text138 = new Text({
               'resourceAttribute' : 'statusdesc',
               'lookup' : 'WorkExecution.taskStatusLookup',
               'editable' : false,
               'artifactId' : 'WorkExecution.EditTaskStatusView_statusChangeResource_groupitem_1_statusdesc_NewStatus',
               'id' : 'aw22390dfc',
               'label' : MessageService.createStaticMessage('New Status'),
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
               'required' : true,
            });
            groupitem084.addChild( text138 );


            var groupitem085 = new GroupItem({
               'artifactId' : 'WorkExecution.EditTaskStatusView_statusChangeResource_groupitem_2',
               'id' : 'awf39da9b1',
            });
            group030.addChild( groupitem085 );


            var footer004 = new Footer({
               'artifactId' : 'WorkExecution.EditTaskStatusView_footer',
               'id' : 'awaff0fe2b',
            });
            view023.addChild( footer004 );


            var button066 = new Button({
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.EditTaskStatusView_Cancel_button',
               'id' : 'aw56864a0f',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers124 = [
               {
                     'method' : 'discardStatusChange',
                     'artifactId' : 'WorkExecution.EditTaskStatusView_Cancel_button_eventHandlers_click_discardStatusChange',
                     'id' : 'awc0def8fd',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               }
            ];
            button066.eventHandlers = eventHandlers124;
            footer004.addChild( button066 );


            var button067 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'resource' : 'workOrder',
               'artifactId' : 'WorkExecution.EditTaskStatusView_Save_button',
               'id' : 'awbc6a1250',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers125 = [
               {
                     'method' : 'commitTaskStatusChange',
                     'artifactId' : 'WorkExecution.EditTaskStatusView_Save_button_eventHandlers_click_commitTaskStatusChange',
                     'id' : 'awcf66f25f',
                     'event' : 'click',
                     'class' : 'application.handlers.StatusChangeHandler',
               },
               {
                     'method' : 'commitWOStatusChange',
                     'artifactId' : 'WorkExecution.EditTaskStatusView_Save_button_eventHandlers_click_commitWOStatusChange',
                     'id' : 'aw9f93033d',
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
            button067.eventHandlers = eventHandlers125;
            footer004.addChild( button067 );

            var eventHandlers126 = [
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
            view023.eventHandlers = eventHandlers126;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var lookup001 = new Lookup({
               'filterMethod' : 'selectTeamLookup',
               'resource' : 'msamcrew',
               'filterClass' : 'custom.handlers.WODetailExtensionHandler',
               'id' : 'sgzMobile.amcrewLookup',
               'label' : MessageService.createStaticMessage('Equipes'),
            });
            ui001.addChild( lookup001 );

            var requiredResources024 = {
               'msamcrew' : {
                  'artifactId' : 'sgzMobile.amcrewLookup_msamcrew',
                  'id' : 'aw3e510e84',
               },
            };
            lookup001.addRequiredResources( requiredResources024 );


            var searchAttributes001 = new SearchAttributes({
               'artifactId' : 'sgzMobile.amcrewLookup_list_searchAttributes',
               'id' : 'awbe0e4bf8',
            });

            var searchAttribute001 = new SearchAttribute({
               'name' : 'amcrew',
               'artifactId' : 'sgzMobile.amcrewLookup_list_searchAttribute_amcrew',
               'id' : 'aw4a2554e3',
            });
            searchAttributes001.addChild( searchAttribute001 );


            var searchAttribute002 = new SearchAttribute({
               'name' : 'displayname',
               'artifactId' : 'sgzMobile.amcrewLookup_list_searchAttribute_description',
               'id' : 'aw2e3bb326',
            });
            searchAttributes001.addChild( searchAttribute002 );



            var listItemTemplate015 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'sgzMobile.amcrewLookup_list_searchAttribute_listItemTemplate_Item1Desc1',
               'id' : 'awa4d06f1a',
            });
            var eventHandlers127 = [
               {
                     'method' : 'setLocaleCrew',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_initialize_open_renderNoAssetToWO_list',
                     'id' : 'awa1d6347a',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            listItemTemplate015.eventHandlers = eventHandlers127;

            var listtext057 = new ListText({
               'resourceAttribute' : 'amcrew',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'sgzMobile.amcrewLookup_list_searchAttribute_listItemTemplate_Item1Desc1_amcrew',
               'id' : 'aw33063989',
            });
            listItemTemplate015.addChild( listtext057 );


            var listtext058 = new ListText({
               'resourceAttribute' : 'displayname',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'sgzMobile.amcrewLookup_list_searchAttribute_listItemTemplate_Item1Desc1_description',
               'id' : 'awf003c912',
            });
            listItemTemplate015.addChild( listtext058 );



            var list015 = new List({
               'resource' : 'msamcrew',
               'listItemTemplate' : listItemTemplate015,
               'artifactId' : 'sgzMobile.amcrewLookup_list',
               'id' : 'awe73b7a99',
               'searchAttributes' : searchAttributes001,
            });
            lookup001.addChild( list015 );


            var returnAttributes001 = new ReturnAttributes({
               'artifactId' : 'sgzMobile.amcrewLookup_returnAttributes',
               'id' : 'aw34fea46f',
            });
            lookup001.addChild( returnAttributes001 );


            var returnAttribute001 = new ReturnAttribute({
               'targetAttribute' : 'amcrew',
               'artifactId' : 'sgzMobile.amcrewLookup_returnAttributes_amcrew_amcrew',
               'id' : 'awad26c2a3',
               'sourceAttribute' : 'amcrew',
            });
            returnAttributes001.addChild( returnAttribute001 );

            var eventHandlers128 = [
               {
                     'method' : 'hideFooterLookup',
                     'artifactId' : 'WorkExecution.WorkDetailView_eventHandlers_initialize_open_renderNoAssetToWO_hide_footer',
                     'id' : 'awf7fab118',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            lookup001.eventHandlers = eventHandlers128;

            var lookup002 = new Lookup({
               'filterMethod' : 'filterWOStatus',
               'resource' : 'domainwostatus',
               'filterClass' : 'custom.handlers.MSStatusChangeHandler',
               'id' : 'WorkExecution.statusLookup',
               'label' : MessageService.createStaticMessage('Work Order Status'),
            });
            ui001.addChild( lookup002 );

            var requiredResources025 = {
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
            lookup002.addRequiredResources( requiredResources025 );


            var listItemTemplate016 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'WorkExecution.statusLookup_domainwostatus_listItemTemplate_Item1Desc1',
               'id' : 'awb92cb1d4',
            });

            var listtext059 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'WorkExecution.statusLookup_domainwostatus_Item1Desc1_description',
               'id' : 'aw8c250aab',
            });
            listItemTemplate016.addChild( listtext059 );



            var list016 = new List({
               'resource' : 'domainwostatus',
               'listItemTemplate' : listItemTemplate016,
               'artifactId' : 'WorkExecution.statusLookup_domainwostatus_list',
               'id' : 'awca564814',
            });
            lookup002.addChild( list016 );


            var returnAttributes002 = new ReturnAttributes({
               'artifactId' : 'WorkExecution.statusLookup_returnAttributes',
               'id' : 'awccce0559',
            });
            lookup002.addChild( returnAttributes002 );


            var returnAttribute002 = new ReturnAttribute({
               'targetAttribute' : 'status',
               'artifactId' : 'WorkExecution.statusLookup_value_status',
               'id' : 'awe22b8428',
               'sourceAttribute' : 'value',
            });
            returnAttributes002.addChild( returnAttribute002 );


            var returnAttribute003 = new ReturnAttribute({
               'targetAttribute' : 'statusdesc',
               'artifactId' : 'WorkExecution.statusLookup_description_statusdesc',
               'id' : 'awa120ff9e',
               'sourceAttribute' : 'description',
            });
            returnAttributes002.addChild( returnAttribute003 );


            var lookup003 = new Lookup({
               'filterMethod' : 'filterTaskStatus',
               'resource' : 'domainwostatus',
               'filterClass' : 'custom.handlers.MSStatusChangeHandler',
               'id' : 'WorkExecution.taskStatusLookup',
               'label' : MessageService.createStaticMessage('Task Status'),
            });
            ui001.addChild( lookup003 );

            var requiredResources026 = {
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
            lookup003.addRequiredResources( requiredResources026 );


            var listItemTemplate017 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'WorkExecution.taskStatusLookup_domainwostatus_listItemTemplate_Item1Desc1',
               'id' : 'awff4de7d5',
            });

            var listtext060 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'WorkExecution.taskStatusLookup_domainwostatus_Item1Desc1_description',
               'id' : 'aw91b8b6c4',
            });
            listItemTemplate017.addChild( listtext060 );



            var list017 = new List({
               'resource' : 'domainwostatus',
               'listItemTemplate' : listItemTemplate017,
               'artifactId' : 'WorkExecution.taskStatusLookup_domainwostatus_list',
               'id' : 'awa6ef482a',
            });
            lookup003.addChild( list017 );


            var returnAttributes003 = new ReturnAttributes({
               'artifactId' : 'WorkExecution.taskStatusLookup_returnAttributes',
               'id' : 'awa1d04374',
            });
            lookup003.addChild( returnAttributes003 );


            var returnAttribute004 = new ReturnAttribute({
               'targetAttribute' : 'status',
               'artifactId' : 'WorkExecution.taskStatusLookup_value_status',
               'id' : 'aw35cdd62b',
               'sourceAttribute' : 'value',
            });
            returnAttributes003.addChild( returnAttribute004 );


            var returnAttribute005 = new ReturnAttribute({
               'targetAttribute' : 'statusdesc',
               'artifactId' : 'WorkExecution.taskStatusLookup_description_statusdesc',
               'id' : 'aw3d683c40',
               'sourceAttribute' : 'description',
            });
            returnAttributes003.addChild( returnAttribute005 );


            var lookup004 = new Lookup({
               'filterMethod' : 'filterWorktypeForLookup',
               'resource' : 'additionalworktype',
               'filterClass' : 'application.handlers.WODetailHandler',
               'id' : 'WorkExecution.WorkTypeLookup',
               'label' : MessageService.createStaticMessage('Select Work Type'),
            });
            ui001.addChild( lookup004 );

            var requiredResources027 = {
               'additionalworktype' : {
                  'artifactId' : 'WorkExecution.WorkTypeLookup_additionalworktype',
                  'id' : 'awfb08bd56',
               },
               'domainwoclass' : {
                  'artifactId' : 'WorkExecution.WorkTypeLookup_domainwoclass',
                  'id' : 'aw991a4810',
               },
            };
            lookup004.addRequiredResources( requiredResources027 );


            var searchAttributes002 = new SearchAttributes({
               'artifactId' : 'WorkExecution.WorkTypeLookup_additionalworktype_searchAttributes',
               'id' : 'aw81a153a3',
            });

            var searchAttribute003 = new SearchAttribute({
               'name' : 'worktype',
               'artifactId' : 'WorkExecution.WorkTypeLookup_additionalworktype_searchAttribute_worktype',
               'id' : 'awb72720d4',
            });
            searchAttributes002.addChild( searchAttribute003 );


            var searchAttribute004 = new SearchAttribute({
               'name' : 'wtypedesc',
               'artifactId' : 'WorkExecution.WorkTypeLookup_additionalworktype_searchAttribute_wtypedesc',
               'id' : 'aw34f18061',
            });
            searchAttributes002.addChild( searchAttribute004 );



            var listItemTemplate018 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'WorkExecution.WorkTypeLookup_additionalworktype_listItemTemplate_Item1Desc1',
               'id' : 'aw9ad8b28d',
            });

            var listtext061 = new ListText({
               'resourceAttribute' : 'worktype',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.WorkTypeLookup_additionalworktype_Item1Desc1_worktype',
               'id' : 'awa5e9e346',
            });
            listItemTemplate018.addChild( listtext061 );


            var listtext062 = new ListText({
               'resourceAttribute' : 'wtypedesc',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'WorkExecution.WorkTypeLookup_additionalworktype_Item1Desc1_wtypedesc',
               'id' : 'aw2ae2bcca',
            });
            listItemTemplate018.addChild( listtext062 );



            var list018 = new List({
               'resource' : 'additionalworktype',
               'listItemTemplate' : listItemTemplate018,
               'artifactId' : 'WorkExecution.WorkTypeLookup_additionalworktype_list',
               'id' : 'awb8fd4de1',
               'searchAttributes' : searchAttributes002,
            });
            lookup004.addChild( list018 );


            var lookup005 = new Lookup({
               'resource' : 'appDocType',
               'id' : 'WorkExecution.appDocTypeLookup',
               'label' : MessageService.createStaticMessage('Select Value'),
            });
            ui001.addChild( lookup005 );

            var requiredResources028 = {
               'appDocType' : {
                  'artifactId' : 'WorkExecution.appDocTypeLookup_appDocType',
                  'id' : 'aw8ca30e01',
               },
            };
            lookup005.addRequiredResources( requiredResources028 );


            var listItemTemplate019 = new ListItemTemplate({
               'artifactId' : 'WorkExecution.appDocTypeLookup_appDocType_listItemTemplate',
               'id' : 'awa86cf2be',
            });

            var listtext063 = new ListText({
               'resourceAttribute' : 'doctype',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'WorkExecution.appDocTypeLookup_appDocType_doctype',
               'id' : 'aw6b7c2bc2',
            });
            listItemTemplate019.addChild( listtext063 );



            var list019 = new List({
               'resource' : 'appDocType',
               'listItemTemplate' : listItemTemplate019,
               'artifactId' : 'WorkExecution.appDocTypeLookup_appDocType_list',
               'id' : 'aw885ae2fe',
            });
            lookup005.addChild( list019 );


            var returnAttributes004 = new ReturnAttributes({
               'artifactId' : 'WorkExecution.appDocTypeLookup_returnAttributes',
               'id' : 'aw54587ddc',
            });
            lookup005.addChild( returnAttributes004 );


            var returnAttribute006 = new ReturnAttribute({
               'targetAttribute' : 'category',
               'artifactId' : 'WorkExecution.appDocTypeLookup_doctype_category',
               'id' : 'awb11d21b7',
               'sourceAttribute' : 'doctype',
            });
            returnAttributes004.addChild( returnAttribute006 );


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

            var searchAttribute005 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_searchAttribute_description',
               'id' : 'aw41666b11',
            });
            searchAttributes003.addChild( searchAttribute005 );



            var listItemTemplate020 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_alndomain_listItemTemplate_Item1Desc1',
               'id' : 'awc665d9a2',
            });

            var listtext064 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_Item1Desc1_value',
               'id' : 'awe68b3f5',
            });
            listItemTemplate020.addChild( listtext064 );


            var listtext065 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_Item1Desc1_description',
               'id' : 'awfe4e2119',
            });
            listItemTemplate020.addChild( listtext065 );



            var list020 = new List({
               'resource' : 'maxdomain',
               'listItemTemplate' : listItemTemplate020,
               'artifactId' : 'Inspection.alnDomainLookup_maxdomain_alndomain_list',
               'attribute' : 'alndomain',
               'id' : 'awe833663c',
               'searchAttributes' : searchAttributes003,
            });
            lookup006.addChild( list020 );


            var returnAttributes005 = new ReturnAttributes({
               'artifactId' : 'Inspection.alnDomainLookup_returnAttributes',
               'id' : 'awc897ecc7',
            });
            lookup006.addChild( returnAttributes005 );


            var returnAttribute007 = new ReturnAttribute({
               'targetAttribute' : 'alnvalue',
               'artifactId' : 'Inspection.alnDomainLookup_value_alnvalue',
               'id' : 'aw778667ba',
               'sourceAttribute' : 'value',
            });
            returnAttributes005.addChild( returnAttribute007 );


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

            var searchAttribute006 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'Inspection.NumericLookup_maxdomain_searchAttribute_description',
               'id' : 'aw70e59b68',
            });
            searchAttributes004.addChild( searchAttribute006 );



            var listItemTemplate021 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Inspection.NumericLookup_maxdomain_numericdomain_listItemTemplate_Item1Desc1',
               'id' : 'aw8c88751b',
            });

            var listtext066 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Inspection.NumericLookup_maxdomain_Item1Desc1_value',
               'id' : 'aw27135f32',
            });
            listItemTemplate021.addChild( listtext066 );


            var listtext067 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Inspection.NumericLookup_maxdomain_Item1Desc1_description',
               'id' : 'aw94257f39',
            });
            listItemTemplate021.addChild( listtext067 );



            var list021 = new List({
               'resource' : 'maxdomain',
               'listItemTemplate' : listItemTemplate021,
               'artifactId' : 'Inspection.NumericLookup_maxdomain_numericdomain_list',
               'attribute' : 'numericdomain',
               'id' : 'aw9e7e7b48',
               'searchAttributes' : searchAttributes004,
            });
            lookup007.addChild( list021 );


            var returnAttributes006 = new ReturnAttributes({
               'artifactId' : 'Inspection.NumericLookup_returnAttributes',
               'id' : 'aw721041bd',
            });
            lookup007.addChild( returnAttributes006 );


            var returnAttribute008 = new ReturnAttribute({
               'targetAttribute' : 'numvalue',
               'artifactId' : 'Inspection.NumericLookup_value_numvalue',
               'id' : 'aw29be0fd1',
               'sourceAttribute' : 'value',
            });
            returnAttributes006.addChild( returnAttribute008 );


            var lookup008 = new Lookup({
               'enableFeatureByProperty' : 'calibration.enabled',
               'resource' : 'plusccdssetaction',
               'id' : 'WorkExecution.SetPointActionLookup',
               'label' : MessageService.createStaticMessage('Select Value'),
            });
            ui001.addChild( lookup008 );



            var listItemTemplate022 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'WorkExecution.SetPointActionLookup_listItemTemplate_Item1Desc1',
               'id' : 'awc3de90bb',
            });

            var listtext068 = new ListText({
               'resourceAttribute' : 'value',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.SetPointActionLookup_Item1Desc1_value',
               'id' : 'aw8b631a0c',
            });
            listItemTemplate022.addChild( listtext068 );


            var listtext069 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'WorkExecution.SetPointActionLookup_Item1Desc1_description',
               'id' : 'aw811bca45',
            });
            listItemTemplate022.addChild( listtext069 );



            var list022 = new List({
               'resource' : 'plusccdssetaction',
               'listItemTemplate' : listItemTemplate022,
               'artifactId' : 'WorkExecution.SetPointActionLookup_list',
               'id' : 'awc1321a3f',
            });
            lookup008.addChild( list022 );


            var returnAttributes007 = new ReturnAttributes({
               'artifactId' : 'WorkExecution.SetPointActionLookup_returnAttributes',
               'id' : 'awfe1ff34c',
            });
            lookup008.addChild( returnAttributes007 );


            var returnAttribute009 = new ReturnAttribute({
               'targetAttribute' : 'setpointaction',
               'artifactId' : 'WorkExecution.SetPointActionLookup_value_alnvalue',
               'id' : 'aw9c4327e0',
               'sourceAttribute' : 'value',
            });
            returnAttributes007.addChild( returnAttribute009 );


            var lookup009 = new Lookup({
               'filterMethod' : 'ticketLookup',
               'resource' : 'amtickets',
               'filterClass' : 'custom.handlers.MSStatusChangeHandler',
               'id' : 'Wotickets.Lookup',
               'label' : MessageService.createStaticMessage('Selecionar Ticket'),
            });
            ui001.addChild( lookup009 );

            var requiredResources029 = {
               'amtickets' : {
                  'artifactId' : 'WorkExecution.ticketLookup_amtickets',
                  'id' : 'aw4b5f3b18',
               },
            };
            lookup009.addRequiredResources( requiredResources029 );


            var listItemTemplate023 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Wotickets.wotickets_alndomain_listItemTemplate_Item1Desc1',
               'id' : 'awf210f929',
            });

            var listtext070 = new ListText({
               'resourceAttribute' : 'ms_woticketid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Wotickets.Wotickets_Item1Desc1_ms_amticketid',
               'id' : 'aw3297df9e',
            });
            listItemTemplate023.addChild( listtext070 );



            var list023 = new List({
               'resource' : 'amtickets',
               'listItemTemplate' : listItemTemplate023,
               'artifactId' : 'Wotickets.alnDomainLookup_wotickets__list',
               'id' : 'aw6602f8b',
            });
            lookup009.addChild( list023 );


            var returnAttributes008 = new ReturnAttributes({
               'artifactId' : 'Wotickets.wotickets_returnAttributes',
               'id' : 'aw2443e1ee',
            });
            lookup009.addChild( returnAttributes008 );


            var returnAttribute010 = new ReturnAttribute({
               'targetAttribute' : 'ms_amticketid',
               'artifactId' : 'Wotickets.woticketsLookup_value_alnvalue',
               'id' : 'aw4bb5b0f4',
               'sourceAttribute' : 'ms_woticketid',
            });
            returnAttributes008.addChild( returnAttribute010 );


            var lookup010 = new Lookup({
               'filterMethod' : 'classifyLookup',
               'resource' : 'classstructure',
               'filterClass' : 'custom.handlers.WODetailExtensionHandler',
               'id' : 'WorkExecution.classifyLookup',
               'label' : MessageService.createStaticMessage('Selecione a Classifica\u00E7\u00E3o'),
            });
            ui001.addChild( lookup010 );

            var requiredResources030 = {
               'classstructure' : {
                  'artifactId' : 'WorkExecution.classifyLookup_additionalmsSite',
                  'id' : 'awdab59909',
               },
            };
            lookup010.addRequiredResources( requiredResources030 );


            var listItemTemplate024 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'WorkExecution.classifyLookupTemplate_Item1Desc1',
               'id' : 'awf6a27977',
            });

            var listtext071 = new ListText({
               'resourceAttribute' : 'classstructureid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.classifyLookup_classstructureid',
               'id' : 'aw9c3e4b8',
            });
            listItemTemplate024.addChild( listtext071 );


            var listtext072 = new ListText({
               'resourceAttribute' : 'classificationid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'WorkExecution.classifyLookup_classificationid',
               'id' : 'aw6e29c62b',
            });
            listItemTemplate024.addChild( listtext072 );



            var list024 = new List({
               'resource' : 'classstructure',
               'listItemTemplate' : listItemTemplate024,
               'artifactId' : 'WorkExecution.classifyLookup_list',
               'id' : 'awc625efa0',
            });
            lookup010.addChild( list024 );


            var returnAttributes009 = new ReturnAttributes({
               'artifactId' : 'WorkExecution.classifyLookup_returnAttributes02',
               'id' : 'awcb6fb434',
            });
            lookup010.addChild( returnAttributes009 );


            var returnAttribute011 = new ReturnAttribute({
               'targetAttribute' : 'classstructureid',
               'artifactId' : 'WorkExecution.classifyLookup_description_sitedesc',
               'id' : 'aw7e87416b',
               'sourceAttribute' : 'classstructureid',
            });
            returnAttributes009.addChild( returnAttribute011 );


            var lookup011 = new Lookup({
               'resource' : 'whylist',
               'id' : 'WorkExecution.whylookup',
               'label' : MessageService.createStaticMessage('Selecione o motivo'),
            });
            ui001.addChild( lookup011 );

            var requiredResources031 = {
               'whylist' : {
                  'artifactId' : 'WorkExecution.whylookup.requiredResource.whylist',
                  'id' : 'aw182c1a3b',
               },
            };
            lookup011.addRequiredResources( requiredResources031 );


            var listItemTemplate025 = new ListItemTemplate({
               'artifactId' : 'WorkExecution.whylookup.listItemTemplate',
               'id' : 'aw8cc4ff41',
            });

            var listtext073 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'WorkExecution.whylookup.listtext.description',
               'id' : 'aw463e018f',
            });
            listItemTemplate025.addChild( listtext073 );

            var eventHandlers129 = [
               {
                     'method' : 'openPDWhy',
                     'artifactId' : 'WorkExecution.PD_WhyView_listItemTemplate_FailureReportList_eventHandlers_click_openPDWhy',
                     'id' : 'awdc5f140d',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSStatusChangeHandler',
               }
            ];
            listItemTemplate025.eventHandlers = eventHandlers129;


            var list025 = new List({
               'resource' : 'whylist',
               'listItemTemplate' : listItemTemplate025,
               'artifactId' : 'WorkExecution.whylookup.list',
               'id' : 'awd831bdeb',
            });
            lookup011.addChild( list025 );


            var returnAttributes010 = new ReturnAttributes({
               'artifactId' : 'WorkExecution.whylookup.returnAttributes',
               'id' : 'aw92b71d3d',
            });
            lookup011.addChild( returnAttributes010 );


            var returnAttribute012 = new ReturnAttribute({
               'targetAttribute' : 'pd_whynum',
               'artifactId' : 'WorkExecution.whylookup.returnAttributes.pd_whynum.ms_whynum',
               'id' : 'aw80addaee',
               'sourceAttribute' : 'pd_whynum',
            });
            returnAttributes010.addChild( returnAttribute012 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AttachmentInfoView', false);
               trackTimer.startTracking();
            }

            var view024 = new View({
               'resource' : 'PlatformAttachmentInfoResource',
               'id' : 'Platform.AttachmentInfoView',
               'label' : MessageService.createStaticMessage('Attachment Details'),
            });
            ui001.addChild( view024 );

            var requiredResources032 = {
               'PlatformAttachmentInfoResource' : {
                  'reload' : true,
                  'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource',
                  'id' : 'awedbd920b',
               },
            };
            view024.addRequiredResources( requiredResources032 );

            var container067 = new Container({
               'resource' : 'PlatformAttachmentInfoResource',
               'artifactId' : 'Platform.AttachmentInfoView_container_0',
               'id' : 'aw22b80d5f',
            });
            view024.addChild( container067 );


            var group031 = new Group({
               'artifactId' : 'Platform.AttachmentInfoView_group_0',
               'id' : 'aw80e7b381',
            });
            container067.addChild( group031 );


            var groupitem086 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_0',
               'id' : 'aw15768e0',
            });
            group031.addChild( groupitem086 );


            var text139 = new Text({
               'resourceAttribute' : 'name',
               'editable' : true,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_0_name_Name',
               'id' : 'awddf675f4',
               'label' : MessageService.createStaticMessage('Name'),
               'required' : true,
            });
            groupitem086.addChild( text139 );


            var groupitem087 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_1',
               'id' : 'aw76505876',
            });
            group031.addChild( groupitem087 );


            var text140 = new Text({
               'resourceAttribute' : 'description',
               'editable' : true,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_1_description_Description',
               'id' : 'awc2735258',
               'label' : MessageService.createStaticMessage('Description'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem087.addChild( text140 );


            var groupitem088 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2',
               'id' : 'awef5909cc',
            });
            group031.addChild( groupitem088 );


            var text141 = new Text({
               'resourceAttribute' : 'category',
               'lookup' : 'PlatformAttachmentIn.CategoryLookup',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2_category_Folder',
               'id' : 'aw3a5ae064',
               'label' : MessageService.createStaticMessage('Folder'),
               'lookupAttribute' : 'folderName',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem088.addChild( text141 );

            var eventHandlers130 = [
               {
                     'method' : 'renderCategory',
                     'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2_category_Folder_eventHandlers_render_renderCategory',
                     'id' : 'awa205ff23',
                     'event' : 'render',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            text141.eventHandlers = eventHandlers130;

            var groupitem089 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_3',
               'id' : 'aw985e395a',
            });
            group031.addChild( groupitem089 );


            var text142 = new Text({
               'resourceAttribute' : 'fileType',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_3_fileType_FileType',
               'id' : 'awf0b55f9',
               'label' : MessageService.createStaticMessage('File Type'),
            });
            groupitem089.addChild( text142 );


            var groupitem090 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_4',
               'id' : 'aw63aacf9',
            });
            group031.addChild( groupitem090 );


            var text143 = new Text({
               'resourceAttribute' : 'fileSize',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_4_fileSize_FileSizeKB',
               'id' : 'awa8aac05f',
               'label' : MessageService.createStaticMessage('File Size (KB)'),
            });
            groupitem090.addChild( text143 );


            var footer005 = new Footer({
               'artifactId' : 'Platform.AttachmentInfoView_footer',
               'id' : 'awad3a6a43',
            });
            view024.addChild( footer005 );


            var button068 = new Button({
               'artifactId' : 'Platform.AttachmentInfoView_Cancel_button',
               'id' : 'aw61842429',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers131 = [
               {
                     'method' : 'handleBackButtonAttachmentDetailsView',
                     'artifactId' : 'Platform.AttachmentInfoView_Cancel_button_eventHandlers_click_handleBackButtonAttachmentDetailsView',
                     'id' : 'aw2e660b65',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button068.eventHandlers = eventHandlers131;
            footer005.addChild( button068 );


            var button069 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.AttachmentInfoView_Save_button',
               'id' : 'aw8904293b',
               'label' : MessageService.createStaticMessage('Save'),
            });
            var eventHandlers132 = [
               {
                     'method' : 'commitAttachmentEntry',
                     'artifactId' : 'Platform.AttachmentInfoView_Save_button_eventHandlers_click_commitAttachmentEntry',
                     'id' : 'awbff90b7f',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button069.eventHandlers = eventHandlers132;
            footer005.addChild( button069 );

            var eventHandlers133 = [
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
            view024.eventHandlers = eventHandlers133;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AttachmentFileDialog', false);
               trackTimer.startTracking();
            }

            var view025 = new View({
               'id' : 'Platform.AttachmentFileDialog',
            });
            ui001.addChild( view025 );


            var footer006 = new Footer({
               'artifactId' : 'Platform.AttachmentFileDialog_footer',
               'id' : 'awb513dc05',
            });
            view025.addChild( footer006 );


            var button070 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.UnsavedSketch_doNotAllow_button',
               'id' : 'aw150d1bc',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers134 = [
               {
                     'method' : 'closeFileDialog',
                     'artifactId' : 'Platform.AttachmentFileDialog_closeDialog',
                     'id' : 'awc0d2f7fd',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button070.eventHandlers = eventHandlers134;
            footer006.addChild( button070 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var lookup012 = new Lookup({
               'resource' : 'PlatformAttachmentCategoryResource',
               'id' : 'PlatformAttachmentIn.CategoryLookup',
               'label' : MessageService.createStaticMessage('Select Folder'),
            });
            ui001.addChild( lookup012 );

            var requiredResources033 = {
               'PlatformAttachmentCategoryResource' : {
                  'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource',
                  'id' : 'aw18cc3542',
               },
            };
            lookup012.addRequiredResources( requiredResources033 );


            var searchAttributes005 = new SearchAttributes({
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_searchAttributes',
               'id' : 'awb7d9341f',
            });

            var searchAttribute007 = new SearchAttribute({
               'name' : 'folderName',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_searchAttribute_folderName',
               'id' : 'aw9514e6e6',
            });
            searchAttributes005.addChild( searchAttribute007 );



            var listItemTemplate026 = new ListItemTemplate({
               'layout' : 'Item2Desc2',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_listItemTemplate_Item2Desc2',
               'id' : 'aweb3659e3',
            });

            var listtext074 = new ListText({
               'resourceAttribute' : 'folderName',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_Item2Desc2_folderName',
               'id' : 'aw48fc196b',
            });
            listItemTemplate026.addChild( listtext074 );



            var list026 = new List({
               'resource' : 'PlatformAttachmentCategoryResource',
               'listItemTemplate' : listItemTemplate026,
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_list',
               'id' : 'awe6857cc4',
               'searchAttributes' : searchAttributes005,
            });
            lookup012.addChild( list026 );


            var returnAttributes011 = new ReturnAttributes({
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_returnAttributes',
               'id' : 'aw4860e6b5',
            });
            lookup012.addChild( returnAttributes011 );


            var returnAttribute013 = new ReturnAttribute({
               'targetAttribute' : 'category',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_folderName_category',
               'id' : 'awb2f5d728',
               'sourceAttribute' : 'folderName',
            });
            returnAttributes011.addChild( returnAttribute013 );


            var actions009 = new Actions({
               'artifactId' : 'actions',
               'id' : 'aw548f1ef',
            });
            ui001.addChild( actions009 );


            var action015 = new Action({
               'overflow' : true,
               'artifactId' : 'ResetWorkList_action',
               'id' : 'aw956f5d3b',
               'label' : MessageService.createStaticMessage('Reset Work List'),
            });
            actions009.addChild( action015 );

            var eventHandlers135 = [
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
            action015.eventHandlers = eventHandlers135;

            var action016 = new Action({
               'overflow' : true,
               'artifactId' : 'PseudoOffline_goOffline',
               'id' : 'aw90309912',
               'label' : MessageService.createStaticMessage('Enable Offline Mode'),
            });
            actions009.addChild( action016 );

            var eventHandlers136 = [
               {
                     'method' : 'toggleOfflineMode',
                     'artifactId' : 'PseudoOffline_enableoffline_action_eventHandlers_click',
                     'id' : 'aw33d3b70c',
                     'event' : 'click',
                     'class' : 'platform.handlers.PseudoOfflineModeHandler',
               }
            ];
            action016.eventHandlers = eventHandlers136;

            var action017 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.Settings',
               'artifactId' : 'Settings_action',
               'id' : 'awc0b1927e',
               'label' : MessageService.createStaticMessage('Settings'),
            });
            actions009.addChild( action017 );


            var action018 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.HelpAbout',
               'artifactId' : 'About_action',
               'id' : 'aw49fae06b',
               'label' : MessageService.createStaticMessage('About'),
            });
            actions009.addChild( action018 );


            var action019 = new Action({
               'overflow' : true,
               'artifactId' : 'acesso_manuais',
               'id' : 'awd1cf2641',
               'label' : MessageService.createStaticMessage('Manuais'),
            });
            actions009.addChild( action019 );

            var eventHandlers137 = [
               {
                     'method' : 'acesso_manuaisClicked',
                     'artifactId' : 'acesso_manuais_eventHandlers_click',
                     'id' : 'awb790cba8',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSLoginHandler',
               }
            ];
            action019.eventHandlers = eventHandlers137;

            var action020 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.LogOutPrompt',
               'artifactId' : 'LogOut_action',
               'id' : 'awd566efa2',
               'label' : MessageService.createStaticMessage('Log Out'),
            });
            actions009.addChild( action020 );


            var action021 = new Action({
               'artifactId' : 'action',
               'id' : 'aw47cc8c92',
            });
            actions009.addChild( action021 );

            var eventHandlers138 = [
               {
                     'artifactId' : 'action_eventHandlers_click',
                     'id' : 'aw871940b2',
                     'event' : 'click',
                     'class' : 'platform.handlers.CreateQueryBaseHandler',
               }
            ];
            action021.eventHandlers = eventHandlers138;

            var erroractions001 = new ErrorActions({
               'artifactId' : 'erroractions',
               'id' : 'aw6a5d95e9',
            });
            ui001.addChild( erroractions001 );


            var action022 = new Action({
               'artifactId' : 'UndoChanges_action',
               'id' : 'aw2236d58a',
               'label' : MessageService.createStaticMessage('Undo Changes'),
            });
            erroractions001.addChild( action022 );

            var eventHandlers139 = [
               {
                     'method' : 'confirmClearChanges',
                     'artifactId' : 'UndoChanges_action_eventHandlers_click_confirmClearChanges',
                     'id' : 'awcf857f5c',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action022.eventHandlers = eventHandlers139;

            var action023 = new Action({
               'artifactId' : 'ResendChanges_action',
               'id' : 'awccf9e70e',
               'label' : MessageService.createStaticMessage('Resend Changes'),
            });
            erroractions001.addChild( action023 );

            var eventHandlers140 = [
               {
                     'method' : 'retryRecordChanges',
                     'artifactId' : 'ResendChanges_action_eventHandlers_click_retryRecordChanges',
                     'id' : 'aw543ac47e',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action023.eventHandlers = eventHandlers140;
            var eventHandlers141 = [
               {
                     'method' : 'none',
                     'artifactId' : 'eventHandlers_none_none',
                     'id' : 'aw1e2e7ded',
                     'event' : 'none',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            ui001.eventHandlers = eventHandlers141;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.emptyview', false);
               trackTimer.startTracking();
            }

            var view026 = new View({
               'showHeader' : false,
               'id' : 'Platform.emptyview',
               'showFooter' : false,
            });
            ui001.addChild( view026 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Notifications', false);
               trackTimer.startTracking();
            }

            var view027 = new View({
               'id' : 'Platform.Notifications',
               'label' : MessageService.createStaticMessage('My Notifications'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view027 );

            var requiredResources034 = {
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
            view027.addRequiredResources( requiredResources034 );


            var listItemTemplate027 = new ListItemTemplate({
               'layout' : 'NotificationList',
               'artifactId' : 'Platform.Notifications_listItemTemplate',
               'id' : 'aw718eb447',
            });

            var listtext075 = new ListText({
               'resourceAttribute' : 'uiDate',
               'layoutInsertAt' : 'date1',
               'artifactId' : 'Platform.Notifications_uiDate',
               'id' : 'aw56b07378',
            });
            listItemTemplate027.addChild( listtext075 );


            var listtext076 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Platform.Notifications_itemnum',
               'id' : 'aw4dbbd111',
            });
            listItemTemplate027.addChild( listtext076 );


            var listtext077 = new ListText({
               'resourceAttribute' : 'itemDesc',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Platform.Notifications_itemDesc',
               'id' : 'aw6bac97b9',
            });
            listItemTemplate027.addChild( listtext077 );

            var eventHandlers142 = [
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
            listItemTemplate027.eventHandlers = eventHandlers142;


            var list027 = new List({
               'resource' : 'osusernotification',
               'listItemTemplate' : listItemTemplate027,
               'artifactId' : 'Platform.Notifications_list',
               'id' : 'awb4916253',
               'label' : MessageService.createStaticMessage('List of notifications'),
            });
            view027.addChild( list027 );

            var eventHandlers143 = [
               {
                     'method' : 'renderMsgHistory',
                     'artifactId' : 'Platform.Notifications_eventHandlers_render_FromList',
                     'id' : 'awa8aedc90',
                     'event' : 'render',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            view027.eventHandlers = eventHandlers143;
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

            var eventHandlers144 = [
               {
                     'method' : 'initLookup',
                     'artifactId' : 'Platform.DateTimeLookup_eventHandlers_show_initLookup',
                     'id' : 'aw576c44ec',
                     'event' : 'show',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            dialog027.eventHandlers = eventHandlers144;

            var container068 = new Container({
               'artifactId' : 'Platform.DateTimeLookup_container_0',
               'id' : 'aw3cdb37d7',
            });
            dialog027.addChild( container068 );


            var datetimepicker001 = new DateTimePicker({
               'artifactId' : 'Platform.DateTimeLookup_datetimepicker_0',
               'id' : 'aw7d2f0e0d',
            });
            container068.addChild( datetimepicker001 );


            var container069 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DateTimeLookup_container_1',
               'id' : 'aw4bdc0741',
            });
            dialog027.addChild( container069 );


            var button071 = new Button({
               'artifactId' : 'Platform.DateTimeLookup_Cancel_button',
               'id' : 'aw54d2f1bb',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers145 = [
               {
                     'method' : 'Cancel',
                     'artifactId' : 'Platform.DateTimeLookup_Cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw5ced0c47',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button071.eventHandlers = eventHandlers145;
            container069.addChild( button071 );


            var button072 = new Button({
               'artifactId' : 'Platform.DateTimeLookup_Clear_button',
               'id' : 'awfd1238bd',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers146 = [
               {
                     'method' : 'Clear',
                     'artifactId' : 'Platform.DateTimeLookup_Clear_button_eventHandlers_click_Clear',
                     'id' : 'aw47510f1f',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button072.eventHandlers = eventHandlers146;
            container069.addChild( button072 );


            var button073 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DateTimeLookup_OK_button',
               'id' : 'awb1e0d280',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers147 = [
               {
                     'method' : 'SetSelection',
                     'artifactId' : 'Platform.DateTimeLookup_OK_button_eventHandlers_click_SetSelection',
                     'id' : 'aw6c08b2ff',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button073.eventHandlers = eventHandlers147;
            container069.addChild( button073 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.HelpAbout', false);
               trackTimer.startTracking();
            }

            var view028 = new View({
               'resource' : 'PlatformLoginResource',
               'id' : 'Platform.HelpAbout',
               'label' : MessageService.createStaticMessage('About'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view028 );


            var container070 = new Container({
               'cssClass' : 'platformHelpAboutContainer',
               'artifactId' : 'Platform.HelpAbout_container_0',
               'id' : 'awf8c0259e',
            });
            view028.addChild( container070 );


            var image007 = new Image({
               'image' : 'ibmLogoDark.svg',
               'artifactId' : 'Platform.HelpAbout_image_0',
               'id' : 'awfebf608a',
            });
            container070.addChild( image007 );


            var text144 = new Text({
               'resourceAttribute' : 'appName',
               'cssClass' : 'productName bold textappearance-large',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_appName',
               'id' : 'aw27632fa8',
            });
            container070.addChild( text144 );


            var text145 = new Text({
               'cssClass' : 'version',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_Version7.5.2.1',
               'id' : 'awf060501a',
               'value' : MessageService.createStaticMessage('Version 7.6.4.0'),
            });
            container070.addChild( text145 );


            var text146 = new Text({
               'cssClass' : 'build',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_Buildnumberbuild',
               'id' : 'awd289f042',
               'value' : MessageService.createStaticMessage('Build number @build@'),
            });
            container070.addChild( text146 );


            var text147 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_LicensedMaterials-',
               'id' : 'aw31046f88',
               'value' : MessageService.createStaticMessage('Licensed Materials - Property of IBM. \u00A9IBM Corp. 2020. IBM, the IBM logo, and ibm.com are trademarks of IBM Corp., registered in many jurisdictions worldwide. Other product and service names might be trademarks of IBM or other companies. A current list of IBM trademarks is available on the Web at www.ibm.com\/legal\/copytrade.shtml. This Program is licensed under the terms of the license agreement for the Program. Please read this agreement carefully before using the Program. By using the Program, you agree to these terms.'),
            });
            container070.addChild( text147 );


            var group032 = new Group({
               'debugOnly' : 'true',
               'artifactId' : 'Platform.Settings_group_2',
               'id' : 'awc5ac5572',
            });
            container070.addChild( group032 );


            var groupitem091 = new GroupItem({
               'layout' : 'ScreenInfo',
               'cssClass' : 'screenInfo',
               'artifactId' : 'Platform.Settings_screenInfo_item',
               'id' : 'aw5de3d82',
            });
            group032.addChild( groupitem091 );


            var text148 = new Text({
               'cssClass' : 'textappearance-large',
               'layoutInsertAt' : 'title',
               'artifactId' : 'Platform.Settings_screenInfo_title',
               'id' : 'awd295621c',
               'value' : MessageService.createStaticMessage('Screen Information'),
            });
            groupitem091.addChild( text148 );


            var text149 = new Text({
               'resourceAttribute' : 'ppi',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pixels',
               'artifactId' : 'Platform.Settings_screenInfo_ppi_text',
               'id' : 'aw4219624',
               'label' : MessageService.createStaticMessage('PPI'),
            });
            groupitem091.addChild( text149 );


            var text150 = new Text({
               'resourceAttribute' : 'width',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'width',
               'artifactId' : 'Platform.Settings_screenInfo_width_text',
               'id' : 'aw6564040e',
               'label' : MessageService.createStaticMessage('Width'),
            });
            groupitem091.addChild( text150 );


            var text151 = new Text({
               'resourceAttribute' : 'height',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'height',
               'artifactId' : 'Platform.Settings_screenInfo_height_text',
               'id' : 'awcd6ab682',
               'label' : MessageService.createStaticMessage('Height'),
            });
            groupitem091.addChild( text151 );


            var text152 = new Text({
               'resourceAttribute' : 'layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'size',
               'artifactId' : 'Platform.Settings_screenInfo_layout_text',
               'id' : 'awd74c1b0',
               'label' : MessageService.createStaticMessage('Layout Size'),
            });
            groupitem091.addChild( text152 );


            var text153 = new Text({
               'resourceAttribute' : 'orientation',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'orientation',
               'artifactId' : 'Platform.Settings_screenInfo_orientation_text',
               'id' : 'aw22df9e6f',
               'label' : MessageService.createStaticMessage('Orientation'),
            });
            groupitem091.addChild( text153 );


            var text154 = new Text({
               'resourceAttribute' : 'density',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'density',
               'artifactId' : 'Platform.Settings_screenInfo_density_text',
               'id' : 'aw6b4b20e2',
               'label' : MessageService.createStaticMessage('Density'),
            });
            groupitem091.addChild( text154 );


            var text155 = new Text({
               'resourceAttribute' : 'pane0_layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pane0',
               'artifactId' : 'Platform.Settings_screenInfo_pane0',
               'id' : 'aw39d3d4a7',
               'label' : MessageService.createStaticMessage('Pane 1 Size'),
            });
            groupitem091.addChild( text155 );


            var text156 = new Text({
               'resourceAttribute' : 'pane1_layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pane1',
               'artifactId' : 'Platform.Settings_screenInfo_pane1',
               'id' : 'aw4ed4e431',
               'label' : MessageService.createStaticMessage('Pane 2 Size'),
            });
            groupitem091.addChild( text156 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Settings', false);
               trackTimer.startTracking();
            }

            var view029 = new View({
               'id' : 'Platform.Settings',
               'label' : MessageService.createStaticMessage('Settings'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view029 );

            var requiredResources035 = {
               'LastADDownload' : {
                  'artifactId' : 'Platform.Settings_LastADDownload',
                  'id' : 'aw879343e2',
               },
            };
            view029.addRequiredResources( requiredResources035 );

            var actions010 = new Actions({
               'artifactId' : 'Platform.Settings_actions',
               'id' : 'awb3f56d3b',
            });
            view029.addChild( actions010 );


            var action024 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.Settings_RefreshSystemData_action',
               'id' : 'awccb0ee65',
               'label' : MessageService.createStaticMessage('Refresh System Data'),
            });
            actions010.addChild( action024 );

            var eventHandlers148 = [
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
            action024.eventHandlers = eventHandlers148;

            var container071 = new Container({
               'resource' : 'LastADDownload',
               'artifactId' : 'Platform.Settings_container_0',
               'id' : 'aw74ff68b5',
            });
            view029.addChild( container071 );


            var group033 = new Group({
               'artifactId' : 'Platform.Settings_group_0',
               'id' : 'aw2ba2345e',
            });
            container071.addChild( group033 );


            var groupitem092 = new GroupItem({
               'transitionTo' : 'Platform.ChangePassword',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0',
               'id' : 'awd48342a3',
            });
            group033.addChild( groupitem092 );


            var text157 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0_ChangePassword',
               'id' : 'aw6c14924a',
               'value' : MessageService.createStaticMessage('Change Password'),
            });
            groupitem092.addChild( text157 );

            var eventHandlers149 = [
               {
                     'method' : 'enableChangePasswordFunction',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0_eventHandlers_render_enableChangePasswordFunction',
                     'id' : 'awa81f4a5',
                     'event' : 'render',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            groupitem092.eventHandlers = eventHandlers149;

            var groupitem093 = new GroupItem({
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0',
               'id' : 'aw82635ebb',
            });
            group033.addChild( groupitem093 );


            var text158 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_RefreshLookupData',
               'id' : 'awcddf2167',
               'value' : MessageService.createStaticMessage('Refresh Lookup Data'),
            });
            groupitem093.addChild( text158 );


            var text159 = new Text({
               'resourceAttribute' : 'downloadStatus',
               'editable' : false,
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_downloadStatus',
               'id' : 'aw8a1673e3',
            });
            groupitem093.addChild( text159 );

            var eventHandlers150 = [
               {
                     'method' : 'renderLastDownload',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_downloadStatus_eventHandlers_render_renderLastDownload',
                     'id' : 'aw72547fb7',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text159.eventHandlers = eventHandlers150;

            var text160 = new Text({
               'cssClass' : 'textappearance-small',
               'editable' : false,
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_Updatesthelookupd',
               'id' : 'aw38a24bec',
               'value' : MessageService.createStaticMessage('Updates the lookup data on your device. Lookup data includes objects, such as assets and locations, that can be added to records.'),
            });
            groupitem093.addChild( text160 );

            var eventHandlers151 = [
               {
                     'method' : 'refreshAdditionalData',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_eventHandlers_click_refreshAdditionalData',
                     'id' : 'aw93ad06fe',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            groupitem093.eventHandlers = eventHandlers151;

            var groupitem094 = new GroupItem({
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_3_Number_of_day_to_sync',
               'id' : 'aw97e66cd6',
            });
            group033.addChild( groupitem094 );


            var text161 = new Text({
               'resourceAttribute' : 'numberOfDaysToSync',
               'editable' : true,
               'artifactId' : 'Platform.Settings_LastADDownload_text_Number_of_day_to_sync',
               'id' : 'aw69a517e3',
               'label' : MessageService.createStaticMessage('How often changes need to be refresh in days:'),
            });
            groupitem094.addChild( text161 );

            var eventHandlers152 = [
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
            text161.eventHandlers = eventHandlers152;

            var groupitem095 = new GroupItem({
               'transitionTo' : 'Platform.AdvancedSettings',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.AdvancedSettings_0',
               'id' : 'aw741c4d60',
            });
            group033.addChild( groupitem095 );


            var text162 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.AdvancedSettings_0_AdvancedSettings',
               'id' : 'aw2d662633',
               'value' : MessageService.createStaticMessage('Advanced Settings'),
            });
            groupitem095.addChild( text162 );


            var group034 = new Group({
               'enableFeatureByProperty' : 'attachments.enabled',
               'artifactId' : 'Platform.Settings_group_1',
               'id' : 'aw5ca504c8',
            });
            container071.addChild( group034 );


            var groupitem096 = new GroupItem({
               'layout' : 'Item1Button1',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_1',
               'id' : 'awf5646e2d',
            });
            group034.addChild( groupitem096 );


            var text163 = new Text({
               'cssClass' : 'wrap-content',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_1_Downloadattachments',
               'id' : 'awd21c407a',
               'value' : MessageService.createStaticMessage('Download attachments with work list.'),
            });
            groupitem096.addChild( text163 );


            var checkbox003 = new CheckBox({
               'resourceAttribute' : 'downloadAttachments',
               'cssClass' : 'rightCheckBox',
               'editable' : true,
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Platform.Settings_downloadAttachments_checkbox',
               'id' : 'aw1a5b9aa2',
            });
            groupitem096.addChild( checkbox003 );

            var eventHandlers153 = [
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
            checkbox003.eventHandlers = eventHandlers153;

            var container072 = new Container({
               'artifactId' : 'ConnectionContainer',
               'id' : 'awef0b2658',
            });
            view029.addChild( container072 );


            var group035 = new Group({
               'artifactId' : 'Platform.Settings.ConnectionManagement.group',
               'id' : 'aw9ad5002d',
            });
            container072.addChild( group035 );


            var groupitem097 = new GroupItem({
               'layout' : 'ConnectionManagementLayout',
               'artifactId' : 'Platform.Settings.ConnectionManagement.groupItem1',
               'id' : 'aw81b0980b',
            });
            group035.addChild( groupitem097 );


            var text164 = new Text({
               'cssClass' : 'relatedRecords',
               'layoutInsertAt' : 'Title',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Title',
               'id' : 'aw1de21387',
               'value' : MessageService.createStaticMessage('Connection Behavior'),
            });
            groupitem097.addChild( text164 );


            var text165 = new Text({
               'cssClass' : 'wrap-content',
               'layoutInsertAt' : 'description',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Description',
               'id' : 'aw6b506a6f',
               'value' : MessageService.createStaticMessage('Specifies which network connections should enable the application to work online'),
            });
            groupitem097.addChild( text165 );


            var radiobutton001 = new RadioButton({
               'cssClass' : 'firstradiobutton',
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.AllConnections',
               'id' : 'awcb83aecb',
               'label' : MessageService.createStaticMessage('All Types'),
            });
            groupitem097.addChild( radiobutton001 );

            var eventHandlers154 = [
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
            radiobutton001.eventHandlers = eventHandlers154;

            var radiobutton002 = new RadioButton({
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button2',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.WiFi',
               'id' : 'aw42dec2bb',
               'label' : MessageService.createStaticMessage('Only WiFi'),
            });
            groupitem097.addChild( radiobutton002 );

            var eventHandlers155 = [
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
            radiobutton002.eventHandlers = eventHandlers155;

            var radiobutton003 = new RadioButton({
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button3',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.Cellular',
               'id' : 'aw7032481d',
               'label' : MessageService.createStaticMessage('Only Cellular'),
            });
            groupitem097.addChild( radiobutton003 );

            var eventHandlers156 = [
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
            radiobutton003.eventHandlers = eventHandlers156;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AdvancedSettings', false);
               trackTimer.startTracking();
            }

            var view030 = new View({
               'id' : 'Platform.AdvancedSettings',
               'label' : MessageService.createStaticMessage('Settings'),
            });
            ui001.addChild( view030 );


            var container073 = new Container({
               'artifactId' : 'Platform.AdvancedSettings_container_0',
               'id' : 'aw5c13274d',
            });
            view030.addChild( container073 );


            var group036 = new Group({
               'artifactId' : 'Platform.AdvancedSettings_group_0',
               'id' : 'awebdfb82c',
            });
            container073.addChild( group036 );


            var groupitem098 = new GroupItem({
               'transitionTo' : 'Platform.TimeTrackReport',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0',
               'id' : 'awba4384a8',
            });
            group036.addChild( groupitem098 );


            var text166 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0_TrackPerformanceDa',
               'id' : 'awc0a6dde7',
               'value' : MessageService.createStaticMessage('Track Performance Data'),
            });
            groupitem098.addChild( text166 );


            var text167 = new Text({
               'cssClass' : 'red-text',
               'editable' : false,
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0_Thisoptionusesmem',
               'id' : 'aw4367e95f',
               'value' : MessageService.createStaticMessage('This option uses memory and might slow the performance of your device. Disable performance tracking when you are done.'),
            });
            groupitem098.addChild( text167 );


            var groupitem099 = new GroupItem({
               'transitionTo' : 'Platform.LoggerReport',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0',
               'id' : 'aw10ca73e0',
            });
            group036.addChild( groupitem099 );


            var text168 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0_Logging',
               'id' : 'awffa3ff9c',
               'value' : MessageService.createStaticMessage('Logging'),
            });
            groupitem099.addChild( text168 );


            var text169 = new Text({
               'cssClass' : 'red-text',
               'editable' : false,
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0_Thisoptionusesmem',
               'id' : 'aw30da1efa',
               'value' : MessageService.createStaticMessage('This option uses memory and might slow the performance of your device. Disable logging when you are done.'),
            });
            groupitem099.addChild( text169 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.LoggerReport', false);
               trackTimer.startTracking();
            }

            var view031 = new View({
               'cssClass' : 'loggerReport',
               'scrollDir' : 'vh',
               'id' : 'Platform.LoggerReport',
               'label' : MessageService.createStaticMessage('Logging Data'),
            });
            ui001.addChild( view031 );


            var actions011 = new Actions({
               'artifactId' : 'Platform.LoggerReport_actions',
               'id' : 'aw5b090344',
            });
            view031.addChild( actions011 );


            var action025 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableErrorLogging_action',
               'id' : 'awc05e82b4',
               'label' : MessageService.createStaticMessage('Enable Error Logging'),
            });
            actions011.addChild( action025 );

            var eventHandlers157 = [
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
            action025.eventHandlers = eventHandlers157;

            var action026 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableInfoLogging_action',
               'id' : 'aw6d618335',
               'label' : MessageService.createStaticMessage('Enable Info Logging'),
            });
            actions011.addChild( action026 );

            var eventHandlers158 = [
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
            action026.eventHandlers = eventHandlers158;

            var action027 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableDebugLogging_action',
               'id' : 'awaa11689b',
               'label' : MessageService.createStaticMessage('Enable Debug Logging'),
            });
            actions011.addChild( action027 );

            var eventHandlers159 = [
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
            action027.eventHandlers = eventHandlers159;

            var action028 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.TransLoggerReport',
               'artifactId' : 'Platform.LoggerReport_ViewTransactionLog_action',
               'id' : 'awdaed3d40',
               'label' : MessageService.createStaticMessage('View Transaction Log'),
            });
            actions011.addChild( action028 );


            var action029 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_ClearLogData_action',
               'id' : 'awb6d3895c',
               'label' : MessageService.createStaticMessage('Clear Log Data'),
            });
            actions011.addChild( action029 );

            var eventHandlers160 = [
               {
                     'method' : 'clear',
                     'artifactId' : 'Platform.LoggerReport_ClearLogData_action_eventHandlers_click_clear',
                     'id' : 'aw10958c5',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action029.eventHandlers = eventHandlers160;

            var action030 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_UploadLog_action',
               'id' : 'aw7510fce3',
               'label' : MessageService.createStaticMessage('Save Log'),
            });
            actions011.addChild( action030 );

            var eventHandlers161 = [
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
            action030.eventHandlers = eventHandlers161;

            var action031 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EmailLog_action',
               'id' : 'aw90d8a401',
               'label' : MessageService.createStaticMessage('Email Log'),
            });
            actions011.addChild( action031 );

            var eventHandlers162 = [
               {
                     'method' : 'emailCurrent',
                     'artifactId' : 'Platform.LoggerReport_EmailLog_action_eventHandlers_click_emailCurrent',
                     'id' : 'awf10881b9',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action031.eventHandlers = eventHandlers162;
            var eventHandlers163 = [
               {
                     'method' : 'renderLoggerReport',
                     'artifactId' : 'Platform.LoggerReport_eventHandlers_show_renderLoggerReport',
                     'id' : 'aw9b7c5c73',
                     'event' : 'show',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            view031.eventHandlers = eventHandlers163;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.TransLoggerReport', false);
               trackTimer.startTracking();
            }

            var view032 = new View({
               'scrollDir' : 'vh',
               'id' : 'Platform.TransLoggerReport',
               'label' : MessageService.createStaticMessage('Logging Data'),
            });
            ui001.addChild( view032 );


            var actions012 = new Actions({
               'artifactId' : 'Platform.TransLoggerReport_actions',
               'id' : 'aw49b00040',
            });
            view032.addChild( actions012 );


            var action032 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TransLoggerReport_ClearLogData_action',
               'id' : 'awdce21e26',
               'label' : MessageService.createStaticMessage('Clear Log Data'),
            });
            actions012.addChild( action032 );

            var eventHandlers164 = [
               {
                     'method' : 'clearTransLog',
                     'artifactId' : 'Platform.TransLoggerReport_ClearLogData_action_eventHandlers_click_clear',
                     'id' : 'aw71c2398e',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action032.eventHandlers = eventHandlers164;

            var action033 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TransLoggerReport_EmailLog_action',
               'id' : 'aw29f3639',
               'label' : MessageService.createStaticMessage('Email Log'),
            });
            actions012.addChild( action033 );

            var eventHandlers165 = [
               {
                     'method' : 'emailCurrentTranslog',
                     'artifactId' : 'Platform.TransLoggerReport_EmailLog_action_eventHandlers_click_emailCurrent',
                     'id' : 'awfd97a236',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action033.eventHandlers = eventHandlers165;
            var eventHandlers166 = [
               {
                     'method' : 'renderTransLoggerReport',
                     'artifactId' : 'Platform.TransLoggerReport_eventHandlers_show_renderTransLoggerReport',
                     'id' : 'aw4261a98a',
                     'event' : 'show',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            view032.eventHandlers = eventHandlers166;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.ChangePassword', false);
               trackTimer.startTracking();
            }

            var view033 = new View({
               'resource' : 'PlatformChangePasswordForm',
               'id' : 'Platform.ChangePassword',
               'label' : MessageService.createStaticMessage('Change Password'),
            });
            ui001.addChild( view033 );


            var container074 = new Container({
               'cssClass' : 'changePasswordForm',
               'artifactId' : 'Platform.ChangePassword_container_0',
               'id' : 'awf7c2a2a',
            });
            view033.addChild( container074 );


            var text170 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.ChangePassword_container_0_errorMsg',
               'id' : 'aw3ed16fe1',
            });
            container074.addChild( text170 );


            var text171 = new Text({
               'resourceAttribute' : 'infoMsg',
               'cssClass' : 'infoMsg',
               'editable' : false,
               'artifactId' : 'Platform.ChangePassword_container_0_infoMsg',
               'id' : 'awe28ebedd',
            });
            container074.addChild( text171 );


            var text172 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'currentpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_currentpassword',
               'id' : 'aw7df0b045',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Current password'),
            });
            container074.addChild( text172 );

            var eventHandlers167 = [
               {
                     'method' : 'hidePasswordField',
                     'artifactId' : 'Platform.ChangePassword_container_0_currentpassword_eventHandlers_render_hidePasswordField',
                     'id' : 'aw27f3eacb',
                     'event' : 'render',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            text172.eventHandlers = eventHandlers167;

            var text173 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'newpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_newpassword',
               'id' : 'aw618d08b5',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('New password'),
            });
            container074.addChild( text173 );


            var text174 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'confirmnewpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_confirmnewpassword',
               'id' : 'awd274537a',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Confirm password'),
            });
            container074.addChild( text174 );


            var button074 = new Button({
               'artifactId' : 'Platform.ChangePassword_Cancel_button',
               'id' : 'aw96c63135',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers168 = [
               {
                     'method' : 'cancelPasswordClickHandler',
                     'artifactId' : 'Platform.ChangePassword_Cancel_button_eventHandlers_click_cancelPasswordClickHandler',
                     'id' : 'aw7492b621',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button074.eventHandlers = eventHandlers168;
            container074.addChild( button074 );


            var button075 = new Button({
               'artifactId' : 'Platform.ChangePassword_Change_button',
               'id' : 'aw5cd0477f',
               'label' : MessageService.createStaticMessage('Change'),
               'primary' : 'true',
            });
            var eventHandlers169 = [
               {
                     'method' : 'changePasswordClickHandler',
                     'artifactId' : 'Platform.ChangePassword_Change_button_eventHandlers_click_changePasswordClickHandler',
                     'id' : 'awfdba8feb',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button075.eventHandlers = eventHandlers169;
            container074.addChild( button075 );

            var eventHandlers170 = [
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
            view033.eventHandlers = eventHandlers170;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.RetrieveOldPassword', false);
               trackTimer.startTracking();
            }

            var view034 = new View({
               'resource' : 'PlatformChangePasswordForm',
               'showHeader' : false,
               'showOverflow' : false,
               'id' : 'Platform.RetrieveOldPassword',
               'label' : MessageService.createStaticMessage('Recover App Data'),
            });
            ui001.addChild( view034 );


            var container075 = new Container({
               'cssClass' : 'changePasswordForm',
               'artifactId' : 'Platform.RetrieveOldPassword_container_0',
               'id' : 'awecdef66d',
            });
            view034.addChild( container075 );


            var text175 = new Text({
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_Enterthepasswordt',
               'id' : 'aw14ebf03b',
               'value' : MessageService.createStaticMessage('Enter the password that you last used to log in to the app. If you do not have this password, you must reset the app before you can log in.'),
            });
            container075.addChild( text175 );


            var text176 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_errorMsg',
               'id' : 'aw9574c917',
            });
            container075.addChild( text176 );


            var text177 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'currentpassword',
               'editable' : true,
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_currentpassword',
               'id' : 'aw97b6c3b7',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Previous password'),
            });
            container075.addChild( text177 );


            var button076 = new Button({
               'artifactId' : 'Platform.RetrieveOldPassword_Recover_button',
               'id' : 'aw3a0ff2',
               'label' : MessageService.createStaticMessage('Recover'),
               'primary' : 'true',
            });
            var eventHandlers171 = [
               {
                     'method' : 'recoverOldPasswordClickHandler',
                     'artifactId' : 'Platform.RetrieveOldPassword_Recover_button_eventHandlers_click_recoverOldPasswordClickHandler',
                     'id' : 'awecb18d1c',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button076.eventHandlers = eventHandlers171;
            container075.addChild( button076 );


            var button077 = new Button({
               'artifactId' : 'Platform.RetrieveOldPassword_Reset_button',
               'id' : 'aw8bb551dc',
               'label' : MessageService.createStaticMessage('Reset'),
            });
            var eventHandlers172 = [
               {
                     'method' : 'resetStorageClickHandler',
                     'artifactId' : 'Platform.RetrieveOldPassword_Reset_button_eventHandlers_click_resetStorageClickHandler',
                     'id' : 'awfe7a73d2',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button077.eventHandlers = eventHandlers172;
            container075.addChild( button077 );

            var eventHandlers173 = [
               {
                     'method' : 'initializeRetrieveOldPasswordView',
                     'artifactId' : 'Platform.RetrieveOldPassword_eventHandlers_show_initializeRetrieveOldPasswordView',
                     'id' : 'aw26f17c5a',
                     'event' : 'show',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            view034.eventHandlers = eventHandlers173;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog028 = new Dialog({
               'closeOnBackgroundClick' : 'true',
               'id' : 'Platform.ConfirmResetDataStore',
            });
            ui001.addChild( dialog028 );


            var container076 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmResetDataStore_container_0',
               'id' : 'awacb7e535',
            });
            dialog028.addChild( container076 );


            var text178 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmResetDataStore_container_0_WarningAllappdat',
               'id' : 'aw68bdf3e8',
               'value' : MessageService.createStaticMessage('Warning! All app data on the device will be cleared. Any data that has not been sent to the server will be lost.'),
            });
            container076.addChild( text178 );


            var container077 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmResetDataStore_container_1',
               'id' : 'awdbb0d5a3',
            });
            dialog028.addChild( container077 );


            var button078 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmResetDataStore_Continue_button',
               'id' : 'awba645d10',
               'label' : MessageService.createStaticMessage('Continue'),
            });
            var eventHandlers174 = [
               {
                     'method' : 'resetDataStoreClickHandler',
                     'artifactId' : 'Platform.ConfirmResetDataStore_Continue_button_eventHandlers_click_resetDataStoreClickHandler',
                     'id' : 'aw5074e6c8',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button078.eventHandlers = eventHandlers174;
            container077.addChild( button078 );


            var button079 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmResetDataStore_Cancel_button',
               'id' : 'aw50474341',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers175 = [
               {
                     'method' : 'cancelResetDataStoreClickHandler',
                     'artifactId' : 'Platform.ConfirmResetDataStore_Cancel_button_eventHandlers_click_cancelResetDataStoreClickHandler',
                     'id' : 'awda7121b8',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button079.eventHandlers = eventHandlers175;
            container077.addChild( button079 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.TimeTrackReport', false);
               trackTimer.startTracking();
            }

            var view035 = new View({
               'cssClass' : 'loggerReport',
               'scrollDir' : 'vh',
               'id' : 'Platform.TimeTrackReport',
               'label' : MessageService.createStaticMessage('Performance Data'),
            });
            ui001.addChild( view035 );

            var requiredResources036 = {
               'timeTrack' : {
                  'artifactId' : 'Platform.TimeTrackReport_timeTrack',
                  'id' : 'aw8d707cee',
               },
            };
            view035.addRequiredResources( requiredResources036 );

            var actions013 = new Actions({
               'artifactId' : 'Platform.TimeTrackReport_actions',
               'id' : 'aw9d9a4864',
            });
            view035.addChild( actions013 );


            var action034 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_EnablePerformanceTracking_action',
               'id' : 'aw34736a63',
               'label' : MessageService.createStaticMessage('Enable Performance Tracking'),
            });
            actions013.addChild( action034 );

            var eventHandlers176 = [
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
            action034.eventHandlers = eventHandlers176;

            var action035 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_ClearPerformanceData_action',
               'id' : 'aw1edf54cf',
               'label' : MessageService.createStaticMessage('Clear Performance Data'),
            });
            actions013.addChild( action035 );

            var eventHandlers177 = [
               {
                     'method' : 'clear',
                     'artifactId' : 'Platform.TimeTrackReport_ClearPerformanceData_action_eventHandlers_click_clear',
                     'id' : 'aw85273d1b',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action035.eventHandlers = eventHandlers177;

            var action036 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_EmailReport_action',
               'id' : 'aw6ff8fae1',
               'label' : MessageService.createStaticMessage('Email Report'),
            });
            actions013.addChild( action036 );

            var eventHandlers178 = [
               {
                     'method' : 'emailCurrent',
                     'artifactId' : 'Platform.TimeTrackReport_EmailReport_action_eventHandlers_click_emailCurrent',
                     'id' : 'awc00583a0',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action036.eventHandlers = eventHandlers178;
            var eventHandlers179 = [
               {
                     'method' : 'renderTT',
                     'artifactId' : 'Platform.TimeTrackReport_eventHandlers_show_renderTT',
                     'id' : 'awca05a315',
                     'event' : 'show',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            view035.eventHandlers = eventHandlers179;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog029 = new Dialog({
               'closeOnBackgroundClick' : 'true',
               'id' : 'Platform.ListLongPressDialog',
            });
            ui001.addChild( dialog029 );



            var listItemTemplate028 = new ListItemTemplate({
               'cssClass' : 'dialogListItem textappearance-medium',
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_listItemTemplate',
               'id' : 'awefd72fd8',
            });

            var listtext078 = new ListText({
               'resourceAttribute' : 'label',
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_label',
               'id' : 'awe2e495b2',
            });
            listItemTemplate028.addChild( listtext078 );



            var list028 = new List({
               'resource' : 'PlatformLongPressResource',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate028,
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_list',
               'id' : 'aw64ff84d9',
               'queryBase' : '',
            });
            dialog029.addChild( list028 );


            var dialog030 = new Dialog({
               'id' : 'Platform.LoadingAdditionalData',
            });
            ui001.addChild( dialog030 );


            var container078 = new Container({
               'artifactId' : 'Platform.LoadingAdditionalData_container_0',
               'id' : 'aw48b509d9',
            });
            dialog030.addChild( container078 );


            var text179 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadingAdditionalData_container_0_Downloadinglookupd',
               'id' : 'aw4cec47c0',
               'value' : MessageService.createStaticMessage('Downloading lookup data.'),
            });
            container078.addChild( text179 );


            var button080 = new Button({
               'artifactId' : 'Platform.LoadingAdditionalData_Cancel_button',
               'id' : 'awb30b5f0',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers180 = [
               {
                     'method' : 'cancelADDownload',
                     'artifactId' : 'Platform.LoadingAdditionalData_Cancel_button_eventHandlers_click_cancelADDownload',
                     'id' : 'awc41dac4c',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button080.eventHandlers = eventHandlers180;
            container078.addChild( button080 );


            var dialog031 = new Dialog({
               'id' : 'Platform.AdditionalDataNoConn',
            });
            ui001.addChild( dialog031 );


            var container079 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.AdditionalDataNoConn_container_0',
               'id' : 'aw666da461',
            });
            dialog031.addChild( container079 );


            var text180 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.AdditionalDataNoConn_container_0_Lookupdatacouldno',
               'id' : 'aw96b90fd8',
               'value' : MessageService.createStaticMessage('Lookup data could not be downloaded. Go to Settings > Refresh Lookup Data when you are online.'),
            });
            container079.addChild( text180 );


            var container080 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.AdditionalDataNoConn_container_1',
               'id' : 'aw116a94f7',
            });
            dialog031.addChild( container080 );


            var button081 = new Button({
               'artifactId' : 'Platform.AdditionalDataNoConn_OK_button',
               'id' : 'aw9b370278',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers181 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.AdditionalDataNoConn_OK_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw108159b3',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button081.eventHandlers = eventHandlers181;
            container080.addChild( button081 );


            var dialog032 = new Dialog({
               'id' : 'Platform.ConfirmReloadWorkList',
            });
            ui001.addChild( dialog032 );


            var container081 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_0',
               'id' : 'aw2054aa9e',
            });
            dialog032.addChild( container081 );


            var text181 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_0_Doyouwanttoclose',
               'id' : 'aw83f81a4b',
               'value' : MessageService.createStaticMessage('Reloading the work list takes time if you are downloading large amounts of data.  Are you sure that you want to continue?'),
            });
            container081.addChild( text181 );


            var container082 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_1',
               'id' : 'aw57539a08',
            });
            dialog032.addChild( container082 );


            var button082 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmReloadWorkList_Yes_button',
               'id' : 'aw5bc89627',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers182 = [
               {
                     'method' : 'reloadConfirmed',
                     'artifactId' : 'Platform.ConfirmReloadWorkList_Yes_button_eventHandlers_click_processDialog',
                     'id' : 'awafdb701f',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button082.eventHandlers = eventHandlers182;
            container082.addChild( button082 );


            var button083 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.ConfirmReloadWorkList_No_button',
               'id' : 'aw4487e9e7',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers183 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.ConfirmReloadWorkList_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw56d1743',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button083.eventHandlers = eventHandlers183;
            container082.addChild( button083 );


            var dialog033 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.ReloadingCurrentWorklist',
            });
            ui001.addChild( dialog033 );


            var container083 = new Container({
               'cssClass' : 'mblSimpleMessageText',
               'artifactId' : 'Platform.ReloadCurrentWorklist_container_0',
               'id' : 'awce0c0b72',
            });
            dialog033.addChild( container083 );


            var text182 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.ReloadCurrentWorklist_container_0_progressMsg',
               'id' : 'awaa894933',
            });
            container083.addChild( text182 );


            var dialog034 = new Dialog({
               'id' : 'Platform.AdditionalDataFailed',
            });
            ui001.addChild( dialog034 );


            var container084 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.AdditionalDataFailed.container',
               'id' : 'aw275627fb',
            });
            dialog034.addChild( container084 );


            var text183 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.AdditionalDataFailed.text',
               'id' : 'awb25e5b66',
               'value' : MessageService.createStaticMessage('Lookup data could not be downloaded. If you are connected, go to Settings > Refresh Lookup Data.'),
            });
            container084.addChild( text183 );


            var container085 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.AdditionalDataFailed.container2',
               'id' : 'aw309dc3be',
            });
            dialog034.addChild( container085 );


            var button084 = new Button({
               'artifactId' : 'Platform.AdditionalDataFailed.button',
               'id' : 'aw39111677',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers184 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.AdditionalDataFailed.eventHandler',
                     'id' : 'awacbc5440',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button084.eventHandlers = eventHandlers184;
            container085.addChild( button084 );


            var dialog035 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.LoadingSystemData',
            });
            ui001.addChild( dialog035 );


            var container086 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadingSystemData_container_0',
               'id' : 'aw13d3cc6a',
            });
            dialog035.addChild( container086 );


            var text184 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadingSystemData_container_0_Downloadingsystemd',
               'id' : 'awfc1b5f79',
               'value' : MessageService.createStaticMessage('Downloading system data.'),
            });
            container086.addChild( text184 );


            var text185 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.LoadingSystemData_container_0_progressMsg',
               'id' : 'aw635d9968',
            });
            container086.addChild( text185 );


            var dialog036 = new Dialog({
               'id' : 'Platform.LoadAdditionalDataYesNo',
            });
            ui001.addChild( dialog036 );


            var container087 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0',
               'id' : 'aw22834650',
            });
            dialog036.addChild( container087 );


            var text186 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Thelookupdatafor',
               'id' : 'aw89be3f27',
               'value' : MessageService.createStaticMessage('The lookup data for this app must be downloaded. Download it now or later?'),
            });
            container087.addChild( text186 );

            var eventHandlers185 = [
               {
                     'method' : 'theLookupdataText',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Thelookupdatafor_eventHandlers_render_setAdditionalDownloadText',
                     'id' : 'aw9051ca24',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text186.eventHandlers = eventHandlers185;

            var text187 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Retrylookupdatafor',
               'id' : 'awb287d1cc',
               'value' : MessageService.createStaticMessage('Lookup data was partially downloaded. Click Retry to download the remaining lookup data. Click Reset to refresh all of the lookup data. Click Close if you are through downloading lookup data.'),
            });
            container087.addChild( text187 );

            var eventHandlers186 = [
               {
                     'method' : 'retrylookupdataText',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Retrylookupdatafor_eventHandlers_render_setAdditionalDownloadText',
                     'id' : 'aw5ad2ed31',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text187.eventHandlers = eventHandlers186;

            var text188 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Whenrunninginabr',
               'id' : 'awb757e4d5',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per lookup.'),
            });
            container087.addChild( text188 );

            var eventHandlers187 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'awb7d271e9',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text188.eventHandlers = eventHandlers187;

            var container088 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_1',
               'id' : 'aw558476c6',
            });
            dialog036.addChild( container088 );


            var button085 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Later_button',
               'id' : 'awa2501fe3',
               'label' : MessageService.createStaticMessage('Later'),
            });
            var eventHandlers188 = [
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
            button085.eventHandlers = eventHandlers188;
            container088.addChild( button085 );


            var button086 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Now_button',
               'id' : 'aw35a14c11',
               'label' : MessageService.createStaticMessage('Now'),
            });
            var eventHandlers189 = [
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
            button086.eventHandlers = eventHandlers189;
            container088.addChild( button086 );


            var button087 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Retry_button',
               'id' : 'aw626b616d',
               'label' : MessageService.createStaticMessage('Retry'),
            });
            var eventHandlers190 = [
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
            button087.eventHandlers = eventHandlers190;
            container088.addChild( button087 );


            var dialog037 = new Dialog({
               'id' : 'Platform.LoadAdditionalDataDeltaDownload',
            });
            ui001.addChild( dialog037 );


            var container089 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0',
               'id' : 'aw79883531',
            });
            dialog037.addChild( container089 );


            var text189 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Thelookupdatafor',
               'id' : 'aw3d94f20f',
               'value' : MessageService.createStaticMessage('Click Changes to download only lookup data changes.'),
            });
            container089.addChild( text189 );


            var text190 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Retrylookupdatafor',
               'id' : 'awa0f7541',
               'value' : MessageService.createStaticMessage('Click All to download all the lookup data.'),
            });
            container089.addChild( text190 );


            var text191 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_cancel',
               'id' : 'aw62270e4c',
               'value' : MessageService.createStaticMessage('Click Cancel to cancel the lookup download.'),
            });
            container089.addChild( text191 );


            var text192 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_action',
               'id' : 'aw73fd47ac',
               'value' : MessageService.createStaticMessage('Which refresh do you want to perform?'),
            });
            container089.addChild( text192 );


            var text193 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Whenrunninginabr',
               'id' : 'aw37d29fd',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per lookup.'),
            });
            container089.addChild( text193 );

            var eventHandlers191 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'aw1edf10f3',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text193.eventHandlers = eventHandlers191;

            var container090 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_1',
               'id' : 'awe8f05a7',
            });
            dialog037.addChild( container090 );


            var button088 = new Button({
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Cancel_button',
               'id' : 'awb2f881ae',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers192 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'awcaa29f5a',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button088.eventHandlers = eventHandlers192;
            container090.addChild( button088 );


            var button089 = new Button({
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_RefreshAll_button',
               'id' : 'aw8ab2882',
               'label' : MessageService.createStaticMessage('All'),
            });
            var eventHandlers193 = [
               {
                     'method' : 'confirmADDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Now_button_eventHandlers_click_confirmADDownload',
                     'id' : 'awa5526bd4',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button089.eventHandlers = eventHandlers193;
            container090.addChild( button089 );


            var button090 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_RefreshChanges_button',
               'id' : 'aw9c0cf49a',
               'label' : MessageService.createStaticMessage('Changes'),
            });
            var eventHandlers194 = [
               {
                     'method' : 'confirmADDeltaDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Later_button_eventHandlers_click_confirmADDeltaDownload',
                     'id' : 'aw46619626',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button090.eventHandlers = eventHandlers194;
            container090.addChild( button090 );


            var dialog038 = new Dialog({
               'id' : 'Platform.LoadSystemDataDeltaDownload',
            });
            ui001.addChild( dialog038 );


            var container091 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0',
               'id' : 'aw47beed1c',
            });
            dialog038.addChild( container091 );


            var text194 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Thelookupdatafor',
               'id' : 'aw682ebd2f',
               'value' : MessageService.createStaticMessage('Click Changes to download only the system data changes.'),
            });
            container091.addChild( text194 );


            var text195 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Retrylookupdatafor',
               'id' : 'aw79e85858',
               'value' : MessageService.createStaticMessage('Click All to download all the system data.'),
            });
            container091.addChild( text195 );


            var text196 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_cancel',
               'id' : 'awcb50ae6',
               'value' : MessageService.createStaticMessage('Click Cancel to cancel the system download.'),
            });
            container091.addChild( text196 );


            var text197 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_action',
               'id' : 'aw1d6f4306',
               'value' : MessageService.createStaticMessage('Which refresh do you want to perform?'),
            });
            container091.addChild( text197 );


            var text198 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Whenrunninginabr',
               'id' : 'aw56c766dd',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per System.'),
            });
            container091.addChild( text198 );

            var eventHandlers195 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'aw37b2ac2a',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text198.eventHandlers = eventHandlers195;

            var container092 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_1',
               'id' : 'aw30b9dd8a',
            });
            dialog038.addChild( container092 );


            var button091 = new Button({
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Cancel_button',
               'id' : 'aw1adabf91',
               'label' : MessageService.createStaticMessage('cancel'),
            });
            var eventHandlers196 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw2569598a',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button091.eventHandlers = eventHandlers196;
            container092.addChild( button091 );


            var button092 = new Button({
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_RefreshAll_button',
               'id' : 'awf1a96515',
               'label' : MessageService.createStaticMessage('All'),
            });
            var eventHandlers197 = [
               {
                     'method' : 'downloadSystemData',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Now_button_eventHandlers_click_confirmdownloadSystemData',
                     'id' : 'aw8d600b10',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button092.eventHandlers = eventHandlers197;
            container092.addChild( button092 );


            var button093 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_RefreshChanges_button',
               'id' : 'aw328e1b2e',
               'label' : MessageService.createStaticMessage('Changes'),
            });
            var eventHandlers198 = [
               {
                     'method' : 'confirmSystemDataDeltaDownload',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Later_button_eventHandlers_click_confirmSystemDataDeltaDownload',
                     'id' : 'awbd23e928',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button093.eventHandlers = eventHandlers198;
            container092.addChild( button093 );


            var dialog039 = new Dialog({
               'id' : 'Platform.ExitApplicationPrompt',
            });
            ui001.addChild( dialog039 );


            var container093 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ExitApplicationPrompt_container_0',
               'id' : 'aw71d2ddca',
            });
            dialog039.addChild( container093 );


            var text199 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ExitApplicationPrompt_container_0_Doyouwanttoclose',
               'id' : 'aw4e0184c3',
               'value' : MessageService.createStaticMessage('Do you want to close the app?'),
            });
            container093.addChild( text199 );


            var container094 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ExitApplicationPrompt_container_1',
               'id' : 'aw6d5ed5c',
            });
            dialog039.addChild( container094 );


            var button094 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ExitApplicationPrompt_Yes_button',
               'id' : 'aw3bff816',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers199 = [
               {
                     'method' : 'processDialog',
                     'artifactId' : 'Platform.ExitApplicationPrompt_Yes_button_eventHandlers_click_processDialog',
                     'id' : 'awfa220200',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button094.eventHandlers = eventHandlers199;
            container094.addChild( button094 );


            var button095 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.ExitApplicationPrompt_No_button',
               'id' : 'aw5ba5c9da',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers200 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.ExitApplicationPrompt_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw5256cc3',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button095.eventHandlers = eventHandlers200;
            container094.addChild( button095 );


            var dialog040 = new Dialog({
               'id' : 'Platform.LogOutPrompt',
            });
            ui001.addChild( dialog040 );


            var container095 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LogOutPrompt_container_0',
               'id' : 'awcf20d41b',
            });
            dialog040.addChild( container095 );


            var text200 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LogOutPrompt_container_0_Doyouwanttologo',
               'id' : 'aw15a96005',
               'value' : MessageService.createStaticMessage('Do you want to log out of the app?'),
            });
            container095.addChild( text200 );


            var container096 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LogOutPrompt_container_1',
               'id' : 'awb827e48d',
            });
            dialog040.addChild( container096 );


            var button096 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.LogOutPrompt_No_button',
               'id' : 'awfbbbd446',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers201 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.LogOutPrompt_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw364ad2c7',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button096.eventHandlers = eventHandlers201;
            container096.addChild( button096 );


            var button097 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LogOutPrompt_Yes_button',
               'id' : 'awfaa63964',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers202 = [
               {
                     'method' : 'logoutDialog',
                     'artifactId' : 'Platform.LogOutPrompt_Yes_button_eventHandlers_click_logoutDialog',
                     'id' : 'aw82db52a6',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button097.eventHandlers = eventHandlers202;
            container096.addChild( button097 );


            var dialog041 = new Dialog({
               'cssClass' : 'dialogDurationLookup',
               'resource' : 'PlatformDateLookupResource',
               'id' : 'Platform.DurationLookup',
               'label' : MessageService.createStaticMessage('Change Duration'),
            });
            ui001.addChild( dialog041 );

            var eventHandlers203 = [
               {
                     'method' : 'initLookup',
                     'artifactId' : 'Platform.DurationLookup_eventHandlers_show_initLookup',
                     'id' : 'aw2898d5b1',
                     'event' : 'show',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            dialog041.eventHandlers = eventHandlers203;

            var container097 = new Container({
               'artifactId' : 'Platform.DurationLookup_container_0',
               'id' : 'awc7b6d6e2',
            });
            dialog041.addChild( container097 );


            var durationpicker001 = new DurationPicker({
               'artifactId' : 'Platform.DurationLookup_durationpicker_0',
               'id' : 'awbdafea4f',
            });
            container097.addChild( durationpicker001 );


            var container098 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DurationLookup_container_1',
               'id' : 'awb0b1e674',
            });
            dialog041.addChild( container098 );


            var button098 = new Button({
               'artifactId' : 'Platform.DurationLookup_Cancel_button',
               'id' : 'aw21ee1a8e',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers204 = [
               {
                     'method' : 'Cancel',
                     'artifactId' : 'Platform.DurationLookup_Cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw7fc46e19',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button098.eventHandlers = eventHandlers204;
            container098.addChild( button098 );


            var button099 = new Button({
               'artifactId' : 'Platform.DurationLookup_Clear_button',
               'id' : 'awab5a917f',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers205 = [
               {
                     'method' : 'Clear',
                     'artifactId' : 'Platform.DurationLookup_Clear_button_eventHandlers_click_Clear',
                     'id' : 'aw4d23bc8f',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button099.eventHandlers = eventHandlers205;
            container098.addChild( button099 );


            var button100 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DurationLookup_OK_button',
               'id' : 'aw7a6484f6',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers206 = [
               {
                     'method' : 'SetSelection',
                     'artifactId' : 'Platform.DurationLookup_OK_button_eventHandlers_click_SetSelection',
                     'id' : 'aweb8ce178',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button100.eventHandlers = eventHandlers206;
            container098.addChild( button100 );


            var dialog042 = new Dialog({
               'id' : 'Platform.CancelDownload',
            });
            ui001.addChild( dialog042 );


            var container099 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.CancelDownload_container_0',
               'id' : 'awf839de44',
            });
            dialog042.addChild( container099 );


            var text201 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.CancelDownload_container_0_Doyouwanttostop',
               'id' : 'awdb2316b3',
               'value' : MessageService.createStaticMessage('Do you want to stop downloading work list records?'),
            });
            container099.addChild( text201 );


            var container100 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.CancelDownload_container_1',
               'id' : 'aw8f3eeed2',
            });
            dialog042.addChild( container100 );


            var button101 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.CancelDownload_Yes_button',
               'id' : 'aw3b97968f',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers207 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.CancelDownload_Yes_button_eventHandlers_click_cancelDownload',
                     'id' : 'awadc6ff1d',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button101.eventHandlers = eventHandlers207;
            container100.addChild( button101 );


            var button102 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.CancelDownload_No_button',
               'id' : 'awab099478',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers208 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.CancelDownload_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw9ceda703',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button102.eventHandlers = eventHandlers208;
            container100.addChild( button102 );


            var dialog043 = new Dialog({
               'id' : 'Platform.ConfirmClearChanges',
            });
            ui001.addChild( dialog043 );


            var container101 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmClearChanges_container_0',
               'id' : 'aw3965500f',
            });
            dialog043.addChild( container101 );


            var text202 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmClearChanges_container_0_Changesthathaveno',
               'id' : 'aw66e22f87',
               'value' : MessageService.createStaticMessage('Changes that have not been sent to the server will be discarded.'),
            });
            container101.addChild( text202 );


            var container102 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmClearChanges_container_1',
               'id' : 'aw4e626099',
            });
            dialog043.addChild( container102 );


            var button103 = new Button({
               'artifactId' : 'Platform.ConfirmClearChanges_Cancel_button',
               'id' : 'awcee54fe9',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers209 = [
               {
                     'method' : 'cancelClearChanges',
                     'artifactId' : 'Platform.ConfirmClearChanges_Cancel_button_eventHandlers_click_cancelClearChanges',
                     'id' : 'awb208eba2',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button103.eventHandlers = eventHandlers209;
            container102.addChild( button103 );


            var button104 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.ConfirmClearChanges_OK_button',
               'id' : 'aw8a3b05f2',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers210 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'Platform.ConfirmClearChanges_OK_button_eventHandlers_click_doClearChanges',
                     'id' : 'aw32f778d4',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button104.eventHandlers = eventHandlers210;
            container102.addChild( button104 );


            var dialog044 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.DownloadCurrentWorklist',
            });
            ui001.addChild( dialog044 );


            var container103 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_0',
               'id' : 'awfd35c5df',
            });
            dialog044.addChild( container103 );


            var text203 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_0_progressMsg',
               'id' : 'aw3c55ae56',
            });
            container103.addChild( text203 );


            var container104 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_1',
               'id' : 'aw8a32f549',
            });
            dialog044.addChild( container104 );


            var button105 = new Button({
               'artifactId' : 'Platform.DownloadCurrentWorklist_Cancel_button',
               'id' : 'awcfb8296d',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers211 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.DownloadCurrentWorklist_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'aw5541afbb',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button105.eventHandlers = eventHandlers211;
            container104.addChild( button105 );


            var dialog045 = new Dialog({
               'id' : 'Platform.NoRecordFoundDialog',
            });
            ui001.addChild( dialog045 );


            var container105 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.NoRecordFoundDialog_container_0',
               'id' : 'awa73a1c57',
            });
            dialog045.addChild( container105 );


            var text204 = new Text({
               'artifactId' : 'Platform.NoRecordFoundDialog_container_0_Stopthetimeronwo',
               'id' : 'awd6cf8f25',
               'value' : MessageService.createStaticMessage('No record was found. If you are working offline, try downloading worklist when online to access your workorder'),
            });
            container105.addChild( text204 );


            var container106 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.NoRecordFoundDialog_container_1',
               'id' : 'awd03d2cc1',
            });
            dialog045.addChild( container106 );


            var button106 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.NoRecordFoundDialog_OK_button',
               'id' : 'aw3de0cad2',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers212 = [
               {
                     'method' : 'closeNoRecord',
                     'artifactId' : 'Platform.NoRecordFoundDialog_OK_button_multiple',
                     'id' : 'aw41a4b840',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button106.eventHandlers = eventHandlers212;
            container106.addChild( button106 );


            var dialog046 = new Dialog({
               'id' : 'Platform.MultiplePushNotificationDialog',
            });
            ui001.addChild( dialog046 );


            var container107 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_0',
               'id' : 'aw7b338e5e',
            });
            dialog046.addChild( container107 );


            var text205 = new Text({
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_0_Stopthetimeronwo',
               'id' : 'aw72fc5fcc',
               'value' : MessageService.createStaticMessage('Multiple notification were recieved. Go to notification view to access them.'),
            });
            container107.addChild( text205 );


            var container108 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_1',
               'id' : 'awc34bec8',
            });
            dialog046.addChild( container108 );


            var button107 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_OK_button',
               'id' : 'awc2c9277e',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers213 = [
               {
                     'method' : 'close',
                     'artifactId' : 'Platform.MultiplePushNotificationDialog_OK_button_multiple',
                     'id' : 'awe5002e8b',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button107.eventHandlers = eventHandlers213;
            container108.addChild( button107 );


            var dialog047 = new Dialog({
               'resource' : 'PlatformTempPushNotification',
               'id' : 'Platform.PushNotificationDialog',
            });
            ui001.addChild( dialog047 );


            var container109 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.PushNotificationDialog_container_0',
               'id' : 'awb0eedc9',
            });
            dialog047.addChild( container109 );


            var text206 = new Text({
               'artifactId' : 'Platform.PushNotificationDialog_container_0_Stopthetimeronwo',
               'id' : 'aw35fc28ff',
               'value' : MessageService.createDynamicMessage('{0} {1} {2}', 'platform.handlers.PushNotificationDialogHandler', 'resolveMessageProps'),
               'resolverFunction' : 'resolveMessageProps',
               'resolverClass' : 'platform.handlers.PushNotificationDialogHandler',
            });
            container109.addChild( text206 );


            var container110 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.PushNotificationDialog_container_1',
               'id' : 'aw7c09dd5f',
            });
            dialog047.addChild( container110 );


            var button108 = new Button({
               'artifactId' : 'Platform.PushNotificationDialog_Open_button',
               'id' : 'aw4151795',
               'label' : MessageService.createStaticMessage('Open'),
            });
            var eventHandlers214 = [
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
            button108.eventHandlers = eventHandlers214;
            container110.addChild( button108 );


            var button109 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.PushNotificationDialog_OK_button',
               'id' : 'aw3d64070a',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers215 = [
               {
                     'method' : 'close',
                     'artifactId' : 'Platform.PushNotificationDialog_OK_button_eventHandlers_click_WOStartedDialogYesClickHandler',
                     'id' : 'aw40f88c32',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button109.eventHandlers = eventHandlers215;
            container110.addChild( button109 );


            var dialog048 = new Dialog({
               'resource' : 'PlatformDemoModeResource',
               'id' : 'Platform.DemoDownloadWarning',
            });
            ui001.addChild( dialog048 );


            var container111 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DemoDownloadWarning_container_0',
               'id' : 'awf840ab79',
            });
            dialog048.addChild( container111 );


            var text207 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.DemoDownloadWarning_container_0_progressMsg',
               'id' : 'awf3cb0903',
               'value' : MessageService.createStaticMessage('MessageText'),
            });
            container111.addChild( text207 );


            var container112 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DemoDownloadWarning_container_1',
               'id' : 'aw8f479bef',
            });
            dialog048.addChild( container112 );


            var button110 = new Button({
               'artifactId' : 'Platform.DemoDownloadWarning_Continue_button',
               'id' : 'aw2659f8c8',
               'label' : MessageService.createStaticMessage('Continue'),
            });
            var eventHandlers216 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'Platform.DemoDownloadWarning_Continue_button_eventHandlers_click_doClearChanges',
                     'id' : 'awbdf1879f',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button110.eventHandlers = eventHandlers216;
            container112.addChild( button110 );


            var button111 = new Button({
               'artifactId' : 'Platform.DemoDownloadWarning_Cancel_button',
               'id' : 'aw9def7b28',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers217 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.DemoDownloadWarning_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'awd4960a86',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button111.eventHandlers = eventHandlers217;
            container112.addChild( button111 );


            var dialog049 = new Dialog({
               'resource' : 'PlatformEsigResource',
               'id' : 'Platform.EsigLoginView',
               'label' : MessageService.createStaticMessage('Electronic Signature Authentication'),
            });
            ui001.addChild( dialog049 );

            var requiredResources037 = {
               'attemptResultDomain' : {
                  'enableFeatureByProperty' : 'esig.enabled',
                  'artifactId' : 'Platform.EsigLoginView_attemptResultDomain',
                  'id' : 'aw3c53638b',
               },
            };
            dialog049.addRequiredResources( requiredResources037 );

            var container113 = new Container({
               'artifactId' : 'Platform.EsigLoginView_container_0',
               'id' : 'aw44fd9611',
            });
            dialog049.addChild( container113 );


            var group037 = new Group({
               'artifactId' : 'Platform.EsigLoginView_group_0',
               'id' : 'aw7bf6135f',
            });
            container113.addChild( group037 );


            var groupitem100 = new GroupItem({
               'artifactId' : 'Platform.EsigLoginView_group_0_groupitem_1',
               'id' : 'aw209714b9',
            });
            group037.addChild( groupitem100 );


            var text208 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'userName',
               'cssClass' : 'loginUsername',
               'editable' : false,
               'artifactId' : 'Platform.EsigLoginView_container_0_username',
               'id' : 'aw15aabb30',
               'label' : MessageService.createStaticMessage('User Name'),
               'placeHolder' : MessageService.createStaticMessage('User name'),
            });
            groupitem100.addChild( text208 );


            var text209 = new Text({
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
            groupitem100.addChild( text209 );


            var text210 = new Text({
               'resourceAttribute' : 'reason',
               'cssClass' : 'loginUsername',
               'editable' : true,
               'artifactId' : 'Platform.EsigLoginView_container_0_reason',
               'id' : 'aw6ccf562d',
               'label' : MessageService.createStaticMessage('Reason for Change'),
               'placeHolder' : MessageService.createStaticMessage('Reason for Change'),
               'required' : true,
            });
            groupitem100.addChild( text210 );


            var container114 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.EsigLoginView_footer',
               'id' : 'aw68d6d11c',
            });
            dialog049.addChild( container114 );


            var button112 = new Button({
               'artifactId' : 'Platform.EsigLoginView_Cancel_button',
               'id' : 'aw68a36a2b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers218 = [
               {
                     'method' : 'cancelEsig',
                     'artifactId' : 'Platform.EsigLoginView_Cancel_button_eventHandlers_click_cancelEsig',
                     'id' : 'awdba9800d',
                     'event' : 'click',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            button112.eventHandlers = eventHandlers218;
            container114.addChild( button112 );


            var button113 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.EsigLoginView_Save_button',
               'id' : 'awef41b275',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers219 = [
               {
                     'method' : 'submitEsig',
                     'artifactId' : 'Platform.EsigLoginView_Save_button_eventHandlers_click_submitEsig',
                     'id' : 'awa9f3497f',
                     'event' : 'click',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            button113.eventHandlers = eventHandlers219;
            container114.addChild( button113 );

            var eventHandlers220 = [
               {
                     'method' : 'initializeEsig',
                     'artifactId' : 'Platform.EsigLoginView_eventHandlers_show_initializeEsig',
                     'id' : 'aw681e6384',
                     'event' : 'show',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            dialog049.eventHandlers = eventHandlers220;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Signature', false);
               trackTimer.startTracking();
            }

            var view036 = new View({
               'id' : 'Platform.Signature',
               'label' : MessageService.createStaticMessage('Capture Real Signature'),
            });
            ui001.addChild( view036 );

            var requiredResources038 = {
               'PlatformAttachmentInfoResource' : {
                  'artifactId' : 'Platform.Signature_PlatformAttachmentInfoResource',
                  'id' : 'aw8cc44736',
               },
            };
            view036.addRequiredResources( requiredResources038 );

            var footer007 = new Footer({
               'artifactId' : 'Platform.Signature_footer',
               'id' : 'aw16b9ee39',
            });
            view036.addChild( footer007 );


            var button114 = new Button({
               'artifactId' : 'Platform.Signature_Cancel_button',
               'id' : 'aw9088fe5b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers221 = [
               {
                     'method' : 'cancelSignature',
                     'artifactId' : 'Platform.Signature_Cancel_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'awc27cd6a4',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button114.eventHandlers = eventHandlers221;
            footer007.addChild( button114 );


            var button115 = new Button({
               'artifactId' : 'Platform.Signature_Clear_button',
               'id' : 'awc6576044',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers222 = [
               {
                     'method' : 'clearSignature',
                     'artifactId' : 'Platform.Signature_Clear_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw90653ab1',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button115.eventHandlers = eventHandlers222;
            footer007.addChild( button115 );


            var button116 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.Signature_Save_button',
               'id' : 'awbc1f2293',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers223 = [
               {
                     'method' : 'saveSignature',
                     'artifactId' : 'Platform.Signature_Save_button_eventHandlers_click_saveSignature',
                     'id' : 'aw7d8e432b',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button116.eventHandlers = eventHandlers223;
            footer007.addChild( button116 );

            var eventHandlers224 = [
               {
                     'method' : 'initSignature',
                     'artifactId' : 'Platform.Signature_eventHandlers_show_initStopWorkView',
                     'id' : 'awb8cf4cb7',
                     'event' : 'initialize',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            view036.eventHandlers = eventHandlers224;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog050 = new Dialog({
               'id' : 'Platform.SignatureDialog',
            });
            ui001.addChild( dialog050 );


            var container115 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.SignatureDialog_container_buttons',
               'id' : 'aw91450791',
            });
            dialog050.addChild( container115 );


            var button117 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_Cancel_button',
               'id' : 'aw51ebe6e8',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers225 = [
               {
                     'method' : 'cancelSignatureDialog',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_Cancel_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw198ca753',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button117.eventHandlers = eventHandlers225;
            container115.addChild( button117 );


            var button118 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_clear_button',
               'id' : 'awdc63a382',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers226 = [
               {
                     'method' : 'clearSignature',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_clear_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw72eacc40',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button118.eventHandlers = eventHandlers226;
            container115.addChild( button118 );


            var button119 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_Save_button',
               'id' : 'awd4941650',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers227 = [
               {
                     'method' : 'saveSignature',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_Save_button_eventHandlers_click_saveSignature',
                     'id' : 'awa59c7577',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button119.eventHandlers = eventHandlers227;
            container115.addChild( button119 );

            var eventHandlers228 = [
               {
                     'method' : 'initSignature',
                     'artifactId' : 'Platform.SignatureDialog_eventHandlers_show_initStopWorkView',
                     'id' : 'aw71e7bce4',
                     'event' : 'show',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            dialog050.eventHandlers = eventHandlers228;
            app001.addHandler( {name : 'application.handlers.ActualLaborHandler', 'class': new ActualLaborHandler()} );
            app001.addHandler( {name : 'application.handlers.ClassificationFormHandler', 'class': new ClassificationFormHandler()} );
            app001.addHandler( {name : 'application.handlers.ClassifyWorkOrderHandler', 'class': new ClassifyWorkOrderHandler()} );
            app001.addHandler( {name : 'application.handlers.DataSheetHandler', 'class': new DataSheetHandler()} );
            app001.addHandler( {name : 'application.handlers.LaborAssignmentHandler', 'class': new LaborAssignmentHandler()} );
            app001.addHandler( {name : 'application.handlers.MetersListHandler', 'class': new MetersListHandler()} );
            app001.addHandler( {name : 'application.handlers.PlannedToolHandler', 'class': new PlannedToolHandler()} );
            app001.addHandler( {name : 'application.handlers.StatusChangeHandler', 'class': new StatusChangeHandler()} );
            app001.addHandler( {name : 'application.handlers.WOAttachmentHandler', 'class': new WOAttachmentHandler()} );
            app001.addHandler( {name : 'application.handlers.WOCreateQueryBaseHandler', 'class': new WOCreateQueryBaseHandler()} );
            app001.addHandler( {name : 'application.handlers.WODetailHandler', 'class': new WODetailHandler()} );
            app001.addHandler( {name : 'application.handlers.WOExtDownloadHandler', 'class': new WOExtDownloadHandler()} );
            app001.addHandler( {name : 'application.handlers.WOGeolocationHandler', 'class': new WOGeolocationHandler()} );
            app001.addHandler( {name : 'application.handlers.WOListHandler', 'class': new WOListHandler()} );
            app001.addHandler( {name : 'application.handlers.spatial.SketchToolHandler', 'class': new SketchToolHandler()} );
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
