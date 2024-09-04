import React, { useEffect } from 'react';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import { TextureLoader, DoubleSide, MeshStandardMaterial } from 'three';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/model.glb');
  const textureLoader = new TextureLoader();
  const mountainTexture = textureLoader.load('/textures/mountain.jpg'); // Ensure this path is correct

  useEffect(() => {
    // Apply DoubleSide to all materials
    Object.values(materials).forEach(material => {
      material.side = DoubleSide;
    });

    // Specifically for walls, if you know their names
    if (nodes.Cube) {  // Assuming 'Cube' is your wall
      nodes.Cube.material = new MeshStandardMaterial({
        ...nodes.Cube.material,
        side: DoubleSide,
      });
    }
  }, [nodes, materials]);

  return (
    <group {...props} dispose={null}>
      {/* Background Plane */}
      <mesh position={[-100, 5, 0]} rotation={[0, Math.PI/2, 0]} scale={[20, 10, 10]}>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial map={mountainTexture} side={DoubleSide} />
      </mesh>

      {/* Your existing model components */}
      <group position={[-0.062, 0.956, 2.503]} rotation={[Math.PI / 2, 0, -Math.PI]}>
        <mesh geometry={nodes.Pillow_01004.geometry} 
              material={nodes.Pillow_01004.material} 
              position={[0.117, 0.261, 0.321]} 
              rotation={[2.9, -0.058, -3.033]} />
        <mesh geometry={nodes.Pillow_01008.geometry} material={nodes.Pillow_01008.material} position={[-0.835, 0.299, 0.349]} rotation={[2.895, -0.029, 3.134]} />
      </group>
      <group position={[-1.022, 0.956, 2.014]} rotation={[Math.PI / 2, 0, -1.602]}>
        <mesh geometry={nodes.Pillow_01007.geometry} material={nodes.Pillow_01007.material} position={[0.189, 0.238, 0.323]} rotation={[2.84, -0.021, 3.028]} />
      </group>
      <PerspectiveCamera makeDefault={true} far={1000} near={0.1} fov={100} 
                         position={[1.9, 1.4, 0]} 
                         rotation={[-1.576, 1.439, 1.576]} />

      <pointLight intensity={0.1} decay={2} 
                  position={[1.808, 2.998, 0.385]} 
                  rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[-0.022, 1.498, 0.003]} scale={[0.7, 0.6, 1]} />
      <mesh geometry={nodes.sofa001.geometry} material={nodes.sofa001.material} position={[0.449, 0.049, -0.177]} rotation={[-3.141, -0.006, -3.139]} scale={[0.301, 0.693, 0.534]} />
      <mesh geometry={nodes.bed_frame.geometry} material={nodes.bed_frame.material} position={[-0.6, 0.42, -0.091]} rotation={[0, Math.PI / 2, 0]} scale={[0.858, 1, 0.63]} />
      <mesh geometry={nodes['10057_wooden_door_v3_iterations-2'].geometry} material={nodes['10057_wooden_door_v3_iterations-2'].material} position={[3.085, 0, 2.452]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.01, 0.009, 0.009]} />
      <mesh geometry={nodes.Modern_Closet.geometry} material={nodes.Modern_Closet.material} position={[3.096, 0.02, -2.143]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.015, 0.018]} />
      <mesh geometry={nodes.Storage_rack.geometry} material={nodes.Storage_rack.material} position={[0.534, 0.848, -2.075]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.005, 0.003, 0.007]} />
      <mesh geometry={nodes.Radiateur.geometry} material={nodes.Radiateur.material} position={[-1.76, 0.918, -1.372]} rotation={[-1.567, 0, -Math.PI / 2]} scale={[0.026, 0.015, 0.012]} />
      <mesh geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} position={[-1.571, 1.067, -0.047]} scale={[-0.078, -0.005, -0.575]} />
      <mesh geometry={nodes.window.geometry} material={nodes.window.material} position={[-1.773, 2.126, 0.989]} rotation={[Math.PI / 2, 0, 0]} scale={[0.02, 0.02, 0.021]} />
      <mesh geometry={nodes.window001.geometry} material={nodes.window001.material} position={[-1.773, 2.126, -0.005]} rotation={[Math.PI / 2, 0, 0]} scale={[0.02, 0.027, 0.021]} />
      <mesh geometry={nodes.window002.geometry} material={nodes.window002.material} position={[-1.773, 2.126, -1.013]} rotation={[Math.PI / 2, 0, 0]} scale={[0.02, 0.02, 0.021]} />
      <mesh geometry={nodes.Desk_Plane005.geometry} material={nodes.Desk_Plane005.material} position={[1.895, -0.018, -1.939]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-0.148, -0.144, -0.194]} />
      <mesh geometry={nodes.TumbaObj.geometry} material={nodes.TumbaObj.material} position={[3.427, 0.366, 0.352]} rotation={[-Math.PI / 2, 0, 0]} scale={[-0.056, -0.073, -0.076]} />
      <mesh geometry={nodes.Amazon_Basics_9_Pair_Shoe_Rack_Organizer_2014.geometry} material={nodes.Amazon_Basics_9_Pair_Shoe_Rack_Organizer_2014.material} position={[1.89, -0.001, 2.178]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.001} />
      <mesh geometry={nodes.Cube004.geometry} material={nodes.Cube004.material} position={[1.892, 0.744, 2.182]} scale={[-0.177, -0.001, -0.098]} />
      <mesh geometry={nodes.Reflection_Sky_Floor_Sphere.geometry} material={nodes.Reflection_Sky_Floor_Sphere.material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Reflection_Sky_Sphere.geometry} material={nodes.Reflection_Sky_Sphere.material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Cube005.geometry} material={nodes.Cube005.material} position={[1.211, -0.02, 0.095]} rotation={[0, Math.PI / 2, 0]} scale={[-1.162, -0.01, -1.24]} />
      <mesh geometry={nodes.Cube006.geometry} material={nodes.Cube006.material} position={[1.079, 0.047, -0.05]} rotation={[-Math.PI, 1.564, -Math.PI]} scale={[0.567, 0.003, 0.391]} />
      <mesh geometry={nodes.merces.geometry} material={nodes.merces.material} position={[1.813, 1.197, -2.478]} rotation={[Math.PI / 2, 0, 0]} scale={0.657} />
      <mesh geometry={nodes.Rectangle001.geometry} material={nodes.Rectangle001.material} position={[0.022, 0.194, 0.427]} rotation={[0, 0, -Math.PI / 2]} scale={[-0.133, -0.103, -0.798]} />
      <mesh geometry={nodes.Rectangle002.geometry} material={nodes.Rectangle002.material} position={[0.022, 0.194, -0.761]} rotation={[0, 0, -Math.PI / 2]} scale={[-0.13, -0.102, -0.783]} />
      <mesh geometry={nodes.clothes_rack_with_hangers_obj.geometry} material={nodes.clothes_rack_with_hangers_obj.material} position={[3.117, 0.08, -0.145]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.001} />
      <mesh geometry={nodes.Plane006.geometry} material={nodes.Plane006.material} position={[-0.575, 0.982, -0.402]} scale={[0.886, 1, 1.338]} />
      <mesh geometry={nodes['07_botao_2'].geometry} material={nodes['07_botao_2'].material} position={[0.031, 0.003, 0.037]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={nodes['06_Botao_1'].geometry} material={nodes['06_Botao_1'].material} position={[0.047, 0.003, 0.037]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={nodes['05Vidro_lente'].geometry} material={nodes['05Vidro_lente'].material} position={[0.064, 0.001, 0.026]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={nodes['04mascara_lente'].geometry} material={nodes['04mascara_lente'].material} position={[0.064, 0.001, 0.026]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.Leaf.geometry} material={nodes.Leaf.material} position={[0.002, 0, 0.021]} />
      <OrbitControls enableZoom={true} minDistance={1} maxDistance={2.5} />
    </group>
  );
}

useGLTF.preload('/model.glb');