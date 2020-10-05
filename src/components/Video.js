import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './Video.css'

function Video() {
  return (
    <div className='video'>
      <img src='https://i.ytimg.com/vi/Xnk4seEHmgw/maxresdefault.jpg' alt='' />
      <div className='video__content'>
        <div className='video__contentLeft'>
          <Avatar
            alt='avatar'
            src='https://avatars1.githubusercontent.com/u/2944606?s=460&u=6ce34bfb8bd845ea39b46e923d3efbc067db7186&v=4'
          />
        </div>
        <div className='video__contentRight'>
          <p className='video__contentRightTitle'>Jim pranks Dwight LoL!!!</p>
          <p className='video__contentRightInfo'>Bruno Silva</p>
          <p className='video__contentRightInfo'>2.3M Views - 3 days ago</p>
        </div>
      </div>
    </div>
  )
}

export default Video
