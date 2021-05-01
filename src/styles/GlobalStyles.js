import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
  --primary-color: #007bff;
  --primary-color-light: #057fff;
  --secondary-color: #6c757d;
  --border-color: #2e344e;
  --background-dark-color: #10121a;
  --background-dark-color-2: #191d2b;
  --background-light-color: #f1f1f1;
  --background-light-color-2: rgba(3, 127, 255, .3);
  --white-color: #fff;
  --font-light-color: #a4acc4;
  --font-dark-color: #313131;
  --font-dark-color-2: #151515;
  --sidebar-dark-color: #191d2b;
  --scrollbar-bg-color: #383838;
  --scrollbar-thump-color: #6b6b6b;
  --scrollbar-track-color: #383838;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
}

body {
  background-color: var(--background-dark-color);
  color: var(--font-light-color);
}

a {
  font-family: inherit;
  color: inherit;
  font-size: 1rem;
}

h1 {
  font-size: 4rem;
  color: var(--white-color);
  span {
    font-size: 4rem;
  }
}

h6 {
  color: var(--white-color);
  font-size: 1.2rem;
  padding-bottom: .6rem;
}

span {
  color: var(--primary-color);
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

`;


export default GlobalStyle;
