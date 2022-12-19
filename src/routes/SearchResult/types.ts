export interface SearchResultLoaderResponse {
  movieData: MovieData
}

export interface MovieData {
  page: number
  movies: Movie[]
  totalResults: number
  totalPages: number
}
export interface Movie {
  id: number
  title: string
  voteAverage: number
  imagePath: string | null
  overview: string
  genres: string[]
}
