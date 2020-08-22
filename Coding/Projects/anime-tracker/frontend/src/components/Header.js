import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="left">
            <div id="logo">
            <a href="/">
              <img src="https://www.freelogoservices.com/api/main/images/1j+ojlxEOMkX9Wyqfhe43D6kifKFqxJGmBfIwWJqZ0VUkU09w3s72vBm47hlc1xFtFwKhh0IdMM7iSF+" alt=""/>
            </a>
            </div>
            {/* <div id="searchbox">
              <input type="text" id="search" placeholder="search" />
              <i class="fas fa-search"></i>
            </div> */}
          </div>
          <div className="mid">
          <Link to="/" className="viewlist" >View List</Link>
          </div>
          <div className="right">
          <Link to="/add" className="add" >Add</Link>
          </div>
        </div>

      </>
    )
  }
}
