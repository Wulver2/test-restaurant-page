export function menuInfo() {
    var menu = document.createElement("div");
    var heading = document.createElement("h1")
    heading.textContent = "Menu";
    // append everything to menu and return it
    menu.appendChild(heading);
    return menu;
};