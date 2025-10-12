import { StyleSheet } from "react-native";
  


export const CreateConverterStyles = ( params: {
  width: number; height: number; orientation: "portrait" | "landscape" }) => {
  const { width, height, orientation } = params;
 const gridFlex = orientation === "portrait" ? 5 : 1; // mais espaço em portrait
  const buttonFlex = orientation === "portrait" ? 3 : 2;
  const itemSize = {
    width: orientation === "portrait" ? width / 5 - 20 : height / 5 - 20, 
    height: orientation === "portrait" ? width / 3 - 20 : height / 3 - 20,
  };

  // Ou calcular tamanhos relativos:
  const horizontalPadding = Math.min(2, width * 0.05);

  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#f2f2f2",
    },
    container: {
      flex: 1,
      alignItems: "center",
      paddingTop: 2,
      paddingHorizontal: horizontalPadding,
    },
    grid: {
      flex: gridFlex,
      width: "100%",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingTop: orientation === "portrait" ? 10 : 0,
      paddingHorizontal: orientation === "portrait" ? 5 : 0,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      backgroundColor: "#e6e6e6ff",
    },
    item: {
      width: orientation === "portrait" ? "30%" : "20%",
      aspectRatio: 1,
      backgroundColor: "#f8f8f8ff",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
      borderRadius: 8,
    },
    buttonContainer: {
      flex: buttonFlex,
      width: "100%",
      borderWidth: 1,
      borderColor: "#ccccccff",
      borderRadius: 8,
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    pressable: {
      backgroundColor: "#007BFF",
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    pressableText: {
      color: "#fff",
      fontWeight: "bold",
    },
    text: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: Math.max(14, Math.round(width * 0.045)), // exemplo responsivo
    },
    touchableItem: {
  flex: 1,                 // ocupa todo o espaço do pai
  justifyContent: "center", 
  alignItems: "center",
  width: "100%",            // garante largura total do pai
  height: "100%",           // garante altura total do pai
}

  });
};