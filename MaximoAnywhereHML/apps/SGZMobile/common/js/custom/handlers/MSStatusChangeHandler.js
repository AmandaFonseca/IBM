let objetoMethod=[{}];
define("custom/handlers/MSStatusChangeHandler", 
		[ "dojo/_base/declare",
		"platform/handlers/_ApplicationHandlerBase",
		"application/handlers/StatusChangeHandler",
		"application/business/WorkOrderStatusHandler",
	     "platform/exception/PlatformRuntimeException",
	     "platform/warning/PlatformRuntimeWarning",
	     "application/handlers/CommonHandler",
	     "platform/model/ModelService",
		 "platform/logging/Logger",
		 "platform/util/PlatformConstants",
		 "platform/auth/UserManager",
		 "platform/handlers/AttachmentHandler",
         "platform/translation/MessageService",
	     "dojo/Deferred",
		 "platform/geolocation/GeoLocationTrackingService"],

function(declare, ApplicationHandlerBase, StatusChangeHandler,
		WorkOrderStatusHandler,PlatformRuntimeException,PlatformRuntimeWarning,CommonHandler,ModelService,Logger,PlatformConstants,UserManager,AttachmentHandler,MessageService,Deferred, GeoLocationTrackingService) {
			var listSizeArray =  [];
			return declare([ ApplicationHandlerBase, StatusChangeHandler ],
			{

				dummyMethod : function(eventContext) {
				},

				filterWOStatus : function(eventContext) {
					this.inherited(arguments);

					var currWO = eventContext.application.getResource(
							"workOrder").getCurrentRecord();
					var currStatus = currWO.get("status");

					var woStatusDomain = this.application
							.getResource('domainwostatus');
					
					
					/* Remover rotina deixar somente para aprovado.
					if (woStatusDomain.isFiltered() && currStatus != "WAPPR") {
						woStatusDomain.filter("value!=$1", "CONC");
						
					} else if (woStatusDomain.isFiltered()
							&& currStatus != "APPR") {
						woStatusDomain.filter("value!=$1", "APROVADO");
					}
					
					if (woStatusDomain.isFiltered()
							&& currStatus == "APPR") {
						woStatusDomain.filter("value!=$1","APROVADO");
							
					} */if (woStatusDomain.isFiltered()
								&& currStatus == "APROVADO") {
							woStatusDomain.filter("value!=$1", "CONC");
					
						}
					},
					
			/* controlRedirectView: function(eventContext){
				var currSR = eventContext.getResource().getCurrentRecord();
				if(!currSR.get("longdescription").toLowerCase().includes('tapa buraco')){
					eventContext.ui.show("WorkExecution.AttachmentsView");
				}else{
					eventContext.ui.show("WorkExecution.AttachmentsView_categorias");
				}
			},		 */				
			ticketLookup: function(eventContext){
				var currSR = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
				var msitemTK = currSR.get("ms_itemnum");
			
			
				var amtickets = CommonHandler._getAdditionalResource(eventContext,'amtickets');
				CommonHandler._clearFilterForResource(eventContext,amtickets);
				amtickets._lookupFilter = null;
			
				console.log("ITEM: " + msitemTK);
				
				var isValidTK = amtickets.find('itemnumTK == $1', msitemTK);
			
				console.log("isValidTK: " + isValidTK.length);

				if (isValidTK.length > 0){
			
				var filter = [];			
					for(var i = 0 ; i < isValidTK.length ; i++){					
						var itemTK = isValidTK[i].ms_woticketid;
						
						filter.push({'ms_woticketid': itemTK});
						amtickets.lookupFilter = filter;
				    }
			    }else{
			    var filter = [];

			    	filter.push({'ms_woticketid': filter});
					amtickets.lookupFilter = filter;
					return;
			    }
			},
		
    
                                          
                          
                                   
                 

                                                                                               
                                                                                              
                                                     
  

                                                 
                                    
                                              
                                                  
                                                                 
                                    
   
     

                                                    
                                    
                                              
                                                  
                                                                 
                                    
   
       
       


                                          
                         
		
					
				
				
				
				
				
				//INICIO DAS FUN��ES DO TIME SHEET
				
				hide_WODetailsView : function(eventContext) {
					//Logger.error("IN�CIO DO M�TODO hide_WODetailsView");
					var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
					var currWO = workOrderSet.getCurrentRecord();
					var myUser = null
					var myUser = UserManager.getCurrentUser();
					currWO.setDateValue("ms_tsworkdate", this.application.getCurrentDateTime());
					currWO.set("ms_tslaborcode", myUser);
					//curWO.set("pd_editmed", false);
					//currWO.setDateValue("ms_tsworkdate",this.application.getCurrentDateTime());
					//Logger.error("WORKTYPE: " + currWO.get("worktype"));
					if(currWO.get("worktype") == "TS" || currWO.get("status") == "CONC") {
						//Logger.error("ESCONDENDO CAMPOS DA WORKODER");
						
						eventContext.setDisplay(false);
						eventContext.setVisibility(false);
						
						//eventContext.ui.show("WorkExecution.TimeSheetMainView");
						//eventContext.application.hideBusy();

					}
					//Logger.error("FIM DO M�TODO hide_WODetailsView");


				},

				hide_WODetailsView02 : function(eventContext) {
					Logger.error("###### inicio ValidateDateSpec");
					var currentWorkOrder = eventContext.application.getResource("workOrder").getCurrentRecord();
					var Spec = eventContext.application.getResource("workOrder.workOrderSpec");
					var currentWorkOrderCount;
					var concordanciaAsfaltica = 0;
					var validate = 1;
					let emergency;
					let self = eventContext;
					listSizeArray = [];
					let cont= 0;
					for (var prop in Spec.data) {
					  // ctrl+shift+k (para abrir o console no mozilla firefox)
					  let a = {'alnvalue': Spec.data[prop].get('alnvalue'),'ms_qty': Spec.data[prop].get('ms_qty')};	
					  listSizeArray.push(a);
					 //console.log("obj." + prop + " = " + Spec.data[prop].get('alnvalue'));
					  
					}
					var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
					var currWO = workOrderSet.getCurrentRecord();
					var Spec = eventContext.application.getResource("workOrder.workOrderSpec");
					let classification = Spec.data[0].get('classstructureid');
					if (classification =='1292') {
						let ul =  document.querySelector('.listTextFull');
						let li = ul.querySelectorAll('li');
						li.forEach(element => {
							let childs = element.childNodes;
							let label = childs[1].textContent;
							let elemento02 = childs[2];
							let resp = elemento02.querySelector('input').value;
							if(resp == "Sim"){
								const div = document.createElement("div");
								div.setAttribute('class', 'mblListItemLabel');
								div.setAttribute('style', 'display: inline;');

								const div01 = document.createElement("div");
								const input = document.createElement("input");
								
								div01.setAttribute('class', 'dijitContentPane WL_ leafControl');
								div01.setAttribute('id', `awdaa91392_List_${label}_tbcontrol_Text`);
								div01.setAttribute('widgetid', `awdaa91392_List_${label}_tbcontrol_Text`);
								input.setAttribute('type', 'number');
								input.setAttribute('name', `awdaa91392_List_${label}tbcontrol_Text`);
								input.setAttribute('class', 'mblTextBox WL_ editableText editableTextNoButton');
								input.setAttribute('tabindex', cont);
								input.setAttribute('placeholder', 'Dê um toque para inserir');
								input.setAttribute('aria-label', 'Dê um toque para inserir');
								input.setAttribute('autocapitalize', 'off');
								input.setAttribute('value', Spec.data[cont].ms_qty); 
								input.setAttribute('style', 'display: inline; padding: 2px 10px !important;'); 
								input.innerHTML = Spec.data[cont].ms_qty; 

								const span = document.createElement("span");
								span.setAttribute('class','WL_ listText specLayoutRight editableLabel');
								span.setAttribute('style','float:left;padding-top:5px;');
								span.innerHTML = 'Quant. de Hidrantes ('+Spec.data[cont].description+')';

								div01.appendChild(span);
								div01.appendChild(input);
								element.appendChild(div);
								element.appendChild(div01);
								
							}
							cont ++;
							console.log(label);
							console.log(resp);
						});
					}
				},

				ReadOnlyWODetailsView : function(eventContext) {
							//Logger.error("IN�CIO DO M�TODO hide_WODetailsView");
							var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
							var currWO = workOrderSet.getCurrentRecord();
							var myUser = null
							var myUser = UserManager.getCurrentUser();
							/* currWO.setDateValue("ms_tsworkdate", this.application.getCurrentDateTime()); */
							/* currWO.set("ms_tslaborcode", myUser); */
							if(currWO.get("status") != "CONC") {
								eventContext.setDisplay(false);
								eventContext.setVisibility(false);
							}
						},
						
				hide_timesheetFields : function(eventContext) {
							//Logger.error("IN�CIO DO M�TODO HIDE_TIMESHEETFIELDS");
							var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
							var currWO = workOrderSet.getCurrentRecord();
							//currWO.setDateValue("ms_tsenterdate", this.application.getCurrentDateTime());
							//Logger.error("WORKTYPE: " + currWO.get("worktype"));
							if(currWO.get("worktype") != "TS" || (currWO.get("worktype") == null) || currWO.get("status") == "CONC") {
								eventContext.setDisplay(false);
								eventContext.setVisibility(false);}
							//Logger.error("FIM DO M�TODO HIDE_TIMESHEETFIELDS");
						},
						
				escondeCampoInic : function(eventContext) {
							//Logger.error("IN�CIO DO M�TODO HIDE_TIMESHEETFIELDS");
							
							var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
							var currWO = workOrderSet.getCurrentRecord();
							
							var ticket = currWO.get('ms_amticketid');
							var dataInic = currWO.get('ms_startdate');
							console.log("TICKET INICIO" + ticket);
							
							if(ticket == null){
								eventContext.setDisplay(false);
								eventContext.setDisplay(false);
							}else if(dataInic != null){
								eventContext.setDisplay(false);
								eventContext.setDisplay(false);
								//console.log('setando' + objetoMethod);
							    this.escondeCampoFim(objetoMethod[0]);
							}else {
								eventContext.setDisplay(true);
								eventContext.setDisplay(true);
							}
										

				},
				
				escondeCampoFim : function(eventContext) {
							//Logger.error("IN�CIO DO M�TODO HIDE_TIMESHEETFIELDS");
							var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
							var currWO = workOrderSet.getCurrentRecord();
							let obj = eventContext
                            objetoMethod[0] = obj;
							
							var ticket = currWO.get('ms_amticketid');
							var dataInic = currWO.get('ms_startdate');
							var dataFim = currWO.get('ms_finishdate');
							console.log("TICKET INICIO 2 " + ticket);
							console.log("DATA INICIO 2 " + dataInic);
							console.log("DATA FIM " + dataFim);
							
							if(dataInic == null){
								eventContext.setDisplay(false);
								eventContext.setDisplay(false);
							}else if(dataInic != null && dataFim != null){
								eventContext.setDisplay(false);
								eventContext.setDisplay(false);
							}else {
								eventContext.setDisplay(true);
								eventContext.setDisplay(true);
							}
							
															

				},
				
			
				
					handleBackButtonClick: function(eventContext){
						var actualAsset=eventContext.getCurrentRecord();
							//Logger.error("IN�CIO DO M�TODO handleBackButtonClick");
							var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
							var currWO = workOrderSet.getCurrentRecord();
							if(currWO.get("worktype") != "TS" || (currWO.get("worktype") == null)) {
								//Logger.error("SEM A��O | OS N�O � DE TIMESHEET");
							}
							else{
								if(!actualAsset.get("dontDiscard")){
									actualAsset.deleteLocal();
									this._saveTransaction;
								}
							}
					},
					
					InicJornada: function(eventContext){
						this.AttachmentHandler.launchCameraForPhoto();
					},
					
					cancel: function(eventContext){
						//Logger.error("IN�CIO DO M�TODO cancel");
						this.ui.hideCurrentView(PlatformConstants.CLEANUP);
					},
					
					save_ini: function (eventContext){
						//Logger.error("IN�CIO DO M�TODO SAVE");
						//Logger.error("INICIANDO VARI�VEIS");
						var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
						var CurWo = workOrderSet.getCurrentRecord();
						var myUser = null
						var myUser = UserManager.getCurrentUser();
						CurWo.set("ms_tslaborcode", myUser);
						//Logger.error("User:" + myUser);
						var dataInic = CurWo.get("ms_tsstartdate");
						//Logger.error("Dt ini:" + dataInic);
						var horaInic = CurWo.get("ms_tsstarttime");
						Logger.error("Hr ini:" + horaInic);
						//var dataFim = CurWo.get("ms_tsfinishdate");
						//Logger.error("Hr fim:" + dataFim);
						var horaFim = CurWo.get("ms_tsfinishtime");
						//Logger.error("Hr fim:" + horaFim);
						var dataInsert = CurWo.get("ms_tsenterdate");
						//Logger.error("dataInsert:" + dataInsert);
						var attachments = CommonHandler._getAdditionalResource(this,"attachments");
						var anexos = attachments.count();
						//Logger.error("Qtd anexos:" + anexos);
						var ms_tsworkdate = CurWo.get("ms_tsworkdate");
						CurWo.setDateValue("ms_tsworkdate", this.application.getCurrentDateTime());
						//Logger.error ("Workdate: " + ms_tsworkdate);
						var pd_editmed = CurWo.get("pd_editmed");
						//Logger.error ("pd_editmed: " + pd_editmed);
						
						
						if (dataInsert == null){
							if(dataInic == null){
								//Logger.error("A data inicial n�o foi preenchida");
								throw new PlatformRuntimeException("ms_dt_ini_TS");
							}
							else if (horaInic == null){
								//Logger.error("A hora inicial n�o foi preenchida");
								throw new PlatformRuntimeException("ms_hr_ini_TS");
							}
							else if(dataInic != null && horaInic != null && anexos == 0){
								//Logger.error("Insira um anexo para salvar a data inicial");
								throw new PlatformRuntimeException("ms_ini_att_TS");
							}
							else{
								//Logger.error("Salvando registro");
								CurWo.setDateValue("ms_tsenterdate", this.application.getCurrentDateTime());
								CurWo.setDateValue("ms_tsworkdate", this.application.getCurrentDateTime());
								CurWo.set("pd_editmed", true);
								this._saveTransaction();
								//this.ui.hideCurrentView();
							}
						}
						
						if (dataInsert != null){
							if(horaFim == null){
								//Logger.error("A data inicial n�o foi preenchida");
								throw new PlatformRuntimeException("ms_dt_ini_TS");
							}
							else if (horaFim == null){
								//Logger.error("A hora inicial n�o foi preenchida");
								throw new PlatformRuntimeException("ms_hr_ini_TS");
							}
							else if(horaFim != null && horaFim != null && anexos == 0){
								//Logger.error("Insira um anexo para salvar a data inicial");
								throw new PlatformRuntimeException("ms_ini_att_TS");
							}
							else{
								//Logger.error("Salvando registro FIM");
								CurWo.setDateValue("ms_tsenterdate", this.application.getCurrentDateTime());
								CurWo.setDateValue("ms_tsworkdate", this.application.getCurrentDateTime());
								CurWo.set("pd_editmed", true);
								this._saveTransaction();
								//this.ui.hideCurrentView();
							}
						}
						this.inherited(arguments);
					},		
					
					save_fim: function (eventContext){
						//Logger.error("IN�CIO DO M�TODO SAVE FIM");
						//Logger.error("INICIANDO VARI�VEIS");
						var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
						var CurWo = workOrderSet.getCurrentRecord();
						var myUser = null
						var myUser = UserManager.getCurrentUser();
						CurWo.set("ms_tslaborcode",myUser);
						//Logger.error("User:" + myUser);
						CurWo.setDateValue("ms_tsworkdate", this.application.getCurrentDateTime());
						//var dataFim = CurWo.get("ms_tsfinishdate");
						//Logger.error("Hr fim:" + dataFim);
						var horaFim = CurWo.get("ms_tsfinishtime");
						//Logger.error("Hr fim:" + horaFim);
						var attachments = eventContext.application.getResource("attachments");
						var anexos = attachments.count();
						//Logger.error("Qtd anexos:" + anexos);
						var dataInsert = CurWo.get("ms_tsenterdate");
						
						
						if (dataInsert != null){
							//Logger.error("A data final n�o foi preencida");
							throw new PlatformRuntimeException("ms_dt_fim_TS");
						}
						else if (horaFim == null){
							//Logger.error("A hora final n�o foi preenchida");
							throw new PlatformRuntimeException("ms_hr_fim_TS");
						}
						else if(horaFim != null && anexos <= 2){
							//Logger.error("Insira um anexo para salvar a data final");
							throw new PlatformRuntimeException("ms_fim_att_TS");
						}
						else{
							//Logger.error("Salvando registro FINAL");
							//Logger.error("Define StatusDate");
							//CurWo.set("status", "MS_TS_FINALIZADO");
							
							
							//Logger.error("Data de insert " + CurWo.get("ms_tsenterdate"));
							this.inherited(arguments);
							ModelService.save(workOrderSet);
							this.ui.hideCurrentView();
							//this._saveTransaction();
							//Logger.error("Salvei inicial");
						}
					},
					
					ctrl_datafinal: function(eventContext){
						//Logger.error("ESCONDENDO CAMPOS DA DATA FINAL");
						
						var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
						var CurWo = workOrderSet.getCurrentRecord();
						var dataInic = CurWo.get("ms_tsstartdate");
						//Logger.error("Dt ini:" + dataInic);
						var horaInic = CurWo.get("ms_tsstarttime");
						//Logger.error("Hr ini:" + horaInic);
						var horaFim = CurWo.get("ms_tsfinishtime");
						var attachments = eventContext.application.getResource("attachments");
						var anexos = attachments.count();
						//Logger.error("Qtd anexos:" + anexos);
						var dataInsert = CurWo.get("ms_tsenterdate");
						//var curstatus = CurWo.get("status");
						//Logger.error("ms_tsenterdate: " + dataInsert);
						if (dataInsert == null  || horaFim != null){
							//Logger.error("status = " + curstatus);
							eventContext.setDisplay(false);
							eventContext.setDisplay(false);	
						}
						//Logger.error("FIM ESCONDENDO CAMPOS DA DATA FINAL");
					},
				
					ctrl_inicial: function(eventContext){
						Logger.error("IN�CIO DO M�TODO ctrl_inicial");
						var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
						var CurWo = workOrderSet.getCurrentRecord();
						//var dataFim = CurWo.get("ms_tsfinishdate");
						//Logger.error("Hr fim:" + dataFim);
						var horaFim = CurWo.get("ms_tsfinishtime");
						Logger.error("Hr fim:" + horaFim);
						var dataInic = CurWo.get("ms_tsstartdate");
						Logger.error("Dt ini:" + dataInic);
						var horaInic = CurWo.get("ms_tsstarttime");
						Logger.error("Hr ini:" + horaInic);
						var dataInsert = CurWo.get("ms_tsenterdate");
						//Logger.error("Dt ms_tsenterdate:" + dataInsert);
						//CurWo.setDateValue("ms_tsenterdate",this.application.getCurrentDateTime());
						var attachments = eventContext.application.getResource("attachments");
						var anexos = attachments.count();
						//Logger.error("Qtd anexos:" + anexos);
						//var curstatus = CurWo.get("status");
						//Logger.error("status = " + curstatus);
						Logger.error("dataInsert M�TODO ESCONDER DATA INICIAL = " + dataInsert);
						if (dataInsert != null  || horaInic != null){
							eventContext.setDisplay(false);
							eventContext.setDisplay(false);
							
						}
					},
					
					ticket_inicial: function(eventContext){
						let self = eventContext;
						console.log("IN�CIO DO M�TODO ticket_inicial");
						var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
						var curWo = workOrderSet.getCurrentRecord();
						var wonum =  curWo.get('wonum');
						var siteid =  curWo.get('siteid');
						var ticket = curWo.get('ms_amticketid');
						
						if(ticket != null || ticket != "" ){
				 				
							var dataInic = this.application.getCurrentDateTime();
							
												
							curWo.setDateValue("ms_startdate", dataInic);
							curWo.set("ms_changeby", UserManager.getCurrentUser());
							curWo.setDateValue("ms_changedate", this.application.getCurrentDateTime()); 
							curWo.set("ms_wonum", wonum);
							curWo.set("ms_wositeid", siteid);
							console.log("Dt ini:" + dataInic);
							//eventContext.refresh();
							this.escondeCampoInic(self);
						 
						} 
						
							//this.inherited(arguments);
							//ModelService.save(workOrderSet);
							//this.ui.hideCurrentView();
							
							//eventContext.refresh();
					
					},
					
					ticket_Final: function(eventContext){
						console.log("IN�CIO DO M�TODO ticket_FINAL");
						var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
						var curWo = workOrderSet.getCurrentRecord();
						var ticket = curWo.get('ms_amticketid');
						var dataInic = curWo.get("ms_finishdate");
						
							if((ticket != null || ticket != "") && (dataInic != null || dataInic != "")){
								
												
								var dataFim = this.application.getCurrentDateTime();
													
								curWo.setDateValue('ms_finishdate', dataFim);
								curWo.set('ms_changeby', UserManager.getCurrentUser());
								curWo.setDateValue('ms_changedate', this.application.getCurrentDateTime()); 
					
							}
							//this.inherited(arguments);
							//ModelService.save(workOrderSet);
							this.ui.hideCurrentView();	
							
					},
					
					resolveStatusDate : function(statusdate) {
						var userLocale = this.application.getUserLocale();
						return [ FormatterService.toDisplayableValue(statusdate, "datetime", userLocale) ];
					},
			
						
					_saveTransaction: function(){
						try{
							var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
							var workOrder = workOrderSet.getCurrentRecord();
							//workOrder.setDateValue("ms_tsenterdate", this.application.getCurrentDateTime());
							if (!workOrder.isNew()) {
								ModelService.save(workOrderSet);
							}			
							this.ui.hideCurrentView();
							}catch(e){
						throw e;
							}
					},

				
				//FIM DAS FUN��ES DO TIME SHEET
				setChangeStatusDate : function(eventContext){
					var statusChange = eventContext.getResource().getCurrentRecord();
					statusChange.setDateValue("changestatusdate",
							this.application.getCurrentDateTime());
				},

				validateAttachments: function(eventContext){
                            var AttachmentSet = CommonHandler._getAdditionalResource(eventContext,"workOrder.attachments");
                            CommonHandler._clearFilterForResource(eventContext,AttachmentSet);
                            var sections = CommonHandler._getAdditionalResource(eventContext,"photosessionlineResource");
                            CommonHandler._clearFilterForResource(eventContext,sections);
                            var msDoclinksSet = CommonHandler._getAdditionalResource(eventContext,"msDoclinksResource");
                            CommonHandler._clearFilterForResource(eventContext,msDoclinksSet);
                            
                            var reqSections = sections.find('ms_required == 1');
                            for(var i = 0 ; i < reqSections.count(); i++){
                                var photosessionid = curReqSections[i].ms_photosessionid;
                                var ms_minqty = curReqSections[i].ms_minqty;
                                var SectionDoclinks = msDoclinksSet.find('ms_photosessionid == $1', photosessionid);
                                var SectionDoclinksCount = SectionDoclinks.count();
                                
                                if (SectionDoclinksCount < ms_minqty){
                                    var sectionDesc = curReqSections[i].ms_description;
                                    var strMsg = "A seção de fotos "+ sectionDesc + "precisa de ao menos " + ms_minqty + "fotos para alterar o status da OS.";
                                    var msg = MessageService.createStaticMessage(strMsg).getMessage()
                                   eventContext.ui.showMessage(msg); 
                                }
                            }
                        },
                        
				commitWOStatusChange : function(eventContext,
						skipDynamicCheck) {
					var statusChange = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();
					var currentWorkOrder = eventContext.application.getResource("workOrder").getCurrentRecord();
                    var psconfigid = currentWorkOrder.get("ms_psconfigid");
     
					//Validate if status date change is lesser than last WO status change date
						if(currentWorkOrder.getAsDateOrNull('changestatusdate') > statusChange.getAsDateOrNull('changedate')){
								throw new PlatformRuntimeException('statusDateinFuture',[this.resolveStatusDate(currentWorkOrder.getAsDateOrNull('changestatusdate'))]);								
                   
						}																						

                        if(statusChange.get("status") && statusChange.get("status") == "CONC"){
                            if (psconfigid == null || psconfigid == "" || typeof psconfigid === undefined){
                                var j = 0;
                                var i = 0;
                                var wodcsSet = eventContext.application.getResource("attachments");
                                while(j < wodcsSet.count()){
                                    
                                    var wodcs = wodcsSet.getRecordAt(j);
                                    
                                    if(wodcs.docType == "Attachments"){

                                        i++;
                                    }
                                    j++;
                                }
                                
                                if(i < 3){
                                        throw new PlatformRuntimeException("ms_invalidstatusattachmentqtd");
                                }
                            }
                            else{
                                var AttachmentSet = CommonHandler._getAdditionalResource(eventContext,"workOrder.attachments");
                                    CommonHandler._clearFilterForResource(eventContext,AttachmentSet);
                                    var sections = CommonHandler._getAdditionalResource(eventContext,"photosessionlineResource");
                                    CommonHandler._clearFilterForResource(eventContext,sections);
                                    var msDoclinksSet = CommonHandler._getAdditionalResource(eventContext,"msDoclinksResource");
                                    CommonHandler._clearFilterForResource(eventContext,msDoclinksSet);
                                    
                                    var reqSections = sections.find('ms_required == 1');
                                    for(var i = 0 ; i < reqSections.length; i++){
                                        var photosessionid = reqSections[i].ms_photosessionid;
                                        var minqty = reqSections[i].ms_minqty;
                                        var sectionDesc = reqSections[i].ms_description;
                                        var SectionDoclinks = msDoclinksSet.find('ms_photosessionid == $1', photosessionid);
                                        var SectionDoclinksCount = SectionDoclinks.length;
                                        
                                        if (SectionDoclinksCount < minqty){
                                            throw new PlatformRuntimeException("ms_invalidstatusattachmentqtdcat", [sectionDesc,minqty]);
                                        }
                                    }
                            }
                        }
                    
                    					
                if (currentWorkOrder != null && currentWorkOrder.workOrderSpec != null && statusChange.get("status") == "CONC"){
                    Logger.error("DENTRO DO IF MEDI��O" + statusChange.get("status"));
                        var countNum = 0;
                        var countAln = 0;
						var concasf = 0;
                        var nowDate = new Date();
                        var spec = CommonHandler._getAdditionalResource(eventContext,"workOrder.workOrderSpec");
                        var count = spec.count();
                        
                        for (var i = 0; i < count; i++) {
                           // var currWorkOrderSpec = currentWorkOrder.workOrderSpec.getRecordAt(i);
						   let currWorkOrderSpec = spec.getRecordAt(i)
                            var numValue = currWorkOrderSpec.get("numvalue");
                            var alnValue = currWorkOrderSpec.get("alnvalue");
                            var specID = currWorkOrderSpec.get('assetattrid');
                            var measureunitid = currWorkOrderSpec.get('measureunitid');
                            
                            var pdSpecReq = currWorkOrderSpec.get("pd_spec_required");
                            if (specID == 'CURA_CONC'){
                                var cura_conc = alnValue;
                            }
                            if (specID == 'NEC_CONC'){
                                //Verifica se é concordancia asfáltica
                                var nec_conc = alnValue;
                            }	
                            if (nec_conc == 'Sim'){
                                if  (cura_conc == null || cura_conc == undefined  || cura_conc == ""){
                                 eventContext.ui.showMessage(MessageService.createStaticMessage("O campo 'Cura de concreto' precisa ser preenchido!").getMessage());
                                }
                                else{
                                    var dateParts = cura_conc.split("/");
                                    var newDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
                                    var newDateFomatada = new Date(cura_conc);
                                    let day = newDate.getMonth()+1;
                                    let month = newDate.getDate();
                                    let year = newDate.getFullYear();
                                    //var isBoolean = (newDateFomatada instanceof Date) && !isNaN(newDateFomatada);
                                    var isBoolean;
                                    try {
                                        isBoolean = (newDateFomatada instanceof Date) && !isNaN(newDateFomatada);
                                        if (isBoolean == undefined || isBoolean == null || isBoolean == false) {
                                            isBoolean = (newDateFomatada instanceof Date) && newDateFomatada !=null;
                                        }
                                    } catch (error) {
                                        console.log(error);
                                    }                                                    
                                    
                                    newDateFomatada = new Date('""'+day+"/"+month+"/"+year);
                                    if (isBoolean) {
                                        if(newDateFomatada < nowDate){
                                            throw new PlatformRuntimeWarning("O campo 'Cura de concreto' precisa ser maior que a data atual!");
                                            //eventContext.ui.showMessage(MessageService.createStaticMessage().getMessage());
                                           
                                        }
                                    }
                                    else{
                                        throw new PlatformRuntimeWarning("Por favor, insira uma data valida!");
                                        //eventContext.ui.showMessage(MessageService.createStaticMessage("Por favor, insira uma data valida!").getMessage());
                                    }	
                                }
                            }
                               
                                if (alnValue == null || alnValue == "" || typeof alnValue === undefined){                            
                                    if(pdSpecReq == true) {
                                        if (numValue == null || numValue == "" || typeof numValue === undefined 
                                        || numValue == 0){
                                            console.log("ms_semmedicao" + numValue);
                                            throw new PlatformRuntimeException("ms_semmedicao");
                                            return ;
                                        }
                                    }        
                                    if(numValue == null || numValue == "" || typeof numValue === undefined) {
                                    }else {
                                        countNum++;
                                    }
                                }
                                if (numValue == null || numValue == "" || typeof numValue === undefined){                            
                                    if(pdSpecReq == true) {
                                        if (alnValue == null || alnValue == "" || typeof alnValue === undefined){
                                            throw new PlatformRuntimeException("ms_semmedicao");
                                            return ;
                                        }
                                    }        
                                    if(alnValue == null || alnValue == "" || typeof alnValue === undefined) {
                                    }else {
                                        countAln++;
                                    }
                                }
                        }
                        if ((countNum == 0 || numValue == 0) && countAln == 0) {
                            throw new PlatformRuntimeException("ms_semmedicao");
                            return ;
                        }
                }
		
					
					 var statusChange = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();
					 var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
					 var workOrder = workOrderSet.getCurrentRecord();
					 var newStatus=statusChange.get("status");
					 var emergency = workOrder.get("ms_emergency");

						if (newStatus == "EMAND"){
							 var fieldMetadataPlate= workOrder.getRuntimeFieldMetadata("ms_woplate");
	                             fieldMetadataPlate.set('required', true);
						}else if (newStatus != "EMAND"){
							 var fieldMetadataPlate= workOrder.getRuntimeFieldMetadata("ms_woplate");
	                             fieldMetadataPlate.set('required', false);
						}



						  
	                    //var newStatus=statusChange.get("status");
	                    /* var currMemo = statusChange.get("memo");                                         
	                    		if (newStatus == "NAOREALIZADA" && currMemo == null){
	                             var fieldMetadata = statusChange.getRuntimeFieldMetadata("memo");
	                             fieldMetadata.set('required', true);                                                        
	                        }else if(newStatus !== "NAOREALIZADA"){
	                             var fieldMetadata = statusChange.getRuntimeFieldMetadata("memo");
	                             fieldMetadata.set('required', false);
	                        }
	                    		var currMemo = statusChange.get("memo");                                            
								if (newStatus == "NAOREALIZADA" && currMemo == null){
								throw new PlatformRuntimeException("ms_invalidmsgnaorealizada");                    
								
								
								}  */
								
						
						
						var currMotivo = workOrder.get("motivo");                                         
						if (newStatus == "NAOREALIZADA" && currMotivo == null && !emergency){
							var fieldMetadata = workOrder.getRuntimeFieldMetadata("motivo");
							fieldMetadata.set('required', true);                                                        
						}else if(newStatus !== "NAOREALIZADA"){
								var fieldMetadata = workOrder.getRuntimeFieldMetadata("motivo");
								fieldMetadata.set('required', false);
						}
						if (newStatus == "NAOREALIZADA" && currMotivo == null && !emergency){
						   throw new PlatformRuntimeException("ms_invalidmsgnaorealizada");                    
						} 
					
					
					this.inherited(arguments);	
				},
						
				blockFields : function(eventContext) {
					
					var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
					var workOrder = workOrderSet.getCurrentRecord();
					var woStatus = workOrder.get("STATUS");
					
	             	if (woStatus == "CONC"){
						var pdobsMetadata = statusChange.getRuntimeFieldMetadata("pd_obs");
						var starttimeMetadata = statusChange.getRuntimeFieldMetadata("starttime");
						var finishtimeMetadata = statusChange.getRuntimeFieldMetadata("finishtime");
						pdobsMetadata.set('editable', false);
					}
				},
				
				/* limitCharacters : function(eventContext) {
                let campo = eventContext;
                let elementoId = campo.artifactId;
                let limite = 49;

                if(elementoId == "WorkExecution.EditStatusView_statusChangeResource_groupitem_3_memo_Memo" || 
                    elementoId =="WorkExecution.EditTaskStatusView_statusChangeResource_groupitem_2_memo_Memo"){
                    campo = document.querySelector('#'+campo.labelFor);
                }
 
					campo.addEventListener('blur', function(event) {
						if (campo.value.length > limite) {
							let restante = limite - campo.value.length;
							campo.value = campo.value.substring(0, limite);
							var msg = "O limite de "+ limite+" caracteres foi alcançado";
							eventContext.ui.showMessage(msg);
						}
					}); 
			
					campo.addEventListener('keydown', function(event) {
						if (campo.value.length > limite) {
							let restante = limite - campo.value.length;
							campo.value = campo.value.substring(0, limite);
							var msg = "O limite de "+ limite+" caracteres foi alcançado";
							eventContext.ui.showMessage(msg);
							}
						});         
				},
			 */
			hideFooterLookup: function(eventContext){
				//document.getElementById("sgzMobile.amcrewLookup_footer").innerHTML = '';
				document.getElementById("sgzMobile.amcrewLookup_footer").setAttribute("style", "display:none")
			},
			hideReason: function(eventContext){
				console.log(eventContext);
				var statusChange = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();
				let status = statusChange.get("status");
				if (status) {
					status = status.toLocaleUpperCase();
				}
				let workOrder = CommonHandler._getAdditionalResource(eventContext,"workOrder");
				let wo = workOrder.getCurrentRecord();
				let amcrew = wo.get("ms_emergency");
				if (amcrew && status == 'NAOREALIZADA') {
					eventContext.setDisplay(false);
					eventContext.setVisibility(false);	
				}else{
					eventContext.setDisplay(true);
					eventContext.setVisibility(true);
				}
			},

			setLocaleCrew: function(eventContext){
				var workOrder = eventContext.application.getResource('workOrder');
				var deferred = new Deferred();
				ModelService.save(workOrder).then(function(result){
					deferred.resolve();
					eventContext.ui.show("WorkExecution.WorkItemsView");
				}).otherwise(function(error){
					deferred.reject(error);
				});
				
			},
			saveWOShowView : function(eventContext) {
					var workOrder = eventContext.application.getResource('workOrder');
					var deferred = new Deferred();
					ModelService.save(workOrder).then(function(result){
							deferred.resolve();
					}).otherwise(function(error){
							deferred.reject(error);
					});
				}

			});
});
