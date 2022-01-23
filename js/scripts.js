$(document).ready(function() {
  $(".clickable").click(function() {
    $("#emu-showing").slideToggle();
    $("#emu-hidden").slideToggle();
  });
});

$(document).ready(function() {
  $(".click-emu").click(function() {
    $("#info-showing").fadeToggle("fast");
    $("#info-hidden").fadeToggle("fast");
  });
});