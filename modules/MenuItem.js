function MenuItem (componentsArray){
    if (!(this instanceof MenuItem)) {
        return new MenuItem(componentsArray);
    }
    this.componentsArray = componentsArray;
}

Object.assign(MenuItem.prototype, {
    init: function(node, parentConfig, component = null) {
      //iterate and construct models
      let componentsArray = this.componentsArray;
      if(component === null){
          component = componentsArray[parentConfig];
      }
      console.log(component + "component")
      console.log(component.length);
      this.goThroughArray(node, component)
    },
    goThroughArray: function(node,component){
        for(let i= 0; i<component.length ; i++ ){
            this.nodeDecider(node, component[i]);
        }

    },
    nodeDecider: function(node, object){
        let element = this.render(node, object.label);
        if(object.submenu !== undefined){
            let wrapper = this.createParentNode(element, object.label);
            this.goThroughArray(wrapper, object.submenu);
        }
    },
    createParentNode: function(wrapper, label){
        let domElement = document.createElement("ul");
        let depth = (label.toString().replace(/ /g,'').replace(/\./g,"_").toLowerCase().match(new RegExp("_", "g"))|| []).length;
        domElement.classList.add("level_"+(depth+1)+"_menu");
        $(wrapper).append(domElement);
        return domElement;
    },
    render: function(wrapper, label) {
        let domElement;
        domElement = document.createElement("li");
        let name = document.createElement("a");
        let textchild = document.createTextNode(label);
        name.appendChild(textchild);
        domElement.appendChild(name);
        
        $(wrapper).append(domElement);
        return domElement;
    }
});

export { MenuItem };

