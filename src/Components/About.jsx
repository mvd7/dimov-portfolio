import React from "react";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <Fade left>
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <p className="text-xl mt-20">
            As a dedicated and passionate full-stack web developer, I thrive on
            crafting innovative digital experiences. With a strong foundation in
            JavaScript, I'm well-versed in both front-end and back-end
            technologies, allowing me to bring creative designs to life and
            build robust, efficient server-side solutions.
          </p>
        </Fade>

        <br />

        <Fade bottom>
          <p className="text-xl">
            My commitment to continuous learning keeps me at the forefront of
            web development trends, ensuring that I deliver cutting-edge
            solutions to clients. I'm excited to take on new challenges and
            contribute my expertise to exciting projects in the ever-evolving
            world of web development. Let's collaborate and create something
            remarkable together!
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default About;
