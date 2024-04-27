const Project = ({ info }) => {
  const {name, gh, web, desc, imgs} = info
  return (
    <>
      <div className="bg-black h-full relative flex flex-col justify-between items-center">
        <h1 className="w-full flex flex-col justify-center text-center text-lg md:text-2xl">
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
        <div className="w-3/4 sm:w-1/2">{desc}</div>
        <div className="flex justify-center gap-10 text-sm md:text-md">
          <a href={gh} target="_blank" className="hover:text-purple-600 visited:text-pink-300">
            GitHub
          </a>
          <a href={web} target="_blank" className="hover:text-purple-600 visited:text-pink-300">
            Website
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
