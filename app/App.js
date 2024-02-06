import React from "react";
import Home from "./Home/Home";
import {Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar/>
      <Home />
    </>
  );
}

export default App;
