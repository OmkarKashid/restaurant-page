export default function restaurantDescription(content){
    let description = document.createElement("p");
    description.innerHTML = `
    Here, ancient customs and future trends coexist, and the intricacies of 
    Delicious culture blend seamlessly together over an Ethiopian-brewed coffee, 
    or a bowl of Senegalese black-eyed pea stew and a side of spicy Ghanaian plantains.
    Inspired by our Co-Founder and Executive Chef Pierre Thiam’s mission to share 
    Delicious culture through food, Teranga reflects the depth, richness, and vibrancy 
    of Delicious’s diverse culinary traditions in a modern, fast-casual setting. 
    `;
    content.appendChild(description);
}