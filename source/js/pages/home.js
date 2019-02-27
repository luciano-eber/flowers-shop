import 'bootstrap';
import Swiper from 'swiper';
import {effects} from './../comps/effects';

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
