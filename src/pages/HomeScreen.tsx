import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Bem-vindo à HomeScreen!</Text>
      <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed, // aplica o estilo quando pressionado
      ]}
      onPress={() => console.log("Botão clicado!")}
    >
        <Text>Pressione-me</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,               // ocupa toda a tela
    justifyContent: "center", // centraliza verticalmente
    alignItems: "center",     // centraliza horizontalmente
    backgroundColor: "#f2f2f2",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    borderBlockColor: "#007BFF",
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    borderRadius: 5,

  },
  buttonPressed: {
    backgroundColor: "#007BFF",
    color: "#fff",
  },
});
