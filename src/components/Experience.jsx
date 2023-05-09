import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Shoe from "./Shoe";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls
        makeDefaul
        enableDamping={true}
      />

      <Environment files="./environment/studio_small_01_1k.hdr" />

      <ContactShadows opacity={0.85} blur={4.6} position={[0, -0.89, 0]} />

      <Shoe />
    </>
  );
}
