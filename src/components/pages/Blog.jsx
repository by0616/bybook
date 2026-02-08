import React from "react";
import "./Blog.css";
const latexPdf = "https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/pdfs/latex-talk-handout.pdf";

const Blog = () => {
  return (
    <div className="BlogShell">
      <h1 className="PageTitle">Blog</h1>
      <p className="BlogIntro">Welcome to the My Blog page.</p>

      <div className="BlogCard">
        <div className="BlogCard-content">
          <h2>First Blog</h2>
          <p className="BlogCard-date">2/7/2026</p>
          <p>
            This is my first blog post! I set up this website not only to demonstrate my coding
            skills to prove myself capable of being a member of the ShanghaiTech iGEM wiki team,
            but also to record my learning journey.
          </p>
          <p>
            This website is established with React, thanks to the MIT Weblab Project, which introduced me to web development. Some features like snapping scroll aren't
            yet developed. I will add a backend side to enable user interaction and data persistence. I hope I can keep updating this blog and share my thoughts and
            experiences with you all.
          </p>
          <p>
            I also want to put a document about LaTeX here, which is from GitHub, as I am learning
            basic LaTeX as well.
          </p>
        </div>

        <div className="BlogCard-pdf">
          <iframe title="LaTeX Notes" src={latexPdf} className="BlogPdfViewer" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
