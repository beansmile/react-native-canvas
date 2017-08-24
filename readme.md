### Usage

```JSX
import React, { Component } from 'react';
import Canvas from 'react-native-canvas';

class App extends Component {

  handleCanvas = (canvas) => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'purple';
    ctx.fillRect(0, 0, 100, 100);
  }

  render() {
    return (
      <Canvas ref={this.handleCanvas}/>
    )
  }
}
```
