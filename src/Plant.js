import React, { Component } from 'react';

class Plant extends Component {
    constructor (props) {
        super(props)
        this.state = {
            sun: 0,
            water: 0,
            fertilizer: 0
        }
    }
    render() {
        const { sun, water, fertilizer } = this.state
        return (
            <div>
                <h1>🌱Grass Plant🍃</h1>
                <div>
                    <span>
                        <p>Sun: {sun}</p>
                        <p>Water: {water}</p>
                        <p>Fertilizer: {fertilizer}</p>
                    </span>
                </div>
            </div>
        );
    }
}

export default Plant;