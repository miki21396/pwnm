var mySwiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    //ページネーション
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

    loop: true,
    slidesPerView: 3,
    spaceBetween: 20

});