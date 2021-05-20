import { Button } from '@material-ui/core';
import { BookmarkBorder, Home, ListAlt, MailOutline, MoreHoriz, NotificationsNone, PermIdentity, Search, Twitter } from '@material-ui/icons';
import React from 'react';
import SidebarOption from './SidebarOption';
export default function Sidebar(){
    return(
<div className="sidebar">
    {/* Twiiter icon */}
    <Twitter className="sidebar_twittericon"/>
    {/* sidebaroption */}
    <SidebarOption active Icon={Home} text="Home"/>
    <SidebarOption Icon={Search} text="Explore"/>
    <SidebarOption Icon={NotificationsNone} text="Notifications"/>
    <SidebarOption Icon={MailOutline} text="Messages"/>
    <SidebarOption Icon={BookmarkBorder} text="Bookmarks"/>
    <SidebarOption Icon={ListAlt} text="Lists"/>
    <SidebarOption Icon={PermIdentity} text="Profile"/>
    <SidebarOption Icon={MoreHoriz} text="More"/>
    {/* sidebaroption */}
    {/* sidebaroption */}
    {/* sidebaroption */}

    {/* Button  */}
    <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>


</div>
    );
}