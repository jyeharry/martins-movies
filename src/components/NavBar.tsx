import React, { useState } from 'react'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import { BiSearch } from 'react-icons/bi'
import { GiEarthAmerica } from 'react-icons/gi'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'
import { SearchBar } from './SearchBar'
import { Link } from 'react-router-dom'

const NavList = styled.ul`
  flex-direction: row;
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 0.8rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeTablet}) {
    flex-direction: row;
  }
`

const mobileNavWidth = '27.5rem'

const Nav = styled.nav`
  padding: 0rem 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`

const NavLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: black;
`

const Brand = styled(NavLink)`
  font-weight: bold;
`

const Main = styled.div`
  flex-grow: 1;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeTablet}) {
    display: flex;
    flex-basis: auto;
  }
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
    <NavLink to="#">
      {children}
      {isDropdown && <IoIosArrowDown />}
    </NavLink>
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
  cursor: pointer;
  background-color: ${({ theme }) => theme.primary};
  vertical-align: middle;
  border-radius: 0.25rem;
  font-size: 14px;
  color: white;
  border: none;

  &:hover {
    filter: brightness(113%);
  }
`

const PersonIcon = styled(MdOutlinePersonOutline)`
  background-color: ${({ theme }) => theme.primary};
`

const Separator = styled.div`
  background-color: ${({ theme }) => theme.primary};
  height: 60px;
  margin-bottom: 60px;
`

export const NavBar = () => {
  const [searchToggle, setSearchToggle] = useState(false)

  return (
    <>
      <Nav>
        <Brand to="/">
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
              <BiSearch onClick={() => setSearchToggle(true)} />
            </NavListItem>
            <NavListItem>
              <GiEarthAmerica />
            </NavListItem>
            <NavListItem>
              <Login>
                <PersonIcon /> LOGIN
              </Login>
            </NavListItem>
          </ExtraNavList>
        </Main>
      </Nav>
      <SearchBar setSearchToggle={setSearchToggle} active={searchToggle} />
      <Separator/>
    </>
  )
}
