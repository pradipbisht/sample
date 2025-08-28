// BookingPage.jsx
import React from "react";

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Book Your Stay
        </h1>

        {/* Hotel Info */}
        <div className="bg-gray-50 p-4 rounded-xl mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Grand Palace Hotel
          </h2>
          <p className="text-gray-600">
            Downtown location · Free WiFi · Pool · Spa · Restaurant
          </p>
          <p className="text-gray-800 font-medium mt-2">
            Rooms starting from{" "}
            <span className="text-green-600">$199/night</span>
          </p>
        </div>

        {/* Booking Form */}
        <form className="space-y-6">
          {/* Guest Details */}
          <div>
            <label className="block font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-2 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-2 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">
                Check-in Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-2 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                Check-out Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-2 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">Adults</label>
              <select className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-2 focus:ring-2 focus:ring-indigo-500">
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>3 Adults</option>
                <option>4 Adults</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                Children
              </label>
              <select className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-2 focus:ring-2 focus:ring-indigo-500">
                <option>0 Children</option>
                <option>1 Child</option>
                <option>2 Children</option>
                <option>3 Children</option>
              </select>
            </div>
          </div>

          {/* Room Selection */}
          <div>
            <label className="block font-medium text-gray-700">Room Type</label>
            <select className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-2 focus:ring-2 focus:ring-indigo-500">
              <option>Standard Room - $199/night</option>
              <option>Deluxe Room - $249/night</option>
              <option>Luxury Suite - $399/night</option>
            </select>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block font-medium text-gray-700">
              Special Requests
            </label>
            <textarea
              placeholder="Any special requests?"
              rows="3"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-2 focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-indigo-700 transition">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
