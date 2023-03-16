import React from 'react'
import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Post({post}) {
  console.log(post, 'hii');
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                  <img className="postProfileImg" src='assets/person/Person1.jpg' alt=''/>
                  <span className="postUserName">Aditya Trivedi</span>
                  <span className="postDate">{post?.date} min ago</span>
                </div>
                <div className="postTopRight">
                  <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
              <span className="postText">Hey! it's my first post:)</span>
              <img className='postImg' src="assets/post/food1.jpg" alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className='likeIcon' src="assets/like.png" alt="" />
                <img className='heartIcon' src="assets/heart.png" alt="" />
                <span className="postLikeCounter">32 people liked it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
              </div>
            </div>
        </div>
      
    </div>
  )
}
