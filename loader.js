import { MenuItem } from "./modules/MenuItem.js";
import { MenuNode } from "./modules/MenuNode.js";

$.getJSON("config.json", function(data) {
  let menu = data.config;
  let list = [];
  menu.forEach((item) => {
    let newItem = new MenuNode(item)
    list.push(newItem);
    newItem.render(".top-level-menu");
  });
  // console.log(list);

  // let menuItem = new MenuItem(data);
  // menuItem.init(".top-level-menu", "config");
});
