
import React from 'react'
import Nav from "./nav/Nav.js";
import Home from "./Home/Home.js";
import About from './About/About.js';
import Services from './Services/Services.js';


function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Services/>
    </div>
   
  );
}

export default App;
