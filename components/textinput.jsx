
import {TextInput, StyleSheet, Text, View} from "react-native";

const MyTextInput= ({label = "", place = "", security = false, value = "", setValue = null}) =>{
    
    const changeText = text => setValue(text)
    
    return(
        <View>
            <Text style = {styles.textlabel}>
                {label}
            </Text>
            <TextInput type="Text" placeholder={place} style={styles.textinput} secureTextEntry = {security} value={value} onChangeText={changeText}/>
        </View>
    )
}

const styles= StyleSheet.create({
    textinput: {
        fontSize: 18,
        height: 40,
        backgroundColor: "#ffff",
        borderColor: "#89C7F3",
        borderRadius: 8,
        borderWidth: 3,
        borderBottomWidth: 3,
        paddingHorizontal: 15,
    },
    textlabel: {
        fontSize: 20,
        fontWeight: "normal",
        color: "#ffff",
        marginVertical: 15,
    
    }
})

export default MyTextInput