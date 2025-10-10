import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Pressable } from "react-native";

const numColumns = 3;
const screenHeight = Dimensions.get("window").height;
const gridHeight = screenHeight * 0.7;

export const ConverterScreen = () => {
  const items = Array.from({ length: 12 }).map((_, i) => i + 1);

  return (
    <View style={styles.container}>
      <View style={[styles.grid, { height: gridHeight }]}>
        {items.map((item) => (
          <TouchableOpacity key={item} style={styles.item}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Pressable style={styles.pressable} onPress={() => console.log("Pressed!")}>
        <Text>Press Me</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "90%", // largura do grid
  },
  item: {
    width: "30%",       // 3 itens por linha
    aspectRatio: 1,     // quadrado
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  pressable: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
});
