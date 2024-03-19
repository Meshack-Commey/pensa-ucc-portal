

export default function DashLayout({
    children
}:{
    children: React.ReactNode
}){
    return(
        <>
            <section className='w-full bg-inherit h-screen max-h-screen flex flex-col'> 

                <div className='mt-16 p-10 w-full h-16 bg-inherit flex justify-between'>
                    <h1 className='text-2xl text-slate-600'> Home </h1>
                    <p className='text-base text-slate-600'> Home | Dashboard </p>
                </div>

                <section className='p-2 text-white'>
                    <div className='w-full p-5 h-auto bg-inherit text-black'>
                        {children}
                    </div>
                </section>

            </section>
        </>
    )
}