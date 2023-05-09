import React from "react";
import { useGLTF, Center } from "@react-three/drei";

export default function Shoe(props) {
  const { nodes, materials } = useGLTF("./models/nike-shoe-optimized.glb");

  return (
    <Center>
      <group {...props} dispose={null} scale={0.2}>
        <group rotation={[1.19, -0.09, 0.15]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_1.geometry}
            material={materials["material_1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_2.geometry}
            material={materials["material_2.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_3.geometry}
            material={materials["material_3.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_4.geometry}
            material={materials["material_4.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_5.geometry}
            material={materials["material_5.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_6.geometry}
            material={materials["material_6.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_7.geometry}
            material={materials["material_7.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_8.geometry}
            material={materials["material_8.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_9.geometry}
            material={materials["material_9.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_10.geometry}
            material={materials["material_10.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_11.geometry}
            material={materials["material_11.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_12.geometry}
            material={materials["material_12.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_13.geometry}
            material={materials["material_13.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_14.geometry}
            material={materials["material_14.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_15.geometry}
            material={materials["material_15.001"]}
          />
        </group>
      </group>
    </Center>
  );
}

useGLTF.preload("./models/nike-shoe-optimized.glb");
