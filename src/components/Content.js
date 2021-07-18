import React from 'react';
// import logo from '../logo.svg'
import {Link} from "react-router-dom";
import useFetch from "../hook/useFetch";

const Content = () => {
    const url = "http://127.0.0.1:8000/app/announces";
    const { error, isPending, data: announces } = useFetch(url);

    console.log("Token "+ localStorage.getItem('token'))

    console.log(announces);

    return (
        <div className="flex flex-wrap">
            {/*{ isPending &&*/}
            {/*<div className="bg-white h-screen flex flex-col justify-center items-center">*/}
            {/*    <h1 className="lg:text-5xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">*/}
            {/*        THYRION*/}
            {/*    </h1>*/}
            {/*    <Link to="/" className="py-6 px-10 bg-yellow-400 rounded-full text-3xl hover:bg-yellow-100 transition duration-300 case-in-out flex items-center animate-bounce">*/}
            {/*        Loading!*/}
            {/*        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />*/}
            {/*        </svg>*/}
            {/*    </Link>*/}
            {/*</div> }*/}

            { error &&
            <div className="m-auto bg-white h-screen flex flex-col justify-center items-center">
                <h1 className="lg:text-5xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                    ERROR: {error}
                </h1>

            </div> }

            {announces && announces.map((announce) => (
                <figure className="max-w-md mx-auto border-yellow-300 border-4 rounded-xl p-4 mb-10" key={announce.id}>
                    <h1 className="font-bold text-center pl-8 rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">
                        {announce.title} <span className="text-gray-500 lowercase font-mono">situee a</span> {announce.quartier}
                    </h1>
                    <img className="w-128 h-128 mx-auto" src={announce.image} alt="" width="412"
                         height="560"/>
                    <div className="pt-6 text-center space-y-4">
                        <blockquote>
                            <p className="text-lg font-semibold">
                                {announce.description.slice(0, 100)}...
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-cyan-600">
                                ville: {announce.ville}
                            </div>
                            <div className="text-gray-500">
                                Region: {announce.region}
                            </div>
                        </figcaption>
                    </div>
                    <Link to={`/detailAnnounce/${announce.id}`}
                          className="text-gray-900 hover:bg-yellow-100 bg-yellow-400 mt-5 font-bold float-left rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">See
                        more</Link>
                    <Link to={`/detailAnnounce/${announce.id}/createLocation`}
                          className="text-gray-900 hover:bg-yellow-100 bg-yellow-400 mt-5 font-bold float-right rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">Ask
                        location</Link>
                </figure>
            ))}
        </div>
    );
};

export default Content;