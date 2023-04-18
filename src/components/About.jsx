import React from "react";
import aboutImage from "../assets/img/about.png";
import { UilFileDownload } from "@iconscout/react-unicons";
import myCV from "../assets/img/NguyenGiaLoc_Internship_ReactJS.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img src={aboutImage} alt="" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            As a Front-end intern with experience in ReactJS, I'm excited to bring my skills and passion for web
            development to your team.
          </p>
          <div className="about__info">
            <div className="">
              <span className="about__info-title">06+</span>
              <span className="about__info-name">
                Months
                <br />
                experience
              </span>
            </div>
            <div className="">
              <span className="about__info-title">06+</span>
              <span className="about__info-name">
                Months
                <br />
                experience
              </span>
            </div>
            <div className="">
              <span className="about__info-title">06+</span>
              <span className="about__info-name">
                Months
                <br />
                experience
              </span>
            </div>
          </div>
          <div className="about__buttons">
            <a href={myCV} className="button button--flex" download>
              Download CV
              <i className="button__icon">
                <UilFileDownload />
              </i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
