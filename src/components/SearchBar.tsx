import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { RxCross1 } from 'react-icons/rx'

const SearchDiv = styled.div<{ active?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  height: 65px;
  padding: 0 20px;
  transition: all 0.5s ease;
  opacity: ${(props) => (props.active ? 1 : 0)};
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
  background-color: white;
`

const Input = styled.input`
  width: 100%;
  height: 60px;
  font-size: 20px;
  border: 0;
  padding: 10px 20px;
  color: ${({ theme }) => theme.inputBackground};
  outline: 0;
`

const Cross = styled(RxCross1)`
  position: absolute;
  transform: translate(-100%, -50%);
  top: 50%;
  cursor: pointer;
  color: ${({ theme }) => theme.inputBackground};
`

export const SearchBar = ({
  active,
  setSearchToggle,
}: {
  active?: boolean
  setSearchToggle: Function
}) => {
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
