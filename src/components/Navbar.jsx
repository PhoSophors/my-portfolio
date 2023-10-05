import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-scroll";
import "../assets/css/navbarStyle.css";
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
        <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
          <a href="/" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">
              <>SOPhors._.</>
            </span>
            <span className="grey-color">/&gt;</span>
          </a>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link
              to="expertise"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              01. Skill
            </Link>
          </li>
          <li>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              03. Project
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              04. Contact
            </Link>
          </li>
        </ul>

        <div className="toggler" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
