import React, {useContext} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'

const SingleAnime = (props) => {
  const anime = props.location.state.anime

  const history = useHistory();
  const editAnime = () => {
    history.push(`/edit/${anime._id}`,
     {
      anime
    }
    );
  }

  const deleteAnime = (anime) => {
    axios.delete('http://localhost:5000/anime/'+ anime._id)
      .then(response => { console.log(response.data)});

  }

  const goHome = () => {
    window.location = '/'
  }
  
  
  return (
    <div className="single-anime">
      <div className="anime-img">
        <img src={anime.image} alt={anime.title} />
      </div>
      <div className="anime-info">
        <div className="title info">
          <span>Title:</span>
          <h3>{anime.title}</h3>
        </div>
        <div className="description info">
          <span>Description:</span>
          <h3>{anime.description}</h3>
        </div>
        <button anime={anime} className="view" onClick={editAnime}>Edit</button>
        <span className="divider">|</span>
        <button anime={anime} className="view"  onClick={() => {
          deleteAnime(anime);
          goHome()
          }}>Delete</button> 
      </div>
    </div>
  )
}

export default SingleAnime
