import React, { Component } from "react";
import axios from "axios";

class Albums extends Component {
  state = {
    Albumdata: [],
    Photosdata: [],
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/albums`).then((res) => {
      const Albumdata = res.data;
      this.setState({ Albumdata });
    });
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
      const Photosdata = res.data;
      this.setState({ Photosdata });
      //   console.log(this.state.Photosdata[1]);
    });
  }

  render() {
    return (
      <div>
        {this.state.Albumdata.map((adata) => (
          <div className="card" key={adata.id}>
            <p>
              <strong>{adata.title}</strong>
            </p>
            <p>{adata.userId}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Albums;
