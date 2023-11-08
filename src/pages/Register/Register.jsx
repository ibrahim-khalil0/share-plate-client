import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Providers/AuthProviders';
import { updateProfile } from 'firebase/auth';


const Register = () => {


    const {loginWithGoogle, createUser} = useContext(AuthContext)

    // register with email and password 
    const handleRegister = e => {
        e.preventDefault();

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value

        console.log(name, email, photo, password)

        createUser(email, password)
        .then( result => {
            updateProfile(result.user, {
                displayName: name,
                photoURL: photo
            })
            console.log(result.user)
        })
        .catch( error => {
            console.log('something wrong')
        })
    }

    // login with google function 
    const handleGoogleLogin = () => {
        loginWithGoogle()
    }
    return (
        <div style={{backgroundImage: 'url("https://www.motherspridepreschool.com/news/wp-content/uploads/2019/11/food-sharing-activity-2019-0001.jpg")'}} className='bg-no-repeat bg-cover bg-center'>
            <div className='bg-[#000000a1] min-h-screen text-white text-center'>
                <div className='w-1/2 mx-auto p-20 rounded-md'>
                    <h1 className='text-6xl text-center rounded-md mb-8 pb-2 bg-white text-black'>Register</h1>
                    <div>
                        <form onSubmit={handleRegister}>
                            <input type="text" placeholder='Your Name' name="name" required className='w-full placeholder-white px-2 py-4 rounded-3xl backdrop-blur-sm bg-white/30 backdrop-brightness-125 text-xl text-white outline-0' /><br /><br />
                            <input type="email" placeholder='Your Email' name="email" required className='w-full placeholder-white px-2 py-4 rounded-3xl backdrop-blur-sm bg-white/30 backdrop-brightness-125 text-xl text-white outline-0' /><br /><br />
                            <input type="url" placeholder='Photo url' name="photo" required className='w-full placeholder-white px-2 py-4 rounded-3xl backdrop-blur-sm bg-white/30 backdrop-brightness-125 text-xl text-white outline-0' /><br /><br />
                            <input type="password" placeholder='Password' name="password" required className='w-full placeholder-white px-2 py-4 rounded-3xl backdrop-blur-sm bg-white/30 backdrop-brightness-125 text-xl text-white outline-0' /><br /> <br />
                            <input type="submit" value="Register" name="" id="" className='w-full px-2 py-3 rounded-3xl bg-white text-black text-2xl font-semibold' />
                        </form>
                        <h3 className='text-xl tracking-wide py-6'>Already have an account? <Link to={'/login'}>Login</Link></h3>
                        <h1 className='text-2xl'>Or</h1>

                        <button onClick={handleGoogleLogin} className='w-full relative px-2 py-3 rounded-3xl bg-white text-black text-xl font-semibold mt-6'><span>Login With Google</span> <span className='absolute top-5 left-5'><FcGoogle></FcGoogle></span> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;