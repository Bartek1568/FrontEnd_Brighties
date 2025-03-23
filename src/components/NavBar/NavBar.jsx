import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaFacebook } from "react-icons/fa";
import logo from "../../assets/brighties.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="logo-link">
                    <img src={logo} alt="Website Logo" className="logo" />
                </Link>

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
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Strona Główna</Link></li> {/* Link do strony głównej */}
                    <li><Link to="/about" onClick={() => setIsOpen(false)}>O nas</Link></li> {/* Link do sekcji "O nas" */}
                    <li><Link to="/offer" onClick={() => setIsOpen(false)}>Oferta</Link></li> {/* Link do sekcji "Oferta" */}
                    <li><Link to="/contact" onClick={() => setIsOpen(false)}>Kontakt</Link></li> {/* Link do strony kontaktowej */}
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
