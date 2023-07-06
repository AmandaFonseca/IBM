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
// Build: 2023-03-27 09:42:46
//----------------------------------------------------------------//
define(   "generated/application/data/ApplicationStoresBuilder", 
      [
         "dojo/_base/declare", 
         "dojo/promise/all", 
         "platform/boot/data/_StoresBuilderBase", 
         "platform/store/ResourceMetadata", 
         "platform/store/PersistenceManager", 
         "application/business/AssetObject", 
         "application/business/AssetStatusObject", 
         "application/business/MaxDomainObject", 
         "application/business/AttachmentsObject", 
         "application/business/ClassStructureObject"
      ],

function(declare, all, StoresBuilderBase, ResourceMetadata, PersistenceManager, AssetObject, AssetStatusObject, MaxDomainObject, AttachmentsObject, ClassStructureObject) {
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
                  'defaultOrderBy' : 'assetnum asc',
                  'pageSize' : 40,
                  'resourceName' : 'asset',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'hasManagedQuery' : 'true',
                  'artifactId' : 'assetResource',
                  'id' : 'aw5241366b',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : AssetObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:assetid,spi:orgid,spi:siteid,oslc:shortTitle,spi:ms_deadtree,spi:ms_wonum,spi:ms_rptversion,spi:ms_arboreason,spi:ms_loctype,spi:ms_roadasset,spi:ms_addressline,spi:ms_addressline2,spi:ms_staddrnumber,spi:ms_validate,spi:ms_latitudey,spi:ms_longitudex,spi:changedate,spi:status,spi:statusdate,spi:rolltoallchildren,spi:removefromactiveroutes,spi:removefromactivesp,spi:changepmstatus,spi:assettype,spi:itemnum,spi:itemtype,spi:itemsetid,spi:binnum,spi:calnum,spi:shiftnum,spi:serialnum,spi:isrunning,spi:priority,spi:description_longdescription,spi:classstructureid,spi:updownstatus{spi:changedate},spi:person{spi:ms_curlatitudey,spi:ms_curlongitudex,spi:ms_crbio,spi:ms_crea,spi:personid},spi:asset{spi:description,spi:ms_roadsegment}').
               setSupportiveFieldsSelectExpression('spi:assetattachments{oslc_cm:attachmentSize,dcterms:title,spi:fileName,dcterms:description,dcterms:created,spi:urlType,spi:docType,spi:printthrulink,spi:contentLocation,spi:anywhererefid,spi:createby},spi:assetspec{spi:assetspecid,spi:classstructureid,spi:ms_required,spi:ms_mobile,spi:orgid,spi:changedate,spi:displaysequence,spi:changeby,spi:numvalue,spi:alnvalue,spi:tablevalue,spi:section,spi:linearassetspecid,spi:measureunitid,spi:anywhererefid,spi_wm:assetattr{spi_wm:assetattrid,spi_wm:domainid,spi_wm:description,spi_wm:datatype}},spi:ms_arbo{spi:ms_angle,spi:ms_arboid,spi:ms_assetnum,spi:ms_changeby,spi:ms_changedate,spi:ms_diameter,spi:ms_diameterbreast,spi:ms_diametercolon,spi:ms_direction,spi:ms_family,spi:ms_firstbranch,spi:ms_genre,spi:ms_inadequatesite,spi:ms_jammvegetation,spi:ms_length,spi:ms_liftingfloor,spi:ms_locpublic,spi:ms_loctree,spi:ms_perimeterbreast,spi:ms_perimetercolon,spi:ms_permeablearea,spi:ms_popularname,spi:ms_retreat,spi:ms_ridewidth,spi:ms_scientific,spi:ms_slope,spi:ms_species,spi:ms_speciesunident,spi:ms_treeheight,spi:ms_typebuild,spi:ms_width},spi:ms_arborpt{spi:ms_accbark,spi:ms_active,spi:ms_adequacy,spi:ms_annealing01,spi:ms_annealing02,spi:ms_ant01,spi:ms_ant02,spi:ms_ant03,spi:ms_ant04,spi:ms_apparentdamage01,spi:ms_apparentdamage02,spi:ms_apparentdamage03,spi:ms_apparentdamage04,spi:ms_arborptid,spi:ms_assetnum,spi:ms_badformation,spi:ms_buildings,spi:ms_busstop,spi:ms_changeby,spi:ms_changedate,spi:ms_cleaning,spi:ms_coilfolded,spi:ms_comments,spi:ms_corrective,spi:ms_crack,spi:ms_createdate,spi:ms_cropped,spi:ms_drills01,spi:ms_drills02,spi:ms_drills03,spi:ms_drills04,spi:ms_driving,spi:ms_dry,spi:ms_enddate,spi:ms_exposed,spi:ms_flower,spi:ms_fruits,spi:ms_fungi01,spi:ms_fungi02,spi:ms_fungi03,spi:ms_fungi04,spi:ms_gasnetwork,spi:ms_hollow01,spi:ms_hollow02,spi:ms_hollow03,spi:ms_hollow04,spi:ms_inadequatepruning,spi:ms_inspectionbox,spi:ms_interference01,spi:ms_interference02,spi:ms_lamppost,spi:ms_lifting,spi:ms_lighting,spi:ms_lightstraffic,spi:ms_mechinjury01,spi:ms_mechinjury02,spi:ms_mechinjury03,spi:ms_mechinjury04,spi:ms_monitoring,spi:ms_parasitesplants,spi:ms_physicalbarrier,spi:ms_planting01,spi:ms_postage,spi:ms_postwallbuilding,spi:ms_prioritylevel,spi:ms_sapoozing,spi:ms_senescence,spi:ms_seweragesystem,spi:ms_sheets,spi:ms_sitesuitability,spi:ms_suppression,spi:ms_telecommunic,spi:ms_termite01,spi:ms_termite02,spi:ms_termite03,spi:ms_termite04,spi:ms_tnetwork,spi:ms_todonothing,spi:ms_tranplante,spi:ms_transitplates,spi:ms_tvehicle,spi:ms_tvoltage,spi:ms_uncup,spi:ms_version,spi:ms_virus,spi:ms_wall,spi:ms_waternetwork,spi:ms_wonum}').
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
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ms_deadtree',
                  'index' : false,
                  'artifactId' : 'asset_ms_deadtree',
                  'id' : 'aw7f65c257',
                  'local' : false,
                  'remoteName' : 'spi:ms_deadtree',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_wonum',
                  'index' : false,
                  'artifactId' : 'asset_ms_wonum',
                  'maxSize' : 20,
                  'id' : 'aw874aade1',
                  'local' : false,
                  'remoteName' : 'spi:ms_wonum',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'name' : 'ms_rptversion',
                  'index' : false,
                  'artifactId' : 'asset_ms_rptversion',
                  'id' : 'aw35395a82',
                  'local' : false,
                  'remoteName' : 'spi:ms_rptversion',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_arboreason',
                  'index' : false,
                  'artifactId' : 'asset_ms_ms_arboreason',
                  'id' : 'awf7f9e7ba',
                  'local' : false,
                  'remoteName' : 'spi:ms_arboreason',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_loctype',
                  'index' : false,
                  'artifactId' : 'asset_ms_ms_loctype',
                  'maxSize' : 100,
                  'id' : 'aw9ac1d029',
                  'local' : false,
                  'remoteName' : 'spi:ms_loctype',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:personid',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'asset',
                  'name' : 'personid',
                  'index' : false,
                  'artifactId' : 'person_personid',
                  'maxSize' : 30,
                  'id' : 'awa3ceca89',
                  'local' : false,
                  'remoteName' : 'spi:person',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:ms_curlatitudey',
                  'dataType' : 'inline',
                  'referenceResource' : 'asset',
                  'name' : 'curlatitudey',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'person_ms_curlatitudey',
                  'id' : 'aw8d62cebd',
                  'local' : false,
                  'remoteName' : 'spi:person',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:ms_curlongitudex',
                  'dataType' : 'inline',
                  'referenceResource' : 'asset',
                  'name' : 'curlongitudex',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'person_ms_curlongitudex',
                  'id' : 'awc13f0935',
                  'local' : false,
                  'remoteName' : 'spi:person',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:ms_crea',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'asset',
                  'name' : 'crea',
                  'index' : false,
                  'artifactId' : 'person_ms_crea',
                  'maxSize' : 10,
                  'id' : 'aw3ebf4c58',
                  'local' : false,
                  'remoteName' : 'spi:person',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:ms_crbio',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'asset',
                  'name' : 'crbio',
                  'index' : false,
                  'artifactId' : 'person_ms_crbio',
                  'maxSize' : 8,
                  'id' : 'awa7176943',
                  'local' : false,
                  'remoteName' : 'spi:person',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'roadasset',
                  'index' : false,
                  'artifactId' : 'ms_roadasset',
                  'maxSize' : 12,
                  'id' : 'aw4f40bca6',
                  'local' : false,
                  'remoteName' : 'spi:ms_roadasset',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:ms_roadsegment',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'asset',
                  'name' : 'roadsegment',
                  'index' : false,
                  'artifactId' : 'ms_roadsegment',
                  'maxSize' : 4,
                  'id' : 'awbfbbf6f0',
                  'local' : false,
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:description',
                  'dataType' : 'inline',
                  'referenceResource' : 'asset',
                  'name' : 'road_description',
                  'index' : false,
                  'artifactId' : 'description',
                  'maxSize' : 100,
                  'id' : 'aw6de44026',
                  'local' : false,
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_addressline',
                  'index' : false,
                  'artifactId' : 'asset_ms_addressline_spims_addressline',
                  'maxSize' : 255,
                  'id' : 'aw3229a72f',
                  'local' : false,
                  'remoteName' : 'spi:ms_addressline',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_addressline2',
                  'index' : false,
                  'artifactId' : 'asset_ms_addressline_spims_ms_addressline2',
                  'maxSize' : 255,
                  'id' : 'awfd0bdd7e',
                  'local' : false,
                  'remoteName' : 'spi:ms_addressline2',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_staddrnumber',
                  'index' : false,
                  'artifactId' : 'asset_ms_staddrnumber_spims_staddrnumber',
                  'maxSize' : 9,
                  'id' : 'awcd77c8a1',
                  'local' : false,
                  'remoteName' : 'spi:ms_staddrnumber',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ms_validate',
                  'index' : false,
                  'artifactId' : 'asset_ms_staddrnumber_spims_validate',
                  'id' : 'aw59ff283f',
                  'local' : false,
                  'remoteName' : 'spi:ms_validate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'latitudey',
                  'index' : true,
                  'scale' : 10,
                  'artifactId' : 'asset_latitudey',
                  'id' : 'awb4c7a78c',
                  'local' : false,
                  'remoteName' : 'spi:ms_latitudey',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'longitudex',
                  'index' : true,
                  'scale' : 10,
                  'artifactId' : 'asset_longitudex',
                  'id' : 'aw90d8ac66',
                  'local' : false,
                  'remoteName' : 'spi:ms_longitudex',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'changedate',
                  'index' : false,
                  'artifactId' : 'asset_changedate',
                  'id' : 'awf031afc7',
                  'local' : false,
                  'remoteName' : 'spi:changedate',
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'gpsLocation',
                  'index' : false,
                  'artifactId' : 'serviceRequest_gpsLocation_boolean',
                  'id' : 'awd0e8fd7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'status',
                  'index' : true,
                  'artifactId' : 'asset_status_spistatus',
                  'maxSize' : 20,
                  'id' : 'awe68e6dd7',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'statusdate',
                  'index' : false,
                  'artifactId' : 'asset_status_statusdate',
                  'id' : 'aw692e1ac4',
                  'local' : false,
                  'remoteName' : 'spi:statusdate',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'stausdesc',
                  'index' : false,
                  'artifactId' : 'asset_stausdesc_string',
                  'id' : 'awf000a31e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'boolean',
                  'name' : 'rolltoallchildren',
                  'index' : false,
                  'artifactId' : 'asset_status_spirolltoallchildren',
                  'id' : 'awe08a7284',
                  'local' : false,
                  'remoteName' : 'spi:rolltoallchildren',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'boolean',
                  'name' : 'removefromactiveroutes',
                  'index' : false,
                  'artifactId' : 'asset_status_spiremovefromactiveroutes',
                  'id' : 'aw9cadf466',
                  'local' : false,
                  'remoteName' : 'spi:removefromactiveroutes',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'boolean',
                  'name' : 'removefromactivesp',
                  'index' : false,
                  'artifactId' : 'asset_status_spiremovefromactivesp',
                  'id' : 'aw49f3487a',
                  'local' : false,
                  'remoteName' : 'spi:removefromactivesp',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'boolean',
                  'name' : 'changepmstatus',
                  'index' : false,
                  'artifactId' : 'asset_status_spichangepmstatus',
                  'id' : 'aw749167b8',
                  'local' : false,
                  'remoteName' : 'spi:changepmstatus',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'assettype',
                  'index' : true,
                  'artifactId' : 'asset_assettype_spiassettype',
                  'maxSize' : 15,
                  'id' : 'awda038f15',
                  'local' : false,
                  'remoteName' : 'spi:assettype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemnum',
                  'index' : true,
                  'artifactId' : 'asset_itemnum_spiitemnum',
                  'maxSize' : 30,
                  'id' : 'aw75fae770',
                  'local' : false,
                  'remoteName' : 'spi:itemnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemtype',
                  'index' : true,
                  'artifactId' : 'asset_itemtype_spiitemtype',
                  'maxSize' : 15,
                  'id' : 'aw887512cf',
                  'local' : false,
                  'remoteName' : 'spi:itemtype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemsetid',
                  'index' : true,
                  'artifactId' : 'asset_itemsetid_spiitemsetid',
                  'maxSize' : 8,
                  'id' : 'aw577511c2',
                  'local' : false,
                  'remoteName' : 'spi:itemsetid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'binnum',
                  'index' : true,
                  'artifactId' : 'asset_binnum_spibinnum',
                  'maxSize' : 8,
                  'id' : 'awd1c63dc2',
                  'local' : false,
                  'remoteName' : 'spi:binnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'calnum',
                  'index' : false,
                  'artifactId' : 'asset_spicalnunm_calnum',
                  'maxSize' : 8,
                  'id' : 'aw2a5d1531',
                  'local' : false,
                  'remoteName' : 'spi:calnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'shiftnum',
                  'index' : false,
                  'artifactId' : 'asset_spishiftnum_shiftnum',
                  'maxSize' : 8,
                  'id' : 'awa15496d2',
                  'local' : false,
                  'remoteName' : 'spi:shiftnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'serialnum',
                  'index' : false,
                  'artifactId' : 'asset_spiserialnum_serialnum',
                  'maxSize' : 64,
                  'id' : 'aw47b8b0d0',
                  'local' : false,
                  'remoteName' : 'spi:serialnum',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'isrunning',
                  'index' : false,
                  'artifactId' : 'asset_isrunning_spiisrunning',
                  'id' : 'aw8f82658f',
                  'local' : false,
                  'remoteName' : 'spi:isrunning',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:changedate',
                  'dataType' : 'inline',
                  'referenceResource' : 'asset',
                  'name' : 'updownstatusdate',
                  'index' : false,
                  'artifactId' : 'additionalasset_updownstatusdate_spiupdownstatusspichangedate',
                  'id' : 'awa704f28e',
                  'local' : false,
                  'remoteName' : 'spi:updownstatus',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'priority',
                  'index' : false,
                  'artifactId' : 'asset_priority_spipriority',
                  'id' : 'awa1f23997',
                  'local' : false,
                  'remoteName' : 'spi:priority',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'longaln',
                  'name' : 'assetlongdesc',
                  'index' : false,
                  'artifactId' : 'asset_assetlongdesc_spidescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'aw3d5e96b8',
                  'local' : false,
                  'remoteName' : 'spi:description_longdescription',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'attachments',
                  'name' : 'attachments',
                  'index' : false,
                  'artifactId' : 'asset_attachments_spiassetattachments',
                  'id' : 'awc6348c07',
                  'describedByResource' : 'attachments',
                  'local' : false,
                  'remoteName' : 'spi:assetattachments',
                  'selectExpression' : 'spi:assetattachments{oslc_cm:attachmentSize,dcterms:title,spi:fileName,dcterms:description,dcterms:created,spi:urlType,spi:docType,spi:printthrulink,spi:contentLocation,spi:anywhererefid,spi:createby}',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classstructureid',
                  'index' : false,
                  'artifactId' : 'asset_classstructureid_spiclassstructureid',
                  'maxSize' : 20,
                  'id' : 'aw3be6cb9',
                  'local' : false,
                  'remoteName' : 'spi:classstructureid',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'assetSpecResource',
                  'name' : 'assetSpec',
                  'index' : false,
                  'artifactId' : 'asset_assetSpec_spi_assetspec',
                  'id' : 'aw5fd1792a',
                  'describedByResource' : 'assetSpecResource',
                  'local' : false,
                  'remoteName' : 'spi:assetspec',
                  'selectExpression' : 'spi:assetspec{spi:assetspecid,spi:classstructureid,spi:ms_required,spi:ms_mobile,spi:orgid,spi:changedate,spi:displaysequence,spi:changeby,spi:numvalue,spi:alnvalue,spi:tablevalue,spi:section,spi:linearassetspecid,spi:measureunitid,spi:anywhererefid,spi_wm:assetattr{spi_wm:assetattrid,spi_wm:domainid,spi_wm:description,spi_wm:datatype}}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'MSArbo',
                  'name' : 'MSArbo',
                  'index' : false,
                  'artifactId' : 'asset_assetSpec_spi_MSArbo',
                  'id' : 'aw6bb11864',
                  'describedByResource' : 'MSArbo',
                  'local' : false,
                  'remoteName' : 'spi:ms_arbo',
                  'selectExpression' : 'spi:ms_arbo{spi:ms_angle,spi:ms_arboid,spi:ms_assetnum,spi:ms_changeby,spi:ms_changedate,spi:ms_diameter,spi:ms_diameterbreast,spi:ms_diametercolon,spi:ms_direction,spi:ms_family,spi:ms_firstbranch,spi:ms_genre,spi:ms_inadequatesite,spi:ms_jammvegetation,spi:ms_length,spi:ms_liftingfloor,spi:ms_locpublic,spi:ms_loctree,spi:ms_perimeterbreast,spi:ms_perimetercolon,spi:ms_permeablearea,spi:ms_popularname,spi:ms_retreat,spi:ms_ridewidth,spi:ms_scientific,spi:ms_slope,spi:ms_species,spi:ms_speciesunident,spi:ms_treeheight,spi:ms_typebuild,spi:ms_width}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'MSArboRpt',
                  'name' : 'MSArboRpt',
                  'index' : false,
                  'artifactId' : 'asset_assetSpec_spi_MSArboRpt',
                  'id' : 'aw998d97cb',
                  'describedByResource' : 'MSArboRpt',
                  'local' : false,
                  'remoteName' : 'spi:ms_arborpt',
                  'selectExpression' : 'spi:ms_arborpt{spi:ms_accbark,spi:ms_active,spi:ms_adequacy,spi:ms_annealing01,spi:ms_annealing02,spi:ms_ant01,spi:ms_ant02,spi:ms_ant03,spi:ms_ant04,spi:ms_apparentdamage01,spi:ms_apparentdamage02,spi:ms_apparentdamage03,spi:ms_apparentdamage04,spi:ms_arborptid,spi:ms_assetnum,spi:ms_badformation,spi:ms_buildings,spi:ms_busstop,spi:ms_changeby,spi:ms_changedate,spi:ms_cleaning,spi:ms_coilfolded,spi:ms_comments,spi:ms_corrective,spi:ms_crack,spi:ms_createdate,spi:ms_cropped,spi:ms_drills01,spi:ms_drills02,spi:ms_drills03,spi:ms_drills04,spi:ms_driving,spi:ms_dry,spi:ms_enddate,spi:ms_exposed,spi:ms_flower,spi:ms_fruits,spi:ms_fungi01,spi:ms_fungi02,spi:ms_fungi03,spi:ms_fungi04,spi:ms_gasnetwork,spi:ms_hollow01,spi:ms_hollow02,spi:ms_hollow03,spi:ms_hollow04,spi:ms_inadequatepruning,spi:ms_inspectionbox,spi:ms_interference01,spi:ms_interference02,spi:ms_lamppost,spi:ms_lifting,spi:ms_lighting,spi:ms_lightstraffic,spi:ms_mechinjury01,spi:ms_mechinjury02,spi:ms_mechinjury03,spi:ms_mechinjury04,spi:ms_monitoring,spi:ms_parasitesplants,spi:ms_physicalbarrier,spi:ms_planting01,spi:ms_postage,spi:ms_postwallbuilding,spi:ms_prioritylevel,spi:ms_sapoozing,spi:ms_senescence,spi:ms_seweragesystem,spi:ms_sheets,spi:ms_sitesuitability,spi:ms_suppression,spi:ms_telecommunic,spi:ms_termite01,spi:ms_termite02,spi:ms_termite03,spi:ms_termite04,spi:ms_tnetwork,spi:ms_todonothing,spi:ms_tranplante,spi:ms_transitplates,spi:ms_tvehicle,spi:ms_tvoltage,spi:ms_uncup,spi:ms_version,spi:ms_virus,spi:ms_wall,spi:ms_waternetwork,spi:ms_wonum}',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationdesc',
                  'index' : false,
                  'artifactId' : 'asset_locationdesc_string',
                  'id' : 'aw83c901b9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'parentdesc',
                  'index' : false,
                  'artifactId' : 'asset_parentdesc_string',
                  'id' : 'awa400bd36',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'displayisrunning',
                  'index' : false,
                  'artifactId' : 'asset_displayisrunning_spiisrunning',
                  'id' : 'aw122271a9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'displayupdownstatusdate',
                  'index' : false,
                  'artifactId' : 'additionalasset_displayupdownstatusdate_spiupdownstatusspichangedate',
                  'id' : 'aw4ba32885',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'duration',
                  'name' : 'displaytotaldowntime',
                  'index' : false,
                  'artifactId' : 'asset_displaytotaldowntime_spitotdowntime',
                  'id' : 'awd67b93e7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'displaydowntimecode',
                  'index' : false,
                  'artifactId' : 'asset_displaydowntimecode_downtimecode',
                  'id' : 'aw6f07f848',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'itemnumnotnull',
                  'formula' : '${itemnum} ? true : false',
                  'index' : true,
                  'artifactId' : 'asset_itemnumnotnull_boolean',
                  'id' : 'awa8235b2b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'parentanddescription',
                  'index' : false,
                  'artifactId' : 'asset_parentanddescription_string',
                  'id' : 'aw1c83cd77',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationanddescription',
                  'index' : false,
                  'artifactId' : 'asset_locationanddescription_string',
                  'id' : 'awca2ef77c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'statusdesc',
                  'index' : false,
                  'artifactId' : 'asset_statusdesc_string',
                  'id' : 'awe210dde0',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'descriptionModified',
                  'index' : false,
                  'artifactId' : 'asset_descriptionModified_boolean',
                  'id' : 'aweafb97e9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetdesc',
                  'index' : false,
                  'artifactId' : 'asset_assetdesc_string',
                  'id' : 'aw4dc5006d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'attachmentssize',
                  'index' : false,
                  'artifactId' : 'asset_attachmentssize_string',
                  'id' : 'aw7b430b3a',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetspecsize',
                  'index' : false,
                  'artifactId' : 'asset_specificationssize_string',
                  'id' : 'awa81090fe',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'sectiononecount',
                  'index' : false,
                  'artifactId' : 'asset_specone_count_string',
                  'id' : 'aw8dbcc46c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'sectiontwocount',
                  'index' : false,
                  'artifactId' : 'asset_spectwo_count_string',
                  'id' : 'awd16783f4',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'sectionthreecount',
                  'index' : false,
                  'artifactId' : 'asset_specthree_count_string',
                  'id' : 'aw779c22ef',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'sectionfourcount',
                  'index' : false,
                  'artifactId' : 'asset_specfour_count_string',
                  'id' : 'aweb9eaa09',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'techreportcount',
                  'index' : false,
                  'artifactId' : 'asset_techreportcount_count_string',
                  'id' : 'aw2fb4f225',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'classification',
                  'index' : false,
                  'artifactId' : 'asset_classification_string',
                  'id' : 'awa3074071',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'classificationdesc',
                  'index' : false,
                  'artifactId' : 'asset_classificationdesc_string',
                  'id' : 'aw8a6bd62e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'classificationpath',
                  'index' : false,
                  'artifactId' : 'asset_classificationpath_string',
                  'id' : 'awa4a4b082',
                  'persistent' : true,
                  'local' : true,
               }).
               setCreationFactories([
                     {name:'createMyAsset', creationString:'\/oslc\/os\/ms_oslcsgzarbo' }
               ]).
               setQueryBases([
                     {name:'searchAllAssets', queryString:'\/oslc\/os\/ms_oslcsgzarbo?savedQuery=Ativos_arboreos', defaultForSearch: true, queryLabel:'' },
                     {name:'getMyAssets', queryString:'\/oslc\/os\/ms_oslcsgzarbo?savedQuery=Ativos_arboreos', queryLabel:'' }
               ]);
            var resourcePromise004 = PersistenceManager.initCollection( resource004 );


            var resource005 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'MSArboRpt',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'MSArboRpt',
                  'id' : 'aw213323a9',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:ms_accbark,spi:ms_active,spi:ms_adequacy,spi:ms_annealing01,spi:ms_annealing02,spi:ms_ant01,spi:ms_ant02,spi:ms_ant03,spi:ms_ant04,spi:ms_apparentdamage01,spi:ms_apparentdamage02,spi:ms_apparentdamage03,spi:ms_apparentdamage04,spi:ms_arborptid,spi:ms_assetnum,spi:ms_badformation,spi:ms_buildings,spi:ms_busstop,spi:ms_changeby,spi:ms_changedate,spi:ms_cleaning,spi:ms_coilfolded,spi:ms_comments,spi:ms_corrective,spi:ms_crack,spi:ms_createdate,spi:ms_cropped,spi:ms_drills01,spi:ms_drills02,spi:ms_drills03,spi:ms_drills04,spi:ms_driving,spi:ms_dry,spi:ms_enddate,spi:ms_exposed,spi:ms_flower,spi:ms_fruits,spi:ms_fungi01,spi:ms_fungi02,spi:ms_fungi03,spi:ms_fungi04,spi:ms_gasnetwork,spi:ms_hollow01,spi:ms_hollow02,spi:ms_hollow03,spi:ms_hollow04,spi:ms_inadequatepruning,spi:ms_inspectionbox,spi:ms_interference01,spi:ms_interference02,spi:ms_lamppost,spi:ms_lifting,spi:ms_lighting,spi:ms_lightstraffic,spi:ms_mechinjury01,spi:ms_mechinjury02,spi:ms_mechinjury03,spi:ms_mechinjury04,spi:ms_monitoring,spi:ms_parasitesplants,spi:ms_physicalbarrier,spi:ms_planting01,spi:ms_postage,spi:ms_postwallbuilding,spi:ms_prioritylevel,spi:ms_sapoozing,spi:ms_senescence,spi:ms_seweragesystem,spi:ms_sheets,spi:ms_sitesuitability,spi:ms_suppression,spi:ms_telecommunic,spi:ms_termite01,spi:ms_termite02,spi:ms_termite03,spi:ms_termite04,spi:ms_tnetwork,spi:ms_todonothing,spi:ms_tranplante,spi:ms_transitplates,spi:ms_tvehicle,spi:ms_tvoltage,spi:ms_uncup,spi:ms_version,spi:ms_virus,spi:ms_wall,spi:ms_waternetwork,spi:ms_wonum').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_accbark',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_accbark',
                  'id' : 'aw6c142331',
                  'local' : false,
                  'remoteName' : 'spi:ms_accbark',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_active',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_active',
                  'id' : 'aw5a172d8f',
                  'local' : false,
                  'remoteName' : 'spi:ms_active',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_adequacy',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_adequacy',
                  'id' : 'aw97155524',
                  'local' : false,
                  'remoteName' : 'spi:ms_adequacy',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_annealing01',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_annealing01',
                  'id' : 'aw6ce37c6e',
                  'local' : false,
                  'remoteName' : 'spi:ms_annealing01',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_annealing02',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_annealing02',
                  'id' : 'awf5ea2dd4',
                  'local' : false,
                  'remoteName' : 'spi:ms_annealing02',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_ant01',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_ant01',
                  'id' : 'aw6c330e4e',
                  'local' : false,
                  'remoteName' : 'spi:ms_ant01',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_ant02',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_ant02',
                  'id' : 'awf53a5ff4',
                  'local' : false,
                  'remoteName' : 'spi:ms_ant02',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_ant03',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_ant03',
                  'id' : 'aw823d6f62',
                  'local' : false,
                  'remoteName' : 'spi:ms_ant03',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_ant04',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_ant04',
                  'id' : 'aw1c59fac1',
                  'local' : false,
                  'remoteName' : 'spi:ms_ant04',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_apparentdamage01',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_apparentdamage01',
                  'id' : 'awe1bbe31',
                  'local' : false,
                  'remoteName' : 'spi:ms_apparentdamage01',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_apparentdamage02',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_apparentdamage02',
                  'id' : 'aw9712ef8b',
                  'local' : false,
                  'remoteName' : 'spi:ms_apparentdamage02',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_apparentdamage03',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_apparentdamage03',
                  'id' : 'awe015df1d',
                  'local' : false,
                  'remoteName' : 'spi:ms_apparentdamage03',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_apparentdamage04',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_apparentdamage04',
                  'id' : 'aw7e714abe',
                  'local' : false,
                  'remoteName' : 'spi:ms_apparentdamage04',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'rptms_arborptid',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_arborptid',
                  'id' : 'awebc895cf',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:ms_arborptid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'rptms_assetnum',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_assetnum',
                  'maxSize' : 12,
                  'id' : 'awc0216652',
                  'local' : false,
                  'remoteName' : 'spi:ms_assetnum',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_badformation',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_badformation',
                  'id' : 'aw26f43b39',
                  'local' : false,
                  'remoteName' : 'spi:ms_badformation',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_buildings',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_buildings',
                  'id' : 'aw9243729f',
                  'local' : false,
                  'remoteName' : 'spi:ms_buildings',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_busstop',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_busstop',
                  'id' : 'aw6fd2bb39',
                  'local' : false,
                  'remoteName' : 'spi:ms_busstop',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'rptms_changeby',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_changeby',
                  'maxSize' : 30,
                  'id' : 'aw8fb37ce1',
                  'local' : false,
                  'remoteName' : 'spi:ms_changeby',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'rptms_changedate',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_changedate',
                  'id' : 'aw1edae6c7',
                  'local' : false,
                  'remoteName' : 'spi:ms_changedate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_cleaning',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_cleaning',
                  'id' : 'aw409549b4',
                  'local' : false,
                  'remoteName' : 'spi:ms_cleaning',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_coilfolded',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_coilfolded',
                  'id' : 'aw588cb314',
                  'local' : false,
                  'remoteName' : 'spi:ms_coilfolded',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'rptms_comments',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_comments',
                  'maxSize' : 255,
                  'id' : 'aw20678367',
                  'local' : false,
                  'remoteName' : 'spi:ms_comments',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_corrective',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_corrective',
                  'id' : 'aw86457b72',
                  'local' : false,
                  'remoteName' : 'spi:ms_corrective',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'rptms_crack',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_crack',
                  'id' : 'awcf962ef',
                  'local' : false,
                  'remoteName' : 'spi:ms_crack',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'rptms_createdate',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_createdate',
                  'id' : 'awd074200e',
                  'local' : false,
                  'remoteName' : 'spi:ms_createdate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_cropped',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_cropped',
                  'id' : 'aw8439c173',
                  'local' : false,
                  'remoteName' : 'spi:ms_cropped',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_drills01',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_drills01',
                  'id' : 'awef6bc9c2',
                  'local' : false,
                  'remoteName' : 'spi:ms_drills01',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_drills02',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_drills02',
                  'id' : 'aw76629878',
                  'local' : false,
                  'remoteName' : 'spi:ms_drills02',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_drills03',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_drills03',
                  'id' : 'aw165a8ee',
                  'local' : false,
                  'remoteName' : 'spi:ms_drills03',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_drills04',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_drills04',
                  'id' : 'aw9f013d4d',
                  'local' : false,
                  'remoteName' : 'spi:ms_drills04',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_driving',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_driving',
                  'id' : 'aw82bf450f',
                  'local' : false,
                  'remoteName' : 'spi:ms_driving',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'rptms_dry',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_dry',
                  'id' : 'awd5e51e7c',
                  'local' : false,
                  'remoteName' : 'spi:ms_dry',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'rptms_enddate',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_enddate',
                  'id' : 'aw26c1db1',
                  'local' : false,
                  'remoteName' : 'spi:ms_enddate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_exposed',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_exposed',
                  'id' : 'awaefe2eec',
                  'local' : false,
                  'remoteName' : 'spi:ms_exposed',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_flower',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_flower',
                  'id' : 'awb6de1057',
                  'local' : false,
                  'remoteName' : 'spi:ms_flower',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_fruits',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_fruits',
                  'id' : 'aw64cc13b3',
                  'local' : false,
                  'remoteName' : 'spi:ms_fruits',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'rptms_fungi01',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_fungi01',
                  'id' : 'awf4900c6f',
                  'local' : false,
                  'remoteName' : 'spi:ms_fungi01',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'rptms_fungi02',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_fungi02',
                  'id' : 'aw6d995dd5',
                  'local' : false,
                  'remoteName' : 'spi:ms_fungi02',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'rptms_fungi03',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_fungi03',
                  'id' : 'aw1a9e6d43',
                  'local' : false,
                  'remoteName' : 'spi:ms_fungi03',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'rptms_fungi04',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_fungi04',
                  'id' : 'aw84faf8e0',
                  'local' : false,
                  'remoteName' : 'spi:ms_fungi04',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_gasnetwork',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_gasnetwork',
                  'id' : 'aw6c948673',
                  'local' : false,
                  'remoteName' : 'spi:ms_gasnetwork',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'rptms_hollow01',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_hollow01',
                  'id' : 'awfbbcb702',
                  'local' : false,
                  'remoteName' : 'spi:ms_hollow01',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'rptms_hollow02',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_hollow02',
                  'id' : 'aw62b5e6b8',
                  'local' : false,
                  'remoteName' : 'spi:ms_hollow02',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'rptms_hollow03',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_hollow03',
                  'id' : 'aw15b2d62e',
                  'local' : false,
                  'remoteName' : 'spi:ms_hollow03',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'rptms_hollow04',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_hollow04',
                  'id' : 'aw8bd6438d',
                  'local' : false,
                  'remoteName' : 'spi:ms_hollow04',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_inadequatepruning',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_inadequatepruning',
                  'id' : 'awbb1f0446',
                  'local' : false,
                  'remoteName' : 'spi:ms_inadequatepruning',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_inspectionbox',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_inspectionbox',
                  'id' : 'aw4bd1b6e6',
                  'local' : false,
                  'remoteName' : 'spi:ms_inspectionbox',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_interference01',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_interference01',
                  'id' : 'aw17fadacd',
                  'local' : false,
                  'remoteName' : 'spi:ms_interference01',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_interference02',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_interference02',
                  'id' : 'aw8ef38b77',
                  'local' : false,
                  'remoteName' : 'spi:ms_interference02',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_lamppost',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_lamppost',
                  'id' : 'aw8628775b',
                  'local' : false,
                  'remoteName' : 'spi:ms_lamppost',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_lifting',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_lifting',
                  'id' : 'awf018a66a',
                  'local' : false,
                  'remoteName' : 'spi:ms_lifting',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_lighting',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_lighting',
                  'id' : 'awb4f1003e',
                  'local' : false,
                  'remoteName' : 'spi:ms_lighting',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_lightstraffic',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_lightstraffic',
                  'id' : 'aw7935f56',
                  'local' : false,
                  'remoteName' : 'spi:ms_lightstraffic',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_mechinjury01',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_mechinjury01',
                  'id' : 'awdf6918b4',
                  'local' : false,
                  'remoteName' : 'spi:ms_mechinjury01',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_mechinjury02',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_mechinjury02',
                  'id' : 'aw4660490e',
                  'local' : false,
                  'remoteName' : 'spi:ms_mechinjury02',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_mechinjury03',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_mechinjury03',
                  'id' : 'aw31677998',
                  'local' : false,
                  'remoteName' : 'spi:ms_mechinjury03',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_mechinjury04',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_mechinjury04',
                  'id' : 'awaf03ec3b',
                  'local' : false,
                  'remoteName' : 'spi:ms_mechinjury04',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_monitoring',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_monitoring',
                  'id' : 'aw92453d07',
                  'local' : false,
                  'remoteName' : 'spi:ms_monitoring',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_parasitesplants',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_parasitesplants',
                  'id' : 'aw1f27cb86',
                  'local' : false,
                  'remoteName' : 'spi:ms_parasitesplants',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_physicalbarrier',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_physicalbarrier',
                  'id' : 'awa1367a40',
                  'local' : false,
                  'remoteName' : 'spi:ms_physicalbarrier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_planting01',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_planting01',
                  'id' : 'aw5c3e932e',
                  'local' : false,
                  'remoteName' : 'spi:ms_planting01',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'rptms_postage',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_postage',
                  'id' : 'aw1fe020e2',
                  'local' : false,
                  'remoteName' : 'spi:ms_postage',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_postwallbuilding',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_postwallbuilding',
                  'id' : 'aw3300ac54',
                  'local' : false,
                  'remoteName' : 'spi:ms_postwallbuilding',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'rptms_prioritylevel',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_prioritylevel',
                  'id' : 'awdaa107e2',
                  'local' : false,
                  'remoteName' : 'spi:ms_prioritylevel',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_sapoozing',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_sapoozing',
                  'id' : 'aw5ef0001e',
                  'local' : false,
                  'remoteName' : 'spi:ms_sapoozing',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_senescence',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_senescence',
                  'id' : 'awb278d7cd',
                  'local' : false,
                  'remoteName' : 'spi:ms_senescence',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_seweragesystem',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_seweragesystem',
                  'id' : 'aw58b6199f',
                  'local' : false,
                  'remoteName' : 'spi:ms_seweragesystem',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_sheets',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_sheets',
                  'id' : 'aw4484a143',
                  'local' : false,
                  'remoteName' : 'spi:ms_sheets',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_sitesuitability',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_sitesuitability',
                  'id' : 'aw2fa328df',
                  'local' : false,
                  'remoteName' : 'spi:ms_sitesuitability',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_suppression',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_suppression',
                  'id' : 'aw201d2ad9',
                  'local' : false,
                  'remoteName' : 'spi:ms_suppression',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_telecommunic',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_telecommunic',
                  'id' : 'aw5e1cd30d',
                  'local' : false,
                  'remoteName' : 'spi:ms_telecommunic',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'rptms_termite01',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_termite01',
                  'id' : 'awa4392ce3',
                  'local' : false,
                  'remoteName' : 'spi:ms_termite01',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'rptms_termite02',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_termite02',
                  'id' : 'aw3d307d59',
                  'local' : false,
                  'remoteName' : 'spi:ms_termite02',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'rptms_termite03',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_termite03',
                  'id' : 'aw4a374dcf',
                  'local' : false,
                  'remoteName' : 'spi:ms_termite03',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'rptms_termite04',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_termite04',
                  'id' : 'awd453d86c',
                  'local' : false,
                  'remoteName' : 'spi:ms_termite04',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_tnetwork',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_tnetwork',
                  'id' : 'awcf290d8c',
                  'local' : false,
                  'remoteName' : 'spi:ms_tnetwork',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_todonothing',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_todonothing',
                  'id' : 'aw39074e36',
                  'local' : false,
                  'remoteName' : 'spi:ms_todonothing',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_tranplante',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_tranplante',
                  'id' : 'awcd0753e4',
                  'local' : false,
                  'remoteName' : 'spi:ms_tranplante',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_transitplates',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_transitplates',
                  'id' : 'aw7e83ec48',
                  'local' : false,
                  'remoteName' : 'spi:ms_transitplates',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_tvehicle',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_tvehicle',
                  'id' : 'awb42d6eb6',
                  'local' : false,
                  'remoteName' : 'spi:ms_tvehicle',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_tvoltage',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_tvoltage',
                  'id' : 'awa23569f7',
                  'local' : false,
                  'remoteName' : 'spi:ms_tvoltage',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'rptms_uncup',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_uncup',
                  'id' : 'aw6cef40bf',
                  'local' : false,
                  'remoteName' : 'spi:ms_uncup',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'name' : 'rptms_version',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_version',
                  'id' : 'aw2c04258f',
                  'local' : false,
                  'remoteName' : 'spi:ms_version',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_virus',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_virus',
                  'id' : 'aw32759a2b',
                  'local' : false,
                  'remoteName' : 'spi:ms_virus',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_wall',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_wall',
                  'id' : 'awa41919bb',
                  'local' : false,
                  'remoteName' : 'spi:ms_wall',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rptms_waternetwork',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_waternetwork',
                  'id' : 'aw36c11fe8',
                  'local' : false,
                  'remoteName' : 'spi:ms_waternetwork',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'rptms_wonum',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arborptms_wonum',
                  'maxSize' : 20,
                  'id' : 'awc54d8b30',
                  'local' : false,
                  'remoteName' : 'spi:ms_wonum',
               });
            var resourcePromise005 = PersistenceManager.initCollection( resource005 );


            var resource006 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'MSArbo',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'MSArbo',
                  'id' : 'aw83acfb80',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:ms_angle,spi:ms_arboid,spi:ms_assetnum,spi:ms_changeby,spi:ms_changedate,spi:ms_diameter,spi:ms_diameterbreast,spi:ms_diametercolon,spi:ms_direction,spi:ms_family,spi:ms_firstbranch,spi:ms_genre,spi:ms_inadequatesite,spi:ms_jammvegetation,spi:ms_length,spi:ms_liftingfloor,spi:ms_locpublic,spi:ms_loctree,spi:ms_perimeterbreast,spi:ms_perimetercolon,spi:ms_permeablearea,spi:ms_popularname,spi:ms_retreat,spi:ms_ridewidth,spi:ms_scientific,spi:ms_slope,spi:ms_species,spi:ms_speciesunident,spi:ms_treeheight,spi:ms_typebuild,spi:ms_width').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'ms_angle',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_angle',
                  'id' : 'aw75dcfd36',
                  'local' : false,
                  'remoteName' : 'spi:ms_angle',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'ms_arboid',
                  'index' : true,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_arboid',
                  'id' : 'aw6b2f784c',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:ms_arboid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_assetnum',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_assetnum',
                  'maxSize' : 12,
                  'id' : 'awa929d83e',
                  'local' : false,
                  'remoteName' : 'spi:ms_assetnum',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ms_changeby',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arbochangeby',
                  'maxSize' : 30,
                  'id' : 'aw4da13c19',
                  'local' : false,
                  'remoteName' : 'spi:ms_changeby',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'ms_changedate',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arbochangedate',
                  'id' : 'awb4630ef0',
                  'local' : false,
                  'remoteName' : 'spi:ms_changedate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'ms_diameter',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'asset_ms_arbo_spims_arbodiameter',
                  'id' : 'awc9cd0ae7',
                  'local' : false,
                  'remoteName' : 'spi:ms_diameter',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'ms_diameterbreast',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_diameterbreast',
                  'id' : 'awa1a992f7',
                  'local' : false,
                  'remoteName' : 'spi:ms_diameterbreast',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'ms_diametercolon',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_diametercolon',
                  'id' : 'aw1a2c25d9',
                  'local' : false,
                  'remoteName' : 'spi:ms_diametercolon',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_direction',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_direction',
                  'id' : 'aw72353046',
                  'local' : false,
                  'remoteName' : 'spi:ms_direction',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_family',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_family',
                  'id' : 'aw13f551de',
                  'local' : false,
                  'remoteName' : 'spi:ms_family',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'ms_firstbranch',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_firstbranch',
                  'id' : 'awae3b7ae0',
                  'local' : false,
                  'remoteName' : 'spi:ms_firstbranch',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_genre',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_genre',
                  'id' : 'awf60d8bc7',
                  'local' : false,
                  'remoteName' : 'spi:ms_genre',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ms_inadequatesite',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_inadequatesite',
                  'id' : 'aw29a86d9c',
                  'local' : false,
                  'remoteName' : 'spi:ms_inadequatesite',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ms_jammvegetation',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_jammvegetation',
                  'id' : 'awad2959ce',
                  'local' : false,
                  'remoteName' : 'spi:ms_jammvegetation',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'ms_length',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_length',
                  'id' : 'awb76eee37',
                  'local' : false,
                  'remoteName' : 'spi:ms_length',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ms_liftingfloor',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_liftingfloor',
                  'id' : 'aw41c9243b',
                  'local' : false,
                  'remoteName' : 'spi:ms_liftingfloor',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_locpublic',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_locpublic',
                  'id' : 'aw29c2ec3a',
                  'local' : false,
                  'remoteName' : 'spi:ms_locpublic',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_loctree',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_loctree',
                  'id' : 'awfd54ace2',
                  'local' : false,
                  'remoteName' : 'spi:ms_loctree',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'ms_perimeterbreast',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_perimeterbreast',
                  'id' : 'aw9e11c835',
                  'local' : false,
                  'remoteName' : 'spi:ms_perimeterbreast',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'ms_perimetercolon',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_perimetercolon',
                  'id' : 'aw17703a7f',
                  'local' : false,
                  'remoteName' : 'spi:ms_perimetercolon',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ms_permeablearea',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_permeablearea',
                  'id' : 'aw87db9d06',
                  'local' : false,
                  'remoteName' : 'spi:ms_permeablearea',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_popularname',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_popularname',
                  'id' : 'aw6c578371',
                  'local' : false,
                  'remoteName' : 'spi:ms_popularname',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ms_retreat',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_retreat',
                  'id' : 'aw8b302c5a',
                  'local' : false,
                  'remoteName' : 'spi:ms_retreat',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'ms_ridewidth',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_ridewidth',
                  'id' : 'awd67fe1b5',
                  'local' : false,
                  'remoteName' : 'spi:ms_ridewidth',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_scientific',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_scientific',
                  'id' : 'aw14f78d1e',
                  'local' : false,
                  'remoteName' : 'spi:ms_scientific',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ms_slope',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_slope',
                  'id' : 'aw2d91fdba',
                  'local' : false,
                  'remoteName' : 'spi:ms_slope',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_species',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_species',
                  'id' : 'aw386b93cd',
                  'local' : false,
                  'remoteName' : 'spi:ms_species',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ms_speciesunident',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_speciesunident',
                  'id' : 'aw3eebcdc3',
                  'local' : false,
                  'remoteName' : 'spi:ms_speciesunident',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'ms_treeheight',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_treeheight',
                  'id' : 'awaec5684',
                  'local' : false,
                  'remoteName' : 'spi:ms_treeheight',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_typebuild',
                  'index' : false,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_typebuild',
                  'id' : 'aw7bf5a63d',
                  'local' : false,
                  'remoteName' : 'spi:ms_typebuild',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'ms_width',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'asset_ms_arbo_spims_arboms_width',
                  'id' : 'awf947fd10',
                  'local' : false,
                  'remoteName' : 'spi:ms_width',
               });
            var resourcePromise006 = PersistenceManager.initCollection( resource006 );


            var resource007 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'assetattrtypes',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
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
            var resourcePromise007 = PersistenceManager.initCollection( resource007 );


            var resource008 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'searchAsset',
                  'resourceName' : 'searchAsset',
                  'id' : 'awc551102a',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'assetnum',
                  'index' : true,
                  'artifactId' : 'searchAsset_assetnum_string',
                  'id' : 'awe7c03880',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'searchAsset_description_string',
                  'id' : 'awc03f9a45',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'parent',
                  'index' : false,
                  'artifactId' : 'searchAsset_parent_string',
                  'id' : 'awa289a389',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'status',
                  'index' : false,
                  'artifactId' : 'searchAsset_statusdesc_string',
                  'id' : 'awf60a631a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'location',
                  'index' : false,
                  'artifactId' : 'searchAsset_location_string',
                  'id' : 'awb535ae1d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'priority',
                  'index' : false,
                  'artifactId' : 'searchAsset_priority_string',
                  'id' : 'aw6da4f64',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'ms_addressline',
                  'index' : false,
                  'artifactId' : 'searchAsset_priority_ms_addressline',
                  'id' : 'aw89e23d8f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'ms_staddrnumber',
                  'index' : false,
                  'artifactId' : 'searchAsset_priority_ms_staddrnumber',
                  'id' : 'aw58bc45a9',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise008 = PersistenceManager.initCollection( resource008 );


            var resource009 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'domainAssetStatus',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainAssetStatus',
                  'id' : 'aw179ac11b',
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
                  'artifactId' : 'domainAssetStatus_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw1416c8c8',
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
                  'artifactId' : 'domainAssetStatus_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw5cae958f',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainAssetStatus_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw7648326',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainAssetStatus_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'aw5dfad764',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainAssetStatus_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw1538fada',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainAssetStatus_defaults_spidefaults',
                  'id' : 'aw9fae7166',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainAssetStatus_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw5102bc5c',
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
                  'artifactId' : 'domainAssetStatus_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awf0753a17',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getassetstatus', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22LOCASSETSTATUS%22');
            var resourcePromise009 = PersistenceManager.initCollection( resource009 );


            var resource010 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'statusChangeResource',
                  'resourceName' : 'statusChangeResource',
                  'id' : 'aw8e54bcf7',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'classInstance' : AssetStatusObject,
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
                  'dataType' : 'boolean',
                  'name' : 'rolltoallchildren',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_spirolltoallchildren',
                  'id' : 'aw2651a9da',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'removefromactiveroutes',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_spiremovefromactiveroutes',
                  'id' : 'awf6a7114d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'removefromactivesp',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_spiremovefromactivesp',
                  'id' : 'awc5e6ef52',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'changepmstatus',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_spichangepmstatus',
                  'id' : 'aw4abcb2f1',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_maxvalue',
                  'id' : 'aw91079d00',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise010 = PersistenceManager.initCollection( resource010 );


            var resource011 = new ResourceMetadata({
                  'refreshOnLogin' : 'true',
                  'pageSize' : 200,
                  'resourceName' : 'oslcmaxvars',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
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
               setWhereClause('spi%3Avarname+in+%5B%22STARTTIMERINPRG%22%2C%22LABTRANSTOLERANCE%22%5D');
            var resourcePromise011 = PersistenceManager.initCollection( resource011 );


            var resource012 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'userInfo',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'userInfo',
                  'id' : 'awcdc6e618',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:userid,spi:loginid,spi:storeroomsite,spi:type,spi:personid,spi:sysuser,spi:querywithsite,spi:status,spi:emailpswd,spi:screenreader,spi:failedlogins,spi:inactivesites,spi:defsite{spi:orgid,oslc:shortTitle}').
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
               setQueryBases([
                     {name:'currentUser', queryString:'\/oslc\/os\/oslcmaxuser?savedQuery=currentUser', queryLabel:'' }
               ]);
            var resourcePromise012 = PersistenceManager.initCollection( resource012 );


            var resource013 = new ResourceMetadata({
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
            var resourcePromise013 = PersistenceManager.initCollection( resource013 );


            var resource014 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'appDocType',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
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
            var resourcePromise014 = PersistenceManager.initCollection( resource014 );


            var resource015 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'site',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
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
            var resourcePromise015 = PersistenceManager.initCollection( resource015 );


            var resource016 = new ResourceMetadata({
                  'pageSize' : 500,
                  'resourceName' : 'maxdomain',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
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
                     {name:'getmaxdomain', queryString:'\/oslc\/os\/oslcmaxdomain?savedQuery=getAssetSpecificationDomains', queryLabel:'' }
               ]).
               setWhereClause('spi_wm%3Adomaintype+in+%5B%22NUMERIC%22%2C%22ALN%22%2C%22TABLE%22%5D');
            var resourcePromise016 = PersistenceManager.initCollection( resource016 );


            var resource017 = new ResourceMetadata({
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
            var resourcePromise017 = PersistenceManager.initCollection( resource017 );


            var resource018 = new ResourceMetadata({
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
            var resourcePromise018 = PersistenceManager.initCollection( resource018 );


            var resource019 = new ResourceMetadata({
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
                  'name' : 'displayFileType',
                  'index' : false,
                  'artifactId' : 'attachments_displayFileType_string',
                  'id' : 'awbdc99f90',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise019 = PersistenceManager.initCollection( resource019 );


            var resource020 = new ResourceMetadata({
                  'pageSize' : 100,
                  'resourceName' : 'classstructure',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
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
                     {name:'getclassstructure', queryString:'\/oslc\/os\/oslcclassstructure?savedQuery=ANYWHEREASSETALL', queryLabel:'' }
               ]);
            var resourcePromise020 = PersistenceManager.initCollection( resource020 );


            var resource021 = new ResourceMetadata({
                  'pageSize' : 500,
                  'resourceName' : 'classSpec',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
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
                  'index' : false,
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
                  'index' : false,
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
               setWhereClause('spi_wm%3Aclassspecusewith%7Bspi_wm%3Aobjectname%3D%22ASSET%22%7D');
            var resourcePromise021 = PersistenceManager.initCollection( resource021 );


            var resource022 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'classArbo',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'classArbo',
                  'id' : 'awe4bd4890',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,oslc:shortTitle,dcterms:title').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'userInfo_classArbo_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw151771e4',
                  'key' : '1',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classficationid',
                  'index' : true,
                  'artifactId' : 'classArbo_classficationid_oslcshortTitle',
                  'maxSize' : 192,
                  'id' : 'aw25821628',
                  'key' : '2',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'classArbo_description_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw568ac182',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               setQueryBases([
                     {name:'getclassArbo', queryString:'\/oslc\/os\/ms_oslcclassif?savedQuery=MS_ClassSGZArbo', queryLabel:'' }
               ]);
            var resourcePromise022 = PersistenceManager.initCollection( resource022 );


            var resource023 = new ResourceMetadata({
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
               setSimpleFieldsSelectExpression('spi:assetspecid,spi:classstructureid,spi:ms_required,spi:ms_mobile,spi:orgid,spi:changedate,spi:displaysequence,spi:changeby,spi:numvalue,spi:alnvalue,spi:tablevalue,spi:section,spi:linearassetspecid,spi:measureunitid,spi:anywhererefid,spi_wm:assetattr{spi_wm:assetattrid,spi_wm:domainid,spi_wm:description,spi_wm:datatype}').
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
                  'remoteName' : 'spi:assetspecid',
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
                  'remoteName' : 'spi:classstructureid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'mandatory',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_mandatory_spimandatory',
                  'id' : 'aw2f587b78',
                  'local' : false,
                  'remoteName' : 'spi:ms_required',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ms_mobile',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_mandatory_spimobile',
                  'id' : 'awdaab4f88',
                  'local' : false,
                  'remoteName' : 'spi:ms_mobile',
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
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'changedate',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_changedate_spichangedate',
                  'id' : 'awb289f5e0',
                  'local' : false,
                  'remoteName' : 'spi:changedate',
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
                  'remoteName' : 'spi:displaysequence',
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
                  'remoteName' : 'spi:changeby',
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
                  'remoteName' : 'spi_wm:assetattr',
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
                  'remoteName' : 'spi_wm:assetattr',
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
                  'remoteName' : 'spi_wm:assetattr',
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
                  'remoteName' : 'spi_wm:assetattr',
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
                  'remoteName' : 'spi:numvalue',
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
                  'remoteName' : 'spi:alnvalue',
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
                  'remoteName' : 'spi:tablevalue',
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
                  'remoteName' : 'spi:section',
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
                  'remoteName' : 'spi:linearassetspecid',
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
                  'remoteName' : 'spi:measureunitid',
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
                  'remoteName' : 'spi:anywhererefid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'uivalue',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_uivalue',
                  'id' : 'awab4d4f66',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise023 = PersistenceManager.initCollection( resource023 );


            var resource024 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'assetAttribute',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'assetAttribute',
                  'additionalData' : true,
                  'id' : 'awd42032b8',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:datatype,spi_wm:description,spi_wm:assetattrid,spi_wm:measureunitid,spi_wm:siteid,spi_wm:orgid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'datatype',
                  'index' : false,
                  'artifactId' : 'assetAttribute_datatype_spiwmdatatype',
                  'id' : 'awf67fe3ec',
                  'local' : false,
                  'remoteName' : 'spi_wm:datatype',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'assetAttribute_description_spiwmdescription',
                  'id' : 'aw4adb715c',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetattrid',
                  'index' : true,
                  'artifactId' : 'assetAttribute_assetattrid_spiwmassetid',
                  'id' : 'aw61129d6f',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattrid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'measureunitid',
                  'index' : false,
                  'artifactId' : 'assetAttribute_assetattrid_spiwmmeasureunitid',
                  'id' : 'aw7140d6b2',
                  'local' : false,
                  'remoteName' : 'spi_wm:measureunitid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'assetAttribute_siteid_spiwmsiteid',
                  'id' : 'awf0595d18',
                  'local' : false,
                  'remoteName' : 'spi_wm:siteid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'assetAttribute_orgid_spiwmorgid',
                  'id' : 'awc587a5e',
                  'key' : '2',
                  'local' : false,
                  'remoteName' : 'spi_wm:orgid',
               }).
               setQueryBases([
                     {name:'getassetattr', queryString:'\/oslc\/os\/oslcassetattr', queryLabel:'' }
               ]).
               setWhereClause('spi_wm%3Aorgid%3D%24%7Bdeforg%7D');
            var resourcePromise024 = PersistenceManager.initCollection( resource024 );


            var resource025 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'motivosbaixa',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'motivosbaixa',
                  'additionalData' : true,
                  'id' : 'aw612ce6ca',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:value,spi:description,spi:domainid,spi:numericdomainid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'MS_ARBO018Domain_value_spivalue',
                  'id' : 'aw136da2f5',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'MS_ARBO018Domain_description_spidescription',
                  'maxSize' : 117,
                  'id' : 'awec86397d',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'MS_ARBO018Domain_domainid_spidomainid',
                  'maxSize' : 18,
                  'id' : 'awf80b009f',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'MS_ARBO018Domain_numericdomainid_spinumericdomainid',
                  'id' : 'awcefd0385',
                  'local' : false,
                  'remoteName' : 'spi:numericdomainid',
               }).
               setQueryBases([
                     {name:'getMS_ARBO018Code', queryString:'\/oslc\/os\/oslcnumericdomain', queryLabel:'' }
               ]).
               setWhereClause('spi%3Adomainid%3D%22MS_ARBO018%22');
            var resourcePromise025 = PersistenceManager.initCollection( resource025 );


            var resource026 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'msloctree',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'msloctree',
                  'additionalData' : true,
                  'id' : 'aw94a6f36d',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:value,spi:description,spi:domainid,spi:numericdomainid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'MS_ARBO005Domain_value_spivalue',
                  'id' : 'aw7ad499e1',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'MS_ARBO005Domain_description_spidescription',
                  'maxSize' : 117,
                  'id' : 'aw6af0b4aa',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'MS_ARBO005Domain_domainid_spidomainid',
                  'maxSize' : 18,
                  'id' : 'aw91c1383a',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'MS_ARBO005Domain_numericdomainid_spinumericdomainid',
                  'id' : 'awc8395c5c',
                  'local' : false,
                  'remoteName' : 'spi:numericdomainid',
               }).
               setQueryBases([
                     {name:'getMS_ARBO005Code', queryString:'\/oslc\/os\/oslcnumericdomain', queryLabel:'' }
               ]).
               setWhereClause('spi%3Adomainid%3D%22MS_ARBO005%22');
            var resourcePromise026 = PersistenceManager.initCollection( resource026 );


            var resource027 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'mstypebuild',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'mstypebuild',
                  'additionalData' : true,
                  'id' : 'aw3c3a072e',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:value,spi:description,spi:domainid,spi:numericdomainid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'MS_ARBO008Domain_value_spivalue',
                  'id' : 'aw881e4821',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'MS_ARBO008Domain_description_spidescription',
                  'maxSize' : 117,
                  'id' : 'aw23182eb5',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'MS_ARBO008Domain_domainid_spidomainid',
                  'maxSize' : 18,
                  'id' : 'aw9b0cd9bb',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'MS_ARBO008Domain_numericdomainid_spinumericdomainid',
                  'id' : 'aw89eef57e',
                  'local' : false,
                  'remoteName' : 'spi:numericdomainid',
               }).
               setQueryBases([
                     {name:'getMS_ARBO008Code', queryString:'\/oslc\/os\/oslcnumericdomain', queryLabel:'' }
               ]).
               setWhereClause('spi%3Adomainid%3D%22MS_ARBO008%22');
            var resourcePromise027 = PersistenceManager.initCollection( resource027 );


            var resource028 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'mslocpublic',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'mslocpublic',
                  'additionalData' : true,
                  'id' : 'aw6e0d4d29',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:value,spi:description,spi:domainid,spi:numericdomainid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'MS_ARBO009Domain_value_spivalue',
                  'id' : 'aw9f362ce1',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'MS_ARBO009Domain_description_spidescription',
                  'maxSize' : 117,
                  'id' : 'aw79a7f83',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'MS_ARBO009Domain_domainid_spidomainid',
                  'maxSize' : 18,
                  'id' : 'aw9ab924a6',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'MS_ARBO009Domain_numericdomainid_spinumericdomainid',
                  'id' : 'aw28d77190',
                  'local' : false,
                  'remoteName' : 'spi:numericdomainid',
               }).
               setQueryBases([
                     {name:'getMS_ARBO009Code', queryString:'\/oslc\/os\/oslcnumericdomain', queryLabel:'' }
               ]).
               setWhereClause('spi%3Adomainid%3D%22MS_ARBO009%22');
            var resourcePromise028 = PersistenceManager.initCollection( resource028 );


            var resource029 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'fungiTerm',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'fungiTerm',
                  'additionalData' : true,
                  'id' : 'aw53e3f9bd',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:value,spi:description,spi:domainid,spi:numericdomainid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'MS_ARBO013Domain_value_spivalue',
                  'id' : 'aw935629b5',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'MS_ARBO013Domain_description_spidescription',
                  'maxSize' : 117,
                  'id' : 'aw7e6345d6',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'MS_MS_ARBO013Domain_domainid_spidomainid',
                  'maxSize' : 18,
                  'id' : 'awdbabc28d',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'MS_ARBO013Domain_numericdomainid_spinumericdomainid',
                  'id' : 'awff5dbc41',
                  'local' : false,
                  'remoteName' : 'spi:numericdomainid',
               }).
               setQueryBases([
                     {name:'getMS_ARBO013Code', queryString:'\/oslc\/os\/oslcnumericdomain', queryLabel:'' }
               ]).
               setWhereClause('spi%3Adomainid%3D%22MS_ARBO013%22');
            var resourcePromise029 = PersistenceManager.initCollection( resource029 );


            var resource030 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'mscrack',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'mscrack',
                  'additionalData' : true,
                  'id' : 'aw38bac91d',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:value,spi:description,spi:domainid,spi:numericdomainid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'MS_ARBO014Domain_value_spivalue',
                  'id' : 'awf68f17f5',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'MS_ARBO014Domain_description_spidescription',
                  'maxSize' : 117,
                  'id' : 'aw81ecf254',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'MS_ARBO014Domain_domainid_spidomainid',
                  'maxSize' : 18,
                  'id' : 'awf3731c03',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'MS_ARBO014Domain_numericdomainid_spinumericdomainid',
                  'id' : 'aw2e132e49',
                  'local' : false,
                  'remoteName' : 'spi:numericdomainid',
               }).
               setQueryBases([
                     {name:'getMS_ARBO014Code', queryString:'\/oslc\/os\/oslcnumericdomain', queryLabel:'' }
               ]).
               setWhereClause('spi%3Adomainid%3D%22MS_ARBO014%22');
            var resourcePromise030 = PersistenceManager.initCollection( resource030 );


            var resource031 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'msdirection',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'msdirection',
                  'additionalData' : true,
                  'id' : 'aw35fa9155',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:value,spi:description,spi:domainid,spi:numericdomainid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'MS_ARBO012Domain_value_spivalue',
                  'id' : 'aw847e4d75',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'MS_ARBO012Domain_description_spidescription',
                  'maxSize' : 117,
                  'id' : 'aw5ae114e0',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'MS_ARBO012Domain_domainid_spidomainid',
                  'maxSize' : 18,
                  'id' : 'awf6cf124d',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'MS_ARBO012Domain_numericdomainid_spinumericdomainid',
                  'id' : 'aw5e6438af',
                  'local' : false,
                  'remoteName' : 'spi:numericdomainid',
               }).
               setQueryBases([
                     {name:'getMS_ARBO012Code', queryString:'\/oslc\/os\/oslcnumericdomain', queryLabel:'' }
               ]).
               setWhereClause('spi%3Adomainid%3D%22MS_ARBO012%22');
            var resourcePromise031 = PersistenceManager.initCollection( resource031 );


            var resource032 = new ResourceMetadata({
                  'pageSize' : 250,
                  'resourceName' : 'mspopularname',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'mspopularname',
                  'additionalData' : true,
                  'id' : 'awac691652',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:value,spi:description,spi:domainid,spi:numericdomainid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'MS_ARBO004Domain_value_spivalue',
                  'id' : 'aw6dfcfd21',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'MS_ARBO004Domain_description_spidescription',
                  'maxSize' : 117,
                  'id' : 'aw4e72e59c',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'MS_ARBO004Domain_domainid_spidomainid',
                  'maxSize' : 18,
                  'id' : 'aw9074c527',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'MS_ARBO004Domain_numericdomainid_spinumericdomainid',
                  'id' : 'aw6900d8b2',
                  'local' : false,
                  'remoteName' : 'spi:numericdomainid',
               }).
               setQueryBases([
                     {name:'getMS_ARBO004Code', queryString:'\/oslc\/os\/oslcnumericdomain', queryLabel:'' }
               ]).
               setWhereClause('spi%3Adomainid%3D%22MS_ARBO004%22');
            var resourcePromise032 = PersistenceManager.initCollection( resource032 );


            var resource033 = new ResourceMetadata({
                  'pageSize' : 250,
                  'resourceName' : 'msscientific',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'msscientific',
                  'additionalData' : true,
                  'id' : 'aw900e0361',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:value,spi:description,spi:domainid,spi:numericdomainid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'MS_ARBO011Domain_value_spivalue',
                  'id' : 'awbd06e035',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'MS_ARBO011Domain_description_spidescription',
                  'maxSize' : 117,
                  'id' : 'aw3767e7ba',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'MS_ARBO011Domain_domainid_spidomainid',
                  'maxSize' : 18,
                  'id' : 'awf411156a',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'MS_ARBO011Domain_numericdomainid_spinumericdomainid',
                  'id' : 'aw665fb3dc',
                  'local' : false,
                  'remoteName' : 'spi:numericdomainid',
               }).
               setQueryBases([
                     {name:'getMS_ARBO011Code', queryString:'\/oslc\/os\/oslcnumericdomain', queryLabel:'' }
               ]).
               setWhereClause('spi%3Adomainid%3D%22MS_ARBO011%22');
            var resourcePromise033 = PersistenceManager.initCollection( resource033 );


            var resource034 = new ResourceMetadata({
                  'pageSize' : 150,
                  'resourceName' : 'msfamily',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'msfamily',
                  'additionalData' : true,
                  'id' : 'awe768204d',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:value,spi:description,spi:domainid,spi:numericdomainid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'MS_ARBO001Domain_value_spivalue',
                  'id' : 'aw26750ae1',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'MS_ARBO001Domain_description_spidescription',
                  'maxSize' : 117,
                  'id' : 'awf8f9f072',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'MS_ARBO001Domain_domainid_spidomainid',
                  'maxSize' : 18,
                  'id' : 'aw9716cc4e',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'MS_ARBO001Domain_numericdomainid_spinumericdomainid',
                  'id' : 'aw214c4527',
                  'local' : false,
                  'remoteName' : 'spi:numericdomainid',
               }).
               setQueryBases([
                     {name:'getMS_ARBO001Code', queryString:'\/oslc\/os\/oslcnumericdomain', queryLabel:'' }
               ]).
               setWhereClause('spi%3Adomainid%3D%22MS_ARBO001%22');
            var resourcePromise034 = PersistenceManager.initCollection( resource034 );


            var resource035 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'mspostage',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'mspostage',
                  'additionalData' : true,
                  'id' : 'aw786eedfe',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:value,spi:description,spi:domainid,spi:numericdomainid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'MS_ARBO016Domain_value_spivalue',
                  'id' : 'awd8dfde75',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'MS_ARBO016Domain_description_spidescription',
                  'maxSize' : 117,
                  'id' : 'awc8e85038',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'MS_ARBO016Domain_domainid_spidomainid',
                  'maxSize' : 18,
                  'id' : 'awf018e639',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'MS_ARBO016Domain_numericdomainid_spinumericdomainid',
                  'id' : 'awb71121d4',
                  'local' : false,
                  'remoteName' : 'spi:numericdomainid',
               }).
               setQueryBases([
                     {name:'getMS_ARBO016Code', queryString:'\/oslc\/os\/oslcnumericdomain', queryLabel:'' }
               ]).
               setWhereClause('spi%3Adomainid%3D%22MS_ARBO016%22');
            var resourcePromise035 = PersistenceManager.initCollection( resource035 );


            var resource036 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'msprioritylevel',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'msprioritylevel',
                  'additionalData' : true,
                  'id' : 'awff2ef5c5',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:value,spi:description,spi:domainid,spi:numericdomainid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'MS_ARBO017Domain_value_spivalue',
                  'id' : 'awcff7bab5',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'MS_ARBO017Domain_description_spidescription',
                  'maxSize' : 117,
                  'id' : 'awec6a010e',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'MS_ARBO017Domain_domainid_spidomainid',
                  'maxSize' : 18,
                  'id' : 'awf1ad1b24',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'MS_ARBO017Domain_numericdomainid_spinumericdomainid',
                  'id' : 'aw1628a53a',
                  'local' : false,
                  'remoteName' : 'spi:numericdomainid',
               }).
               setQueryBases([
                     {name:'getMS_ARBO017Code', queryString:'\/oslc\/os\/oslcnumericdomain', queryLabel:'' }
               ]).
               setWhereClause('spi%3Adomainid%3D%22MS_ARBO017%22');
            var resourcePromise036 = PersistenceManager.initCollection( resource036 );


            var resource037 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'msuncup',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'msuncup',
                  'additionalData' : true,
                  'id' : 'aw58aceb4d',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:value,spi:description,spi:domainid,spi:numericdomainid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'MS_ARBO015Domain_value_spivalue',
                  'id' : 'awe1a77335',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'MS_ARBO015Domain_description_spidescription',
                  'maxSize' : 117,
                  'id' : 'awa56ea362',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'MS_ARBO015Domain_domainid_spidomainid',
                  'maxSize' : 18,
                  'id' : 'awf2c6e11e',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'MS_ARBO015Domain_numericdomainid_spinumericdomainid',
                  'id' : 'aw8f2aaaa7',
                  'local' : false,
                  'remoteName' : 'spi:numericdomainid',
               }).
               setQueryBases([
                     {name:'getMS_ARBO015Code', queryString:'\/oslc\/os\/oslcnumericdomain', queryLabel:'' }
               ]).
               setWhereClause('spi%3Adomainid%3D%22MS_ARBO015%22');
            var resourcePromise037 = PersistenceManager.initCollection( resource037 );


            var resource038 = new ResourceMetadata({
                  'pageSize' : 500,
                  'resourceName' : 'msarbospec',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'msarbospec',
                  'additionalData' : true,
                  'id' : 'awd61fff6e',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:ms_family,spi:ms_popular,spi:ms_scientific,spi:numericdomain{spi:description,spi:value,spi:numericdomainid,spi:siteid}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_family',
                  'index' : false,
                  'artifactId' : 'msarbospec_ms_family',
                  'id' : 'awe3671e5',
                  'local' : false,
                  'remoteName' : 'spi:ms_family',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_popular',
                  'index' : false,
                  'artifactId' : 'msarbospec_ms_popularname',
                  'id' : 'aw7611e1dd',
                  'local' : false,
                  'remoteName' : 'spi:ms_popular',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_scientific',
                  'index' : false,
                  'artifactId' : 'msarbospec_ms_scientific',
                  'id' : 'aw88415c0a',
                  'local' : false,
                  'remoteName' : 'spi:ms_scientific',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:description',
                  'dataType' : 'inline',
                  'referenceResource' : 'msarbospec',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'msarbospec_desc',
                  'maxSize' : 117,
                  'id' : 'aw6e8f9546',
                  'local' : false,
                  'remoteName' : 'spi:numericdomain',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:value',
                  'dataType' : 'inline',
                  'referenceResource' : 'msarbospec',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'msarbospec_value',
                  'id' : 'aweeab1345',
                  'local' : false,
                  'remoteName' : 'spi:numericdomain',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:siteid',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'msarbospec',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'msarbospec_siteid',
                  'maxSize' : 8,
                  'id' : 'awdb061dbe',
                  'local' : false,
                  'remoteName' : 'spi:numericdomain',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:numericdomainid',
                  'dataType' : 'inline',
                  'usage' : 'bigint',
                  'referenceResource' : 'msarbospec',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'msarbospec_identifier',
                  'id' : 'aw448beb03',
                  'local' : false,
                  'remoteName' : 'spi:numericdomain',
               }).
               setQueryBases([
                     {name:'getarbospec', queryString:'\/oslc\/os\/msoslcsarbopec', queryLabel:'' }
               ]);
            var resourcePromise038 = PersistenceManager.initCollection( resource038 );


            var resource039 = new ResourceMetadata({
                  'pageSize' : 500,
                  'resourceName' : 'msarbospeccient',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'msarbospeccient',
                  'additionalData' : true,
                  'id' : 'aw848bf1c7',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:ms_family,spi:ms_popular,spi:ms_scientific,spi:ms_genre,spi:ms_species,spi:numericdomain{spi:description,spi:value,spi:numericdomainid,spi:siteid}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_family',
                  'index' : false,
                  'artifactId' : 'msarbospeccient_ms_family',
                  'id' : 'aw8c39c9f9',
                  'local' : false,
                  'remoteName' : 'spi:ms_family',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_popular',
                  'index' : false,
                  'artifactId' : 'msarbospeccient_ms_popularname',
                  'id' : 'aw92e40df',
                  'local' : false,
                  'remoteName' : 'spi:ms_popular',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_scientific',
                  'index' : false,
                  'artifactId' : 'msarbospeccient_ms_scientific',
                  'id' : 'awddede546',
                  'local' : false,
                  'remoteName' : 'spi:ms_scientific',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_genre',
                  'index' : false,
                  'artifactId' : 'msarbospeccient_ms_genre',
                  'id' : 'aw85710981',
                  'local' : false,
                  'remoteName' : 'spi:ms_genre',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'ms_species',
                  'index' : false,
                  'artifactId' : 'msarbospeccient_ms_species',
                  'id' : 'aw9dfeea3e',
                  'local' : false,
                  'remoteName' : 'spi:ms_species',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:description',
                  'dataType' : 'inline',
                  'referenceResource' : 'msarbospeccient',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'msarbospeccient_desc',
                  'maxSize' : 117,
                  'id' : 'aw81f03068',
                  'local' : false,
                  'remoteName' : 'spi:numericdomain',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:value',
                  'dataType' : 'inline',
                  'referenceResource' : 'msarbospeccient',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'msarbospeccient_value',
                  'id' : 'aw3292612f',
                  'local' : false,
                  'remoteName' : 'spi:numericdomain',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:siteid',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'msarbospeccient',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'msarbospeccient_siteid',
                  'maxSize' : 8,
                  'id' : 'aw76bdac8a',
                  'local' : false,
                  'remoteName' : 'spi:numericdomain',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:numericdomainid',
                  'dataType' : 'inline',
                  'usage' : 'bigint',
                  'referenceResource' : 'msarbospeccient',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'msarbospeccient_identifier',
                  'id' : 'aw5008b8f4',
                  'local' : false,
                  'remoteName' : 'spi:numericdomain',
               }).
               setQueryBases([
                     {name:'getarbospeccient', queryString:'\/oslc\/os\/msoslcsarbocient', queryLabel:'' }
               ]);
            var resourcePromise039 = PersistenceManager.initCollection( resource039 );


            var resource040 = new ResourceMetadata({
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
            var resourcePromise040 = PersistenceManager.initCollection( resource040 );


            var resource041 = new ResourceMetadata({
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
            var resourcePromise041 = PersistenceManager.initCollection( resource041 );


            var resource042 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'anywherePropVal',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
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
            var resourcePromise042 = PersistenceManager.initCollection( resource042 );


            var resource043 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'anywhereResourceSrc',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
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
            var resourcePromise043 = PersistenceManager.initCollection( resource043 );


            var resource044 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'anywhereResVal',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
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
            var resourcePromise044 = PersistenceManager.initCollection( resource044 );


            var resource045 = new ResourceMetadata({
                  'defaultOrderBy' : 'notificationId desc',
                  'pageSize' : 5,
                  'resourceName' : 'osusernotification',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
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
            var resourcePromise045 = PersistenceManager.initCollection( resource045 );


            var resource046 = new ResourceMetadata({
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
            var resourcePromise046 = PersistenceManager.initCollection( resource046 );


            var resource047 = new ResourceMetadata({
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
            var resourcePromise047 = PersistenceManager.initCollection( resource047 );


            var resource048 = new ResourceMetadata({
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
            var resourcePromise048 = PersistenceManager.initCollection( resource048 );


            var resource049 = new ResourceMetadata({
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
            var resourcePromise049 = PersistenceManager.initCollection( resource049 );


            var resource050 = new ResourceMetadata({
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
            var resourcePromise050 = PersistenceManager.initCollection( resource050 );


            var resource051 = new ResourceMetadata({
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
            var resourcePromise051 = PersistenceManager.initCollection( resource051 );


            var resource052 = new ResourceMetadata({
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
            var resourcePromise052 = PersistenceManager.initCollection( resource052 );


            var resource053 = new ResourceMetadata({
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
            var resourcePromise053 = PersistenceManager.initCollection( resource053 );


            var resource054 = new ResourceMetadata({
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
            var resourcePromise054 = PersistenceManager.initCollection( resource054 );


            var resource055 = new ResourceMetadata({
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
            var resourcePromise055 = PersistenceManager.initCollection( resource055 );


            var resource056 = new ResourceMetadata({
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
            var resourcePromise056 = PersistenceManager.initCollection( resource056 );


            var resource057 = new ResourceMetadata({
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
            var resourcePromise057 = PersistenceManager.initCollection( resource057 );


            var resource058 = new ResourceMetadata({
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
            var resourcePromise058 = PersistenceManager.initCollection( resource058 );


            var resource059 = new ResourceMetadata({
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
            var resourcePromise059 = PersistenceManager.initCollection( resource059 );


            var resource060 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'PlatformEsigAttributeResource',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
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
            var resourcePromise060 = PersistenceManager.initCollection( resource060 );


            var resource061 = new ResourceMetadata({
                  'defaultOrderBy' : 'attemptdate desc',
                  'pageSize' : 1000,
                  'resourceName' : 'PlatformLoginTrackingResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
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
            var resourcePromise061 = PersistenceManager.initCollection( resource061 );


            var resource062 = new ResourceMetadata({
                  'pageSize' : 100,
                  'resourceName' : 'attemptResultDomain',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
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
            var resourcePromise062 = PersistenceManager.initCollection( resource062 );


            var resource063 = new ResourceMetadata({
                  'pageSize' : 100,
                  'resourceName' : 'lbslocation',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
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
            var resourcePromise063 = PersistenceManager.initCollection( resource063 );


            var resource064 = new ResourceMetadata({
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
            var resourcePromise064 = PersistenceManager.initCollection( resource064 );


            var resource065 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformMapMarkerInfo',
                  'resourceName' : 'PlatformMapMarkerInfo',
                  'id' : 'aweb22e8c9',
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
                  'name' : 'startAddress',
                  'index' : false,
                  'artifactId' : 'PlatformMapMarkerInfo_startAddress_string',
                  'id' : 'aw5c490ed7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'endAddress',
                  'index' : false,
                  'artifactId' : 'PlatformMapMarkerInfo_endAddress_string',
                  'id' : 'aw6bf681b6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'currentMarker',
                  'index' : false,
                  'artifactId' : 'PlatformMapMarkerInfo_currentMarker_string',
                  'id' : 'aw903318f3',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'startMarker',
                  'index' : false,
                  'artifactId' : 'PlatformMapMarkerInfo_startMarker_string',
                  'id' : 'aw6f93bebe',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'endMarker',
                  'index' : false,
                  'artifactId' : 'PlatformMapMarkerInfo_endMarker_string',
                  'id' : 'aw8272f55',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise065 = PersistenceManager.initCollection( resource065 );


            var resource066 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformDirectionSteps',
                  'resourceName' : 'PlatformDirectionSteps',
                  'id' : 'awe22af0ac',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'step',
                  'index' : false,
                  'artifactId' : 'PlatformDirectionSteps_step_string',
                  'id' : 'aw559d69ac',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise066 = PersistenceManager.initCollection( resource066 );


            var resource067 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'mapmanager',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/35.199.113.215:80\/maximo',
                  'inMemory' : false,
                  'hasManagedQuery' : 'true',
                  'artifactId' : 'mapmanager',
                  'id' : 'aw47931906',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,dcterms:title,spi:active,spi:mapsites,spi:ismobile,spi:mapprovider,spi:bmapslicense,spi:gmapsapikey').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'mapmanager_1_1_1',
                  'maxSize' : 18,
                  'id' : 'aw6be898a4',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'mapmanager_1_1_2',
                  'maxSize' : 50,
                  'id' : 'awf2e1c91e',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'boolean',
                  'name' : 'active',
                  'index' : true,
                  'artifactId' : 'mapmanager_1_1_3',
                  'id' : 'aw85e6f988',
                  'local' : false,
                  'remoteName' : 'spi:active',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'name' : 'mapsiteslist',
                  'index' : true,
                  'artifactId' : 'mapmanager_1_1_4',
                  'id' : 'aw1b826c2b',
                  'local' : false,
                  'remoteName' : 'spi:mapsites',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ismobile',
                  'index' : true,
                  'artifactId' : 'mapmanager_1_1_6',
                  'id' : 'awf58c0d07',
                  'local' : false,
                  'remoteName' : 'spi:ismobile',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'mapprovider',
                  'index' : true,
                  'artifactId' : 'mapmanager_1_1_7',
                  'maxSize' : 25,
                  'id' : 'aw828b3d91',
                  'local' : false,
                  'remoteName' : 'spi:mapprovider',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'bmapslicense',
                  'index' : true,
                  'artifactId' : 'mapmanager_1_1_8',
                  'maxSize' : 1000,
                  'id' : 'aw12342000',
                  'local' : false,
                  'remoteName' : 'spi:bmapslicense',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'gmapsapikey',
                  'index' : true,
                  'artifactId' : 'mapmanager_1_1_9',
                  'maxSize' : 1000,
                  'id' : 'aw65331096',
                  'local' : false,
                  'remoteName' : 'spi:gmapsapikey',
               }).
               setQueryBases([
                     {name:'defaultquery', queryString:'\/oslc\/os\/oslcmapmanager', defaultForSearch: true, queryLabel:'' }
               ]).
               setWhereClause('spi%3Aismobile%3D1');
            var resourcePromise067 = PersistenceManager.initCollection( resource067 );


            all([resourcePromise001, resourcePromise002, resourcePromise003, resourcePromise004, resourcePromise005, resourcePromise006, resourcePromise007, resourcePromise008, resourcePromise009, resourcePromise010, resourcePromise011, resourcePromise012, resourcePromise013, resourcePromise014, resourcePromise015, resourcePromise016, resourcePromise017, resourcePromise018, resourcePromise019, resourcePromise020, resourcePromise021, resourcePromise022, resourcePromise023, resourcePromise024, resourcePromise025, resourcePromise026, resourcePromise027, resourcePromise028, resourcePromise029, resourcePromise030, resourcePromise031, resourcePromise032, resourcePromise033, resourcePromise034, resourcePromise035, resourcePromise036, resourcePromise037, resourcePromise038, resourcePromise039, resourcePromise040, resourcePromise041, resourcePromise042, resourcePromise043, resourcePromise044, resourcePromise045, resourcePromise046, resourcePromise047, resourcePromise048, resourcePromise049, resourcePromise050, resourcePromise051, resourcePromise052, resourcePromise053, resourcePromise054, resourcePromise055, resourcePromise056, resourcePromise057, resourcePromise058, resourcePromise059, resourcePromise060, resourcePromise061, resourcePromise062, resourcePromise063, resourcePromise064, resourcePromise065, resourcePromise066, resourcePromise067]).then(function(results) {
                 promise.resolve();
            }).
            otherwise(function(error) {
                 promise.reject(error);
            });
         }
      });
});
