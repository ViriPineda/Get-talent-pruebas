import{Text, View} from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registro from "../views/registro";
import Login from "../views/login";
import Perfil from "../views/perfil";   //pasarlo adentro de Login 
//import VistaGeneral from "../views/vista_general";
import RecuperarContraseña from "../views/recuperar_contra";

const MiNavegador = createNativeStackNavigator();

export const Logincontext = React.createContext({
  isloggedin: false,
  setIsLoggedIn: null,
});

const Navigator = () => {
  const [isloggedin, setIsLoggedIn] = React.useState(false);

  return (
    <Logincontext.Provider value={{ isloggedin, setIsLoggedIn }}>
      <NavigationContainer>
        <MiNavegador.Navigator>
          {isloggedin ? (
            <MiNavegador.Group>
              <MiNavegador.Screen name="Perfil" component={Perfil} />
            </MiNavegador.Group>
          ) : (
            <MiNavegador.Group>
              <MiNavegador.Screen name="Registro" component={Registro} />
              <MiNavegador.Screen name="Login" component={Login} />
              <MiNavegador.Screen name="Recuperar Contraseña" component={RecuperarContraseña} />
            </MiNavegador.Group>
          )}
        </MiNavegador.Navigator>
      </NavigationContainer>
    </Logincontext.Provider>
  );
};

export default Navigator;
