import React from 'react';
import './App.css';
import Unit from './component/Unit/Unit';


const frse = [
  {
    id: 1,
    name: 'boss',
    position: '1',
    children: [
      2, 3,
    ]
  },
  {
    id: 2,
    name: 'boss2',
    position: '2',
    children: [
      3
    ]
  },
  {
    id: 3,
    name: 'boss2',
    position: '2',
  }
]


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
