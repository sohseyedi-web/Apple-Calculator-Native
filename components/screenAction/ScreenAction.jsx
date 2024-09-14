import { StyleSheet, Text, View } from "react-native";
import { useCalculator } from "../../context/CalculatorProvider";

const ScreenAction = () => {
  const { getDisplayText, operator } = useCalculator();

  return (
    <View style={styles.box}>
      <Text style={styles.operator}>{operator}</Text>
      <Text style={styles.text}>{getDisplayText()}</Text>
    </View>
  );
};

export default ScreenAction;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 25,
  },
  text: {
    color: "#fff",
    fontSize: 90,
  },
  operator: {
    color: "#fff",
    fontSize: 40,
  },
});
