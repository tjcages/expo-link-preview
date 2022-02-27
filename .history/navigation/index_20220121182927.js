import React, { useState } from "react";
import firebase from "firebase";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import LinkingConfiguration from "./linking/LinkingConfiguration";

import Home from "../screens/Home";
import Login from "../screens/Login";

import Settings from "../screens/Settings";
import Appearance from "../screens/settings/Appearance";
import NotFoundScreen from "../screens/NotFoundScreen";

export default function Navigation({ colorScheme }) {
  const [user, setUser] = useState(null);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  function render() {
    return user ? (
      // user is signed in
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <RootNavigator />
      </NavigationContainer>
    ) : (
      // no user found, user isn't signed in
      <Login />
    );
  }

  return render();
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Root"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          cardStyle: {
            backgroundColor: "transparent",
          },
        }}
      >
        <Stack.Screen name="Settings" component={SettingsNavigator} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SettingsStack.Group
        screenOptions={{
          presentation: "modal",
          cardStyle: {
            backgroundColor: "transparent",
          },
        }}
      >
        <SettingsStack.Screen name="Settings" component={Settings} />
        <SettingsStack.Screen name="Appearance" component={Appearance} />
      </SettingsStack.Group>
    </SettingsStack.Navigator>
  );
}
