import AsyncStorage from "@react-native-async-storage/async-storage";

const WATER_KEY = "@water";

export async function saveWater(value) {
    try {
        await AsyncStorage.setItem(WATER_KEY, JSON.stringify(value));
    } catch (error) {
        console.log("Error guardando el agua:", error);
    }
    }

    export async function getWater() {
    try {
        const data = await AsyncStorage.getItem(WATER_KEY);

        return data ? JSON.parse(data) : 1200;
    } catch (error) {
        console.log("Error leyendo el agua:", error);
        return 1200;
    }
}