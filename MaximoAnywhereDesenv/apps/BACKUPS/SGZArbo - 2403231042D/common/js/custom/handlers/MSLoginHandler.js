
/*
 * Licensed Materials - Property of IBM
 * "Restricted Materials of IBM"
 *
 * 5725-M39
 *
 * (C) COPYRIGHT IBM CORP. 2013,2020 All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp. 
 *
 */

/* Inicio alteração Amanda Chamado 80537 - ATIVOS ABOREOS - FAMILIA / NOME POPULAR  03/11/22 -->*/

define("custom/handlers/MSLoginHandler", 
	   [ "dojo/_base/declare",
	     "platform/handlers/_ApplicationHandlerBase",
	     "platform/model/AdditionalDataManager",
	     "platform/model/SystemDataManager",
	     "platform/model/SystemDataUIManager",
	     "platform/auth/UserAuthenticationManager",
	     "platform/store/SystemProperties",
	     "platform/translation/MessageService",
	     "dijit/focus",
	     "platform/auth/UserRolesManager",
	     "platform/store/_StoreProvider",
	     "platform/auth/OfflineLogout",
	 	 "dojo/Deferred",
	     "platform/util/PlatformConstants",
	     "platform/comm/_ConnectivityChecker",
	     "generated/application/pushNotification/PushNotificationSelfRegistrationGenerated",
	     "platform/auth/ServerAuthenticationProvider",
	     "platform/geolocation/GeoLocationTrackingService",
],
function(declare, ApplicationHandlerBase, AdditionalDataManager, SystemDataManager, SystemDataUIManager, UserAuthenticationManager, SystemProperties, MessageService, dijitFocus, UserRolesManager, StoreProvider, OfflineLogout, Deferred, PlatformConstants, ConnectivityChecker, PushNotificationSelfRegistrationGenerated, ServerAuthenticationProvider, GeoLocationTrackingService) {
	return declare( ApplicationHandlerBase, {
		name: 'MSLoginHandler',
		LOGIN_DATA: 'PlatformLoginResource',
		loginForm: null,
		loginInitialized: false,

/**@memberOf custom.handlers.MSLoginHandle */
		resetLinkClicked:function(eventContext){
			let self = this;
			var domain = self.ui.application.WL.StaticAppProps.WORKLIGHT_BASE_URL;	
			var url;
			if(domain.includes('https://smgimax.prefeitura.sp.gov.br:443')){
				url = "https://smgi.prefeitura.sp.gov.br/prs/resetPassword.jsp?reset=request";
			}else{
				url = "https://smgisgzhomolog.prefeitura.sp.gov.br/prs/resetPassword.jsp?reset=request";
			}
			window.open(url, '_system');
		},	

		
		acesso_manuaisClicked:function(eventContext){	
			let self = this;
			let appId = self.application.appId;
			var domain = self.ui.application.WL.StaticAppProps.WORKLIGHT_BASE_URL;
			var url = `${domain}/webclient/login/manuais.jsp?app=${appId}`;
			window.open(url, '_system');
		}
	});
});
