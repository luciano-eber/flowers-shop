let effects = {};

effects.mainMenuDropdown = (s) => {

    let triggers = $(s.triggers),
    getTarget = ($this) => { return $this.find(s.targets) },
    mouseover = function(){
        let target = getTarget($(this));
        target.removeClass(s.slideOutClass);
        target.addClass(s.slideInClass);
    },
    mouseout = function(){
        let target = getTarget($(this));
        target.removeClass(s.slideInClass);
        target.addClass(s.slideOutClass);
    }

    triggers.each((i,t)=>{
        $(t).on('mouseover',mouseover);
        $(t).on('mouseout', mouseout);
    })


}

effects.searchHoverDesktop = (s) => {
    let searchBar = $(s.inputSearch),
    formSearch = $(s.formSearch);

    formSearch.on('mouseover', () => over(s));
    formSearch.on('mouseout', () => out(s));

    let over = (s)=> {
        searchBar.removeClass(s.fadeOutClass);
        searchBar.addClass(s.fadeInClass);
    },
    out = (s) => {  
        searchBar.removeClass(s.fadeInClass);
        searchBar.addClass(s.fadeOutClass);
    }

    formSearch.on('submit',(e)=>e.preventDefault());
    
}

export {effects};