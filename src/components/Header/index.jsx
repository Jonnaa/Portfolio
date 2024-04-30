import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { motion, useScroll, useAnimate, stagger, useTransform } from "framer-motion";

const Header = () => {
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [scope, animate] = useAnimate();

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 0.96], [0, .99]);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const navLinks =[
    {id:1, address: "#home", name: "Home"},
    {id:2, address: "#aboutMe", name: "About Me"},
    {id:3, address: "#projects", name: "Projects"}
  ]

  const handleOnClick=()=> {
    setBurgerClicked(!burgerClicked);
    burgerClicked?enablePageScroll():disablePageScroll()
  }

  const handleAnimate = async () => {
    await animate(".navButton",{ filter: "blur(0px)" },{ delay: stagger(0.3) });
  };

  return (
    <div>
      <div className="fixed w-full top-0 z-20 border-2 border-purple-400 bg-black/50 backdrop-blur-sm rounded-lg">
        <div className=" flex flex-row justify-between p-px">
          <span className="invisible"></span>
          <nav>
            <motion.img
              initial={{ rotate: "0deg" }}
              animate={burgerClicked ? { rotate: "90deg" } : "initial"}
              src="burger-menu.svg"
              alt="Navigation Menu"
              id="burgerButton"
              className="w-8 sm:w-10 rounded bg-purple-300 shadow-inner shadow-purple-400/50 hover:bg-purple-500 cursor-pointer transition-colors z-50"
              onClick={handleOnClick}
            />
          </nav>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          x: "-50%",
          y: "-50%",
        }}
        className="fixed top-[42px] sm:top-[49px] left-1/2 h-[8px] w-screen bg-purple-400 rounded-lg z-20"
      />
      {burgerClicked ? (
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={variants}
          className="fixed h-[calc(100vh-38px)] sm:h-[calc(100vh-46px)] mt-[38px] sm:mt-[46px] w-screen z-30 overscroll-contain bg-black/75 backdrop-blur-sm"
        >
          <div className="fixed h-full w-full overscroll-contain">
          <div
            ref={scope}
            className="flex flex-col w-full h-full"
          >
            {navLinks.map((link)=>(
              <motion.a
              key={link.id}
              initial={{ filter: "blur(10px)" }}
              animate={burgerClicked ? handleAnimate : "initial"}
              href={link.address}
              className="navButton flex-auto w-full content-center text-center hover:text-purple-300 hover:border-2 text-3xl hover:border-purple-500 hover:shadow-inner hover:shadow-purple-500 hover:underline hover:decoration-purple-500"
              onClick={handleOnClick}
            >
              {link.name}
            </motion.a>
            ))}
          </div>
          </div>
        </motion.nav>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
