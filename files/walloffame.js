const getYearPost = c => {
    
    const div = document.createElement("div");
    div.className = "wall-card";
    const img = document.createElement("img");
    img.src = c.thumbnail;
    img.alt = c.year;
    
    const h1 = document.createElement("h1");
    h1.innerText = c.year;
    
    div.appendChild(img);
    div.appendChild(h1);
    // Onclick function for the button that opens the larger image
     div.onclick = function() {
        const wrapper = document.getElementById("image-wrapper");
        wrapper.style.display = "block";
        // const modal = document.getElementById("enlarged-image-window");
        // modal.style.margin = "0 auto auto auto"
        // modal.style.marginLeft = "auto"
        // modal.style.marginRight = "auto"
        const image = document.getElementById("enlarged-image");
        // const offset = getOffset(image);
        // modal.style.marginTop = offset + "px";
        // modal.style.marginBottom = offset + "px";*/
        image.src = c.img;

    }

    return div;
};


const getOffset = image => {
    //behöver anpassa efter om den är bredare än skärmen eller högre än skärmen så att det blir dynamiskt 
    const winHeight = window.innerHeight;
    const imgHeight = image.naturalHeight;
    const imh = image.height;
    var relH = winHeight/imgHeight;

    console.log("window height", winHeight);
    console.log("image height on screen ", imgHeight);
    console.log("actual image height on screen", imh);
    console.log("relative height", relH);
    

    const offset = ((winHeight - imh)/2);
    console.log("offset", offset);
    return  offset;

}

const bigImage = async () => {
  // Onclick function to close the modal when clicking outside
  const wrapper = document.getElementById("image-wrapper");
  wrapper.onclick = function(event) {
    const wrapper = document.getElementById("image-wrapper");
    if (event.target == wrapper) {
      wrapper.style.display = "none";
    }
  }
}

const makeWall = async () => {
    if (getLoc() != "walloffame") 
        return;
    const maindiv = document.getElementById("wof-container");
    const response = await fetch('/files/wall-of-fame.json');
    const years = await response.json();
    for (const y of years) {
        maindiv.appendChild(getYearPost(y));
    }
};

makeWall();
bigImage();
