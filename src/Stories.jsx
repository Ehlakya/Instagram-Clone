// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// function Stories() {


//   const [Stories, setStories] = useState([]);

//   const navigate = useNavigate();

//   let tot = 0;

//   useEffect(() => {
//     fetch('http://localhost:3000/story')
//       .then(Data => Data.json())
//       .then(data => setStories(data))
//       .catch(err => console.log(err))
//   }, []);

//   return (
//     <div className='story d-flex'>
//       <div className='d-none'>
//         {tot = Stories.length}
//       </div>
//       {Stories.length > 0 ? (
//         Stories.map((story) => (
//           <div key={story.id} className='mx-1' onClick={() => { navigate(`/story/${story.id}/${tot}`) }}>
//             <div className='gradient-border'>
//               <img src={story.user.profile} alt="dp" className='story-dp rounded-circle ' />
//             </div>
//             <p className='text-truncate' style={{ width: "50px" }}>{story.user.username}</p>
//           </div>
//         ))
//       ) : (
//         <p>Loading</p>
//       )}
//     </div>
//   )
// }

// export default Stories



import React from "react";
import { story } from "../db/db"; 
import { useNavigate } from "react-router-dom";

const Stories = () => {
   const navigate = useNavigate();

  let tot = 0;

  console.log(story)
  return (
      <div className='story d-flex'>
       <div className='d-none'>
         {tot = story.length}
      </div>
       {story.length > 0 ? (
        story.map((story) => (
          <div key={story.id} className='mx-1' onClick={() => { navigate(`/story/${story.id}/${tot}`) }}>
            <div className='gradient-border'>
              <img src={story.user.profile} alt="dp" className='story-dp rounded-circle ' />
            </div>
            <p className='text-truncate' style={{ width: "50px" }}>{story.user.username}</p>
          </div>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>

    


  // <div
  //   className="d-flex gap-3 p-3 bg-white rounded" //shadow-sm overflow-auto
  //   style={{ whiteSpace: "nowrap" }}
  // >
  //   {story.map((item) => (
      
      
  //     <div
  //       key={item.id}
  //       className="d-flex flex-column align-items-center mx-1"
  //       style={{ minWidth: "60px" }}
  //     >
  //       <img
  //         src={item.user.profile}
  //         alt={item.user.username}
  //         className="rounded-circle border border-2 border-danger"
  //         style={{
  //           width: "56px",
  //           height: "56px",
  //           objectFit: "cover",
  //         }}
  //       />
  //       <span className="small mt-1 fw-medium text-dark text-center">
  //         {item.user.username}
  //       </span>
  //     </div>
  //   ))}
  // </div>
);

};

export default Stories; 

