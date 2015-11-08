
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
    $('.video-overlay--dark').click(function() {
        var video = $('#stc-video');
        video.get(0).paused ? video.get(0).play() : video.get(0).pause();
        console.log('play');
    });
});