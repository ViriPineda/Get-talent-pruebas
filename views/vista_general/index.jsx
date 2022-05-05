import{Text, View} from "react-native";
import React from "react";
import { Logincontext } from "../../navigation";

const VistaGeneral = () => {
    const {setIsLoggedIn} = React.useContext(Logincontext)
    return (
        <View>
            <Text> Vista General </Text>
            <Text onPress={() => setIsLoggedIn(false)}> Salir </Text>
        </View>
    );
};

export default VistaGeneral