import { Control, Controller, FieldError } from "react-hook-form";
import { Input, IInput } from "../Input";
import { Text, StyleSheet, View } from "react-native";

type Props = IInput & {
  control: Control<any>;
  name: string;
  error?: FieldError;
  label: string;
};

export const InputControl = ({
  control,
  name,
  error,
  label,
  ...props
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...props} />
        )}
      />
      {error ? (
        <Text style={styles.error}>{error.message}</Text>
      ) : (
        <Text style={styles.error}></Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
  },
  label: {
    fontSize: 16
  },
  error: {
    color: "red",
  },
});
