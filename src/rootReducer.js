import {
  FETCH_MOVIES,
  ADD_MOVIE_FAVORITE,
  GET_MOVIE_DETAIL,
  DELETE_FAVORITE_MOVE,
} from "./utils/action-types/action-types-constants";

const initialState = {
  moviesLoaded: [],
  moviesFavorites: [],
  movieDetail: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === FETCH_MOVIES) {
    return {
      ...state,
      moviesLoaded: action.payload.Search,
    };
  }

  if (action.type === ADD_MOVIE_FAVORITE) {
    if (state.moviesFavorites.length > 0) {
      for (let i = 0; i < state.moviesFavorites.length; i++) {
        if (action.payload.imdbID === state.moviesFavorites[i].imdbID) {
          alert("Ya existe en favoritos");
          return {
            ...state,
            moviesFavorites: state.moviesFavorites,
          };
        }
      }
    }
    return {
      ...state,
      moviesFavorites: state.moviesFavorites.concat(action.payload),
    };
  }

  if (action.type === GET_MOVIE_DETAIL) {
    return {
      ...state,
      movieDetail: action.payload,
    };
  }

  if (action.type === DELETE_FAVORITE_MOVE) {
    return {
      ...state,
      moviesFavorites: state.moviesFavorites.filter(
        (m) => m.imdbID !== action.payload
      ),
    };
  }

  return state;
}

export default rootReducer;
