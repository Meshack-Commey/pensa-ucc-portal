'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Signup() {
    const [info, setInfo] = useState({username: "", email: "" , password: ""});
    const [error, setError] = useState("");
    const [pending, setPending] = useState(false);

    function handleInput(e) {
        setInfo((prev)=>({...prev, [e.target.name]:e.target.value}))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if(!info.username || !info.email || !info.password) {
            setError("Must have all the credentials.");
        }
        try {
            setPending(true);
            const res = await fetch('/api/register', {
                method: POST,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(info),
            });
            if(res.ok) {
                setPending(false);
                const form = e.target;
                form.reset();
                console.log('user registered');
            } else {
                const errorData = await res.json()
                setError(errorData.message);
                setPending(false);
            }
        } catch(error) {
            setPending(false)
            setError("Something went wrong.")
        }
    }

    return(
    <>
        <div className='p-10 h-screen border-inherit border bg-orange-50 flex justify-center content-center'>
            <div className="md:w-1/2 border border-red bg-gray-100"></div>
            <div className='border border-inherit bg-white md:w-1/2 flex flex-col justify-center content-center '>

                <div className='text-center'> 
                    <h1 className='text-4xl text-orange-500 font-bold mb-2'>Welcome to Pensa UCC</h1>
                    <p className='text-base'> Enter your credentials </p>
                </div>

                <div className='mt-5 flex flex-col items-center justify-items-center'>
            
                    <form onSubmit={handleSubmit}>
                        <div className='m-5'>
                            <input 
                                type='text' 
                                name='username' 
                                placeholder='Full Name' 
                                onChange={(e)=> handleInput(e)} 
                                className='w-96 h-10 p-4 border border-slate-300 rounded-md' 
                                required 
                            />
                        </div>
                        <div className='m-5'>
                            <input 
                                type='email' 
                                name='email' 
                                placeholder='Email' 
                                onChange={(e)=> handleInput(e)} 
                                className='w-96 h-10 p-4 border border-slate-300 rounded-md' 
                                required 
                            />
                        </div>
                        <div className='m-5'>
                            <input 
                                type='password' 
                                name='password' 
                                placeholder='Password' 
                                onChange={(e)=> handleInput(e)} 
                                className='w-96 h-10 p-4 border border-slate-300 rounded-md' 
                                required 
                            />
                        </div>
                        {error && <span className='text-md text-red-300'>{error}</span>}
                        <div className='m-5'>
                            <input type='submit' value='Sign up' className='w-96 h-10 border border-slate-300 bg-orange-500 text-center text-white rounded-md'/> 
                            <p> <input type='checkbox' required /> I agree to the terms and conditions </p>
                        </div>
                    </form>
                    <p className='text-center mt-10'> Already a Member? <Link href={'/login'} className='text-orange-500 font-bold'> Login </Link> </p>
                </div>

            </div>
        </div>
    </>
    )
}