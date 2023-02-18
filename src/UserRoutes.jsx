import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesSearchPage = lazy(() =>
  import('pages/MoviesSearchPage/MoviesSearchPage')
);
const SingleMoviePage = lazy(() =>
  import('pages/SingleMoviePage/SingleMoviePage')
);
const SingleMovieCastPage = lazy(() =>
  import('pages/SingleMovieCastPage/SingleMovieCastPage')
);
const SingleMovieReviewsPage = lazy(() =>
  import('pages/SingleMovieReviewsPage/SingleMovieReviewsPage')
);
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<HomePage />} />
        <Route
          path="/goit-react-hw-05-movies/movies"
          element={<MoviesSearchPage />}
        />
        <Route
          path="/goit-react-hw-05-movies/movies/:id"
          element={<SingleMoviePage />}
        >
          <Route path="cast" element={<SingleMovieCastPage />} />
          <Route path="reviews" element={<SingleMovieReviewsPage />} />
        </Route>
        <Route path="/goit-react-hw-05-movies/*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
