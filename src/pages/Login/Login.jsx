import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Providers/AuthProviders';
import Helmets from '../../sharedComponents/Helmets/Helmets';

const Login = () => {

    const [error, setError] = useState()
    const {loginWithPassword, loginWithGoogle} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    // login with email and password 
    const handleLogin = e => {
        e.preventDefault();

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        loginWithPassword(email, password)
        .then(result => {
            navigate(location?.state ? location.state : "/")
        })
        .catch(error => {
            setError('Invalid Email Or Password')
        })
    }


    // login with google 
    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(result => {
            navigate(location?.state ? location.state : "/")
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div style={{backgroundImage: 'url("https://www.motherspridepreschool.com/news/wp-content/uploads/2019/11/food-sharing-activity-2019-0001.jpg")'}} className='bg-no-repeat bg-cover bg-center'>
            <Helmets title={'| Login'}></Helmets>
            <div className='bg-[#000000a1] min-h-screen text-white text-center'>
                <div className='w-1/2 mx-auto p-20 rounded-md'>
                    <h1 className='text-6xl text-center mb-10 bg-white text-black rounded-md pb-2'>Login</h1>
                    <div>
                        <form onSubmit={handleLogin}>
                            <input type="email" placeholder='Your Email' name="email" required className='w-full px-2 py-4 rounded-3xl backdrop-blur-sm placeholder-white bg-white/30 backdrop-brightness-125 text-xl text-white outline-0' /><br /><br />
                            <input type="password" placeholder="Password" name="password" required className='w-full px-2 py-4 rounded-3xl backdrop-blur-sm placeholder-white bg-white/30 backdrop-brightness-125 text-xl text-white outline-0' /><br /> <br />
                            <input type="submit" value="Login" name="" id="" className='w-full cursor-pointer px-2 py-3 rounded-3xl bg-white text-black text-2xl font-semibold' />
                        </form>
                        <p className='text-base text-red-500'>{error}</p>
                        <h3 className='text-xl tracking-wide py-6'>Don't have an account? <Link to={'/register'}>Register</Link></h3>
                        <h1 className='text-2xl'>Or</h1>
                        <button onClick={handleGoogleLogin} className='w-full relative px-2 py-3 rounded-3xl bg-white text-black text-xl font-semibold mt-6'><span>Login With Google</span> <span className='absolute top-5 left-5'><FcGoogle></FcGoogle></span> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;