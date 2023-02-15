import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const getMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=633bd9c8c9bc68a8c4a40449237d5fcd'
    // {
    //   params: {
    //     key: '31800059-86399197816311d7a5cbd5e2b',
    //     q: nextRequest,
    //     page: prevPage,
    //     image_type: 'photo',
    //     orientation: 'horizontal',
    //     per_page: 12,
    //   },
    // }
  );

  return data;
};

export default getMovies;
