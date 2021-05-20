import React, { useEffect, useState } from 'react';
import Post from './Post';
import Tweetbox from './Tweetbox';
import db from './firebase';
import FlipMove from 'react-flip-move';//for animation while posting 
export default function Feed(){
    const [posts,setposts]=useState([]);
    useEffect(()=>{
      db.collection('posts')
      .onSnapshot(snapshot=>(
          setposts(snapshot.docs.map(doc=>doc.data()))
      ))
    },[]);
    return(
        <div className="feed">
       {/* Header  */}
       <div className="feed_header">
        <h2>Home</h2>
        </div>
       {/* Tweet Box */}
        <Tweetbox/>
        {/* Post  */}
        <FlipMove>
        {posts.map(post=>(

            <Post 
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            />
        ))}
       </FlipMove>
        {/* <Post/>
        <Post/>
        <Post/> */}

        </div>
    )
}