
import React, { useState, useEffect } from "react";

import "../style/nyheter.css";
import { Link } from "react-router-dom";  
import { HashLink as HashLinkCustom } from "react-router-hash-link";  

function Nyheter() {
  useEffect(() => {
    const searchBox = document.querySelector(".search-box");
    const searchResults = document.getElementById("searchResults");

    if (searchBox && searchResults) {
      const showResults = () => {
        searchResults.style.display = "block";
      };

      const hideResults = () => {
        setTimeout(() => {
          searchResults.style.display = "none";
        }, 200);
      };

      searchBox.addEventListener("focus", showResults);
      searchBox.addEventListener("blur", hideResults);

    
      return () => {
        searchBox.removeEventListener("focus", showResults);
        searchBox.removeEventListener("blur", hideResults);
      };
    }
  }, []); 

  const toggleMenu = () => {
    const menu = document.querySelector(".menu2");
    if (menu) {
      menu.classList.toggle("open");
    }
  };

  const handleLike = (id) => {
    // Skapa och visa en tumme upp-bubbla
    const bubble = document.createElement("div");
    bubble.className = "like-bubble";
    bubble.innerHTML = "👍";
    
    // Hämta nyhetsrutan och placera bubblan där
    const newsItem = document.getElementById(id);
    if (newsItem) {
      newsItem.appendChild(bubble);
      
      // Ta bort bubblan efter 1 sekund
      setTimeout(() => {
        newsItem.removeChild(bubble);
      }, 1000);
    }
  };

  return (
    <div className="grid-container">
      {/* Navigation and Page Title */}
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
            <h5>Boka</h5>
          </HashLinkCustom>
          <Link to="/nyheter">
            <h5>Nyheter</h5>
          </Link>
          <Link to="/rum">
            <h5>Våra rum</h5>
          </Link>
        </nav>

        <div className="heading">
          <h3>Nyheter</h3>
        </div>
      </div>

      {/* News Section */}
      <div className="news">
        <div id="n1">
          <h5>Sommarerbjudande!</h5>
          <p>
            Upplev Höga Kusten! Bo 3 nätter och få 20% rabatt eller bo 5 nätter
            och få 30% rabatt. Välkomna!
          </p>
          <img src="images/nyhet1.PNG" alt="sommarerbjudande" className="imnyhet" />

          <div className="like-container">
            <button onClick={() => handleLike("n1")} className="like-button">❤️</button>
            
          </div>

        </div>

        <div id="n2">
          <h5>Alltid nybakat</h5>
          <p>
            Hos oss bjuder vi alla våra gäster på eftermiddagskaffe med
            hembakat. Välkommen!
          </p>
          <img src="images/kaka1.PNG" alt="sockerkaka" className="imnyhet" />

          <div className="like-container">
            <button onClick={() => handleLike("n2")} className="like-button">❤️</button>
            
          </div>

        </div>

        <div id="n3">
          <h5>Stuga Nötbolandet</h5>
          <p>
            Numera går det att hyra hotellets stuga på Nötbolandet! På tomten
            finns 4 stugor och totalt 12 sovplatser, vilket alla ingår när man hyr
            huvudstugan. Havet bara några meter från dörren! Välkomna till ett
            sommarparadis! Kolla in stugan under "våra rum".
          </p>
          <img src="images/stugaöver.PNG" alt="stuga" className="imnyhet" />

          <div className="like-container">
            <button onClick={() => handleLike("n3")} className="like-button">❤️</button>
           
          </div>

        </div>

        <div id="n4">
          <h5>Populärt resmål!</h5>
          <p>
            Vi är glada över att Örnsköldsvik var Sveriges andra populäraste
            resmål 2023! Vi hoppas på lika många besökare 2024. Nedan kan ni se
            hur de första placeringarna var och vad omröstningen visade sig vara
            den bästa upplevelsen!
          </p>
          <table>
            <thead>
              <tr>
                <th>Placering</th>
                <th>Stad</th>
                <th>Bästa upplevelsen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Umeå</td>
                <td>Brännbollsyran</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Örnsköldsvik</td>
                <td>Vandring Skuleberget</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Motala</td>
                <td>Varamon</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Falkenberg</td>
                <td>Havsbad</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Boden</td>
                <td>Trähotell</td>
              </tr>
            </tbody>
          </table>

          <div className="like-container">
            <button onClick={() => handleLike("n4")} className="like-button">❤️</button>
           
          </div>

        </div>

        <div id="n5">
          <h5>Vad är viktigast för dig när du bor på hotell?</h5>
          <p>
            Vi skulle vilja ha er hjälp att prioritera vad som är viktigast för
            er under en hotellvistelse för att kunna förbättra oss. Bidra gärna
            med din åsikt! Tack på förhand, Mvh personalen.
          </p>
          <form action="mailto:din@email.com" method="post" encType="text/plain">
            <label htmlFor="name">Namn:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">E-post:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Meddelande:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Skicka</button>
          </form>

          <div className="like-container">
            <button onClick={() => handleLike("n5")} className="like-button">❤️</button>
            
          </div>

        </div>

        <div id="n6">
          <h5>Retrivermästerskapet</h5>
          <p>
            Ni missar väl inte att Retrivermästerskapet hålls i Höga Kusten i
            år? Ska du dit och vill bo på i närheten är ni varmt välkomna till
            oss!
          </p>
          <video src="images/markering_iben.mp4" controls width="600" className="solo">
            Din webbläsare stöder inte videouppspelning.
          </video>

          <div className="like-container">
            <button onClick={() => handleLike("n6")} className="like-button">❤️</button>
         
          </div>

        </div>

      </div>
    </div>
  );
}

export default Nyheter;
