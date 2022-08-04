import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";


export default function DressCard({ dress, handleCartRender }) {
  const [isFront, setIsFront] = useState(true);
  const [likeCount, setLikeCount] = useState(dress.dress_likes ? dress.dress_likes : 0 );

  function handleClick() {
    setIsFront(!isFront);
  }

  function handleAddLike() {
    // let newCount = likeCount + 1
    // setLikeCount(newCount)
    fetch(`http://localhost:9292/dresses/${dress.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dress_likes: likeCount + 1
      }),
    })
    .then((res) => res.json())
    .then(dress => {
      console.log(dress)
      setLikeCount(dress.dress_likes)})
  }

  function handlePostToCart() {
    fetch("http://localhost:9292/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        back_img: dress.back_img,
        description: dress.description,
        designer_name: dress.designer_name,
        front_img: dress.front_img,
        name: dress.name,
        price: dress.price,
        size: 8,
      }),
    }).then(handleCartRender);
  }

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          onClick={handleClick}
          image={isFront ? dress.front_img : dress.back_img}
          alt="pretty dress"
        />
      </CardActionArea>
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
        <Button size="small" onClick={handleAddLike}>❤️ {likeCount}</Button>
        <Button size="small" onClick={handlePostToCart}>
          Add to cart 🛒
        </Button>
      </CardActions>
    </Card>
  );
}
