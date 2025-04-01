

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Start from './pages/start';
import Rum from './pages/rum';
import Info from './pages/info';
import Nyheter from './pages/nyheter';
import Header from './components/header';  // Importera Header
import Footer from './components/footer';  // Importera Footer

import './style/app.css';

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToTarget = () => {
      if (location.hash) {
        const targetId = location.hash.replace("#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 200); // Fördröjning så sidan hinner ladda in
        }
      }
    };

    scrollToTarget();
  }, [location]);

  return null;
};

const App = () => {

  return (
    <Router>
      <div className="App">
          <Header />  
          <ScrollToHashElement /> 
          
          <main>
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/rum" element={<Rum />} />
              <Route path="/info" element={<Info />} />
              <Route path="/nyheter" element={<Nyheter />} />
            </Routes>
          </main>

        <Footer />  
      </div>


    </Router>
  );
};

export default App;