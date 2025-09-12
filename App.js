import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer} from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";

import ListarTareas from './src/Screens/ListarTareas';
import CrearTarea from './src/Screens/CrearTarea';
import EditarTarea from './src/Screens/EditarTarea';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListarTareas">
          <Stack.Screen
            name="ListarTareas"
            component={ListarTareas}
            options={{ title: 'Listar Tareas'}}
          />
          <Stack.Screen
            name="CrearTarea"
            component={CrearTarea}
            options={{ title: 'Crear Tarea'}}
          />
          <Stack.Screen
            name="EditarTarea"
            component={EditarTarea}
            options={{ title: 'Editar Tarea'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App