import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen" id="home">
      <h1 className="text-4xl w-48 sm:w-96 mx-auto text-center sticky top-1 z-40">
        Home
      </h1>
      <motion.div
        className="flex flex-col justify-center h-screen text-center"
        initial={{ opacity: 0, y:-50, scale: .5 }}
        animate={{ opacity: 1, y:0, scale:1}}
        viewport={{ amount: "all", once: true }}
        transition={{ delay: .25, duration:.5 }}
      >
        <h1 className="text-6xl">Jonathan Navarro</h1>
        <p className="text-3xl pt-12">Software Engineer</p>
      </motion.div>
    </div>
  );
};

export default Home;
