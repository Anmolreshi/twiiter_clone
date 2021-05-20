import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import db from './firebase';
export default function Tweetbox(){
    const[tweetmessage,settweetmessage]=useState('');// takes care of text user gives in input
    const[tweetimage,settweetimage]=useState('');// takes care of image given by user in input
  const sendtweet=e=>{
      e.preventDefault();
      db.collection('posts')
      .add({
          displayName:'Anmol Reshi',
          username:'anmolreshi_10',
          verified:'true',
          text:tweetmessage,
          image:tweetimage,
          avatar: "https://pbs.twimg.com/profile_images/1393054250746322946/YFaqXNE7_400x400.jpg"
         });
         settweetmessage('');
         settweetimage('');
  }
    return(
        <div className="tweetbox">
          <form>
              <div className="tweetbox_input">
               <Avatar 
               src="https://pbs.twimg.com/profile_images/1393054250746322946/YFaqXNE7_400x400.jpg" />
              <input 
              onChange={e=>settweetmessage(e.target.value)}
              value={tweetmessage} placeholder="Whats Happening ?" type="text"/>
              </div>
              <input
              value={tweetimage}
              onChange={e=>settweetimage(e.target.value)}
              className="tweetbox_image"
               placeholder="Optional :Enter Image URL" 
               type="text"/>
              <Button onClick={sendtweet} type="submit"className="tweetbox_button">Tweet</Button>
          </form>
        </div>
    )
}