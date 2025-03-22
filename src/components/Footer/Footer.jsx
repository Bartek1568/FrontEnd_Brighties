import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">© 2025 Brighties. Wszelkie prawa zastrzeżone.</p>
                <div className="footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
}
