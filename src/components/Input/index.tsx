import { TextInput, TextInputProps, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export type IInput = TextInputProps & {
 icon: keyof typeof Ionicons.glyphMap;
};

export const Input = ({ icon, ...props }: IInput) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props}/>
      <Ionicons name={icon} size={18} color={'#0f172a'} style={styles.icon}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12
  },
  input: {
    width: 300,
    height: 45,
    backgroundColor: "#e2e8f0",
    borderRadius: 8,
    paddingHorizontal: 30,
    fontSize: 16,
    fontWeight: "600"
  },
  icon: {
    position: 'absolute',
    left: 6
  }
});
