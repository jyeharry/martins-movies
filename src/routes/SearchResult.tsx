import React from 'react'
import {
  Link,
  useLoaderData,
  useParams,
} from 'react-router-dom'
import { APIResponse } from '../components/SearchBar'

export const searchResultLoader = async ({
  params,
}: any): Promise<APIResponse> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&query=${params.query}&page=${params.page || 1}&include_adult=false`,
  )
  return await response.json()
}

export const SearchResult = () => {
  const moviesResponse = useLoaderData() as APIResponse
  const { query } = useParams()

  return (
    <div>
      {moviesResponse.results.map((movie, i) => (
        <p key={i}>{movie.title}</p>
      ))}
      {moviesResponse.total_pages - moviesResponse.page > 0 && (
        <Link to={`/search/${query}/${moviesResponse.page + 1}`}>
          {moviesResponse.page + 1}
        </Link>
      )}
    </div>
  )
}
