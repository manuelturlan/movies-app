import React from "react";
import { connect } from "react-redux";
import FavoriteCards from "../FavoritesCard/FavoriteCards";
import { FavoriteContainer, ErrorTitle } from "./Favorites.style";

const Favorites = ({ movie }) => {
  if (movie.length > 0) {
    return (
      <FavoriteContainer>
        {movie &&
          movie.map((m) => (
            <FavoriteCards key={m.imdbID} movie={m}></FavoriteCards>
          ))}
      </FavoriteContainer>
    );
  } else {
    return <FavoriteContainer><ErrorTitle>Aún no añadiste ninguna película a tus favoritos</ErrorTitle></FavoriteContainer>
  }
};

function mapStateToProps(state) {
  return {
    movie: state.moviesFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
