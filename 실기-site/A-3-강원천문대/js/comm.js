$(function() {
    $('.gnb > ul > li').mouseover(function() {
        $(this).find('.submenu').stop().slideDown(200);
    });
    $('.gnb > ul > li').mouseout(function() {
        $(this).find('.submenu').stop().slideUp(200);
    });

    let currentIndex = 0;
    $('.slider').hide().first().show();
    setInterval(function() {
        let nextIndex = (currentIndex+1) % 3;
        $('.slider').eq(currentIndex).fadeOut(1200);
        $('.slider').eq(nextIndex).fadeIn(1200);
        currentIndex = nextIndex;
    }, 3000)

    $('.tabcon > div').hide().eq(0).show();
    $('.tabmenu > a').click(function() {
        const index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabcon > div').eq(index).show().siblings().hide();
    });
});