define("custom/handlers/MSAttachmentExtensionHandler", [ "dojo/_base/declare",
		"dojo/_base/array", "dojo/_base/lang",
		"platform/handlers/_ApplicationHandlerBase",
		"application/handlers/CommonHandler",
		"application/business/WorkOrderObject", "platform/model/ModelService",
		"platform/util/AsyncAwareMixin", "platform/logging/Logger",
		"platform/util/PlatformConstants", "platform/auth/UserManager",
		"platform/translation/MessageService",
		"platform/model/ModelDataSet",
		"dojo/Deferred",
		"platform/attachment/AttachmentService"], function(declare, arrayUtil,
		lang, ApplicationHandlerBase, CommonHandler, WorkOrderObject,
		ModelService, AsyncAwareMixin, Logger, PlatformConstants, UserManager,
		MessageService, ModelDataSet, Deferred, AttachmentService) {

	return declare([ ApplicationHandlerBase, AsyncAwareMixin ], {

		_attachmentDefaultFolder : null,

		setAttachmentDefaultFolder : function(folderName) {
			_attachmentDefaultFolder = folderName;
		},

		init : function(eventContext) {
			var currentWorkOrder = eventContext.application.getResource(
					"workOrder").getCurrentRecord();
			var currDate = this.application.getCurrentDateTime();
			var day = currDate.getDate();
			var monthIndex = currDate.getMonth();
			var year = currDate.getFullYear();
			var hours = currDate.getHours();
			var minutes = currDate.getMinutes();
			var seconds = currDate.getSeconds();

			var wonum = currentWorkOrder.get("wonum");
			
			
			Logger.error("Entrou no INIT");
			Logger.error("WONUMMMMMMMMMMMMMMMMM");
			Logger.error("WONUM ANEXO" + wonum);
			
			var attachmentDefaultName = wonum + '' + year + '' + monthIndex
					+ '' + day + '' + hours + '' + minutes + '' + seconds;

			eventContext.getCurrentRecord().set('category',
					_attachmentDefaultFolder);
			eventContext.getCurrentRecord().setNullValue('description');
			eventContext.getCurrentRecord().set('name', attachmentDefaultName);

		},
		
		enableTakePhoto : function(eventContext) {
			var attachments = eventContext.application.getResource("attachments");
			eventContext.setDisplay(attachments.count() < 5);
			eventContext.setEnabled(attachments.count() < 5);
		},
		
		renderDeleteAttachmentActionIfNotLocked : function(eventContext) {
			eventContext.setDisplay(true);
		},
		
		yesDeleteRecordFromList : function(eventContext) {
			var workOrder = eventContext.application.getResource("workOrder");
			var attachments = eventContext.application.getResource("attachments");
			var currAttachment = attachments.getCurrentRecord();
			currAttachment.set('createby', 'DELETE');
			eventContext.ui.hideCurrentDialog();
			var ui = this.ui;
			/*
	         ModelService.save(attachments).always(function(result) {
	        	 currAttachment.deleteLocal();
	             ui.getCurrentViewControl().refresh();
			});
			*/
			var deferred = new Deferred();
	         ModelService.save(attachments).then(function(result){
					deferred.resolve();
					currAttachment.deleteLocal();
		             ui.getCurrentViewControl().refresh();
					 
					 Logger.error("Entrou no yesDeleteRecordFromList");
					 
			
				}).otherwise(function(error){
					deferred.reject(error);
				});
	         
		},
		
		hideDialog : function(eventContext){
			eventContext.ui.hideCurrentDialog();
		},
		
		resolveFileNameLabel : function(eventContext) {
			var record = eventContext.application.getResource('attachments').getCurrentRecord();

			Logger.error("Entrou no resolveFileNameLabel" + record);
			var name = '';
			if(record)
				name = record.get('fileName');
			return [ name ? name : ''  ];
		},

	});
});