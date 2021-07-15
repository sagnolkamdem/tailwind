import React, {useEffect, useState} from 'react';
import Base from "./Base";
import {Link, Redirect, useParams, useHistory} from "react-router-dom";
import axios from "axios";
// import {Link} from "react-router-dom";

const CreateAnnounce = () => {

    const history = useHistory()

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [quartier, setQuartier] = useState('');
    const [ville, setVille] = useState('');
    const [region, setRegion] = useState('');

    const [redirect, setRedirect] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        (

            async () => {
                // const header = `Authorization: Token ${res.data(token)}`;
                console.log("Token "+ localStorage.getItem('token'))

                localStorage.removeItem('token')

                if (localStorage.getItem('token') !== null){
                    console.log('Token exist')
                }else{
                    history.push("/");
                }
            }
        )();
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(title)
        // console.log(description)
        // console.log(quartier)
        // console.log(ville)
        // console.log(region)

        await axios.post('http://127.0.0.1:8000/app/announces', {
            title,
            description,
            quartier,
            ville,
            region
        }).then((err)=>{
            setRedirect(true)
            setShowAlert(false)
            console.log(err.response)
        }).catch(()=>{
            setShowAlert(true)
            setRedirect(false)
        });
    }


    return(
        <Base>
            <div className="text-center text-yellow-200 h-screen flex justify-center items-center mt-20">
                <div className="flex flex-col space-y-3 w-full max-w-2xl p-8 rounded-xl shadow-lg text-white">

                    <div className="flex flex-col justify-between">

                        <div className="">
                            <form onSubmit={handleSubmit}>
                                <h1 className="font-bold text-4xl tracking-wide text-gray-900 font-mono border-b-4 border-yellow-300 mb-5">
                                    Create an announce!
                                </h1>

                                {redirect &&
                                <p className="m-auto text-center border-yellow-200 text-sm text-gray-900 font-mono flex bg-green-400 w-4/5">
                                    Created successfully...a manager will call you later.
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </p>}

                                {showAlert &&
                                <p className="m-auto text-center border-yellow-200 text-sm text-gray-900 font-mono flex bg-red-400 w-4/5">
                                    Error retry please...Maybe your title already exist!
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </p>}

                                <p className="mt-6 border-yellow-200 mb-7 mr-10 text-sm text-gray-900 font-mono flex">
                                    Title
                                </p>

                                <input type="text" className="border-yellow-200 border-4 text-gray-900 font-mono w-4/5"
                                       required
                                       onChange={e=>setTitle(e.target.value)}
                                />

                                <p className="mt-6 mb-7 mr-10 text-sm text-gray-900 font-mono flex">
                                    Description
                                </p>

                                <input type="text" className="border-yellow-200 border-4 text-gray-900 font-mono w-4/5"
                                       required
                                       onChange={e=>setDescription(e.target.value)}
                                />

                                <p className="mt-6 mb-7 mr-10 text-sm text-gray-900 font-mono flex">
                                    Quartier
                                </p>

                                <input type="text" className="border-yellow-200 border-4 text-gray-900 font-mono w-4/5"
                                       required
                                       onChange={e=>setQuartier(e.target.value)}
                                />

                                <p className="mt-6 mb-7 mr-10 text-sm text-gray-900 font-mono flex">
                                    Ville
                                </p>

                                <input type="text" className="border-yellow-200 border-4 text-gray-900 font-mono w-4/5"
                                       required
                                    onChange={e=>setVille(e.target.value)}
                                />

                                <p className="mt-6 mb-7 mr-10 text-sm text-gray-900 font-mono flex">
                                    Region
                                </p>

                                <input type="text" className="border-yellow-200 border-4 text-gray-900 font-mono w-4/5"
                                       required
                                       onChange={e=>setRegion(e.target.value)}
                                />

                                {/*<select className="border-yellow-200 border-4 text-gray-900 font-mono w-4/5" requi>*/}
                                {/*    <option value="Littoral">Littoral</option>*/}
                                {/*    <option value="Littoral">Centre</option>*/}
                                {/*    <option value="Littoral">Nord</option>*/}
                                {/*    <option value="Littoral">Extreme-nord</option>*/}
                                {/*    <option value="Littoral">Adamaoua</option>*/}
                                {/*    <option value="Littoral">Est</option>*/}
                                {/*    <option value="Littoral">Ouest</option>*/}
                                {/*    <option value="Littoral">Sud-ouest</option>*/}
                                {/*    <option value="Littoral">nord-Ouest</option>*/}
                                {/*    <option value="Littoral">Sud</option>*/}
                                {/*</select>*/}


                                <br/>

                                <button type="submit" className="m-auto text-gray-900 hover:bg-yellow-100 bg-yellow-400 mt-5 font-bold rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">Next</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default CreateAnnounce;