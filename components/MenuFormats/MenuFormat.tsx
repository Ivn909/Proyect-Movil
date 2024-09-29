// MenuFormat.tsx
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Boton3B from "../Botons/Boton3B";

// Definir los tipos de las propiedades del componente
type MenuFormatProps = {
  imageSource: any; // Fuente de la imagen
  buttonText: string; // Texto del botón
  onPress: () => void; // Función a ejecutar al presionar el botón
};

const MenuFormat: React.FC<MenuFormatProps> = ({
  imageSource,
  buttonText,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Boton3B onPress={onPress}>{buttonText}</Boton3B>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Centra horizontalmente
    marginVertical: 20, // Espaciado vertical
  },
  image: {
    width: 75, // Tamaño de la imagen
    height: 75, // Tamaño de la imagen
    marginBottom: 10, // Espacio entre la imagen y el botón
  },
});

export default MenuFormat;
