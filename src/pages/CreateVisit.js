import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Base from "./Base";


const CreateVisit = () => {
    const [date_of_visit, setDate_of_visit] = useState("")
    const {id} = useParams()

    const [redirect, setRedirect] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const history = useHistory();

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


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Announce :" + id)
        console.log("Date :" + date_of_visit)
        console.log("Id :" + localStorage.getItem('id'))
        // console.log(quartier)
        // console.log(ville)
        // console.log(region)

        const client_visit = localStorage.getItem('id')

        const announce = id

        const email = localStorage.getItem('email')

        await axios.post("http://127.0.0.1:8000/app/announces/"+ id +"/visits", {
            date_of_visit,
            client_visit,
            announce

        }).then((err)=>{
            setRedirect(true)
            setShowAlert(false)
            console.log(err.response)
        }).catch(()=>{
            setShowAlert(true)
            setRedirect(false)
        });

    }

    // if(redirect){
    //     // return history.go(-1);
    //     alert("Creee avec succes")
    // }

    return(
        <Base>

            <div className="text-center text-yellow-200 h-screen flex justify-center items-center">
                <div className="flex flex-col space-y-3 w-full max-w-2xl p-8 rounded-xl shadow-lg text-white">

                    <div className="flex flex-col justify-between">

                        <div className="">
                            <form onSubmit={handleSubmit}>
                                <h1 className="font-bold text-4xl tracking-wide text-gray-900 font-mono border-b-4 border-yellow-300 mb-5">
                                    Prise de visite!
                                </h1>

                                {redirect &&
                                <p className="m-auto text-center border-yellow-200 text-sm text-gray-900 font-mono flex bg-green-400 w-4/5">
                                    Created successfully...a manager will call you later.
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </p>}

                                {showAlert &&
                                <p className="m-auto border-yellow-200 text-sm text-gray-900 font-mono flex bg-red-400 w-24">
                                    Retry please!
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </p>}

                                <p className="mt-6 border-yellow-200 mb-7 mr-10 text-sm text-gray-900 font-mono flex">
                                    Date of visit
                                </p>

                                <input type="date" className="border-yellow-200 border-4 text-gray-900 font-mono w-4/5"
                                       required
                                       onChange={e=>setDate_of_visit(e.target.value)}
                                /><br/>


                                <button type="submit" className="m-auto text-gray-900 hover:bg-yellow-100 float-right bg-yellow-400 mt-5 font-bold rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">Send</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </Base>
    )
}

export default CreateVisit;