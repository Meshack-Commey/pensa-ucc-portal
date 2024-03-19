//'use client'
//import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/assets/img/logo.jpeg'


{/** Full Side Navigation */}
export const FullSideNav = () => {

    return(
        <>
            <section className='mt-6 w-full bg-inherit  p-5 '>
                  <div>
                        <p>HOME</p>
                        <p> <Link href={"/admin"} className='text-sm ml-3'> Dashboard </Link> </p>
                        <br />
                        <p>LOG</p> <br />
                        <p> Members </p>
                            <p> <Link href={"/admin/members"} className='text-sm ml-3'> All Members </Link> </p>
                            <p> <Link href={"/admin/add-members"} className='text-sm ml-3'> Add Members </Link> </p>
                        <br />
                        <p> Executives </p>
                            <p> <Link href={"/admin/executives"} className='text-sm ml-3'> All Executives </Link> </p>
                            <p> <Link href={"/admin/add-executives"} className='text-sm ml-3'> Add Executives </Link> </p>
                        <br />
                        <p> Department </p>
                            <p> <Link href={"/admin/department"} className='text-sm ml-3'> All Departments </Link> </p>
                            <p> <Link href={"/admin/department-category"} className='text-sm ml-3'> Add Category </Link> </p>
                            <p> <Link href={"/admin/add-department"} className='text-sm ml-3'> Add Department </Link> </p>
                        <br />
                        <p> Alumni  </p>
                        <p> <Link href={"/admin/alumni"} className='text-sm ml-3'> All Alumni </Link> </p>
                        <br />
                        <p>Admin Tools</p>
                        <p> <Link href={"/admin/settings"} className='text-sm ml-3'> Settings </Link> </p>
                        <br />
                        
                  </div>
                </section>
        </>
    )
}

export const ShortSideNav = () => {
    return(
        <>
            <section className='mt-6 w-full bg-inherit  p-4 flex flex-col gap-6 '>
                      <figure className='w-full border rounded-3xl hover:bg-slate-200 hover:cursor-pointer'>
                          <Image 
                              src={Logo} 
                              alt="pensa" 
                              className='w-full'
                          />
                      </figure>
                      <figure className='w-full border rounded-3xl'>
                          <Image 
                              src={Logo} 
                              alt="pensa" 
                              className='w-full'
                          />
                      </figure>
                      <figure className='w-full border rounded-3xl'>
                          <Image 
                              src={Logo} 
                              alt="pensa" 
                              className='w-full'
                          />
                      </figure>
                      <figure className='w-full border rounded-3xl'>
                          <Image 
                              src={Logo} 
                              alt="pensa" 
                              className='w-full'
                          />
                      </figure>
                      <figure className='w-full border rounded-3xl'>
                          <Image 
                              src={Logo} 
                              alt="pensa" 
                              className='w-full'
                          />
                      </figure>
                  </section>  
        </>
    )
}


