'use client'
import {useState} from 'react'
import Link from "next/link"
import Image from "next/image";
import { FullSideNav, ShortSideNav } from '@/components/admin/SideBar'
import Admin from "@/components/assets/img/executives.png"
import Logo from '@/components/assets/img/logo.jpeg'

export default function AdminLayout({
    children
}:{
    children: React.ReactNode
}) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return(
    <>
        {/** Navbar Section */}
        <header className='w-full h-16 bg-blue-900 flex justify-between fixed z-9999'> 
                <section className="m-2 flex justify-left text-white">
                    <figure className={`w-1/6 mr-3 rounded-6xl ${isOpen ? 'hidden' : ''} `}> {/** hide this section to open side bar */}
                        <Image 
                            src={Logo} 
                            alt="PENSA UCC" 
                            className='w-full'
                        /> 
                    </figure>
                    <div className={`flex gap-5 bg-inherit mr-5 w-52 ${isOpen ? '' : 'hidden'} `}>
                        <figure className='w-1/4 ml-3 rounded-6xl'>
                            <Image 
                                src={Logo} 
                                alt="PENSA UCC" 
                                className='w-full'
                            /> 
                        </figure>
                        <p className="text-white font-bold mt-3">PENSA UCC</p>
                    </div>
                    <span onClick={toggle} className="font-bold text-xl flex justify-center m-2 hover:cursor-pointer"> &#9776; </span>
                </section>
                <section className='w-3/12 h-16 mr-8 p-2 bg-white text-blue-900 flex gap-2 justify-center'>
                    <figure className='w-1/6 rounded-3xl'>
                        <Image 
                            src={Admin} 
                            alt="Saviour Doku" 
                            className='w-full'
                        />
                    </figure>
                    <p className="text-base"> <span className='font-bold'>PENSA UCC PORTAL </span><br /> Adminstrator </p>
                </section>
            </header>
        {/** Endblock of Navbar Section */}

        <section className='flex '>

          {/** SideBar */}
          <div> 
            {/** short side nav */}
            <div className={`${isOpen ? 'hidden' : ''} w-16 max-h-screen h-screen bg-blue-900 relative top-10 z-40`}>
                  <ShortSideNav />
              </div> {/** short side bar */}
            {/** Full side bar */}
            <div className={` ${isOpen ? '' : 'hidden'} ${isOpen ? 'w-56' : ''} max-h-screen h-screen bg-blue-900 text-white relative top-10 z-40`}>
                <FullSideNav />
            </div> {/** Full side bar */}
          </div>
          {/** Endblock of SideBar Navigation */}

          <main className={` w-full bg-inherit h-screen max-h-screen flex flex-col`}> 

            <div className='mt-16 p-9 w-full h-16 bg-inherit flex justify-between'>
              <h1 className='text-2xl'> Dashboard </h1>
              {/* <p className='text-base'> Admin | Dashboard </p> */}
            </div>

            <section className='p-2 text-white'>
              <div className='w-full p-5 h-auto bg-inherit text-black'>
                {children}
              </div>
            </section>
        
          </main>

        </section>
    </>
    )
    
}