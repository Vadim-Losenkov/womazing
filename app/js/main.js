$(function() {
  
  (function header() {
    checkScroll()
    $(window).on('scroll', function(e) {
      checkScroll()
    })
    
    if (+$('.header__contact-cart span').text() > 0) {
      $('.header__contact-cart span').addClass('cart-items-counter')
    } else {
      $('.header__contact-cart span').removeClass('cart-items-counter')
    }
    
    checkWidth()
    
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

  $('[data-button="toSecton"]').on('click', function(e) {
    e.preventDefault()
    const sectionID = $(this).attr('href')
    
    $('html, body').animate({
      scrollTop: $(sectionID).offset().top
    }, {
        duration: 370,
    });
  })
  
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
  new Swiper('.team__slider', {
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.team__slider-pagination',
      clickable: true,
    },
  })
  
  const $mixitupContainer = document.querySelector('.shop__inner')
  if ($mixitupContainer) {
    const mixer = mixitup($mixitupContainer);
  }
  
  $('[data-filter="size"] li').on('click', function(e) {
    $('[data-filter="size"] li').removeClass('active')
    $(this).addClass('active')
  })
  $('[data-filter="color"] li').on('click', function(e) {
    $('[data-filter="color"] li').removeClass('active')
    $(this).addClass('active')
  })
  
  // utils
  function checkScroll() {
    if (this.pageYOffset > 30) {
      $('#header').addClass('scroll')
    } else {
      $('#header').removeClass('scroll')
    }
  }
  
  function checkWidth() {
    if ($(window).outerWidth() <= 900) {
      $('.header-burger, .overlay, .header-mobile .header__contact-phone').on('click', function() {
        if ($(this).hasClass('open')) {
          $('.header-burger').removeClass('open')
          $('.overlay').removeClass('open')
          $('.header-mobile').removeClass('open')
          checkScroll()
        } else {
          $('.header-burger').addClass('open')
          $('.overlay').addClass('open')
          $('.header-mobile').addClass('open')
          $('#header').addClass('scroll')
        }
      })
    }
  }
  
})