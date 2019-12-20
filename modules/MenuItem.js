function MenuItem (componentsArray){
    if (!(this instanceof MenuItem)) {
        return new MenuItem(componentsArray);
    }
    this.componentsArray = componentsArray;
    this.domReference = null;
    this.lastLabel = null;
    this.menulevel = 0;
}

Object.assign(MenuItem.prototype, {
    init: function(node, parentConfig, component = null) {
      //iterate and construct models
      console.log(component)
      this.lastLabel = node;
      let componentsArray = this.componentsArray;
      if(component === null){
          component = componentsArray[parentConfig];
      }
      for(let i= 0; i<component.length ; i++ ){
            console.log(i);
            this.nodeDecider(this.lastLabel, component[i]);
      }
    },

    nodeDecider: function(node, object, parentConfig){
        console.log(object.label+ "  -label-  ");
        console.log(node + "  -label-node-  ");
        let label = this.render(node, object.label);
        this.lastLabel = label;
        if(object.submenu !== undefined){
            this.init(this.lastLabel, "submenu", object.submenu);
        }
    },

    render: function(wrapper, label) {
        let domElement;
        let depth = (label.toString().replace(/ /g,'').replace(/\./g,"_").toLowerCase().match(new RegExp("_", "g"))|| []).length;
        if(depth !== this.menulevel){
            domElement = document.createElement("ul");
            domElement.classList.add("level_"+depth+"_menu");
            

            let li = document.createElement("li");
            
            let name = document.createElement("a");
            let textchild = document.createTextNode(label);
            name.appendChild(textchild);
            li.appendChild(name);
            domElement.appendChild(li);
            this.menulevel = depth;
        }
        else{
            domElement = document.createElement("li");
            let name = document.createElement("a");
            let textchild = document.createTextNode(label);
            name.appendChild(textchild);
            domElement.appendChild(name);
        }

        this.domReference = domElement;
        $(wrapper).append(domElement);
        return domElement;
    }
});

export { MenuItem };

