import React from 'react';
import { Canvas } from 'react-three-fiber';
// import Box from './components/Box';
import Sphere from './components/Sphere';
import Light from './components/Light';
import Plate from './components/Plate';
import Circle from './components/Circle';
import Cone from './components/Cone';
import Cylinder from './components/Cylinder';
import Triangle from './components/Triangle';
import './App.css';

const App= () => {
  return (
    <Canvas>
      <Triangle vertices={[[1, 0, 0], [0, 1, 0], [0, 0, 2], [1, 0, 0]]} />
      <Light />
    </Canvas>
  );
}

export default App;
