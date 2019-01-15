import React, { Component } from "react";
import "./App.css";

class PhotoUploadTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imageList: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange} />
        <img className="imgPreview" src={this.state.file} />
      </div>
    );
  }
}

export default PhotoUploadTest;
