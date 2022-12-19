import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Movie } from '../routes/SearchResult/types'
import { AiFillStar } from 'react-icons/ai'

interface MovieCardProps {
  movie: Movie
}

const Column = styled.div`
  position: relative;
  width: 100%;
  padding: 0 15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeTablet}) {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
`

const ImgDiv = styled.div`
  max-height: 350px;
  overflow: hidden;
`

const Img = styled.img`
  height: auto;
  width: 100%;
  overflow: hidden;
`

const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 10px 10px 40px 0 rgba(52, 58, 64, 0.1);
  transition: all 0.3s ease;
  margin-bottom: 30px;

  &:hover {
    transform: translateY(-10px);
  }
`

const Content = styled.div`
  position: relative;
  padding: 30px;

  & p {
    color: ${({ theme }) => theme.grey4};
  }

  & h2 {
    color: ${({ theme }) => theme.darkGrey};
  }
`

const Meta = styled.div`
  font-size: 14px;
  padding: 10px 0;
  clear: both;
  color: ${({ theme }) => theme.grey3};
`

const Star = styled(AiFillStar)`
  color: ${({ theme }) => theme.gold};
  margin-bottom: 4px;
`

const Genres = styled.span`
  float: right;
`

const Button = styled.button`
  border: none;
  font-weight: 600;
  padding: 9px 14px;
  margin: 5px 0;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    filter: brightness(113%);
  }
`

export const MovieCard = ({
  movie: { id, title, imagePath, voteAverage, overview, genres },
}: MovieCardProps) => {
  const [watched, setWatched] = useState(() => {
    const storedWatched = localStorage.getItem(id.toString())
    return !!storedWatched
  })

  useEffect(() => {
    if (watched) {
      localStorage.setItem(id.toString(), `${watched}`)
    } else {
      localStorage.removeItem(id.toString())
    }
  }, [watched])

  return (
    <Column>
      <Card>
        {imagePath !== null && (
          <ImgDiv>
            <Img src={imagePath} />
          </ImgDiv>
        )}
        <Content>
          <h2>{title}</h2>
          <Button
            onClick={() => {
              const newWatched = !watched
              setWatched(newWatched)
              localStorage.setItem(id.toString(), `${newWatched}`)
            }}
          >
            {watched ? 'Remove from' : 'Add to'} watched
          </Button>
          <Meta>
            <Star /> {voteAverage}/10
            <Genres>{genres.join(', ')}</Genres>
          </Meta>
          <p>{overview}</p>
        </Content>
      </Card>
    </Column>
  )
}
