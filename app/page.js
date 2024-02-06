"use client"; 
import App from './App';
import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
export default function Main() {
  return (
    <main >
      <BrowserRouter>
      
      <App/>
      </BrowserRouter>
      
    </main>
  )
}
