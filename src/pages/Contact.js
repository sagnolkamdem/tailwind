import React from 'react';
import Base from "./Base";

const Contact = () => {
    return(
        <Base>
            <div className="text-center text-yellow-200 h-screen flex justify-center items-center">
                <div className="flex flex-col space-y-6 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">

                    <div className="flex flex-col justify-between">

                        <div className="">
                            <h1 className="font-bold text-4xl tracking-wide text-gray-900 font-mono border-b-4 border-yellow-300">
                                Contact us!
                            </h1>
                            <p className="mt-10 mb-10 text-sm text-gray-900 font-mono ">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                            <p className="mt-10 mb-10 mr-10 text-sm text-gray-900 font-mono flex">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span> 655-155-074</span>
                            </p>

                            <p className="mt-10 mb-10 mr-10 text-sm text-gray-900 font-mono flex">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span> thyrion@thyrion.com</span>
                            </p>
                            <p className="mt-10 mb-10 mr-10 text-sm text-gray-900 font-mono flex">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span> Bonapriso ancien aeroprt</span>
                            </p>

                            <i className="im im-facebook">

                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Contact;