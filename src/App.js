import React from "react";
import "./style.scss";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import AppSection from "./AppSection";
// import Carousel from "./Carousel";

import CardSection from "./CardSection";
const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AppSection />
      <CardSection />
      <Footer />
    </div>
  );
};

export default App;
