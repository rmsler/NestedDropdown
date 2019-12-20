import { MenuItem } from "./modules/MenuItem.js";

$.getJSON("config.json", function(data) {
  let menuItem = new MenuItem(data);
  menuItem.init(".top-level-menu", "config");
});
