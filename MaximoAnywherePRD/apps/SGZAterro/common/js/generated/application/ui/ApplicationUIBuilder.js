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
// Build: 2023-12-14 10:48:24
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
         "platform/ui/control/ProgressIndicator", 
         "platform/ui/control/Actions", 
         "platform/ui/control/Action", 
         "platform/handlers/WorkOfflineHandler", 
         "platform/ui/control/Group", 
         "platform/ui/control/GroupItem", 
         "platform/ui/control/Footer", 
         "custom/handlers/MSSRDetailHandler", 
         "platform/handlers/AttachmentHandler", 
         "application/handlers/SRAttachmentHandler", 
         "platform/ui/control/List", 
         "platform/ui/control/SortOptions", 
         "platform/ui/control/SortOption", 
         "platform/ui/control/SortAttribute", 
         "platform/ui/control/ListItemTemplate", 
         "platform/ui/control/ListText", 
         "platform/ui/control/Queries", 
         "platform/ui/control/Query", 
         "platform/ui/control/ErrorIndicator", 
         "application/handlers/WOAttachmentHandler", 
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
         "platform/ui/control/CheckBox", 
         "platform/ui/control/RadioButton", 
         "platform/logging/handler/LoggerReportHandler", 
         "platform/performance/handler/TimeTrackHandler", 
         "platform/handlers/DialogHandler", 
         "platform/ui/control/DurationPicker", 
         "platform/handlers/EsigHandler", 
         "platform/signature/handler/SignatureHandler"
      ],

function(declare, all, BuilderBase, window, array, ioQuery, AdditionalDataManager, AdditionalDataUIManager, MessageService, Application, UserInterface, Dialog, Container, Text, Button, SSOHandler, LoginHandler, View, Image, MSLoginHandler, _ApplicationHandlerBase, ProgressIndicator, Actions, Action, WorkOfflineHandler, Group, GroupItem, Footer, MSSRDetailHandler, AttachmentHandler, SRAttachmentHandler, List, SortOptions, SortOption, SortAttribute, ListItemTemplate, ListText, Queries, Query, ErrorIndicator, WOAttachmentHandler, Lookup, ReturnAttributes, ReturnAttribute, SearchAttributes, SearchAttribute, PseudoOfflineModeHandler, CreateQueryBaseHandler, ErrorActions, LookupHandler, PushNotificationDialogHandler, DateTimePicker, SettingsHandler, ChangePasswordHandler, AdditionalDataDialogHandler, CheckBox, RadioButton, LoggerReportHandler, TimeTrackHandler, DialogHandler, DurationPicker, EsigHandler, SignatureHandler) {
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
               'id' : 'SGZAterro',
               'blindQuerySupport' : 'false',
               'version' : '20190120_031802-0500',
               'requiredRole' : 'ANYWHERE_DISCARD',
            });
            app001.setFeatures({
            'update.artifact.timestamps' : false,
            'esig.enabled' : true,
            'gps.enabled' : true,
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
               'image' : '..\/..\/..\/..\/..\/..\/images\/mdpi\/Logo_SGZ_Aterro.svg',
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
               'label' : MessageService.createStaticMessage('v7.6.4:1412231100P'),
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
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZDescarte.ActionPanel', false);
               trackTimer.startTracking();
            }

            var view002 = new View({
               'showBackButton' : 'false',
               'resource' : 'plateResource',
               'id' : 'SGZDescarte.ActionPanel',
               'label' : MessageService.createStaticMessage('Informa\u00E7\u00F5es do Ve\u00EDculo'),
            });
            ui001.addChild( view002 );

            var requiredResources002 = {
               'plateResource' : {
                  'artifactId' : 'SGZDescarte.ActionPanel_serviceRequest',
                  'id' : 'aw9a13c7db',
               },
               'errorResource' : {
                  'artifactId' : 'SGZDescarte.ActionPanel_requiredResource_errorResource',
                  'id' : 'aw69511b86',
               },
            };
            view002.addRequiredResources( requiredResources002 );

            var progressIndicator001 = new ProgressIndicator({
               'artifactId' : 'SGZDescarte.ActionPanel_0',
               'id' : 'aw5fca26fa',
            });
            view002.addChild( progressIndicator001 );


            var actions001 = new Actions({
               'artifactId' : 'SGZDescarte.ActionPanel_actions',
               'id' : 'aw51dad54',
            });
            view002.addChild( actions001 );


            var action001 = new Action({
               'overflow' : true,
               'artifactId' : 'SGZDescarte.ActionPanel_SynchronizeData_action',
               'id' : 'aw5ba87602',
               'label' : MessageService.createStaticMessage('Synchronize Data'),
            });
            actions001.addChild( action001 );

            var eventHandlers009 = [
               {
                     'method' : 'sync',
                     'artifactId' : 'SGZDescarte.ActionPanel_SynchronizeData_action_eventHandlers_click_sync',
                     'id' : 'awb89d33d5',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               },
               {
                     'method' : 'enableDisableSyncMenu',
                     'artifactId' : 'SGZDescarte.ActionPanelR_SynchronizeData_action_eventHandlers_render_enableDisableMenu',
                     'id' : 'awcdff59e2',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action001.eventHandlers = eventHandlers009;

            var container008 = new Container({
               'artifactId' : 'SGZDescarte.ActionPanel_container_1',
               'id' : 'aw45b7466b',
            });
            view002.addChild( container008 );


            var group001 = new Group({
               'artifactId' : 'action1',
               'id' : 'aw9d9ad153',
            });
            container008.addChild( group001 );


            var groupitem001 = new GroupItem({
               'layout' : 'Button1Item1',
               'transitionTo' : 'SGZDescarte.inputPlate',
               'artifactId' : 'action2groupitem',
               'id' : 'aw51fd4840',
            });
            group001.addChild( groupitem001 );


            var image003 = new Image({
               'image' : 'acBtn_viewList.svg',
               'cssClass' : 'actionButton',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'sricon2',
               'id' : 'awcb956f67',
               'label' : MessageService.createStaticMessage('Validar Placa'),
               'platform' : 'false',
            });
            groupitem001.addChild( image003 );


            var text013 = new Text({
               'layoutInsertAt' : 'item1',
               'artifactId' : 'createsrtext2',
               'id' : 'aw1c787593',
               'value' : MessageService.createStaticMessage('Validar Placa'),
            });
            groupitem001.addChild( text013 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZDescarte.inputPlate', false);
               trackTimer.startTracking();
            }

            var view003 = new View({
               'showBackButton' : 'false',
               'resource' : 'plateResource',
               'id' : 'SGZDescarte.inputPlate',
               'label' : MessageService.createStaticMessage('Validar Placa'),
            });
            ui001.addChild( view003 );

            var requiredResources003 = {
               'plateResource' : {
                  'artifactId' : 'SGZDescarte.inputPlate_serviceRequest',
                  'id' : 'awdc9397ce',
               },
               'sgzDescarte' : {
                  'artifactId' : 'SGZDescarte.DefaultList_sgzDescarte',
                  'id' : 'awaffc02a7',
               },
            };
            view003.addRequiredResources( requiredResources003 );
            var eventHandlers010 = [
               {
                     'method' : 'sync',
                     'artifactId' : 'SGZDescarte.DefaultList_SynchronizeData_action_eventHandlers_click_sync0_render',
                     'id' : 'aw4550a673',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            view003.eventHandlers = eventHandlers010;

            var container009 = new Container({
               'resource' : 'plateResource',
               'artifactId' : 'SGZDescarte.inputPlate_serviceRequest_container_0',
               'id' : 'aw95021d43',
            });
            view003.addChild( container009 );


            var group002 = new Group({
               'artifactId' : 'SGZDescarte.inputPlate_group_0',
               'id' : 'aw4287e32f',
            });
            container009.addChild( group002 );


            var groupitem002 = new GroupItem({
               'artifactId' : 'SGZDescarte.inputPlate_serviceRequest_groupitem_ServiceRequest_ms_plate',
               'id' : 'aw3b3a7518',
            });
            group002.addChild( groupitem002 );


            var text014 = new Text({
               'resourceAttribute' : 'ms_plate',
               'editable' : true,
               'artifactId' : 'SGZDescarte.inputPlate_serviceRequest_groupitem_ServiceRequest.ms_plate',
               'id' : 'awdce2a28e',
               'label' : MessageService.createStaticMessage('Placa'),
               'codeScannable' : true,
               'required' : true,
            });
            groupitem002.addChild( text014 );


            var footer001 = new Footer({
               'artifactId' : 'SGZDescarte.inputPlate_footer',
               'id' : 'aw1a9563ff',
            });
            view003.addChild( footer001 );


            var button005 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZDescarte.inputPlate_wonum_Create_button',
               'id' : 'aw116e0293',
               'label' : MessageService.createStaticMessage('Validar Placa'),
               'primary' : 'true',
            });
            var eventHandlers011 = [
               {
                     'method' : 'findTickets',
                     'artifactId' : 'SGZDescarte.inputPlate_wonum_Create_button_eventHandlers_click_commitNewServiceRequestView',
                     'id' : 'awc720c8fb',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button005.eventHandlers = eventHandlers011;
            footer001.addChild( button005 );


            var actions002 = new Actions({
               'artifactId' : 'SGZDescarte.ActionPanel_actions00',
               'id' : 'awcef656b8',
            });
            view003.addChild( actions002 );


            var action002 = new Action({
               'overflow' : true,
               'artifactId' : 'SGZDescarte.ActionPanel_SynchronizeData_action00',
               'id' : 'aw3316f983',
               'label' : MessageService.createStaticMessage('Synchronize Data'),
            });
            actions002.addChild( action002 );

            var eventHandlers012 = [
               {
                     'method' : 'sync',
                     'artifactId' : 'SGZDescarte.ActionPanel_SynchronizeData_action_eventHandlers_click_sync00',
                     'id' : 'awfbd9fc71',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               },
               {
                     'method' : 'enableDisableSyncMenu',
                     'artifactId' : 'SGZDescarte.ActionPanelR_SynchronizeData_action_eventHandlers_render_enableDisableMenu00',
                     'id' : 'awc6b9a161',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action002.eventHandlers = eventHandlers012;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZDescarte.platePhotoView', false);
               trackTimer.startTracking();
            }

            var view004 = new View({
               'showOverflow' : true,
               'id' : 'SGZDescarte.platePhotoView',
               'label' : MessageService.createStaticMessage('Foto da Placa'),
            });
            ui001.addChild( view004 );

            var requiredResources004 = {
               'sgzDescarte' : {
                  'artifactId' : 'SGZDescarte.platePhotoView_serviceRequest',
                  'id' : 'aw8dcaa1a1',
                  'related' : {
                     'attachments' : {
                        'reload' : true,
                        'artifactId' : 'SGZDescarte.platePhotoView_serviceRequest_attachments',
                        'id' : 'aw325eaca7',
                     },
                  },
               },
            };
            view004.addRequiredResources( requiredResources004 );

            var actions003 = new Actions({
               'artifactId' : 'SGZDescarte.platePhotoView_actions',
               'id' : 'awb0e008b8',
            });
            view004.addChild( actions003 );


            var action003 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'artifactId' : 'SGZDescarte.platePhotoView_TakePhoto_action',
               'id' : 'aw62ec5608',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions003.addChild( action003 );

            var eventHandlers013 = [
               {
                     'method' : 'launchCameraForPhoto',
                     'artifactId' : 'SGZDescarte.platePhotoView_TakePhoto_action_eventHandlers_click_launchCameraForPhoto',
                     'id' : 'awa9757a0a',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               },
               {
                     'method' : 'initCategory',
                     'artifactId' : 'SGZDescarte.platePhotoView_TakePhoto_action_eventHandlers_render_initCategory',
                     'id' : 'awf294fed7',
                     'event' : 'render',
                     'class' : 'application.handlers.SRAttachmentHandler',
               }
            ];
            action003.eventHandlers = eventHandlers013;

            var action004 = new Action({
               'image' : 'header_add_OFF.svg',
               'artifactId' : 'SGZDescarte.platePhotoView_PickfromGallery_action',
               'id' : 'aw8dfbcbc8',
               'label' : MessageService.createStaticMessage('Pick from Gallery'),
            });
            actions003.addChild( action004 );

            var eventHandlers014 = [
               {
                     'method' : 'launchGallery',
                     'artifactId' : 'SGZDescarte.platePhotoView_PickfromGallery_action_eventHandlers_click_launchGallery',
                     'id' : 'awbf4ac369',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            action004.eventHandlers = eventHandlers014;


            var sortOptions001 = new SortOptions({
               'artifactId' : 'SGZDescarte.platePhotoView_serviceRequest_attachments_list_sortOptions',
               'id' : 'awf71c8c6',
            });

            var sortOption001 = new SortOption({
               'artifactId' : 'SGZDescarte.platePhotoView_sortOption_CreatedDate',
               'id' : 'aw71607792',
               'label' : MessageService.createStaticMessage('Created Date'),
            });
            sortOptions001.addChild( sortOption001 );


            var sortAttribute001 = new SortAttribute({
               'name' : 'displayCreationDate',
               'artifactId' : 'SGZDescarte.platePhotoView_CreatedDate_sortAttribute_displayCreationDate',
               'id' : 'awb156eefa',
               'direction' : 'asc',
            });
            sortOption001.addChild( sortAttribute001 );


            var sortOption002 = new SortOption({
               'artifactId' : 'SGZDescarte.platePhotoView_sortOption_FileName',
               'id' : 'awb3c46eaf',
               'label' : MessageService.createStaticMessage('File Name'),
            });
            sortOptions001.addChild( sortOption002 );


            var sortAttribute002 = new SortAttribute({
               'name' : 'displayFileName',
               'artifactId' : 'SGZDescarte.platePhotoView_FileName_sortAttribute_displayFileName',
               'id' : 'awe889d483',
               'direction' : 'asc',
            });
            sortOption002.addChild( sortAttribute002 );


            var sortOption003 = new SortOption({
               'artifactId' : 'SGZDescarte.platePhotoView_sortOption_Description',
               'id' : 'aw4178bb0e',
               'label' : MessageService.createStaticMessage('Description'),
            });
            sortOptions001.addChild( sortOption003 );


            var sortAttribute003 = new SortAttribute({
               'name' : 'displayDescription',
               'artifactId' : 'SGZDescarte.platePhotoView_Description_sortAttribute_displayDescription',
               'id' : 'awdd273047',
               'direction' : 'asc',
            });
            sortOption003.addChild( sortAttribute003 );



            var listItemTemplate001 = new ListItemTemplate({
               'layout' : 'AttachmentsListItem',
               'artifactId' : 'SGZDescarte.platePhotoView_serviceRequest_attachments_listItemTemplate_AttachmentsListItem',
               'id' : 'awf839ae8d',
            });

            var listtext001 = new ListText({
               'resourceAttribute' : 'displayFileName',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZDescarte.platePhotoView_serviceRequest_AttachmentsListItem_displayFileName',
               'id' : 'aw476d7a69',
            });
            listItemTemplate001.addChild( listtext001 );


            var listtext002 = new ListText({
               'resourceAttribute' : 'displayDescription',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'SGZDescarte.platePhotoView_serviceRequest_AttachmentsListItem_displayDescription',
               'id' : 'aw55fe9d11',
            });
            listItemTemplate001.addChild( listtext002 );


            var listtext003 = new ListText({
               'resourceAttribute' : 'displayFileType',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'SGZDescarte.platePhotoView_serviceRequest_AttachmentsListItem_displayFileType',
               'id' : 'aw95905346',
            });
            listItemTemplate001.addChild( listtext003 );


            var button006 = new Button({
               'border' : 'false',
               'resourceAttribute' : 'anywhereAttachDownloaded',
               'image' : '\/images\/msg_downloadComplete_small.svg',
               'cssClass' : 'attachmentIcon',
               'layoutInsertAt' : 'icon',
               'artifactId' : 'SGZDescarte.platePhotoView_serviceRequest_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.svg_button',
               'id' : 'awb9c0fb56',
            });
            var eventHandlers015 = [
               {
                     'method' : 'displayLocal',
                     'artifactId' : 'SGZDescarte.platePhotoView_serviceRequest_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.svg_button_eventHandlers_datachange_displayLocal',
                     'id' : 'aw49b30d6d',
                     'event' : 'datachange',
                     'class' : 'application.handlers.SRAttachmentHandler',
               },
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'SGZDescarte.platePhotoView_serviceRequest_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.svg_button_eventHandlers_click_handleThumbnailClick',
                     'id' : 'aw5e9bbcce',
                     'event' : 'click',
                     'class' : 'application.handlers.SRAttachmentHandler',
               }
            ];
            button006.eventHandlers = eventHandlers015;
            listItemTemplate001.addChild( button006 );


            var listtext004 = new ListText({
               'resourceAttribute' : 'displaySize',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'SGZDescarte.platePhotoView_serviceRequest_AttachmentsListItem_displaySize',
               'id' : 'aw16f2e1aa',
            });
            listItemTemplate001.addChild( listtext004 );


            var listtext005 = new ListText({
               'resourceAttribute' : 'createby',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'SGZDescarte.platePhotoView_serviceRequest_AttachmentsListItem_createby',
               'id' : 'awfe57ae0a',
            });
            listItemTemplate001.addChild( listtext005 );


            var listtext006 = new ListText({
               'resourceAttribute' : 'displayCreationDate',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'SGZDescarte.platePhotoView_serviceRequest_AttachmentsListItem_displayCreationDate',
               'id' : 'aw8478d303',
            });
            listItemTemplate001.addChild( listtext006 );

            var eventHandlers016 = [
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'SGZDescarte.platePhotoView_serviceRequest_attachments_listItemTemplate_AttachmentsListItem_eventHandlers_click_handleThumbnailClick',
                     'id' : 'aw93ef0762',
                     'event' : 'click',
                     'class' : 'application.handlers.SRAttachmentHandler',
               }
            ];
            listItemTemplate001.eventHandlers = eventHandlers016;


            var list001 = new List({
               'resource' : 'sgzDescarte',
               'sortOptions' : sortOptions001,
               'listItemTemplate' : listItemTemplate001,
               'artifactId' : 'SGZDescarte.platePhotoView_serviceRequest_attachments_list',
               'attribute' : 'attachments',
               'id' : 'aw57053af3',
            });
            view004.addChild( list001 );


            var footer002 = new Footer({
               'artifactId' : 'SGZDescarte.platePhotoView_footer',
               'id' : 'aw9a0763ee',
            });
            view004.addChild( footer002 );


            var button007 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZDescarte.platePhotoView_wonum_Create_button',
               'id' : 'aw1f813c58',
               'label' : MessageService.createStaticMessage('Validar Foto'),
               'primary' : 'true',
            });
            var eventHandlers017 = [
               {
                     'method' : 'validatePlatePhoto',
                     'artifactId' : 'SGZDescarte.platePhotoView.validate',
                     'id' : 'aw5070896c',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button007.eventHandlers = eventHandlers017;
            footer002.addChild( button007 );

            var eventHandlers018 = [
               {
                     'method' : 'noBack',
                     'artifactId' : 'SGZDescarte.platePhotoView.eventHandler.noBack',
                     'id' : 'aw1b11b78c',
                     'event' : 'back',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            view004.eventHandlers = eventHandlers018;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZDescarte.DefaultList', false);
               trackTimer.startTracking();
            }

            var view005 = new View({
               'saveonshow' : true,
               'showBackButton' : 'false',
               'id' : 'SGZDescarte.DefaultList',
               'label' : MessageService.createStaticMessage('Default List View'),
            });
            ui001.addChild( view005 );


            var queries001 = new Queries({
               'resource' : 'sgzDescarte',
               'artifactId' : 'SGZDescarte.DefaultList_serviceRequest_queries',
               'id' : 'aw117df2b2',
            });
            view005.addChild( queries001 );


            var query001 = new Query({
               'artifactId' : 'SGZDescarte.DefaultList_MY_REPORTED_SR',
               'id' : 'aw1b1281c2',
               'label' : MessageService.createStaticMessage('Meus Tickets'),
               'queryBase' : 'ms_sgzdescarte',
            });
            queries001.addChild( query001 );


            var query002 = new Query({
               'system' : 'true',
               'artifactId' : 'SGZDescarte.DefaultList___errored__',
               'id' : 'awc4ddb8fd',
               'label' : MessageService.createStaticMessage('Records with Errors'),
               'queryBase' : '__errored__',
            });
            queries001.addChild( query002 );

            var eventHandlers019 = [
               {
                     'method' : 'hideShowErrorMenu',
                     'artifactId' : 'SGZDescarte.DefaultList___errored___eventHandlers_render_hideShowErrorMenu',
                     'id' : 'aw342bab58',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            query002.eventHandlers = eventHandlers019;
            var requiredResources005 = {
               'sgzDescarte' : {
                  'artifactId' : 'SGZDescarte.DefaultList_serviceRequest',
                  'id' : 'awc1491725',
               },
            };
            view005.addRequiredResources( requiredResources005 );

            var progressIndicator002 = new ProgressIndicator({
               'artifactId' : 'SGZDescarte.DefaultList_0',
               'id' : 'aw66f9ef99',
            });
            view005.addChild( progressIndicator002 );



            var listItemTemplate002 = new ListItemTemplate({
               'layout' : 'WorkListItem',
               'artifactId' : 'SGZDescarte.DefaultList_serviceRequest_listItemTemplate_WorkListItem',
               'id' : 'aw570267f8',
            });

            var listtext007 = new ListText({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZDescarte.DefaultList_serviceRequest_WorkListItem_srnum',
               'id' : 'aw173fbe47',
            });
            listItemTemplate002.addChild( listtext007 );


            var listtext008 = new ListText({
               'resourceAttribute' : 'ms_plate',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'ServiceRequestMyReportedSR_serviceRequest_WorkListItem_ms_plate',
               'id' : 'aw930d6d66',
               'cssAttributes' : 'status',
            });
            listItemTemplate002.addChild( listtext008 );


            var listtext009 = new ListText({
               'resourceAttribute' : 'ms_pecode',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'ServiceRequestMyReportedSR_serviceRequest_WorkListItem_ms_pecode',
               'id' : 'awe5e96470',
               'cssAttributes' : 'status',
            });
            listItemTemplate002.addChild( listtext009 );


            var listtext010 = new ListText({
               'resourceAttribute' : 'ms_description',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'ServiceRequestMyReportedSR_serviceRequest_WorkListIte_ms_type',
               'id' : 'aw703f54fc',
               'cssAttributes' : 'status',
            });
            listItemTemplate002.addChild( listtext010 );


            var listtext011 = new ListText({
               'resourceAttribute' : 'ms_expiredate',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_starttime',
               'id' : 'aw5840f54a',
            });
            listItemTemplate002.addChild( listtext011 );


            var image004 = new Image({
               'image' : 'statusicons\/{:ms_status}.png',
               'cssClass' : 'statusDesc',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_statusimg',
               'id' : 'awc0a06672',
               'cssAttributes' : 'internalStatus',
               'platform' : 'false',
            });
            listItemTemplate002.addChild( image004 );


            var image005 = new Image({
               'image' : 'statusicons\/{:ms_emergency}.png',
               'cssClass' : 'statusDesc',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_emergencyimg',
               'id' : 'aw6dca41ee',
               'cssAttributes' : 'internalStatus',
               'platform' : 'false',
            });
            listItemTemplate002.addChild( image005 );


            var listtext012 = new ListText({
               'resourceAttribute' : 'statusdesc',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_statusdesc',
               'id' : 'aw6aa53129',
               'cssAttributes' : 'status',
            });
            listItemTemplate002.addChild( listtext012 );



            var list002 = new List({
               'resource' : 'sgzDescarte',
               'transitionTo' : 'SGZDescarte.SRDetail',
               'listItemTemplate' : listItemTemplate002,
               'artifactId' : 'SGZDescarte.DefaultList_serviceRequest_list',
               'id' : 'aw70a81711',
               'displayPageSize' : '20',
            });
            view005.addChild( list002 );

            var eventHandlers020 = [
               {
                     'method' : 'findTicketsRender',
                     'artifactId' : 'SGZDescarte.platePhotoView.eventHandler.noBack.findTickets',
                     'id' : 'aw2c554d32',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            view005.eventHandlers = eventHandlers020;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZDescarte.SRDetail', false);
               trackTimer.startTracking();
            }

            var view006 = new View({
               'showBackButton' : 'true',
               'resource' : 'sgzDescarte',
               'id' : 'SGZDescarte.SRDetail',
               'label' : MessageService.createStaticMessage('Detalhes do Ticket'),
            });
            ui001.addChild( view006 );

            var requiredResources006 = {
               'sgzDescarte' : {
                  'artifactId' : 'ServiceRequest.SRDetail_serviceRequest',
                  'id' : 'aw4763798b',
               },
            };
            view006.addRequiredResources( requiredResources006 );

            var container010 = new Container({
               'resource' : 'sgzDescarte',
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_container_0',
               'id' : 'aw100d0578',
            });
            view006.addChild( container010 );


            var errorIndicator001 = new ErrorIndicator({
               'artifactId' : 'ServiceRequest.SRDetail_errorIndicator',
               'id' : 'aw3bfd5fff',
            });
            container010.addChild( errorIndicator001 );


            var group003 = new Group({
               'artifactId' : 'ServiceRequest.SRDetail_group_0',
               'id' : 'aw429d19d2',
            });
            container010.addChild( group003 );


            var groupitem003 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_status_0',
               'id' : 'aw14dff218',
            });
            group003.addChild( groupitem003 );


            var text015 = new Text({
               'resourceAttribute' : 'identifier',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.ms_amticketid_0',
               'id' : 'aw2e94f0b5',
               'label' : MessageService.createStaticMessage('Ticket'),
            });
            groupitem003.addChild( text015 );


            var groupitem004 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_srnum_00101010',
               'id' : 'awa15c3c1f',
            });
            group003.addChild( groupitem004 );


            var text016 = new Text({
               'resourceAttribute' : 'ms_landfillid',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.codattero',
               'id' : 'awc2cab50d',
               'label' : MessageService.createStaticMessage('Cod. Aterro Sanit\u00E1rio'),
            });
            groupitem004.addChild( text016 );


            var text017 = new Text({
               'resourceAttribute' : 'landfilldesc',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.descaterro',
               'id' : 'aw4b186284',
               'label' : MessageService.createStaticMessage('Aterro Sanit\u00E1rio'),
            });
            groupitem004.addChild( text017 );


            var groupitem005 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_owner_0',
               'id' : 'aw7ca805d7',
            });
            group003.addChild( groupitem005 );


            var text018 = new Text({
               'resourceAttribute' : 'ms_siteid',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.Subprefeitura_0',
               'id' : 'aw2f78c93a',
               'label' : MessageService.createStaticMessage('Subprefeitura'),
            });
            groupitem005.addChild( text018 );


            var text019 = new Text({
               'resourceAttribute' : 'pedesc',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.orgao_1',
               'id' : 'awad14f0f9',
               'label' : MessageService.createStaticMessage('Org\u00E3o'),
            });
            groupitem005.addChild( text019 );


            var groupitem006 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_summary_0',
               'id' : 'aw3b09ba21',
            });
            group003.addChild( groupitem006 );


            var text020 = new Text({
               'resourceAttribute' : 'statusdesc',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.ms_status_0',
               'id' : 'aw2fe8f5c2',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem006.addChild( text020 );


            var groupitem007 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_0',
               'id' : 'aw55d6946b',
            });
            group003.addChild( groupitem007 );


            var text021 = new Text({
               'resourceAttribute' : 'ms_expiredate',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_0_ms_expiredate',
               'id' : 'awae19f051',
               'label' : MessageService.createStaticMessage('Data de Validade'),
            });
            groupitem007.addChild( text021 );


            var groupitem008 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.EditLocationView_0',
               'id' : 'awc3ef5de9',
            });
            group003.addChild( groupitem008 );


            var text022 = new Text({
               'resourceAttribute' : 'ms_company',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.LocationView_0_contratada',
               'id' : 'aw876c906c',
               'label' : MessageService.createStaticMessage('N. Contratada'),
            });
            groupitem008.addChild( text022 );


            var text023 = new Text({
               'resourceAttribute' : 'companieName',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.LocationView_0_contratadadesc',
               'id' : 'aw3dc26e37',
               'label' : MessageService.createStaticMessage('Contratada'),
            });
            groupitem008.addChild( text023 );


            var groupitem009 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_ms_plate_0',
               'id' : 'aw91389665',
            });
            group003.addChild( groupitem009 );


            var text024 = new Text({
               'resourceAttribute' : 'ms_plate',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.ms_plate_0',
               'id' : 'awae941b56',
               'label' : MessageService.createStaticMessage('Placa'),
            });
            groupitem009.addChild( text024 );


            var groupitem010 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_ms_tareweight_1',
               'id' : 'aw1c0c463',
            });
            group003.addChild( groupitem010 );


            var text025 = new Text({
               'resourceAttribute' : 'ms_grossweight',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.ms_grossweight_0',
               'id' : 'aw37cb5bcc',
               'label' : MessageService.createStaticMessage('Peso Bruto (Kg)'),
            });
            groupitem010.addChild( text025 );


            var text026 = new Text({
               'resourceAttribute' : 'ms_tareweight',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.ms_tareweight_0',
               'id' : 'aw7c9d67d',
               'label' : MessageService.createStaticMessage('Peso Tara (Kg)'),
            });
            groupitem010.addChild( text026 );


            var text027 = new Text({
               'resourceAttribute' : 'ms_netweight',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.ms_netweight_1',
               'id' : 'awad86f72',
               'label' : MessageService.createStaticMessage('Peso Liquido (Kg)'),
            });
            groupitem010.addChild( text027 );


            var groupitem011 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_type_0',
               'id' : 'awe0405a6b',
            });
            group003.addChild( groupitem011 );


            var text028 = new Text({
               'resourceAttribute' : 'ms_type',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.type_0',
               'id' : 'awaa5f81f4',
               'label' : MessageService.createStaticMessage('Tipo de Res\u00EDduo'),
            });
            groupitem011.addChild( text028 );


            var groupitem012 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_ms_pperequirement_0',
               'id' : 'awf17b5ada',
            });
            group003.addChild( groupitem012 );


            var text029 = new Text({
               'resourceAttribute' : 'ms_pperequirement',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.ms_pperequirement_0',
               'id' : 'aw5bde3aa4',
               'label' : MessageService.createStaticMessage('EPIs Obrigat\u00F3rios'),
            });
            groupitem012.addChild( text029 );


            var groupitem013 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_reportedpriority_0',
               'id' : 'aw4ced75a3',
            });
            group003.addChild( groupitem013 );


            var text030 = new Text({
               'resourceAttribute' : 'ms_remarks',
               'editable' : true,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.ms_remarks_0',
               'id' : 'aw46f0236e',
               'label' : MessageService.createStaticMessage('Observa\u00E7\u00F5es'),
            });
            groupitem013.addChild( text030 );


            var groupitem014 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'enableFeatureByProperty' : 'attachments.enabled',
               'artifactId' : 'ServiceRequest.SRDetail_groupitem_ServiceRequest.AttachmentsView_013',
               'id' : 'aw3c4252d',
            });
            group003.addChild( groupitem014 );


            var text031 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'ServiceRequest.SRDetail_groupitem_ServiceRequest.AttachmentsView_0_Attachments013',
               'id' : 'awbc2f048b',
               'value' : MessageService.createStaticMessage('Fotos'),
            });
            groupitem014.addChild( text031 );

            var eventHandlers021 = [
               {
                     'method' : 'hasAttCategory',
                     'artifactId' : 'sgzAterro.fotos.eventHandler.hasAttCategory',
                     'id' : 'aw434b78d',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            groupitem014.eventHandlers = eventHandlers021;

            var footer003 = new Footer({
               'artifactId' : 'SGZDescarte.SRDetail_footer',
               'id' : 'aw2e9b65c0',
            });
            view006.addChild( footer003 );


            var button008 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZDescarte.footer_finish',
               'id' : 'awa156aa38',
               'label' : MessageService.createStaticMessage('Concluir Descarte'),
               'primary' : 'true',
            });
            var eventHandlers022 = [
               {
                     'method' : 'finishDiscard',
                     'artifactId' : 'SGZDescarte.footer_finishdiscard.click',
                     'id' : 'awab190566',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'showHideFinishDiscard',
                     'artifactId' : 'SGZDescarte.showHideFinishDiscard.showHideEmergencyDisposal.footer_finishdiscard.click',
                     'id' : 'awa69f7727',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button008.eventHandlers = eventHandlers022;
            footer003.addChild( button008 );


            var button009 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZDescarte.02.footer_finish',
               'id' : 'aw32db889f',
               'label' : MessageService.createStaticMessage('Validar Placa'),
               'primary' : 'true',
            });
            var eventHandlers023 = [
               {
                     'method' : 'finishDiscard',
                     'artifactId' : 'SGZDescarte.02.footer_finishdiscard.click',
                     'id' : 'awa79d63c9',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'showHideEmergencyDisposal',
                     'artifactId' : 'SGZDescarte.showHideEmergencyDisposal.footer_finishdiscard.click',
                     'id' : 'awb399e887',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button009.eventHandlers = eventHandlers023;
            footer003.addChild( button009 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZDescarte.finishDiscard.view', false);
               trackTimer.startTracking();
            }

            var view007 = new View({
               'resource' : 'sgzDescarte',
               'id' : 'SGZDescarte.finishDiscard.view',
            });
            ui001.addChild( view007 );

            var requiredResources007 = {
               'sgzDescarte' : {
                  'artifactId' : 'SGZDescarte.finishDiscard.footer.requiredResource',
                  'id' : 'awa1fb43b5',
               },
            };
            view007.addRequiredResources( requiredResources007 );

            var actions004 = new Actions({
               'artifactId' : 'SGZArbo.NewAssetView_actions',
               'id' : 'awadf7dea4',
            });
            view007.addChild( actions004 );


            var action005 = new Action({
               'image' : '\/images\/Use-Current-Location.svg',
               'artifactId' : 'WorkExecution.WorkDetailView_CaptureGPS_action',
               'id' : 'aw2f723463',
               'label' : MessageService.createStaticMessage('Capture GPS'),
            });
            actions004.addChild( action005 );

            var eventHandlers024 = [
               {
                     'method' : 'updateCurrentGPSPosition',
                     'artifactId' : 'WorkExecution.WorkDetailView_CaptureGPS_action_eventHandlers_click',
                     'id' : 'awb16de09b',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            action005.eventHandlers = eventHandlers024;

            var container011 = new Container({
               'artifactId' : 'SGZDescarte.footer.container',
               'id' : 'aw6fb6b44d',
            });
            view007.addChild( container011 );


            var group004 = new Group({
               'artifactId' : 'SGZDescarte.footer.container.group',
               'id' : 'awa955c00',
            });
            container011.addChild( group004 );


            var groupitem015 = new GroupItem({
               'artifactId' : 'SGZDescarte.footer.container.group.groupitem',
               'id' : 'awd283cc9f',
            });
            group004.addChild( groupitem015 );


            var text032 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZDescarte.footer.container.group.groupitem.text',
               'id' : 'aw9dacfd98',
               'value' : MessageService.createStaticMessage('Descarte conclu\u00EDdo com sucesso?'),
            });
            groupitem015.addChild( text032 );


            var text033 = new Text({
               'resourceAttribute' : 'ms_latitudey',
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZDescarte.footer.container.group.groupitem.text1',
               'id' : 'aw7d95583c',
               'label' : MessageService.createStaticMessage('Latitude'),
            });
            groupitem015.addChild( text033 );


            var text034 = new Text({
               'resourceAttribute' : 'ms_longitudex',
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZDescarte.footer.container.group.groupitem.text2',
               'id' : 'awe49c0986',
               'label' : MessageService.createStaticMessage('Longitude'),
            });
            groupitem015.addChild( text034 );


            var footer004 = new Footer({
               'artifactId' : 'SGZDescarte.footer_sim_footer',
               'id' : 'aw7eb8847c',
            });
            view007.addChild( footer004 );


            var button010 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZDescarte.footer_sim',
               'id' : 'aw54a0e498',
               'label' : MessageService.createStaticMessage('Sim'),
               'primary' : 'true',
            });
            var eventHandlers025 = [
               {
                     'method' : 'finishDiscardSucess',
                     'artifactId' : 'SGZDescarte.footer_sim_finishDiscard',
                     'id' : 'aw400d13dd',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button010.eventHandlers = eventHandlers025;
            footer004.addChild( button010 );


            var button011 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'transitionTo' : 'SGZDescarte.reasonView',
               'artifactId' : 'SGZDescarte.footer_nao',
               'id' : 'aw66893f9f',
               'label' : MessageService.createStaticMessage('N\u00E3o'),
               'primary' : 'true',
            });
            footer004.addChild( button011 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZDescarte.finish.emergency.Discard.view', false);
               trackTimer.startTracking();
            }

            var view008 = new View({
               'resource' : 'sgzDescarte',
               'id' : 'SGZDescarte.finish.emergency.Discard.view',
            });
            ui001.addChild( view008 );

            var requiredResources008 = {
               'sgzDescarte' : {
                  'artifactId' : 'SGZDescarte.finishDiscard.footer.emergency.requiredResource',
                  'id' : 'aw1ebf45c5',
               },
            };
            view008.addRequiredResources( requiredResources008 );

            var actions005 = new Actions({
               'artifactId' : 'SGZArbo.emergencyAssetView_emergency_actions',
               'id' : 'aw41e35000',
            });
            view008.addChild( actions005 );


            var container012 = new Container({
               'artifactId' : 'SGZDescarte.footer.emergency.container',
               'id' : 'aw3a1e2718',
            });
            view008.addChild( container012 );


            var group005 = new Group({
               'artifactId' : 'SGZDescarte.footer.emergency.container.group',
               'id' : 'aw22d84535',
            });
            container012.addChild( group005 );


            var groupitem016 = new GroupItem({
               'artifactId' : 'SGZDescarte.footer.emergency.container.group.groupitem',
               'id' : 'aw12f0d10e',
            });
            group005.addChild( groupitem016 );


            var text035 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZDescarte.footer.emergency.container.group.groupitem.text',
               'id' : 'aw4ef47d3d',
               'value' : MessageService.createStaticMessage('O caminh\u00E3o est\u00E1 autorizado para realizar o descarte?'),
            });
            groupitem016.addChild( text035 );


            var footer005 = new Footer({
               'artifactId' : 'SGZDescarte.footer.emergency_sim_footer',
               'id' : 'aw65ec8994',
            });
            view008.addChild( footer005 );


            var button012 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'transitionTo' : 'SGZDescarte.finishDiscard.view',
               'artifactId' : 'SGZDescarte.footer.emergency_sim',
               'id' : 'aw40c770b9',
               'label' : MessageService.createStaticMessage('Sim'),
               'primary' : 'true',
            });
            footer005.addChild( button012 );


            var button013 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZDescarte.footer.emergency_no',
               'id' : 'aw11e6688',
               'label' : MessageService.createStaticMessage('N\u00E3o'),
               'primary' : 'true',
            });
            var eventHandlers026 = [
               {
                     'method' : 'cancel',
                     'artifactId' : 'SGZDescarte.footer.emergency_sim_finishDiscard',
                     'id' : 'aw865751e6',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button013.eventHandlers = eventHandlers026;
            footer005.addChild( button013 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZDescarte.reasonView', false);
               trackTimer.startTracking();
            }

            var view009 = new View({
               'resource' : 'sgzDescarte',
               'id' : 'SGZDescarte.reasonView',
            });
            ui001.addChild( view009 );

            var requiredResources009 = {
               'sgzDescarte' : {
                  'artifactId' : 'SGZDescarte.reasonView.requiredResource.sgzDescarte',
                  'id' : 'aw4136e28d',
               },
            };
            view009.addRequiredResources( requiredResources009 );

            var container013 = new Container({
               'artifactId' : 'SGZDescarte.reasonView.container',
               'id' : 'aw2d3cc64d',
            });
            view009.addChild( container013 );


            var group006 = new Group({
               'artifactId' : 'SGZDescarte.reasonView.group',
               'id' : 'awd1e9cb35',
            });
            container013.addChild( group006 );


            var groupitem017 = new GroupItem({
               'artifactId' : 'SGZDescarte.reasonView.group.groupitem_0',
               'id' : 'aw38a9b634',
            });
            group006.addChild( groupitem017 );


            var text036 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZDescarte.reasonView.group.groupitem.text_0',
               'id' : 'aw2217019',
               'value' : MessageService.createStaticMessage('Selecione o motivo da falha no descarte:'),
            });
            groupitem017.addChild( text036 );


            var groupitem018 = new GroupItem({
               'artifactId' : 'SGZDescarte.reasonView.group.groupitem_1',
               'id' : 'aw4fae86a2',
            });
            group006.addChild( groupitem018 );


            var text037 = new Text({
               'resourceAttribute' : 'ms_whynum',
               'lookup' : 'SGZDescarte.whylookup',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZDescarte.reasonView.group.groupitem.text_1',
               'id' : 'aw7526408f',
               'label' : MessageService.createStaticMessage('Motivo'),
               'required' : true,
            });
            groupitem018.addChild( text037 );


            var footer006 = new Footer({
               'artifactId' : 'SGZDescarte.reasonView.footer',
               'id' : 'aw5f30dec0',
            });
            view009.addChild( footer006 );


            var button014 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZDescarte.reasonView.concluir',
               'id' : 'awc8476af0',
               'label' : MessageService.createStaticMessage('Rejeitar ticket'),
               'primary' : 'true',
            });
            var eventHandlers027 = [
               {
                     'method' : 'finishDiscardFail',
                     'artifactId' : 'SGZDescarte.reasonView.concluir_finishDiscardFail',
                     'id' : 'awf35eccf3',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button014.eventHandlers = eventHandlers027;
            footer006.addChild( button014 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZDescarte.finish.new.Discard.view', false);
               trackTimer.startTracking();
            }

            var view010 = new View({
               'resource' : 'sgzDescarte',
               'id' : 'SGZDescarte.finish.new.Discard.view',
            });
            ui001.addChild( view010 );

            var requiredResources010 = {
               'sgzDescarte' : {
                  'artifactId' : 'SGZDescarte.finishDiscard.footer.new.requiredResource',
                  'id' : 'awb20fcc85',
               },
            };
            view010.addRequiredResources( requiredResources010 );

            var actions006 = new Actions({
               'artifactId' : 'SGZArbo.newAssetView_new_actions',
               'id' : 'awe4891b37',
            });
            view010.addChild( actions006 );


            var container014 = new Container({
               'artifactId' : 'SGZDescarte.footer.new.container',
               'id' : 'aw96dcd42b',
            });
            view010.addChild( container014 );


            var group007 = new Group({
               'artifactId' : 'SGZDescarte.footer.new.container.group',
               'id' : 'awa3849832',
            });
            container014.addChild( group007 );


            var groupitem019 = new GroupItem({
               'artifactId' : 'SGZDescarte.footer.new.container.group.groupitem',
               'id' : 'aw398c6bd6',
            });
            group007.addChild( groupitem019 );


            var text038 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZDescarte.footer.new.container.group.groupitem.text',
               'id' : 'awae258b06',
               'value' : MessageService.createStaticMessage('O caminh\u00E3o est\u00E1 autorizado para realizar o descarte?'),
            });
            groupitem019.addChild( text038 );


            var footer007 = new Footer({
               'artifactId' : 'SGZDescarte.footer.new_sim_footer',
               'id' : 'awda902a71',
            });
            view010.addChild( footer007 );


            var button015 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZDescarte.footer.novo.new_sim02',
               'id' : 'aw55d5441f',
               'label' : MessageService.createStaticMessage('Sim'),
               'primary' : 'true',
            });
            var eventHandlers028 = [
               {
                     'method' : 'finishDiscardSucess',
                     'artifactId' : 'SGZDescarte.footer.novo.new_sim_finishDiscard02',
                     'id' : 'aw695bec2',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button015.eventHandlers = eventHandlers028;
            footer007.addChild( button015 );


            var button016 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'transitionTo' : 'SGZDescarte.reasonView',
               'artifactId' : 'SGZDescarte.footer.novo.new_nao02',
               'id' : 'awb95ebad',
               'label' : MessageService.createStaticMessage('N\u00E3o'),
               'primary' : 'true',
            });
            footer007.addChild( button016 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZDescarte.finish.new.Discard.view02', false);
               trackTimer.startTracking();
            }

            var view011 = new View({
               'resource' : 'sgzDescarte',
               'id' : 'SGZDescarte.finish.new.Discard.view02',
            });
            ui001.addChild( view011 );

            var requiredResources011 = {
               'sgzDescarte' : {
                  'artifactId' : 'SGZDescarte.finishDiscard.footer02.new.requiredResource',
                  'id' : 'awfda29252',
               },
            };
            view011.addRequiredResources( requiredResources011 );

            var actions007 = new Actions({
               'artifactId' : 'SGZArbo.newAssetView_new_actions02',
               'id' : 'aw4c2af8dd',
            });
            view011.addChild( actions007 );


            var action006 = new Action({
               'image' : '\/images\/Use-Current-Location.svg',
               'artifactId' : 'WorkExecution.WorkDetailView_CaptureGPS_action-new02',
               'id' : 'aw4ec36a88',
               'label' : MessageService.createStaticMessage('Capture GPS'),
            });
            actions007.addChild( action006 );

            var eventHandlers029 = [
               {
                     'method' : 'updateCurrentGPSPosition',
                     'artifactId' : 'WorkExecution.WorkDetailView_CaptureGPS_action-new_eventHandlers_click02',
                     'id' : 'awd51927c',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            action006.eventHandlers = eventHandlers029;

            var container015 = new Container({
               'artifactId' : 'SGZDescarte.footer.new.container02',
               'id' : 'awa18608f4',
            });
            view011.addChild( container015 );


            var group008 = new Group({
               'artifactId' : 'SGZDescarte.footer.new.container.group02',
               'id' : 'aw45ec990f',
            });
            container015.addChild( group008 );


            var groupitem020 = new GroupItem({
               'artifactId' : 'SGZDescarte.footer.new.container.group.groupitem02',
               'id' : 'aw5b4a9649',
            });
            group008.addChild( groupitem020 );


            var text039 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZDescarte.footer.new.container.group.groupitem.text02',
               'id' : 'aw7a782687',
               'value' : MessageService.createStaticMessage('Descarte conclu\u00EDdo com sucesso?'),
            });
            groupitem020.addChild( text039 );


            var text040 = new Text({
               'resourceAttribute' : 'ms_latitudey',
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZDescarte.footer.new.container.group.groupitem.text102',
               'id' : 'aw5a87d81d',
               'label' : MessageService.createStaticMessage('Latitude'),
            });
            groupitem020.addChild( text040 );


            var text041 = new Text({
               'resourceAttribute' : 'ms_longitudex',
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZDescarte.footer.new.container.group.groupitem.text202',
               'id' : 'aw58c16644',
               'label' : MessageService.createStaticMessage('Longitude'),
            });
            groupitem020.addChild( text041 );


            var footer008 = new Footer({
               'artifactId' : 'SGZDescarte.footer.new_sim_footer02',
               'id' : 'awbbd72e7d',
            });
            view011.addChild( footer008 );


            var button017 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZDescarte.footer.new_sim02',
               'id' : 'aw3962f100',
               'label' : MessageService.createStaticMessage('Sim'),
               'primary' : 'true',
            });
            var eventHandlers030 = [
               {
                     'method' : 'finishDiscardSucess',
                     'artifactId' : 'SGZDescarte.footer.new_sim_finishDiscard02',
                     'id' : 'awd637f9e7',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button017.eventHandlers = eventHandlers030;
            footer008.addChild( button017 );


            var button018 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'transitionTo' : 'SGZDescarte.reasonView',
               'artifactId' : 'SGZDescarte.footer.new_nao02',
               'id' : 'aw67225eb2',
               'label' : MessageService.createStaticMessage('N\u00E3o'),
               'primary' : 'true',
            });
            footer008.addChild( button018 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZDescarte.AttachmentsCategory', false);
               trackTimer.startTracking();
            }

            var view012 = new View({
               'id' : 'SGZDescarte.AttachmentsCategory',
               'label' : MessageService.createStaticMessage('Categorias de Anexos'),
            });
            ui001.addChild( view012 );

            var requiredResources012 = {
               'sgzDescarte' : {
                  'artifactId' : 'SGZDescarte.AttachmentsCategory_sgzDescarte',
                  'id' : 'aw3846df53',
                  'related' : {
                     'atcsessionlist' : {
                        'artifactId' : 'SGZDescarte.AttachmentsCategory_attribute1',
                        'id' : 'awbfb06cc2',
                     },
                     'attachments' : {
                        'artifactId' : 'SGZDescarte.AttachmentsCategory_attribute2',
                        'id' : 'aw26b93d78',
                     },
                     'msdoclinkslist' : {
                        'artifactId' : 'SGZDescarte.AttachmentsCategory_attribute3',
                        'id' : 'aw51be0dee',
                     },
                  },
               },
            };
            view012.addRequiredResources( requiredResources012 );
            var eventHandlers031 = [
               {
                     'method' : 'countAttachmentsSection',
                     'artifactId' : 'SGZDescarte.AttachmentsCategory.countAttachmentsSectionc_show',
                     'id' : 'aw218c0439',
                     'event' : 'show',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'filterParentSection',
                     'artifactId' : 'WorkExecution.AttachmentsCategory.filterParentSection_show',
                     'id' : 'aw7ad3742e',
                     'event' : 'show',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            view012.eventHandlers = eventHandlers031;


            var listItemTemplate003 = new ListItemTemplate({
               'artifactId' : 'SGZDescarte.AttachmentsCategory_listCategories',
               'id' : 'aw2a869106',
            });

            var listtext013 = new ListText({
               'resourceAttribute' : 'ms_description',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'SGZDescarte.AttachmentsCategory_listCategories_description',
               'id' : 'aw383908d7',
            });
            listItemTemplate003.addChild( listtext013 );


            var listtext014 = new ListText({
               'resourceAttribute' : 'secCount',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'SGZDescarte.AttachmentsCategory_listCategories_count',
               'id' : 'awc8366f92',
            });
            listItemTemplate003.addChild( listtext014 );


            var image006 = new Image({
               'image' : 'calibrationpoint_normal_status.png',
               'cssClass' : 'statusDesc',
               'artifactId' : 'WorkExecution.AttachmentsCategory_listCategories_count.icon.ok',
               'id' : 'aw8b8e2b77',
               'platform' : 'false',
            });
            listItemTemplate003.addChild( image006 );

            var eventHandlers032 = [
               {
                     'method' : 'checkAttachmentsOK',
                     'artifactId' : 'WorkExecution.AttachmentsCategory_listCategories_count.icon.ok.eventhandler',
                     'id' : 'awf052abf1',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            image006.eventHandlers = eventHandlers032;

            var image007 = new Image({
               'image' : 'calibrationpoint_critical_status.png',
               'cssClass' : 'statusDesc',
               'artifactId' : 'WorkExecution.AttachmentsCategory_listCategories_count.icon.pending',
               'id' : 'aw9f4bf2a5',
               'platform' : 'false',
            });
            listItemTemplate003.addChild( image007 );

            var eventHandlers033 = [
               {
                     'method' : 'checkAttachmentsNOK',
                     'artifactId' : 'WorkExecution.AttachmentsCategory_listCategories_count.icon.Nok.eventhandler',
                     'id' : 'aw4d26a54c',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            image007.eventHandlers = eventHandlers033;
            var eventHandlers034 = [
               {
                     'method' : 'hasChildSection',
                     'artifactId' : 'SGZDescarte.AttachmentsCategory_sgzDescarte_attachments_eventHandlers_render_hasChildSection',
                     'id' : 'aw5ca26e40',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            listItemTemplate003.eventHandlers = eventHandlers034;


            var list003 = new List({
               'resource' : 'sgzDescarte',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate003,
               'artifactId' : 'SGZDescarte.AttachmentsCategory_list',
               'attribute' : 'atcsessionlist',
               'id' : 'aw88e72f1a',
               'label' : MessageService.createStaticMessage('Categorias'),
            });
            view012.addChild( list003 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'sgzDescarte.AttachmentsView', false);
               trackTimer.startTracking();
            }

            var view013 = new View({
               'showOverflow' : true,
               'id' : 'sgzDescarte.AttachmentsView',
               'label' : MessageService.createStaticMessage('Attachments'),
            });
            ui001.addChild( view013 );

            var requiredResources013 = {
               'sgzDescarte' : {
                  'reload' : true,
                  'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte',
                  'id' : 'awd38cda3b',
                  'related' : {
                     'attachments' : {
                        'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte_attachments',
                        'id' : 'aw4081fe6e',
                     },
                     'atcsessionlist' : {
                        'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte_atcsessionlist',
                        'id' : 'aw5382a8f2',
                     },
                     'msdoclinkslist' : {
                        'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte_msdoclinkslist',
                        'id' : 'aw812a7fab',
                     },
                  },
               },
            };
            view013.addRequiredResources( requiredResources013 );

            var actions008 = new Actions({
               'artifactId' : 'sgzDescarte.AttachmentsView_actions',
               'id' : 'aw9608640e',
            });
            view013.addChild( actions008 );


            var action007 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'artifactId' : 'sgzDescarte.AttachmentsView_TakePhoto_action',
               'id' : 'aw3f6c54b0',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions008.addChild( action007 );

            var eventHandlers035 = [
               {
                     'method' : 'launchCameraForPhoto',
                     'artifactId' : 'sgzDescarte.AttachmentsView_TakePhoto_action_eventHandlers_click_launchCameraForPhoto',
                     'id' : 'aw7d8bf636',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               },
               {
                     'method' : 'initCategory',
                     'artifactId' : 'sgzDescarte.AttachmentsView_TakePhoto_action_eventHandlers_render_initCategory',
                     'id' : 'awb1e37efb',
                     'event' : 'render',
                     'class' : 'application.handlers.SRAttachmentHandler',
               }
            ];
            action007.eventHandlers = eventHandlers035;

            var action008 = new Action({
               'image' : 'header_add_OFF.svg',
               'artifactId' : 'sgzDescarte.AttachmentsView_PickfromGallery_action',
               'id' : 'aw889f0268',
               'label' : MessageService.createStaticMessage('Pick from Gallery'),
            });
            actions008.addChild( action008 );

            var eventHandlers036 = [
               {
                     'method' : 'launchGallery',
                     'artifactId' : 'sgzDescarte.AttachmentsView_PickfromGallery_action_eventHandlers_click_launchGallery',
                     'id' : 'awfaf61d0a',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            action008.eventHandlers = eventHandlers036;


            var sortOptions002 = new SortOptions({
               'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte_attachments_list_sortOptions',
               'id' : 'aw5963affc',
            });

            var sortOption004 = new SortOption({
               'artifactId' : 'sgzDescarte.AttachmentsView_sortOption_CreatedDate',
               'id' : 'aw7404be32',
               'label' : MessageService.createStaticMessage('Created Date'),
            });
            sortOptions002.addChild( sortOption004 );


            var sortAttribute004 = new SortAttribute({
               'name' : 'displayCreationDateISO',
               'artifactId' : 'sgzDescarte.AttachmentsView_CreatedDate_sortAttribute_displayCreationDate',
               'id' : 'awc9b54c47',
               'direction' : 'asc',
            });
            sortOption004.addChild( sortAttribute004 );


            var sortOption005 = new SortOption({
               'artifactId' : 'sgzDescarte.AttachmentsView_sortOption_FileName',
               'id' : 'awa70720f8',
               'label' : MessageService.createStaticMessage('File Name'),
            });
            sortOptions002.addChild( sortOption005 );


            var sortAttribute005 = new SortAttribute({
               'name' : 'displayFileName',
               'artifactId' : 'sgzDescarte.AttachmentsView_FileName_sortAttribute_displayFileName',
               'id' : 'awd91b6d82',
               'direction' : 'asc',
            });
            sortOption005.addChild( sortAttribute005 );


            var sortOption006 = new SortOption({
               'artifactId' : 'sgzDescarte.AttachmentsView_sortOption_Description',
               'id' : 'aw441c72ae',
               'label' : MessageService.createStaticMessage('Description'),
            });
            sortOptions002.addChild( sortOption006 );


            var sortAttribute006 = new SortAttribute({
               'name' : 'displayDescription',
               'artifactId' : 'sgzDescarte.AttachmentsView_Description_sortAttribute_displayDescription',
               'id' : 'aw394c2f0f',
               'direction' : 'asc',
            });
            sortOption006.addChild( sortAttribute006 );



            var listItemTemplate004 = new ListItemTemplate({
               'layout' : 'AttachmentsListItem',
               'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte_attachments_listItemTemplate_AttachmentsListItem',
               'id' : 'awb2f098f0',
            });

            var listtext015 = new ListText({
               'resourceAttribute' : 'displayFileName',
               'cssClass' : 'attachmentLabel',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte_AttachmentsListItem_displayFileName',
               'id' : 'awaac92b0b',
            });
            listItemTemplate004.addChild( listtext015 );


            var listtext016 = new ListText({
               'resourceAttribute' : 'displayDescription',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte_AttachmentsListItem_displayDescription',
               'id' : 'aw6cb68956',
            });
            listItemTemplate004.addChild( listtext016 );


            var listtext017 = new ListText({
               'resourceAttribute' : 'displayFileType',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte_AttachmentsListItem_displayFileType',
               'id' : 'aw78340224',
            });
            listItemTemplate004.addChild( listtext017 );


            var button019 = new Button({
               'border' : 'false',
               'resourceAttribute' : 'anywhereAttachDownloaded',
               'image' : '\/images\/msg_downloadComplete_small.svg',
               'cssClass' : 'attachmentIcon',
               'layoutInsertAt' : 'icon',
               'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button',
               'id' : 'aw17e98f05',
            });
            var eventHandlers037 = [
               {
                     'method' : 'displayLocal',
                     'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button_eventHandlers_datachange_displayLocal',
                     'id' : 'awe62222e4',
                     'event' : 'datachange',
                     'class' : 'application.handlers.SRAttachmentHandler',
               },
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button_eventHandlers_click_handleThumbnailClick',
                     'id' : 'aw256b07d1',
                     'event' : 'click',
                     'class' : 'application.handlers.SRAttachmentHandler',
               }
            ];
            button019.eventHandlers = eventHandlers037;
            listItemTemplate004.addChild( button019 );


            var listtext018 = new ListText({
               'resourceAttribute' : 'displaySize',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte_AttachmentsListItem_displaySize',
               'id' : 'awe60b0d92',
            });
            listItemTemplate004.addChild( listtext018 );


            var listtext019 = new ListText({
               'resourceAttribute' : 'createby',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte_AttachmentsListItem_createby',
               'id' : 'awa845c930',
            });
            listItemTemplate004.addChild( listtext019 );


            var listtext020 = new ListText({
               'resourceAttribute' : 'displayCreationDate',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte_AttachmentsListItem_displayCreationDate',
               'id' : 'aw6cf94f24',
            });
            listItemTemplate004.addChild( listtext020 );

            var eventHandlers038 = [
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte_attachments_listItemTemplate_AttachmentsListItem_eventHandlers_click_handleThumbnailClick',
                     'id' : 'aw9faed67c',
                     'event' : 'click',
                     'class' : 'application.handlers.SRAttachmentHandler',
               }
            ];
            listItemTemplate004.eventHandlers = eventHandlers038;


            var list004 = new List({
               'resource' : 'sgzDescarte',
               'sortOptions' : sortOptions002,
               'listItemTemplate' : listItemTemplate004,
               'artifactId' : 'sgzDescarte.AttachmentsView_sgzDescarte_attachments_list',
               'attribute' : 'attachments',
               'id' : 'aw49d81e09',
            });
            view013.addChild( list004 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.FilteredAttachmentsView', false);
               trackTimer.startTracking();
            }

            var view014 = new View({
               'showOverflow' : true,
               'id' : 'WorkExecution.FilteredAttachmentsView',
               'label' : MessageService.createStaticMessage('Attachments (Categorizado)'),
            });
            ui001.addChild( view014 );

            var requiredResources014 = {
               'sgzDescarte' : {
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
            view014.addRequiredResources( requiredResources014 );

            var actions009 = new Actions({
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_actions',
               'id' : 'aw90951c2a',
            });
            view014.addChild( actions009 );


            var action009 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_TakePhoto_action',
               'id' : 'awc782f9db',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions009.addChild( action009 );

            var eventHandlers039 = [
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
            action009.eventHandlers = eventHandlers039;

            var action010 = new Action({
               'image' : 'header_add_OFF.svg',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_PickfromGallery_action',
               'id' : 'awef6cb2b5',
               'label' : MessageService.createStaticMessage('Pick from Gallery'),
            });
            actions009.addChild( action010 );

            var eventHandlers040 = [
               {
                     'method' : 'launchGallery',
                     'artifactId' : 'WorkExecution.FilteredAttachmentsView_PickfromGallery_action_eventHandlers_click_launchGallery',
                     'id' : 'aw6e09fadd',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            action010.eventHandlers = eventHandlers040;
            var eventHandlers041 = [
               {
                     'method' : 'filterAttachments',
                     'artifactId' : 'WorkExecution.FilteredAttachmentsView_Filter_eventHandlers_render_filterAttachments',
                     'id' : 'awd3c86915',
                     'event' : 'show',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            view014.eventHandlers = eventHandlers041;


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



            var listItemTemplate005 = new ListItemTemplate({
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
            listItemTemplate005.addChild( listtext021 );


            var listtext022 = new ListText({
               'resourceAttribute' : 'displayDescription',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_AttachmentsListItem_displayDescription',
               'id' : 'aw4557b181',
            });
            listItemTemplate005.addChild( listtext022 );


            var listtext023 = new ListText({
               'resourceAttribute' : 'displayFileType',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_AttachmentsListItem_displayFileType',
               'id' : 'aw2c40385d',
            });
            listItemTemplate005.addChild( listtext023 );


            var button020 = new Button({
               'border' : 'false',
               'resourceAttribute' : 'anywhereAttachDownloaded',
               'image' : '\/images\/msg_downloadComplete_small.svg',
               'cssClass' : 'attachmentIcon',
               'layoutInsertAt' : 'icon',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.png_button',
               'id' : 'aw95fd5814',
            });
            var eventHandlers042 = [
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
            button020.eventHandlers = eventHandlers042;
            listItemTemplate005.addChild( button020 );


            var listtext024 = new ListText({
               'resourceAttribute' : 'displaySize',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_AttachmentsListItem_displaySize',
               'id' : 'aw64b43dac',
            });
            listItemTemplate005.addChild( listtext024 );


            var listtext025 = new ListText({
               'resourceAttribute' : 'createby',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_AttachmentsListItem_createby',
               'id' : 'awd7901339',
            });
            listItemTemplate005.addChild( listtext025 );


            var listtext026 = new ListText({
               'resourceAttribute' : 'displayCreationDate',
               'cssClass' : 'attachmentInfo',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_AttachmentsListItem_displayCreationDate',
               'id' : 'aw7467e96b',
            });
            listItemTemplate005.addChild( listtext026 );

            var eventHandlers043 = [
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem_eventHandlers_click_handleThumbnailClick',
                     'id' : 'aw458e1168',
                     'event' : 'click',
                     'class' : 'application.handlers.WOAttachmentHandler',
               }
            ];
            listItemTemplate005.eventHandlers = eventHandlers043;


            var list005 = new List({
               'resource' : 'sgzDescarte',
               'sortOptions' : sortOptions003,
               'listItemTemplate' : listItemTemplate005,
               'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_attachments_list',
               'attribute' : 'attachments',
               'id' : 'aw9c80cd25',
            });
            view014.addChild( list005 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'WorkExecution.AttachmentsChildCategory', false);
               trackTimer.startTracking();
            }

            var view015 = new View({
               'id' : 'WorkExecution.AttachmentsChildCategory',
               'label' : MessageService.createStaticMessage('1- Categorias de Anexos (Filho)'),
            });
            ui001.addChild( view015 );

            var requiredResources015 = {
               'sgzDescarte' : {
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
            view015.addRequiredResources( requiredResources015 );
            var eventHandlers044 = [
               {
                     'method' : 'countAttachmentsSection',
                     'artifactId' : 'WorkExecution.WODetailView.countAttachmentsSectionc_show',
                     'id' : 'awcf085253',
                     'event' : 'show',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            view015.eventHandlers = eventHandlers044;


            var listItemTemplate006 = new ListItemTemplate({
               'artifactId' : 'WorkExecution.AttachmentsChildCategory_listCategories',
               'id' : 'awc485e87d',
            });

            var listtext027 = new ListText({
               'resourceAttribute' : 'ms_description',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'WorkExecution.AttachmentsChildCategory_listCategories_description',
               'id' : 'awf14da021',
            });
            listItemTemplate006.addChild( listtext027 );


            var listtext028 = new ListText({
               'resourceAttribute' : 'secCount',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'WorkExecution.AttachmentsChildCategory_listCategories_count',
               'id' : 'awecd8426a',
            });
            listItemTemplate006.addChild( listtext028 );

            var eventHandlers045 = [
               {
                     'method' : 'filterAttachments',
                     'artifactId' : 'WorkExecution.FilteredAttachmentsView_workOrder_attachments_listItemTemplate_AttachmentsListItem_eventHandlers_render_FilterAttachments',
                     'id' : 'aw863d34bb',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            listItemTemplate006.eventHandlers = eventHandlers045;


            var list006 = new List({
               'resource' : 'workOrder',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate006,
               'artifactId' : 'WorkExecution.AttachmentsChildCategory_list',
               'attribute' : 'atcsessionlist',
               'id' : 'aw95c7aa83',
               'label' : MessageService.createStaticMessage('Categorias'),
            });
            view015.addChild( list006 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog004 = new Dialog({
               'id' : 'SGZDescarte.ConfirmCancel',
            });
            ui001.addChild( dialog004 );


            var container016 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'SGZDescarte.ConfirmCancel_container_0',
               'id' : 'awa0e9fcc6',
            });
            dialog004.addChild( container016 );


            var text042 = new Text({
               'artifactId' : 'SGZDescarte.ConfirmCancel_container_0_Areyousure',
               'id' : 'aw725287a6',
               'value' : MessageService.createStaticMessage('Are you sure you wish to Cancel?  All changes to this request will be lost.'),
            });
            container016.addChild( text042 );


            var container017 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'SGZDescarte.ConfirmCancel_container_1',
               'id' : 'awd7eecc50',
            });
            dialog004.addChild( container017 );


            var button021 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZDescarte.ConfirmCancel_Yes_button',
               'id' : 'aw83f905b2',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers046 = [
               {
                     'method' : 'yesOnCancel',
                     'artifactId' : 'SGZDescarte.ConfirmCancel_Yes_button_eventHandlers_click_yesOnCancel',
                     'id' : 'awdfdbc8e7',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button021.eventHandlers = eventHandlers046;
            container017.addChild( button021 );


            var button022 = new Button({
               'artifactId' : 'SGZDescarte.ConfirmCancel_No_button',
               'id' : 'aw783fa64f',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers047 = [
               {
                     'method' : 'noOnCancel',
                     'artifactId' : 'SGZDescarte.ConfirmCancel_No_button_eventHandlers_click_noOnCancel',
                     'id' : 'aw91726563',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button022.eventHandlers = eventHandlers047;
            container017.addChild( button022 );


            var dialog005 = new Dialog({
               'id' : 'SGZDescarte.CompleCarreg',
            });
            ui001.addChild( dialog005 );


            var container018 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'SGZDescarte.CompleCarreg_container_0',
               'id' : 'awb1043bb',
            });
            dialog005.addChild( container018 );


            var text043 = new Text({
               'artifactId' : 'SGZDescarte.CompleCarreg_container_0_Areyousure',
               'id' : 'awf56bc6fd',
               'value' : MessageService.createStaticMessage('Tem certeza que deseja finalizar o ticket?'),
            });
            container018.addChild( text043 );


            var container019 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'SGZDescarte.CompleCarreg_container_1',
               'id' : 'aw7c17732d',
            });
            dialog005.addChild( container019 );


            var button023 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZDescarte.CompleCarreg_Yes_button',
               'id' : 'awab7b219d',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers048 = [
               {
                     'method' : 'finalizarSgzUsinaView',
                     'artifactId' : 'SGZDescarte.CompleCarreg_Yes_button_eventHandlers_click_yesOnCancel',
                     'id' : 'awb3857fba',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button023.eventHandlers = eventHandlers048;
            container019.addChild( button023 );


            var button024 = new Button({
               'artifactId' : 'SGZDescarte.CompleCarreg_No_button',
               'id' : 'awf8a31777',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers049 = [
               {
                     'method' : 'carregAfterIncShowDialog',
                     'artifactId' : 'SGZDescarte.CompleCarreg_No_button_eventHandlers_click_noOnCancel',
                     'id' : 'awdb8e205e',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button024.eventHandlers = eventHandlers049;
            container019.addChild( button024 );


            var dialog006 = new Dialog({
               'id' : 'SGZDescarte.After.CompleCarreg',
            });
            ui001.addChild( dialog006 );


            var container020 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'SGZDescarte.After.CompleCarreg_container_0',
               'id' : 'awb52842e9',
            });
            dialog006.addChild( container020 );


            var text044 = new Text({
               'artifactId' : 'SGZDescarte.After.CompleCarreg_container_0_Areyousure',
               'id' : 'aw6cee6f79',
               'value' : MessageService.createStaticMessage('O carregamento desse ticket esta completo?'),
            });
            container020.addChild( text044 );


            var container021 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'SGZDescarte.After.CompleCarreg_container_1',
               'id' : 'awc22f727f',
            });
            dialog006.addChild( container021 );


            var button025 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZDescarte.After.CompleCarreg_Yes_button',
               'id' : 'aw986a63ef',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers050 = [
               {
                     'method' : 'finalizarSgzUsinaViewNovo',
                     'artifactId' : 'SGZDescarte.After.CompleCarreg_Yes_button_eventHandlers_click_yesOnCancel',
                     'id' : 'aw72b5b678',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button025.eventHandlers = eventHandlers050;
            container021.addChild( button025 );


            var button026 = new Button({
               'artifactId' : 'SGZDescarte.After.CompleCarreg_No_button',
               'id' : 'aweafc801a',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers051 = [
               {
                     'method' : 'carregAfterIncShowView02',
                     'artifactId' : 'SGZDescarte.After.CompleCarreg_No_button_eventHandlers_click_noOnCancel',
                     'id' : 'awd1e7246f',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button026.eventHandlers = eventHandlers051;
            container021.addChild( button026 );


            var lookup001 = new Lookup({
               'resource' : 'whylist',
               'id' : 'SGZDescarte.whylookup',
               'label' : MessageService.createStaticMessage('Selecione o motivo'),
            });
            ui001.addChild( lookup001 );

            var requiredResources016 = {
               'whylist' : {
                  'artifactId' : 'SGZDescarte.whylookup.requiredResource.whylist',
                  'id' : 'aw50fbc0f4',
               },
            };
            lookup001.addRequiredResources( requiredResources016 );


            var listItemTemplate007 = new ListItemTemplate({
               'artifactId' : 'SGZDescarte.whylookup.listItemTemplate',
               'id' : 'awd8cbcd2c',
            });

            var listtext029 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'SGZDescarte.whylookup.listtext.description',
               'id' : 'aw4303968d',
            });
            listItemTemplate007.addChild( listtext029 );



            var list007 = new List({
               'resource' : 'whylist',
               'listItemTemplate' : listItemTemplate007,
               'artifactId' : 'SGZDescarte.whylookup.list',
               'id' : 'aw3278fa63',
            });
            lookup001.addChild( list007 );


            var returnAttributes001 = new ReturnAttributes({
               'artifactId' : 'SGZDescarte.whylookup.returnAttributes',
               'id' : 'awc6b82f50',
            });
            lookup001.addChild( returnAttributes001 );


            var returnAttribute001 = new ReturnAttribute({
               'targetAttribute' : 'ms_whynum',
               'artifactId' : 'SGZDescarte.whylookup.returnAttributes.pd_whynum.ms_whynum',
               'id' : 'aw97ea189f',
               'sourceAttribute' : 'pd_whynum',
            });
            returnAttributes001.addChild( returnAttribute001 );


            var lookup002 = new Lookup({
               'resource' : 'appDocType',
               'id' : 'SGZDescarte.appDocTypeLookup',
               'label' : MessageService.createStaticMessage('Select Value'),
            });
            ui001.addChild( lookup002 );

            var requiredResources017 = {
               'appDocType' : {
                  'artifactId' : 'SGZDescarte.appDocTypeLookup_appDocType',
                  'id' : 'awbff41cd6',
               },
            };
            lookup002.addRequiredResources( requiredResources017 );


            var listItemTemplate008 = new ListItemTemplate({
               'artifactId' : 'SGZDescarte.appDocTypeLookup_appDocType_listItemTemplate',
               'id' : 'awdbcd282e',
            });

            var listtext030 = new ListText({
               'resourceAttribute' : 'doctype',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'SGZDescarte.appDocTypeLookup_appDocType_doctype',
               'id' : 'aw60ef2339',
            });
            listItemTemplate008.addChild( listtext030 );



            var list008 = new List({
               'resource' : 'appDocType',
               'listItemTemplate' : listItemTemplate008,
               'artifactId' : 'SGZDescarte.appDocTypeLookup_appDocType_list',
               'id' : 'awd40783a6',
            });
            lookup002.addChild( list008 );


            var returnAttributes002 = new ReturnAttributes({
               'artifactId' : 'SGZDescarte.appDocTypeLookup_returnAttributes',
               'id' : 'aw31b4f97b',
            });
            lookup002.addChild( returnAttributes002 );


            var returnAttribute002 = new ReturnAttribute({
               'targetAttribute' : 'category',
               'artifactId' : 'SGZDescarte.appDocTypeLookup_doctype_category',
               'id' : 'awd4f1a510',
               'sourceAttribute' : 'doctype',
            });
            returnAttributes002.addChild( returnAttribute002 );


            var lookup003 = new Lookup({
               'resource' : 'MSaptoolauth',
               'id' : 'ServiceRequest.MSaptoolauthLookup',
               'label' : MessageService.createStaticMessage('Selecione'),
            });
            ui001.addChild( lookup003 );

            var requiredResources018 = {
               'MSaptoolauth' : {
                  'artifactId' : 'ServiceRequest.MSaptoolauthLookup_additionalMSaptoolauth',
                  'id' : 'awc14cf549',
               },
            };
            lookup003.addRequiredResources( requiredResources018 );


            var listItemTemplate009 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'ServiceRequest.MSaptoolauth_listItemTemplate_Item1Desc1',
               'id' : 'aw316d9c4b',
            });

            var listtext031 = new ListText({
               'resourceAttribute' : 'ms_itemnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'ServiceRequest.MSaptoolauth_Item1Desc1_ms_itemnum',
               'id' : 'awd70375ab',
            });
            listItemTemplate009.addChild( listtext031 );


            var listtext032 = new ListText({
               'resourceAttribute' : 'ms_plate',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'ServiceRequest.MSaptoolauth_Item1Desc1_ms_plate',
               'id' : 'aweaa88edd',
            });
            listItemTemplate009.addChild( listtext032 );


            var listtext033 = new ListText({
               'resourceAttribute' : 'ms_active',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'ServiceRequest.MSaptoolauth_Item1Desc1_ms_active',
               'id' : 'aw4f5eec4e',
            });
            listItemTemplate009.addChild( listtext033 );


            var listtext034 = new ListText({
               'resourceAttribute' : 'ms_asphaltplantid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'ServiceRequest.MSaptoolauth_Item1Desc1_ms_asphaltplantid',
               'id' : 'aw7bbe0eb',
            });
            listItemTemplate009.addChild( listtext034 );


            var listtext035 = new ListText({
               'resourceAttribute' : 'ms_company',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'ServiceRequest.MSaptoolauth_Item1Desc1_ms_company',
               'id' : 'aw30d144e4',
            });
            listItemTemplate009.addChild( listtext035 );


            var listtext036 = new ListText({
               'resourceAttribute' : 'ms_loadcapacity',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'ServiceRequest.MSaptoolauth_Item1Desc1_ms_loadcapacity',
               'id' : 'awfea6f997',
            });
            listItemTemplate009.addChild( listtext036 );



            var list009 = new List({
               'resource' : 'MSaptoolauth',
               'listItemTemplate' : listItemTemplate009,
               'artifactId' : 'ServiceRequest.MSaptoolauth_list',
               'id' : 'aw818b3d88',
            });
            lookup003.addChild( list009 );


            var returnAttributes003 = new ReturnAttributes({
               'artifactId' : 'ServiceRequest.AssetLookup_returnAttributes',
               'id' : 'aw6d2b97c9',
            });
            lookup003.addChild( returnAttributes003 );


            var returnAttribute003 = new ReturnAttribute({
               'targetAttribute' : 'ms_itemnum',
               'artifactId' : 'ServiceRequest.MSaptoolauthLookup_ms_itemnum',
               'id' : 'awcd93b864',
               'sourceAttribute' : 'ms_itemnum',
            });
            returnAttributes003.addChild( returnAttribute003 );


            var returnAttribute004 = new ReturnAttribute({
               'targetAttribute' : 'ms_plate',
               'artifactId' : 'ServiceRequest.MSaptoolauthLookup_ms_plate',
               'id' : 'aw2cbfdbb9',
               'sourceAttribute' : 'ms_plate',
            });
            returnAttributes003.addChild( returnAttribute004 );


            var lookup004 = new Lookup({
               'resource' : 'MSasphaltTransf',
               'id' : 'ServiceRequest.MSasphaltplantLookup',
               'label' : MessageService.createStaticMessage('Selecione Usina Credenciada'),
            });
            ui001.addChild( lookup004 );

            var requiredResources019 = {
               'MSasphaltTransf' : {
                  'artifactId' : 'ServiceRequest.MSasphaltplantLookup_additionalMSasphaltplant',
                  'id' : 'awfb6bbb6f',
               },
            };
            lookup004.addRequiredResources( requiredResources019 );


            var listItemTemplate010 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'ServiceRequest.MSasphaltplant_listItemTemplate_Item1Desc1',
               'id' : 'aw8a4180f4',
            });

            var listtext037 = new ListText({
               'resourceAttribute' : 'idusina',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'ServiceRequest.MSasphaltplant_Item1Desc1_identifier',
               'id' : 'awc3d0957',
            });
            listItemTemplate010.addChild( listtext037 );


            var listtext038 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'ServiceRequest.MSasphaltplant_Item1Desc1_ms_description',
               'id' : 'awedf5f544',
            });
            listItemTemplate010.addChild( listtext038 );


            var listtext039 = new ListText({
               'resourceAttribute' : 'ms_active',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'ServiceRequest.MSasphaltplant_Item1Desc1_ms_active',
               'id' : 'awe41ab31b',
            });
            listItemTemplate010.addChild( listtext039 );



            var list010 = new List({
               'resource' : 'MSasphaltTransf',
               'listItemTemplate' : listItemTemplate010,
               'artifactId' : 'ServiceRequest.MSasphaltplant_list',
               'id' : 'aw67a56984',
            });
            lookup004.addChild( list010 );


            var returnAttributes004 = new ReturnAttributes({
               'artifactId' : 'ServiceRequest.Lookup_returnAttributes01',
               'id' : 'awa6dcb55f',
            });
            lookup004.addChild( returnAttributes004 );


            var returnAttribute005 = new ReturnAttribute({
               'targetAttribute' : 'ms_apidauth',
               'artifactId' : 'ServiceRequest.PriorityLookup_value_reportedpriority',
               'id' : 'aw29e263aa',
               'sourceAttribute' : 'idusina',
            });
            returnAttributes004.addChild( returnAttribute005 );


            var returnAttribute006 = new ReturnAttribute({
               'targetAttribute' : 'usinadesc',
               'artifactId' : 'ServiceRequest.priorityLookup_description_prioritydesc',
               'id' : 'awe2b0ad8f',
               'sourceAttribute' : 'description',
            });
            returnAttributes004.addChild( returnAttribute006 );


            var lookup005 = new Lookup({
               'filterMethod' : 'verificaVeiculoLookup',
               'resource' : 'subpref',
               'filterClass' : 'custom.handlers.MSSRDetailHandler',
               'id' : 'ServiceRequest.msSiteLookup',
               'label' : MessageService.createStaticMessage('Selecione Site'),
            });
            ui001.addChild( lookup005 );

            var requiredResources020 = {
               'subpref' : {
                  'artifactId' : 'ServiceRequest.msSiteLookup_additionalmsSite',
                  'id' : 'awdbca63f6',
               },
            };
            lookup005.addRequiredResources( requiredResources020 );


            var listItemTemplate011 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'ServiceRequest.subpref_listItemTemplate_Item1Desc1',
               'id' : 'aw8b830085',
            });

            var listtext040 = new ListText({
               'resourceAttribute' : 'siteid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'ServiceRequest.subpref_Item1Desc1_identifier',
               'id' : 'aw401b4ceb',
            });
            listItemTemplate011.addChild( listtext040 );


            var listtext041 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'ServiceRequest.subpref_Item1Desc1_ms_description',
               'id' : 'aw70b4c5d2',
            });
            listItemTemplate011.addChild( listtext041 );


            var listtext042 = new ListText({
               'resourceAttribute' : 'orgid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'ServiceRequest.subpref_Item1Desc1_ms_active',
               'id' : 'awab4f513a',
            });
            listItemTemplate011.addChild( listtext042 );



            var list011 = new List({
               'resource' : 'subpref',
               'listItemTemplate' : listItemTemplate011,
               'artifactId' : 'ServiceRequest.msSite_list',
               'id' : 'aw9d44593f',
            });
            lookup005.addChild( list011 );


            var returnAttributes005 = new ReturnAttributes({
               'artifactId' : 'ServiceRequest.Lookup_returnAttributes02',
               'id' : 'aw3fd5e4e5',
            });
            lookup005.addChild( returnAttributes005 );


            var returnAttribute007 = new ReturnAttribute({
               'targetAttribute' : 'ms_siteid',
               'artifactId' : 'ServiceRequest.msSiteLookup_value_siteid',
               'id' : 'awbd9d61c4',
               'sourceAttribute' : 'siteid',
            });
            returnAttributes005.addChild( returnAttribute007 );


            var returnAttribute008 = new ReturnAttribute({
               'targetAttribute' : 'sitedesc',
               'artifactId' : 'ServiceRequest.msSiteLookup_description_sitedesc',
               'id' : 'awc771e433',
               'sourceAttribute' : 'description',
            });
            returnAttributes005.addChild( returnAttribute008 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AttachmentInfoView', false);
               trackTimer.startTracking();
            }

            var view016 = new View({
               'resource' : 'PlatformAttachmentInfoResource',
               'id' : 'Platform.AttachmentInfoView',
               'label' : MessageService.createStaticMessage('Attachment Details'),
            });
            ui001.addChild( view016 );

            var requiredResources021 = {
               'PlatformAttachmentInfoResource' : {
                  'reload' : true,
                  'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource',
                  'id' : 'awedbd920b',
               },
            };
            view016.addRequiredResources( requiredResources021 );

            var container022 = new Container({
               'resource' : 'PlatformAttachmentInfoResource',
               'artifactId' : 'Platform.AttachmentInfoView_container_0',
               'id' : 'aw22b80d5f',
            });
            view016.addChild( container022 );


            var group009 = new Group({
               'artifactId' : 'Platform.AttachmentInfoView_group_0',
               'id' : 'aw80e7b381',
            });
            container022.addChild( group009 );


            var groupitem021 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_0',
               'id' : 'aw15768e0',
            });
            group009.addChild( groupitem021 );


            var text045 = new Text({
               'resourceAttribute' : 'name',
               'editable' : true,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_0_name_Name',
               'id' : 'awddf675f4',
               'label' : MessageService.createStaticMessage('Name'),
               'required' : true,
            });
            groupitem021.addChild( text045 );


            var groupitem022 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_1',
               'id' : 'aw76505876',
            });
            group009.addChild( groupitem022 );


            var text046 = new Text({
               'resourceAttribute' : 'description',
               'editable' : true,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_1_description_Description',
               'id' : 'awc2735258',
               'label' : MessageService.createStaticMessage('Description'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem022.addChild( text046 );


            var groupitem023 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2',
               'id' : 'awef5909cc',
            });
            group009.addChild( groupitem023 );


            var text047 = new Text({
               'resourceAttribute' : 'category',
               'lookup' : 'PlatformAttachmentIn.CategoryLookup',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2_category_Folder',
               'id' : 'aw3a5ae064',
               'label' : MessageService.createStaticMessage('Folder'),
               'lookupAttribute' : 'folderName',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem023.addChild( text047 );

            var eventHandlers052 = [
               {
                     'method' : 'renderCategory',
                     'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2_category_Folder_eventHandlers_render_renderCategory',
                     'id' : 'awa205ff23',
                     'event' : 'render',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            text047.eventHandlers = eventHandlers052;

            var groupitem024 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_3',
               'id' : 'aw985e395a',
            });
            group009.addChild( groupitem024 );


            var text048 = new Text({
               'resourceAttribute' : 'fileType',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_3_fileType_FileType',
               'id' : 'awf0b55f9',
               'label' : MessageService.createStaticMessage('File Type'),
            });
            groupitem024.addChild( text048 );


            var groupitem025 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_4',
               'id' : 'aw63aacf9',
            });
            group009.addChild( groupitem025 );


            var text049 = new Text({
               'resourceAttribute' : 'fileSize',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_4_fileSize_FileSizeKB',
               'id' : 'awa8aac05f',
               'label' : MessageService.createStaticMessage('File Size (KB)'),
            });
            groupitem025.addChild( text049 );


            var footer009 = new Footer({
               'artifactId' : 'Platform.AttachmentInfoView_footer',
               'id' : 'awad3a6a43',
            });
            view016.addChild( footer009 );


            var button027 = new Button({
               'artifactId' : 'Platform.AttachmentInfoView_Cancel_button',
               'id' : 'aw61842429',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers053 = [
               {
                     'method' : 'handleBackButtonAttachmentDetailsView',
                     'artifactId' : 'Platform.AttachmentInfoView_Cancel_button_eventHandlers_click_handleBackButtonAttachmentDetailsView',
                     'id' : 'aw2e660b65',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button027.eventHandlers = eventHandlers053;
            footer009.addChild( button027 );


            var button028 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.AttachmentInfoView_Save_button',
               'id' : 'aw8904293b',
               'label' : MessageService.createStaticMessage('Save'),
            });
            var eventHandlers054 = [
               {
                     'method' : 'commitAttachmentEntry',
                     'artifactId' : 'Platform.AttachmentInfoView_Save_button_eventHandlers_click_commitAttachmentEntry',
                     'id' : 'awbff90b7f',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button028.eventHandlers = eventHandlers054;
            footer009.addChild( button028 );

            var eventHandlers055 = [
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
            view016.eventHandlers = eventHandlers055;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AttachmentFileDialog', false);
               trackTimer.startTracking();
            }

            var view017 = new View({
               'id' : 'Platform.AttachmentFileDialog',
            });
            ui001.addChild( view017 );


            var footer010 = new Footer({
               'artifactId' : 'Platform.AttachmentFileDialog_footer',
               'id' : 'awb513dc05',
            });
            view017.addChild( footer010 );


            var button029 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.UnsavedSketch_doNotAllow_button',
               'id' : 'aw150d1bc',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers056 = [
               {
                     'method' : 'closeFileDialog',
                     'artifactId' : 'Platform.AttachmentFileDialog_closeDialog',
                     'id' : 'awc0d2f7fd',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button029.eventHandlers = eventHandlers056;
            footer010.addChild( button029 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var lookup006 = new Lookup({
               'resource' : 'PlatformAttachmentCategoryResource',
               'id' : 'PlatformAttachmentIn.CategoryLookup',
               'label' : MessageService.createStaticMessage('Select Folder'),
            });
            ui001.addChild( lookup006 );

            var requiredResources022 = {
               'PlatformAttachmentCategoryResource' : {
                  'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource',
                  'id' : 'aw18cc3542',
               },
            };
            lookup006.addRequiredResources( requiredResources022 );


            var searchAttributes001 = new SearchAttributes({
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_searchAttributes',
               'id' : 'awb7d9341f',
            });

            var searchAttribute001 = new SearchAttribute({
               'name' : 'folderName',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_searchAttribute_folderName',
               'id' : 'aw9514e6e6',
            });
            searchAttributes001.addChild( searchAttribute001 );



            var listItemTemplate012 = new ListItemTemplate({
               'layout' : 'Item2Desc2',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_listItemTemplate_Item2Desc2',
               'id' : 'aweb3659e3',
            });

            var listtext043 = new ListText({
               'resourceAttribute' : 'folderName',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_Item2Desc2_folderName',
               'id' : 'aw48fc196b',
            });
            listItemTemplate012.addChild( listtext043 );



            var list012 = new List({
               'resource' : 'PlatformAttachmentCategoryResource',
               'listItemTemplate' : listItemTemplate012,
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_list',
               'id' : 'awe6857cc4',
               'searchAttributes' : searchAttributes001,
            });
            lookup006.addChild( list012 );


            var returnAttributes006 = new ReturnAttributes({
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_returnAttributes',
               'id' : 'aw4860e6b5',
            });
            lookup006.addChild( returnAttributes006 );


            var returnAttribute009 = new ReturnAttribute({
               'targetAttribute' : 'category',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_folderName_category',
               'id' : 'awb2f5d728',
               'sourceAttribute' : 'folderName',
            });
            returnAttributes006.addChild( returnAttribute009 );


            var actions010 = new Actions({
               'artifactId' : 'actions',
               'id' : 'aw548f1ef',
            });
            ui001.addChild( actions010 );


            var action011 = new Action({
               'overflow' : true,
               'artifactId' : 'ResetWorkList_action',
               'id' : 'aw956f5d3b',
               'label' : MessageService.createStaticMessage('Reset Work List'),
            });
            actions010.addChild( action011 );

            var eventHandlers057 = [
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
            action011.eventHandlers = eventHandlers057;

            var action012 = new Action({
               'overflow' : true,
               'artifactId' : 'PseudoOffline_goOffline',
               'id' : 'aw90309912',
               'label' : MessageService.createStaticMessage('Enable Offline Mode'),
            });
            actions010.addChild( action012 );

            var eventHandlers058 = [
               {
                     'method' : 'toggleOfflineMode',
                     'artifactId' : 'PseudoOffline_enableoffline_action_eventHandlers_click',
                     'id' : 'aw33d3b70c',
                     'event' : 'click',
                     'class' : 'platform.handlers.PseudoOfflineModeHandler',
               }
            ];
            action012.eventHandlers = eventHandlers058;

            var action013 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.Settings',
               'artifactId' : 'Settings_action',
               'id' : 'awc0b1927e',
               'label' : MessageService.createStaticMessage('Settings'),
            });
            actions010.addChild( action013 );


            var action014 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.HelpAbout',
               'artifactId' : 'About_action',
               'id' : 'aw49fae06b',
               'label' : MessageService.createStaticMessage('About'),
            });
            actions010.addChild( action014 );


            var action015 = new Action({
               'overflow' : true,
               'artifactId' : 'acesso_manuais',
               'id' : 'awd1cf2641',
               'label' : MessageService.createStaticMessage('Manuais'),
            });
            actions010.addChild( action015 );

            var eventHandlers059 = [
               {
                     'method' : 'acesso_manuaisClicked',
                     'artifactId' : 'acesso_manuais_eventHandlers_click',
                     'id' : 'awb790cba8',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSLoginHandler',
               }
            ];
            action015.eventHandlers = eventHandlers059;

            var action016 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.LogOutPrompt',
               'artifactId' : 'LogOut_action',
               'id' : 'awd566efa2',
               'label' : MessageService.createStaticMessage('Log Out'),
            });
            actions010.addChild( action016 );


            var action017 = new Action({
               'artifactId' : 'action',
               'id' : 'aw47cc8c92',
            });
            actions010.addChild( action017 );

            var eventHandlers060 = [
               {
                     'artifactId' : 'action_eventHandlers_click',
                     'id' : 'aw871940b2',
                     'event' : 'click',
                     'class' : 'platform.handlers.CreateQueryBaseHandler',
               }
            ];
            action017.eventHandlers = eventHandlers060;

            var erroractions001 = new ErrorActions({
               'artifactId' : 'erroractions',
               'id' : 'aw6a5d95e9',
            });
            ui001.addChild( erroractions001 );


            var action018 = new Action({
               'artifactId' : 'UndoChanges_action',
               'id' : 'aw2236d58a',
               'label' : MessageService.createStaticMessage('Undo Changes'),
            });
            erroractions001.addChild( action018 );

            var eventHandlers061 = [
               {
                     'method' : 'confirmClearChanges',
                     'artifactId' : 'UndoChanges_action_eventHandlers_click_confirmClearChanges',
                     'id' : 'awcf857f5c',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action018.eventHandlers = eventHandlers061;

            var action019 = new Action({
               'artifactId' : 'ResendChanges_action',
               'id' : 'awccf9e70e',
               'label' : MessageService.createStaticMessage('Resend Changes'),
            });
            erroractions001.addChild( action019 );

            var eventHandlers062 = [
               {
                     'method' : 'retryRecordChanges',
                     'artifactId' : 'ResendChanges_action_eventHandlers_click_retryRecordChanges',
                     'id' : 'aw543ac47e',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action019.eventHandlers = eventHandlers062;
            var eventHandlers063 = [
               {
                     'method' : 'none',
                     'artifactId' : 'eventHandlers_none_none',
                     'id' : 'aw1e2e7ded',
                     'event' : 'none',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            ui001.eventHandlers = eventHandlers063;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.emptyview', false);
               trackTimer.startTracking();
            }

            var view018 = new View({
               'showHeader' : false,
               'id' : 'Platform.emptyview',
               'showFooter' : false,
            });
            ui001.addChild( view018 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Notifications', false);
               trackTimer.startTracking();
            }

            var view019 = new View({
               'id' : 'Platform.Notifications',
               'label' : MessageService.createStaticMessage('My Notifications'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view019 );

            var requiredResources023 = {
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
            view019.addRequiredResources( requiredResources023 );


            var listItemTemplate013 = new ListItemTemplate({
               'layout' : 'NotificationList',
               'artifactId' : 'Platform.Notifications_listItemTemplate',
               'id' : 'aw718eb447',
            });

            var listtext044 = new ListText({
               'resourceAttribute' : 'uiDate',
               'layoutInsertAt' : 'date1',
               'artifactId' : 'Platform.Notifications_uiDate',
               'id' : 'aw56b07378',
            });
            listItemTemplate013.addChild( listtext044 );


            var listtext045 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Platform.Notifications_itemnum',
               'id' : 'aw4dbbd111',
            });
            listItemTemplate013.addChild( listtext045 );


            var listtext046 = new ListText({
               'resourceAttribute' : 'itemDesc',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Platform.Notifications_itemDesc',
               'id' : 'aw6bac97b9',
            });
            listItemTemplate013.addChild( listtext046 );

            var eventHandlers064 = [
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
            listItemTemplate013.eventHandlers = eventHandlers064;


            var list013 = new List({
               'resource' : 'osusernotification',
               'listItemTemplate' : listItemTemplate013,
               'artifactId' : 'Platform.Notifications_list',
               'id' : 'awb4916253',
               'label' : MessageService.createStaticMessage('List of notifications'),
            });
            view019.addChild( list013 );

            var eventHandlers065 = [
               {
                     'method' : 'renderMsgHistory',
                     'artifactId' : 'Platform.Notifications_eventHandlers_render_FromList',
                     'id' : 'awa8aedc90',
                     'event' : 'render',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            view019.eventHandlers = eventHandlers065;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog007 = new Dialog({
               'cssClass' : 'dialogDateTimeLookup',
               'resource' : 'PlatformDateLookupResource',
               'id' : 'Platform.DateTimeLookup',
               'label' : MessageService.createStaticMessage('Change Time or Date'),
            });
            ui001.addChild( dialog007 );

            var eventHandlers066 = [
               {
                     'method' : 'initLookup',
                     'artifactId' : 'Platform.DateTimeLookup_eventHandlers_show_initLookup',
                     'id' : 'aw576c44ec',
                     'event' : 'show',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            dialog007.eventHandlers = eventHandlers066;

            var container023 = new Container({
               'artifactId' : 'Platform.DateTimeLookup_container_0',
               'id' : 'aw3cdb37d7',
            });
            dialog007.addChild( container023 );


            var datetimepicker001 = new DateTimePicker({
               'artifactId' : 'Platform.DateTimeLookup_datetimepicker_0',
               'id' : 'aw7d2f0e0d',
            });
            container023.addChild( datetimepicker001 );


            var container024 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DateTimeLookup_container_1',
               'id' : 'aw4bdc0741',
            });
            dialog007.addChild( container024 );


            var button030 = new Button({
               'artifactId' : 'Platform.DateTimeLookup_Cancel_button',
               'id' : 'aw54d2f1bb',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers067 = [
               {
                     'method' : 'Cancel',
                     'artifactId' : 'Platform.DateTimeLookup_Cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw5ced0c47',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button030.eventHandlers = eventHandlers067;
            container024.addChild( button030 );


            var button031 = new Button({
               'artifactId' : 'Platform.DateTimeLookup_Clear_button',
               'id' : 'awfd1238bd',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers068 = [
               {
                     'method' : 'Clear',
                     'artifactId' : 'Platform.DateTimeLookup_Clear_button_eventHandlers_click_Clear',
                     'id' : 'aw47510f1f',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button031.eventHandlers = eventHandlers068;
            container024.addChild( button031 );


            var button032 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DateTimeLookup_OK_button',
               'id' : 'awb1e0d280',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers069 = [
               {
                     'method' : 'SetSelection',
                     'artifactId' : 'Platform.DateTimeLookup_OK_button_eventHandlers_click_SetSelection',
                     'id' : 'aw6c08b2ff',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button032.eventHandlers = eventHandlers069;
            container024.addChild( button032 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.HelpAbout', false);
               trackTimer.startTracking();
            }

            var view020 = new View({
               'resource' : 'PlatformLoginResource',
               'id' : 'Platform.HelpAbout',
               'label' : MessageService.createStaticMessage('About'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view020 );


            var container025 = new Container({
               'cssClass' : 'platformHelpAboutContainer',
               'artifactId' : 'Platform.HelpAbout_container_0',
               'id' : 'awf8c0259e',
            });
            view020.addChild( container025 );


            var image008 = new Image({
               'image' : 'ibmLogoDark.svg',
               'artifactId' : 'Platform.HelpAbout_image_0',
               'id' : 'awfebf608a',
            });
            container025.addChild( image008 );


            var text050 = new Text({
               'resourceAttribute' : 'appName',
               'cssClass' : 'productName bold textappearance-large',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_appName',
               'id' : 'aw27632fa8',
            });
            container025.addChild( text050 );


            var text051 = new Text({
               'cssClass' : 'version',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_Version7.5.2.1',
               'id' : 'awf060501a',
               'value' : MessageService.createStaticMessage('Version 7.6.4.0'),
            });
            container025.addChild( text051 );


            var text052 = new Text({
               'cssClass' : 'build',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_Buildnumberbuild',
               'id' : 'awd289f042',
               'value' : MessageService.createStaticMessage('Build number @build@'),
            });
            container025.addChild( text052 );


            var text053 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_LicensedMaterials-',
               'id' : 'aw31046f88',
               'value' : MessageService.createStaticMessage('Licensed Materials - Property of IBM. \u00A9IBM Corp. 2020. IBM, the IBM logo, and ibm.com are trademarks of IBM Corp., registered in many jurisdictions worldwide. Other product and service names might be trademarks of IBM or other companies. A current list of IBM trademarks is available on the Web at www.ibm.com\/legal\/copytrade.shtml. This Program is licensed under the terms of the license agreement for the Program. Please read this agreement carefully before using the Program. By using the Program, you agree to these terms.'),
            });
            container025.addChild( text053 );


            var group010 = new Group({
               'debugOnly' : 'true',
               'artifactId' : 'Platform.Settings_group_2',
               'id' : 'awc5ac5572',
            });
            container025.addChild( group010 );


            var groupitem026 = new GroupItem({
               'layout' : 'ScreenInfo',
               'cssClass' : 'screenInfo',
               'artifactId' : 'Platform.Settings_screenInfo_item',
               'id' : 'aw5de3d82',
            });
            group010.addChild( groupitem026 );


            var text054 = new Text({
               'cssClass' : 'textappearance-large',
               'layoutInsertAt' : 'title',
               'artifactId' : 'Platform.Settings_screenInfo_title',
               'id' : 'awd295621c',
               'value' : MessageService.createStaticMessage('Screen Information'),
            });
            groupitem026.addChild( text054 );


            var text055 = new Text({
               'resourceAttribute' : 'ppi',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pixels',
               'artifactId' : 'Platform.Settings_screenInfo_ppi_text',
               'id' : 'aw4219624',
               'label' : MessageService.createStaticMessage('PPI'),
            });
            groupitem026.addChild( text055 );


            var text056 = new Text({
               'resourceAttribute' : 'width',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'width',
               'artifactId' : 'Platform.Settings_screenInfo_width_text',
               'id' : 'aw6564040e',
               'label' : MessageService.createStaticMessage('Width'),
            });
            groupitem026.addChild( text056 );


            var text057 = new Text({
               'resourceAttribute' : 'height',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'height',
               'artifactId' : 'Platform.Settings_screenInfo_height_text',
               'id' : 'awcd6ab682',
               'label' : MessageService.createStaticMessage('Height'),
            });
            groupitem026.addChild( text057 );


            var text058 = new Text({
               'resourceAttribute' : 'layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'size',
               'artifactId' : 'Platform.Settings_screenInfo_layout_text',
               'id' : 'awd74c1b0',
               'label' : MessageService.createStaticMessage('Layout Size'),
            });
            groupitem026.addChild( text058 );


            var text059 = new Text({
               'resourceAttribute' : 'orientation',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'orientation',
               'artifactId' : 'Platform.Settings_screenInfo_orientation_text',
               'id' : 'aw22df9e6f',
               'label' : MessageService.createStaticMessage('Orientation'),
            });
            groupitem026.addChild( text059 );


            var text060 = new Text({
               'resourceAttribute' : 'density',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'density',
               'artifactId' : 'Platform.Settings_screenInfo_density_text',
               'id' : 'aw6b4b20e2',
               'label' : MessageService.createStaticMessage('Density'),
            });
            groupitem026.addChild( text060 );


            var text061 = new Text({
               'resourceAttribute' : 'pane0_layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pane0',
               'artifactId' : 'Platform.Settings_screenInfo_pane0',
               'id' : 'aw39d3d4a7',
               'label' : MessageService.createStaticMessage('Pane 1 Size'),
            });
            groupitem026.addChild( text061 );


            var text062 = new Text({
               'resourceAttribute' : 'pane1_layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pane1',
               'artifactId' : 'Platform.Settings_screenInfo_pane1',
               'id' : 'aw4ed4e431',
               'label' : MessageService.createStaticMessage('Pane 2 Size'),
            });
            groupitem026.addChild( text062 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Settings', false);
               trackTimer.startTracking();
            }

            var view021 = new View({
               'id' : 'Platform.Settings',
               'label' : MessageService.createStaticMessage('Settings'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view021 );

            var requiredResources024 = {
               'LastADDownload' : {
                  'artifactId' : 'Platform.Settings_LastADDownload',
                  'id' : 'aw879343e2',
               },
            };
            view021.addRequiredResources( requiredResources024 );

            var actions011 = new Actions({
               'artifactId' : 'Platform.Settings_actions',
               'id' : 'awb3f56d3b',
            });
            view021.addChild( actions011 );


            var action020 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.Settings_RefreshSystemData_action',
               'id' : 'awccb0ee65',
               'label' : MessageService.createStaticMessage('Refresh System Data'),
            });
            actions011.addChild( action020 );

            var eventHandlers070 = [
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
            action020.eventHandlers = eventHandlers070;

            var container026 = new Container({
               'resource' : 'LastADDownload',
               'artifactId' : 'Platform.Settings_container_0',
               'id' : 'aw74ff68b5',
            });
            view021.addChild( container026 );


            var group011 = new Group({
               'artifactId' : 'Platform.Settings_group_0',
               'id' : 'aw2ba2345e',
            });
            container026.addChild( group011 );


            var groupitem027 = new GroupItem({
               'transitionTo' : 'Platform.ChangePassword',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0',
               'id' : 'awd48342a3',
            });
            group011.addChild( groupitem027 );


            var text063 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0_ChangePassword',
               'id' : 'aw6c14924a',
               'value' : MessageService.createStaticMessage('Change Password'),
            });
            groupitem027.addChild( text063 );

            var eventHandlers071 = [
               {
                     'method' : 'enableChangePasswordFunction',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0_eventHandlers_render_enableChangePasswordFunction',
                     'id' : 'awa81f4a5',
                     'event' : 'render',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            groupitem027.eventHandlers = eventHandlers071;

            var groupitem028 = new GroupItem({
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0',
               'id' : 'aw82635ebb',
            });
            group011.addChild( groupitem028 );


            var text064 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_RefreshLookupData',
               'id' : 'awcddf2167',
               'value' : MessageService.createStaticMessage('Refresh Lookup Data'),
            });
            groupitem028.addChild( text064 );


            var text065 = new Text({
               'resourceAttribute' : 'downloadStatus',
               'editable' : false,
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_downloadStatus',
               'id' : 'aw8a1673e3',
            });
            groupitem028.addChild( text065 );

            var eventHandlers072 = [
               {
                     'method' : 'renderLastDownload',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_downloadStatus_eventHandlers_render_renderLastDownload',
                     'id' : 'aw72547fb7',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text065.eventHandlers = eventHandlers072;

            var text066 = new Text({
               'cssClass' : 'textappearance-small',
               'editable' : false,
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_Updatesthelookupd',
               'id' : 'aw38a24bec',
               'value' : MessageService.createStaticMessage('Updates the lookup data on your device. Lookup data includes objects, such as assets and locations, that can be added to records.'),
            });
            groupitem028.addChild( text066 );

            var eventHandlers073 = [
               {
                     'method' : 'refreshAdditionalData',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_eventHandlers_click_refreshAdditionalData',
                     'id' : 'aw93ad06fe',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            groupitem028.eventHandlers = eventHandlers073;

            var groupitem029 = new GroupItem({
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_3_Number_of_day_to_sync',
               'id' : 'aw97e66cd6',
            });
            group011.addChild( groupitem029 );


            var text067 = new Text({
               'resourceAttribute' : 'numberOfDaysToSync',
               'editable' : true,
               'artifactId' : 'Platform.Settings_LastADDownload_text_Number_of_day_to_sync',
               'id' : 'aw69a517e3',
               'label' : MessageService.createStaticMessage('How often changes need to be refresh in days:'),
            });
            groupitem029.addChild( text067 );

            var eventHandlers074 = [
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
            text067.eventHandlers = eventHandlers074;

            var groupitem030 = new GroupItem({
               'transitionTo' : 'Platform.AdvancedSettings',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.AdvancedSettings_0',
               'id' : 'aw741c4d60',
            });
            group011.addChild( groupitem030 );


            var text068 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.AdvancedSettings_0_AdvancedSettings',
               'id' : 'aw2d662633',
               'value' : MessageService.createStaticMessage('Advanced Settings'),
            });
            groupitem030.addChild( text068 );


            var group012 = new Group({
               'enableFeatureByProperty' : 'attachments.enabled',
               'artifactId' : 'Platform.Settings_group_1',
               'id' : 'aw5ca504c8',
            });
            container026.addChild( group012 );


            var groupitem031 = new GroupItem({
               'layout' : 'Item1Button1',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_1',
               'id' : 'awf5646e2d',
            });
            group012.addChild( groupitem031 );


            var text069 = new Text({
               'cssClass' : 'wrap-content',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_1_Downloadattachments',
               'id' : 'awd21c407a',
               'value' : MessageService.createStaticMessage('Download attachments with work list.'),
            });
            groupitem031.addChild( text069 );


            var checkbox001 = new CheckBox({
               'resourceAttribute' : 'downloadAttachments',
               'cssClass' : 'rightCheckBox',
               'editable' : true,
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Platform.Settings_downloadAttachments_checkbox',
               'id' : 'aw1a5b9aa2',
            });
            groupitem031.addChild( checkbox001 );

            var eventHandlers075 = [
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
            checkbox001.eventHandlers = eventHandlers075;

            var container027 = new Container({
               'artifactId' : 'ConnectionContainer',
               'id' : 'awef0b2658',
            });
            view021.addChild( container027 );


            var group013 = new Group({
               'artifactId' : 'Platform.Settings.ConnectionManagement.group',
               'id' : 'aw9ad5002d',
            });
            container027.addChild( group013 );


            var groupitem032 = new GroupItem({
               'layout' : 'ConnectionManagementLayout',
               'artifactId' : 'Platform.Settings.ConnectionManagement.groupItem1',
               'id' : 'aw81b0980b',
            });
            group013.addChild( groupitem032 );


            var text070 = new Text({
               'cssClass' : 'relatedRecords',
               'layoutInsertAt' : 'Title',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Title',
               'id' : 'aw1de21387',
               'value' : MessageService.createStaticMessage('Connection Behavior'),
            });
            groupitem032.addChild( text070 );


            var text071 = new Text({
               'cssClass' : 'wrap-content',
               'layoutInsertAt' : 'description',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Description',
               'id' : 'aw6b506a6f',
               'value' : MessageService.createStaticMessage('Specifies which network connections should enable the application to work online'),
            });
            groupitem032.addChild( text071 );


            var radiobutton001 = new RadioButton({
               'cssClass' : 'firstradiobutton',
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.AllConnections',
               'id' : 'awcb83aecb',
               'label' : MessageService.createStaticMessage('All Types'),
            });
            groupitem032.addChild( radiobutton001 );

            var eventHandlers076 = [
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
            radiobutton001.eventHandlers = eventHandlers076;

            var radiobutton002 = new RadioButton({
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button2',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.WiFi',
               'id' : 'aw42dec2bb',
               'label' : MessageService.createStaticMessage('Only WiFi'),
            });
            groupitem032.addChild( radiobutton002 );

            var eventHandlers077 = [
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
            radiobutton002.eventHandlers = eventHandlers077;

            var radiobutton003 = new RadioButton({
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button3',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.Cellular',
               'id' : 'aw7032481d',
               'label' : MessageService.createStaticMessage('Only Cellular'),
            });
            groupitem032.addChild( radiobutton003 );

            var eventHandlers078 = [
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
            radiobutton003.eventHandlers = eventHandlers078;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AdvancedSettings', false);
               trackTimer.startTracking();
            }

            var view022 = new View({
               'id' : 'Platform.AdvancedSettings',
               'label' : MessageService.createStaticMessage('Settings'),
            });
            ui001.addChild( view022 );


            var container028 = new Container({
               'artifactId' : 'Platform.AdvancedSettings_container_0',
               'id' : 'aw5c13274d',
            });
            view022.addChild( container028 );


            var group014 = new Group({
               'artifactId' : 'Platform.AdvancedSettings_group_0',
               'id' : 'awebdfb82c',
            });
            container028.addChild( group014 );


            var groupitem033 = new GroupItem({
               'transitionTo' : 'Platform.TimeTrackReport',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0',
               'id' : 'awba4384a8',
            });
            group014.addChild( groupitem033 );


            var text072 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0_TrackPerformanceDa',
               'id' : 'awc0a6dde7',
               'value' : MessageService.createStaticMessage('Track Performance Data'),
            });
            groupitem033.addChild( text072 );


            var text073 = new Text({
               'cssClass' : 'red-text',
               'editable' : false,
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0_Thisoptionusesmem',
               'id' : 'aw4367e95f',
               'value' : MessageService.createStaticMessage('This option uses memory and might slow the performance of your device. Disable performance tracking when you are done.'),
            });
            groupitem033.addChild( text073 );


            var groupitem034 = new GroupItem({
               'transitionTo' : 'Platform.LoggerReport',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0',
               'id' : 'aw10ca73e0',
            });
            group014.addChild( groupitem034 );


            var text074 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0_Logging',
               'id' : 'awffa3ff9c',
               'value' : MessageService.createStaticMessage('Logging'),
            });
            groupitem034.addChild( text074 );


            var text075 = new Text({
               'cssClass' : 'red-text',
               'editable' : false,
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0_Thisoptionusesmem',
               'id' : 'aw30da1efa',
               'value' : MessageService.createStaticMessage('This option uses memory and might slow the performance of your device. Disable logging when you are done.'),
            });
            groupitem034.addChild( text075 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.LoggerReport', false);
               trackTimer.startTracking();
            }

            var view023 = new View({
               'cssClass' : 'loggerReport',
               'scrollDir' : 'vh',
               'id' : 'Platform.LoggerReport',
               'label' : MessageService.createStaticMessage('Logging Data'),
            });
            ui001.addChild( view023 );


            var actions012 = new Actions({
               'artifactId' : 'Platform.LoggerReport_actions',
               'id' : 'aw5b090344',
            });
            view023.addChild( actions012 );


            var action021 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableErrorLogging_action',
               'id' : 'awc05e82b4',
               'label' : MessageService.createStaticMessage('Enable Error Logging'),
            });
            actions012.addChild( action021 );

            var eventHandlers079 = [
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
            action021.eventHandlers = eventHandlers079;

            var action022 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableInfoLogging_action',
               'id' : 'aw6d618335',
               'label' : MessageService.createStaticMessage('Enable Info Logging'),
            });
            actions012.addChild( action022 );

            var eventHandlers080 = [
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
            action022.eventHandlers = eventHandlers080;

            var action023 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableDebugLogging_action',
               'id' : 'awaa11689b',
               'label' : MessageService.createStaticMessage('Enable Debug Logging'),
            });
            actions012.addChild( action023 );

            var eventHandlers081 = [
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
            action023.eventHandlers = eventHandlers081;

            var action024 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.TransLoggerReport',
               'artifactId' : 'Platform.LoggerReport_ViewTransactionLog_action',
               'id' : 'awdaed3d40',
               'label' : MessageService.createStaticMessage('View Transaction Log'),
            });
            actions012.addChild( action024 );


            var action025 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_ClearLogData_action',
               'id' : 'awb6d3895c',
               'label' : MessageService.createStaticMessage('Clear Log Data'),
            });
            actions012.addChild( action025 );

            var eventHandlers082 = [
               {
                     'method' : 'clear',
                     'artifactId' : 'Platform.LoggerReport_ClearLogData_action_eventHandlers_click_clear',
                     'id' : 'aw10958c5',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action025.eventHandlers = eventHandlers082;

            var action026 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_UploadLog_action',
               'id' : 'aw7510fce3',
               'label' : MessageService.createStaticMessage('Save Log'),
            });
            actions012.addChild( action026 );

            var eventHandlers083 = [
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
            action026.eventHandlers = eventHandlers083;

            var action027 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EmailLog_action',
               'id' : 'aw90d8a401',
               'label' : MessageService.createStaticMessage('Email Log'),
            });
            actions012.addChild( action027 );

            var eventHandlers084 = [
               {
                     'method' : 'emailCurrent',
                     'artifactId' : 'Platform.LoggerReport_EmailLog_action_eventHandlers_click_emailCurrent',
                     'id' : 'awf10881b9',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action027.eventHandlers = eventHandlers084;
            var eventHandlers085 = [
               {
                     'method' : 'renderLoggerReport',
                     'artifactId' : 'Platform.LoggerReport_eventHandlers_show_renderLoggerReport',
                     'id' : 'aw9b7c5c73',
                     'event' : 'show',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            view023.eventHandlers = eventHandlers085;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.TransLoggerReport', false);
               trackTimer.startTracking();
            }

            var view024 = new View({
               'scrollDir' : 'vh',
               'id' : 'Platform.TransLoggerReport',
               'label' : MessageService.createStaticMessage('Logging Data'),
            });
            ui001.addChild( view024 );


            var actions013 = new Actions({
               'artifactId' : 'Platform.TransLoggerReport_actions',
               'id' : 'aw49b00040',
            });
            view024.addChild( actions013 );


            var action028 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TransLoggerReport_ClearLogData_action',
               'id' : 'awdce21e26',
               'label' : MessageService.createStaticMessage('Clear Log Data'),
            });
            actions013.addChild( action028 );

            var eventHandlers086 = [
               {
                     'method' : 'clearTransLog',
                     'artifactId' : 'Platform.TransLoggerReport_ClearLogData_action_eventHandlers_click_clear',
                     'id' : 'aw71c2398e',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action028.eventHandlers = eventHandlers086;

            var action029 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TransLoggerReport_EmailLog_action',
               'id' : 'aw29f3639',
               'label' : MessageService.createStaticMessage('Email Log'),
            });
            actions013.addChild( action029 );

            var eventHandlers087 = [
               {
                     'method' : 'emailCurrentTranslog',
                     'artifactId' : 'Platform.TransLoggerReport_EmailLog_action_eventHandlers_click_emailCurrent',
                     'id' : 'awfd97a236',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action029.eventHandlers = eventHandlers087;
            var eventHandlers088 = [
               {
                     'method' : 'renderTransLoggerReport',
                     'artifactId' : 'Platform.TransLoggerReport_eventHandlers_show_renderTransLoggerReport',
                     'id' : 'aw4261a98a',
                     'event' : 'show',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            view024.eventHandlers = eventHandlers088;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.ChangePassword', false);
               trackTimer.startTracking();
            }

            var view025 = new View({
               'resource' : 'PlatformChangePasswordForm',
               'id' : 'Platform.ChangePassword',
               'label' : MessageService.createStaticMessage('Change Password'),
            });
            ui001.addChild( view025 );


            var container029 = new Container({
               'cssClass' : 'changePasswordForm',
               'artifactId' : 'Platform.ChangePassword_container_0',
               'id' : 'awf7c2a2a',
            });
            view025.addChild( container029 );


            var text076 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.ChangePassword_container_0_errorMsg',
               'id' : 'aw3ed16fe1',
            });
            container029.addChild( text076 );


            var text077 = new Text({
               'resourceAttribute' : 'infoMsg',
               'cssClass' : 'infoMsg',
               'editable' : false,
               'artifactId' : 'Platform.ChangePassword_container_0_infoMsg',
               'id' : 'awe28ebedd',
            });
            container029.addChild( text077 );


            var text078 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'currentpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_currentpassword',
               'id' : 'aw7df0b045',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Current password'),
            });
            container029.addChild( text078 );

            var eventHandlers089 = [
               {
                     'method' : 'hidePasswordField',
                     'artifactId' : 'Platform.ChangePassword_container_0_currentpassword_eventHandlers_render_hidePasswordField',
                     'id' : 'aw27f3eacb',
                     'event' : 'render',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            text078.eventHandlers = eventHandlers089;

            var text079 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'newpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_newpassword',
               'id' : 'aw618d08b5',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('New password'),
            });
            container029.addChild( text079 );


            var text080 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'confirmnewpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_confirmnewpassword',
               'id' : 'awd274537a',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Confirm password'),
            });
            container029.addChild( text080 );


            var button033 = new Button({
               'artifactId' : 'Platform.ChangePassword_Cancel_button',
               'id' : 'aw96c63135',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers090 = [
               {
                     'method' : 'cancelPasswordClickHandler',
                     'artifactId' : 'Platform.ChangePassword_Cancel_button_eventHandlers_click_cancelPasswordClickHandler',
                     'id' : 'aw7492b621',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button033.eventHandlers = eventHandlers090;
            container029.addChild( button033 );


            var button034 = new Button({
               'artifactId' : 'Platform.ChangePassword_Change_button',
               'id' : 'aw5cd0477f',
               'label' : MessageService.createStaticMessage('Change'),
               'primary' : 'true',
            });
            var eventHandlers091 = [
               {
                     'method' : 'changePasswordClickHandler',
                     'artifactId' : 'Platform.ChangePassword_Change_button_eventHandlers_click_changePasswordClickHandler',
                     'id' : 'awfdba8feb',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button034.eventHandlers = eventHandlers091;
            container029.addChild( button034 );

            var eventHandlers092 = [
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
            view025.eventHandlers = eventHandlers092;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.RetrieveOldPassword', false);
               trackTimer.startTracking();
            }

            var view026 = new View({
               'resource' : 'PlatformChangePasswordForm',
               'showHeader' : false,
               'showOverflow' : false,
               'id' : 'Platform.RetrieveOldPassword',
               'label' : MessageService.createStaticMessage('Recover App Data'),
            });
            ui001.addChild( view026 );


            var container030 = new Container({
               'cssClass' : 'changePasswordForm',
               'artifactId' : 'Platform.RetrieveOldPassword_container_0',
               'id' : 'awecdef66d',
            });
            view026.addChild( container030 );


            var text081 = new Text({
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_Enterthepasswordt',
               'id' : 'aw14ebf03b',
               'value' : MessageService.createStaticMessage('Enter the password that you last used to log in to the app. If you do not have this password, you must reset the app before you can log in.'),
            });
            container030.addChild( text081 );


            var text082 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_errorMsg',
               'id' : 'aw9574c917',
            });
            container030.addChild( text082 );


            var text083 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'currentpassword',
               'editable' : true,
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_currentpassword',
               'id' : 'aw97b6c3b7',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Previous password'),
            });
            container030.addChild( text083 );


            var button035 = new Button({
               'artifactId' : 'Platform.RetrieveOldPassword_Recover_button',
               'id' : 'aw3a0ff2',
               'label' : MessageService.createStaticMessage('Recover'),
               'primary' : 'true',
            });
            var eventHandlers093 = [
               {
                     'method' : 'recoverOldPasswordClickHandler',
                     'artifactId' : 'Platform.RetrieveOldPassword_Recover_button_eventHandlers_click_recoverOldPasswordClickHandler',
                     'id' : 'awecb18d1c',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button035.eventHandlers = eventHandlers093;
            container030.addChild( button035 );


            var button036 = new Button({
               'artifactId' : 'Platform.RetrieveOldPassword_Reset_button',
               'id' : 'aw8bb551dc',
               'label' : MessageService.createStaticMessage('Reset'),
            });
            var eventHandlers094 = [
               {
                     'method' : 'resetStorageClickHandler',
                     'artifactId' : 'Platform.RetrieveOldPassword_Reset_button_eventHandlers_click_resetStorageClickHandler',
                     'id' : 'awfe7a73d2',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button036.eventHandlers = eventHandlers094;
            container030.addChild( button036 );

            var eventHandlers095 = [
               {
                     'method' : 'initializeRetrieveOldPasswordView',
                     'artifactId' : 'Platform.RetrieveOldPassword_eventHandlers_show_initializeRetrieveOldPasswordView',
                     'id' : 'aw26f17c5a',
                     'event' : 'show',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            view026.eventHandlers = eventHandlers095;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog008 = new Dialog({
               'closeOnBackgroundClick' : 'true',
               'id' : 'Platform.ConfirmResetDataStore',
            });
            ui001.addChild( dialog008 );


            var container031 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmResetDataStore_container_0',
               'id' : 'awacb7e535',
            });
            dialog008.addChild( container031 );


            var text084 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmResetDataStore_container_0_WarningAllappdat',
               'id' : 'aw68bdf3e8',
               'value' : MessageService.createStaticMessage('Warning! All app data on the device will be cleared. Any data that has not been sent to the server will be lost.'),
            });
            container031.addChild( text084 );


            var container032 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmResetDataStore_container_1',
               'id' : 'awdbb0d5a3',
            });
            dialog008.addChild( container032 );


            var button037 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmResetDataStore_Continue_button',
               'id' : 'awba645d10',
               'label' : MessageService.createStaticMessage('Continue'),
            });
            var eventHandlers096 = [
               {
                     'method' : 'resetDataStoreClickHandler',
                     'artifactId' : 'Platform.ConfirmResetDataStore_Continue_button_eventHandlers_click_resetDataStoreClickHandler',
                     'id' : 'aw5074e6c8',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button037.eventHandlers = eventHandlers096;
            container032.addChild( button037 );


            var button038 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmResetDataStore_Cancel_button',
               'id' : 'aw50474341',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers097 = [
               {
                     'method' : 'cancelResetDataStoreClickHandler',
                     'artifactId' : 'Platform.ConfirmResetDataStore_Cancel_button_eventHandlers_click_cancelResetDataStoreClickHandler',
                     'id' : 'awda7121b8',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button038.eventHandlers = eventHandlers097;
            container032.addChild( button038 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.TimeTrackReport', false);
               trackTimer.startTracking();
            }

            var view027 = new View({
               'cssClass' : 'loggerReport',
               'scrollDir' : 'vh',
               'id' : 'Platform.TimeTrackReport',
               'label' : MessageService.createStaticMessage('Performance Data'),
            });
            ui001.addChild( view027 );

            var requiredResources025 = {
               'timeTrack' : {
                  'artifactId' : 'Platform.TimeTrackReport_timeTrack',
                  'id' : 'aw8d707cee',
               },
            };
            view027.addRequiredResources( requiredResources025 );

            var actions014 = new Actions({
               'artifactId' : 'Platform.TimeTrackReport_actions',
               'id' : 'aw9d9a4864',
            });
            view027.addChild( actions014 );


            var action030 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_EnablePerformanceTracking_action',
               'id' : 'aw34736a63',
               'label' : MessageService.createStaticMessage('Enable Performance Tracking'),
            });
            actions014.addChild( action030 );

            var eventHandlers098 = [
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
            action030.eventHandlers = eventHandlers098;

            var action031 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_ClearPerformanceData_action',
               'id' : 'aw1edf54cf',
               'label' : MessageService.createStaticMessage('Clear Performance Data'),
            });
            actions014.addChild( action031 );

            var eventHandlers099 = [
               {
                     'method' : 'clear',
                     'artifactId' : 'Platform.TimeTrackReport_ClearPerformanceData_action_eventHandlers_click_clear',
                     'id' : 'aw85273d1b',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action031.eventHandlers = eventHandlers099;

            var action032 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_EmailReport_action',
               'id' : 'aw6ff8fae1',
               'label' : MessageService.createStaticMessage('Email Report'),
            });
            actions014.addChild( action032 );

            var eventHandlers100 = [
               {
                     'method' : 'emailCurrent',
                     'artifactId' : 'Platform.TimeTrackReport_EmailReport_action_eventHandlers_click_emailCurrent',
                     'id' : 'awc00583a0',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action032.eventHandlers = eventHandlers100;
            var eventHandlers101 = [
               {
                     'method' : 'renderTT',
                     'artifactId' : 'Platform.TimeTrackReport_eventHandlers_show_renderTT',
                     'id' : 'awca05a315',
                     'event' : 'show',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            view027.eventHandlers = eventHandlers101;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog009 = new Dialog({
               'closeOnBackgroundClick' : 'true',
               'id' : 'Platform.ListLongPressDialog',
            });
            ui001.addChild( dialog009 );



            var listItemTemplate014 = new ListItemTemplate({
               'cssClass' : 'dialogListItem textappearance-medium',
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_listItemTemplate',
               'id' : 'awefd72fd8',
            });

            var listtext047 = new ListText({
               'resourceAttribute' : 'label',
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_label',
               'id' : 'awe2e495b2',
            });
            listItemTemplate014.addChild( listtext047 );



            var list014 = new List({
               'resource' : 'PlatformLongPressResource',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate014,
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_list',
               'id' : 'aw64ff84d9',
               'queryBase' : '',
            });
            dialog009.addChild( list014 );


            var dialog010 = new Dialog({
               'id' : 'Platform.LoadingAdditionalData',
            });
            ui001.addChild( dialog010 );


            var container033 = new Container({
               'artifactId' : 'Platform.LoadingAdditionalData_container_0',
               'id' : 'aw48b509d9',
            });
            dialog010.addChild( container033 );


            var text085 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadingAdditionalData_container_0_Downloadinglookupd',
               'id' : 'aw4cec47c0',
               'value' : MessageService.createStaticMessage('Downloading lookup data.'),
            });
            container033.addChild( text085 );


            var button039 = new Button({
               'artifactId' : 'Platform.LoadingAdditionalData_Cancel_button',
               'id' : 'awb30b5f0',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers102 = [
               {
                     'method' : 'cancelADDownload',
                     'artifactId' : 'Platform.LoadingAdditionalData_Cancel_button_eventHandlers_click_cancelADDownload',
                     'id' : 'awc41dac4c',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button039.eventHandlers = eventHandlers102;
            container033.addChild( button039 );


            var dialog011 = new Dialog({
               'id' : 'Platform.AdditionalDataNoConn',
            });
            ui001.addChild( dialog011 );


            var container034 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.AdditionalDataNoConn_container_0',
               'id' : 'aw666da461',
            });
            dialog011.addChild( container034 );


            var text086 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.AdditionalDataNoConn_container_0_Lookupdatacouldno',
               'id' : 'aw96b90fd8',
               'value' : MessageService.createStaticMessage('Lookup data could not be downloaded. Go to Settings > Refresh Lookup Data when you are online.'),
            });
            container034.addChild( text086 );


            var container035 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.AdditionalDataNoConn_container_1',
               'id' : 'aw116a94f7',
            });
            dialog011.addChild( container035 );


            var button040 = new Button({
               'artifactId' : 'Platform.AdditionalDataNoConn_OK_button',
               'id' : 'aw9b370278',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers103 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.AdditionalDataNoConn_OK_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw108159b3',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button040.eventHandlers = eventHandlers103;
            container035.addChild( button040 );


            var dialog012 = new Dialog({
               'id' : 'Platform.ConfirmReloadWorkList',
            });
            ui001.addChild( dialog012 );


            var container036 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_0',
               'id' : 'aw2054aa9e',
            });
            dialog012.addChild( container036 );


            var text087 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_0_Doyouwanttoclose',
               'id' : 'aw83f81a4b',
               'value' : MessageService.createStaticMessage('Reloading the work list takes time if you are downloading large amounts of data.  Are you sure that you want to continue?'),
            });
            container036.addChild( text087 );


            var container037 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_1',
               'id' : 'aw57539a08',
            });
            dialog012.addChild( container037 );


            var button041 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmReloadWorkList_Yes_button',
               'id' : 'aw5bc89627',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers104 = [
               {
                     'method' : 'reloadConfirmed',
                     'artifactId' : 'Platform.ConfirmReloadWorkList_Yes_button_eventHandlers_click_processDialog',
                     'id' : 'awafdb701f',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button041.eventHandlers = eventHandlers104;
            container037.addChild( button041 );


            var button042 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.ConfirmReloadWorkList_No_button',
               'id' : 'aw4487e9e7',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers105 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.ConfirmReloadWorkList_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw56d1743',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button042.eventHandlers = eventHandlers105;
            container037.addChild( button042 );


            var dialog013 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.ReloadingCurrentWorklist',
            });
            ui001.addChild( dialog013 );


            var container038 = new Container({
               'cssClass' : 'mblSimpleMessageText',
               'artifactId' : 'Platform.ReloadCurrentWorklist_container_0',
               'id' : 'awce0c0b72',
            });
            dialog013.addChild( container038 );


            var text088 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.ReloadCurrentWorklist_container_0_progressMsg',
               'id' : 'awaa894933',
            });
            container038.addChild( text088 );


            var dialog014 = new Dialog({
               'id' : 'Platform.AdditionalDataFailed',
            });
            ui001.addChild( dialog014 );


            var container039 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.AdditionalDataFailed.container',
               'id' : 'aw275627fb',
            });
            dialog014.addChild( container039 );


            var text089 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.AdditionalDataFailed.text',
               'id' : 'awb25e5b66',
               'value' : MessageService.createStaticMessage('Lookup data could not be downloaded. If you are connected, go to Settings > Refresh Lookup Data.'),
            });
            container039.addChild( text089 );


            var container040 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.AdditionalDataFailed.container2',
               'id' : 'aw309dc3be',
            });
            dialog014.addChild( container040 );


            var button043 = new Button({
               'artifactId' : 'Platform.AdditionalDataFailed.button',
               'id' : 'aw39111677',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers106 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.AdditionalDataFailed.eventHandler',
                     'id' : 'awacbc5440',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button043.eventHandlers = eventHandlers106;
            container040.addChild( button043 );


            var dialog015 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.LoadingSystemData',
            });
            ui001.addChild( dialog015 );


            var container041 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadingSystemData_container_0',
               'id' : 'aw13d3cc6a',
            });
            dialog015.addChild( container041 );


            var text090 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadingSystemData_container_0_Downloadingsystemd',
               'id' : 'awfc1b5f79',
               'value' : MessageService.createStaticMessage('Downloading system data.'),
            });
            container041.addChild( text090 );


            var text091 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.LoadingSystemData_container_0_progressMsg',
               'id' : 'aw635d9968',
            });
            container041.addChild( text091 );


            var dialog016 = new Dialog({
               'id' : 'Platform.LoadAdditionalDataYesNo',
            });
            ui001.addChild( dialog016 );


            var container042 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0',
               'id' : 'aw22834650',
            });
            dialog016.addChild( container042 );


            var text092 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Thelookupdatafor',
               'id' : 'aw89be3f27',
               'value' : MessageService.createStaticMessage('The lookup data for this app must be downloaded. Download it now or later?'),
            });
            container042.addChild( text092 );

            var eventHandlers107 = [
               {
                     'method' : 'theLookupdataText',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Thelookupdatafor_eventHandlers_render_setAdditionalDownloadText',
                     'id' : 'aw9051ca24',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text092.eventHandlers = eventHandlers107;

            var text093 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Retrylookupdatafor',
               'id' : 'awb287d1cc',
               'value' : MessageService.createStaticMessage('Lookup data was partially downloaded. Click Retry to download the remaining lookup data. Click Reset to refresh all of the lookup data. Click Close if you are through downloading lookup data.'),
            });
            container042.addChild( text093 );

            var eventHandlers108 = [
               {
                     'method' : 'retrylookupdataText',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Retrylookupdatafor_eventHandlers_render_setAdditionalDownloadText',
                     'id' : 'aw5ad2ed31',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text093.eventHandlers = eventHandlers108;

            var text094 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Whenrunninginabr',
               'id' : 'awb757e4d5',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per lookup.'),
            });
            container042.addChild( text094 );

            var eventHandlers109 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'awb7d271e9',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text094.eventHandlers = eventHandlers109;

            var container043 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_1',
               'id' : 'aw558476c6',
            });
            dialog016.addChild( container043 );


            var button044 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Later_button',
               'id' : 'awa2501fe3',
               'label' : MessageService.createStaticMessage('Later'),
            });
            var eventHandlers110 = [
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
            button044.eventHandlers = eventHandlers110;
            container043.addChild( button044 );


            var button045 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Now_button',
               'id' : 'aw35a14c11',
               'label' : MessageService.createStaticMessage('Now'),
            });
            var eventHandlers111 = [
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
            button045.eventHandlers = eventHandlers111;
            container043.addChild( button045 );


            var button046 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Retry_button',
               'id' : 'aw626b616d',
               'label' : MessageService.createStaticMessage('Retry'),
            });
            var eventHandlers112 = [
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
            button046.eventHandlers = eventHandlers112;
            container043.addChild( button046 );


            var dialog017 = new Dialog({
               'id' : 'Platform.LoadAdditionalDataDeltaDownload',
            });
            ui001.addChild( dialog017 );


            var container044 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0',
               'id' : 'aw79883531',
            });
            dialog017.addChild( container044 );


            var text095 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Thelookupdatafor',
               'id' : 'aw3d94f20f',
               'value' : MessageService.createStaticMessage('Click Changes to download only lookup data changes.'),
            });
            container044.addChild( text095 );


            var text096 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Retrylookupdatafor',
               'id' : 'awa0f7541',
               'value' : MessageService.createStaticMessage('Click All to download all the lookup data.'),
            });
            container044.addChild( text096 );


            var text097 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_cancel',
               'id' : 'aw62270e4c',
               'value' : MessageService.createStaticMessage('Click Cancel to cancel the lookup download.'),
            });
            container044.addChild( text097 );


            var text098 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_action',
               'id' : 'aw73fd47ac',
               'value' : MessageService.createStaticMessage('Which refresh do you want to perform?'),
            });
            container044.addChild( text098 );


            var text099 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Whenrunninginabr',
               'id' : 'aw37d29fd',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per lookup.'),
            });
            container044.addChild( text099 );

            var eventHandlers113 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'aw1edf10f3',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text099.eventHandlers = eventHandlers113;

            var container045 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_1',
               'id' : 'awe8f05a7',
            });
            dialog017.addChild( container045 );


            var button047 = new Button({
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Cancel_button',
               'id' : 'awb2f881ae',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers114 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'awcaa29f5a',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button047.eventHandlers = eventHandlers114;
            container045.addChild( button047 );


            var button048 = new Button({
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_RefreshAll_button',
               'id' : 'aw8ab2882',
               'label' : MessageService.createStaticMessage('All'),
            });
            var eventHandlers115 = [
               {
                     'method' : 'confirmADDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Now_button_eventHandlers_click_confirmADDownload',
                     'id' : 'awa5526bd4',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button048.eventHandlers = eventHandlers115;
            container045.addChild( button048 );


            var button049 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_RefreshChanges_button',
               'id' : 'aw9c0cf49a',
               'label' : MessageService.createStaticMessage('Changes'),
            });
            var eventHandlers116 = [
               {
                     'method' : 'confirmADDeltaDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Later_button_eventHandlers_click_confirmADDeltaDownload',
                     'id' : 'aw46619626',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button049.eventHandlers = eventHandlers116;
            container045.addChild( button049 );


            var dialog018 = new Dialog({
               'id' : 'Platform.LoadSystemDataDeltaDownload',
            });
            ui001.addChild( dialog018 );


            var container046 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0',
               'id' : 'aw47beed1c',
            });
            dialog018.addChild( container046 );


            var text100 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Thelookupdatafor',
               'id' : 'aw682ebd2f',
               'value' : MessageService.createStaticMessage('Click Changes to download only the system data changes.'),
            });
            container046.addChild( text100 );


            var text101 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Retrylookupdatafor',
               'id' : 'aw79e85858',
               'value' : MessageService.createStaticMessage('Click All to download all the system data.'),
            });
            container046.addChild( text101 );


            var text102 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_cancel',
               'id' : 'awcb50ae6',
               'value' : MessageService.createStaticMessage('Click Cancel to cancel the system download.'),
            });
            container046.addChild( text102 );


            var text103 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_action',
               'id' : 'aw1d6f4306',
               'value' : MessageService.createStaticMessage('Which refresh do you want to perform?'),
            });
            container046.addChild( text103 );


            var text104 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Whenrunninginabr',
               'id' : 'aw56c766dd',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per System.'),
            });
            container046.addChild( text104 );

            var eventHandlers117 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'aw37b2ac2a',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text104.eventHandlers = eventHandlers117;

            var container047 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_1',
               'id' : 'aw30b9dd8a',
            });
            dialog018.addChild( container047 );


            var button050 = new Button({
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Cancel_button',
               'id' : 'aw1adabf91',
               'label' : MessageService.createStaticMessage('cancel'),
            });
            var eventHandlers118 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw2569598a',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button050.eventHandlers = eventHandlers118;
            container047.addChild( button050 );


            var button051 = new Button({
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_RefreshAll_button',
               'id' : 'awf1a96515',
               'label' : MessageService.createStaticMessage('All'),
            });
            var eventHandlers119 = [
               {
                     'method' : 'downloadSystemData',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Now_button_eventHandlers_click_confirmdownloadSystemData',
                     'id' : 'aw8d600b10',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button051.eventHandlers = eventHandlers119;
            container047.addChild( button051 );


            var button052 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_RefreshChanges_button',
               'id' : 'aw328e1b2e',
               'label' : MessageService.createStaticMessage('Changes'),
            });
            var eventHandlers120 = [
               {
                     'method' : 'confirmSystemDataDeltaDownload',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Later_button_eventHandlers_click_confirmSystemDataDeltaDownload',
                     'id' : 'awbd23e928',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button052.eventHandlers = eventHandlers120;
            container047.addChild( button052 );


            var dialog019 = new Dialog({
               'id' : 'Platform.ExitApplicationPrompt',
            });
            ui001.addChild( dialog019 );


            var container048 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ExitApplicationPrompt_container_0',
               'id' : 'aw71d2ddca',
            });
            dialog019.addChild( container048 );


            var text105 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ExitApplicationPrompt_container_0_Doyouwanttoclose',
               'id' : 'aw4e0184c3',
               'value' : MessageService.createStaticMessage('Do you want to close the app?'),
            });
            container048.addChild( text105 );


            var container049 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ExitApplicationPrompt_container_1',
               'id' : 'aw6d5ed5c',
            });
            dialog019.addChild( container049 );


            var button053 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ExitApplicationPrompt_Yes_button',
               'id' : 'aw3bff816',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers121 = [
               {
                     'method' : 'processDialog',
                     'artifactId' : 'Platform.ExitApplicationPrompt_Yes_button_eventHandlers_click_processDialog',
                     'id' : 'awfa220200',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button053.eventHandlers = eventHandlers121;
            container049.addChild( button053 );


            var button054 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.ExitApplicationPrompt_No_button',
               'id' : 'aw5ba5c9da',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers122 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.ExitApplicationPrompt_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw5256cc3',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button054.eventHandlers = eventHandlers122;
            container049.addChild( button054 );


            var dialog020 = new Dialog({
               'id' : 'Platform.LogOutPrompt',
            });
            ui001.addChild( dialog020 );


            var container050 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LogOutPrompt_container_0',
               'id' : 'awcf20d41b',
            });
            dialog020.addChild( container050 );


            var text106 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LogOutPrompt_container_0_Doyouwanttologo',
               'id' : 'aw15a96005',
               'value' : MessageService.createStaticMessage('Do you want to log out of the app?'),
            });
            container050.addChild( text106 );


            var container051 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LogOutPrompt_container_1',
               'id' : 'awb827e48d',
            });
            dialog020.addChild( container051 );


            var button055 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.LogOutPrompt_No_button',
               'id' : 'awfbbbd446',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers123 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.LogOutPrompt_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw364ad2c7',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button055.eventHandlers = eventHandlers123;
            container051.addChild( button055 );


            var button056 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LogOutPrompt_Yes_button',
               'id' : 'awfaa63964',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers124 = [
               {
                     'method' : 'logoutDialog',
                     'artifactId' : 'Platform.LogOutPrompt_Yes_button_eventHandlers_click_logoutDialog',
                     'id' : 'aw82db52a6',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button056.eventHandlers = eventHandlers124;
            container051.addChild( button056 );


            var dialog021 = new Dialog({
               'cssClass' : 'dialogDurationLookup',
               'resource' : 'PlatformDateLookupResource',
               'id' : 'Platform.DurationLookup',
               'label' : MessageService.createStaticMessage('Change Duration'),
            });
            ui001.addChild( dialog021 );

            var eventHandlers125 = [
               {
                     'method' : 'initLookup',
                     'artifactId' : 'Platform.DurationLookup_eventHandlers_show_initLookup',
                     'id' : 'aw2898d5b1',
                     'event' : 'show',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            dialog021.eventHandlers = eventHandlers125;

            var container052 = new Container({
               'artifactId' : 'Platform.DurationLookup_container_0',
               'id' : 'awc7b6d6e2',
            });
            dialog021.addChild( container052 );


            var durationpicker001 = new DurationPicker({
               'artifactId' : 'Platform.DurationLookup_durationpicker_0',
               'id' : 'awbdafea4f',
            });
            container052.addChild( durationpicker001 );


            var container053 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DurationLookup_container_1',
               'id' : 'awb0b1e674',
            });
            dialog021.addChild( container053 );


            var button057 = new Button({
               'artifactId' : 'Platform.DurationLookup_Cancel_button',
               'id' : 'aw21ee1a8e',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers126 = [
               {
                     'method' : 'Cancel',
                     'artifactId' : 'Platform.DurationLookup_Cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw7fc46e19',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button057.eventHandlers = eventHandlers126;
            container053.addChild( button057 );


            var button058 = new Button({
               'artifactId' : 'Platform.DurationLookup_Clear_button',
               'id' : 'awab5a917f',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers127 = [
               {
                     'method' : 'Clear',
                     'artifactId' : 'Platform.DurationLookup_Clear_button_eventHandlers_click_Clear',
                     'id' : 'aw4d23bc8f',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button058.eventHandlers = eventHandlers127;
            container053.addChild( button058 );


            var button059 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DurationLookup_OK_button',
               'id' : 'aw7a6484f6',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers128 = [
               {
                     'method' : 'SetSelection',
                     'artifactId' : 'Platform.DurationLookup_OK_button_eventHandlers_click_SetSelection',
                     'id' : 'aweb8ce178',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button059.eventHandlers = eventHandlers128;
            container053.addChild( button059 );


            var dialog022 = new Dialog({
               'id' : 'Platform.CancelDownload',
            });
            ui001.addChild( dialog022 );


            var container054 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.CancelDownload_container_0',
               'id' : 'awf839de44',
            });
            dialog022.addChild( container054 );


            var text107 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.CancelDownload_container_0_Doyouwanttostop',
               'id' : 'awdb2316b3',
               'value' : MessageService.createStaticMessage('Do you want to stop downloading work list records?'),
            });
            container054.addChild( text107 );


            var container055 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.CancelDownload_container_1',
               'id' : 'aw8f3eeed2',
            });
            dialog022.addChild( container055 );


            var button060 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.CancelDownload_Yes_button',
               'id' : 'aw3b97968f',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers129 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.CancelDownload_Yes_button_eventHandlers_click_cancelDownload',
                     'id' : 'awadc6ff1d',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button060.eventHandlers = eventHandlers129;
            container055.addChild( button060 );


            var button061 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.CancelDownload_No_button',
               'id' : 'awab099478',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers130 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.CancelDownload_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw9ceda703',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button061.eventHandlers = eventHandlers130;
            container055.addChild( button061 );


            var dialog023 = new Dialog({
               'id' : 'Platform.ConfirmClearChanges',
            });
            ui001.addChild( dialog023 );


            var container056 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmClearChanges_container_0',
               'id' : 'aw3965500f',
            });
            dialog023.addChild( container056 );


            var text108 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmClearChanges_container_0_Changesthathaveno',
               'id' : 'aw66e22f87',
               'value' : MessageService.createStaticMessage('Changes that have not been sent to the server will be discarded.'),
            });
            container056.addChild( text108 );


            var container057 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmClearChanges_container_1',
               'id' : 'aw4e626099',
            });
            dialog023.addChild( container057 );


            var button062 = new Button({
               'artifactId' : 'Platform.ConfirmClearChanges_Cancel_button',
               'id' : 'awcee54fe9',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers131 = [
               {
                     'method' : 'cancelClearChanges',
                     'artifactId' : 'Platform.ConfirmClearChanges_Cancel_button_eventHandlers_click_cancelClearChanges',
                     'id' : 'awb208eba2',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button062.eventHandlers = eventHandlers131;
            container057.addChild( button062 );


            var button063 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.ConfirmClearChanges_OK_button',
               'id' : 'aw8a3b05f2',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers132 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'Platform.ConfirmClearChanges_OK_button_eventHandlers_click_doClearChanges',
                     'id' : 'aw32f778d4',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button063.eventHandlers = eventHandlers132;
            container057.addChild( button063 );


            var dialog024 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.DownloadCurrentWorklist',
            });
            ui001.addChild( dialog024 );


            var container058 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_0',
               'id' : 'awfd35c5df',
            });
            dialog024.addChild( container058 );


            var text109 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_0_progressMsg',
               'id' : 'aw3c55ae56',
            });
            container058.addChild( text109 );


            var container059 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_1',
               'id' : 'aw8a32f549',
            });
            dialog024.addChild( container059 );


            var button064 = new Button({
               'artifactId' : 'Platform.DownloadCurrentWorklist_Cancel_button',
               'id' : 'awcfb8296d',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers133 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.DownloadCurrentWorklist_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'aw5541afbb',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button064.eventHandlers = eventHandlers133;
            container059.addChild( button064 );


            var dialog025 = new Dialog({
               'id' : 'Platform.NoRecordFoundDialog',
            });
            ui001.addChild( dialog025 );


            var container060 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.NoRecordFoundDialog_container_0',
               'id' : 'awa73a1c57',
            });
            dialog025.addChild( container060 );


            var text110 = new Text({
               'artifactId' : 'Platform.NoRecordFoundDialog_container_0_Stopthetimeronwo',
               'id' : 'awd6cf8f25',
               'value' : MessageService.createStaticMessage('No record was found. If you are working offline, try downloading worklist when online to access your workorder'),
            });
            container060.addChild( text110 );


            var container061 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.NoRecordFoundDialog_container_1',
               'id' : 'awd03d2cc1',
            });
            dialog025.addChild( container061 );


            var button065 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.NoRecordFoundDialog_OK_button',
               'id' : 'aw3de0cad2',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers134 = [
               {
                     'method' : 'closeNoRecord',
                     'artifactId' : 'Platform.NoRecordFoundDialog_OK_button_multiple',
                     'id' : 'aw41a4b840',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button065.eventHandlers = eventHandlers134;
            container061.addChild( button065 );


            var dialog026 = new Dialog({
               'id' : 'Platform.MultiplePushNotificationDialog',
            });
            ui001.addChild( dialog026 );


            var container062 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_0',
               'id' : 'aw7b338e5e',
            });
            dialog026.addChild( container062 );


            var text111 = new Text({
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_0_Stopthetimeronwo',
               'id' : 'aw72fc5fcc',
               'value' : MessageService.createStaticMessage('Multiple notification were recieved. Go to notification view to access them.'),
            });
            container062.addChild( text111 );


            var container063 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_1',
               'id' : 'awc34bec8',
            });
            dialog026.addChild( container063 );


            var button066 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_OK_button',
               'id' : 'awc2c9277e',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers135 = [
               {
                     'method' : 'close',
                     'artifactId' : 'Platform.MultiplePushNotificationDialog_OK_button_multiple',
                     'id' : 'awe5002e8b',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button066.eventHandlers = eventHandlers135;
            container063.addChild( button066 );


            var dialog027 = new Dialog({
               'resource' : 'PlatformTempPushNotification',
               'id' : 'Platform.PushNotificationDialog',
            });
            ui001.addChild( dialog027 );


            var container064 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.PushNotificationDialog_container_0',
               'id' : 'awb0eedc9',
            });
            dialog027.addChild( container064 );


            var text112 = new Text({
               'artifactId' : 'Platform.PushNotificationDialog_container_0_Stopthetimeronwo',
               'id' : 'aw35fc28ff',
               'value' : MessageService.createDynamicMessage('{0} {1} {2}', 'platform.handlers.PushNotificationDialogHandler', 'resolveMessageProps'),
               'resolverFunction' : 'resolveMessageProps',
               'resolverClass' : 'platform.handlers.PushNotificationDialogHandler',
            });
            container064.addChild( text112 );


            var container065 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.PushNotificationDialog_container_1',
               'id' : 'aw7c09dd5f',
            });
            dialog027.addChild( container065 );


            var button067 = new Button({
               'artifactId' : 'Platform.PushNotificationDialog_Open_button',
               'id' : 'aw4151795',
               'label' : MessageService.createStaticMessage('Open'),
            });
            var eventHandlers136 = [
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
            button067.eventHandlers = eventHandlers136;
            container065.addChild( button067 );


            var button068 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.PushNotificationDialog_OK_button',
               'id' : 'aw3d64070a',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers137 = [
               {
                     'method' : 'close',
                     'artifactId' : 'Platform.PushNotificationDialog_OK_button_eventHandlers_click_WOStartedDialogYesClickHandler',
                     'id' : 'aw40f88c32',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button068.eventHandlers = eventHandlers137;
            container065.addChild( button068 );


            var dialog028 = new Dialog({
               'resource' : 'PlatformDemoModeResource',
               'id' : 'Platform.DemoDownloadWarning',
            });
            ui001.addChild( dialog028 );


            var container066 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DemoDownloadWarning_container_0',
               'id' : 'awf840ab79',
            });
            dialog028.addChild( container066 );


            var text113 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.DemoDownloadWarning_container_0_progressMsg',
               'id' : 'awf3cb0903',
               'value' : MessageService.createStaticMessage('MessageText'),
            });
            container066.addChild( text113 );


            var container067 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DemoDownloadWarning_container_1',
               'id' : 'aw8f479bef',
            });
            dialog028.addChild( container067 );


            var button069 = new Button({
               'artifactId' : 'Platform.DemoDownloadWarning_Continue_button',
               'id' : 'aw2659f8c8',
               'label' : MessageService.createStaticMessage('Continue'),
            });
            var eventHandlers138 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'Platform.DemoDownloadWarning_Continue_button_eventHandlers_click_doClearChanges',
                     'id' : 'awbdf1879f',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button069.eventHandlers = eventHandlers138;
            container067.addChild( button069 );


            var button070 = new Button({
               'artifactId' : 'Platform.DemoDownloadWarning_Cancel_button',
               'id' : 'aw9def7b28',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers139 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.DemoDownloadWarning_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'awd4960a86',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button070.eventHandlers = eventHandlers139;
            container067.addChild( button070 );


            var dialog029 = new Dialog({
               'resource' : 'PlatformEsigResource',
               'id' : 'Platform.EsigLoginView',
               'label' : MessageService.createStaticMessage('Electronic Signature Authentication'),
            });
            ui001.addChild( dialog029 );

            var requiredResources026 = {
               'attemptResultDomain' : {
                  'enableFeatureByProperty' : 'esig.enabled',
                  'artifactId' : 'Platform.EsigLoginView_attemptResultDomain',
                  'id' : 'aw3c53638b',
               },
            };
            dialog029.addRequiredResources( requiredResources026 );

            var container068 = new Container({
               'artifactId' : 'Platform.EsigLoginView_container_0',
               'id' : 'aw44fd9611',
            });
            dialog029.addChild( container068 );


            var group015 = new Group({
               'artifactId' : 'Platform.EsigLoginView_group_0',
               'id' : 'aw7bf6135f',
            });
            container068.addChild( group015 );


            var groupitem035 = new GroupItem({
               'artifactId' : 'Platform.EsigLoginView_group_0_groupitem_1',
               'id' : 'aw209714b9',
            });
            group015.addChild( groupitem035 );


            var text114 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'userName',
               'cssClass' : 'loginUsername',
               'editable' : false,
               'artifactId' : 'Platform.EsigLoginView_container_0_username',
               'id' : 'aw15aabb30',
               'label' : MessageService.createStaticMessage('User Name'),
               'placeHolder' : MessageService.createStaticMessage('User name'),
            });
            groupitem035.addChild( text114 );


            var text115 = new Text({
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
            groupitem035.addChild( text115 );


            var text116 = new Text({
               'resourceAttribute' : 'reason',
               'cssClass' : 'loginUsername',
               'editable' : true,
               'artifactId' : 'Platform.EsigLoginView_container_0_reason',
               'id' : 'aw6ccf562d',
               'label' : MessageService.createStaticMessage('Reason for Change'),
               'placeHolder' : MessageService.createStaticMessage('Reason for Change'),
               'required' : true,
            });
            groupitem035.addChild( text116 );


            var container069 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.EsigLoginView_footer',
               'id' : 'aw68d6d11c',
            });
            dialog029.addChild( container069 );


            var button071 = new Button({
               'artifactId' : 'Platform.EsigLoginView_Cancel_button',
               'id' : 'aw68a36a2b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers140 = [
               {
                     'method' : 'cancelEsig',
                     'artifactId' : 'Platform.EsigLoginView_Cancel_button_eventHandlers_click_cancelEsig',
                     'id' : 'awdba9800d',
                     'event' : 'click',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            button071.eventHandlers = eventHandlers140;
            container069.addChild( button071 );


            var button072 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.EsigLoginView_Save_button',
               'id' : 'awef41b275',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers141 = [
               {
                     'method' : 'submitEsig',
                     'artifactId' : 'Platform.EsigLoginView_Save_button_eventHandlers_click_submitEsig',
                     'id' : 'awa9f3497f',
                     'event' : 'click',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            button072.eventHandlers = eventHandlers141;
            container069.addChild( button072 );

            var eventHandlers142 = [
               {
                     'method' : 'initializeEsig',
                     'artifactId' : 'Platform.EsigLoginView_eventHandlers_show_initializeEsig',
                     'id' : 'aw681e6384',
                     'event' : 'show',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            dialog029.eventHandlers = eventHandlers142;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Signature', false);
               trackTimer.startTracking();
            }

            var view028 = new View({
               'id' : 'Platform.Signature',
               'label' : MessageService.createStaticMessage('Capture Real Signature'),
            });
            ui001.addChild( view028 );

            var requiredResources027 = {
               'PlatformAttachmentInfoResource' : {
                  'artifactId' : 'Platform.Signature_PlatformAttachmentInfoResource',
                  'id' : 'aw8cc44736',
               },
            };
            view028.addRequiredResources( requiredResources027 );

            var footer011 = new Footer({
               'artifactId' : 'Platform.Signature_footer',
               'id' : 'aw16b9ee39',
            });
            view028.addChild( footer011 );


            var button073 = new Button({
               'artifactId' : 'Platform.Signature_Cancel_button',
               'id' : 'aw9088fe5b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers143 = [
               {
                     'method' : 'cancelSignature',
                     'artifactId' : 'Platform.Signature_Cancel_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'awc27cd6a4',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button073.eventHandlers = eventHandlers143;
            footer011.addChild( button073 );


            var button074 = new Button({
               'artifactId' : 'Platform.Signature_Clear_button',
               'id' : 'awc6576044',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers144 = [
               {
                     'method' : 'clearSignature',
                     'artifactId' : 'Platform.Signature_Clear_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw90653ab1',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button074.eventHandlers = eventHandlers144;
            footer011.addChild( button074 );


            var button075 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.Signature_Save_button',
               'id' : 'awbc1f2293',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers145 = [
               {
                     'method' : 'saveSignature',
                     'artifactId' : 'Platform.Signature_Save_button_eventHandlers_click_saveSignature',
                     'id' : 'aw7d8e432b',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button075.eventHandlers = eventHandlers145;
            footer011.addChild( button075 );

            var eventHandlers146 = [
               {
                     'method' : 'initSignature',
                     'artifactId' : 'Platform.Signature_eventHandlers_show_initStopWorkView',
                     'id' : 'awb8cf4cb7',
                     'event' : 'initialize',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            view028.eventHandlers = eventHandlers146;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog030 = new Dialog({
               'id' : 'Platform.SignatureDialog',
            });
            ui001.addChild( dialog030 );


            var container070 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.SignatureDialog_container_buttons',
               'id' : 'aw91450791',
            });
            dialog030.addChild( container070 );


            var button076 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_Cancel_button',
               'id' : 'aw51ebe6e8',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers147 = [
               {
                     'method' : 'cancelSignatureDialog',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_Cancel_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw198ca753',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button076.eventHandlers = eventHandlers147;
            container070.addChild( button076 );


            var button077 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_clear_button',
               'id' : 'awdc63a382',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers148 = [
               {
                     'method' : 'clearSignature',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_clear_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw72eacc40',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button077.eventHandlers = eventHandlers148;
            container070.addChild( button077 );


            var button078 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_Save_button',
               'id' : 'awd4941650',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers149 = [
               {
                     'method' : 'saveSignature',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_Save_button_eventHandlers_click_saveSignature',
                     'id' : 'awa59c7577',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button078.eventHandlers = eventHandlers149;
            container070.addChild( button078 );

            var eventHandlers150 = [
               {
                     'method' : 'initSignature',
                     'artifactId' : 'Platform.SignatureDialog_eventHandlers_show_initStopWorkView',
                     'id' : 'aw71e7bce4',
                     'event' : 'show',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            dialog030.eventHandlers = eventHandlers150;
            app001.addHandler( {name : 'application.handlers.SRAttachmentHandler', 'class': new SRAttachmentHandler()} );
            app001.addHandler( {name : 'application.handlers.WOAttachmentHandler', 'class': new WOAttachmentHandler()} );
            app001.addHandler( {name : 'custom.handlers.MSLoginHandler', 'class': new MSLoginHandler()} );
            app001.addHandler( {name : 'custom.handlers.MSSRDetailHandler', 'class': new MSSRDetailHandler()} );
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
