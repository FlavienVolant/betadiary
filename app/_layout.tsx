import AddClimbScreen from "@/src/screens/AddClimScreen";
import HomeScreen from "@/src/screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { User, createUser } from "../src/domain/user";

export type RootStackParamList = {
  Home: undefined;
  AddClimb: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Layout() {
  const [user] = useState<User>(createUser());

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ title: "BetaDiary" }}>
        {(props) => <HomeScreen {...props} user={user} />}
      </Stack.Screen>
      <Stack.Screen name="AddClimb" options={{ title: "Ajouter une voie" }}>
        {(props) => <AddClimbScreen {...props} user={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}