import Navbar from "./components/NavBar/NavBar.jsx";
import "./components/NavBar/NavBar.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from "./components/Footer/Footer.jsx";
import MainContent from "./components/MainPage/MainContent.jsx";
import Contact from "./components/Contact/Contact.jsx";

export default function App() {
    return (
        <Router>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}
