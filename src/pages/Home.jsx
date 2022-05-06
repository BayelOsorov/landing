import React, { useEffect } from "react";
import About from "../components/About/About";
import Benefits from "../components/Benefits/Benefits";
import Header from "../components/Header/Header";
import HowToUse from "../components/HowToUse/HowToUse";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Questions from "../components/Questions/Questions";
import Refill from "../components/Refill/Refill";

import AOS from "aos";
import "swiper/css";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
