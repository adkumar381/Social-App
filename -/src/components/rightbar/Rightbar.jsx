import React from 'react'
import './Rightbar.css'
export default function Rightbar() {
  return (
    <div className='rightbar'>
       <div className="rightbatWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.avif" alt="" />
          <span className="birthdayText"><b>Anuj Singh</b> and <b> 3 other friends</b> have a birthday Today</span>
        </div>
        <img className='rightbarAd' src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/person4.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Mukul Soni</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/person4.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Shivansh Singh</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/person4.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Naman Verma</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/person4.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Abhishek Singh</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/person4.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Shivam Sharma</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/person4.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Mohit Singh</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/person4.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Alok Dubey</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/person4.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Sulabh Mishra</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="assets/person/person4.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Anmol Krishna</span>
          </li>
        </ul>
       </div>
    </div>
  )
}
