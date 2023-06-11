export default function restaurantNav(content){
    let nav = document.createElement("div");
    nav.innerHTML = `
    <ul>
        <li class="navTab">Home</li>
        <li class="navTab">Menu</li>
        <li class="navTab">Contact</li>
    </ul>   
    `;
    content.appendChild(nav);
}