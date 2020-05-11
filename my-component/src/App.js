import * as THREE from 'three';
import React, {Suspense} from 'react';
import { Canvas } from 'react-three-fiber';
import Box from './components/Box';
import Sphere from './components/Sphere';
import Light from './components/Light';
import Plane from './components/Plane';
import Circle from './components/Circle';
import Cone from './components/Cone';
import Cylinder from './components/Cylinder';
import Triangle from './components/Triangle';
import World from './components/World';
import Stars from './components/Stars';
import Nebulia from './components/Nebulia';
import Controls from './components/Controls';
import './App.css';
// import starsImg from './components/img/galaxy2.jpg';



const App= () => {

  // const stars = useMemo(() => new THREE.TextureLoader().load(starsImg), [starsImg]);

  return (
    <Canvas onCreated={({ gl, scene}) => {
      gl.gammaInput = true
      gl.toneMapping = THREE.Uncharted2ToneMapping
      gl.setClearColor(new THREE.Color('#020207'))
      // scene.background = stars;
    }}>>
      <Stars/>
      <Controls/>
      {/* <World position={[0,-1,-5]} />
      <Nebulia position={[-150, 40, -190]} rotation={[0.6, 0, 0]}/> */}
      <Light color={0x111111}/>
      {/* <pointLight position={[-150, 40, -165]} distance={1000} intensity={4} color={0xd8547e} /> */}
    </Canvas>
  );
}

export default App;
