import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header'
import AnimeList from './components/AnimeList'
import EditAnime from './components/EditAnime'
import SingleAnime from './components/SingleAnime'
import AddAnime from './components/AddAnime'
import Error from './components/Error'

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <div className="container">
            <br/>
            <Switch>
              <Route path="/" exact component={AnimeList} />
              <Route path="/edit/:id" component={EditAnime} />
              <Route path="/anime/:id" component={SingleAnime} />
              <Route path="/add" component={AddAnime} />
              <Route component={Error} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
