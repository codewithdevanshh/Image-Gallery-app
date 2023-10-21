import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard({
  imageUrl,
  likes,
  description,
  onClick,
  portfolio,
  name,
}) {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClick}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          UserName:{name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Desc:{description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Likes:{likes}</Button>
        <Button size="small">
          <a href={portfolio} className="downSubtle">
            Portfolio
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
