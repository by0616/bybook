import React from "react";
import "./AboutMe.css";

import lukaImg from "../../images/declan-sun-IeudDVfzH0o-unsplash.jpg";
import stefanieImg from "../../images/maeva-vigier-Ji3yQIhI4bg-unsplash.jpg";

const sections = [
  {
    id: "luka",
    title: "Luka Donkic",
    text:
      "I've been a fan of the NBA since 2021, and I love hooping. I support several teams, with the 2024 Mavericks and the 2025 Nuggets being my top picks. Luka has really impressed me with his incredible three-point shooting and his leadership on the court. Now he is a Laker and I wish him win the Championship and MVP one day.",
    image: lukaImg,
    imageAlt: "Warm light over a court-inspired scene",
  },
  {
    id: "stefanie",
    title: "Stefanie Sun",
    text:
      "I used to listen to English songs much in middles school, but Stefanie's songs have become my favorite. Her melodies are soothing and her lyrics are deeply meaningful. They resonated with me about life and emotions.",
    image: stefanieImg,
    imageAlt: "Soft, calm light as a music mood",
    reverse: true,
  },
];

const AboutMe = () => {
  return (
    <div className="AboutMe-shell">
      <h1 className="AboutMe-title">About Me</h1>
      <p className="AboutMe-intro">
        Welcome to the About Me page. Hope you can know me better.
      </p>

      <div className="AboutMe-grid">
        {sections.map((section) => (
          <article
            key={section.id}
            className={`AboutMe-card ${section.reverse ? "is-reverse" : ""}`}
          >
            <div className="AboutMe-imageWrap">
              <img src={section.image} alt={section.imageAlt} />
            </div>
            <div className="AboutMe-content">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
