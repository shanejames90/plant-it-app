// front end routing
// minimal styling 
// update istheplantthriving funciton for scalability

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Plant from './Plant'
import Rules from './Rules'
import './App.css'
import plants from './plantData';
import PlantPalette from './PlantPalette'

class App extends Component {
  findPlant(id) {
    return plants.find(function (plant) {
      return plant.id === id
    })
  }

  render() {
    return (
      <div>
        <h1 style={{ width: '20%', margin: 'auto', padding: '2%' }}>Plant It!</h1>
        <div className="game-container">
          <div className="plant-container">
            <Switch>
              <Route exact path='/'
                render={(routeProps) => <PlantPalette allPlants={plants} {...routeProps} />} />
              <Route
                exact
                path='/plant/:id'
                render={routeProps => <Plant plant={this.findPlant(routeProps.match.params.id)}
                  {...routeProps} />} />
            </Switch>
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
