import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home page',
    link: '/goit-react-hw-05-movies/',
  },
  {
    id: nanoid(),
    text: 'Movies',
    link: '/goit-react-hw-05-movies/movies',
  },
  //   {
  //     id: nanoid(),
  //     text: 'Home page',
  //     link: '/',
  //   },
];

export default items;

/*

'/' - компонент Home, домашняя страница со списком популярных кинофильмов.
'/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
'/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
/movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
/movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.

*/
