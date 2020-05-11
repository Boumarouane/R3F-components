import React, {useRef, useMemo} from 'react';
import {useFrame} from 'react-three-fiber';
import gaz from "./img/smoke.png";
import { random } from "lodash";
import * as THREE from 'three';


const Cloud = () => {

    const mesh = useRef();
    const anneau = useMemo(() => new THREE.TextureLoader().load(gaz), [gaz]);

    const position = useMemo(() => {
        return [random(-22, 22, true), 0, random(-25, 25, true)];
    }, []);

    // const positions = useMemo(() => {
    // let positions = []
    // for (let i = 0; i < pointCount; i++) {
    //     positions.push(5 - Math.random() * 1)
    //     positions.push(5 - Math.random() * 1)
    //     positions.push(5 - Math.random() * 1)
    // }
    // return [new Float32Array(positions)]
    // }, [pointCount])

    // for(let p=0; p<50; p++) {
    //     mesh.position.set(
    //         Math.random()*900 -400,
    //         500,
    //         Math.random()*500-500
    //     );
    // };

    useFrame(() =>{
        mesh.current.rotation.z -= 0.001;
        mesh.current.rotation.y -= 0.001;
    });

    return (
        <mesh ref={mesh}  position={position} rotation={[0, 0, Math.random()* 2 *Math.PI]}>
            <planeBufferGeometry attach='geometry' args={[9, 6]} />
            <meshLambertMaterial attach='material' map={anneau} side={THREE.DoubleSide} transparent opacity={[0.5]}/>
        </mesh>
    );
}

export default Cloud;