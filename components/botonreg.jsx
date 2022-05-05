
import {TouchableOpacity, StyleSheet, Text} from "react-native";

const MyBoton= ({text = "texto por defecto", onPress = null }) =>{

return(
    
    <TouchableOpacity style = {styles.Touchable} onPress = {onPress}>
        <Text style={styles.boton}>
            {text}
        </Text>
    </TouchableOpacity>
)
}

const styles= StyleSheet.create({
boton: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",

},

Touchable: {
   
    backgroundColor: "#20F26F",
    borderRadius: 10,
    height: 50,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
},

})

export default MyBoton