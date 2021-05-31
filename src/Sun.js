import React, { Component } from 'react';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Slider.css'

class Sun extends Component {
    render() {
        const { changeSunLevel, level } = this.props
        return (
            <div>
                <span>Sun(hrs/day): {level}</span>
                <div className="slider">
                    <Slider defaultValue={level} min={0} max={24} step={1} onAfterChange={changeSunLevel} />
                </div>
            </div>
        );
    }
}

export default Sun;