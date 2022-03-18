import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Boarding from "./src/screens/onBoarding";
import Intro from "./src/screens/Home";
import Home from "./src/screens/Home";
import Security from "./src/screens/Security";
import SplashScreen from "react-native-splash-screen";
const Stack = createNativeStackNavigator();

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="onBoarding" component={Boarding} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Security" component={Security} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
