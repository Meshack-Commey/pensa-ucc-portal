import Link from 'next/link'

export default function Profile() {

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>
                <p className='mb-3 text-start text-slate-600'> Profile </p>
                <hr />
                <div>
                    <p> <Link href={"/dashboard/profile/edit-profile"} className='text-sm text-slate-700 ml-3'> Edit Profile </Link> </p>
                    <p> <Link href={"/dashboard/profile/change-password"} className='text-sm text-slate-700 ml-3'> Change Password </Link> </p>
                    <p> <Link href={"/"} className='text-sm text-slate-700 ml-3'> Sign out </Link> </p>
                </div>
            </section>
        </>
    )
}