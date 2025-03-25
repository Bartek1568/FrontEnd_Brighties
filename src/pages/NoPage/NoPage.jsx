import React from "react";
import { Link } from "react-router-dom";

export default function NoPage() {
    return (
        <div className="no-page">
            <h1 className="no-page-title">404</h1>
            <p className="no-page-message">Strona nie została znaleziona.</p>
            <Link to="/" className="no-page-link">Wróć do strony głównej</Link>
        </div>
    );
}
