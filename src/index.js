import restaurantHeader from "./restaurantHeader";
import restaurantDescription from "./restaurantDescription";
import restaurantNav from "./restaurantNav";
import menu from "./menu";
import contact from "./contact";

const content = document.querySelector("#content");
restaurantHeader(content);
restaurantNav(content);
restaurantDescription(content);

function changeTab(tab){
    switch(tab.dataset.tab){
        case "Home": restaurantDescription(content);
                     break;
        
        case "Menu": menu(content);
                     break;

        case "Contact": contact(content);
                        break;

        default: restaurantDescription(content);
    }
}

const tabs = document.querySelectorAll(".navTab");
tabs.forEach(tab => tab.addEventListener("click", function() {changeTab(tab)}));
