import { View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

/**
 * Componente que muestra el progreso diario de hidratación.
 */
export default function ProgressCircle({
    current = 1200,
    goal = 2000,
    }) {
    return (
        <View style={styles.circle}>

        <Text style={styles.current}>
            {current}
        </Text>

        <Text style={styles.goal}>
            de {goal} ml
        </Text>

        </View>
    );
    }

    const styles = StyleSheet.create({

    circle:{
        width:200,
        height:200,
        maginTop: 15,
        borderRadius:100,
        backgroundColor:COLORS.white,

        justifyContent:"center",
        alignItems:"center",

        alignSelf:"center",

        shadowColor:"#000",
        shadowOpacity:0.08,
        shadowRadius:10,
        elevation:5
    },

    current:{
        fontSize:52,
        fontWeight:"bold",
        color:COLORS.primary
    },

    goal:{
        marginTop:5,
        fontSize:22,
        color:COLORS.text
    }

});