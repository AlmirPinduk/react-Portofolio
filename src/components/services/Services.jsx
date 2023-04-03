import React from "react";
import { BsCheck2All } from "react-icons/bs";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* Fundi i Cardes se pare */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* Fundi i Cardes se dyte */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* Fundi i Cardes se trete */}
      </div>
    </section>
  );
};

export default Services;
