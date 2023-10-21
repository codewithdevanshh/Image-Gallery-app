import React from "react";
import { useEffect, useState } from "react";
import ImgMediaCard from "./ImgMediaCard";
import { Modal } from "@mui/material";
// import { makeStyles } from '@material-ui/core/styles';
import "./Container.css";

export default function Data({ query }) {
  const [Value, setValue] = useState([]);
  const [error, setError] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  const [selectedImage, setSelectedImage] = useState([]);
  const page = 1;
  const perpage = 60;
  const data = `https://api.unsplash.com/search/photos?page=${page}&per_page=${perpage}&query=${query}&client_id=v7ATqu5s5aXDbkFXDwRhbLz_7hd6KAvieE3dnI8enrI`;
  useEffect(() => {
    fetch(data)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        const imageList = data.results.map((result) => ({
          imageUrl: result.urls.regular,
          likes: result.likes,
          description: result.alt_description,
          name: result.user.username,
          portfolio: result.user.portfolio_url,
        }));

        setValue(imageList);
      })
      .catch((error) => {
        setError(error);
      });
  }, [query]);

  const open = (image) => {
    setSelectedImage(image);
    setOpenModel(true);
  };
  const close = () => {
    setOpenModel(false);
  };
  return (
    <div className="container">
      {Value.map((image) => (
        <div key={image.imageUrl} className="img-card">
          <ImgMediaCard
            imageUrl={image.imageUrl}
            likes={image.likes}
            description={image.description}
            portfolio={image.portfolio}
            name={image.name}
            onClick={() => open(image)}
          />
        </div>
      ))}
      <Modal
        open={openModel}
        onClose={close}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {selectedImage && (
          <>
            <img
              src={selectedImage.imageUrl}
              alt="Medium Image"
              className="modalImage"
            />
            <h3 className="text">Likes👍: {selectedImage.likes}</h3>
          </>
        )}
      </Modal>
    </div>
  );
}
