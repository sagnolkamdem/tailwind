import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";


const SignUp = () => {
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [numTel, setNumTel] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const [redirect, setRedirect] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const history = useHistory();

    useEffect(() => {
        (

            async () => {
                // const header = `Authorization: Token ${res.data(token)}`;
                console.log("Token "+ localStorage.getItem('token'))

                if (localStorage.getItem('token') !== null){
                    history.push("/");
                }else{
                    console.log('Token exist')
                }
            }
        )();
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === passwordConfirm){

            // console.log(first_name)
            // console.log(last_name)
            // console.log(username)
            // console.log(email)
            // console.log(password)
            // console.log(numTel)
            await axios.post('http://127.0.0.1:8000/api/auth/register', {
                first_name,
                last_name,
                username,
                email,
                password,
                numTel
            }).then(
                setRedirect(true)
            ).catch((err)=>{
                console.log(err)
            });


        }else{
            setShowAlert(true)
        }
    }

    if(redirect){
        history.push('/login');
    }

    return(
        <div className="text-center text-yellow-200 flex justify-center items-center">
            <div className="flex flex-col space-y-3 w-full max-w-2xl p-4 rounded-xl shadow-lg text-white">

                <div className="flex flex-col justify-between">

                    <div className="">
                        <form onSubmit={handleSubmit}>
                            <h1 className="font-bold text-4xl tracking-wide text-gray-900 font-mono border-b-4 border-yellow-300 mb-5">
                                Sign up!
                            </h1>

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
                                First_name
                            </p>

                            <input type="text" className="border-yellow-200 border-4 text-gray-900 font-mono w-4/5"
                                   required
                                   onChange={e=>setFirst_name(e.target.value)}
                            />

                            <p className="mt-6 border-yellow-200 mb-7 mr-10 text-sm text-gray-900 font-mono flex">
                                Last_name
                            </p>

                            <input type="text" className="border-yellow-200 border-4 text-gray-900 font-mono w-4/5"
                                   required
                                   onChange={e=>setLast_name(e.target.value)}
                            />

                            <p className="mt-6 border-yellow-200 mb-7 mr-10 text-sm text-gray-900 font-mono flex">
                                Username
                            </p>

                            <input type="text" className="border-yellow-200 border-4 text-gray-900 font-mono w-4/5"
                                   required
                                   onChange={e=>setUsername(e.target.value)}
                            />

                            <p className="mt-6 mb-7 mr-10 text-sm text-gray-900 font-mono flex">
                                Email
                            </p>

                            <input type="email" className="border-yellow-200 border-4 text-gray-900 font-mono w-4/5"
                                   required
                                   onChange={e=>setEmail(e.target.value)}/>

                            <p className="mt-6 mb-7 mr-10 text-sm text-gray-900 font-mono flex">
                                Numero de telephone
                            </p>

                            <input type="text" className="border-yellow-200 border-4 text-gray-900 font-mono w-4/5"
                                   required
                                   onChange={e=>setNumTel(e.target.value)}/>

                            <p className="mt-6 mb-7 mr-10 text-sm text-gray-900 font-mono flex">
                                password
                            </p>

                            <input type="password" className="border-yellow-200 border-4 text-gray-900 font-mono w-4/5"
                                   required
                                   onChange={e=>setPassword(e.target.value)}/>

                            <p className="mt-6 mb-7 mr-10 text-sm text-gray-900 font-mono flex">
                                Password confirm
                            </p>

                            <input type="password" className="border-yellow-200 border-4 text-gray-900 font-mono w-4/5"
                                   required
                                   onChange={e=>setPasswordConfirm(e.target.value)}/><br/>

                            <button type="submit" className="m-auto text-gray-900 hover:bg-yellow-100 float-right bg-yellow-400 mt-5 font-bold rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">Send</button>

                            <Link to="/Login" className="m-auto text-gray-900 hover:bg-yellow-100 bg-yellow-400 mt-5 font-bold float-left rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">Login</Link>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;