const getYearPost = c => {
    
    const div = document.createElement("div");
    div.className = "wall-card";
    const img = document.createElement("img");
    img.src = c.thumbnail;
    img.alt = c.year;
    img.className = "wall-img"
    
    const h1 = document.createElement("h1");
    h1.innerText = c.year;
    h1.className = "wall-h1"
    
    div.appendChild(img);
    div.appendChild(h1);
    // Onclick function for the button that opens the larger image
     div.onclick = function() {
        const wrapper = document.getElementById("image-wrapper");
        wrapper.style.display = "block";
        const image = document.getElementById("enlarged-image");
        image.src = c.img;

    }
    return div;
};

const giveOnClick = async () => {
  // Onclick function to close the modal when clicking outside
  const wrapper = document.getElementById("image-wrapper");
  wrapper.onclick = function(event) {
    const wrapper = document.getElementById("image-wrapper");
    if (event.target == wrapper) {
      document.getElementById("enlarged-image").src = "";
      wrapper.style.display = "none";
    }
  }
}

const makeWall = async () => {
    if (getLoc() != "deprecated")
        return;
    const maindiv = document.getElementById("wof-container");
    const response = await fetch('/files/wall-of-fame.json');
    const years = await response.json();
    years.sort((a, b)=>b.year.localeCompare(a.year))
    for (const y of years) {
        maindiv.appendChild(getYearPost(y));
    }
};

makeWall();
giveOnClick();
