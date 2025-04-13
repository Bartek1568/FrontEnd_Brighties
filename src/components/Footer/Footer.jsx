import "../../css/Footer.css";
import { FaFacebook, FaEnvelope, FaPhone, FaArrowUp } from "react-icons/fa";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Sekcja kontaktowa po lewej */}
                <div className="footer-info">
                    <h3 className="footer-title">Kontakt</h3>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="icon" /> Facebook
                    </a>
                    <p><FaEnvelope className="icon" /> brighties.pl@gmail.com
                    </p>
                    <p><FaPhone className="icon" /> +48 726 006 123
                    </p>
                </div>

                {/* Sekcja copyright na środku */}
                <p className="footer-text">© 2025 Brighties. Wszelkie prawa zastrzeżone.</p>

                {/* Przycisk powrotu na górę po prawej */}
                <button className="scroll-top" onClick={scrollToTop}>
                    <FaArrowUp className="icon" /> Na górę
                </button>
            </div>
        </footer>
    );
}
