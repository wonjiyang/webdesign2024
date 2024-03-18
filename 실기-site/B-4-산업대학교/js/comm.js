$(function() {
    $('.nav > ul > li > a').mouseover(function() {
        $('.nav-bg, .submenu').stop().slideDown();
    })
    $('.nav > ul > li > a').mouseleave(function() {
        $('.nav-bg, .submenu').stop().slideUp();
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
            }, 600)
        }
    }, 3000);

    $('.modal-open').click(function() {
        $('.modal').show().css('display', 'flex');
    })
    $('.modal-close').click(function() {
        $('.modal').hide();
    })

})