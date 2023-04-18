import React from "react";
import { UilFacebook, UilInstagram, UilGithub, UilMessage, UilMouseAlt, UilArrowDown } from "@iconscout/react-unicons";
import profileImage from "../assets/img/perfill.jpg";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a href="https://www.facebook.com/profile.php?id=100009072109785" className="home__social-icon">
              <UilFacebook />
            </a>

            <a href="https://github.com/Loc-Nguyen04301" className="home__social-icon">
              <UilGithub />
            </a>

            <a href="https://linkedin.com" className="home__social-icon">
              <UilInstagram />
            </a>
          </div>

          <div className="home__img">
            <svg className="home__blob" viewBox="0 0 200 187" xmlnsXlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image x="30" y="0" className="home__blob-img" xlinkHref={profileImage} />
              </g>
            </svg>
          </div>

          <div className="home__data">
            <h1 className="home__title">Hi, I'm Loc Nguyen</h1>
            <h3 className="home__subtitle">Frontend Developer</h3>
            <div className="home__description">Have a good mindset, study hard, and work under pressure</div>
            <a href="#contact" className="button button--flex">
              Contact Me
              <i className="button__icon">
                <UilMessage />
              </i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
