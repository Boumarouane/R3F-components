import React, {useRef}from 'react';
import {useFrame} from 'react-three-fiber';


const Box = () => {
    // Construction de notre objet
    const mesh = useRef();

    const color = 0xe5d54d;

    // Boucle d'animation
    useFrame(() =>  {
    mesh.current.rotation.y += 0.002;
    mesh.current.rotation.x += 0.002;
    mesh.current.rotation.y += 0.002;
    });

    return (
    // Construction de notre cube
    <mesh ref={mesh}>
        <boxBufferGeometry attach="geometry" args={[2, 2, 2,]} />
        <meshStandardMaterial attach="material"
        color={color}
        emissive={0x5e2f2f}
        roughness={[0.1]} 
        metalness={[0.5]}
        flatShading = {false}
        wireframe={true}
        />        
    </mesh>
    );
}

export default Box;