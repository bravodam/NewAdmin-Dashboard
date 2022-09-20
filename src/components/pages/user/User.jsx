import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import React from 'react'
import "./user.css"
import {Link} from "react-router-dom"

function User() {
  return (
    <div className='user'>
    <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
        <button className="userAddButton">Create</button>
        </Link>
        
    </div>
    <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
            <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?/" alt="mov" className="userShowImg" />
            <div className="userShowTopTitle">
                <span className="userShowUsername">Adeyemi Blessing</span>
                <span className="userShowUserTitle">Software Enginner</span>
            </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                <PermIdentity className="userShowIcon"/>
                <span className="userShowInfoTitle">Adeyemi Blessing</span>
                </div>

                <div className="userShowInfo">
                <CalendarToday className="userShowIcon"/>
                <span className="userShowInfoTitle">10.03.1999</span>
                </div>

                <span className="userShowTitle">Contact Details</span>
                

                <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon"/>
                <span className="userShowInfoTitle">+2348131389872</span>
                </div>

                <div className="userShowInfo">
                <MailOutline className="userShowIcon"/>
                <span className="userShowInfoTitle">adeyemiblessing@gmail.com</span>
                </div>

                <div className="userShowInfo">
                <LocationSearching className="userShowIcon"/>
                <span className="userShowInfoTitle">Lagos | Nigeria</span>
                </div>
            </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label >Username</label>
                        <input type="text" placeholder="AdeyemiBlessing99" 
                        className='userUpdateInput' />
                    </div>

                    <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input type="text" placeholder="Adeyemi Blessing" 
                        className="userUpdateInput" />
                    </div>

                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input type="text" placeholder="adeyemiblessing@gmail.com" 
                        className='userUpdateInput' />
                    </div>

                    <div className="userUpdateItem">
                        <label>Phone</label>
                        <input type="text" placeholder="+2348131389872" 
                        className='userUpdateInput' />
                    </div>

                    <div className="userUpdateItem">
                        <label>Address</label>
                        <input type="text" placeholder="Lagos Nigeria" 
                        className='userUpdateInput' />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img className='userUpdateImg' 
                        src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="" />
                        <label htmlFor="file"> <Publish className='userUpdateIcon'/>
                         </label>
                        <input style={{display:"none"}} type="file" id="file" />
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
            </form>
        </div>
    </div>
        </div>
  )
}

export default User