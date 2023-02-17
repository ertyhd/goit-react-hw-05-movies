import { Outlet, Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { getMoviesDetails } from '../../shared/services/getMovies';
import poster from '../../img/no-poster-available.webp';

import style from './singleMoviePage.module.css';

const SingleMoviePage = () => {
  const [movieDetails, setMovieDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const voteAverageShort = (movieDetails.vote_average * 10).toFixed(0);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const result = await getMoviesDetails(id);
        setMovieDetails(result);
      } catch ({ responce }) {
        console.log(responce.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);
  return (
    <>
      {loading ? Loading.standard('Loading...') : Loading.remove()}
      <button
        className={style.btn}
        onClick={() => {
          navigate('/goit-react-hw-05-movies/');
        }}
      >
        &#x21A9; Go to home page
      </button>
      <div className={style.movie_details}>
        <img
          alt="movie poster"
          src={movieDetails.poster_path ? movieDetails.poster_path : poster}
        />
        <div className={style.descr_block}>
          <h1>
            {movieDetails?.original_title} ({movieDetails?.release_date})
          </h1>
          <p>User Score: {voteAverageShort}%</p>
          <p>Overview: {movieDetails?.overview}</p>
          <p>Genres: {movieDetails?.genres}</p>
        </div>
      </div>
      <ul className={style.underline_light}>
        <p>Additionaly information:</p>
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
