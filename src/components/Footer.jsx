import React from "react";
import Logo from "../assets/chang_thai_logo.png";
import {
  FaClock,
  FaLocationArrow,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Chang Thai" className="h-12 w-auto" />
              <span className="text-xl font-bold">Chang Thai</span>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Authentic Thai cuisine crafted with fresh ingredients and bold
              flavors.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                aria-label="Facebook"
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus-visible:ring-offset-gray-900 transition"
              >
                <FaFacebookF />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus-visible:ring-offset-gray-900 transition"
              >
                <FaInstagram />
              </a>
              <a
                aria-label="Twitter"
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus-visible:ring-offset-gray-900 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary focus-visible:underline outline-none transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-primary focus-visible:underline outline-none transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary focus-visible:underline outline-none transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary focus-visible:underline outline-none transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaLocationArrow className="mt-0.5" />
                <span>123 Chang Thai St, Bangkok, Thailand</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone />
                <a
                  href="tel:+6612345678"
                  className="hover:text-primary focus-visible:underline outline-none"
                >
                  +66 12 345 678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope />
                <a
                  href="mailto:hello@changthai.example"
                  className="hover:text-primary focus-visible:underline outline-none"
                >
                  hello@changthai.example
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white">
              Hours
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-3">
                <FaClock /> <span>Mon–Sun: 10:00 – 22:00</span>
              </li>
            </ul>
            <a
              href="#menu"
              className="mt-4 inline-flex items-center rounded-full bg-linear-to-r from-primary to-secondary px-5 py-2 text-white text-sm font-semibold shadow hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 transition"
            >
              Order Now
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-200 dark:border-gray-800 py-5 text-xs sm:flex-row">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Chang Thai. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-primary focus-visible:underline outline-none"
            >
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="#"
              className="hover:text-primary focus-visible:underline outline-none"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
