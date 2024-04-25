import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["start start","end start"]
  })

  const opacity = useTransform(scrollYProgress, [0,.2],[1,0])
  return (
    <div className="min-h-screen" id="home">
      <h1 className="text-3xl sm:text-4xl w-40 sm:w-56 mx-auto text-center sticky top-1 z-40">
        Home
      </h1>
      <motion.div
        className="flex flex-col justify-center h-screen text-center"
        style={{opacity}}
        // initial={{ opacity: 0, y:-50, scale: .5 }}
        // animate={{ opacity: 1, y:0, scale:1}}
        // viewport={{ amount: "all", once: true }}
        // transition={{ delay: .25, duration:.5 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl">Jonathan Navarro</h1>
        <p className="text-xl sm:text-2xl md:text-3xl pt-12">Software Engineer</p>
      </motion.div>
    </div>
  );
};

export default Home;