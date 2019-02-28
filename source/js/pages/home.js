import 'bootstrap';
import Swiper from 'swiper';
import { effects } from './../comps/effects';
import { Panel } from './../comps/panels';
import { products } from './../data/products';
import { linksArray } from './../data/links';
import { dataController } from './../comps/dataCtrl';

dataController.footerMenu({
    menus: linksArray,
    wrap: '.footer .footer-menu',
})
effects.searchHoverDesktop({
    formSearch: '.bar-desktop--search',
    inputSearch: '#input-search-desktop',
    fadeInClass: 'search-bar-slide-in',
    fadeOutClass: 'search-bar-slide-out'
});

effects.mainMenuDropdown({
    triggers: '.main-menu--dropdown-trigger',
    targets: '.main-menu--dropdown-wrap',
    slideInClass: 'main-menu-dropdown-slide-in',
    slideOutClass: 'main-menu-dropdown-slide-out'
})

const configsSwiperProducts = {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {
        delay: 5500,
        disableOnInteraction: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        575:{
            slidesPerView: 1,
            spaceBetween: 0
        },
        992:{
            slidesPerView: 2,
            spaceBetween: 30
        },
        1023:{
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
},
swiperModule = Swiper;

let featuredPanel = new Panel({
    swiper: swiperModule,
    container: '.featured .swiper-container',
    wrapper: '.featured .swiper-wrapper',
    swiperConfigs: configsSwiperProducts,
    data: products.featured
})

let specialsPanel = new Panel({
    swiper: swiperModule,
    container: '.specials .swiper-container',
    wrapper: '.specials .swiper-wrapper',
    swiperConfigs: configsSwiperProducts,
    data: products.specials
})

let slideShowHome = new Swiper('.slide-show .swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })