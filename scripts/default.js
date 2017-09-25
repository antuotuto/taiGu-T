var Swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: false,
    mousewheelControl: true,
    speed: 400,
    direction: 'vertical',
    initialSlide: 0,
    onInit: function (swiper) {
        $('.slide-index .animated').addClass('active')
    },
    onSlideChangeEnd: function (swiper) {
        if (swiper.activeIndex == 0) {
            $('.slide-forth .animated').removeClass('active')
            $('.slide-second .animated').removeClass('active')
            $('.slide-index .animated').addClass('active')
        }
        if (swiper.activeIndex == 1) {
            $('.slide-index .animated').removeClass('active')
            $('.slide-third .animated').removeClass('active')
            $('.slide-second .animated').addClass('active')
        }
        if (swiper.activeIndex == 2) {
            $('.slide-second .animated').removeClass('active')
            $('.slide-forth .animated').removeClass('active')
            $('.slide-third .animated').addClass('active')
        }
        if (swiper.activeIndex == 3) {
            $('.slide-third .animated').removeClass('active')
            $('.slide-fifth .animated').removeClass('active')
            $('.slide-forth .animated').addClass('active')
        }
        if (swiper.activeIndex == 4) {
            $('.slide-index .animated').removeClass('active')
            $('.slide-forth .animated').removeClass('active')
            $('.slide-fifth .animated').addClass('active')
        }
    }
});