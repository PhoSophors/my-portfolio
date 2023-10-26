import "../assets/css/reveal.css";
import "../components/Reveal";
import "../assets/css/hero.css";
import animation_hero from "../assets/lottie/animation_hero.json";
import Lottie from "lottie-react";
import { Button } from "flowbite-react";
import { greeting } from "../assets/data/data";
import { Link } from "react-scroll";
import resume from "../assets/img/resume/Personal_Resume_Pho_Sophors.pdf";

const Hero = () => {

  return (
    <>
      <section
        id="hero"
        className="xl:h-screen p-5 md:h-full sm:h-full flex items-center mx-auto max-w-screen-2xl lg:grid  "
      >
        {/* grid */}
        <div className=" grid grid-cols-1 xl:grid-cols-2 gap-4 flex items-center  ">
          {/* intro */}
          <div className=" fade-left w-full p-5 sm:p-6 items-center mx-auto">
            <h1 className="intro">{greeting.title}</h1>
            <span className="descrip">{greeting.subTitle}</span>
            {/* media */}
            <div className="media flex flex-wrap gap-2">
              {/* github */}
              <a
                href={greeting.github}
                target="blank"
                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* Linkedin */}
              <a
                href={greeting.linkedin}
                target="blank"
                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              {/*  */}
              
            </div>
            {/* end media */}

            {/* contact and resume */}
            <div className="mt-7 media flex flex-wrap gap-10 ">
              <Button
                // onClick={handleOpen}
                gradientDuoTone="redToYellow"
                outline
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <p>Contact</p>
                </Link>
              </Button>
              <a href={resume} download="Pho Sohpors - Personal Resume">
                <Button gradientDuoTone="tealToLime" outline>
                  <p>Resume</p>
                </Button>
              </a>
              
            </div>

          </div>

          {/* animation */}
          <div className=" w-full p-5 sm:p-6">
            <Lottie animationData={animation_hero} />
          </div>
        </div>
        {/* end grid */}
      </section>
    </>
  );
};

export default Hero;
