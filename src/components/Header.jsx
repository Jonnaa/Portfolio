import { useState } from "react";
import Burger from "../assets/burger-menu.svg";

const Header = () => {
  const [burgerClicked, setBurgerClicked] = useState(false);
  const navClasses =
    "flex-auto w-full content-center text-center underline underline-offset-2 hover:bg-slate-700 text-4xl";
  function handleOnClick() {
    setBurgerClicked(!burgerClicked);
  }
  return (
    <>
      <div className="sticky top-0 z-50 p-[2.8px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
        <div className="bg-black flex flex-row justify-between p-px">
          <span className="invisible">Invis</span>
          <span className="text-2xl">Jonathan Navarro</span>
          <nav className="">
            <img
              src={Burger}
              alt="Navigation Menu"
              className="w-8 rounded bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 cursor-pointer"
              onClick={handleOnClick}
            />
          </nav>
        </div>
      </div>
      {burgerClicked ? (
        <nav className="fixed w-full h-full z-40 overscroll-contain">
          <div className="flex flex-col w-full h-full bg-black/75 backdrop-blur-sm">
            <a href="#home" className={navClasses}>
              Home
            </a>
            <a href="#aboutMe" className={navClasses}>
              About Me
            </a>
            <a href="#projects" className={navClasses}>
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
