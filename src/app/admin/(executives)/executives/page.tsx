
import AllUsers from '@/components/admin/AllUsers'
//import {executivesDB} from '../../../api/data'

export default function Executives() {
    return (
    <>
        <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>

            <p className='mb-10 text-lg text-start text-slate-500 font-bold'> All Registered Executives </p>
            {/** All Registered Users Component */}
            <AllUsers />

        </section>
    </>
    )
}
