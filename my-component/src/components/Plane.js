import * as THREE from 'three';
import React, {useRef, useMemo}from 'react';
import {useFrame} from 'react-three-fiber';
import url from "./img/world menu.jpeg";


const Plate = () => {
    // Construction de notre objet
    const mesh = useRef();

    const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);
    //     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    //     texture.repeat.set(1, 1);
    //     texture.anisotropy = 16;

    // Boucle d'animation
    useFrame(() =>  {
    mesh.current.rotation.y += 0.009;
    });

    return (
    // Construction de notre cube
    <mesh ref={mesh}>
        <planeBufferGeometry attach="geometry" args={[5, 4]} />   
        <meshPhongMaterial attach="material" 
        map={texture} 
        side={THREE.DoubleSide}
        color={0x2194ce}
        emissive={0x7c1aa8}
        specular={0xbf2929}
        />
    </mesh>
    );
}

export default Plate;