import React, { useEffect, useState } from "react";
import {
  UilEstate,
  UilUser,
  UilFile,
  UilBriefcase,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps,
  UilMoon,
  UilSun,
} from "@iconscout/react-unicons";

const Header = () => {
  const [menu, setMenu] = useState(false);
  // light theme
  const [theme, setTheme] = useState(false);

  const handleAddDarkTheme = () => {
    document.body.classList.add("dark-theme");
    const swiperEle = document.querySelectorAll(".swiper-slide");
    swiperEle.forEach((ele) => ele.classList.add("dark-theme"));
  };

  const handleRemoveDarkTheme = () => {
    document.body.classList.remove("dark-theme");
    const swiperEle = document.querySelectorAll(".swiper-slide");
    swiperEle.forEach((ele) => ele.classList.remove("dark-theme"));
  };

  useEffect(() => {
    // WHen theme is dark
    if (theme == true) {
      handleAddDarkTheme();
    } else {
      handleRemoveDarkTheme();
    }
  }, [theme]);

  useEffect(() => {
    const swiperBtnPrev = document.getElementsByClassName("swiper-button-prev");
    const swiperBtnNext = document.getElementsByClassName("swiper-button-next");
    swiperBtnPrev[0].addEventListener("click", handleAddDarkTheme);
    swiperBtnNext[0].addEventListener("click", handleAddDarkTheme);
  });

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          LocNguyen
        </a>
        <div className={menu ? "nav__menu show-menu" : "nav__menu"} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="" className="nav__link">
                <UilEstate /> <span>Home</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="" className="nav__link">
                <UilUser /> <span>About</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="" className="nav__link">
                <UilFile /> <span>Skills</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="" className="nav__link">
                <UilBriefcase className="nav__icon" /> <span>Project</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="" className="nav__link">
                <UilScenery /> <span>Portfolio</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="" className="nav__link">
                <UilMessage /> <span>Contact me</span>
              </a>
            </li>

            <div className="nav__close" id="nav-close" onClick={() => setMenu(!menu)}>
              <UilTimes />
            </div>
          </ul>
        </div>
        <div className="nav__btns">
          <i className="change-theme" id="theme-button" onClick={() => setTheme(!theme)}>
            {theme ? <UilSun /> : <UilMoon />}
          </i>
          <div className="nav__toggle" id="nav-toggle" onClick={() => setMenu(!menu)}>
            <UilApps />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
