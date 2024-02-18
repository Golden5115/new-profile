import React from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaGoogle,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="bg-[#181818]">
      <div className="py-16 px-4 max-w-[1050px] mx-auto">
        <div className="pb-4 text-gray-400 grid max-w-[300px] md:max-w-[400px] lg:max-w-[800px] mx-auto border-b border-gray-400 text-center ">
          <div className="grid lg:grid-cols-2 lg:gap-x-32 mx-auto mt-2 md:mt-0 ">
            <div>
              <ul className="text-center">
                <li className="p-2 text-xs">Home</li>
                <li className="p-2 text-xs">Join Our Community</li>
                <li className="p-2 text-xs">About Us</li>
                <li className="p-2 text-xs">Contact Us</li>
              </ul>
            </div>
            <div className="lg:p-2  flex flex-col justify-center">
              <button className="border border-gray-400  py-2 rounded-md text-xs hover:bg-[gray]">
                Support Me
              </button>
              <h1 className=" py-2 rounded-md text-lg text-center mt-4">
                Contact Details
              </h1>
              <span className="flex items-center gap-2 justify-center ">
                <FaWhatsapp /> <p>+2349051156866</p>
              </span>
              <span className="flex items-center gap-2 justify-center">
                <FaGoogle /> <p>ayomide.ayoola91@gmail.com</p>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-gray-400 lg:flex lg:justify-between max-w-[250px] md:max-w-[400px] lg:max-w-[800px] mx-auto">
          <div className="w-[150px] flex justify-between mb-4 mx-auto lg:mx-0 lg:mb-0">
            <span>
              <FaFacebookF size={25} />
            </span>
            <span>
              <FaLinkedin size={25} />
            </span>
            <span>
              <FaTwitter size={25} />
            </span>
            <span>
              <AiFillInstagram size={25} />
            </span>
          </div>
          <div className="my-auto text-center">
            <p className="text-xs">
              &copy; 2024 Engr Golden Platform. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
