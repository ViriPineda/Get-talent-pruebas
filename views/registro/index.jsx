import {StyleSheet, View, Text, Image, SafeAreaView, ActivityIndicator} from "react-native"; //Text
import React from "react";
import { Logincontext} from "../../navigation";
import { MyTextInput, MyBoton } from "../../components";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";

const ImagenPrincipal = require('../../assets/logo.png')


    const Registro = ({navigation}) => { // componente, siempre va el nombre con mayuscula

    const {setIsLoggedIn} = React.useContext(Logincontext)

    const [Correo, setCorreo] = React.useState("")
    const [Contraseña, setContraseña] = React.useState("")
    const [ConfiContraseña, setConfiContraseña] = React.useState("");
    const [Loading, setLoading] = React.useState(false);
    const [TipoUsuario, setTipoUsuario] = React.useState("default");
    const [OnePicker, setOnePicker] = React.useState(false);
    const [PickerItems, setPickerItems] = React.useState([
        {
            label: "solicitante",
            value: "solicitante",
        },
        {
            label: "empleador",
            value: "empleador",
        },
    ]);


    const reg =/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W]).{6,20}$/;
    const enviarFormulario = () => {
        if (Correo === "") {
            return alert("Necesita llenar el campo del Correo");
          }
        if (!reg.test(Contraseña)){
            return alert("Ingresa contraseña Valida (6 a 20 caracteres, 1 Mayuscula, 1 Numero, 1 caracter)");
        }
        if (ConfiContraseña != Contraseña) {
            return alert("Las contraseñas no son iguales");
          }
        if (TipoUsuario === "default") {
              return alert("Selecciona tu tipo de usuario");
          }
          enviarUsuario();
    };

    const enviarUsuario = async () => {
        try{
            setLoading(true);
            const response = await axios.post(
                "https://get-talent-equipo17-back.herokuapp.com/auth/signup",
                { email: Correo, password: Contraseña, Usuario: TipoUsuario }
            );
            setLoading(false);
            setIsLoggedIn (true);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }

    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.space}>
            <Text style={styles.text}> REGISTRO </Text>

            <Image
                style={styles.logo}
                source={ImagenPrincipal}
            />

            <MyTextInput 
                label="Correo electrónico"
                place="Ingresa tu Correo Electrónico"
                value = {Correo}
                setValue = {setCorreo}
            />
            <MyTextInput 
                label="Contraseña"
                place="Ingresa tu Contraseña"
                security value = {Contraseña}
                setValue = {setContraseña}
            />
            <MyTextInput
                label="Confirmar contraseña"
                place="Ingresa de nuevo tu contraseña"
                security
                value={ConfiContraseña}
                setValue={setConfiContraseña}
            />
            
            <Text style={styles.text3}> Tipo de Usuario </Text>

            <DropDownPicker style={styles.picker}
               
                open={OnePicker}
                value={TipoUsuario}
                items={PickerItems}
                setOpen={setOnePicker}
                setValue={setTipoUsuario}
                setItems={setPickerItems}
                
            />
            <View style={styles.miBotonContener}>
                {Loading ? (
                    <ActivityIndicator/>
                ) : (<MyBoton text="Registrarme" onPress={enviarFormulario} />
                )}
            </View>

            <Text style={styles.text2}>
                ¿Ya tienes una cuenta? 
            </Text>
      
            <Text style={styles.textL} onPress={() => navigation.navigate("Login")}> Entrar a mi cuenta </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
       // flexDirection: "column", //ACOMODA A LAS VISTAS DE ARRIBA HACIA ABAJO 'ROW' ES DE IZQUIERDA A DERECHA
        //alignItems: 'center', //ALINEA EL CONTENIDO DE ARRIBA A ABAJO
        //justifyContent: 'center', //ALINEA EL CONTENIDO DE IZQUIERDA A DERECHA
    },
    miBotonContener: {
       marginTop: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: "normal",
        height: 40,
        alignSelf: "center",
        color: "#FFF",
        marginTop: 20,

    },
    textL: {
        fontSize: 15,
        fontWeight: "normal",
        color: "#DE108D",
        alignSelf: "center",
        //margin: 20,

    },
    text2: {
        fontSize: 15,
        fontWeight: "normal",
        paddingHorizontal: 40,
        color: "#ffff",
        alignSelf: "center",
        margin: 35,
        marginTop: 10,

    },
    logo: {
        height: 90,
        width: 100,
        alignSelf: "center",
        margin: 10,

    },
    picker: {
        borderRadius: 8,
        backgroundColor: "#ffff",
        borderColor: "#89C7F3",
        borderWidth: 3,
        borderBottomWidth: 3,
        //marginStart: 40,
        //marginRight: 40,

    },
    text3:{
        fontSize: 20,
        fontWeight: "normal",
        color: "#ffff",
        marginTop: 20,

    },
    space: {
       
        paddingHorizontal: 40,
        backgroundColor: "#393C8F",

    },

})
    
export default Registro