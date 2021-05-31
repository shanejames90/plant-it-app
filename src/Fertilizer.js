import React, { Component } from 'react';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Slider.css'

class Fertilizer extends Component {
    render() {
        const { changeFertilizerLevel, level } = this.props
        return (
            <div>
                <span>Fertilizer(lbs/week): {level}</span>
                <div className="slider">
                    <Slider defaultValue={level} min={0} max={4} step={0.25} onAfterChange={changeFertilizerLevel} />
                </div>
            </div>
        );
    }
}

export default Fertilizer;