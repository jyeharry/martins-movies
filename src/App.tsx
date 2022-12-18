import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import {GlobalStyle} from './global.css'
import { Root } from './routes/Root'
import {SearchResult, searchResultLoader} from './routes/SearchResult'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{
      path: 'search/:query/:page',
      loader: searchResultLoader,
      element: <SearchResult/>
    }]
  },
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}

export default App
