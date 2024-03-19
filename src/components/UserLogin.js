'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Welcome_pic from './assets/img/welcome.jpeg'
import Pensa_logo from './assets/img/logo.jpeg'



export default function Login() {
    const [info, setInfo] = useState({username:"", password:""});

    const handleInput = (e) => {
        setInfo((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    console.log(info);
    return(
    <>
        <div className='p-10 h-screen border-inherit border bg-gray-200 flex justify-center content-center'>
            <div className='w-1/2'>
                <figure className={` border border-red bg-gray-100`}>
                    <Image 
                        src={Welcome_pic} 
                        alt='pensa' 
                        className={`
                            w-full
                        `}
                    />
                </figure>
            </div>
            <div className='border border-inherit bg-white md:w-1/2 flex flex-col justify-center content-center '>

                <div className='text-center flex flex-col justify-center items-center'> 
                    <figure className={`w-1/12 mb-2 border border-red rounded-2xl bg-gray-900`}>
                        <Image 
                            src={Pensa_logo} 
                            alt='pensa' 
                            className={`w-full`}
                        />
                    </figure>
                    <h1 className='text-3xl text-blue-900 font-bold mb-2'> Christ in You! </h1>
                    <p className='text-base text-blue-900'> Enter your email address and password to access your account </p>
                </div>

                <div className='mt-5 flex flex-col items-center justify-items-center'>
            
                    <form onSubmit={handleSubmit}>
                        <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                            <label className='font-bold text-sm text-blue-900'>Email Address </label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Enter your email" 
                                onChange={(e) => handleInput(e)}
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-10" 
                                required
                            />
                        </div>
                        <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                            <span className='flex justify-between'>
                                <label className='font-bold text-sm text-blue-900'>Password </label> 
                                <p className='text-yellow-500 text-sm text-end font-bold'>Forgot your Password?</p>
                            </span>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter your password" 
                                onChange={(e) => handleInput(e)}
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-10" 
                                required
                            />
                        </div>
                        <div className='m-5 w-full'>
                            <Link href={"/dashboard"}>
                            <button 
                                type='button' 
                                className={`w-96 h-10 border border-slate-300 bg-blue-900 text-center font-bold text-yellow-500 rounded-md`}> 
                                Login 
                            </button>
                            </Link>
                        </div>
                    </form>
                    <p className='text-center mt-10'> <span className='text-blue-900'>Not a registered Member?</span> <Link href={'/signup'} className='text-yellow-500 font-bold'> Register </Link> </p>
                </div>

            </div>
        </div>
    </>
    )
}