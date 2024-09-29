import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Boton1N from "./Botons/Boton1N"; // Texto blanco
import Boton2B from "./Botons/Boton2B"; // Texto azul

interface InicioProps {
  navigation: any;
}

const Inicio: React.FC<InicioProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagen del círculo */}
      <Image
        source={require("../assets/CircleB.png")} // Asegúrate de que la ruta sea correcta
        style={styles.circleImage}
        resizeMode="contain"
      />
      <Image
        source={require("../assets/Logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Expande tus conocimientos</Text>
      {/* Botón de Iniciar sesión usando Boton1N (Texto Blanco) */}
      <Boton1N onPress={() => navigation.navigate("LogIn")}>
        Iniciar sesión
      </Boton1N>
      {/* Botón de Crear cuenta usando Boton2B (Texto Azul) */}
      <Boton2B onPress={() => navigation.navigate("SignUp")}>
        Crear cuenta
      </Boton2B>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef0f8", // Color de fondo
  },
  title: {
    fontSize: 22,
    marginBottom: 30,
    fontFamily: "poppins-light", // Aplica la tipografía Poppins Light
  },
  image: {
    width: 220,
    height: 220,
    marginTop: 5,
  },
  circleImage: {
    position: "absolute", // Asegura que la imagen esté sobre los demás componentes
    top: "35%", // Ajusta según sea necesario para centrar
    left: "20%", // Ajusta según sea necesario para centrar
    width: 520, // Tamaño ajustable, cámbialo según lo necesites
    height: 520, // Tamaño ajustable
    marginLeft: -150, // Para centrar horizontalmente
    marginTop: -150, // Para centrar verticalmente
  },
});

export default Inicio;
