import React, { Component } from "react";
import axios from "axios";
import "./Posts.css";
import Postdetails from "./Postdetails";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Posts extends Component {
  state = {
    Postsdata: [],
    Commentdata: [],
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      const Postsdata = res.data;
      this.setState({ Postsdata });
    });
  }
  render() {
    return (
      <Router>
        <div>
          {this.state.Postsdata.map((pdata) => (
            <div className="card" key={pdata.id}>
              <Link to={`posts/${pdata.id}`}>
                <strong>{pdata.title}</strong>
              </Link>
              <p>{pdata.body}</p>
            </div>
          ))}
        </div>
        <Switch>
          <Route path="/posts/:id">
            <Postdetails />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Posts;
