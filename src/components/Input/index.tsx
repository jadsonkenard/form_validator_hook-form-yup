import { TextInput, TextInputProps, StyleSheet } from "react-native";

export type IInput = TextInputProps & {};

export const Input = ({ ...props }: IInput) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 45,
    backgroundColor: "#e2e8f0",
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 16,
    fontWeight: '600'
  },
});
