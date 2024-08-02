import { getAuth, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const [user, setUser] = useState()
    const navigate = useNavigate()

    useEffect( () => {
        setUser(JSON.parse(localStorage.getItem("user")));
        console.info(user)
    }, [])



    function handleLOgOut () {
        const auth = getAuth();
        signOut(auth)
        .then((result) => {
            localStorage.clear()
            navigate('/')
        })
        .catch ((err) => {
            console.error(err)
        })

    }



    return (
    <div className='w-screen min-h-screen flex flex-col bg-gradient-to-tr from-blue-500 to-blue-400 lg:items-center lg:justify-center'>
        
        <div className='w-full max-w-xs sm:max-w-xs md:max-w-md lg:max-w-md xl:max-w-md bg-white flex flex-col gap-4 shadow-lg rounded-lg items-center'>

            <h1>Profile</h1>
            <img 
            src={user?.photoURL} 
            alt="" 
            className='w-[100px] h-[100px] rounded-full object-cover '
            />

            <h1>{user?.email}</h1>
            <button onClick={handleLOgOut} className='h-10 bg-red-500 rounded-lg w-full'> Logout </button>

        </div>

    </div>
)
}

export default Dashboard