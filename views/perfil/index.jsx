import{Text, View} from "react-native";
import React from "react";
import { Logincontext } from "../../navigation";

const Perfil = () => {
    const {setIsLoggedIn} = React.useContext(Logincontext)
    return (
        <View>
            <Text> Hola este es tu perfil</Text>
            <Text onPress={() => setIsLoggedIn(false)}> Salir </Text>
        </View>
    );
};

export default Perfil