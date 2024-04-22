const Project = ({imgs,name}) => {
  return (
    <div className="p-[1.5px] bg-purple-400 w-3/4 h-[550px] max-w-[900px] mx-auto">
      <div className="bg-black h-full relative flex flex-col justify-between items-center">
        <h1 className="w-full flex flex-col justify-center text-center text-2xl">
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
        <div>GitHub Website</div>
      </div>
    </div>
  );
};

export default Project;
