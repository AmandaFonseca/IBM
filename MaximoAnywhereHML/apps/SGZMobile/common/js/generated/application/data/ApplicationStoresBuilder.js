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
// Build: 2023-08-26 15:18:38
//----------------------------------------------------------------//
define(   "generated/application/data/ApplicationStoresBuilder", 
      [
         "dojo/_base/declare", 
         "dojo/promise/all", 
         "platform/boot/data/_StoresBuilderBase", 
         "platform/store/ResourceMetadata", 
         "platform/store/PersistenceManager", 
         "application/business/WorkOrderObject", 
         "application/business/ClassStructureObject", 
         "application/business/AttachmentsObject", 
         "application/business/TaskObject", 
         "application/business/AssignmentObject", 
         "application/business/PlannedMaterialObject", 
         "application/business/PlannedToolObject", 
         "application/business/ActualLaborObject", 
         "application/business/ActualMaterialObject", 
         "application/business/ActualToolObject", 
         "application/business/WoStatusObject", 
         "application/business/CrewLaborObject", 
         "application/business/CrewToolObject", 
         "application/business/MaxDomainObject"
      ],

function(declare, all, StoresBuilderBase, ResourceMetadata, PersistenceManager, WorkOrderObject, ClassStructureObject, AttachmentsObject, TaskObject, AssignmentObject, PlannedMaterialObject, PlannedToolObject, ActualLaborObject, ActualMaterialObject, ActualToolObject, WoStatusObject, CrewLaborObject, CrewToolObject, MaxDomainObject) {
      return declare("generated.application.data.ApplicationStoresBuilder", StoresBuilderBase, {

         _buildStoresAsync : function(promise) {

            var resource001 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformLoginResource',
                  'resourceName' : 'PlatformLoginResource',
                  'id' : 'aw1792f489',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'username',
                  'index' : false,
                  'artifactId' : 'PlatformLoginResource_username_string',
                  'id' : 'awafcbeb63',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'password',
                  'index' : false,
                  'artifactId' : 'PlatformLoginResource_password_string',
                  'id' : 'awe076df82',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'errorMsg',
                  'index' : false,
                  'artifactId' : 'PlatformLoginResource_errorMsg_string',
                  'id' : 'awfacff206',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'appName',
                  'index' : false,
                  'artifactId' : 'PlatformLoginResource_appName_string',
                  'id' : 'awb387ae25',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'relogin',
                  'index' : false,
                  'artifactId' : 'PlatformLoginResource_relogin_boolean',
                  'id' : 'aw178aa51a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localPassword',
                  'index' : false,
                  'artifactId' : 'PlatformLoginResource_localPassword_string',
                  'id' : 'aw1d3649b5',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise001 = PersistenceManager.initCollection( resource001 );


            var resource002 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'SSODialogResource',
                  'resourceName' : 'SSODialogResource',
                  'id' : 'awafe1e4bb',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'platform' : 'true',
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'errorMsg',
                  'index' : false,
                  'artifactId' : 'SSODialogResource_errorMsg_string',
                  'id' : 'awa30b8002',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise002 = PersistenceManager.initCollection( resource002 );


            var resource003 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'DeviceSizeResource',
                  'resourceName' : 'DeviceSizeResource',
                  'id' : 'awbd8820b5',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'platform' : 'true',
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'int',
                  'name' : 'ppi',
                  'index' : false,
                  'artifactId' : 'DeviceSizeResource_ppi',
                  'id' : 'awa9e12d88',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'int',
                  'name' : 'width',
                  'index' : false,
                  'artifactId' : 'DeviceSizeResource_width',
                  'id' : 'aw688ff7e6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'int',
                  'name' : 'height',
                  'index' : false,
                  'artifactId' : 'DeviceSizeResource_height',
                  'id' : 'aw17110aa9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'layoutSize',
                  'index' : false,
                  'artifactId' : 'DeviceSizeResource_layout',
                  'id' : 'awd8668444',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'orientation',
                  'index' : false,
                  'artifactId' : 'DeviceSizeResource_orientation',
                  'id' : 'aw4e15b8b4',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'density',
                  'index' : false,
                  'artifactId' : 'DeviceSizeResource_density',
                  'id' : 'awffff30c8',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'pane0_layoutSize',
                  'index' : false,
                  'artifactId' : 'DeviceSizeResource_pane0_layout',
                  'id' : 'aw82cbe800',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'pane1_layoutSize',
                  'index' : false,
                  'artifactId' : 'DeviceSizeResource_pane1_layout',
                  'id' : 'aw4e61e89e',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise003 = PersistenceManager.initCollection( resource003 );


            var resource004 = new ResourceMetadata({
                  'defaultOrderBy' : 'wonum asc',
                  'pageSize' : 50,
                  'resourceName' : 'workOrder',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'hasManagedQuery' : 'true',
                  'artifactId' : 'workOrder',
                  'id' : 'aw900e7dbf',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : WorkOrderObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:amcrew,spi_wm:ms_emergency,spi_wm:ms_photosessionid,spi_wm:ms_psconfigid,spi_wm:ms_psversion,dcterms:identifier,dcterms:title,dcterms:description,spi_wm:pd_contractnum,spi_wm:woclass,spi_wm:ms_itemnum,spi_wm:origrecordid,spi_wm:origrecordclass,spi_wm:hasfollowupwork,oslc:shortTitle,dcterms:created,spi_wm:schedstart,spi_wm:schedfinish,spi_wm:actstart,spi_wm:actfinish,spi:status,spi_wm:worktype,spi_wm:wopriority,spi_wm:classstructureid,spi_wm:ms_reason,spi_wm:pd_obs,spi_wm:ms_aging,spi_wm:newchildclass,spi_wm:parentchgsstatus,spi_wm:ms_plate,spi_wm:ms_tslaborcode,spi_wm:ms_tsmembersqty,spi_wm:ms_tsstartdate,spi_wm:ms_tsstarttime,spi_wm:ms_tsfinishdate,spi_wm:ms_tsfinishtime,spi_wm:ms_tsremarks,spi_wm:ms_tsenterdate,spi_wm:ms_tsworkdate,spi_wm:pd_editmed,spi_wm:siteid,spi_wm:orgid,spi_wm:np_statusmemo,spi_wm:statusdate,spi_wm:istask,spi_wm:calculatedy,spi_wm:calculatedx,spi_wm:anywhereundo,spi:woserviceaddressmob{spi_wm:latitudey,spi_wm:addressline2,spi_wm:longitudex,spi_wm:staddrnumber,spi_wm:addressline3,spi_wm:stateprovince,spi_wm:city,spi_wm:description,spi_wm:formattedaddress,spi_wm:saddresscode,spi_wm:postalcode},spi_wm:parentwonummob{dcterms:title,oslc:shortTitle},spi:asset{dcterms:title,oslc:shortTitle},spi_wm:ms_woamtkdisch{spi_wm:ms_siteid,spi_wm:ms_finishlat,spi_wm:ms_wonum,spi_wm:ms_amticketid,spi_wm:ms_changedate,spi_wm:ms_startdate,spi_wm:ms_finishlong,spi_wm:ms_changeby,spi_wm:ms_plate,spi_wm:ms_startlat,spi_wm:ms_woamtkdischid,spi_wm:ms_startlong,spi_wm:ms_finishdate}').
               setSupportiveFieldsSelectExpression('spi_wm:ms_photosessionline{spi_wm:ms_photosessionlineid,spi_wm:ms_photosessionid,spi_wm:ms_parent,spi_wm:ms_required,spi_wm:ms_sequence,spi_wm:ms_description,spi_wm:ms_minqty},spi_wm:ms_doclinks{spi_wm:ms_anywhererefid,spi_wm:ms_photosessionid,spi_wm:ms_psconfigid,spi_wm:ms_version},spi_wm:task{spi_wm:taskid,dcterms:title,spi_wm:description_longdescription,spi:status,spi_wm:schedstart,spi_wm:parent,spi_wm:istask,spi_wm:statusdate,spi_wm:np_statusmemo,spi_wm:siteid,oslc:shortTitle,spi_wm:parentchgsstatus},spi_wm:assignmentmob{spi_wm:assignmentid,spi_wm:taskid,spi_wm:laborcode,spi_wm:laborname,spi_wm:craft,spi_wm:skilllevel,spi_wm:amcrew,spi_wm:amcrewtype,spi_wm:status,spi_wm:scheduledate,spi_wm:laborhrs,spi_wm:vendor,spi_wm:contractnum},spi_wm:wpmaterialmob{spi_wm:wpitemid,spi_wm:taskid,spi_wm:itemnum,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:linetype,spi_wm:directreq,spi_wm:itemsetid,spi_wm:storelocsite,spi_wm:requestnum},spi_wm:wptoolmob{spi_wm:wpitemid,spi_wm:itemnum,spi_wm:taskid,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:hours,spi_wm:linetype,spi_wm:itemsetid},spi_wm:actuallabormob{dcterms:identifier,spi_wm:taskid,spi_wm:laborcode,foaf:name,spi_wm:craft,spi_wm:skilllevel,spi_wm:vendor,spi_wm:contractnum,spi_wm:revisionnum,spi_wm:amcrew,spi_wm:position,spi_wm:startdate,spi_wm:starttime,spi_wm:finishdate,spi_wm:finishtime,spi_wm:regularhrs,spi_wm:premiumpayhours,spi_wm:premiumpaycode,spi_wm:transtype,spi_wm:timerstatus,spi_wm:anywhererefid},spi_wm:actualmaterialmob{dcterms:identifier,spi_wm:itemsetid,spi_wm:taskid,spi_wm:itemnum,dcterms:title,spi_wm:positivequantity,spi_wm:linetype,spi_wm:storeloc,spi_wm:binnum,spi_wm:rotassetnum,spi_wm:tositeid,spi_wm:anywhererefid,spi_wm:requestnum,spi_wm:enteredastask},spi_wm:actualtoolmob{dcterms:identifier,spi_wm:taskid,spi_wm:toolhrs,spi_wm:rotassetnum,spi_wm:amcrew,spi_wm:itemsetid,spi_wm:anywhererefid,spi_wm:plusctechnician,spi_wm:plusccomment,spi_wm:pluscduedate,spi_wm:plusctoolusedate,spi_wm:transdate,spi_wm:pluscexpirydate,spi_wm:plusclotnum,spi_wm:pluscmanufacturer,spi_wm:plusctype,spi_wm:rotassetsite,spi:toolitem{spi:itemnum,dcterms:title,spi:pluscsolution}},spi:attachments{oslc_cm:attachmentSize,dcterms:title,spi:fileName,dcterms:description,dcterms:created,spi:urlType,spi:docType,spi:printthrulink,spi:contentLocation,spi:anywhererefid,spi:createby},spi_wm:workorderspec{spi_wm:pd_spec_required,spi_wm:workorderspecid,spi_wm:classstructureid,spi_wm:mandatory,spi_wm:refobjectname,spi_wm:orgid,spi_wm:changedate,spi_wm:displaysequence,spi_wm:changeby,spi_wm:refobjectid,spi_wm:numvalue,spi_wm:alnvalue,spi_wm:tablevalue,spi_wm:section,spi_wm:measureunitid,spi_wm:anywhererefid,spi_wm:classspec{spi_wm:domainid,spi_wm:classspecid{spi_wm:classspecid}},spi_wm:assetattr{spi_wm:assetattrid,spi_wm:description,spi_wm:datatype}},spi:assetspec{spi_wm:assetspecid,spi_wm:classstructureid,spi_wm:mandatory,spi_wm:orgid,spi_wm:changedate,spi_wm:displaysequence,spi_wm:changeby,spi_wm:numvalue,spi_wm:alnvalue,spi_wm:tablevalue,spi_wm:section,spi_wm:linearassetspecid,spi_wm:measureunitid,spi_wm:anywhererefid,spi_wm:assetattrspec{spi_wm:assetattrid,spi_wm:domainid,spi_wm:description,spi_wm:datatype}}').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'amcrew',
                  'index' : false,
                  'artifactId' : 'workOrder_identifier_spi_wm_amcrew',
                  'maxSize' : 8,
                  'id' : 'awff3265cd',
                  'local' : false,
                  'remoteName' : 'spi_wm:amcrew',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ms_emergency',
                  'index' : false,
                  'artifactId' : 'workOrder_identifier_spi_wm_ms_emergency',
                  'id' : 'aw8ddc3e53',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_emergency',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_photosessionid',
                  'index' : false,
                  'artifactId' : 'workOrder_identifier_spi_wm_ms_photosessionid',
                  'maxSize' : 30,
                  'id' : 'aw428b9deb',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_photosessionid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_psconfigid',
                  'index' : false,
                  'artifactId' : 'workOrder_identifier_spi_wm_ms_ms_psconfigid',
                  'maxSize' : 10,
                  'id' : 'aw23dbfe2e',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_psconfigid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_psversion',
                  'index' : false,
                  'artifactId' : 'workOrder_identifier_spi_wm_ms_ms_psversion',
                  'id' : 'awde4b33f',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_psversion',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'photosessionlineResource',
                  'name' : 'atcsessionlist',
                  'index' : false,
                  'artifactId' : 'workOrder_atcsessionlist_spi_ms_photosessionline',
                  'id' : 'aw3ab5f6a5',
                  'describedByResource' : 'photosessionlineResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_photosessionline',
                  'selectExpression' : 'spi_wm:ms_photosessionline{spi_wm:ms_photosessionlineid,spi_wm:ms_photosessionid,spi_wm:ms_parent,spi_wm:ms_required,spi_wm:ms_sequence,spi_wm:ms_description,spi_wm:ms_minqty}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'msDoclinksResource',
                  'name' : 'msdoclinkslist',
                  'index' : false,
                  'artifactId' : 'workOrder_msdoclinkslist_spi_ms_doclinks',
                  'id' : 'aw2efdbad4',
                  'describedByResource' : 'msDoclinksResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_doclinks',
                  'selectExpression' : 'spi_wm:ms_doclinks{spi_wm:ms_anywhererefid,spi_wm:ms_photosessionid,spi_wm:ms_psconfigid,spi_wm:ms_version}',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'workOrder_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awb2f0cf08',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'descriptionChanged',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'workOrder_description_dctermstitle',
                  'maxSize' : 255,
                  'id' : 'awa40073b2',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'descriptionChanged',
                  'dataType' : 'string',
                  'usage' : 'longaln',
                  'name' : 'longdescription',
                  'index' : false,
                  'artifactId' : 'workOrder_longdescription_dctermsdescription',
                  'maxSize' : 32000,
                  'id' : 'aw31fa6efc',
                  'local' : false,
                  'remoteName' : 'dcterms:description',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'pd_contractnum',
                  'index' : false,
                  'artifactId' : 'workOrder_pd_contractnum_spi_wmpd_contractnum',
                  'maxSize' : 8,
                  'id' : 'awa304113e',
                  'local' : false,
                  'remoteName' : 'spi_wm:pd_contractnum',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'woclass',
                  'index' : true,
                  'artifactId' : 'workOrder_woclass_spi_wmwoclass',
                  'maxSize' : 16,
                  'id' : 'aw9472daee',
                  'local' : false,
                  'remoteName' : 'spi_wm:woclass',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_itemnum',
                  'index' : false,
                  'artifactId' : 'workOrder_woclass_spi_wmms_itemnum',
                  'maxSize' : 30,
                  'id' : 'aw4cbc77a2',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_itemnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'origrecordid',
                  'index' : false,
                  'artifactId' : 'workOrder_origrecordid_spi_wmorigrecordid',
                  'maxSize' : 20,
                  'id' : 'aw9c1c9dfb',
                  'local' : false,
                  'remoteName' : 'spi_wm:origrecordid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'origrecordclass',
                  'index' : false,
                  'artifactId' : 'workOrder_origrecordclass_spi_wmorigrecordclass',
                  'maxSize' : 16,
                  'id' : 'awda5d162e',
                  'local' : false,
                  'remoteName' : 'spi_wm:origrecordclass',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'hasfollowupwork',
                  'index' : false,
                  'artifactId' : 'workOrder_hasfollowupwork_spi_wmhasfollowupwork',
                  'id' : 'aw7a7d2280',
                  'local' : false,
                  'remoteName' : 'spi_wm:hasfollowupwork',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'wonum',
                  'index' : true,
                  'artifactId' : 'workOrder_wonum_oslcshortTitle',
                  'maxSize' : 20,
                  'id' : 'awf24d5b27',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'method' : 'assetChanged',
                  'referenceResource' : 'additionalasset',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'index' : true,
                  'maxSize' : 12,
                  'local' : false,
                  'name' : 'asset',
                  'artifactId' : 'workOrder_asset_spiassetoslcshortTitle',
                  'id' : 'aw9e7d98a4',
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'referenceResource' : 'additionalasset',
                  'dataType' : 'reference',
                  'name' : 'maxassetdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_maxassetdesc_spiassetdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw2f631e36',
                  'local' : false,
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'creationDate',
                  'index' : false,
                  'artifactId' : 'workOrder_creationDate_dctermscreated',
                  'id' : 'awe588157b',
                  'local' : false,
                  'remoteName' : 'dcterms:created',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'schedStartChanged',
                  'dataType' : 'datetime',
                  'name' : 'starttime',
                  'index' : false,
                  'artifactId' : 'workOrder_starttime_spi_wmschedstart',
                  'id' : 'aw4989cc05',
                  'local' : false,
                  'remoteName' : 'spi_wm:schedstart',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'schedFinishChanged',
                  'dataType' : 'datetime',
                  'name' : 'finishtime',
                  'index' : false,
                  'artifactId' : 'workOrder_finishtime_spi_wmschedfinish',
                  'id' : 'awede42224',
                  'local' : false,
                  'remoteName' : 'spi_wm:schedfinish',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'actstart',
                  'index' : false,
                  'artifactId' : 'workOrder_actstart_spi_wmactstart',
                  'id' : 'awf80efaf0',
                  'local' : false,
                  'remoteName' : 'spi_wm:actstart',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'actfinish',
                  'index' : false,
                  'artifactId' : 'workOrder_actfinish_spi_wmactfinish',
                  'id' : 'aw1869033a',
                  'local' : false,
                  'remoteName' : 'spi_wm:actfinish',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'statusChanged',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'status',
                  'index' : true,
                  'artifactId' : 'workOrder_status_spistatus',
                  'maxSize' : 16,
                  'id' : 'awedad2b53',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'worktype',
                  'index' : false,
                  'artifactId' : 'workOrder_worktype_spi_wmworktype',
                  'maxSize' : 5,
                  'id' : 'aw6efbd375',
                  'local' : false,
                  'remoteName' : 'spi_wm:worktype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'priority',
                  'index' : true,
                  'artifactId' : 'workOrder_priority_spi_wmwopriority',
                  'id' : 'aw400a364c',
                  'local' : false,
                  'remoteName' : 'spi_wm:wopriority',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classstructureid',
                  'index' : false,
                  'artifactId' : 'workOrder_classstructureid_spi_wmclassstructureid',
                  'maxSize' : 20,
                  'id' : 'aw8e48db05',
                  'local' : false,
                  'remoteName' : 'spi_wm:classstructureid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:formattedaddress',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'woserviceaddress',
                  'index' : false,
                  'artifactId' : 'workOrder_woserviceaddress_spiwoserviceaddressspi_wmformattedaddress',
                  'maxSize' : 150,
                  'id' : 'aw4b373dec',
                  'local' : false,
                  'remoteName' : 'spi:woserviceaddressmob',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:saddresscode',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrder',
                  'name' : 'woserviceaddresscode',
                  'index' : false,
                  'artifactId' : 'workOrder_woserviceaddresscode_spiwoserviceaddressspi_wmsaddresscode',
                  'maxSize' : 12,
                  'id' : 'aw2fdc547d',
                  'local' : false,
                  'remoteName' : 'spi:woserviceaddressmob',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:description',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'woserviceaddressdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_woserviceaddressdesc_spiwoserviceaddressspi_wmdescription',
                  'maxSize' : 50,
                  'id' : 'aw2021f264',
                  'local' : false,
                  'remoteName' : 'spi:woserviceaddressmob',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:addressline2',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'woserviceaddressline2',
                  'index' : false,
                  'artifactId' : 'workOrder_woserviceaddressaddressline2_spiwoserviceaddressspi_addressline2',
                  'maxSize' : 255,
                  'id' : 'aw81b4de0b',
                  'local' : false,
                  'remoteName' : 'spi:woserviceaddressmob',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:staddrnumber',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'woservicetaddrnumber',
                  'index' : false,
                  'artifactId' : 'workOrder_woserviceaddressstaddrnumber_spiwoserviceaddressspi_staddrnumber',
                  'maxSize' : 9,
                  'id' : 'aw4fe63752',
                  'local' : false,
                  'remoteName' : 'spi:woserviceaddressmob',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:addressline3',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'woserviceaddressline3',
                  'index' : false,
                  'artifactId' : 'workOrder_woserviceaddressaddressline3_spiwoserviceaddressspi_addressline3',
                  'maxSize' : 255,
                  'id' : 'aw7643f982',
                  'local' : false,
                  'remoteName' : 'spi:woserviceaddressmob',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:postalcode',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'woservicepostalcode',
                  'index' : false,
                  'artifactId' : 'workOrder_woserviceaddresspostalcode_spiwoserviceaddressspi_postalcode',
                  'maxSize' : 12,
                  'id' : 'aw2642889e',
                  'local' : false,
                  'remoteName' : 'spi:woserviceaddressmob',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:city',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrder',
                  'name' : 'woservicecity',
                  'index' : false,
                  'artifactId' : 'workOrder_woserviceaddresscity_spiwoserviceaddressspi_city',
                  'maxSize' : 36,
                  'id' : 'aw8e5eade0',
                  'local' : false,
                  'remoteName' : 'spi:woserviceaddressmob',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:stateprovince',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrder',
                  'name' : 'woservicestateprovince',
                  'index' : false,
                  'artifactId' : 'workOrder_woserviceaddressstateprovince_spiwoserviceaddressspi_stateprovince',
                  'maxSize' : 25,
                  'id' : 'aw576c7432',
                  'local' : false,
                  'remoteName' : 'spi:woserviceaddressmob',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'motivo',
                  'index' : false,
                  'artifactId' : 'workOrder_spi_ms_reason',
                  'maxSize' : 300,
                  'id' : 'aw830d830b',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_reason',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'pd_obs',
                  'index' : false,
                  'artifactId' : 'workOrder_spi_pd_obs',
                  'maxSize' : 400,
                  'id' : 'aw7611ca86',
                  'local' : false,
                  'remoteName' : 'spi_wm:pd_obs',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_aging',
                  'index' : false,
                  'artifactId' : 'workOrder_spi_ms_aging',
                  'id' : 'awa3812c10',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_aging',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'newchildclass',
                  'index' : false,
                  'artifactId' : 'workOrder_spi_newchildclass',
                  'maxSize' : 16,
                  'id' : 'awaa65362d',
                  'local' : false,
                  'remoteName' : 'spi_wm:newchildclass',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'parentchgsstatus',
                  'index' : false,
                  'artifactId' : 'workOrder_spi_wmparentchgsstatus',
                  'id' : 'awe50d42f1',
                  'local' : false,
                  'remoteName' : 'spi_wm:parentchgsstatus',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_woplate',
                  'index' : false,
                  'artifactId' : 'workOrder_spi_wm_ms_plate',
                  'maxSize' : 8,
                  'id' : 'aw1485e03f',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_plate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:ms_wonum',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrder',
                  'name' : 'ms_wonum',
                  'index' : false,
                  'artifactId' : 'workOrder_ms_wonum',
                  'maxSize' : 20,
                  'id' : 'awc6301412',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_woamtkdisch',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:ms_amticketid',
                  'dataType' : 'inline',
                  'usage' : 'bigint',
                  'referenceResource' : 'workOrder',
                  'name' : 'ms_amticketid',
                  'index' : false,
                  'artifactId' : 'workOrder_ms_amticketid',
                  'id' : 'aw86f9f121',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_woamtkdisch',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:ms_startdate',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'ms_startdate',
                  'index' : false,
                  'artifactId' : 'workOrder_ms_startdate',
                  'id' : 'aw1c603b67',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_woamtkdisch',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:ms_finishdate',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'ms_finishdate',
                  'index' : false,
                  'artifactId' : 'workOrder_ms_finishdate',
                  'id' : 'awbafeb488',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_woamtkdisch',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:ms_woamtkdischid',
                  'dataType' : 'inline',
                  'usage' : 'bigint',
                  'referenceResource' : 'workOrder',
                  'name' : 'ms_woamtkdischid',
                  'index' : false,
                  'artifactId' : 'workOrder_ms_woamtkdischid',
                  'id' : 'awffa62d88',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_woamtkdisch',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:ms_siteid',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrder',
                  'name' : 'ms_wositeid',
                  'index' : false,
                  'artifactId' : 'workOrder_ms_siteid',
                  'maxSize' : 8,
                  'id' : 'aw389d6da9',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_woamtkdisch',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:ms_changedate',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'ms_changedate',
                  'index' : false,
                  'artifactId' : 'workOrder_ms_changedate',
                  'id' : 'aw37fcc391',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_woamtkdisch',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:ms_changeby',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrder',
                  'name' : 'ms_changeby',
                  'index' : false,
                  'artifactId' : 'workOrder_ms_changeby',
                  'maxSize' : 30,
                  'id' : 'aw6c177538',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_woamtkdisch',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:ms_plate',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrder',
                  'name' : 'ms_tkwoplate',
                  'index' : false,
                  'artifactId' : 'workOrder_ms_plate',
                  'maxSize' : 8,
                  'id' : 'aw7a3999a2',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_woamtkdisch',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_tslaborcode',
                  'index' : false,
                  'artifactId' : 'workOrder_TS_ms_tslaborcode',
                  'maxSize' : 30,
                  'id' : 'awc7e4ce8f',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_tslaborcode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_tsmembersqty',
                  'index' : false,
                  'artifactId' : 'workOrder_TS_tsmembersqty',
                  'id' : 'aw6d68a055',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_tsmembersqty',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'usage' : 'date',
                  'name' : 'ms_tsstartdate',
                  'index' : false,
                  'artifactId' : 'workOrder_TS_tsstartdate',
                  'id' : 'aw8adc1b2b',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_tsstartdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'usage' : 'time',
                  'name' : 'ms_tsstarttime',
                  'index' : false,
                  'artifactId' : 'workOrder_TS_tsstarttime',
                  'id' : 'aw4fd6b414',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_tsstarttime',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'usage' : 'date',
                  'name' : 'ms_tsfinishdate',
                  'index' : false,
                  'artifactId' : 'workOrder_TS_tsfinishdate',
                  'id' : 'awc5020513',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_tsfinishdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'usage' : 'time',
                  'name' : 'ms_tsfinishtime',
                  'index' : false,
                  'artifactId' : 'workOrder_TS_tsfinishtime',
                  'id' : 'aw8aa2c',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_tsfinishtime',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'ms_tsremarks',
                  'index' : false,
                  'artifactId' : 'workOrder_TS_ms_tsremarks',
                  'maxSize' : 256,
                  'id' : 'aw12e20a46',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_tsremarks',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'ms_tsenterdate',
                  'index' : false,
                  'artifactId' : 'workOrder_TS_ms_tsenterdate',
                  'id' : 'awca79e708',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_tsenterdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'usage' : 'date',
                  'name' : 'ms_tsworkdate',
                  'index' : false,
                  'artifactId' : 'workOrder_TS_ms_tsworkdate',
                  'id' : 'aw13739e62',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_tsworkdate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'pd_editmed',
                  'index' : false,
                  'artifactId' : 'workOrder_TS_pd_editmed',
                  'id' : 'aw29750136',
                  'local' : false,
                  'remoteName' : 'spi_wm:pd_editmed',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrder',
                  'name' : 'parentwonum',
                  'index' : false,
                  'artifactId' : 'workOrder_parentwonum_spi_wmparentwonumoslcshortTitle',
                  'maxSize' : 20,
                  'id' : 'aw5e0821d4',
                  'local' : false,
                  'remoteName' : 'spi_wm:parentwonummob',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'workOrder',
                  'name' : 'parentwonumDesc',
                  'index' : false,
                  'artifactId' : 'workOrder_parentwonumDesc_spi_wmparentwonumctermstitle',
                  'maxSize' : 255,
                  'id' : 'aw36e68aa4',
                  'local' : false,
                  'remoteName' : 'spi_wm:parentwonummob',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'workOrder_siteid_spi_wmsiteid',
                  'maxSize' : 8,
                  'id' : 'aw832890e6',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'workOrder_orgid_spi_wmorgid',
                  'maxSize' : 8,
                  'id' : 'awfda01d79',
                  'local' : false,
                  'remoteName' : 'spi_wm:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'memo',
                  'index' : false,
                  'artifactId' : 'workOrder_memo_spi_wmnp_statusmemo',
                  'maxSize' : 50,
                  'id' : 'aw91d527aa',
                  'local' : false,
                  'remoteName' : 'spi_wm:np_statusmemo',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'changestatusdate',
                  'index' : false,
                  'artifactId' : 'workOrder_changestatusdate_spi_wmstatusdate',
                  'id' : 'aw88732',
                  'local' : false,
                  'remoteName' : 'spi_wm:statusdate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'istask',
                  'index' : true,
                  'artifactId' : 'workOrder_istask_spi_wmistask',
                  'id' : 'awdf17d26f',
                  'local' : false,
                  'remoteName' : 'spi_wm:istask',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'taskResource',
                  'name' : 'tasklist',
                  'index' : false,
                  'artifactId' : 'workOrder_tasklist_spi_wmtask',
                  'id' : 'aw6091f170',
                  'describedByResource' : 'taskResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:task',
                  'selectExpression' : 'spi_wm:task{spi_wm:taskid,dcterms:title,spi_wm:description_longdescription,spi:status,spi_wm:schedstart,spi_wm:parent,spi_wm:istask,spi_wm:statusdate,spi_wm:np_statusmemo,spi_wm:siteid,oslc:shortTitle,spi_wm:parentchgsstatus}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'assignmentResource',
                  'name' : 'assignmentlist',
                  'index' : false,
                  'artifactId' : 'workOrder_assignmentlist_spi_wmassignment',
                  'id' : 'awd6eb9ac7',
                  'describedByResource' : 'assignmentResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:assignmentmob',
                  'selectExpression' : 'spi_wm:assignmentmob{spi_wm:assignmentid,spi_wm:taskid,spi_wm:laborcode,spi_wm:laborname,spi_wm:craft,spi_wm:skilllevel,spi_wm:amcrew,spi_wm:amcrewtype,spi_wm:status,spi_wm:scheduledate,spi_wm:laborhrs,spi_wm:vendor,spi_wm:contractnum}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'plannedMaterialResource',
                  'name' : 'materiallist',
                  'index' : false,
                  'artifactId' : 'workOrder_materiallist_spi_wmwpmaterial',
                  'id' : 'awd458a520',
                  'describedByResource' : 'plannedMaterialResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:wpmaterialmob',
                  'selectExpression' : 'spi_wm:wpmaterialmob{spi_wm:wpitemid,spi_wm:taskid,spi_wm:itemnum,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:linetype,spi_wm:directreq,spi_wm:itemsetid,spi_wm:storelocsite,spi_wm:requestnum}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'plannedToolResource',
                  'name' : 'toollist',
                  'index' : false,
                  'artifactId' : 'workOrder_toollist_spi_wmwptool',
                  'id' : 'aw48aaa59e',
                  'describedByResource' : 'plannedToolResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:wptoolmob',
                  'selectExpression' : 'spi_wm:wptoolmob{spi_wm:wpitemid,spi_wm:itemnum,spi_wm:taskid,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:hours,spi_wm:linetype,spi_wm:itemsetid}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'actualLaborResource',
                  'name' : 'actuallaborlist',
                  'index' : false,
                  'artifactId' : 'workOrder_actuallaborlist_spi_wmactuallabor',
                  'id' : 'awc1321270',
                  'describedByResource' : 'actualLaborResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:actuallabormob',
                  'selectExpression' : 'spi_wm:actuallabormob{dcterms:identifier,spi_wm:taskid,spi_wm:laborcode,foaf:name,spi_wm:craft,spi_wm:skilllevel,spi_wm:vendor,spi_wm:contractnum,spi_wm:revisionnum,spi_wm:amcrew,spi_wm:position,spi_wm:startdate,spi_wm:starttime,spi_wm:finishdate,spi_wm:finishtime,spi_wm:regularhrs,spi_wm:premiumpayhours,spi_wm:premiumpaycode,spi_wm:transtype,spi_wm:timerstatus,spi_wm:anywhererefid}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'actualMaterialResource',
                  'name' : 'actualmateriallist',
                  'index' : false,
                  'artifactId' : 'workOrder_actualmateriallist_spi_wmactualmaterial',
                  'id' : 'aw9693fa7a',
                  'describedByResource' : 'actualMaterialResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:actualmaterialmob',
                  'selectExpression' : 'spi_wm:actualmaterialmob{dcterms:identifier,spi_wm:itemsetid,spi_wm:taskid,spi_wm:itemnum,dcterms:title,spi_wm:positivequantity,spi_wm:linetype,spi_wm:storeloc,spi_wm:binnum,spi_wm:rotassetnum,spi_wm:tositeid,spi_wm:anywhererefid,spi_wm:requestnum,spi_wm:enteredastask}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'actualToolResource',
                  'name' : 'actualtoollist',
                  'index' : false,
                  'artifactId' : 'workOrder_actualtoollist_spi_wmactualtool',
                  'id' : 'aw3c201f14',
                  'describedByResource' : 'actualToolResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:actualtoolmob',
                  'selectExpression' : 'spi_wm:actualtoolmob{dcterms:identifier,spi_wm:taskid,spi_wm:toolhrs,spi_wm:rotassetnum,spi_wm:amcrew,spi_wm:itemsetid,spi_wm:anywhererefid,spi_wm:plusctechnician,spi_wm:plusccomment,spi_wm:pluscduedate,spi_wm:plusctoolusedate,spi_wm:transdate,spi_wm:pluscexpirydate,spi_wm:plusclotnum,spi_wm:pluscmanufacturer,spi_wm:plusctype,spi_wm:rotassetsite,spi:toolitem{spi:itemnum,dcterms:title,spi:pluscsolution}}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'attachments',
                  'name' : 'attachments',
                  'index' : false,
                  'artifactId' : 'workOrder_attachments_spiattachments',
                  'id' : 'aw41ffb0ef',
                  'describedByResource' : 'attachments',
                  'local' : false,
                  'remoteName' : 'spi:attachments',
                  'selectExpression' : 'spi:attachments{oslc_cm:attachmentSize,dcterms:title,spi:fileName,dcterms:description,dcterms:created,spi:urlType,spi:docType,spi:printthrulink,spi:contentLocation,spi:anywhererefid,spi:createby}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrderSpecResource',
                  'name' : 'workOrderSpec',
                  'index' : false,
                  'artifactId' : 'workOrder_workOrderSpec_spi_wmworkorderspec',
                  'id' : 'aw6dc3dda2',
                  'describedByResource' : 'workOrderSpecResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:workorderspec',
                  'selectExpression' : 'spi_wm:workorderspec{spi_wm:pd_spec_required,spi_wm:workorderspecid,spi_wm:classstructureid,spi_wm:mandatory,spi_wm:refobjectname,spi_wm:orgid,spi_wm:changedate,spi_wm:displaysequence,spi_wm:changeby,spi_wm:refobjectid,spi_wm:numvalue,spi_wm:alnvalue,spi_wm:tablevalue,spi_wm:section,spi_wm:measureunitid,spi_wm:anywhererefid,spi_wm:classspec{spi_wm:domainid,spi_wm:classspecid{spi_wm:classspecid}},spi_wm:assetattr{spi_wm:assetattrid,spi_wm:description,spi_wm:datatype}}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'assetSpecResource',
                  'name' : 'assetSpec',
                  'index' : false,
                  'artifactId' : 'workOrder_assetSpecResource_spi_assetSpecResource',
                  'id' : 'aw34954640',
                  'describedByResource' : 'assetSpecResource',
                  'local' : false,
                  'remoteName' : 'spi:assetspec',
                  'selectExpression' : 'spi:assetspec{spi_wm:assetspecid,spi_wm:classstructureid,spi_wm:mandatory,spi_wm:orgid,spi_wm:changedate,spi_wm:displaysequence,spi_wm:changeby,spi_wm:numvalue,spi_wm:alnvalue,spi_wm:tablevalue,spi_wm:section,spi_wm:linearassetspecid,spi_wm:measureunitid,spi_wm:anywhererefid,spi_wm:assetattrspec{spi_wm:assetattrid,spi_wm:domainid,spi_wm:description,spi_wm:datatype}}',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'latitudey',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'workOrder_latitudey_spi_wmcalculatedy',
                  'id' : 'aw1e3578f0',
                  'local' : false,
                  'remoteName' : 'spi_wm:calculatedy',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'longitudex',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'workOrder_longitudex_spi_wmcalculatedx',
                  'id' : 'aw2460878c',
                  'local' : false,
                  'remoteName' : 'spi_wm:calculatedx',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:formattedaddress',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'formattedaddress',
                  'index' : false,
                  'artifactId' : 'workOrder_formattedaddress_spiwoserviceaddressspi_wmformattedaddress',
                  'maxSize' : 150,
                  'id' : 'awd70f51b8',
                  'local' : false,
                  'remoteName' : 'spi:woserviceaddressmob',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:longitudex',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'WOSAlongitudex',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'workOrder_woserviceaddressx_longitudex',
                  'id' : 'aw771f9b7d',
                  'local' : false,
                  'remoteName' : 'spi:woserviceaddressmob',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:latitudey',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'WOSAlatitudey',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'workOrder_woserviceaddressy_latitudey',
                  'id' : 'awa536442',
                  'local' : false,
                  'remoteName' : 'spi:woserviceaddressmob',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:ms_startlat',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'ms_startlaty',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'workOrder_ms_startlat',
                  'id' : 'awd2324aa',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_woamtkdisch',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:ms_startlong',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'ms_startlongx',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'workOrder_ms_startlong',
                  'id' : 'aw8d69a575',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_woamtkdisch',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:ms_finishlat',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'ms_finishlaty',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'workOrder_ms_finishlat',
                  'id' : 'aw2ffbac0f',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_woamtkdisch',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:ms_finishlong',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'ms_finishlongx',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'workOrder_ms_finishlong',
                  'id' : 'aw2bf72a9a',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_woamtkdisch',
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'statusDate',
                  'index' : false,
                  'artifactId' : 'workOrder_statusDate_dateTime',
                  'id' : 'awb952a237',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'started',
                  'index' : false,
                  'artifactId' : 'workOrder_started_boolean',
                  'id' : 'awb0004d61',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'wonumanddescription',
                  'index' : false,
                  'artifactId' : 'workOrder_wonumanddescription_string',
                  'id' : 'aw2e3c91f1',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetnumanddescription',
                  'index' : false,
                  'artifactId' : 'workOrder_assetnumanddescription_string',
                  'id' : 'aw8872bae8',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationanddescription',
                  'index' : false,
                  'artifactId' : 'workOrder_locationanddescription_string',
                  'id' : 'aw923db8cc',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'internalStatus',
                  'index' : false,
                  'artifactId' : 'workOrder_internalStatus_string',
                  'id' : 'awa390f35c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'statusdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_statusdesc_string',
                  'id' : 'aw8ceb99f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'descriptionModified',
                  'index' : false,
                  'artifactId' : 'workOrder_descriptionModified_boolean',
                  'id' : 'aw58710423',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_locationdesc_string',
                  'id' : 'aw61b12b1f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_assetdesc_string',
                  'id' : 'aw46e646e9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'failureClass',
                  'index' : false,
                  'artifactId' : 'workOrder_failureClass_string',
                  'id' : 'awddccafaf',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'failuredesc',
                  'index' : false,
                  'artifactId' : 'workOrder_failuredesc_string',
                  'id' : 'awaa508bf7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'starttimeISO',
                  'formula' : '${starttime}',
                  'index' : true,
                  'artifactId' : 'workOrder_starttimeISO_string',
                  'id' : 'aw473f3b38',
                  'persistent' : true,
                  'local' : true,
                  'remoteName' : 'spi_wm:schedstart',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localAssetLd',
                  'formula' : '${assetld}',
                  'index' : false,
                  'artifactId' : 'workOrder_localAssetLd_string',
                  'id' : 'aw5ac2de06',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localLocationLd',
                  'formula' : '${locationld}',
                  'index' : false,
                  'artifactId' : 'workOrder_localLocationLd_string',
                  'id' : 'aw18c75f37',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'currentFCType',
                  'index' : false,
                  'artifactId' : 'workOrder_currentFCType_string',
                  'id' : 'awd2140c3a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'currentFCDesc',
                  'index' : false,
                  'artifactId' : 'workOrder_currentFCDesc_string',
                  'id' : 'awbe929cd5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'wohistorymultiasset',
                  'index' : false,
                  'artifactId' : 'workOrder_wohistorymultiasset_string',
                  'id' : 'awe27130e1',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'wohistorymultiassetdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_wohistorymultiassetdesc_string',
                  'id' : 'aw1b64f0ac',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'wohistorymultilocation',
                  'index' : false,
                  'artifactId' : 'workOrder_wohistorymultilocation_string',
                  'id' : 'aw44112b7d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'wohistorymultilocationdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_wohistorymultilocationdesc_string',
                  'id' : 'awa6c98f5b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'totalWOHistory',
                  'index' : false,
                  'artifactId' : 'workOrder_totalWOHistory_string',
                  'id' : 'aw59f2794c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'tasklistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_tasklistsize_string',
                  'id' : 'aw35d9fb26',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'sketchlistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_sketchlistsize_string',
                  'id' : 'aw4e8b846e',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assignmentlistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_assignmentlistsize_string',
                  'id' : 'aw2079e81e',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'materiallistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_materiallistsize_string',
                  'id' : 'awdf5330e1',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'toollistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_toollistsize_string',
                  'id' : 'aw5344e0f6',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'actuallaborlistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_actuallaborlistsize_string',
                  'id' : 'aw514e42a4',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'actualmateriallistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_actualmateriallistsize_string',
                  'id' : 'aw20868964',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'actualtoollistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_actualtoollistsize_string',
                  'id' : 'aw945b8a4c',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'workloglistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_workloglistsize_string',
                  'id' : 'aw98312042',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'multiassetloclistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_multiassetloclistsize_string',
                  'id' : 'aw1dfc8d54',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'meterslistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_meterslistsize_string',
                  'id' : 'awe602c7e3',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'attachmentssize',
                  'index' : false,
                  'artifactId' : 'workOrder_attachmentssize_string',
                  'id' : 'aw97031f2c',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'datasheetlistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_datasheetlistsize_string',
                  'id' : 'aw7ae8b626',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'classification',
                  'index' : false,
                  'artifactId' : 'workOrder_classification_string',
                  'id' : 'aw80e170b0',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'classificationdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_classificationdesc_string',
                  'id' : 'awcab29fc5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'classificationpath',
                  'index' : false,
                  'artifactId' : 'workOrder_classificationpath_string',
                  'id' : 'awe47df969',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'fcproblem',
                  'index' : false,
                  'artifactId' : 'workOrder_fcproblem_string',
                  'id' : 'awe9122538',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'fccause',
                  'index' : false,
                  'artifactId' : 'workOrder_fccause_string',
                  'id' : 'awa2d2eb45',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'fcremedy',
                  'index' : false,
                  'artifactId' : 'workOrder_fcremedy_string',
                  'id' : 'awb27d78b3',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'asfoundstatus',
                  'index' : false,
                  'artifactId' : 'workOrder_asfoundstatus_string',
                  'id' : 'aw310529c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'asleftstatus',
                  'index' : false,
                  'artifactId' : 'workOrder_asleftstatus_string',
                  'id' : 'aw35d79700',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'wohistorylistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_wohistorylistsize_string',
                  'id' : 'aw68eeed5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'boolean',
                  'name' : 'anywhereundo',
                  'index' : true,
                  'artifactId' : 'workOrder_anywhereundo',
                  'id' : 'awa892ef7c',
                  'local' : false,
                  'remoteName' : 'spi_wm:anywhereundo',
               }).
               setCreationFactories([
                     {name:'createMyAssignedWork', creationString:'\/oslc\/os\/ms_oslcsgzmobile' }
               ]).
               setQueryBases([
                     {name:'searchAllWorkOrders', queryString:'\/oslc\/os\/ms_oslcsgzmobile?savedQuery=getWithComplexQuery', defaultForSearch: true, queryLabel:'' },
                     {name:'getMyAssignedWork', queryString:'\/oslc\/os\/ms_oslcsgzmobile?savedQuery=getMyAssignedWork', queryLabel:'' }
               ]);
            var resourcePromise004 = PersistenceManager.initCollection( resource004 );


            var resource005 = new ResourceMetadata({
                  'pageSize' : 10,
                  'resourceName' : 'photosessionlineResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'photosessionlineResource',
                  'id' : 'aw83523e6',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:ms_photosessionlineid,spi_wm:ms_photosessionid,spi_wm:ms_parent,spi_wm:ms_required,spi_wm:ms_sequence,spi_wm:ms_description,spi_wm:ms_minqty').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'ms_photosessionlineid',
                  'index' : false,
                  'artifactId' : 'photosessionlineResource_value_dcterms_identifier',
                  'id' : 'aweaf3e03a',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:ms_photosessionlineid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_photosessionid',
                  'index' : false,
                  'artifactId' : 'photosessionlineResource_value_spi_wm_ms_photosessionid',
                  'maxSize' : 30,
                  'id' : 'awb46ef05',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_photosessionid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_parent',
                  'index' : false,
                  'artifactId' : 'photosessionlineResource_value_spi_ms_parent',
                  'maxSize' : 30,
                  'id' : 'awaac0baa4',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_parent',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ms_required',
                  'index' : false,
                  'artifactId' : 'photosessionlineresource_ms_required_spi_ms_required',
                  'id' : 'awd92dc6a9',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_required',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'name' : 'ms_sequence',
                  'index' : false,
                  'artifactId' : 'photosessionlineresource_ms_sequence_spi_ms_sequence',
                  'id' : 'aw4372b0ec',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_sequence',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'ms_description',
                  'index' : false,
                  'artifactId' : 'photosessionlineresource_ms_description_spi_ms_description',
                  'maxSize' : 256,
                  'id' : 'aw9b9ad4cc',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'name' : 'ms_minqty',
                  'index' : false,
                  'artifactId' : 'photosessionlineresource_ms_minqty_spi_ms_minqty',
                  'id' : 'aw6da7a23b',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_minqty',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'secCount',
                  'index' : true,
                  'artifactId' : 'photosessionlineresource_secCount_string',
                  'id' : 'awf0b05f9e',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise005 = PersistenceManager.initCollection( resource005 );


            var resource006 = new ResourceMetadata({
                  'pageSize' : 10,
                  'resourceName' : 'msDoclinksResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'msDoclinksResource',
                  'id' : 'awbbec0a4c',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:ms_anywhererefid,spi_wm:ms_photosessionid,spi_wm:ms_psconfigid,spi_wm:ms_version').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'anywhererefid',
                  'index' : false,
                  'artifactId' : 'msDoclinksResource_ms_anywhererefid',
                  'id' : 'awe321ef7e',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_anywhererefid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_photosessionid',
                  'index' : false,
                  'artifactId' : 'msDoclinksResource_value_spi_ms_photosessionid',
                  'maxSize' : 30,
                  'id' : 'aw9ab00b28',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_photosessionid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_psconfigid',
                  'index' : false,
                  'artifactId' : 'msDoclinksResource_ms_required_spi_ms_psconfigid',
                  'maxSize' : 10,
                  'id' : 'aw29e130',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_psconfigid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_version',
                  'index' : false,
                  'artifactId' : 'msDoclinksResource_ms_sequence_ms_version',
                  'id' : 'aw1ed192c3',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_version',
               });
            var resourcePromise006 = PersistenceManager.initCollection( resource006 );


            var resource007 = new ResourceMetadata({
                  'pageSize' : 500,
                  'resourceName' : 'ancestorLoc',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'ancestorLoc',
                  'additionalData' : true,
                  'id' : 'aw102fe1ad',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:classancestorid,spi:classstructureid,spi:ancestor,spi:classificationid,spi:ancestorclassid,spi:hierarchylevels').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'classancestorid',
                  'index' : true,
                  'artifactId' : 'classancestor_spi_wmclassancestorid',
                  'id' : 'aw25ab5ac7',
                  'key' : '1',
                  'local' : false,
                  'remoteName' : 'spi:classancestorid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classstructureid',
                  'index' : false,
                  'artifactId' : 'classancestor_spi_wmclassstructureid',
                  'maxSize' : 20,
                  'id' : 'aw6dd42973',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:classstructureid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ancestor',
                  'index' : false,
                  'artifactId' : 'classancestor_spi_wmancestor',
                  'maxSize' : 20,
                  'id' : 'awd385add7',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:ancestor',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classificationid',
                  'index' : false,
                  'artifactId' : 'classancestor_spi_wmclassificationid',
                  'maxSize' : 192,
                  'id' : 'awa3e0be0',
                  'local' : false,
                  'remoteName' : 'spi:classificationid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ancestorclassid',
                  'index' : false,
                  'artifactId' : 'classancestor_spi_wmancestorclassid',
                  'maxSize' : 192,
                  'id' : 'awab8aa260',
                  'local' : false,
                  'remoteName' : 'spi:ancestorclassid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'hierarchylevels',
                  'index' : false,
                  'artifactId' : 'classancestor_spi_wmhierarchylevels',
                  'id' : 'aw77642ce9',
                  'local' : false,
                  'remoteName' : 'spi:hierarchylevels',
               }).
               setQueryBases([
                     {name:'getclassancestor', queryString:'\/oslc\/os\/ms_oslcancestor', queryLabel:'' }
               ]);
            var resourcePromise007 = PersistenceManager.initCollection( resource007 );


            var resource008 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'classstructure',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'classstructure',
                  'additionalData' : true,
                  'id' : 'awf50fb9da',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : ClassStructureObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:classstructureid,spi_wm:description,spi_wm:haschildren,spi_wm:classificationid,spi_wm:hierarchypath,spi_wm:parent').
               setSupportiveFieldsSelectExpression('spi_wm:classstructureclassspec{spi_wm:classspecid}{spi_wm:classstructureid,spi_wm:assetattrid,spi_wm:assetattributeid,spi_wm:orgid,spi_wm:siteid,spi_wm:continuous,spi_wm:domainid,spi_wm:section,spi_wm:measureunitid,spi_wm:assetattributeid{spi_wm:description,spi_wm:datatype},spi_wm:classspecid{spi_wm:mandatory,spi_wm:sequence,spi_wm:classspecid}}').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classstructureid',
                  'index' : true,
                  'artifactId' : 'classstructure_classstructureid_spi_wmclassstructureid',
                  'maxSize' : 20,
                  'id' : 'aw3bd4939b',
                  'key' : '1',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:classstructureid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'classstructure_description_spi_wmdescription',
                  'maxSize' : 100,
                  'id' : 'aw81cb358f',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'haschildren',
                  'index' : true,
                  'artifactId' : 'classstructure_haschildren_spi_wmhaschildren',
                  'id' : 'awaf639bc9',
                  'local' : false,
                  'remoteName' : 'spi_wm:haschildren',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classificationid',
                  'index' : false,
                  'artifactId' : 'classstructure_classificationid_spi_wmclassificationid',
                  'maxSize' : 192,
                  'id' : 'awd81ecc55',
                  'local' : false,
                  'remoteName' : 'spi_wm:classificationid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'hierarchypath',
                  'index' : false,
                  'artifactId' : 'classstructure_hierarchypath_spi_wmhierarchypath',
                  'maxSize' : 254,
                  'id' : 'aw3dd51a56',
                  'local' : false,
                  'remoteName' : 'spi_wm:hierarchypath',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'parent',
                  'index' : true,
                  'artifactId' : 'classstructure_parent_spi_wmparent',
                  'maxSize' : 20,
                  'id' : 'awfe37c8d6',
                  'local' : false,
                  'remoteName' : 'spi_wm:parent',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:classspecid',
                  'dataType' : 'inline',
                  'usage' : 'bigint',
                  'referenceResource' : 'classSpec',
                  'index' : false,
                  'local' : false,
                  'selectExpression' : 'spi_wm:classstructureclassspec{spi_wm:classspecid}{spi_wm:classstructureid,spi_wm:assetattrid,spi_wm:assetattributeid,spi_wm:orgid,spi_wm:siteid,spi_wm:continuous,spi_wm:domainid,spi_wm:section,spi_wm:measureunitid,spi_wm:assetattributeid{spi_wm:description,spi_wm:datatype},spi_wm:classspecid{spi_wm:mandatory,spi_wm:sequence,spi_wm:classspecid}}',
                  'name' : 'classspec',
                  'artifactId' : 'classstructure_classspec_spi_wmclassstructureclassspecspi_wmclassspecid',
                  'id' : 'awc8047a03',
                  'describedByResource' : 'classSpec',
                  'remoteName' : 'spi_wm:classstructureclassspec',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'fulldesc',
                  'index' : false,
                  'artifactId' : 'classstructure_fulldesc_string',
                  'id' : 'aw62199543',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'filterparent',
                  'formula' : '${parent}?${parent}:\'nullvalue\'',
                  'index' : true,
                  'artifactId' : 'classstructure_filterparent_string',
                  'id' : 'aw4280746c',
                  'persistent' : true,
                  'local' : true,
               }).
               setQueryBases([
                     {name:'getclassstructure', queryString:'\/oslc\/os\/oslcclassstructure', queryLabel:'' }
               ]);
            var resourcePromise008 = PersistenceManager.initCollection( resource008 );


            var resource009 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'classSpec',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'classSpec',
                  'additionalData' : true,
                  'id' : 'aw5bded906',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:classstructureid,spi_wm:assetattrid,spi_wm:assetattributeid,spi_wm:orgid,spi_wm:siteid,spi_wm:continuous,spi_wm:domainid,spi_wm:section,spi_wm:measureunitid,spi_wm:assetattributeid{spi_wm:description,spi_wm:datatype},spi_wm:classspecid{spi_wm:mandatory,spi_wm:sequence,spi_wm:classspecid}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classstructureid',
                  'index' : true,
                  'artifactId' : 'classSpec_classstructureid_spi_wmclassstructureid',
                  'maxSize' : 20,
                  'id' : 'aw464a7746',
                  'key' : '2',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:classstructureid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'assetattrid',
                  'index' : false,
                  'artifactId' : 'classSpec_assetattrid_spi_wmassetattrid',
                  'maxSize' : 30,
                  'id' : 'aw4139db17',
                  'key' : '1',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi_wm:assetattrid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'reference',
                  'name' : 'assetattributeid',
                  'index' : true,
                  'artifactId' : 'classSpec_assetattributeid_spi_wmassetattributeid',
                  'id' : 'aw11860be2',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattributeid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:description',
                  'dataType' : 'reference',
                  'referenceResource' : 'classSpec',
                  'name' : 'assetdescription',
                  'index' : false,
                  'artifactId' : 'classSpec_assetdescription_spi_wmassetattributeidspi_wmdescription',
                  'maxSize' : 100,
                  'id' : 'aw5c706540',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattributeid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:classspecid',
                  'dataType' : 'reference',
                  'usage' : 'bigint',
                  'referenceResource' : 'classSpec',
                  'name' : 'classspecid',
                  'index' : false,
                  'artifactId' : 'classSpec_classspecid_spi_wmclassspecidspi_wmclassspecid',
                  'id' : 'aw8a544b6e',
                  'local' : false,
                  'remoteName' : 'spi_wm:classspecid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'classSpec_orgid_spi_wmorgid',
                  'maxSize' : 8,
                  'id' : 'awf126d148',
                  'key' : '3',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi_wm:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'classSpec_siteid_spi_wmsiteid',
                  'maxSize' : 8,
                  'id' : 'awd7a71549',
                  'key' : '4',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi_wm:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'continuous',
                  'index' : false,
                  'artifactId' : 'classSpec_continuous_spi_wmcontinuous',
                  'id' : 'awa50a61fa',
                  'local' : false,
                  'remoteName' : 'spi_wm:continuous',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'classSpec_domainid_spi_wmdomainid',
                  'maxSize' : 18,
                  'id' : 'aw4511dccf',
                  'local' : false,
                  'remoteName' : 'spi_wm:domainid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'section',
                  'index' : false,
                  'artifactId' : 'classSpec_section_spi_wmsection',
                  'maxSize' : 10,
                  'id' : 'aw84358cb',
                  'key' : '5',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi_wm:section',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'measureunitid',
                  'index' : false,
                  'artifactId' : 'classSpec_measureunitid_spi_wmmeasureunitid',
                  'maxSize' : 16,
                  'id' : 'aw8590b4f3',
                  'local' : false,
                  'remoteName' : 'spi_wm:measureunitid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:mandatory',
                  'dataType' : 'reference',
                  'referenceResource' : 'classSpec',
                  'name' : 'mandatory',
                  'index' : false,
                  'artifactId' : 'classSpec_mandatory_spi_wmclassspecidspi_wmmandatory',
                  'id' : 'aw927c03c',
                  'local' : false,
                  'remoteName' : 'spi_wm:classspecid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:sequence',
                  'dataType' : 'reference',
                  'usage' : 'smallint',
                  'referenceResource' : 'classSpec',
                  'name' : 'sequence',
                  'index' : false,
                  'artifactId' : 'classSpec_sequence_spi_wmclassspecidspi_wmsequence',
                  'id' : 'aweb9f04cd',
                  'local' : false,
                  'remoteName' : 'spi_wm:classspecid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:datatype',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'classSpec',
                  'name' : 'datatype',
                  'index' : false,
                  'artifactId' : 'classSpec_datatype_spi_wmassetattributeidspi_wmdatatype',
                  'maxSize' : 8,
                  'id' : 'awb4392615',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattributeid',
               }).
               setQueryBases([
                     {name:'getclasssspec', queryString:'\/oslc\/os\/oslcclassspec', queryLabel:'' }
               ]).
               setWhereClause('spi_wm%3Aclassspecusewith%7Bspi_wm%3Aobjectname%3D%22WORKORDER%22%7D');
            var resourcePromise009 = PersistenceManager.initCollection( resource009 );


            var resource010 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'attachments',
                  'isAttachment' : true,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'attachments',
                  'id' : 'aw47c4fad6',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : AttachmentsObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('oslc_cm:attachmentSize,dcterms:title,spi:fileName,dcterms:description,dcterms:created,spi:urlType,spi:docType,spi:printthrulink,spi:contentLocation,spi:anywhererefid,spi:createby').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'fileSize',
                  'index' : false,
                  'artifactId' : 'attachments_fileSize_oslc_cmattachmentSize',
                  'id' : 'awafc65e01',
                  'local' : false,
                  'remoteName' : 'oslc_cm:attachmentSize',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'fileName',
                  'index' : false,
                  'artifactId' : 'attachments_fileName_dctermstitle',
                  'id' : 'aw3390da65',
                  'key' : '1',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'fullFileName',
                  'index' : false,
                  'artifactId' : 'attachments_fullFileName_spifileName',
                  'id' : 'awf858d871',
                  'key' : '2',
                  'local' : false,
                  'remoteName' : 'spi:fileName',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'attachments_description_dctermsdescription',
                  'id' : 'awbe16d790',
                  'local' : false,
                  'remoteName' : 'dcterms:description',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'creationDate',
                  'index' : false,
                  'artifactId' : 'attachments_creationDate_dctermscreated',
                  'id' : 'awa88d4af8',
                  'key' : '3',
                  'local' : false,
                  'remoteName' : 'dcterms:created',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'urlType',
                  'index' : false,
                  'artifactId' : 'attachments_urlType_spiurlType',
                  'id' : 'aw85d66259',
                  'local' : false,
                  'remoteName' : 'spi:urlType',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'docType',
                  'index' : false,
                  'artifactId' : 'attachments_docType_spidocType',
                  'id' : 'aw3393c41b',
                  'local' : false,
                  'remoteName' : 'spi:docType',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'bulkDownload',
                  'index' : false,
                  'artifactId' : 'attachments_bulkDownload_spiprintthrulink',
                  'id' : 'aw679c4e95',
                  'local' : false,
                  'remoteName' : 'spi:printthrulink',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'contentLocation',
                  'index' : false,
                  'artifactId' : 'attachments_contentLocation_spicontentLocation',
                  'id' : 'aw1faa9ae7',
                  'local' : false,
                  'remoteName' : 'spi:contentLocation',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'anywhereRefId',
                  'index' : false,
                  'artifactId' : 'attachments_anywhereRefId_spianywhererefid',
                  'id' : 'awb58bd2df',
                  'local' : false,
                  'remoteName' : 'spi:anywhererefid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'createby',
                  'index' : false,
                  'artifactId' : 'attachments_createby_spicreateby',
                  'id' : 'aw2cff279b',
                  'local' : false,
                  'remoteName' : 'spi:createby',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'displaySize',
                  'index' : false,
                  'artifactId' : 'attachments_displaySize_string',
                  'id' : 'awa53cf2df',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'category',
                  'index' : true,
                  'artifactId' : 'attachments_category_string',
                  'id' : 'aw1ff484b0',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'displayFileName',
                  'formula' : '(${fileName} || ${anywhereAttachName})',
                  'index' : false,
                  'artifactId' : 'attachments_displayFileName_string',
                  'id' : 'aw986667e5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'displayDescription',
                  'formula' : '(${description} || ${anywhereAttachDescription})',
                  'index' : false,
                  'artifactId' : 'attachments_displayDescription_string',
                  'id' : 'awce6df00e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'displayCategory',
                  'formula' : '(${docType} || ${anywhereAttachCategory})',
                  'index' : false,
                  'artifactId' : 'attachments_displayCategory_string',
                  'id' : 'awcdc99aca',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'displayCreationDate',
                  'formula' : '(${creationDate} || ${anywhereCreationDate})',
                  'index' : false,
                  'artifactId' : 'attachments_displayCreationDate_dateTime',
                  'id' : 'awd23c62ba',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'displayCreationDateISO',
                  'formula' : '${displayCreationDate}',
                  'index' : true,
                  'artifactId' : 'attachments_displayCreationDate_dateTime_ISO',
                  'id' : 'aw98265f86',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'displayFileType',
                  'index' : false,
                  'artifactId' : 'attachments_displayFileType_string',
                  'id' : 'awbdc99f90',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise010 = PersistenceManager.initCollection( resource010 );


            var resource011 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'woFollowUpInfo',
                  'resourceName' : 'woFollowUpInfo',
                  'id' : 'awd50eedc5',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'boolean',
                  'name' : 'isFollowUpSetLoc',
                  'index' : false,
                  'artifactId' : 'woFollowUpInfo_isFollowUpSetLoc_boolean',
                  'id' : 'aw1249a8fa',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise011 = PersistenceManager.initCollection( resource011 );


            var resource012 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'taskResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'taskResource',
                  'id' : 'aw2e4e5dd7',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : TaskObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:taskid,dcterms:title,spi_wm:description_longdescription,spi:status,spi_wm:schedstart,spi_wm:parent,spi_wm:istask,spi_wm:statusdate,spi_wm:np_statusmemo,spi_wm:siteid,oslc:shortTitle,spi_wm:parentchgsstatus').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'taskid',
                  'index' : false,
                  'artifactId' : 'taskResource_taskid_spi_wmtaskid',
                  'id' : 'aw88e7e9a9',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'taskdescription',
                  'index' : false,
                  'artifactId' : 'taskResource_taskdescription_dctermstitle',
                  'maxSize' : 255,
                  'id' : 'aw47fcc3fb',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'longaln',
                  'name' : 'tasklongdesc',
                  'index' : false,
                  'artifactId' : 'taskResource_tasklongdesc_spi_wmdescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'aw379c057c',
                  'local' : false,
                  'remoteName' : 'spi_wm:description_longdescription',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'statusChanged',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'status',
                  'index' : false,
                  'artifactId' : 'taskResource_status_spistatus',
                  'maxSize' : 16,
                  'id' : 'aw46a2cd15',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'schedstart',
                  'index' : false,
                  'artifactId' : 'taskResource_schedstart_spi_wmschedstart',
                  'id' : 'awdad35d42',
                  'local' : false,
                  'remoteName' : 'spi_wm:schedstart',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'parent',
                  'index' : false,
                  'artifactId' : 'taskResource_parent_spi_wmparent',
                  'maxSize' : 20,
                  'id' : 'aw405d640f',
                  'local' : false,
                  'remoteName' : 'spi_wm:parent',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'istask',
                  'index' : false,
                  'artifactId' : 'taskResource_istask_spi_wmistask',
                  'id' : 'aw339b6a4d',
                  'local' : false,
                  'remoteName' : 'spi_wm:istask',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'changestatusdate',
                  'index' : false,
                  'artifactId' : 'taskResource_changestatusdate_spi_wmstatusdate',
                  'id' : 'aw99f03313',
                  'local' : false,
                  'remoteName' : 'spi_wm:statusdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'memo',
                  'index' : false,
                  'artifactId' : 'taskResource_memo_spi_wmnp_statusmemo',
                  'maxSize' : 50,
                  'id' : 'awe8f663bf',
                  'local' : false,
                  'remoteName' : 'spi_wm:np_statusmemo',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'taskResource_siteid_spi_wmsiteid',
                  'maxSize' : 8,
                  'id' : 'aw6fa428c4',
                  'key' : '2',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:siteid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'wonum',
                  'index' : false,
                  'artifactId' : 'taskResource_wonum_oslcshortTitle',
                  'maxSize' : 20,
                  'id' : 'aw27c1967b',
                  'key' : '1',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'inheritstatuschanges',
                  'index' : false,
                  'artifactId' : 'taskResource_inheritstatuschanges_spi_wmparentchgsstatus',
                  'id' : 'aw45093182',
                  'local' : false,
                  'remoteName' : 'spi_wm:parentchgsstatus',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetnumanddescription',
                  'index' : false,
                  'artifactId' : 'taskResource_assetnumanddescription_string',
                  'id' : 'awf0f25776',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationanddescription',
                  'index' : false,
                  'artifactId' : 'taskResource_locationanddescription_string',
                  'id' : 'aweabd5552',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'statusdesc',
                  'index' : false,
                  'artifactId' : 'taskResource_statusdesc_string',
                  'id' : 'aw97da52dc',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localAssetLd',
                  'formula' : '${assetld}',
                  'index' : false,
                  'artifactId' : 'taskResource_localAssetLd_string',
                  'id' : 'awb64e6624',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localLocationLd',
                  'formula' : '${locationld}',
                  'index' : false,
                  'artifactId' : 'taskResource_localLocationLd_string',
                  'id' : 'aweb1c26ee',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise012 = PersistenceManager.initCollection( resource012 );


            var resource013 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'assignmentResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'assignmentResource',
                  'id' : 'aw52913ac4',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : AssignmentObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:assignmentid,spi_wm:taskid,spi_wm:laborcode,spi_wm:laborname,spi_wm:craft,spi_wm:skilllevel,spi_wm:amcrew,spi_wm:amcrewtype,spi_wm:status,spi_wm:scheduledate,spi_wm:laborhrs,spi_wm:vendor,spi_wm:contractnum').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'assignmentResource_assignmentid_assignmentid',
                  'id' : 'aw4dff185a',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:assignmentid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'taskid',
                  'index' : false,
                  'artifactId' : 'assignmentResource_taskid_spi_wmtaskid',
                  'id' : 'awdbacd682',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'laborcode',
                  'index' : false,
                  'artifactId' : 'assignmentResource_laborcode_spi_wmlaborcode',
                  'maxSize' : 8,
                  'id' : 'aw19d5e131',
                  'local' : false,
                  'remoteName' : 'spi_wm:laborcode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'laborname',
                  'index' : false,
                  'artifactId' : 'assignmentResource_laborname_spi_wmlaborname',
                  'maxSize' : 255,
                  'id' : 'aweacca779',
                  'local' : false,
                  'remoteName' : 'spi_wm:laborname',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'craft',
                  'index' : false,
                  'artifactId' : 'assignmentResource_craft_spi_wmcraft',
                  'maxSize' : 8,
                  'id' : 'awa2225e70',
                  'local' : false,
                  'remoteName' : 'spi_wm:craft',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'skilllevel',
                  'index' : false,
                  'artifactId' : 'assignmentResource_skilllevel_spi_wmskilllevel',
                  'maxSize' : 15,
                  'id' : 'aw528e6e74',
                  'local' : false,
                  'remoteName' : 'spi_wm:skilllevel',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'crew',
                  'index' : false,
                  'artifactId' : 'assignmentResource_crew_spi_wmamcrew',
                  'maxSize' : 8,
                  'id' : 'awe0331a8e',
                  'local' : false,
                  'remoteName' : 'spi_wm:amcrew',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'amcrewtype',
                  'index' : false,
                  'artifactId' : 'assignmentResource_amcrewtype_spi_wmamcrewtype',
                  'maxSize' : 8,
                  'id' : 'aweba9a0fe',
                  'local' : false,
                  'remoteName' : 'spi_wm:amcrewtype',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'status',
                  'index' : false,
                  'artifactId' : 'assignmentResource_status_spi_wmstatus',
                  'maxSize' : 12,
                  'id' : 'awcf481ba6',
                  'local' : false,
                  'remoteName' : 'spi_wm:status',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'scheduledate',
                  'index' : false,
                  'artifactId' : 'assignmentResource_scheduledate_spi_wmscheduledate',
                  'id' : 'aw66feff9b',
                  'local' : false,
                  'remoteName' : 'spi_wm:scheduledate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'laborhours',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'assignmentResource_laborhours_spi_wmlaborhrs',
                  'id' : 'aw845252ec',
                  'local' : false,
                  'remoteName' : 'spi_wm:laborhrs',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'vendor',
                  'index' : false,
                  'artifactId' : 'assignmentResource_vendor_spi_wmvendor',
                  'maxSize' : 25,
                  'id' : 'aw20d6246b',
                  'local' : false,
                  'remoteName' : 'spi_wm:vendor',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'contractnum',
                  'index' : false,
                  'artifactId' : 'assignmentResource_contractnum_spi_wmcontractnum',
                  'maxSize' : 8,
                  'id' : 'aw6a1c685',
                  'local' : false,
                  'remoteName' : 'spi_wm:contractnum',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'laborcodeandname',
                  'index' : false,
                  'artifactId' : 'assignmentResource_laborcodeandname_string',
                  'id' : 'awcc45a6ed',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'crewdesc',
                  'index' : false,
                  'artifactId' : 'assignmentResource_crewdesc_string',
                  'id' : 'aw172e7e51',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise013 = PersistenceManager.initCollection( resource013 );


            var resource014 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'plannedMaterialResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'plannedMaterialResource',
                  'id' : 'aw9e5d2a0f',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : PlannedMaterialObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:wpitemid,spi_wm:taskid,spi_wm:itemnum,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:linetype,spi_wm:directreq,spi_wm:itemsetid,spi_wm:storelocsite,spi_wm:requestnum').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_wpitemid_spi_wmwpitemid',
                  'id' : 'aw99527809',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:wpitemid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'taskid',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_taskid_spi_wmtaskid',
                  'id' : 'awde58bf6c',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'item',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_item_spi_wmitemnum',
                  'maxSize' : 30,
                  'id' : 'aw276c2072',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'itemdesc',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_itemdesc_spi_wmdescription',
                  'maxSize' : 100,
                  'id' : 'awf5e4310c',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'longaln',
                  'name' : 'itemlongdesc',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_itemlongdesc_spi_wmdescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'aw9a55019f',
                  'local' : false,
                  'remoteName' : 'spi_wm:description_longdescription',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'quantity',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'plannedMaterialResource_quantity_spi_wmitemqty',
                  'id' : 'aw64ec56db',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemqty',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'linetype',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_linetype_spi_wmlinetype',
                  'maxSize' : 15,
                  'id' : 'awb01dfeab',
                  'local' : false,
                  'remoteName' : 'spi_wm:linetype',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'directrequest',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_directrequest_spi_wmdirectreq',
                  'id' : 'awbf99f6ee',
                  'local' : false,
                  'remoteName' : 'spi_wm:directreq',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'itemanddescription',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_itemanddescription_string',
                  'id' : 'awd684a604',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'materialCB',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_itemanddescription_boolean11',
                  'id' : 'awa11fb5d3',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemsetid',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_itemsetid_spi_wmitemsetid',
                  'maxSize' : 8,
                  'id' : 'awd5d2e91c',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemsetid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_storelocsite_string',
                  'maxSize' : 8,
                  'id' : 'awdab6dbdb',
                  'local' : false,
                  'remoteName' : 'spi_wm:storelocsite',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'requestnum',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_requestnum_string',
                  'maxSize' : 20,
                  'id' : 'aw2122b73c',
                  'local' : false,
                  'remoteName' : 'spi_wm:requestnum',
               });
            var resourcePromise014 = PersistenceManager.initCollection( resource014 );


            var resource015 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'plannedToolResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'plannedToolResource',
                  'id' : 'aw9b225591',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : PlannedToolObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:wpitemid,spi_wm:itemnum,spi_wm:taskid,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:hours,spi_wm:linetype,spi_wm:itemsetid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_wpitemid_spi_wmwpitemid',
                  'id' : 'aw372b0fc',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:wpitemid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'tool',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_tool_spi_wmitemnum',
                  'maxSize' : 30,
                  'id' : 'awefa1ba7e',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'taskid',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_taskid_spi_wmtaskid',
                  'id' : 'awbc7ff456',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'tooldesc',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_tooldesc_spi_wmdescription',
                  'maxSize' : 100,
                  'id' : 'aw9de0a341',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'longaln',
                  'name' : 'toollongdesc',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_toollongdesc_spi_wmdescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'aw7a468d19',
                  'local' : false,
                  'remoteName' : 'spi_wm:description_longdescription',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'quantity',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'plannedToolResource_quantity_spi_wmitemqty',
                  'id' : 'awfb97155a',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemqty',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'hours',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'plannedToolResource_hours_spi_wmhours',
                  'id' : 'awf96027af',
                  'local' : false,
                  'remoteName' : 'spi_wm:hours',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'linetype',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_linetype_spi_wmlinetype',
                  'maxSize' : 15,
                  'id' : 'aw2a3d365e',
                  'local' : false,
                  'remoteName' : 'spi_wm:linetype',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'toolanddescription',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_toolanddescription_string',
                  'id' : 'awfa513d6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'toolCB',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_itemanddescription_boolean11',
                  'id' : 'aw21d18867',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemsetid',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_itemsetid_spi_wmitemsetid',
                  'maxSize' : 8,
                  'id' : 'aw29a62c46',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemsetid',
               });
            var resourcePromise015 = PersistenceManager.initCollection( resource015 );


            var resource016 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'actualLaborResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'actualLaborResource',
                  'id' : 'awc6411bcc',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : ActualLaborObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi_wm:taskid,spi_wm:laborcode,foaf:name,spi_wm:craft,spi_wm:skilllevel,spi_wm:vendor,spi_wm:contractnum,spi_wm:revisionnum,spi_wm:amcrew,spi_wm:position,spi_wm:startdate,spi_wm:starttime,spi_wm:finishdate,spi_wm:finishtime,spi_wm:regularhrs,spi_wm:premiumpayhours,spi_wm:premiumpaycode,spi_wm:transtype,spi_wm:timerstatus,spi_wm:anywhererefid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw8cbf3ba0',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'actualstaskid',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_actualstaskid_spi_wmtaskid',
                  'id' : 'awd579cb87',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'method' : 'laborcodeChanged',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'laborcode',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_laborcode_spi_wmlaborcode',
                  'maxSize' : 8,
                  'id' : 'aw47ed7702',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi_wm:laborcode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'laborname',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_laborname_foafname',
                  'maxSize' : 255,
                  'id' : 'awf3ec2dcf',
                  'local' : false,
                  'remoteName' : 'foaf:name',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'method' : 'craftChanged',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'craft',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_craft_spi_wmcraft',
                  'maxSize' : 8,
                  'id' : 'aw84b26c2',
                  'local' : false,
                  'remoteName' : 'spi_wm:craft',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'skilllevel',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_skilllevel_spi_wmskilllevel',
                  'maxSize' : 15,
                  'id' : 'awbf89630d',
                  'local' : false,
                  'remoteName' : 'spi_wm:skilllevel',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'vendor',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_vendor_spi_wmvendor',
                  'maxSize' : 25,
                  'id' : 'awa8fbbb36',
                  'local' : false,
                  'remoteName' : 'spi_wm:vendor',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'contractnumChanged',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'contractnum',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_contractnum_spi_wmcontractnum',
                  'maxSize' : 8,
                  'id' : 'aw86ed9580',
                  'local' : false,
                  'remoteName' : 'spi_wm:contractnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'revisionnum',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_revisionnum_spi_wmrevisionnum',
                  'id' : 'awb2e99f97',
                  'local' : false,
                  'remoteName' : 'spi_wm:revisionnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'amcrew',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_amcrew_spi_wmamcrew',
                  'maxSize' : 8,
                  'id' : 'awec952090',
                  'local' : false,
                  'remoteName' : 'spi_wm:amcrew',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'position',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_position_spi_wmposition',
                  'maxSize' : 20,
                  'id' : 'aw5f7c4a2a',
                  'local' : false,
                  'remoteName' : 'spi_wm:position',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'method' : 'startDateChanged',
                  'dataType' : 'datetime',
                  'usage' : 'date',
                  'name' : 'startdate',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_startdate_spi_wmstartdate',
                  'id' : 'aw71dfbb24',
                  'local' : false,
                  'remoteName' : 'spi_wm:startdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'startTimeChanged',
                  'dataType' : 'datetime',
                  'usage' : 'time',
                  'name' : 'starttime',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_starttime_spi_wmstarttime',
                  'id' : 'aw8b12e64e',
                  'local' : false,
                  'remoteName' : 'spi_wm:starttime',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'finishDateChanged',
                  'dataType' : 'datetime',
                  'usage' : 'date',
                  'name' : 'finishdate',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_finishdate_spi_wmfinishdate',
                  'id' : 'aw6f7d0c8e',
                  'local' : false,
                  'remoteName' : 'spi_wm:finishdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'finishTimeChanged',
                  'dataType' : 'datetime',
                  'usage' : 'time',
                  'name' : 'finishtime',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_finishtime_spi_wmfinishtime',
                  'id' : 'awb149c138',
                  'local' : false,
                  'remoteName' : 'spi_wm:finishtime',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'regularhours',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'actualLaborResource_regularhours_spi_wmregularhrs',
                  'id' : 'awfaad9726',
                  'local' : false,
                  'remoteName' : 'spi_wm:regularhrs',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'premiumpayhours',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'actualLaborResource_premiumpayhours_spi_wmpremiumpayhours',
                  'id' : 'awe96026c6',
                  'local' : false,
                  'remoteName' : 'spi_wm:premiumpayhours',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'premiumpaycode',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_premiumpaycode_spi_wmpremiumpaycode',
                  'maxSize' : 8,
                  'id' : 'aw1fee04c6',
                  'local' : false,
                  'remoteName' : 'spi_wm:premiumpaycode',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'transtype',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_transtype_spi_wmtranstype',
                  'maxSize' : 16,
                  'id' : 'aw99b72c84',
                  'local' : false,
                  'remoteName' : 'spi_wm:transtype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'timerstatus',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_timerstatus_spi_wmtimerstatus',
                  'maxSize' : 16,
                  'id' : 'aw24c41065',
                  'local' : false,
                  'remoteName' : 'spi_wm:timerstatus',
               }).
               addField({
                  'method' : 'actualLaborHoursChanged',
                  'dataType' : 'duration',
                  'name' : 'actuallaborhours',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_actuallaborhours_duration',
                  'id' : 'awca7f2a6c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'dontDiscard',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_dontDiscard_boolean',
                  'id' : 'awee615351',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'anywhereRefId',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_anywhereRefId_spi_wmanywhererefid',
                  'id' : 'aw353fc785',
                  'local' : false,
                  'remoteName' : 'spi_wm:anywhererefid',
               });
            var resourcePromise016 = PersistenceManager.initCollection( resource016 );


            var resource017 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'actualMaterialResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'actualMaterialResource',
                  'id' : 'awb759cf57',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : ActualMaterialObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi_wm:itemsetid,spi_wm:taskid,spi_wm:itemnum,dcterms:title,spi_wm:positivequantity,spi_wm:linetype,spi_wm:storeloc,spi_wm:binnum,spi_wm:rotassetnum,spi_wm:tositeid,spi_wm:anywhererefid,spi_wm:requestnum,spi_wm:enteredastask').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awdc7ede03',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemsetid',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_itemsetid_spi_wmitemsetid',
                  'maxSize' : 8,
                  'id' : 'awe645fdad',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemsetid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'actualstaskid',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_actualstaskid_spi_wmtaskid',
                  'id' : 'aw20ac037e',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemnum',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_itemnum_spi_wmitemnum',
                  'maxSize' : 30,
                  'id' : 'awb880e31e',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'itemdesc',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_itemdesc_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'awaf1ea766',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'quantity',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'actualMaterialResource_quantity_spi_wmpositivequantity',
                  'id' : 'awe9d77f3a',
                  'local' : false,
                  'remoteName' : 'spi_wm:positivequantity',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'linetype',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_linetype_spi_wmlinetype',
                  'maxSize' : 15,
                  'id' : 'awdd721722',
                  'local' : false,
                  'remoteName' : 'spi_wm:linetype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'storeroom',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_storeroom_spi_wmstoreloc',
                  'maxSize' : 12,
                  'id' : 'awc4c62e4c',
                  'local' : false,
                  'remoteName' : 'spi_wm:storeloc',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'binnum',
                  'index' : true,
                  'artifactId' : 'actualMaterialResource_binnum_spi_wmbinnum',
                  'maxSize' : 8,
                  'id' : 'aw8a437e8a',
                  'local' : false,
                  'remoteName' : 'spi_wm:binnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'rotassetnum',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_rotassetnum_spi_wmrotassetnum',
                  'maxSize' : 12,
                  'id' : 'awe16d3213',
                  'local' : false,
                  'remoteName' : 'spi_wm:rotassetnum',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_siteid_spi_wmtositeid',
                  'maxSize' : 8,
                  'id' : 'awb3a70a67',
                  'local' : false,
                  'remoteName' : 'spi_wm:tositeid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'itemanddescription',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_itemanddescription_string',
                  'id' : 'awe513b2b5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'dontDiscard',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_dontDiscard_boolean',
                  'id' : 'awa0f7d694',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'anywhereRefId',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_anywhereRefId_spi_wmanywhererefid',
                  'id' : 'awc9cf32ea',
                  'local' : false,
                  'remoteName' : 'spi_wm:anywhererefid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'requestnum',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_requestnum_spi_requestnum',
                  'maxSize' : 20,
                  'id' : 'aw46f69e55',
                  'local' : false,
                  'remoteName' : 'spi_wm:requestnum',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'enteredastask',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_enteredastask_spi_requestnum',
                  'id' : 'aw58a116bb',
                  'local' : false,
                  'remoteName' : 'spi_wm:enteredastask',
               });
            var resourcePromise017 = PersistenceManager.initCollection( resource017 );


            var resource018 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'actualToolResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'actualToolResource',
                  'id' : 'awb2c54cdc',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : ActualToolObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi_wm:taskid,spi_wm:toolhrs,spi_wm:rotassetnum,spi_wm:amcrew,spi_wm:itemsetid,spi_wm:anywhererefid,spi_wm:plusctechnician,spi_wm:plusccomment,spi_wm:pluscduedate,spi_wm:plusctoolusedate,spi_wm:transdate,spi_wm:pluscexpirydate,spi_wm:plusclotnum,spi_wm:pluscmanufacturer,spi_wm:plusctype,spi_wm:rotassetsite,spi:toolitem{spi:itemnum,dcterms:title,spi:pluscsolution}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'actualToolResource_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw4ce0f27c',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'actualstaskid',
                  'index' : false,
                  'artifactId' : 'actualToolResource_actualstaskid_spi_wmtaskid',
                  'id' : 'awa5b6b94a',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:itemnum',
                  'method' : 'validateToolForTech',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'actualToolResource',
                  'index' : false,
                  'maxSize' : 30,
                  'local' : false,
                  'name' : 'tool',
                  'artifactId' : 'actualToolResource_tool_spitoolitemspiitemnum',
                  'id' : 'awfac09038',
                  'remoteName' : 'spi:toolitem',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'actualToolResource',
                  'name' : 'tooldesc',
                  'index' : false,
                  'artifactId' : 'actualToolResource_tooldesc_spitoolitemdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw9ae80135',
                  'local' : false,
                  'remoteName' : 'spi:toolitem',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'toolhrs',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'actualToolResource_toolhrs_spi_wmtoolhrs',
                  'id' : 'aw24bd033d',
                  'local' : false,
                  'remoteName' : 'spi_wm:toolhrs',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'rotassetnum',
                  'index' : false,
                  'artifactId' : 'actualToolResource_rotassetnum_spi_wmrotassetnum',
                  'maxSize' : 12,
                  'id' : 'aw2147c092',
                  'local' : false,
                  'remoteName' : 'spi_wm:rotassetnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'amcrew',
                  'index' : false,
                  'artifactId' : 'actualToolResource_amcrew_spi_wmamcrew',
                  'maxSize' : 8,
                  'id' : 'awaa580fe7',
                  'local' : false,
                  'remoteName' : 'spi_wm:amcrew',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemsetid',
                  'index' : false,
                  'artifactId' : 'actualToolResource_itemsetid_spi_wmitemsetid',
                  'maxSize' : 8,
                  'id' : 'aw99cf11ff',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemsetid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'toolanddescription',
                  'index' : false,
                  'artifactId' : 'actualToolResource_toolanddescription_string',
                  'id' : 'awbfcc2e6f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'dontDiscard',
                  'index' : false,
                  'artifactId' : 'actualToolResource_dontDiscard_boolean',
                  'id' : 'awa8ac7c26',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'anywhereRefId',
                  'index' : false,
                  'artifactId' : 'actualToolResource_anywhereRefId_spi_wmanywhererefid',
                  'id' : 'awde654a92',
                  'local' : false,
                  'remoteName' : 'spi_wm:anywhererefid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'validateTechForTool',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'technician',
                  'index' : false,
                  'artifactId' : 'actualToolResource_tool_technician',
                  'maxSize' : 30,
                  'id' : 'aw3f9cc9e9',
                  'local' : false,
                  'remoteName' : 'spi_wm:plusctechnician',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'comment',
                  'index' : false,
                  'artifactId' : 'actualToolResource_tool_comment',
                  'maxSize' : 250,
                  'id' : 'aw8685b75c',
                  'local' : false,
                  'remoteName' : 'spi_wm:plusccomment',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'duedate',
                  'index' : false,
                  'artifactId' : 'actualToolResource_tool_duedate',
                  'id' : 'aw7183de91',
                  'local' : false,
                  'remoteName' : 'spi_wm:pluscduedate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'validateDateUsed',
                  'dataType' : 'datetime',
                  'name' : 'useddate',
                  'index' : false,
                  'artifactId' : 'actualToolResource_tool_usedate',
                  'id' : 'aw6673aaf6',
                  'local' : false,
                  'remoteName' : 'spi_wm:plusctoolusedate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:pluscsolution',
                  'dataType' : 'reference',
                  'referenceResource' : 'actualToolResource',
                  'name' : 'solution',
                  'index' : false,
                  'artifactId' : 'actualToolResource_tool_solution',
                  'id' : 'awb9f8e892',
                  'local' : false,
                  'remoteName' : 'spi:toolitem',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'transdate',
                  'index' : false,
                  'artifactId' : 'actualToolResource_tool_transdate',
                  'id' : 'aw8082796d',
                  'local' : false,
                  'remoteName' : 'spi_wm:transdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'validateExpiryDate',
                  'dataType' : 'datetime',
                  'name' : 'expirydate',
                  'index' : false,
                  'artifactId' : 'actualToolResource_tool_expirydate',
                  'id' : 'awd96bb89a',
                  'local' : false,
                  'remoteName' : 'spi_wm:pluscexpirydate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'lotnum',
                  'index' : false,
                  'artifactId' : 'actualToolResource_tool_lotnum',
                  'maxSize' : 8,
                  'id' : 'aw54c5aff0',
                  'local' : false,
                  'remoteName' : 'spi_wm:plusclotnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'manufacturer',
                  'index' : false,
                  'artifactId' : 'actualToolResource_tool_manufacturer',
                  'maxSize' : 25,
                  'id' : 'awb1788664',
                  'local' : false,
                  'remoteName' : 'spi_wm:pluscmanufacturer',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'solutiontype',
                  'index' : false,
                  'artifactId' : 'actualToolResource_tool_solutiontype',
                  'maxSize' : 30,
                  'id' : 'aw52be9f83',
                  'local' : false,
                  'remoteName' : 'spi_wm:plusctype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'rotassetsite',
                  'index' : false,
                  'artifactId' : 'actualToolResource_tool_rotassetsite',
                  'maxSize' : 8,
                  'id' : 'awab73399c',
                  'local' : false,
                  'remoteName' : 'spi_wm:rotassetsite',
               });
            var resourcePromise018 = PersistenceManager.initCollection( resource018 );


            var resource019 = new ResourceMetadata({
                  'pageSize' : 20,
                  'resourceName' : 'additionalasset',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionalasset',
                  'additionalData' : true,
                  'id' : 'aw711eac89',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:assetid,oslc:shortTitle,dcterms:title,spi:status,spi:parent,spi:siteid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'assetuid',
                  'index' : false,
                  'artifactId' : 'additionalasset_assetuid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awd8171873',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'assetid',
                  'index' : false,
                  'artifactId' : 'additionalasset_assetid_spiassetid',
                  'id' : 'awd4ab7a83',
                  'local' : false,
                  'remoteName' : 'spi:assetid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'assetnum',
                  'index' : true,
                  'artifactId' : 'additionalasset_assetnum_oslcshortTitle',
                  'maxSize' : 12,
                  'id' : 'awdaad4d29',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'additionalasset_description_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'awa9af7124',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'status',
                  'index' : true,
                  'artifactId' : 'additionalasset_status_spistatus',
                  'maxSize' : 20,
                  'id' : 'aw9f649d2f',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'reference',
                  'name' : 'parent',
                  'index' : true,
                  'artifactId' : 'additionalasset_parent_spiparent',
                  'id' : 'awa03437d3',
                  'local' : false,
                  'remoteName' : 'spi:parent',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'additionalasset_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'awa5a0c944',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:siteid',
               }).
               setQueryBases([
                     {name:'getadditionalasset', queryString:'\/oslc\/os\/oslcasset', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22*%22');
            var resourcePromise019 = PersistenceManager.initCollection( resource019 );


            var resource020 = new ResourceMetadata({
                  'refreshOnLogin' : 'true',
                  'pageSize' : 10,
                  'resourceName' : 'mylabor',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'mylabor',
                  'id' : 'aw9345dc4e',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:personid,oslc:shortTitle,dcterms:identifier,spi:lbsinterval,spi:lbsdatafromwo,spi:orgid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'personid',
                  'index' : false,
                  'artifactId' : 'mylabor_personid_spipersonid',
                  'maxSize' : 30,
                  'id' : 'aw9728653',
                  'local' : false,
                  'remoteName' : 'spi:personid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'laborcode',
                  'index' : false,
                  'artifactId' : 'mylabor_laborcode_oslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'awe3178d0',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'laborid',
                  'index' : false,
                  'artifactId' : 'mylabor_laborid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awc89e8c8a',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'lbsinterval',
                  'index' : false,
                  'artifactId' : 'mylabor_lbsinterval',
                  'id' : 'aw58b0b09f',
                  'local' : false,
                  'remoteName' : 'spi:lbsinterval',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'lbsdatafromwo',
                  'index' : false,
                  'artifactId' : 'mylabor_lbsdatafromwo',
                  'id' : 'aw93c067d5',
                  'local' : false,
                  'remoteName' : 'spi:lbsdatafromwo',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'mylabor_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw95114d8a',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:orgid',
               }).
               setQueryBases([
                     {name:'getlabor', queryString:'\/oslc\/os\/oslclabor', queryLabel:'' }
               ]).
               setWhereClause('spi%3Apersonid%3D%24%7Bpersonid%7D+and+spi%3Aorgid%3D%24%7Bdeforg%7D');
            var resourcePromise020 = PersistenceManager.initCollection( resource020 );


            var resource021 = new ResourceMetadata({
                  'refreshOnLogin' : 'true',
                  'pageSize' : 10,
                  'resourceName' : 'mylaborcraftrate',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'mylaborcraftrate',
                  'id' : 'awa627b7eb',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:skilllevel,spi:craft,spi:laborcode,spi:contractnum,spi:vendor,dcterms:identifier,spi:defaultcraft,spi:orgid,foaf:name').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'skilllevel',
                  'index' : false,
                  'artifactId' : 'mylaborcraftrate_skilllevel_spiskilllevel',
                  'maxSize' : 15,
                  'id' : 'awb4554c8f',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:skilllevel',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'craft',
                  'index' : false,
                  'artifactId' : 'mylaborcraftrate_craft_spicraft',
                  'maxSize' : 8,
                  'id' : 'aw6bd87b1a',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:craft',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'laborcode',
                  'index' : false,
                  'artifactId' : 'mylaborcraftrate_laborcode_spilaborcode',
                  'maxSize' : 8,
                  'id' : 'aw4fcfab00',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:laborcode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'contractnum',
                  'index' : false,
                  'artifactId' : 'mylaborcraftrate_contractnum_spicontractnum',
                  'maxSize' : 8,
                  'id' : 'awf89ca052',
                  'local' : false,
                  'pkIndex' : 6,
                  'remoteName' : 'spi:contractnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'vendor',
                  'index' : false,
                  'artifactId' : 'mylaborcraftrate_vendor_spivendor',
                  'maxSize' : 25,
                  'id' : 'aw33f170ee',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:vendor',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'laborcraftrateid',
                  'index' : false,
                  'artifactId' : 'mylaborcraftrate_laborcraftrateid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awd614616b',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaultcraft',
                  'index' : true,
                  'artifactId' : 'mylaborcraftrate_defaultcraft_spidefaultcraft',
                  'id' : 'awdcbc797',
                  'local' : false,
                  'remoteName' : 'spi:defaultcraft',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'mylaborcraftrate_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw4114a7e1',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'laborname',
                  'index' : false,
                  'artifactId' : 'mylaborcraftrate_laborname_foafname',
                  'maxSize' : 255,
                  'id' : 'aw9d129aaa',
                  'local' : false,
                  'remoteName' : 'foaf:name',
               }).
               setQueryBases([
                     {name:'getlaborcraftrate', queryString:'\/oslc\/os\/oslclaborcraftrate', queryLabel:'' }
               ]).
               setWhereClause('spi%3Alaborcode+in+%5B%24%7Bmylabor.laborcode%7D%5D+and+spi%3Adefaultcraft%3D1');
            var resourcePromise021 = PersistenceManager.initCollection( resource021 );


            var resource022 = new ResourceMetadata({
                  'pageSize' : 100,
                  'resourceName' : 'additionalworktype',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionalworktype',
                  'additionalData' : true,
                  'id' : 'awce192bc6',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:worktype,dcterms:title,spi:woclass,spi:type,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'additionalworktype_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw292a52b9',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'worktype',
                  'index' : true,
                  'artifactId' : 'additionalworktype_worktype_spiworktype',
                  'maxSize' : 5,
                  'id' : 'aw15ec09fd',
                  'local' : false,
                  'remoteName' : 'spi:worktype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'wtypedesc',
                  'index' : true,
                  'artifactId' : 'additionalworktype_wtypedesc_dctermstitle',
                  'maxSize' : 50,
                  'id' : 'aw404fc3d3',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'woclass',
                  'index' : true,
                  'artifactId' : 'additionalworktype_woclass_spiwoclass',
                  'maxSize' : 16,
                  'id' : 'awf40f5cb3',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi:woclass',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'type',
                  'index' : true,
                  'artifactId' : 'additionalworktype_type_spitype',
                  'maxSize' : 16,
                  'id' : 'aw67605897',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi:type',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'worktypeid',
                  'index' : false,
                  'artifactId' : 'additionalworktype_worktypeid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw5cda656a',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getworktype', queryString:'\/oslc\/os\/oslcworktype', queryLabel:'' }
               ]);
            var resourcePromise022 = PersistenceManager.initCollection( resource022 );


            var resource023 = new ResourceMetadata({
                  'pageSize' : 5000,
                  'resourceName' : 'msamcrew',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'msamcrew',
                  'id' : 'awf94b5018',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:ms_active,spi:ms_contractnum,oslc:identifier,spi:amcrew{oslc:title,oslc:shortTitle},spi:person{spi:displayname}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'msamcrew',
                  'name' : 'amcrew',
                  'index' : false,
                  'artifactId' : 'msamcrew_amcrew',
                  'maxSize' : 8,
                  'id' : 'awce045ca6',
                  'local' : false,
                  'remoteName' : 'spi:amcrew',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'msamcrew',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'msamcrew_description',
                  'maxSize' : 50,
                  'id' : 'aw1dfc3d68',
                  'local' : false,
                  'remoteName' : 'spi:amcrew',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ms_active',
                  'index' : false,
                  'artifactId' : 'msamcrew_ms_active',
                  'id' : 'awc81da017',
                  'local' : false,
                  'remoteName' : 'spi:ms_active',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:displayname',
                  'dataType' : 'inline',
                  'referenceResource' : 'msamcrew',
                  'name' : 'displayname',
                  'index' : false,
                  'artifactId' : 'msamcrew_displayname',
                  'maxSize' : 255,
                  'id' : 'awb705b1e8',
                  'local' : false,
                  'remoteName' : 'spi:person',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_contractnum',
                  'index' : false,
                  'artifactId' : 'msamcrew_ms_contractnum',
                  'maxSize' : 8,
                  'id' : 'awa447579a',
                  'local' : false,
                  'remoteName' : 'spi:ms_contractnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'msamcrew_ms_identifier',
                  'maxSize' : 19,
                  'id' : 'aw2ad3724a',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:identifier',
               }).
               setQueryBases([
                     {name:'getamcrew', queryString:'\/oslc\/os\/MS_SGZMOBILEAMCREW?savedQuery=MS_CREWCONTRACTSGZMOBILE', queryLabel:'' }
               ]);
            var resourcePromise023 = PersistenceManager.initCollection( resource023 );


            var resource024 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'assetattrtypes',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'assetattrtypes',
                  'id' : 'awe87f671c',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'assetattrtypes_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awbc6d2661',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'assetattrtypes_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw64d9f52b',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'assetattrtypes_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'awc5c691fb',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'assetattrtypes_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'awf58139cd',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'assetattrtypes_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw37ff9177',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'assetattrtypes_defaults_spidefaults',
                  'id' : 'aw5d0c63bb',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'assetattrtypes_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw947fa8ea',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'assetattrtypes_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw2bc1e679',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getassetattrtypes', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22DATATYPE%22');
            var resourcePromise024 = PersistenceManager.initCollection( resource024 );


            var resource025 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'domainwostatus',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainwostatus',
                  'id' : 'awe2144736',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domainwostatus_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw9dce90ad',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domainwostatus_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw21945a73',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainwostatus_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw5a3a28bc',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainwostatus_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'awd4228f01',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainwostatus_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw230a1408',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainwostatus_defaults_spidefaults',
                  'id' : 'awc2f0dafc',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainwostatus_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw60a698f6',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domainwostatus_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awb1013430',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getwostatus', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22WOSTATUS%22+and+spi%3Avalue+in+%5B%22APROVADO%22%2C%22CONC%22%2C%22NAOREALIZADA%22%2C%22INPRG%22%2C%22EMAND%22%5D');
            var resourcePromise025 = PersistenceManager.initCollection( resource025 );


            var resource026 = new ResourceMetadata({
                  'pageSize' : 100,
                  'resourceName' : 'domainAssetstatus',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainAssetstatus',
                  'id' : 'aw1036c42d',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domainAssetstatus_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw83deed10',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domainAssetstatus_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw5e4b9917',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainAssetstatus_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'awbb8dd58c',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainAssetstatus_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'awca32f2bc',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainAssetstatus_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw12b4e6bb',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainAssetstatus_defaults_spidefaults',
                  'id' : 'aw234727cc',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainAssetstatus_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'awb0dac458',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domainAssetstatus_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awc2ca3baa',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getlocassetstatus', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22LOCASSETSTATUS%22+and+spi%3Asiteid%21%3D%22*%22+and+spi%3Aorgid%21%3D%22*%22');
            var resourcePromise026 = PersistenceManager.initCollection( resource026 );


            var resource027 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'domainwoclass',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainwoclass',
                  'id' : 'awf038899c',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domainwoclass_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awfc35ef60',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domainwoclass_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw9f7afe26',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainwoclass_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw94bc6279',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainwoclass_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'awb5d9f0cc',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainwoclass_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'awe91d250',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainwoclass_defaults_spidefaults',
                  'id' : 'awc769039',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainwoclass_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'awf98f4d09',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domainwoclass_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw92bfadc0',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getwoclass', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22WOCLASS%22');
            var resourcePromise027 = PersistenceManager.initCollection( resource027 );


            var resource028 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'domainitemtype',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainitemtype',
                  'additionalData' : true,
                  'id' : 'awb03fcd84',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domainitemtype_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw62db75ea',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domainitemtype_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw4ecc6a53',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainitemtype_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw710cc987',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainitemtype_value_spivaljue',
                  'maxSize' : 50,
                  'id' : 'aw2df65f89',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainitemtype_title_spidescription',
                  'maxSize' : 256,
                  'id' : 'awc76742a8',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainitemtype_defaults_spidefaults',
                  'id' : 'awe9c63bc7',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainitemtype_shorttitle_spidomainid',
                  'maxSize' : 18,
                  'id' : 'aw52fb0acf',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domainitemtype_orgid_spisynonymdomainid',
                  'maxSize' : 19,
                  'id' : 'aw9e188d81',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getItemType', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22ITEMTYPE%22');
            var resourcePromise028 = PersistenceManager.initCollection( resource028 );


            var resource029 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'domaintypes',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domaintypes',
                  'id' : 'awa9c9d44c',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domaintypes_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awca00a0a4',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domaintypes_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'awd68f8658',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domaintypes_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw237560f2',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domaintypes_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'aw83ecbf08',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domaintypes_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw78707d2c',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domaintypes_defaults_spidefaults',
                  'id' : 'awbbbf92b2',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domaintypes_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'awc461a149',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domaintypes_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw8fe92b5e',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getdomaintypes', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22DOMTYPE%22');
            var resourcePromise029 = PersistenceManager.initCollection( resource029 );


            var resource030 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'domainworktype',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainworktype',
                  'id' : 'aw2d44e12a',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domainworktype_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw1360a9a',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domainworktype_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'awa1491ce5',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainworktype_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw6f285fc4',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainworktype_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'aw48da1536',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainworktype_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'awf278565e',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainworktype_defaults_spidefaults',
                  'id' : 'awf7e2ad84',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainworktype_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'awa9833f52',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domainworktype_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw7964c7d4',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getworktype', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22WORKTYPE%22');
            var resourcePromise030 = PersistenceManager.initCollection( resource030 );


            var resource031 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'statusChangeResource',
                  'resourceName' : 'statusChangeResource',
                  'id' : 'aw8e54bcf7',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'status',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_status_string',
                  'id' : 'awa736a284',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'statusdesc',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_statusdesc_string',
                  'id' : 'aw5085f7de',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'changedate',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_changedate_dateTime',
                  'id' : 'aw333260f4',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'memo',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_memo_string',
                  'maxSize' : 300,
                  'id' : 'awbc5e5f99',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise031 = PersistenceManager.initCollection( resource031 );


            var resource032 = new ResourceMetadata({
                  'refreshOnLogin' : 'true',
                  'pageSize' : 200,
                  'resourceName' : 'oslcmaxvars',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'oslcmaxvars',
                  'id' : 'aw62c90710',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:varname,spi:varvalue,spi:orgid,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'varname',
                  'index' : true,
                  'artifactId' : 'oslcmaxvars_varname_spivarname',
                  'maxSize' : 18,
                  'id' : 'aw5856cfa4',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:varname',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'varvalue',
                  'index' : false,
                  'artifactId' : 'oslcmaxvars_varvalue_spivarvalue',
                  'maxSize' : 254,
                  'id' : 'aw13572ab1',
                  'local' : false,
                  'remoteName' : 'spi:varvalue',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'oslcmaxvars_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awf84390c8',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'oslcmaxvars_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awd301f76a',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getmaxvarsinprglabtrans', queryString:'\/oslc\/os\/oslcmaxvars', queryLabel:'' }
               ]).
               setWhereClause('spi%3Avarname+in+%5B%22STARTTIMERINPRG%22%2C%22LABTRANSTOLERANCE%22%2C%22DOWNTIMEDFLTS%22%2C%22PLUSCMOBREADONLY%22%2C%22PLUSCAUTOSTATUS%22%2C%22PLUSCROTASSET%22%2C%22PLUSCPASTDUEVAL%22%2C%22PLUSCQUALTECH%22%2C%22PLUSCVALTOOL%22%5D');
            var resourcePromise032 = PersistenceManager.initCollection( resource032 );


            var resource033 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'wostatusResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'wostatusResource',
                  'id' : 'aw3056ff38',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : WoStatusObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi_wm:status,spi_wm:changedate,spi_wm:changeby,spi_wm:memo,spi_wm:orgid,spi_wm:fincntrlid,spi_wm:parent,spi_wm:glaccount').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'wostatusResource_identifier_dcterms_identifier',
                  'maxSize' : 19,
                  'id' : 'aw41805fdf',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'status',
                  'index' : false,
                  'artifactId' : 'wostatusResource_status_spi_wmstatus',
                  'maxSize' : 16,
                  'id' : 'aw3cfdfd7',
                  'local' : false,
                  'remoteName' : 'spi_wm:status',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'changedate',
                  'index' : false,
                  'artifactId' : 'wostatusResource_changedate_spi_wmchangedate',
                  'id' : 'awb0f70526',
                  'local' : false,
                  'remoteName' : 'spi_wm:changedate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'changeby',
                  'index' : false,
                  'artifactId' : 'wostatusResource_changeby_spi_wmchangeby',
                  'maxSize' : 30,
                  'id' : 'awbfe9522d',
                  'local' : false,
                  'remoteName' : 'spi_wm:changeby',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'memo',
                  'index' : false,
                  'artifactId' : 'wostatusResource_memo_spi_wmmemo',
                  'maxSize' : 50,
                  'id' : 'awa89e120a',
                  'local' : false,
                  'remoteName' : 'spi_wm:memo',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'wostatusResource_orgid_spi_wmorgid',
                  'maxSize' : 8,
                  'id' : 'awa15d33bd',
                  'local' : false,
                  'remoteName' : 'spi_wm:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'fincntrlid',
                  'index' : false,
                  'artifactId' : 'wostatusResource_fincntrlid_spi_wmfincntrlid',
                  'maxSize' : 8,
                  'id' : 'awa31f7447',
                  'local' : false,
                  'remoteName' : 'spi_wm:fincntrlid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'parent',
                  'index' : false,
                  'artifactId' : 'wostatusResource_parent_spi_wmparent',
                  'maxSize' : 20,
                  'id' : 'awdf919f55',
                  'local' : false,
                  'remoteName' : 'spi_wm:parent',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'gl',
                  'name' : 'glaccount',
                  'index' : false,
                  'artifactId' : 'wostatusResource_glaccount_spi_wmglaccount',
                  'maxSize' : 5,
                  'id' : 'awbf255b1f',
                  'local' : false,
                  'remoteName' : 'spi_wm:glaccount',
               }).
               setQueryBases([
                     {name:'getwostatus', queryString:'\/oslc\/os\/oslcwostatus', queryLabel:'' }
               ]);
            var resourcePromise033 = PersistenceManager.initCollection( resource033 );


            var resource034 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'materialSummary',
                  'resourceName' : 'materialSummary',
                  'id' : 'aw69943347',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'itemdisplay',
                  'index' : false,
                  'artifactId' : 'materialSummary_itemdisplay_string',
                  'id' : 'aweee7de53',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'descdisplay',
                  'index' : false,
                  'artifactId' : 'materialSummary_descdisplay_string',
                  'id' : 'awd57e0c89',
                  'persistent' : true,
                  'key' : '2',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'storeroomdisplay',
                  'index' : false,
                  'artifactId' : 'materialSummary_storeroomdisplay_string',
                  'id' : 'awa8fab96b',
                  'persistent' : true,
                  'key' : '3',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'quantitydisplay',
                  'index' : false,
                  'artifactId' : 'materialSummary_quantitydisplay_string',
                  'id' : 'awe8292520',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'materialcheckbox',
                  'index' : false,
                  'artifactId' : 'materialSummary_materialcheckbox_boolean',
                  'id' : 'aw5c5b2cb3',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise034 = PersistenceManager.initCollection( resource034 );


            var resource035 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'toolSummary',
                  'resourceName' : 'toolSummary',
                  'id' : 'aw9df7b460',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'tooldisplay',
                  'index' : false,
                  'artifactId' : 'toolSummary_tooldisplay_string',
                  'id' : 'aw8856ae59',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'descdisplay',
                  'index' : false,
                  'artifactId' : 'toolSummary_descdisplay_string',
                  'id' : 'aw815403d3',
                  'persistent' : true,
                  'key' : '2',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'storeroomdisplay',
                  'index' : false,
                  'artifactId' : 'toolSummary_storeroomdisplay_string',
                  'id' : 'aw69372531',
                  'persistent' : true,
                  'key' : '3',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'quantitydisplay',
                  'index' : false,
                  'artifactId' : 'toolSummary_quantitydisplay_string',
                  'id' : 'aw44a8d41e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'toolcheckbox',
                  'index' : false,
                  'artifactId' : 'toolSummary_toolcheckbox_boolean',
                  'id' : 'awc95cd17',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise035 = PersistenceManager.initCollection( resource035 );


            var resource036 = new ResourceMetadata({
                  'refreshOnLogin' : 'true',
                  'pageSize' : 10,
                  'resourceName' : 'laborcrew',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'laborcrew',
                  'id' : 'aw8e8b0a79',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : CrewLaborObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,oslc:shortTitle,dcterms:title,spi:vendor,spi:contractnum,spi:lbsinterval,spi:lbsdatafromwo,spi:lbslaborbased').
               setSupportiveFieldsSelectExpression('spi:amcrewamcrewlabor{spi:laborcode,spi:skilllevel,spi:position,spi:craft,spi:effectivedate,spi:enddate,spi:vendor,spi:contractnum,spi:amcrewlaborid},spi:amcrewamcrewtool{spi:assetnum,spi:effectivedate,spi:enddate,spi:toolseq,spi:siteid,spi:amcrewtoolid}').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'laborcrew_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awad8a1191',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'crewid',
                  'index' : true,
                  'artifactId' : 'laborcrew_crewid_oslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'aw8c516420',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'laborcrew_description_dctermstitle',
                  'maxSize' : 50,
                  'id' : 'awbd5bb63d',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'vendor',
                  'index' : false,
                  'artifactId' : 'laborcrew_vendor_spivendor',
                  'maxSize' : 25,
                  'id' : 'aw933559dd',
                  'local' : false,
                  'remoteName' : 'spi:vendor',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'contractnum',
                  'index' : false,
                  'artifactId' : 'laborcrew_contractnum_spicontractnum',
                  'maxSize' : 8,
                  'id' : 'awec4d3732',
                  'local' : false,
                  'remoteName' : 'spi:contractnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'laborCrewList',
                  'name' : 'crewlabor',
                  'index' : false,
                  'artifactId' : 'laborcrew_crewlabor_spiamcrewamcrewlabor',
                  'id' : 'aw92618bf1',
                  'describedByResource' : 'laborCrewList',
                  'local' : false,
                  'remoteName' : 'spi:amcrewamcrewlabor',
                  'selectExpression' : 'spi:amcrewamcrewlabor{spi:laborcode,spi:skilllevel,spi:position,spi:craft,spi:effectivedate,spi:enddate,spi:vendor,spi:contractnum,spi:amcrewlaborid}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'toolCrewList',
                  'name' : 'crewtool',
                  'index' : false,
                  'artifactId' : 'laborcrew_crewtool_spiamcrewamcrewtool',
                  'id' : 'aw56d92612',
                  'describedByResource' : 'toolCrewList',
                  'local' : false,
                  'remoteName' : 'spi:amcrewamcrewtool',
                  'selectExpression' : 'spi:amcrewamcrewtool{spi:assetnum,spi:effectivedate,spi:enddate,spi:toolseq,spi:siteid,spi:amcrewtoolid}',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'lbsinterval',
                  'index' : false,
                  'artifactId' : 'additionalamcrew_lbsinterval',
                  'id' : 'aw978e2314',
                  'local' : false,
                  'remoteName' : 'spi:lbsinterval',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'lbsdatafromwo',
                  'index' : false,
                  'artifactId' : 'additionalamcrew_lbsdatafromwo',
                  'id' : 'aw22b12b95',
                  'local' : false,
                  'remoteName' : 'spi:lbsdatafromwo',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'lbslaborbased',
                  'index' : false,
                  'artifactId' : 'additionalamcrew_lbslaborbased',
                  'id' : 'aw3a6baf8d',
                  'local' : false,
                  'remoteName' : 'spi:lbslaborbased',
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'actualstaskid',
                  'index' : false,
                  'artifactId' : 'laborcrew_actualstaskid_integer',
                  'id' : 'aw1e6a0e06',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'startDateChanged',
                  'dataType' : 'date',
                  'name' : 'startdate',
                  'index' : false,
                  'artifactId' : 'laborcrew_startdate_date',
                  'id' : 'awb9fd141',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'startTimeChanged',
                  'dataType' : 'time',
                  'name' : 'starttime',
                  'index' : false,
                  'artifactId' : 'laborcrew_starttime_time',
                  'id' : 'aw43f6fea7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'finishDateChanged',
                  'dataType' : 'date',
                  'name' : 'finishdate',
                  'index' : false,
                  'artifactId' : 'laborcrew_finishdate_date',
                  'id' : 'aw93c5622b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'finishTimeChanged',
                  'dataType' : 'time',
                  'name' : 'finishtime',
                  'index' : false,
                  'artifactId' : 'laborcrew_finishtime_time',
                  'id' : 'awdbac4dcd',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'regularHoursChanged',
                  'dataType' : 'duration',
                  'name' : 'regularhours',
                  'index' : false,
                  'artifactId' : 'laborcrew_regularhours_duration',
                  'id' : 'aw7fff1b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'transtype',
                  'index' : false,
                  'artifactId' : 'laborcrew_transtype_string',
                  'id' : 'awa920352f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'revisionnum',
                  'index' : false,
                  'artifactId' : 'laborcrew_revisionnum_string',
                  'id' : 'aw70f9fc7a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'premiumpaycode',
                  'index' : false,
                  'artifactId' : 'laborcrew_premiumpaycode_string',
                  'id' : 'awab33f959',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'premiumpayhours',
                  'index' : false,
                  'artifactId' : 'laborcrew_premiumpayhours_string',
                  'id' : 'aw5833c04',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'timerStatus',
                  'index' : false,
                  'artifactId' : 'laborcrew_timerStatus_string',
                  'id' : 'aw572711a',
                  'persistent' : true,
                  'local' : true,
               }).
               setQueryBases([
                     {name:'getamcrew', queryString:'\/oslc\/os\/oslcamcrew', queryLabel:'' }
               ]).
               setWhereClause('spi%3Aworksite%3D%24%7Bworksite%7D+and+spi%3Aorgid%3D%24%7Borgid%7D+and+spi%3Avendor%3D%24%7Bvendor%7D');
            var resourcePromise036 = PersistenceManager.initCollection( resource036 );


            var resource037 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'searchWorkOrder',
                  'resourceName' : 'searchWorkOrder',
                  'id' : 'aw2c6811c9',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'wonum',
                  'index' : true,
                  'artifactId' : 'searchWorkOrder_wonum_string',
                  'id' : 'awc4dca8c0',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'searchWorkOrder_description_string',
                  'id' : 'aw9d25a996',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'statusdesc',
                  'index' : false,
                  'artifactId' : 'searchWorkOrder_statusdesc_string',
                  'id' : 'aw8422b2e0',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'asset',
                  'index' : false,
                  'artifactId' : 'searchWorkOrder_asset_string',
                  'id' : 'aw9e71d4f9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'location',
                  'index' : false,
                  'artifactId' : 'searchWorkOrder_location_string',
                  'id' : 'aw6c36ef21',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'priority',
                  'index' : false,
                  'artifactId' : 'searchWorkOrder_priority_string',
                  'id' : 'awdfd90e58',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'date',
                  'name' : 'startdate',
                  'index' : false,
                  'artifactId' : 'searchWorkOrder_startdate_date',
                  'id' : 'aw27ab3eaa',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'date',
                  'name' : 'enddate',
                  'index' : false,
                  'artifactId' : 'searchWorkOrder_enddate_date',
                  'id' : 'aw9521872e',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise037 = PersistenceManager.initCollection( resource037 );


            var resource038 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'crewToolResource',
                  'resourceName' : 'crewToolResource',
                  'id' : 'awdb3ee56c',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'classInstance' : CrewToolObject,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'amcrew',
                  'index' : true,
                  'artifactId' : 'crewToolResource_amcrew_string',
                  'id' : 'aw704ec380',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'itemnum',
                  'index' : false,
                  'artifactId' : 'crewToolResource_itemnum_string',
                  'id' : 'awe6d79daf',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'crewToolResource_description_string',
                  'id' : 'awe0d0c2be',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'itemsetid',
                  'index' : false,
                  'artifactId' : 'crewToolResource_itemsetid_string',
                  'id' : 'aw8c382269',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'toolseq',
                  'index' : false,
                  'artifactId' : 'crewToolResource_toolseq_string',
                  'id' : 'aw1a6c930d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'crewToolResource_siteid_string',
                  'id' : 'awf1ac656b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetnum',
                  'index' : false,
                  'artifactId' : 'crewToolResource_assetnum_string',
                  'id' : 'aw75dba2b7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'toolHoursChanged',
                  'dataType' : 'duration',
                  'name' : 'toolhrs',
                  'index' : false,
                  'artifactId' : 'crewToolResource_toolhrs_duration',
                  'id' : 'awfeef2526',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'actualstaskid',
                  'index' : false,
                  'artifactId' : 'crewToolResource_actualstaskid_integer',
                  'id' : 'aw3b1af8a6',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise038 = PersistenceManager.initCollection( resource038 );


            var resource039 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'crewLaborResource',
                  'resourceName' : 'crewLaborResource',
                  'id' : 'awd4953e9',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'classInstance' : CrewLaborObject,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'amcrew',
                  'index' : true,
                  'artifactId' : 'crewLaborResource_amcrew_string',
                  'id' : 'awc7501f69',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'actualstaskid',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_actualstaskid_integer',
                  'id' : 'aw50dd1832',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'laborcode',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_laborcode_string',
                  'id' : 'aw641f8622',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'laborname',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_laborname_string',
                  'id' : 'aw1de14dcd',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'craft',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_craft_string',
                  'id' : 'aw21b9a2d5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'skilllevel',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_skilllevel_string',
                  'id' : 'aw6c2b55c3',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'position',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_position_string',
                  'id' : 'aw946bb3e1',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'transtype',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_transtype_string',
                  'id' : 'awc237516e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'vendor',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_vendor_string',
                  'id' : 'aw34c2f147',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'contractnum',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_contractnum_string',
                  'id' : 'aw839ed68f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'revisionnum',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_revisionnum_string',
                  'id' : 'awd3444c68',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'startDateChanged',
                  'dataType' : 'date',
                  'name' : 'startdate',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_startdate_date',
                  'id' : 'awe2c5368f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'startTimeChanged',
                  'dataType' : 'time',
                  'name' : 'starttime',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_starttime_time',
                  'id' : 'awaaac1969',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'finishDateChanged',
                  'dataType' : 'date',
                  'name' : 'finishdate',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_finishdate_date',
                  'id' : 'aweff0d77b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'finishTimeChanged',
                  'dataType' : 'time',
                  'name' : 'finishtime',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_finishtime_time',
                  'id' : 'awa799f89d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'regularHoursChanged',
                  'dataType' : 'duration',
                  'name' : 'regularhours',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_regularhours_duration',
                  'id' : 'aw4ec8e92f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'duration',
                  'name' : 'premiumpayhours',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_premiumpayhours_duration',
                  'id' : 'awfd09a984',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'premiumpaycode',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_premiumpaycode_string',
                  'id' : 'awe584ef6d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'duration',
                  'name' : 'actuallaborhours',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_actuallaborhours_duration',
                  'id' : 'awb50acf2f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'timerStatus',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_timerStatus_string',
                  'id' : 'awa6cfc108',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise039 = PersistenceManager.initCollection( resource039 );


            var resource040 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'laborCrewList',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'laborCrewList',
                  'id' : 'awd45bb017',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:laborcode,spi:skilllevel,spi:position,spi:craft,spi:effectivedate,spi:enddate,spi:vendor,spi:contractnum,spi:amcrewlaborid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'laborcode',
                  'index' : true,
                  'artifactId' : 'laborCrewList_laborcode_spilaborcode',
                  'maxSize' : 8,
                  'id' : 'aw3df08ccd',
                  'local' : false,
                  'remoteName' : 'spi:laborcode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'skilllevel',
                  'index' : false,
                  'artifactId' : 'laborCrewList_skilllevel_spiskilllevel',
                  'maxSize' : 15,
                  'id' : 'aw6f0b22d8',
                  'local' : false,
                  'remoteName' : 'spi:skilllevel',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'position',
                  'index' : false,
                  'artifactId' : 'laborCrewList_position_spiposition',
                  'maxSize' : 20,
                  'id' : 'awf0f9e9b',
                  'key' : '1',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:position',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'craft',
                  'index' : false,
                  'artifactId' : 'laborCrewList_craft_spicraft',
                  'maxSize' : 8,
                  'id' : 'aweb04883d',
                  'local' : false,
                  'remoteName' : 'spi:craft',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'effectivedate',
                  'index' : false,
                  'artifactId' : 'laborCrewList_effectivedate_spieffectivedate',
                  'id' : 'aw2a6da13d',
                  'local' : false,
                  'remoteName' : 'spi:effectivedate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'enddate',
                  'index' : false,
                  'artifactId' : 'laborCrewList_enddate_spienddate',
                  'id' : 'awf6ac64aa',
                  'local' : false,
                  'remoteName' : 'spi:enddate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'vendor',
                  'index' : false,
                  'artifactId' : 'laborCrewList_vendor_spivendor',
                  'maxSize' : 25,
                  'id' : 'awcd80e1f1',
                  'local' : false,
                  'remoteName' : 'spi:vendor',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'contractnum',
                  'index' : false,
                  'artifactId' : 'laborCrewList_contractnum_spicontractnum',
                  'maxSize' : 8,
                  'id' : 'awa76cfcc0',
                  'local' : false,
                  'remoteName' : 'spi:contractnum',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'amcrewlaborid',
                  'index' : false,
                  'artifactId' : 'laborCrewList_AMCREWLABORID_spiamcrewlaborid',
                  'id' : 'aw36d69215',
                  'key' : '2',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:amcrewlaborid',
               });
            var resourcePromise040 = PersistenceManager.initCollection( resource040 );


            var resource041 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'toolCrewList',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'toolCrewList',
                  'id' : 'awf9e1d57',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:assetnum,spi:effectivedate,spi:enddate,spi:toolseq,spi:siteid,spi:amcrewtoolid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'assetnum',
                  'index' : true,
                  'artifactId' : 'toolCrewList_assetnum_spiassetnum',
                  'maxSize' : 12,
                  'id' : 'aw9a3b0423',
                  'local' : false,
                  'remoteName' : 'spi:assetnum',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'effectivedate',
                  'index' : false,
                  'artifactId' : 'toolCrewList_effectivedate_spieffectivedate',
                  'id' : 'awcae7313',
                  'local' : false,
                  'remoteName' : 'spi:effectivedate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'enddate',
                  'index' : false,
                  'artifactId' : 'toolCrewList_enddate_spienddate',
                  'id' : 'aw66395565',
                  'local' : false,
                  'remoteName' : 'spi:enddate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'toolseq',
                  'index' : false,
                  'artifactId' : 'toolCrewList_toolseq_spitoolseq',
                  'maxSize' : 8,
                  'id' : 'awba5f1faa',
                  'key' : '1',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:toolseq',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'toolCrewList_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw78e1294b',
                  'local' : false,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'amcrewtoolid',
                  'index' : false,
                  'artifactId' : 'toolCrewList_amcrewtoolid_spiamcrewtoolid',
                  'id' : 'aw736af7a7',
                  'key' : '2',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:amcrewtoolid',
               });
            var resourcePromise041 = PersistenceManager.initCollection( resource041 );


            var resource042 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'userInfo',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'userInfo',
                  'id' : 'awcdc6e618',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:userid,spi:loginid,spi:storeroomsite,spi:type,spi:personid,spi:sysuser,spi:querywithsite,spi:status,spi:emailpswd,spi:screenreader,spi:failedlogins,spi:inactivesites,spi:memo,spi:defsite{spi:orgid,oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('spi:groupuser{spi:groupname}').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'maxuserid',
                  'index' : false,
                  'artifactId' : 'userInfo_maxuserid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awde7d904c',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'userid',
                  'index' : false,
                  'artifactId' : 'userInfo_userid_spiuserid',
                  'maxSize' : 30,
                  'id' : 'aw1721e125',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:userid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'loginid',
                  'index' : false,
                  'artifactId' : 'userInfo_loginid_spiloginid',
                  'maxSize' : 50,
                  'id' : 'aw571ea7ff',
                  'local' : false,
                  'remoteName' : 'spi:loginid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'storeroomsite',
                  'index' : false,
                  'artifactId' : 'userInfo_storeroomsite_spistoreroomsite',
                  'maxSize' : 8,
                  'id' : 'aw783663cd',
                  'local' : false,
                  'remoteName' : 'spi:storeroomsite',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'type',
                  'index' : false,
                  'artifactId' : 'userInfo_type_spitype',
                  'maxSize' : 30,
                  'id' : 'aw8dfd38c1',
                  'local' : false,
                  'remoteName' : 'spi:type',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'personid',
                  'index' : false,
                  'artifactId' : 'userInfo_personid_spipersonid',
                  'maxSize' : 30,
                  'id' : 'aw5921e790',
                  'local' : false,
                  'remoteName' : 'spi:personid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'sysuser',
                  'index' : false,
                  'artifactId' : 'userInfo_sysuser_spisysuser',
                  'id' : 'aw23d89622',
                  'local' : false,
                  'remoteName' : 'spi:sysuser',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'querywithsite',
                  'index' : false,
                  'artifactId' : 'userInfo_querywithsite_spiquerywithsite',
                  'id' : 'awb3145bb0',
                  'local' : false,
                  'remoteName' : 'spi:querywithsite',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'userInfo',
                  'name' : 'defsite',
                  'index' : false,
                  'artifactId' : 'userInfo_defsite_spidefsiteoslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'awfde9fdbe',
                  'local' : false,
                  'remoteName' : 'spi:defsite',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:orgid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'userInfo',
                  'name' : 'deforg',
                  'index' : false,
                  'artifactId' : 'userInfo_deforg_spidefsitespiorgid',
                  'maxSize' : 8,
                  'id' : 'aw4f037420',
                  'local' : false,
                  'remoteName' : 'spi:defsite',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'status',
                  'index' : false,
                  'artifactId' : 'userInfo_status_spistatus',
                  'maxSize' : 12,
                  'id' : 'aw6215aa5a',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'emailpswd',
                  'index' : false,
                  'artifactId' : 'userInfo_emailpswd_spiemailpswd',
                  'id' : 'aw4014ff32',
                  'local' : false,
                  'remoteName' : 'spi:emailpswd',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'screenreader',
                  'index' : false,
                  'artifactId' : 'userInfo_screenreader_spiscreenreader',
                  'id' : 'aw33b6facb',
                  'local' : false,
                  'remoteName' : 'spi:screenreader',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'name' : 'failedlogins',
                  'index' : false,
                  'artifactId' : 'userInfo_failedlogins_spifailedlogins',
                  'id' : 'aw207c7908',
                  'local' : false,
                  'remoteName' : 'spi:failedlogins',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'inactivesites',
                  'index' : false,
                  'artifactId' : 'userInfo_inactivesites_spiinactivesites',
                  'id' : 'aw616d0513',
                  'local' : false,
                  'remoteName' : 'spi:inactivesites',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'userRoles',
                  'name' : 'groupList',
                  'index' : false,
                  'artifactId' : 'userInfo_groupList_spigroupuser',
                  'id' : 'aw52840d8c',
                  'describedByResource' : 'userRoles',
                  'local' : false,
                  'remoteName' : 'spi:groupuser',
                  'selectExpression' : 'spi:groupuser{spi:groupname}',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'memo',
                  'index' : false,
                  'artifactId' : 'userInfo_memo',
                  'maxSize' : 256,
                  'id' : 'awbe9d6167',
                  'local' : false,
                  'remoteName' : 'spi:memo',
               }).
               setQueryBases([
                     {name:'currentUser', queryString:'\/oslc\/os\/oslcmaxuser?savedQuery=currentUser', queryLabel:'' }
               ]);
            var resourcePromise042 = PersistenceManager.initCollection( resource042 );


            var resource043 = new ResourceMetadata({
                  'refreshOnLogin' : 'true',
                  'pageSize' : 10,
                  'resourceName' : 'amtickets',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'amtickets',
                  'id' : 'aw2fd576a9',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi_wm:ms_siteid,spi_wm:ms_status,spi_wm:ms_plate,spi_wm:ms_contractnum,spi_wm:ms_historyflag,spi_wm:ms_actualdate,spi_wm:ms_enterby,spi_wm:ms_itemnum').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'ms_woticketid',
                  'index' : true,
                  'artifactId' : 'ms_woticketid_dctermsidentifier',
                  'id' : 'awbf819edd',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'ms_siteid',
                  'index' : false,
                  'artifactId' : 'wotickets_ms_siteid_spi_wmms_siteid',
                  'id' : 'awf501f9dc',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_siteid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'ms_status',
                  'index' : false,
                  'artifactId' : 'wotickets_ms_status_spi_wmms_status',
                  'id' : 'aw9bb6806c',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_status',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'ms_plate',
                  'index' : false,
                  'artifactId' : 'wotickets_ms_plate_spi_wmms_plate',
                  'id' : 'aw913acce0',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_plate',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'ms_contractnum',
                  'index' : false,
                  'artifactId' : 'wotickets_ms_contractnum_spi_wmms_contractnum',
                  'id' : 'aw2a146d0d',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_contractnum',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'ms_historyflag',
                  'index' : false,
                  'artifactId' : 'wotickets_ms_historyflag_spi_wmms_historyflag',
                  'id' : 'awdf46c528',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_historyflag',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'ms_actualdate',
                  'index' : false,
                  'artifactId' : 'wotickets_ms_actualdate_spi_wmms_actualdate',
                  'id' : 'awd30e71b6',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_actualdate',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'ms_enterby',
                  'index' : false,
                  'artifactId' : 'wotickets_ms_actualdate_spi_wmms_enterby',
                  'id' : 'awc97edfeb',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_enterby',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'itemnumTK',
                  'index' : false,
                  'artifactId' : 'wotickets_ms_actualdate_spi_wmms_ms_itemnum',
                  'id' : 'aw5e0f1b6e',
                  'local' : false,
                  'remoteName' : 'spi_wm:ms_itemnum',
               }).
               setQueryBases([
                     {name:'getwotickets', queryString:'\/oslc\/os\/ms_oslcwotickets?savedQuery=WOtickets_carregados', queryLabel:'' }
               ]);
            var resourcePromise043 = PersistenceManager.initCollection( resource043 );


            var resource044 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'userRoles',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'userRoles',
                  'id' : 'aw505b3d11',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:groupname').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'roleName',
                  'index' : false,
                  'artifactId' : 'userRoles_roleName_spigroupname',
                  'maxSize' : 30,
                  'id' : 'aw96e0c83c',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:groupname',
               });
            var resourcePromise044 = PersistenceManager.initCollection( resource044 );


            var resource045 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'appDocType',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'appDocType',
                  'id' : 'aw1b80930e',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:appdoctypeid,spi:doctype,spi:app').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'appDocType_identifier_spiappdoctypeid',
                  'id' : 'aw4e3b4d85',
                  'local' : false,
                  'remoteName' : 'spi:appdoctypeid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'doctype',
                  'index' : true,
                  'artifactId' : 'appDocType_doctype_spidoctype',
                  'maxSize' : 16,
                  'id' : 'aw8863ce66',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:doctype',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'app',
                  'index' : true,
                  'artifactId' : 'appDocType_app_spiapp',
                  'maxSize' : 40,
                  'id' : 'awc818771',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:app',
               }).
               setQueryBases([
                     {name:'getWODocTypes', queryString:'\/oslc\/os\/oslcappdoctype?oslc.where=spi:app=%22WOTRACK%22', queryLabel:'' }
               ]);
            var resourcePromise045 = PersistenceManager.initCollection( resource045 );


            var resource046 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'site',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'site',
                  'id' : 'aw694309e4',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('oslc:shortTitle,spi:orgid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'site_siteid_oslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'awed696d5a',
                  'key' : '1',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'site_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw1ad86d03',
                  'local' : false,
                  'remoteName' : 'spi:orgid',
               }).
               setQueryBases([
                     {name:'getSite', queryString:'\/oslc\/os\/oslcsite', queryLabel:'' }
               ]);
            var resourcePromise046 = PersistenceManager.initCollection( resource046 );


            var resource047 = new ResourceMetadata({
                  'pageSize' : 20,
                  'resourceName' : 'maxdomain',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'maxdomain',
                  'id' : 'aw9e88f39c',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('spi_wm:domainid,spi_wm:maxdomainid,spi_wm:description,spi_wm:maxtype,spi_wm:domaintype').
               setSupportiveFieldsSelectExpression('spi_wm:numericdomain{spi_wm:value,spi_wm:valueid,spi_wm:numericdomainid,spi_wm:description},spi_wm:alndomain{spi_wm:value,spi_wm:valueid,spi_wm:alndomainid,spi_wm:description}').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'index' : true,
                  'maxSize' : 18,
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'name' : 'domainid',
                  'artifactId' : 'maxdomain_domainid_spi_wmdomainid',
                  'id' : 'awc9065e0f',
                  'key' : '1',
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'maxdomainid',
                  'index' : true,
                  'artifactId' : 'maxdomain_maxdomainid_spi_wmmaxdomainid',
                  'id' : 'awe4040bae',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi_wm:maxdomainid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'maxdomain_description_spi_wmdescription',
                  'maxSize' : 105,
                  'id' : 'awbf81bbee',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'maxtype',
                  'index' : false,
                  'artifactId' : 'maxdomain_maxtype_spi_wmmaxtype',
                  'maxSize' : 8,
                  'id' : 'awa4cffa46',
                  'local' : false,
                  'remoteName' : 'spi_wm:maxtype',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domaintype',
                  'index' : true,
                  'artifactId' : 'maxdomain_domaintype_spi_wmdomaintype',
                  'maxSize' : 20,
                  'id' : 'aw3560f116',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi_wm:domaintype',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'numericDomainResource',
                  'name' : 'numericdomain',
                  'index' : true,
                  'artifactId' : 'maxdomain_numericdomain_spi_wmnumericdomain',
                  'id' : 'awc8144a7e',
                  'describedByResource' : 'numericDomainResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:numericdomain',
                  'selectExpression' : 'spi_wm:numericdomain{spi_wm:value,spi_wm:valueid,spi_wm:numericdomainid,spi_wm:description}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'alnDomainResource',
                  'name' : 'alndomain',
                  'index' : true,
                  'artifactId' : 'maxdomain_alndomain_spi_wmalndomain',
                  'id' : 'awe8378d54',
                  'describedByResource' : 'alnDomainResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:alndomain',
                  'selectExpression' : 'spi_wm:alndomain{spi_wm:value,spi_wm:valueid,spi_wm:alndomainid,spi_wm:description}',
               }).
               setQueryBases([
                     {name:'getmaxdomain', queryString:'\/oslc\/os\/oslcmaxdomain?savedQuery=getWorkOrderSpecificationDomains', queryLabel:'' }
               ]).
               setWhereClause('spi_wm%3Adomaintype+in+%5B%22NUMERIC%22%2C%22ALN%22%2C%22TABLE%22%5D');
            var resourcePromise047 = PersistenceManager.initCollection( resource047 );


            var resource048 = new ResourceMetadata({
                  'pageSize' : 20,
                  'resourceName' : 'maxdomainAsset',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'maxdomainAsset',
                  'id' : 'aw43afebac',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('spi_wm:domainid,spi_wm:maxdomainid,spi_wm:description,spi_wm:maxtype,spi_wm:domaintype').
               setSupportiveFieldsSelectExpression('spi_wm:numericdomain{spi_wm:value,spi_wm:valueid,spi_wm:numericdomainid,spi_wm:description},spi_wm:alndomain{spi_wm:value,spi_wm:valueid,spi_wm:alndomainid,spi_wm:description}').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'index' : true,
                  'maxSize' : 18,
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'name' : 'domainid',
                  'artifactId' : 'maxdomainasset_domainid_spi_wmdomainid',
                  'id' : 'aw57b1e607',
                  'key' : '1',
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'maxdomainid',
                  'index' : true,
                  'artifactId' : 'maxdomainasset_maxdomainid_spi_wmmaxdomainid',
                  'id' : 'aw5fc829cf',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi_wm:maxdomainid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'maxdomainasset_description_spi_wmdescription',
                  'maxSize' : 105,
                  'id' : 'aw44d998f',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'maxtype',
                  'index' : false,
                  'artifactId' : 'maxdomainasset_maxtype_spi_wmmaxtype',
                  'maxSize' : 8,
                  'id' : 'aw5f900621',
                  'local' : false,
                  'remoteName' : 'spi_wm:maxtype',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domaintype',
                  'index' : true,
                  'artifactId' : 'maxdomainasset_domaintype_spi_wmdomaintype',
                  'maxSize' : 20,
                  'id' : 'aw87aaf06d',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi_wm:domaintype',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'numericDomainResource',
                  'name' : 'numericdomain',
                  'index' : true,
                  'artifactId' : 'maxdomainasset_numericdomain_spi_wmnumericdomain',
                  'id' : 'aw4bbbbad0',
                  'describedByResource' : 'numericDomainResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:numericdomain',
                  'selectExpression' : 'spi_wm:numericdomain{spi_wm:value,spi_wm:valueid,spi_wm:numericdomainid,spi_wm:description}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'alnDomainResource',
                  'name' : 'alndomain',
                  'index' : true,
                  'artifactId' : 'maxdomainasset_alndomain_spi_wmalndomain',
                  'id' : 'awe554a255',
                  'describedByResource' : 'alnDomainResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:alndomain',
                  'selectExpression' : 'spi_wm:alndomain{spi_wm:value,spi_wm:valueid,spi_wm:alndomainid,spi_wm:description}',
               }).
               setQueryBases([
                     {name:'getmaxdomainasset', queryString:'\/oslc\/os\/oslcmaxdomain?savedQuery=getAssetSpecificationDomains', queryLabel:'' }
               ]).
               setWhereClause('spi_wm%3Adomaintype+in+%5B%22NUMERIC%22%2C%22ALN%22%2C%22TABLE%22%5D');
            var resourcePromise048 = PersistenceManager.initCollection( resource048 );


            var resource049 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'numericDomainResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'numericDomainResource',
                  'id' : 'aw826a14cc',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : MaxDomainObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:value,spi_wm:valueid,spi_wm:numericdomainid,spi_wm:description').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'numericDomainResource_value_spi_wmvalue',
                  'id' : 'aw89dda200',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi_wm:value',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'valueid',
                  'index' : false,
                  'artifactId' : 'numericDomainResource_valueid_spi_wmvalueid',
                  'maxSize' : 300,
                  'id' : 'aw331b53bf',
                  'local' : false,
                  'remoteName' : 'spi_wm:valueid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'numericdomainid',
                  'index' : true,
                  'artifactId' : 'numericDomainResource_numericdomainid_spi_wmnumericdomainid',
                  'id' : 'awae247ee',
                  'isExactMatchIndex' : 'true',
                  'key' : '1',
                  'local' : false,
                  'remoteName' : 'spi_wm:numericdomainid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'serverDescription',
                  'index' : true,
                  'artifactId' : 'numericDomainResource_description_spi_wmdescription',
                  'maxSize' : 117,
                  'id' : 'aw171ba1ea',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'formula' : '(${serverDescription} || ${value})',
                  'index' : true,
                  'artifactId' : 'numericDomainResource_description_local',
                  'id' : 'aw1aeac532',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise049 = PersistenceManager.initCollection( resource049 );


            var resource050 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'alnDomainResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'alnDomainResource',
                  'id' : 'awc3250113',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : MaxDomainObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:value,spi_wm:valueid,spi_wm:alndomainid,spi_wm:description').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'alnDomainResource_value_spi_wmvalue',
                  'maxSize' : 254,
                  'id' : 'aw758c8835',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi_wm:value',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'valueid',
                  'index' : false,
                  'artifactId' : 'alnDomainResource_valueid_spi_wmvalueid',
                  'maxSize' : 300,
                  'id' : 'awd69f4a38',
                  'local' : false,
                  'remoteName' : 'spi_wm:valueid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'alndomainid',
                  'index' : true,
                  'artifactId' : 'alnDomainResource_alndomainid_spi_wmalndomainid',
                  'id' : 'awb35fc8f9',
                  'isExactMatchIndex' : 'true',
                  'key' : '1',
                  'local' : false,
                  'remoteName' : 'spi_wm:alndomainid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'serverDescription',
                  'index' : true,
                  'artifactId' : 'alnDomainResource_description_spi_wmdescription',
                  'maxSize' : 132,
                  'id' : 'awd9b6ea55',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'formula' : '(${serverDescription} || ${value})',
                  'index' : true,
                  'artifactId' : 'alnDomainResource_description_local',
                  'id' : 'awe6bbef07',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise050 = PersistenceManager.initCollection( resource050 );


            var resource051 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'workOrderSpecResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'workOrderSpecResource',
                  'id' : 'aw5b678cf0',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:pd_spec_required,spi_wm:workorderspecid,spi_wm:classstructureid,spi_wm:mandatory,spi_wm:refobjectname,spi_wm:orgid,spi_wm:changedate,spi_wm:displaysequence,spi_wm:changeby,spi_wm:refobjectid,spi_wm:numvalue,spi_wm:alnvalue,spi_wm:tablevalue,spi_wm:section,spi_wm:measureunitid,spi_wm:anywhererefid,spi_wm:classspec{spi_wm:domainid,spi_wm:classspecid{spi_wm:classspecid}},spi_wm:assetattr{spi_wm:assetattrid,spi_wm:description,spi_wm:datatype}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'pd_spec_required',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_pd_spec_required_spi_wmwpd_spec_required',
                  'id' : 'awf78eec4d',
                  'local' : false,
                  'remoteName' : 'spi_wm:pd_spec_required',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'workorderspecid',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_workorderspecid_spi_wmworkorderspecid',
                  'id' : 'awe04160a2',
                  'key' : '1',
                  'local' : false,
                  'remoteName' : 'spi_wm:workorderspecid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classstructureid',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_classstructureid_spi_wmclassstructureid',
                  'maxSize' : 20,
                  'id' : 'awbad6bdb4',
                  'local' : false,
                  'remoteName' : 'spi_wm:classstructureid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'mandatory',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_mandatory_spi_wmmandatory',
                  'id' : 'aw17914d50',
                  'local' : false,
                  'remoteName' : 'spi_wm:mandatory',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'refobjectname',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_refobjectname_spi_wmrefobjectname',
                  'maxSize' : 30,
                  'id' : 'aw3ee9358d',
                  'local' : false,
                  'remoteName' : 'spi_wm:refobjectname',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_orgid_spi_wmorgid',
                  'maxSize' : 8,
                  'id' : 'aw567ea9c8',
                  'local' : false,
                  'remoteName' : 'spi_wm:orgid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'changedate',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_changedate_spi_wmchangedate',
                  'id' : 'aw290ce2b8',
                  'local' : false,
                  'remoteName' : 'spi_wm:changedate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'smallint',
                  'name' : 'displaysequence',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_displaysequence_spi_wmdisplaysequence',
                  'id' : 'aw3427d27d',
                  'local' : false,
                  'remoteName' : 'spi_wm:displaysequence',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'changeby',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_changeby_spi_wmchangeby',
                  'maxSize' : 30,
                  'id' : 'aw7dbc946b',
                  'local' : false,
                  'remoteName' : 'spi_wm:changeby',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'refobjectid',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_refobjectid_spi_wmrefobjectid',
                  'id' : 'awea14d5ae',
                  'local' : false,
                  'remoteName' : 'spi_wm:refobjectid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:classspecid',
                  'dataType' : 'reference',
                  'usage' : 'bigint',
                  'referenceResource' : 'workOrderSpecResource',
                  'name' : 'classspec',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_classspec_spi_wmclassspecspi_wmclassspecidspi_wmclassspecid',
                  'id' : 'aw5e5c3671',
                  'local' : false,
                  'remoteName' : 'spi_wm:classspec.spi_wm:classspecid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:domainid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrderSpecResource',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_domainid_spi_wmclassspecspi_wmdomainid',
                  'maxSize' : 18,
                  'id' : 'awff6aced',
                  'local' : false,
                  'remoteName' : 'spi_wm:classspec',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:assetattrid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrderSpecResource',
                  'name' : 'assetattrid',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_assetattrid_spi_wmassetattrspi_wmassetattrid',
                  'maxSize' : 30,
                  'id' : 'awcb08cadc',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattr',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:description',
                  'dataType' : 'reference',
                  'referenceResource' : 'workOrderSpecResource',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_description_spi_wmassetattrspi_wmdescription',
                  'maxSize' : 100,
                  'id' : 'aw6eb64318',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattr',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:datatype',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrderSpecResource',
                  'name' : 'datatype',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_datatype_spi_wmassetattrspi_wmdatatype',
                  'maxSize' : 8,
                  'id' : 'aw8069e2ac',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattr',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'numvalue',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'workOrderSpecResource_numvalue_spi_wmnumvalue',
                  'id' : 'aw657e2422',
                  'local' : false,
                  'remoteName' : 'spi_wm:numvalue',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'alnvalue',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_alnvalue_spi_wmalnvalue',
                  'maxSize' : 254,
                  'id' : 'awc20eccd7',
                  'local' : false,
                  'remoteName' : 'spi_wm:alnvalue',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'tablevalue',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_tablevalue_spi_wmtablevalue',
                  'maxSize' : 254,
                  'id' : 'aw5692ef5d',
                  'local' : false,
                  'remoteName' : 'spi_wm:tablevalue',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'section',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_section_spi_wmsection',
                  'maxSize' : 10,
                  'id' : 'aw8528360f',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi_wm:section',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'measureunitid',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_measureunitid_spi_wmmeasureunitid',
                  'maxSize' : 16,
                  'id' : 'aw6a8df23d',
                  'local' : false,
                  'remoteName' : 'spi_wm:measureunitid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'anywhereRefId',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_anywhereRefId_spi_wmanywhererefid',
                  'id' : 'awd680ee93',
                  'local' : false,
                  'remoteName' : 'spi_wm:anywhererefid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localdescriptionunit',
                  'formula' : '${measureunitid}?${description} + \' (\' + ${measureunitid}.toLowerCase() + \')\':${description}',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_localMeasureunitid_string',
                  'id' : 'aw8f4761dd',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise051 = PersistenceManager.initCollection( resource051 );


            var resource052 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'assetSpecResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'assetSpecResource',
                  'id' : 'aw6932cceb',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:assetspecid,spi_wm:classstructureid,spi_wm:mandatory,spi_wm:orgid,spi_wm:changedate,spi_wm:displaysequence,spi_wm:changeby,spi_wm:numvalue,spi_wm:alnvalue,spi_wm:tablevalue,spi_wm:section,spi_wm:linearassetspecid,spi_wm:measureunitid,spi_wm:anywhererefid,spi_wm:assetattrspec{spi_wm:assetattrid,spi_wm:domainid,spi_wm:description,spi_wm:datatype}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'assetspecid',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_assetSpecid_spiassetSpecid',
                  'id' : 'awe29a0198',
                  'key' : '1',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetspecid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classstructureid',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_classstructureid_spiclassstructureid',
                  'maxSize' : 20,
                  'id' : 'awe62d3751',
                  'local' : false,
                  'remoteName' : 'spi_wm:classstructureid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'mandatory',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_mandatory_spimandatory',
                  'id' : 'aw2f587b78',
                  'local' : false,
                  'remoteName' : 'spi_wm:mandatory',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw6f5b7de1',
                  'local' : false,
                  'remoteName' : 'spi_wm:orgid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'changedate',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_changedate_spichangedate',
                  'id' : 'awb289f5e0',
                  'local' : false,
                  'remoteName' : 'spi_wm:changedate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'smallint',
                  'name' : 'displaysequence',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_displaysequence_spidisplaysequence',
                  'id' : 'aw1c252a5b',
                  'local' : false,
                  'remoteName' : 'spi_wm:displaysequence',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'changeby',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_changeby_spichangeby',
                  'maxSize' : 30,
                  'id' : 'awe922803c',
                  'local' : false,
                  'remoteName' : 'spi_wm:changeby',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:domainid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'assetSpecResource',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_domainid_spi_wmclassspecspi_wmdomainid',
                  'maxSize' : 18,
                  'id' : 'aw9b65e99a',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattrspec',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:assetattrid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'assetSpecResource',
                  'name' : 'assetattrid',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_assetattrid_spi_wmassetattrspi_wmassetattrid',
                  'maxSize' : 30,
                  'id' : 'aw18d37efa',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattrspec',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:description',
                  'dataType' : 'reference',
                  'referenceResource' : 'assetSpecResource',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_description_spiassetattrspidescription',
                  'maxSize' : 100,
                  'id' : 'aw4936f104',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattrspec',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:datatype',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'assetSpecResource',
                  'name' : 'datatype',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_datatype_spiassetattrspidatatype',
                  'maxSize' : 8,
                  'id' : 'awc3785f8',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattrspec',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'numvalue',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'assetSpecResource_numvalue_spinumvalue',
                  'id' : 'aw1fe53d26',
                  'local' : false,
                  'remoteName' : 'spi_wm:numvalue',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'alnvalue',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_alnvalue_spialnvalue',
                  'maxSize' : 254,
                  'id' : 'awe90f8fad',
                  'local' : false,
                  'remoteName' : 'spi_wm:alnvalue',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'tablevalue',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_tablevalue_spitablevalue',
                  'maxSize' : 254,
                  'id' : 'awa42e0457',
                  'local' : false,
                  'remoteName' : 'spi_wm:tablevalue',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'section',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_section_spisection',
                  'maxSize' : 10,
                  'id' : 'aw161b789a',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi_wm:section',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'linearassetspecid',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_linearassetspecid_spilinearassetspecid',
                  'id' : 'aw1f004a22',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi_wm:linearassetspecid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'measureunitid',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_measureunitid_spimeasureunitid',
                  'maxSize' : 16,
                  'id' : 'aw4f9be6eb',
                  'local' : false,
                  'remoteName' : 'spi_wm:measureunitid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'anywhereRefId',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_anywhereRefId__anywhererefid',
                  'id' : 'awe9185885',
                  'local' : false,
                  'remoteName' : 'spi_wm:anywhererefid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localdescriptionunitspec',
                  'formula' : '${measureunitid}?${description} + \' (\' + ${measureunitid}.toLowerCase() + \')\':${description}',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_localMeasureunitidspec_string',
                  'id' : 'awef68dfbd',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise052 = PersistenceManager.initCollection( resource052 );


            var resource053 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'asset',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'asset',
                  'id' : 'aw2af5a5c',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:assetid,spi:orgid,spi:siteid,oslc:shortTitle,dcterms:title,spi:status,spi:pluscduedate').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'assetuid',
                  'index' : false,
                  'artifactId' : 'asset_assetuid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw269abbd5',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'assetid',
                  'index' : false,
                  'artifactId' : 'asset_assetid_spiassetid',
                  'id' : 'awb5739ac0',
                  'local' : false,
                  'remoteName' : 'spi:assetid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'asset_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw61f8901c',
                  'local' : false,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'asset_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'awdc4a39bc',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'assetnum',
                  'index' : true,
                  'artifactId' : 'asset_assetnum_oslcshortTitle',
                  'maxSize' : 12,
                  'id' : 'awecfd10e6',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'asset_description_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'awa242fe58',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'status',
                  'index' : true,
                  'artifactId' : 'asset_status_spistatus',
                  'maxSize' : 20,
                  'id' : 'awe68e6dd7',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'duedate',
                  'index' : false,
                  'artifactId' : 'asset_duedate',
                  'id' : 'aw9c7af7',
                  'local' : false,
                  'remoteName' : 'spi:pluscduedate',
               }).
               setCreationFactories([
                     {name:'assetResource', creationString:'\/oslc\/os\/oslcasset' }
               ]).
               setQueryBases([
                     {name:'assetResourceQB', queryString:'\/oslc\/os\/oslcasset', queryLabel:'' }
               ]);
            var resourcePromise053 = PersistenceManager.initCollection( resource053 );


            var resource054 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'assetMeters',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'assetMeters',
                  'id' : 'aw32f18705',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:siteid,spi:active,spi:dorollover,spi:rollover,spi:isdelta,spi:inspector,spi:newreading,spi:newreadingdate,spi:readingtype,spi:lastreading,spi:lastreadingdate,spi:remarks,spi:meter{spi:domainid,dcterms:title,spi:metertype,oslc:shortTitle},spi:asset{dcterms:title,oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'assetMeters_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awf5c95834',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'referenceResource' : 'additionalasset',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'name' : 'assetnum',
                  'index' : true,
                  'artifactId' : 'assetMeters_assetnum_spiassetoslcshortTitle',
                  'maxSize' : 12,
                  'id' : 'aw40476897',
                  'local' : false,
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'assetMeters',
                  'name' : 'assetnumdesc',
                  'index' : false,
                  'artifactId' : 'assetMeters_assetnumdesc_spiassetdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw5d6685a9',
                  'local' : false,
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'assetMeters_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'awa2399ed2',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'active',
                  'index' : true,
                  'artifactId' : 'assetMeters_active_spiactive',
                  'id' : 'aw36e090d2',
                  'local' : false,
                  'remoteName' : 'spi:active',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'dorollover',
                  'index' : false,
                  'artifactId' : 'assetMeters_dorollover_spidorollover',
                  'id' : 'aw36305853',
                  'local' : false,
                  'remoteName' : 'spi:dorollover',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'rollover',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'assetMeters_rollover_spirollover',
                  'id' : 'aw8de4a1bd',
                  'local' : false,
                  'remoteName' : 'spi:rollover',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'isdelta',
                  'index' : false,
                  'artifactId' : 'assetMeters_isdelta_spiisdelta',
                  'id' : 'aw484f0076',
                  'local' : false,
                  'remoteName' : 'spi:isdelta',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'inspector',
                  'index' : false,
                  'artifactId' : 'assetMeters_inspector_spiinspector',
                  'maxSize' : 30,
                  'id' : 'aw4f2ebfa2',
                  'local' : false,
                  'remoteName' : 'spi:inspector',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'newreading',
                  'index' : false,
                  'artifactId' : 'assetMeters_newreading_spinewreading',
                  'maxSize' : 18,
                  'id' : 'aweb10df0e',
                  'local' : false,
                  'remoteName' : 'spi:newreading',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'newreadingdate',
                  'index' : false,
                  'artifactId' : 'assetMeters_newreadingdate_spinewreadingdate',
                  'id' : 'awb0886954',
                  'local' : false,
                  'remoteName' : 'spi:newreadingdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'assetMeters',
                  'name' : 'metername',
                  'index' : true,
                  'artifactId' : 'assetMeters_metername_spimeteroslcshortTitle',
                  'maxSize' : 10,
                  'id' : 'awf2431d13',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'assetMeters',
                  'name' : 'meterdesc',
                  'index' : false,
                  'artifactId' : 'assetMeters_meterdesc_spimeterdctermstitle',
                  'maxSize' : 100,
                  'id' : 'awf7e9fa2d',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:metertype',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'assetMeters',
                  'name' : 'metertype',
                  'index' : false,
                  'artifactId' : 'assetMeters_metertype_spimeterspimetertype',
                  'maxSize' : 25,
                  'id' : 'awdbbdd99e',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:domainid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'assetMeters',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'assetMeters_domainid_spimeterspidomainid',
                  'maxSize' : 18,
                  'id' : 'aw7d0ecd41',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'readingtype',
                  'index' : false,
                  'artifactId' : 'assetMeters_readingtype_spireadingtype',
                  'maxSize' : 10,
                  'id' : 'awfd70bd5a',
                  'local' : false,
                  'remoteName' : 'spi:readingtype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'lastreading',
                  'index' : false,
                  'artifactId' : 'assetMeters_lastreading_spilastreading',
                  'maxSize' : 18,
                  'id' : 'aw83b5ee51',
                  'local' : false,
                  'remoteName' : 'spi:lastreading',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'lastreadingdate',
                  'index' : false,
                  'artifactId' : 'assetMeters_lastreadingdate_spilastreadingdate',
                  'id' : 'aw97a99516',
                  'local' : false,
                  'remoteName' : 'spi:lastreadingdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'remarks',
                  'index' : false,
                  'artifactId' : 'assetMeters_remarks_spiremarks',
                  'maxSize' : 50,
                  'id' : 'awb85b2e90',
                  'local' : false,
                  'remoteName' : 'spi:remarks',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localLastReading',
                  'index' : false,
                  'artifactId' : 'assetMeters_localLastReading_string',
                  'id' : 'aw7090d09e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'localLastReadingDate',
                  'index' : false,
                  'artifactId' : 'assetMeters_localLastReadingDate_dateTime',
                  'id' : 'awcd1f91',
                  'persistent' : true,
                  'local' : true,
               }).
               setCreationFactories([
                     {name:'assetMeterResourceCF', creationString:'\/oslc\/os\/oslcassetmeter' }
               ]).
               setQueryBases([
                     {name:'assetMeterResourceQB', queryString:'\/oslc\/os\/oslcassetmeter', defaultForSearch: true, queryLabel:'' }
               ]);
            var resourcePromise054 = PersistenceManager.initCollection( resource054 );


            var resource055 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'locationMeters',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'locationMeters',
                  'id' : 'awd1f6ec67',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:siteid,spi:active,spi:dorollover,spi:rollover,spi:isdelta,spi:inspector,spi:newreading,spi:newreadingdate,spi:readingtype,spi:lastreading,spi:lastreadingdate,spi:remarks,spi:meter{spi:domainid,dcterms:title,spi:metertype,oslc:shortTitle},spi:location{dcterms:title}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'locationMeters_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awfe6e7724',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'locationMeters',
                  'name' : 'locationdesc',
                  'index' : false,
                  'artifactId' : 'locationMeters_locationdesc_spilocationdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw4c12076d',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'locationMeters_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw8eb4b52b',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'active',
                  'index' : true,
                  'artifactId' : 'locationMeters_active_spiactive',
                  'id' : 'aw1a6dbb2b',
                  'local' : false,
                  'remoteName' : 'spi:active',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'dorollover',
                  'index' : false,
                  'artifactId' : 'locationMeters_dorollover_spidorollover',
                  'id' : 'awbdb1ff57',
                  'local' : false,
                  'remoteName' : 'spi:dorollover',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'rollover',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'locationMeters_rollover_spirollover',
                  'id' : 'awfe67db74',
                  'local' : false,
                  'remoteName' : 'spi:rollover',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'isdelta',
                  'index' : false,
                  'artifactId' : 'locationMeters_isdelta_spiisdelta',
                  'id' : 'aw218d8f4f',
                  'local' : false,
                  'remoteName' : 'spi:isdelta',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'inspector',
                  'index' : false,
                  'artifactId' : 'locationMeters_inspector_spiinspector',
                  'maxSize' : 30,
                  'id' : 'awe5c63804',
                  'local' : false,
                  'remoteName' : 'spi:inspector',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'newreading',
                  'index' : false,
                  'artifactId' : 'locationMeters_newreading_spinewreading',
                  'maxSize' : 18,
                  'id' : 'aw6091780a',
                  'local' : false,
                  'remoteName' : 'spi:newreading',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'newreadingdate',
                  'index' : false,
                  'artifactId' : 'locationMeters_newreadingdate_spinewreadingdate',
                  'id' : 'awa514ccb0',
                  'local' : false,
                  'remoteName' : 'spi:newreadingdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'locationMeters',
                  'name' : 'metername',
                  'index' : true,
                  'artifactId' : 'locationMeters_metername_spimeteroslcshortTitle',
                  'maxSize' : 10,
                  'id' : 'awe7dfb8f7',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'locationMeters',
                  'name' : 'meterdesc',
                  'index' : false,
                  'artifactId' : 'locationMeters_meterdesc_spimeterdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw16fade82',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:metertype',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'locationMeters',
                  'name' : 'metertype',
                  'index' : false,
                  'artifactId' : 'locationMeters_metertype_spimeterspimetertype',
                  'maxSize' : 25,
                  'id' : 'aw3aaefd31',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:domainid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'locationMeters',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'locationMeters_domainid_spimeterspidomainid',
                  'maxSize' : 18,
                  'id' : 'aw76a9e251',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'readingtype',
                  'index' : false,
                  'artifactId' : 'locationMeters_readingtype_spireadingtype',
                  'maxSize' : 10,
                  'id' : 'awd1aec594',
                  'local' : false,
                  'remoteName' : 'spi:readingtype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'lastreading',
                  'index' : false,
                  'artifactId' : 'locationMeters_lastreading_spilastreading',
                  'maxSize' : 18,
                  'id' : 'awaf6b969f',
                  'local' : false,
                  'remoteName' : 'spi:lastreading',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'lastreadingdate',
                  'index' : false,
                  'artifactId' : 'locationMeters_lastreadingdate_spilastreadingdate',
                  'id' : 'awb07e105',
                  'local' : false,
                  'remoteName' : 'spi:lastreadingdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'remarks',
                  'index' : false,
                  'artifactId' : 'locationMeters_remarks_spiremarks',
                  'maxSize' : 50,
                  'id' : 'awd199a1a9',
                  'local' : false,
                  'remoteName' : 'spi:remarks',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localLastReading',
                  'index' : false,
                  'artifactId' : 'locationMeters_localLastReading_string',
                  'id' : 'aw4f8f3ec4',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'localLastReadingDate',
                  'index' : false,
                  'artifactId' : 'locationMeters_localLastReadingDate_dateTime',
                  'id' : 'aw1d71a8da',
                  'persistent' : true,
                  'local' : true,
               }).
               setCreationFactories([
                     {name:'locationMeterResourceCF', creationString:'\/oslc\/os\/oslclocationmeter' }
               ]).
               setQueryBases([
                     {name:'locationMeterResourceQB', queryString:'\/oslc\/os\/oslclocationmeter', defaultForSearch: true, queryLabel:'' }
               ]);
            var resourcePromise055 = PersistenceManager.initCollection( resource055 );


            var resource056 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformAttachmentInfoResource',
                  'resourceName' : 'PlatformAttachmentInfoResource',
                  'id' : 'awdb366a89',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'name',
                  'index' : false,
                  'artifactId' : 'PlatformAttachmentInfoResource_name_string',
                  'maxSize' : 20,
                  'id' : 'aw7ad1254c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'PlatformAttachmentInfoResource_description_string',
                  'maxSize' : 50,
                  'id' : 'aw91c3001f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'category',
                  'index' : false,
                  'artifactId' : 'PlatformAttachmentInfoResource_category_string',
                  'id' : 'aw5507e626',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'fileType',
                  'index' : false,
                  'artifactId' : 'PlatformAttachmentInfoResource_fileType_string',
                  'id' : 'aw2507e37c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'fileSize',
                  'index' : false,
                  'artifactId' : 'PlatformAttachmentInfoResource_fileSize_integer',
                  'id' : 'aw6141898c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localPath',
                  'index' : false,
                  'artifactId' : 'PlatformAttachmentInfoResource_localPath_string',
                  'id' : 'awc2c06db6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'createDate',
                  'index' : false,
                  'artifactId' : 'PlatformAttachmentInfoResource_createDate_dateTime',
                  'id' : 'awc78ca0bd',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise056 = PersistenceManager.initCollection( resource056 );


            var resource057 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformAttachmentCategoryResource',
                  'resourceName' : 'PlatformAttachmentCategoryResource',
                  'id' : 'aw4ffdce67',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'folderName',
                  'index' : false,
                  'artifactId' : 'PlatformAttachmentCategoryResource_folderName_string',
                  'maxSize' : 20,
                  'id' : 'awee53f8c0',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise057 = PersistenceManager.initCollection( resource057 );


            var resource058 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'anywherePropVal',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'anywherePropValRes',
                  'id' : 'awb4801c67',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:propid,spi:propvalue,spi:description,spi:changedate,dcterms:identifier,spi:appid,spi:maxgroupid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'propid',
                  'index' : false,
                  'artifactId' : 'anywherePropValPropId',
                  'id' : 'aw344e19d',
                  'local' : false,
                  'remoteName' : 'spi:propid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'anywherePropValValues',
                  'id' : 'aw5cc16cbe',
                  'local' : false,
                  'remoteName' : 'spi:propvalue',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'anywherePropValDescription',
                  'id' : 'awba4810a1',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'changedate',
                  'index' : false,
                  'artifactId' : 'anywherePropValChangedate',
                  'id' : 'aw9752257c',
                  'local' : false,
                  'remoteName' : 'spi:changedate',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'anywherePropValIdentifier',
                  'id' : 'awd6acea8b',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'appName',
                  'index' : true,
                  'artifactId' : 'anywherePropValAppName',
                  'id' : 'awf8dec4e3',
                  'local' : false,
                  'remoteName' : 'spi:appid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'groupName',
                  'index' : true,
                  'artifactId' : 'anywherePropValGroupName',
                  'id' : 'aw6312bf1a',
                  'local' : false,
                  'remoteName' : 'spi:maxgroupid',
               }).
               setQueryBases([
                     {name:'anywherepropvalQB', queryString:'\/oslc\/os\/oslcanywherepropval', defaultForSearch: true, queryLabel:'' }
               ]);
            var resourcePromise058 = PersistenceManager.initCollection( resource058 );


            var resource059 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'anywhereResourceSrc',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'anywhereResourceSrcRes',
                  'id' : 'aw84adce73',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:resourceid,spi:type,spi:pagesize,spi:description,spi:changedate,spi:appid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'anywhereResourceIdentifier',
                  'id' : 'aw69698b5d',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'resourceId',
                  'index' : false,
                  'artifactId' : 'anywhereResourceResourceId',
                  'id' : 'aw92b27486',
                  'local' : false,
                  'remoteName' : 'spi:resourceid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'type',
                  'index' : false,
                  'artifactId' : 'anywhereResourceType',
                  'id' : 'awce0667d7',
                  'local' : false,
                  'remoteName' : 'spi:type',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'pageSize',
                  'index' : false,
                  'artifactId' : 'anywhereResourcePageSize',
                  'id' : 'aw45c77190',
                  'local' : false,
                  'remoteName' : 'spi:pagesize',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'anywhereResourceDescription',
                  'id' : 'awd547a221',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'changedate',
                  'index' : false,
                  'artifactId' : 'anywhereResourceChangedate',
                  'id' : 'aw289744aa',
                  'local' : false,
                  'remoteName' : 'spi:changedate',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'appName',
                  'index' : true,
                  'artifactId' : 'anywhereResourceAppName',
                  'id' : 'aw751c4988',
                  'local' : false,
                  'remoteName' : 'spi:appid',
               }).
               setQueryBases([
                     {name:'anywhereResourceQB', queryString:'\/oslc\/os\/oslcanywhereresrc', defaultForSearch: true, queryLabel:'' }
               ]);
            var resourcePromise059 = PersistenceManager.initCollection( resource059 );


            var resource060 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'anywhereResVal',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'AnywhereResValRes',
                  'id' : 'aw282573c2',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:sort,spi:sequence,spi:changedate,dcterms:identifier,spi:appid,spi:maxgroupid,spi:queryid,spi:description,spi:resourceid,spi:blindcount,spi:resanywhereresource{spi:type}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'sort',
                  'index' : false,
                  'artifactId' : 'AnywhereResValSort',
                  'id' : 'aw5c180fb5',
                  'local' : false,
                  'remoteName' : 'spi:sort',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'sequence',
                  'index' : false,
                  'artifactId' : 'AnywhereResValSequence',
                  'id' : 'awc24febf7',
                  'local' : false,
                  'remoteName' : 'spi:sequence',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'changedate',
                  'index' : false,
                  'artifactId' : 'AnywhereResValChangedate',
                  'id' : 'aw34322ac0',
                  'local' : false,
                  'remoteName' : 'spi:changedate',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'AnywhereResValIdentifier',
                  'id' : 'aw75cce537',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'appName',
                  'index' : true,
                  'artifactId' : 'AnywhereResValAppName',
                  'id' : 'aweb29360a',
                  'local' : false,
                  'remoteName' : 'spi:appid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'groupName',
                  'index' : true,
                  'artifactId' : 'AnywhereResValGroupName',
                  'id' : 'awbf1d7778',
                  'local' : false,
                  'remoteName' : 'spi:maxgroupid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'query',
                  'index' : true,
                  'artifactId' : 'AnywhereResValQuery',
                  'id' : 'aw4adb8ff1',
                  'local' : false,
                  'remoteName' : 'spi:queryid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'queryDescription',
                  'index' : false,
                  'artifactId' : 'AnywhereResValQueryDescription',
                  'id' : 'aw9a342410',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'resourceId',
                  'index' : true,
                  'artifactId' : 'AnywhereResValResourceId',
                  'id' : 'aw8e171aec',
                  'local' : false,
                  'remoteName' : 'spi:resourceid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'blindCount',
                  'index' : false,
                  'artifactId' : 'AnywhereResValBlindCount',
                  'id' : 'aw8b5ff5c9',
                  'local' : false,
                  'remoteName' : 'spi:blindcount',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:type',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'referenceResource' : 'anywhereResVal',
                  'name' : 'type',
                  'index' : false,
                  'artifactId' : 'AnywhereResValType',
                  'maxSize' : 80,
                  'id' : 'aw81e2aabe',
                  'local' : false,
                  'remoteName' : 'spi:resanywhereresource',
               }).
               setQueryBases([
                     {name:'AnywhereResValQB', queryString:'\/oslc\/os\/oslcanywhereresrval', defaultForSearch: true, queryLabel:'' }
               ]);
            var resourcePromise060 = PersistenceManager.initCollection( resource060 );


            var resource061 = new ResourceMetadata({
                  'defaultOrderBy' : 'notificationId desc',
                  'pageSize' : 5,
                  'resourceName' : 'osusernotification',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'osusernotification',
                  'id' : 'awe5c87076',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 10,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:osusernotificationid,spi:eventname,spi:intobjectname,spi:notfeventmessage,spi:notificationtime,spi:eventforuser,spi:appid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'notificationId',
                  'index' : true,
                  'artifactId' : 'oslcosusernotificationid',
                  'id' : 'awceee3768',
                  'local' : false,
                  'remoteName' : 'spi:osusernotificationid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'eventName',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificatiEventName',
                  'id' : 'awf9242f79',
                  'local' : false,
                  'remoteName' : 'spi:eventname',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'intObjectName',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificatiIntobjectName',
                  'id' : 'awcf896a27',
                  'local' : false,
                  'remoteName' : 'spi:intobjectname',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'notfeventmessage',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificatiNotfeventmessage',
                  'id' : 'awba8ec9a7',
                  'local' : false,
                  'remoteName' : 'spi:notfeventmessage',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'notifDate',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificati_notifDate_dateTime',
                  'id' : 'aw1edc3be',
                  'local' : false,
                  'remoteName' : 'spi:notificationtime',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'owner',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificati_eventforuser_string',
                  'id' : 'aw4da92124',
                  'local' : false,
                  'remoteName' : 'spi:eventforuser',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'appid',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificati_appid_string',
                  'id' : 'aw26547590',
                  'local' : false,
                  'remoteName' : 'spi:appid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'itemnum',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificati_itemnum_string',
                  'id' : 'aw8d6872e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'itemDesc',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificati_itemDesc_string',
                  'id' : 'awe13aa2f6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'viewed',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificati_viewed_boolean',
                  'id' : 'awee3971d8',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'uiDate',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificati_uiDate_dateTime',
                  'id' : 'awe4cea6a1',
                  'persistent' : true,
                  'local' : true,
               }).
               setQueryBases([
                     {name:'oslcosusernotificatiQB', queryString:'\/oslc\/os\/oslcosusernotificati', defaultForSearch: true, queryLabel:'' }
               ]).
               setWhereClause('spi%3Aeventforuser%3D%24%7Bpersonid%7D');
            var resourcePromise061 = PersistenceManager.initCollection( resource061 );


            var resource062 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformLongPressResource',
                  'resourceName' : 'PlatformLongPressResource',
                  'id' : 'awb1ffcb05',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'platform' : 'true',
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'label',
                  'index' : false,
                  'artifactId' : 'PlatformLongPressResource_label_string',
                  'id' : 'aw64d95f11',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'transitionTo',
                  'index' : false,
                  'artifactId' : 'PlatformLongPressResource_transitionTo_string',
                  'id' : 'awffa4a814',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               });
            var resourcePromise062 = PersistenceManager.initCollection( resource062 );


            var resource063 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformViewQueryResource',
                  'resourceName' : 'PlatformViewQueryResource',
                  'id' : 'awacb7affd',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'viewid',
                  'index' : false,
                  'artifactId' : 'PlatformViewQueryResource_viewid_string',
                  'id' : 'aw75cb4bd2',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'index',
                  'index' : false,
                  'artifactId' : 'PlatformViewQueryResource_index_integer',
                  'id' : 'aw2e6fb89f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'queryid',
                  'index' : false,
                  'artifactId' : 'PlatformViewQueryResource_queryid_string',
                  'id' : 'aw94d0b850',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise063 = PersistenceManager.initCollection( resource063 );


            var resource064 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformListSortResource',
                  'resourceName' : 'PlatformListSortResource',
                  'id' : 'aw1a0eea87',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'listid',
                  'index' : false,
                  'artifactId' : 'PlatformListSortResource_listid_string',
                  'id' : 'aw9064a276',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'index',
                  'index' : false,
                  'artifactId' : 'PlatformListSortResource_index_integer',
                  'id' : 'awe8ec244c',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise064 = PersistenceManager.initCollection( resource064 );


            var resource065 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformListSearchResource',
                  'resourceName' : 'PlatformListSearchResource',
                  'id' : 'aw6a400d8e',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'listid',
                  'index' : false,
                  'artifactId' : 'PlatformListSearchResource_listid_string',
                  'id' : 'awcaa8923a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'search',
                  'index' : false,
                  'artifactId' : 'PlatformListSearchResource_search_string',
                  'id' : 'aw65d03ec8',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'querybase',
                  'index' : false,
                  'artifactId' : 'PlatformListSearchResource_querybase_string',
                  'id' : 'aw91302f64',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'fromscan',
                  'index' : false,
                  'artifactId' : 'PlatformListSearchResource_fromscan_boolean',
                  'id' : 'awdf9c4f91',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'exact',
                  'index' : false,
                  'artifactId' : 'PlatformListSearchResource_exact_boolean',
                  'id' : 'aw8148e995',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise065 = PersistenceManager.initCollection( resource065 );


            var resource066 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformResourceMetricsResource',
                  'resourceName' : 'PlatformResourceMetricsResource',
                  'id' : 'aw589b431',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'resourceName',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_resourcename_string',
                  'id' : 'aw9ccdf5ce',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'queryBase',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_querybase_string',
                  'id' : 'aw8c157d61',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'serverCount',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_serverCount_integer',
                  'id' : 'awbfceeff2',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'allDownloaded',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_allDownloaded_boolean',
                  'id' : 'aw300f625',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'pageCount',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_pageCount_integer',
                  'id' : 'aw5a6b5e5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'pageSize',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_pageSize_integer',
                  'id' : 'aw3c45365e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'worklistDownloaded',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_worklistDownloaded_boolean',
                  'id' : 'aw43cb396d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'scanFilter',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_scanFilter_string',
                  'id' : 'aw4f310615',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'type',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_type_string',
                  'id' : 'awd38d7b81',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'stringr',
                  'name' : 'errorCode',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_errorCode_integer',
                  'id' : 'awab704940',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'resourcePreviousPageSize',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_resourcePreviousPageSize_integer',
                  'id' : 'awca853d70',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'totalNumberOfPagesToDownlaod',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_totalNumberOfPagesToDownlaod_integer',
                  'id' : 'awe74022e4',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'numberOfPagesDownloaded',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_numberOfPagesDownloaded_integer',
                  'id' : 'aw3628b6b1',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'detlaTotalNumberOfPagesToDownlaod',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_detlaTotalNumberOfPagesToDownlaod_integer',
                  'id' : 'aw9778eaab',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'deltaNumberOfPagesDownloaded',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_deltaNumberOfPagesDownloaded_integer',
                  'id' : 'aw462530e7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'attempt',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_attempt_integer',
                  'id' : 'aw84b751ff',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'maxrowstamp',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_maxrowstamp_string',
                  'id' : 'aw7569ffdb',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise066 = PersistenceManager.initCollection( resource066 );


            var resource067 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'DataSyncTracking',
                  'resourceName' : 'DataSyncTracking',
                  'id' : 'aw9df5e2ad',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'resourceName',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_resourcename_string',
                  'id' : 'aw99060f54',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'type',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_type_integer',
                  'id' : 'aw1422fdcb',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'resourceCurrentPageSize',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_resourceCurrentPageSize_boolean',
                  'id' : 'awdee5c0b8',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'resourcePreviousPageSize',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_resourcePreviousPageSize_integer',
                  'id' : 'aw2eacbe9e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'totalNumberOfPagesToDownlaod',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_totalNumberOfPagesToDownlaod_integer',
                  'id' : 'awd1b208bc',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'numberOfPagesDownloaded',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_numberOfPagesDownloaded_boolean',
                  'id' : 'awc1ee705e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'dateAndTime',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_dateAndTime_string',
                  'id' : 'awd27b5819',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'queryBase',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_querybase_string',
                  'id' : 'awba2958d5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'errrorCode',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_errrorCode_integer',
                  'id' : 'awdd1981da',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'detlaTotalNumberOfPagesToDownlaod',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_detlaTotalNumberOfPagesToDownlaod_boolean',
                  'id' : 'awbf423453',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'deltaNumberOfPagesDownloaded',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_deltaNumberOfPagesDownloaded_string',
                  'id' : 'aw29249252',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'attempt',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_attempt_string',
                  'id' : 'aw479ef4e2',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise067 = PersistenceManager.initCollection( resource067 );


            var resource068 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformDateLookupResource',
                  'resourceName' : 'PlatformDateLookupResource',
                  'id' : 'aw903a86e4',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'platform' : 'true',
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'date',
                  'name' : 'date',
                  'index' : false,
                  'artifactId' : 'PlatformDateLookupResource_date_date',
                  'id' : 'aw175ff2d4',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'duration',
                  'index' : false,
                  'artifactId' : 'PlatformDateLookupResource_duration_string',
                  'id' : 'awaf69d37',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise068 = PersistenceManager.initCollection( resource068 );


            var resource069 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'LastADDownload',
                  'resourceName' : 'LastADDownload',
                  'id' : 'aw62f56f6f',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'platform' : 'true',
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'downloadStatus',
                  'index' : false,
                  'artifactId' : 'LastADDownload_downloadStatus_string',
                  'id' : 'aw78bd99e1',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'lastDownloadDateMsg',
                  'index' : false,
                  'artifactId' : 'LastADDownload_lastDownloadDateMsg_string',
                  'id' : 'aw8aff521f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'totalDownloaded',
                  'index' : false,
                  'artifactId' : 'LastADDownload_totalDownloaded_string',
                  'id' : 'awbfb04f52',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'downloadAttachments',
                  'index' : false,
                  'artifactId' : 'LastADDownload_downloadAttachments_boolean',
                  'id' : 'awbe6526f5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'numberOfDaysToSync',
                  'index' : false,
                  'artifactId' : 'LastADDownload_numberOfDaysToSync_string',
                  'id' : 'aw636896bb',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise069 = PersistenceManager.initCollection( resource069 );


            var resource070 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformProgressResource',
                  'resourceName' : 'PlatformProgressResource',
                  'id' : 'aw6e8f90d1',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'progressMsg',
                  'index' : false,
                  'artifactId' : 'PlatformProgressResource_progressMsg_string',
                  'id' : 'aw88797d3c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'started',
                  'index' : false,
                  'artifactId' : 'PlatformProgressResource_started_boolean',
                  'id' : 'awa770aaae',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise070 = PersistenceManager.initCollection( resource070 );


            var resource071 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'timeTrack',
                  'resourceName' : 'timeTrack',
                  'id' : 'awe7baae94',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'ttid',
                  'index' : true,
                  'artifactId' : 'timeTrack_ttid_string',
                  'id' : 'awd1b2cb94',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'content',
                  'index' : false,
                  'artifactId' : 'timeTrack_content_string',
                  'id' : 'aw8ea513de',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise071 = PersistenceManager.initCollection( resource071 );


            var resource072 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformChangePasswordForm',
                  'resourceName' : 'PlatformChangePasswordForm',
                  'id' : 'aw58a2c8cd',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'username',
                  'index' : false,
                  'artifactId' : 'PlatformChangePasswordForm_username_string',
                  'id' : 'awedfd5901',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'currentpassword',
                  'index' : false,
                  'artifactId' : 'PlatformChangePasswordForm_currentpassword_string',
                  'id' : 'aw8978d11e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newpassword',
                  'index' : false,
                  'artifactId' : 'PlatformChangePasswordForm_newpassword_string',
                  'maxSize' : 35,
                  'id' : 'aw40b72096',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'confirmnewpassword',
                  'index' : false,
                  'artifactId' : 'PlatformChangePasswordForm_confirmnewpassword_string',
                  'maxSize' : 35,
                  'id' : 'awd6f928ad',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'loginFailed',
                  'index' : false,
                  'artifactId' : 'PlatformChangePasswordForm_loginFailed_boolean',
                  'id' : 'aw601efe23',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'errorMsg',
                  'index' : false,
                  'artifactId' : 'PlatformChangePasswordForm_errorMsg_string',
                  'id' : 'awb8f94064',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'infoMsg',
                  'index' : false,
                  'artifactId' : 'PlatformChangePasswordForm_infoMsg_string',
                  'id' : 'aw9d64719b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'oslcMaxUserURL',
                  'index' : false,
                  'artifactId' : 'PlatformChangePasswordForm_oslcMaxUserURL_string',
                  'id' : 'aw82d3981b',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise072 = PersistenceManager.initCollection( resource072 );


            var resource073 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformTempPushNotification',
                  'resourceName' : 'PlatformTempPushNotification',
                  'id' : 'aw539422b',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'title',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_title_string',
                  'id' : 'aw9f0d98f1',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_description_string',
                  'id' : 'aw534ca27b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'resourceId',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_resourceId_string',
                  'id' : 'aw850e973d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'resource',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_resource_string',
                  'id' : 'awa816018f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'msgType',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_msgType_string',
                  'id' : 'aw61585e4a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'transitionTo',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_transitionTo_string',
                  'id' : 'awcb25d777',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'afterLogin',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_afterLogin_boolean',
                  'id' : 'aw6ff206dc',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'msgProp1',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_msgProp1_string',
                  'id' : 'aw8bc5d3ed',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'msgProp2',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_msgProp2_string',
                  'id' : 'aw54ad40e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'msgProp3',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_msgProp3_string',
                  'id' : 'awc9e0d490',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise073 = PersistenceManager.initCollection( resource073 );


            var resource074 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformDemoModeResource',
                  'resourceName' : 'PlatformDemoModeResource',
                  'id' : 'awa62d35c6',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'platform' : 'true',
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'boolean',
                  'name' : 'DemoONOFF',
                  'index' : false,
                  'artifactId' : 'PlatformDemoModeResource_mode_indicator',
                  'id' : 'aw80f9a21a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'MessageText',
                  'index' : false,
                  'artifactId' : 'PlatformDemoModeResource_message',
                  'id' : 'awc0326999',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise074 = PersistenceManager.initCollection( resource074 );


            var resource075 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformEsigResource',
                  'resourceName' : 'PlatformEsigResource',
                  'id' : 'aw8a065cd1',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'userName',
                  'index' : false,
                  'artifactId' : 'PlatformEsigResource_username_string',
                  'id' : 'awb26601cc',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'password',
                  'index' : false,
                  'artifactId' : 'PlatformEsigResource_password_string',
                  'id' : 'awfddb352d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'reason',
                  'index' : false,
                  'artifactId' : 'PlatformEsigResource_reason_boolean',
                  'maxSize' : 50,
                  'id' : 'awb0845042',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'success',
                  'index' : false,
                  'artifactId' : 'PlatformEsigResource_success_boolean',
                  'id' : 'awc27b3d43',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise075 = PersistenceManager.initCollection( resource075 );


            var resource076 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'PlatformEsigAttributeResource',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'enableFeatureByProperty' : 'esig.enabled',
                  'inMemory' : false,
                  'artifactId' : 'PlatformEsigAttributeResource',
                  'id' : 'awe7711043',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:objectname,spi:attributename').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'objectname',
                  'index' : false,
                  'artifactId' : 'PlatformEsigAttributeResource_objectname_string',
                  'id' : 'awe55b6275',
                  'local' : false,
                  'remoteName' : 'spi:objectname',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'attributename',
                  'index' : false,
                  'artifactId' : 'PlatformEsigAttributeResource_attributename_string',
                  'id' : 'aw2ab13920',
                  'local' : false,
                  'remoteName' : 'spi:attributename',
               }).
               setQueryBases([
                     {name:'PlatformEsigAttributeResource_query', queryString:'\/oslc\/os\/oslcesigattribute', queryLabel:'' }
               ]).
               setWhereClause('spi%3Aesigenabled%3D1');
            var resourcePromise076 = PersistenceManager.initCollection( resource076 );


            var resource077 = new ResourceMetadata({
                  'defaultOrderBy' : 'attemptdate desc',
                  'pageSize' : 1000,
                  'resourceName' : 'PlatformLoginTrackingResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'enableFeatureByProperty' : 'esig.enabled',
                  'inMemory' : false,
                  'artifactId' : 'PlatformLoginTrackingResource',
                  'id' : 'aw39ae8c71',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:attemptdate,spi:attemptresult,spi:reason,spi:app,spi:keyvalue1,spi:keyvalue2,spi:userid,spi:loginid,spi:clienthost,spi:clientaddr,spi:ownertable').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'attemptdate',
                  'index' : true,
                  'artifactId' : 'PlatformLoginTrackingResource_attemptdate',
                  'id' : 'awff5afbab',
                  'local' : false,
                  'remoteName' : 'spi:attemptdate',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'attemptresult',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_attemptresult',
                  'id' : 'aw199bee12',
                  'local' : false,
                  'remoteName' : 'spi:attemptresult',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'reason',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_reason',
                  'id' : 'awa3d2f66f',
                  'local' : false,
                  'remoteName' : 'spi:reason',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'app',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_app',
                  'id' : 'awd0285547',
                  'local' : false,
                  'remoteName' : 'spi:app',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'keyvalue1',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_keyvalue1_site',
                  'id' : 'aw80f270fa',
                  'local' : false,
                  'remoteName' : 'spi:keyvalue1',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'keyvalue2',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_keyvalue2_wonum',
                  'id' : 'aw699cc6c',
                  'local' : false,
                  'remoteName' : 'spi:keyvalue2',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'userid',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_userid',
                  'id' : 'aw6958170d',
                  'local' : false,
                  'remoteName' : 'spi:userid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'loginid',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_loginid',
                  'id' : 'aw2d6e9ead',
                  'local' : false,
                  'remoteName' : 'spi:loginid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'clienthost',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_clienthost',
                  'id' : 'awb3d21c4f',
                  'local' : false,
                  'remoteName' : 'spi:clienthost',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'clientaddr',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_clientaddr',
                  'id' : 'aw2e6f9d87',
                  'local' : false,
                  'remoteName' : 'spi:clientaddr',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'ownertable',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_ownertable',
                  'id' : 'aw2b901921',
                  'local' : false,
                  'remoteName' : 'spi:ownertable',
               }).
               setCreationFactories([
                     {name:'logEsig', creationString:'\/oslc\/os\/oslclogintracking' }
               ]).
               setQueryBases([
                     {name:'PlatformLoginTrackingResource_query', queryString:'\/oslc\/os\/oslclogintracking', queryLabel:'' }
               ]).
               setWhereClause('spi%3Aattemptdate%21%3D%22*%22');
            var resourcePromise077 = PersistenceManager.initCollection( resource077 );


            var resource078 = new ResourceMetadata({
                  'pageSize' : 100,
                  'resourceName' : 'attemptResultDomain',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'enableFeatureByProperty' : 'esig.enabled',
                  'inMemory' : false,
                  'artifactId' : 'attemptResultDomain',
                  'id' : 'aw63d066a',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'attemptResultDomain_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awf56cb276',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'attemptResultDomain_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw96386fe1',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'attemptResultDomain_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw3864f322',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'attemptResultDomain_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'awbc80adda',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'attemptResultDomain_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw78cd28e0',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'attemptResultDomain_defaults_spidefaults',
                  'id' : 'awa0ae0162',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'attemptResultDomain_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw79346d49',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'attemptResultDomain_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw8d7e08c0',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getAttemptResultDomain', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22ATTEMPTRESULT%22');
            var resourcePromise078 = PersistenceManager.initCollection( resource078 );


            var resource079 = new ResourceMetadata({
                  'pageSize' : 100,
                  'resourceName' : 'lbslocation',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'https:\/\/hsmgimax.prefeitura.sp.gov.br:443\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'lbslocation',
                  'id' : 'aw16c9c8ec',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:altitude,spi:altitudeaccuracy,spi:key1,spi:key2,spi:key3,spi:longitude,spi:refobject,spi:speed,spi:lastupdate,spi:latitude,spi:wonum,spi:siteid,spi:heading,spi:locationaccuracy').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'altitude',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'lbslocation_altitude',
                  'id' : 'aw6c41f5f1',
                  'local' : false,
                  'remoteName' : 'spi:altitude',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'altitudeaccuracy',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'lbslocation_altitudeaccuracy',
                  'id' : 'awe0441ac',
                  'local' : false,
                  'remoteName' : 'spi:altitudeaccuracy',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'key1',
                  'index' : false,
                  'artifactId' : 'lbslocation_key1',
                  'maxSize' : 255,
                  'id' : 'awad42e064',
                  'local' : false,
                  'remoteName' : 'spi:key1',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'key2',
                  'index' : false,
                  'artifactId' : 'lbslocation_key2',
                  'maxSize' : 255,
                  'id' : 'aw344bb1de',
                  'local' : false,
                  'remoteName' : 'spi:key2',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'key3',
                  'index' : false,
                  'artifactId' : 'lbslocation_key3',
                  'maxSize' : 255,
                  'id' : 'aw434c8148',
                  'local' : false,
                  'remoteName' : 'spi:key3',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'longitude',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'lbslocation_longitude',
                  'id' : 'aw875b7731',
                  'local' : false,
                  'remoteName' : 'spi:longitude',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'refobject',
                  'index' : false,
                  'artifactId' : 'lbslocation_refobject',
                  'maxSize' : 30,
                  'id' : 'aw53e43ae8',
                  'local' : false,
                  'remoteName' : 'spi:refobject',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'speed',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'lbslocation_speed',
                  'id' : 'aw2e1314c7',
                  'local' : false,
                  'remoteName' : 'spi:speed',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'lastupdate',
                  'index' : false,
                  'artifactId' : 'lbslocation_lastupdate',
                  'id' : 'awfbeaed0d',
                  'local' : false,
                  'remoteName' : 'spi:lastupdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'latitude',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'lbslocation_latitude',
                  'id' : 'aw969381e0',
                  'local' : false,
                  'remoteName' : 'spi:latitude',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'wonum',
                  'index' : false,
                  'artifactId' : 'lbslocation_wonum',
                  'maxSize' : 20,
                  'id' : 'aweca2b0da',
                  'local' : false,
                  'remoteName' : 'spi:wonum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'lbslocation_siteid',
                  'maxSize' : 8,
                  'id' : 'awad08b58f',
                  'local' : false,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'heading',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'lbslocation_heading',
                  'id' : 'aw84361220',
                  'local' : false,
                  'remoteName' : 'spi:heading',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'locationaccuracy',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'lbslocation_locationaccuracy',
                  'id' : 'aw91161f6b',
                  'local' : false,
                  'remoteName' : 'spi:locationaccuracy',
               }).
               setCreationFactories([
                     {name:'createLbslocation', creationString:'\/oslc\/os\/oslclbslocation' }
               ]).
               setQueryBases([
                     {name:'getLbslocation', queryString:'\/oslc\/os\/oslclbslocation', queryLabel:'' }
               ]);
            var resourcePromise079 = PersistenceManager.initCollection( resource079 );


            var resource080 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformGeolocationLocalStore',
                  'resourceName' : 'PlatformGeolocationLocalStore',
                  'id' : 'awd5b5d51a',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'wonum',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_wonum_string',
                  'id' : 'awdbe10dd2',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'wositeid',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_wositeid_string',
                  'id' : 'aw28f7f0c4',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'gpswatchid',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_gpswatchid_string',
                  'id' : 'awca7b645e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'offlinecount',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_offlinecount_integer',
                  'id' : 'awbf02aa12',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'latitudey',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_LatitudeY_string',
                  'id' : 'awfd598fd9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'longitudex',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_LongitudeX_string',
                  'id' : 'awd56b4278',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'errorcode',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_errorcode_string',
                  'id' : 'awaea299c9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'watchid',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_watchID_string',
                  'id' : 'awc678254f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'timerid',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_timerID_string',
                  'id' : 'awa992dff6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'timestamp',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_timerstamp_string',
                  'id' : 'aw38b15ed8',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise080 = PersistenceManager.initCollection( resource080 );


            all([resourcePromise001, resourcePromise002, resourcePromise003, resourcePromise004, resourcePromise005, resourcePromise006, resourcePromise007, resourcePromise008, resourcePromise009, resourcePromise010, resourcePromise011, resourcePromise012, resourcePromise013, resourcePromise014, resourcePromise015, resourcePromise016, resourcePromise017, resourcePromise018, resourcePromise019, resourcePromise020, resourcePromise021, resourcePromise022, resourcePromise023, resourcePromise024, resourcePromise025, resourcePromise026, resourcePromise027, resourcePromise028, resourcePromise029, resourcePromise030, resourcePromise031, resourcePromise032, resourcePromise033, resourcePromise034, resourcePromise035, resourcePromise036, resourcePromise037, resourcePromise038, resourcePromise039, resourcePromise040, resourcePromise041, resourcePromise042, resourcePromise043, resourcePromise044, resourcePromise045, resourcePromise046, resourcePromise047, resourcePromise048, resourcePromise049, resourcePromise050, resourcePromise051, resourcePromise052, resourcePromise053, resourcePromise054, resourcePromise055, resourcePromise056, resourcePromise057, resourcePromise058, resourcePromise059, resourcePromise060, resourcePromise061, resourcePromise062, resourcePromise063, resourcePromise064, resourcePromise065, resourcePromise066, resourcePromise067, resourcePromise068, resourcePromise069, resourcePromise070, resourcePromise071, resourcePromise072, resourcePromise073, resourcePromise074, resourcePromise075, resourcePromise076, resourcePromise077, resourcePromise078, resourcePromise079, resourcePromise080]).then(function(results) {
                 promise.resolve();
            }).
            otherwise(function(error) {
                 promise.reject(error);
            });
         }
      });
});
