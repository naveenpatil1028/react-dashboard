import React from 'react'
import './sidebar.css'
import {LineStyle,Timeline,TrendingUp,WorkOutline,ReportGmailerrorred,ChatBubbleOutline,DynamicFeed,PersonOutline,MailOutline,Storefront,BarChart,AttachMoney} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to='/' className='linking'>
                    <li className="sidebarListItem active">
                        <LineStyle className='sidebarIcon'/>
                        <span>Home</span>
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        <span>Analytics</span>
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        <span>Sales</span>
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to='/users' className='linking'>
                    <li className="sidebarListItem active">
                        <PersonOutline className='sidebarIcon'/>
                        <span>Users</span>
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Storefront className='sidebarIcon'/>
                        <span>Products</span>
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoney className='sidebarIcon'/>
                        <span>Transactions</span>
                    </li>
                    <li className="sidebarListItem">
                        <BarChart className='sidebarIcon'/>
                        <span>Reports</span>
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <MailOutline className='sidebarIcon'/>
                        <span>Mail</span>
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed className='sidebarIcon'/>
                        <span>Feedback</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className='sidebarIcon'/>
                        <span>Message</span>
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <WorkOutline className='sidebarIcon'/>
                        <span>Manage</span>
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        <span>Analytics</span>
                    </li>
                    <li className="sidebarListItem">
                        <ReportGmailerrorred className='sidebarIcon'/>
                        <span>Reports</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar