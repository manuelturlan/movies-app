import React, { useState } from "react";
import { fetchMovies } from "../../store/actions/actions";
import { connect } from "react-redux";
import MovieCard from "../layout/navigation/MoviesCard/MovieCard";
import {
  MainContainer,
  FormContainer,
  SpanText,
  InputText,
  InputButton,
  CardsContainer,
} from "./Buscador.style";

const Buscador = (props) => {
  const [input, setInput] = useState("");
  return (
    <MainContainer>
      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          setInput("");
        }}
      >
        <SpanText>¡Busca tu película favorita!</SpanText>
        <InputText
          type="text"
          placeholder="Agrega una película..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></InputText>
        <InputButton
          type="submit"
          value="Buscar"
          onClick={() => props.fetchMovies(input)}
        ></InputButton>
      </FormContainer>
      <CardsContainer>
        {props.movies &&
          props.movies.map((m) => (
            <MovieCard key={m.imdbID} movie={m}></MovieCard>
          ))}
      </CardsContainer>
    </MainContainer>
  );
};

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

export default connect(mapStateToProps, { fetchMovies })(Buscador);
