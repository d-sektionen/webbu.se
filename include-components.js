const getLoc=()=>{
    const arr = window.location.href.split("/");
    return arr[arr.length - 1].split(".")[0];
}

const getHeaderLogo = ()=>{
    const logoImg= document.createElement("img");
    logoImg.src = "webbu-logo-inverted.png";
    const logoA = document.createElement("a");
    logoA.href = "index.html";
    logoA.appendChild(logoImg);
    const header = document.createElement("header");
    header.appendChild(logoA);
    return header;
};

const getNavA= (text, href, selected)=>{
    const nav = document.createElement("a");
    nav.innerText = text;
    nav.href = href;
    nav.className = selected ? "selected" : "";
    return nav;
};

const getHeader = ()=>{
    const loc =getLoc();

    const navA1 = getNavA("Om oss","index.html", loc=="index" || loc=="");
    const navA2 = getNavA("Tjänster","services.html", loc=="services");
    const navA3 = getNavA("Hackathon","hackathon.html", loc=="hackathon");
    const navA4 = getNavA("Kontakt","contact.html", loc=="contact");
    
    const nav = document.createElement("nav");
    nav.appendChild(navA1);
    nav.appendChild(navA2);
    nav.appendChild(navA3);
    nav.appendChild(navA4);

    const navBar = document.createElement("div");
    navBar.appendChild(nav);
    navBar.id = "navBar";
    return navBar;
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
document.body.prepend(getHeaderLogo());
document.body.appendChild(getFooter());


const getContactBox= (c)=>{
    const div = document.createElement("a");

//     <div class="contact-card">
//     <img src="johndoe.png">
//     <div>
//     <h2>
//         Isak Horvath </br> <span class="position">Webmaster</span>
//     </h2>
//     <p>
//         webmaster@d-sektionen.se
//     </p>
//     <!--“kontakta mig vid allmänna frågor om webbutskottet och dess verksamhet”-->
//     </div>
// </div>
    div.className = "contact-card";


    return div;
};
const fillContacts = ()=>{
    if(getLoc() != "contact")
        return;
    const cs = [];
    for (const c of cs) {
        getContactBox(c);
    }
};
fillContacts();
