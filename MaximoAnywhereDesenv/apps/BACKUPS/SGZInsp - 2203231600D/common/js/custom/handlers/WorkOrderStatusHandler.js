/*
 * Licensed Materials - Property of IBM
 * "Restricted Materials of IBM"
 *
 * 5725-M39
 *
 * (C) COPYRIGHT IBM CORP. 2013 All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp. 
 *
 */

define("application/business/WorkOrderStatusHandler", [ "dojo/_base/declare",
		"platform/model/state/MultiLabelStateMachineSupport",
		"platform/model/ModelService", "platform/logging/Logger" ], function(
		declare, MultiLabelStateMachineSupport, ModelService, Logger) {
	// TODO validate if user is allowed to perform all the status changes
	// between the 'from' and 'to'
	// FIXME site/org support?
	var thisClass = declare([ MultiLabelStateMachineSupport ], {
		/** @memberOf application.business.WorkOrderStatusHandler */
		init : function(modelDataSet) {
			var settings = {};
			settings.resourceName = "workOrder";
			settings.stateToAlias = {};
			
			/*
			 * SGZ PRODAM

			settings.configuration = {
				"WAPPR" : [ "APPR", "INPRG", "CAN", "COMP", "WMATL", "WAPPR" ],
				"APPR" : [ "INPRG", "APPR", "COMP", "WAPPR", "WMATL", "CAN" ],
				"INPRG" : [ "WMATL", "COMP", "WAPPR", "INPRG" ],
				"WSCH" : [ "INPRG", "COMP", "WAPPR", "WMATL", "APPR", "WSCH" ],
				"WMATL" : [ "INPRG", "COMP", "WAPPR", "CAN", "WMATL" ],
				"COMP" : [ "COMP" ],
				"CLOSE" : [ "CLOSE" ],
				"CAN" : [ "CAN" ]
			};
			
			*/
			
			settings.configuration = {
					//"WAPPR" : [ "APPR" ],
					//"APPR" : [ "INPRG", "WAPPR" ],
					//"INPRG" : [ "WAPPR" ],
					//"WSCH" : [ "INPRG", "COMP", "WAPPR", "WMATL", "APPR", "WSCH" ],
					//"WMATL" : [ "INPRG", "COMP", "WAPPR", "CAN", "WMATL" ],
					//"COMP" : [ "COMP" ],
					//"CLOSE" : [ "CLOSE" ],
					//"CAN" : [ "CAN" ],
					/*LINHA INCLUIDA POR RAJ EM 09/09/19 14h06*/
					//"WAPPR" : [ "WAPPR" ]
					"WAPPR" : [ "WAPPR", "PRECANC", "PLANEJAR", "AGINSP", "PREPLAN" ]
					//"WAPPR" : [ "PLANEJAR" ]
				};
/*"APPR", "INPRG", "CAN", "COMP", "WMATL", */
			settings.labelStateConfiguration = MultiLabelStateMachineSupport
					.fromModelDataSetToLabelStateConfiguration(modelDataSet,
							"value", "maxvalue", "description");
			this.setupMachine(settings);
		}
	});
	var instance = null;
	var WorkOrderStatusHandler = {};
	WorkOrderStatusHandler.getInstance = function() {
		if (!instance) {
			instance = new thisClass({});
			/* this is cached data */
			ModelService.all("domainwostatus").then(function(dataSet) {
				instance.init(dataSet);
			});
		}
		return instance;
	};

	return WorkOrderStatusHandler;
});
