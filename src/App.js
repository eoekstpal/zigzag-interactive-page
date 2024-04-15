import { useEffect } from 'react';
import './App.css';
import PageLayout from './components/PageLayout';

function App() {

  useEffect(() => { 
    window.onbeforeunload = function pushRefresh() {
        window.scrollTo(0, 0);
      };
    }, []);

  return (
    <>
      <PageLayout />
    </>
  );
}
export default App;