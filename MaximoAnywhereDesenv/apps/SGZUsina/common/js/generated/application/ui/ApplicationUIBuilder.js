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
// Build: 2023-05-18 19:51:08
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
         "platform/ui/control/Link", 
         "custom/handlers/MSSRDetailHandler", 
         "platform/ui/control/Group", 
         "platform/ui/control/GroupItem", 
         "platform/ui/control/Queries", 
         "platform/ui/control/Query", 
         "platform/ui/control/List", 
         "platform/ui/control/SortOptions", 
         "platform/ui/control/SortOption", 
         "platform/ui/control/SortAttribute", 
         "platform/ui/control/ListItemTemplate", 
         "platform/ui/control/ListText", 
         "platform/ui/control/ErrorIndicator", 
         "platform/ui/control/Footer", 
         "platform/handlers/AttachmentHandler", 
         "application/handlers/SRAttachmentHandler", 
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

function(declare, all, BuilderBase, window, array, ioQuery, AdditionalDataManager, AdditionalDataUIManager, MessageService, Application, UserInterface, Dialog, Container, Text, Button, SSOHandler, LoginHandler, View, Image, MSLoginHandler, _ApplicationHandlerBase, ProgressIndicator, Actions, Action, WorkOfflineHandler, Link, MSSRDetailHandler, Group, GroupItem, Queries, Query, List, SortOptions, SortOption, SortAttribute, ListItemTemplate, ListText, ErrorIndicator, Footer, AttachmentHandler, SRAttachmentHandler, Lookup, ReturnAttributes, ReturnAttribute, SearchAttributes, SearchAttribute, PseudoOfflineModeHandler, CreateQueryBaseHandler, ErrorActions, LookupHandler, PushNotificationDialogHandler, DateTimePicker, SettingsHandler, ChangePasswordHandler, AdditionalDataDialogHandler, CheckBox, RadioButton, LoggerReportHandler, TimeTrackHandler, DialogHandler, DurationPicker, EsigHandler, SignatureHandler) {
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
               'id' : 'SGZUsina',
               'blindQuerySupport' : 'false',
               'version' : '20190120_031802-0500',
               'requiredRole' : 'ANYWHERE_SERVICE_REQUEST',
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
               'image' : '..\/..\/..\/..\/..\/..\/images\/mdpi\/Logo_SGZ_H_Usina.svg',
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
               'label' : MessageService.createStaticMessage('v7.6.4:1006221346D'),
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
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZUsina.ActionPanel', false);
               trackTimer.startTracking();
            }

            var view002 = new View({
               'showBackButton' : 'false',
               'resource' : 'sgzUsina',
               'id' : 'SGZUsina.ActionPanel',
               'label' : MessageService.createStaticMessage('Lista Padr\u00E3o'),
            });
            ui001.addChild( view002 );

            var requiredResources002 = {
               'sgzUsina' : {
                  'reload' : true,
                  'artifactId' : 'SGZUsina.ActionPanel_serviceRequest',
                  'id' : 'aw79fd8240',
               },
               'errorResource' : {
                  'artifactId' : 'SGZUsina.ActionPanel_requiredResource_errorResource',
                  'id' : 'awa74a806b',
               },
            };
            view002.addRequiredResources( requiredResources002 );

            var progressIndicator001 = new ProgressIndicator({
               'artifactId' : 'SGZUsina.ActionPanel_0',
               'id' : 'awd294a15b',
            });
            view002.addChild( progressIndicator001 );


            var actions001 = new Actions({
               'artifactId' : 'SGZUsina.ActionPanel_actions',
               'id' : 'aw16a4f3df',
            });
            view002.addChild( actions001 );


            var action001 = new Action({
               'overflow' : true,
               'artifactId' : 'SGZUsina.ActionPanel_SynchronizeData_action',
               'id' : 'aw7c4b4386',
               'label' : MessageService.createStaticMessage('Synchronize Data'),
            });
            actions001.addChild( action001 );

            var eventHandlers009 = [
               {
                     'method' : 'sync',
                     'artifactId' : 'SGZUsina.ActionPanel_SynchronizeData_action_eventHandlers_click_sync',
                     'id' : 'aw108c80d4',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               },
               {
                     'method' : 'enableDisableSyncMenu',
                     'artifactId' : 'SGZUsina.ActionPanelR_SynchronizeData_action_eventHandlers_render_enableDisableMenu',
                     'id' : 'aw37abb13e',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action001.eventHandlers = eventHandlers009;

            var container008 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'SGZUsina.ActionPanel_container_0',
               'id' : 'awdf731052',
            });
            view002.addChild( container008 );


            var link001 = new Link({
               'artifactId' : 'link',
               'id' : 'aw36ac99f1',
               'label' : MessageService.createStaticMessage(''),
            });
            container008.addChild( link001 );

            var eventHandlers010 = [
               {
                     'method' : 'hideShowErrorLink',
                     'artifactId' : 'link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'aw6f7bdfb3',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'showErrorPage',
                     'artifactId' : 'link_eventHandlers_click',
                     'id' : 'aw2ea586b5',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'initMyReportedSRNovoSessionStorage',
                     'artifactId' : 'link_eventHandlers_click_init',
                     'id' : 'aw5ff06c4b',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            link001.eventHandlers = eventHandlers010;

            var container009 = new Container({
               'artifactId' : 'SGZUsina.ActionPanel_container_1',
               'id' : 'awa87420c4',
            });
            view002.addChild( container009 );


            var group001 = new Group({
               'artifactId' : 'action1',
               'id' : 'aw9d9ad153',
            });
            container009.addChild( group001 );


            var groupitem001 = new GroupItem({
               'layout' : 'Button1Item1',
               'transitionTo' : 'SGZUsina.CreateSR',
               'artifactId' : 'action1groupitem',
               'id' : 'awbacaf343',
            });
            group001.addChild( groupitem001 );


            var image003 = new Image({
               'image' : 'acBtn_createNew.svg',
               'cssClass' : 'actionButton',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'sricon',
               'id' : 'awfbb69ba4',
               'label' : MessageService.createStaticMessage('Gerar Novo Ticket'),
               'platform' : 'false',
            });
            groupitem001.addChild( image003 );


            var text013 = new Text({
               'layoutInsertAt' : 'item1',
               'artifactId' : 'createsrtext',
               'id' : 'aw1b7e8145',
               'value' : MessageService.createStaticMessage('Gerar Novo Ticket'),
            });
            groupitem001.addChild( text013 );


            var groupitem002 = new GroupItem({
               'layout' : 'Button1Item1',
               'transitionTo' : 'SGZUsina.MyReportedSR',
               'artifactId' : 'action2groupitem',
               'id' : 'aw51fd4840',
            });
            group001.addChild( groupitem002 );


            var image004 = new Image({
               'image' : 'acBtn_viewList.svg',
               'cssClass' : 'actionButton',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'sricon2',
               'id' : 'awcb956f67',
               'label' : MessageService.createStaticMessage('Minha Lista de Tickets'),
               'platform' : 'false',
            });
            groupitem002.addChild( image004 );


            var text014 = new Text({
               'layoutInsertAt' : 'item1',
               'artifactId' : 'createsrtext2',
               'id' : 'aw1c787593',
               'value' : MessageService.createStaticMessage('Minha Lista de Tickets'),
            });
            groupitem002.addChild( text014 );

            var eventHandlers011 = [
               {
                     'method' : 'initActionPanel',
                     'artifactId' : 'SGZUsina.ActionPanel_eventHandlers_initialize_initActionPanel',
                     'id' : 'awa6d6aa86',
                     'event' : 'initialize',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            view002.eventHandlers = eventHandlers011;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZUsina.MyReportedSR', false);
               trackTimer.startTracking();
            }

            var view003 = new View({
               'showBackButton' : 'true',
               'resource' : 'sgzUsina',
               'id' : 'SGZUsina.MyReportedSR',
               'label' : MessageService.createStaticMessage('My Reported SRs'),
            });
            ui001.addChild( view003 );


            var queries001 = new Queries({
               'resource' : 'sgzUsina',
               'artifactId' : 'SGZUsina.MyReportedSR_serviceRequest_queries',
               'id' : 'aw9064c612',
            });
            view003.addChild( queries001 );


            var query001 = new Query({
               'artifactId' : 'SGZUsina.MyReportedSR_MY_REPORTED_SR',
               'id' : 'aw23e17a83',
               'label' : MessageService.createStaticMessage('Meus Tickets'),
               'queryBase' : 'ConsultaPadraoSGZUsina',
            });
            queries001.addChild( query001 );


            var query002 = new Query({
               'system' : 'true',
               'artifactId' : 'SGZUsina.MyReportedSR___errored__',
               'id' : 'aw13e0f7e2',
               'label' : MessageService.createStaticMessage('Records with Errors'),
               'queryBase' : '__errored__',
            });
            queries001.addChild( query002 );

            var eventHandlers012 = [
               {
                     'method' : 'hideShowErrorMenu',
                     'artifactId' : 'SGZUsina.MyReportedSR___errored___eventHandlers_render_hideShowErrorMenu',
                     'id' : 'aw4b71612c',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            query002.eventHandlers = eventHandlers012;
            var requiredResources003 = {
               'sgzUsina' : {
                  'reload' : true,
                  'artifactId' : 'SGZUsina.MyReportedSR_serviceRequest',
                  'id' : 'awf9baec64',
               },
               'PlatformGeolocationLocalStore' : {
                  'artifactId' : 'WorkExecution.WorkItemsView_gpslocalstore',
                  'id' : 'aw468c12ee',
               },
            };
            view003.addRequiredResources( requiredResources003 );
            var eventHandlers013 = [
               {
                     'method' : 'initMyReportedSRNovo',
                     'artifactId' : 'SGZUsina.MyReportedSR_eventHandlers_initialize_initMyReportedSR',
                     'id' : 'aw153fa51a',
                     'event' : 'initialize',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            view003.eventHandlers = eventHandlers013;

            var progressIndicator002 = new ProgressIndicator({
               'artifactId' : 'SGZUsina.MyReportedSR_0',
               'id' : 'awb32b329',
            });
            view003.addChild( progressIndicator002 );



            var sortOptions001 = new SortOptions({
               'artifactId' : 'SGZUsina.WorkItemsView_serviceRequest_list_sortOptions',
               'id' : 'awc306fd82',
            });

            var sortOption001 = new SortOption({
               'artifactId' : 'SGZUsina.WorkItemsView_sortOption_srnum',
               'id' : 'aweaba5472',
               'label' : MessageService.createStaticMessage('Request Number'),
            });
            sortOptions001.addChild( sortOption001 );


            var sortAttribute001 = new SortAttribute({
               'name' : 'identifier',
               'artifactId' : 'SGZUsina.WorkItemsView_srnum_sortAttribute_identifier',
               'id' : 'aw1ee138f0',
               'direction' : 'desc',
            });
            sortOption001.addChild( sortAttribute001 );



            var listItemTemplate001 = new ListItemTemplate({
               'layout' : 'WorkListItem',
               'artifactId' : 'SGZUsina.MyReportedSR_serviceRequest_listItemTemplate_WorkListItem',
               'id' : 'awb2c99a2',
            });
            var eventHandlers014 = [
               {
                     'method' : 'carregIncView',
                     'artifactId' : 'SGZUsina.MyReportedSR_eventHandlers_carregIncView',
                     'id' : 'awabcb7660',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            listItemTemplate001.eventHandlers = eventHandlers014;

            var listtext001 = new ListText({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZUsina.MyReportedSR_serviceRequest_WorkListItem_srnum',
               'id' : 'aw18a85723',
            });
            listItemTemplate001.addChild( listtext001 );


            var listtext002 = new ListText({
               'resourceAttribute' : 'ms_plate',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'ServiceRequestMyReportedSR_serviceRequest_WorkListItem_ms_plate',
               'id' : 'aw930d6d66',
               'cssAttributes' : 'status',
            });
            listItemTemplate001.addChild( listtext002 );


            var listtext003 = new ListText({
               'resourceAttribute' : 'ms_expiredate',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_starttime',
               'id' : 'aw5840f54a',
            });
            listItemTemplate001.addChild( listtext003 );


            var image005 = new Image({
               'image' : '\/images\/action_timer_OFF.svg',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'WorkExecution.action_timer_OFF',
               'id' : 'awe29750bb',
               'platform' : 'false',
            });
            listItemTemplate001.addChild( image005 );


            var image006 = new Image({
               'image' : 'statusicons\/{:ms_status}.svg',
               'cssClass' : 'statusDesc',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_statusimg',
               'id' : 'awc0a06672',
               'cssAttributes' : 'internalStatus',
               'platform' : 'false',
            });
            listItemTemplate001.addChild( image006 );


            var listtext004 = new ListText({
               'resourceAttribute' : 'ms_status',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'WorkExecution.WorkItemsView_workOrder_WorkListItem_statusdesc',
               'id' : 'aw6aa53129',
               'cssAttributes' : 'status',
            });
            listItemTemplate001.addChild( listtext004 );



            var list001 = new List({
               'resource' : 'sgzUsina',
               'sortOptions' : sortOptions001,
               'listItemTemplate' : listItemTemplate001,
               'artifactId' : 'SGZUsina.MyReportedSR_serviceRequest_list',
               'id' : 'awe441863c',
               'displayPageSize' : '20',
            });
            view003.addChild( list001 );


            var actions002 = new Actions({
               'artifactId' : 'SGZUsina.MyReportedSR_actions',
               'id' : 'awa036d391',
            });
            view003.addChild( actions002 );


            var action002 = new Action({
               'overflow' : true,
               'transitionTo' : 'SGZUsina.CreateSR',
               'artifactId' : 'SGZUsina.MyReportedSR_CreateSR_action',
               'id' : 'awc9122843',
               'label' : MessageService.createStaticMessage('Gerar Novo Ticket'),
            });
            actions002.addChild( action002 );


            var action003 = new Action({
               'overflow' : true,
               'artifactId' : 'SGZUsina.MyReportedSR_SynchronizeData_action',
               'id' : 'aw794592d4',
               'label' : MessageService.createStaticMessage('Synchronize Data'),
            });
            actions002.addChild( action003 );

            var eventHandlers015 = [
               {
                     'method' : 'sync',
                     'artifactId' : 'SGZUsina.MyReportedSR_SynchronizeData_action_eventHandlers_click_sync',
                     'id' : 'aw5001c947',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               },
               {
                     'method' : 'enableDisableSyncMenu',
                     'artifactId' : 'SGZUsina.MyReportedSR_SynchronizeData_action_eventHandlers_render_enableDisableMenu',
                     'id' : 'aw9f822568',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action003.eventHandlers = eventHandlers015;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZUsina.CredDetail', false);
               trackTimer.startTracking();
            }

            var view004 = new View({
               'showBackButton' : 'true',
               'resource' : 'sgzUsina',
               'id' : 'SGZUsina.CredDetail',
               'label' : MessageService.createStaticMessage('Completar Carregamento'),
               'editableView' : 'SGZUsina.CredDetailCredEdit',
            });
            ui001.addChild( view004 );

            var requiredResources004 = {
               'sgzUsina' : {
                  'artifactId' : 'ServiceRequest.CredDetail_serviceRequest',
                  'id' : 'aw96218016',
               },
            };
            view004.addRequiredResources( requiredResources004 );
            var eventHandlers016 = [
               {
                     'method' : 'fetchAllListSizes',
                     'artifactId' : 'ServiceRequest.CredDetail_eventHandlers_initialize_fetchAllListSizes',
                     'id' : 'aw600f86b1',
                     'event' : 'initialize',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'refreshAllListSizes',
                     'artifactId' : 'ServiceRequest.CredDetailw_eventHandlers_render_refreshAllListSizes',
                     'id' : 'awdae077d2',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            view004.eventHandlers = eventHandlers016;

            var container010 = new Container({
               'resource' : 'sgzUsina',
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_container_0',
               'id' : 'aw89c05d84',
            });
            view004.addChild( container010 );


            var errorIndicator001 = new ErrorIndicator({
               'artifactId' : 'ServiceRequest.CredDetail_errorIndicator',
               'id' : 'aweabfa662',
            });
            container010.addChild( errorIndicator001 );


            var group002 = new Group({
               'artifactId' : 'ServiceRequest.CredDetail_group_0',
               'id' : 'aw492259ea',
            });
            container010.addChild( group002 );


            var groupitem003 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_status_0',
               'id' : 'aw704933e9',
            });
            group002.addChild( groupitem003 );


            var text015 = new Text({
               'resourceAttribute' : 'identifier',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.ms_amticketid_0',
               'id' : 'awdc2bbe2d',
               'label' : MessageService.createStaticMessage('Ticket'),
            });
            groupitem003.addChild( text015 );


            var groupitem004 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_srnum_0',
               'id' : 'aw3611e015',
            });
            group002.addChild( groupitem004 );


            var text016 = new Text({
               'resourceAttribute' : 'usina',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.usina_0',
               'id' : 'awc245626e',
               'label' : MessageService.createStaticMessage('Usina'),
            });
            groupitem004.addChild( text016 );


            var groupitem005 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_ms_apidauth_0',
               'id' : 'aw92e5529b',
            });
            group002.addChild( groupitem005 );


            var text017 = new Text({
               'resourceAttribute' : 'ms_apidauth',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.ms_apidauth',
               'id' : 'awde37a340',
               'label' : MessageService.createStaticMessage('Usina Autorizada'),
            });
            groupitem005.addChild( text017 );


            var groupitem006 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_owner_0',
               'id' : 'aw81c134ce',
            });
            group002.addChild( groupitem006 );


            var text018 = new Text({
               'resourceAttribute' : 'ms_siteid',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.Subprefeitura_0',
               'id' : 'awddc787a2',
               'label' : MessageService.createStaticMessage('Subprefeitura'),
            });
            groupitem006.addChild( text018 );


            var groupitem007 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_summary_0',
               'id' : 'awf1d7ee6a',
            });
            group002.addChild( groupitem007 );


            var text019 = new Text({
               'resourceAttribute' : 'ms_status',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.ms_status_0',
               'id' : 'aw50633c3f',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem007.addChild( text019 );


            var groupitem008 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_0',
               'id' : 'awcc1bcc97',
            });
            group002.addChild( groupitem008 );


            var text020 = new Text({
               'resourceAttribute' : 'ms_expiredate',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_0_ms_expiredate',
               'id' : 'awd228cfe8',
               'label' : MessageService.createStaticMessage('Data de Validade'),
            });
            groupitem008.addChild( text020 );


            var groupitem009 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.EditLocationView_0',
               'id' : 'aw5cb78c5',
            });
            group002.addChild( groupitem009 );


            var text021 = new Text({
               'resourceAttribute' : 'contratada',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.LocationView_0_contratada',
               'id' : 'awbf776f1f',
               'label' : MessageService.createStaticMessage('Contratada'),
            });
            groupitem009.addChild( text021 );


            var groupitem010 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_ms_plate_0',
               'id' : 'aw70fcd029',
            });
            group002.addChild( groupitem010 );


            var text022 = new Text({
               'resourceAttribute' : 'ms_plate',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.ms_plate_0000',
               'id' : 'aw577a6ed9',
               'label' : MessageService.createStaticMessage('Placa'),
            });
            groupitem010.addChild( text022 );


            var groupitem011 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.AssetView_0',
               'id' : 'awd4ebf351',
            });
            group002.addChild( groupitem011 );


            var text023 = new Text({
               'resourceAttribute' : 'ms_authqty',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest._0_ms_authqty',
               'id' : 'aw22198962',
               'label' : MessageService.createStaticMessage('Quantidade de Massa Asf\u00E1ltica (kg)'),
            });
            groupitem011.addChild( text023 );


            var groupitem012 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_reportedpriority_0',
               'id' : 'aw8ac9508f',
            });
            group002.addChild( groupitem012 );


            var text024 = new Text({
               'resourceAttribute' : 'ms_remarks',
               'editable' : true,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.ms_remarks_0',
               'id' : 'aw85832606',
               'label' : MessageService.createStaticMessage('Observa\u00E7\u00F5es'),
            });
            groupitem012.addChild( text024 );


            var groupitem013 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_ms_tareweight_0',
               'id' : 'aw8478ba6d',
            });
            group002.addChild( groupitem013 );


            var text025 = new Text({
               'resourceAttribute' : 'ms_tareweight',
               'editable' : true,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.ms_tareweight',
               'id' : 'awe5e9a139',
               'label' : MessageService.createStaticMessage('Peso Tara (kg)'),
            });
            groupitem013.addChild( text025 );


            var groupitem014 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_ms_netweight_0',
               'id' : 'aw1f3688f3',
            });
            group002.addChild( groupitem014 );


            var text026 = new Text({
               'resourceAttribute' : 'ms_netweight',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.ms_netweight',
               'id' : 'aw6aee02f0',
               'label' : MessageService.createStaticMessage('Peso L\u00EDquido (kg)'),
            });
            groupitem014.addChild( text026 );


            var groupitem015 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_qtd_massa_0_0',
               'id' : 'aw574003d0',
            });
            group002.addChild( groupitem015 );


            var text027 = new Text({
               'resourceAttribute' : 'qtd_massa',
               'editable' : true,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.qtd_massa_0',
               'id' : 'aw6e417593',
               'label' : MessageService.createStaticMessage('Quantidade de Massa Asf\u00E1ltica Carregada (kg)'),
            });
            groupitem015.addChild( text027 );


            var groupitem016 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_qtd_emulsao_0',
               'id' : 'aw4753130e',
            });
            group002.addChild( groupitem016 );


            var text028 = new Text({
               'resourceAttribute' : 'qtd_emulsao',
               'editable' : true,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.qtd_emulsao_0000',
               'id' : 'aw58b4537c',
               'label' : MessageService.createStaticMessage('Quantidade de Emuls\u00E3o Carregada (kg)'),
            });
            groupitem016.addChild( text028 );


            var groupitem017 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_ms_grossweight_1',
               'id' : 'aw5df8ca52',
            });
            group002.addChild( groupitem017 );


            var text029 = new Text({
               'resourceAttribute' : 'ms_grossweight',
               'editable' : true,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.ms_grossweight_0',
               'id' : 'awc9edfff4',
               'label' : MessageService.createStaticMessage('Peso Bruto (Kg)'),
            });
            groupitem017.addChild( text029 );


            var groupitem018 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'enableFeatureByProperty' : 'attachments.enabled',
               'transitionTo' : 'SGZUsina.AttachmentsView',
               'artifactId' : 'ServiceRequest.CredDetailViewEdit_groupitem_ServiceRequest.AttachmentsView_013',
               'id' : 'aw345eccd6',
            });
            group002.addChild( groupitem018 );

            var eventHandlers017 = [
               {
                     'method' : 'control_final',
                     'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_eventHandlers_click_discardNewServiceRequestView_11',
                     'id' : 'aw3a39f5c1',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            groupitem018.eventHandlers = eventHandlers017;

            var text030 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'ServiceRequest.CredDetailViewEdit_groupitem_ServiceRequest.AttachmentsView_0_Attachments013',
               'id' : 'aw25d3eb53',
               'value' : MessageService.createStaticMessage('Foto Ticket de Carregamento'),
            });
            groupitem018.addChild( text030 );


            var footer001 = new Footer({
               'artifactId' : 'SGZUsina.CredDetail_viewDetail_footer',
               'id' : 'awa40a1a33',
            });
            view004.addChild( footer001 );


            var button005 = new Button({
               'artifactId' : 'SGZUsina.CredDetail_Cancel_viewDetail',
               'id' : 'awa7fe3b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers018 = [
               {
                     'method' : 'control_final',
                     'artifactId' : 'SGZUsina.CredDetail_Cancel_button_eventHandlers_click_discardNewServiceRequestView_1',
                     'id' : 'awfd33c8ec',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'discardNewServiceRequestView',
                     'artifactId' : 'SGZUsina.CredDetail_Cancel_button_eventHandlers_click_discardNewServiceRequestView_2',
                     'id' : 'aw643a9956',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button005.eventHandlers = eventHandlers018;
            footer001.addChild( button005 );


            var button006 = new Button({
               'artifactId' : 'SGZUsina.CreateSR_Salvar_viewDetail',
               'id' : 'awd58595a1',
               'label' : MessageService.createStaticMessage('Salvar'),
            });
            var eventHandlers019 = [
               {
                     'method' : 'control_final',
                     'artifactId' : 'SGZUsina.CredDetail_Salvarms_netweight_eventHandlers_discardNewServiceRequestView_1',
                     'id' : 'aw1681f7de',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'calcNetweight',
                     'artifactId' : 'SGZUsina.CredDetail_Salvarms_netweight_eventHandlers_click',
                     'id' : 'aw4b64488c',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'salvarTicket',
                     'artifactId' : 'SGZUsina.CredDetail_Salvar_button_eventHandlers_click',
                     'id' : 'aw27f54185',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button006.eventHandlers = eventHandlers019;
            footer001.addChild( button006 );


            var button007 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZUsina.CredDetail_Finalizar_button',
               'id' : 'awfae9c3c7',
               'label' : MessageService.createStaticMessage('Finalizar'),
               'primary' : 'true',
            });
            var eventHandlers020 = [
               {
                     'method' : 'calcNetweight',
                     'artifactId' : 'SGZUsina.CredDetail_finalizarms_netweight_eventHandlers_click',
                     'id' : 'aw2684362e',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'control_final',
                     'artifactId' : 'SGZUsina.CredDetail_finalizar_button_eventHandlers_click_commitNewServiceRequestView_1',
                     'id' : 'aw8abea816',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'carregIncShowDialog',
                     'artifactId' : 'SGZUsina.CredDetail_finalizar_button_eventHandlers_click_commitNewServiceRequestView_2',
                     'id' : 'aw13b7f9ac',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button007.eventHandlers = eventHandlers020;
            footer001.addChild( button007 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZUsina.TransferCredEdit', false);
               trackTimer.startTracking();
            }

            var view005 = new View({
               'showBackButton' : 'true',
               'resource' : 'sgzUsina',
               'id' : 'SGZUsina.TransferCredEdit',
               'label' : MessageService.createStaticMessage('Transferir para outra Usina'),
            });
            ui001.addChild( view005 );

            var requiredResources005 = {
               'sgzUsina' : {
                  'artifactId' : 'ServiceRequest.Transfer_serviceRequest',
                  'id' : 'aw69716b28',
               },
               'MSasphaltplant' : {
                  'artifactId' : 'ServiceRequest.CreateSR_MSasphaltplant00',
                  'id' : 'aw4617fb1d',
               },
            };
            view005.addRequiredResources( requiredResources005 );
            var eventHandlers021 = [
               {
                     'method' : 'fetchAllListSizes',
                     'artifactId' : 'ServiceRequest.Transfer_eventHandlers_initialize_fetchAllListSizes',
                     'id' : 'awc67bd446',
                     'event' : 'initialize',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'refreshAllListSizes',
                     'artifactId' : 'ServiceRequest.Transferw_eventHandlers_render_refreshAllListSizes',
                     'id' : 'aw12e5e777',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            view005.eventHandlers = eventHandlers021;

            var container011 = new Container({
               'resource' : 'sgzUsina',
               'artifactId' : 'ServiceRequest.Transfer_serviceRequest_container_0',
               'id' : 'aw8097167e',
            });
            view005.addChild( container011 );


            var errorIndicator002 = new ErrorIndicator({
               'artifactId' : 'ServiceRequest.Transfer_errorIndicator',
               'id' : 'aw15ef4d5c',
            });
            container011.addChild( errorIndicator002 );


            var group003 = new Group({
               'artifactId' : 'ServiceRequest.CredDetail_group_tr',
               'id' : 'awb88a5ca3',
            });
            container011.addChild( group003 );


            var groupitem019 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_status_tr',
               'id' : 'aw21ba6673',
            });
            group003.addChild( groupitem019 );


            var text031 = new Text({
               'resourceAttribute' : 'identifier',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.ms_amticketid_tr',
               'id' : 'awbd1f0257',
               'label' : MessageService.createStaticMessage('Ticket'),
            });
            groupitem019.addChild( text031 );


            var groupitem020 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_srnum_tr',
               'id' : 'aw95f78097',
            });
            group003.addChild( groupitem020 );


            var text032 = new Text({
               'resourceAttribute' : 'usina',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.usina_tr',
               'id' : 'aw52d47ca1',
               'label' : MessageService.createStaticMessage('Usina'),
            });
            groupitem020.addChild( text032 );


            var groupitem021 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_ms_apidauth_tr',
               'id' : 'aw9f53da02',
            });
            group003.addChild( groupitem021 );


            var text033 = new Text({
               'resourceAttribute' : 'ms_apidauth',
               'lookup' : 'ServiceRequest.MSasphaltplantLookup',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CreateSR_serviceRequest_groupitem_ServiceRequest_ms_apidauth_tr',
               'id' : 'awee42c55e',
               'label' : MessageService.createStaticMessage('Complet Carreg: Usina Crendenciada'),
               'lookupAttribute' : 'idusina',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
               'required' : true,
            });
            groupitem021.addChild( text033 );

            var eventHandlers022 = [
               {
                     'method' : '',
                     'artifactId' : 'ServiceRequest.SRDetail_transfer_serviceRequest_groupitem_ServiceRequest.EditPriorityView_0_Priority_Priority_eventHandlers_validate_validateSitetr',
                     'id' : 'awe690c3b4',
                     'event' : 'validate',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            text033.eventHandlers = eventHandlers022;

            var groupitem022 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_owner_tr',
               'id' : 'aw84415b1f',
            });
            group003.addChild( groupitem022 );


            var text034 = new Text({
               'resourceAttribute' : 'ms_siteid',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.Subprefeitura_tr',
               'id' : 'awc01970df',
               'label' : MessageService.createStaticMessage('Subprefeitura'),
            });
            groupitem022.addChild( text034 );


            var groupitem023 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_summary_tr',
               'id' : 'aw558a2a34',
            });
            group003.addChild( groupitem023 );


            var text035 = new Text({
               'resourceAttribute' : 'ms_status',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.ms_status_tr',
               'id' : 'aw4e2a3b9d',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem023.addChild( text035 );


            var groupitem024 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_tr',
               'id' : 'aw96bb68b7',
            });
            group003.addChild( groupitem024 );


            var text036 = new Text({
               'resourceAttribute' : 'ms_expiredate',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_tr_ms_expiredate',
               'id' : 'aw2e0682fc',
               'label' : MessageService.createStaticMessage('Data de Validade'),
            });
            groupitem024.addChild( text036 );


            var groupitem025 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.EditLocationView_tr',
               'id' : 'aw131788db',
            });
            group003.addChild( groupitem025 );


            var text037 = new Text({
               'resourceAttribute' : 'contratada',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.LocationView_tr_contratada',
               'id' : 'awe0f29f9',
               'label' : MessageService.createStaticMessage('Contratada'),
            });
            groupitem025.addChild( text037 );


            var groupitem026 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_ms_plate_tr',
               'id' : 'awbade1120',
            });
            group003.addChild( groupitem026 );


            var text038 = new Text({
               'resourceAttribute' : 'ms_plate',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.ms_plate_tr000',
               'id' : 'aw97eda100',
               'label' : MessageService.createStaticMessage('Placa'),
            });
            groupitem026.addChild( text038 );


            var groupitem027 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_reportedpriority_tr',
               'id' : 'aw8591227d',
            });
            group003.addChild( groupitem027 );


            var text039 = new Text({
               'resourceAttribute' : 'ms_remarks',
               'editable' : true,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.ms_remarks_tr',
               'id' : 'aw11fa538f',
               'label' : MessageService.createStaticMessage('Observa\u00E7\u00F5es'),
            });
            groupitem027.addChild( text039 );


            var groupitem028 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_ms_tareweight_tr',
               'id' : 'awcb9b10c3',
            });
            group003.addChild( groupitem028 );


            var text040 = new Text({
               'resourceAttribute' : 'ms_tareweight',
               'editable' : true,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.ms_tareweight2',
               'id' : 'aw4535dfa4',
               'label' : MessageService.createStaticMessage('Peso Tara (kg)'),
            });
            groupitem028.addChild( text040 );


            var groupitem029 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_ms_netweight_tr',
               'id' : 'awdcb7e0b2',
            });
            group003.addChild( groupitem029 );


            var text041 = new Text({
               'resourceAttribute' : 'ms_netweight',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.ms_netweight3',
               'id' : 'awd0059285',
               'label' : MessageService.createStaticMessage('Peso L\u00EDquido (kg)'),
            });
            groupitem029.addChild( text041 );


            var groupitem030 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_qtd_massa_tr_tr',
               'id' : 'aw1010788f',
            });
            group003.addChild( groupitem030 );


            var text042 = new Text({
               'resourceAttribute' : 'qtd_massa',
               'editable' : true,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.qtd_massa_tr',
               'id' : 'aw9174f617',
               'label' : MessageService.createStaticMessage('Quantidade de Massa Asf\u00E1ltica Carregada (kg)'),
            });
            groupitem030.addChild( text042 );


            var groupitem031 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_qtd_emulsao_tr',
               'id' : 'aw1fe30b88',
            });
            group003.addChild( groupitem031 );


            var text043 = new Text({
               'resourceAttribute' : 'qtd_emulsao',
               'editable' : true,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.qtd_emulsao_tr000',
               'id' : 'aw315e385a',
               'label' : MessageService.createStaticMessage('Quantidade de Emuls\u00E3o Carregada (kg)'),
            });
            groupitem031.addChild( text043 );


            var groupitem032 = new GroupItem({
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest_ms_grossweight_tr',
               'id' : 'aw643f8ccf',
            });
            group003.addChild( groupitem032 );


            var text044 = new Text({
               'resourceAttribute' : 'ms_grossweight',
               'editable' : true,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.ms_grossweight_tr',
               'id' : 'aw4205ae66',
               'label' : MessageService.createStaticMessage('Peso Bruto (Kg)'),
            });
            groupitem032.addChild( text044 );


            var footer002 = new Footer({
               'artifactId' : 'SGZUsina.Transfer_viewDetail_footer',
               'id' : 'aw22b396f5',
            });
            view005.addChild( footer002 );


            var button008 = new Button({
               'artifactId' : 'SGZUsina.Transfer_Cancel_viewDetail',
               'id' : 'aw861e72fd',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers023 = [
               {
                     'method' : 'control_final',
                     'artifactId' : 'SGZUsina.Transfer_Cancel_button_eventHandlers_click_discardNewServiceRequestView_1',
                     'id' : 'awe85cda66',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'discardNewServiceRequestView',
                     'artifactId' : 'SGZUsina.Transfer_Cancel_button_eventHandlers_click_discardNewServiceRequestView_2',
                     'id' : 'aw71558bdc',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button008.eventHandlers = eventHandlers023;
            footer002.addChild( button008 );


            var button009 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZUsina.Transfer_Finalizar_button',
               'id' : 'aw90b7d117',
               'label' : MessageService.createStaticMessage('Finalizar'),
               'primary' : 'true',
            });
            var eventHandlers024 = [
               {
                     'method' : 'calcNetweight',
                     'artifactId' : 'SGZUsina.Transfer_finalizarms_netweight_eventHandlers_click',
                     'id' : 'awf2cdf89c',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'control_final',
                     'artifactId' : 'SGZUsina.Transfer_finalizar_button_eventHandlers_click_commitNewServiceRequestView_1',
                     'id' : 'awb86bbcf0',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'carregIncSgzUsinaViewNovo',
                     'artifactId' : 'SGZUsina.Transfer_finalizar_button_eventHandlers_click_commitNewServiceRequestView_2',
                     'id' : 'aw2162ed4a',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button009.eventHandlers = eventHandlers024;
            footer002.addChild( button009 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZUsina.CreateSR', false);
               trackTimer.startTracking();
            }

            var view006 = new View({
               'resource' : 'sgzUsina',
               'showKeyboard' : 'true',
               'id' : 'SGZUsina.CreateSR',
               'label' : MessageService.createStaticMessage('Gerar Ticket'),
            });
            ui001.addChild( view006 );

            var requiredResources006 = {
               'sgzUsina' : {
                  'artifactId' : 'SGZUsina.CreateSR_serviceRequest',
                  'id' : 'aw7e38b3bc',
               },
               'MSaptoolauth' : {
                  'artifactId' : 'ServiceRequest.CreateSR_MSaptoolauth',
                  'id' : 'aw2e63d53d',
               },
               'MSasphaltplant' : {
                  'artifactId' : 'ServiceRequest.CreateSR_MSasphaltplant',
                  'id' : 'aw91fb4052',
               },
               'MSPersonAut' : {
                  'artifactId' : 'ServiceRequest.CreateSR_MSPersonAut',
                  'id' : 'aw50235e5c',
               },
               'subpref' : {
                  'artifactId' : 'ServiceRequest.CredDetail_subpref',
                  'id' : 'awacdd1bda',
               },
               'toolsiteauth' : {
                  'artifactId' : 'ServiceRequest.CredDetail_toolsiteauth',
                  'id' : 'aw4f0b04ea',
               },
            };
            view006.addRequiredResources( requiredResources006 );
            var eventHandlers025 = [
               {
                     'method' : 'initNewServiceRequestView',
                     'artifactId' : 'SGZUsina.CreateSR_eventHandlers_initialize_initNewServiceRequestView',
                     'id' : 'awfe9fa36c',
                     'event' : 'initialize',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'initMyReportedSRNovoSessionStorage',
                     'artifactId' : 'SGZUsina.CreateSR_eventHandlers_initialize_initMyReportedSR',
                     'id' : 'aw17d39c89',
                     'event' : 'initialize',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'handleBackButton',
                     'artifactId' : 'SGZUsina.CreateSR_eventHandlers_cleanup_handleBackButton',
                     'id' : 'awe752899b',
                     'event' : 'cleanup',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            view006.eventHandlers = eventHandlers025;

            var container012 = new Container({
               'resource' : 'sgzUsina',
               'artifactId' : 'SGZUsina.CreateSR_serviceRequest_container_0',
               'id' : 'awf0dca531',
            });
            view006.addChild( container012 );


            var group004 = new Group({
               'artifactId' : 'SGZUsina.CreateSR_group_0',
               'id' : 'aw3b50cba',
            });
            container012.addChild( group004 );


            var groupitem033 = new GroupItem({
               'artifactId' : 'SGZUsina.CreateSR_serviceRequest_groupitem_ServiceRequest_ms_plate',
               'id' : 'awc710f3c2',
            });
            group004.addChild( groupitem033 );


            var text045 = new Text({
               'resourceAttribute' : 'ms_plate',
               'editable' : true,
               'artifactId' : 'SGZUsina.CreateSR_serviceRequest_groupitem_ServiceRequest.ms_plate',
               'id' : 'aw20c82454',
               'label' : MessageService.createStaticMessage('Placa'),
               'codeScannable' : true,
               'required' : false,
            });
            groupitem033.addChild( text045 );

            var eventHandlers026 = [
               {
                     'method' : 'validatePlate02',
                     'artifactId' : 'ServiceRequest.CreateSR_validateplate',
                     'id' : 'awc8861bf2',
                     'event' : 'validate',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            text045.eventHandlers = eventHandlers026;

            var groupitem034 = new GroupItem({
               'artifactId' : 'ServiceRequest.CreateSR_serviceRequest_groupitem_ServiceRequest_Subprefeitura00001',
               'id' : 'awa8b82d18',
            });
            group004.addChild( groupitem034 );


            var text046 = new Text({
               'resourceAttribute' : 'ms_siteid',
               'lookup' : 'ServiceRequest.msSiteLookup',
               'editable' : false,
               'artifactId' : 'ServiceRequest.CreateSR_serviceRequest_groupitem_ServiceRequest.Subprefeitura',
               'id' : 'aw84d06285',
               'label' : MessageService.createStaticMessage('Subprefeitura'),
               'lookupAttribute' : 'siteid',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
               'required' : true,
            });
            groupitem034.addChild( text046 );

            var eventHandlers027 = [
               {
                     'method' : 'validateSiteid',
                     'artifactId' : 'ServiceRequest.SRDetailEdit_serviceRequest_groupitem_ServiceRequest.EditPriorityView_0_Priority_Priority_eventHandlers_validate_validateSiteid',
                     'id' : 'awfc10bcf0',
                     'event' : 'validate',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            text046.eventHandlers = eventHandlers027;

            var container013 = new Container({
               'resource' : 'sgzUsina',
               'artifactId' : 'SGZUsina.CreateSR_serviceRequest_container_2',
               'id' : 'aw1ed2c41d',
            });
            view006.addChild( container013 );


            var group005 = new Group({
               'artifactId' : 'SGZUsina.CreateSR_group_011',
               'id' : 'awc1c61cdb',
            });
            container013.addChild( group005 );


            var groupitem035 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'enableFeatureByProperty' : 'attachments.enabled',
               'transitionTo' : 'SGZUsina.AttachmentsView',
               'artifactId' : 'ServiceRequest.SRDetailViewEdit_groupitem_ServiceRequest.AttachmentsView_0',
               'id' : 'aw24f297fd',
            });
            group005.addChild( groupitem035 );


            var text047 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'ServiceRequest.SRDetailViewEdit_groupitem_ServiceRequest.AttachmentsView_0_Attachments',
               'id' : 'aw7e4f43d9',
               'value' : MessageService.createStaticMessage('Foto Placa'),
            });
            groupitem035.addChild( text047 );


            var text048 = new Text({
               'resourceAttribute' : 'attachmentssize',
               'editable' : false,
               'layoutInsertAt' : 'count1',
               'artifactId' : 'ServiceRequest.SRDetailViewEdit_groupitem_ServiceRequest.AttachmentsView_0_attachmentssize',
               'id' : 'aw96d9d08f',
            });
            groupitem035.addChild( text048 );


            var footer003 = new Footer({
               'artifactId' : 'SGZUsina.CreateSR_footer',
               'id' : 'aw2c009654',
            });
            view006.addChild( footer003 );


            var button010 = new Button({
               'artifactId' : 'SGZUsina.CreateSR_Cancel_button',
               'id' : 'aw1fd92e72',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers028 = [
               {
                     'method' : 'discardNewServiceRequestView',
                     'artifactId' : 'SGZUsina.CreateSR_Cancel_button_eventHandlers_click_discardNewServiceRequestView',
                     'id' : 'aw640c6c53',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button010.eventHandlers = eventHandlers028;
            footer003.addChild( button010 );


            var button011 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZUsina.CreateSR_wonum_Create_button',
               'id' : 'awf430e5bf',
               'label' : MessageService.createStaticMessage('Create'),
               'primary' : 'true',
            });
            var eventHandlers029 = [
               {
                     'method' : 'commitNewSgzUsinaView',
                     'artifactId' : 'SGZUsina.CreateSR_wonum_Create_button_eventHandlers_click_commitNewServiceRequestView',
                     'id' : 'awe64fe67f',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button011.eventHandlers = eventHandlers029;
            footer003.addChild( button011 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZUsina.SRDetail', false);
               trackTimer.startTracking();
            }

            var view007 = new View({
               'showBackButton' : 'true',
               'resource' : 'sgzUsina',
               'id' : 'SGZUsina.SRDetail',
               'label' : MessageService.createStaticMessage('Detalhes do Ticket Aguardando Carregamento'),
               'editableView' : 'SGZUsina.SRDetailEdit',
            });
            ui001.addChild( view007 );

            var requiredResources007 = {
               'sgzUsina' : {
                  'artifactId' : 'ServiceRequest.SRDetail_serviceRequest',
                  'id' : 'aw4763798b',
               },
            };
            view007.addRequiredResources( requiredResources007 );
            var eventHandlers030 = [
               {
                     'method' : 'fetchAllListSizes',
                     'artifactId' : 'ServiceRequest.SRDetail_eventHandlers_initialize_fetchAllListSizes',
                     'id' : 'awe36ec24c',
                     'event' : 'initialize',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'refreshAllListSizes',
                     'artifactId' : 'ServiceRequest.SRDetailw_eventHandlers_render_refreshAllListSizes',
                     'id' : 'aw68214dc5',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            view007.eventHandlers = eventHandlers030;

            var container014 = new Container({
               'resource' : 'sgzUsina',
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_container_0',
               'id' : 'aw100d0578',
            });
            view007.addChild( container014 );


            var errorIndicator003 = new ErrorIndicator({
               'artifactId' : 'ServiceRequest.SRDetail_errorIndicator',
               'id' : 'aw3bfd5fff',
            });
            container014.addChild( errorIndicator003 );


            var group006 = new Group({
               'artifactId' : 'ServiceRequest.SRDetail_group_0',
               'id' : 'aw429d19d2',
            });
            container014.addChild( group006 );


            var groupitem036 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_status_0',
               'id' : 'aw14dff218',
            });
            group006.addChild( groupitem036 );


            var text049 = new Text({
               'resourceAttribute' : 'identifier',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.ms_amticketid_0',
               'id' : 'aw2e94f0b5',
               'label' : MessageService.createStaticMessage('Ticket'),
            });
            groupitem036.addChild( text049 );


            var groupitem037 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_srnum_00101010',
               'id' : 'awa15c3c1f',
            });
            group006.addChild( groupitem037 );


            var text050 = new Text({
               'resourceAttribute' : 'usina',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.usina_001010101',
               'id' : 'awca6d741f',
               'label' : MessageService.createStaticMessage('Usina'),
            });
            groupitem037.addChild( text050 );


            var groupitem038 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_owner_0',
               'id' : 'aw7ca805d7',
            });
            group006.addChild( groupitem038 );


            var text051 = new Text({
               'resourceAttribute' : 'ms_siteid',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.Subprefeitura_0',
               'id' : 'aw2f78c93a',
               'label' : MessageService.createStaticMessage('Subprefeitura'),
            });
            groupitem038.addChild( text051 );


            var groupitem039 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_summary_0',
               'id' : 'aw3b09ba21',
            });
            group006.addChild( groupitem039 );


            var text052 = new Text({
               'resourceAttribute' : 'ms_status',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.ms_status_0',
               'id' : 'aw2fe8f5c2',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem039.addChild( text052 );


            var groupitem040 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_0',
               'id' : 'aw55d6946b',
            });
            group006.addChild( groupitem040 );


            var text053 = new Text({
               'resourceAttribute' : 'ms_expiredate',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_0_ms_expiredate',
               'id' : 'awae19f051',
               'label' : MessageService.createStaticMessage('Data de Validade'),
            });
            groupitem040.addChild( text053 );


            var groupitem041 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.EditLocationView_0',
               'id' : 'awc3ef5de9',
            });
            group006.addChild( groupitem041 );


            var text054 = new Text({
               'resourceAttribute' : 'contratada',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.LocationView_0_contratada',
               'id' : 'aw876c906c',
               'label' : MessageService.createStaticMessage('Contratada'),
            });
            groupitem041.addChild( text054 );


            var groupitem042 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_ms_plate_0',
               'id' : 'aw91389665',
            });
            group006.addChild( groupitem042 );


            var text055 = new Text({
               'resourceAttribute' : 'ms_plate',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.ms_plate_0',
               'id' : 'awae941b56',
               'label' : MessageService.createStaticMessage('Placa'),
            });
            groupitem042.addChild( text055 );


            var groupitem043 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.AssetView_0',
               'id' : 'awab603aac',
            });
            group006.addChild( groupitem043 );


            var text056 = new Text({
               'resourceAttribute' : 'ms_authqty',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest._0_ms_authqty',
               'id' : 'aw61b3130d',
               'label' : MessageService.createStaticMessage('Quantidade de Massa Asf\u00E1ltica (Kg)'),
            });
            groupitem043.addChild( text056 );


            var groupitem044 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_reportedpriority_0',
               'id' : 'aw4ced75a3',
            });
            group006.addChild( groupitem044 );


            var text057 = new Text({
               'resourceAttribute' : 'ms_remarks',
               'editable' : true,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.ms_remarks_0',
               'id' : 'aw46f0236e',
               'label' : MessageService.createStaticMessage('Observa\u00E7\u00F5es'),
            });
            groupitem044.addChild( text057 );


            var groupitem045 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_ms_tareweight_1',
               'id' : 'aw1c0c463',
            });
            group006.addChild( groupitem045 );


            var text058 = new Text({
               'resourceAttribute' : 'ms_tareweight',
               'editable' : true,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.ms_tareweight_0',
               'id' : 'aw7c9d67d',
               'label' : MessageService.createStaticMessage('Peso Tara (Kg)'),
            });
            groupitem045.addChild( text058 );


            var groupitem046 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_ms_netweight_1',
               'id' : 'awb57f6e36',
            });
            group006.addChild( groupitem046 );


            var text059 = new Text({
               'resourceAttribute' : 'ms_netweight',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.ms_netweight_1',
               'id' : 'awad86f72',
               'label' : MessageService.createStaticMessage('Peso L\u00EDquido (Kg)'),
            });
            groupitem046.addChild( text059 );


            var groupitem047 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_qtd_massa_0_0',
               'id' : 'aw14ea99bf',
            });
            group006.addChild( groupitem047 );


            var text060 = new Text({
               'resourceAttribute' : 'qtd_massa',
               'editable' : true,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.qtd_massa_0',
               'id' : 'aw11cabc6e',
               'label' : MessageService.createStaticMessage('Quantidade de Massa Asf\u00E1ltica Carregada (Kg)'),
            });
            groupitem047.addChild( text060 );


            var groupitem048 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_qtd_emulsao_0',
               'id' : 'aw4f98961',
            });
            group006.addChild( groupitem048 );


            var text061 = new Text({
               'resourceAttribute' : 'qtd_emulsao',
               'editable' : true,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.qtd_emulsao_0',
               'id' : 'aw7399db52',
               'label' : MessageService.createStaticMessage('Quantidade de Emuls\u00E3o Carregada (Kg)'),
            });
            groupitem048.addChild( text061 );


            var groupitem049 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_ms_grossweight_1',
               'id' : 'awa3de6e6a',
            });
            group006.addChild( groupitem049 );


            var text062 = new Text({
               'resourceAttribute' : 'ms_grossweight',
               'editable' : true,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.ms_grossweight_0',
               'id' : 'aw37cb5bcc',
               'label' : MessageService.createStaticMessage('Peso Bruto (Kg)'),
            });
            groupitem049.addChild( text062 );


            var groupitem050 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'enableFeatureByProperty' : 'attachments.enabled',
               'transitionTo' : 'SGZUsina.AttachmentsView',
               'artifactId' : 'ServiceRequest.SRDetail_groupitem_ServiceRequest.AttachmentsView_013',
               'id' : 'aw3c4252d',
            });
            group006.addChild( groupitem050 );

            var eventHandlers031 = [
               {
                     'method' : 'control_final',
                     'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_eventHandlers_click_discardNewServiceRequestView_11',
                     'id' : 'awc3001b6d',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            groupitem050.eventHandlers = eventHandlers031;

            var text063 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'ServiceRequest.SRDetail_groupitem_ServiceRequest.AttachmentsView_0_Attachments013',
               'id' : 'awbc2f048b',
               'value' : MessageService.createStaticMessage('Foto Ticket de Carregamento'),
            });
            groupitem050.addChild( text063 );


            var footer004 = new Footer({
               'artifactId' : 'SGZUsina.SRDetail_viewDetail_footer',
               'id' : 'aw72c07479',
            });
            view007.addChild( footer004 );


            var button012 = new Button({
               'artifactId' : 'SGZUsina.SRDetail_Cancel_viewDetail',
               'id' : 'awd66d9071',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers032 = [
               {
                     'method' : 'control_final',
                     'artifactId' : 'SGZUsina.SRDetail_Cancel_button_eventHandlers_click_discardNewServiceRequestView_11',
                     'id' : 'awe67de2d3',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'discardNewServiceRequestView',
                     'artifactId' : 'SGZUsina.SRDetail_Cancel_button_eventHandlers_click_discardNewServiceRequestView_2',
                     'id' : 'aw88ddf3e2',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button012.eventHandlers = eventHandlers032;
            footer004.addChild( button012 );


            var button013 = new Button({
               'artifactId' : 'SGZUsina.SRDetail_Salvar_viewDetail',
               'id' : 'awae3bbee8',
               'label' : MessageService.createStaticMessage('Salvar'),
            });
            var eventHandlers033 = [
               {
                     'method' : 'control_final',
                     'artifactId' : 'SGZUsina.SRDetail_Cancel_button_eventHandlers_click_discardNewServiceRequestView_111',
                     'id' : 'aw9ce0113b',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'calcNetweight',
                     'artifactId' : 'SGZUsina.SRDetail_salvarms_netweight_eventHandlers_click',
                     'id' : 'aw666e0fe7',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'salvarTicket',
                     'artifactId' : 'SGZUsina.SRDetail_Salvar_button_eventHandlers_click_discardNewServiceRequestView_1',
                     'id' : 'aw37e66a14',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button013.eventHandlers = eventHandlers033;
            footer004.addChild( button013 );


            var button014 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZUsina.SRDetail_Finalizar_button1',
               'id' : 'aw50ec3f2d',
               'label' : MessageService.createStaticMessage('Finalizar'),
               'primary' : 'true',
            });
            var eventHandlers034 = [
               {
                     'method' : 'calcNetweight',
                     'artifactId' : 'SGZUsina.SRDetail_finalizarms_netweight_eventHandlers_click',
                     'id' : 'aw8809522e',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'control_final',
                     'artifactId' : 'SGZUsina.SRDetail_finalizar_button_eventHandlers_click_commitNewServiceRequestView_11',
                     'id' : 'aw14a94698',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'carregPreviewIncShowDialogAfter',
                     'artifactId' : 'SGZUsina.SRDetail_finalizar_button_eventHandlers_click_commitNewServiceRequestView_22',
                     'id' : 'awa68d44e1',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button014.eventHandlers = eventHandlers034;
            footer004.addChild( button014 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZUsina.SRDetailEdit', false);
               trackTimer.startTracking();
            }

            var view008 = new View({
               'showBackButton' : 'true',
               'resource' : 'sgzUsina',
               'id' : 'SGZUsina.SRDetailEdit',
               'label' : MessageService.createStaticMessage('Detalhes do Ticket'),
               'editableView' : 'SGZUsina.SRDetailEdit',
            });
            ui001.addChild( view008 );

            var requiredResources008 = {
               'sgzUsina' : {
                  'artifactId' : 'ServiceRequest.SRDetail_serviceRequest010',
                  'id' : 'awfc880de7',
               },
            };
            view008.addRequiredResources( requiredResources008 );
            var eventHandlers035 = [
               {
                     'method' : 'fetchAllListSizes',
                     'artifactId' : 'ServiceRequest.SRDetail_eventHandlers_initialize_fetchAllListSizes0010',
                     'id' : 'aw9414a573',
                     'event' : 'initialize',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'refreshAllListSizes',
                     'artifactId' : 'ServiceRequest.SRDetailw_eventHandlers_render_refreshAllListSizes0010',
                     'id' : 'awe3a7091d',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            view008.eventHandlers = eventHandlers035;

            var container015 = new Container({
               'resource' : 'sgzUsina',
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_container_001',
               'id' : 'aw58cd334a',
            });
            view008.addChild( container015 );


            var errorIndicator004 = new ErrorIndicator({
               'artifactId' : 'ServiceRequest.SRDetail_errorIndicator_01',
               'id' : 'aw568e7dba',
            });
            container015.addChild( errorIndicator004 );


            var group007 = new Group({
               'artifactId' : 'ServiceRequest.SRDetail_group_001',
               'id' : 'aw182469f6',
            });
            container015.addChild( group007 );


            var groupitem051 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest_identifier_01',
               'id' : 'aw6bc0b093',
            });
            group007.addChild( groupitem051 );


            var text064 = new Text({
               'resourceAttribute' : 'identifier',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest.ms_amticketid_01',
               'id' : 'awa3a2e67b',
               'label' : MessageService.createStaticMessage('Ticket'),
            });
            groupitem051.addChild( text064 );


            var groupitem052 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest_srnum_01',
               'id' : 'aw4ad3176b',
            });
            group007.addChild( groupitem052 );


            var text065 = new Text({
               'resourceAttribute' : 'usina',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest.usina_01',
               'id' : 'aw8df0eb5d',
               'label' : MessageService.createStaticMessage('Usina'),
            });
            groupitem052.addChild( text065 );


            var groupitem053 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetailEditeRequest_groupitem_ServiceRequest_owner_0100',
               'id' : 'aw3d8f81af',
            });
            group007.addChild( groupitem053 );


            var text066 = new Text({
               'resourceAttribute' : 'ms_siteid',
               'editable' : true,
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest.Subprefeitura_0100',
               'id' : 'aw70b52f27',
               'label' : MessageService.createStaticMessage('tura'),
            });
            groupitem053.addChild( text066 );


            var groupitem054 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest_summary_01',
               'id' : 'aw9e823b9e',
            });
            group007.addChild( groupitem054 );


            var text067 = new Text({
               'resourceAttribute' : 'ms_status',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest.ms_status_01',
               'id' : 'aw6d18e2dc',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem054.addChild( text067 );


            var groupitem055 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_01',
               'id' : 'awfdbd1fc9',
            });
            group007.addChild( groupitem055 );


            var text068 = new Text({
               'resourceAttribute' : 'ms_expiredate',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_01_ms_expiredate',
               'id' : 'aw54bdaa79',
               'label' : MessageService.createStaticMessage('Data de Validade'),
            });
            groupitem055.addChild( text068 );


            var groupitem056 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest.EditLocationView_01',
               'id' : 'awf2905de9',
            });
            group007.addChild( groupitem056 );


            var text069 = new Text({
               'resourceAttribute' : 'contratada',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest.LocationView_01_contratada',
               'id' : 'awfdf28cbd',
               'label' : MessageService.createStaticMessage('Contratada'),
            });
            groupitem056.addChild( text069 );


            var groupitem057 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest_ms_plate_011',
               'id' : 'aw4c3d6bde',
            });
            group007.addChild( groupitem057 );


            var text070 = new Text({
               'resourceAttribute' : 'ms_plate',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest.ms_plate_001',
               'id' : 'aw3244ff9e',
               'label' : MessageService.createStaticMessage('Placa'),
            });
            groupitem057.addChild( text070 );


            var groupitem058 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest.AssetView_01',
               'id' : 'awc796264c',
            });
            group007.addChild( groupitem058 );


            var text071 = new Text({
               'resourceAttribute' : 'ms_authqty',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest._01_ms_authqty',
               'id' : 'aw37ab8d3d',
               'label' : MessageService.createStaticMessage('Quantidade de Massa Asf\u00E1ltica (Kg)'),
            });
            groupitem058.addChild( text071 );


            var groupitem059 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest_reportedpriority_01',
               'id' : 'aw6416f74f',
            });
            group007.addChild( groupitem059 );


            var text072 = new Text({
               'resourceAttribute' : 'ms_remarks',
               'editable' : true,
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest.ms_remarks_01',
               'id' : 'awc705b3a1',
               'label' : MessageService.createStaticMessage('Observa\u00E7\u00F5es'),
            });
            groupitem059.addChild( text072 );


            var groupitem060 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest_ms_tareweight_3',
               'id' : 'awd0d62a8f',
            });
            group007.addChild( groupitem060 );


            var text073 = new Text({
               'resourceAttribute' : 'ms_tareweight',
               'editable' : true,
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest.ms_tareweight_2',
               'id' : 'awd6df3891',
               'label' : MessageService.createStaticMessage('Peso Tara (Kg)'),
            });
            groupitem060.addChild( text073 );


            var groupitem061 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetail_serviceRequest_groupitem_ServiceRequest_ms_netweight_3',
               'id' : 'aw5b710f1a',
            });
            group007.addChild( groupitem061 );


            var text074 = new Text({
               'resourceAttribute' : 'ms_netweight',
               'editable' : false,
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest.ms_netweight_2',
               'id' : 'aw3e58236e',
               'label' : MessageService.createStaticMessage('Peso L\u00EDquido (Kg)'),
            });
            groupitem061.addChild( text074 );


            var groupitem062 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest_qtd_massa_0_0111',
               'id' : 'awf86e080e',
            });
            group007.addChild( groupitem062 );


            var text075 = new Text({
               'resourceAttribute' : 'qtd_massa',
               'editable' : true,
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest.qtd_massa_01',
               'id' : 'awb2462f56',
               'label' : MessageService.createStaticMessage('Quantidade de Massa Asf\u00E1ltica Carregada (Kg)'),
            });
            groupitem062.addChild( text075 );


            var groupitem063 = new GroupItem({
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest_qtd_emulsao_01',
               'id' : 'aw14e45a56',
            });
            group007.addChild( groupitem063 );


            var text076 = new Text({
               'resourceAttribute' : 'qtd_emulsao',
               'editable' : true,
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest.qtd_emulsao_01',
               'id' : 'awab435b12',
               'label' : MessageService.createStaticMessage('Quantidade de Emuls\u00E3o Carregada (Kg)'),
            });
            groupitem063.addChild( text076 );


            var groupitem064 = new GroupItem({
               'artifactId' : 'ServiceRequest.SSRDetailEditRequest_groupitem_ServiceRequest_ms_grossweight_1',
               'id' : 'aw99c04d64',
            });
            group007.addChild( groupitem064 );


            var text077 = new Text({
               'resourceAttribute' : 'ms_grossweight',
               'editable' : true,
               'artifactId' : 'ServiceRequest.SRDetailEditRequest_groupitem_ServiceRequest.ms_grossweight_0',
               'id' : 'awac9081f3',
               'label' : MessageService.createStaticMessage('Peso Bruto (Kg)'),
            });
            groupitem064.addChild( text077 );


            var groupitem065 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'enableFeatureByProperty' : 'attachments.enabled',
               'transitionTo' : 'SGZUsina.AttachmentsView',
               'artifactId' : 'ServiceRequest.SRDetailEditEdit_groupitem_ServiceRequest.AttachmentsView_013',
               'id' : 'aw37798fba',
            });
            group007.addChild( groupitem065 );


            var text078 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'ServiceRequest.SRDetailEdit_groupitem_ServiceRequest.AttachmentsView_0_Attachments013',
               'id' : 'aw12d7641a',
               'value' : MessageService.createStaticMessage('Foto Ticket de Carregamento'),
            });
            groupitem065.addChild( text078 );


            var footer005 = new Footer({
               'artifactId' : 'SGZUsina.SRDetail_viewDetail_footer_01',
               'id' : 'aw9d2eabb9',
            });
            view008.addChild( footer005 );


            var button015 = new Button({
               'artifactId' : 'SGZUsina.SRDetail_Cancel_viewDetail_01',
               'id' : 'aw1481318',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers036 = [
               {
                     'method' : 'control_final',
                     'artifactId' : 'SGZUsina.SRDetail_Cancel_button_eventHandlers_click_discardNewServiceRequestView_100',
                     'id' : 'awf2fc10ec',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'discardNewServiceRequestView',
                     'artifactId' : 'SGZUsina.SRDetail_Cancel_button_eventHandlers_click_discardNewServiceRequestView_20',
                     'id' : 'awba578186',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button015.eventHandlers = eventHandlers036;
            footer005.addChild( button015 );


            var button016 = new Button({
               'artifactId' : 'SGZUsina.SRDetail_view_Salvar_viewDetail',
               'id' : 'awe319327c',
               'label' : MessageService.createStaticMessage('Salvar'),
            });
            var eventHandlers037 = [
               {
                     'method' : 'calcNetweight',
                     'artifactId' : 'SGZUsina.SRDetailsalvarEditms_netweight_eventHandlers_click',
                     'id' : 'awb5a9ab3a',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'salvarTicket',
                     'artifactId' : 'SGZUsina.SRDetail_Salvar_button_eventHandlers_click_discardNewServiceRequestView_133',
                     'id' : 'aw89ab7e2c',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button016.eventHandlers = eventHandlers037;
            footer005.addChild( button016 );


            var button017 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZUsina.CreateSR_Finalizar_button_01',
               'id' : 'aw96439390',
               'label' : MessageService.createStaticMessage('Finalizar'),
               'primary' : 'true',
            });
            var eventHandlers038 = [
               {
                     'method' : 'calcNetweight',
                     'artifactId' : 'SGZUsina.SRDetailEditfinalizarms_netweight_eventHandlers_click',
                     'id' : 'awb328c5b0',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'control_final',
                     'artifactId' : 'SGZUsina.SRDetail_finalizar_button_eventHandlers_click_controlNewServiceRequestView_10',
                     'id' : 'aw2ca218cb',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'carregPreviewIncShowDialogAfter',
                     'artifactId' : 'SGZUsina.SRDetail_finalizar_button_eventHandlers_click_commitNewServiceRequestView_20',
                     'id' : 'aw488325cd',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button017.eventHandlers = eventHandlers038;
            footer005.addChild( button017 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZUsina.TKCompl', false);
               trackTimer.startTracking();
            }

            var view009 = new View({
               'showBackButton' : 'true',
               'resource' : 'sgzUsina',
               'id' : 'SGZUsina.TKCompl',
               'label' : MessageService.createStaticMessage('Detalhes do Ticket'),
               'editableView' : 'SGZUsina.TKComplEdit',
            });
            ui001.addChild( view009 );

            var requiredResources009 = {
               'sgzUsina' : {
                  'artifactId' : 'ServiceRequest.TKCompl_serviceRequest',
                  'id' : 'aw79e1a8cd',
               },
            };
            view009.addRequiredResources( requiredResources009 );
            var eventHandlers039 = [
               {
                     'method' : 'fetchAllListSizes',
                     'artifactId' : 'ServiceRequest.TKCompl_eventHandlers_initialize_fetchAllListSizes',
                     'id' : 'aw6fa6d5e3',
                     'event' : 'initialize',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'refreshAllListSizes',
                     'artifactId' : 'ServiceRequest.TKCompl_eventHandlers_render_refreshAllListSizes',
                     'id' : 'awd676fa94',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            view009.eventHandlers = eventHandlers039;

            var container016 = new Container({
               'resource' : 'sgzUsina',
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_container_0',
               'id' : 'aw581e26f',
            });
            view009.addChild( container016 );


            var errorIndicator005 = new ErrorIndicator({
               'artifactId' : 'ServiceRequest.TKCompl_errorIndicator',
               'id' : 'aw57f8eb9',
            });
            container016.addChild( errorIndicator005 );


            var group008 = new Group({
               'artifactId' : 'ServiceRequest.TKCompl_group_0',
               'id' : 'aw1ed1f7e3',
            });
            container016.addChild( group008 );


            var groupitem066 = new GroupItem({
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest_status_0',
               'id' : 'aw75833ebc',
            });
            group008.addChild( groupitem066 );


            var text079 = new Text({
               'resourceAttribute' : 'identifier',
               'editable' : false,
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest.ms_amticketid_0',
               'id' : 'aw85236bab',
               'label' : MessageService.createStaticMessage('Ticket'),
            });
            groupitem066.addChild( text079 );


            var groupitem067 = new GroupItem({
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest_srnum_00101010',
               'id' : 'awc7fa7b30',
            });
            group008.addChild( groupitem067 );


            var text080 = new Text({
               'resourceAttribute' : 'usina',
               'editable' : false,
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest.usina_001010101',
               'id' : 'aw61daef01',
               'label' : MessageService.createStaticMessage('Usina'),
            });
            groupitem067.addChild( text080 );


            var groupitem068 = new GroupItem({
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest_owner_0',
               'id' : 'aw4b9b7209',
            });
            group008.addChild( groupitem068 );


            var text081 = new Text({
               'resourceAttribute' : 'ms_siteid',
               'editable' : false,
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest.Subprefeitura_0',
               'id' : 'aw84cf5224',
               'label' : MessageService.createStaticMessage('Subprefeitura'),
            });
            groupitem068.addChild( text081 );


            var groupitem069 = new GroupItem({
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest_summary_0',
               'id' : 'awead3811c',
            });
            group008.addChild( groupitem069 );


            var text082 = new Text({
               'resourceAttribute' : 'ms_status',
               'editable' : false,
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest.ms_status_0',
               'id' : 'awf40b8582',
               'label' : MessageService.createStaticMessage('Status'),
            });
            groupitem069.addChild( text082 );


            var groupitem070 = new GroupItem({
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_0',
               'id' : 'aw405a737c',
            });
            group008.addChild( groupitem070 );


            var text083 = new Text({
               'resourceAttribute' : 'ms_expiredate',
               'cssClass' : 'richText',
               'editable' : false,
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_0_ms_expiredate',
               'id' : 'awc4e0d504',
               'label' : MessageService.createStaticMessage('Data de Validade'),
            });
            groupitem070.addChild( text083 );


            var groupitem071 = new GroupItem({
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest.EditLocationView_0',
               'id' : 'aw12e7a6c6',
            });
            group008.addChild( groupitem071 );


            var text084 = new Text({
               'resourceAttribute' : 'contratada',
               'editable' : false,
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest.LocationView_0_contratada',
               'id' : 'aw6f54a5fe',
               'label' : MessageService.createStaticMessage('Contratada'),
            });
            groupitem071.addChild( text084 );


            var groupitem072 = new GroupItem({
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest_ms_plate_0',
               'id' : 'awc981004f',
            });
            group008.addChild( groupitem072 );


            var text085 = new Text({
               'resourceAttribute' : 'ms_plate',
               'editable' : false,
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest.ms_plate_0',
               'id' : 'awf62d8d7c',
               'label' : MessageService.createStaticMessage('Placa'),
            });
            groupitem072.addChild( text085 );


            var groupitem073 = new GroupItem({
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest.AssetView_0',
               'id' : 'aw70834aec',
            });
            group008.addChild( groupitem073 );


            var text086 = new Text({
               'resourceAttribute' : 'ms_authqty',
               'editable' : false,
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest._0_ms_authqty',
               'id' : 'awc1cff6d7',
               'label' : MessageService.createStaticMessage('Quantidade de Massa Asf\u00E1ltica (Kg)'),
            });
            groupitem073.addChild( text086 );


            var groupitem074 = new GroupItem({
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest_reportedpriority_0',
               'id' : 'aw9de58e8c',
            });
            group008.addChild( groupitem074 );


            var text087 = new Text({
               'resourceAttribute' : 'ms_remarks',
               'editable' : true,
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest.ms_remarks_0',
               'id' : 'aw30f7818e',
               'label' : MessageService.createStaticMessage('Observa\u00E7\u00F5es'),
            });
            groupitem074.addChild( text087 );


            var groupitem075 = new GroupItem({
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest_ms_tareweight_2',
               'id' : 'aw337e0ec7',
            });
            group008.addChild( groupitem075 );


            var text088 = new Text({
               'resourceAttribute' : 'ms_tareweight',
               'editable' : true,
               'artifactId' : 'ServiceRequest.CredDetail_serviceRequest_groupitem_ServiceRequest.ms_tareweight_1',
               'id' : 'aw8271a873',
               'label' : MessageService.createStaticMessage('Peso Tara (Kg)'),
            });
            groupitem075.addChild( text088 );


            var groupitem076 = new GroupItem({
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest_ms_netweight_2',
               'id' : 'aw4ad078a3',
            });
            group008.addChild( groupitem076 );


            var text089 = new Text({
               'resourceAttribute' : 'ms_netweight',
               'editable' : false,
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest.ms_netweight_10',
               'id' : 'awe16d8c40',
               'label' : MessageService.createStaticMessage('Peso L\u00EDquido (Kg)'),
            });
            groupitem076.addChild( text089 );


            var groupitem077 = new GroupItem({
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest_qtd_massa_0_0',
               'id' : 'awb4967c65',
            });
            group008.addChild( groupitem077 );


            var text090 = new Text({
               'resourceAttribute' : 'qtd_massa',
               'editable' : true,
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest.qtd_massa_0',
               'id' : 'awca29cc2e',
               'label' : MessageService.createStaticMessage('Quantidade de Massa Asf\u00E1ltica Carregada (Kg)'),
            });
            groupitem077.addChild( text090 );


            var groupitem078 = new GroupItem({
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest_qtd_emulsao_0',
               'id' : 'awa4856cbb',
            });
            group008.addChild( groupitem078 );


            var text091 = new Text({
               'resourceAttribute' : 'qtd_emulsao',
               'editable' : true,
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest.qtd_emulsao_0',
               'id' : 'awd3e53e88',
               'label' : MessageService.createStaticMessage('Quantidade de Emuls\u00E3o Carregada (Kg)'),
            });
            groupitem078.addChild( text091 );


            var groupitem079 = new GroupItem({
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest_ms_grossweight_2',
               'id' : 'awc073b528',
            });
            group008.addChild( groupitem079 );


            var text092 = new Text({
               'resourceAttribute' : 'ms_grossweight',
               'editable' : true,
               'artifactId' : 'ServiceRequest.TKCompl_serviceRequest_groupitem_ServiceRequest.ms_grossweight_1',
               'id' : 'awba68e1a2',
               'label' : MessageService.createStaticMessage('Peso Bruto (Kg)'),
            });
            groupitem079.addChild( text092 );


            var groupitem080 = new GroupItem({
               'layout' : 'Item1Count1Button2',
               'enableFeatureByProperty' : 'attachments.enabled',
               'transitionTo' : 'SGZUsina.AttachmentsView',
               'artifactId' : 'ServiceRequest.TKCompl_serviceEdit_groupitem_ServiceRequest.AttachmentsView_013',
               'id' : 'aw5686df7d',
            });
            group008.addChild( groupitem080 );


            var text093 = new Text({
               'cssClass' : 'relatedRecords',
               'editable' : false,
               'layoutInsertAt' : 'item1',
               'artifactId' : 'ServiceRequest.TKCompl_service_groupitem_ServiceRequest.AttachmentsView_0_Attachments013',
               'id' : 'awcac96f92',
               'value' : MessageService.createStaticMessage('Foto Ticket de Carregamento'),
            });
            groupitem080.addChild( text093 );


            var footer006 = new Footer({
               'artifactId' : 'SGZUsina.TKCompl_viewDetail_footer',
               'id' : 'aweec2a9b1',
            });
            view009.addChild( footer006 );


            var button018 = new Button({
               'artifactId' : 'SGZUsina.TKCompl_Cancel_viewDetail',
               'id' : 'aw4a6f4db9',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers040 = [
               {
                     'method' : 'control_final',
                     'artifactId' : 'SGZUsina.TKCompl_Cancel_button_eventHandlers_click_discardNewServiceRequestView_1',
                     'id' : 'awfe9b8474',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'discardNewServiceRequestView',
                     'artifactId' : 'SGZUsina.TKCompl_Cancel_button_eventHandlers_click_discardNewServiceRequestView_2',
                     'id' : 'aw6792d5ce',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button018.eventHandlers = eventHandlers040;
            footer006.addChild( button018 );


            var button019 = new Button({
               'artifactId' : 'SGZUsina.TKCompl_Salvar_viewDetail',
               'id' : 'aw32396320',
               'label' : MessageService.createStaticMessage('Salvar'),
            });
            var eventHandlers041 = [
               {
                     'method' : 'calcNetweight',
                     'artifactId' : 'SGZUsina.TKCompl_salvarms_netweight_eventHandlers_click',
                     'id' : 'aw65d55e13',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'salvarTicket',
                     'artifactId' : 'SGZUsina.TKCompl_Salvar_button_eventHandlers_click_discardNewServiceRequestView_1',
                     'id' : 'awd8a94c38',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button019.eventHandlers = eventHandlers041;
            footer006.addChild( button019 );


            var button020 = new Button({
               'resourceAttribute' : 'identifier',
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZUsina.TKCompl_Finalizar_button',
               'id' : 'awedff00a3',
               'label' : MessageService.createStaticMessage('Finalizar'),
               'primary' : 'true',
            });
            var eventHandlers042 = [
               {
                     'method' : 'calcNetweight',
                     'artifactId' : 'SGZUsina.TKCompl_finalizar_ms_netweight_eventHandlers_click',
                     'id' : 'awe8575eed',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'control_final',
                     'artifactId' : 'SGZUsina.TKCompl_finalizar_button_eventHandlers_click_commitNewServiceRequestView_1',
                     'id' : 'aw4c4ca617',
                     'event' : 'render',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               },
               {
                     'method' : 'carregPreviewIncShowDialogAfter',
                     'artifactId' : 'SGZUsina.TKCompl_finalizar_button_eventHandlers_click_commitNewServiceRequestView_2',
                     'id' : 'awd545f7ad',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button020.eventHandlers = eventHandlers042;
            footer006.addChild( button020 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'SGZUsina.AttachmentsView', false);
               trackTimer.startTracking();
            }

            var view010 = new View({
               'showOverflow' : true,
               'id' : 'SGZUsina.AttachmentsView',
               'label' : MessageService.createStaticMessage('Attachments'),
            });
            ui001.addChild( view010 );

            var requiredResources010 = {
               'sgzUsina' : {
                  'artifactId' : 'SGZUsina.AttachmentsView_serviceRequest',
                  'id' : 'aw687b8f99',
                  'related' : {
                     'attachments' : {
                        'reload' : true,
                        'artifactId' : 'SGZUsina.AttachmentsView_serviceRequest_attachments',
                        'id' : 'awe5046c2f',
                     },
                  },
               },
            };
            view010.addRequiredResources( requiredResources010 );

            var actions003 = new Actions({
               'artifactId' : 'SGZUsina.AttachmentsView_actions',
               'id' : 'awc7b4b854',
            });
            view010.addChild( actions003 );


            var action004 = new Action({
               'image' : '\/images\/header_camera_off.svg',
               'artifactId' : 'SGZUsina.AttachmentsView_TakePhoto_action',
               'id' : 'awa9a5028d',
               'label' : MessageService.createStaticMessage('Take Photo'),
            });
            actions003.addChild( action004 );

            var eventHandlers043 = [
               {
                     'method' : 'launchCameraForPhoto',
                     'artifactId' : 'SGZUsina.AttachmentsView_TakePhoto_action_eventHandlers_click_launchCameraForPhoto',
                     'id' : 'awd94578a6',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               },
               {
                     'method' : 'initCategory',
                     'artifactId' : 'SGZUsina.AttachmentsView_TakePhoto_action_eventHandlers_render_initCategory',
                     'id' : 'aw7385deb3',
                     'event' : 'render',
                     'class' : 'application.handlers.SRAttachmentHandler',
               }
            ];
            action004.eventHandlers = eventHandlers043;

            var action005 = new Action({
               'image' : 'header_add_OFF.svg',
               'artifactId' : 'SGZUsina.AttachmentsView_PickfromGallery_action',
               'id' : 'aw75f349be',
               'label' : MessageService.createStaticMessage('Pick from Gallery'),
            });
            actions003.addChild( action005 );

            var eventHandlers044 = [
               {
                     'method' : 'launchGallery',
                     'artifactId' : 'SGZUsina.AttachmentsView_PickfromGallery_action_eventHandlers_click_launchGallery',
                     'id' : 'awe5bce06c',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            action005.eventHandlers = eventHandlers044;


            var sortOptions002 = new SortOptions({
               'artifactId' : 'SGZUsina.AttachmentsView_serviceRequest_attachments_list_sortOptions',
               'id' : 'aw94d4025',
            });

            var sortOption002 = new SortOption({
               'artifactId' : 'SGZUsina.AttachmentsView_sortOption_CreatedDate',
               'id' : 'aw8968f5e4',
               'label' : MessageService.createStaticMessage('Created Date'),
            });
            sortOptions002.addChild( sortOption002 );


            var sortAttribute002 = new SortAttribute({
               'name' : 'displayCreationDate',
               'artifactId' : 'SGZUsina.AttachmentsView_CreatedDate_sortAttribute_displayCreationDate',
               'id' : 'aw276643fb',
               'direction' : 'asc',
            });
            sortOption002.addChild( sortAttribute002 );


            var sortOption003 = new SortOption({
               'artifactId' : 'SGZUsina.AttachmentsView_sortOption_FileName',
               'id' : 'aw85edd66b',
               'label' : MessageService.createStaticMessage('File Name'),
            });
            sortOptions002.addChild( sortOption003 );


            var sortAttribute003 = new SortAttribute({
               'name' : 'displayFileName',
               'artifactId' : 'SGZUsina.AttachmentsView_FileName_sortAttribute_displayFileName',
               'id' : 'awf1bbdb9c',
               'direction' : 'asc',
            });
            sortOption003.addChild( sortAttribute003 );


            var sortOption004 = new SortOption({
               'artifactId' : 'SGZUsina.AttachmentsView_sortOption_Description',
               'id' : 'awb9703978',
               'label' : MessageService.createStaticMessage('Description'),
            });
            sortOptions002.addChild( sortOption004 );


            var sortAttribute004 = new SortAttribute({
               'name' : 'displayDescription',
               'artifactId' : 'SGZUsina.AttachmentsView_Description_sortAttribute_displayDescription',
               'id' : 'awe422bf0d',
               'direction' : 'asc',
            });
            sortOption004.addChild( sortAttribute004 );



            var listItemTemplate002 = new ListItemTemplate({
               'layout' : 'AttachmentsListItem',
               'artifactId' : 'SGZUsina.AttachmentsView_serviceRequest_attachments_listItemTemplate_AttachmentsListItem',
               'id' : 'aw48fdbc89',
            });

            var listtext005 = new ListText({
               'resourceAttribute' : 'displayFileName',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'SGZUsina.AttachmentsView_serviceRequest_AttachmentsListItem_displayFileName',
               'id' : 'awc67c5a0d',
            });
            listItemTemplate002.addChild( listtext005 );


            var listtext006 = new ListText({
               'resourceAttribute' : 'displayDescription',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'SGZUsina.AttachmentsView_serviceRequest_AttachmentsListItem_displayDescription',
               'id' : 'awe514fa3c',
            });
            listItemTemplate002.addChild( listtext006 );


            var listtext007 = new ListText({
               'resourceAttribute' : 'displayFileType',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'SGZUsina.AttachmentsView_serviceRequest_AttachmentsListItem_displayFileType',
               'id' : 'aw14817322',
            });
            listItemTemplate002.addChild( listtext007 );


            var button021 = new Button({
               'border' : 'false',
               'resourceAttribute' : 'anywhereAttachDownloaded',
               'image' : '\/images\/msg_downloadComplete_small.svg',
               'cssClass' : 'attachmentIcon',
               'layoutInsertAt' : 'icon',
               'artifactId' : 'SGZUsina.AttachmentsView_serviceRequest_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.svg_button',
               'id' : 'awceb0c7c',
            });
            var eventHandlers045 = [
               {
                     'method' : 'displayLocal',
                     'artifactId' : 'SGZUsina.AttachmentsView_serviceRequest_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.svg_button_eventHandlers_datachange_displayLocal',
                     'id' : 'aw60a85327',
                     'event' : 'datachange',
                     'class' : 'application.handlers.SRAttachmentHandler',
               },
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'SGZUsina.AttachmentsView_serviceRequest_anywhereAttachDownloaded_imagesmsg_downloadComplete_small.svg_button_eventHandlers_click_handleThumbnailClick',
                     'id' : 'aw8dcb0dc7',
                     'event' : 'click',
                     'class' : 'application.handlers.SRAttachmentHandler',
               }
            ];
            button021.eventHandlers = eventHandlers045;
            listItemTemplate002.addChild( button021 );


            var listtext008 = new ListText({
               'resourceAttribute' : 'displaySize',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'SGZUsina.AttachmentsView_serviceRequest_AttachmentsListItem_displaySize',
               'id' : 'aw6163e191',
            });
            listItemTemplate002.addChild( listtext008 );


            var listtext009 = new ListText({
               'resourceAttribute' : 'createby',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'SGZUsina.AttachmentsView_serviceRequest_AttachmentsListItem_createby',
               'id' : 'awf86b26e9',
            });
            listItemTemplate002.addChild( listtext009 );


            var listtext010 = new ListText({
               'resourceAttribute' : 'displayCreationDate',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'SGZUsina.AttachmentsView_serviceRequest_AttachmentsListItem_displayCreationDate',
               'id' : 'awc1176511',
            });
            listItemTemplate002.addChild( listtext010 );

            var eventHandlers046 = [
               {
                     'method' : 'handleThumbnailClick',
                     'artifactId' : 'SGZUsina.AttachmentsView_serviceRequest_attachments_listItemTemplate_AttachmentsListItem_eventHandlers_click_handleThumbnailClick',
                     'id' : 'aw35611940',
                     'event' : 'click',
                     'class' : 'application.handlers.SRAttachmentHandler',
               }
            ];
            listItemTemplate002.eventHandlers = eventHandlers046;


            var list002 = new List({
               'resource' : 'sgzUsina',
               'sortOptions' : sortOptions002,
               'listItemTemplate' : listItemTemplate002,
               'artifactId' : 'SGZUsina.AttachmentsView_serviceRequest_attachments_list',
               'attribute' : 'attachments',
               'id' : 'awf8cd718',
            });
            view010.addChild( list002 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog004 = new Dialog({
               'id' : 'SGZUsina.ConfirmCancel',
            });
            ui001.addChild( dialog004 );


            var container017 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'SGZUsina.ConfirmCancel_container_0',
               'id' : 'aw2da7754e',
            });
            dialog004.addChild( container017 );


            var text094 = new Text({
               'artifactId' : 'SGZUsina.ConfirmCancel_container_0_Areyousure',
               'id' : 'aw7b0e3929',
               'value' : MessageService.createStaticMessage('Are you sure you wish to Cancel?  All changes to this request will be lost.'),
            });
            container017.addChild( text094 );


            var container018 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'SGZUsina.ConfirmCancel_container_1',
               'id' : 'aw5aa045d8',
            });
            dialog004.addChild( container018 );


            var button022 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZUsina.ConfirmCancel_Yes_button',
               'id' : 'awc57d78ad',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers047 = [
               {
                     'method' : 'yesOnCancel',
                     'artifactId' : 'SGZUsina.ConfirmCancel_Yes_button_eventHandlers_click_yesOnCancel',
                     'id' : 'aw1a7eaa9d',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button022.eventHandlers = eventHandlers047;
            container018.addChild( button022 );


            var button023 = new Button({
               'artifactId' : 'SGZUsina.ConfirmCancel_No_button',
               'id' : 'aw95fcc0e0',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers048 = [
               {
                     'method' : 'noOnCancel',
                     'artifactId' : 'SGZUsina.ConfirmCancel_No_button_eventHandlers_click_noOnCancel',
                     'id' : 'aw1235b3b0',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button023.eventHandlers = eventHandlers048;
            container018.addChild( button023 );


            var dialog005 = new Dialog({
               'id' : 'SGZUsina.CompleCarreg',
            });
            ui001.addChild( dialog005 );


            var container019 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'SGZUsina.CompleCarreg_container_0',
               'id' : 'aw4d943ea4',
            });
            dialog005.addChild( container019 );


            var text095 = new Text({
               'artifactId' : 'SGZUsina.CompleCarreg_container_0_Areyousure',
               'id' : 'aw1f9962f1',
               'value' : MessageService.createStaticMessage('Tem certeza que deseja finalizar o ticket?'),
            });
            container019.addChild( text095 );


            var container020 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'SGZUsina.CompleCarreg_container_1',
               'id' : 'aw3a930e32',
            });
            dialog005.addChild( container020 );


            var button024 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZUsina.CompleCarreg_Yes_button',
               'id' : 'aw46b84732',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers049 = [
               {
                     'method' : 'finalizarSgzUsinaView',
                     'artifactId' : 'SGZUsina.CompleCarreg_Yes_button_eventHandlers_click_yesOnCancel',
                     'id' : 'awacdcbb02',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button024.eventHandlers = eventHandlers049;
            container020.addChild( button024 );


            var button025 = new Button({
               'artifactId' : 'SGZUsina.CompleCarreg_No_button',
               'id' : 'aw834698f7',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers050 = [
               {
                     'method' : 'carregAfterIncShowDialog',
                     'artifactId' : 'SGZUsina.CompleCarreg_No_button_eventHandlers_click_noOnCancel',
                     'id' : 'aw4fdd3449',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button025.eventHandlers = eventHandlers050;
            container020.addChild( button025 );


            var dialog006 = new Dialog({
               'id' : 'SGZUsina.After.CompleCarreg',
            });
            ui001.addChild( dialog006 );


            var container021 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'SGZUsina.After.CompleCarreg_container_0',
               'id' : 'aw50c606c7',
            });
            dialog006.addChild( container021 );


            var text096 = new Text({
               'artifactId' : 'SGZUsina.After.CompleCarreg_container_0_Areyousure',
               'id' : 'aw16911d0e',
               'value' : MessageService.createStaticMessage('O carregamento desse ticket est\u00E1 completo?'),
            });
            container021.addChild( text096 );


            var container022 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'SGZUsina.After.CompleCarreg_container_1',
               'id' : 'aw27c13651',
            });
            dialog006.addChild( container022 );


            var button026 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'SGZUsina.After.CompleCarreg_Yes_button',
               'id' : 'awa3904022',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers051 = [
               {
                     'method' : 'finalizarSgzUsinaViewNovo',
                     'artifactId' : 'SGZUsina.After.CompleCarreg_Yes_button_eventHandlers_click_yesOnCancel',
                     'id' : 'aw39c6cd1e',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button026.eventHandlers = eventHandlers051;
            container022.addChild( button026 );


            var button027 = new Button({
               'artifactId' : 'SGZUsina.After.CompleCarreg_No_button',
               'id' : 'aw7eff853a',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers052 = [
               {
                     'method' : 'carregAfterIncShowView02',
                     'artifactId' : 'SGZUsina.After.CompleCarreg_No_button_eventHandlers_click_noOnCancel',
                     'id' : 'aw79f6976e',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSSRDetailHandler',
               }
            ];
            button027.eventHandlers = eventHandlers052;
            container022.addChild( button027 );


            var lookup001 = new Lookup({
               'resource' : 'appDocType',
               'id' : 'SGZUsina.appDocTypeLookup',
               'label' : MessageService.createStaticMessage('Select Value'),
            });
            ui001.addChild( lookup001 );

            var requiredResources011 = {
               'appDocType' : {
                  'artifactId' : 'SGZUsina.appDocTypeLookup_appDocType',
                  'id' : 'awd8cab85f',
               },
            };
            lookup001.addRequiredResources( requiredResources011 );


            var listItemTemplate003 = new ListItemTemplate({
               'artifactId' : 'SGZUsina.appDocTypeLookup_appDocType_listItemTemplate',
               'id' : 'aw57c02158',
            });

            var listtext011 = new ListText({
               'resourceAttribute' : 'doctype',
               'cssClass' : 'bold textappearance-medium',
               'artifactId' : 'SGZUsina.appDocTypeLookup_appDocType_doctype',
               'id' : 'aw8a1d8735',
            });
            listItemTemplate003.addChild( listtext011 );



            var list003 = new List({
               'resource' : 'appDocType',
               'listItemTemplate' : listItemTemplate003,
               'artifactId' : 'SGZUsina.appDocTypeLookup_appDocType_list',
               'id' : 'awaeb1eaed',
            });
            lookup001.addChild( list003 );


            var returnAttributes001 = new ReturnAttributes({
               'artifactId' : 'SGZUsina.appDocTypeLookup_returnAttributes',
               'id' : 'awd0c0d70a',
            });
            lookup001.addChild( returnAttributes001 );


            var returnAttribute001 = new ReturnAttribute({
               'targetAttribute' : 'category',
               'artifactId' : 'SGZUsina.appDocTypeLookup_doctype_category',
               'id' : 'aw35858b61',
               'sourceAttribute' : 'doctype',
            });
            returnAttributes001.addChild( returnAttribute001 );


            var lookup002 = new Lookup({
               'resource' : 'MSaptoolauth',
               'id' : 'ServiceRequest.MSaptoolauthLookup',
               'label' : MessageService.createStaticMessage('Selecione'),
            });
            ui001.addChild( lookup002 );

            var requiredResources012 = {
               'MSaptoolauth' : {
                  'artifactId' : 'ServiceRequest.MSaptoolauthLookup_additionalMSaptoolauth',
                  'id' : 'awc14cf549',
               },
            };
            lookup002.addRequiredResources( requiredResources012 );


            var listItemTemplate004 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'ServiceRequest.MSaptoolauth_listItemTemplate_Item1Desc1',
               'id' : 'aw316d9c4b',
            });

            var listtext012 = new ListText({
               'resourceAttribute' : 'ms_itemnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'ServiceRequest.MSaptoolauth_Item1Desc1_ms_itemnum',
               'id' : 'awd70375ab',
            });
            listItemTemplate004.addChild( listtext012 );


            var listtext013 = new ListText({
               'resourceAttribute' : 'ms_plate',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'ServiceRequest.MSaptoolauth_Item1Desc1_ms_plate',
               'id' : 'aweaa88edd',
            });
            listItemTemplate004.addChild( listtext013 );


            var listtext014 = new ListText({
               'resourceAttribute' : 'ms_active',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'ServiceRequest.MSaptoolauth_Item1Desc1_ms_active',
               'id' : 'aw4f5eec4e',
            });
            listItemTemplate004.addChild( listtext014 );


            var listtext015 = new ListText({
               'resourceAttribute' : 'ms_asphaltplantid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'ServiceRequest.MSaptoolauth_Item1Desc1_ms_asphaltplantid',
               'id' : 'aw7bbe0eb',
            });
            listItemTemplate004.addChild( listtext015 );


            var listtext016 = new ListText({
               'resourceAttribute' : 'ms_company',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'ServiceRequest.MSaptoolauth_Item1Desc1_ms_company',
               'id' : 'aw30d144e4',
            });
            listItemTemplate004.addChild( listtext016 );


            var listtext017 = new ListText({
               'resourceAttribute' : 'ms_loadcapacity',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'ServiceRequest.MSaptoolauth_Item1Desc1_ms_loadcapacity',
               'id' : 'awfea6f997',
            });
            listItemTemplate004.addChild( listtext017 );



            var list004 = new List({
               'resource' : 'MSaptoolauth',
               'listItemTemplate' : listItemTemplate004,
               'artifactId' : 'ServiceRequest.MSaptoolauth_list',
               'id' : 'aw818b3d88',
            });
            lookup002.addChild( list004 );


            var returnAttributes002 = new ReturnAttributes({
               'artifactId' : 'ServiceRequest.AssetLookup_returnAttributes',
               'id' : 'aw6d2b97c9',
            });
            lookup002.addChild( returnAttributes002 );


            var returnAttribute002 = new ReturnAttribute({
               'targetAttribute' : 'ms_itemnum',
               'artifactId' : 'ServiceRequest.MSaptoolauthLookup_ms_itemnum',
               'id' : 'awcd93b864',
               'sourceAttribute' : 'ms_itemnum',
            });
            returnAttributes002.addChild( returnAttribute002 );


            var returnAttribute003 = new ReturnAttribute({
               'targetAttribute' : 'ms_plate',
               'artifactId' : 'ServiceRequest.MSaptoolauthLookup_ms_plate',
               'id' : 'aw2cbfdbb9',
               'sourceAttribute' : 'ms_plate',
            });
            returnAttributes002.addChild( returnAttribute003 );


            var lookup003 = new Lookup({
               'resource' : 'MSasphaltTransf',
               'id' : 'ServiceRequest.MSasphaltplantLookup',
               'label' : MessageService.createStaticMessage('Selecione Usina Credenciada'),
            });
            ui001.addChild( lookup003 );

            var requiredResources013 = {
               'MSasphaltTransf' : {
                  'artifactId' : 'ServiceRequest.MSasphaltplantLookup_additionalMSasphaltplant',
                  'id' : 'awfb6bbb6f',
               },
            };
            lookup003.addRequiredResources( requiredResources013 );


            var listItemTemplate005 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'ServiceRequest.MSasphaltplant_listItemTemplate_Item1Desc1',
               'id' : 'aw8a4180f4',
            });

            var listtext018 = new ListText({
               'resourceAttribute' : 'idusina',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'ServiceRequest.MSasphaltplant_Item1Desc1_identifier',
               'id' : 'awc3d0957',
            });
            listItemTemplate005.addChild( listtext018 );


            var listtext019 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'ServiceRequest.MSasphaltplant_Item1Desc1_ms_description',
               'id' : 'awedf5f544',
            });
            listItemTemplate005.addChild( listtext019 );


            var listtext020 = new ListText({
               'resourceAttribute' : 'ms_active',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'ServiceRequest.MSasphaltplant_Item1Desc1_ms_active',
               'id' : 'awe41ab31b',
            });
            listItemTemplate005.addChild( listtext020 );



            var list005 = new List({
               'resource' : 'MSasphaltTransf',
               'listItemTemplate' : listItemTemplate005,
               'artifactId' : 'ServiceRequest.MSasphaltplant_list',
               'id' : 'aw67a56984',
            });
            lookup003.addChild( list005 );


            var returnAttributes003 = new ReturnAttributes({
               'artifactId' : 'ServiceRequest.Lookup_returnAttributes01',
               'id' : 'awa6dcb55f',
            });
            lookup003.addChild( returnAttributes003 );


            var returnAttribute004 = new ReturnAttribute({
               'targetAttribute' : 'ms_apidauth',
               'artifactId' : 'ServiceRequest.PriorityLookup_value_reportedpriority',
               'id' : 'aw29e263aa',
               'sourceAttribute' : 'idusina',
            });
            returnAttributes003.addChild( returnAttribute004 );


            var returnAttribute005 = new ReturnAttribute({
               'targetAttribute' : 'usinadesc',
               'artifactId' : 'ServiceRequest.priorityLookup_description_prioritydesc',
               'id' : 'awe2b0ad8f',
               'sourceAttribute' : 'description',
            });
            returnAttributes003.addChild( returnAttribute005 );


            var lookup004 = new Lookup({
               'filterMethod' : 'verificaVeiculoLookup',
               'resource' : 'subpref',
               'filterClass' : 'custom.handlers.MSSRDetailHandler',
               'id' : 'ServiceRequest.msSiteLookup',
               'label' : MessageService.createStaticMessage('Selecione Site'),
            });
            ui001.addChild( lookup004 );

            var requiredResources014 = {
               'subpref' : {
                  'artifactId' : 'ServiceRequest.msSiteLookup_additionalmsSite',
                  'id' : 'awdbca63f6',
               },
            };
            lookup004.addRequiredResources( requiredResources014 );


            var listItemTemplate006 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'ServiceRequest.subpref_listItemTemplate_Item1Desc1',
               'id' : 'aw8b830085',
            });

            var listtext021 = new ListText({
               'resourceAttribute' : 'siteid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'ServiceRequest.subpref_Item1Desc1_identifier',
               'id' : 'aw401b4ceb',
            });
            listItemTemplate006.addChild( listtext021 );


            var listtext022 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'ServiceRequest.subpref_Item1Desc1_ms_description',
               'id' : 'aw70b4c5d2',
            });
            listItemTemplate006.addChild( listtext022 );


            var listtext023 = new ListText({
               'resourceAttribute' : 'orgid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'ServiceRequest.subpref_Item1Desc1_ms_active',
               'id' : 'awab4f513a',
            });
            listItemTemplate006.addChild( listtext023 );



            var list006 = new List({
               'resource' : 'subpref',
               'listItemTemplate' : listItemTemplate006,
               'artifactId' : 'ServiceRequest.msSite_list',
               'id' : 'aw9d44593f',
            });
            lookup004.addChild( list006 );


            var returnAttributes004 = new ReturnAttributes({
               'artifactId' : 'ServiceRequest.Lookup_returnAttributes02',
               'id' : 'aw3fd5e4e5',
            });
            lookup004.addChild( returnAttributes004 );


            var returnAttribute006 = new ReturnAttribute({
               'targetAttribute' : 'ms_siteid',
               'artifactId' : 'ServiceRequest.msSiteLookup_value_siteid',
               'id' : 'awbd9d61c4',
               'sourceAttribute' : 'siteid',
            });
            returnAttributes004.addChild( returnAttribute006 );


            var returnAttribute007 = new ReturnAttribute({
               'targetAttribute' : 'sitedesc',
               'artifactId' : 'ServiceRequest.msSiteLookup_description_sitedesc',
               'id' : 'awc771e433',
               'sourceAttribute' : 'description',
            });
            returnAttributes004.addChild( returnAttribute007 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AttachmentInfoView', false);
               trackTimer.startTracking();
            }

            var view011 = new View({
               'resource' : 'PlatformAttachmentInfoResource',
               'id' : 'Platform.AttachmentInfoView',
               'label' : MessageService.createStaticMessage('Attachment Details'),
            });
            ui001.addChild( view011 );

            var requiredResources015 = {
               'PlatformAttachmentInfoResource' : {
                  'reload' : true,
                  'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource',
                  'id' : 'awedbd920b',
               },
            };
            view011.addRequiredResources( requiredResources015 );

            var container023 = new Container({
               'resource' : 'PlatformAttachmentInfoResource',
               'artifactId' : 'Platform.AttachmentInfoView_container_0',
               'id' : 'aw22b80d5f',
            });
            view011.addChild( container023 );


            var group009 = new Group({
               'artifactId' : 'Platform.AttachmentInfoView_group_0',
               'id' : 'aw80e7b381',
            });
            container023.addChild( group009 );


            var groupitem081 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_0',
               'id' : 'aw15768e0',
            });
            group009.addChild( groupitem081 );


            var text097 = new Text({
               'resourceAttribute' : 'name',
               'editable' : true,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_0_name_Name',
               'id' : 'awddf675f4',
               'label' : MessageService.createStaticMessage('Name'),
               'required' : true,
            });
            groupitem081.addChild( text097 );


            var groupitem082 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_1',
               'id' : 'aw76505876',
            });
            group009.addChild( groupitem082 );


            var text098 = new Text({
               'resourceAttribute' : 'description',
               'editable' : true,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_1_description_Description',
               'id' : 'awc2735258',
               'label' : MessageService.createStaticMessage('Description'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem082.addChild( text098 );


            var groupitem083 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2',
               'id' : 'awef5909cc',
            });
            group009.addChild( groupitem083 );


            var text099 = new Text({
               'resourceAttribute' : 'category',
               'lookup' : 'PlatformAttachmentIn.CategoryLookup',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2_category_Folder',
               'id' : 'aw3a5ae064',
               'label' : MessageService.createStaticMessage('Folder'),
               'lookupAttribute' : 'folderName',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem083.addChild( text099 );

            var eventHandlers053 = [
               {
                     'method' : 'renderCategory',
                     'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2_category_Folder_eventHandlers_render_renderCategory',
                     'id' : 'awa205ff23',
                     'event' : 'render',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            text099.eventHandlers = eventHandlers053;

            var groupitem084 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_3',
               'id' : 'aw985e395a',
            });
            group009.addChild( groupitem084 );


            var text100 = new Text({
               'resourceAttribute' : 'fileType',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_3_fileType_FileType',
               'id' : 'awf0b55f9',
               'label' : MessageService.createStaticMessage('File Type'),
            });
            groupitem084.addChild( text100 );


            var groupitem085 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_4',
               'id' : 'aw63aacf9',
            });
            group009.addChild( groupitem085 );


            var text101 = new Text({
               'resourceAttribute' : 'fileSize',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_4_fileSize_FileSizeKB',
               'id' : 'awa8aac05f',
               'label' : MessageService.createStaticMessage('File Size (KB)'),
            });
            groupitem085.addChild( text101 );


            var footer007 = new Footer({
               'artifactId' : 'Platform.AttachmentInfoView_footer',
               'id' : 'awad3a6a43',
            });
            view011.addChild( footer007 );


            var button028 = new Button({
               'artifactId' : 'Platform.AttachmentInfoView_Cancel_button',
               'id' : 'aw61842429',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers054 = [
               {
                     'method' : 'handleBackButtonAttachmentDetailsView',
                     'artifactId' : 'Platform.AttachmentInfoView_Cancel_button_eventHandlers_click_handleBackButtonAttachmentDetailsView',
                     'id' : 'aw2e660b65',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button028.eventHandlers = eventHandlers054;
            footer007.addChild( button028 );


            var button029 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.AttachmentInfoView_Save_button',
               'id' : 'aw8904293b',
               'label' : MessageService.createStaticMessage('Save'),
            });
            var eventHandlers055 = [
               {
                     'method' : 'commitAttachmentEntry',
                     'artifactId' : 'Platform.AttachmentInfoView_Save_button_eventHandlers_click_commitAttachmentEntry',
                     'id' : 'awbff90b7f',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button029.eventHandlers = eventHandlers055;
            footer007.addChild( button029 );

            var eventHandlers056 = [
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
            view011.eventHandlers = eventHandlers056;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AttachmentFileDialog', false);
               trackTimer.startTracking();
            }

            var view012 = new View({
               'id' : 'Platform.AttachmentFileDialog',
            });
            ui001.addChild( view012 );


            var footer008 = new Footer({
               'artifactId' : 'Platform.AttachmentFileDialog_footer',
               'id' : 'awb513dc05',
            });
            view012.addChild( footer008 );


            var button030 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.UnsavedSketch_doNotAllow_button',
               'id' : 'aw150d1bc',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers057 = [
               {
                     'method' : 'closeFileDialog',
                     'artifactId' : 'Platform.AttachmentFileDialog_closeDialog',
                     'id' : 'awc0d2f7fd',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button030.eventHandlers = eventHandlers057;
            footer008.addChild( button030 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var lookup005 = new Lookup({
               'resource' : 'PlatformAttachmentCategoryResource',
               'id' : 'PlatformAttachmentIn.CategoryLookup',
               'label' : MessageService.createStaticMessage('Select Folder'),
            });
            ui001.addChild( lookup005 );

            var requiredResources016 = {
               'PlatformAttachmentCategoryResource' : {
                  'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource',
                  'id' : 'aw18cc3542',
               },
            };
            lookup005.addRequiredResources( requiredResources016 );


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



            var listItemTemplate007 = new ListItemTemplate({
               'layout' : 'Item2Desc2',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_listItemTemplate_Item2Desc2',
               'id' : 'aweb3659e3',
            });

            var listtext024 = new ListText({
               'resourceAttribute' : 'folderName',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_Item2Desc2_folderName',
               'id' : 'aw48fc196b',
            });
            listItemTemplate007.addChild( listtext024 );



            var list007 = new List({
               'resource' : 'PlatformAttachmentCategoryResource',
               'listItemTemplate' : listItemTemplate007,
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_list',
               'id' : 'awe6857cc4',
               'searchAttributes' : searchAttributes001,
            });
            lookup005.addChild( list007 );


            var returnAttributes005 = new ReturnAttributes({
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_returnAttributes',
               'id' : 'aw4860e6b5',
            });
            lookup005.addChild( returnAttributes005 );


            var returnAttribute008 = new ReturnAttribute({
               'targetAttribute' : 'category',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_folderName_category',
               'id' : 'awb2f5d728',
               'sourceAttribute' : 'folderName',
            });
            returnAttributes005.addChild( returnAttribute008 );


            var actions004 = new Actions({
               'artifactId' : 'actions',
               'id' : 'aw548f1ef',
            });
            ui001.addChild( actions004 );


            var action006 = new Action({
               'overflow' : true,
               'artifactId' : 'ResetWorkList_action',
               'id' : 'aw956f5d3b',
               'label' : MessageService.createStaticMessage('Reset Work List'),
            });
            actions004.addChild( action006 );

            var eventHandlers058 = [
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
            action006.eventHandlers = eventHandlers058;

            var action007 = new Action({
               'overflow' : true,
               'artifactId' : 'PseudoOffline_goOffline',
               'id' : 'aw90309912',
               'label' : MessageService.createStaticMessage('Enable Offline Mode'),
            });
            actions004.addChild( action007 );

            var eventHandlers059 = [
               {
                     'method' : 'toggleOfflineMode',
                     'artifactId' : 'PseudoOffline_enableoffline_action_eventHandlers_click',
                     'id' : 'aw33d3b70c',
                     'event' : 'click',
                     'class' : 'platform.handlers.PseudoOfflineModeHandler',
               }
            ];
            action007.eventHandlers = eventHandlers059;

            var action008 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.Settings',
               'artifactId' : 'Settings_action',
               'id' : 'awc0b1927e',
               'label' : MessageService.createStaticMessage('Settings'),
            });
            actions004.addChild( action008 );


            var action009 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.HelpAbout',
               'artifactId' : 'About_action',
               'id' : 'aw49fae06b',
               'label' : MessageService.createStaticMessage('About'),
            });
            actions004.addChild( action009 );


            var action010 = new Action({
               'overflow' : true,
               'artifactId' : 'acesso_manuais',
               'id' : 'awd1cf2641',
               'label' : MessageService.createStaticMessage('Manuais'),
            });
            actions004.addChild( action010 );

            var eventHandlers060 = [
               {
                     'method' : 'acesso_manuaisClicked',
                     'artifactId' : 'acesso_manuais_eventHandlers_click',
                     'id' : 'awb790cba8',
                     'event' : 'click',
                     'class' : 'custom.handlers.MSLoginHandler',
               }
            ];
            action010.eventHandlers = eventHandlers060;

            var action011 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.LogOutPrompt',
               'artifactId' : 'LogOut_action',
               'id' : 'awd566efa2',
               'label' : MessageService.createStaticMessage('Log Out'),
            });
            actions004.addChild( action011 );


            var action012 = new Action({
               'artifactId' : 'action',
               'id' : 'aw47cc8c92',
            });
            actions004.addChild( action012 );

            var eventHandlers061 = [
               {
                     'artifactId' : 'action_eventHandlers_click',
                     'id' : 'aw871940b2',
                     'event' : 'click',
                     'class' : 'platform.handlers.CreateQueryBaseHandler',
               }
            ];
            action012.eventHandlers = eventHandlers061;

            var erroractions001 = new ErrorActions({
               'artifactId' : 'erroractions',
               'id' : 'aw6a5d95e9',
            });
            ui001.addChild( erroractions001 );


            var action013 = new Action({
               'artifactId' : 'UndoChanges_action',
               'id' : 'aw2236d58a',
               'label' : MessageService.createStaticMessage('Undo Changes'),
            });
            erroractions001.addChild( action013 );

            var eventHandlers062 = [
               {
                     'method' : 'confirmClearChanges',
                     'artifactId' : 'UndoChanges_action_eventHandlers_click_confirmClearChanges',
                     'id' : 'awcf857f5c',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action013.eventHandlers = eventHandlers062;

            var action014 = new Action({
               'artifactId' : 'ResendChanges_action',
               'id' : 'awccf9e70e',
               'label' : MessageService.createStaticMessage('Resend Changes'),
            });
            erroractions001.addChild( action014 );

            var eventHandlers063 = [
               {
                     'method' : 'retryRecordChanges',
                     'artifactId' : 'ResendChanges_action_eventHandlers_click_retryRecordChanges',
                     'id' : 'aw543ac47e',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action014.eventHandlers = eventHandlers063;
            var eventHandlers064 = [
               {
                     'method' : 'none',
                     'artifactId' : 'eventHandlers_none_none',
                     'id' : 'aw1e2e7ded',
                     'event' : 'none',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            ui001.eventHandlers = eventHandlers064;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.emptyview', false);
               trackTimer.startTracking();
            }

            var view013 = new View({
               'showHeader' : false,
               'id' : 'Platform.emptyview',
               'showFooter' : false,
            });
            ui001.addChild( view013 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Notifications', false);
               trackTimer.startTracking();
            }

            var view014 = new View({
               'id' : 'Platform.Notifications',
               'label' : MessageService.createStaticMessage('My Notifications'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view014 );

            var requiredResources017 = {
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
            view014.addRequiredResources( requiredResources017 );


            var listItemTemplate008 = new ListItemTemplate({
               'layout' : 'NotificationList',
               'artifactId' : 'Platform.Notifications_listItemTemplate',
               'id' : 'aw718eb447',
            });

            var listtext025 = new ListText({
               'resourceAttribute' : 'uiDate',
               'layoutInsertAt' : 'date1',
               'artifactId' : 'Platform.Notifications_uiDate',
               'id' : 'aw56b07378',
            });
            listItemTemplate008.addChild( listtext025 );


            var listtext026 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Platform.Notifications_itemnum',
               'id' : 'aw4dbbd111',
            });
            listItemTemplate008.addChild( listtext026 );


            var listtext027 = new ListText({
               'resourceAttribute' : 'itemDesc',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Platform.Notifications_itemDesc',
               'id' : 'aw6bac97b9',
            });
            listItemTemplate008.addChild( listtext027 );

            var eventHandlers065 = [
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
            listItemTemplate008.eventHandlers = eventHandlers065;


            var list008 = new List({
               'resource' : 'osusernotification',
               'listItemTemplate' : listItemTemplate008,
               'artifactId' : 'Platform.Notifications_list',
               'id' : 'awb4916253',
               'label' : MessageService.createStaticMessage('List of notifications'),
            });
            view014.addChild( list008 );

            var eventHandlers066 = [
               {
                     'method' : 'renderMsgHistory',
                     'artifactId' : 'Platform.Notifications_eventHandlers_render_FromList',
                     'id' : 'awa8aedc90',
                     'event' : 'render',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            view014.eventHandlers = eventHandlers066;
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

            var eventHandlers067 = [
               {
                     'method' : 'initLookup',
                     'artifactId' : 'Platform.DateTimeLookup_eventHandlers_show_initLookup',
                     'id' : 'aw576c44ec',
                     'event' : 'show',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            dialog007.eventHandlers = eventHandlers067;

            var container024 = new Container({
               'artifactId' : 'Platform.DateTimeLookup_container_0',
               'id' : 'aw3cdb37d7',
            });
            dialog007.addChild( container024 );


            var datetimepicker001 = new DateTimePicker({
               'artifactId' : 'Platform.DateTimeLookup_datetimepicker_0',
               'id' : 'aw7d2f0e0d',
            });
            container024.addChild( datetimepicker001 );


            var container025 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DateTimeLookup_container_1',
               'id' : 'aw4bdc0741',
            });
            dialog007.addChild( container025 );


            var button031 = new Button({
               'artifactId' : 'Platform.DateTimeLookup_Cancel_button',
               'id' : 'aw54d2f1bb',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers068 = [
               {
                     'method' : 'Cancel',
                     'artifactId' : 'Platform.DateTimeLookup_Cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw5ced0c47',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button031.eventHandlers = eventHandlers068;
            container025.addChild( button031 );


            var button032 = new Button({
               'artifactId' : 'Platform.DateTimeLookup_Clear_button',
               'id' : 'awfd1238bd',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers069 = [
               {
                     'method' : 'Clear',
                     'artifactId' : 'Platform.DateTimeLookup_Clear_button_eventHandlers_click_Clear',
                     'id' : 'aw47510f1f',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button032.eventHandlers = eventHandlers069;
            container025.addChild( button032 );


            var button033 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DateTimeLookup_OK_button',
               'id' : 'awb1e0d280',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers070 = [
               {
                     'method' : 'SetSelection',
                     'artifactId' : 'Platform.DateTimeLookup_OK_button_eventHandlers_click_SetSelection',
                     'id' : 'aw6c08b2ff',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button033.eventHandlers = eventHandlers070;
            container025.addChild( button033 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.HelpAbout', false);
               trackTimer.startTracking();
            }

            var view015 = new View({
               'resource' : 'PlatformLoginResource',
               'id' : 'Platform.HelpAbout',
               'label' : MessageService.createStaticMessage('About'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view015 );


            var container026 = new Container({
               'cssClass' : 'platformHelpAboutContainer',
               'artifactId' : 'Platform.HelpAbout_container_0',
               'id' : 'awf8c0259e',
            });
            view015.addChild( container026 );


            var image007 = new Image({
               'image' : 'ibmLogoDark.svg',
               'artifactId' : 'Platform.HelpAbout_image_0',
               'id' : 'awfebf608a',
            });
            container026.addChild( image007 );


            var text102 = new Text({
               'resourceAttribute' : 'appName',
               'cssClass' : 'productName bold textappearance-large',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_appName',
               'id' : 'aw27632fa8',
            });
            container026.addChild( text102 );


            var text103 = new Text({
               'cssClass' : 'version',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_Version7.5.2.1',
               'id' : 'awf060501a',
               'value' : MessageService.createStaticMessage('Version 7.6.4.0'),
            });
            container026.addChild( text103 );


            var text104 = new Text({
               'cssClass' : 'build',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_Buildnumberbuild',
               'id' : 'awd289f042',
               'value' : MessageService.createStaticMessage('Build number @build@'),
            });
            container026.addChild( text104 );


            var text105 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_LicensedMaterials-',
               'id' : 'aw31046f88',
               'value' : MessageService.createStaticMessage('Licensed Materials - Property of IBM. \u00A9IBM Corp. 2020. IBM, the IBM logo, and ibm.com are trademarks of IBM Corp., registered in many jurisdictions worldwide. Other product and service names might be trademarks of IBM or other companies. A current list of IBM trademarks is available on the Web at www.ibm.com\/legal\/copytrade.shtml. This Program is licensed under the terms of the license agreement for the Program. Please read this agreement carefully before using the Program. By using the Program, you agree to these terms.'),
            });
            container026.addChild( text105 );


            var group010 = new Group({
               'debugOnly' : 'true',
               'artifactId' : 'Platform.Settings_group_2',
               'id' : 'awc5ac5572',
            });
            container026.addChild( group010 );


            var groupitem086 = new GroupItem({
               'layout' : 'ScreenInfo',
               'cssClass' : 'screenInfo',
               'artifactId' : 'Platform.Settings_screenInfo_item',
               'id' : 'aw5de3d82',
            });
            group010.addChild( groupitem086 );


            var text106 = new Text({
               'cssClass' : 'textappearance-large',
               'layoutInsertAt' : 'title',
               'artifactId' : 'Platform.Settings_screenInfo_title',
               'id' : 'awd295621c',
               'value' : MessageService.createStaticMessage('Screen Information'),
            });
            groupitem086.addChild( text106 );


            var text107 = new Text({
               'resourceAttribute' : 'ppi',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pixels',
               'artifactId' : 'Platform.Settings_screenInfo_ppi_text',
               'id' : 'aw4219624',
               'label' : MessageService.createStaticMessage('PPI'),
            });
            groupitem086.addChild( text107 );


            var text108 = new Text({
               'resourceAttribute' : 'width',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'width',
               'artifactId' : 'Platform.Settings_screenInfo_width_text',
               'id' : 'aw6564040e',
               'label' : MessageService.createStaticMessage('Width'),
            });
            groupitem086.addChild( text108 );


            var text109 = new Text({
               'resourceAttribute' : 'height',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'height',
               'artifactId' : 'Platform.Settings_screenInfo_height_text',
               'id' : 'awcd6ab682',
               'label' : MessageService.createStaticMessage('Height'),
            });
            groupitem086.addChild( text109 );


            var text110 = new Text({
               'resourceAttribute' : 'layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'size',
               'artifactId' : 'Platform.Settings_screenInfo_layout_text',
               'id' : 'awd74c1b0',
               'label' : MessageService.createStaticMessage('Layout Size'),
            });
            groupitem086.addChild( text110 );


            var text111 = new Text({
               'resourceAttribute' : 'orientation',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'orientation',
               'artifactId' : 'Platform.Settings_screenInfo_orientation_text',
               'id' : 'aw22df9e6f',
               'label' : MessageService.createStaticMessage('Orientation'),
            });
            groupitem086.addChild( text111 );


            var text112 = new Text({
               'resourceAttribute' : 'density',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'density',
               'artifactId' : 'Platform.Settings_screenInfo_density_text',
               'id' : 'aw6b4b20e2',
               'label' : MessageService.createStaticMessage('Density'),
            });
            groupitem086.addChild( text112 );


            var text113 = new Text({
               'resourceAttribute' : 'pane0_layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pane0',
               'artifactId' : 'Platform.Settings_screenInfo_pane0',
               'id' : 'aw39d3d4a7',
               'label' : MessageService.createStaticMessage('Pane 1 Size'),
            });
            groupitem086.addChild( text113 );


            var text114 = new Text({
               'resourceAttribute' : 'pane1_layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pane1',
               'artifactId' : 'Platform.Settings_screenInfo_pane1',
               'id' : 'aw4ed4e431',
               'label' : MessageService.createStaticMessage('Pane 2 Size'),
            });
            groupitem086.addChild( text114 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Settings', false);
               trackTimer.startTracking();
            }

            var view016 = new View({
               'id' : 'Platform.Settings',
               'label' : MessageService.createStaticMessage('Settings'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view016 );

            var requiredResources018 = {
               'LastADDownload' : {
                  'artifactId' : 'Platform.Settings_LastADDownload',
                  'id' : 'aw879343e2',
               },
            };
            view016.addRequiredResources( requiredResources018 );

            var actions005 = new Actions({
               'artifactId' : 'Platform.Settings_actions',
               'id' : 'awb3f56d3b',
            });
            view016.addChild( actions005 );


            var action015 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.Settings_RefreshSystemData_action',
               'id' : 'awccb0ee65',
               'label' : MessageService.createStaticMessage('Refresh System Data'),
            });
            actions005.addChild( action015 );

            var eventHandlers071 = [
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
            action015.eventHandlers = eventHandlers071;

            var container027 = new Container({
               'resource' : 'LastADDownload',
               'artifactId' : 'Platform.Settings_container_0',
               'id' : 'aw74ff68b5',
            });
            view016.addChild( container027 );


            var group011 = new Group({
               'artifactId' : 'Platform.Settings_group_0',
               'id' : 'aw2ba2345e',
            });
            container027.addChild( group011 );


            var groupitem087 = new GroupItem({
               'transitionTo' : 'Platform.ChangePassword',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0',
               'id' : 'awd48342a3',
            });
            group011.addChild( groupitem087 );


            var text115 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0_ChangePassword',
               'id' : 'aw6c14924a',
               'value' : MessageService.createStaticMessage('Change Password'),
            });
            groupitem087.addChild( text115 );

            var eventHandlers072 = [
               {
                     'method' : 'enableChangePasswordFunction',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0_eventHandlers_render_enableChangePasswordFunction',
                     'id' : 'awa81f4a5',
                     'event' : 'render',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            groupitem087.eventHandlers = eventHandlers072;

            var groupitem088 = new GroupItem({
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0',
               'id' : 'aw82635ebb',
            });
            group011.addChild( groupitem088 );


            var text116 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_RefreshLookupData',
               'id' : 'awcddf2167',
               'value' : MessageService.createStaticMessage('Refresh Lookup Data'),
            });
            groupitem088.addChild( text116 );


            var text117 = new Text({
               'resourceAttribute' : 'downloadStatus',
               'editable' : false,
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_downloadStatus',
               'id' : 'aw8a1673e3',
            });
            groupitem088.addChild( text117 );

            var eventHandlers073 = [
               {
                     'method' : 'renderLastDownload',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_downloadStatus_eventHandlers_render_renderLastDownload',
                     'id' : 'aw72547fb7',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text117.eventHandlers = eventHandlers073;

            var text118 = new Text({
               'cssClass' : 'textappearance-small',
               'editable' : false,
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_Updatesthelookupd',
               'id' : 'aw38a24bec',
               'value' : MessageService.createStaticMessage('Updates the lookup data on your device. Lookup data includes objects, such as assets and locations, that can be added to records.'),
            });
            groupitem088.addChild( text118 );

            var eventHandlers074 = [
               {
                     'method' : 'refreshAdditionalData',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_eventHandlers_click_refreshAdditionalData',
                     'id' : 'aw93ad06fe',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            groupitem088.eventHandlers = eventHandlers074;

            var groupitem089 = new GroupItem({
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_3_Number_of_day_to_sync',
               'id' : 'aw97e66cd6',
            });
            group011.addChild( groupitem089 );


            var text119 = new Text({
               'resourceAttribute' : 'numberOfDaysToSync',
               'editable' : true,
               'artifactId' : 'Platform.Settings_LastADDownload_text_Number_of_day_to_sync',
               'id' : 'aw69a517e3',
               'label' : MessageService.createStaticMessage('How often changes need to be refresh in days:'),
            });
            groupitem089.addChild( text119 );

            var eventHandlers075 = [
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
            text119.eventHandlers = eventHandlers075;

            var groupitem090 = new GroupItem({
               'transitionTo' : 'Platform.AdvancedSettings',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.AdvancedSettings_0',
               'id' : 'aw741c4d60',
            });
            group011.addChild( groupitem090 );


            var text120 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.AdvancedSettings_0_AdvancedSettings',
               'id' : 'aw2d662633',
               'value' : MessageService.createStaticMessage('Advanced Settings'),
            });
            groupitem090.addChild( text120 );


            var group012 = new Group({
               'enableFeatureByProperty' : 'attachments.enabled',
               'artifactId' : 'Platform.Settings_group_1',
               'id' : 'aw5ca504c8',
            });
            container027.addChild( group012 );


            var groupitem091 = new GroupItem({
               'layout' : 'Item1Button1',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_1',
               'id' : 'awf5646e2d',
            });
            group012.addChild( groupitem091 );


            var text121 = new Text({
               'cssClass' : 'wrap-content',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_1_Downloadattachments',
               'id' : 'awd21c407a',
               'value' : MessageService.createStaticMessage('Download attachments with work list.'),
            });
            groupitem091.addChild( text121 );


            var checkbox001 = new CheckBox({
               'resourceAttribute' : 'downloadAttachments',
               'cssClass' : 'rightCheckBox',
               'editable' : true,
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Platform.Settings_downloadAttachments_checkbox',
               'id' : 'aw1a5b9aa2',
            });
            groupitem091.addChild( checkbox001 );

            var eventHandlers076 = [
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
            checkbox001.eventHandlers = eventHandlers076;

            var container028 = new Container({
               'artifactId' : 'ConnectionContainer',
               'id' : 'awef0b2658',
            });
            view016.addChild( container028 );


            var group013 = new Group({
               'artifactId' : 'Platform.Settings.ConnectionManagement.group',
               'id' : 'aw9ad5002d',
            });
            container028.addChild( group013 );


            var groupitem092 = new GroupItem({
               'layout' : 'ConnectionManagementLayout',
               'artifactId' : 'Platform.Settings.ConnectionManagement.groupItem1',
               'id' : 'aw81b0980b',
            });
            group013.addChild( groupitem092 );


            var text122 = new Text({
               'cssClass' : 'relatedRecords',
               'layoutInsertAt' : 'Title',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Title',
               'id' : 'aw1de21387',
               'value' : MessageService.createStaticMessage('Connection Behavior'),
            });
            groupitem092.addChild( text122 );


            var text123 = new Text({
               'cssClass' : 'wrap-content',
               'layoutInsertAt' : 'description',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Description',
               'id' : 'aw6b506a6f',
               'value' : MessageService.createStaticMessage('Specifies which network connections should enable the application to work online'),
            });
            groupitem092.addChild( text123 );


            var radiobutton001 = new RadioButton({
               'cssClass' : 'firstradiobutton',
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.AllConnections',
               'id' : 'awcb83aecb',
               'label' : MessageService.createStaticMessage('All Types'),
            });
            groupitem092.addChild( radiobutton001 );

            var eventHandlers077 = [
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
            radiobutton001.eventHandlers = eventHandlers077;

            var radiobutton002 = new RadioButton({
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button2',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.WiFi',
               'id' : 'aw42dec2bb',
               'label' : MessageService.createStaticMessage('Only WiFi'),
            });
            groupitem092.addChild( radiobutton002 );

            var eventHandlers078 = [
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
            radiobutton002.eventHandlers = eventHandlers078;

            var radiobutton003 = new RadioButton({
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button3',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.Cellular',
               'id' : 'aw7032481d',
               'label' : MessageService.createStaticMessage('Only Cellular'),
            });
            groupitem092.addChild( radiobutton003 );

            var eventHandlers079 = [
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
            radiobutton003.eventHandlers = eventHandlers079;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AdvancedSettings', false);
               trackTimer.startTracking();
            }

            var view017 = new View({
               'id' : 'Platform.AdvancedSettings',
               'label' : MessageService.createStaticMessage('Settings'),
            });
            ui001.addChild( view017 );


            var container029 = new Container({
               'artifactId' : 'Platform.AdvancedSettings_container_0',
               'id' : 'aw5c13274d',
            });
            view017.addChild( container029 );


            var group014 = new Group({
               'artifactId' : 'Platform.AdvancedSettings_group_0',
               'id' : 'awebdfb82c',
            });
            container029.addChild( group014 );


            var groupitem093 = new GroupItem({
               'transitionTo' : 'Platform.TimeTrackReport',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0',
               'id' : 'awba4384a8',
            });
            group014.addChild( groupitem093 );


            var text124 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0_TrackPerformanceDa',
               'id' : 'awc0a6dde7',
               'value' : MessageService.createStaticMessage('Track Performance Data'),
            });
            groupitem093.addChild( text124 );


            var text125 = new Text({
               'cssClass' : 'red-text',
               'editable' : false,
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0_Thisoptionusesmem',
               'id' : 'aw4367e95f',
               'value' : MessageService.createStaticMessage('This option uses memory and might slow the performance of your device. Disable performance tracking when you are done.'),
            });
            groupitem093.addChild( text125 );


            var groupitem094 = new GroupItem({
               'transitionTo' : 'Platform.LoggerReport',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0',
               'id' : 'aw10ca73e0',
            });
            group014.addChild( groupitem094 );


            var text126 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0_Logging',
               'id' : 'awffa3ff9c',
               'value' : MessageService.createStaticMessage('Logging'),
            });
            groupitem094.addChild( text126 );


            var text127 = new Text({
               'cssClass' : 'red-text',
               'editable' : false,
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0_Thisoptionusesmem',
               'id' : 'aw30da1efa',
               'value' : MessageService.createStaticMessage('This option uses memory and might slow the performance of your device. Disable logging when you are done.'),
            });
            groupitem094.addChild( text127 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.LoggerReport', false);
               trackTimer.startTracking();
            }

            var view018 = new View({
               'cssClass' : 'loggerReport',
               'scrollDir' : 'vh',
               'id' : 'Platform.LoggerReport',
               'label' : MessageService.createStaticMessage('Logging Data'),
            });
            ui001.addChild( view018 );


            var actions006 = new Actions({
               'artifactId' : 'Platform.LoggerReport_actions',
               'id' : 'aw5b090344',
            });
            view018.addChild( actions006 );


            var action016 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableErrorLogging_action',
               'id' : 'awc05e82b4',
               'label' : MessageService.createStaticMessage('Enable Error Logging'),
            });
            actions006.addChild( action016 );

            var eventHandlers080 = [
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
            action016.eventHandlers = eventHandlers080;

            var action017 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableInfoLogging_action',
               'id' : 'aw6d618335',
               'label' : MessageService.createStaticMessage('Enable Info Logging'),
            });
            actions006.addChild( action017 );

            var eventHandlers081 = [
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
            action017.eventHandlers = eventHandlers081;

            var action018 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableDebugLogging_action',
               'id' : 'awaa11689b',
               'label' : MessageService.createStaticMessage('Enable Debug Logging'),
            });
            actions006.addChild( action018 );

            var eventHandlers082 = [
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
            action018.eventHandlers = eventHandlers082;

            var action019 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.TransLoggerReport',
               'artifactId' : 'Platform.LoggerReport_ViewTransactionLog_action',
               'id' : 'awdaed3d40',
               'label' : MessageService.createStaticMessage('View Transaction Log'),
            });
            actions006.addChild( action019 );


            var action020 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_ClearLogData_action',
               'id' : 'awb6d3895c',
               'label' : MessageService.createStaticMessage('Clear Log Data'),
            });
            actions006.addChild( action020 );

            var eventHandlers083 = [
               {
                     'method' : 'clear',
                     'artifactId' : 'Platform.LoggerReport_ClearLogData_action_eventHandlers_click_clear',
                     'id' : 'aw10958c5',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action020.eventHandlers = eventHandlers083;

            var action021 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_UploadLog_action',
               'id' : 'aw7510fce3',
               'label' : MessageService.createStaticMessage('Save Log'),
            });
            actions006.addChild( action021 );

            var eventHandlers084 = [
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
            action021.eventHandlers = eventHandlers084;

            var action022 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EmailLog_action',
               'id' : 'aw90d8a401',
               'label' : MessageService.createStaticMessage('Email Log'),
            });
            actions006.addChild( action022 );

            var eventHandlers085 = [
               {
                     'method' : 'emailCurrent',
                     'artifactId' : 'Platform.LoggerReport_EmailLog_action_eventHandlers_click_emailCurrent',
                     'id' : 'awf10881b9',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action022.eventHandlers = eventHandlers085;
            var eventHandlers086 = [
               {
                     'method' : 'renderLoggerReport',
                     'artifactId' : 'Platform.LoggerReport_eventHandlers_show_renderLoggerReport',
                     'id' : 'aw9b7c5c73',
                     'event' : 'show',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            view018.eventHandlers = eventHandlers086;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.TransLoggerReport', false);
               trackTimer.startTracking();
            }

            var view019 = new View({
               'scrollDir' : 'vh',
               'id' : 'Platform.TransLoggerReport',
               'label' : MessageService.createStaticMessage('Logging Data'),
            });
            ui001.addChild( view019 );


            var actions007 = new Actions({
               'artifactId' : 'Platform.TransLoggerReport_actions',
               'id' : 'aw49b00040',
            });
            view019.addChild( actions007 );


            var action023 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TransLoggerReport_ClearLogData_action',
               'id' : 'awdce21e26',
               'label' : MessageService.createStaticMessage('Clear Log Data'),
            });
            actions007.addChild( action023 );

            var eventHandlers087 = [
               {
                     'method' : 'clearTransLog',
                     'artifactId' : 'Platform.TransLoggerReport_ClearLogData_action_eventHandlers_click_clear',
                     'id' : 'aw71c2398e',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action023.eventHandlers = eventHandlers087;

            var action024 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TransLoggerReport_EmailLog_action',
               'id' : 'aw29f3639',
               'label' : MessageService.createStaticMessage('Email Log'),
            });
            actions007.addChild( action024 );

            var eventHandlers088 = [
               {
                     'method' : 'emailCurrentTranslog',
                     'artifactId' : 'Platform.TransLoggerReport_EmailLog_action_eventHandlers_click_emailCurrent',
                     'id' : 'awfd97a236',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action024.eventHandlers = eventHandlers088;
            var eventHandlers089 = [
               {
                     'method' : 'renderTransLoggerReport',
                     'artifactId' : 'Platform.TransLoggerReport_eventHandlers_show_renderTransLoggerReport',
                     'id' : 'aw4261a98a',
                     'event' : 'show',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            view019.eventHandlers = eventHandlers089;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.ChangePassword', false);
               trackTimer.startTracking();
            }

            var view020 = new View({
               'resource' : 'PlatformChangePasswordForm',
               'id' : 'Platform.ChangePassword',
               'label' : MessageService.createStaticMessage('Change Password'),
            });
            ui001.addChild( view020 );


            var container030 = new Container({
               'cssClass' : 'changePasswordForm',
               'artifactId' : 'Platform.ChangePassword_container_0',
               'id' : 'awf7c2a2a',
            });
            view020.addChild( container030 );


            var text128 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.ChangePassword_container_0_errorMsg',
               'id' : 'aw3ed16fe1',
            });
            container030.addChild( text128 );


            var text129 = new Text({
               'resourceAttribute' : 'infoMsg',
               'cssClass' : 'infoMsg',
               'editable' : false,
               'artifactId' : 'Platform.ChangePassword_container_0_infoMsg',
               'id' : 'awe28ebedd',
            });
            container030.addChild( text129 );


            var text130 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'currentpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_currentpassword',
               'id' : 'aw7df0b045',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Current password'),
            });
            container030.addChild( text130 );

            var eventHandlers090 = [
               {
                     'method' : 'hidePasswordField',
                     'artifactId' : 'Platform.ChangePassword_container_0_currentpassword_eventHandlers_render_hidePasswordField',
                     'id' : 'aw27f3eacb',
                     'event' : 'render',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            text130.eventHandlers = eventHandlers090;

            var text131 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'newpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_newpassword',
               'id' : 'aw618d08b5',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('New password'),
            });
            container030.addChild( text131 );


            var text132 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'confirmnewpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_confirmnewpassword',
               'id' : 'awd274537a',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Confirm password'),
            });
            container030.addChild( text132 );


            var button034 = new Button({
               'artifactId' : 'Platform.ChangePassword_Cancel_button',
               'id' : 'aw96c63135',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers091 = [
               {
                     'method' : 'cancelPasswordClickHandler',
                     'artifactId' : 'Platform.ChangePassword_Cancel_button_eventHandlers_click_cancelPasswordClickHandler',
                     'id' : 'aw7492b621',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button034.eventHandlers = eventHandlers091;
            container030.addChild( button034 );


            var button035 = new Button({
               'artifactId' : 'Platform.ChangePassword_Change_button',
               'id' : 'aw5cd0477f',
               'label' : MessageService.createStaticMessage('Change'),
               'primary' : 'true',
            });
            var eventHandlers092 = [
               {
                     'method' : 'changePasswordClickHandler',
                     'artifactId' : 'Platform.ChangePassword_Change_button_eventHandlers_click_changePasswordClickHandler',
                     'id' : 'awfdba8feb',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button035.eventHandlers = eventHandlers092;
            container030.addChild( button035 );

            var eventHandlers093 = [
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
            view020.eventHandlers = eventHandlers093;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.RetrieveOldPassword', false);
               trackTimer.startTracking();
            }

            var view021 = new View({
               'resource' : 'PlatformChangePasswordForm',
               'showHeader' : false,
               'showOverflow' : false,
               'id' : 'Platform.RetrieveOldPassword',
               'label' : MessageService.createStaticMessage('Recover App Data'),
            });
            ui001.addChild( view021 );


            var container031 = new Container({
               'cssClass' : 'changePasswordForm',
               'artifactId' : 'Platform.RetrieveOldPassword_container_0',
               'id' : 'awecdef66d',
            });
            view021.addChild( container031 );


            var text133 = new Text({
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_Enterthepasswordt',
               'id' : 'aw14ebf03b',
               'value' : MessageService.createStaticMessage('Enter the password that you last used to log in to the app. If you do not have this password, you must reset the app before you can log in.'),
            });
            container031.addChild( text133 );


            var text134 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_errorMsg',
               'id' : 'aw9574c917',
            });
            container031.addChild( text134 );


            var text135 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'currentpassword',
               'editable' : true,
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_currentpassword',
               'id' : 'aw97b6c3b7',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Previous password'),
            });
            container031.addChild( text135 );


            var button036 = new Button({
               'artifactId' : 'Platform.RetrieveOldPassword_Recover_button',
               'id' : 'aw3a0ff2',
               'label' : MessageService.createStaticMessage('Recover'),
               'primary' : 'true',
            });
            var eventHandlers094 = [
               {
                     'method' : 'recoverOldPasswordClickHandler',
                     'artifactId' : 'Platform.RetrieveOldPassword_Recover_button_eventHandlers_click_recoverOldPasswordClickHandler',
                     'id' : 'awecb18d1c',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button036.eventHandlers = eventHandlers094;
            container031.addChild( button036 );


            var button037 = new Button({
               'artifactId' : 'Platform.RetrieveOldPassword_Reset_button',
               'id' : 'aw8bb551dc',
               'label' : MessageService.createStaticMessage('Reset'),
            });
            var eventHandlers095 = [
               {
                     'method' : 'resetStorageClickHandler',
                     'artifactId' : 'Platform.RetrieveOldPassword_Reset_button_eventHandlers_click_resetStorageClickHandler',
                     'id' : 'awfe7a73d2',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button037.eventHandlers = eventHandlers095;
            container031.addChild( button037 );

            var eventHandlers096 = [
               {
                     'method' : 'initializeRetrieveOldPasswordView',
                     'artifactId' : 'Platform.RetrieveOldPassword_eventHandlers_show_initializeRetrieveOldPasswordView',
                     'id' : 'aw26f17c5a',
                     'event' : 'show',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            view021.eventHandlers = eventHandlers096;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog008 = new Dialog({
               'closeOnBackgroundClick' : 'true',
               'id' : 'Platform.ConfirmResetDataStore',
            });
            ui001.addChild( dialog008 );


            var container032 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmResetDataStore_container_0',
               'id' : 'awacb7e535',
            });
            dialog008.addChild( container032 );


            var text136 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmResetDataStore_container_0_WarningAllappdat',
               'id' : 'aw68bdf3e8',
               'value' : MessageService.createStaticMessage('Warning! All app data on the device will be cleared. Any data that has not been sent to the server will be lost.'),
            });
            container032.addChild( text136 );


            var container033 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmResetDataStore_container_1',
               'id' : 'awdbb0d5a3',
            });
            dialog008.addChild( container033 );


            var button038 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmResetDataStore_Continue_button',
               'id' : 'awba645d10',
               'label' : MessageService.createStaticMessage('Continue'),
            });
            var eventHandlers097 = [
               {
                     'method' : 'resetDataStoreClickHandler',
                     'artifactId' : 'Platform.ConfirmResetDataStore_Continue_button_eventHandlers_click_resetDataStoreClickHandler',
                     'id' : 'aw5074e6c8',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button038.eventHandlers = eventHandlers097;
            container033.addChild( button038 );


            var button039 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmResetDataStore_Cancel_button',
               'id' : 'aw50474341',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers098 = [
               {
                     'method' : 'cancelResetDataStoreClickHandler',
                     'artifactId' : 'Platform.ConfirmResetDataStore_Cancel_button_eventHandlers_click_cancelResetDataStoreClickHandler',
                     'id' : 'awda7121b8',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button039.eventHandlers = eventHandlers098;
            container033.addChild( button039 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.TimeTrackReport', false);
               trackTimer.startTracking();
            }

            var view022 = new View({
               'cssClass' : 'loggerReport',
               'scrollDir' : 'vh',
               'id' : 'Platform.TimeTrackReport',
               'label' : MessageService.createStaticMessage('Performance Data'),
            });
            ui001.addChild( view022 );

            var requiredResources019 = {
               'timeTrack' : {
                  'artifactId' : 'Platform.TimeTrackReport_timeTrack',
                  'id' : 'aw8d707cee',
               },
            };
            view022.addRequiredResources( requiredResources019 );

            var actions008 = new Actions({
               'artifactId' : 'Platform.TimeTrackReport_actions',
               'id' : 'aw9d9a4864',
            });
            view022.addChild( actions008 );


            var action025 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_EnablePerformanceTracking_action',
               'id' : 'aw34736a63',
               'label' : MessageService.createStaticMessage('Enable Performance Tracking'),
            });
            actions008.addChild( action025 );

            var eventHandlers099 = [
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
            action025.eventHandlers = eventHandlers099;

            var action026 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_ClearPerformanceData_action',
               'id' : 'aw1edf54cf',
               'label' : MessageService.createStaticMessage('Clear Performance Data'),
            });
            actions008.addChild( action026 );

            var eventHandlers100 = [
               {
                     'method' : 'clear',
                     'artifactId' : 'Platform.TimeTrackReport_ClearPerformanceData_action_eventHandlers_click_clear',
                     'id' : 'aw85273d1b',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action026.eventHandlers = eventHandlers100;

            var action027 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_EmailReport_action',
               'id' : 'aw6ff8fae1',
               'label' : MessageService.createStaticMessage('Email Report'),
            });
            actions008.addChild( action027 );

            var eventHandlers101 = [
               {
                     'method' : 'emailCurrent',
                     'artifactId' : 'Platform.TimeTrackReport_EmailReport_action_eventHandlers_click_emailCurrent',
                     'id' : 'awc00583a0',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action027.eventHandlers = eventHandlers101;
            var eventHandlers102 = [
               {
                     'method' : 'renderTT',
                     'artifactId' : 'Platform.TimeTrackReport_eventHandlers_show_renderTT',
                     'id' : 'awca05a315',
                     'event' : 'show',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            view022.eventHandlers = eventHandlers102;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog009 = new Dialog({
               'closeOnBackgroundClick' : 'true',
               'id' : 'Platform.ListLongPressDialog',
            });
            ui001.addChild( dialog009 );



            var listItemTemplate009 = new ListItemTemplate({
               'cssClass' : 'dialogListItem textappearance-medium',
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_listItemTemplate',
               'id' : 'awefd72fd8',
            });

            var listtext028 = new ListText({
               'resourceAttribute' : 'label',
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_label',
               'id' : 'awe2e495b2',
            });
            listItemTemplate009.addChild( listtext028 );



            var list009 = new List({
               'resource' : 'PlatformLongPressResource',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate009,
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_list',
               'id' : 'aw64ff84d9',
               'queryBase' : '',
            });
            dialog009.addChild( list009 );


            var dialog010 = new Dialog({
               'id' : 'Platform.LoadingAdditionalData',
            });
            ui001.addChild( dialog010 );


            var container034 = new Container({
               'artifactId' : 'Platform.LoadingAdditionalData_container_0',
               'id' : 'aw48b509d9',
            });
            dialog010.addChild( container034 );


            var text137 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadingAdditionalData_container_0_Downloadinglookupd',
               'id' : 'aw4cec47c0',
               'value' : MessageService.createStaticMessage('Downloading lookup data.'),
            });
            container034.addChild( text137 );


            var button040 = new Button({
               'artifactId' : 'Platform.LoadingAdditionalData_Cancel_button',
               'id' : 'awb30b5f0',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers103 = [
               {
                     'method' : 'cancelADDownload',
                     'artifactId' : 'Platform.LoadingAdditionalData_Cancel_button_eventHandlers_click_cancelADDownload',
                     'id' : 'awc41dac4c',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button040.eventHandlers = eventHandlers103;
            container034.addChild( button040 );


            var dialog011 = new Dialog({
               'id' : 'Platform.AdditionalDataNoConn',
            });
            ui001.addChild( dialog011 );


            var container035 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.AdditionalDataNoConn_container_0',
               'id' : 'aw666da461',
            });
            dialog011.addChild( container035 );


            var text138 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.AdditionalDataNoConn_container_0_Lookupdatacouldno',
               'id' : 'aw96b90fd8',
               'value' : MessageService.createStaticMessage('Lookup data could not be downloaded. Go to Settings > Refresh Lookup Data when you are online.'),
            });
            container035.addChild( text138 );


            var container036 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.AdditionalDataNoConn_container_1',
               'id' : 'aw116a94f7',
            });
            dialog011.addChild( container036 );


            var button041 = new Button({
               'artifactId' : 'Platform.AdditionalDataNoConn_OK_button',
               'id' : 'aw9b370278',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers104 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.AdditionalDataNoConn_OK_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw108159b3',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button041.eventHandlers = eventHandlers104;
            container036.addChild( button041 );


            var dialog012 = new Dialog({
               'id' : 'Platform.ConfirmReloadWorkList',
            });
            ui001.addChild( dialog012 );


            var container037 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_0',
               'id' : 'aw2054aa9e',
            });
            dialog012.addChild( container037 );


            var text139 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_0_Doyouwanttoclose',
               'id' : 'aw83f81a4b',
               'value' : MessageService.createStaticMessage('Reloading the work list takes time if you are downloading large amounts of data.  Are you sure that you want to continue?'),
            });
            container037.addChild( text139 );


            var container038 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_1',
               'id' : 'aw57539a08',
            });
            dialog012.addChild( container038 );


            var button042 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmReloadWorkList_Yes_button',
               'id' : 'aw5bc89627',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers105 = [
               {
                     'method' : 'reloadConfirmed',
                     'artifactId' : 'Platform.ConfirmReloadWorkList_Yes_button_eventHandlers_click_processDialog',
                     'id' : 'awafdb701f',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button042.eventHandlers = eventHandlers105;
            container038.addChild( button042 );


            var button043 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.ConfirmReloadWorkList_No_button',
               'id' : 'aw4487e9e7',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers106 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.ConfirmReloadWorkList_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw56d1743',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button043.eventHandlers = eventHandlers106;
            container038.addChild( button043 );


            var dialog013 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.ReloadingCurrentWorklist',
            });
            ui001.addChild( dialog013 );


            var container039 = new Container({
               'cssClass' : 'mblSimpleMessageText',
               'artifactId' : 'Platform.ReloadCurrentWorklist_container_0',
               'id' : 'awce0c0b72',
            });
            dialog013.addChild( container039 );


            var text140 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.ReloadCurrentWorklist_container_0_progressMsg',
               'id' : 'awaa894933',
            });
            container039.addChild( text140 );


            var dialog014 = new Dialog({
               'id' : 'Platform.AdditionalDataFailed',
            });
            ui001.addChild( dialog014 );


            var container040 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.AdditionalDataFailed.container',
               'id' : 'aw275627fb',
            });
            dialog014.addChild( container040 );


            var text141 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.AdditionalDataFailed.text',
               'id' : 'awb25e5b66',
               'value' : MessageService.createStaticMessage('Lookup data could not be downloaded. If you are connected, go to Settings > Refresh Lookup Data.'),
            });
            container040.addChild( text141 );


            var container041 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.AdditionalDataFailed.container2',
               'id' : 'aw309dc3be',
            });
            dialog014.addChild( container041 );


            var button044 = new Button({
               'artifactId' : 'Platform.AdditionalDataFailed.button',
               'id' : 'aw39111677',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers107 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.AdditionalDataFailed.eventHandler',
                     'id' : 'awacbc5440',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button044.eventHandlers = eventHandlers107;
            container041.addChild( button044 );


            var dialog015 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.LoadingSystemData',
            });
            ui001.addChild( dialog015 );


            var container042 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadingSystemData_container_0',
               'id' : 'aw13d3cc6a',
            });
            dialog015.addChild( container042 );


            var text142 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadingSystemData_container_0_Downloadingsystemd',
               'id' : 'awfc1b5f79',
               'value' : MessageService.createStaticMessage('Downloading system data.'),
            });
            container042.addChild( text142 );


            var text143 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.LoadingSystemData_container_0_progressMsg',
               'id' : 'aw635d9968',
            });
            container042.addChild( text143 );


            var dialog016 = new Dialog({
               'id' : 'Platform.LoadAdditionalDataYesNo',
            });
            ui001.addChild( dialog016 );


            var container043 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0',
               'id' : 'aw22834650',
            });
            dialog016.addChild( container043 );


            var text144 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Thelookupdatafor',
               'id' : 'aw89be3f27',
               'value' : MessageService.createStaticMessage('The lookup data for this app must be downloaded. Download it now or later?'),
            });
            container043.addChild( text144 );

            var eventHandlers108 = [
               {
                     'method' : 'theLookupdataText',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Thelookupdatafor_eventHandlers_render_setAdditionalDownloadText',
                     'id' : 'aw9051ca24',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text144.eventHandlers = eventHandlers108;

            var text145 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Retrylookupdatafor',
               'id' : 'awb287d1cc',
               'value' : MessageService.createStaticMessage('Lookup data was partially downloaded. Click Retry to download the remaining lookup data. Click Reset to refresh all of the lookup data. Click Close if you are through downloading lookup data.'),
            });
            container043.addChild( text145 );

            var eventHandlers109 = [
               {
                     'method' : 'retrylookupdataText',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Retrylookupdatafor_eventHandlers_render_setAdditionalDownloadText',
                     'id' : 'aw5ad2ed31',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text145.eventHandlers = eventHandlers109;

            var text146 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Whenrunninginabr',
               'id' : 'awb757e4d5',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per lookup.'),
            });
            container043.addChild( text146 );

            var eventHandlers110 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'awb7d271e9',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text146.eventHandlers = eventHandlers110;

            var container044 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_1',
               'id' : 'aw558476c6',
            });
            dialog016.addChild( container044 );


            var button045 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Later_button',
               'id' : 'awa2501fe3',
               'label' : MessageService.createStaticMessage('Later'),
            });
            var eventHandlers111 = [
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
            button045.eventHandlers = eventHandlers111;
            container044.addChild( button045 );


            var button046 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Now_button',
               'id' : 'aw35a14c11',
               'label' : MessageService.createStaticMessage('Now'),
            });
            var eventHandlers112 = [
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
            button046.eventHandlers = eventHandlers112;
            container044.addChild( button046 );


            var button047 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Retry_button',
               'id' : 'aw626b616d',
               'label' : MessageService.createStaticMessage('Retry'),
            });
            var eventHandlers113 = [
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
            button047.eventHandlers = eventHandlers113;
            container044.addChild( button047 );


            var dialog017 = new Dialog({
               'id' : 'Platform.LoadAdditionalDataDeltaDownload',
            });
            ui001.addChild( dialog017 );


            var container045 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0',
               'id' : 'aw79883531',
            });
            dialog017.addChild( container045 );


            var text147 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Thelookupdatafor',
               'id' : 'aw3d94f20f',
               'value' : MessageService.createStaticMessage('Click Changes to download only lookup data changes.'),
            });
            container045.addChild( text147 );


            var text148 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Retrylookupdatafor',
               'id' : 'awa0f7541',
               'value' : MessageService.createStaticMessage('Click All to download all the lookup data.'),
            });
            container045.addChild( text148 );


            var text149 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_cancel',
               'id' : 'aw62270e4c',
               'value' : MessageService.createStaticMessage('Click Cancel to cancel the lookup download.'),
            });
            container045.addChild( text149 );


            var text150 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_action',
               'id' : 'aw73fd47ac',
               'value' : MessageService.createStaticMessage('Which refresh do you want to perform?'),
            });
            container045.addChild( text150 );


            var text151 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Whenrunninginabr',
               'id' : 'aw37d29fd',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per lookup.'),
            });
            container045.addChild( text151 );

            var eventHandlers114 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'aw1edf10f3',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text151.eventHandlers = eventHandlers114;

            var container046 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_1',
               'id' : 'awe8f05a7',
            });
            dialog017.addChild( container046 );


            var button048 = new Button({
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Cancel_button',
               'id' : 'awb2f881ae',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers115 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'awcaa29f5a',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button048.eventHandlers = eventHandlers115;
            container046.addChild( button048 );


            var button049 = new Button({
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_RefreshAll_button',
               'id' : 'aw8ab2882',
               'label' : MessageService.createStaticMessage('All'),
            });
            var eventHandlers116 = [
               {
                     'method' : 'confirmADDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Now_button_eventHandlers_click_confirmADDownload',
                     'id' : 'awa5526bd4',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button049.eventHandlers = eventHandlers116;
            container046.addChild( button049 );


            var button050 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_RefreshChanges_button',
               'id' : 'aw9c0cf49a',
               'label' : MessageService.createStaticMessage('Changes'),
            });
            var eventHandlers117 = [
               {
                     'method' : 'confirmADDeltaDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Later_button_eventHandlers_click_confirmADDeltaDownload',
                     'id' : 'aw46619626',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button050.eventHandlers = eventHandlers117;
            container046.addChild( button050 );


            var dialog018 = new Dialog({
               'id' : 'Platform.LoadSystemDataDeltaDownload',
            });
            ui001.addChild( dialog018 );


            var container047 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0',
               'id' : 'aw47beed1c',
            });
            dialog018.addChild( container047 );


            var text152 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Thelookupdatafor',
               'id' : 'aw682ebd2f',
               'value' : MessageService.createStaticMessage('Click Changes to download only the system data changes.'),
            });
            container047.addChild( text152 );


            var text153 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Retrylookupdatafor',
               'id' : 'aw79e85858',
               'value' : MessageService.createStaticMessage('Click All to download all the system data.'),
            });
            container047.addChild( text153 );


            var text154 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_cancel',
               'id' : 'awcb50ae6',
               'value' : MessageService.createStaticMessage('Click Cancel to cancel the system download.'),
            });
            container047.addChild( text154 );


            var text155 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_action',
               'id' : 'aw1d6f4306',
               'value' : MessageService.createStaticMessage('Which refresh do you want to perform?'),
            });
            container047.addChild( text155 );


            var text156 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Whenrunninginabr',
               'id' : 'aw56c766dd',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per System.'),
            });
            container047.addChild( text156 );

            var eventHandlers118 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'aw37b2ac2a',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text156.eventHandlers = eventHandlers118;

            var container048 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_1',
               'id' : 'aw30b9dd8a',
            });
            dialog018.addChild( container048 );


            var button051 = new Button({
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Cancel_button',
               'id' : 'aw1adabf91',
               'label' : MessageService.createStaticMessage('cancel'),
            });
            var eventHandlers119 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw2569598a',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button051.eventHandlers = eventHandlers119;
            container048.addChild( button051 );


            var button052 = new Button({
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_RefreshAll_button',
               'id' : 'awf1a96515',
               'label' : MessageService.createStaticMessage('All'),
            });
            var eventHandlers120 = [
               {
                     'method' : 'downloadSystemData',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Now_button_eventHandlers_click_confirmdownloadSystemData',
                     'id' : 'aw8d600b10',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button052.eventHandlers = eventHandlers120;
            container048.addChild( button052 );


            var button053 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_RefreshChanges_button',
               'id' : 'aw328e1b2e',
               'label' : MessageService.createStaticMessage('Changes'),
            });
            var eventHandlers121 = [
               {
                     'method' : 'confirmSystemDataDeltaDownload',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Later_button_eventHandlers_click_confirmSystemDataDeltaDownload',
                     'id' : 'awbd23e928',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button053.eventHandlers = eventHandlers121;
            container048.addChild( button053 );


            var dialog019 = new Dialog({
               'id' : 'Platform.ExitApplicationPrompt',
            });
            ui001.addChild( dialog019 );


            var container049 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ExitApplicationPrompt_container_0',
               'id' : 'aw71d2ddca',
            });
            dialog019.addChild( container049 );


            var text157 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ExitApplicationPrompt_container_0_Doyouwanttoclose',
               'id' : 'aw4e0184c3',
               'value' : MessageService.createStaticMessage('Do you want to close the app?'),
            });
            container049.addChild( text157 );


            var container050 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ExitApplicationPrompt_container_1',
               'id' : 'aw6d5ed5c',
            });
            dialog019.addChild( container050 );


            var button054 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ExitApplicationPrompt_Yes_button',
               'id' : 'aw3bff816',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers122 = [
               {
                     'method' : 'processDialog',
                     'artifactId' : 'Platform.ExitApplicationPrompt_Yes_button_eventHandlers_click_processDialog',
                     'id' : 'awfa220200',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button054.eventHandlers = eventHandlers122;
            container050.addChild( button054 );


            var button055 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.ExitApplicationPrompt_No_button',
               'id' : 'aw5ba5c9da',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers123 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.ExitApplicationPrompt_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw5256cc3',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button055.eventHandlers = eventHandlers123;
            container050.addChild( button055 );


            var dialog020 = new Dialog({
               'id' : 'Platform.LogOutPrompt',
            });
            ui001.addChild( dialog020 );


            var container051 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LogOutPrompt_container_0',
               'id' : 'awcf20d41b',
            });
            dialog020.addChild( container051 );


            var text158 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LogOutPrompt_container_0_Doyouwanttologo',
               'id' : 'aw15a96005',
               'value' : MessageService.createStaticMessage('Do you want to log out of the app?'),
            });
            container051.addChild( text158 );


            var container052 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LogOutPrompt_container_1',
               'id' : 'awb827e48d',
            });
            dialog020.addChild( container052 );


            var button056 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.LogOutPrompt_No_button',
               'id' : 'awfbbbd446',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers124 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.LogOutPrompt_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw364ad2c7',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button056.eventHandlers = eventHandlers124;
            container052.addChild( button056 );


            var button057 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LogOutPrompt_Yes_button',
               'id' : 'awfaa63964',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers125 = [
               {
                     'method' : 'logoutDialog',
                     'artifactId' : 'Platform.LogOutPrompt_Yes_button_eventHandlers_click_logoutDialog',
                     'id' : 'aw82db52a6',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button057.eventHandlers = eventHandlers125;
            container052.addChild( button057 );


            var dialog021 = new Dialog({
               'cssClass' : 'dialogDurationLookup',
               'resource' : 'PlatformDateLookupResource',
               'id' : 'Platform.DurationLookup',
               'label' : MessageService.createStaticMessage('Change Duration'),
            });
            ui001.addChild( dialog021 );

            var eventHandlers126 = [
               {
                     'method' : 'initLookup',
                     'artifactId' : 'Platform.DurationLookup_eventHandlers_show_initLookup',
                     'id' : 'aw2898d5b1',
                     'event' : 'show',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            dialog021.eventHandlers = eventHandlers126;

            var container053 = new Container({
               'artifactId' : 'Platform.DurationLookup_container_0',
               'id' : 'awc7b6d6e2',
            });
            dialog021.addChild( container053 );


            var durationpicker001 = new DurationPicker({
               'artifactId' : 'Platform.DurationLookup_durationpicker_0',
               'id' : 'awbdafea4f',
            });
            container053.addChild( durationpicker001 );


            var container054 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DurationLookup_container_1',
               'id' : 'awb0b1e674',
            });
            dialog021.addChild( container054 );


            var button058 = new Button({
               'artifactId' : 'Platform.DurationLookup_Cancel_button',
               'id' : 'aw21ee1a8e',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers127 = [
               {
                     'method' : 'Cancel',
                     'artifactId' : 'Platform.DurationLookup_Cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw7fc46e19',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button058.eventHandlers = eventHandlers127;
            container054.addChild( button058 );


            var button059 = new Button({
               'artifactId' : 'Platform.DurationLookup_Clear_button',
               'id' : 'awab5a917f',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers128 = [
               {
                     'method' : 'Clear',
                     'artifactId' : 'Platform.DurationLookup_Clear_button_eventHandlers_click_Clear',
                     'id' : 'aw4d23bc8f',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button059.eventHandlers = eventHandlers128;
            container054.addChild( button059 );


            var button060 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DurationLookup_OK_button',
               'id' : 'aw7a6484f6',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers129 = [
               {
                     'method' : 'SetSelection',
                     'artifactId' : 'Platform.DurationLookup_OK_button_eventHandlers_click_SetSelection',
                     'id' : 'aweb8ce178',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button060.eventHandlers = eventHandlers129;
            container054.addChild( button060 );


            var dialog022 = new Dialog({
               'id' : 'Platform.CancelDownload',
            });
            ui001.addChild( dialog022 );


            var container055 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.CancelDownload_container_0',
               'id' : 'awf839de44',
            });
            dialog022.addChild( container055 );


            var text159 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.CancelDownload_container_0_Doyouwanttostop',
               'id' : 'awdb2316b3',
               'value' : MessageService.createStaticMessage('Do you want to stop downloading work list records?'),
            });
            container055.addChild( text159 );


            var container056 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.CancelDownload_container_1',
               'id' : 'aw8f3eeed2',
            });
            dialog022.addChild( container056 );


            var button061 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.CancelDownload_Yes_button',
               'id' : 'aw3b97968f',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers130 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.CancelDownload_Yes_button_eventHandlers_click_cancelDownload',
                     'id' : 'awadc6ff1d',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button061.eventHandlers = eventHandlers130;
            container056.addChild( button061 );


            var button062 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.CancelDownload_No_button',
               'id' : 'awab099478',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers131 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.CancelDownload_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw9ceda703',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button062.eventHandlers = eventHandlers131;
            container056.addChild( button062 );


            var dialog023 = new Dialog({
               'id' : 'Platform.ConfirmClearChanges',
            });
            ui001.addChild( dialog023 );


            var container057 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmClearChanges_container_0',
               'id' : 'aw3965500f',
            });
            dialog023.addChild( container057 );


            var text160 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmClearChanges_container_0_Changesthathaveno',
               'id' : 'aw66e22f87',
               'value' : MessageService.createStaticMessage('Changes that have not been sent to the server will be discarded.'),
            });
            container057.addChild( text160 );


            var container058 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmClearChanges_container_1',
               'id' : 'aw4e626099',
            });
            dialog023.addChild( container058 );


            var button063 = new Button({
               'artifactId' : 'Platform.ConfirmClearChanges_Cancel_button',
               'id' : 'awcee54fe9',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers132 = [
               {
                     'method' : 'cancelClearChanges',
                     'artifactId' : 'Platform.ConfirmClearChanges_Cancel_button_eventHandlers_click_cancelClearChanges',
                     'id' : 'awb208eba2',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button063.eventHandlers = eventHandlers132;
            container058.addChild( button063 );


            var button064 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.ConfirmClearChanges_OK_button',
               'id' : 'aw8a3b05f2',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers133 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'Platform.ConfirmClearChanges_OK_button_eventHandlers_click_doClearChanges',
                     'id' : 'aw32f778d4',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button064.eventHandlers = eventHandlers133;
            container058.addChild( button064 );


            var dialog024 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.DownloadCurrentWorklist',
            });
            ui001.addChild( dialog024 );


            var container059 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_0',
               'id' : 'awfd35c5df',
            });
            dialog024.addChild( container059 );


            var text161 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_0_progressMsg',
               'id' : 'aw3c55ae56',
            });
            container059.addChild( text161 );


            var container060 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_1',
               'id' : 'aw8a32f549',
            });
            dialog024.addChild( container060 );


            var button065 = new Button({
               'artifactId' : 'Platform.DownloadCurrentWorklist_Cancel_button',
               'id' : 'awcfb8296d',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers134 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.DownloadCurrentWorklist_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'aw5541afbb',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button065.eventHandlers = eventHandlers134;
            container060.addChild( button065 );


            var dialog025 = new Dialog({
               'id' : 'Platform.NoRecordFoundDialog',
            });
            ui001.addChild( dialog025 );


            var container061 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.NoRecordFoundDialog_container_0',
               'id' : 'awa73a1c57',
            });
            dialog025.addChild( container061 );


            var text162 = new Text({
               'artifactId' : 'Platform.NoRecordFoundDialog_container_0_Stopthetimeronwo',
               'id' : 'awd6cf8f25',
               'value' : MessageService.createStaticMessage('No record was found. If you are working offline, try downloading worklist when online to access your workorder'),
            });
            container061.addChild( text162 );


            var container062 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.NoRecordFoundDialog_container_1',
               'id' : 'awd03d2cc1',
            });
            dialog025.addChild( container062 );


            var button066 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.NoRecordFoundDialog_OK_button',
               'id' : 'aw3de0cad2',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers135 = [
               {
                     'method' : 'closeNoRecord',
                     'artifactId' : 'Platform.NoRecordFoundDialog_OK_button_multiple',
                     'id' : 'aw41a4b840',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button066.eventHandlers = eventHandlers135;
            container062.addChild( button066 );


            var dialog026 = new Dialog({
               'id' : 'Platform.MultiplePushNotificationDialog',
            });
            ui001.addChild( dialog026 );


            var container063 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_0',
               'id' : 'aw7b338e5e',
            });
            dialog026.addChild( container063 );


            var text163 = new Text({
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_0_Stopthetimeronwo',
               'id' : 'aw72fc5fcc',
               'value' : MessageService.createStaticMessage('Multiple notification were recieved. Go to notification view to access them.'),
            });
            container063.addChild( text163 );


            var container064 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_1',
               'id' : 'awc34bec8',
            });
            dialog026.addChild( container064 );


            var button067 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_OK_button',
               'id' : 'awc2c9277e',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers136 = [
               {
                     'method' : 'close',
                     'artifactId' : 'Platform.MultiplePushNotificationDialog_OK_button_multiple',
                     'id' : 'awe5002e8b',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button067.eventHandlers = eventHandlers136;
            container064.addChild( button067 );


            var dialog027 = new Dialog({
               'resource' : 'PlatformTempPushNotification',
               'id' : 'Platform.PushNotificationDialog',
            });
            ui001.addChild( dialog027 );


            var container065 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.PushNotificationDialog_container_0',
               'id' : 'awb0eedc9',
            });
            dialog027.addChild( container065 );


            var text164 = new Text({
               'artifactId' : 'Platform.PushNotificationDialog_container_0_Stopthetimeronwo',
               'id' : 'aw35fc28ff',
               'value' : MessageService.createDynamicMessage('{0} {1} {2}', 'platform.handlers.PushNotificationDialogHandler', 'resolveMessageProps'),
               'resolverFunction' : 'resolveMessageProps',
               'resolverClass' : 'platform.handlers.PushNotificationDialogHandler',
            });
            container065.addChild( text164 );


            var container066 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.PushNotificationDialog_container_1',
               'id' : 'aw7c09dd5f',
            });
            dialog027.addChild( container066 );


            var button068 = new Button({
               'artifactId' : 'Platform.PushNotificationDialog_Open_button',
               'id' : 'aw4151795',
               'label' : MessageService.createStaticMessage('Open'),
            });
            var eventHandlers137 = [
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
            button068.eventHandlers = eventHandlers137;
            container066.addChild( button068 );


            var button069 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.PushNotificationDialog_OK_button',
               'id' : 'aw3d64070a',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers138 = [
               {
                     'method' : 'close',
                     'artifactId' : 'Platform.PushNotificationDialog_OK_button_eventHandlers_click_WOStartedDialogYesClickHandler',
                     'id' : 'aw40f88c32',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button069.eventHandlers = eventHandlers138;
            container066.addChild( button069 );


            var dialog028 = new Dialog({
               'resource' : 'PlatformDemoModeResource',
               'id' : 'Platform.DemoDownloadWarning',
            });
            ui001.addChild( dialog028 );


            var container067 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DemoDownloadWarning_container_0',
               'id' : 'awf840ab79',
            });
            dialog028.addChild( container067 );


            var text165 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.DemoDownloadWarning_container_0_progressMsg',
               'id' : 'awf3cb0903',
               'value' : MessageService.createStaticMessage('MessageText'),
            });
            container067.addChild( text165 );


            var container068 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DemoDownloadWarning_container_1',
               'id' : 'aw8f479bef',
            });
            dialog028.addChild( container068 );


            var button070 = new Button({
               'artifactId' : 'Platform.DemoDownloadWarning_Continue_button',
               'id' : 'aw2659f8c8',
               'label' : MessageService.createStaticMessage('Continue'),
            });
            var eventHandlers139 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'Platform.DemoDownloadWarning_Continue_button_eventHandlers_click_doClearChanges',
                     'id' : 'awbdf1879f',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button070.eventHandlers = eventHandlers139;
            container068.addChild( button070 );


            var button071 = new Button({
               'artifactId' : 'Platform.DemoDownloadWarning_Cancel_button',
               'id' : 'aw9def7b28',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers140 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.DemoDownloadWarning_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'awd4960a86',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button071.eventHandlers = eventHandlers140;
            container068.addChild( button071 );


            var dialog029 = new Dialog({
               'resource' : 'PlatformEsigResource',
               'id' : 'Platform.EsigLoginView',
               'label' : MessageService.createStaticMessage('Electronic Signature Authentication'),
            });
            ui001.addChild( dialog029 );

            var requiredResources020 = {
               'attemptResultDomain' : {
                  'enableFeatureByProperty' : 'esig.enabled',
                  'artifactId' : 'Platform.EsigLoginView_attemptResultDomain',
                  'id' : 'aw3c53638b',
               },
            };
            dialog029.addRequiredResources( requiredResources020 );

            var container069 = new Container({
               'artifactId' : 'Platform.EsigLoginView_container_0',
               'id' : 'aw44fd9611',
            });
            dialog029.addChild( container069 );


            var group015 = new Group({
               'artifactId' : 'Platform.EsigLoginView_group_0',
               'id' : 'aw7bf6135f',
            });
            container069.addChild( group015 );


            var groupitem095 = new GroupItem({
               'artifactId' : 'Platform.EsigLoginView_group_0_groupitem_1',
               'id' : 'aw209714b9',
            });
            group015.addChild( groupitem095 );


            var text166 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'userName',
               'cssClass' : 'loginUsername',
               'editable' : false,
               'artifactId' : 'Platform.EsigLoginView_container_0_username',
               'id' : 'aw15aabb30',
               'label' : MessageService.createStaticMessage('User Name'),
               'placeHolder' : MessageService.createStaticMessage('User name'),
            });
            groupitem095.addChild( text166 );


            var text167 = new Text({
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
            groupitem095.addChild( text167 );


            var text168 = new Text({
               'resourceAttribute' : 'reason',
               'cssClass' : 'loginUsername',
               'editable' : true,
               'artifactId' : 'Platform.EsigLoginView_container_0_reason',
               'id' : 'aw6ccf562d',
               'label' : MessageService.createStaticMessage('Reason for Change'),
               'placeHolder' : MessageService.createStaticMessage('Reason for Change'),
               'required' : true,
            });
            groupitem095.addChild( text168 );


            var container070 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.EsigLoginView_footer',
               'id' : 'aw68d6d11c',
            });
            dialog029.addChild( container070 );


            var button072 = new Button({
               'artifactId' : 'Platform.EsigLoginView_Cancel_button',
               'id' : 'aw68a36a2b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers141 = [
               {
                     'method' : 'cancelEsig',
                     'artifactId' : 'Platform.EsigLoginView_Cancel_button_eventHandlers_click_cancelEsig',
                     'id' : 'awdba9800d',
                     'event' : 'click',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            button072.eventHandlers = eventHandlers141;
            container070.addChild( button072 );


            var button073 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.EsigLoginView_Save_button',
               'id' : 'awef41b275',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers142 = [
               {
                     'method' : 'submitEsig',
                     'artifactId' : 'Platform.EsigLoginView_Save_button_eventHandlers_click_submitEsig',
                     'id' : 'awa9f3497f',
                     'event' : 'click',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            button073.eventHandlers = eventHandlers142;
            container070.addChild( button073 );

            var eventHandlers143 = [
               {
                     'method' : 'initializeEsig',
                     'artifactId' : 'Platform.EsigLoginView_eventHandlers_show_initializeEsig',
                     'id' : 'aw681e6384',
                     'event' : 'show',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            dialog029.eventHandlers = eventHandlers143;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Signature', false);
               trackTimer.startTracking();
            }

            var view023 = new View({
               'id' : 'Platform.Signature',
               'label' : MessageService.createStaticMessage('Capture Real Signature'),
            });
            ui001.addChild( view023 );

            var requiredResources021 = {
               'PlatformAttachmentInfoResource' : {
                  'artifactId' : 'Platform.Signature_PlatformAttachmentInfoResource',
                  'id' : 'aw8cc44736',
               },
            };
            view023.addRequiredResources( requiredResources021 );

            var footer009 = new Footer({
               'artifactId' : 'Platform.Signature_footer',
               'id' : 'aw16b9ee39',
            });
            view023.addChild( footer009 );


            var button074 = new Button({
               'artifactId' : 'Platform.Signature_Cancel_button',
               'id' : 'aw9088fe5b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers144 = [
               {
                     'method' : 'cancelSignature',
                     'artifactId' : 'Platform.Signature_Cancel_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'awc27cd6a4',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button074.eventHandlers = eventHandlers144;
            footer009.addChild( button074 );


            var button075 = new Button({
               'artifactId' : 'Platform.Signature_Clear_button',
               'id' : 'awc6576044',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers145 = [
               {
                     'method' : 'clearSignature',
                     'artifactId' : 'Platform.Signature_Clear_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw90653ab1',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button075.eventHandlers = eventHandlers145;
            footer009.addChild( button075 );


            var button076 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.Signature_Save_button',
               'id' : 'awbc1f2293',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers146 = [
               {
                     'method' : 'saveSignature',
                     'artifactId' : 'Platform.Signature_Save_button_eventHandlers_click_saveSignature',
                     'id' : 'aw7d8e432b',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button076.eventHandlers = eventHandlers146;
            footer009.addChild( button076 );

            var eventHandlers147 = [
               {
                     'method' : 'initSignature',
                     'artifactId' : 'Platform.Signature_eventHandlers_show_initStopWorkView',
                     'id' : 'awb8cf4cb7',
                     'event' : 'initialize',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            view023.eventHandlers = eventHandlers147;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog030 = new Dialog({
               'id' : 'Platform.SignatureDialog',
            });
            ui001.addChild( dialog030 );


            var container071 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.SignatureDialog_container_buttons',
               'id' : 'aw91450791',
            });
            dialog030.addChild( container071 );


            var button077 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_Cancel_button',
               'id' : 'aw51ebe6e8',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers148 = [
               {
                     'method' : 'cancelSignatureDialog',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_Cancel_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw198ca753',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button077.eventHandlers = eventHandlers148;
            container071.addChild( button077 );


            var button078 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_clear_button',
               'id' : 'awdc63a382',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers149 = [
               {
                     'method' : 'clearSignature',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_clear_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw72eacc40',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button078.eventHandlers = eventHandlers149;
            container071.addChild( button078 );


            var button079 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_Save_button',
               'id' : 'awd4941650',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers150 = [
               {
                     'method' : 'saveSignature',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_Save_button_eventHandlers_click_saveSignature',
                     'id' : 'awa59c7577',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button079.eventHandlers = eventHandlers150;
            container071.addChild( button079 );

            var eventHandlers151 = [
               {
                     'method' : 'initSignature',
                     'artifactId' : 'Platform.SignatureDialog_eventHandlers_show_initStopWorkView',
                     'id' : 'aw71e7bce4',
                     'event' : 'show',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            dialog030.eventHandlers = eventHandlers151;
            app001.addHandler( {name : 'application.handlers.SRAttachmentHandler', 'class': new SRAttachmentHandler()} );
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
