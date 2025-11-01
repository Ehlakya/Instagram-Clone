import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Profile() {

    const [Profile, setProfile] = useState(null);

    const [followers, setFollowers] = useState([]);

    const [unfollowed, setUnfollowed] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3000/profile')
            .then(data => setProfile(data.data))
            .catch(err => console.log(err))

        axios.get('http://localhost:3000/followers')
            .then(data => setFollowers(data.data))
            .catch(err => console.log(err))
    }, [unfollowed])

    function HandleOnChange(e) {
        setProfile(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleUpdate = async () => {
        axios.put('http://localhost:3000/profile', Profile)
            .then(console.log("Updated"))
            .catch(err => console.log(err))
    }

    const handleUnFollow = async (id) => { 
        axios.delete(`http://localhost:3000/followers/${id}`)
            .then(alert("unfollowed"))
            .then(setUnfollowed(!unfollowed))
            .catch(err => console.log(err))
    }

    return (
        <div className='m-5'>
            {Profile ? (
                <div>
                    <img src={Profile.profile} className='profile rounded-circle' />
                    <h5>{Profile.username}</h5>

                    <input type="text"
                        value={Profile.username}
                        name="username"
                        className='form-control my-4'
                        onChange={HandleOnChange}
                    />

                    <input type="text"
                        name="profile"
                        value={Profile.profile}
                        className='form-control'
                        onChange={HandleOnChange}
                    />

                    <button className='btn btn-primary my-4'
                        onClick={handleUpdate}
                    >
                        Update
                    </button>

                </div>
            ) : (
                <div>Loading Profile</div>
            )}

            {followers.length > 0 ? (
                followers.map(follower => (
                    <div key={follower.id} className='d-flex my-2'>
                        {follower.username}
                        <button className='btn btn-secondary ms-auto' onClick={()=>{handleUnFollow(follower.id)}}>UnFollow</button>
                    </div>
                ))
            ) : (
                <div>Loading Followers</div>
            )
            }

        </div>

    )
}

export default Profile

