import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import ViewModuleIcon from '@material-ui/icons/ViewModule'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <img
          src='https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg'
          alt='logo'
        />
      </div>
      <div className='header__search'>
        <input placeholder='Search' type='text' />
        <SearchIcon className='header__searchButton' />
      </div>
      <div className='header__right'>
        <div className='header__rightItems'>
          <VideoCallIcon className='header__icon' />
          <ViewModuleIcon className='header__icon' />
          <NotificationsIcon className='header__icon' />
          <Avatar
            alt='avatar'
            src='https://avatars1.githubusercontent.com/u/2944606?s=460&u=6ce34bfb8bd845ea39b46e923d3efbc067db7186&v=4'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
