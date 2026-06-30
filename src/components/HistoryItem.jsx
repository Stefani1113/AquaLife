import { View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

export default function HistoryItem({ time, amount }) {
    return (
        <View style={styles.item}>

            <View style={styles.left}>
                <View style={styles.dot} />
                <Text style={styles.time}>{time}</Text>
            </View>

            <Text style={styles.amount}>
                {amount} ml
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({

    item:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:18,
        borderBottomWidth:1,
        borderBottomColor:"#E6EEF8"
    },

    left:{
        flexDirection:"row",
        alignItems:"center"
    },

    dot:{
        width:10,
        height:10,
        borderRadius:5,
        backgroundColor:"#4A86F7",
        marginRight:15
    },

    time:{
        fontSize:18,
        color:COLORS.text
    },

    amount:{
        fontSize:18,
        fontWeight:"bold",
        color:COLORS.primary
    }

});