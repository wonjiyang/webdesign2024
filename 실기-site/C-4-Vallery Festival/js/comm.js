$(function() {
    $('.nav > ul > li').mouseover(function() {
        $(this).find('.submenu').slideDown();
    })
    $('.nav > ul > li').mouseout(function() {
        $(this).find('.submenu').slideUp();
    })

    let currentIndex = 0;
    $('.slider').append($('.slide').first().clone(true));
    setInterval(function() {
    currentIndex++;
    $('.slider').animate({marginLeft: -currentIndex * 100 + "%"}, 600);
        if(currentIndex == 3){
            setTimeout(function() {
            $('.slider').animate({marginLeft: 0}, 0);
            currentIndex = 0;
        }, 600);
        }
    }, 3000);

    $('.modal-open').click(function() {
        $('.modal').show().css('display', 'flex');
    })
    $('.modal-close').click(function() {
        $('.modal').hide();
    })
})