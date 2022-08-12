import { Route, Routes } from "react-router-dom";
import Favorites from "./components/layout/navigation/Favorites/Favorites";
import MovieDetail from "./components/layout/navigation/MovieDetail/MovieDetail";
import NavBar from "./components/layout/navigation/NavBar/NavBar";
import Buscador from "./components/Buscador/Buscador";


function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Buscador></Buscador>}></Route>
        <Route path="/favorites" element={<Favorites></Favorites>}></Route>
        <Route
          path="/movie/:movieId"
          element={<MovieDetail></MovieDetail>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
