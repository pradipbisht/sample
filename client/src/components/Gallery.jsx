// Gallery.jsx
import React from "react";
import Card from "./Card";

const cardData = [
  {
    image: "sample0ne.jpg",
    title: "Luxury Suite",
    description: "Experience comfort in our premium suite.",
  },
  {
    image: "sampleTwo.jpg",
    title: "Deluxe Room",
    description: "Spacious and cozy rooms for your stay.",
  },
  {
    image: "sampleThree.jpg",
    title: "Restaurant View",
    description: "Dine in style with breathtaking views.",
  },
  {
    image: "sampleFour.jpg",
    title: "Spa & Wellness",
    description: "Relax and rejuvenate in our spa.",
  },
  {
    image: "sampleSix.jpg",
    title: "Outdoor Pool",
    description: "Enjoy a refreshing swim any time.",
  },
  {
    image: "seven.jpg",
    title: "Conference Hall",
    description: "Perfect space for meetings and events.",
  },
];

function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Explore Our Spaces
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
        {cardData.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            className="hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg overflow-hidden"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
