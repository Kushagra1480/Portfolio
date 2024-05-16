import React from 'react'
import { Avatar, Box, Grid, List, ListItem, Stack, Typography, Item, Card, CardMedia, CardContent, CardHeader, CardActionArea, Divider } from "@mui/material";

function Work() {
    return(
        <Box>
      <Typography variant="h4" sx={{fontFamily: 'Lato', fontWeight: 'bold'}} mt = {4} ml={2} mb={1}>
        Work Experience:
      </Typography>
      <Card>
        <CardContent>
          <Typography>Programming Technician</Typography>
          <Typography>WP Carey Seidman Research Institute</Typography>
          <Typography>Jan 2024-Ongoing</Typography>
          <Typography>Tempe, AZ</Typography>
          <List>
            <ListItem>
              -Manage deployments of https://seidmaninstitute.com/ and https://ncisouthwest.org/
            </ListItem>
            <ListItem>
              -Extract data from the Bureau of Labor Statistics for calculating job growth
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography>Research Intern</Typography>
          <Typography>Netaji Subhas Institute of Technology</Typography>
          <Typography>Feb 2022-March 2022</Typography>
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