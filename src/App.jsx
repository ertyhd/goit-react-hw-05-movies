import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'modules/Navbar/Navbar';

import Home from 'modules/pages/Home/Home';
import Movies from 'modules/pages/Movies/Movies';
import NotFoundPage from 'modules/pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
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
