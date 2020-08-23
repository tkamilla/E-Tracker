import React, { Component } from 'react'
import axios from 'axios'

export default class AddAnime extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      image: '',
      description: '',
      watching: true,
      completed: false,
      planning: false
    }

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

    // console.log(anime);

    axios.post('http://localhost:5000/anime/add', anime)
      .then(res => console.log(res.data))

    window.location = '/';
  }
  
  render() {
    return (
      <div className="add-anime">
        <h3>Add New Anime</h3>
        <div className="single-anime">
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
            <button className="view">Add Anime</button>
          </form>
        </div>
      </div>
    )
  }
}


// import React, {useState, useContext} from 'react'
// import {GlobalContext} from '../context/GlobalState';
// import { useHistory } from "react-router-dom";

// export default function AddAnime() {
//   const { addAnime } = useContext(GlobalContext);
  
//   const [title, setTitle] = useState('');
//   const [image, setImage] = useState('');
//   const [description, setDescription] = useState('');
//   const history = useHistory();

//   const onSubmit = e => {
//     e.preventDefault();

//     const newAnime = {
//       id: Math.floor(Math.random() * 100000),
//       title,
//       image,
//       description
//     }

//     addAnime(newAnime);
//     setTitle('')
//     setImage('')
//     setDescription('')
//     goHome()
//   }

//   const goHome = () => {
//     history.push('/')
//   }

  
  
// }
