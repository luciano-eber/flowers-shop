import {link, linkList} from './../models/link';

let linksArray = [];

let categories = new linkList({
    title: 'categories',
    list:[
        new link({ href:'/corporate', display: 'corporate' }),
        new link({ href:'/love&romance', display: 'love & romance' }),
        new link({ href:'/sympathy', display: 'sympathy' }),
        new link({ href:'/newBaby', display: 'new baby' }),
    ],
    dataArray: linksArray,
});

let information = new linkList({
    title: 'information',
    list:[
        new link({ href: '/about', display: 'about' }),
        new link({ href: '/deliveryInformation', display: 'delivery information' }),
        new link({ href: '/privacypolicy', display: 'privacy policy' }),
        new link({ href: '/terms&conditions', display: 'terms & conditions' }),
        new link({ href: '/blog', display: 'blog' }),
    ],
    dataArray: linksArray,
});

let myAccount = new linkList({
    title: 'my account',
    list: [
        new link({ href: '/myAccount', display: 'My Account' }),
        new link({ href: '/orderHistory', display: 'order history' }),
        new link({ href: '/wishlist', display: 'whis list' }),
        new link({ href: '/newsletter', display: 'News Letter' }),
    ],
    dataArray: linksArray,
});

export{ linksArray };