import { SafeAreaView, View, Text, StyleSheet } from "react-native";

import COLORS from "../constants/colors";
import Header from "../components/Header";
import HistoryItem from "../components/HistoryItem";

export default function HistoryScreen() {

    const history = [
        { id:1, time:"08:15", amount:250 },
        { id:2, time:"10:30", amount:500 },
        { id:3, time:"13:20", amount:250 },
        { id:4, time:"16:10", amount:500 },
        { id:5, time:"18:30", amount:250 },
    ];

    return (

        <SafeAreaView style={styles.container}>

            <Header />

            <View style={styles.card}>

                <Text style={styles.subtitle}>
                    REGISTRO DEL DÍA
                </Text>

                {
                    history.map((item)=>(
                        <HistoryItem
                            key={item.id}
                            time={item.time}
                            amount={item.amount}
                        />
                    ))
                }

            </View>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:COLORS.background,
        paddingHorizontal:28,
        paddingTop:35
    },

    title:{
        fontSize:34,
        fontWeight:"bold",
        color:COLORS.primary,
        marginBottom:25
    },

    card:{
        backgroundColor:"white",
        borderRadius:35,
        padding:25,

        shadowColor:"#000",
        shadowOpacity:0.05,
        shadowRadius:10,
        elevation:3
    },

    subtitle:{
        color:"#89A4C5",
        fontWeight:"bold",
        fontSize:18,
        marginBottom:10
    }

});