import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import Project from "../Project";

const Projects = () => {
  const h1Ref = useRef(null);
  const wholeRef = useRef(null);
  const smallProjectRef = useRef(null);

  const { scrollYProgress } = useScroll([
    {
      target: h1Ref,
      offset: ["start end", "end start"],
    },
    {
      target: wholeRef,
      offset: ["start end", "end start"],
    },
    {
      target: smallProjectRef,
      offset: ["start end", "end start"],
    },
  ]);
  const h1Opacity = useTransform(scrollYProgress, [0.48, 0.95], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.65, 0.98], [0, 1]);
  const leftProjectX = useTransform(scrollYProgress, [0.65, 0.9], [230, 0]);
  const rightProjectX = useTransform(scrollYProgress, [0.65, 0.9], [-230, 0]);
  const [projDisplay, setProjDisplay] = useState(0);

  const tempoInfo = {
    name: "Tempo",
    gh: "https://github.com/amerazo/spotify_clone",
    web: "https://tempoproject-1ccff4d917c0.herokuapp.com/home/",
    desc: "Built with Python, Django, PSQL.Full-stack application that utilizes Spotify's API to display artists, top tracks, and lets users play songs.",
    imgs: [
      { id: 1, location: "tempoScreenshots/Home.jpg", name: "Home" },
      {
        id: 2,
        location: "tempoScreenshots/ArtistIndex.jpg",
        name: "Artist Index",
      },
      {
        id: 3,
        location: "tempoScreenshots/ArtistDetail.jpg",
        name: "Artist Detail",
      },
      { id: 4, location: "tempoScreenshots/Player.jpg", name: "Player" },
      {
        id: 5,
        location: "tempoScreenshots/MerchIndex.jpg",
        name: "Merch Index",
      },
      {
        id: 6,
        location: "tempoScreenshots/MerchDetail.jpg",
        name: "Merch Detail",
      },
    ],
  };
  const kdramasInfo = {
    name: "KDramas",
    gh: "https://github.com/Jonnaa/KDramaWatchList",
    web: "https://kdramas-4e345146c0e4.herokuapp.com/",
    desc: "Built with Express.JS, MongoDB, Node.JS. Full-stack application that displays K-Dramas with reviews, and allows the user to add K-Dramas to a watchlist.",
    imgs: [
      { id: 1, location: "kdramasScreenshots/Home Page.jpg", name: "Home" },
      {
        id: 2,
        location: "kdramasScreenshots/Reviews.jpg",
        name: "Artist Index",
      },
      {
        id: 3,
        location: "kdramasScreenshots/Review Details.jpg",
        name: "Artist Detail",
      },
      {
        id: 4,
        location: "kdramasScreenshots/Edit Review Page.jpg",
        name: "Player",
      },
      {
        id: 5,
        location: "kdramasScreenshots/Watchlist Page.jpg",
        name: "Merch Index",
      },
    ],
  };
  const kitInfo = {
    name: "KIT",
    gh: "https://github.com/Jonnaa/KIT",
    web: "https://keepintouch-8d0a86903f9e.herokuapp.com/",
    desc: "Built with MongoDB, Express.JS, React.JS, Node.JS. Full-stack application that allows users to sign up, upload pictures, and comment on pictures.",
    imgs: [
      {
        id: 1,
        location: "kitScreenshots/Landing Page -Logged in.jpg",
        name: "Artist Index",
      },
      {
        id: 2,
        location: "kitScreenshots/Post Details.jpg",
        name: "Artist Detail",
      },
      {
        id: 3,
        location: "kitScreenshots/Create Post.jpg",
        name: "Player",
      },
      {
        id: 4,
        location: "kitScreenshots/Login.jpg",
        name: "Merch Index",
      },
    ],
  };

  function switchDisplay(val) {
    if (val === 1) {
      setProjDisplay(1);
    } else if (val === 2) {
      setProjDisplay(2);
    } else if (val === 3) {
      setProjDisplay(3);
    } else {
      setProjDisplay(0);
    }
  }

  // Variable that displays detailed version of whichever project is clicked
  let currentProject = (
    <div className="bg-black">
      <h1 className="w-full text-center text-2xl md:text-4xl animate-pulse">
        Please click on a project!
      </h1>
    </div>
  );

  if (projDisplay === 1) {
    currentProject = <Project info={tempoInfo} />;
  } else if (projDisplay === 2) {
    currentProject = <Project info={kdramasInfo} />;
  } else if (projDisplay === 3) {
    currentProject = <Project info={kitInfo} />;
  }

  return (
    <div className="min-h-[calc(100vh)]" id="projects">
      <motion.h1
        ref={h1Ref}
        style={{ opacity: h1Opacity }}
        className="font-semibold text-3xl sm:text-4xl w-40 sm:w-56 mx-auto text-center sticky top-1 z-40"
      >
        Projects
      </motion.h1>
      {/* Projects page contents */}
      <motion.div
        ref={wholeRef}
        style={{ opacity }}
        className="w-11/12 md:w-10/12 lg:w-9/12 lg:max-w-[1000px] min-h-[calc(80vh)] mx-auto relative flex justify-center flex-col pt-10 gap-10 lg:gap-10"
      >
        {/* Div holds projects - small versions */}
        <div
          ref={smallProjectRef}
          className="flex flex-wrap justify-center sm:gap-3 w-full mx-auto relative text-center text-sm md:text-md"
        >
          {/* Project 1 Div */}
          <motion.div
            style={{ x: leftProjectX }}
            className="w-1/3 sm:w-1/4 p-[1.5px] bg-purple-400 shadow-md shadow-purple-400/50 hover:shadow-lg hover:shadow-purple-400/75 rounded-lg"
          >
            <div
              className="w-full bg-black cursor-pointer rounded-lg"
              onClick={() => {
                switchDisplay(1);
              }}
            >
              <h2>Tempo</h2>
              <div>
                <img src={tempoInfo.imgs[0].location} alt="" className="rounded-b-md"/>
              </div>
            </div>
          </motion.div>

          {/* Project 2 Div */}
          <div className="w-1/3 sm:w-1/4 p-[1.5px] bg-purple-400 shadow-md shadow-purple-400/50 hover:shadow-lg hover:shadow-purple-400/75 rounded-lg">
            <div
              className="w-full bg-black cursor-pointer rounded-lg"
              onClick={() => {
                switchDisplay(2);
              }}
            >
              <h2>KDramas</h2>
              <div>
                <img src={kdramasInfo.imgs[0].location} alt="" className="rounded-b-md"/>
              </div>
            </div>
          </div>

          {/* Project 3 Div */}
          <motion.div
            style={{ x: rightProjectX }}
            className="w-1/3 sm:w-1/4 p-[1.5px] bg-purple-400 shadow-md shadow-purple-400/50 hover:shadow-lg hover:shadow-purple-400/75 rounded-lg"
          >
            <div
              className="w-full bg-black cursor-pointer rounded-lg"
              onClick={() => {
                switchDisplay(3);
              }}
            >
              <h2>KIT</h2>
              <div>
                <img src={kitInfo.imgs[0].location} alt="" className="rounded-b-md"/>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Large version of the project selected, starts as a placeholder */}
        <div className="rounded-lg p-[1.5px] bg-purple-400 shadow-md shadow-purple-400/50 w-full mx-auto">
          {currentProject}
        </div>
      </motion.div>
      <div className="flex justify-center gap-24 mt-5">
        <a
          href="https://www.linkedin.com/in/jonathannavarroswe/"
          className="bg-rose-200 shadow-md shadow-rose-200/50 hover:shadow-lg hover:bg-purple-400 hover:shadow-purple-400/50 text-black rounded-lg p-1 sm:p-2 sm:text-lg font-bold"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://docs.google.com/document/d/10ivZXeMhmoGI26BLo_NN6eRzhNStdY4wbLfrHfhqQtQ/edit?usp=sharing"
          className=" bg-rose-200 shadow-md shadow-rose-200/50 hover:shadow-lg hover:bg-purple-400 hover:shadow-purple-400/50 text-black rounded-lg p-1 sm:p-2 sm:text-lg font-bold "
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Projects;
