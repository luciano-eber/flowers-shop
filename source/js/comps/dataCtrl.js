let dataController = {};

dataController.footerMenu = (s)=> {
    let menus = s.menus,
    wrap = $(s.wrap);

    menus.forEach(menu => {
        let templateLi = eachMenu(menu.list);
        let template = `    
            <div class="footer--list">
                <p class="footer--list-title text-uppercase">${menu.title}</p>
                    <ul class="footer--list-ul">
                        ${templateLi}
                    </ul>
            </div>
        `;
        wrap.prepend(template);
    })

    function eachMenu(listMenu){
        let template = '';
        listMenu.forEach(menu => {
            template = template + `
                <li class="footer--list-li text-capitalize">
                    <a href="${menu.href}">${menu.display}</a>
                </li>
            `;
        })
        return template;
    }
}

export { dataController };