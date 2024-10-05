/* eslint-disable react/no-unescaped-entities */
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const AboutMe = () => {
  const pClasses =
    "w-4/5 sm:w-3/4 max-w-[500px] mx-auto text-base md:text-lg md:w-3/5";

  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "half",
    once: true,
  });

  const h1Ref = useRef(null);
  const wholeRef = useRef(null);
  const { scrollYProgress } = useScroll([
    {
      target: h1Ref,
      offset: ["start end", "end start"],
    },
    {
      target: wholeRef,
      offset: ["start end", "end start"],
    },
  ]);

  const h1Opacity = useTransform(scrollYProgress, [0.05, 0.45], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.45, 0.94], [0, 1, 0]);
  // const scale = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);

  // useEffect(() => {
  //   console.log(isInView);
  // }, [isInView]);

  const icons = [
    { id: 1, location: "skillsIcons/react.svg", name: "React" },
    { id: 2, location: "skillsIcons/pythonIcon.png", name: "Python" },
    { id: 3, location: "skillsIcons/js.png", name: "JavaScript" },
    { id: 4, location: "skillsIcons/html.png", name: "HTML" },
    { id: 5, location: "skillsIcons/cssIcon.png", name: "CSS" },
    { id: 6, location: "skillsIcons/tailwind.png", name: "Tailwind" },
    { id: 7, location: "skillsIcons/nodejs.png", name: "NodeJS" },
    { id: 8, location: "skillsIcons/ejs.png", name: "ExpressJS" },
    { id: 9, location: "skillsIcons/mdb.svg", name: "MongoDB" },
    { id: 10, location: "skillsIcons/psql.png", name: "PostgreSQL" },
    {
      id: 10,
      location: "skillsIcons/framer-motion-logo.png",
      name: "FramerMotion",
    },
  ];

  return (
    <div className="min-h-[calc(100vh)]" id="aboutMe">
      <motion.h1
        ref={h1Ref}
        style={{ opacity: h1Opacity }}
        className="font-semibold text-3xl sm:text-4xl w-40 sm:w-56 mx-auto text-center sticky top-0 sm:top-1 z-20"
      >
        About Me
      </motion.h1>
      <motion.div
        ref={wholeRef}
        style={{ opacity }}
        className="min-h-[calc(80vh)] mt-8 sm:mt-10 flex flex-col justify-center gap-3 sm:gap-6 tracking-wide"
      >
        <div>
          <p className={pClasses}>
            Hello! I'm Jonathan. I'm a software developer with an educational
            background in computer science and a hands-on experience at a
            full-stack bootcamp.
            <br />
            <br />
          </p>
          <p className={pClasses}>
            I'm fully capable and ready to be your software developer.
            <br />
            <br />
          </p>
          <p className={pClasses}>
            Beyond my professional life, my hobbies include playing video games,
            watching movies, and bouldering.
          </p>
        </div>
        <div className="w-4/5 max-w-[800px] h-1 rounded-lg mx-auto bg-purple-400"></div>
        <div>
          <h2 className="text-center text-2xl sm:text-2xl lg:text-3xl sm:mb-4 underline decoration-purple-400">
            Skills
          </h2>
          <div
            ref={ref}
            className="w-11/12 sm:w-3/4 max-w-[550px] mx-auto text-center flex flex-wrap justify-center gap-x-4 sm:gap-x-0 gap-y-1 sm:gap-y-5"
          >
            {icons.map((icon, i) => (
              <motion.div
                key={icon.id}
                className="basis-1/4 sm:basis-1/4 flex flex-col justify-between text-sm sm:text-base max-w-[100px] sm:max-w-[120px] p-1"
                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  translateX: isInView ? 0 : -50,
                  translateY: isInView ? 0 : -50,
                }}
                transition={{ duration: 0.3, delay: i * 0.25 }}
              >
                <img
                  src={icon.location}
                  alt={icon.name + " icon"}
                  className="w-1/2 sm:max-w-[70%] max-h-[80px] m-auto"
                  title={icon.name}
                />
                <p>{icon.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
