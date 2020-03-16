import { render } from 'react-dom';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import useMeasure from './useMeasure';
import Triangle from "./triangle";
import './App.css';

function App() {
  const [open, toggle] = useState(false)
  const [bind, { height }] = useMeasure()
  const props = useSpring({ height: open ? 0 : height })
  

  const vertices = [
    [0, 60],
    [30, 0],
    [60, 60],
  ];

  // <svg width="400" height="400">
  //       <Triangle vertices={ vertices }
  //           color="red"
  //           delay={ 0 } 
  //  />
  // </svg>

  return (
    <div>
      <div {...bind} class="main" onClick={() => toggle(!open)}>
        <animated.div class="fill" style={props} />
        <animated.div class="content">{props.height.interpolate(x => x.toFixed(0))}</animated.div>
      </div>
    </div>
  )
}

export default App;
