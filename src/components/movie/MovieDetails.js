import React, { Component } from "react";
import { FaStar, FaCameraRetro } from "react-icons/fa";
import { IconContext } from "react-icons";
export default class MovieDetails extends Component {
  render() {
    return (
      <div className="row">
        <div class="col-md-8">
          <div class="card text-white bg-dark mt-3 mb-4">
            <div class="card-body  ">
              <div>
                <h3>{this.props.movieDetails.movieName}</h3>
                <p>{this.props.movieDetails.movieDescription}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="  card text-white bg-dark mt-4">
            <div class="card-body row pb-5 ">
              <div class="col ">
                <IconContext.Provider
                  value={{
                    color: "yellow",
                    className: "global-class-name",
                  }}
                >
                  <FaStar />
                </IconContext.Provider>{" "}
                {this.props.movieDetails.rate}/10
              </div>
              <div class="col ">
                <IconContext.Provider
                  value={{
                    color: "yellow",
                    className: "global-class-name",
                  }}
                >
                  <FaCameraRetro />
                </IconContext.Provider>{" "}
                {this.props.movieDetails.movieReleaseDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
