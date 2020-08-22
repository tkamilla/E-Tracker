import React from 'react'

const List = (props) => {
  return (
    <>
        <div className="animelist">
        {
          props.animeFilter()
        }
        </div>
      </>
  )
}

export default List
