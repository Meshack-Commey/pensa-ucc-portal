

export default function AdminLayout({
    children
}:{
    children: React.ReactNode
}) {
    return(
        <>
            
            <main className={`w-full flex max-h-screen`}>
                {/** Side Nav Bar */}
                <section className={`w-2/12 h-screen p-5 pb-10 bg-blue-900 text-white flex flex-col justify-between`}>
                    <nav className={`bg-inherit`}>
                        <div>
                            <h1>Dashboard</h1>
                        </div>
                        <div>
                            <h1>Members</h1>
                        </div>
                        <div>
                            <h1>Calendar</h1>
                        </div>
                        <div>
                            <h1>Email Inbox</h1>
                        </div>
                        <div>
                            <h1>Departments</h1>
                        </div>
                        <div>
                            <h1>Executives</h1>
                        </div>
                        <div>
                            <h1>Alumni</h1>
                        </div>
                    </nav>
                    <nav>
                        <div>
                            <h1>Support</h1>
                        </div>
                        <div>
                            <h1>Updates</h1>
                        </div>
                        <div>
                            <h1>Log Out</h1>
                        </div>
                    </nav>
                </section>
                {/** Main Content */}
                <section className={`w-10/12 h-screen p-5 bg-inherit`}>
                    <header className={"flex justify-between pr-5 bg-white"}>
                        <div className="flex gap-5"> 
                            <button className="font-bold text-xl mb-6 sm:block md:hidden"> &#9776; </button> 
                            <h1> PENSA UCC </h1>
                        </div>
                        <div> 
                            <input type="text" className={`w-full`} placeholder="Search for File, Members, Executives, Alumni..." /> 
                        </div>
                        <div> 
                            <nav>MeshCom <br /> Admin </nav> 
                        </div> 
                    </header>
                    <div> 
                        { children } 
                    </div>
                </section>
            </main>
        </>
    )
}