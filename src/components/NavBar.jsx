import { useState } from "react";
import "../index.css";
import { FaFacebook } from "react-icons/fa";
import logo from "../assets/brighties.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container">
                <img src={logo} alt="Website Logo" className="logo" />

                {/* Przycisk hamburger */}
                <button
                    className={`menu-toggle ${isOpen ? "open" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={`bar ${isOpen ? "open-bar1" : ""}`}></div>
                    <div className={`bar ${isOpen ? "open-bar2" : ""}`}></div>
                    <div className={`bar ${isOpen ? "open-bar3" : ""}`}></div>
                </button>

                {/* Menu - widoczność kontrolowana przez `isOpen` */}
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><a href="#" onClick={() => setIsOpen(false)}>Strona Główna</a></li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>O nas</a></li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>Oferta</a></li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>Kontakt</a></li>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=61565779600994" target="_blank" rel="noopener noreferrer">
                            <FaFacebook style={{ fontSize: '1.5rem', color: 'white', marginLeft: '10px' }} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
