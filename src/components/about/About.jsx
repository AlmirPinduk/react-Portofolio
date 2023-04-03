import React from "react";
import { FaAward, FaUsers } from "react-icons/fa";
import { RiFoldersFill } from "react-icons/ri";
import ME from "../../assets/almirabout.jpg";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Almir Img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years working</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article>

            <article className="about__card">
              <RiFoldersFill className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Complited</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
            magni eveniet perferendis ab quia ratione magnam minus iure facilis
            possimus enim corrupti suscipit reprehenderit temporibus voluptatem
            error nemo consectetur. Incidunt.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let`s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
