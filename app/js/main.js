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
    $('.success-popup').magnificPopup({
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
      $('.open-popup').magnificPopup('close')
      e.preventDefault()
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
  
  $('[data-checkbox="wrapper"]').on('click', function() {
    $(this).toggleClass('active')
    $(this).children('.custom-checkbox').toggleClass('active')
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
  
  $('[data-product="remove"]').on('click', function() {
    $(this).closest('[data-product="item"]').remove()
    
    if (!$('[data-product="item"]').length) {
      $('[data-product="wrapper"]').html('<h4 class="title-4">В корзине ничего нет</h4>')
    }
  })
  
  // Валидация формы модалки
  $('[data-popup="form"]').validate({
    errorClass: 'invalid-field',
		rules: {
			username: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				minlength: 11,
			},
		},
		messages: {
			username: {
				required: "Введите имя",
				minlength: jQuery.validator.format("Имя должно состоять минимум из {0} символов")
			},
			phone: {
				required: "Введите Телефон",
				minlength: jQuery.validator.format("Телефон должен состоять минимум из {0} символов")
			},
			email: {
				required: "Введите E-mail",
				minlength: jQuery.validator.format("E-mail должен состоять минимум из {0} символов")
			},
		},
		// the errorPlacement has to take the table layout into account
		errorPlacement: function(error, element) {
			if (element.is(":radio"))
				error.appendTo(element.parent().next().next());
			else if (element.is(":checkbox"))
				error.appendTo(element.next());
			else
				error.appendTo(element.parent().next());
		},
		// specifying a submitHandler prevents the default submit, good for the demo
		submitHandler: function(e) {
			$('.success-popup').magnificPopup('open')
		},
		// set this class to error-labels to indicate valid fields
		success: function(label) {
			// set &nbsp; as text for IE
			label.html("&nbsp;").addClass("checked")
		}
	});
	
  // Валидация формы контактов
  $('[data-contacts="form"]').validate({
    errorClass: 'invalid-field',
		rules: {
			username: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				minlength: 11,
			},
			msg: {
				required: true
			},
		},
		messages: {
			username: {
				required: "Введите имя",
				minlength: jQuery.validator.format("Имя должно состоять минимум из {0} символов")
			},
			phone: {
				required: "Введите Телефон",
				minlength: jQuery.validator.format("Телефон должен состоять минимум из {0} символов")
			},
			email: {
				required: "Введите E-mail",
				minlength: jQuery.validator.format("E-mail должен состоять минимум из {0} символов")
			},
			msg: {
				required: "Введите Сообщение",
			},
		},
		// the errorPlacement has to take the table layout into account
		errorPlacement: function(error, element) {
			if (element.is(":radio"))
				error.appendTo(element.parent().next().next());
			else if (element.is(":checkbox"))
				error.appendTo(element.next());
			else
				error.appendTo(element.parent().next());
		},
		// specifying a submitHandler prevents the default submit, good for the demo
		submitHandler: function() {
		  $('[data-contacts="success"]').slideToggle(300)
		  
		  setTimeout(() => {
		    $('[data-contacts="success"]').slideToggle(300)
		  }, 2100);
		},
		// set this class to error-labels to indicate valid fields
		success: function(label) {
			// set &nbsp; as text for IE
			label.html("&nbsp;").addClass("checked")
		}
	});
	
  // Валидация формы заказа
  $('[data-checkout="form"]').validate({
    errorClass: 'invalid-field',
		rules: {
			username: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				minlength: 11,
			},
			country: {
				required: true,
				minlength: 2,
			},
			city: {
				required: true,
				minlength: 2,
			},
			street: {
				required: true,
				minlength: 2,
			},
			house: {
				required: true,
				minlength: 1,
			},
			float: {
				required: true,
				minlength: 1,
			},
		},
		messages: {
			username: {
				required: "Введите имя",
				minlength: jQuery.validator.format("Имя должно состоять минимум из {0} символов")
			},
			phone: {
				required: "Введите Телефон",
				minlength: jQuery.validator.format("Телефон должен состоять минимум из {0} символов")
			},
			email: {
				required: "Введите E-mail",
				minlength: jQuery.validator.format("E-mail должен состоять минимум из {0} символов")
			},
			country: {
				required: "Введите Страну",
				minlength: jQuery.validator.format("минимум {0} символов")
			},
			city: {
				required: "Введите Город",
				minlength: jQuery.validator.format("минимум {0} символов")
			},
			street: {
				required: "Введите Улицу",
				minlength: jQuery.validator.format("минимум {0} символов")
			},
			house: {
				required: "Введите Дом",
				minlength: jQuery.validator.format("минимум {0} символов")
			},
			float: {
				required: "Введите Квартиру",
				minlength: jQuery.validator.format("минимум {0} символов")
			},
		},
		// the errorPlacement has to take the table layout into account
		errorPlacement: function(error, element) {
			if (element.is(":radio"))
				error.appendTo(element.parent().next().next());
			else if (element.is(":checkbox"))
				error.appendTo(element.next());
			else
				error.appendTo(element.parent().next());
		},
		// specifying a submitHandler prevents the default submit, good for the demo
		submitHandler: function(e) {
		  document.location.href = 'success.html'
		},
		// set this class to error-labels to indicate valid fields
		success: function(label) {
			// set &nbsp; as text for IE
			label.html("&nbsp;").addClass("checked")
		}
	});
	
  // Валидация формы корзины
  $('[data-cart="form"]').validate({
    errorClass: 'invalid-field',
		rules: {
			promo: {
				required: true,
				minlength: 5
			},
		},
		messages: {
			promo: {
				required: "Введите промокод",
				minlength: jQuery.validator.format("Промокод должно состоять минимум из {0} символов")
			},
		},
		// the errorPlacement has to take the table layout into account
		errorPlacement: function(error, element) {
			if (element.is(":radio"))
				error.appendTo(element.parent().next().next());
			else if (element.is(":checkbox"))
				error.appendTo(element.next());
			else
				error.appendTo(element.parent().next());
		},
		// specifying a submitHandler prevents the default submit, good for the demo
		submitHandler: function(e) {
		  alert('Промокод применен')
		},
		// set this class to error-labels to indicate valid fields
		success: function(label) {
			// set &nbsp; as text for IE
			label.html("&nbsp;").addClass("checked")
		}
	});
	
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