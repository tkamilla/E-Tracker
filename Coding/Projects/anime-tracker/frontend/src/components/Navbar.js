import React, { Component } from 'react'

export default class Navbar extends Component {
  constructor(props){
    super(props)

    console.log(props.loggedComp);
  }

  // componentDidMount(){
  //   console.log(props);
  // }
  
  render() {
    return (
      <>
        <div className="navbar">
          <div className="completed" onClick={this.props.animeFilter}>
            <h3>Completed</h3>
          </div>
          <div className="watching active">
            <h3>Watching</h3>
          </div>
          <div className="Planning">
            <h3>Plan to Watch</h3>
          </div>
        </div>
      </>
    )
  }
}
