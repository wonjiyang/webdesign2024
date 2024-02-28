$(document).ready(function() {
    $(".gnb > ul > li").on("mouseover", function() {
        $(this).find(".submenu").stop().slideDown();
    })
    $(".gnb > ul > li").on("mouseout", function() {
        $(this).find(".submenu").stop().slideUp();
    })
})