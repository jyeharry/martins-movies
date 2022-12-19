import { LoaderFunctionArgs } from 'react-router-dom'
import { SearchResultLoaderResponse, MovieData } from './types'

interface GenreAPIResponse {
  genres: {
    id: number
    name: string
  }[]
}

interface GenreMap {
  [id: number]: string
}

interface MovieAPIResponse {
  page: number
  results: MovieResult[]
  total_results: number
  total_pages: number
}

interface MovieResult {
  poster_path: string
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export const searchResultLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<SearchResultLoaderResponse> => {
  const [moviesResponse, genresResponse] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${params.query}&page=${
        params.page || 1
      }&include_adult=false`,
    ),
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    ),
  ])

  const moviesResponseJSON: MovieAPIResponse = await moviesResponse.json()
  const genreMap = toGenreMap(await genresResponse.json())

  const movieData: MovieData = {
    page: moviesResponseJSON.page,
    movies: moviesResponseJSON.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      imagePath: movie.poster_path
        ? 'https://image.tmdb.org/t/p/original' + movie.poster_path
        : null,
      voteAverage: movie.vote_average,
      overview: movie.overview,
      genres: movie.genre_ids.map((id) => genreMap[id]),
    })),
    totalPages: moviesResponseJSON.total_pages,
    totalResults: moviesResponseJSON.total_results,
  }

  return { movieData }
}

const toGenreMap = (genres: GenreAPIResponse): GenreMap => {
  return genres.genres.reduce<GenreMap>((map, genre) => {
    map[genre.id] = genre.name
    return map
  }, {})
}
