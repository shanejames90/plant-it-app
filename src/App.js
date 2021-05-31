import React, { Component } from 'react';
import Plant from './Plant'
import Rules from './Rules'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Plant It!</h1>
        <div>
          <Plant
            sun={this.sun}
            water={this.water}
            fertilizer={this.fertilizer}
          />
          <Rules />
        </div>
      </div>
    );
  }
}

export default App;
