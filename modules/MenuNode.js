function MenuNode (item){
    if (!(this instanceof MenuNode)) {
        return new MenuNode(item);
    }
    this.label = item.label;
    this.submenu = [];

    if (item.submenu && item.submenu.length) {
        item.submenu.forEach((submenuItem) => {
            let submenuNode = new MenuNode(submenuItem);
            this.submenu.push(submenuNode);
        });
    }
}

Object.assign(MenuNode.prototype, {
    render: function(wrapper) {
        let domElement;
        domElement = document.createElement("li");
        domElement.classList.add("menu-item");
        let name = document.createElement("a");
        let textchild = document.createTextNode(this.label);
        name.appendChild(textchild);
        domElement.appendChild(name);
        $(wrapper).append(domElement);
        if (this.submenu && this.submenu.length) {
            if(this.submenu.length > 0 ){
                domElement.classList.add("arrow");
                let newdomElement = document.createElement("ul");
                newdomElement.classList.add("submenu");
                $(domElement).append(newdomElement);
                this.submenu.forEach((submenuItem) => {
                    submenuItem.render(newdomElement);
                });
            }
            else{
                submenuItem.render(wrapper);
            }
        }
    }
    
});

export { MenuNode };

