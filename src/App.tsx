import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import './App.css'
import { NavBar } from './components/NavBar'
import { Root } from './routes/Root'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: Quicksand, sans-serif;
}

svg {
  vertical-align: middle;
}
`

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
])

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
