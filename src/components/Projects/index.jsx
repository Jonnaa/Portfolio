import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../Footer";
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

  const [imgIndex, setImgIndex] = useState(0);
  const [projDisplay, setProjDisplay] = useState(0);
  const [leftIsClicked, setLeftIsClicked] = useState(false);
  const [centerIsClicked, setCenterIsClicked] = useState(false);
  const [rightIsClicked, setRightIsClicked] = useState(false);

  const tempoInfo = {
    name: "Tempo",
    gh: "https://github.com/amerazo/spotify_clone",
    web: "https://tempoproject-1ccff4d917c0.herokuapp.com/home/",
    desc: "Built with Python, Django, PSQL. Full stack application that utilizes Spotify's API to display artists, top tracks, and lets users play songs.",
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
    desc: "Built with JavaScript, Express.JS, MongoDB, Node.JS. Full stack application that displays K-Dramas with reviews, and allows the user to add K-Dramas to a watchlist.",
    imgs: [
      { id: 1, location: "kdramasScreenshots/HomePage.jpg", name: "Home" },
      {
        id: 2,
        location: "kdramasScreenshots/Reviews.jpg",
        name: "Artist Index",
      },
      {
        id: 3,
        location: "kdramasScreenshots/ReviewDetails.jpg",
        name: "Artist Detail",
      },
      {
        id: 4,
        location: "kdramasScreenshots/EditReviewPage.jpg",
        name: "Player",
      },
      {
        id: 5,
        location: "kdramasScreenshots/WatchlistPage.jpg",
        name: "Merch Index",
      },
    ],
  };
  const kitInfo = {
    name: "KIT",
    gh: "https://github.com/Jonnaa/KIT",
    web: "https://keepintouch-8d0a86903f9e.herokuapp.com/",
    desc: "Built with JavaScript, MongoDB, Express.JS, React.JS, Node.JS. Full stack application that allows users to sign up, upload pictures, and comment on pictures.",
    imgs: [
      {
        id: 1,
        location: "kitScreenshots/LandingPageLoggedIn.jpg",
        name: "Artist Index",
      },
      {
        id: 2,
        location: "kitScreenshots/PostDetails.jpg",
        name: "Artist Detail",
      },
      {
        id: 3,
        location: "kitScreenshots/CreatePost.jpg",
        name: "Player",
      },
      {
        id: 4,
        location: "kitScreenshots/Login.jpg",
        name: "Merch Index",
      },
    ],
  };

  // Variable that displays detailed version of whichever project is clicked
  let currentProject = (
    <div className="bg-black rounded-lg">
      <h1 className="w-full text-center text-2xl md:text-4xl animate-pulse">
        Please click on a project!
      </h1>
    </div>
  );

  if (projDisplay === 1) {
    currentProject = (
      <Project info={tempoInfo} imgIndex={imgIndex} setImgIndex={setImgIndex} />
    );
  } else if (projDisplay === 2) {
    currentProject = (
      <Project
        info={kdramasInfo}
        imgIndex={imgIndex}
        setImgIndex={setImgIndex}
      />
    );
  } else if (projDisplay === 3) {
    currentProject = (
      <Project info={kitInfo} imgIndex={imgIndex} setImgIndex={setImgIndex} />
    );
  }

  return (
    <div className="min-h-[calc(100vh)] relative" id="projects">
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
        className="w-11/12 md:w-11/12 lg:w-10/12 lg:max-w-[850px] xl:max-w-[900px] min-h-[calc(80vh)] mx-auto flex justify-center flex-col pt-1 sm:pt-8 lg:pt-4 xl:pt-7 gap-4 sm:gap-3 lg:gap-5"
      >
        {/* Div holds projects - small versions */}
        <div
          ref={smallProjectRef}
          className="flex flex-wrap justify-center sm:gap-3 w-full mx-auto text-center text-sm md:text-md"
        >
          {/* Project 1 Div */}
          <motion.div
            style={{
              x: leftProjectX,
              filter: leftIsClicked ? "blur(5px)" : "blur(0px)",
              opacity: leftIsClicked ? 0.5 : 1,
            }}
            whileHover={{
              filter: leftIsClicked ? "blur(.5px)" : null,
              opacity: 1,
            }}
            className="w-1/3 sm:w-1/4 p-[1.5px] bg-purple-400 shadow-md shadow-purple-400/50 hover:shadow-lg hover:shadow-purple-400/75 rounded-lg transition-all"
          >
            <div
              className="w-full bg-black cursor-pointer rounded-lg"
              onClick={() => {
                setLeftIsClicked(!leftIsClicked);
                setImgIndex(0);
                setProjDisplay(1);
              }}
            >
              <h2>Tempo</h2>
              <div>
                <img
                  src={tempoInfo.imgs[0].location}
                  alt=""
                  className="rounded-b-md"
                />
              </div>
            </div>
          </motion.div>

          {/* Project 2 Div */}
          <motion.div
            style={{
              filter: centerIsClicked ? "blur(5px)" : "blur(0px)",
              opacity: centerIsClicked ? 0.5 : 1,
            }}
            whileHover={{
              filter: centerIsClicked ? "blur(.5px)" : null,
              opacity: 1,
            }}
            className="w-1/3 sm:w-1/4 p-[1.5px] bg-purple-400 shadow-md shadow-purple-400/50 hover:shadow-lg hover:shadow-purple-400/75 rounded-lg transition-all"
          >
            <div
              className="w-full bg-black cursor-pointer rounded-lg"
              onClick={() => {
                setCenterIsClicked(!centerIsClicked);
                setImgIndex(0);
                setProjDisplay(2);
              }}
            >
              <h2>KDramas</h2>
              <div>
                <img
                  src={kdramasInfo.imgs[0].location}
                  alt=""
                  className="rounded-b-md"
                />
              </div>
            </div>
          </motion.div>

          {/* Project 3 Div */}
          <motion.div
            style={{
              x: rightProjectX,
              filter: rightIsClicked ? "blur(5px)" : "blur(0px)",
              opacity: rightIsClicked ? 0.5 : 1,
            }}
            whileHover={{
              filter: rightIsClicked ? "blur(.5px)" : null,
              opacity: 1,
            }}
            className="w-1/3 sm:w-1/4 p-[1.5px] bg-purple-400 shadow-md shadow-purple-400/50 hover:shadow-lg hover:shadow-purple-400/75 rounded-lg transition-all"
          >
            <div
              className="w-full bg-black cursor-pointer rounded-lg"
              onClick={() => {
                setRightIsClicked(!rightIsClicked);
                setImgIndex(0);
                setProjDisplay(3);
              }}
            >
              <h2>KIT</h2>
              <div>
                <img
                  src={kitInfo.imgs[0].location}
                  alt=""
                  className="rounded-b-md"
                />
              </div>
            </div>
          </motion.div>
        </div>
        {/* Large version of the project selected, starts as a placeholder */}
        <div className="rounded-lg p-[1.5px] bg-purple-400 shadow-md shadow-purple-400/50 w-full mx-auto max-w-[750px]">
          {currentProject}
        </div>
        <Footer/>
      </motion.div>
    </div>
  );
};

export default Projects;
