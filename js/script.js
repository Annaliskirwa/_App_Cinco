$(document).ready(function(){
$('h1').click(function(){
    alert("This is a heading tag")
});
$('p').click(function(){
    alert("This is a paragraph tag")
});
$('img').click(function(){
    alert("This is an image")
});
$('.clickable').click(function(){
  $(".imgtwo-showing").toggle();
  $(".imgtwo-hidden").toggle();
});

$('h4').click(function(){
    $('#three').fadeIn();
});
$('h4').click(function(){
    $('#four').fadeOut();
});
$('h5').click(function(){
    $("#ones").fadeToggle("slow");
    $("#twos").fadeToggle(3000);
});
})