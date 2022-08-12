import React from 'react';
import { NavLink } from './FavoritesCard.style';
import { deleteFavoriteMovie } from '../../../../store/actions/actions';
import store from '../../../../store/store';
import { FavoriteCard, Img, Button, Title } from './FavoritesCard.style';

const FavoriteCards = ({ movie }) => {
    return (
        <FavoriteCard>
            <Title><NavLink to={`/movie/${movie.imdbID}`}>Título: {movie.Title}</NavLink></Title>
            <NavLink to={`/movie/${movie.imdbID}`}><Img src={movie.Poster} alt="movie poster"></Img></NavLink>
            <Button onClick={() => store.dispatch(deleteFavoriteMovie(movie.imdbID))}>Eliminar favorito</Button>
        </FavoriteCard>
    );
}

export default FavoriteCards;
