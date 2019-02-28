export class Panel{
    constructor(config){
        this.swiper = config.swiper;
        this.container = $(config.container);
        this.wrapper = $(config.wrapper);
        this.swiperConfigs = config.swiperConfigs;
        this.data = config.data;
        this._buildData().then(()=>{
            this._buildSwiper();
        });
        
    }

    _buildData(){
        return new Promise((resolve)=>{
            this.data.forEach(d => {
                let templateProduct = this._templateProduct(d);
                this.wrapper.append(templateProduct);
            })
            resolve();
        })
    }

    _buildSwiper(){ return new this.swiper(this.container, this.swiperConfigs) }

    _templateProduct(data){
        let template,
        legend,
        price;

        if(data.sale && !data.new) legend = `
            <legend class="product--title">
                ${data.title}
            </legend>
            <span class="product--badge sale my-btn-sm btn-sale">sale</span>
        `; 
        if(data.new && !data.sale) legend = `
            <legend class="product--title">
                ${data.title}
            </legend>
            <span class="product--badge sale my-btn-sm btn-new position-absolute">New</span>
        `;
        if(!data.sale && !data.new) legend = `
            <legend class="product--title">${data.title}</legend>
        `;


        if(data.pricePromo) price = `
            <div class="product--price">
                <span class="price mr-2">R$${data.pricePromo.toFixed(2)}</span>
                <span class="promo">R$${data.price.toFixed(2)}</span>
            </div>
        `; else price = `
            <div class="product--price">
                <span class="price">R$${data.price.toFixed(2)}</span>
            </div>
        `

        template = `
            <div class="swiper-slide product d-flex align-items-center justify-content-center flex-column">
                <div class="product--header">
                    <figure class="product--fig d-flex align-items-center flex-column">
                        <img class="product--img img-responsive" src="${data.thumb}">
                        ${legend}
                    </figure>
                </div>
                <div class="product--body d-flex align-items-center justify-content-center flex-column">
                    ${price}
                    <div class="product--actions">
                        <button class="my-btn btn-shop"><i class="icon-shopping-cart"></i>Add to cart</button>
                    </div>
                </div>
            </div>
        `;
        return template;
    }
}