import React from 'react';
import Hero from "../components/Hero";
import Base from "./Base";
import Content from "../components/Content";

const Home = () => {
    return(
        <div>
            <Base>
                <Hero />
                <Content />
            </Base>

        </div>
    )
}

export default Home;