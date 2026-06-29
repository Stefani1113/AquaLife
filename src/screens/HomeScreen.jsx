import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

/**
 * Pantalla principal
 * @returns 
 */
export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}> 
        <View style={styles.header}>

            <Text style={styles.greeting}>
            ¡Bienvenido a, AquaLife!
            </Text>

            <Text style={styles.date}>
            Hoy, jueves
            </Text>

        </View>

        <Text style={styles.title}>
            Tu hidratación
        </Text>

        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:COLORS.background,
        paddingHorizontal:25,
        paddingTop:20
    },

    header:{
        marginBottom:30
    },

    greeting:{
        fontSize:24,
        fontWeight:"700",
        color:COLORS.primary
    },

    date:{
        marginTop:5,
        color:COLORS.text,
        fontSize:15
    },

    title:{
        fontSize:34,
        fontWeight:"bold",
        color:COLORS.title
    }
});