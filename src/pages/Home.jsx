import React from "react";

import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import HowToUse from "../components/HowToUse/HowToUse";
import Benefits from "../components/Benefits/Benefits";
import Questions from "../components/Questions/Questions";
import Refill from "../components/Refill/Refill";
import Footer from "../components/Footer/Footer";

import "swiper/css";
const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <HowToUse />
      <Benefits />
      <Questions />
      <Refill />
      <Footer />
    </>
  );
};

export default Home;
