import React from 'react'
import './style.css'
import saylaniName from '../image/saylaniname.png'
import saylanistore from '../image/saylanistore.png'
import { CgProfile } from "react-icons/cg";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Signup = () => {
    return (
        <div className='signup_screen'>
            <div className='signup_name'>
                <img className='first_image' src={saylaniName} alt="" />
                <img src={saylanistore} alt="" />
            </div>
            <div className='signup_form'>
                <div>
                    <input type="text" placeholder='Full Name' />
                    <CgProfile />
                </div>
                <div>
                    <input type="number" placeholder='Contact' />
                    <FiPhoneCall />
                </div>
                <div>
                    <input type="email" placeholder='Email' />
                    <HiOutlineMailOpen />
                </div>
                <div>
                    <input type="password" placeholder='Password' />
                    <AiFillEyeInvisible />
                </div>
                <button className='signup_btn'>Sign Up</button>
                <p className='already_account'>Already have an account? Login</p>
            </div>
        </div>
    )
}

export default Signup