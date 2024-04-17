const Projects = () => {
  return (
    <div className="min-h-[calc(100vh)]" id="projects">
      <h1 className="text-4xl sticky top-1 z-40 w-96 mx-auto text-center">
        Projects
      </h1>
      {/* Div holds all projects */}
      <div className="m-8">
        {/* Project 1 Div */}
        <div>
          <h2>Tempo</h2>
        </div>
        {/* Project 2 Div */}
        <div>
          <h2>KDramas</h2>
        </div>
        {/* Project 3 Div */}
        <div>
          <h2>KIT</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
