import Link from "next/link"
import Image from "next/image";
import Profile_Pic from "@/components/assets/img/executives.png"
import Logo from '@/components/assets/img/logo.jpeg'

export default function AdminLayout({
    children
}:{
    children: React.ReactNode
}) {

    return(
    <div className='bg-inherit'> 
        {/** Navbar Section */}
        <header className='w-full h-16 bg-blue-900 flex justify-between fixed z-50'> 
          <div className={`flex gap-5 bg-inherit mr-5 ml-8 mt-1 w-52 `}>
            <figure className='w-1/4 ml-3 rounded-6xl'>
                <Image 
                    src={Logo} 
                    alt="PENSA UCC" 
                    className='w-full'
                /> 
            </figure>
            <p className="text-white font-bold mt-3">PENSA UCC</p>
          </div>
          <section className='w-3/12 h-16 mr-8 p-2 bg-white text-blue-900 flex gap-2 justify-center'>
            <figure className='w-1/6 rounded-3xl'>
              <Image 
                src={Profile_Pic} 
                alt="Saviour Doku" 
                className='w-full'
              />
            </figure>
            <p className="text-base"> saviourdoku@gmail.com <br /> member </p>
          </section>
        </header>
        {/** Endblock of Navbar Section */}

        {/** Content Section */}
        <section className='flex '>
          {/** Sidebar Navigations */}
          <div className='w-3/12 m-10 bg-inherit relative top-10 z-40'>
            <section className='mt-4 w-3/12 h-screen bg-white fixed'>
              <div>
                <div className="mt-8 mb-8 flex flex-col justify-center content-center">
                  <center>
                    <figure className='w-1/6 mb-3 rounded-3xl'>
                      <Image 
                        src={Profile_Pic} 
                        alt='Saviour Doku' 
                        className='w-full'
                      />
                    </figure>
                  </center>
                  <p className='text-base text-center text-slate-800'>Saviour Doku</p>
                  <p className="text-base text-center text-slate-800"> Member since: Jan, 2021 </p>
                </div>
                <div className="mb-3 p-5 flex flex-col gap-5">
                  <p className="text-slate-600">HOME</p>
                  <p> <Link href={"/dashboard"} className='text-sm text-slate-700 ml-3'> Dashboard </Link> </p>
                </div>
                <div className="mb-3 p-5 flex flex-col gap-5">
                  <p className="text-slate-600"> MY ACCOUNT </p>
                  <p> <Link href={"/dashboard/profile"} className='text-sm text-slate-700 ml-3'> Profile </Link> </p>                 
                  
                </div>
              </div>
            </section>
          </div>
          {/** Endblock of Sidebar Navigations */}

          {/** Main Contents block */}
          <main className="w-8/12">
            { children }
          </main>
          {/** Endblock of Main Contents */}
        </section>
        {/** Endblock of Content Section */}
    </div>
    )
    
}