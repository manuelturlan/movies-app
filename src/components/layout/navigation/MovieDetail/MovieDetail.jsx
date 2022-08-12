import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../../../../store/actions/actions";
import { connect } from "react-redux";
import { Details, DetailsContainer, Title, Img, Par } from "./MovieDetail.style";
import LoadingScreen from "./LoadingScreen/LoadingScreen";

const MovieDetail = ({ movie, getMovieDetail }) => {

  const [data, setData] = useState({
    isLoading: true
  });



  let { movieId } = useParams();  
  useEffect(() => {
    setTimeout(() => {
      setData({isLoading:false})
    }, 1000);
    getMovieDetail(movieId);
  }, [getMovieDetail, movieId]);


  return (
    data.isLoading ? 
    <LoadingScreen></LoadingScreen>
    :
    <Details>
      <DetailsContainer>
      <Title>Título: {movie.Title}</Title>
      <Img src={movie.Poster} alt="movie poster"></Img>
      <Par>Genre: {movie.Genre}</Par>
      <Par>Plot: {movie.Plot}</Par>
      <Par>Actors: {movie.Actors}</Par>
      <Par>Awards: {movie.Awards}</Par>
      <Par>Released: {movie.Released}</Par>
      <Par>Country: {movie.Country}</Par>
      <Par>Box Office: {movie.BoxOffice}</Par>
      <Par>Rating: {movie.imdbRating}</Par>
      <Par>Rated: {movie.Rated}</Par>
      </DetailsContainer>
    </Details>
  );
};

function mapStateToProps(state) {
  return {
    movie: state.movieDetail,
  };
}

export default connect(mapStateToProps, { getMovieDetail })(MovieDetail);
