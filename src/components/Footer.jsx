import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent  text-white  py-8 m-2 mt-4">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-bold">Journal Research Publication</h3>
            <p className="mt-2 text-white">
              Empowering researchers to share groundbreaking ideas.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-center text-white">
          © {new Date().getFullYear()} Journal Research Publication. All rights reserved.
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
