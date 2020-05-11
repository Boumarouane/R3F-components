import * as THREE from 'three';
import React, {useRef, useMemo} from 'react';
import {useFrame} from 'react-three-fiber';
import earthImg from './img/earth.jpg';
import moonImg from './img/moon.png';
import cloudImg from './img/fair_clouds_4k.png';

const World = (props) =>{

    const mesh = useRef();
    const cloudsRot = useRef();

    const earth = useMemo(() => new THREE.TextureLoader().load(earthImg), [earthImg]);
    const moon = useMemo(() => new THREE.TextureLoader().load(moonImg), [moonImg]);
    const cloud = useMemo(() => new THREE.TextureLoader().load(cloudImg), [cloudImg]);

    // const [earth, moon] = useLoader(new THREE.TextureLoader, [earthImg, moonImg]);

    useFrame(() => {
        mesh.current.rotation.y += 0.001;
        cloudsRot.current.rotation.y += 0.001;
    });

    return(
        <group ref={mesh} scale={[1, 1, 1]} {...props}>
            <mesh ref={mesh}>
                <sphereBufferGeometry attach='geometry' args={[2, 32, 32]}/>
                <meshStandardMaterial attach='material' map={earth}  
                fog={false}
                />
            </mesh>
            <mesh ref={cloudsRot}>
                <sphereBufferGeometry attach='geometry' args={[2.05, 32, 32]}/>
                <meshBasicMaterial attach='material' map={cloud}  
                fog={false}
                transparent={true}
                opacity={0.2}
                />
            </mesh>
            <mesh ref={mesh} position={[20, 0, 0]}>
                <sphereBufferGeometry attach='geometry' args={[0.75, 32, 32]}/>
                <meshBasicMaterial attach='material' map={moon} fog={false}/>
            </mesh>
        </group>
    );
}

export default World;