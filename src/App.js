import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Offer from "./components/Offer/Offer";
import Works from "./components/Works/Works";
import Skills from "./components/Skills/Skills";
import Freelance from "./components/Freelance/Freelance";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Offer/>
            <Skills/>
            <Works/>
            <Freelance/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
