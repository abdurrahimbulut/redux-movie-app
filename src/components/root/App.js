import React from "react";
import Navbar from "../navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import FavoritesPage from "../favorites/FavoritesPage";
import MoviesPage from "../movies/MoviesPage";
import MoviePage from "../movie/MoviePage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={MoviesPage} exact></Route>
        <Route path="/favorites" component={FavoritesPage} exact></Route>
        <Route path="/movie/:movieId" component={MoviePage} exact></Route>
      </Switch>



    </div>
  );
}

export default App;
