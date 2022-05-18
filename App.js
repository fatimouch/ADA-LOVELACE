import * as React from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import TextScreen from "./screens/TextScreen/TextScreen";
import AdaScreen from "./screens/AdaScreen/AdaScreen";
import ImageScreen from "./screens/ImageScreen/ImageScreen";


// const isDrawerOpen = useDrawerStatus() === 'open';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{title:'Accueil'}} component={HomeScreen} />
        <Stack.Screen name="LOVELACE" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Test() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Pecture" component={ImageScreen} />
      <Drawer.Screen name="Ada" component={AdaScreen} />
      <Drawer.Screen name="Biographie" component={TextScreen} />
    </Drawer.Navigator>
  );
}
