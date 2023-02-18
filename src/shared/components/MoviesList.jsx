import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import style from './moviesList.module.css';

const MoviesList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title }) => (
    <Link
      key={id}
      to={`/goit-react-hw-05-movies/movies/${id}`}
      className={style.moviesItem}
      state={{ from: location }}
    >
      <li>{title}</li>
    </Link>
  ));
  return <ul className={style.moviesList}>{elements}</ul>;
};

export default memo(MoviesList);
