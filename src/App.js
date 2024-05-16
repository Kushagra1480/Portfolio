import { Avatar, Box, Grid, List, ListItem, Stack, Typography, Item, Card, CardMedia, CardContent, CardHeader, CardActionArea, Divider, ListItemIcon, ListItemText, Button, Link } from "@mui/material";
import displayPicture from './assets/IMG_6081.jpg'
import asuLogo from './assets/ASU-logo.webp'
import seidmanPreview from './assets/Screenshot 2024-05-15 045704.png'
import nciPreview from './assets/Screenshot 2024-05-15 045850.png'
import Work from "./Work";
import Education from "./Education";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


function App() {
  return (
    <Box>
      <Grid container spacing={1} mt={3} >
        <Grid item xs={2} ml={3}>
          <Avatar 
            src={displayPicture} 
            alt="Kushagra Kartik" 
            sx={{height: 200, width: 200}}
            variant="rounded"></Avatar>
        </Grid>
        <Grid item xs={8} mt={8} mr={4}>
          <Typography 
            variant="h3" 
            mr={4} 
            sx={{fontFamily: "Lato", fontWeight: 'bold'}}>
            Kushagra Kartik 
            <Link href="https://www.linkedin.com/in/kushagra-kartik/"><LinkedInIcon fontSize="large"/></Link>
            <Link color="inherit" href="https://github.com/Kushagra1480"><GitHubIcon fontSize="large"/></Link>
          </Typography>
          
          <Grid container spacing={0}>
            <Grid item>
              <Typography variant="h6" mt={4} sx={{fontFamily: "Lato"}}>
                  Graduate Student at
              </Typography>
            </Grid>
            <Grid item mt={2}>
              <Avatar 
                  src={asuLogo} 
                  variant="rounded"
                  alt="ASU" 
                  sx={{width:110, height:60}}
                  mt={9}>
              </Avatar>
            </Grid>
            <Grid item>
            <Typography variant="h6" mt={4} sx={{fontFamily: "Lato"}}>
                  till May'25 
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={9}>
        <Grid item><Work /></Grid>
        <Grid item><Education /></Grid>
      </Grid>
      <Box ml={4} mt={4} sx={{fontFamily: "Lato"}}>
        <Typography variant="h4" sx={{fontWeight: "bold"}}>Contact Me:</Typography>
        <List>
          <ListItem>
            <ListItemText primary="kushagrakartik1480@gmail.com"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="6022181122"/>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default App;
