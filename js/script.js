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
$('h3').click(function(){
    $("img").show();
});
})