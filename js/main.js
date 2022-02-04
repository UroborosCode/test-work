$(function () {
    $('.first-box__bg-slider').slick({
        dots: false,
        arrows: false,
        asNavFor: '.first-box__slider-nav',
        fade: true,
    });
    $('.first-box__slider-nav').slick({
        dots: true,
        arrows: false,
        asNavFor: '.first-box__bg-slider',
    });
})