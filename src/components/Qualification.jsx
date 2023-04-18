import React, { useState } from "react";
import { UilGraduationCap, UilBriefcaseAlt, UilCalendarAlt } from "@iconscout/react-unicons";

const Qualification = () => {
  const [choose, setChoose] = useState("education");

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container ">
        <div className="qualification__tabs">
          <div
            className={
              choose === "education"
                ? "qualification__button button--flex button--active"
                : "qualification__button button--flex"
            }
            onClick={() => setChoose("education")}
          >
            <i className="qualification__icon">
              <UilGraduationCap />
            </i>
            Education
          </div>

          <div
            className={
              choose === "work"
                ? "qualification__button button--flex button--active"
                : "qualification__button button--flex"
            }
            onClick={() => setChoose("work")}
          >
            <i className="qualification__icon">
              <UilBriefcaseAlt />
            </i>
            Project
          </div>
        </div>
        <div className="qualification__sections">
          {/* -------------------Qualification Content 1----------------------------*/}
          <div
            className={
              choose === "education"
                ? `qualification__content qualification__active`
                : `qualification__content qualification__notactive`
            }
            id="education"
          >
            {/* -----------------------------------------------Qualification1  */}
            <div className="qualification__data">
              <div style={{ textAlign: "center" }}>
                <h3 className="qualification__title">CÔNG NGHỆ THÔNG TIN VIỆT – NHẬT (HEDSPI)</h3>
                <span className="qualification__subtitle">SOICT - HUST</span>
                <div className="qualification__calendar">
                  <i className="button__icon" style={{ marginRight: "6px" }}>
                    <UilCalendarAlt />
                  </i>
                  2019 - 2024
                </div>
              </div>

              <div style={{ position: "relative" }}>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* -----------------------------------------------Qualification 2 */}
            <div className="qualification__data">
              <div></div>
              <div style={{ position: "relative" }}>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div style={{ textAlign: "center" }}>
                <h3 className="qualification__title">ReactJS Course</h3>
                <span className="qualification__subtitle">Youtube</span>
                <div className="qualification__calendar">
                  <i className="button__icon" style={{ marginRight: "6px" }}>
                    <UilCalendarAlt />
                  </i>
                  2022 - now
                </div>
              </div>
            </div>
          </div>
          {/* -------------------Qualification Content 2 ---------------------------*/}
          <div
            className={
              choose === "work"
                ? `qualification__content qualification__active`
                : `qualification__content qualification__notactive`
            }
            id="work"
          >
            {/* ------------------Qualification Right 1--------------------   */}
            <div className="qualification__data">
              <div style={{ textAlign: "center" }}>
                <h3 className="qualification__title">Website THOL.com.vn Clone</h3>
                <span className="qualification__subtitle">100% join</span>
                <div className="qualification__calendar">
                  <i className="button__icon" style={{ marginRight: "6px" }}>
                    <UilCalendarAlt />
                  </i>
                  11/2022 - 1/2023
                </div>
              </div>

              <div style={{ position: "relative" }}>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* ------------------Qualification Left 1--------------------   */}
            <div className="qualification__data">
              <div></div>
              <div style={{ position: "relative" }}>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div style={{ textAlign: "center" }}>
                <h3 className="qualification__title">Web Blog TypeScript</h3>
                <span className="qualification__subtitle">100% join</span>
                <div className="qualification__calendar">
                  <i className="button__icon" style={{ marginRight: "6px" }}>
                    <UilCalendarAlt />
                  </i>
                  1/2023 - 4/2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
