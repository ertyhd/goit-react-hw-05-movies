import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import PropTypes from 'prop-types';

import { getMoviesAdditionally } from 'shared/services/getMovies';

// import style from './singleMovieReviewsPage.module.css';

const SingleMovieReviewsPage = () => {
  const [movieDetails, setMovieDetails] = useState('');
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const result = await getMoviesAdditionally(id, '/reviews');
        setMovieDetails(result);
      } catch ({ responce }) {
        console.log(responce.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const ReviewsList = ({ results }) => {
    if (!results) {
      return;
    }
    if (results.length === 0) {
      return <p>No one wants to watch this movie &#128528;</p>;
    }

    const elements = results.map(({ id, author, content }) => (
      <li key={id}>
        <p>Author: {author}</p>
        <p>Reviews: {content}</p>
      </li>
    ));
    return (
      <ul>
        {loading ? Loading.standard('Loading...') : Loading.remove()}
        {elements}
      </ul>
    );
  };
  return ReviewsList(movieDetails);
};

export default SingleMovieReviewsPage;

SingleMovieReviewsPage.propTypes = {
  id: PropTypes.string.isRequired,
  movieDetails: PropTypes.shape({
    results: PropTypes.array,
  }).isRequired,
};
