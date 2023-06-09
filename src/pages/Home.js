import HeaderOne from "../components/Home/HeaderOne";
import HeaderTwo from "../components/Home/HeaderTwo";
import MainSlider from "../components/Home/MainSlider";
import MainFilter from "../components/Home/MainFilter";
import Offer from "../components/Home/Offer";
import WeOffer from "../components/Home/WeOffer";
import OurBuses from "../components/Home/OurBuses";
import Footer from "../components/Home/Footer";
import "../styles/HomeStyles.css";
import AppStore from "../components/Home/AppStore";
import React from "react";
import Map from "../components/Home/map";

const Home = () => {
    fetch = () => {
        localStorage.clear();
    }
    return (
        <div>
            <header className={"p-3 bg-dark text-white py-0"}>
                <HeaderOne/>
            </header>
            <HeaderTwo/>
            <MainSlider/>
            <MainFilter/>
            <Offer/>
            <WeOffer/>
            <OurBuses/>
            <AppStore/>
            <Map></Map>
            <Footer/>
        </div>
    );
}

export default Home;