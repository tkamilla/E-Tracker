import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import axios from 'axios'
import Anime from './Anime'
import Navbar from '../components/Navbar'
import List from './List'



export default class AnimeList extends Component {
  constructor(props){
    super(props);

    this.state = {
      anime: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/anime/')
      .then(response => {
        this.setState({ anime: response.data.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // const animeList = state.anime.map(currentAnime => {
  //   return currentAnime
  // })
  animeList = () => {
    return this.state.anime.map(currentAnime => {
      return <Anime anime={currentAnime} key={currentAnime._id}
      />
    })
  }

  animeFilter = () => {
    return this.state.anime
    .filter(item => {
      if(item.title.includes('o')){
        return item
      }
    }
    )
    .map(currentAnime => {
      return <Anime anime={currentAnime} key={currentAnime._id}
      />
    })
  }

  loggedComp = () => {
   console.log('logged')
  }
  
  render() {
    return (
      <>
      <div className="navbar">
          <div className="completed" onClick={
            this.loggedComp
            }>
            <h3>Completed</h3>
          </div>
          <div className="watching active">
            <h3>Watching</h3>
          </div>
          <div className="Planning">
            <h3>Plan to Watch</h3>
          </div>
        </div>
        {this.loggedComp()}
        <List animeFilter={this.animeList} />
      </>
    )
  }
}