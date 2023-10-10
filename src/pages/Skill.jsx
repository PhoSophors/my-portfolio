import animation_skills from "../assets/lottie/animation_skills.json";
import Lottie from "lottie-react";
import "../assets/css/skill.css";
import { skillsSection } from "../assets/data/data";

const Skill = () => {
  return (
    <>
      <section
        id="skill"
        className="reveal fade-bottom flex max-w-screen-2xl mx-auto p-5 xl:h-screen md:h-full sm:h-full flex-col-reverse xl:flex-row gap-0 items-center justify-center "
      >
        <div className="fade-left reveal  p-5 sm:p-6">
            <Lottie animationData={animation_skills} />
        </div>

        <div className="mx:w-full items-center mx-auto">
          {/* title and subtitle */}
          <h1 className="skill-intro text-center ">{skillsSection.title}</h1>
          <span className="subTitle dark:text-gray-400 text-center reveal fade-left ">{skillsSection.subTitle}</span>

          {/* programming languages section*/}
          <section className="reveal fade-left ">
            <span className="descrip text-center">+ Programming</span>
            <div className="w-full flex md:justify-center">
              <div className="mx-auto flex  ">
                <div className="felx grid grid-cols-4 md:grid-cols-7 lg:grid-cols-7 gap-1">
                  {skillsSection.programming.map((skills, i) => {
                    return (
                      <div className="block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        key={i}
                      >
                        <div className=" font-normal text-center dark:text-gray-400">
                          {skills.skillName}
                        </div>
                        <p className="font-normal text-center tp dark:text-red-400">
                        <p>{skills.percentage}</p>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* framework and tool section */}
          <section className="reveal fade-right ">
            <span className="descrip text-center">+ Framework & Style</span>
            <div className="w-full flex  md:justify-center">
              <div className="mx-auto flex ">
                <div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-1">
                  {skillsSection.framework.map((skills, i) => {
                    return (
                      <div className="block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        key={i}
                      >
                        <div className=" font-normal text-center tp dark:text-gray-400">
                          {skills.skillName}
                        </div>
                        <p className="font-normal text-center tp dark:text-red-400">
                        <p>{skills.percentage}</p>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* database and tool section*/}
          <section className="reveal fade-bottom ">
            <span className="descrip text-center">+ Database & Tool</span>
            <div className="w-full flex ">
              <div className="mx-auto flex">
                <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-1">
                  {skillsSection.database.map((skills, i) => {
                    return (
                      <div className="block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        key={i}
                      >
                        <div className=" font-normal text-center tp dark:text-gray-400">
                          {skills.skillName}
                        </div>
                        <p className="font-normal text-center tp dark:text-red-400">
                        <p>{skills.percentage}</p>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* <span className="subTitle dark:text-gray-400 xl:p-10"> {skillsSection.skills}</span> */}
        </div>
      </section>
    </>
  );
};

export default Skill;
