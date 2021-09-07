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


$("button#green").click(function(){
    $("body").removeClass();
    $("body").addClass("green-background")
});
$("button#yellow").click(function(){
    $("body").removeClass();
    $("body").addClass("yellow-background")
});
$("button#red").click(function(){
    $("body").removeClass();
    $("body").addClass("red-background")
});


$("button#hello").click(function() {
    $("ul").prepend("<li>Hello!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul").prepend("<li>Goodbye!</li>");
  });

  $("button#stop").click(function() {
    $("ul").prepend("<li>Stop copying me!</li>");
  });
})