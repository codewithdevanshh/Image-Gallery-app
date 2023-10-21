import React from "react";
import "./Home.css";
import Data from "./Data";
import { useState, useEffect } from "react";
import Search from "./Search";
const image = "front (2).jpg";
export default function Home() {
  const [searchres, setsearchres] = useState([]);
  const [searchitem, setsearchitem] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchimage = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=v7ATqu5s5aXDbkFXDwRhbLz_7hd6KAvieE3dnI8enrI`
      );
      console.log("API URL:", response);
      if (response.ok) {
        const d = await response.json();
        console.log("API Response:", d);
        setsearchres(d.results);
      } else {
        console.error("Error fetching images", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching images", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchitem) {
      fetchimage(searchitem);
    }
  }, [searchitem]);
  return (
    <div>
      <div className="container">
        <img src={image} className="image" />
      </div>
      <div>
        <h1 style={{ textAlign: "center", fontSize: "50px" }}>Images</h1>
        <Search onSearch={(query) => setsearchitem(query)} />
        {loading ? <p>Loading...</p> : <Data query={searchitem} />}
      </div>
    </div>
  );
}
