import { useMemo } from "react";

function useShoeMaterials({ nodeMaterials }) {
  console.log(nodeMaterials)

  return {
    primaryMaterial: "primaryMaterial",
    secoundaryMaterial: "secoundaryMaterial",
  };
}

export default useShoeMaterials;
