import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import BookingPage from "./pages/BookingPage";
import AboutPage from "./pages/About";
import Footer from "./components/Footer";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
