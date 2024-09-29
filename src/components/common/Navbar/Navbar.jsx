
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavbarMenu from "./NavbarComponents/NavbarMenu";
import "./NavbarComponents/Navbar.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ contentRefs = [] }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 z-50 flex justify-between pr-16 w-full font-poppins text-lg font-bold navbar align-center ${isScrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="flex items-center justify-center md:ml-12">
        <Link to="/">
          <img
            ref={logoRef}
            src={isScrolled ? "https://res.cloudinary.com/dwtsxzrly/image/upload/v1726603951/the_best_logoss_u7mdba.png" : "https://res.cloudinary.com/dwtsxzrly/image/upload/v1726603951/the_best_logoss_u7mdba.png"}
            alt="Logo"
            className="w-[60px] mt-2 ml-2 mr-2 mb-1"
            id="logo"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="md:hidden">
          <NavbarMenu />
        </div>
        <div className="items-center hidden font-bold md:flex">
          <Link
            to="/about"
            className="mr-4 font-mono text-lg font-bold link-hover-animation"
          >
            À propos
          </Link>
          <Link
            to="/ServicesAZHub"
            className="mr-4 font-mono text-lg font-bold link-hover-animation"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="mr-4 font-mono text-lg font-bold link-hover-animation"
          >
            S&apos;inscrire
          </Link>
          {/* <Link
            to="/portfolio"
            className="mr-4 font-mono text-lg font-bold link-hover-animation"
          >
            Portfolio
          </Link> */}
          {/* <Link
            to="/jobs"
            className="font-mono text-lg font-bold link-hover-animation"
          >
            S&apos;inscrire
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  contentRefs: PropTypes.arrayOf(
    PropTypes.shape({
      current: PropTypes.instanceOf(Element)
    })
  )
};

export default Navbar;