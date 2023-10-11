import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Fade } from "react-reveal";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/aleksandar-dimov-8b4012256",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/mvd7",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:dimov0703@gmail.com",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <Fade left>
        <ul>
          {links.map(({ id, child, style, href }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 bg-gray-600 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300" +
                " " +
                style
              }
            >
              <a
                target="_blank"
                href={href}
                className="flex justify-between items-center w-full text-white"
                rel="noreferrer"
              >
                <>{child}</>
              </a>
            </li>
          ))}
        </ul>
      </Fade>
    </div>
  );
};

export default SocialLinks;
