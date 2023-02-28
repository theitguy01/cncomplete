import React, { Component } from "react";
import { addToFavourites, removeFromFavourites } from "../actions";

class MovieCard extends Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addToFavourites(movie));
  };

  handleUnFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavourites(movie));
  };

  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div>
        <img src={movie.Poster} alt="movie-pic" />
        <div>
          {movie.Title} ({movie.Year})
        </div>
        <div>{movie.Plot}</div>
        <div>{movie.imdbRating}</div>
        {isFavourite ? (
          <button onClick={this.handleUnFavouriteClick}> Unfavourite </button>
        ) : (
          <button onClick={this.handleFavouriteClick}> Favourite </button>
        )}
      </div>
    );
  }
}

export default MovieCard;
