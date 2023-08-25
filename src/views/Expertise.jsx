import React from "react";
import ".././assets/css/expertiseStyle.css";
import { motion } from "framer-motion";

import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(-500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Expertise() {
  return (
    <>
      <div className="my-expertise" id="expertise">
        <section class="bg-white  dark:bg-gray-900">
          <div class=" py-1 px-4 xl:h-screen md:h-full sm:h-full flex items-center mx-auto max-w-screen-xl lg:grid  lg:py-1 ">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <br />
              <br />
              <h2 class="mb-4 tracking-tight text-center font-extrabold text-gray-900 dark:text-white">
                My Expertise
              </h2>
              <br />
              <br />
              {/* grid */}
              <div class="grid  grid-cols-1 md:grid-cols-3 gap-4 ">
                <motion.div
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  className=" p-6 border-dashed border-2 border-sky-500 border-gray-200  shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-yellow-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Software Development
                  </h5>
                  <div className="border mt-10 p-10">
                    <p>
                      Experienced in both functional and OOP: C Programming,
                      C++, Java, JavaScript, TypeScript.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }} className=" p-6  border-dashed border-2 border-sky-500 border-gray-200  shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-cyan-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Frontend Dev React, VueJS
                  </h5>
                  <div className="border mt-10 p-10">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Passionate about UI/UX. Over 2 years of development
                      experience in HTML, CSS, JS, React and VueJS frameworks.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }} className=" p-6 border-dashed border-2 border-sky-500 border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-fuchsia-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Backend Dev Laravel
                  </h5>
                  <div className="border  mt-10 p-10 h-50">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Over 1 years of development experience in Laravel
                      frameworks.
                    </p>
                  </div>
                </motion.div>
              </div>
              {/* end grid */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
