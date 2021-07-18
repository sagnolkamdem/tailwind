import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";

const CreateLocation = () => {

    const {id} = useParams()

    const client = localStorage.getItem('id')
    const announce = id

    const [redirect, setRedirect] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const history = useHistory();

    useEffect(() => {
        (

            async () => {
                if (localStorage.getItem('token') !== null){
                    console.log('Token exist')

                    axios.post("http://127.0.0.1:8000/app/announces/"+ id +"/location", {
                        client,
                        announce

                    }).then((err)=>{
                        alert("Created successfully... a manager will call you later!")
                        history.push("/");
                    }).catch(()=>{
                        alert("Retry please!")
                        history.push("/");
                    });

                }else{
                    history.push("/login");
                }
            }
        )();
    }, [1000])

    return(
        <div>

        </div>
    )


}

export default CreateLocation;