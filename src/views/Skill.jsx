import animation_skills from "../assets/lottie/animation_skills.json";
import Lottie from "lottie-react";
import "../assets/css/skill.css";
import { programming, frameworks, database } from "../assets/data/data";
import { Card, CardBody, Typography } from "@material-tailwind/react";

function Skill() {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row gap-10 items-center justify-center ">
        <div className="p-5">
          <div className="xl:p-10">
            <Lottie animationData={animation_skills} />
          </div>

          <span className="descrip xl:p-10">
            🧑‍💻 Develop highly interactive Front end / User Interfaces for your
            web and mobile applications <br />
            🧑‍💻 Progressive Web Applications ( PWA ) in normal and SPA Stacks{" "}
            <br />
            🧑‍💻 Integration of third party services such as Firebase/ AWS /
            Digital Ocean
          </span>
        </div>

        <div className=" fade-left w-full p-5 sm:p-6 items-center mx-auto">
          <h1 className="skill-intro">What I do!</h1>

          <span className="descrip">Programming</span>
          <div className="w-full">
            <div className="mx-auto flex ">
              <div className="grid grid-cols-3 lg:grid-cols-8 gap-1">
                {programming.map((item) => {
                  return (
                    <>
                      <Card
                        className="flex items-center"
                        key={item.id}
                        item={item}
                      >
                        <img
                          className="items-center"
                          src={item.img}
                          alt="card-image"
                        />
                        <CardBody className="pt-5">
                          <Typography color="blue-gray">
                            {item.title}
                          </Typography>
                          <Typography>{item.percentage}</Typography>
                        </CardBody>
                      </Card>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <span className="descrip">Frameworks</span>
          <div className="w-full">
            <div className="mx-auto flex ">
              <div className="grid grid-cols-3 lg:grid-cols-7 gap-1">
                {frameworks.map((item) => {
                  return (
                    <>
                      <Card
                        className="flex items-center"
                        key={item.id}
                        item={item}
                      >
                        <img
                          className="items-center"
                          src={item.img}
                          alt="card-image"
                        />
                        <CardBody className="pt-5">
                          <Typography color="blue-gray">
                            {item.title}
                          </Typography>
                          <Typography>{item.percentage}</Typography>
                        </CardBody>
                      </Card>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <span className="descrip">Database</span>
          <div className="w-full">
            <div className="mx-auto flex ">
              <div className="grid grid-cols-2 lg:grid-cols-3 flex items-center gap-1">
                {database.map((item) => {
                  return (
                    <>
                      <Card
                        className="flex items-center"
                        key={item.id}
                        item={item}
                      >
                        <img
                          className="items-center"
                          src={item.img}
                          alt="card-image"
                        />
                        <CardBody className="pt-5">
                          <Typography color="blue-gray">
                            {item.title}
                          </Typography>
                          <Typography>{item.percentage}</Typography>
                        </CardBody>
                      </Card>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skill;
