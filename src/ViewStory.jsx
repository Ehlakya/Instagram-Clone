import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'



function ViewStory() {

  const { id, tot} = useParams();

  const [story, setStory] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`)
      .then(data => data.json())
      .then(data => setStory(data))
      .catch(err => console.log(err))
  }, [id]);

  if (id > tot || id<=0){
    navigate('/');
  }


  return (
    <div>
      {story ?
        <div className='d-flex justify-content-center align-items-center'>
          <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i class="bi bi-arrow-left-square"></i></Link>
          <img className='vh-100' src={`/${story?.image}`} alt="story" />
          <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`} className='mx-2'><i class="bi bi-arrow-right-square"></i></Link>
        </div> :

        <div>Loading</div>}

    </div>

  )
}

export default ViewStory
