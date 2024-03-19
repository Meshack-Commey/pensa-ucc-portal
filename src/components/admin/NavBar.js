'use client'
import {useState} from 'react'
import Image from "next/image";
import Admin from "@/components/assets/img/executives.png"
import Logo from '@/components/assets/img/logo.jpeg'
import SideBarAction from './SideBar'
// export const ToggleSideBarAction = ({props}) => {
//     return props.open;
// }

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
            <header className='w-full h-16 bg-blue-900 flex justify-between fixed z-50'> 
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
                <section className='w-3/12 h-16 mr-8 p-2 bg-yellow-400 text-blue-900 flex gap-2 justify-center'>
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
        </>
    )
}
