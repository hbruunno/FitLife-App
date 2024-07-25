import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTabNavigation from './maintab/MainTabNavigation';
import Inicio from './inicio/Inicio';
import Login from './login/Login';
import CadastrarAluno from './cadastroaluno/CadastrarAluno';
import HomeScreen from './homeScreen/HommeScreen';
import 'react-native-gesture-handler';
import AlunoPagamento from './pagamento/AlunoPagamento';
import Pagamento from './pagamento/Pagamento';


import ListarAluno from './listaraluno/ListarAluno';



//deletar text
import 'react-native-gesture-handler';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login"  screenOptions={{ headerShown: false }}>   
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Main' component={MainTabNavigation}/>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name="CadastrarAluno" component={CadastrarAluno} />
        <Stack.Screen name="ListarAluno" component={ListarAluno} />           
        <Stack.Screen name="Pagamento" component={Pagamento} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

