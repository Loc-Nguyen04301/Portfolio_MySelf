import React, { useState } from "react";
import { UilBracketsCurly, UilAngleDown, UilServer, UilDatabase } from "@iconscout/react-unicons";

const Skills = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level </span>
      <div className="skills__container container grid">
        <div>
          {/* ---------------------------SKill 1------------------------ */}
          <div
            className={toggle1 ? `skills__content skills__open` : `skills__content skills__close`}
            onClick={() => setToggle1(!toggle1)}
          >
            <div className="skills__header">
              <i className="skills__icon">
                <UilBracketsCurly />
              </i>

              <div>
                <h1 className="skills__title">Frontend</h1>
                <span className="skills__subtitle">3 months+</span>
              </div>

              <i className="skills__arrow">
                <UilAngleDown />
              </i>
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">ReactJS Library</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------SKill 2------------------------ */}
          <div
            className={toggle2 ? `skills__content skills__open` : `skills__content skills__close`}
            onClick={() => setToggle2(!toggle2)}
          >
            <div className="skills__header">
              <i className="skills__icon">
                <UilServer />
              </i>

              <div>
                <h1 className="skills__title">Backend</h1>
                <span className="skills__subtitle">3 months+</span>
              </div>

              <i className="skills__arrow">
                <UilAngleDown />
              </i>
            </div>
            <div
              className="skills__list
 grid"
            >
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">NodeJS, ExpressJS</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__expressjs"></span>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------SKill 3------------------------ */}
          <div
            className={toggle3 ? `skills__content skills__open` : `skills__content skills__close`}
            onClick={() => setToggle3(!toggle3)}
          >
            <div className="skills__header">
              <i className="skills__icon">
                <UilDatabase />
              </i>

              <div>
                <h1 className="skills__title">Databases</h1>
                <span className="skills__subtitle">3 months+</span>
              </div>

              <i className="skills__arrow">
                <UilAngleDown />
              </i>
            </div>
            <div
              className="skills__list
 grid"
            >
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">MySQL</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__mysql"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">PostgreSQL</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__postgresql"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
