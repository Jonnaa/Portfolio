import { useState } from "react";
import Burger from "../assets/burger-menu.svg";

const Header = () => {
  const [burgerClicked, setBurgerClicked] = useState(false);
  const navClasses =
    "flex-auto w-full content-center text-center underline underline-offset-2 hover:bg-slate-700/50 hover:border-2 text-3xl hover:border-rose-500 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500";
  function handleOnClick() {
    setBurgerClicked(!burgerClicked);
  }
  return (
    <>
      <div className="sticky top-0 z-50 p-[2.8px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
        <div className="bg-black flex flex-row justify-between p-px">
          <span className="invisible">Invis</span>
          <span className="text-4xl">Jonathan Navarro</span>
          <nav className="">
            <img
              src={Burger}
              alt="Navigation Menu"
              className="w-10 rounded bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 cursor-pointer"
              onClick={handleOnClick}
            />
          </nav>
        </div>
      </div>
      {burgerClicked ? (
        <nav className="fixed w-full h-full z-40 overscroll-contain">
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
