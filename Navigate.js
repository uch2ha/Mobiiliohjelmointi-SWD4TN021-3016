import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Calculator from "./Calculator";
import History from "./History";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{ title: "Calculator" }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{ title: "History" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
