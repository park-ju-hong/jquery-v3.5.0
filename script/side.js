
$(function(){
     $(".onoff_btn").click(function(){
         $("#side").toggleClass("open");
         if($("#side").hassClass("open")){
             $(".onoff_btn").html("&lt;");       
     } else{
         $(".onoff_btn").html("&lt;");
     }
     })
});