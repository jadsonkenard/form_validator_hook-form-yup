import { Control, Controller, FieldError } from "react-hook-form";
import { Input, IInput } from "../Input";
import { Text, StyleSheet } from "react-native";

type Props = IInput & {
  control: Control<any>;
  name: string;
  error?: FieldError;
};

export const InputControl = ({
  control,
  name,
  error,
  ...props
}: Props) => {
  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
