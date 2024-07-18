import { TextInput, TextInputProps, StyleSheet } from "react-native"

export type IInput = TextInputProps & {
    // value?: string;
}

export const Input = ({value, ...props}: IInput) => {
    return(
        <>
        <TextInput style={styles.input} {...props}/>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: 300,
        height: 45,
        marginVertical: 6
    }
})