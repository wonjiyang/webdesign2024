$(function() {
    $('.nav > ul > li').mouseover(function() {
        $(this).find('.submenu').stop().slideDown();
    })
    $('.nav > ul > li').mouseout(function() {
        $(this).find('.submenu').stop().slideUp();
    })

    let currentIndex = 0;
    $('.slider').hide().first().show();
    setInterval(function() {
        let nextIndex = (currentIndex+1) % 3;
        $('.slider').eq(currentIndex).fadeOut(1200);
        $('.slider').eq(nextIndex).fadeIn(1200);
        currentIndex = nextIndex
    }, 3000);

    $('.tabcon > div').hide().eq(0).show();
    $('.tabmenu > a').click(function() {
        const index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabcon > div').eq(index).show().siblings().hide();
    });

    $('.modal-open').click(function() {
        $('.modal').show().css('display', 'flex');
    })
    $('.modal-close').click(function() {
        $('.modal').hide();
    })
})