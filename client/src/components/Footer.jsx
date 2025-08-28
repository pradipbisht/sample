// Footer.jsx
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-inner mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700 dark:text-gray-300">
        {/* Brand Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              Grand Palace Hotel
            </h1>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Experience unmatched luxury and comfort in the heart of the city.
            Your perfect getaway starts here.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/"
                className="hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-600 dark:hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a
                href="/rooms"
                className="hover:text-blue-600 dark:hover:text-blue-400">
                Rooms & Suites
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-600 dark:hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <Phone size={16} className="text-blue-600 dark:text-blue-400" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} className="text-blue-600 dark:text-blue-400" />
              <span>info@grandpalacehotel.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin size={16} className="text-blue-600 dark:text-blue-400" />
              <span>123 Luxury St, Downtown, NY</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Follow Us
          </h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-sky-400">
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-pink-500">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Grand Palace Hotel. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
