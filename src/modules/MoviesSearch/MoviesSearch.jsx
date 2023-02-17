import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import MoviesSearchForm from './MoviesSearchForm/MoviesSearchForm';
import MoviesList from 'shared/components/MoviesList';
import { searchMovies } from 'shared/services/getMovies';

import style from './moviesSearch.module.css';

const MoviesSearch = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');
  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const data = await searchMovies(search, page);
        setItems([...data.results]);
      } catch ({ responce }) {
        console.log(responce.data.message);
      }
    };
    fetchMovies();
  }, [search, page, setItems]);

  const onSearchMovies = useCallback(
    ({ search }) => {
      setSearchParams({ search, page: 1 });
      setItems([]);
    },
    [setSearchParams]
  );
  return (
    <div className={style.search_block}>
      <MoviesSearchForm initialState={{ search }} onSubmit={onSearchMovies} />
      <MoviesList items={items} />
    </div>
  );
};

export default MoviesSearch;

MoviesSearch.propTypes = {
  items: PropTypes.array,
  onSearchMovies: PropTypes.func,
  search: PropTypes.string,
};
