import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
    const [showIntro, setShowIntro] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowIntro(window.scrollY > 40);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="HomeHero">
            <div className="HomeCover">
                <span className="HomeArc HomeArc--one" />
                <span className="HomeArc HomeArc--two" />
                <span className="HomeLine HomeLine--one" />
                <span className="HomeLine HomeLine--two" />
            </div>
            <div className="HomeTitleWrap">
                <h1 className="PageTitle HomeTitle">bybook</h1>
                <p className={`HomeIntro ${showIntro ? "is-visible" : ""}`}>
                    Welcome to bybook, my personal website. Click the Navigator on the right
                    to see the different pages of the website. To be updated!
                </p>
            </div>
        </div>
    );
}

export default Home;
