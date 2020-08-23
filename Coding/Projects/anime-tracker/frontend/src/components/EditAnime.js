import React, { Component } from 'react'
import axios from 'axios'

export default class AddAnime extends Component {
  constructor(props){
    super(props);

    const anime = props.location.state.anime
    
    this.state = {
      title: anime.title,
      image: anime.image,
      description: anime.description,
      watching: true,
      completed:false,
      planning: false
    }
    
    
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/anime/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          image: response.data.image,
          description: response.data.description,
          watching: response.data.watching,
          completed: response.data.completed,
          planning: response.data.planning,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  onChangeTitle(e){
    this.setState({
      title:e.target.value
    })
  }
  onChangeImage(e){
    this.setState({
      image:e.target.value
    })
    console.log('image is loading');
  }
  onChangeDescription(e){
    this.setState({
      description:e.target.value
    })
  }

  onChangeProgress(e){
    let progress = e.target.value;
    switch (progress) {
      case "completed":
        this.setState({
          watching: false,
          completed: true,
          planning: false
        })
        break;
      case "planning":
        this.setState({
          watching: false,
          completed: false,
          planning: true
        })
        break;
      default:
        break;
    }
  }

  onSubmit(e){
    e.preventDefault();

    const anime = {
      title: this.state.title,
      image: this.state.image,
      description: this.state.description,
      watching:this.state.watching,
      completed:this.state.completed,
      planning:this.state.planning,
    }

    console.log(anime);

    axios.post('http://localhost:5000/anime/edit/' + this.props.match.params.id, anime)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  
  render() {
    return (
      <div className="edit-anime">
        <h3>Edit Anime Info</h3>
        <div className="single-anime">
          <div className="anime-img">
            <img src={this.state.image} alt={this.state.title} />
          </div>
          <form className="anime-info" onSubmit={
            (e)=>{
              this.onSubmit(e)
            }
          }>
            <div className="title info">
            <label htmlFor="title">Title:</label>
              <input type="text" value={this.title} placeholder="Insert Title" onChange={(e) => this.onChangeTitle(e)} />
            </div>
            <div className="image info">
              <label htmlFor="image">Image:</label>
              <input type="text" value={this.image} placeholder="Insert image url" onChange={(e) => this.onChangeImage(e)} />
            </div>
            <div className="description info">
              <label htmlFor="description">Description:</label>
              <textarea value={this.description} placeholder="Insert description" onChange={(e) => this.onChangeDescription(e)} ></textarea>
            </div>
            <div className="progress info">
              <label htmlFor="progress">Progress:</label>
              <select name="progress" id="progress-select" onChange={(e) => this.onChangeProgress(e)}>
                <option value="watching">watching</option>
                <option value="completed">completed</option>
                <option value="planning">plan to watch</option>
              </select>
            </div>
            <button className="view" 
            value="Edit Anime"
            >Submit</button>
          </form>
        </div>
      </div>
    )
  }
}