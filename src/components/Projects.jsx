const Projects = () => {
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
            <div></div>
          </div>
          {/* Project 2 Div */}
          <div className="w-1/3 border cursor-pointer">
            <h2>KDramas</h2>
          </div>
          {/* Project 3 Div */}
          <div className="w-1/3 border cursor-pointer">
            <h2>KIT</h2>
          </div>
        </div>
        {/* Large version of the project selected, starts as a placeholder */}
        <div className="border w-4/5 min-h-[calc(50vh)] mx-auto">placeholder</div>
      </div>
    </div>
  );
};

export default Projects;
