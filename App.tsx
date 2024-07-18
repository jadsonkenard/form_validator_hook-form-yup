import {  View, StyleSheet } from "react-native";
import FormRegister from "./src/components/Form";


export default function App(){
  return(
    <View style={styles.container}>
    <FormRegister/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})