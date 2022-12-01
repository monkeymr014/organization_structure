import React from 'react';
import './App.css';
import Unit from './component/Unit/Unit';

const frse = [
  {
    id:'1',
    name:'boss',
    position:'1'
  },
  {
    id:'2',
    name:'boss2',
    position:'2',
  }
]

class App extends React.Component {

  state = {
    units: [...frse]
  }
  render() {
    return (
      <>
        <h1>Struktura</h1>
        <Unit data={this.state.units} />
      </>
    );
  }
}

export default App;
