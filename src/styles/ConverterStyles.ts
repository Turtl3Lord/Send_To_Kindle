import { StyleSheet } from "react-native";
  


export const CreateConverterStyles = ( params: {
  width: number; height: number; orientation: "portrait" | "landscape" }) => {
  const { width, height, orientation } = params;
 const gridFlex = orientation === "portrait" ? 5 : 1; // mais espaço em portrait
  const buttonFlex = orientation === "portrait" ? 3 : 1;
 

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
      borderRadius: 8,
      paddingTop: orientation === "portrait" ? 10 : 0,
      paddingHorizontal: orientation === "portrait" ? 5 : 0,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
    },
    item: {
      width: orientation === "portrait" ? "30%" : "15%",
      aspectRatio: 1,
      backgroundColor: "#f8f8f8ff",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
      borderRadius: 8,
      marginHorizontal: orientation === "portrait" ? 5 : 10,
    },
    buttonsArea: {
      flex: buttonFlex,
      width: "100%",
      borderRadius: 8,
            backgroundColor: "#e6e6e6ff",

      padding: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonsContainer: {
      marginTop: 10,
      justifyContent: "center",
      height: "50%",
      width: "50%",
    },
    buttonStyle: {
      width: "100%",
      height: "40%",
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,

    },
    pressable: {
      backgroundColor: "#ff5e00ff",
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 5,
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
      width: "90%",
      height: "90%", // ocupa todo o espaço do pai
      justifyContent: "center",
      alignItems: "center",
      // garante altura total do pai
    },
    selectedItem: {
      borderWidth: 3,
      borderColor: "#007BFF",
      borderRadius: 8,
    },
  });
};