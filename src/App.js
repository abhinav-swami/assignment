import React, { Component } from "react";
import Albums from "./components/Albums";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Postdetails from "./components/Postdetails";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/posts">Posts</Link>
            <Link to="/albums">Albums</Link>
            <Link to="/users">Users</Link>
          </nav>
          <hr />

          <Switch>
            <Route exact path="/">
              <h1>
                Welcome to Homepage, please access your desired URL using navbar
              </h1>
            </Route>
            <Route path="/albums">
              <Albums />
            </Route>
            <Route exact path="/posts">
              <Posts />
            </Route>
            <Route path="/posts/:id">
              <Postdetails />
            </Route>

            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
