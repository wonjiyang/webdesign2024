$(function() {
    $('.nav > ul > li > a').mouseover(function() {
        $('.submenu, .nav-bg').stop().fadeIn().css('display', 'flex');
    })
    $('.nav > ul > li > a').mouseout(function() {
        $('.submenu, .nav-bg').stop().fadeOut().css('display', 'flex');
    })

    let currentIndex = 0;
    $('.slider').hide().first().show();
    setInterval(function() {
        let nextIndex = (currentIndex+1) % 3;
        $('.slider').eq(currentIndex).fadeOut(1200);
        $('.slider').eq(nextIndex).fadeIn(1200);
        currentIndex = nextIndex;
    }, 3000)

    $('.modal-open').click(function() {
        $('.modal').show().css('display', 'flex');
    })
    $('.modal-close').click(function() {
        $('.modal').hide();
    })
})