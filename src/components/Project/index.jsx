const Project = ({ imgs, name }) => {
  return (
    <>
      <div className="bg-black h-full relative flex flex-col justify-between items-center">
        <h1 className="w-full flex flex-col justify-center text-center lg:text-3xl">
          {name}
        </h1>
        <div className="snap-x snap-mandatory flex flex-nowrap overflow-x-auto w-full mx-auto max-w-[700px]">
          {imgs.map((img) => (
            <div
              key={img.id}
              className="snap-start snap-always shrink-0 w-full max-w-[700px]"
            >
              <img src={img.location} alt={img.name} />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-10">
          <a href="https://github.com/Jonnaa/Portfolio" target="_blank" className="hover:text-purple-600 visited:text-pink-300 lg:text-lg">
            GitHub
          </a>
          <a href="https://jonnaa.github.io/Portfolio/" target="_blank" className="hover:text-purple-600 visited:text-pink-300 lg:text-lg">
            Website
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
