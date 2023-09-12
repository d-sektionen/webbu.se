const getContactBox = c => {
    const div = document.createElement("div");
    div.className = "contact-card";
    const img = document.createElement("img");
    img.src = c.img;
    img.alt = c.name;
    const div2 = document.createElement("div");
    
    const h2 = document.createElement("h2");
    h2.innerText = c.name + "\n";
    const span = document.createElement("span");
    span.className = "position";
    span.innerText = c.pos;
    h2.appendChild(span);
    div2.appendChild(h2);
    
    const p = document.createElement("p");
    p.innerText = c.des;
    div2.appendChild(p);
    
    const a = document.createElement("a");
    a.className = "contact-mail";
    a.href = "mailto:" + c.mail;
    a.innerText = c.mail;
    div2.appendChild(a);
    
    div.appendChild(img);
    div.appendChild(div2);
    return div;
};

const fillContacts = async () => {
    if (getLoc() != "contact")      // getLoc() ligger i include-components
        return;
    const mainBox = document.getElementById("contactWrapper");
    const response = await fetch('/files/members.json');
    const members = await response.json();
    for (const c of members) {
        mainBox.appendChild(getContactBox(c));
    }
};


fillContacts();