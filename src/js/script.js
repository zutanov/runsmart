$(document).ready(function(){
//     $('.carousel__inner').slick({
//         // adaptiveHeight: true,
//         speed: 1000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//         responsive: [
//             {
//               breakpoint: 768,
//               settings: {
//                 dots: true,
//                 arrows: false
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             }
//           ]    
//     });    
//   });


const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: "page",
    controls: false,
    nav: false,
 });

document.querySelector('.prev').addEventListener('click', () => slider.goTo('prev'));
document.querySelector('.next').addEventListener('click', () => slider.goTo('next'));


    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass
      ('catalog__content_active').eq($(this).index())
      .addClass('catalog__content_active');
  });


  const toggleSlide = (item) => {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
  };

  toggleSlide('.catalog-item__link')
  toggleSlide('.catalog-item__back')


  // Modal

  $('[data-model=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.model__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });
  // $('.button_mini').on('click', function() {
  //   $('.overlay, #order').fadeIn('slow');
  // });
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .model__desc').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  })

  $('#order form').validate();
});
function validateForm(form) {
  $(form).validate({
    rules: {
      name: 'required',
      phone: 'required',
      email: {
        required: true,
        email:true
      }
    }
  });
};
validateForm('#consultation-form');
validateForm('#consultation form');
validateForm('#corder form');


// scroll 

$(window).scroll(function() {
  if($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
})

new WOW().init();