import Product from './../models/product';

let imgPath = 'img/products/p';

export const products = {
    featured:[
        new Product({
            title: 'Happy Birthday Kalanchoe Basket',
            thumb: `${imgPath}8.png`,
            img: `${imgPath}8.png`,
            price: 40.00,
            pricePromo: 32.00,
            sale: true,
        }),
        new Product({
            title: 'Heavenly Red Rose Hand tied',
            thumb: `${imgPath}2.png`,
            img: `${imgPath}2.png`,
            price: 32.00,
        }),
        new Product({
            title: 'Autumn Basket',
            thumb: `${imgPath}3.png`,
            img: `${imgPath}3.png`,
            price: 24.00,
            pricePromo: 19.20,
            sale: true
        }),
        new Product({
            title: 'Sunflower Hand tied',
            thumb: `${imgPath}4.png`,
            img: `${imgPath}4.png`,
            price: 20.00,
            pricePromo: 16.00,
            new: true
        }),
        new Product({
            title: 'Autumn Shades Perfect Gift',
            thumb: `${imgPath}5.png`,
            img: `${imgPath}5.png`,
            price: 22.40,
            sale: true
        }),
    ],
    specials:[
        new Product({
            title: 'Autumn Brights Globe',
            thumb: `${imgPath}6.png`,
            img: `${imgPath}6.png`,
            price: 27.00,
            pricePromo: 21.60,
            sale: true
        }),
        new Product({
            title: 'Baby-boy Perfect Gift',
            thumb: `${imgPath}7.png`,
            img: `${imgPath}7.png`,
            price: 28.00,
            pricePromo: 22.40,
            sale: true
        }),
        new Product({
            title: 'Autumn Shades',
            thumb: `${imgPath}8.png`,
            img: `${imgPath}8.png`,
            price: 32.00,
            pricePromo: 25.40,
            sale: true
        }),
        new Product({
            title: 'Sunflower Hand tied',
            thumb: `${imgPath}1.png`,
            img: `${imgPath}1.png`,
            price: 20.00,
            pricePromo: 16.00,
            new: true
        }),
    ]
}