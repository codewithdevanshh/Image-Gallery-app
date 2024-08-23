import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover', // Adjusted to 'contain' to fit the entire image within the container
  height: '400px',
   // Ensures the image fills the entire width of its container
};

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    url: process.env.PUBLIC_URL + '/front.jpg',
  },
  {
    url: process.env.PUBLIC_URL + '/mountains.jpg',
  },
];

function Slideshow() {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>

            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slideshow;
