import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import dataContext from './context/dataContext'
import { useContext, useEffect } from 'react';


function App() {
 const { fetchAll } = useContext(dataContext)
  useEffect(() => {
    let check = false;
    fetchAll();
    return () => {
      check = true;
    }
  }, [])



  return (
    <>
      <Navbar />
      <Home />
    </>

  );
}

export default App;
