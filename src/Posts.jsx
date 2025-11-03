// import React, { useEffect, useState } from 'react'
// import { post } from '../db/db';

// function Posts() {

//   const [posts, setPosts] = useState([]);


  

//   useEffect(() => {

//     fetch('https://instagram-clone-theta-seven.vercel.app/posts')
//       .then((data) => data.json())
//       .then((data) => setPosts(data))
//       .catch((err) => console.log(err))

//   }, []);
 

//   return (
//     <div className='d-flex justify-content-center'>
//       {posts.length > 0 ? (
//         <div>
//           {posts.map((post)=>(
//             <div className='my-3' key={post.id}>
//               <div className='d-flex'>
//                 <img className='dp rounded-circle' src={post.user.profile} alt="profile_pic" />
//                 <h5>{post.user.username}</h5>
//               </div>
//               <img className='image' src={post.image} alt="post" />
//               <div>
//                 <i className="bi bi-heart"></i>
//                 <i className="bi bi-chat"></i>
//                 <i className="bi bi-send"></i>
//               </div>
//               <div>
//                 <b>{post.likes}Likes</b>
//               </div>
//               <p>{post.caption}</p>
//             </div>
//           ))}
          
//         </div>
//       ):(
//         <div>
//           Loding Posts
//         </div>
//       )}

//     </div>
//   )
// }
// export default Posts


import React from "react";
import { posts } from "./postsData";

const Feed = () => {
  return (
    <div className="feed">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <img src={post.user.profile} alt={post.user.username} className="profile-pic" />
            <span>{post.user.username}</span>
          </div>

          <img src={post.image} alt="Post" className="post-image" />

          <div className="post-details">
            <p><strong>{post.user.username}</strong> {post.caption}</p>
            <p>❤️ {post.likes} likes</p>

            <div className="comments">
              {post.comments.map((c, index) => (
                <p key={index}>
                  <strong>{c.username}</strong> {c.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
