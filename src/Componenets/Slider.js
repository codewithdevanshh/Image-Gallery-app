import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: process.env.PUBLIC_URL + "/main.jpg",
  },
  {
    url: process.env.PUBLIC_URL + "/rishi.jpg",
  },
  { url: process.env.PUBLIC_URL + "/mountains.jpg" },
];

function Slider() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <SimpleImageSlider
       style={{objectFit:"cover"}}
        width="100%"
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      
      />
    </div>
  );
}

export default Slider;
