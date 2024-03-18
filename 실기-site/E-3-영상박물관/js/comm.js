$(function() {
    $('.nav > ul > li').mouseover(function() {
        $(this).find('.submenu').stop().slideDown();
    })
    $('.nav > ul > li').mouseout(function() {
        $(this).find('.submenu').stop().slideUp();
    })

    let currentIndex = 0;
    $('.slider').append($('.slide').first().clone(true));
    setInterval(function() {
        currentIndex++;
        $('.slider').animate({marginTop: -800 * currentIndex + 'px'}, 600);
        if(currentIndex == 3){
            $('.slider').animate({marginTop: 0}, 0);
            currentIndex = 0;
        }
    }, 3000);

    $('.modal-open').click(function() {
        $('.modal').show().css('display', 'flex');
    })
    $('.modal-close').click(function() {
        $('.modal').hide();
    })
});