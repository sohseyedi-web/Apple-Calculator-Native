import { TouchableOpacity, Text } from "react-native";

const BtnAction = ({ title, isBlue = true, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      className={`w-[72px] h-[72px] flex items-center justify-center rounded-3xl m-2 ${
        isBlue ? "bg-[#4b5efc]" : "bg-[#4E505F]"
      }`}
      onPress={onPress}
    >
      <Text className={`text-3xl text-white`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BtnAction;
