import { View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

/**
 * Componente que se encraga del encabezado
 * @returns 
 */
export default function Header() {
    const today = new Date().toLocaleDateString("es-CO", {
        weekday: "long",
    });

    return (
        <View style={styles.container}>
        <Text style={styles.greeting}>
            ¡Bienvenido a AquaLife!
        </Text>

        <Text style={styles.date}>
            Hoy, {today}
        </Text>

        <Text style={styles.title}>
            Tu hidratación
        </Text>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },

    greeting: {
        color: COLORS.primary,
        fontSize: 24,
        fontWeight: "bold",
    },

    date: {
        marginTop: 6,
        color: COLORS.text,
        fontSize: 15,
    },

    title: {
        marginTop: 28,
        fontSize: 38,
        fontWeight: "bold",
        color: COLORS.title,
    },
});