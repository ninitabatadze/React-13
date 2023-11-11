import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from "./components/Layout";



class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <header>
                    <Layout />
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="About" element={<About />} />
                    <Route path="Contact" element={<Contact />} />
                </Routes>
                <footer style={{ height: "90px", width: "100%", backgroundColor: "black", color: "#FFF" }}
                    className="bg-dark text-center text-lg-start w-100">
                    <div className="text-center p-4">
                        <p className="text-white" href="#">   © 2023 Copyright: Nini Tabatadze</p>
                    </div>
                </footer>
            </BrowserRouter>
        )
    }
}
var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);