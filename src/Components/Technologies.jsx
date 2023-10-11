import React from "react";
import { Fade } from "react-reveal";

import jsLogo from "../assets/Images/js.png";
import angularLogo from "../assets/Images/angular.png";
import expressLogo from "../assets/Images/Expressjs.png";
import gitLogo from "../assets/Images/git.png";
import mongoLogo from "../assets/Images/mongo.png";
import nodeLogo from "../assets/Images/node.png";
import reactLogo from "../assets/Images/react.png";
import postgreLogo from "../assets/Images/postgre.png";
import sassLogo from "../assets/Images/sass.png";
import tsLogo from "../assets/Images/ts.png";
import nestLogo from "../assets/Images/NestJS.svg";

const Technologies = () => {
  const technologies = [
    {
      id: 2,
      title: "JavaScript",
      src: jsLogo,
      style: "shadow-yellow-500",
    },
    {
      id: 1,
      title: "React",
      src: reactLogo,
      style: "shadow-sky-600",
    },

    {
      id: 3,
      title: "Angular",
      src: angularLogo,
      style: "shadow-red-600",
    },
    {
      id: 7,
      title: "Node.JS",
      src: nodeLogo,
      style: "shadow-green-600",
    },
    {
      id: 4,
      title: "Express.JS",
      src: expressLogo,
      style: "shadow-white",
    },

    {
      id: 8,
      title: "PostgreSQL",
      src: postgreLogo,
      style: "shadow-blue-600",
    },
    {
      id: 9,
      title: "SASS",
      src: sassLogo,
      style: "shadow-pink-600",
    },
    {
      id: 10,
      title: "TypeScript",
      src: tsLogo,
      style: "shadow-blue-600",
    },
    {
      id: 5,
      title: "Git",
      src: gitLogo,
      style: "shadow-orange-600",
    },
  ];

  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen pt-10"
    >
      <div className="max-w-screen-lg mx-auto p-f flex flex-col justify-center w-full h-full text-white">
        <Fade left>
          <div className="pb-8">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Technologies
            </p>
            <p className="py-6">
              These are the technologies that i have experience with
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0">
            {technologies.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 rounded-lg flex flex-col items-center justify-center ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Technologies;
