import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MoviesList from 'shared/components/MoviesList';
import { getMovies } from 'shared/services/getMovies';

// import style from './movies.module.css';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        const { results } = data;
        setItems([...results]);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, [setItems, setError]);
  console.log('props', items);
  return <MoviesList items={items} />;
};

export default Movies;

Movies.propTypes = {
  items: PropTypes.array,
};
