import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'modules/Navbar/Navbar';

import HomePage from 'pages/HomePage/HomePage';
import MoviesSearchPage from 'pages/MoviesSearchPage/MoviesSearchPage';
import SingleMoviePage from 'pages/SingleMoviePage/SingleMoviePage';
import SingleMovieCastPage from 'pages/SingleMovieCastPage/SingleMovieCastPage';
import SingleMovieReviewsPage from 'pages/SingleMovieReviewsPage/SingleMovieReviewsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        SingleMoviePage
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesSearchPage />} />
        <Route path="/movies/:id" element={<SingleMoviePage />}>
          <Route path="cast" element={<SingleMovieCastPage />} />
          <Route path="reviews" element={<SingleMovieReviewsPage />} />
        </Route>
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
