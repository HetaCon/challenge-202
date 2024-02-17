//resource link: https://www.w3schools.com/jquery/default.asp

$(".box").hide();
$("#home-page-dark").hide();

$("#light-push-me").click(function(){
    $(".box").toggle();
})

$("#dark-push-me").click(function(){
    $(".box").toggle();
})

$(".box").click(function(){
    $(".box") .addClass ("shake");
    setTimeout (function (){
    $(".box") .removeClass ("shake")
    }, 600);
})

$("#light-reset").click(function(){
    $(".box").hide();
})

$("#dark-reset").click(function(){
    $("#home-page").show();
    $("#home-page-dark").hide();
    $(".box").hide();
})

$("#home-page .name").click(function(){
    $("#home-page").hide();
    $("#home-page-dark").show();

})

$("#home-page-dark .name").click(function(){
    $("#home-page").show();
    $("#home-page-dark").hide();
})