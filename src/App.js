import React from 'react';
import './App.css';

//Components
import NavBar from './components/navBar';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';
import Articles from './components/articles'

function App() {
  return (
    <div className="App">
      <div>
        <About />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Articles />
      </div>
    </div>
  );
}

export default App;
