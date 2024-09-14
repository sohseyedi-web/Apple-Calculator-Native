import React, { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [expression, setExpression] = useState("");
  const [clearLabel, setClearLabel] = useState("AC");
  const [result, setResult] = useState("12345678901123561966");

  const onKeyPress = (key) => {
    switch (key) {
      case "AC":
        setExpression("");
        setResult("0");
        break;
      case "C":
        setExpression((prev) => prev.slice(0, -1));
        setClearLabel("AC");
        break;
      case "+/-":
        if (result !== "0" && result !== "Error") {
          const newResult = (parseFloat(result.replace(".")) * -1).toString();
          setResult(newResult.replace("."));
        }
        break;
      case "%":
        calculate(expression + " %");
        break;
      case "/":
      case "x":
      case "-":
      case "+":
        setExpression((prev) => `${prev} ${key} `);
        break;
      case "=":
        calculate(expression);
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case ",":
        setClearLabel("C");
        setExpression((prev) => prev + key);
        break;
    }
  };

  const calculate = (exp) => {
    let formattedExp = exp.replace(/x/g, "*").replace(/,/g, ".");
    try {
      let result = eval(formattedExp);
      setResult(result.toString().replace(".", ","));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <CalculatorContext.Provider
      value={{
        expression,
        result,
        clearLabel,
        onKeyPress,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => useContext(CalculatorContext);
