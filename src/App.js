
import React from 'react'
import Nav from "./nav/Nav.js";
import Home from "./Home/Home.js";
import About from './About/About.js';
import Services from './Services/Services.js';
import Project from './Project/Project.js';
import Contact from './Contact/Contact.js';


function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Services/>
      <Project/>
      <Contact/>
    </div>   
  );
}

export default App;
