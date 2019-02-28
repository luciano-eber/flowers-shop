export default class Product{
    constructor(config){
        this.title = config.title;
        this.thumb = config.thumb;
        this.img = config.img;
        this.price = config.price;
        (!config.pricePromo) 
            ? this.pricePromo = false : this.pricePromo = config.pricePromo;
        (!config.sale)
            ? this.sale = false : this.sale = true;
        (!config.new)
            ? this.new = false : this.new = true;
    }
}