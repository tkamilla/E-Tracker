import React from 'react'
import Anime from './Anime'

const List = (props) => {
  let anime = props.anime.map(item => {
    return <Anime anime={item} key={item._id}
    />
  })
  
  return (
    <>
        <div className="animelist">
          {anime}
        </div>
      </>
  )
}

export default List
