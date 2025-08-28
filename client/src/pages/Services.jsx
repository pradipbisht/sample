// Services.jsx
import React from "react";
import {
  FaBed,
  FaUtensils,
  FaSpa,
  FaSwimmer,
  FaShuttleVan,
  FaWifi,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBed className="text-4xl text-yellow-400 mb-3" />,
    title: "Luxury Rooms",
    description:
      "Spacious and elegant rooms designed for your comfort and relaxation.",
  },
  {
    icon: <FaUtensils className="text-4xl text-yellow-400 mb-3" />,
    title: "Fine Dining",
    description:
      "Enjoy world-class cuisine with a variety of international dishes.",
  },
  {
    icon: <FaSpa className="text-4xl text-yellow-400 mb-3" />,
    title: "Spa & Wellness",
    description:
      "Rejuvenate your body and mind with our premium spa treatments.",
  },
  {
    icon: <FaSwimmer className="text-4xl text-yellow-400 mb-3" />,
    title: "Swimming Pool",
    description:
      "Relax and refresh yourself in our temperature-controlled pools.",
  },
  {
    icon: <FaShuttleVan className="text-4xl text-yellow-400 mb-3" />,
    title: "Airport Shuttle",
    description:
      "Hassle-free airport transfers for a smooth travel experience.",
  },
  {
    icon: <FaWifi className="text-4xl text-yellow-400 mb-3" />,
    title: "Free Wi-Fi",
    description:
      "Stay connected with high-speed internet throughout the hotel.",
  },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-yellow-400">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
              {service.icon}
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
