import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface PaginationLinksProps {
  currentPage: number
  totalPages: number
  query: string
}

interface PageProps {
  query: string
  page: number
  active?: boolean
  children?: any
}

const Row = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin: 0 15px;
  max-width: 100%;
  margin-top: 20px;
  text-align: center;
  overflow: hidden;
  list-style: none;
  border-radius: 0.25rem;
`

const NavList = styled.ul`
  padding: 0rem;
  list-style-type: auto;
  margin: 0 auto;
`

const NavListItem = styled.li<{ active?: boolean }>`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 0 5px 0 0;
  padding: 0;
  border-radius: 50%;
  background-color: ${({ active, theme }) =>
    active ? theme.primary : 'transparent'};

  &:hover {
    background-color: ${({ theme }) => theme.grey2};
  }
`

const PageLink = styled(Link)<{ active?: boolean }>`
  color: ${({ active, theme }) => (active ? '#fff' : theme.bodyTextColor)};
  text-decoration: none;
  line-height: 50px;
  text-align: center;
  vertical-align: middle;
  transition: all 0.3s ease;
  border-radius: 50%;
  display: block;

  &:hover {
    color: ${({ active, theme }) => (active ? '#fff' : theme.primary)};
    background-color: ${({ theme }) => theme.grey2};
  }
`

const P = styled.p`
  color: ${({ theme }) => theme.bodyTextColor};
  line-height: 50px;
  text-align: center;
  display: inline-block;
  width: 25px;
  height: 25px;
`

const Ellipsis = () => <P>...</P>

const Page = ({ query, page, active, children }: PageProps) => {
  return (
    <NavListItem active={active}>
      <PageLink active={active} to={`/search/${query}/${page}`}>
        {children || page}
      </PageLink>
    </NavListItem>
  )
}

export const PaginationLinks = ({
  currentPage,
  totalPages,
  query,
}: PaginationLinksProps) => {
  return (
    <Row>
      <NavList>
        {currentPage - 1 >= 1 && (
          <Page query={query} page={currentPage - 1}>
            <IoIosArrowBack />
          </Page>
        )}

        {currentPage > 1 && <Page query={query} page={1} />}

        {currentPage - 2 >= 2 && <Ellipsis />}
        {currentPage - 1 >= 2 && <Page query={query} page={currentPage - 1} />}

        <Page active={true} query={query} page={currentPage} />

        {currentPage + 1 < totalPages && (
          <Page query={query} page={currentPage + 1} />
        )}
        {currentPage + 2 <= totalPages && <Ellipsis />}

        {totalPages > 1 && currentPage < totalPages && (
          <Page query={query} page={totalPages} />
        )}

        {currentPage + 1 <= totalPages && (
          <Page query={query} page={currentPage + 1}>
            <IoIosArrowForward />
          </Page>
        )}
      </NavList>
    </Row>
  )
}
