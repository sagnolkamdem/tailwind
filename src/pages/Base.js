import React, {useState} from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";

const Base = (props: any) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }



    return(
        <div>

            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>

                {props.children}

            <Footer />

        </div>
    )
}

export default Base;