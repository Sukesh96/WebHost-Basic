$(document).ready(function(){

    $(".toggle-button").click(function(){
        $(".mobile-nav").fadeIn(250);
        $(".backdrop").show();
    });

    $(".button").click(function(){
        $(".backdrop").show();
        $(".modal").show().animate({
            top: "40%",
        },1000);
    });

    $(".backdrop").click(function(){
        $(this).hide();
        $(".mobile-nav").hide();
        $(".modal").hide().animate({
            top:"25%",
        });
    });

    $(".modal_action-negative").click(function(){
        $(".modal").hide().animate({
            top:"25%",
        });
        
        $(".backdrop").hide();
    })

})