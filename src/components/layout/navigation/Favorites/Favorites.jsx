import React from "react";
import { connect } from "react-redux";
import FavoriteCards from "../FavoritesCard/FavoriteCards";
import { FavoriteContainer } from './Favorites.style';

const Favorites = ({ movie }) => {
  return (
      <FavoriteContainer>
        {movie &&
          movie.map((m) => (
            <FavoriteCards key={m.imdbID} movie={m}></FavoriteCards>
          ))}
      </FavoriteContainer>
  );
};

function mapStateToProps(state) {
  return {
    movie: state.moviesFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
