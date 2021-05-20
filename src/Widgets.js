import { Search } from '@material-ui/icons';
import {TwitterTimelineEmbed,TwitterTweetEmbed,TwitterShareButton} from "react-twitter-embed";
import React from 'react';
export default function Widgets(){
    return(
        <div className="widgets">
         <div className="widget_input">
             <Search className="widgets_search"/>
             <input placeholder="search Twitter" type="text"/>
         </div>
         <div className="widgets_container">
             <h2>What's Happening </h2>
             {/* <TwitterTweetEmbed tweetId={"1393210460741128196"}/> */}
             <TwitterTweetEmbed tweetId={"1395250912080265218"}/>
             <TwitterTimelineEmbed 
             sourceType="profile"
             screenName="AnmolreshiAnmol"
             options={{height:400,tweetLimit:'1'}}/>

             <TwitterShareButton 
             url={"https://facebook.com/cleverprogrammer"}
             options={{text:"Lets Learn React Js #anmolreshi",via:"Anmolreshi"}}/>
         </div>
        </div>
    )
}