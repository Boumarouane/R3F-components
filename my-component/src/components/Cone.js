import React, {useRef}from 'react';
import {useFrame} from 'react-three-fiber';


const Circle = () => {

    const mesh = useRef();

    const color = 0xe7754d;

    useFrame(() =>  {
    mesh.current.rotation.y += 0.002;
    mesh.current.rotation.z += 0.002;
    mesh.current.rotation.x += 0.002;
    });

    return (
    <mesh ref={mesh}>
        <coneBufferGeometry attach="geometry" args={[1, 5, 32, 1, false]} />
        <meshDepthMaterial attach="material"
        color={color}
        wireframe={true}
        wireframeLinewidth={5}
        />        
    </mesh>
    );
}

export default Circle;