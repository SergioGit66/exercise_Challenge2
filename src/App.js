import './App.css';
import Main from './Main';
import Header from './Header';
import { useContext, useState } from 'react';
import  DarkModeContextProvider  from './Context';

function App() {
  return (
    
    <DarkModeContextProvider>
      <Header />
      <Main />
    </DarkModeContextProvider>

  );
}

export default App;
