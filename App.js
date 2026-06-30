import AppNavigator from "./src/navigation/AppNavigator";
import { WaterProvider } from "./src/context/WaterContext";

export default function App() {
  return (
    <WaterProvider>
      <AppNavigator />
    </WaterProvider>
  );
}