import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const AboutMe = () => {
  const pClasses = "w-3/4 max-w-[700px] mx-auto md:text-lg md:w-3/5";
  const iconClasses = "basis-1/5 flex flex-col justify-between";

  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "half",
    once: true,
  });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  const icons = [
    { id: 1, location: "skillsIcons/react.svg", name: "React" },
    { id: 2, location: "skillsIcons/pythonIcon.png", name: "Python" },
    { id: 3, location: "skillsIcons/js.png", name: "JavaScript" },
    { id: 4, location: "skillsIcons/html.png", name: "HTML" },
    { id: 5, location: "skillsIcons/cssIcon.png", name: "CSS" },
    { id: 6, location: "skillsIcons/tailwind.png", name: "Tailwind" },
    { id: 7, location: "skillsIcons/nodejs.png", name: "NodeJs" },
    { id: 8, location: "skillsIcons/ejs.png", name: "ExpressJs" },
    { id: 9, location: "skillsIcons/mdb.svg", name: "MongoDB" },
    { id: 10, location: "skillsIcons/psql.png", name: "ProgreSQL" },
  ];

  return (
    <div className="min-h-[calc(100vh)]" id="aboutMe">
      <h1 className="text-4xl w-48 md:w-96 mx-auto text-center sticky top-1 z-40">
        About Me
      </h1>
      <div className="h-screen flex flex-col justify-center gap-10">
        <div>
          <p className={pClasses}>
            Hello! I'm Jonathan. I am a full-stack software engineer with an
            educational background in computer science and a hands-on experience
            at a full-stack bootcamp.
            <br />
            <br />
          </p>
          <p className={pClasses}>
            I am fully capable and ready to be your full-stack, frontend, or
            backend software engineer.
            <br />
            <br />
          </p>
          <p className={pClasses}>
            Beyond my professional life, my hobbies include playing video games,
            watching movies, and bouldering.
          </p>
        </div>
        <div className="w-4/5 max-w-[800px] h-1 rounded-lg mx-auto bg-slate-600"></div>
        <div>
          <h2 className="text-center text-2xl underline decoration-slate-600">
            Skills
          </h2>
          <div
            ref={ref}
            className="w-3/4 max-w-[600px] mx-auto text-center flex flex-wrap gap-y-10"
          >
            {icons.map((icon, i) => (
              <motion.div
                key={icon.id}
                className={iconClasses}
                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  translateX: isInView ? 0 : -50,
                  translateY: isInView ? 0 : -50,
                }}
                transition={{ duration: 0.3, delay: i * 0.3 }}
              >
                <img
                  src={icon.location}
                  alt={icon.name + " icon"}
                  className="w-4/5 m-auto"
                  title={icon.name}
                />
                <p>{icon.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
