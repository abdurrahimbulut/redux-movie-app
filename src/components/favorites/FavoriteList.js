import React, { Component } from "react";
import {Link} from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { connect } from "react-redux";


class FavoriteList extends Component {
  render() {
    return (
      <div>
        <h4>Favory List</h4>
        <div className="row">
          {this.props.favories.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-4">
              <div className="card bg-warning ">
                <img
                  src={movie.moviePictureUrl}
                  alt={movie.movieName}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {movie.movieName.length > 20
                      ? movie.movieName.substring(0, 20) + "..."
                      : movie.movieName}
                  </h5>
                  <p className="card-text">
                    {movie.movieDescription.substring(0, 35)}...
                  </p>
                  <h5>{movie.movieReleaseDate}</h5>
                </div>
                <div className="card-body row justify-content-between pr-5 pl-5">
                  <Link to={`/movie/` + movie.id} className="btn btn-dark">
                    <FaPlay /> İzle
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      favories: state.addFavoryReducer,
    };
  };
export default connect(mapStateToProps)(FavoriteList);
