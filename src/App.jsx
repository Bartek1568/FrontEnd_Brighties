import Navbar from "./components/NavBar/NavBar.jsx";
import "./components/NavBar/NavBar.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from "./components/Footer/Footer.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NoPage from "./pages/NoPage/NoPage.jsx";
export default function App() {
    return (
        <Router>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" index element={<MainPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/*" element={<NoPage/>} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}
