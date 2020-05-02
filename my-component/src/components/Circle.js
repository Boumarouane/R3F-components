import React, {useRef}from 'react';
import {useFrame} from 'react-three-fiber';


const Circle = () => {

    const mesh = useRef();

    const color = 0xe5d54d;

    useFrame(() =>  {
    mesh.current.rotation.y += 0.002;
    mesh.current.rotation.z += 0.002;
    mesh.current.rotation.x += 0.002;
    });

    return (
    <mesh ref={mesh}>
        <circleBufferGeometry attach="geometry" args={[2, 32]} />
        <meshToonMaterial attach="material"
        color={color}
        />        
    </mesh>
    );
}

export default Circle;