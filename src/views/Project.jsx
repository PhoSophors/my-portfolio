import React from "react";
import "../assets/css/projectStyle.css";
import travel_frontend from "../assets/img/travel_frontend.png";
import travel_official from "../assets/img/travel_official.png";
import library from "../assets/img/library_ofiicial.png";
import { motion } from "framer-motion";

function Project() {
  return (
    <>
      <div className="my-project" id="project">
        <section class="bg-white dark:bg-gray-900">
          <div class=" py-1 px-4 xl:h-screen md:h-full sm:h-full flex items-center  mx-auto max-w-screen-xl xl:grid  lg:py-1 ">
            <div class="font-light  content-center text-gray-500 sm:text-lg dark:text-gray-400">
              <br />
              <br />
              <h2 class="mb-4 tracking-tight text-center font-extrabold text-gray-900 dark:text-white">
                My Work
              </h2>
              <br />
              <br />
              {/* grid 1 */}
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-1 ">

                <motion.div
                  className=" p-6  border-dashed border-2 border-sky-500 border-gray-200  shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-yellow-700"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}

                >
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://the-travels.vercel.app/" target="blank">
                      <img
                        class="rounded-t-lg img"
                        src={travel_frontend}
                        alt=""
                      />
                    </a>
                    <div class="p-5">
                      <a href="https://the-travels.vercel.app/" target="blank">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          The Travel (ReactJS)
                        </h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        The travel project is a web-based application that
                        allows users to share places and photos with other
                        users. The project aims to provide a platform for users
                        to connect with each other and share their travel
                        experiences.
                      </p>
                      <a
                        href="https://the-travels.vercel.app/"
                        target="blank"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        See more
                        <svg
                          class="w-3.5 h-3.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className=" p-6  border-dashed border-2 border-sky-500 border-gray-200  shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-yellow-700"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                >
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://cam-travel.store/" target="blank">
                      <img
                        class="rounded-t-lg img"
                        src={travel_official}
                        alt=""
                      />
                    </a>
                    <div class="p-5">
                      <a href="https://cam-travel.store/" target="blank">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          The Travel (Laravel)
                        </h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        The travel project is a web-based application that
                        allows users to share places and photos with other
                        users. The project aims to provide a platform for users
                        to connect with each other and share their travel
                        experiences.
                      </p>
                      <a
                        href="https://cam-travel.store/"
                        target="blank"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        See more
                        <svg
                          class="w-3.5 h-3.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className=" p-6  border-dashed border-2 border-sky-500 border-gray-200  shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-yellow-700"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                >
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a
                      href="https://cam-library-official.vercel.app/"
                      target="blank"
                    >
                      <img class="rounded-t-lg img" src={library} alt="" />
                    </a>
                    <div class="p-5">
                      <a
                        href="https://cam-library-official.vercel.app/"
                        target="blank"
                      >
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Cam-Libray (ReactJS)
                        </h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Library system projects can be useful for libraries in a
                        number of ways, such as helping them spend more time
                        searching for books, saving time, and having lots of
                        books.
                      </p>
                      <a
                        href="https://cam-library-official.vercel.app/"
                        target="blank"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        See more
                        <svg
                          class="w-3.5 h-3.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* end grid 1*/}

              {/* grid 2 */}
              {/* <div class="grid mt-4 grid-cols-1 md:grid-cols-3 gap-4 ">
                <div className=" p-6 border-dashed border-2 border-sky-500 border-gray-200  shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-yellow-700">
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img
                        class="rounded-t-lg img"
                        src="https://images.pexels.com/photos/11280357/pexels-photo-11280357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                      />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Noteworthy technology acquisitions 2021
                        </h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                      <a
                        href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Read more
                        <svg
                          class="w-3.5 h-3.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className=" p-6  border-dashed border-2 border-sky-500 border-gray-200  shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-cyan-700">
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img
                        class="rounded-t-lg img"
                        src="https://images.pexels.com/photos/11280357/pexels-photo-11280357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                      />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Noteworthy technology acquisitions 2021
                        </h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                      <a
                        href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Read more
                        <svg
                          class="w-3.5 h-3.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className=" p-6 border-dashed border-2 border-sky-500 border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-fuchsia-700">
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img
                        class="rounded-t-lg img"
                        src="https://images.pexels.com/photos/11280357/pexels-photo-11280357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                      />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Noteworthy technology acquisitions 2021
                        </h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                      <a
                        href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Read more
                        <svg
                          class="w-3.5 h-3.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* end grid 2*/}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Project;
