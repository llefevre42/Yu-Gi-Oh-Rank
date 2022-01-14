import css from 'styled-jsx/css'

export default css.global`
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    margin: 0px;
    padding: 0px;
  }
  @font-face {
    font-family: "Metropolis";
    font-weight: 400;
    src: url("/fonts/Metropolis/Metropolis-Light.otf");
    font-display: swap;
  }
  @font-face {
    font-family: "Phosphate";
    font-style: italic;
    font-weight: 400;
    src: url("/fonts/Phosphate2.otf");
    font-display: swap;
  }
  @font-face {
    font-family: "Ariq";
    font-style: italic;
    font-weight: normal;
    src: url("/fonts/Ariq.otf");
  }
`