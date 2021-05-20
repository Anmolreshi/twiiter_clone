import { Avatar, IconButton } from '@material-ui/core';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@material-ui/icons';
import React, { forwardRef, useState } from 'react';
const Post = forwardRef((
    {displayName,username,verified,timestamp,text,image,avatar}
    ,ref)=>
{
    const[fav,setfav]=useState(false);
    return(
        <div className="post" ref={ref}>
         <div className="post_avatar">
             <Avatar src={avatar} />
         </div>
         <div className="post_body">
             <div className="post_header">
                 <div className="post_headertxt">
                     <h3>{displayName}
                         <span className="post_headerspl">
                        {verified && <VerifiedUser className="post_badge"/>}@{username}
                         </span></h3>
                 </div>
                 <div className="post_headerdescription">
                     <p>{text}</p>
                 </div>
             </div>
             <img src={image} alt=""/>
           <div className="post_footer">
               <IconButton className="hovo">
             <ChatBubbleOutline onclick={()=>setfav(!fav)} className={`sidebarOptions3 ${fav
        && 'sidebar_fav'}`}  fontSize="small"/>
             </IconButton>
             <IconButton  className="hovo1">
             <Repeat onclick={()=>setfav(!fav)} className={`sidebarOptions2 ${fav
        && 'sidebar_fav'}`}  fontSize="small"/>
             </IconButton>
             <IconButton  className="hovo2">
             <FavoriteBorder onclick={()=>setfav(!fav)} className={`sidebarOptions1 ${fav
        && 'sidebar_fav'}`} fontSize="small"/>
             </IconButton>
             <IconButton  className="hovo">
             <Publish onclick={()=>setfav(!fav)} className={`sidebarOptions3 ${fav
        && 'sidebar_fav'}`} fontSize="small"/>
             </IconButton>
           </div>
         </div>
        </div>
    );
});
export default Post;