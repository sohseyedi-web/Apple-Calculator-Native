import { StyleSheet, Text, View } from "react-native";
import { useCalculator } from "../../context/CalculatorProvider";

const ScreenAction = () => {

  const { getDisplayText } = useCalculator();

  return (
    <View style={styles.box}>
      <Text style={styles.text}>{getDisplayText()}</Text>
    </View>
  );
};

export default ScreenAction;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 25,
  },
  text: {
    color: "#fff",
    fontSize: 90,
  },
});
