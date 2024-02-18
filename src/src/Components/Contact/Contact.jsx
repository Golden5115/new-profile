import aboutimg from "../../Images/Contact.svg";
const About = () => {
  return (
    <section className="bg-white py-20" id="contact">
      <div className="align-element grid md:grid-cols-2 items-center gap-13 px-[15%]">
        <div className="flex  justify-center md:justify-start">
          <img src={aboutimg} className="w-[50%] h-[40vh] " />
        </div>
        <article className="text-center md:text-start pt-6">
          <div className="container">
            <h2 className="text-3xl font-medium tracking-wider capitalize">
              Contact Me
            </h2>
            <form action="" className="mt-[5vh]">
              <div className="row">
                <div class="col-25">
                  <label htmlFor="fname">First Name</label>
                </div>
                <div class="col-75">
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label htmlFor="lname">Last Name</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-25">
                  <label htmlFor="subject">Subject</label>
                </div>
                <div class="col-75">
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                  />
                </div>
              </div>
              <br />
              <div class="row">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </article>
      </div>
    </section>
  );
};
export default About;
