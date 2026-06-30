import { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Pressable, StyleSheet, Alert, } from "react-native";

import COLORS from "../constants/colors";
import { useWater } from "../context/WaterContext";

export default function SettingsScreen() {

    const { goal, setGoal } = useWater();

    const [newGoal, setNewGoal] = useState(goal.toString());

    const saveGoal = () => {

        const value = Number(newGoal);
        console.log(value);

        if (value < 500) {
        Alert.alert("Error", "La meta mínima es 500 ml.");
        return;
        }

        setGoal(value);

        console.log("Meta guardada");
    };

    return (
        <SafeAreaView style={styles.container}>

        <Text style={styles.title}>
            Configuración
        </Text>

        <Text style={styles.label}>
            Meta diaria (ml)
        </Text>

        <TextInput
            value={newGoal}
            onChangeText={setNewGoal}
            keyboardType="numeric"
            style={styles.input}
        />

        <Pressable
            style={styles.button}
            onPress={saveGoal}
        >
            <Text style={styles.buttonText}>
            Guardar meta
            </Text>
        </Pressable>

        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:COLORS.background,
        padding:25
    },

    title:{
        fontSize:34,
        fontWeight:"bold",
        color:COLORS.primary,
        marginBottom:40
    },

    label:{
        fontSize:18,
        color:COLORS.text,
        marginBottom:10
    },

    input:{
        backgroundColor:COLORS.white,
        borderRadius:12,
        padding:15,
        fontSize:20,
        marginBottom:30
    },

    button:{
        backgroundColor:COLORS.primary,
        padding:18,
        borderRadius:15,
        alignItems:"center"
    },

    buttonText:{
        color:"white",
        fontWeight:"bold",
        fontSize:18
    }
});