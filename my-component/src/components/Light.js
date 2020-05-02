import React from 'react';

const Light = () => {
    return (
    <mesh>
        <ambientLight intensity={1} color={0xf70b0b}/>
        <pointLight intensity={2} position={[2, -5, 5]} color={0x38b6ff}/>
    </mesh>
    );
}

export default Light;