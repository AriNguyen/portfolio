import React from 'react';
// import logo from './assets/logo.svg';
import './style/App.scss';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import About from './components/About/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
