import React from "react";
import { Text as RNText, StyleSheet, TextStyle } from "react-native";

type TextProps = {
  children: React.ReactNode;
  color?: string; // Permitir personalización de color
  fontSize?: number; // Permitir personalización de tamaño de fuente
  style?: TextStyle; // Para pasar estilos adicionales
};

const Text: React.FC<TextProps> = ({
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
    fontFamily: "poppins-medium", // Fuente 'Poppins Medium' desde App.tsx
  } as TextStyle,
});

export default Text;
