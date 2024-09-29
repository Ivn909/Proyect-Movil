import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Text,
} from "react-native";
import InputText from "./TextInput/InputText"; // Asegúrate de que la ruta sea correcta
import Boton1N from "./Botons/Boton1N"; // Asegúrate de que la ruta sea correcta
import CustomTabBar from "./navigation/CustomTabBar";

const SignUp: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* KeyboardAvoidingView solo rodea el contenido que puede verse afectado por el teclado */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <Image
          source={require("../assets/CircleB.png")} // Asegúrate de que la ruta sea correcta
          style={styles.circleImage}
          resizeMode="contain"
        />

        <Image
          source={require("../assets/Logo.png")} // Asegúrate de que la ruta sea correcta
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Expande tus conocimientos</Text>

        <View style={styles.inputContainer}>
          <InputText
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            style={styles.inputEmail} // Ancho para 30 caracteres
          />
          <InputText
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.inputPassword} // Ancho para 10 caracteres
          />
        </View>

        <Boton1N onPress={() => navigation.navigate("Courses")}>
          Iniciar sesión
        </Boton1N>
      </KeyboardAvoidingView>

      {/* CustomTabBar separado del KeyboardAvoidingView para que no sea afectado */}
      <View style={styles.tabBarContainer}>
        <CustomTabBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef0f8", // Color de fondo
  },
  logo: {
    width: 150, // Ajusta el tamaño según lo que necesites
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "poppins-light", // Aplica la tipografía Poppins Light
    textAlign: "center",
  },
  inputContainer: {
    width: "80%", // Ancho mediano
    marginBottom: 20,
    alignItems: "center", // Centra las entradas de texto
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputEmail: {
    width: 300, // Ajuste para 30 caracteres (promedio)
    marginBottom: 10, // Espaciado entre entradas
  },
  inputPassword: {
    width: 300, // Ajuste para 10 caracteres (promedio)
  },
  circleImage: {
    position: "absolute", // Asegura que la imagen esté sobre los demás componentes
    top: "30%", // Ajusta según sea necesario para centrar
    left: "10%", // Ajusta según sea necesario para centrar
    width: 600, // Tamaño ajustable, cámbialo según lo necesites
    height: 600, // Tamaño ajustable
    marginLeft: -150, // Para centrar horizontalmente
    marginTop: -150, // Para centrar verticalmente
  },
  tabBarContainer: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
});

export default SignUp;
