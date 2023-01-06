import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";
import Typewriter from 'typewriter-effect'

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">

      {/* ESTE ES EL LOGO MIO */}
      <img src="/E.png" alt="E" className="w-10 h10 mr-2" />

      {/* 
      <h1 className={`${styles.paragraph}`}>
        EmGoDev
      </h1>
      */}

      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('<span style="color: white; font-family: Poppins, sans-serif; text-shadow: 0 0 15px #3D84C5;">EmGo.dev</span>')
            .start();
        }}
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 font-poppins">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6  bg-gray-900 bg-opacity-70 backdrop-blur-lg absolute top-[4rem] right-auto mx-4 my-2 min-w-[140px] rounded-md sidebar z-[11]`}
        >
          <ul className="list-none flex justify-around items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
