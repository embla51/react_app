
import '../style/footer.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Ikoner från react-icons
import React, { useState, useEffect } from 'react';

const Footer = () => {
      const [showButton, setShowButton] = useState(false);
    
      // Funktion för att visa scroll till toppen-knappen
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 300) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <div className="grid-container">

            {/* Knapp för att scrolla till toppen */}
            {/*<button id="topButton" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>*/}


            <button id="topButton" onClick={scrollToTop} style={{ display: showButton ? 'block' : 'none' }}> ↑ </button>
            
            {/* Footer */}
            <div className="footer">
                <div id="footer_contact">
                    <h4>Kontaktuppgifter</h4>
                    <h6>Park Hotell</h6>
                    <h6>Örnsköldsgatan 7</h6>
                    <h6>891 32 Örnsköldsvik</h6>
                    <h6>+46 660 103 60</h6>
                    <h6>info@park-hotell.se</h6>
                </div>
                <div className="footer_logo">
                    <img src="images/logg3.png" alt="Park hotells logga, en gul båge." className="image_logo_footer" />
                </div>
            
                <div id="footer_media">
                    <h4>Följ oss!</h4>
                    <a href="https://www.instagram.com/park_hotell_ornskoldsvik" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={32} />
                    </a>
                    <a href="https://www.facebook.com/parkhotelornskoldsvik" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={32} />
                    </a>
                </div>
            </div>  
        </div>
    );
}

export default Footer;