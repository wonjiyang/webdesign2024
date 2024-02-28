// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
    

//   });

// html 페이지를 로드한 후 실행
// $(document).ready(function() {})
$(function() {
  // gnb
  // 변수선언
  const $gnb = $('#gnb');
  const $gnbDepth1 = $gnb.find('.depth1 > li');

  $gnbDepth1.on('mouseenter', function () {
    $(this).find('.depth2').slideDown(500);
    // key 값이 2개 이상일 때는 {}묶어서 처리
    // {key1: value1, key:  value2}
    $(this).children('a').css({
      'background-color': '#777',
      color: '#fff'
      // key 값이 1개일 때는 {} 생략 가능
      // key, value
      // $(this).children('a').css('background-color', '#333');
    })
  })
  $gnbDepth1.on('mouseleave', function () {
    $(this).find('.depth2').slideUp(500);
    $(this).children('a').css({
      'background-color': '#fff',
      color: '#222'
    })
  })

  // modal
  const $modal = $('#modal');

  // .list-bbs li:first child 클릭했을 때
  $('.list-bbs li:first-child').on('click', function () {
    // .modal 열기
    // #modal 보이게
    $modal.show();
  });
  // #modal.btn-close 클릭했을 때
    $modal.find('.btn-close').on('click', function () {
    // .modal 닫기
    // #modal 감추기
    $modal.hide();
  })
  
  // tabs
  const $tabs = $('#tabs');
  // 기본셋팅
  // #tabs .sec-g에 있는 .active를 찾아서 삭제
  $tabs.find('.sec-g').removeClass('active');
  // #tabs .sec-g:first-child에 .active를 찾아서 추가
  $tabs.find('.sec-g:first-child').addClass('active');
  //#tabs .sec-tit를 클릭했을 때
  $tabs.find('.sec-tit').on('click', function() {
    // #tabs .sec-g에 있는 .active를 찾아서 삭제
    $tabs.find('.sec-g').removeClass('active');
    // this의 부모에게 .active를 찾아서 추가
    $(this).parent().addClass('active');
  })

  // slide
  let now = 0;
  const $slide = $('.list-slide');
  const slideCount = $('.list-slide li').length;
  // 3초마다 슬라이드가 이동
  // left 값 이동
  // setInterval(함수, 초수)
  setInterval(function () {
    // now가 1씩 중가하는 연산
    // now 재할당
    mow = (now + 1) % slideCount;
    // now(1) = now(0) + 1;
    // now(2) = now(1) + 1;
    // now(0) = now(2) + 1;

    updateSlidePosition();
  }, 3000);

  function updateSlidePosition() {
    // .list-slide의 left 값이 이동
    $slide.css({
      left : 100 * now * -1 + '%',
    // 0, -100%, -200%, 0
    // now, 0, 1, 2, 0
    });
  }
})