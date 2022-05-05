import {StyleSheet, Text, View, Image, SafeAreaView, ActivityIndicator} from "react-native";
import React from "react";
import { Logincontext } from "../../navigation";
import { MyTextInput, MyBoton2 } from "../../components";
import axios from "axios";

const ImagenPrincipal = require('../../assets/logo.png')
const ImagenSecundaria = require('../../assets/pie.png')

  const Login = ({navigation}) => {

  const { setIsLoggedIn } = React.useContext(Logincontext);

  const [Correo, setCorreo] = React.useState("");
  const [Contraseña, setContraseña] = React.useState("")
  const [Loading, setLoading] = React.useState(false);



  const enviarFormulario = () => {
    if(Correo === ""){
      return alert("Necesita llenar el campo del correo")
    }if(Contraseña === ""){
      return alert("Necesita llenar el campo de contraseña")
    }
    enviarUsuario();
  };

  const enviarUsuario = async () =>{
    try {
      setLoading(true);
      const response = await axios.post(
        "https://get-talent-equipo17-back.herokuapp.com/auth/signin",
        { email: Correo, password: Contraseña }
        );
        setLoading(false);
        setIsLoggedIn (true);
    } catch (error) {
        setLoading(false);
        console.error(error);
        //alert ("Despues de 3 intentos, tu cuenta será bloqueada");
        return <Text style= {styles.texterror}>*Correo o contraseña incorrecto</Text>
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.space}>
      
      <Image
        style={styles.logo}
        source={ImagenPrincipal}
      />

      <Text style={styles.text}> INICIAR SESIÓN </Text>

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



      <Text style={styles.text4} onPress={() => navigation.navigate("Recuperar Contraseña")}> ¿Olvidaste tu contraseña? </Text>
     
      <View>
        {Loading ? (
          <ActivityIndicator/>
        ) : (
          <MyBoton2 text="Iniciar sesión" onPress={enviarFormulario} />
        )}
      </View>

      <Image
        style={styles.logo2}
        source={ImagenSecundaria}
      />

      <Text style={styles.text4} onPress={() => navigation.navigate("Registro")}> ¿Eres nuevo en Get Talent? Registrate </Text>
      </View>
    </SafeAreaView>
  );
}; 

const styles = StyleSheet.create({
  container: {
      flex: 1,

  },
  //miBotonContener: {
      //flexDirection: "row",
      //justifyContent: "space-between",
      //alignSelf: "center",

  //},
  text: {
      fontSize: 30,
      fontWeight: "normal",
      marginTop: 50,
      marginVertical: 50,
      color: "#FFF",
      alignSelf: "center",

  },
  textL: {
      fontSize: 20,
      fontWeight: "bold",
      paddingHorizontal: 40,
      color: "#DE108D",
  },
  logo: {
    height: 90,
    width: 90,
    alignSelf: "center",
    marginTop: 50,
  },
  logo2: {
    height: 200,
    width: 400,
    marginTop: 40,
    alignSelf: "center",
  },
  text4: {
    fontSize: 14,
    fontWeight: "normal",
    alignSelf: "center",
    color: "#ffff",
    margin: 30,
  },
texterror: {
  fontSize: 14,
  color: "#E83845",
},
  space: {
       
    paddingHorizontal: 40,
    backgroundColor: "#393C8F",
  },
});

export default Login;
