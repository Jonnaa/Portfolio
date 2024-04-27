import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { motion, useScroll, useAnimate, stagger, useTransform } from "framer-motion";

const Header = () => {
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [scope, animate] = useAnimate();
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const navLinks =[
    {id:1, address: "#home", name: "Home"},
    {id:2, address: "#aboutMe", name: "About Me"},
    {id:3, address: "#projects", name: "Projects"}
  ]
  const navClasses =
    "navButton flex-auto w-full content-center text-center hover:underline hover:decoration-purple-400 hover:underline-offset-2 hover:border-2 text-3xl hover:border-rose-500 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500";
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 0.95], [0, 1.1]);
  function handleOnClick() {
    setBurgerClicked(!burgerClicked);
    burgerClicked?enablePageScroll():disablePageScroll()
  }

  const handleAnimate = async () => {
    await animate(".navButton",{ filter: "blur(0px)" },{ delay: stagger(0.3) });
  };

  return (
    <div>
      <div className="fixed w-full top-0 z-40 p-[2.8px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
        <div className="bg-black flex flex-row justify-between p-px">
          <span className="invisible"></span>
          <nav>
            <motion.img
              initial={{ rotate: "0deg" }}
              animate={burgerClicked ? { rotate: "90deg" } : "initial"}
              src="burger-menu.svg"
              alt="Navigation Menu"
              id="burgerButton"
              className="w-8 sm:w-10 rounded  hover:bg-red-500 cursor-pointer z-50 bg-white"
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
        className="fixed top-[41px] sm:top-[49px] left-1/2 h-[8px] w-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 z-50"
      />
      {burgerClicked ? (
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={variants}
          className="fixed h-[calc(100vh)] sm:h-[calc(100vh)] pt-2 w-screen z-30 overscroll-contain bg-black/75 backdrop-blur-sm"
        >
          <div className="fixed h-[calc(100vh)] sm:h-[calc(100vh)] w-full overscroll-contain">
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
              className={navClasses}
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
