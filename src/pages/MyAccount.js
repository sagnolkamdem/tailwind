import React, {useEffect} from 'react';
import Base from "./Base";
import {useHistory} from "react-router-dom"

const MyAccount = () => {

    const history = useHistory()

    useEffect(() => {
        (

            async () => {
                // const header = `Authorization: Token ${res.data(token)}`;
                console.log("Token "+ localStorage.getItem('token'))

                if (localStorage.getItem('token') !== null){
                    console.log('Token exist')
                }else{
                    history.push("/login");
                }
            }
        )();
    }, [])

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