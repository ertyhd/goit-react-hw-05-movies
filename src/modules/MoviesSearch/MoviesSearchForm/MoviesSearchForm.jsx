import { memo } from 'react';
import { useState, useCallback } from 'react';

import style from './moviesSearch.module.css';

const MoviesSearchForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ search: '' });
  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setState({ [name]: value });
    },
    [setState]
  );

  const handleSubmit = e => {
    e.preventdefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { search } = state;

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Search movie</label>
        <input
          value={search}
          onChange={handleChange}
          name="search"
          placeholder="Search movie"
          required
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default memo(MoviesSearchForm);

MoviesSearchForm.defaultProps = {
  initialState: {
    search: '',
  },
};
