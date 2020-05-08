import React from 'react';
import { Canvas } from 'react-three-fiber';
import Box from './components/Box';
import Sphere from './components/Sphere';
import Light from './components/Light';
import Plate from './components/Plate';
import Circle from './components/Circle';
import Cone from './components/Cone';
import Cylinder from './components/Cylinder';
import Triangle from './components/Triangle';
import World from './components/World';
import Stars from './components/Stars';
import './App.css';

const App= () => {
  return (
    <Canvas>
      <Stars/>
      <World position={[0,-1,-5]} />
      <Light color={0x000000}/>
    </Canvas>
  );
}

export default App;
