import { StyleSheet, Text, View } from "react-native";
import { useCalculator } from "../../context/CalculatorProvider";
import numberWithCommas from "../../utils/comma";
import { getDynamicTextSize } from "../../utils/dynamicFontSize";

const ScreenAction = () => {
  const { expression, result } = useCalculator();

  return (
    <View style={styles.box}>
      <Text style={styles.operator}>{expression}</Text>
      <Text style={{color : "#fff" , fontSize:getDynamicTextSize(result)}}>{numberWithCommas(result)}</Text>
    </View>
  );
};

export default ScreenAction;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent:"flex-end",
    paddingHorizontal: 25,
  },
  
  operator: {
    color: "#eee",
    fontSize:16,
  },
});
