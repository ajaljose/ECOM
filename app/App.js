import React from "react";
import Search from "./components/Search";
import Home from "./Home/Home";
import {Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='search' element={<Search />}/>
      </Routes>
    </>
  );
}

export default App;
