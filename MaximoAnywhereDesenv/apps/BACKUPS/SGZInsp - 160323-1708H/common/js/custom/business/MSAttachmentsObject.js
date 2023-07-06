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

define("custom/business/MSAttachmentsObject", 
		["platform/util/PlatformConstants",
		  "platform/translation/MessageService",
		     "platform/model/ModelService",
		     "platform/store/SystemProperties",
		     "platform/auth/UserManager",
		     "platform/format/FormatterService"], 
		 function(PlatformConstants, MessageService, ModelService, SystemProperties, UserManager, FormatterService) {
	return {
/**@memberOf custom.business.MSAttachmentsObject */
		onInitialize : function(attachmentsMuni) {
			
		},
		
		extensionOf : function(filePath, splitChar){
			if(splitChar == 'undefined' || splitChar == null){
				splitChar = ".";
			}
			var pos = filePath.lastIndexOf(splitChar);
			if(pos >= 0){
				return filePath.substring(pos + 1, filePath.length).toLowerCase();
			}
			else return "";
		},
	      beforeSave : function(attachmentsMuni) {
	    	  if(!attachmentsMuni.get('fileName') && attachmentsMuni.get(PlatformConstants.ATTACH_NAME_ATTR)){
					attachmentsMuni.set('fileName',attachmentsMuni.get(PlatformConstants.ATTACH_NAME_ATTR));
				}
				
				if(!attachmentsMuni.get('description') && attachmentsMuni.get(PlatformConstants.ATTACH_DESCRIPTION_ATTR)){
					attachmentsMuni.set('description',attachmentsMuni.get(PlatformConstants.ATTACH_DESCRIPTION_ATTR));
				}
				//Unfortunately, we have to pull our doclink attach path of anywheredoclinks from a system property
				//Because it is not exposed in the RDF from OSLC
				
				//Alterado para novo relacionamento do SGZInsp
				var si_attach_doclink_doctypes_defpath = "MS_INSPDOCLINKS1";
				//attachmentsMuni.set('anywhereUploadPath', "created/" + SystemProperties.getProperty('si.attach.doclink.doctypes.defpath') );
				attachmentsMuni.set('anywhereUploadPath', "created/" + si_attach_doclink_doctypes_defpath );
				
				attachmentsMuni.set('createby',UserManager.getCurrentUser());
				attachmentsMuni.set('docType',attachmentsMuni.get(PlatformConstants.ATTACH_CATEGORY_ATTR));
				
				attachmentsMuni.set('displayFileName',attachmentsMuni.get('anywhereAttachName'));
				attachmentsMuni.set('displayDescription',attachmentsMuni.get('anywhereAttachDescription'));
				
				attachmentsMuni.setDateValue('displayCreationDate',attachmentsMuni.getAsDateOrNull('anywhereCreationDate'));
				
				var fullFileName = attachmentsMuni.get('anywhereAttachPath');
					if(fullFileName){
						attachmentsMuni.set('displayFileType',this.extensionOf(fullFileName));
					}
					
				var userLocale = (WL && WL.App && WL.App.getDeviceLocale() || 'en-US');
				userLocale = userLocale.replace('_','-');
				attachmentsMuni.set('displaySize',FormatterService.toDisplayableValue(attachmentsMuni.get('anywhereAttachSize'), "double", userLocale) + ' ' + MessageService.createStaticMessage('measure').getMessage());
				//ModelService.save(attachmentsMuni.getOwner().getParent().getOwner());
	       },
		
	}
});
