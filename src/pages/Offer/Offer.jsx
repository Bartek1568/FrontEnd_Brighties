import React from "react";
import { Link } from "react-router-dom";  // Do linkowania do strony kontaktu
import "./Offer.css";

export default function Offer() {
    return (
        <div className="offer">
            {/* Pierwsza sekcja - Co oferujemy */}
            <section className="offer-section">
                <h1>Co oferujemy</h1>
                <p>
                    Oferujemy szeroką gamę usług edukacyjnych, które pomagają uczniom w nauce.
                    Nasze lekcje są dostosowane do indywidualnych potrzeb uczniów, obejmują
                    zarówno korepetycje, jak i przygotowanie do egzaminów.
                </p>
            </section>

            {/* Druga sekcja - Cennik */}
            <section className="pricing-section">
                <h2>Cennik</h2>
                <table className="pricing-table">
                    <thead>
                    <tr>
                        <th>Usługa</th>
                        <th>Cena</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Korepetycje (1 godzina)</td>
                        <td>100 PLN</td>
                    </tr>
                    <tr>
                        <td>Przygotowanie do matury</td>
                        <td>150 PLN</td>
                    </tr>
                    <tr>
                        <td>Pakiet 10 lekcji</td>
                        <td>900 PLN</td>
                    </tr>
                    </tbody>
                </table>
            </section>

            {/* Trzecia sekcja - Prośba o kontakt */}
            <section className="contact-request-section">
                <h2>Decydujesz się na nas?</h2>
                <p>
                    Skontaktuj się z nami, aby dowiedzieć się więcej o szczegółach naszej oferty lub umówić się na pierwszą lekcję.
                </p>
                <Link to="/contact">
                    <button className="cta-button">Skontaktuj się z nami</button>
                </Link>
            </section>
        </div>
    );
}
