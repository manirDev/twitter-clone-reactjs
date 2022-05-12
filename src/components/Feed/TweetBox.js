
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core';
import { useState } from 'react';
import db from '../../firebase.js'
import firebase from 'firebase/compat/app';
function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
      e.preventDefault();

      db.collection('posts').add({
        displayName: "Test user",
        username: "reactjs",
        verified: true,
        text: tweetMessage,
        avatar: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
        image: tweetImage,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      setTweetImage("");
      setTweetMessage("");
  };

  return (
    <div className='tweetBox'>
        <form action="">
            <div className="tweetBox_input">
                <Avatar src='https://pbs.twimg.com/profile_images/1137666186026442754/qctvOnBS_400x400.jpg' />
                <input placeholder="What's Happening"
                  value={tweetMessage} onChange={e => setTweetMessage(e.target.value)}
                />
               
            </div>

            <input className='tweetBox_imageInput' placeholder='Optional: Enter image URL'
              value={tweetImage} onChange={e => setTweetImage(e.target.value)} />

            <Button type='submit' className='tweetBox_tweetButton'
              onClick={sendTweet}>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox