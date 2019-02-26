let effects = {};

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