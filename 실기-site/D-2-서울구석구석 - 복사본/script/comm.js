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

    //tab
    $('.tab-tit').on('click', function(event) {
        event.preventDefault()
        $('.tab').removeClass('active')
        $(this).parents('.tab').addClass('active')
    })
})