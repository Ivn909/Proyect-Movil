import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import Inicio from "./components/Screens/Inicio";
import Account from "./components/Screens/Account";
import LogIn from "./components/Screens/LogIn";
import SignUp from "./components/Screens/SignUp";
import Courses from "./components/Screens/Courses";

const navegador = createStackNavigator();

// Función para cargar las fuentes
const loadFonts = async () => {
  await Font.loadAsync({
    "poppins-medium": require("./fonts/Poppins-Medium.ttf"),
    "poppins-light": require("./fonts/Poppins-Light.ttf"),
    "poppins-lightitalic": require("./fonts/Poppins-LightItalic.ttf"),
    "poppins-bold": require("./fonts/Poppins-Bold.ttf"), // Asegúrate de que este archivo exista
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null; // Muestra algo mientras se cargan las fuentes
  }

  return (
    <NavigationContainer>
      <navegador.Navigator>
        <navegador.Screen name="Inicio" component={Inicio} />
        <navegador.Screen name="LogIn" component={LogIn} />
        <navegador.Screen name="SignUp" component={SignUp} />
        <navegador.Screen name="Courses" component={Courses} />
        <navegador.Screen name="Account" component={Account} />
      </navegador.Navigator>
    </NavigationContainer>
  );
}
