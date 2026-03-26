import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <home />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <h1>Vite + React with daleep</h1>
    </BrowserRouter>
  );
}

export default App;
