import React from 'react'
import { Avatar, Box, Grid, List, ListItem, Stack, Typography, Item, Card, CardMedia, CardContent, CardHeader, CardActionArea, Divider } from "@mui/material";

function Education() {
    return(
        <Box ml={4}>
            <Typography variant="h4" sx={{fontFamily: 'Lato', fontWeight: 'bold'}} mt = {4} ml={2} mb={1}>
            Education:
            </Typography>
            <Card variant='outlined' sx={{width: 500, marginTop: '2em', marginLeft: '2em'}}>
                <CardContent>
                    <Typography variant='h6' sx={{fontWeight: 'bold'}}>Master's of Science</Typography>
                    <Typography color='text.secondary'>Software Engineering</Typography>
                    <Typography variant='body1'>Arizona State University</Typography>
                    <Typography variant='body2'>Aug 2023-May 2025(Expected)</Typography>
                    <Typography>Tempe, AZ</Typography>
                </CardContent>
                </Card>
            <Card variant='outlined' sx={{width: 500, marginTop: '2em', marginLeft: '2em'}}>
                <CardContent>
                    <Typography variant='h6' sx={{fontWeight: 'bold'}}>Bachelor of Science</Typography>
                    <Typography color='text.secondary'>Information Technology</Typography>
                    <Typography variant='body1'>Netaji Subhas Institute of Technology</Typography>
                    <Typography variant='body2'>Aug 2019-May 2023</Typography>
                    <Typography>New Delhi, India</Typography>
                </CardContent>
            </Card>
      </Box>
    )
}

export default Education
