import './App.css';
import Main from './Main';
import Header from './Header';
import { useContext } from 'react';
import  DarkModeContextProvider  from './Context';
import { DarkModeContext } from './Context';

function App() {
  
  return (
    
    <DarkModeContextProvider>
      <Header />
      <Main />
    </DarkModeContextProvider>
    
  );
}

export default App;
