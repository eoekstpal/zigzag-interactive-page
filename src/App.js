import styled from 'styled-components';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Contianer>
      <Header />
    </Contianer>
  );
}

export default App;

const Contianer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;