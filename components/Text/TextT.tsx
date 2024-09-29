import React from "react";
import { Text as RNText, StyleSheet, TextStyle } from "react-native";

type TextTProps = {
  children: React.ReactNode;
  color?: string; // Permitir personalización de color
  fontSize?: number; // Permitir personalización de tamaño de fuente
  style?: TextStyle; // Para pasar estilos adicionales
};

const TextT: React.FC<TextTProps> = ({
  children,
  color = "#000",
  fontSize = 16,
  style,
}) => {
  return (
    <RNText style={[styles.text, { color, fontSize }, style]}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "poppins-bold", // Fuente 'Poppins Medium' desde App.tsx
  } as TextStyle,
});

export default TextT;
