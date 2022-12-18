import React, {useState} from 'react'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { BiSearch } from 'react-icons/bi'
import { GiEarthAmerica } from 'react-icons/gi'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'
import { SearchBar } from './SearchBar'

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

export const NavBar = () => {
  const [searchToggle, setSearchToggle] = useState(false)

  return (
    <>
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
              <BiSearch onClick={() => setSearchToggle(true)} />
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
      <SearchBar setSearchToggle={setSearchToggle} active={searchToggle} />
    </>
  )
}
