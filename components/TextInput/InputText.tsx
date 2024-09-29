import React from "react";
import { TextInput, StyleSheet, ViewStyle, TextStyle } from "react-native";

type InputTextProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  style?: object; // Permite pasar estilos
};

const InputText: React.FC<InputTextProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  style,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={[styles.input, style]} // Aplicar estilos fijos y adicionales
      placeholderTextColor="#AFAFAF" // Color gris claro
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 10,
    color: "#4E4E4E", // Color del texto
    fontFamily: "poppins-light", // Tipografía
    borderWidth: 1, // Ancho del borde
    borderColor: "#D3D3D3", // Color gris claro
  } as ViewStyle,
});

export default InputText;
