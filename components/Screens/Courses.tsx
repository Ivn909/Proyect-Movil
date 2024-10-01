import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Text from "../Text/Text"; // Tu componente reutilizable de texto
import CustomTabBar from "../navigation/CustomTabBar"; // El componente de barra inferior
import TextT from "../Text/TextT";
import MenuFormat from "../MenuFormats/MenuFormat"; // Importa el componente MenuFormat

const Courses: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Contenedor para los textos */}
      <View style={styles.textContainer}>
        <TextT fontSize={24} color="#FF7D36" style={styles.headerText}>
          Elige tu licenciatura
        </TextT>
        <Text fontSize={16} color="#4E4E4E" style={styles.subHeaderText}>
          Selecciona tu área de estudio
        </Text>
      </View>

      {/* Contenedor para los componentes MenuFormat en 2 columnas y 3 filas */}
      <View style={styles.menuContainer}>
        <MenuFormat
          imageSource={require("../../assets/medicina.png")} // Cambia la ruta por la correcta
          buttonText="Medicina"
          onPress={() => console.log("Medicina")}
        />
        <MenuFormat
          imageSource={require("../../assets/ingeniería.png")} // Cambia la ruta por la correcta
          buttonText="Ingeniería"
          onPress={() => console.log("Ingeniería")}
        />
        <MenuFormat
          imageSource={require("../../assets/negocios.png")} // Cambia la ruta por la correcta
          buttonText="Negocios"
          onPress={() => console.log("Negocios")}
        />
        <MenuFormat
          imageSource={require("../../assets/diseño.png")} // Cambia la ruta por la correcta
          buttonText="Diseño"
          onPress={() => console.log("Diseño")}
        />
        <MenuFormat
          imageSource={require("../../assets/mercadotecnia.png")} // Cambia la ruta por la correcta
          buttonText="Marketing"
          onPress={() => console.log("Mercadotecnia")}
        />
        <MenuFormat
          imageSource={require("../../assets/arquitectura.png")} // Cambia la ruta por la correcta
          buttonText="Arquitectura"
          onPress={() => console.log("Arquitectura")}
        />
      </View>

      {/* Barra personalizada */}
      <CustomTabBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Fondo blanco
    justifyContent: "space-between", // Distribuye el espacio
  },
  textContainer: {
    marginTop: 20,
    alignItems: "flex-start", // Alinea los textos a la izquierda
    paddingLeft: 20, // Espacio desde la izquierda
  },
  headerText: {
    marginBottom: 1, // Espacio entre los dos textos
  },
  subHeaderText: {
    marginBottom: 20, // Espacio después del segundo texto
  },
  menuContainer: {
    flexDirection: "row", // Alinea los hijos en fila
    flexWrap: "wrap", // Permite que los hijos se ajusten a la siguiente fila
    justifyContent: "space-between", // Distribuye el espacio entre elementos
    padding: 20, // Espacio alrededor del contenedor de menús
  },
});

export default Courses;
