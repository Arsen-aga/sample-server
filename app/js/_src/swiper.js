if (document.querySelector(".section-4__swiper")) {
  new Swiper(".section-4__swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: ".section-4__swiper-wrapper .swiper-button-next",
      prevEl: ".section-4__swiper-wrapper .swiper-button-prev",
    },
    breakpoints: {
      468: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      767.98: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      991.8: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}
if (document.querySelector(".section-6__swiper")) {
  new Swiper(".section-6__swiper", {
    slidesPerView: 1,
    spaceBetween: 9,
    navigation: {
      nextEl: ".section-6__swiper-wrapper .swiper-button-next",
      prevEl: ".section-6__swiper-wrapper .swiper-button-prev",
    },
    breakpoints: {
      468: {
        slidesPerView: 2,
      },
      991.8: {
        slidesPerView: 3,
      },
      1230: {
        slidesPerView: 5,
        spaceBetween: 9,
      },
    },
  });
}
if (document.querySelector(".section-14__swiper")) {
  new Swiper(".section-14__swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: ".section-14__swiper-wrapper .swiper-button-next",
      prevEl: ".section-14__swiper-wrapper .swiper-button-prev",
    },
    pagination: {
      el: ".section-14__swiper-wrapper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      468: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      767.98: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
      },
      1230: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 45,
      },
    },
  });
}
if (document.querySelector(".section-15__swiper")) {
  new Swiper(".section-15__swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: ".section-15__swiper-wrapper .swiper-button-next",
      prevEl: ".section-15__swiper-wrapper .swiper-button-prev",
    },
    pagination: {
      el: ".section-15__swiper-wrapper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      468: {
        slidesPerView: 1,
      },
      767.98: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1230: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}
if (document.querySelector(".section-21__swiper")) {
  new Swiper(".section-21__swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: ".section-21__swiper-wrapper .swiper-button-next",
      prevEl: ".section-21__swiper-wrapper .swiper-button-prev",
    },
    pagination: {
      el: ".section-21__swiper-wrapper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      468: {
        slidesPerView: 2,
      },
      767.98: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      991.8:{
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1230: {
        slidesPerView: 3,
        spaceBetween: 84,
      },
    },
  });
}
if (document.querySelector(".section-22__swiper")) {
  new Swiper(".section-22__swiper", {
    spaceBetween: 15,
    slidesPerView: 1,
    pagination: {
      el: ".section-22__swiper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      468: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      991.8: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1230: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}


if (document.querySelector(".section-7__swipers")) {
  const swiper = new Swiper(".section-7__thumbswiper", {
    spaceBetween: 10,
    slidesPerView: "auto",
    breakpoints: {
      991.8: {
        slidesPerView: 4,
      },
      1230: {
        slidesPerView: 5,
      },
    },
  });
  new Swiper(".section-7__swiper", {
    navigation: {
      nextEl: ".section-7__swipers .swiper-button-next",
      prevEl: ".section-7__swipers .swiper-button-prev",
    },
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
}
if (document.querySelector(".section-10__swiper")) {
  new Swiper(".section-10__swiper", {
    spaceBetween: 30,
    slidesPerView: "auto",
    pagination: {
      el: ".section-10__control .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".section-10__control .swiper-button-next",
      prevEl: ".section-10__control .swiper-button-prev",
    },
  });
}
if (document.querySelector(".section-14__swiper-big")) {
  new Swiper(".section-14__swiper-big", {
    spaceBetween: 5,
    slidesPerView: 1,
    touchMove: false,
    draggable: false,
    pagination: {
      el: ".section-14__control .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".section-14__control .swiper-button-next",
      prevEl: ".section-14__control .swiper-button-prev",
    },
    breakpoints: {
      767.98: {
        slidesPerView: 2,
      },
      991.8: {
        slidesPerView: 3,
      },
    },
  });
}
if (document.querySelectorAll(".section-14__slide").length > 0) {
  const swipers = document.querySelectorAll(".section-14__slide-top");
  if (swipers.length > 0) {
    swipers.forEach((swiperTop) => {
      const top = swiperTop.querySelector(".section-14__swiper");
      const bottom = swiperTop.querySelector(".section-14__thumbswiper");
      const prev = swiperTop.querySelector(
        ".section-14__swiper .swiper-button-prev"
      );
      const next = swiperTop.querySelector(
        ".section-14__swiper .swiper-button-next"
      );

      const thumbSwiper = new Swiper(bottom, {
        spaceBetween: 8,
        slidesPerView: 4,
      });
      new Swiper(top, {
        spaceBetween: 10,
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        thumbs: {
          swiper: thumbSwiper,
        },
      });
    });
  }
}

