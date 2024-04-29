import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [resumeButton, setResumeButton] = useState("R");

  return (
    <div className="lg:absolute lg:left-2 lg:top-[40%] mx-auto flex lg:flex-col gap-10 sm:gap-24">
          <a
            href="https://www.linkedin.com/in/jonathannavarroswe/"
            className="w-10 h-10 sm:w-16 sm:h-16 bg-purple-300 shadow-md shadow-purple-300/50 hover:shadow-lg hover:bg-purple-500 hover:shadow-purple-500/50 text-black rounded-lg p-1 text-sm sm:text-lg font-bold transition-all "
            target="_blank"
          >
            <img src="icons/linkedInLogo.png" alt="" />
          </a>
          <motion.a
            onHoverStart={() => setResumeButton("Resume")}
            onHoverEnd={() => setResumeButton("R")}
            href="https://docs.google.com/document/d/10ivZXeMhmoGI26BLo_NN6eRzhNStdY4wbLfrHfhqQtQ/edit?usp=sharing"
            className="w-10 h-10 sm:w-16 hover:w-24 sm:hover:w-32 sm:h-16 bg-purple-300 shadow-md shadow-purple-300/50 hover:shadow-lg hover:bg-purple-500 hover:shadow-purple-500/50 text-black rounded-lg p-1 text-3xl sm:text-5xl hover:text-xl sm:hover:text-3xl font-bold flex justify-center items-center overflow-hidden transition-all"
            target="_blank"
          >
            {resumeButton}
          </motion.a>
        </div>
  )
}

export default Footer