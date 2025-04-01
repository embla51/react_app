import React from 'react';
/*import './style.css'; // Glöm inte att importera CSS-filen!*/

const MyHomePage = () => {
    return (
        <div className="grid-container">

            {/* Övre meny med logga och sök */}
            <div className="header">
                <div className="logo">
                    <img src="images/logga_ny_ny.PNG" alt="Park hotells logga, en gul båge." className="image_logo" />
                </div>

                <div className="search">
                    <input type="text" id="searchInput" placeholder="Sök..." className="search-box" />
                    <ul id="searchResults" style={{ display: 'none' }}>
                        <li className="search-item" data-page="våra_rum.html" data-target="rooms-r1">Dubbelrum </li>
                        <li className="search-item" data-page="våra_rum.html" data-target="rooms-r3">Enkelrum </li>
                        <li className="search-item" data-page="våra_rum.html" data-target="rooms-r5">Familjerum </li>
                        <li className="search-item" data-page="våra_rum.html" data-target="rooms-stuga">Stuga </li>
                        <li className="search-item" data-page="information.html" data-target="list">Information </li>
                        <li className="search-item" data-page="information.html" data-target="list">Frukost </li>
                        <li className="search-item" data-page="information.html" data-target="list">Incheckning </li>
                        <li className="search-item" data-page="information.html" data-target="list">Djur </li>
                        <li className="search-item" data-page="information.html" data-target="list">Avbokning </li>
                        <li className="search-item" data-page="information.html" data-target="list">Internet </li>
                        <li className="search-item" data-page="index.html" data-target="book">Boka </li>
                        <li className="search-item" data-page="nyheter.html" data-target="n1">Nyheter </li>
                        <li className="search-item" data-page="index.html" data-target="carousel">Örnsköldsvik</li>
                        <li className="search-item" data-page="index.html" data-target="carousel">Höga kusten </li>
                        <li className="search-item" data-page="index.html" data-target="carousel">Modo hockey </li>
                        <li className="search-item" data-page="index.html" data-target="carousel">Gym </li>
                        <li className="search-item" data-target="footer_media">Instagram</li>
                        <li className="search-item" data-target="footer_media">Facebook</li>
                        <li className="search-item" data-target="footer_contact">Kontaktinformation</li>
                    </ul>
                </div>

                <div className="language">
                    <button className="lang-switch">SV</button>
                </div>
            </div>

            {/* Framsida-bilden och rubriken */}
            <div className="front_image">
                <img src="images/säng12.PNG" alt="Bäddad dubbelsäng med vita sängkläder." className="image_front" />
                <div className="text-overlay">
                    <h2>HEMTREVLIGT I CENTRUM</h2>
                    <h1>Park Hotell Örnsköldsvik</h1>
                    <h2>I HJÄRTAT AV HÖGA KUSTEN</h2>
                </div>
            </div>

            {/* Menyn som navigerar på sidan */}
            <nav className="menu">
                <a href="index.html" className="menu-item meny_start"><h5>Start</h5></a>
                <a href="information.html" className="menu-item meny_information"><h5>Information</h5></a>
                <a href="#book" className="menu-item meny_boka"><h5>Boka</h5></a>
                <a href="nyheter.html" className="menu-item meny_nyheter"><h5>Nyheter</h5></a>
                <a href="våra_rum.html" className="menu-item meny_våra_rum"><h5>Våra rum</h5></a>
            </nav>

            {/* Välkommen till Park Hotell */}
            <div className="welcome">
                <div className="whead">
                    <h5>Välkommen till Park Hotell!</h5>
                </div>
                <div className="wtext">
                    <p>Med närheten till shopping och nöjen är Park Hotell perfekt för dig som vill besöka Örnsköldsvik!</p>
                    <p>Är du sån som person att du gärna söker dig till platser där känslan är lite som hemma? 
                        Det är lätt att trivas där man känner igen sig och atmosfären speglar samma känsla som i ditt eget hem.
                        Vi på Park Hotell strävar efter att vara just ett sånt stopp på resan, som hemma, fast borta!</p>
                    <p>Vi erbjuder korta avstånd till både träning i moderna lokaler som fantastiska 
                        naturområden för friluftsaktiviteter, ställ bara frågan så anpassar vi din vistelse på bästa sätt.</p>
                </div>
            </div>

            {/* Upplev Övik bläddring (karusell) */}
            <div id="carousel">
                <div className="carousel-container">
                    <div className="carousel-slide">
                        <div className="info-box">
                            <img src="images/stuga.PNG" alt="Bild 1" />
                            <h5>Centrum</h5>
                            <p className="hidden-text">Örnsköldsvik centrum bjuder på både shopping, restauranger och aktiviteter...</p>
                        </div>
                        <div className="info-box">
                            <img src="images/r5.PNG" alt="Bild 2" />
                            <h5>Skulebergets naturreservat</h5>
                            <p className="hidden-text">28 minuter med bil från hotellet ligger Skulebergets nationalpark...</p>
                        </div>
                        <div className="info-box">
                            <img src="images/r4.PNG" alt="Bild 3" />
                            <h5>Paradiset</h5>
                            <p className="hidden-text">Med bara 7 minuters gångavstånd från hotellet erbjuder Paradiset något för alla...</p>
                        </div>
                    </div>
                </div>

                <div className="carousel-controls">
                    <button className="prev-btn">&#10094;</button>
                    <button className="next-btn">&#10095;</button>
                </div>
            </div>

            {/* Boka delen */}
            <div id="book">
                <div className="bookimage">
                    <img src="images/boka.PNG" alt="bokningsruta" />
                </div>
                <div className="bookhead">
                    <h5>Här kan du boka direkt!</h5>
                </div>
                <div className="book_pictures">
                    <div className="p-grid">
                        <p className="middle-text">Hoppas vi ses!</p>
                        <img src="images/Längst_ner/kaka2.PNG" alt="" className="b1" />
                        <img src="images/Längst_ner/info1.PNG" alt="" className="b2" />
                        <img src="images/Längst_ner/info2.PNG" alt="" className="b3" />
                        <img src="images/Längst_ner/frukost1.PNG" alt="" className="b4" />
                        <img src="images/Längst_ner/info6.PNG" alt="" className="b5" />
                        <img src="images/Längst_ner/hej.PNG" alt="" className="b6" />
                    </div>
                </div>
            </div>

            {/* Karta */}
            <div className="map">
                <div className="mapimage">
                    <div id="map-container"></div>
                </div>
                <div className="maptext">
                    <h5>Här hittar du oss!</h5>
                    <p>Örnsköldsgatan 7</p>
                </div>
            </div>

            {/* Knapp för att scrolla till toppen */}
            <button id="topButton" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>

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
                        <i className="fa-brands fa-instagram fa-3x"></i>
                    </a>
                    <a href="https://www.facebook.com/parkhotelornskoldsvik" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook fa-3x"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MyHomePage;
