import React, { Component } from "react";
import { connect } from "react-redux";
import * as movieActions from "../../redux/actions/movieActions";
import * as favoryActions from "../../redux/actions/favoryActions";
import MovieDetails from "./MovieDetails";
import Movie from "./Movie";


class MoviePage extends Component {
  componentDidMount() {
    let id = this.props.match.params.movieId;
    this.props.getMovie(id);
  }
  render() {
    return (
      <div className="container">
          <Movie movieUrl={this.props.movieDetails.movieUrl}></Movie>
          <MovieDetails movieDetails={this.props.movieDetails}></MovieDetails>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetails: state.movieDetailsReducer,
  };
};
const mapDispatchToProps = {
  getMovie: movieActions.getMovie,
  addFavory: favoryActions.addFavory,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
