import React from 'react'
import { Avatar, Box, Grid, List, ListItem, Stack, Typography, Item, Card, CardMedia, CardContent, CardHeader, CardActionArea, Divider, ListItemIcon, ListItemText } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import siedmanProfile from './assets/asu-seidman-institute.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import nsutIcon from './assets/Netaji_Subhas_University_of_Technology.svg.png'

function Work() {
    return(
    <Box ml={4} sx={{fontFamily: "Lato"}}>
      <Typography variant="h4" sx={{fontFamily: 'Lato', fontWeight: 'bold'}} mt = {4} ml={2} mb={1}>
        Work Experience:
      </Typography>
      <Card variant='outlined' sx={{width: 500, marginTop: '2em', marginLeft: '2em'}}>
        <CardMedia component="img" image={siedmanProfile}/>
        <CardContent>
          <Typography variant='h6' sx={{fontWeight: 'bold'}}>Programming Technician</Typography>
          <Typography color='text.secondary'>WP Carey Seidman Research Institute</Typography>
          <Typography variant='body2'>Jan 2024-Ongoing</Typography>
          <Typography>Tempe, AZ</Typography>
          <List>
            <ListItem>
                <ListItemText primary="Manage deployments of https://seidmaninstitute.com/ and https://ncisouthwest.org/"/>
            </ListItem>
            <ListItem>
                <ListItemText primary="Extract data from the Bureau of Labor Statistics for calculating job growth"/>
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card variant='outlined' sx={{width: 500, height: 300, marginTop: '2em', marginLeft: '2em'}} >
        <CardMedia component="img" image={nsutIcon} sx={{height: 100}}/>
        <CardContent>
          <Typography variant='h6' sx={{fontWeight: 'bold'}}>Research Intern</Typography>
          <Typography color="text.secondary">Netaji Subhas Institute of Technology</Typography>
          <Typography variant='body2'>Feb 2022-March 2022</Typography>
          <Typography>New Delhi, India</Typography>
          <List>
            <ListItem>
              Worked on dataset creation and cleaning for a sentiment analysis model.
            </ListItem>
          </List>
        </CardContent>
      </Card>
      </Box>
    )
}

export default Work