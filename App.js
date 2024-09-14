import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenAction from "./components/screenAction/ScreenAction";
import KeyboardAction from "./components/keyboard/KeyboardAction";
import { CalculatorProvider } from "./context/CalculatorProvider";

export default function App() {
  return (
    <CalculatorProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <ScreenAction />
        <KeyboardAction />
      </SafeAreaView>
    </CalculatorProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
