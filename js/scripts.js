$(document).ready(function() {
  $(".clickable").click(function() {
    $("#b-showing").fadeToggle();
    $("#b-hidden").fadeToggle();
  });

    $(".clickable2").click(function(){
    $("#b2-showing").slideToggle();
    $("#b2-hidden").slideToggle();
  });
});
