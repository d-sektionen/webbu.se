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
        const modal = document.getElementById("enlarged-image-window");
        wrapper.style.display = "block";
        modal.style.margin = "1em auto auto auto"
        const image = document.getElementById("enlarged-image");
        image.src = c.img;
    }

    getOffset(img);
    return div;
};


const getOffset = image => {
    //behöver anpassa efter om den är bredare än skärmen eller högre än skärmen så att det blir dynamiskt 
    const winHeight = window.screen.availHeight;
    const winWidth = window.screen.availWidth;
    const imgWidth = image.width;
    const imgHeight = image.height;
    var relH = winHeight/imgHeight;

    console.log(winHeight);
    console.log(winWidth);
    console.log(imgHeight);
    console.log(imgWidth);
    console.log(relH);

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
