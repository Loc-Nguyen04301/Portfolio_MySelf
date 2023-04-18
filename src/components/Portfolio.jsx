import React, { useEffect } from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
import portfolio1 from "../assets/img/portfolio1.png";
import portfolio2 from "../assets/img/portfolio2.jpg";
import portfolio3 from "../assets/img/portfolio3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "../swiper.scss";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className="portfolio__container container">
        <div>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            onSlideChange={() => {
              const swiperEle = document.querySelectorAll(".swiper-slide");
              swiperEle.forEach((ele) => {
                ele.classList.add("dark-theme");
              });
            }}
          >
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={portfolio1} alt="" className="portfolio__img" />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">TypeScript</h3>
                  <p className="portfolio__description">Learn about the Typescript programming language</p>
                  <a href="" className="button button--flex button-small portfolio__button">
                    Demo
                    <i className="button__icon">
                      <UilArrowRight />
                    </i>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={portfolio2} alt="" className="portfolio__img" />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Redux with Typescript</h3>
                  <p className="portfolio__description">Manage global state using Redux library with Typescript</p>
                  <a href="" className="button button--flex button-small portfolio__button">
                    Demo
                    <i className="button__icon">
                      <UilArrowRight />
                    </i>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={portfolio3} alt="" className="portfolio__img" />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Develope more project</h3>
                  <p className="portfolio__description">Improve my web interface building skills with HTML, CSS</p>
                  <a href="" className="button button--flex button-small portfolio__button">
                    Demo
                    <i className="button__icon">
                      <UilArrowRight />
                    </i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
