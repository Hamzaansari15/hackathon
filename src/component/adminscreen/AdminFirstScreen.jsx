import React from 'react'
import backArrow from '../image/backarrow.png'
import adminImage from '../image/adminimage.png'
import cardImage from '../image/cardimage.png'
import { TfiMenuAlt } from "react-icons/tfi";
import './admin.css'
// import 
const AdminFirst = () => {
  return (
    <div className='admin_first_screen'>
      <div className='main_admin_header'>
        <div className='admin_header'>
          <img src={backArrow} alt="" />
          <img src={adminImage} alt="" />
          <div>
            <p className='admin_name'>Mr. Ahmed</p>
            <p className='admin'>Admin</p>
          </div>
        </div>
        <div className='menu_icon'>
          <TfiMenuAlt />
        </div>
      </div>
      <div className='admin_first_body'>
        <p className='all_product'>All Product</p>
        <div className='admin_first_card'>
          <div className='card'>
            <img src={cardImage} alt="" />
            <div className='card_main_text'>
              <div className='card_text'>
                <p style={{ color: '#61B846' }}>Apple</p>
                <p style={{ color: '#BFBCBC' }}>1Kg</p>
              </div>
              <p className='card_price'>2$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminFirst