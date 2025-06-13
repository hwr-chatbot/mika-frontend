import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Chat from "./components/pages/Chat/Chat";
import About from "./components/pages/About/About";
import Feedback from "./components/pages/Feedback/Feedback";
import Imprint from "./components/pages/Imprint/Imprint";
import DataSecurity from "./components/pages/DataSecurity/DataSecurity";

function App() {
    return (
        <div className="app">
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Chat host="localhost" port={5505} useHttps={true} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/imprint" element={<Imprint />} />
                    <Route path="/data-security" element={<DataSecurity />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
