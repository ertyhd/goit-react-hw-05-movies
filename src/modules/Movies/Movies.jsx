import { useState, useEffect } from 'react';

import MoviesList from 'shared/components/MoviesList';
import { getMovies } from 'shared/services/getMovies';

import style from './movies.module.css';

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
  }, [setItems, setError, getMovies]);
  console.log(items);
  return <MoviesList items={items} />;
};

export default Movies;
