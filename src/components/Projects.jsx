const Projects = () => {
  const tempoImgs = [
    {id:1,location:"tempoScreenshots/Home.jpg",name:"Home"},
    {id:2,location:"tempoScreenshots/ArtistIndex.jpg",name:"Artist Index"},
    {id:3,location:"tempoScreenshots/ArtistDetail.jpg",name:"Artist Detail"},
    {id:4,location:"tempoScreenshots/Player.jpg",name:"Player"},
    {id:5,location:"tempoScreenshots/MerchIndex.jpg",name:"Merch Index"},
    {id:6,location:"tempoScreenshots/MerchDetail.jpg",name:"Merch Detail"},
  ]
  const kdramasImgs = [
    {id:1,location:"kdramasScreenshots/Home Page.jpg",name:"Home"},
    {id:2,location:"kdramasScreenshots/Reviews.jpg",name:"Artist Index"},
    {id:3,location:"kdramasScreenshots/Review Details.jpg",name:"Artist Detail"},
    {id:4,location:"kdramasScreenshots/Edit Review Page.jpg",name:"Player"},
    {id:5,location:"kdramasScreenshots/Watchlist Page.jpg",name:"Merch Index"},
  ]

  const kitImgs = [
    {id:1,location:"public/kitScreenshots/Landing Page.jpg",name:"Home"},
    {id:2,location:"public/kitScreenshots/Landing Page -Logged in.jpg",name:"Artist Index"},
    {id:3,location:"public/kitScreenshots/Login.jpg",name:"Artist Detail"},
    {id:4,location:"public/kitScreenshots/Create Post.jpg",name:"Player"},
    {id:5,location:"public/kitScreenshots/Post Details.jpg",name:"Merch Index"},
    {id:6,location:"public/kitScreenshots/Updated Landing Page.jpg",name:"Merch Index"},
  ]

  return (
    <div className="min-h-[calc(100vh)]" id="projects">
      <h1 className="text-4xl sticky top-1 z-40 w-96 mx-auto text-center">
        Projects
      </h1>
      {/* Projects page contents */}
      <div className="mx-4 my-7 min-w-[calc(90vh)] min-h-[calc(90vh)] border relative flex justify-between flex-col py-[60px]">
        {/* Div holds projects - small versions */}
        <div className="flex justify-between w-4/5 gap-4 mx-auto relative">
          {/* Project 1 Div */}
          <div className="w-1/3 border cursor-pointer min-h-[calc(20vh)]">
            <h2>Tempo</h2>
            <div>
              <img src={tempoImgs[1].location} alt="" />
            </div>
          </div>
          {/* Project 2 Div */}
          <div className="w-1/3 border cursor-pointer">
            <h2>KDramas</h2>
            <div>
              <img src={kdramasImgs[0].location} alt="" />
            </div>
          </div>
          {/* Project 3 Div */}
          <div className="w-1/3 border cursor-pointer">
            <h2>KIT</h2>
            <div>
              <img src={kitImgs[5].location} alt="" />
            </div>
          </div>
        </div>
        {/* Large version of the project selected, starts as a placeholder */}
        <div className="border w-4/5 min-h-[calc(50vh)] mx-auto">placeholder</div>
      </div>
    </div>
  );
};

export default Projects;
