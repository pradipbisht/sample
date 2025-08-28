// AboutPage.jsx
import React from "react";
import {
  Users,
  Hotel,
  Award,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative dark:bg-gray-900/95 backdrop-blur-md text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold">About Grand Palace Hotel</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Experience luxury and comfort like never before in the heart of the
          city.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img src="main.jpg" alt="Hotel" className="rounded-2xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Founded in 1990, the Grand Palace Hotel has been a symbol of
            excellence and hospitality. Over the past three decades, we’ve
            welcomed thousands of guests from around the world, offering them
            unforgettable stays filled with comfort, elegance, and warmth.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            From our luxurious suites to world-class dining and spa facilities,
            every detail is designed to make you feel at home.
          </p>
        </div>
      </div>

      {/* Stats Section with Icons */}
      <div className="dark:bg-gray-900/95 backdrop-blur-md py-12 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-8">
          <div className="flex flex-col items-center">
            <Users size={40} className="mb-2 text-yellow-400" />
            <h3 className="text-4xl font-bold">50K+</h3>
            <p className="mt-2">Happy Guests</p>
          </div>
          <div className="flex flex-col items-center">
            <Hotel size={40} className="mb-2 text-green-400" />
            <h3 className="text-4xl font-bold">200+</h3>
            <p className="mt-2">Luxury Rooms</p>
          </div>
          <div className="flex flex-col items-center">
            <Award size={40} className="mb-2 text-blue-400" />
            <h3 className="text-4xl font-bold">15+</h3>
            <p className="mt-2">International Awards</p>
          </div>
        </div>
      </div>

      {/* Team Section with Socials */}
      <div className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: "Emma Wilson",
              role: "General Manager",
              img: "pic.jpg",
            },
            {
              name: "David Smith",
              role: "Head Chef",
              img: "pic2.jpg",
            },
            {
              name: "Sophia Brown",
              role: "Guest Relations",
              img: "pic3.jpg",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {member.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
              {/* Social Icons */}
              <div className="flex justify-center space-x-4 mt-4">
                <Facebook size={20} className="text-blue-600 cursor-pointer" />
                <Twitter size={20} className="text-sky-400 cursor-pointer" />
                <Instagram size={20} className="text-pink-500 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
