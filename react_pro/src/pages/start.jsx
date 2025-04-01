
import React, { useState } from 'react'; // Importera useState
import '../style/start.css';
import { Link } from 'react-router-dom';  // Behåll din vanliga import
import { HashLink as HashLinkCustom } from 'react-router-hash-link'; 



const Start = () => {

    const containerStyle = {
        width: '100%',  // Anpassa bredden efter din CSS eller layout
        height: '300px',  // Höjden på kartan
    };
    
    const center = {
        lat: 63.2884,  // Latitude för Örnsköldsvik (exempel)
        lng: 18.7152,  // Longitude för Örnsköldsvik
    };

    const [currentIndex, setCurrentIndex] = useState(0);  // Håller koll på vilken bild som visas

    const images = [
        {
            src: "images/stuga.PNG",
            title: "Centrum",
            text: "Örnsköldsvik centrum bjuder på både shoppign, restauranger och aktiviteter."+
                  "Den fina hamnen ligger precis i nederkanten av stan och där finns det ett flertal restauranger" +
                  "med utsikt över vattnet. En promenad längs hamnen bjuder på fantastisk utsikt och där återfinns"+
                  "även stadens hockeylag MODOs hemmaarena."
        },
        {
            src: "images/r5.PNG",
            title: "Skulebergets naturreservat",
            text: "28 minuter med bil från hotellet ligger skulebergets nationalpark, ett populärt turistmål"+
                  "i höga kusten. Här finns det varierande friluftsaktiviteter som kanotpaddling, vandring och bergsklättring!"+
                  "På toppen av skuleberget finns det en våffelstuga som är öppen vid säsong dit du antingen"+
                  "kan ta en promenad eller välja att klättra upp för berget.",
        },
        {
            src: "images/r4.PNG",
            title: "Paradiset",
            text: "Med bara 7 minuters gångavstånd från hotellet erbjuder Paradiset något för alla."+
                  "Upplevelsebad med virvlande forsar och stilla laguner, träning i olika former samt en spaavdelnign med stort utbud!",
        },
        {
            src: "images/r3.PNG",
            title: "MODO Hockey",
            text: "Hockeykulturer i Örnsköldsvik är stark och stadens lag MODOs hemmaarena ligger på gångavstånd från hotellet.",
        },
        {
            src: "images/r2.PNG",
            title: "Gullviks Havsbad",
            text: "För den som under sommaren vill bada i havet elelr bara ligga på stranden finns"+
                  "gullviks havsbad en kort biltur från hotellet. Där finns det även äventyrsgolf och en restauranger"+
                  "med utsikt mot havet.",
        },
        {
            src: "images/r1.PNG",
            title: "Ulvön",
            text: "Ta färgan ut till Ulvön, en riktig sommaridyll! Tycker du om surströming så sägs"+
                    "det att det är här den smakar som bäst, men det finns självklar mycket annat att erbjuda på öns restaurasgner.",
        },
    ];


    const itemsPerSlide = 3;  // Antal bilder som ska visas per slide

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - itemsPerSlide + images.length) % images.length
        );
    };


    
    return (
       
            <div className="grid-container">
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
                    <Link to="/" className="menu-item meny_start">
                        <h5>Start</h5>
                    </Link>
                    <Link to="/info" className="menu-item meny_information">
                        <h5>Information</h5>
                    </Link>
                    

                    <HashLinkCustom to="/#book" className="menu-item meny_boka" smooth>
                        <h5>Boka</h5> 
                    </HashLinkCustom>


                    <Link to="/nyheter" className="menu-item meny_nyheter">
                        <h5>Nyheter</h5>
                    </Link>
                    <Link to="/rum" className="menu-item meny_våra_rum">
                        <h5>Våra rum</h5>
                        </Link>
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

                {/* Upplev Övik (Karusell) */}
                <div id="carousel">
                    <div className="carousel-container">
                        {/* Visa endast den aktuella bilden */}
                        <div className="carousel-slide">
                            {images
                            .slice(currentIndex, currentIndex + itemsPerSlide)
                            .map((image, index) => (
                           
                            <div className="info-box" key={index}>
                                <img src={image.src} alt={image.title} />
                                <div className="text-container">
                                    <h5>{image.title}</h5>
                                    <p>{image.text}</p>
                                </div>
                            </div>

                            ))}
                        </div>


                    </div>

                    <div className="carousel-controls">
                        <button className="prev-btn" onClick={prevSlide}>
                            &#10094;
                        </button>
                        <button className="next-btn" onClick={nextSlide}>
                         &#10095;
                        </button>
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
                            <img src="images/kaka2.PNG" alt="" className="b1" />
                            <img src="images/info1.PNG" alt="" className="b2" />
                            <img src="images/info2.PNG" alt="" className="b3" />
                            <img src="images/frukost1.PNG" alt="" className="b4" />
                            <img src="images/info6.PNG" alt="" className="b5" />
                            <img src="images/hej.PNG" alt="" className="b6" />
                        </div>
                    </div>
                </div>


                <div className="map">
                    <div className="mapimage">
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.518991704548!2d18.7069181769434!3d63.29185888778782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467b57f35366f347%3A0xe879aac15ecb535d!2sPark%20Hotell!5e1!3m2!1ssv!2sse!4v1743161826374!5m2!1ssv!2sse"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="maptext">
                        <h5>Här hittar du oss!</h5>
                        <p>Örnsköldsgatan 7</p>
                    </div>
                </div>

            </div>
        
    );
}

export default Start;
