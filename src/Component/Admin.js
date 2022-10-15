import React from 'react'
import adminpic from '../images/adminpic.png'
import '../Styles/Admin.css'

const Admin = () => {
    return (
        <div className='adminPanel'>
            <div className="flexer ft">
                <img className='adminpic' src={adminpic} alt="" />
                <div className="userUpdate">
                    <h1 className="sectionTitle mt-5"><span>User</span> Update</h1>
                    <div className="updateuser">
                        <input className='fields' placeholder='Update Name' type="text" />
                        <input className='fields' placeholder='Update Email' type="email" />
                        <input className='fields' placeholder='Update Password' type="password" />
                        <input className='fields' placeholder='Update Location' type="text" />
                        <input className='fields' placeholder='Update Phone Number' type="text" />
                        <a className='adminsubmit'>Update User</a>
                    </div>
                </div>
                <div className="cropop">
                    <h1 className="sectionTitle mt-5">Create <span>or</span> Delete <span> Crops</span></h1>
                    <div className="updateuser">
                        <input className='fields' placeholder='Name of the Crop' type="text" />
                        <input className='fields' placeholder='Low Temprature' type="text" />
                        <input className='fields' placeholder='High Temprature' type="text" />
                        <input className='fields' placeholder='Location where it grows the most' type="text" />
                        <input className='fields' placeholder='Soil Suitable for the Crop' type="text" />
                        <input className='fields' placeholder='Variety of Crops' type="text" />
                        <input className='fields' placeholder='PH of Soil' type="text" />
                        <input className='fields' placeholder='Nitrogen Level Of Soil' type="text" />
                        <input className='fields' placeholder='Nutrients of the Crop' type="text" />
                        <input className='fields' placeholder='Pests that can destroy the Crops' type="text" />
                        <input className='fields' placeholder='Pest Control Methods' type="text" />
                        <input className='fields' placeholder='Fertilizers that can help for Growth' type="text" />
                        <input className='fields' placeholder='Harverting Technique Name for that Crop' type="text" />
                        <label htmlFor="Image"></label>
                        <input className='fields' placeholder='' type="file" />
                        <a className='adminsubmit'>Create Crop</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
