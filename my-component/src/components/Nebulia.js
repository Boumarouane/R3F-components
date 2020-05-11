import * as THREE from 'three';
import React, {useRef, useMemo} from 'react';
import {useFrame} from 'react-three-fiber';
import nebuliaImg from './img/nebulia.jpg';
import CloudRot from './CloudRot';

const Nebulia = (props) =>{

    const nebu = useRef();

    const nebulia = useMemo(() => new THREE.TextureLoader().load(nebuliaImg), [nebuliaImg]);

    useFrame(() => {
        nebu.current.rotation.y += 0.001;
    });

    return(
        <group ref={nebu} scale={[1, 1, 1]} {...props}>
            <CloudRot/>
            <mesh >
                <sphereBufferGeometry attach='geometry' args={[10, 32, 32]}/>
                <meshBasicMaterial attach='material' map={nebulia} fog={false}/>
            </mesh>
        </group>
    );
}

export default Nebulia;