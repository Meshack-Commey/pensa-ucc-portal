'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Welcome_pic from './assets/img/welcome.jpeg'



export default function Signup() {
    const [info, setInfo] = useState({email: "", phone: "", password: ""});
    const [error, setError] = useState("");
    const [pending, setPending] = useState(false);

    const handleInput = (e) => {
        setInfo((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!info.email || !info.phone || !info.password) {
            setError('Must provide all the credentials')
        }
        try {
            setPending(true);
            const res = await fetch('api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            });
            if(res.ok) {
                setPending(false)
                const form = e.target;
                form.reset();
                console.log('User registered')
            } else {
                const errorData = await res.json();
                setError(errorData.message);
                console.log('something went wrong');
                setPending(false);
            }
        } catch(error) {
            setPending(false);
            setError('Something went wrong')
        }
    }

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
                    
                    <h1 className='text-xl text-blue-900 font-bold mb-2'> Welcome to PENSA UCC </h1>
                    <p className='text-sm text-blue-900'> Enter your credentials </p>
                </div>

                <div className='mt-5 flex flex-col items-center justify-items-center'>
            
                    <form onSubmit={handleSubmit}>
                        <div className='mt-2 mb-1 flex flex-col gap-2 w-full'>
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
                        <div className='mt-2 mb-1 flex flex-col gap-2 w-full'>
                            <label className='font-bold text-sm text-blue-900'>Phone Number </label>
                            <input 
                                type="tel" 
                                name="phone" 
                                placeholder="Enter your email" 
                                onChange={(e) => handleInput(e)}
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-10" 
                                required
                            />
                        </div>
                        <div className='mt-2 mb-1 flex flex-col gap-2 w-full'>
                            <label className='font-bold text-sm text-blue-900'>Password</label> 
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter your password" 
                                onChange={(e) => handleInput(e)}
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-10" 
                                required
                            />
                        </div>
                        {/* <div className='mt-2 mb-1 flex flex-col gap-2 w-full'>
                            <label className='font-bold text-sm text-blue-900'>Confirm Password</label> 
                            <input 
                                type="password" 
                                name="confirm_password" 
                                placeholder="Confirm password" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-10" 
                                required
                            />
                        </div> */}
                        <div className='mt-2 mb-1 flex gap-2 w-full'>
                            <input 
                                type="checkbox" 
                                name="agreed"  
                                required
                            />
                            <label className=' text-sm text-blue-900'> I agree to the <Link href={'/'}>terms</Link> and <Link href={'/'}>conditions</Link>. </label> 
                        </div>
                        { error && <span>{error}</span> }
                        <div className='m-5 w-full'>
                            <Link href={"/"}>
                            <button 
                                type='button' 
                                className={`w-96 h-10 border border-slate-300 bg-blue-900 text-center font-bold text-yellow-500 rounded-md`}> 
                                Register
                            </button>
                            </Link>
                        </div>
                    </form>
                    <p className='text-center text-base mt-4'> <span className='text-blue-900'>Already a Member or an Associate?</span> <Link href={'/'} className='text-yellow-500 font-bold'> Login </Link> </p>
                </div>

            </div>
        </div>
    </>
    )
}