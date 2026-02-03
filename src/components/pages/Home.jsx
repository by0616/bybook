import React from "react";
import NewsBar from "../modules/NewsBar";

const Home = () => {
    return (
        <div>
            <h1 className="HomeTitle">bybook</h1>
            <hr className="HomeLine" />
            <NewsBar />
        </div>
    );
}

export default Home;