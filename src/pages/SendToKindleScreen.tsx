import { StyleSheet, Text, View } from "react-native";



export const SendToKindleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à SendToKindleScreen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

