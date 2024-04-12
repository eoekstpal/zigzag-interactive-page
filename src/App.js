import { createGlobalStyle } from 'styled-components';
import './App.css';
import Header from './compnents/Header';

// global font 적용
const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Black Han Sans';
  }
  `;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
