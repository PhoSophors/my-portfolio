import "../assets/css/reveal.css";
import "../components/Reveal";
import "../assets/css/project.css";
import { project } from "../assets/data/data";

function Project() {
  return (
    <>
      <div className="my-project" id="project">
        <section>
          <div className=" py-1 px-4 xl:h-full md:h-full sm:h-full flex items-center  mx-auto max-w-screen-xl xl:grid  lg:py-1 ">
            <div className="font-light content-center text-gray-500 sm:text-lg dark:text-gray-400">
              <br /> <br />
              <h2 className="mb-4 intro tracking-tight text-center font-extrabold text-gray-900 dark:text-white">
                My Work
              </h2> <br /> <br />
              
              {/* grid 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                {project.projects.map((pro, i) => {
                  return (
                    <div
                      key={i}
                      className="reveal fade-left p-2 rounded-3xl  border-dashed border-2 border-sky-500 border-gray-200  shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-amber-300"
                    >
                      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a
                          href={pro.link}
                          target="blank"
                        >
                          <img className="rounded-lg" src={pro.img} alt="" />
                        </a>
                        <div className="p-5">
                          <a
                           href={pro.link}
                            target="blank"
                          >
                            <h5 className="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                              {pro.title}
                            </h5>
                          </a>
                          <p className="project-des mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {pro.subTitle}
                          </p>
                          <a
                          href={pro.link}
                            target="blank"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-700 dark:hover:bg-pink-700 dark:focus:ring-blue-800"
                          >
                            See more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" >  <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" /> </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* end grid 1*/}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Project;
