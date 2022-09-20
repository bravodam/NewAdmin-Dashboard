import React from 'react'

 import {LineStyle, Timeline, TrendingUp,
     PersonOutline, Inventory2, Paid, 
     Assessment, MailOutline, ChatBubbleOutline,
      Grading, Report} from '@mui/icons-material';
      import {Link} from "react-router-dom"
 import "./sidebar.css"
  

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarmenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" className='link' >
                    <li className="sidebarListItem active">
                        <LineStyle className='sidebarIcon'/>
                        Home
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics

                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales

                    </li>
                </ul>
            </div>

            <div className="sidebarmenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className='link'>
                    <li className="sidebarListItem ">
                        <PersonOutline className='sidebarIcon'/>
                        Users
                        </li>
                    </Link>

                    <Link to= "products" className='link' > 
                    <li className="sidebarListItem">
                        <Inventory2 className='sidebarIcon'/>
                        Products
                        </li>
                     </Link>
                
                    
                    <li className="sidebarListItem">
                        <Paid className='sidebarIcon'/>
                        Transactions

                    </li>
                    <li className="sidebarListItem">
                        <Assessment className='sidebarIcon'/>
                        Reports

                    </li>
                </ul>
            </div>

            <div className="sidebarmenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <MailOutline className='sidebarIcon'/>
                        Mail
                        </li>
                    <li className="sidebarListItem">
                        <Grading className='sidebarIcon'/>
                        Feedback

                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className='sidebarIcon'/>
                        Messages

                    </li>
                </ul>
            </div>

            <div className="sidebarmenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        < Grading className='sidebarIcon'/>
                        Manage
                        </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics

                    </li>
                    <li className="sidebarListItem">
                        <Report className='sidebarIcon'/>
                        Reports

                    </li>
                </ul>
            </div>
           
        </div>
    </div>
  )
}

export default Sidebar