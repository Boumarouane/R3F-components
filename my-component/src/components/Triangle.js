import React, {useRef}from 'react';
import {useFrame} from 'react-three-fiber';
import * as THREE from 'three/src/Three'


const Triangle = ({vertices}) => {

    const mesh = useRef();

    const color = 0xe7754d;

    useFrame(() =>  {
    mesh.current.rotation.y += 0.002;
    mesh.current.rotation.z += 0.002;
    mesh.current.rotation.x += 0.002;
    });

    return (
    <line ref={mesh}>
        <geometry
            attach="geometry"
            vertices={vertices.map(v => new THREE.Vector3(...v))}
        />
        <lineDashedMaterial attach="material" 
        color={color}
        linewidth={6}
        scale={6}
        dashSize={1}
        gapSize={9}
        />
    </line>
    );
}

export default Triangle;