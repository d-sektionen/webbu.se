const getLoc = () => {
    const arr = window.location.href.split("/");
    return arr[arr.length - 1].split(".")[0];
}

const getHeaderLogo = () => {
    const logoImg = document.createElement("img");
    logoImg.src = "files/webbu-logo-inverted.png";
    logoImg.alt = "Till startsidan för Webbutskottet";
    const logoA = document.createElement("a");
    logoA.href = "index.html";
    logoA.appendChild(logoImg);
    const header = document.createElement("header");
    header.id = 'theheader';
    header.appendChild(logoA);
    return header;
};

const getNavA = (text, href, selected) => {
    const nav = document.createElement("a");
    nav.innerText = text;
    nav.href = href;
    nav.className = selected ? "selected" : "";
    return nav;
};

const getNav = () => {
    const loc = getLoc();

    const navA1 = getNavA("Om oss", "https://www.webbu.se", loc == "index" || loc == "");
    const navA2 = getNavA("Tjänster", "services", loc == "services");
    const navA3 = getNavA("Hackathon", "hackathon", loc == "hackathon");
    const navA4 = getNavA("Kontakt", "contact", loc == "contact");

    const nav = document.createElement("nav");
    nav.appendChild(navA1);
    nav.appendChild(navA2);
    nav.appendChild(navA3);
    nav.appendChild(navA4);

    nav.id = "navBar";
    return nav;
};

const getFooter = () => {
    const footerA = document.createElement("a");
    footerA.href = "mailto:webmaster@d-sektionen.se";
    footerA.textContent = "webmaster@d-sektionen.se";

    const footerP = document.createElement("p");
    footerP.innerText = "WebbU © 2022 | ";
    footerP.appendChild(footerA);

    const footer = document.createElement("footer");
    footer.appendChild(footerP);

    return footer;
};

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
    if (getLoc() != "contact")
        return;
    const mainBox = document.getElementById("contactWrapper");
    const response = await fetch('/files/members.json');
    const members = await response.json();
    for (const c of members) {
        mainBox.appendChild(getContactBox(c));
    }
};

document.body.prepend(getNav());
document.body.prepend(getHeaderLogo());
document.body.appendChild(getFooter());

fillContacts();
