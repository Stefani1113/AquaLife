import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import HistoryScreen from "../screens/HistoryScreen";
import SettingsScreen from "../screens/SettingsScreen";

/**
 * Se crea el navegador inferior
 */
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer> // administra las rutas de la aplicación
        <Tab.Navigator // menu inferior de la aplicacion
            screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: "#1565C0",
            tabBarInactiveTintColor: "gray",

            tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === "Inicio") {
                iconName = "home";
                } else if (route.name === "Historial") {
                iconName = "time";
                } else if (route.name === "Configuración") {
                iconName = "settings";
                }

                return (
                <Ionicons
                    name={iconName}
                    size={size}
                    color={color}
                />
                );
            },
            })}
        >
            <Tab.Screen // plantilla Inicio 
            name="Inicio"
            component={HomeScreen}
            />

            <Tab.Screen // plantilla Historial 
            name="Historial"
            component={HistoryScreen}
            />

            <Tab.Screen // plantilla configuración
            name="Configuración"
            component={SettingsScreen}
            />
        </Tab.Navigator>
        </NavigationContainer>
    );
}