
import Link from 'next/link'
import Image from 'next/image'

import AdminLoginForm from '@/components/admin/AdminLoginForm'

import Welcome_pic from '@/components/assets/img/welcome.jpeg'
import Pensa_logo from '@/components/assets/img/logo.jpeg'



export default function Login() {
    
    return(
    <>
        <div className='p-10 h-screen border-inherit border bg-gray-200 flex justify-center content-center'>
            
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
                    <p className='text-base text-blue-900'> Admin Login </p>
                </div>

                <div className='mt-5 flex flex-col items-center justify-items-center'>
            
                   <AdminLoginForm />
                   
                    <p className='text-center mt-10'> <span className='text-blue-900'>Not a registered Admin?</span> <Link href={'/admin'} className='text-yellow-500 font-bold'> Contact us </Link> </p>
                </div>

            </div>
        </div>
    </>
    )
}