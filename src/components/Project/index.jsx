import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

const Project = ({ info, imgIndex, setImgIndex }) => {
  const { name, gh, web, desc, imgs } = info;
  // dragging state that is set using framer motion ondragstart and ondragEnd
  const [dragging, setDragging] = useState(false);
  // Img index state that will help paginate through the images
  //  (Once an image is dragged far enough to either side, then inc or dec img indx
  //  which is then multiplied by 100 and translatesX -100 or 100 from current value)
  // const [imgIndex, setImgIndex] = useState(0)
  // motion value from framer motion will be used to see how far we have dragged an image
  const dragX = useMotionValue(0);

  const dragBuffer = 20;
  // ondrag functions that handle framer motion ondragstart and ondragend events
  const onDragStart = () => {
    setDragging(true);
  };
  const onDragEnd = () => {
    setDragging(false);
    // Checking motion value for testing
    // console.log(dragX.get())
    const x = dragX.get();

    if (x <= -dragBuffer) {
      handleNext()
    } else if (x >= dragBuffer) {
      handlePrev()
    }
  };

  const handleNext=()=>{
    if (imgIndex === imgs.length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  }
  const handlePrev = ()=>{
    if (imgIndex === 0) {
      setImgIndex(imgs.length-1);
    } else {
      setImgIndex(imgIndex - 1);
    }
  }

  return (
    <>
      <div className="rounded-lg bg-black h-full relative flex flex-col justify-between items-center">
        <h1 className="w-full flex flex-col justify-center text-center text-xl md:text-2xl lg:text-3xl">
          {name}
        </h1>
        <div className="snap-x snap-mandatory overflow-hidden w-full mx-auto">
          <motion.div
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            style={{
              x: dragX,
            }}
            animate={{
              translateX: `-${imgIndex * 100}%`,
            }}
            transition={{
              type:"spring",
              mass:3,
              stiffness:400,
              damping:50,
            }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            className="flex cursor-grab items-center active:cursor-grabbing relative"
          >
            {imgs.map((img, idx) => (
              <motion.div
                key={idx}
                style={{
                  backgroundImage: `url(${img.location})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                animate={{
                  scale: imgIndex===idx? 1: 0.83,
                }}
                transition={{
                  type:"spring",
                  mass:3,
                  stiffness:400,
                  damping:50,
                }}
                className="aspect-video rounded-lg w-full shrink-0 object-cover"
              />
            ))}
          </motion.div>
          <button className="absolute left-1 top-[40%] bg-black hover:bg-purple-500 hover:shadow-purple-500/50 shadow-md shadow-black rounded-lg p-1 font-bold text-lg" onClick={handlePrev}>&larr;</button>
          <button className="absolute right-1 top-[40%] bg-black hover:bg-purple-500 hover:shadow-purple-500/50 shadow-md shadow-black rounded-lg p-1" onClick={handleNext}>&rarr;</button>
        </div>
        <div className="w-3/4 sm:w-1/2 my-1 text-sm md:text-base ">{desc}</div>
        <div className="flex justify-center gap-10 text-sm md:text-base mb-1 text-center">
          <a
            href={gh}
            target="_blank"
            className="w-16 sm:w-20 bg-purple-300 shadow-md shadow-purple-300/50 hover:shadow-lg hover:bg-purple-500 hover:shadow-purple-500/50 text-black rounded-lg p-1 transition-all"
          >
            GitHub
          </a>
          <a
            href={web}
            target="_blank"
            className="w-16 sm:w-20 bg-purple-300 shadow-md shadow-purple-300/50 hover:shadow-lg hover:bg-purple-500 hover:shadow-purple-500/50 text-black rounded-lg p-1 transition-all"
          >
            Website
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
