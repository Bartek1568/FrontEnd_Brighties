import React, {useEffect} from "react";
import "../../css/MainPage.css"
import {Link} from "react-router-dom";

export default function MainPage() {

    useEffect(() => {
        window.scrollTo(0, 0);  // Ustala pozycję scrolla na górę strony
    }, []);

    return (
        <div className="main">
            <section className="section">
                <h1>Witaj na naszej stronie!</h1>
                <p>
                    To jest przykładowa treść strony. Możesz dodać tutaj tekst, obrazy i
                    inne elementy, które mają zostać wyświetlone na stronie głównej.
                </p>
            </section>

            <section className="section">
                <h2>Nasza oferta</h2>
                <p>
                    Oferujemy szeroką gamę usług, które spełniają oczekiwania nawet
                    najbardziej wymagających klientów. Sprawdź naszą ofertę i skontaktuj
                    się z nami, aby dowiedzieć się więcej.
                </p>
            </section>

            <section className="section">
                <Link to="/contact">
                    <button className="cta-button">Skontaktuj się z nami</button>
                </Link>
            </section>
        </div>
    );
}
