import React, {useRef}from 'react';
import {useFrame} from 'react-three-fiber';


const Sphere = (props, ) => {
    // Construction de notre objet
    const mesh = useRef();

    const color = 0x938724;

    const geo = <sphereBufferGeometry attach="geometry" args={[2, 32, 32]} />


    // Boucle d'animation
    useFrame(() =>  {
    mesh.current.rotation.y += 0.01;
    });

    return (
    <mesh ref={mesh}
    {...props}
    >
        {geo}
        <meshBasicMaterial 
        attach="material"
        color={color}
        transparent
        opacity={0.3}
        wireframe={true}
        />        
    </mesh>
    );
}

export default Sphere;