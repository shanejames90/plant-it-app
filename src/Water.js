import React, { Component } from 'react';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Slider.css'

class Water extends Component {
    render() {
        const { changeWaterLevel, level } = this.props
        return (
            <div>
                <span>Water(inches/week): {level}</span>
                <div className="slider">
                    <Slider defaultValue={level} min={0} max={20} step={1} onAfterChange={changeWaterLevel} />
                </div>
            </div>
        );
    }
}

export default Water;