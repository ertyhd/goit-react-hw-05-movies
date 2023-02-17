import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { getMoviesAdditionally } from 'shared/services/getMovies';

import noPhoto from 'img/no_photo.jpg';

// import style from './singleMovieCastPage.module.css';

const SingleMovieCastPage = () => {
  const [movieDetails, setMovieDetails] = useState('');
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const result = await getMoviesAdditionally(id, '/credits');
        setMovieDetails(result);
      } catch ({ responce }) {
        console.log(responce.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const CastList = ({ cast }) => {
    if (!cast) {
      return;
    }
    const elements = cast.map(({ id, profile_path, name, character }) => (
      <li key={id}>
        <img
          alt="actors"
          width="120px"
          src={
            profile_path
              ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`
              : noPhoto
          }
        />
        <p>Name: {name}</p>
        <p>Character: {character}</p>
      </li>
    ));
    return (
      <ul>
        {loading ? Loading.standard('Loading...') : Loading.remove()}
        {elements}
      </ul>
    );
  };
  return CastList(movieDetails);
};

export default SingleMovieCastPage;
