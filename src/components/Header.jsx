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
import ThemeContext from "../context/Context";

const Header = () => {
  const [menu, setMenu] = useState(false);
  // light theme
  const { theme, setTheme } = React.useContext(ThemeContext);

  const handleAddDarkTheme = () => {
    document.body.classList.add("dark-theme");
    const swiperElms = document.querySelectorAll(".swiper-slide-active");
    swiperElms[0].classList.add("dark-theme");
  };

  const handleRemoveDarkTheme = () => {
    document.body.classList.remove("dark-theme");
    const swiperElms = document.querySelectorAll(".swiper-slide-active");
    swiperElms[0].classList.remove("dark-theme");
  };

  useEffect(() => {
    // WHen theme is dark
    if (theme == true) {
      handleAddDarkTheme();
    } else {
      handleRemoveDarkTheme();
    }
    return () => {
      handleRemoveDarkTheme();
    };
  }, [theme]);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Loc Nguyen
        </a>
        <div className={menu ? "nav__menu show-menu" : "nav__menu"} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="nav__icon">
                  <UilEstate />
                </i>
                <span className="nav__text">Home</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="nav__icon">
                  <UilUser />
                </i>
                <span className="nav__text">About me</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="nav__icon">
                  <UilFile />
                </i>
                <span className="nav__text">Skills</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="nav__icon">
                  <UilBriefcase className="nav__icon" />
                </i>
                <span className="nav__text">Qualification</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="nav__icon">
                  <UilScenery />
                </i>
                <span className="nav__text">Portfolio</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="nav__icon">
                  <UilMessage />
                </i>
                <span className="nav__text">Contact me</span>
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
