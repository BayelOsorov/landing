import React from "react";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import HowToUse from "../components/HowToUse/HowToUse";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <HowToUse />
    </>
  );
};

export default Home;
