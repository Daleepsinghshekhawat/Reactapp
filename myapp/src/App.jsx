import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Header from "./Header";
function App() {
  let user = ["hello everone  welcome to my channel daleep"];
  return (
    <BrowserRouter>
      <Header />
   
      <Routes>
        <Route path="/home" element={<Home user={user} />} />
        <Route path="/about" element={<About  user={user} />} />
        <Route path="/contact" element={<Contact user={user}/>} />
        <Route path="/services" element={<Services user={user} />} />
      </Routes>

      <h1>Vite + React with daleep</h1>
    </BrowserRouter>
  );
}

export default App;
