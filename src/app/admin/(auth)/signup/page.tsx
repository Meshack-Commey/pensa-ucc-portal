import Admin from "@/components/img/executives.png"
import Image from "next/image";

export default function AdminSignup() {
    return(
    <>
        <div className='admin-login-container'>
            <div className='admin-login-row'>

                <div className='head-text'> Administration </div>

                <div className='login-box'>
                    <figure>
                        <Image src={Admin} alt='admin icon' />
                    </figure>
                    <p>Signup</p>
                    <form>
                        <input type='text' placeholder='Username' />
                        <input type='email' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <button type='button'> Signup </button>
                    </form>
                    <p> Already an admin? Login </p>
                </div>

            </div>
        </div>
    </>
    )
}