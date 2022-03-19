import './App.css';
import './Game.css'
import Game from './Game';
import { Component } from 'react';

class App extends Component {
  render () {
    return (
      
    
      <div className="App">
        <div className='header'>
          <h1>BIBDLE</h1>
        </div>
        

        {/* <div className='header'>
          <h1>BIBDLE</h1>
        </div> */}
        <div className='main'>
        <Game />
        </div>
        
        
        

      </div>
    );
  }
}

export default App;
