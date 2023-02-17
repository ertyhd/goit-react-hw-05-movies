import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MoviesList from 'shared/components/MoviesList';
import { getMovies } from 'shared/services/getMovies';

// import style from './movies.module.css';

const Movies = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        const { results } = data;
        setItems([...results]);
      } catch ({ responce }) {
        console.log(responce.data.message);
      }
    };

    fetchMovies();
  }, [setItems]);
  return (
    <>
      <MoviesList items={items} />
    </>
  );
};

export default Movies;

Movies.propTypes = {
  items: PropTypes.array,
};
