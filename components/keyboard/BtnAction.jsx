import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const BtnAction = ({
  w = 0,
  h = null,
  textColor = "#fff",
  zero = true,
  title,
  bg = "#333333",
}) => {
  const height = h ?? w;
  const width = w;
  const alignItem = zero ? "center" : "flex-start";
  const pl = zero ? 0 : 26;

  return (
    <View style={[styles.wrapper, { width: width, height: height }]}>
      <TouchableOpacity
        style={[
          styles.btn,
          { backgroundColor: bg, alignItems: alignItem, paddingLeft: pl },
        ]}
      >
        <Text style={{ color: textColor, fontSize: 25 }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BtnAction;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  btn: {
    borderRadius: 100,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});
