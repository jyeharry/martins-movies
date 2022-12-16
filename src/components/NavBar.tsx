import React, { useEffect, useState } from 'react'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { BiSearch } from 'react-icons/bi'
import { GiEarthAmerica } from 'react-icons/gi'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'
import { Form } from 'react-router-dom'

const Nav = styled.nav`
  padding: 0rem 2rem;
  width: 100%;
  display: flex;
  background-color: peachpuff;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: flex-start;
`

const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  color: black;
`

const Brand = styled(Link)`
  font-weight: bold;
`

const Main = styled.div`
  display: flex;
  flex-grow: 1;
`

const NavList = styled.ul`
  flex-direction: row;
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 0.8rem 0;
`

const NavMainList = styled(NavList)`
  width: 100%;
  padding: 10px 0;
  column-gap: 1.5rem;
`

const ExtraNavList = styled(NavList)`
  align-items: baseline;
  justify-content: center;
  padding-right: 13px;
  column-gap: 2rem;
`

const NavListItem = ({
  children,
  isDropdown,
}: {
  children: any
  isDropdown?: boolean
}) => (
  <li>
    <Link href="#">
      {children}
      {isDropdown && <IoIosArrowDown />}
    </Link>
  </li>
)

const Button = styled.button`
  height: 100%;
  width: 100%;
  padding: 9px 14px;
  text-align: center;
  white-space: nowrap;
`

const Login = styled(Button)`
  font-weight: 600;
  transition: all 0.5s ease;
  background-color: #9352b3;
  vertical-align: middle;
  border-radius: 0.25rem;
  font-size: 14px;
  color: white;
  border: none;
`

const SearchDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  height: 60px;
  padding: 0 20px;
  transition: all 0.5s ease;
`

export interface Result {
        poster_path: string;
        adult: boolean;
        overview: string;
        release_date: string;
        genre_ids: number[];
        id: number;
        original_title: string;
        original_language: string;
        title: string;
        backdrop_path: string;
        popularity: number;
        vote_count: number;
        video: boolean;
        vote_average: number;
    }

    export interface APIResponse {
        page: number;
        results: Result[];
        total_results: number;
        total_pages: number;
    }

export const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [apiResponse, setApiResponse] = useState<APIResponse | null>(null)

  useEffect(() => {
    const makeRequest = async (query: string) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=en-US&query=${query}&page=1&include_adult=false`,
      )
      const data = await response.json()
      setApiResponse(data)
      setIsSubmitted(false)
    }
    isSubmitted && makeRequest(search)
  }, [isSubmitted])

  return (
    <SearchDiv>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setIsSubmitted(true)
        }}
      >
        <input onChange={(e) => setSearch(e.target.value)} />
      </form>
      {apiResponse?.results.length &&
        apiResponse.results.map((movie: any, i) => (
          <div key={i}>
            <p>{movie.title}</p>
          </div>
        ))}
    </SearchDiv>
  )
}

export const NavBar = () => {
  return (
    <Nav>
      <Brand href="#">
        <h3>Martin's Movies</h3>
      </Brand>
      <Main>
        <NavMainList>
          <NavListItem isDropdown={true}>Home</NavListItem>
          <NavListItem isDropdown={true}>Pages</NavListItem>
          <NavListItem isDropdown={true}>Movies & TV Shows</NavListItem>
          <NavListItem isDropdown={true}>Blog</NavListItem>
          <NavListItem>Contact Us</NavListItem>
        </NavMainList>
        <ExtraNavList>
          <NavListItem>
            <BiSearch />
          </NavListItem>
          <NavListItem>
            <GiEarthAmerica />
          </NavListItem>
          <NavListItem>
            <Login>
              <MdOutlinePersonOutline /> LOGIN
            </Login>
          </NavListItem>
        </ExtraNavList>
      </Main>
    </Nav>
  )
}
