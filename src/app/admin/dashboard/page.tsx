import Image from 'next/image'
import { dashboardStates } from '../../api/data.js'

export default function Dashboards() {
    return(
        <section className=' pr-10 pt-5 pb-5 bg-inherit flex flex-wrap gap-2 justify-between items-between'>
            {/** Dashboard Cards */}

            {
                dashboardStates.map((dashboard) => {
                    return(
                        <>
                            <div className='bg-white pl-6 pr-6 pt-4 pb-4 flex gap-10 justify-center items-center border border-white rounded-md'>
                                <figure className='w-5/12'>
                                    <Image 
                                        src={dashboard.icon} 
                                        alt={dashboard.name} 
                                        className='w-full'
                                    />
                                </figure>
                                <div className='flex flex-col justify-end items-end text-slate-500 font-bold'>
                                    <p> {dashboard.value} </p>
                                    <p> {dashboard.name} </p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            
        </section>
    )
}