import React from 'react'
import { useHistory } from "react-router-dom";

function Anime({anime}) {
  const history = useHistory();
  const getAnime = () => {
    history.push(`/anime/${anime._id}`, {
      anime
    });
  }
  
  return (
    <div className="anime-card">
      <div className="img-ct">
        <img src={anime.image} alt={anime.title} />
      </div>
      <h3>{anime.title}</h3>
      <button anime={anime} className="view" onClick={getAnime}>View</button>
    </div>
  )
}

export default Anime