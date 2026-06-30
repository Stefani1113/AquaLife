import { createContext, useContext, useEffect, useState } from "react";
import { getWater, saveWater } from "../services/storageService";

const WaterContext = createContext();

export function WaterProvider({ children }) {

    const [water, setWater] = useState(1200);
    const [goal, setGoal] = useState(2000);

    useEffect(() => {
        loadWater();
    }, []);

    const loadWater = async () => {
        const value = await getWater();
        setWater(value);
    };

    const addWater = (amount) => {
        setWater((previous) => {
        const total = Math.min(previous + amount, goal);

        saveWater(total);

        return total;
        });
    };

    return (
        <WaterContext.Provider
        value={{
            water,
            goal,
            addWater,
            setGoal,
        }}
        >
        {children}
        </WaterContext.Provider>
    );
}

export const useWater = () => useContext(WaterContext);