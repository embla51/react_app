import '../style/header.css';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [searchText, setSearchText] = useState("");
    const [searchResultsVisible, setSearchResultsVisible] = useState(false);
    const searchResultsRef = useRef(null);
    const navigate = useNavigate();

    const searchItems = [
        { label: "Dubbelrum", page: "/rum", target: "rooms-r1" },
        { label: "Enkelrum", page: "/rum", target: "rooms-r3" },
        { label: "Familjerum", page: "/rum", target: "rooms-r5" },
        { label: "Stuga", page: "/rum", target: "rooms-stuga" },
        { label: "Information", page: "/info", target: "list" },
        { label: "Frukost", page: "/info", target: "list" },
        { label: "Incheckning", page: "/info", target: "list" },
        { label: "Djur", page: "/info", target: "list" },
        { label: "Avbokning", page: "/info", target: "list" },
        { label: "Internet", page: "/info", target: "list" },
        { label: "Boka", page: "/", target: "book" },
        { label: "Nyheter", page: "/nyheter", target: "n1" },
        { label: "Örnsköldsvik", page: "/", target: "carousel" },
        { label: "Höga kusten", page: "/", target: "carousel" },
        { label: "Modo hockey", page: "/", target: "carousel" },
        { label: "Gym", page: "/", target: "carousel" },
        { label: "Instagram", page: "", target: "footer_media" },
        { label: "Facebook", page: "", target: "footer_media" },
        { label: "Kontaktinformation", page: "", target: "footer_contact" },
    ];

    const handleSearchInput = (e) => {
        const inputValue = e.target.value.toLowerCase();
        setSearchText(inputValue);
        setSearchResultsVisible(inputValue !== "");
    };

    const handleSearchClick = (page, target) => {
        setSearchResultsVisible(false);
    
        if (window.location.pathname === page) {
            window.location.hash = `#${target}`;
        } else {
            navigate(`${page}#${target}`);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
                setSearchResultsVisible(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Filtrera sökresultaten baserat på användarens input
    const filteredResults = searchItems.filter(item =>
        item.label.toLowerCase().includes(searchText)
    );

    return (
        <div className="grid-container">
            <div className="header">
                <div className="logo">
                    <img src="images/logga_ny.PNG" alt="Park hotells logga, en gul båge." className="image_logo" />
                </div>

                <div className="search">
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Sök..."
                        className="search-box"
                        value={searchText}
                        onChange={handleSearchInput}
                    />
                    {searchResultsVisible && filteredResults.length > 0 && (
                        <ul id="searchResults" ref={searchResultsRef}>
                            {filteredResults.map((item, index) => (
                                <li
                                    key={index}
                                    className="search-item"
                                    onClick={() => handleSearchClick(item.page, item.target)}
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="language">
                    <button className="lang-switch">SV</button>
                </div>
            </div>
        </div>
    );
};

export default Header;