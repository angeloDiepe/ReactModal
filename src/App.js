import React,{Component}  from 'react';
import Modal from './Modal.js';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      isBlock:false
    }
  }
  render(){
    const isBlock=this.state.isBlock;
    this.handleModal=(set)=>{
      this.setState({isBlock:set})
    }
    return (
      <div id="container">
      {isBlock?
      (<Modal handleModal={this.handleModal}/>):
      (<button id="modal-open" onClick={()=>this.handleModal(true)}>Open Modal</button>)}
      </div>
    )
  }
}
export default App;
