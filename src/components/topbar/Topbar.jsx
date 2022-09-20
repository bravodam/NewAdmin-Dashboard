import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from "@mui/icons-material";

function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft"><span className="logo">ADMIN</span></div>
            <div className="topRight">
                <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Language />
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Settings/>
                </div>
                <img src={require('../../assets/image/pexels-bruno-salvadori-2269872.jpg')} alt="move" className="Avatar" />
            
            </div>
        </div>
        </div>
  )
}

export default Topbar;