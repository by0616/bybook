import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="HomeScrollArea">
            <section className="HomeSection HomeHero">
                <div className="HomeCover">
                    <span className="HomeArc HomeArc--one" />
                    <span className="HomeArc HomeArc--two" />
                    <span className="HomeLine HomeLine--one" />
                    <span className="HomeLine HomeLine--two" />
                </div>
                <div className="HomeTitleWrap">
                    <h1 className="PageTitle HomeTitle">bybook</h1>
                </div>
            </section>

            <section className="HomeSection HomeDetail">
                <div className="HomeIntroBlock">
                    <p>
                        <span className="HomeIntroLine">Welcome to bybook, my personal website.</span>
                        <span className="HomeIntroLine">Click the Navigator on the right to see the different pages.</span>
                        <span className="HomeIntroLine">The button under can switch light/dark mode.</span>
                        <span className="HomeIntroLine">To be updated!</span>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Home;
