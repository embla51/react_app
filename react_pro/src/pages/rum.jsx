import React, { useState, useEffect } from 'react';
import '../style/rum.css';

import { Link } from 'react-router-dom';  // Behåll din vanliga import
import { HashLink as HashLinkCustom } from 'react-router-hash-link'; 



const Rum = () => {
    const rooms = [
        {
            id: 'rooms-r1',
            image: 'images/r1.PNG',
            title: 'Superior Dubbelrum',
            description: 'Tre superior dubbelrum finns på hotellett och erbjuder lite större rum med sköna dubbelsängar.'
        },
        {
            id: 'rooms-r2',
            image: 'images/r2.PNG',
            title: 'Dubbelrum med två separata sängar',
            description: 'Ett rum för två personer med separata sängar.'
        },
        {
            id: 'rooms-r3',
            image: 'images/r3.PNG',
            title: 'Enkelrum',
            description: 'Enkelrum med skrivbord. För den som uppskattar det enkla passar detta rum perfekt.'
        },
        {
            id: 'rooms-r4',
            image: 'images/r4.PNG',
            title: 'Enkelrum med dusch',
            description: 'Ett större enkelrum med möjlighet till att sätta in en extrabädd.'
        },
        {
            id: 'rooms-r5',
            image: 'images/r5.PNG',
            title: 'Familjerum superior',
            description: 'Dessa rum bjuder på stora ytor för hela familjen.'
        },
        {
            id: 'rooms-stuga',
            image: 'images/stuga.PNG',
            title: 'Stuga Nötis',
            description: 'Vill du hellre bo precis vid vattnet i vår mysiga stuga på nötbolandet?'
        }
    ];

   
    const toggleMenu = () => {
        const menu = document.querySelector(".menu2");
        menu.classList.toggle("open");
      };
    

    return (
        
            <div className="grid-container">
            

            <div className="top_bar">
                <div className="hamburger-menu2" onClick={toggleMenu}>
                    <div className="bar bar-1"></div>
                    <div className="bar bar-2"></div>
                    <div className="bar bar-3"></div>
                </div>

                <nav className="menu2">
                            <Link to="/">
                              <h5>Start</h5>
                            </Link>
                            <Link to="/info">
                              <h5>Information</h5>
                            </Link>
                            <HashLinkCustom to="/#book" smooth>
                              <h5>Boka</h5>  {/* Länka till startsidan och scrolla till #book */}
                            </HashLinkCustom>
                            <Link to="/nyheter">
                              <h5>Nyheter</h5>
                            </Link>
                            <Link to="/rum">
                              <h5>Våra rum</h5>
                            </Link>
                         </nav>

                <div className="heading">
                    <h3>Våra rum</h3>
                </div>
            </div>

            <div id="rooms-container">
                {rooms.map(room => (
                    <div key={room.id} id={room.id}>
                        <img src={room.image} alt={room.title} className="roompic" />
                        <div className="room-text">
                            <h5>{room.title}</h5>
                            <p>{room.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
       
        
    );
};

export default Rum
