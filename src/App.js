import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App({ children }) {
  return (
    <div className="o-uao-multimedia-repository">
      <div className="o-uao-mutimedia-repository-top">
        <Header srcLogo="logo-repository.png" />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default App;
