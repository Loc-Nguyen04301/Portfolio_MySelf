import React from "react";
import { UilPhone, UilEnvelope, UilMapMarker, UilMessage } from "@iconscout/react-unicons";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact me </h2>
      <span className="section__subtitle">Get in touch</span>
      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="contact__icon">
              <UilPhone />
            </i>

            <div>
              <h3 className="contact__title">Call me</h3>
              <span className="contact__subtitle">091-5677-049</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="contact__icon">
              <UilEnvelope />
            </i>

            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">nguyengialoc7@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="contact__icon">
              <UilMapMarker />
            </i>

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Hoang Mai - Ha Noi </span>
            </div>
          </div>
        </div>
      </div>
      <form action="" className="contact__form container grid">
        <div className="contact__inputs grid">
          <div className="contact__content">
            <label htmlFor="" className="contact__label">
              Name
            </label>
            <input type="text" className="contact__input" />
          </div>

          <div className="contact__content">
            <label htmlFor="" className="contact__label">
              Email
            </label>
            <input type="email" className="contact__input" />
          </div>

          <div className="contact__content">
            <label htmlFor="" className="contact__label">
              Message
            </label>
            <textarea name="" id="" cols="30" rows="10" className="contact__input"></textarea>
          </div>

          <div>
            <a href="#" className="button button--flex">
              Send Message
              <i className="button__icon">
                <UilMessage />
              </i>
            </a>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
