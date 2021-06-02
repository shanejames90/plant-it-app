import React, { Component } from 'react';
import Plant from './Plant'
import Rules from './Rules'
import './App.css'
import PlantPalette from './PlantPalette'



class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ width: '20%', margin: 'auto', padding: '2%' }}>Plant It!</h1>
        <div className="game-container">
          <div className="plant-container">
           <Plant
              sun={this.sun}
              water={this.water}
              fertilizer={this.fertilizer}
            />
          </div>
          <div className="rules-container">
            <Rules />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
