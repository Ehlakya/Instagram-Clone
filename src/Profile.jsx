import React, { useEffect } from 'react'
import { Profile } from "../db/db";


const UserProfile = () => {
    

    return (
        <>
            <div className="d-flex align-items-center gap-3 p-3">
                <img
                    src={Profile.profile}
                    alt={Profile.username}
                    className=" profile rounded-circle"
                    style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
                <span className="fw-semibold">{Profile.username}</span>
            </div>
            <div>
            <input type="text"
                value={Profile.username}
                name="username"
                className='form-control my-4'
               
            />

            <input type="text"
                name="profile"
                value={Profile.profile}
                className='form-control'
            
            />

            <button className='btn btn-primary my-4'>
                Update
            </button>

        </div>     
        </>
    );
};

export default UserProfile;

// function Profile() {

//     const [Profile, setProfile] = useState(null);

//     const [followers, setFollowers] = useState([]);

//     const [unfollowed, setUnfollowed] = useState(0);

//     useEffect(() => {
//         axios.get('http://localhost:3000/profile')
//             .then(data => setProfile(data.data))
//             .catch(err => console.log(err))

//         axios.get('http://localhost:3000/followers')
//             .then(data => setFollowers(data.data))
//             .catch(err => console.log(err))
//     }, [unfollowed])

//     function HandleOnChange(e) {
//         setProfile(prev => ({
//             ...prev,
//             [e.target.name]: e.target.value
//         }))
//     }

//     const handleUpdate = async () => {
//         axios.put('http://localhost:3000/profile', Profile)
//             .then(console.log("Updated"))
//             .catch(err => console.log(err))
//     }

//     const handleUnFollow = async (id) => {
//         axios.delete(`http://localhost:3000/followers/${id}`)
//             .then(alert("unfollowed"))
//             .then(setUnfollowed(!unfollowed))
//             .catch(err => console.log(err))
//     }

//     return (

//         <div className="flex items-center gap-3 p-3">
//             <img
//                 src={profile.profile}
//                 alt={profile.username}
//                 className="w-10 h-10 rounded-full"
//             />
//             <span className="font-semibold">{profile.username}</span>
//         </div>
//     );
// };



// <div className='m-5'>
//     {Profile ? (
//         <div>
//             <img src={Profile.profile} className='profile rounded-circle' />
//             <h5>{Profile.username}</h5>

//             <input type="text"
//                 value={Profile.username}
//                 name="username"
//                 className='form-control my-4'
//                 onChange={HandleOnChange}
//             />

//             <input type="text"
//                 name="profile"
//                 value={Profile.profile}
//                 className='form-control'
//                 onChange={HandleOnChange}
//             />

//             <button className='btn btn-primary my-4'
//                 onClick={handleUpdate}
//             >
//                 Update
//             </button>

//         </div>
//     ) : (
//         <div>Loading Profile</div>
//     )}

//     {followers.length > 0 ? (
//         followers.map(follower => (
//             <div key={follower.id} className='d-flex my-2'>
//                 {follower.username}
//                 <button className='btn btn-secondary ms-auto' onClick={() => { handleUnFollow(follower.id) }}>UnFollow</button>
//             </div>
//         ))
//     ) : (
//         <div>Loading Followers</div>
//     )
//     }

// </div>

//     )
// }

// export default Profile

