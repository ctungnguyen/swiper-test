new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // keep three in view at desktop, but still group by 1 slide
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        centeredSlides: true
      }
    },
  
    // pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  