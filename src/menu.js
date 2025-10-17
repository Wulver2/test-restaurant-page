import cacio from "./imgs/Cacio_e_Pepe.jpg"
import pizza from "./imgs/Margherita_Pizza.jpg"

export function menuInfo() {
    var menu = document.createElement("div");
    var heading = document.createElement("h1")
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    var c = document.createElement("p");
    var m = document.createElement("p");

    menu.id = "menu"
    img1.src = cacio;
    c.textContent = "Cacio e Pepe";
    img2.src = pizza;
    m.textContent = "Margherita Pizza";
    heading.textContent = "Menu";
   
    menu.appendChild(img1);
    menu.appendChild(img2);
    menu.appendChild(c);
    menu.appendChild(m);
    heading.append(menu);
    return heading;
};