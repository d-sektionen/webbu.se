const getNavA= (text, href, selected)=>{
    const nav = document.createElement("a");
    nav.innerText = text;
    nav.href = href;
    nav.className = selected ? "selected" : "";
    return nav;
}

const getHeader = ()=>{
    const logoImg= document.createElement("img");
    logoImg.src = "webbu-logo.png";
    const logoA = document.createElement("a");
    logoA.href = "/";
    logoA.appendChild(logoImg);
    
    const arr = window.location.href.split("/");
    const loc = arr[arr.length - 1].split(".")[0];

    const navA1 = getNavA("Om oss",".", loc=="");
    const navA2 = getNavA("Tjänster","services.html", loc=="services");
    const navA3 = getNavA("Hackathon","hackathon.html", loc=="hackathon");
    const navA4 = getNavA("Kontakt","contact.html", loc=="contact");
    
    const nav = document.createElement("nav");
    nav.appendChild(navA1);
    nav.appendChild(navA2);
    nav.appendChild(navA3);
    nav.appendChild(navA4);

    const header = document.createElement("header");
    header.appendChild(logoA);
    header.appendChild(nav);
    
    return header;
};

const getFooter = ()=>{
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

document.body.prepend(getHeader());
document.body.appendChild(getFooter());