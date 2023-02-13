import React from 'react';
import logo from '../image/saylanilogo.jpeg';
import saylaniName from '../image/saylaniname.png';
import saylaniSecondName from '../image/saylanistore.png'
import './style.css'

const WelcomeScreen = () => {
    return (
        <div className='welcome_screen'>
            <div className='welcome_screen_logo'>
                <img src={logo} alt="" />
                <div className='welcome_name'>
                    <img src={saylaniName} alt="" />
                </div>
                <div className='welcome_second_name'>
                    <img src={saylaniSecondName} alt="" />
                </div>
            </div>
            <div className='start_btn'>
                <p>Get Started</p>
            </div>
        </div>
    )
}

export default WelcomeScreen