$(document).ready(function() {
    //nav
    $(".gnb > ul > li").on("mouseover", function() {
        $(this).find(".submenu").stop().slideDown();
    })
    $(".gnb > ul > li").on("mouseout", function() {
        $(this).find(".submenu").stop().slideUp();
    })

    //slide
    let now = 0; 
    const slideCount = $('.image ul li'). length
    const slideList = $('.image ul')
    setInterval(function() {
        now = (now + 1) % slideCount
        slideList.css('left', 100 * -now + '%')
    }, 3000)

    //modal
    $('.list-bbs li:first-child').on('click', function() {
        $('#modal').show().css('display','flex')
    })
    $('.modal-close').on('click', function() {
        $('#modal').hide()
    })
})