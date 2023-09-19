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
    // div.onclick(openBigImage());
    return div;
};

// const openBigImage = async () => {

// }

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


/* D-groups onlcick grej i fo*/


/*export default function CardGrid({ user }) {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
      setOpen(!open);
    };
    return (
      <Box
        onClick={handleClick}
        sx={{
          borderRadius: 20 + "px",
          cursor: "pointer",
          boxShadow: "2px 2px 10px #D3D3D3",
        }}
      >
        <Grid container sx={{width: '100%'}}>
          <ThemeProvider theme={questionTheme}>
            <Grid xs={5}>
              <SmallP src={user.smallImage} />
              <BigP src={user.image} />
            </Grid>
            <Grid xs={7} sx={{ py: '2em', px: '1em' }}>
              <Typography variant="h5" guttomButtom>
                {user.name}
              </Typography>
              <Typography variant="h6" guttomButtom>
                {user.post}
              </Typography>
              <Typography variant="h6" guttomBottom>
                <a href={"mailto:" + user.email}>{user.email}</a>
              </Typography>
              <DGLogo src={dg_logo}></DGLogo>
            </Grid>
          </ThemeProvider>
        </Grid>
  
        <Modal open={open} onClose={handleClick}>
          <Box sx={style}>
            <Grid container>
              <Grid xs={12}>
                <img
                  src={user.image}
                  alt="Gropies"
                  height="300vh"
                  width="300vh"
                  style={{
                    marginTop: 10,
                    marginLeft: 25,
                    objectFit: "cover",
                    borderRadius: 100 + "%",
                  }}
                />
              </Grid>
  
              <Grid xs={12}>
                <Questions user={user} />
              </Grid>
              <Grid>
                <Button variant="contained" onclick={handleClick} sx={{ ml: 17 }}>
                  close
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </Box>
    );*/

