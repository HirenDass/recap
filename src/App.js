import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from './Posts/Posts';
import Post from './Posts/Post';

import './App.css';
//import './bootstr'

class App extends Component {
  render() {
    return (
      <div className="app">
      <Router>
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/post/:id" component={Post} />
      </Switch>  
      </Router>
      </div>
    );
  }
}

export default App;
