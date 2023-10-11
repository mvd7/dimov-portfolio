import React from "react";
import { Fade } from "react-reveal";

const Contact = () => (
  <footer
    name="contact"
    className="bg-gradient-to-b from-black to-gray-800 text-white py-4"
  >
    <Fade bottom>
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">
          Get in Touch:{" "}
          <a
            href="mailto:dimov0703@gmail.com"
            className="text-blue-400 hover:underline"
          >
            dimov0703@gmail.com
          </a>
        </p>
      </div>
    </Fade>
  </footer>
);

export default Contact;
