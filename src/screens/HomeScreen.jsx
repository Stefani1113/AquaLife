import { SafeAreaView, View, StyleSheet, Text } from "react-native";

import COLORS from "../constants/colors";
import Header from "../components/Header";
import WaterButton from "../components/WaterButton";
import ProgressCircle from "../components/ProgressCircle";
import { useState, useEffect } from "react";
import { saveWater, getWater } from "../services/storageService";

/**
 * Pantalla principal donde el usuario visualiza
 * el progreso diario de hidratación.
 */
export default function HomeScreen() {

    const addWater = (amount) => {
    setWater((previousWater) => {
        const total = Math.min(previousWater + amount, goal);

        saveWater(total);

        return total;
    });
    };

    const [water, setWater] = useState(1200);

    // Meta diaria de hidratación
    const [goal, setGoal] = useState(2000);

    const loadWater = async () => {
        const storedWater = await getWater();
        setWater(storedWater);
    };

    // Estado que almacena la cantidad de agua consumida
    useEffect(() => { loadWater(); }, []);

    const percentage = Math.round((water / goal) * 100);

    return (
        <SafeAreaView style={styles.container}>

        <Header />

        {/* Aquí irá el círculo de progreso */}
        <ProgressCircle current={water} goal={goal}/>

        {/* Barra de progreso */}
        <View style={styles.progressBackground}>
        <View
            style={[styles.progressFill,
            { width: `${percentage}%` },
            ]}
        />
        </View>

        <Text style={styles.info}>
            {water} ml de {goal} ml
        </Text>

        <Text style={styles.percentage}>
                {percentage}%
        </Text>

        {/* Botones */}
        <View style={styles.buttonContainer}>
            <WaterButton
            amount={250}
            onPress={addWater}
            />

            <WaterButton
            amount={500}
            onPress={addWater}
            filled={false}
            />
        </View>

        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 25,
        paddingTop: 25,
    },

    progressBackground:{
        width:"100%",
        height:12,
        borderRadius:10,
        backgroundColor:COLORS.progressBackground,
        marginTop:25
    },

    progressFill:{
        width:"60%",
        height:12,
        borderRadius:10,
        backgroundColor:COLORS.primary
    },

    percentage: {
        marginTop: 8,
        textAlign: "right",
        color: COLORS.primary,
        fontWeight: "bold",
        fontSize: 16,
    },

    info: {
        marginTop: 10,
        textAlign: "center",
        color: COLORS.text,
        fontSize: 16,
    },

    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:35
    }
});