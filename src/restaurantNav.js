export default function restaurantNav(content){
    let nav = document.createElement("div");
    nav.innerHTML = `
    <ul>
        <li class="navTab" data-tab="Home">Home</li>
        <li class="navTab" data-tab="Menu">Menu</li>
        <li class="navTab" data-tab="Contact">Contact</li>
    </ul>   
    `;
    content.appendChild(nav);
}