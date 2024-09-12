import { View, Text } from "react-native";
import React from "react";

export default function FirstNumber({ firstNumber, result }) {
  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          className={`self-end font-extralight text-[#252525] ${
            result < 9999 ? "text-[96px]" : "text-[50px]"
          }`}
        >
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text className="text-[#747477] text-[96px] font-extralight self-end">{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text className="text-[#747477] text-[96px] font-extralight self-end">{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return <Text className="text-[#747477] text-[70px] font-extralight self-end">{firstNumber}</Text>;
    }
    if (firstNumber.length > 7) {
      return <Text className="text-[#747477] text-[50px] font-extralight self-end">{firstNumber}</Text>;
    }
  };

  return firstNumberDisplay();
}
