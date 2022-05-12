import React from 'react'
import './Sidebar.css'
import SidebarOption from "./SidebarOption"
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core';



function Sidebar() {
  return (
    <div className='sidebar'>
        {/* Twitter icon */}
        <TwitterIcon className='sidebar_twitterIcon'/>
        {/* sidebar option */}
        <SidebarOption active Icon={HomeIcon} text='Home' />
        <SidebarOption Icon={SearchIcon} text='Explore' />
        <SidebarOption Icon={NotificationsNoneIcon} text='Notifications' />
        <SidebarOption Icon={MailOutlineIcon} text='Messages' />
        <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks' />
        <SidebarOption Icon={ListAltIcon} text='Lists' />
        <SidebarOption Icon={PermIdentityIcon} text='Profile' />
        <SidebarOption Icon={MoreHorizIcon} text='More' />
   
        <Button variant='outlined' className='sidebar_tweet' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar