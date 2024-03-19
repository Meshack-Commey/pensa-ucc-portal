


export default function updateUserInfo() {

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>
                <p className='mb-3 text-start text-slate-600 text-lg'>Update Members</p>
                <hr />
                <form className='text-sm text-slate-500 bg-inherit'>
                    <div className='mt-6 mb-3'>
                        <label className='font-bold'>Upload Profile Picture: </label>
                        <input type="file" name="profile_picture" value={''} accept="*/image" />
                    </div>
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>First Name </label>
                            <input 
                                type="text" 
                                name="firstname" 
                                value={"Saviour"}
                                placeholder="Enter your first name" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Last Name </label>
                            <input 
                                type="text" 
                                name="lastname" 
                                value={"Saviour"}
                                placeholder="Enter your last name" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Membership Type </label>
                        <input 
                            type="text" 
                            name="membership_type" 
                            value={"Pentecost Member"} 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Individual Category </label>
                        <input 
                            type="text" 
                            name="individual_category" 
                            value={"student"} 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Email Address </label>
                            <input 
                                type="email" 
                                name="email" 
                                value={"Saviour@gmail.com"}
                                placeholder="Enter email address" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Phone Number </label>
                            <input 
                                type="tel" 
                                name="phone_number" 
                                value={"Saviour"}
                                placeholder="Enter phone number" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Hightest Educational Level </label>
                        <input 
                            type="text" 
                            name="educational_level" 
                            value={"Bachelor"} 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                        />
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Program of Study </label>
                        <input 
                            type="text" 
                            name="program_of_study" 
                            value={"Saviour"}
                            placeholder="Enter your program of study" 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                        />
                    </div>
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Hall or Hostel of Residence </label>
                            <input 
                                type="text" 
                                name="residence" 
                                value={"Saviour"}
                                placeholder="Enter your hall or hostel name" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Room Number </label>
                            <input 
                                type="text" 
                                name="room_number" 
                                value={"Saviour"}
                                placeholder="Enter room number" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Health Condition(s) if any </label>
                        <input 
                            type="text" 
                            name="health_condition" 
                            value={"Saviour"}
                            placeholder="Health condition if any" 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                        />
                    </div>
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Church Department </label>
                            <input 
                                type="text" 
                                name="church_department" 
                                value={"Saviour"}
                                placeholder="Which department would you like to join?" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Interests </label>
                            <input 
                                type="text" 
                                name="interest" 
                                value={"Saviour"}
                                placeholder="List your interests" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Parent or Guardian Fullname </label>
                        <input 
                            type="text" 
                            name="parent_name" 
                            value={"Saviour"}
                            placeholder="Enter your parent or guardian fullname" 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                        />
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Parent or Guardian Contact </label>
                        <input 
                            type="tel" 
                            name="parent_contact" 
                            value={"Saviour"}
                            placeholder="Enter your parent or guardian contact" 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                        />
                    </div>
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>District </label>
                            <input 
                                type="text" 
                                name="residence" 
                                value={"Saviour"}
                                placeholder="Enter your hall or hostel name" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Area </label>
                            <input 
                                type="text" 
                                name="room_number" 
                                value={"Saviour"}
                                placeholder="Enter room number" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Password </label>
                        <input 
                            type="password" 
                            name="password" 
                            value={"Saviour"}
                            placeholder="Enter your parent or guardian contact" 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                        />
                    </div>
                    <div className='flex gap-3 w-full justify-end items-end'>
                        <button type="submit" className='mt-6 mb-3 w-1/6 h-10 bg-blue-500 text-white font-bold border rounded-md'> Update </button>
                        <button type="reset" className='mt-6 mb-3 w-1/6 h-10 bg-red-500 text-white font-bold border rounded-md'> Cancel </button>
                    </div>
                </form>
            </section>
        </>
    )
}