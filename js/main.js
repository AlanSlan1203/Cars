$(function(){
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true
    });
    
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false
    })
});