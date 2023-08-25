import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-scroll";
import '../Navbar/navbarStyle.css';
import { FaBars, FaTimes } from "react-icons/fa";



const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);



  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <Link to="heroimg">
          <span className="nav-logo">SoPhors ._.</span>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link  to="heroimg" spy={true} smooth={true} offset={50} duration={500}>|| 01. Home</Link>
          </li>
          <li>
            <Link  to="expertise" spy={true} smooth={true} offset={50} duration={500}>|| 02. Expertise</Link>
          </li>
          <li>
            <Link to="project" spy={true} smooth={true} offset={50} duration={500}>|| 03. Project</Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>||04. Contact</Link>
          </li>
        </ul>

        <div className="toggler" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "white" }} />
          ) : (
            <FaBars size={20} style={{ color: "white" }} />
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
