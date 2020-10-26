import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    return (
      <div class=" card text-white bg-dark ">
        <div class="card-body  ">
          <iframe
            width="100%"
            height="415"
            src={this.props.movieUrl}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}
