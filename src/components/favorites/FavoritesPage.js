import React, { Component } from "react";
import CategoryList from "../categories/CategoryList";
import FavoriteList from "./FavoriteList";

export default class FavoritesPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <FavoriteList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
