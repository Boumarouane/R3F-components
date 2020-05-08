import React from 'react';

const Light = (color) => {
    color = '';
    return (
    <mesh>
        <ambientLight intensity={1} color={color}/>
        <pointLight intensity={1} position={[2, -5, 5]} color={color}/>
    </mesh>
    );
}

export default Light;