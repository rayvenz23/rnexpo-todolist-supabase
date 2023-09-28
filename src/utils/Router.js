import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Home,
  Login,
  Register,
  NewTodo,
} from '../screens';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={stackNavigatorNavbar} >
        <Stack.Group >
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login', }} />
          <Stack.Screen name="Register" component={Register} options={{ title: 'Register', }} />
          <Stack.Screen name="Home" component={Home} options={{ title: 'To-do List', }} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="NewTodo" component={NewTodo} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const stackNavigatorNavbar = {
  headerStyle: {
    backgroundColor: colors.bg1,
    tintColor: colors.white,
  },
  headerTitleStyle: {
    fontSize: 30,
    color: colors.white,
  },
  headerTintColor: colors.white,
};

export default Router;