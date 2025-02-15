import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ROUTES from "../index";
import Notes from "../../screens/Home/Notes";
import colors from "../../data/styling/colors";
import NoteDetails from "../../screens/Home/NoteDetails";
const Stack = createNativeStackNavigator();

const HomeNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.HOME.NOTES}
        component={Notes}
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitle: "All Notes",
          headerTitleStyle: {
            color: colors.white,
            fontWeight: "bold",
            fontSize: 20,
          },
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name={ROUTES.HOME.NOTE_DETAILS}
        component={NoteDetails}
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitle: "Note Details",
          headerTitleStyle: {
            color: colors.white,
            fontWeight: "bold",
            fontSize: 20,
          },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNav;

const styles = StyleSheet.create({});
