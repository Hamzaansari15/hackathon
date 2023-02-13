import React from 'react'
import backArrow from '../image/backarrow.png'
import adminImage from '../image/adminimage.png'
import fileImage from '../image/fileupload.png'
import { TfiMenuAlt } from "react-icons/tfi";
import { Select } from 'antd';



const AdminSecondScreen = () => {


    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

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
                <p className='all_product'>Add New Item</p>
                <div className='admin_add_product'>
                    <div className='upload_input'>
                        <input className='input_file' type="file" />
                        <img className='file_image' src={fileImage} alt="" />
                    </div>
                    <div className='admin_add_item_form'>
                        <input type="text" name="" id="" placeholder='Item Name' />
                        <div className='dropdown'>
                            <Select bordered={false}
                                defaultValue="Select Category"
                                style={{
                                    width: 340,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        label: 'Jack',
                                        value: 'jack',
                                    },
                                    {
                                        label: 'Lucy',
                                        value: 'lucy',
                                    },
                                ]}
                            />
                        </div>
                        <div className='textarea'>
                            <textarea placeholder='Item Description' className='textarea'></textarea>
                        </div>
                        <div className='unit'>
                            Unit Name:
                            <input type="text" id='unitname' />
                            Unit Price:
                            <input type="text" id='unitname' />
                        </div>
                        <div style={{width: '340px', display: 'flex', justifyContent: 'center'}}>
                            <button className='add_product_btn'>Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSecondScreen