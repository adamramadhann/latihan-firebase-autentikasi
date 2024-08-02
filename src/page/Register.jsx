import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { NavLink } from 'react-router-dom'


const Register = () => {

    const image = 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600'


    const handleGogle = () => {
        // untuk mendapatkan instnance dari objexk otentikasi firebase
        const auth = getAuth();

        // untuk memunculkan email yang tersedia
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((res) => {
            console.info(res.user)
        })
        .catch(err => {
            console.info(err)
        })
        
    }

    return (
    <div className='flex items-center justify-center w-screen h-screen bg-slate-100 '>
        <div className=' bg-white shadow-lg w-[60%] h-[62%] flex  rounded-lg'>
            <div className='flex-1'>
                <img src={image} alt="" className='object-cover w-full h-full rounded-lg ' />
            </div>
            <div className='flex-1 items-center flex-col flex'>
                <h1 className='text-[23px] font-bold mt-3'>From Register </h1>
                <form className='flex mt-3 w-96  flex-col gap-2' >

                    <label htmlFor="email" className='mr-1'  >Email :</label>
                    <input type="email" id='email' placeholder='masukan email anda' className='border p-1 rounded-md pl-1 py-3  ' />


                    <label htmlFor="password" className='mt-1'  >password :</label>
                    <input type="password" id='password' placeholder='masukan password anda' className='border p-1 rounded-md pl-1 py-3 ' />
                    
                    <label htmlFor="rePassword" className='mt-1'  >password :</label>
                    <input type="password" id='rePassword' placeholder='masukan password yang sama' className='border p-1 rounded-md pl-1 py-3 ' />

                    <button type='submit' className='border bg-blue-500 text-white rounded-md py-3 text-[18px] mt-2  ' >Submit</button>

                    <p className='text-[13px] -mt-1 '>
                    Silahkan ke page <NavLink  to={'/'} className={'text-blue-500'} >Login </NavLink> 
                    !! / register With <button onClick={handleGogle} className='text-blue-500' > Gogle</button>
                    </p>
                
                </form>
            </div>
        </div>
    </div>
)
}

export default Register