import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { RxCross1 } from 'react-icons/rx'

export interface Result {
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

export interface APIResponse {
  page: number
  results: Result[]
  total_results: number
  total_pages: number
}

const SearchDiv = styled.div<{ active?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  height: 60px;
  padding: 0 20px;
  transition: all 0.5s ease;
  opacity: ${(props) => (props.active ? 1 : 0)};
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
`

const Input = styled.input`
  width: 100%;
  height: 60px;
  font-size: 20px;
  border: 0;
  padding: 10px 20px;
  color: #666;
  outline: 0;
`

const Cross = styled(RxCross1)`
  position: absolute;
  transform: translate(-100%, -50%);
  top: 50%;
  cursor: pointer;
  color: #666;
`

export const SearchBar = ({ active, setSearchToggle }: { active?: boolean, setSearchToggle: Function }) => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  return (
    <SearchDiv active={active}>
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault()
          navigate(`/search/${query}/1`)
        }}
      >
        <Input
          name="query"
          type="text"
          placeholder="Type and hit enter..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <Cross size="1.2rem" onClick={() => setSearchToggle(false)} />
      </form>
    </SearchDiv>
  )
}
