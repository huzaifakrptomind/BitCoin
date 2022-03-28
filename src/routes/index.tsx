import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "react-native-splash-screen";
import Home from "../screens/Home";
import Boarding from "../screens/Boarding";
import Security from "../screens/Security";
import Seed from "../screens/Seed";
import Biometry from "../screens/Biometry";
import WalletMain from "../screens/WalletMain";
import Coin from "../screens/Coin";
import Receive from "../screens/Receive";
import BottomView from "../screens/BottomView";
import CoinDetails from "../screens/CoinDetails";
import Wallet from "../screens/Wallet";
import { StatusBar } from "react-native";
import { THEME } from "../shared/utils/theme";

const Stack = createNativeStackNavigator();
export default function Routes() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerShown: false,
          })}
        >
          <Stack.Screen name="Boarding" component={Boarding} />
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
    </>
  );
}
