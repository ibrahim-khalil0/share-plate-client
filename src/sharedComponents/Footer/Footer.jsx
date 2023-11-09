import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='border-t border-gray-400 pt-10 text-center'>
            <div>
                <img src={logo} alt="" className="inline w-16" />
                <h1 className="text-xl">Share Plate</h1>
            </div>

            <p className="text-lg pt-6 tracking-wide"> 67, motijheel commercial area, 1000, Dhaka Bangladesh</p>
            <div className="flex gap-10 justify-center items-center pt-2">
                <p className="flex gap-2 items-center"><span><BsTelephone></BsTelephone></span><span>+8801837508011</span></p>
                <p className="flex gap-2 items-center"><span><FaRegEnvelope></FaRegEnvelope></span><span>mdibrahimkhalil@gmail.com</span></p>
            </div>
            <h1 className="flex justify-center gap-5 text-lg text-white mt-5"><span className="primary-bg p-2 rounded-full"><FaFacebookF></FaFacebookF></span><span className="primary-bg p-2 rounded-full"><FaTwitter></FaTwitter></span><span className="primary-bg p-2 rounded-full"><FaInstagram></FaInstagram></span> <span className="primary-bg p-2 rounded-full"><FaLinkedinIn></FaLinkedinIn></span></h1>
            
            <div className="space-x-10 pt-4 font-semibold">
                <Link to={'/'}>Home</Link>
                <Link to={'/foods'}>Foods</Link>
                <Link to={'/addFood'}>Add Food</Link>
                <Link to={'/manageFood'}>Manage My Foods</Link>
                <Link to={'/myFoodRequest'}>My Food Request</Link>
            </div>
            <div className="bg-black text-white mt-6 px-[5%] flex justify-between">
                <h1>Copyright © 2023 Share Plate.</h1>
                <h1>Developed By - Md Ibrahim Khalil</h1>
            </div>
        </div>
    );
};

export default Footer;