import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenAction from "./components/screenAction/ScreenAction";
import KeyboardAction from "./components/keyboard/KeyboardAction";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScreenAction />
      <KeyboardAction />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
