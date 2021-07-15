import React, {useState} from 'react';
import {Link, Redirect, useHistory} from "react-router-dom";
import {SyntheticEvent} from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [redirect, setRedirect] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const history = useHistory();

    const [data, setData] = useState('')

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()

        await axios.post('http://127.0.0.1:8000/api/auth/login', {
            username,
            password
        }).then(res => {
            console.log(username, password)
            setData(res.data)
            localStorage.setItem('token', res.data.token);
            // console.log("token "+res.data.token)
            // console.log("user "+res.data.user.id)
            setRedirect(true)
        }).catch(err=>{
            console.log(err, "qwerty")
            setShowAlert(true)
        });
    }

    if (redirect){
        return <Redirect to="/"/>;
    }

    return(
        <div className="text-center text-yellow-200 h-screen flex justify-center items-center">
            <div className="flex flex-col space-y-3 w-full max-w-2xl p-8 rounded-xl shadow-lg text-white">

                <div className="flex flex-col justify-between">

                    <div className="">
                        <form onSubmit={handleSubmit}>
                            <h1 className="font-bold text-4xl tracking-wide text-gray-900 font-mono border-b-4 border-yellow-300 mb-5">
                                Login!
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
                                Username
                            </p>

                            <input type="text" className="border-yellow-200 border-4 text-gray-900 font-mono w-4/5"
                                   required
                                   onChange={e=>setUsername(e.target.value)}
                            />

                            <p className="mt-6 mb-7 mr-10 text-sm text-gray-900 font-mono flex">
                                password
                            </p>

                            <input type="password" className="border-yellow-200 border-4 text-gray-900 font-mono w-4/5"
                                   required
                                   onChange={e=>setPassword(e.target.value)}/><br/>

                            <button type="submit" className="m-auto text-gray-900 hover:bg-yellow-100 float-right bg-yellow-400 mt-5 font-bold rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">Send</button>

                            <Link to="/register" className="m-auto text-gray-900 hover:bg-yellow-100 bg-yellow-400 mt-5 font-bold float-left rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">Register</Link>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;