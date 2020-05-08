import * as THREE from 'three';
import React, {useRef, useMemo} from 'react';
import {useFrame} from 'react-three-fiber';
import starsImg from './img/stars.png';

const Stars = () =>{

    const mesh = useRef();

    const stars = useMemo(() => new THREE.TextureLoader().load(starsImg), [starsImg]);

    useFrame(() => {
        mesh.current.rotation.y += 0.00001;
        mesh.current.rotation.x += 0.00001;
    });

    return(
        <mesh ref={mesh}>
            <sphereBufferGeometry attach='geometry' args={[200, 32, 32]}/>
            <meshBasicMaterial attach='material' map={stars} side={THREE.BackSide}/>
        </mesh>
    );
}

export default Stars;