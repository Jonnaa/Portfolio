import { useState } from "react";
import Burger from "../assets/burger-menu.svg";

const Header = () => {
  const [burgerClicked, setBurgerClicked] = useState(false);
  const navClasses = "bg-black flex-auto w-full text-center underline underline-offset-2 hover:bg-slate-700"
  function handleOnClick() {
    setBurgerClicked(!burgerClicked);
  }
  return (
    <>
      <div className="p-[2.2px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="bg-black flex flex-row justify-between p-px">
          <span className="invisible">Invis</span>
          <span className="">Jonathan Navarro</span>
          <nav className="">
            <img
              src={Burger}
              alt="Navigation Menu"
              className="w-6 rounded bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 cursor-pointer"
              onClick={handleOnClick}
            />
          </nav>
        </div>
      </div>
      {burgerClicked ? (
        <nav className=" p-[2.2px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
          <div className=" flex flex-col items-center">
            <a href="#home" className={navClasses}>Home</a>
            <a href="#aboutMe" className={navClasses}>About Me</a>
            <a href="#projects" className={navClasses}>Projects</a>
          </div>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
