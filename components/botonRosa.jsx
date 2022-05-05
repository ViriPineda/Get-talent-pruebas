
import {TouchableOpacity, StyleSheet, Text} from "react-native";

const MyBoton2= ({text = "texto por defecto", onPress = null }) =>{

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
    backgroundColor: "#DE108D",
    borderRadius: 10,
    height: 50,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

})

export default MyBoton2
