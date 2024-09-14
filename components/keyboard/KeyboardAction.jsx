import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import BtnAction from "./BtnAction";
import { useCalculator } from "../../context/CalculatorProvider";

const KeyboardAction = () => {
  const { width } = useWindowDimensions();
  const {clearLabel} = useCalculator()
  const btnWidth = width / 4 - 5;

  return (
    <View style={styles.keyboard}>
      <View style={styles.btnRow}>
        <BtnAction title={clearLabel} w={btnWidth} bg="#a5a5a5" textColor={"#000"} />
        <BtnAction title={"+/-"} w={btnWidth} bg="#a5a5a5" textColor={"#000"} />
        <BtnAction title={"%"} w={btnWidth} bg="#a5a5a5" textColor={"#000"} />
        <BtnAction title={"÷"} w={btnWidth} bg="#ff9f0c" />
      </View>
      <View style={styles.btnRow}>
        <BtnAction title={"7"} w={btnWidth} />
        <BtnAction title={"8"} w={btnWidth} />
        <BtnAction title={"9"} w={btnWidth} />
        <BtnAction title={"×"} w={btnWidth} bg="#ff9f0c" />
      </View>
      <View style={styles.btnRow}>
        <BtnAction title={"4"} w={btnWidth} />
        <BtnAction title={"5"} w={btnWidth} />
        <BtnAction title={"6"} w={btnWidth} />
        <BtnAction title={"-"} w={btnWidth} bg="#ff9f0c" />
      </View>
      <View style={styles.btnRow}>
        <BtnAction title={"1"} w={btnWidth} />
        <BtnAction title={"2"} w={btnWidth} />
        <BtnAction title={"3"} w={btnWidth} />
        <BtnAction title={"+"} w={btnWidth} bg="#ff9f0c" />
      </View>
      <View style={styles.btnRow}>
        <BtnAction title={"0"} zero={false} w={width / 2 - 10} h={btnWidth} />
        <BtnAction title={"."} w={btnWidth} />
        <BtnAction title={"="} w={btnWidth} bg="#ff9f0c" />
      </View>
    </View>
  );
};

export default KeyboardAction;

const styles = StyleSheet.create({
  keyboard: {
    paddingBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  btnRow: {
    flexDirection: "row",
  },
});
