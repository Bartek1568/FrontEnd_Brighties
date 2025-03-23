import React from "react";
import { FaPhone, FaEnvelope, FaFacebook } from "react-icons/fa";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact-container">
            {/* Sekcja informacji kontaktowych */}
            <div className="contact-info">
                <h2>Skontaktuj się z nami</h2>
                <p>
                    <FaPhone className="icon" /> +48 726 006 123
                </p>
                <p>
                    <FaEnvelope className="icon" /> brighties.pl@gmail.com
                </p>
                <p>
                    <FaFacebook className="icon" />{" "}
                    <a
                        href="https://www.facebook.com/profile.php?id=61565779600994"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nasz Facebook
                    </a>
                </p>
            </div>

            {/* Osadzony komponent formularza */}
            <ContactForm />
        </div>
    );
}
