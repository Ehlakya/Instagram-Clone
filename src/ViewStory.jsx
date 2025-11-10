import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'
import { story } from '../db/db';



function ViewStory() {

  const { id, tot} = useParams();

 

  const navigate = useNavigate();

//   const stories = [
//   { id: 0, image: "img1.jpg" },
//   { id: 1, image: "img2.jpg" },
//   { id: 2, image: "img3.jpg" }
// ];


  if (id > tot || id<=0){
    navigate('/');
  }


  return (
    <div>
  {story.length > 0 ? (
    story.map((story, index) => (
      Number(id) === index && (
        <div 
          key={story.id} 
          className="d-flex justify-content-center align-items-center"
        >
          {/* Prev Story */}
          <Link to={`/story/${index - 1}/${story.length}`}>
            <i className="bi bi-arrow-left-square"></i>
          </Link>

          {/* Main Story Image */}
          <img 
            className="vh-100 mx-2" 
            src={`/${story.image}`} 
            alt="story" 
          />

          {/* Next Story */}
          <Link to={`/story/${index + 1}/${story.length}`}>
            <i className="bi bi-arrow-right-square"></i>
          </Link>
        </div>
      )
    ))
  ) : (
    <div>Loading...</div>
  )}
</div>


  )
}

export default ViewStory
