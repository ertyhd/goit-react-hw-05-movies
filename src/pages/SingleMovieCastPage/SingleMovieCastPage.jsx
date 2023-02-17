import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesAdditionally } from 'shared/services/getMovies';

import style from './singleMovieCastPage.module.css';

const SingleMovieCastPage = () => {
  const [movieDetails, setMovieDetails] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getMoviesAdditionally(id, '/credits');
        setMovieDetails(result);
      } catch ({ responce }) {
        console.log(responce.data.message);
      }
    };
    fetchMovie();
  }, [getMoviesAdditionally]);

  const CastList = ({ cast }) => {
    if (!cast) {
      return;
    }
    console.log('cast', cast);
    const elements = cast.map(({ id, name, profile_path, character }) => (
      <li key={id}>
        <img
          width="120px"
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`}
        />
        <p>Name: {name}</p>
        <p>Character: {character}</p>
      </li>
    ));
    return <ul>{elements}</ul>;
  };
  return CastList(movieDetails);
};

export default SingleMovieCastPage;
