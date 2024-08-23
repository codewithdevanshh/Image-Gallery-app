import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './Style.css';


export default function ImgMediaCard({
  imageUrl,
  likes,
  description,
  onClick,
  portfolio,
  name,

}) 
{
  const handleDownload = async () => {
    // Create an anchor element
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = 'image.jpg'; // You can set the filename here
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };
  

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
      <Button size="small" onClick={handleDownload}>
      <button className="button-86" role="button">Download</button>

      </Button>
    </CardContent>
    <CardActions>
      <Button size="small">Likes:{likes}</Button>
      <Button size="small">
        <a
          href={portfolio}
          className="downSubtle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </Button>
     
    </CardActions>
  </Card>

  );
}
