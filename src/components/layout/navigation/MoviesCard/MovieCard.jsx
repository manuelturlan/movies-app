import React from "react";
import { addMovieFavorite } from "../../../../store/actions/actions";
import store from "../../../../store/store";
import { CardsContainer, NavLink, Par, Button, Img } from "./MovieCard.styles";

const MovieCard = ({ movie }) => {
  return (
    <CardsContainer>
      <Par>
        <NavLink to={`/movie/${movie.imdbID}`}>{movie.Title}</NavLink>
      </Par>
      <NavLink to={`/movie/${movie.imdbID}`}><Img src={movie.Poster} alt="movie poster"></Img></NavLink>
      <Button
        onClick={() =>
          store.dispatch(
            addMovieFavorite({
              Title: movie.Title,
              Poster: movie.Poster,
              imdbID: movie.imdbID,
            })
          )
        }
      >
        Agregar a favoritos
      </Button>
    </CardsContainer>
  );
};

export default MovieCard;
