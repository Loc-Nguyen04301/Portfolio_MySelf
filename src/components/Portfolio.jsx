import React from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
import portfolio1 from "../assets/img/portfolio1.jpg";
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
          >
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={portfolio1} alt="" className="portfolio__img" />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Modern Website</h3>
                  <p className="portfolio__description">
                    Website adaptable to all devices, with ui components and animated interactions.
                  </p>
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
                <img src={portfolio1} alt="" className="portfolio__img" />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Modern Website</h3>
                  <p className="portfolio__description">
                    Website adaptable to all devices, with ui components and animated interactions.
                  </p>
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
                <img src={portfolio1} alt="" className="portfolio__img" />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Modern Website</h3>
                  <p className="portfolio__description">
                    Website adaptable to all devices, with ui components and animated interactions.
                  </p>
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
