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
    }
    
    
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/anime/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          image: response.data.image,
          description: response.data.description,
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

  onSubmit(e){
    e.preventDefault();

    const anime = {
      title: this.state.title,
      image: this.state.image,
      description: this.state.description,
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
            <button className="view" 
            value="Edit Anime"
            //  onClick={() => {
            //   console.log(this.state.anime);
            // }}
            >Submit</button>
          </form>
        </div>
      </div>
    )
  }
}



// import React, {useState, useContext, useEffect} from 'react'
// import {GlobalContext} from '../context/GlobalState';

// export default function AddAnime(props) {
//   const anime = props.location.state.anime

//   const { animes, editAnime } = useContext(GlobalContext);

//   useEffect(() => {
//     editAnime(anime.id);
//     console.log(animes);
//   }, [])
  
//   const [title, setTitle] = useState('');
//   const [image, setImage] = useState('');
//   const [description, setDescription] = useState('');
  
//   const onSubmit = e => {
//     // const {title, image, description} = anime
//     e.preventDefault();
    
//     const newAnime = {
//       id: Math.floor(Math.random() * 100000),
//       title,
//       image,
//       description
//     }
//     // console.log(newAnime);
    
//     // editAnime(newAnime);
//     setTitle('')
//     setImage('')
//     setDescription('')
//   }

  
  
// }