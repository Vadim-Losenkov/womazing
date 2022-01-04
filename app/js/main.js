$(function() {
  
  (function header() {
    $(window).on('scroll', function(e) {
      if (this.pageYOffset > 30) {
        $('#header').addClass('scroll')
      } else {
        $('#header').removeClass('scroll')
      }
    })
    
    if (+$('.header__contact-cart span').text() > 0) {
      $('.header__contact-cart span').addClass('cart-items-counter')
    } else {
      $('.header__contact-cart span').removeClass('cart-items-counter')
    }
    
    $('.header-burger, .overlay, .header__contact-phone').on('click', function() {
      $('.header-burger').toggleClass('open')
      $('.overlay').toggleClass('open')
      $('.header-mobile').toggleClass('open')
      $('#header').toggleClass('scroll')
    })
    
    $('.open-popup').magnificPopup({
      type: 'inline',
      removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function () {
          this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
      midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
    $('[data-popup="close"]').on('click', (e) => {
      e.preventDefault()
      $('.open-popup').magnificPopup('close')
    })
  } ())
  
  new Swiper('.top__slider', {
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.top__slider-pagination',
      clickable: true,
    },
  })
})