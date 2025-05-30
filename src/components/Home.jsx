import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import  { useEffect, useState } from 'react'

const Home = () => {
    var[pro, setPro] = useState([]);
    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => { 
            console.log(res.data    );
            setPro(res.data)
        })
        .catch((err) => console.log(err))
    },[]);
  return (
      <div>
      <Grid container spacing={2}>
        {pro.map((val,i) =>{
            return( 
                <Grid size ={{ xs:12, sm: 6, md: 4}}>
                    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}}>
            {val.desciption}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            {val.price}
            </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                </Grid>
       )})}
       </Grid>
    </div>
)
}



export default Home