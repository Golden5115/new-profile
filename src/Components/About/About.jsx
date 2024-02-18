import aboutimg from "../../Images/about me.jpeg";
import "./about.css";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-13 px-[15%]">
        <div className="aboutimg flex  justify-center md:justify-start">
          <img src={aboutimg} className="w-[50%] h-[40vh] " />
        </div>
        <article className="text-center md:text-start pt-6">
          <h2 className="text-3xl font-medium tracking-wider capitalize">
            About Me
          </h2>
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
