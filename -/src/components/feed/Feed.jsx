import React from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
import './Feed.css'
import {Posts as postData} from '../../dummyData'
export default function Feed( ) {
  console.log(postData,'hello')
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {postData.map((p)=>( 
          <Post key={p.id} post={p}/>
        ))}
        
        
      </div>
    </div>
  )
}
