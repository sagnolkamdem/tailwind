import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

const Dropdown = ({isOpen, toggle}) => {
    const [auth, setAuth] = useState(false)

    const history = useHistory()

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
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-yellow-500' : 'hidden'} onClick={toggle}>
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
    )
}

export default Dropdown;