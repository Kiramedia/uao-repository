import React from 'react';
import './App.css';
import CardsSection from "./Components/CardsSection/CardsSection";
import Title from "./Components/Title/Title";

function App() {
  return (
    <div className="App">
        <Title uaoRepositoryTitle={"CATEGORÍAS"}/>    
        <CardsSection/>
    </div>
  );
}
export default App;
