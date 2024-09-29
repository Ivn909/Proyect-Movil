import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Courses: undefined;
  Account: undefined;
};

const CustomTabBar: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute(); // Obtiene la información sobre la ruta actual

  // Verificamos qué pantalla está activa
  const isCoursesActive = route.name === "Courses";
  const isAccountActive = route.name === "Account";

  return (
    <View style={styles.container}>
      {/* Botón de Asignaturas */}
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate("Courses")}
      >
        <Image
          source={
            isCoursesActive
              ? require("../../assets/AsignaturesA.png") // Icono activo
              : require("../../assets/Asignatures.png") // Icono inactivo
          }
          style={styles.icon}
        />
        <Text style={styles.label}>Asignaturas</Text>
      </TouchableOpacity>

      {/* Botón de Cuenta */}
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate("Account")}
      >
        <Image
          source={
            isAccountActive
              ? require("../../assets/UserA.png") // Icono activo
              : require("../../assets/User.png") // Icono inactivo
          }
          style={styles.icon}
        />
        <Text style={styles.label}>Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  tabButton: {
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: "poppins-light", // Aplica la tipografía Poppins Light
  },
});

export default CustomTabBar;
