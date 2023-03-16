import React from 'react'
import './Sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <RssFeedIcon className='sidebarIcon'/> 
          <span className="sidebarListItemText">
                  Feed
          </span>
          </li>
          <li className="sidebarListItem">
          <ChatIcon className='sidebarIcon'/> 
          <span className="sidebarListItemText">
                  Chats
          </span>
          </li>
          <li className="sidebarListItem">
          <NotStartedIcon className='sidebarIcon'/> 
          <span className="sidebarListItemText">
                 Vedioes
          </span>
          </li>
          <li className="sidebarListItem">
          <GroupIcon className='sidebarIcon'/> 
          <span className="sidebarListItemText">
                 Groups
          </span>
          </li>
          <li className="sidebarListItem">
          <BookmarksIcon className='sidebarIcon'/> 
          <span className="sidebarListItemText">
                  Bookmarks
          </span>
          </li>
          <li className="sidebarListItem">
          < HelpOutlineIcon className='sidebarIcon'/> 
          <span className="sidebarListItemText">
                  Questions
          </span>
          </li>
          <li className="sidebarListItem">
          <WorkIcon className='sidebarIcon'/> 
          <span className="sidebarListItemText">
                  Jobs
          </span>
          </li>
          <li className="sidebarListItem">
          <EventIcon className='sidebarIcon'/> 
          <span className="sidebarListItemText">
                 Events
          </span>
          </li>
          <li className="sidebarListItem">
          <AutoStoriesIcon className='sidebarIcon'/> 
          <span className="sidebarListItemText">
                  Courses
          </span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className='sidebarHr'/>
        <ul className='sidebarFriendList'>
              <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src='/assets/person/person2.jpg' alt=''/>
                    <span className='sidebarFriendName'>Anuj Singh</span>
              </li>
              <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src='/assets/person/person2.jpg' alt=''/>
                    <span className='sidebarFriendName'>Anuj Singh</span>
              </li>
              <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src='/assets/person/person2.jpg' alt=''/>
                    <span className='sidebarFriendName'>Anuj Singh</span>
              </li>
              <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src='/assets/person/person2.jpg' alt=''/>
                    <span className='sidebarFriendName'>Anuj Singh</span>
              </li>
              <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src='/assets/person/person2.jpg' alt=''/>
                    <span className='sidebarFriendName'>Anuj Singh</span>
              </li>
              <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src='/assets/person/person2.jpg' alt=''/>
                    <span className='sidebarFriendName'>Anuj Singh</span>
              </li>
              <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src='/assets/person/person2.jpg' alt=''/>
                    <span className='sidebarFriendName'>Anuj Singh</span>
              </li>
              <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src='/assets/person/person2.jpg' alt=''/>
                    <span className='sidebarFriendName'>Anuj Singh</span>
              </li>
              <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src='/assets/person/person2.jpg' alt=''/>
                    <span className='sidebarFriendName'>Anuj Singh</span>
              </li>
        </ul>
      </div>
    </div>
  )
}
