import { Pressable, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

export default function WaterButton({ amount, onPress, filled = true }) { // recibe información desde otra pantalla
    return (
        <Pressable
        style={[
            styles.button,
            filled ? styles.filledButton : styles.outlinedButton,
        ]}
        onPress={() => onPress(amount)} 
        >
        <Text
            style={[
            styles.buttonText,
            !filled && styles.outlinedText,
            ]}
        >
            + {amount} ml
        </Text>
        </Pressable>
    );
    }

    const styles = StyleSheet.create({
    button: {
        width: 145,
        height: 55,
        paddingVertical:18,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
    },

    filledButton: {
        backgroundColor: COLORS.primary,
    },

    outlinedButton: {
        backgroundColor: COLORS.white,
        borderWidth: 2,
        borderColor: COLORS.primary,
    },

    buttonText: {
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: 18,
    },

    outlinedText: {
        color: COLORS.primary,
    },
});