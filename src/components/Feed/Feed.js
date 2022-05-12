import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from '../../firebase.js'
import FlipMove from 'react-flip-move'
function Feed() {

  const [posts, setPosts]  = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])


  return (
    <div className='feed'>
        {/* Header */}
         <div className="feed_header">
            <h2>Home</h2>
         </div>
        {/* TweetBox */}
        <TweetBox />

        {/* Post */}
        <FlipMove>
          {posts.map(post => (
            <Post
            key={post.text}
            displayName={post.displayName}
            username ={post.username}
            verified={post.verified}
            text={post.text}
            image = {post.image}
            avatar = {post.avatar}
            />
          ))}
        </FlipMove>
        
       
        
    </div>
  )
}

export default Feed