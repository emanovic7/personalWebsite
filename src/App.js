import React from 'react';
import './App.css';

//Components
import NavBar from './components/navBar';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
    
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
