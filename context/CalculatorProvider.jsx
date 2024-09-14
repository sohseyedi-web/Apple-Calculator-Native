import React, { createContext, useContext, useState } from "react";

// Create a context for the calculator
const CalculatorContext = createContext();

// Provider component that manages calculator state and logic
export const CalculatorProvider = ({ children }) => {
  const [expression, setExpression] = useState(""); // Stores the current expression (input sequence)
  const [clearLabel, setClearLabel] = useState("AC"); // Label for the clear button ("AC" or "C")
  const [result, setResult] = useState("0"); // Stores the result of the calculation

  // Function to handle key press events
  const onKeyPress = (key) => {
    switch (key) {
      // Reset the calculator (clear all)
      case "AC":
        setExpression("");
        setResult("0");
        break;

      // Remove the last character of the expression
      case "C":
        setExpression((prev) => prev.slice(0, -1));
        setClearLabel("AC");
        break;

      // Change the sign of the result (positive to negative or vice versa)
      case "+/-":
        if (result !== "0" && result !== "Error") {
          const newResult = (parseFloat(result.replace(".")) * -1).toString();
          setResult(newResult.replace("."));
        }
        break;

      // Calculate percentage
      case "%":
        calculate(expression + " %");
        break;

      // Handle operators (+, -, /, x)
      case "/":
      case "x":
      case "-":
      case "+":
        setExpression((prev) => `${prev} ${key} `);
        break;

      // Calculate the result when "=" is pressed
      case "=":
        calculate(expression);
        break;

      // Handle number and decimal point input
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
        setClearLabel("C"); // Change clear button label to "C" after input
        setExpression((prev) => prev + key); // Append the key to the expression
        break;
    }
  };

  // Function to evaluate the expression and calculate the result
  const calculate = (exp) => {
    let formattedExp = exp.replace(/x/g, "*"); // Replace 'x' with '*' for multiplication
    try {
      let result = eval(formattedExp); // Evaluate the expression
      if (result % 1 !== 0) {
        result = result.toFixed(6); // Limit decimal places to 6 if the result is not an integer
      }

      setResult(result.toString()); // Update the result
    } catch (error) {
      setResult("Error"); // If there is an error, set result to "Error"
    }
  };

  // Return the provider with state and functions available to children components
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

// Hook to access calculator context in child components
export const useCalculator = () => useContext(CalculatorContext);
