$(document).ready(function() {
    //nav
    $(".gnb > ul > li").on("mouseover", function() {
        $(this).find(".submenu").stop().slideDown();
    })
    $(".gnb > ul > li").on("mouseout", function() {
        $(this).find(".submenu").stop().slideUp();
    })

    let currentIndex = 0;
    $('.slider').append($('.slide').first().clone(true));
    setInterval(function() {
        currentIndex++;
        $('.slider').animate({marginLeft: -100 * currentIndex + '%'}, 600);
        if(currentIndex == 3){
            setTimeout(function() {
                $('.slider').animate({marginLeft: 0}, 0);
                currentIndex = 0;
            }, 600);
        }
    }, 3000);

    //modal
    $('.list-bbs li:first-child').on('click', function() {
        $('#modal').show().css('display','flex')
    })
    $('.modal-close').on('click', function() {
        $('#modal').hide()
    })
})