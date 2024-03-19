'use client'
import Link from 'next/link'
import { useState } from 'react'


export default function AdminLoginForm() {
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
                            <Link href={"/admin/dashboard"}>
                            <button 
                                type='button' 
                                className={`w-96 h-10 border border-slate-300 bg-blue-900 text-center font-bold text-yellow-500 rounded-md`}> 
                                Log in 
                            </button>
                            </Link>
                        </div>
                    </form>
                   
    </>
    )
}