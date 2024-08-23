import { useState } from "react";
import Data from "./Componenets/Screens/Data";
import Home from "./Componenets/Screens/Home";
import ImgMediaCard from "./Componenets/Screens/ImgMediaCard";
import Login from "./Componenets/Screens/Login";

import Register from "./Componenets/Screens/Register";

import {BrowserRouter, Route, Routes} from "react-router-dom"

import { AuthProvider } from "./Componenets/Screens/AuthContext";
import PageNotFound from "./Componenets/PageNotFound";



function App() {
  
  return (
    <>
    
      <BrowserRouter>
      <AuthProvider>

      
      <Routes>
      <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Register />} />

       
        {/* <Route element={<Protectedroutes />}> */}
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<PageNotFound/>}/>
        {/* </Route> */}
      </Routes>
      </AuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
