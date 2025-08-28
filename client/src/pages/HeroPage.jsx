import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    title: "Luxury Redefined",
    subtitle: "Experience unparalleled comfort in the heart of the city",
    description:
      "Discover our premium suites with breathtaking city views and world-class amenities.",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    title: "Exquisite Dining",
    subtitle: "Culinary excellence that delights your senses",
    description:
      "Savor gourmet cuisine crafted by our award-winning chefs in an elegant atmosphere.",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg",
    title: "Relaxation Paradise",
    subtitle: "Unwind in our world-class spa and wellness center",
    description:
      "Rejuvenate your body and mind with our premium spa treatments and facilities.",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 backdrop-blur-sm">
        <ChevronLeft size={24} className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 backdrop-blur-sm">
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight animate-fade-in">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90 leading-relaxed">
            {heroSlides[currentSlide].subtitle}
          </p>
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto leading-relaxed">
            {heroSlides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/booking">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Your Stay
              </button>
            </Link>
            <button className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Explore Rooms
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      {/* <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
            <div className="flex flex-col items-center space-y-1">
              <div className="flex items-center space-x-1">
                <Star className="text-yellow-400" size={20} />
                <span className="text-2xl font-bold">4.9</span>
              </div>
              <p className="text-sm opacity-80">Guest Rating</p>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <div className="flex items-center space-x-1">
                <MapPin className="text-blue-400" size={20} />
                <span className="text-2xl font-bold">5</span>
              </div>
              <p className="text-sm opacity-80">Prime Locations</p>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <div className="flex items-center space-x-1">
                <Calendar className="text-green-400" size={20} />
                <span className="text-2xl font-bold">15</span>
              </div>
              <p className="text-sm opacity-80">Years Experience</p>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <div className="flex items-center space-x-1">
                <Users className="text-purple-400" size={20} />
                <span className="text-2xl font-bold">50K+</span>
              </div>
              <p className="text-sm opacity-80">Happy Guests</p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Hero;
