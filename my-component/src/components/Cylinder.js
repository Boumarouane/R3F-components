import React, {useRef}from 'react';
import {useFrame} from 'react-three-fiber';


const Cylinder = () => {

    const mesh = useRef();

    const color = 0xe5d54d;

    useFrame(() =>  {
    mesh.current.rotation.y += 0.002;
    mesh.current.rotation.z += 0.002;
    mesh.current.rotation.x += 0.002;
    });

    return (
    <points ref={mesh}>
        <cylinderBufferGeometry attach="geometry" args={[ 1, 1, 4, 32, 1, false]} />
        <pointsMaterial attach="material" 
        vertexColors size={5} 
        sizeAttenuation={false}
        />    
    </points>
    );
}

export default Cylinder;