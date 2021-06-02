import React, { Component } from 'react';
import plants from './plantData'
import Plant from './Plant'

class PlantPalette extends Component {
    render() {
        return (
            <div>
                {plants.map(plant => <Plant key={plant.id} name={plant.name} /> )}
            </div>
        );
    }
}

export default PlantPalette;