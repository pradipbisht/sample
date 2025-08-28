import React from "react";
import Hero from "./HeroPage";
import Gallery from "../components/Gallery";
import Carousel from "../components/Carousel";
import Chatbot from "./Chatbot";

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Hero />
      <Gallery />
      <Carousel />
      <Chatbot className="fixed bottom-4 right-4 z-50" />
    </div>
  );
}

export default Home;
