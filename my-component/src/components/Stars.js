import React, {useRef, useMemo} from 'react';
import {useFrame} from 'react-three-fiber';

const Stars = ({ count = 2000 }) =>{

    const mesh = useRef();

    const positions = useMemo(() => {
    let positions = []
    for (let i = 0; i < count; i++) {
        const r = 300
        const theta = 2 * Math.PI * Math.random()
        const phi = Math.acos(2 * Math.random() - 1)
        const x = r * Math.cos(theta) * Math.sin(phi) + (-200 + Math.random() * 400)
        const y = r * Math.sin(theta) * Math.sin(phi) + (-200 + Math.random() * 400)
        const z = r * Math.cos(phi) + (-100 + Math.random() * 200)
        positions.push(x)
        positions.push(y)
        positions.push(z)
    }
    return new Float32Array(positions)
    }, [count])
    
    useFrame(() => {
        mesh.current.rotation.y += 0.00001;
    });

    return(
        <group>
            <points ref={mesh}>
                <bufferGeometry attach="geometry">
                    <bufferAttribute attachObject={['attributes', 'position']} count={positions.length / 3} array={positions} itemSize={3} />
                </bufferGeometry>
                <pointsMaterial attach="material" size={0.5} sizeAttenuation color="white" fog={false} />
            </points>
        </group>
    );
}

export default Stars;