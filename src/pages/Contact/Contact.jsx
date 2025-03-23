import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaFacebook } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formularz wysłany!");
    };

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

            {/* Formularz kontaktowy */}
            <div className="contact-form">
                <h2>Napisz do nas</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Imię i nazwisko:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Wiadomość:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">Wyślij</button>
                </form>
            </div>
        </div>
    );
}
