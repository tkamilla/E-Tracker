import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import List from './List'



export default class AnimeList extends Component {
  constructor(props){
    super(props);

    // set default state
    this.state = {
      anime: [],
      progress: 'watching'
    }
  }

  // Load data and set the state
  componentDidMount() {
    axios.get('http://localhost:5000/anime/')
      .then(response => {
        this.setState({ anime: response.data.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // click event changing the state, prop to component
  handleClick = (e)=>{
    let target = e.target.innerHTML.toLowerCase()
    switch (target) {
      case "watching":
        this.setState({
          progress: 'watching'
        })
        break;
      case "completed":
        this.setState({
          progress: 'completed'
        })
        break;
      case "plan to watch":
        this.setState({
          progress: 'planning'
        })
        break;
      default:
        return
    }
  }



  render() {
    // declare array to use
    const watchList = this.state.anime.filter(item => {
      return item.watching
    })
    const planList = this.state.anime.filter(item => {
      return item.planning
    })
    const compList = this.state.anime.filter(item => {
      return item.completed
    })
    
    let myList;

    // the state to change what is being rendered
    const progress = this.state.progress;
    switch (progress) {
      case "watching":
        myList = <List anime={watchList} />
        break;
      case "planning":
        myList = <List anime={planList} />
        break;
      case "completed":
        myList = <List anime={compList} />
        break;
        default:
          return
    }

    
    return (
      <>
        <Navbar handleClick={this.handleClick} />
        {myList}
      </>
    )
  }
}