import React, { lazy, Suspense, useEffect } from "react";

import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
// ?replace to lazy loading
// import About from "../components/About/About";
// import HowToUse from "../components/HowToUse/HowToUse";
// import Benefits from "../components/Benefits/Benefits";
// import Questions from "../components/Questions/Questions";
// import Refill from "../components/Refill/Refill";
// import Footer from "../components/Footer/Footer";

import AOS from "aos";
import "swiper/css";
import "aos/dist/aos.css";
const About = lazy(() => import("../components/About/About"));
const HowToUse = lazy(() => import("../components/HowToUse/HowToUse"));
const Benefits = lazy(() => import("../components/Benefits/Benefits"));
const Footer = lazy(() => import("../components/Footer/Footer"));
const Refill = lazy(() => import("../components/Refill/Refill"));
const Questions = lazy(() => import("../components/Questions/Questions"));

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Suspense fallback={<i>Loading...</i>}>
        <HowToUse />
        <Benefits />
        <Questions />
        <Refill />
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
