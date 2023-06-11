export default function menu(content){
    let liveMenu = document.createElement("div");
    liveMenu.innerHTML = `
            <div>
            <img src="../images/butter_chicken.jpg" alt="">
            <h3>Biryani</h3>
        </div>
        <div>
            <img src="../images/dosa.jpg" alt="">
            <h3>Biryani</h3>
        </div>
        <div>
            <img src="../images/misal_pav.jpg" alt="">
            <h3>Biryani</h3>
        </div>
        <div>
            <img src="../images/biryani.jpg" alt="">
            <h3>Biryani</h3>
        </div>
    `;
    content.appendChild(liveMenu);
}