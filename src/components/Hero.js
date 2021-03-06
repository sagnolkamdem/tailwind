import React from 'react';
import {Link} from "react-router-dom";

const Hero = () => {
    return(
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-5xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                THYRION
            </h1>
            <Link to="/" className="py-6 px-10 bg-yellow-400 rounded-full text-3xl hover:bg-yellow-100 transition duration-300 case-in-out flex items-center animate-bounce">
                Welcome!
                <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </Link>
        </div>
    );
}

export default Hero;