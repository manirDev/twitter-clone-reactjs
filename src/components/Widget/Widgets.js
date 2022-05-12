import React from 'react'
import './Widgets.css'
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed"
import SearchIcon  from '@material-ui/icons/Search'


function Widgets() {
  return (
    <div className='widgets'>
        <div className="widgets_input">
          <SearchIcon className="widgets_searchIcon" />
          <input placeholder='Search Twitter' type="text" />
        </div>
        <div className="widgets_widgetContainer">
          <h2>What's happening</h2>
          
          <TwitterTweetEmbed tweetId={"1524291423830425600"}/>

          <TwitterTimelineEmbed 
            sourceType='profile'
            screenName='manirDev'
            options={{height: 400}} />

          <TwitterShareButton
            url={"https://twitter.com/manirDev"}
            options={{text: "#reactjs is awesome", via:"manirDev"}} />
        </div>
    </div>
  )
}

export default Widgets