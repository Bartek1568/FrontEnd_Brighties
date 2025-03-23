import React from "react";
import TeacherCard from "../../components/TeacherCard/TeacherCard.jsx";  // Ścieżka do komponentu TeacherCard
import { Link } from "react-router-dom";  // Do linkowania do strony oferty
import "./About.css";

const teachers = [
    {
        name: "Jan Kowalski",
        image: "https://example.com/jan-kowalski.jpg",  // Zamień na prawdziwy URL zdjęcia
        specialization: "Matematyka",
        description: "Doświadczony nauczyciel matematyki z pasją do nauki."
    },
    {
        name: "Anna Nowak",
        image: "https://example.com/anna-nowak.jpg",  // Zamień na prawdziwy URL zdjęcia
        specialization: "Fizyka",
        description: "Nauczycielka fizyki z wieloletnim stażem, pasjonatka eksperymentów."
    },
    {
        name: "Marek Zieliński",
        image: "https://example.com/marek-zielinski.jpg",  // Zamień na prawdziwy URL zdjęcia
        specialization: "Informatyka",
        description: "Ekspert w dziedzinie IT i programowania. Uwielbia nowe technologie."
    },
    {
        name: "Ewa Wiśniewska",
        image: "https://example.com/ewa-wisniewska.jpg",  // Zamień na prawdziwy URL zdjęcia
        specialization: "Biologia",
        description: "Biolog z zamiłowaniem do badań nad ekosystemami i ochroną środowiska."
    }
];

export default function About() {
    return (
        <div className="about">
            {/* Pierwsza sekcja - O nas */}
            <section className="about-section">
                <h1>O nas</h1>
                <p>
                    Jesteśmy zespołem pasjonatów edukacji, którzy chcą wprowadzać innowacje w nauczaniu.
                    Naszym celem jest stworzenie środowiska, które wspiera rozwój uczniów oraz nauczycieli.
                </p>
            </section>

            {/* Druga sekcja - Nasi nauczyciele */}
            <section className="teachers-section">
                <h2>Nasi Nauczyciele</h2>
                <div className="teacher-cards-container">
                    {teachers.map((teacher, index) => (
                        <TeacherCard key={index} teacher={teacher} />
                    ))}
                </div>
            </section>

            {/* Trzecia sekcja - Zachęta do zobaczenia oferty */}
            <section className="offer-section">
                <h2>Chcesz poznać naszą ofertę?</h2>
                <p>
                    Zobacz naszą ofertę i dowiedz się, jakie usługi edukacyjne oferujemy. Z pewnością znajdziesz coś dla siebie!
                </p>
                <Link to="/offer">
                    <button className="cta-button">Zobacz ofertę</button>
                </Link>
            </section>
        </div>
    );
}
