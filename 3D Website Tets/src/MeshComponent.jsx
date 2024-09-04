// MeshComponent.jsx
import React from 'react';
import { MeshStandardMaterial, DoubleSide } from 'three';

const MeshComponent = ({ geometry, position, rotation, scale, texture }) => {
  const material = new MeshStandardMaterial({
    map: texture,
    side: DoubleSide,
  });

  return (
    <mesh geometry={geometry} material={material} position={position} rotation={rotation} scale={scale} />
  );
};

export default MeshComponent;