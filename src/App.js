import React from 'react';
import './App.css';
import Header from './components/Header/Header';


function App({children}) {
  console.log(window.$sessionState);
  
  return (
    <div className="o-uao-multimedia-repository">
      <Header srcLogo="logo-repository.png"/>
      {children}
    </div>
  );
}

export default App;
