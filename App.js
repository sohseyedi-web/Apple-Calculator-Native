import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import KeyboardAction from "./components/KeyboardAction";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-[#F1F2F3]">
      <StatusBar style="dark" />
      <KeyboardAction />
    </SafeAreaView>
  );
}
