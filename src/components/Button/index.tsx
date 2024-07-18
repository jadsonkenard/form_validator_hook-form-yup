import { TouchableOpacity, Text, TouchableOpacityProps, StyleSheet } from "react-native"

type IButton = TouchableOpacityProps & {
    title: string
}

export const Button = ({title, ...props}: IButton) => {
    return(
        <TouchableOpacity style={styles.button}{...props}>
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        backgroundColor: '#15803d',
        height: 45,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8
    },
    textButton:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF'
    }
})