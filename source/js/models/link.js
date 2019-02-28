class link{
    constructor(config){
        this.href = config.href;
        this.display = config.display;
    }
}
class linkList{
    constructor(config){
        this.title = config.title;
        this.list = config.list;

        if(config.dataArray && Array.isArray(config.dataArray))
            config.dataArray.push(this);
    }
}

export { link, linkList };