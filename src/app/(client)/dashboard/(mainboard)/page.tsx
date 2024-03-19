import Image from 'next/image'
import Link from 'next/link'
import Profile_Pic from '@/components/assets/img/executives.png'


export default function MemberDashboard() {
    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>
                <p className='mb-3 text-start text-slate-600'>DASHBOARD</p>
                <div className='rounded-sm bg-yellow-500 text-white text-center text-2xl text-bold p-1 mb-10'> 
                    Christ in You! 
                </div>
                <div className='flex gap-10 text-slate-500 text-sm'>
                    <figure className='w-1/6'>
                        <Image 
                            src={Profile_Pic} 
                            alt={"Saviour Doku's profile picture"} 
                            className='w-full'
                        />
                    </figure>
                    <div>
                        <p><span>Member ID:</span> <span className='font-bold'>1342</span></p>
                        <p><span>Full Name:</span> <span className='font-bold'>Saviou Doku</span></p>
                        <p><span>Email:</span> <span className='font-bold'>saviourdoku@gmail.com</span></p>
                        <p><span>Phone Number:</span> <span className='font-bold'>023456789</span></p>
                        <p><span>Membership Type:</span> <span className='font-bold'>Executive</span></p>
                        <p><span>Department:</span> <span className='font-bold'>Media</span></p>
                    </div>
                    <div>
                        <p><span>Status:</span> <span className='font-bold text-blue-500'>ACTIVE</span> </p>
                        <p><span>Level:</span> <span className='font-bold'>400</span></p>
                        <p><span>Program:</span> <span className='font-bold'>B.Sc. Computer Science</span></p>
                        <p><span>Residence:</span> <span className='font-bold'>Casely Hayford Hall</span></p>
                        <p><span>Room number:</span> <span className='font-bold'>85</span></p>
                        <p><span>Member since:</span> <span className='font-bold'> N/A </span></p>
                    </div>
                </div>
                <Link href='/dashboard/profile' className='text-slate-500 font-bold text-end block'>View All</Link>
            </section>
        </>
    )
}