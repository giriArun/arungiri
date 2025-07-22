//import logo from './logo.svg';
import './App.css';
//Demo Components
//import Demo from './components/Demo';

/* function App() {
  return (
    <div className="App">
      <div>
        <Demo />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

//export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Home from './pages/Home';
import Contact from './pages/Contact';

//import abc from './pages/About';

function App() {
    return (
        <>
        <div className="d-flex flex-column min-vh-100">
            <Header>
                <Navbar />
            </Header>
            <main className="flex-grow-1 container py-4 px-0">
                <Routes>
                  <Route path="/" element={<AboutMe />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer/>
        </div>
        </>
    );
}

export default App;



/* 

<>
      <Header />
      <Navbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
    */

    //https://www.wix.com/website-template/view/html/2846?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv&tpClick=view_button&esi=9a2333c6-1d4b-4877-a434-f3fc70863a1f