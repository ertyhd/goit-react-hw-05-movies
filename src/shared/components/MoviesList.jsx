import { memo } from 'react';
import { Link } from 'react-router-dom';

import style from './moviesList.module.css';

const MoviesList = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <Link key={id} to={`/movies/${id}`} className={style.moviesItem}>
      <li>{title}</li>
    </Link>
  ));
  return <ul className={style.moviesList}>{elements}</ul>;
};

export default memo(MoviesList);
