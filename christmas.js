const makeSnow = () => {
    const header = document.getElementById('theheader');
    const snowContainer = document.createElement('div');
    snowContainer.className = 'snowflakes';
    for (let i = 0; i < 15; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.innerText = '❅';
        snowContainer.appendChild(flake);
    }
    header.appendChild(snowContainer);
}


const createGarland = () => {
    const garlandContainer = document.getElementById('theheader');
    const garland = document.createElement('img');
    garland.className = 'christmas-garland';
    garland.src = 'files/christmas-Holly.png'
    garlandContainer.prepend(garland);
    const garland_mirror = document.createElement('img');
    garland_mirror.className = 'christmas-garland-mirror';
    garland_mirror.src = 'files/christmas-Holly.png'
    garlandContainer.prepend(garland_mirror);
}

createGarland();

makeSnow();
