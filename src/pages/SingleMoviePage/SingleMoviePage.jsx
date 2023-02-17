import { Outlet, Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMoviesDetails } from '../../shared/services/getMovies';

import style from './singleMoviePage.module.css';

const SingleMoviePage = () => {
  const [movieDetails, setMovieDetails] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getMoviesDetails(id);
        setMovieDetails(result);
      } catch ({ responce }) {
        console.log(responce.data.message);
      }
    };
    fetchMovie();
  }, [getMoviesDetails]);
  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        &#x21A9; Go back
      </button>
      <h1>
        {movieDetails?.original_title} ({movieDetails?.release_date})
      </h1>
      <img src={movieDetails?.poster_path} />
      <p>Popularity: {movieDetails?.popularity}</p>
      <p>Overview: {movieDetails?.overview}</p>
      <p>Genres: {movieDetails?.genres}</p>
      <ul>
        <Link to="cast">
          <li>Cast</li>
        </Link>
        <Link to="reviews">
          <li>Reviews</li>
        </Link>
      </ul>
      <Outlet />
    </>
  );
};

export default SingleMoviePage;
