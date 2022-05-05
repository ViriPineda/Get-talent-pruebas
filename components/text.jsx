
import {Text, StyleSheet} from "react-native";

const MyText= ({children}) =>{
    
    return(
        
        <Text style={styles.text}>{children}</Text>
    )
}

const styles= StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: 40,
        color: "#FFF"

    }
})

export default MyText
