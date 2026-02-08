import React from "react";
import "./AboutMe.css";

const lukaImg = "https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/luka.jpg";
const stefanieImg = "https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/stefanie.jpg";
const runningImg = "https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/running.jpg";

const sections = [
  {
    id: "basketball",
    title: "NBA",
    text:
      "I've been a fan of the NBA since 2021, and I love hooping. I support several teams, with the 2024 Mavericks and the 2025 Nuggets being my top picks. Luka has really impressed me with his incredible three-point shooting and his leadership on the court. Now he is a Laker and I wish him win the Championship and MVP one day.",
    image: lukaImg,
    imageAlt: "Luka",
  },
  {
    id: "music",
    title: "Music",
    text:
      "I used to listen to English songs much in middles school, such as pop like Swift and rap like Logic. Recently I've been diving into Chinese songs and Stefanie Sun's songs have become my favorite. Her melodies are soothing and her voice is fantastic. Moreover, Cheer Chen is an artist I really admire, whose unique poetic lyrics also touched me deeply.",
    image: stefanieImg,
    imageAlt: "Stefanie Sun",
    reverse: true,
  },
  {
    id: "running",
    title: "Running",
    text:
    "I became a runner at 17, and running long distances along the Huangpu River has truly added excitement to my life. I've participated in several half marathons and am eager to take on more running events in the future. I’d love for you to join me in training or help keep me disciplined with some supervision!",
    image: runningImg,
    imageAlt: "Running City", 
  }
];

const AboutMe = () => {
  return (
    <div className="AboutMe-shell">
      <h1 className="PageTitle">About Me</h1>
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
