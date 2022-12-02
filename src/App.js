import React from 'react';
import './App.css';
import Unit from './component/Unit/Unit';
import Button from './component/Button/Button';
import Modal from './component/Modal/Modal';
import frse from './structure.js'



class App extends React.Component {

  state = {
    units: [...frse],
    isOpenModal: false
  }
  openModal = () => {
    this.setState({
      isOpenModal: true
    })
  }
  render() {
    console.log(this.state)
    return (
      <>

        <h1>Struktura</h1>
        <Button  openModalFn={this.openModal} />
        <Unit data={this.state.units} />
        {
          this.state.isOpenModal && <Modal />
        }
        
      </>
    );
  }
}

export default App;

