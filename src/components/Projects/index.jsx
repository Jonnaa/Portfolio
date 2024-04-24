import { useState } from "react";
import Project from "../Project";

const Projects = () => {
  const tempoImgs = [
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
    { id: 5, location: "tempoScreenshots/MerchIndex.jpg", name: "Merch Index" },
    {
      id: 6,
      location: "tempoScreenshots/MerchDetail.jpg",
      name: "Merch Detail",
    },
  ];
  const kdramasImgs = [
    { id: 1, location: "kdramasScreenshots/Home Page.jpg", name: "Home" },
    { id: 2, location: "kdramasScreenshots/Reviews.jpg", name: "Artist Index" },
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
  ];

  const kitImgs = [
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
  ];

  const [projDisplay, setProjDisplay] = useState(0);

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
    <h1 className="w-full text-center pt-44 text-4xl animate-pulse">
      Please click on a project!
    </h1>
  );

  if (projDisplay === 1) {
    currentProject = <Project imgs={tempoImgs} name={"Tempo"} />;
  } else if (projDisplay === 2) {
    currentProject = <Project imgs={kdramasImgs} name={"KDramas"} />;
  } else if (projDisplay === 3) {
    currentProject = <Project imgs={kitImgs} name={"KIT"} />;
  }

  return (
    <div className="min-h-[calc(100vh)]" id="projects">
      <h1 className="text-4xl sticky top-1 z-40 w-96 mx-auto text-center">
        Projects
      </h1>
      {/* Projects page contents */}
      <div className="w-11/12 md:w-10/12 lg:w-9/12 lg:max-w-[1000px] min-h-[calc(80vh)] mx-auto relative flex justify-center flex-col pt-10 gap-10 lg:gap-10">
        {/* Div holds projects - small versions */}
        <div className="flex flex-wrap justify-center gap-3 w-full mx-auto relative text-center md:text-md">
          {/* Project 1 Div */}
          <div className="md:w-1/4 p-[1.5px] bg-purple-400">
            <div
              className="w-full bg-black cursor-pointer"
              onClick={() => {
                switchDisplay(1);
              }}
            >
              <h2>Tempo</h2>
              <div>
                <img src={tempoImgs[0].location} alt="" />
              </div>
            </div>
          </div>

          {/* Project 2 Div */}
          <div className="md:w-1/4 p-[1.5px] bg-purple-400">
            <div
              className="w-full bg-black cursor-pointer"
              onClick={() => {
                switchDisplay(2);
              }}
            >
              <h2>KDramas</h2>
              <div>
                <img src={kdramasImgs[0].location} alt="" />
              </div>
            </div>
          </div>

          {/* Project 3 Div */}
          <div className="md:w-1/4 p-[1.5px] bg-purple-400">
            <div
              className="w-full bg-black cursor-pointer"
              onClick={() => {
                switchDisplay(3);
              }}
            >
              <h2>KIT</h2>
              <div>
                <img src={kitImgs[0].location} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Large version of the project selected, starts as a placeholder */}
        <div className=" p-[1.5px] bg-purple-400 w-full mx-auto">{currentProject}</div>
      </div>
    </div>
  );
};

export default Projects;
