import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

// Definir los tipos de las propiedades del componente
type Boton2BProps = {
  onPress: () => void;
  children: React.ReactNode;
};

const Boton2B: React.FC<Boton2BProps> = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff", // Fondo blanco
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 80, // Esquinas redondeadas
    marginBottom: 20, // Separación entre botones
    width: "60%", // Botón más ancho
    alignItems: "center",
    justifyContent: "center", // Centra el contenido del botón
    borderWidth: 2, // Ancho del borde
    borderColor: "#456DFF", // Borde azul
  } as ViewStyle,
  buttonText: {
    color: "#456DFF", // Texto color azul
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "poppins-medium", // Aplica la tipografía Poppins
  } as TextStyle,
});

export default Boton2B;
