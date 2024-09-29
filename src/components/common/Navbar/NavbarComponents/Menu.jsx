import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
export const Menu = () => {
  return (
    <nav className="menu">
      <ul className="font-mono font-bold text-6xl text-black"> {/* Changed font size to 72px and text color to black */}
        <li className="mb-4">
          <Link to="/about" className=" text-black">
            A Propos
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/ServicesAZHub" className=" text-black">
            Services
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/contact" className=" text-black">
            Contact
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/portfolio" className=" text-black">
            Portfolio
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/jobs" className=" text-black">
            Postuler
          </Link>
        </li>
      </ul>
    </nav>
  );
};
