import React, { Component } from 'react';
import Sun from './Sun'
import Water from './Water'
import Fertilizer from './Fertilizer'

class Plant extends Component {
    constructor (props) {
        super(props)
        this.state = {
            sun: 10,
            water: 5,
            fertilizer: 2
        }
    }

    changeSunLevel = (level) => {
        // console.log(level)
        this.setState({ sun: level })
    }

    changeWaterLevel = (level) => {
        // console.log(level)
        this.setState({ water: level })
    }

    changeFertilizerLevel = (level) => {
        // console.log(level)
        this.setState({ fertilizer: level })
    }

    render() {
        const { sun, water, fertilizer } = this.state
        return (
            <div>
                <h1>🌱Grass Plant🍃</h1>
                <div>
                    <div style={{ width: '20%', margin: 'auto' }}>
                        <Sun level={sun} changeSunLevel={this.changeSunLevel} />
                    </div>
                    <div style={{ width: '20%', margin: 'auto' }}>
                        <Water level={water} changeWaterLevel={this.changeWaterLevel} />
                    </div>
                    <div style={{ width: '20%', margin: 'auto' }}>
                        <Fertilizer level={fertilizer} changeFertilizerLevel={this.changeFertilizerLevel} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Plant;