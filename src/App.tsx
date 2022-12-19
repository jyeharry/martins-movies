import React from 'react'
import { Helmet } from 'react-helmet'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './global.css'
import { Root } from './routes/Root'
import { SearchResult } from './routes/SearchResult/SearchResult'
import { searchResultLoader } from './routes/SearchResult/SearchResultLoader'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'search/:query/:page',
        loader: searchResultLoader,
        element: <SearchResult />,
      },
    ],
  },
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
