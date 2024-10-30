const rem = function (rem) {
  if (window.innerWidth > 768) {
    return 0.005208335 * window.innerWidth * rem;
  } else {
    // где 375 это ширина мобильной версии макета
    return (100 / 375) * (0.05 * window.innerWidth) * rem;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  try {
    modals();
  } catch {}
  try {
    serviesSwiper();
  } catch {}
  try {
    form();
  } catch {}
  try {
    infinity();
  } catch {}
  try {
    pinBlock();
  } catch {}
  try {
    gradientBlock();
  } catch {}
  try {
    linesBlock();
  } catch {}
  try {
    progectsAnim();
  } catch {}
  try {
    headerScroll();
  } catch {}
  try {
    animBlocks();
  } catch {}
  try {
    modalMap();
  } catch {}
  try {
    filterModalClear();
  } catch {}
  try {
    infinitySwiperProdurtBanner();
  } catch {}
  try {
    digitalShowMore();
  } catch {}
  try {
    detailsSwiperMob();
  } catch {}
});

function modals() {
  $(document).on('click', '.btn-modal', function () {
    let modal = $(this).attr('data-target');
    const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
    let scrollWith = getScrollbarWidth();
    document.body.style.paddingRight = `${scrollWith}px`;
    document.querySelector('header').style.paddingRight = `${scrollWith}px`;
    if (document.querySelector('filter-btn')) {
      document.querySelector('filter-btn').style.marginRight = `${scrollWith}px`;
    }
    $('body').css('overflow', 'hidden');
    $(modal).css('display', 'block');
    $(modal).addClass('active');
  });

  $(document).on('click', '.modal .close', function () {
    let modal = $(this).attr('data-dismiss');
    $('body').css('overflow', '');
    document.body.style.paddingRight = ``;
    document.querySelector('header').style.paddingRight = ``;
    if (document.querySelector('filter-btn')) {
      document.querySelector('filter-btn').style.marginRight = ``;
    }
    $(modal).fadeOut(400);
    $(modal).removeClass('active');
  });
}

function serviesSwiper() {
  const swiper = new Swiper('.servies_row_swiper_wrapper', {
    // loop: false,
    loop: true,
    navigation: {
      nextEl: '.servies_row_swiper .swiper-button-next',
      prevEl: '.servies_row_swiper .swiper-button-prev'
    },

    speed: 800,
    breakpoints: {
      300: {
        slidesPerView: 1.3,
        spaceBetween: rem(2),
        centeredSlides: true
      },
      576: {
        slidesPerView: 2.4,
        spaceBetween: rem(4),
        centeredSlides: true
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: rem(4),
        loop: false,
        centeredSlides: false
      },
      slidesPerGroup: 1
    }
  });
}

function form() {
  $(document).on('click', '.feedback_button', function (e) {
    // e.preventDefault();

    // $(".input_req").each(function () {
    //   validateInput.call($(this));
    // });

    // if (!$(".input_req").parent().parent().hasClass("_error")) {

    //   $(".success_form").css("display", "block");
    //   $(".success_form").addClass("active");

    //   function closeSuccessForm() {
    //     $(".success_form").fadeOut(400);
    //     $(".success_form").removeClass("active");
    //   }

    //   setTimeout(closeSuccessForm, 2000);

    //   $(".input_req").each(function () {
    //     $(this).val('');
    //     $(this).parent().parent().removeClass("active");
    //   });
    // }

    e.preventDefault();

    var form = $(this).closest('.form_send');

    form.find('.input_req').each(function () {
      validateInput.call($(this));
    });

    if (!form.find('.input_req').parent().parent().hasClass('_error')) {
      if (form.hasClass('feedback_form')) {
        $('.success_form').css('display', 'block');
        $('.success_form').addClass('active');

        function closeSuccessForm() {
          $('.success_form').fadeOut(400);
          $('.success_form').removeClass('active');
        }

        setTimeout(closeSuccessForm, 2000);
      } else {
        // $("body").css("overflow", "");
        form.closest('.modal').fadeOut(400);
        form.closest('.modal').removeClass('active');

        if (form.closest('.modal').attr('id') === 'modal-feedback') {
          $('#modal-success-feedback').css('display', 'block');
          $('#modal-success-feedback').addClass('active');
        }
        if (form.closest('.modal').attr('id') === 'modal-presentation') {
          $('#modal-success-presentation').css('display', 'block');
          $('#modal-success-presentation').addClass('active');
        }
      }

      // Очистить все поля в текущей форме
      form.find('.input_req').each(function () {
        $(this).val('');
        $(this).parent().parent().removeClass('active');
      });

      // $(".input_phone").inputmask("+7 (999) 999-99-99");

      $('.input_phone').inputmask({
        mask: '+7 (999) 999-99-99',
        showMaskOnHover: false
      });

      // $(".input_mail").on("change", function () {
      //   var email = $(this).val();
      //   var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

      //   if (pattern.test(email)) {
      //     $(this).removeClass("error");
      //   } else {
      //     $(this).addClass("error");
      //     $(this).val();
      //   }
      // });
    }
  });

  $('.input_req').on('focus', function () {
    $('.input_parent').removeClass('active');
    // $(this).parent().parent().addClass("active");
    $(this).parent().addClass('active');
  });
  $('.input_req').on('blur', function () {
    validateInput.call($(this));
    $(this).parent().removeClass('active');
  });
  $('.input_req').on('change', function () {
    validateInput.call($(this));
  });

  $('.input_req').on('input', function () {
    var valueInput = $(this).val();

    if (valueInput.length > 0) {
      $(this).parent().parent().removeClass('_error');
    } else {
      $(this).parent().parent().addClass('_error');
    }
  });

  function validateInput() {
    var valueInput = $(this).val();

    if ($(this).hasClass('input_mail')) {
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (emailPattern.test(valueInput)) {
        $(this).parent().parent().removeClass('_error');
      } else {
        $(this).parent().parent().addClass('_error');
      }
    }

    if ($(this).hasClass('input_phone')) {
      var phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

      if (phonePattern.test(valueInput)) {
        $(this).parent().parent().removeClass('_error');
      } else {
        $(this).parent().parent().addClass('_error');
      }
    }

    if (!$(this).hasClass('input_mail') && !$(this).hasClass('input_phone')) {
      if (valueInput.length > 0) {
        $(this).parent().parent().removeClass('_error');
      } else {
        $(this).parent().parent().addClass('_error');
      }
    }
  }
}

function infinity() {
  $(function () {
    $('.marquee1').marquee({
      duration: 11000,
      startVisible: true,
      duplicated: true,
      delayBeforeStart: 0,
      gap: 0
    });
  });
}

function pinBlock() {
  gsap.set('.section_slick', { height: '100vh' });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.section_slick',
        start: 'top top',
        end: () => `3400vh`, //+=300
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 5,
        // markers: true,
        defaults: {
          ease: 'power1.inOut',
          duration: 1,
          transformOrigin: '0 0'
        }
      }
    })

    /*numero 1*/
    .from('.numero1 div', { y: 100, opacity: 0, duration: 1 })

    .to('.numero1 div', { y: 0, opacity: 1, duration: 1 })
    .to('.numero1 div', { y: 100, opacity: 0 })

    /*numero 2*/

    .from('.numero2 div ', { y: 20, opacity: 0 })

    .to('.numero2 div ', { duration: 1 })

    .to('.numero2 div ', { y: 20, opacity: 0 })

    /*numero 2*/

    .from('.numero3 .block_marquee', { y: 20, opacity: 0 })

    .to('.numero3 .block_marquee', { duration: 1 })

    .to('.numero3 .block_marquee', { y: 0, opacity: 1 });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.pin-spacer',
        start: 'center center',
        end: 'bottom bottom',
        // scrub: 7,
        scrub: 5,

        defaults: {
          ease: 'power1.inOut',
          duration: 2,
          transformOrigin: '0 0'
        }
      }
    })

    .to('.icon_fade', { width: '50%', opacity: 1 })

    // .to(".icon_fade", { width: "50%", duration: 2 })

    .to('.icon_fade', { width: '100%', duration: 2 });

  // .to(".icon_fade", { width: "100%", duration: 2 });

  // const inner = document.querySelector('.section_slick__inner')
  // gsap.set(inner, { height: "100vh" });
  // const pinTl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: inner,
  //       start: 'top top',
  //       // end: '+=1400',
  //       end: 'bottom',
  //       // scrub: 5,
  //       scrub: true,
  //       pin: true,
  //       // pinSpacer: true,
  //       pinSpacer: false,
  //       anticipatePin: 1,
  //       ease: "ease",
  //       duration: 10,
  //       invalidateOnRefresh: true,
  //       refreshPriority: 1, // Более высокий приоритет пересчета
  //       markers: true,
  //     }
  // });

  // /*numero 1*/
  // pinTl
  //   .from(".numero1 div", { y: 100, opacity: 0, duration: 1 })
  //   .to(".numero1 div", { y: 0, opacity: 1, duration: 1 })
  //   .to(".numero1 div", { y: 100, opacity: 0 })

  //   /*numero 2*/

  //   .from(".numero2 div ", { y: 20, opacity: 0 })
  //   .to(".numero2 div ", { duration: 1 })
  //   .to(".numero2 div ", { y: 20, opacity: 0 })

  //   /*numero 2*/

  //   .from(".numero3 .block_marquee", { y: 20, opacity: 0 })
  //   .to(".numero3 .block_marquee", { duration: 1 })
  //   .to(".numero3 .block_marquee", { y: 0, opacity: 1 });
}

function gradientBlock() {
  // gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.section_text_gradient',
  //       start:  '-90%' ,
  //       end: '20%',

  //       scrub: 1,
  //       duration:5,
  //       defaults:{
  //         ease: 'power1.inOut',
  //         duration:1,
  //         transformOrigin:'0 0'
  //       },
  //     },
  //   })

  // .to('.text_gradient', {
  //     backgroundImage: "radial-gradient(circle at 50% -24.327vh, #9E0F54 5.51153vh, #9E0F54 42.5576vh, #850A45 117.0692vh, rgba(0, 0, 0, 0) 127.069vh)",
  // });

  // gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.section_text_gradient',
  //       start: '-60%',
  //       end:  '50%' ,
  //       scrub: 1,
  //       duration:5,
  //       defaults:{
  //         ease: 'power1.inOut',
  //         duration:1,
  //         transformOrigin:'0 0'
  //       },
  //     },
  //   })

  // .to('.text_gradient', {
  //     backgroundImage: "radial-gradient(circle at 50% -24.327vh, #D0106D 5.51153vh, #F8589B 42.5576vh, #E77060 117.0692vh, rgba(0, 0, 0, 0) 127.069vh)",
  // });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.section_text_gradient',
        start: window.innerWidth > 768 ? '-90%' : '-130%',
        end: window.innerWidth > 768 ? '20%' : '5%',
        scrub: 1,
        duration: 5,
        defaults: {
          ease: 'power1.inOut',
          duration: 1,
          transformOrigin: '0 0'
        }
      }
    })
    // .to(".text_gradient", {
    //   backgroundImage:
    //     "radial-gradient(circle at 50% -24.327vmin, #9E0F54 5.51153vmin, #9E0F54 62.5576vmin, #850A45 117.0692vmin, rgba(0, 0, 0, 0) 127vmin)", // Первый градиент
    // })
    .to('.text_gradient', {
      backgroundImage:
        'radial-gradient(circle at 50% -24.327vmin, #D0106D 5.51153vmin, #F8589B 62.5576vmin, #E77060 117.0692vmin, rgba(0, 0, 0, 0) 127vmin)' // Второй градиент
    })
    .to('.text_gradient', {
      backgroundImage:
        'radial-gradient(circle at 50% -24.327vmin, #D0106D 5.51153vmin, #F8589B 62.5576vmin, #E77060 117.0692vmin, rgba(0, 0, 0, 0) 127vmin)' // Второй градиент
    });
}

function linesBlock() {
  gsap.to('.gspa_line_trigger', {
    duration: 1.5,
    width: '80%',
    opacity: 1,
    scrollTrigger: {
      trigger: '.gsap_line',
      start: 'top 70%'
    }
  });
}

function progectsAnim() {
  const posterisanImage = document.querySelector('.works_item--posterisan');
  const rinoImage = document.querySelector('.works_item--rino');

  if (posterisanImage) {
    posterisanImage.addEventListener('mouseenter', function () {
      if (!posterisanImage.classList.contains('posterisan-animation')) {
        posterisanImage.classList.add('posterisan-animation');

        setTimeout(() => {
          posterisanImage.classList.remove('posterisan-animation');
        }, 1000);
      }
    });
  }

  if (rinoImage) {
    rinoImage.addEventListener('mouseenter', function () {
      if (!rinoImage.classList.contains('rino-animation')) {
        rinoImage.classList.add('rino-animation');

        setTimeout(() => {
          rinoImage.classList.remove('rino-animation');
        }, 1300);
      }
    });
  }
}

function headerScroll() {
  const nav = document.querySelector('header');
  const navOffsetTop = nav.offsetTop;

  function handleScroll() {
    if (window.scrollY > navOffsetTop) {
      nav.classList.add('fixed-nav');
    } else {
      nav.classList.remove('fixed-nav');
    }
  }

  function handleResize() {
    window.addEventListener('scroll', handleScroll);
  }

  if (nav) {
    handleResize();
  }

  let lastScrollPosition = 0;

  const updateMenuVisibility = () => {
    const currentScrollPosition = window.scrollY;

    if (window.innerWidth <= 767) {
      if (currentScrollPosition > lastScrollPosition) {
        nav.classList.add('isActive');
      } else {
        nav.classList.remove('isActive');
      }
    } else {
      nav.classList.remove('isActive');
    }

    lastScrollPosition = currentScrollPosition;
  };

  window.addEventListener('scroll', updateMenuVisibility);
  window.addEventListener('resize', updateMenuVisibility);

  // Вызываем функцию обновления видимости меню при загрузке страницы
  updateMenuVisibility();
}

function animBlocks() {
  function animMainBanner() {
    gsap.set('.banner_mainpage_relative', { opacity: 0, y: 150 });

    gsap.to('.banner_mainpage_relative', {
      duration: 1,
      opacity: 1,
      y: 0
    });
  }

  function animServies() {
    gsap.fromTo(
      '.servies_row_swiper',
      {
        y: 500,
        opacity: 0.2
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'ease-in-out',
        scrollTrigger: {
          trigger: '.servies_section',
          start: 'top 70%'
        }
      }
    );
  }

  function animSwiperRowMob() {
    if (window.innerWidth < 1024) {
      gsap.to('.servies_row_swiper_wrapper', {
        duration: 1,
        x: window.innerWidth < 576 ? '-40rem' : '-30rem',
        scrollTrigger: {
          trigger: '.servies_section',
          start: 'top bottom',
          scrub: 3,
          duration: 5
        }
      });
    }
  }

  function animLineBlock() {
    gsap.fromTo(
      '.gsap_line .body_content',
      {
        y: 500,
        opacity: 0.2
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'ease-in-out',
        scrollTrigger: {
          trigger: '.gsap_line',
          start: 'top 70%'
        }
      }
    );
  }

  function animPartnersBlock() {
    gsap.fromTo(
      '.section_partners',
      {
        y: 500,
        opacity: 0.2
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'ease-in-out',
        scrollTrigger: {
          trigger: '.section_partners-wrapper',
          start: 'top 70%'
        }
      }
    );
  }

  function animFormBlock() {
    gsap.fromTo(
      '.section_feedback',
      {
        y: 500,
        opacity: 0.2
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'ease-in-out',
        scrollTrigger: {
          trigger: '.section_feedback-wrapper',
          start: 'top 70%'
        }
      }
    );
  }

  function animSectionWorks() {
    gsap.fromTo(
      '.section_works:not(.section_works--portfolio)',
      {
        y: 500,
        opacity: 0
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'ease-in-out',
        scrollTrigger: {
          trigger: '.section_works-wrapper',
          start: 'top 70%'
        }
      }
    );
  }

  function animProjectBlock() {
    const elements = document.querySelectorAll('.works_item');

    elements.forEach((element) => {
      // gsap.to(element, {
      //   opacity: 1,
      //   // duration: 0.8,
      //   duration: 1,
      //   ease: "ease-in-out",
      //   scrollTrigger: {
      //     trigger: element,
      //     start: "top 50%",
      //     end: "bottom -20%",
      //     toggleActions: "play none none reverse",
      //     invalidateOnRefresh: !0,
      //   },
      // });
      gsap.fromTo(
        element,
        {
          y: 200,
          opacity: 0.2
        },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: 'ease-in-out',
          scrollTrigger: {
            trigger: element,
            start: 'top 150%'
          }
        }
      );
    });
  }

  function animMapBlock() {
    gsap.fromTo(
      '.api_maps',
      {
        y: 500,
        opacity: 0.2
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'ease-in-out',
        scrollTrigger: {
          trigger: '.api_maps',
          start: 'top 70%'
        }
      }
    );
  }

  function animStackBlock() {
    gsap.fromTo(
      '.stack__container',
      {
        y: 500,
        opacity: 0.2
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'ease-in-out',
        scrollTrigger: {
          trigger: '.stack',
          start: 'top 70%'
        }
      }
    );
  }

  function animDigitalBlock() {
    gsap.fromTo(
      '.digital__container',
      {
        y: 500,
        opacity: 0.2
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'ease-in-out',
        scrollTrigger: {
          trigger: '.digital',
          start: 'top 70%'
        }
      }
    );
  }

  function animDetailsBlock() {
    gsap.fromTo(
      '.details__container',
      {
        y: 500,
        opacity: 0.2
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'ease-in-out',
        scrollTrigger: {
          trigger: '.details',
          start: 'top 70%'
        }
      }
    );
  }

  function animWorks () {
    gsap.fromTo(
      '.works__container',
      {
        y: 500,
        opacity: 0.2
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'ease-in-out',
        scrollTrigger: {
          trigger: '.works',
          start: 'top 70%'
        }
      }
    );
  }

  try {
    // animMainBanner ()
  } catch {}
  try {
    animServies();
  } catch {}
  try {
    animSwiperRowMob();
  } catch {}
  try {
    animLineBlock();
  } catch {}
  try {
    animPartnersBlock();
  } catch {}
  try {
    animFormBlock();
  } catch {}
  try {
    animSectionWorks();
  } catch {}
  try {
    animProjectBlock();
  } catch {}
  try {
    // animMapBlock()
  } catch {}
  try {
    animStackBlock();
  } catch {}
  try {
    animDigitalBlock();
  } catch {}
  try {
    animDetailsBlock();
  } catch {}
  try {
    worksSwiper();
  } catch {}
  try {
    animWorks();
  } catch {}
}

function modalMap() {
  const btns = document.querySelectorAll('.modal-content-map__link');

  const modal = document.querySelector('.share-modal ');

  const copyBtn = document.querySelector('.share-modal__btn--copy');

  btns.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      modal.classList.add('isActive');
    });
  });

  modal.addEventListener('click', (e) => {
    let target = e.target;

    if (
      target.classList.contains('share-modal') ||
      target.classList.contains('share-modal__close-wrapper')
    ) {
      modal.classList.remove('isActive');
    }
  });

  copyBtn.addEventListener('click', function () {
    const link = 'https://goldfishmedia.group/'; // Замените ссылку на нужную
    navigator.clipboard.writeText(link);
    copyBtn.querySelector('.share-modal__btn-text').textContent = 'Ссылка скопирована';
  });

  copyBtn.addEventListener('blur', function () {
    copyBtn.querySelector('.share-modal__btn-text').textContent = 'Скопировать ссылку';
  });
}

function filterModalClear() {
  const btn = document.querySelector('.filter-modal__clear-btn');
  const checkboxs = document.querySelectorAll('.filter-modal__input');

  btn.addEventListener('click', () => {
    checkboxs.forEach((checkbox) => {
      checkbox.checked = false;
    });
  });
}

function infinitySwiperProdurtBanner() {
  // const swiperRight = new Swiper('.production-banner__swiper--right', {
  //   speed: 15000,
  //   // slidesPerView: "2.3",
  //   slidesPerView: 'auto',
  //   spaceBetween: rem(2),
  //   loop: true,
  //   allowTouchMove: false,
  //   autoplay: {
  //     delay: 0,
  //     disableOnInteraction: false,
  //     reverseDirection: true,
  //   },
  //   breakpoints: {
  //     769: {
  //       spaceBetween: rem(4),
  //     }
  //   }
  // });
  // const swiperLeft = new Swiper('.production-banner__swiper--left', {
  //   speed: 15000,
  //   // slidesPerView: "2.3",
  //   slidesPerView: 'auto',
  //   spaceBetween: rem(2),
  //   loop: true,
  //   allowTouchMove: false,
  //   autoplay: {
  //     delay: 0,
  //     disableOnInteraction: false,
  //   },
  //   breakpoints: {
  //     769: {
  //       spaceBetween: rem(4),
  //     }
  //   }
  // });

  $(function () {
    $('.production-banner__swiper--right').marquee({
      duration: 81000,
      startVisible: true,
      duplicated: true,
      delayBeforeStart: 0,
      gap: 0
    });
    $('.production-banner__swiper--left').marquee({
      duration: 81000,
      startVisible: true,
      duplicated: true,
      delayBeforeStart: 0,
      gap: 0,
      direction: 'right'
    });
  });
}

function digitalShowMore() {
  const btn = document.querySelector('.digital__show-more-btn');

  const hideText = document.querySelector('.digital__text-box--hide');

  btn.addEventListener('click', () => {
    console.log('123');
    if (!hideText.classList.contains('isActive')) {
      hideText.style.maxHeight = hideText.scrollHeight + 'px';
      hideText.classList.add('isActive');
      btn.classList.add('isActive');
    } else {
      hideText.style.maxHeight = '0px';
      hideText.classList.remove('isActive');
      btn.classList.remove('isActive');
    }
  });
}

function detailsSwiperMob() {
  const swiper = new Swiper('.details__swiper', {
    slidesPerView: 1, // Показывать одну колонку
    slidesPerColumn: 2, // Две строки

    // slidesPerView: 1,  // Отображение одной колонки
    // slidesPerGroup: 1,  // Переключение одной группы слайдов
    grid: {
      rows: 2 // Установка двух строк
    },
    spaceBetween: 16, // Расстояние между слайдами
    pagination: {
      el: '.details__swiper-pagination',
      clickable: true // Кликабельная пагинация
    },
    spaceBetween: 10 // Расстояние между слайдами
  });
}

function worksSwiper() {
  let speed = 1200;
  const swiperVertical = new Swiper('.works__vertical-swiper', {
    slidesPerView: 'auto',
    speed: speed,
    loop: true,
    initialSlide: 4,
    centeredSlides: true,
    spaceBetween: 10,
    allowTouchMove: false,
    direction: 'vertical',
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.works__swiper-btn'
    }
  });

  const swiperMidle = new Swiper('.works__midle-swiper', {
    slidesPerView: '1',
    effect: 'fade',
    allowTouchMove: false,
    loop: true,
    fadeEffect: {
      crossFade: true
    },
    speed: speed,
    breakpoints: {
      768: {}
    },

    navigation: {
      nextEl: '.works__swiper-btn'
    }
  });

  const swiperInnerSlide = new Swiper('.works__midle-inner-swiper', {
    slidesPerView: '1',
    effect: 'fade',
    allowTouchMove: false,
    loop: true,
    fadeEffect: {
      crossFade: true
    },
    speed: 800,
    breakpoints: {
      768: {}
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.works__midle-inner-swiper .works__midle-inner-swiper-pagination'
    }
  });

  const swiperTextUnder = new Swiper('.works__right-text-swiper--under', {
    slidesPerView: 'auto',
    effect: 'fade',
    allowTouchMove: false,
    loop: true,
    fadeEffect: {
      crossFade: true
    },
    speed: speed,
    breakpoints: {
      768: {}
    },

    navigation: {
      nextEl: '.works__swiper-btn'
    }
  });

  const swiperTextOver = new Swiper('.works__right-text-swiper--over', {
    slidesPerView: 'auto',
    effect: 'fade',
    allowTouchMove: false,
    loop: true,
    fadeEffect: {
      crossFade: true
    },
    speed: speed,
    breakpoints: {
      768: {}
    },

    navigation: {
      nextEl: '.works__swiper-btn'
    }
  });

  const swiperImg = new Swiper('.works__right-img-swiper', {
    slidesPerView: 'auto',
    allowTouchMove: false,
    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true
    // },
    speed: speed,
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: false,
        translate: ['80%', 0, -1],
        scale: 0.2,
        opacity: 0,
        shadow: false
      },
      next: {
        translate: ['80%', 0, -1],
        shadow: false,
        opacity: 0,
        scale: 0.5
      }
    },
    loop: true,
    navigation: {
      nextEl: '.works__swiper-btn'
    }
  });

  const swiperMob = new Swiper('.works__swiper-mob', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: rem(2.4),
    navigation: {
      nextEl: '.works__swiper-btn'
    },
    speed: speed,
    breakpoints: {
      575: {  spaceBetween: rem(4),}
    },
  });

  // swiperMidle.controller.control = [swiperVertical];
}
