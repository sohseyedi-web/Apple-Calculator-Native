import { View, Text } from "react-native";
import { useState } from "react";
import BtnAction from "./BtnAction";
import FirstNumber from "./FirstNumber";

export default function KeyboardAction() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);

  const handleNumberPress = (buttonValue) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "*":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  return (
    <View className="flex justify-end mb-5 min-h-screen">
      <View className="h-[120px] max-w-full mx-2 justify-end self-end">
        <View className="flex-row space-x-3">
          <Text className="text-2xl font-extralight self-end text-[#747477]">
            {secondNumber}
          </Text>
          <Text className="text-2xl text-blue-500 font-medium self-end">
            {operation}
          </Text>
          <FirstNumber firstNumber={firstNumber} result={result} />
        </View>
      </View>
      <View className="flex-row max-w-full">
        <BtnAction title={"C"} onPress={clear} isBlue={false} />
        <BtnAction
          title={"+/-"}
          isBlue={false}
          onPress={() => handleOperationPress("+/-")}
        />
        <BtnAction
          title={"%"}
          isBlue={false}
          onPress={() => handleOperationPress("%")}
        />
        <BtnAction
          title={"÷"}
          isBlue={false}
          onPress={() => handleOperationPress("÷")}
        />
      </View>
      <View className="flex-row max-w-full">
        <BtnAction title={"7"} onPress={() => handleNumberPress("7")} />
        <BtnAction title={"8"} onPress={() => handleNumberPress("8")} />
        <BtnAction title={"9"} onPress={() => handleNumberPress("9")} />
        <BtnAction title={"x"} isBlue={false} />
      </View>
      <View className="flex-row max-w-full">
        <BtnAction title={"4"} onPress={() => handleNumberPress("4")} />
        <BtnAction title={"5"} onPress={() => handleNumberPress("5")} />
        <BtnAction title={"6"} onPress={() => handleNumberPress("6")} />
        <BtnAction
          title={"-"}
          isBlue={false}
          onPress={() => handleOperationPress("-")}
        />
      </View>
      <View className="flex-row max-w-full">
        <BtnAction title={"1"} onPress={() => handleNumberPress("1")} />
        <BtnAction title={"2"} onPress={() => handleNumberPress("2")} />
        <BtnAction title={"3"} onPress={() => handleNumberPress("3")} />
        <BtnAction
          title={"+"}
          isBlue={false}
          onPress={() => handleOperationPress("+")}
        />
      </View>
      <View className="flex-row max-w-full">
        <BtnAction title={"."} onPress={() => handleNumberPress(".")} />
        <BtnAction title={"0"} onPress={() => handleNumberPress("0")} />
        <BtnAction
          title={"⌫"}
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
        <BtnAction title={"="} isBlue={false} onPress={() => getResult()} />
      </View>
    </View>
  );
}
