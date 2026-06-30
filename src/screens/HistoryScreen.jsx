import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useWater } from "../context/WaterContext";
import COLORS from "../constants/colors";

export default function HistoryScreen() {

    const { water, goal } = useWater();
    const percentage = Math.round((water / goal) * 100);

    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Historial</Text>

        <View style={styles.card}>
            <Text style={styles.label}>Consumo de hoy</Text>
            <Text style={styles.value}>{water} ml</Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.label}>Meta diaria</Text>
            <Text style={styles.value}>{goal} ml</Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.label}>Progreso</Text>
            <Text style={styles.value}>{percentage}%</Text>
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