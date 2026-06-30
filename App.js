import { View, StyleSheet } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { WaterProvider } from "./src/context/WaterContext";

export default function App() {
  return (
    <WaterProvider>
      <View style={styles.container}>
        <View style={styles.phone}>
          <AppNavigator />
        </View>
      </View>
    </WaterProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECEFF1",
    justifyContent: "center",
    alignItems: "center",
  },

  phone: {
    width: 390,
    height: 844,
    backgroundColor: "#EDF5FF",
    borderRadius: 30,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
});