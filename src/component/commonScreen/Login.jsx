import React from 'react'
import './style.css'
import saylaniName from '../image/saylaniname.png'
import saylanistore from '../image/saylanistore.png'
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Login = () => {
    return (
        <div>
            <div className='signup_name'>
                <img className='first_image' src={saylaniName} alt="" />
                <img src={saylanistore} alt="" />
            </div>
            <div className='signup_form'>
                <div>
                    <input type="email" placeholder='Email' />
                    <HiOutlineMailOpen />
                </div>
                <div>
                    <input type="password" placeholder='Password' />
                    <AiFillEyeInvisible />
                </div>
                <button className='signup_btn'>Sign In</button>
                <p className='already_account'>Don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login