import React, { useState, useEffect } from 'react';
import '../style/info.css';
import { Link } from 'react-router-dom';  // Behåll din vanliga import
import { HashLink as HashLinkCustom } from 'react-router-hash-link'; 




function Info() {
     
    
  const toggleMenu = () => {
    const menu = document.querySelector(".menu2");
    menu.classList.toggle("open");
  };

    return(
     
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
    <h3>Information</h3>
  </div>
</div>

<div className="info">
      <div id="list">
          <ul>
              <li> <p>Incheckning efter klockan 15.00, självklart kan du anlända tidigare och lämna ditt bagage. </p></li>
              <li><p> Utcheckning klockan 11.00 </p></li>
              <li><p> Avbeställning skall ske senast klockan 18.00 dagen före ankomst om inte annat anges vid bokning. 
                      Uteblir du utan avbeställning eller avbeställer senare än 18.00 så blir du betalningsskyldig om vi 
                      inte får rummet du bokat uthyrt. </p></li>
              <li><p> Park Hotell är rök- och djurfritt. </p></li>
              <li><p> Park Hotell är inte handikappanpassat. Har ni funderingar kring detta är ni varmt välkomna att 
                      ringa oss och höra hur vi kan möta dina behov. </p></li>
              <li><p> Om du är t.ex. laktosintolerant eller glutenallergiker är vi väldigt tacksamma om du hör av dig 
                      innan ankomst så att vi kan förbereda en frukost som passar dig! </p></li>
              <li><p> Trådlöst internet ingår så har du med dig datorn kan du enkelt koppla upp dig på internet hos oss 
                      kostnadsfritt. </p></li>
              <li><p> Mikrovågsugn finns fri för användning för gäster i frukostmatsalen! </p></li>
              <li><p> Frukost serveras vardagar 06.30-09.00 och helger 08.00-10.00 eller enligt överenskommelse. </p></li>
          </ul>
      </div>
  
      <div className="pic">
          <img src="images/info4.PNG" alt="Blombukett"/>
      </div>
  </div>

</div>
      
    ) 
}

export default Info;
