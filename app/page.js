"use client"; 
import './styles/main.scss';
import Home from "./Home/Home";
import Navbar from './components/Navbar';
export default function Main() {
  return (
    <main >
      <Navbar/>
      <Home />
      
    </main>
  )
}
