import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'modules/Navbar/Navbar';
import getMovies from './shared/services/getMovies';

import Home from 'pages/Home/Home';
import MoviesSearch from 'pages/MoviesSearch/MoviesSearch';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const fetchMovies = async () => {
  try {
    const data = await getMovies();
    console.log(data.results);
  } catch (error) {
    console.log(error.message);
  }
};
// fetchMovies();

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesSearch />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

/*

'/' - компонент Home, домашняя страница со списком популярных кинофильмов.
'/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
'/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
/movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
/movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.

*/
