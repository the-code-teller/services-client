import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const [userData, setUserData] = useState({})

    const navigate = useNavigate()

    useEffect(() => {


        const callAboutPage = async () => {
            try {
                const res = await fetch('/about', {
                    method: 'GET',
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                })

                const data = await res.json()
                setUserData(data)
                console.log(data);

                if (!res.status === 200) {
                    const error = new Error(res.error)
                    throw error
                }

            } catch (err) {
                console.log(err);
                ("../login", { replace: true });
            }
        }

        callAboutPage()
    }, [])

    return (
        <div>
            <h5>{userData.name}</h5>
            <h5>{userData.email}</h5>
        </div>
    )
}

export default About
