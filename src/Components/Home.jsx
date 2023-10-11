import React from "react";
import HeroImg from "../assets/Images/Hero.jpg";
import { Fade } from "react-reveal";
import Zoom from "react-reveal/Zoom";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <Fade left>
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a Full-Stack Web Developer
            </h2>

            <p className="text-gray-400 py-4">
              Proficient in JavaScript, Node.js, Express, Angular, React, and
              more. I specialize in creating user-friendly web applications that
              blend front-end and back-end seamlessly.
            </p>
            <div>
              <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 duration-200">
                <a href="mailto:dimov0703@gmail.com">Contact Me!</a>
              </button>
            </div>
          </div>
        </Fade>

        <Zoom right>
          <div>
            <img
              src={HeroImg}
              alt="hero"
              className="rounded-full mx-auto w-2/3 md:w-full"
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Home;
