import { createGlobalStyle } from 'styled-components'

const colours = {
  grey: '#edf5f7',
  grey2: '#e7edef',
  grey3: '#999',
  grey4: '#948a99',
  grey5: '#666',
  darkGrey: '#3e4555',
  darkerGrey: '#212529',
  purple: '#9352b3',
  gold: '#ffc741',
}

export const theme = {
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    largeTablet: '992px',
    laptop: '1024px',
    desktop: '1200px',
  },
  bodyBackground: colours.grey,
  bodyTextColor: colours.darkerGrey,
  primary: colours.purple,
  inputBackground: colours.grey5,
  ...colours,
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
  }

  body {
    background-color: ${colours.grey};
    color: ${colours.darkerGrey};
  }

  svg {
    vertical-align: middle;
  }
`
