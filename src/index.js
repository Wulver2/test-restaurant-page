import "./style.css";
import {content} from "./content.js";
import {menuInfo} from "./menu.js";
import { about } from "./about.js";

function tab_switch(tab) {
    // erase content of div#content
    var div = document.getElementById("content");
    div.textContent = "";
    // replace it with content from the selected tab
    var replacement;
    if (tab == "Menu") {
        replacement = menuInfo();
        div.appendChild(replacement);
    }
    else if (tab == "Home") {
        content();
    }
    else if (tab == "About") {
        replacement = about();
        div.appendChild(replacement);
    }
    //add others later
    
};

var tab = document.getElementsByTagName("button");
for (var i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function() {
        tab_switch(this.textContent);
    });
}
content();
console.log("hello!");