export const API_ID = 'c78dd9bbcb31d6943ebef79a85954869'
export const BASE_MOVIE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_ID}&language=en-US&page=1`;
export const SINGLE_MOVIE_URL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${API_ID}&language=en-US`;
export const BASE_TV_URL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_ID}&language=en-US&page=1`;
export const SINGLE_TV_URL = (id) => `https://api.themoviedb.org/3/tv/${id}?api_key=${API_ID}&language=en-US`;
