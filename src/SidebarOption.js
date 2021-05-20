import React from 'react';
export default function SidebarOption({active,text,Icon}){
    return(
        <div className={`sidebarOptions ${active
        && 'sidebar_active'}`}>
             {/* We are passing Icon as a Component in
              the form of props  */}   
            <Icon />
           
            <h2>{text}</h2>
        </div>
    )
}