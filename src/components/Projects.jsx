import { useState } from "react";

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

  const [currentTempoImg, setCurrentTempoImg] = useState(0);
  const [currentKdramasImg, setCurrentKdramasImg] = useState(0);
  const [currentKitImg, setCurrentKitImg] = useState(0);
  const [projDisplay, setProjDisplay] = useState(0);

  function switchDisplay(val) {
    if (val === 1) {
      setProjDisplay(1);
      setCurrentKdramasImg(0);
      setCurrentKitImg(0);
    } else if (val === 2) {
      setProjDisplay(2);
      setCurrentTempoImg(0);
      setCurrentKitImg(0);
    } else if (val === 3) {
      setProjDisplay(3);
      setCurrentTempoImg(0);
      setCurrentKdramasImg(0);
    } else {
      setProjDisplay(0);
    }
  }

  // onclick handler for prev button
  function handlePrev(event) {
    let projName = event.target.className;
    projName = projName.substring(0, projName.indexOf(" "));
    switch (projName) {
      case "tempo":
        if (currentTempoImg >= 1) {
          setCurrentTempoImg(currentTempoImg - 1);
        } else {
          setCurrentTempoImg(tempoImgs.length - 1);
        }
        break;
      case "kdramas":
        if (currentKdramasImg >= 1) {
          setCurrentKdramasImg(currentKdramasImg - 1);
        } else {
          setCurrentKdramasImg(kdramasImgs.length - 1);
        }
        break;
      case "kit":
        if (currentKitImg >= 1) {
          setCurrentKitImg(currentKitImg - 1);
        } else {
          setCurrentKitImg(kitImgs.length - 1);
        }
        break;
    }
  }

  // onclick handler for next button
  function handleNext(event) {
    let projName = event.target.className;
    projName = projName.substring(0, projName.indexOf(" "));
    switch (projName) {
      case "tempo":
        if (currentTempoImg < tempoImgs.length - 1) {
          setCurrentTempoImg(currentTempoImg + 1);
        } else {
          setCurrentTempoImg(0);
        }
        break;
      case "kdramas":
        if (currentKdramasImg < kdramasImgs.length - 1) {
          setCurrentKdramasImg(currentKdramasImg + 1);
        } else {
          setCurrentKdramasImg(0);
        }
        break;
      case "kit":
        if (currentKitImg < kitImgs.length - 1) {
          setCurrentKitImg(currentKitImg + 1);
        } else {
          setCurrentKitImg(0);
        }
        break;
    }
  }

  // Variable that displays detailed version of whichever project is clicked
  let currentProject = (
    <h1 className="w-full text-center pt-44 text-4xl animate-pulse">
      Please click on a project!
    </h1>
  );

  if (projDisplay === 1) {
    currentProject = (
      <div className="relative w-full h-full flex flex-col items-center">
        <h1 className="w-full flex flex-col justify-center text-center text-2xl">
          Tempo
        </h1>
        {/* <div className="relative flex justify-center w-full h-full">
          <button onClick={handlePrev} type="button" id="tempo" className="tempo w-1/12 border">
            Prev
          </button>
          <img
            src={tempoImgs[currentTempoImg].location}
            alt=""
            className="w-6/12"
          />
          <button onClick={handleNext} type="button" className="tempo w-1/12 border">
            Next
          </button>
        </div> */}
        <div className="snap-x snap-mandatory flex flex-nowrap overflow-x-auto w-1/2 mx-auto">
          {tempoImgs.map((tempoImg) => (
            <div
              key={tempoImg.id}
              className="snap-start snap-always shrink-0 w-full"
            >
              <img src={tempoImg.location} alt={tempoImg.name}/>
            </div>
          ))}
        </div>
        <div>GitHub Website</div>
      </div>
    );
  } else if (projDisplay === 2) {
    currentProject = (
      <div className="relative w-full h-full">
        <h1 className="w-full flex flex-col justify-center text-center text-2xl">
          KDramas
        </h1>
        <div className="relative flex justify-center">
          <button onClick={handlePrev} className="kdramas w-1/12 border">
            Prev
          </button>
          <img
            src={kdramasImgs[currentKdramasImg].location}
            alt=""
            className="w-6/12"
          />
          <button onClick={handleNext} className="kdramas w-1/12 border">
            Next
          </button>
        </div>
        <div>Desc</div>
      </div>
    );
  } else if (projDisplay === 3) {
    currentProject = (
      <div className="relative w-full h-full">
        <h1 className="w-full flex flex-col justify-center text-center text-2xl">
          KIT
        </h1>
        <div className="relative flex justify-center">
          <button onClick={handlePrev} className="kit w-1/12 border">
            Prev
          </button>
          <img
            src={kitImgs[currentKitImg].location}
            alt=""
            className="w-6/12"
          />
          <button onClick={handleNext} className="kit w-1/12 border">
            Next
          </button>
        </div>
        <div>Desc</div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh)]" id="projects">
      <h1 className="text-4xl sticky top-1 z-40 w-96 mx-auto text-center">
        Projects
      </h1>
      {/* Projects page contents */}
      <div className="w-full relative flex justify-between gap-4 flex-col pt-20">
        {/* Div holds projects - small versions */}
        <div className="flex flex-wrap justify-center gap-3 w-full mx-auto relative">
          {/* Project 1 Div */}
          <div
            className="w-56 border cursor-pointer"
            onClick={() => {
              switchDisplay(1);
            }}
          >
            <h2>Tempo</h2>
            <div>
              <img src={tempoImgs[1].location} alt="" />
            </div>
          </div>
          {/* Project 2 Div */}
          <div
            className="w-56 border cursor-pointer"
            onClick={() => {
              switchDisplay(2);
            }}
          >
            <h2>KDramas</h2>
            <div>
              <img src={kdramasImgs[0].location} alt="" />
            </div>
          </div>
          {/* Project 3 Div */}
          <div
            className="w-56 border cursor-pointer"
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
        {/* Large version of the project selected, starts as a placeholder */}
        <div className="w-full relative flex">{currentProject}</div>
      </div>
    </div>
  );
};

export default Projects;
