import React from 'react'
import { Avatar, Box, Grid, List, ListItem, Stack, Typography, Item, Card, CardMedia, CardContent, CardHeader, CardActionArea, Divider } from "@mui/material";

function Education() {
    return(
        <Box>
        <Typography variant="h4" sx={{fontFamily: 'Lato', fontWeight: 'bold'}} mt = {4} ml={2} mb={1}>
          Education:
        </Typography>
        <Card>
          <CardContent>
            <Typography>Master's of Science</Typography>
            <Typography>Software Engineering</Typography>
            <Typography>Arizona State University</Typography>
            <Typography>Aug 2023-May 2025(Expected)</Typography>
            <Typography>Tempe, AZ</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography>Bachelor of Science</Typography>
            <Typography>Information Technology</Typography>
            <Typography>Netaji Subhas Institute of Technology</Typography>
            <Typography>Aug 2019-May 2023</Typography>
            <Typography>New Delhi, India</Typography>
          </CardContent>
        </Card>
      </Box>
    )
}

export default Education
