import React from 'react';
import Base from "./Base";

const MyAccount = () => {
    return(
        <Base>
            <div className="h-screen flex justify-center items-center bg-yellow-300">
                <h1 className="text-9xl uppercase font-black">
                    My Account!
                </h1>
            </div>
        </Base>
    )
}

export default MyAccount;