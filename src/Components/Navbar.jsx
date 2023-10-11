import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Fade } from "react-reveal";

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },

    {
      id: 3,
      link: "projects",
    },
    {
      id: 5,
      link: "technologies",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center px-4 w-full h-20 bg-black text-white fixed z-50">
      <Fade left>
        <div>
          <h1 className="font-signature text-5xl ml-2 text-blue-500">Dimov</h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200"
            >
              <Link to={link} smooth duration={1000}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </Fade>
      {/* MOBILE RESPONSIVE */}

      <div
        onClick={() => openMenu(!menu)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {menu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {menu && (
        <Fade top>
          <ul
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500
      "
          >
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => openMenu(!menu)}
                  to={link}
                  smooth
                  duration={1000}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </Fade>
      )}
    </div>
  );
};

export default Navbar;
