import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import logo from "../../Images/about-hqSSFCcOZR.svg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="bg-[#CFFAFE] py-24 px-[15%] ">
      <div className="align-element grid md:grid-cols-2 items-center gap-8 ">
        <article className=" text-center md:text-start">
          <h1 className=" name text-7xl font-bold tracking-wider text-indigo-700">
            I'm <br /> Ayoola Abiodun
          </h1>
          <div className="frontEnd">
            <p className="mt-4 text-3xl text-fuchsia-700 capitalize tracking-wide">
              Front-End Developer
            </p>
            <p className="mt-2 text-lg text-fuchsia-700 capitalize tracking-wide">
              Solving Problems Through Programming
            </p>
            <div className="flex gap-x-4 mt-4 justify-center md:justify-start">
              <a href="#">
                <FaGithubSquare className="h-8 w-8 text-fuchsia-500 hover:text-black duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="h-8 w-8 text-fuchsia-500 hover:text-black duration-300" />
              </a>
              <a href="#">
                <FaTwitterSquare className="h-8 w-8 text-fuchsia-500 hover:text-black duration-300" />
              </a>
            </div>
          </div>
        </article>
        <article className="heroimg hidden md:block">
          {/* <img className="h-80 lg:h-96" /> */}
          <img src={logo} alt="" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
