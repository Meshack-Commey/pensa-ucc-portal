import Admin from "@/components/img/executives.png"
import Image from "next/image";

export default function AdminLogin() {
    return(
    <>
        <div className='admin-login-container'>
            <div className='admin-login-row'>

                <div className='head-text'> Administration </div>

                <div className='login-box'>
                    <figure>
                        <Image src={Admin} alt='admin icon' />
                    </figure>
                    <p>Login with your credentials</p>
                    <form>
                        <input type='text' placeholder='Username' />
                        <input type='password' placeholder='Password' />
                        <button type='button'> Login </button>
                    </form>
                    <p> Not registered? Contact Admin </p>
                </div>

            </div>
        </div>
    </>
    )
}