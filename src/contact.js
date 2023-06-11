export default function contact(content){
    let liveContact = document.createElement("div");
    liveContact.innerHTML = `
        Mob - +91 101 101 101 101
        Address - Near Capital Road, JanPath, Mumbai, Maharashtra-403 208.
    `;
    content.appendChild(liveContact);
}