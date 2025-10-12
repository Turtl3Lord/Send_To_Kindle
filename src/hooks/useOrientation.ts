import { useMemo } from "react";
import { useWindowDimensions } from "react-native";

export type Orientation = "portrait" | "landscape";

export function useOrientation() {
  const { width, height } = useWindowDimensions();

  const orientation: Orientation = useMemo(
    () => (height >= width ? "portrait" : "landscape"),
    [width, height]
  );

  return { width, height, orientation };
}
