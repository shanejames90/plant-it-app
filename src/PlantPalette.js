import React, { Component } from 'react';
import plants from './plantData'
import Plant from './Plant'

class PlantPalette extends Component {
    render() {
        const { allPlants } = this.props
        return (
            <div>
                {allPlants.map(plant => <h1>{plant.name}</h1> )}
            </div>
        );
    }
}

export default PlantPalette;