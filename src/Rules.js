import React, { Component } from 'react';

class Rules extends Component {
    render() {
        return (
            <div>
                <h3>How to play:</h3>
                <ul>
                    <li>1. Sun it: pick the amount of time in hours you want to have your sun lamps on in your greenhouse!</li>
                    <li>2. Water it: How much do you want to water your plants?</li>
                    <li>3. Feed it: Choose the amount of fertilizer to apply!</li>
                    <li>4. Click 'Grow it!' to simulate. Will your plant thrive under the conditions?</li>
                </ul>
            </div>
        );
    }
}

export default Rules;