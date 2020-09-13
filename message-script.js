///////////////////////////////////////////////////////////////////////////////

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    
let specificLocation="Bole Int Airport";
let barCode="";
let sampleCollectedBy="KALEAB";
let formCompletedBy="MARAME";

let timing_val=120; 

setTimeout(occupation_Element_DropDown,timing_val);
setTimeout(other_Element_Select,timing_val*2);

setTimeout(locationSC_Element_Dropdown,timing_val*3);
setTimeout(scrollDown,timing_val*4);
//setTimeout(health_Facility_Element_Select,timing_val*5);
setTimeout(portOfEntry_Element_Select,timing_val*5);

setTimeout(radio_A_No_Element_Select,timing_val*6);
setTimeout(radio_B_No_Element_Select,timing_val*7);
setTimeout(radio_C_No_Element_Select,timing_val*8);
setTimeout(radio_D_No_Element_Select,timing_val*9);

setTimeout(patient_Classification_Element_DropDown,timing_val*10);
setTimeout(patient_Classification_New_Element_Select,timing_val*11);



setTimeout(typeOfSpecimen_DropDown,timing_val*14);
//setTimeout(naso_Element_Select,timing_val*15);
setTimeout(oro_Element_Select,timing_val*15);

setTimeout(typeOfTest_DropDown,timing_val*16);
setTimeout(PCR_Select,timing_val*17);

setTimeout(specificLocation_Element_Input(specificLocation),timing_val*18);
setTimeout(sampleCollectedBy_Element_Input(sampleCollectedBy),timing_val*19);
setTimeout(formCompletedBy_Element_Input(formCompletedBy),timing_val*20);
setTimeout(barCode_Element_Input(barCode),timing_val*21);


setTimeout(reason_Testing_Element_DropDown,timing_val*22);
//setTimeout(suspect_Select,timing_val*23);
setTimeout(passenger_Select,timing_val*23);

});


///////////////////////////////////////////////////////////////////////////

function specificLocation_Element_Input(specificLocation){
    let specificLocation_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(7) > td.absorbing-column > ng-form > div > div > div.hideInPrint > input");
    specificLocation_Element.attr("specificLocation_Element_Id","specificLocation_Element_Id");
    specificLocation_Element.val(specificLocation);

    let specificLocation_Element_InputEvent= new Event('input');
    let specificLocation_Element_ChangeEvent= new Event('change');
    document.querySelector('[specificLocation_Element_Id="specificLocation_Element_Id"]').dispatchEvent(specificLocation_Element_InputEvent);
    document.querySelector('[specificLocation_Element_Id="specificLocation_Element_Id"]').dispatchEvent(specificLocation_Element_ChangeEvent);
   
 
}  
function barCode_Element_Input(barCode){
    let barCode_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(16) > td.absorbing-column > ng-form > div:nth-child(1) > div > div.hideInPrint > input");
    barCode_Element.attr("barCode_Element_Id","barCode_Element_Id");
    barCode_Element.val(barCode);

    let barCode_Element_InputEvent=new Event('input');
    let barCode_Element_ChangeEvent=new Event('change');
    document.querySelector('[barCode_Element_Id="barCode_Element_Id"]').dispatchEvent(barCode_Element_InputEvent);
    document.querySelector('[barCode_Element_Id="barCode_Element_Id"]').dispatchEvent(barCode_Element_ChangeEvent);
    barCode_Element.focus();
}

function sampleCollectedBy_Element_Input(sampleCollectedBy){
    let sampleCollectedBy_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(24) > td.absorbing-column > ng-form > div:nth-child(1) > div > div.hideInPrint > input");
    sampleCollectedBy_Element.attr("sampleCollectedBy_Element_Id","sampleCollectedBy_Element_Id");
    sampleCollectedBy_Element.val(sampleCollectedBy);

    let sampleCollectedBy_Element_InputEvent=new Event('input');
    let sampleCollectedBy_Element_ChangeEvent=new Event('change');
    document.querySelector('[sampleCollectedBy_Element_Id="sampleCollectedBy_Element_Id"]').dispatchEvent(sampleCollectedBy_Element_InputEvent);
    document.querySelector('[sampleCollectedBy_Element_Id="sampleCollectedBy_Element_Id"]').dispatchEvent(sampleCollectedBy_Element_ChangeEvent);   
}

function formCompletedBy_Element_Input(formCompletedBy){
    let formCompletedBy_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(25) > td.absorbing-column > ng-form > div > div > div.hideInPrint > input");
    formCompletedBy_Element.attr("formCompletedBy_Element_Id","formCompletedBy_Element_Id");
    formCompletedBy_Element.val(formCompletedBy);

    let formCompletedBy_Element_InputEvent=new Event('input');
    let formCompletedBy_Element_ChangeEvent=new Event('change');
    document.querySelector('[formCompletedBy_Element_Id="formCompletedBy_Element_Id"]').dispatchEvent(formCompletedBy_Element_InputEvent);
    document.querySelector('[formCompletedBy_Element_Id="formCompletedBy_Element_Id"]').dispatchEvent(formCompletedBy_Element_ChangeEvent);  

}
/////////////////////////////////////////////////////////////////////////////////////////////////////

function occupation_Element_DropDown(){
    let occupation_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(1) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div > div.optionListInputText > span");
    occupation_Element.attr("occupation_Element_Id","occupation_Element_Id");
    let occupation_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[occupation_Element_Id="occupation_Element_Id"]').dispatchEvent(occupation_Element_Event);
}

function jobless_Element_Select(){ 
    let jobless_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(1) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(6)");
    jobless_Element.attr("jobless_Element_Id","jobless_Element_Id");
    let jobless_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[jobless_Element_Id="jobless_Element_Id"]').dispatchEvent(jobless_Element_Event);   
}

function driver_Element_Select(){ 
    let driver_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(1) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(3)");
    driver_Element.attr("driver_Element_Id","driver_Element_Id");
    let driver_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[driver_Element_Id="driver_Element_Id"]').dispatchEvent(driver_Element_Event);   
}
function other_Element_Select(){ 
    let other_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(1) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(7)");
    other_Element.attr("other_Element_Id","other_Element_Id");
    let other_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[other_Element_Id="other_Element_Id"]').dispatchEvent(other_Element_Event);   
}
function locationSC_Element_Dropdown(){
    let locationSC_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(6) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div > div.optionListInputText > span");
    locationSC_Element.attr("locationSC_Element_Id","locationSC_Element_Id");
    let locationSC_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[locationSC_Element_Id="locationSC_Element_Id"]').dispatchEvent(locationSC_Element_Event);
}

function health_Facility_Element_Select(){  
    let health_Facility_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(6) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(2)");
    health_Facility_Element.attr("health_Facility_Element_Id","health_Facility_Element_Id");
    let health_Facility_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[health_Facility_Element_Id="health_Facility_Element_Id"]').dispatchEvent(health_Facility_Element_Event);   
}
function portOfEntry_Element_Select(){  
    let portOfEntry_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(6) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(8)");
    portOfEntry_Element.attr("portOfEntry_Element_Id","portOfEntry_Element_Id");
    let portOfEntry_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[portOfEntry_Element_Id="portOfEntry_Element_Id"]').dispatchEvent(portOfEntry_Element_Event);   
}
function scrollDown(){  
    let scrollDown_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(6) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope");
    scrollDown_Element.scrollTop(200);
    
      
}

function radio_A_No_Element_Select(){

    let radio_A_No_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(8) > td.absorbing-column > ng-form > div > div > div.hideInPrint.form-control > d2-radio-button > div > span:nth-child(2) > span.custom-radio-text.ng-binding");
    radio_A_No_Element.attr("radio_A_No_Element_Id","radio_A_No_Element_Id");
    let radio_A_No_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:false,isTrusted:true});
    document.querySelector('[radio_A_No_Element_Id="radio_A_No_Element_Id"]').dispatchEvent(radio_A_No_Element_Event);
    
    
}
function radio_B_No_Element_Select(){

    let radio_B_No_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(10) > td.absorbing-column > ng-form > div > div > div.hideInPrint.form-control > d2-radio-button > div > span:nth-child(2) > span.custom-radio-text.ng-binding");
    radio_B_No_Element.attr("radio_B_No_Element_Id","radio_B_No_Element_Id");
    let radio_B_No_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[radio_B_No_Element_Id="radio_B_No_Element_Id"]').dispatchEvent(radio_B_No_Element_Event);
    
    
}
function radio_C_No_Element_Select(){

    let radio_C_No_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(11) > td.absorbing-column > ng-form > div > div > div.hideInPrint.form-control > d2-radio-button > div > span:nth-child(2) > span.custom-radio-text.ng-binding");
    radio_C_No_Element.attr("radio_C_No_Element_Id","radio_C_No_Element_Id");
    let radio_C_No_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[radio_C_No_Element_Id="radio_C_No_Element_Id"]').dispatchEvent(radio_C_No_Element_Event);
    
}

function radio_D_No_Element_Select(){

    let radio_D_No_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(14) > td.absorbing-column > ng-form > div > div > div.hideInPrint.form-control > d2-radio-button > div > span:nth-child(2) > span.custom-radio-text.ng-binding");
    radio_D_No_Element.attr("radio_D_No_Element_Id","radio_D_No_Element_Id");
    let radio_D_No_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[radio_D_No_Element_Id="radio_D_No_Element_Id"]').dispatchEvent(radio_D_No_Element_Event);
    
}
function patient_Classification_Element_DropDown(){

    let patient_Classification_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(12) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div > div.optionListInputText > span");
    patient_Classification_Element.attr("patient_Classification_Element_Id","patient_Classification_Element_Id");
    let patient_Classification_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[patient_Classification_Element_Id="patient_Classification_Element_Id"]').dispatchEvent(patient_Classification_Element_Event);
    
}
function patient_Classification_New_Element_Select(){

    let patient_Classification_New_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(12) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(2)");
    patient_Classification_New_Element.attr("patient_Classification_New_Element_Id","patient_Classification_New_Element_Id");
    let patient_Classification_New_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[patient_Classification_New_Element_Id="patient_Classification_New_Element_Id"]').dispatchEvent(patient_Classification_New_Element_Event);
    
}
function reason_Testing_Element_DropDown(){

    let reason_Testing_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(13) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div > div.optionListInputText > span");
    reason_Testing_Element.attr("reason_Testing_Element_Id","reason_Testing_Element_Id");
    let reason_Testing_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[reason_Testing_Element_Id="reason_Testing_Element_Id"]').dispatchEvent(reason_Testing_Element_Event);
    
}
function suspect_Select(){

    let suspect_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(13) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(2)");
    suspect_Element.attr("suspect_Element_Id","suspect_Element_Id");
    let suspect_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[suspect_Element_Id="suspect_Element_Id"]').dispatchEvent(suspect_Element_Event);
    
}
function passenger_Select(){

    let passenger_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(13) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(3)");
    passenger_Element.attr("passenger_Element_Id","passenger_Element_Id");
    let passenger_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[passenger_Element_Id="passenger_Element_Id"]').dispatchEvent(passenger_Element_Event);
    
}
function typeOfSpecimen_DropDown(){

    let typeOfSpecimen_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(17) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div > div.optionListInputText > span");
    typeOfSpecimen_Element.attr("typeOfSpecimen_Element_Id","typeOfSpecimen_Element_Id");
    let typeOfSpecimen_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[typeOfSpecimen_Element_Id="typeOfSpecimen_Element_Id"]').dispatchEvent(typeOfSpecimen_Element_Event);
    
}
function naso_Element_Select(){
    let naso_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(17) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(3)");
    naso_Element.attr("naso_Element_Id","naso_Element_Id");
    let naso_Element_Event=new MouseEvent("click",{bubbles:false,cancelable:true,isTrusted:true});
    document.querySelector('[naso_Element_Id="naso_Element_Id"]').dispatchEvent(naso_Element_Event);
}
function oro_Element_Select(){
    let oro_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(17) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(2)");
    oro_Element.attr("oro_Element_Id","oro_Element_Id");
    let oro_Element_Event=new MouseEvent("click",{bubbles:false,cancelable:true,isTrusted:true});
    document.querySelector('[oro_Element_Id="oro_Element_Id"]').dispatchEvent(oro_Element_Event);
}

function typeOfTest_DropDown(){

    let typeOfTest_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(21) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div > div.optionListInputText > span");
    typeOfTest_Element.attr("typeOfTest_Element_Id","typeOfTest_Element_Id");
    let typeOfTest_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[typeOfTest_Element_Id="typeOfTest_Element_Id"]').dispatchEvent(typeOfTest_Element_Event);
    
}
function PCR_Select(){

    let PCR_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(21) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(2)");
    PCR_Element.attr("PCR_Element_Id","PCR_Element_Id");
    let PCR_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[PCR_Element_Id="PCR_Element_Id"]').dispatchEvent(PCR_Element_Event);
}  
