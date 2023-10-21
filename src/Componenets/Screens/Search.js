import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./Search.css";
export default function Search({ onSearch }) {
  const [Search, setSearch] = useState("");

  const handleinput = (e) => {
    setSearch(e.target.value);
  };
  const handlesearch = () => {
    console.log("Search Query:", Search);
    onSearch(Search);
  };
  console.log("Search Term:", Search);
  return (
    <div className="container">
      <input
        className="input"
        type="text"
        placeholder="search for image"
        value={Search}
        onChange={handleinput}
      />

      <button onClick={handlesearch} className="button">
        Search
      </button>
    </div>
  );
}
