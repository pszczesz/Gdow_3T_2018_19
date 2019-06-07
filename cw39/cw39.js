$(document).ready(function () {
   $("#start").click(function () {
       console.log($("#object").position().left);
       if($("#object").position().left<1000){
           $("#object").animate({left: '80%'},1000);
       }else{
           $("#object").animate({left: '0px'},5000);
       }        
    }); 
    $("#panel").click(function () {
        let width = $(document).width();      
       if($("#panel").position().left>width-100){
          $("#panel").animate({right: '10px'}); 
       }else{
           $("#panel").animate({right: '-240px'});
       } 
    });
});


