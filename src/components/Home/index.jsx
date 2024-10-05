import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  return (
    <div className="min-h-screen snap-center bg-scroll" id="home">
      <h1 className="font-semibold text-3xl sm:text-4xl w-40 sm:w-56 mx-auto text-center sticky top-0 sm:top-1 z-20">
        Home
      </h1>
      <motion.div
        ref={targetRef}
        className="flex flex-col justify-center h-screen text-center"
        style={{ opacity }}
        initial={{ opacity: 0, y: -50, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ amount: "all", once: true }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
          Jonathan Navarro
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl pt-12">
          Software Developer
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
