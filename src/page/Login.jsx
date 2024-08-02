import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const Login = () => {
    const image = "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600";
    

    const naviGate = useNavigate();

    const handleLoginGoogle = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                localStorage.setItem("user", JSON.stringify(result.user))
                naviGate('/dashboard')
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className='flex items-center justify-center w-screen h-screen bg-slate-100'>
            <div className='bg-white shadow-lg w-[60%] h-[48%] flex rounded-lg'>
                <div className='flex-1'>
                    <img src={image} alt="Login Background" className='object-cover w-full h-full rounded-lg' />
                </div>
                <div className='flex-1 flex flex-col items-center'>
                    <h1 className='text-[23px] font-bold mt-3'>Form Login</h1>
                    <form className='flex flex-col gap-2 w-96 mt-3'>
                        <label htmlFor="email" className='mr-1'>Email:</label>
                        <input type="email" id='email' placeholder='Masukkan email Anda' className='border p-1 rounded-md pl-1 py-3' />

                        <label htmlFor="password" className='mt-1'>Password:</label>
                        <input type="password" id='password' placeholder='Masukkan password Anda' className='border p-1 rounded-md pl-1 py-3' />

                        <button type='button' className='py-3 border bg-blue-500 text-white rounded-md mt-2'>Submit</button>

                        <p className='text-[13px] -mt-1'>
                            Silahkan ke page <NavLink to={'/register'} className='text-blue-500'>Register</NavLink> 
                            !! / Login With <button type='button' onClick={handleLoginGoogle} className='text-blue-500'>Google</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
