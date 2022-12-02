import React from 'react';
import './App.css';
import Unit from './component/Unit/Unit';
import frse from './structure.js'




class App extends React.Component {

  state = {
    units: [...frse]
  }

  render() {
    console.log(this.state)
    return (
      <>
        <h1>Struktura</h1>
        <Unit data={this.state.units} />
      </>
    );
  }
}

export default App;

/* 


Podział na 
  FRSE?
  1.Boss - zarząd
  2.Dyrektor - biuro
  3.Koordynator - zespoł 
  Czyli na komórki,
     każda komórka ma przypisanych praconików.
     każda komórka ma akcpetatora wyżej lub wyznaczonego dodatkowego akceptatora.

*/