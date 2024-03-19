import AddUsers from '@/components/admin/AddUsers'

export default function AddMembers() {

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>
                <p className='mb-3 text-start text-slate-600 text-lg'> Add Members </p>
                <hr />
                {/** Add Users Component */}
                <AddUsers />
            </section>
        </>
    )
}