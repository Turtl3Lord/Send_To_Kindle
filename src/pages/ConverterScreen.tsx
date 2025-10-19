import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DocumentPicker } from "../components/DocumentPicker";
import { IFile } from "../models/interfaces/IFile";
import { useOrientation } from "../hooks/useOrientation";
import { CreateConverterStyles } from "../styles/ConverterStyles";



export const ConverterScreen = () => {
  const items = Array.from({ length: 3 }).map((_, i) => i + 1);
  const [layout, setLayout] = React.useState({ width: 0, height: 0 });
  const [wasSelected, setWasSelected] = React.useState(0);
  const [selectedFile, setSelectedFile] = React.useState<IFile | null>(null);
const options = [
  { id: 1, icon: require("../assets/converterIcons/mobi_to_epub.png") },
  { id: 2, icon: require("../assets/converterIcons/word_to_epub.png") },
  { id: 3, icon: require("../assets/converterIcons/txt_to_epub.png") },
];

  const clickedItem = (item: number) => {
    if (item === wasSelected) {
      setWasSelected(0);
      return;
    }
    setWasSelected(item);
  }
  const handleSelectFile = (file: IFile) => {
    setSelectedFile(file);
    console.log('Selected file:', file);
  }
  const { width, height } = useOrientation();

  const orientation = width > height ? "landscape" : "portrait";
  React.useEffect(() => {
    console.log("Orientation changed to:", orientation);
  }, [orientation]);


  const styles = React.useMemo(
    () => CreateConverterStyles({ width: layout.width, height: layout.height, orientation }),
    [layout.width, layout.height, orientation]
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>


        {/* GRID */}
        <View style={styles.grid}>
          {options.map(option => (
            <View key={option.id} style={styles.item}>
              
              <TouchableOpacity
                style={styles.touchableItem}
                onPress={() => clickedItem(option.id)}
              >
                <Image
  source={option.icon}
  style={{ width: "100%", height: "120%" }}
  resizeMode="contain"
/>

              </TouchableOpacity>
            </View>
          ))}



        </View>

        {/* BOTÃO */}
        <View style={styles.buttonContainer}>
          <Text>{selectedFile?.name || 'No file selected'}</Text>

          {wasSelected != 0 && (
            <DocumentPicker selectFile={handleSelectFile} />
          )}
        </View>

      </View>
    </SafeAreaView>
  );
};

