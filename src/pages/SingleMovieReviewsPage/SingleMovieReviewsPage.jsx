import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesAdditionally } from 'shared/services/getMovies';

import style from './singleMovieReviewsPage.module.css';

const SingleMovieReviewsPage = () => {
  const [movieDetails, setMovieDetails] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getMoviesAdditionally(id, '/reviews');
        setMovieDetails(result);
      } catch ({ responce }) {
        console.log(responce.data.message);
      }
    };
    fetchMovie();
  }, [getMoviesAdditionally]);

  const CastList = ({ results }) => {
    if (!results) {
      return;
    }
    console.log('cast', results);
    const elements = results.map(({ id, author, content }) => (
      <li key={id}>
        <p>Author: {author}</p>
        <p>Reviews: {content}</p>
      </li>
    ));
    return <ul>{elements}</ul>;
  };
  return CastList(movieDetails);
};

export default SingleMovieReviewsPage;
