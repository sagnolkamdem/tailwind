import React, {useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";


const Navbar = ({toggle}) => {

    const [auth, setAuth] = useState(false)

    const history = useHistory()


    useEffect(() => {
        (

            async () => {
                // const header = `Authorization: Token ${res.data(token)}`;
                console.log("Token "+ localStorage.getItem('token'))

                if (localStorage.getItem('token') !== null){
                    console.log('Token exist')
                    setAuth(true)

                }else{
                    setAuth(false)
                }
            }
        )();
    }, [])

    const handleLogOut = async (e) => {
        e.preventDefault()

        console.log("Token "+ localStorage.getItem('token'))

        await axios.post('http://127.0.0.1:8000/api/auth/logout', {headers: {
                Authorization: "Token "+ localStorage.getItem('token'),
            }
        }).then(()=>{
            setAuth(false)
            history.push('/createAnnounce')
        });
    }

    return(
        <nav className="flex justify-between items-center h-16 bg-white text-black shadow-sm font-mono" role="navigation">
            {/* border-warning border-4*/}
            <Link to="/" className="font-bold text-center pl-8 rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">Home</Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg className="w-6 h-6"
                     fill="none" stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </div>
            <div className="pr-8 md:block hidden flex">
                <Link to="/createAnnounce" className="font-bold pr-8 rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">Create announce</Link>
                <Link to="/contact" className="font-bold pl-8 rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">Contact</Link>
                {/*<Link to="/about" className="font-bold pl-8 rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">About us</Link>*/}

                {!auth && <>
                    <Link to="/login" className="font-bold pl-8 rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">Login</Link>
                    <Link to="/register" className="font-bold pl-8 rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">Register</Link>
                </>
                }

                {auth && <>
                    <button onClick={handleLogOut} className="font-bold pl-8 rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">LogOut</button>
                    <Link to="/myAccount" className="font-bold pl-24 rounded-full py-2 px-3 uppercase text-xl cursor-pointer tracking-wide">My account!</Link>
                </>
                    }
            </div>
        </nav>

    )
}

export default Navbar;