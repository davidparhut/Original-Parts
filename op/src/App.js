import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
import AboutUS from "./pages/aboutUS";
import Account from "./pages/account";
import Delivery from "./pages/delivery";
import Opt from "./pages/opt";
import Payment from "./pages/payment";
import Registration from "./pages/registration";
import Returning from "./pages/returning";
import CategoryPage from "./pages/CatalogPage";


import "/Users/apple/Desktop/original_parts/op/src/styles/styles.css";
import HomePage from "./pages/homepage";


function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/category/:slug" element={<CategoryPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutUS />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="/opt" element={<Opt />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/returning" element={<Returning />} />
                    {/* Головна сторінка або 404 можна додати тут */}
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;