const getLoc = () => {
    const arr = window.location.href.split("/");
    return arr[arr.length - 1].split(".")[0];
}

const getHeaderLogo = () => {
    const logoImg = document.createElement("img");
    logoImg.src = "files/img/webbu-logo-inverted.png";
    logoImg.alt = "Till startsidan för Webbutskottet";
    const logoA = document.createElement("a");
    logoA.href = "https://www.webbu.se";
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
    const navA5 = getNavA("Deprecated","deprecated", loc == "deprecated");

    const nav = document.createElement("nav");
    nav.appendChild(navA1);
    nav.appendChild(navA2);
    nav.appendChild(navA3);
    nav.appendChild(navA4);
    nav.appendChild(navA5);

    nav.id = "navBar";
    return nav;
};

const getFooter = () => {
    const footerA = document.createElement("a");
    footerA.href = "mailto:webmaster@d-sektionen.se";
    footerA.textContent = "webmaster@d-sektionen.se";

    const footerA2 = document.createElement("a");
    footerA2.href = "https://www.facebook.com/webbutskottet/";
    footerA2.id = "facebook-link";

    const facebook = document.createElement("img");
    facebook.src = "files/img/facebook.png";
    facebook.id = "facebook";
    facebook.alt = "Facebook till WebbU";
    footerA2.appendChild(facebook);

    const footerP = document.createElement("p");
    footerP.innerText = "WebbU © " + new Date().getFullYear() + " | ";
    footerP.id = "footer-p";
    footerP.appendChild(footerA);
    footerP.innerHTML += " ";
    footerP.appendChild(footerA2);

    const footer = document.createElement("footer");
    footer.appendChild(footerP);

    // Add sponsors if before march and 2024
    if (new Date().getMonth() < 2 && new Date().getFullYear() == 2024) {
        const sponsors = document.createElement("div");
        sponsors.id = "footer-spons";
        sponsors.innerHTML = `
            <p> |</p>
            <a href="https://www.mindroad.se/">
                <img src="files/img/sponsor/mindroad.png" alt="Mindroad">
            </a>
            <a href="https://www.opera.com/">
                <img src="files/img/sponsor/opera-white.png" alt="Opera">
            </a>
            <a href="https://www.goto10.se/">
                <img src="files/img/sponsor/goto10.png" alt="Goto 10">
            </a>
        `;
        footer.appendChild(sponsors);
    }

    return footer;
};

document.body.prepend(getNav());
document.body.prepend(getHeaderLogo());
document.body.appendChild(getFooter());
