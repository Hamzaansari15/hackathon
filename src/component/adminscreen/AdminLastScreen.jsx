import React from 'react'
import backArrow from '../image/backarrow.png'
import adminImage from '../image/adminimage.png'
import { TfiMenuAlt } from "react-icons/tfi";
import { Select } from 'antd';


const AdminLastScreen = () => {


    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div>
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
            <div className='order_text'>
                Orders
            </div>
            <div className='order_list'>
                <div className='orders'>
                    <p className='order_name'>Inzamam Malik</p>
                    <p className='order_price'>Price</p>
                    <div className='order_dropdown'>
                        <Select bordered={false}
                            defaultValue="Select Category"
                            style={{
                                width: 300,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    label: 'Pending',
                                    value: 'jack',
                                },
                                {
                                    label: 'In Progress',
                                    value: 'inprogress',
                                },
                                {
                                    label: 'Delivered',
                                    value: 'delivered',
                                },
                                {
                                    label: 'Cancel',
                                    value: 'cancel',
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLastScreen