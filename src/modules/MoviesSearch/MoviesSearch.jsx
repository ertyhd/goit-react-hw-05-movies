import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import MoviesSearchForm from './MoviesSearchForm/MoviesSearchForm';
import MoviesList from 'shared/components/MoviesList';
import { searchMovies } from 'shared/services/getMovies';

import style from './moviesSearch.module.css';

const MoviesSearch = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

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
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovies();
  }, [search, page, setItems, searchMovies]);

  const onSearchMovies = useCallback(({ search }) => {
    setSearchParams({ search, page: 1 });
    setItems([]);
  }, []);

  return (
    <>
      <MoviesSearchForm initialState={{ search }} onSubmit={onSearchMovies} />
      <MoviesList items={items} />
    </>
  );
};

export default MoviesSearch;
