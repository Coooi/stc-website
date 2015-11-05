
$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1000,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
    });
});