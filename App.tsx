import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Boarding from "./src/screens/onBoarding";
import Intro from "./src/screens/Home";
import Home from "./src/screens/Home";
import Security from "./src/screens/Security";
import SplashScreen from "react-native-splash-screen";
import Seed from "./src/screens/Seed";
import Biometry from "./src/screens/Biometry";
import WalletMain from "./src/screens/WalletMain";
import Coin from "./src/screens/Coin";
import Receive from "./src/screens/Receive";
import Wallet from "./src/screens/Wallet";
import BottomView from "./src/screens/BottomView";
import CoinDetails from "./src/screens/CoinDetails";
import Send from "./src/screens/Send";
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
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="Seed" component={Seed} />
        <Stack.Screen name="Biometry" component={Biometry} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="WalletMain" component={WalletMain} />
        <Stack.Screen name="Coin" component={Coin} />
        <Stack.Screen name="Receive" component={Receive} />
        <Stack.Screen name="BottomView" component={BottomView} />
        <Stack.Screen name="CoinDetails" component={CoinDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
