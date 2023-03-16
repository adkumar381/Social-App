import React from 'react'
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft"></div>
                <span className="logo">AdityaSocial</span>
          <div className="topbarCenter">
                <div className="searchbar">
                      <SearchIcon className='searchIcon'/>
                      <input placeholder='Search for frinds, posts or vedioes' className="searchInput" />
                </div>
          </div>
          <div className="topbarRight">
            <div className="topbarLinks">
              <span className="topbarLink">HomePage</span>
              <span className="topbarLink">TimeLine</span>
            </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
                  <PersonIcon/>
                  <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
                  <MarkUnreadChatAltIcon/>
                  <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
                  <NotificationsActiveIcon/>
                  <span className="topbarIconBadge">1</span>
              </div>
            </div>
            <img src='./assets/person/person1.jpg' alt=' ' className='topbarImg'/>
          </div>
    </div>
  )
}
