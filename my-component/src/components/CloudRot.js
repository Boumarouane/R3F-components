import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { map } from "lodash";
import Cloud from "./Cloud";

const CloudRot =  () => {
const group = useRef();

// useFrame(() => {
//     group.current.rotation.y += 0.005;
// });

const nodesCubes = map(new Array(280), (el, i) => {
    return <Cloud key={i} />;
});

return <mesh ref={group}>
{nodesCubes}
</mesh>;
};

export default CloudRot;