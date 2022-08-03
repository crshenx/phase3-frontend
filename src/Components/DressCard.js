import * as React from 'react';
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DressCard( {dress} ) {

    const [isFront, setIsFront] = useState(true)

    function handleClick() {
        setIsFront(!isFront)
    }
    
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia 
        component="img"
        height="400"
        onClick={handleClick}
        image={ isFront ? dress.front_img : dress.back_img}
        alt="pretty dress"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {dress.name} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Designer: {dress.designer_name} <br></br>
          {dress.description} <br></br>
          Price: ${dress.price} <br></br>
          Size: {dress.size}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Like ❤️</Button>
        <Button size="small">Add to cart 🛒</Button>
      </CardActions>
    </Card>
  );
}
