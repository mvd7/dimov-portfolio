import React from "react";
import parkingTicket from "../assets/Images/parkingTicket-thumb.png";
import weatherApp from "../assets/Images/weatherApp-thumb.png";
import nasaApi from "../assets/Images/nasaApi-thumb.png";
import { Fade } from "react-reveal";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: parkingTicket,
      git: "https://github.com/mvd7/parking-ticket",
      demo: "https://mvd7.github.io/parking-ticket/",
    },
    {
      id: 2,
      src: weatherApp,
      git: "https://github.com/mvd7/weather-app-react",
      demo: "https://mvd7.github.io/weather-app-react/",
    },
    {
      id: 3,
      src: nasaApi,
      git: "https://github.com/mvd7/nasa-api-project",
      demo: "https://nasa-api-0000.netlify.app/",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <Fade left>
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className="py-6">Check out some of my projects right here.</p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {projects.map(({ src, id, demo, git }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-around">
                  <a
                    href={demo}
                    target="_blank"
                    className="w12 px-6 py-3 m-4 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded"
                  >
                    Demo
                  </a>

                  <a
                    href={git}
                    target="_blank"
                    className="w12 px-6 py-3 m-4 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded"
                  >
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
