$(document).ready(function(){
 

 $("#one").datepicker({
 
     numberOfMonths:1,
     changeYear:true,
     changeMonth:true,
     showWeek:true,
     weekHeader:"week",
     showOtherMonths:true,
     minDate: new Date(2000,0,1),
     maxDate:new Date(2021,11,30)


 });

 $("#two").accordion({

    collapsible:true,
    event:'click',
    animate:100,
    active:false,
    heightStyle:true,
    icons:{header:"ui-icon-plus", activeHeader:"ui-icon-minus"}



 });


 $("#three").dialog({
  
    title:"newmesaasge",
    draggable:true,
    resizeable:false,
    height:100,
    width:100,
    modal:false



 });


});