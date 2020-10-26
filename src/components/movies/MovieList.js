import React, { Component } from "react";
import { FaPlay, FaHeart } from "react-icons/fa";
import { connect } from "react-redux";
import * as movieActions from "../../redux/actions/movieActions";
import * as favoryActions from "../../redux/actions/favoryActions";
import { Link } from "react-router-dom";

class MovieList extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <div>
        <h4>Movie List</h4>
        <div className="row">
          {this.props.movies.map((movie) => (
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
                  <button
                    onClick={() => this.props.addFavory(movie)}
                    className="btn btn-dark"
                  >
                    <FaHeart /> Favori
                  </button>
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
    movies: state.movieListReducer,
  };
};
const mapDispatchToProps = {
  getMovies: movieActions.getMovies,
  addFavory: favoryActions.addFavory,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
