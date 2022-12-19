import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { MovieCard } from '../../components/MovieCard'
import { PaginationLinks } from '../../components/PaginationLinks'
import { SearchResultLoaderResponse } from './types'

const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 540px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 720px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeTablet}) {
    max-width: 960px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 1140px;
  }
`

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`

const Separator = styled.div`
  background-color: ${({ theme }) => theme.primary};
  height: 60px;
  margin-bottom: 60px;
`

export const SearchResult = () => {
  const {
    movieData: { totalPages, page, movies },
  } = useLoaderData() as SearchResultLoaderResponse
  const { query } = useParams()

  const numOfRows = Math.ceil(movies.length / 6)
  const cardRows = []

  for (let i = 0; i < numOfRows; i++) {
    cardRows.push(
      <CardRow key={i}>
        {movies.slice(i * 6, (i + 1) * 6).map((movie, j) => (
          <MovieCard movie={movie} key={j} />
        ))}
      </CardRow>,
    )
  }

  return (
    <>
      <Separator />
      <Container>
        {cardRows}
        <PaginationLinks
          currentPage={page}
          totalPages={totalPages}
          query={query || ''}
        />
      </Container>
    </>
  )
}
