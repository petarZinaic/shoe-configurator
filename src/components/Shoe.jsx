import { useGLTF, Center } from "@react-three/drei";
import { useControls } from "leva";

export default function Shoe(props) {
  const { nodes, materials } = useGLTF("./models/nike-shoe-optimized.glb");

  const { primaryColor, secoundaryColor } = useControls({
    primaryColor: { value: "white" },
    secoundaryColor: { value: "red" },
  });

  const nodeMaterials = {
    primary: materials["material_1.001"],
    secoundary: materials["material_2.001"],
  };

  nodeMaterials.primary.color.set(primaryColor);
  nodeMaterials.secoundary.color.set(secoundaryColor);

  return (
    <Center>
      <group {...props} dispose={null} scale={0.2}>
        <group rotation={[1.19, -0.09, 0.15]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_1.geometry}
            material={nodeMaterials.primary}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_2.geometry}
            material={nodeMaterials.primary}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_3.geometry}
            material={nodeMaterials.primary}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_4.geometry}
            material={nodeMaterials.primary}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_5.geometry}
            material={nodeMaterials.secoundary}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_6.geometry}
            material={nodeMaterials.primary}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_7.geometry}
            material={nodeMaterials.primary}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_8.geometry}
            material={nodeMaterials.primary}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_9.geometry}
            material={nodeMaterials.primary}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_10.geometry}
            material={nodeMaterials.primary}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_11.geometry}
            material={nodeMaterials.primary}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_12.geometry}
            material={nodeMaterials.primary}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_13.geometry}
            material={nodeMaterials.primary}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_14.geometry}
            material={nodeMaterials.primary}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Superstar001_15.geometry}
            material={nodeMaterials.primary}
          />
        </group>
      </group>
    </Center>
  );
}

useGLTF.preload("./models/nike-shoe-optimized.glb");
