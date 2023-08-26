import React from "react";
import ".././assets/css/expertiseStyle.css";
import '../assets/css/reveal.css';
import '../components/Reveal';
import { motion } from "framer-motion";

export default function Expertise() {
  return (
    <>
      <div id="expertise">
        <section class="bg-white dark:bg-gray-900">
          <div class=" py-1 px-4 xl:h-screen md:h-full sm:h-full flex items-center mx-auto max-w-screen-xl lg:grid  lg:py-1 ">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <br />
              <br />
              <h2 class="mb-4 text-lg tracking-tight text-center font-extrabold text-gray-900 dark:text-white">
                My Expertise
              </h2>
              <br />
              <br />
              {/* grid */}
              <div class="grid grid-cols-1  md:grid-cols-3 gap-4 ">
                <div className="reveal fade-left p-10 border-dashed rounded-3xl border-2 border-sky-500 border-gray-200  shadow hover:bg-gray-100  dark:border-gray-700 dark:hover:bg-yellow-700">
                  <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                    Software Development
                  </h5>
                  <motion.div
                    whileHover={{ scale: [null, 1.1, 1.1] }}
                    transition={{ duration: 0.3 }}
                    className="border rounded-3xl dark:bg-gray-800 mt-10 p-10 h-50"
                  >
                    <p>
                      Experienced in both functional and OOP: C Programming,
                      C++, Java, JavaScript, TypeScript.
                    </p>
                  </motion.div>
                </div>

                <div className="reveal fade-bottom p-6 rounded-3xl  border-dashed border-2 border-sky-500 border-gray-200  shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-cyan-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Frontend Dev React, VueJS
                  </h5>
                  <motion.div
                    whileHover={{ scale: [null, 1.1, 1.1] }}
                    transition={{ duration: 0.3 }}
                    className="border rounded-3xl dark:bg-gray-800 mt-10 p-10 h-50"
                  >
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Passionate about UI/UX. Over 2 years of development
                      experience in HTML, CSS, JS, React and VueJS frameworks.
                    </p>
                  </motion.div>
                </div>

                <div className="reveal fade-right p-6 rounded-3xl border-dashed border-2 border-sky-500 border-gray-200 shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-fuchsia-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Backend Dev Laravel
                  </h5>
                  <motion.div
                    whileHover={{ scale: [null, 1.1, 1.1] }}
                    transition={{ duration: 0.3 }}
                    className="border rounded-3xl dark:bg-gray-800 mt-10 p-10 h-50"
                  >
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Over 1 years of development experience in Laravel
                      frameworks.
                    </p>
                  </motion.div>
                </div>
              </div>
              {/* end grid */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
