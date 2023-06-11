export default function restaurantHeader(content){
    let header = document.createElement("header");
    header.innerHTML = `
        <span>
            <img src="../images/logo.jpg">
            <h2>Delicious</h2>
        </span>
        <p>Restaurant serving fresh, tasty and beautiful food for 2 decades!</p>
   `;
    content.appendChild(header);
}