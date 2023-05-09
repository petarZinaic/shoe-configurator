import { useControls } from "leva";

function useShoeColor() {
  const colorOptions = {
    primary: { value: "white" },
    secoundary: { value: "red" },
  };

  const { primary, secoundary } = useControls(colorOptions);

  return { primary, secoundary };
}

export default useShoeColor;
