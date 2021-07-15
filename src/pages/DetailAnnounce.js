import React from 'react';
import Base from "./Base";
import {Link, useParams} from "react-router-dom";
import useFetch from "../hook/useFetch";

const DetailAnnounce = () => {

    const { id } = useParams();
    const { data: announce, isPending, error } = useFetch("http://127.0.0.1:8000/app/announces/" + id);

    console.log(announce)

    return(
        <Base>
            {isPending && (
                <div className="bg-white h-screen flex flex-col justify-center items-center">
                    <h1 className="lg:text-5xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                        THYRION
                    </h1>
                    <Link to="/" className="py-6 px-10 bg-green-300 rounded-full text-3xl hover:bg-yellow-100 transition duration-300 case-in-out flex items-center animate-bounce">
                        Loading...Please wait!
                        <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </Link>
                </div>
            )}
            { error &&
            <div className="m-auto bg-white h-screen flex flex-col justify-center items-center">
                <h1 className="lg:text-5xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                    ERROR: {error}
                </h1>

            </div> }
            {announce && (
            <div className="h-screen flex justify-center items-center">
                <div className="grid md:grid-flow-col w-4/5">
                    <div className="mr-10 mt-10 text-center border-2 border-green-300 place-items-center">
                        <span className="m-auto">
                            Play
                            <svg className="w-6 h-6 m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>

                        {announce.description}

                    </div>

                    <div className="pb-5 mr-10 mt-10 text-center border-2 border-green-300" key={announce.id}>

                                <h1 className="font-bold text-center pl-8 rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">
                                    {announce.title} <span className="text-gray-500 lowercase font-mono">situee a</span> {announce.quartier}
                                </h1>
                                <img className="w-128 h-128 mx-auto" src={announce.image} alt="" width="412"
                                     height="560"/>
                                <div className="pt-6 text-center space-y-4">
                                    <blockquote>
                                        <p className="text-lg font-mono">
                                            {announce.description}
                                        </p>
                                    </blockquote>
                                    <figcaption className="font-medium">
                                        <div className="text-cyan-600 float-right">
                                            ville: {announce.ville}
                                        </div>
                                        <div className="text-gray-500 float-left">
                                            Region: {announce.region}
                                        </div>
                                        <Link to="/"
                                              className="m-auto mr-10 text-gray-900 hover:bg-green-100 bg-green-400 mt-5 font-mono rounded-full py-2 px-3 uppercase text-lg cursor-pointer tracking-wide">Ask
                                            location</Link>
                                    </figcaption>
                                </div>

                        </div>

                </div>

            </div>
            )}
        </Base>
    )
}

export default DetailAnnounce;