$(document).ready(function() {
  $(".clickable").click(function() {
    $("#b-showing").fadeToggle();
    $("#b-hidden").fadeToggle();
  });

    $(".clickable2").click(function(){
    $("#b2-showing").slideToggle();
    $("#b2-hidden").slideToggle();
  });

  var buttons = ["green", "yellow", "red", "gray"];
  buttons.forEach(function(button){
    $("button#"+button).click(function() {
      $("body").removeClass();
      $("body").addClass(button+"-background");
    });
  });

  // $("button#green").click(function() {
  //   $("body").removeClass();
  //   $("body").addClass("green-background");
  // });
  //
  // $("button#yellow").click(function() {
  //   $("body").removeClass();
  //   $("body").addClass("yellow-background");
  // });
  //
  // $("button#red").click(function() {
  //   $("body").removeClass();
  //   $("body").addClass("red-background");
  // });
  // $("button#gray").click(function() {
  //   $("body").removeClass();
  // });
});
