import React from "react";
import useInView from "../hooks/useInView.jsx";

import Hero from "../components/Home/Hero/";
import Who_are_we from "../components/Home/Who_are_we";
import Inside_BEM_Apps from "../components/Home/Inside";
import PeopleSayAboutUs from "../components/home/People_say_about_us/Index.jsx";
import PAMA from "../components/PAMA/index.jsx";

const Homepage = () => {
  const [ref, inView] = useInView({ threshold: 0.05, once: true });

  return (
    <main
      ref={ref}
      className={`
        relative 
        flex 
        flex-col 
        w-full 
        min-h-screen 
        bg-gray-50
        overflow-x-hidden
        scroll-smooth
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        transition-all duration-700 ease-out
      `}
    >
      {/* SECTION WRAPPER */}
        <Hero />

        <Who_are_we />

        <Inside_BEM_Apps />

        <PeopleSayAboutUs />

        <PAMA />
      
    </main>
  );
};

export default Homepage;