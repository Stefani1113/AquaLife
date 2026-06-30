import { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Pressable, StyleSheet, Alert, } from "react-native";

import COLORS from "../constants/colors";
import Header from "../components/Header";
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
        <Header />

        <Text style={styles.user}>
            Usuario
        </Text>

        <View style={styles.card}>
    
        <Text style={styles.title}>
            Configuración
        </Text>

        <Text style={styles.label}>
            META DIARIA
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

        </View>

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
        color:"#6E87A5",
        fontWeight:"bold",
        fontSize:16,
        marginBottom:20
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
    },

    card:{
        backgroundColor:"#DCEAF8",
        borderRadius:25,
        padding:25,
        marginTop:20
    },

    user:{
        marginTop: 2,
        color: COLORS.text,
        fontSize: 15,
    }
});