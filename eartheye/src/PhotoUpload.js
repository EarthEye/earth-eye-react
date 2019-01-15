import React, { Component } from "react";
import ReactFileReader from "react-file-reader";
import "./App.css";

class PhotoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: ""
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(files) {
    this.setState({
      file: files.base64,
      imagePreviewUrl: files.result
    });
    console.log(files);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="" />;
    } else {
      $imagePreview = (
        <div className="previewText">Please Select an Image for Preview</div>
      );
    }

    return (
      <div className="previewComponent">
        <form onSubmit={e => this._handleSubmit(e)}>
          <ReactFileReader handleFiles={this._handleImageChange}>
            <button className="btn">Upload</button>
          </ReactFileReader>
          {/* <input
            className="fileInput"
            type="file"
            onChange={e => this._handleImageChange(e)}
          />{" "} */}
          <button
            className="submitButton"
            type="submit"
            onClick={e => this._handleSubmit(e)}
          >
            Upload Image
          </button>
        </form>
        <iframe
          src={this.state.file}
          frameBorder="0"
          height="400"
          width="50%"
        />
        {/* <div className="imgPreview">{$imagePreview}</div> */}
      </div>
    );
  }
}
export default PhotoUpload;
