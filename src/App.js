import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

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
                  <Route path="*" element={<NotFound/>} />
                </Routes>
            </main>
            <Footer/>
        </div>
        </>
    );
}

export default App;
