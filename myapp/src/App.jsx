import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Counter from "./Counter";
function App() {
  let user = [1,1,2,3,4,5,6];
  return (
      <BrowserRouter>
        // <Header />
        <Routes>
          <Route path="/" element={<Home usr={user}  />} />
          <Route path="/about" element={<About usr={user} name="daleep"/>} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
