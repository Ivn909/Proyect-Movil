import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

// Definir los tipos de las propiedades del componente
type Boton1NProps = {
  onPress: () => void;
  children: React.ReactNode;
};

const Boton1N: React.FC<Boton1NProps> = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF7D36", // Fondo azul
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 80, // Esquinas redondeadas
    marginBottom: 20, // Separación entre botones
    width: "60%", // Botón más ancho
    alignItems: "center",
    justifyContent: "center", // Centra el contenido del botón
  } as ViewStyle,
  buttonText: {
    color: "#fff", // Texto color blanco
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "poppins-medium", // Aplica la tipografía Poppins
  } as TextStyle,
});

export default Boton1N;
