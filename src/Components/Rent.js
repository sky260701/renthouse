import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../App.css";
// import house1  from "./images/house1.jpg";

export default function ActionAreaCard(props) {
  return (
    <div className='cardItem'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          // image= {require ("./images/house1.jpg")}
          image = {props.image}
         
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
            {props.price} <br />
            {props.date} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}