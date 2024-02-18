import React from "react";
import { AppProvider } from "./Components/Context/Context";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/TechStack/TechStack";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const Utils = () => {
  return (
    <AppProvider>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </AppProvider>
  );
};

export default Utils;
