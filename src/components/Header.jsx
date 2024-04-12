import { useState } from "react";
import Burger from "../assets/burger-menu.svg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { motion, useScroll} from "framer-motion";

const Header = () => {
  const [burgerClicked, setBurgerClicked] = useState(false);
  const navClasses =
    "flex-auto w-full content-center text-center hover:underline hover:decoration-purple-400 hover:underline-offset-2 hover:bg-slate-700/50 hover:border-2 text-3xl hover:border-rose-500 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500";
  const {scrollYProgress} = useScroll();
    function handleOnClick() {
    setBurgerClicked(!burgerClicked);
    if(burgerClicked){
      enablePageScroll()
    }
    else{
      disablePageScroll()
    }
  }
  return (
    <>
      <div className="fixed w-full top-0 z-40 p-[2.8px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
        <div className="bg-black flex flex-row justify-between p-px">
          <span className="invisible"></span>
          {/* <span className="text-4xl">Jonathan Navarro</span> */}
          <nav className="">
            <img
              src={Burger}
              alt="Navigation Menu"
              className="w-10 rounded  hover:bg-red-500 cursor-pointer z-50 bg-white"
              onClick={handleOnClick}
            />
          </nav>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          x:"-50%",
          y:"-50%"
        }}
        className="fixed top-[52px] left-1/2 h-[8px] w-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 z-50"
      />
      {burgerClicked ? (
        <nav className="fixed h-[calc(100vh-42px)] mt-12 w-full z-50 overscroll-contain">
          <div className="flex flex-col w-full h-full bg-black/75 backdrop-blur-sm">
            <a href="#home" className={navClasses} onClick={handleOnClick}>
              Home
            </a>
            <a href="#aboutMe" className={navClasses} onClick={handleOnClick}>
              About Me
            </a>
            <a href="#projects" className={navClasses} onClick={handleOnClick}>
              Projects
            </a>
          </div>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
