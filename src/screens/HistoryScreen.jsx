import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

export default function HistoryScreen() {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Historial</Text>

        <View style={styles.card}>
            <Text style={styles.label}>Consumo de hoy</Text>
            <Text style={styles.value}>1200 ml</Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.label}>Meta diaria</Text>
            <Text style={styles.value}>2000 ml</Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.label}>Progreso</Text>
            <Text style={styles.value}>60%</Text>
        </View>
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 25,
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: COLORS.primary,
        marginBottom: 30,
    },

    card: {
        backgroundColor: COLORS.white,
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
    },

    label: {
        color: COLORS.text,
        fontSize: 16,
    },

    value: {
        marginTop: 10,
        fontSize: 28,
        fontWeight: "bold",
        color: COLORS.primary,
    },
});