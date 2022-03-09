import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import Locations from "../pages/Locations";
import Episodes from "../pages/Episodes";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Characters: undefined;
      Locations: undefined;
      Episodes: undefined;
    }
  }
}

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Characters" component={Characters} />
      <Stack.Screen name="Locations" component={Locations} />
      <Stack.Screen name="Episodes" component={Episodes} />
    </Stack.Navigator>
  );
};

export default Routes;
