const API_KEY = "9b32e143ebed0d44e7d66dda92abf90e";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMove {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimun: string;
  };
  page: number;
  results: [IMove];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
