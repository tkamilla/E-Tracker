import React, { Component } from 'react'

export default class Navbar extends Component {
  
  render() {
    return (
      <>
        <div className="navbar">
          <div className="completed" onClick={this.props.handleClick} >
            <h3>Completed</h3>
          </div>
          <div className="watching active" onClick={this.props.handleClick} >
            <h3>Watching</h3>
          </div>
          <div className="Planning" onClick={this.props.handleClick} >
            <h3>Plan to Watch</h3>
          </div>
        </div>
      </>
    )
  }
}
