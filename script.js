const swiper1 = new Swiper('.art_color', {
    // Optional parameters
    loop: true,
    effect:'fade',
    speed:0,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  

  });