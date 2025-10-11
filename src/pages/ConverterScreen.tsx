import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DocumentPicker } from "../components/DocumentPicker";
import { IFile } from "../models/interfaces/IFile";

export const ConverterScreen = () => {
  const items = Array.from({ length: 12 }).map((_, i) => i + 1);
  const [wasSelected, setWasSelected] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState<IFile | null>(null);
  const handleSelectFile = (file:IFile) => {
    setSelectedFile(file);
    console.log('Selected file:', file);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* GRID */}
        <View style={styles.grid}>
          {items.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.item}
              onPress={(prop) => {
                
                setWasSelected(!wasSelected)}}
            >
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* BOTÃO */}
        <Text>{selectedFile?.name || 'No file selected'}</Text>
        <View style={styles.buttonContainer}>
          {wasSelected && (
           <DocumentPicker selectFile={handleSelectFile} />
          )}
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  grid: {
    flex: 5, // ocupa 50% da altura disponível
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  item: {
    width: "30%",
    aspectRatio: 1, // mantém quadrado
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
  buttonContainer: {
    flex: 3, // ocupa ~30% da altura disponível
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
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
});
