
$(function about(){
  $("#myButton1").click(function(){
    $("#cover1").fadeIn("300");
  })
  $(".cover,.close").click(function(){
    $("#cover1").fadeOut("300");
  })
  $("div.contents").click(function(e){
    e.stopPropagation();
  })
})

$(function about(){
  $("#myButton2").click(function(){
    $("#cover2").fadeIn("300");
  })
  $(".cover,.close").click(function(){
    $("#cover2").fadeOut("300");
  })
  $("div.contents").click(function(e){
    e.stopPropagation();
  })
})

$(function about(){
  $("#myButton3").click(function(){
    $("#cover3").fadeIn("300");
  })
  $(".cover,.close").click(function(){
    $("#cover3").fadeOut("300");
  })
  $("div.contents").click(function(e){
    e.stopPropagation();
  })
})

function myFunction_close(){
  $("div.cover").fadeOut("300");
}
myFunction_close()
