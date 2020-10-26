import React, { Component } from "react";
import CategoryList from "../categories/CategoryList";
import MovieList from "./MovieList";



class MoviesPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
                <MovieList/>
            </div>
            <div className="col-md-3">
                <CategoryList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default  MoviesPage;
